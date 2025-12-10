import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Brain, Network, BookOpen, Map, FileText, Code2, Lightbulb, Star, Users, Clock, Award } from "lucide-react"
import Link from "next/link"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Expert SEO Services - Dominate Search Rankings & Drive Growth",
  description: "Professional SEO services that deliver results. Comprehensive on-page, technical, local, and e-commerce SEO strategies to boost your organic traffic and search rankings.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/services/seo",
    languages: {
      "en-US": "https://ayoubouarain.com/services/seo",
    },
  },
  openGraph: {
    title: "Expert SEO Services - Ayoub Ouraian",
    description: "Professional SEO services that deliver results. Comprehensive on-page, technical, local, and e-commerce SEO strategies to boost your organic traffic and search rankings.",
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
    title: "Expert SEO Services - Ayoub Ouraian",
    description: "Professional SEO services that deliver results. Comprehensive on-page, technical, local, and e-commerce SEO strategies to boost your organic traffic and search rankings.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
  },
}

export default function SEOServicesPage() {
  const seoServices = [
    {
      title: "On-Page SEO",
      description: "Optimize your website's content, structure, and HTML elements to improve search engine rankings and user experience",
      icon: FileText,
      features: ["Keyword research & optimization", "Meta tags optimization", "Content structure & headings", "Internal linking strategy", "Image optimization", "Schema markup implementation"],
      color: "bg-[#1447E6]/10 text-[#1447E6]"
    },
    {
      title: "Technical SEO",
      description: "Improve your website's technical foundation to ensure search engines can crawl, index, and understand your content",
      icon: Code2,
      features: ["Site speed optimization", "Mobile responsiveness", "Core Web Vitals improvement", "XML sitemaps", "Robots.txt optimization", "SSL & security"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Off-Page SEO",
      description: "Build authority and trust through strategic link building and external optimization techniques",
      icon: Network,
      features: ["Link building campaigns", "Guest posting", "Digital PR", "Brand mentions", "Local citations", "Social signals"],
      color: "bg-[#1447E6]/10 text-[#1447E6]"
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your geographic area",
      icon: Map,
      features: ["Google Business Profile optimization", "Local keyword targeting", "NAP consistency", "Local citations", "Review management", "Local content creation"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "E-commerce SEO",
      description: "Specialized SEO strategies for online stores to increase product visibility and sales",
      icon: Target,
      features: ["Product page optimization", "Category page SEO", "Shopping feed optimization", "Product schema markup", "Faceted navigation", "Conversion optimization"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "SEO Strategy & Consulting",
      description: "Comprehensive SEO audits and strategic planning to maximize your organic growth potential",
      icon: Brain,
      features: ["SEO audits & analysis", "Competitor research", "Keyword strategy", "Content planning", "Performance tracking", "ROI optimization"],
      color: "bg-indigo-500/10 text-indigo-600"
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Organic Traffic",
      description: "Drive more qualified visitors to your website through improved search rankings"
    },
    {
      icon: Target,
      title: "Better Conversion Rates",
      description: "Attract users with high purchase intent through targeted keyword optimization"
    },
    {
      icon: BarChart3,
      title: "Long-term ROI",
      description: "Build sustainable organic growth that continues to deliver results over time"
    },
    {
      icon: Award,
      title: "Brand Authority",
      description: "Establish your business as a trusted authority in your industry"
    }
  ]

  const process = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description: "Comprehensive analysis of your current SEO performance, technical issues, and opportunities"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a customized SEO strategy based on your business goals and competitive landscape"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute on-page, technical, and off-page optimizations according to the strategic plan"
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring, reporting, and optimization to maximize results and ROI"
    }
  ]

  return (
    <>
      <SchemaMarkup 
        type="service" 
        data={{
          name: "SEO Services",
          description: "Professional SEO services to improve search rankings and organic traffic",
          provider: ayoubPersonData,
          serviceType: "Search Engine Optimization",
          areaServed: "Worldwide"
        }} 
      />
      
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                <Search className="h-4 w-4 mr-2" />
                SEO Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1447E6] to-purple-600 bg-clip-text text-transparent">
                Search Engine Optimization
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Boost your search rankings, increase organic traffic, and grow your business with comprehensive SEO strategies that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" style={{backgroundColor: '#1447E6', color: 'white'}} asChild>
                  <Link href="https://calendly.com/ab-ouarain/30min">Get Free Strategy Session</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Choose Professional SEO?
              </h2>
              <p className="text-xl text-gray-600">
                SEO is one of the most cost-effective marketing strategies with long-lasting results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Comprehensive SEO Services
              </h2>
              <p className="text-xl text-gray-600">
                Full-spectrum SEO solutions tailored to your business needs and goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoServices.map((service, index) => (
                <Card key={index} className={`${service.color.includes('bg-[#1447E6]') ? 'bg-blue-50 border-blue-200' : service.color.includes('bg-green') ? 'bg-green-50 border-green-200' : service.color.includes('bg-orange') ? 'bg-orange-50 border-orange-200' : service.color.includes('bg-red') ? 'bg-red-50 border-red-200' : 'bg-indigo-50 border-indigo-200'} border-2 hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <service.icon className="h-8 w-8 text-blue-600" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-700">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                My SEO Process
              </h2>
              <p className="text-xl text-gray-600">
                A proven methodology that delivers consistent results for businesses of all sizes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="relative border-2 border-gray-100 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-blue-100">Websites Optimized</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">300%</div>
                <div className="text-blue-100">Average Traffic Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-blue-100">Client Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free strategy session and discover how to improve your search rankings and organic traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" style={{backgroundColor: '#1447E6'}} asChild>
                <Link href="https://calendly.com/ab-ouarain/30min">Get Free Strategy Session</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}