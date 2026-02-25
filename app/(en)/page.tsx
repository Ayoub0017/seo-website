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
  title: "SEO & GEO Consultant - Ayoub Ouraian",
  description: "Professional SEO and AI search optimization solutions by Ayoub Ouarain. Strategic organic acquisition and generative engine optimization.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/",
    languages: {
      "en-US": "https://ayoubouarain.com/",
    },
  },
  openGraph: {
    title: "Ayoub Ouraian - SEO & GEO Consultant",
    description: "Professional SEO and AI search optimization solutions by Ayoub Ouarain. Strategic organic acquisition and generative engine optimization.",
    url: "https://ayoubouarain.com/",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Ayoub Ouraian - SEO & GEO Consultant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayoub Ouraian - SEO & GEO Consultant",
    description: "Professional SEO and AI search optimization solutions by Ayoub Ouarain. Strategic organic acquisition and generative engine optimization.",
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
          name: "Ayoub Ouraian - SEO & GEO Consultant",
          url: "https://ayoubouarain.com/",
          description: "Professional SEO and AI search optimization solutions by Ayoub Ouarain. Strategic organic acquisition and generative engine optimization."
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
