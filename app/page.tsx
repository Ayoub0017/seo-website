import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BrandsSection } from "@/components/brands-section"
import { Footer } from "@/components/footer"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Semantic SEO and Content Marketing Specialist",
  description: "Professional semantic SEO specialist helping businesses grow their online presence through strategic semantic SEO, compelling content marketing, and modern web development solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/",
    languages: {
      "en-US": "https://ayoubouarain.com/",
    },
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
          name: "Ayoub Ouraian - Semantic SEO and Content Marketing Specialist",
          url: "https://ayoubouarain.com/",
          description: "Professional semantic SEO specialist helping businesses grow their online presence through strategic semantic SEO, compelling content marketing, and modern web development solutions."
        }} 
      />
      
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <BrandsSection />
        <Footer />
      </main>
    </>
  )
}
