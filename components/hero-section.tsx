import { Button } from "@/components/ui/button"
import { ArrowRight, Search, PenTool, Code, CheckCircle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            SEO and Content Marketing <span className="text-primary">Specialist</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            I help businesses grow their online presence through strategic SEO, compelling content marketing, and modern
            web development solutions.
          </p>

          <div className="flex justify-center mb-16">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Services Section */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">My Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* SEO Services Card */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-6">SEO Services</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Semantic SEO
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Ecommerce SEO
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Local SEO
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  International SEO
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Technical SEO
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  SEO Audits
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/services/seo">Learn More</Link>
              </Button>
            </div>

            {/* Content Marketing Card */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                <PenTool className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Content Marketing</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Content Strategy Development
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Blog Writing & Management
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Social Media Content
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Email Marketing Campaigns
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Content Calendar Planning
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Performance Analytics
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/services/content-marketing">Learn More</Link>
              </Button>
            </div>

            {/* Web Development Card */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Web Development</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Next.js Development
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Headless CMS Integration
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Sanity & Contentful
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Performance Optimization
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  SEO-Optimized Architecture
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Security Best Practices
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/services/web-development">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
