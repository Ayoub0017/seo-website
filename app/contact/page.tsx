import type React from "react"
import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Clock, Linkedin, Calendar } from "lucide-react"
import Link from "next/link"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "Contact - Ayoub Ouraian | SEO & Content Marketing Consultant",
  description: "Get in touch with Ayoub Ouraian for professional SEO, content marketing, and web development services. Free consultation available.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/contact",
    languages: {
      "en-US": "https://ayoubouarain.com/contact",
    },
  },
  openGraph: {
    title: "Contact Ayoub Ouraian - SEO & Content Marketing Consultant",
    description: "Get in touch with Ayoub Ouraian for professional SEO, content marketing, and web development services. Free consultation available.",
    url: "https://ayoubouarain.com/contact",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Contact Ayoub Ouraian - SEO & Content Marketing Consultant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ayoub Ouraian - SEO & Content Marketing Consultant",
    description: "Get in touch with Ayoub Ouraian for professional SEO, content marketing, and web development services. Free consultation available.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
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
      icon: Calendar,
      title: "Free Consultation",
      value: "Book 30min call",
      description: "Schedule a free consultation",
      href: "https://calendly.com/ab-ouarain/30min",
    },
  ]

  const services = [
    "SEO Optimization",
    "Content Marketing",
    "Web Development",
    "Technical SEO Audit",
    "Local SEO",
    "E-commerce SEO",
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
          name: "Contact Ayoub Ouraian - SEO & Digital Marketing Consultant",
          description: "Get in touch with Ayoub Ouraian for professional SEO, content marketing, and web development services. Ready to grow your business online.",
          url: "https://ayoubouarain.com/contact",
          mainEntity: ayoubPersonData,
        }} 
      />
      
      <main className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
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

      {/* Contact Information and Consultation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* Contact Information */}
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

            {/* Consultation Booking */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-center">Ready to Get Started?</CardTitle>
                <CardDescription className="text-center">
                  Book a free 30-minute consultation to discuss your project and goals.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  During our call, we'll discuss your business goals, current challenges, and how I can help you achieve success online.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href="https://calendly.com/ab-ouarain/30min" target="_blank" rel="noopener noreferrer">
                    Book Free 30min Consultation
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground">
                  No commitment required • Free consultation
                </p>
              </CardContent>
            </Card>
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
