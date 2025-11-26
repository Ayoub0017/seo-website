"use client"

import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import Link from "next/link"

export function LanguageSwitcher() {
  const pathname = usePathname()
  
  // Determine current language and alternate language
  const isFrench = pathname.startsWith('/fr')
  const currentLanguage = isFrench ? 'fr' : 'en'
  const alternateLanguage = isFrench ? 'en' : 'fr'
  
  // Create alternate path
  let alternatePath = ''
  if (isFrench) {
    // Remove /fr prefix for English version
    alternatePath = pathname.replace(/^\/fr/, '') || '/'
  } else {
    // Add /fr prefix for French version
    alternatePath = `/fr${pathname === '/' ? '' : pathname}`
  }

  return (
    <Button
      variant="outline"
      size="sm"
      asChild
      className="flex items-center gap-2"
    >
      <Link href={alternatePath}>
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">
          {currentLanguage === 'en' ? 'Français' : 'English'}
        </span>
        <span className="sm:hidden">
          {currentLanguage === 'en' ? 'FR' : 'EN'}
        </span>
      </Link>
    </Button>
  )
}