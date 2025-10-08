import type React from "react"
import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Clock, Linkedin } from "lucide-react"
import Link from "next/link"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "Contact - Ayoub Ouraian | SEO & Content Marketing Specialist",
  description: "Get in touch with Ayoub Ouraian for professional SEO, content marketing, and web development services. Free consultation available.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/contact",
    languages: {
      "en-US": "https://ayoubouarain.com/contact",
    },
  },
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@ayoubouarain.com",
      description: "Send me a message anytime",
      href: "mailto:contact@ayoubouarain.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+212669705440",
      description: "Call for immediate assistance",
      href: "tel:+212669705440",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      description: "Professional networking",
      href: "https://www.linkedin.com/in/ayoub-ouarain/",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "Typical response time",
      href: null,
    },
  ]

  const services = [
    "Semantic SEO Optimization",
    "Content Marketing",
    "Web Development",
    "Technical Semantic SEO Audit",
    "Local Semantic SEO",
    "E-commerce Semantic SEO",
    "Content Strategy",
    "Website Redesign",
    "Other",
  ]

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "Let's discuss",
  ]

  return (
    <>
      {/* ContactPage Schema Markup */}
      <SchemaMarkup 
        type="contactPage" 
        data={{
          name: "Contact Ayoub Ouraian - Semantic SEO & Digital Marketing Consultant",
          description: "Get in touch with Ayoub Ouraian for professional semantic SEO, content marketing, and web development services. Ready to grow your business online.",
          url: "https://ayoubouarain.com/contact",
          mainEntity: ayoubPersonData,
          contactPoint: {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "email": "contact@ayoubouarain.com",
            "availableLanguage": ["English", "French"],
            "areaServed": "Worldwide"
          }
        }} 
      />
      
      <main className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Start Your <span className="text-primary">Success Story</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to grow your business? I'd love to hear about your project and discuss how I can help you achieve your
            digital marketing goals.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Get in Touch</CardTitle>
                  <CardDescription>Multiple ways to reach me for your convenience.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">{info.title}</h3>
                        {info.href ? (
                          <Link
                            href={info.href}
                            className="text-primary hover:text-primary/80 transition-colors"
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Why Work With Me?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">6+ years of proven experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Data-driven strategies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Transparent reporting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Dedicated support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Measurable results</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Ready to Get Started?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book a free 30-minute consultation to discuss your project.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="mailto:contact@ayoubouarain.com?subject=Free Consultation Request">
                      Book Free Consultation
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions about my services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">How long does SEO take to show results?</h3>
                <p className="text-sm text-muted-foreground">
                  Typically 3-6 months for significant improvements, with some changes visible within the first month.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do you work with small businesses?</h3>
                <p className="text-sm text-muted-foreground">
                  I work with businesses of all sizes, from startups to established enterprises.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">What's included in your SEO service?</h3>
                <p className="text-sm text-muted-foreground">
                  Technical audits, keyword research, on-page optimization, content strategy, and monthly reporting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do you offer ongoing support?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, I provide ongoing optimization, monitoring, and support to ensure continued success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  )
}
