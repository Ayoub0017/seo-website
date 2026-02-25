import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Target, Eye, Mail, CheckCircle, TrendingUp, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Target,
    title: "SEO Technique",
    description: "Construisez une base technique solide pour assurer une exploration, une indexation et des performances optimales sur les moteurs de recherche.",
    badge: "Fondation",
    badgeVariant: "default" as const,
    features: [
      "Architecture & Taxonomie du Site",
      "Optimisation des Core Web Vitals",
      "Balisage Schema Markup Avancé",
      "Analyse des Fichiers Logs",
      "Structuration SEO pour JavaScript",
      "Résolution des Problèmes d'Indexation"
    ],
    stats: { value: "100%", label: "Santé Technique" },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Search,
    title: "Acquisition Organique",
    description: "Générez un trafic durable et de haute qualité grâce à des stratégies de croissance organique adaptées à votre secteur.",
    badge: "Croissance Durable",
    badgeVariant: "secondary" as const,
    features: [
      "Stratégie & Recherche de Mots-clés",
      "Campagnes de Netlinking (Link Building)",
      "Optimisation SEO E-commerce",
      "Stratégies SEO pour SaaS",
      "SEO Local & Google Maps",
      "Analyse des Performances"
    ],
    stats: { value: "200%", label: "Croissance Organique Moy." },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Stratégie de Contenu",
    description: "Créez un contenu percutant et optimisé pour la recherche qui engage votre audience et établit votre autorité thématique.",
    badge: "Autorité",
    badgeVariant: "secondary" as const,
    features: [
      "Planification de Topic Clusters",
      "Analyse des Lacunes de Contenu",
      "Copywriting SEO & Conversion",
      "Audits E-E-A-T",
      "Stratégie de Contenu Blog",
      "Actualisation de Contenu"
    ],
    stats: { value: "3x", label: "Meilleur Engagement" },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Zap,
    title: "Generative Engine Optimization (GEO)",
    description: "Augmentez votre visibilité sur les moteurs de recherche basés sur l'IA et les LLM comme ChatGPT, Perplexity et AI Overviews.",
    badge: "Future-proof",
    badgeVariant: "secondary" as const,
    features: [
      "Audits des Plateformes IA",
      "Optimisation de l'Entité de Marque",
      "Génération de Citations",
      "Stratégie de Mots-clés Conversationnels",
      "Structuration adaptée aux LLM",
      "Adaptations des Formats de Contenu"
    ],
    stats: { value: "Top", label: "Apparitions IA" },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  }
]

export function ServicesSectionFR() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services SEO & GEO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions professionnelles d'optimisation SEO et IA pour accroître votre visibilité et générer une croissance organique durable.
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
                  <div className="text-xl font-bold" style={{ color: '#1447E6' }}>{service.stats.value}</div>
                  <p className="text-xs text-gray-600">{service.stats.label}</p>
                </div>
                <Button asChild className="text-white text-sm px-4 py-2" style={{ backgroundColor: '#1447E6' }}>
                  <Link href={service.href} className="flex items-center gap-2">
                    <span>Discutons de vos Besoins</span>
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