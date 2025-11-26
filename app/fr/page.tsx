import { Navigation } from "@/components/navigation"
import { HeroSectionFR } from "@/components/hero-section-fr"
import { BrandsSection } from "@/components/brands-section"
import { ServicesSectionFR } from "@/components/services-section-fr"
import { Footer } from "@/components/footer"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spécialiste SEO & Marketing de Contenu - Ayoub Ouraian",
  description: "Services professionnels de SEO et Marketing de Contenu pour développer votre entreprise en ligne. Optimisation SEO stratégique et solutions de marketing de contenu convaincantes.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/fr",
    languages: {
      "fr-FR": "https://ayoubouarain.com/fr",
    },
  },
  openGraph: {
    title: "Ayoub Ouraian - Spécialiste SEO & Marketing de Contenu",
    description: "Services professionnels de SEO et Marketing de Contenu pour développer votre entreprise en ligne. Optimisation SEO stratégique et solutions de marketing de contenu convaincantes.",
    url: "https://ayoubouarain.com/fr",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Ayoub Ouraian - Spécialiste SEO & Marketing de Contenu",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayoub Ouraian - Consultant SEO & Marketing de Contenu",
    description: "Consultant SEO professionnel aidant les entreprises à développer leur présence en ligne grâce à des solutions de SEO stratégique et de marketing de contenu convaincantes.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
  },
}

export default function HomePageFR() {
  return (
    <>
      {/* Schema Markup for Person */}
      <SchemaMarkup type="person" data={ayoubPersonData} />
      
      {/* Schema Markup for WebSite */}
      <SchemaMarkup
        type="website"
        data={{
          name: "Ayoub Ouraian - Spécialiste SEO & Marketing de Contenu",
          url: "https://ayoubouarain.com/fr",
          description: "Services professionnels de SEO et Marketing de Contenu pour développer votre entreprise en ligne. Optimisation SEO stratégique et solutions de marketing de contenu convaincantes."
        }}
      />
      
      <main className="min-h-screen">
        <Navigation />
        <HeroSectionFR />
        <BrandsSection />
        <ServicesSectionFR />
        <Footer />
      </main>
    </>
  )
}