import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BrandsSection } from "@/components/brands-section"
import { Footer } from "@/components/footer"

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
