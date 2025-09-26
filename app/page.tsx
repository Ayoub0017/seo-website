import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BrandsSection } from "@/components/brands-section"
import { Footer } from "@/components/footer"
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
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BrandsSection />
      <Footer />
    </main>
  )
}
