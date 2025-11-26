import type React from "react"
import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Clock, Linkedin, Calendar } from "lucide-react"
import Link from "next/link"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "Contact - Ayoub Ouraian | Consultant SEO et Marketing de Contenu",
  description: "Contactez Ayoub Ouraian pour des services professionnels de SEO et marketing de contenu. Consultation gratuite disponible.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/fr/contact",
    languages: {
      "fr-FR": "https://ayoubouarain.com/fr/contact",
      "en-US": "https://ayoubouarain.com/contact",
    },
  },
  openGraph: {
    title: "Contactez Ayoub Ouraian - Consultant SEO et Marketing de Contenu",
    description: "Contactez Ayoub Ouraian pour des services professionnels de SEO et marketing de contenu. Consultation gratuite disponible.",
    url: "https://ayoubouarain.com/fr/contact",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Contactez Ayoub Ouraian - Consultant SEO et Marketing de Contenu",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contactez Ayoub Ouraian - Consultant SEO et Marketing de Contenu",
    description: "Contactez Ayoub Ouraian pour des services professionnels de SEO et marketing de contenu. Consultation gratuite disponible.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
  },
}

export default function ContactPageFR() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@ayoubouarain.com",
      description: "Envoyez-moi un message à tout moment",
      href: "mailto:contact@ayoubouarain.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+212669705440",
      description: "Appelez pour une assistance immédiate",
      href: "tel:+212669705440",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connectez-vous avec moi",
      description: "Réseautage professionnel",
      href: "https://www.linkedin.com/in/ayoub-ouarain/",
    },
    {
      icon: Calendar,
      title: "Consultation Gratuite",
      value: "Réservez un appel de 30min",
      description: "Planifiez une consultation gratuite",
      href: "https://calendly.com/ab-ouarain/30min",
    },
  ]

  const services = [
    "Optimisation SEO",
    "Marketing de Contenu",
    "Développement Web",
    "Audit SEO Technique",
    "SEO Local",
    "SEO E-commerce",
    "Stratégie de Contenu",
    "Refonte de Site Web",
    "Autre",
  ]

  const budgetRanges = [
    "Moins de 1 000 $",
    "1 000 $ - 5 000 $",
    "5 000 $ - 10 000 $",
    "10 000 $ - 25 000 $",
    "25 000 $+",
    "Discutons",
  ]

  return (
    <>
      {/* ContactPage Schema Markup */}
      <SchemaMarkup 
        type="contactPage" 
        data={{
          name: "Contactez Ayoub Ouraian - Consultant SEO et Marketing Digital",
          description: "Contactez Ayoub Ouraian pour des services professionnels de SEO et marketing de contenu. Prêt à développer votre entreprise en ligne.",
          url: "https://ayoubouarain.com/fr/contact",
          mainEntity: ayoubPersonData,
        }} 
      />
      
      <main className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Commençons Votre Histoire de Succès
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Prêt à développer votre entreprise ? J'aimerais en savoir plus sur votre projet et discuter de comment je peux vous aider à atteindre vos
            objectifs de marketing digital.
          </p>
        </div>
      </section>

      {/* Contact Information and Consultation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contactez-Moi</CardTitle>
                <CardDescription>Plusieurs façons de me joindre pour votre commodité.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{info.title}</h3>
                      {info.href ? (
                        <Link
                          href={info.href}
                          className="text-primary hover:text-primary/80 transition-colors"
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </Link>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Consultation Booking */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-center">Prêt à Commencer ?</CardTitle>
                <CardDescription className="text-center">
                  Réservez une consultation gratuite de 30 minutes pour discuter de votre projet et de vos objectifs.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Pendant notre appel, nous discuterons de vos objectifs business, des défis actuels et de comment je peux vous aider à réussir en ligne.
                </p>
                <Button asChild size="lg" className="w-full" style={{backgroundColor: '#1447E6'}}>
                  <Link href="https://calendly.com/ab-ouarain/30min" target="_blank" rel="noopener noreferrer">
                    Réserver une Consultation Gratuite de 30min
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Aucun engagement requis • Consultation gratuite
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Questions Fréquemment Posées</h2>
            <p className="text-xl text-muted-foreground">Réponses rapides aux questions courantes sur mes services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Combien de temps le SEO prend-il pour montrer des résultats ?</h3>
                <p className="text-sm text-muted-foreground">
                  Typiquement 3-6 mois pour des améliorations significatives, avec certains changements visibles dès le premier mois.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Travaillez-vous avec les petites entreprises ?</h3>
                <p className="text-sm text-muted-foreground">
                  Je travaille avec des entreprises de toutes tailles, des startups aux entreprises établies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Qu'est-ce qui est inclus dans votre service SEO ?</h3>
                <p className="text-sm text-muted-foreground">
                  Audits techniques, recherche de mots-clés, optimisation on-page, stratégie de contenu et reporting mensuel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Offrez-vous un support continu ?</h3>
                <p className="text-sm text-muted-foreground">
                  Oui, je fournis une optimisation continue, un monitoring et un support pour assurer un succès durable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  )
}