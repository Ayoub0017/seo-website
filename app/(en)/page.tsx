import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BrandsSection } from "@/components/brands-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO & Content Marketing Specialist - Ayoub Ouraian",
  description: "Professional SEO and Content Marketing services to grow your business online. Strategic SEO optimization and compelling content marketing solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/",
    languages: {
      "en-US": "https://ayoubouarain.com/",
    },
  },
  openGraph: {
    title: "Ayoub Ouraian - SEO & Content Marketing Specialist",
    description: "Professional SEO and Content Marketing services to grow your business online. Strategic SEO optimization and compelling content marketing solutions.",
    url: "https://ayoubouarain.com/",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Ayoub Ouraian - SEO & Content Marketing Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayoub Ouraian - SEO & Content Marketing Consultant",
    description: "Professional SEO consultant helping businesses grow their online presence through strategic SEO and compelling content marketing solutions.",
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
          name: "Ayoub Ouraian - SEO & Content Marketing Specialist",
          url: "https://ayoubouarain.com/",
          description: "Professional SEO and Content Marketing services to grow your business online. Strategic SEO optimization and compelling content marketing solutions."
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
