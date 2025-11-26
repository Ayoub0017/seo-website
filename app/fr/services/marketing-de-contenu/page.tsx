import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PenTool, Target, Users, TrendingUp, CheckCircle, ArrowRight, BookOpen, Mail, Share2, Video, Megaphone, Calendar, Award, BarChart3, Heart } from "lucide-react"
import Link from "next/link"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services de Marketing de Contenu - Engagez, Convertissez & Développez Votre Audience",
  description: "Services stratégiques de marketing de contenu incluant la rédaction de blog, le contenu réseaux sociaux, l'email marketing et la stratégie de contenu. Construisez l'autorité de votre marque et générez des conversions grâce à un contenu captivant.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/fr/services/marketing-de-contenu",
    languages: {
      "fr-FR": "https://ayoubouarain.com/fr/services/marketing-de-contenu",
      "en-US": "https://ayoubouarain.com/services/content-marketing",
    },
  },
  openGraph: {
    title: "Services de Marketing de Contenu - Ayoub Ouraian",
    description: "Services stratégiques de marketing de contenu incluant la rédaction de blog, le contenu réseaux sociaux, l'email marketing et la stratégie de contenu. Construisez l'autorité de votre marque et générez des conversions grâce à un contenu captivant.",
    url: "https://ayoubouarain.com/fr/services/marketing-de-contenu",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Services de Marketing de Contenu par Ayoub Ouraian",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services de Marketing de Contenu - Ayoub Ouraian",
    description: "Services stratégiques de marketing de contenu incluant la rédaction de blog, le contenu réseaux sociaux, l'email marketing et la stratégie de contenu. Construisez l'autorité de votre marque et générez des conversions grâce à un contenu captivant.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
  },
}

