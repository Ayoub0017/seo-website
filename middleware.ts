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

  // Check if the path already has a language prefix
  const hasLanguagePrefix = supportedLanguages.some(lang => 
    pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  )

  // If the path already has a language prefix, continue
  if (hasLanguagePrefix) {
    return NextResponse.next()
  }

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Get user's preferred language
  const preferredLanguage = getPreferredLanguage(request)

  // Redirect to the preferred language version
  const newUrl = new URL(`/${preferredLanguage}${pathname}`, request.url)
  return NextResponse.redirect(newUrl)
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