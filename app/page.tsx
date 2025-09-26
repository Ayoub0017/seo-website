import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BrandsSection } from "@/components/brands-section"
import { Footer } from "@/components/footer"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO and Content Marketing Specialist",
  description: "Professional SEO specialist helping businesses grow their online presence through strategic SEO, compelling content marketing, and modern web development solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouraian.com",
    languages: {
      "en-US": "https://ayoubouraian.com",
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
          name: "Ayoub Ouraian - SEO and Content Marketing Specialist",
          url: "https://ayoubouraian.com",
          description: "Professional SEO specialist helping businesses grow their online presence through strategic SEO, compelling content marketing, and modern web development solutions."
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
