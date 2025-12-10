import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Supported languages
const supportedLanguages = ['en', 'fr']
const defaultLanguage = 'en'

// Function to get the user's preferred language from Accept-Language header
function getPreferredLanguage(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLanguage

  // Parse Accept-Language header and find the first supported language
  const languages = acceptLanguage.split(',').map(lang => {
    const [language, quality = '1'] = lang.split(';')
    return {
      language: language.trim().split('-')[0], // Get base language code
      quality: parseFloat(quality.split('=')[1] || '1')
    }
  })

  // Sort by quality and find the first supported language
  const sortedLanguages = languages.sort((a, b) => b.quality - a.quality)
  
  for (const lang of sortedLanguages) {
    if (supportedLanguages.includes(lang.language)) {
      return lang.language
    }
  }

  return defaultLanguage
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Redirect /en to / (Canonical URL for English)
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const newUrl = new URL(
      pathname.replace(/^\/en/, ''),
      request.url
    )
    return NextResponse.redirect(newUrl)
  }

  // 2. Check if the path already has a language prefix (only check for non-default languages, e.g. 'fr')
  const hasOtherLanguagePrefix = supportedLanguages
    .filter(lang => lang !== defaultLanguage)
    .some(lang => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`)

  if (hasOtherLanguagePrefix) {
    return NextResponse.next()
  }

  // 3. Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // 4. Handle root path '/'
  // If user prefers French, redirect to /fr. Otherwise stay at / (English).
  const preferredLanguage = getPreferredLanguage(request)
  if (preferredLanguage === 'fr') {
     // Check if we are already at root to avoid infinite loops if logic is flawed, 
     // but here logic says we are at root or a path without prefix.
     // However, we only trigger this redirect if we are NOT already on a FR path (checked in step 2).
     
     // Redirect to FR version
     const newUrl = new URL(`/fr${pathname}`, request.url)
     return NextResponse.redirect(newUrl)
  }

  // Default behavior: Serve English (at root), do nothing.
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}