export default function ContentMarketingPageFR() {
  const contentServices = [
    {
      title: "Stratégie & Planification de Contenu",
      description: "Développez des stratégies de contenu complètes alignées avec vos objectifs business et les besoins de votre audience",
      icon: Target,
      features: ["Audit et analyse de contenu", "Recherche d'audience et personas", "Planification de calendrier éditorial", "Analyse de contenu concurrentiel", "Identification des gaps de contenu", "Configuration des métriques de performance"],
      color: "bg-[#1447E6]/10 text-[#1447E6]"
    },
    {
      title: "Rédaction de Blog & Contenu SEO",
      description: "Créez des articles de blog engageants et optimisés SEO qui génèrent du trafic et établissent votre autorité",
      icon: BookOpen,
      features: ["Articles de blog optimisés SEO", "Création de contenu long format", "Recherche et idéation de sujets", "Intégration de mots-clés", "Optimisation de contenu", "Gestion de calendrier éditorial"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Contenu Réseaux Sociaux",
      description: "Concevez du contenu réseaux sociaux captivant qui engage votre audience et construit une communauté",
      icon: Share2,
      features: ["Contenu spécifique à la plateforme", "Création de contenu visuel", "Légendes réseaux sociaux", "Stratégie de hashtags", "Engagement communautaire", "Calendriers réseaux sociaux"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Contenu Email Marketing",
      description: "Concevez des campagnes email qui nourrissent les leads et génèrent des conversions grâce à un messaging stratégique",
      icon: Mail,
      features: ["Création de campagnes email", "Contenu de newsletter", "Séquences de campagnes drip", "Optimisation des sujets", "Tests A/B de contenu", "Stratégies de personnalisation"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Contenu Vidéo & Multimédia",
      description: "Créez des scripts vidéo, du contenu multimédia et des supports interactifs engageants",
      icon: Video,
      features: ["Rédaction de scripts vidéo", "Planification de contenu podcast", "Concepts d'infographies", "Contenu interactif", "Planification de webinaires", "Storytelling multimédia"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "Ton de Marque & Messaging",
      description: "Développez un ton de marque cohérent et un messaging qui résonne avec votre audience cible",
      icon: Megaphone,
      features: ["Développement du ton de marque", "Cadre de messaging", "Guide du ton de voix", "Guide de style de contenu", "Storytelling de marque", "Cohérence du message"],
      color: "bg-indigo-500/10 text-indigo-600"
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: "Engagement de l'Audience",
      description: "Construisez des connexions significatives avec votre audience grâce à un contenu précieux et pertinent"
    },
    {
      icon: TrendingUp,
      title: "Trafic Augmenté",
      description: "Générez plus de trafic qualifié vers votre site web grâce au marketing de contenu stratégique"
    },
    {
      icon: Award,
      title: "Autorité de Marque",
      description: "Établissez votre entreprise comme un leader d'opinion et une autorité de confiance dans votre industrie"
    },
    {
      icon: Heart,
      title: "Loyauté Client",
      description: "Construisez des relations durables avec les clients grâce à un contenu cohérent et précieux"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Audit & Stratégie de Contenu",
      description: "Analysez le contenu existant, identifiez les gaps et développez une stratégie de contenu complète"
    },
    {
      step: "02",
      title: "Planification de Contenu",
      description: "Créez des calendriers de contenu détaillés et des plans éditoriaux alignés avec vos objectifs business"
    },
    {
      step: "03",
      title: "Création de Contenu",
      description: "Produisez du contenu de haute qualité et engageant à travers multiples formats et plateformes"
    },
    {
      step: "04",
      title: "Distribution & Optimisation",
      description: "Distribuez le contenu stratégiquement et optimisez continuellement basé sur les données de performance"
    }
  ]

  const contentTypes = [
    "Articles & Posts de Blog",
    "Contenu Réseaux Sociaux",
    "Campagnes Email",
    "Scripts Vidéo",
    "Infographies",
    "Livres Blancs & eBooks",
    "Études de Cas",
    "Copie de Pages de Destination",
    "Descriptions de Produits",
    "Communiqués de Presse"
  ]

  return (
    <>
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Services de Marketing de Contenu",
          description: "Services stratégiques de marketing de contenu pour engager les audiences et générer de la croissance business",
          provider: ayoubPersonData,
          serviceType: "Marketing de Contenu",
          areaServed: "Monde"
        }} 
      />
      
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                <PenTool className="h-4 w-4 mr-2" />
                Marketing de Contenu
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1447E6] to-purple-600 bg-clip-text text-transparent">
                Marketing de Contenu
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Construisez l'autorité de votre marque, engagez votre audience et générez des conversions grâce à des stratégies de marketing de contenu qui délivrent des résultats mesurables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" style={{backgroundColor: '#1447E6', color: 'white'}} asChild>
                  <Link href="https://calendly.com/ab-ouarain/30min">Obtenir une Session Stratégique Gratuite</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Pourquoi Choisir le Marketing de Contenu ?
              </h2>
              <p className="text-xl text-gray-600">
                Le marketing de contenu génère 3x plus de leads que le marketing traditionnel tout en coûtant 62% moins cher
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Services Complets de Marketing de Contenu
              </h2>
              <p className="text-xl text-gray-600">
                Solutions de contenu complètes adaptées à vos besoins business et objectifs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentServices.map((service, index) => (
                <Card key={index} className={`${service.color.includes('bg-[#1447E6]') ? 'bg-blue-50 border-blue-200' : service.color.includes('bg-green') ? 'bg-green-50 border-green-200' : service.color.includes('bg-purple') ? 'bg-purple-50 border-purple-200' : service.color.includes('bg-orange') ? 'bg-orange-50 border-orange-200' : service.color.includes('bg-red') ? 'bg-red-50 border-red-200' : 'bg-indigo-50 border-indigo-200'} border-2 hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <service.icon className="h-8 w-8 text-blue-600" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-700">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Types de Contenu Que Nous Créons
              </h2>
              <p className="text-xl text-gray-600">
                Des articles de blog aux scripts vidéo, nous créons du contenu qui résonne avec votre audience
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {contentTypes.map((type, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <p className="font-medium text-sm">{type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Mon Processus de Marketing de Contenu
              </h2>
              <p className="text-xl text-gray-600">
                Une méthodologie éprouvée qui délivre des résultats constants pour les entreprises de toutes tailles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="relative border-2 border-gray-100 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-100">Pieces de Contenu Créées</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">250%</div>
                <div className="text-blue-100">Augmentation Moyenne de l'Engagement</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">85%</div>
                <div className="text-blue-100">Taux de Rétention Client</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Prêt à Transformer Votre Stratégie de Contenu ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Obtenez une session stratégique gratuite et découvrez comment engager votre audience et générer de la croissance grâce à un contenu captivant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" style={{backgroundColor: '#1447E6'}} asChild>
                <Link href="https://calendly.com/ab-ouarain/30min">Obtenir une Session Stratégique Gratuite</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}