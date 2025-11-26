import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Brain, Network, BookOpen, Map, FileText, Code2, Lightbulb, Star, Users, Clock, Award } from "lucide-react"
import Link from "next/link"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services SEO Expert - Dominez les Classements de Recherche & Faites Croître Votre Entreprise",
  description: "Services SEO professionnels qui délivrent des résultats. Stratégies SEO complètes on-page, technique, locale et e-commerce pour booster votre trafic organique et vos classements de recherche.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/fr/services/seo",
    languages: {
      "fr-FR": "https://ayoubouarain.com/fr/services/seo",
      "en-US": "https://ayoubouarain.com/services/seo",
    },
  },
  openGraph: {
    title: "Services SEO Expert - Ayoub Ouraian",
    description: "Services SEO professionnels qui délivrent des résultats. Stratégies SEO complètes on-page, technique, locale et e-commerce pour booster votre trafic organique et vos classements de recherche.",
    url: "https://ayoubouarain.com/fr/services/seo",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Services SEO par Ayoub Ouraian",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services SEO Expert - Ayoub Ouraian",
    description: "Services SEO professionnels qui délivrent des résultats. Stratégies SEO complètes on-page, technique, locale et e-commerce pour booster votre trafic organique et vos classements de recherche.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
  },
}

export default function SEOServicesPageFR() {
  const seoServices = [
    {
      title: "SEO On-Page",
      description: "Optimisez le contenu, la structure et les éléments HTML de votre site web pour améliorer les classements dans les moteurs de recherche et l'expérience utilisateur",
      icon: FileText,
      features: ["Recherche et optimisation de mots-clés", "Optimisation des balises meta", "Structure de contenu et en-têtes", "Stratégie de liens internes", "Optimisation des images", "Implémentation du balisage schema"],
      color: "bg-[#1447E6]/10 text-[#1447E6]"
    },
    {
      title: "SEO Technique",
      description: "Améliorez les fondations techniques de votre site web pour garantir que les moteurs de recherche puissent crawler, indexer et comprendre votre contenu",
      icon: Code2,
      features: ["Optimisation de la vitesse du site", "Responsive mobile", "Amélioration des Core Web Vitals", "Sitemaps XML", "Optimisation du robots.txt", "SSL & sécurité"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "SEO Off-Page",
      description: "Construisez de l'autorité et de la confiance grâce à des techniques stratégiques de netlinking et d'optimisation externe",
      icon: Network,
      features: ["Campagnes de netlinking", "Guest posting", "Relations publiques digitales", "Mentions de marque", "Citations locales", "Signaux sociaux"],
      color: "bg-[#1447E6]/10 text-[#1447E6]"
    },
    {
      title: "SEO Local",
      description: "Dominez les résultats de recherche locaux et attirez des clients dans votre zone géographique",
      icon: Map,
      features: ["Optimisation Google Business Profile", "Ciblage de mots-clés locaux", "Consistance NAP", "Citations locales", "Gestion des avis", "Création de contenu local"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "SEO E-commerce",
      description: "Stratégies SEO spécialisées pour les boutiques en ligne pour augmenter la visibilité des produits et les ventes",
      icon: Target,
      features: ["Optimisation des pages produit", "SEO des pages catégorie", "Optimisation des flux shopping", "Balises schema produit", "Navigation à facettes", "Optimisation de la conversion"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "Stratégie & Conseil SEO",
      description: "Audits SEO complets et planification stratégique pour maximiser votre potentiel de croissance organique",
      icon: Brain,
      features: ["Audits et analyse SEO", "Recherche concurrentielle", "Stratégie de mots-clés", "Planification de contenu", "Suivi des performances", "Optimisation du ROI"],
      color: "bg-indigo-500/10 text-indigo-600"
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Trafic Organique Augmenté",
      description: "Conduisez plus de visiteurs qualifiés vers votre site web grâce à l'amélioration des classements de recherche"
    },
    {
      icon: Target,
      title: "Meilleurs Taux de Conversion",
      description: "Attirez des utilisateurs avec une forte intention d'achat grâce à l'optimisation ciblée des mots-clés"
    },
    {
      icon: BarChart3,
      title: "ROI à Long Terme",
      description: "Construisez une croissance organique durable qui continue à délivrer des résultats dans le temps"
    },
    {
      icon: Award,
      title: "Autorité de Marque",
      description: "Établissez votre entreprise comme une autorité de confiance dans votre industrie"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Audit & Analyse SEO",
      description: "Analyse complète de vos performances SEO actuelles, problèmes techniques et opportunités"
    },
    {
      step: "02",
      title: "Développement de Stratégie",
      description: "Créez une stratégie SEO personnalisée basée sur vos objectifs business et le paysage concurrentiel"
    },
    {
      step: "03",
      title: "Implémentation",
      description: "Exécutez les optimisations on-page, techniques et off-page selon le plan stratégique"
    },
    {
      step: "04",
      title: "Monitoring & Optimisation",
      description: "Surveillance continue, reporting et optimisation pour maximiser les résultats et le ROI"
    }
  ]

  return (
    <>
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Services SEO",
          description: "Services SEO professionnels pour améliorer les classements de recherche et le trafic organique",
          provider: ayoubPersonData,
          serviceType: "Optimisation pour les Moteurs de Recherche",
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
                <Search className="h-4 w-4 mr-2" />
                Services SEO
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1447E6] to-purple-600 bg-clip-text text-transparent">
                Référencement SEO
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Boostez vos classements de recherche, augmentez votre trafic organique et développez votre entreprise avec des stratégies SEO complètes qui délivrent des résultats mesurables.
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
                Pourquoi Choisir le SEO Professionnel ?
              </h2>
              <p className="text-xl text-gray-600">
                Le SEO est l'une des stratégies marketing les plus rentables avec des résultats durables
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
                Services SEO Complets
              </h2>
              <p className="text-xl text-gray-600">
                Solutions SEO complètes adaptées à vos besoins business et objectifs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoServices.map((service, index) => (
                <Card key={index} className={`${service.color.includes('bg-[#1447E6]') ? 'bg-blue-50 border-blue-200' : service.color.includes('bg-green') ? 'bg-green-50 border-green-200' : service.color.includes('bg-orange') ? 'bg-orange-50 border-orange-200' : service.color.includes('bg-red') ? 'bg-red-50 border-red-200' : 'bg-indigo-50 border-indigo-200'} border-2 hover:shadow-lg transition-shadow`}>
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

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Mon Processus SEO
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
                <div className="text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-blue-100">Sites Web Optimisés</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">300%</div>
                <div className="text-blue-100">Augmentation Moyenne du Trafic</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-blue-100">Taux de Satisfaction Client</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Prêt à Dominer les Résultats de Recherche ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Obtenez une session stratégique gratuite et découvrez comment améliorer vos classements de recherche et votre trafic organique.
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