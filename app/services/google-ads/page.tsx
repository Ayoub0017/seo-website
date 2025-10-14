import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MousePointer, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Brain, Zap, DollarSign, Users, Clock, Award, Search, Eye, ShoppingCart, Smartphone } from "lucide-react"
import Link from "next/link"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Ads Management Services - Drive Targeted Traffic & Sales",
  description: "Expert Google Ads management services. Maximize ROI with strategic PPC campaigns, keyword optimization, and conversion tracking. Get more leads and sales today.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/services/google-ads",
    languages: {
      "en-US": "https://ayoubouarain.com/services/google-ads",
    },
  },
  openGraph: {
    title: "Google Ads Management Services - Ayoub Ouraian",
    description: "Expert Google Ads management services. Maximize ROI with strategic PPC campaigns, keyword optimization, and conversion tracking. Get more leads and sales today.",
    url: "https://ayoubouarain.com/services/google-ads",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Google Ads Services by Ayoub Ouraian",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Management Services - Ayoub Ouraian",
    description: "Expert Google Ads management services. Maximize ROI with strategic PPC campaigns, keyword optimization, and conversion tracking. Get more leads and sales today.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
  },
}

export default function GoogleAdsServicesPage() {
  const googleAdsServices = [
    {
      title: "Search Campaigns",
      description: "Capture high-intent users actively searching for your products or services with targeted search ads",
      icon: Search,
      features: ["Keyword research & selection", "Ad copy optimization", "Bid management", "Quality Score improvement", "Negative keyword lists", "Search term analysis"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Display Campaigns",
      description: "Build brand awareness and reach potential customers across Google's vast display network",
      icon: Eye,
      features: ["Audience targeting", "Creative design", "Placement optimization", "Remarketing campaigns", "Responsive display ads", "Performance monitoring"],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Shopping Campaigns",
      description: "Showcase your products directly in search results with optimized Google Shopping ads",
      icon: ShoppingCart,
      features: ["Product feed optimization", "Merchant Center setup", "Shopping campaign structure", "Bid optimization", "Product listing ads", "Performance Max campaigns"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "YouTube Ads",
      description: "Engage audiences with compelling video content across YouTube and Google video partners",
      icon: Smartphone,
      features: ["Video ad creation", "Audience targeting", "Campaign optimization", "View-through conversions", "Brand awareness campaigns", "Action-driven campaigns"],
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Campaign Optimization",
      description: "Continuously improve campaign performance through data-driven optimization strategies",
      icon: TrendingUp,
      features: ["A/B testing", "Conversion tracking", "Landing page optimization", "Bid strategy optimization", "Performance analysis", "ROI improvement"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "PPC Strategy & Consulting",
      description: "Comprehensive Google Ads strategy development and account auditing for maximum results",
      icon: Brain,
      features: ["Account audits", "Competitor analysis", "Strategy development", "Budget planning", "Goal setting", "Performance reporting"],
      color: "bg-indigo-50 border-indigo-200"
    }
  ]

  const benefits = [
    {
      icon: Target,
      title: "Immediate Results",
      description: "Start driving qualified traffic and leads to your website within hours of campaign launch"
    },
    {
      icon: DollarSign,
      title: "Measurable ROI",
      description: "Track every click, conversion, and dollar spent with detailed performance analytics"
    },
    {
      icon: Users,
      title: "Targeted Reach",
      description: "Reach your ideal customers based on demographics, interests, and search behavior"
    },
    {
      icon: Zap,
      title: "Scalable Growth",
      description: "Easily scale successful campaigns to increase traffic and conversions"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Account Setup & Strategy",
      description: "Comprehensive account setup, keyword research, and campaign strategy development"
    },
    {
      step: "02",
      title: "Campaign Creation",
      description: "Build targeted campaigns with optimized ad groups, keywords, and compelling ad copy"
    },
    {
      step: "03",
      title: "Launch & Monitor",
      description: "Launch campaigns and monitor performance with real-time tracking and adjustments"
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Continuously optimize for better performance and scale successful campaigns"
    }
  ]

  const stats = [
    { value: "400%", label: "Average ROI Increase" },
    { value: "65%", label: "Cost Per Click Reduction" },
    { value: "250%", label: "Conversion Rate Boost" },
    { value: "24/7", label: "Campaign Monitoring" }
  ]

  return (
    <>
      <SchemaMarkup data={ayoubPersonData} />
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4">
                <MousePointer className="h-4 w-4 mr-2" />
                Google Ads Expert
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Drive Targeted Traffic with Google Ads
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                Maximize your advertising ROI with expertly managed Google Ads campaigns. From search to shopping, 
                I'll help you reach your ideal customers and drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8" style={{backgroundColor: '#1447E6'}}>
                  <Link href="https://calendly.com/ab-ouarain/30min">Get Free Strategy Session</Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Choose Google Ads?
              </h2>
              <p className="text-xl text-gray-600">
                Google Ads delivers immediate, measurable results that drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-lg">
                    <CardHeader>
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Google Ads Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive Google Ads management across all campaign types and objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {googleAdsServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card key={index} className={`${service.color} border-2 hover:shadow-lg transition-shadow`}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-700">{service.description}</CardDescription>
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
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                My Google Ads Process
              </h2>
              <p className="text-xl text-muted-foreground">
                A proven methodology that delivers consistent results for every campaign.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="text-center border hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Google Ads Results That Speak for Themselves
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">400%</div>
                <p className="text-blue-100">Average ROI Increase</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">65%</div>
                <p className="text-blue-100">Cost Per Click Reduction</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">250%</div>
                <p className="text-blue-100">Conversion Rate Boost</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
                <p className="text-blue-100">Campaign Monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a free strategy session and let's create Google Ads campaigns that drive real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8" style={{backgroundColor: '#1447E6'}}>
                <Link href="https://calendly.com/ab-ouarain/30min">Get Free Strategy Session</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}