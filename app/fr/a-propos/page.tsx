import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Award, Users, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "À Propos - Ayoub Ouraian | Consultant SEO et Marketing de Contenu",
  description: "Avec plus de 6 ans d'expérience en marketing digital, je me spécialise dans l'aide aux entreprises pour développer leur présence en ligne grâce à des stratégies SEO et de marketing de contenu.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/fr/a-propos",
    languages: {
      "fr-FR": "https://ayoubouarain.com/fr/a-propos",
      "en-US": "https://ayoubouarain.com/about",
    },
  },
  openGraph: {
    title: "À Propos d'Ayoub Ouraian - Consultant SEO et Marketing de Contenu",
    description: "Avec plus de 6 ans d'expérience en marketing digital, je me spécialise dans l'aide aux entreprises pour développer leur présence en ligne grâce à des stratégies SEO et de marketing de contenu.",
    url: "https://ayoubouarain.com/fr/a-propos",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Ayoub Ouraian - Consultant SEO et Marketing de Contenu",
      },
    ],
    locale: "fr_FR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos d'Ayoub Ouraian - Consultant SEO et Marketing de Contenu",
    description: "Avec plus de 6 ans d'expérience en marketing digital, je me spécialise dans l'aide aux entreprises pour développer leur présence en ligne grâce à des stratégies SEO et de marketing de contenu.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
  },
}

export default function AboutPageFR() {
  const skillCategories = [
    {
      title: "Référencement SEO",
      skills: [
        "SEO",
        "SEO Technique", 
        "Recherche de Mots-Clés",
        "Netlinking",
        "Google Analytics",
        "Optimisation d'Entités",
        "Autorité Thématique"
      ]
    },
    {
      title: "Marketing de Contenu",
      skills: [
        "Marketing de Contenu",
        "Stratégie de Contenu",
        "Rédaction de Blog",
        "Contenu Réseaux Sociaux",
        "Email Marketing",
        "Planification de Contenu",
        "Développement de Ton de Marque"
      ]
    }
  ]

  const achievements = [
    {
      icon: TrendingUp,
      title: "Croissance du Trafic",
      description: "Augmentation substantielle du trafic organique pour les clients en quelques mois",
    },
    {
      icon: Users,
      title: "Clients Satisfaits",
      description: "Entreprises transformées grâce au marketing digital stratégique",
    },
    {
      icon: Award,
      title: "6+ Ans d'Expérience",
      description: "Expertise prouvée en SEO et marketing de contenu",
    },
    {
      icon: Clock,
      title: "Support 24/7",
      description: "Support dédié et optimisation continue",
    },
  ]

  const experience = [
    {
      period: "Jan 2024 - Présent",
      role: "Consultant en Optimisation pour les Moteurs de Recherche",
      company: "Freelance",
      description:
        "Fourniture de services de conseil en SEO stratégique aux entreprises, les aidant à améliorer leur visibilité dans les résultats de recherche organique et à générer une croissance durable grâce à des stratégies d'optimisation axées sur les résultats.",
    },
    {
      period: "Jan 2025 - Juil 2025",
      role: "Responsable de la Croissance",
      company: "Agence",
      description:
        "Direction des initiatives de croissance et développement de stratégies de marketing digital complètes pour stimuler l'acquisition de clients et la croissance du chiffre d'affaires sur plusieurs canaux.",
    },
    {
      period: "Mai 2022 - Nov 2023",
      role: "Responsable de Contenu Français",
      company: "Hostinger International",
      description:
        "Gestion de la stratégie et de la création de contenu français, supervision des initiatives de marketing de contenu et des processus éditoriaux pour renforcer la présence de la marque sur les marchés francophones.",
    },
    {
      period: "Juil 2019 - Mai 2022",
      role: "Responsable Marketing Web",
      company: "Araoo",
      description:
        "Responsable des stratégies de marketing web, du marketing d'attribution et de la création de contenu. Développement et exécution de campagnes de marketing digital pour stimuler l'acquisition d'utilisateurs et l'engagement.",
    },
    {
      period: "Sep 2017 - Juil 2019",
      role: "Consultant en Marketing de Contenu",
      company: "Indépendant",
      description:
        "Fourniture de services de conseil en marketing de contenu, spécialisé dans l'optimisation pour les moteurs de recherche et la stratégie marketing pour divers clients dans différents secteurs.",
    },
  ]

  return (
    <>
      {/* Detailed Person Schema Markup for About Page */}
      <SchemaMarkup 
        type="person" 
        data={{
          name: "Ayoub Ouraian",
          jobTitle: "Consultant SEO et Marketing de Contenu",
          description: "Avec plus de 6 ans d'expérience en marketing digital, je me spécialise dans l'aide aux entreprises pour développer leur présence en ligne grâce à des stratégies SEO et de marketing de contenu.",
          url: "https://ayoubouarain.com/fr/",
          image: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
          email: "ayoub@ayoubouarain.com",
          sameAs: [
            "https://www.linkedin.com/in/ayoub-ouarain/",
            "https://x.com/Ouarain01",
            "https://github.com/Ayoub0017"
          ],
          address: {
            addressCountry: "Maroc"
          },
          worksFor: {
            name: "Ayoub Ouraian Marketing Digital",
            url: "https://ayoubouarain.com/fr/"
          }
        }} 
      />
      
      <main className="min-h-screen">
        <Navigation />

        {/* Hero Section with Image */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Bonjour, je suis Ayoub
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Avec plus de 6 ans d'expérience en marketing digital, je me spécialise dans l'aide aux entreprises pour développer leur
                présence en ligne grâce à des stratégies SEO et de marketing de contenu.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Je crois en des stratégies axées sur les résultats qui génèrent des retours mesurables. Mon approche combine l'expertise
                technique avec des solutions de contenu créatives pour générer une croissance durable pour votre entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6" style={{backgroundColor: '#1447E6'}}>
                  <Link href="/fr/contact">Travailler Avec Moi</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent hover:bg-[#1447E6] hover:text-white transition-colors border-[#1447E6] text-[#1447E6]">
                  <Link href="https://www.linkedin.com/in/ayoub-ouarain/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Se Connecter sur LinkedIn
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-full overflow-hidden p-8">
                  <Image
                    src="/ayoub-ouarain-profile.png"
                    alt="Ayoub Ouarain - Consultant SEO et Marketing de Contenu"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Compétences & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expertise complète en marketing digital axée sur le SEO et le Marketing de Contenu pour générer une croissance organique et de l'engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-primary mb-4">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Résultats Prouvés</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des chiffres qui parlent d'eux-mêmes - des résultats réels pour de vraies entreprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Expérience Professionnelle</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un historique de réussite à travers divers secteurs et tailles d'entreprise.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {index < experience.length - 1 && <div className="absolute left-3 top-8 w-0.5 h-full bg-border"></div>}
                <div className="absolute left-0 top-2 w-6 h-6 bg-primary rounded-full"></div>

                <Card className="ml-4">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Travaillons Ensemble</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Prêt à passer votre marketing digital au niveau supérieur ? J'aimerais en savoir plus sur votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6" style={{backgroundColor: '#1447E6'}}>
              <Link href="/fr/contact">Démarrer un Projet</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent hover:bg-[#1447E6] hover:text-white transition-colors border-[#1447E6] text-[#1447E6]">
              <Link href="https://www.linkedin.com/in/ayoub-ouarain/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Voir le Profil LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
    </>
  )
}