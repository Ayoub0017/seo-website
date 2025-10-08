import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BrandsSection } from "@/components/brands-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO & Content Marketing Consultant",
  description: "Professional SEO consultant helping businesses grow their online presence through strategic SEO, compelling content marketing, and modern web development solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/",
    languages: {
      "en-US": "https://ayoubouarain.com/",
    },
  },
  openGraph: {
    title: "Ayoub Ouraian - SEO & Content Marketing Consultant",
    description: "Professional SEO consultant helping businesses grow their online presence through strategic SEO, compelling content marketing, and modern web development solutions.",
    url: "https://ayoubouarain.com/",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Ayoub Ouraian - SEO & Content Marketing Consultant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayoub Ouraian - SEO & Content Marketing Consultant",
    description: "Professional SEO consultant helping businesses grow their online presence through strategic SEO, compelling content marketing, and modern web development solutions.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
  },
}

export default function HomePage() {
  return (
    <>
      {/* Schema Markup for Person */}
      <SchemaMarkup type="person" data={ayoubPersonData} />
      
      {/* Schema Markup for WebSite */}
      <SchemaMarkup 
        type="website" 
        data={{
          name: "Ayoub Ouraian - SEO & Content Marketing Consultant",
          url: "https://ayoubouarain.com/",
          description: "Professional SEO consultant helping businesses grow their online presence through strategic SEO, compelling content marketing, and modern web development solutions."
        }} 
      />
      
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <BrandsSection />
        <ServicesSection />
        <Footer />
      </main>
    </>
  )
}
