import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Navigation() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      subItems: [
        { label: "SEO Services", href: "/services/seo" },
        { label: "Google Ads", href: "/services/google-ads" },
        { label: "Meta Ads", href: "/services/meta-ads" },
        { label: "Cold Emailing", href: "/services/cold-emailing" },
      ]
    },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ]

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
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-all duration-200 font-medium px-3 py-2 rounded-md hover:bg-muted/50"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="relative">
                    <span className="text-muted-foreground hover:text-foreground transition-all duration-200 font-medium cursor-pointer px-3 py-2 rounded-md hover:bg-muted/50 inline-block">
                      {item.label}
                    </span>
                    {/* Static dropdown for server-side rendering */}
                    <div className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.subItems?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 rounded-md mx-2"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
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
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 rounded-md mx-2"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <>
                          <div className="px-4 py-3 text-sm font-medium text-foreground border-b border-border/30 mx-2">
                            {item.label}
                          </div>
                          {item.subItems?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 rounded-md mx-2"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </details>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="https://calendly.com/ab-ouarain/30min" target="_blank" rel="noopener noreferrer">
              <Button className="px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200" style={{backgroundColor: '#1447E6', color: 'white'}}>
                Free Strategy Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
