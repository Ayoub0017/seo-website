import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PenTool, Users, Megaphone, BookOpen, CheckCircle, ArrowRight, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content That Converts",
  description: "Engage your audience with strategic, high-quality content that builds trust, drives traffic, and converts visitors into loyal customers.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouraian.com/services/content-marketing",
    languages: {
      "en-US": "https://ayoubouraian.com/services/content-marketing",
    },
  },
}

export default function ContentMarketingPage() {
  const contentServices = [
    {
      title: "Content Strategy & Planning",
      description: "Develop a comprehensive content roadmap aligned with your business goals",
      features: ["Content audit & analysis", "Competitor research", "Editorial calendar", "Content pillars"]
    },
    {
      title: "Blog Writing & SEO Content",
      description: "High-quality, SEO-optimized content that drives traffic and engagement",
      features: ["Keyword-optimized articles", "Long-form content", "Technical writing", "Industry expertise"]
    },
    {
      title: "Social Media Content",
      description: "Engaging content tailored for different social media platforms",
      features: ["Platform-specific content", "Visual content strategy", "Community engagement", "Brand voice development"]
    },
    {
      title: "Email Marketing Content",
      description: "Compelling email campaigns that nurture leads and drive conversions",
      features: ["Newsletter content", "Drip campaigns", "Product announcements", "Customer retention emails"]
    }
  ]

  const benefits = [
    "Increase brand awareness and authority",
    "Generate more leads than traditional marketing",
    "Build trust and credibility with your audience",
    "Improve customer retention and loyalty",
    "Cost-effective long-term marketing strategy",
    "Better search engine rankings"
  ]

  const contentTypes = [
    { icon: BookOpen, title: "Blog Posts", description: "In-depth articles that educate and engage" },
    { icon: Users, title: "Social Content", description: "Platform-optimized posts for maximum reach" },
    { icon: Megaphone, title: "Email Campaigns", description: "Personalized messages that convert" },
    { icon: Target, title: "Landing Pages", description: "Conversion-focused copy that sells" }
  ]

  return (
    <>
      {/* Schema Markup for Content Marketing Service */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Content Marketing Services",
          description: "Engage your audience with strategic, high-quality content that builds trust, drives traffic, and converts visitors into loyal customers.",
          provider: ayoubPersonData,
          areaServed: "Worldwide",
          serviceType: "Content Marketing",
          offers: {
            description: "Professional content marketing services including content strategy, blog writing, social media content, and email marketing campaigns"
          }
        }} 
      />
      
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <PenTool className="w-4 h-4 mr-2" />
              Content Marketing
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Content That <span className="text-primary">Converts</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Engage your audience with strategic, high-quality content that builds trust, 
              drives traffic, and converts visitors into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Content Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/blog">Read Our Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Content That Drives Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From blog posts to social media content, I create compelling content 
              that resonates with your audience and achieves your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contentTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
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
              Comprehensive Content Marketing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end content marketing solutions designed to grow your brand 
              and drive meaningful engagement with your target audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <PenTool className="w-5 h-5 text-accent" />
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
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Power of Strategic Content
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Content marketing generates more leads than traditional marketing while being more cost-effective. 
                Let me help you harness this power for your business growth.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Increased</h3>
                <p className="text-muted-foreground">Lead Generation</p>
              </Card>
              <Card className="text-center p-6">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Higher</h3>
                <p className="text-muted-foreground">Audience Engagement</p>
              </Card>
              <Card className="text-center p-6">
                <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Extensive</h3>
                <p className="text-muted-foreground">Content Portfolio</p>
              </Card>
              <Card className="text-center p-6">
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Strong</h3>
                <p className="text-muted-foreground">Client Relationships</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create content that not only engages your audience but also drives measurable business results.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/contact">
              Start Your Content Journey
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