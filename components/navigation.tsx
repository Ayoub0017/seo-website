import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavigationClient } from "@/components/navigation-client"
import Image from "next/image"

export function Navigation() {
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

  return (
    <NavigationClient navItems={navItems}>
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/ayoub-ouarain-logo.png"
            alt="Ayoub Ouraian Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="font-bold text-xl text-foreground">Ayoub Ouraian</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
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
              <>
                <span className="text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer">
                  {item.label}
                </span>
                {item.subItems && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.subItems.map((subItem, subIndex) => (
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
                )}
              </>
            )}
          </div>
        ))}
        
        <Button asChild>
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </NavigationClient>
  )
}
