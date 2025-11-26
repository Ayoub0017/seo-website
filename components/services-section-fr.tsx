import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Target, Eye, Mail, CheckCircle, TrendingUp, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "Services SEO",
    description: "Améliorez votre classement dans les moteurs de recherche et générez du trafic organique avec des stratégies SEO complètes.",
    badge: "Le Plus Populaire",
    badgeVariant: "default" as const,
    features: [
      "Audits SEO Techniques",
      "Recherche de Mots-Clés & Stratégie",
      "Optimisation On-Page",
      "Campagnes de Netlinking",
      "SEO Local & Google My Business",
      "SEO E-commerce",
      "Stratégie de Contenu SEO",
      "Suivi des Performances & Reporting"
    ],
    stats: { value: "300%", label: "Augmentation Moyenne du Trafic" },
    href: "/fr/services/seo",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Marketing de Contenu",
    description: "Créez un contenu captivant qui attire, engage et convertit votre audience cible.",
    badge: "Construction de Marque",
    badgeVariant: "secondary" as const,
    features: [
      "Développement de Stratégie de Contenu",
      "Création d'Articles de Blog",
      "Articles Optimisés SEO",
      "Gestion de Calendrier Éditorial",
      "Distribution de Contenu",
      "Analyse des Performances",
      "Actualisation & Optimisation de Contenu",
      "Engagement de l'Audience"
    ],
    stats: { value: "200%", label: "Augmentation Moyenne de l'Engagement" },
    href: "/fr/services/marketing-de-contenu",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  }
]

export function ServicesSectionFR() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services SEO & Marketing de Contenu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions professionnelles de SEO et marketing de contenu pour développer votre présence en ligne et générer une croissance durable.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className={`bg-white border-2 hover:shadow-lg transition-shadow rounded-lg p-5`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 ${service.iconBg} rounded-lg flex items-center justify-center`}>
                  <service.icon className={`h-5 w-5 ${service.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  {service.badge && (
                    <Badge variant={service.badgeVariant} className="text-xs">
                      {service.badge}
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                {service.description}
              </p>
              <ul className="space-y-1.5 mb-5">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-xs">
                    <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-xl font-bold" style={{color: '#1447E6'}}>{service.stats.value}</div>
                  <p className="text-xs text-gray-600">{service.stats.label}</p>
                </div>
                <Button asChild className="text-white text-sm px-4 py-2" style={{backgroundColor: '#1447E6'}}>
                  <Link href={service.href} className="flex items-center gap-2">
                    <span>En Savoir Plus</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}