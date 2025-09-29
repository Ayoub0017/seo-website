"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { 
      label: "Services",
      subItems: [
        { href: "/services/semantic-seo", label: "Semantic SEO" },
        { href: "/services/content-marketing", label: "Content Marketing" },
        { href: "/services/web-development", label: "Web Development" }
      ]
    },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/ayoub-ouarain-logo.png"
              alt="Ayoub Ouraian - SEO Specialist"
              width={60}
              height={60}
              className="w-15 h-15"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.href || index} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 ${
                      pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href))
                        ? "text-primary font-medium" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={`cursor-pointer transition-colors duration-200 ${
                      item.subItems && item.subItems.some(sub => pathname === sub.href)
                        ? "text-primary font-medium" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                )}
                {item.subItems && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-md border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                            pathname === subItem.href
                              ? "text-primary font-medium bg-primary/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button asChild className="ml-4">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border">
              {navItems.map((item, index) => (
                <div key={item.href || index}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 transition-colors duration-200 ${
                        pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href))
                          ? "text-primary font-medium bg-primary/10 rounded-md"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="px-3 py-2 text-muted-foreground font-medium">
                      {item.label}
                    </div>
                  )}
                  {item.subItems && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-3 py-2 text-sm transition-colors duration-200 ${
                            pathname === subItem.href
                              ? "text-primary font-medium bg-primary/10 rounded-md"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
