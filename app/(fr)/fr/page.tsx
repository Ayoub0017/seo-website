import { Navigation } from "@/components/navigation"
import { HeroSectionFR } from "@/components/hero-section-fr"
import { BrandsSectionFR } from "@/components/brands-section-fr"
import { ServicesSectionFR } from "@/components/services-section-fr"
import { AboutSectionFR } from "@/components/about-section-fr"
import { ContactSectionFR } from "@/components/contact-section-fr"
import { Footer } from "@/components/footer"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Consultant en Growth Marketing - Ayoub Ouraian",
  description: "Services de conseil en Growth Marketing pour développer votre entreprise en ligne. Optimisation stratégique et solutions d'acquisition client.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/fr",
    languages: {
      "fr-FR": "https://ayoubouarain.com/fr",
    },
  },
  openGraph: {
    title: "Ayoub Ouraian - Consultant en Growth Marketing",
    description: "Services de conseil en Growth Marketing pour développer votre entreprise en ligne. Optimisation stratégique et solutions d'acquisition client.",
    url: "https://ayoubouarain.com/fr",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Ayoub Ouraian - Consultant en Growth Marketing",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayoub Ouraian - Consultant en Growth Marketing",
    description: "Consultant en Growth Marketing aidant les entreprises à développer leur présence en ligne grâce à des campagnes stratégiques et des solutions d'acquisition client.",
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
          name: "Ayoub Ouraian - Consultant en Growth Marketing",
          url: "https://ayoubouarain.com/fr",
          description: "Services de conseil en Growth Marketing pour développer votre entreprise en ligne. Optimisation stratégique et solutions d'acquisition client."
        }}
      />

      <main className="min-h-screen">
        <Navigation />
        <HeroSectionFR />
        <BrandsSectionFR />
        <AboutSectionFR />
        <ServicesSectionFR />
        <ContactSectionFR />
        <Footer />
      </main>
    </>
  )
}