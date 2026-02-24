"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()
  const isFrench = pathname.startsWith('/fr')

  const navItems = isFrench ? [
    { label: "Accueil", href: "#home" },
    { label: "À Propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ] : [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ]

  const ctaText = isFrench ? "Session Stratégique Gratuite" : "Free Strategy Session"

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between bg-background/80 backdrop-blur-sm rounded-lg shadow-sm border border-border/30 px-6 my-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/ayoub-ouarain-logo.png"
              alt="Ayoub Ouraian Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </Link>

          {/* Desktop Navigation Links (visible without JS) */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-all duration-200 font-medium px-3 py-2 rounded-md hover:bg-muted/50"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Links (visible without JS) */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer p-2 rounded-md hover:bg-muted/50 transition-all duration-200">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span className="block w-full h-0.5 bg-foreground rounded-full"></span>
                  <span className="block w-full h-0.5 bg-foreground rounded-full"></span>
                  <span className="block w-full h-0.5 bg-foreground rounded-full"></span>
                </div>
              </summary>
              <div className="absolute right-0 top-full mt-2 w-56 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  {navItems.map((item, index) => (
                    <div key={index}>
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 rounded-md mx-2"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:block">
              <Link href="https://calendly.com/ab-ouarain/30min" target="_blank" rel="noopener noreferrer">
                <Button className="px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200" style={{ backgroundColor: '#1447E6', color: 'white' }}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
