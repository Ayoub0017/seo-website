import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Brain, Network, BookOpen, Map, FileText, Code2, Lightbulb } from "lucide-react"
import Link from "next/link"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Services",
  description: "Comprehensive SEO services including on-page, off-page, technical, semantic, local, and e-commerce SEO. Build lasting search presence through strategic optimization and content marketing.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/services/seo",
    languages: {
      "en-US": "https://ayoubouarain.com/services/seo",
    },
  },
  openGraph: {
    title: "SEO Services - Ayoub Ouraian",
    description: "Comprehensive SEO services including on-page, off-page, technical, semantic, local, and e-commerce SEO. Build lasting search presence through strategic optimization and content marketing.",
    url: "https://ayoubouarain.com/services/seo",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "SEO Services by Ayoub Ouraian",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services - Ayoub Ouraian",
    description: "Comprehensive SEO services including on-page, off-page, technical, semantic, local, and e-commerce SEO. Build lasting search presence through strategic optimization and content marketing.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
  },
}

export default function SEOServicesPage() {
  const seoServices = [
    {
      title: "On-Page SEO",
      description: "Optimize your website's content, structure, and HTML elements to improve search engine rankings and user experience",
      features: ["Keyword optimization", "Meta tags optimization", "Content structure", "Internal linking strategy"],
      icon: FileText
    },
    {
      title: "Off-Page SEO",
      description: "Build authority and trust through strategic link building, brand mentions, and external optimization techniques",
      features: ["Link building campaigns", "Brand mention optimization", "Social signals", "Authority building"],
      icon: Network
    },
    {
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better crawling, indexing, and overall search performance",
      features: ["Site speed optimization", "Mobile optimization", "Schema markup", "Crawlability improvements"],
      icon: Code2
    },
    {
      title: "Content SEO",
      description: "Focus on topics and entities rather than keywords to build comprehensive topical authority and contextual relevance",
      features: ["Topic cluster development", "Entity optimization", "Contextual content", "Knowledge graph integration"],
      icon: Brain
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your geographic area through targeted local optimization",
      features: ["Google My Business optimization", "Local citations", "Review management", "Local content strategy"],
      icon: Map
    },
    {
      title: "E-commerce SEO",
      description: "Specialized SEO strategies for online stores to increase product visibility and drive more sales",
      features: ["Product page optimization", "Category structure", "Shopping feed optimization", "Conversion optimization"],
      icon: Target
    }
  ]

  const seoApproach = [
    {
      title: "Comprehensive Strategy",
      description: "We develop holistic SEO strategies that cover all aspects from technical foundations to content optimization."
    },
    {
      title: "Results-Driven Approach",
      description: "Every decision is backed by thorough analysis and performance data to ensure maximum ROI."
    },
    {
      title: "White-Hat Techniques",
      description: "We use only ethical, sustainable SEO practices that comply with search engine guidelines."
    },
    {
      title: "Continuous Optimization",
      description: "SEO is an ongoing process. We continuously monitor, analyze, and optimize for better results."
    }
  ]

  const benefits = [
    "Increase organic traffic and search visibility",
    "Improve search engine rankings across all SEO types",
    "Build long-term sustainable online presence",
    "Higher conversion rates from targeted traffic",
    "Better user experience and site performance",
    "Establish authority and trust in your industry",
    "Dominate local and global search results",
    "Future-proof your business against algorithm changes"
  ]

  return (
    <>
      {/* Schema Markup for SEO Service */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "SEO Services",
          description: "Comprehensive SEO services including on-page, off-page, technical, semantic, local, and e-commerce SEO. Build lasting search presence through strategic optimization and content marketing.",
          provider: ayoubPersonData,
          areaServed: "Worldwide",
          serviceType: "Search Engine Optimization",
          offers: {
            description: "Professional SEO services including on-page optimization, technical SEO, link building, local SEO, and comprehensive SEO strategy"
          }
        }} 
      />
      
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <Search className="w-4 h-4 mr-2" />
              SEO Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">SEO</span> Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive SEO services covering all aspects of search optimization. From technical foundations to content strategy, 
              we help you dominate search results and drive sustainable organic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/blog">Learn About SEO</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our SEO Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use proven SEO methodologies and cutting-edge techniques to deliver sustainable results 
              that drive long-term growth for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {seoApproach.map((approach, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    {approach.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {approach.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              SEO Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive SEO strategies covering all aspects of search optimization, from technical foundations 
              to content marketing, designed to drive sustainable organic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose Our SEO Services?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive SEO approach combines technical expertise with strategic content marketing 
                to deliver sustainable results that adapt to search engine evolution and user behavior changes.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Search className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Technical SEO</h3>
                <p className="text-muted-foreground">Site optimization and performance</p>
              </Card>
              <Card className="text-center p-6">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">On-Page SEO</h3>
                <p className="text-muted-foreground">Content and keyword optimization</p>
              </Card>
              <Card className="text-center p-6">
                <Network className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Link Building</h3>
                <p className="text-muted-foreground">Authority and trust development</p>
              </Card>
              <Card className="text-center p-6">
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Analytics</h3>
                <p className="text-muted-foreground">Performance tracking and insights</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our SEO Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to comprehensive SEO optimization and sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Audit & Analysis</h3>
              <p className="text-muted-foreground">Comprehensive SEO audit and competitive analysis</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Strategy Development</h3>
              <p className="text-muted-foreground">Create tailored SEO strategy and content plan</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Optimization</h3>
              <p className="text-muted-foreground">Technical, on-page, and content optimization</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Monitoring</h3>
              <p className="text-muted-foreground">Track performance and continuous improvement</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Boost Your SEO?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your SEO goals and create a comprehensive strategy that drives sustainable organic growth 
            and establishes your online presence across all search channels.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/contact">
              Start Your SEO Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
    </>
  )
}