import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavigationClient } from "@/components/navigation-client"
import Image from "next/image"

export function Navigation() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      subItems: [
        { label: "SEO Optimization", href: "/services/seo" },
        { label: "Content Marketing", href: "/services/content-marketing" },
        { label: "Web Dev with Next.js", href: "/services/web-development" },
      ]
    },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Server-side navigation (visible without JS) */}
      <nav 
        data-server-nav
        className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
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
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="relative">
                    <span className="text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer">
                      {item.label}
                    </span>
                    {/* Static dropdown for server-side rendering */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
                      <div className="py-1">
                        {item.subItems?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
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
              <summary className="list-none cursor-pointer p-2">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span className="block w-full h-0.5 bg-foreground"></span>
                  <span className="block w-full h-0.5 bg-foreground"></span>
                  <span className="block w-full h-0.5 bg-foreground"></span>
                </div>
              </summary>
              <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50">
                <div className="py-1">
                  {navItems.map((item, index) => (
                    <div key={index}>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <>
                          <div className="px-4 py-2 text-sm font-medium text-foreground border-b border-border">
                            {item.label}
                          </div>
                          {item.subItems?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
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
            <Link href="/contact">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Enhanced client-side navigation (progressive enhancement) - only loads with JS */}
      <NavigationClient navItems={navItems} />
    </>
  )
}
