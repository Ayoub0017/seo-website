import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BrandsSection } from "@/components/brands-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Growth Marketing Consultant - Ayoub Ouraian",
  description: "Professional Growth Marketing consulting services to grow your business online. Strategic optimization and compelling acquisition solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/",
    languages: {
      "en-US": "https://ayoubouarain.com/",
    },
  },
  openGraph: {
    title: "Ayoub Ouraian - Growth Marketing Consultant",
    description: "Professional Growth Marketing consulting services to grow your business online. Strategic optimization and compelling acquisition solutions.",
    url: "https://ayoubouarain.com/",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Ayoub Ouraian - Growth Marketing Consultant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayoub Ouraian - Growth Marketing Consultant",
    description: "Professional growth consultant helping businesses grow their online presence through strategic campaigns and compelling customer acquisition solutions.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
  },
}

export default function HomePage() {
  console.log('HomePage rendering - before Navigation')
  return (
    <>
      {/* Schema Markup for Person */}
      <SchemaMarkup type="person" data={ayoubPersonData} />

      {/* Schema Markup for WebSite */}
      <SchemaMarkup
        type="website"
        data={{
          name: "Ayoub Ouraian - Growth Marketing Consultant",
          url: "https://ayoubouarain.com/",
          description: "Professional Growth Marketing consulting services to grow your business online. Strategic optimization and compelling acquisition solutions."
        }}
      />

      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <BrandsSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
