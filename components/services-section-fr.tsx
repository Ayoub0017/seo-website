import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Target, Eye, Mail, CheckCircle, TrendingUp, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Target,
    title: "Publicités & Paid Media",
    description: "Augmentez votre acquisition de clients grâce à des campagnes publicitaires ciblées sur plusieurs canaux.",
    badge: "Résultats Rapides",
    badgeVariant: "default" as const,
    features: [
      "Gestion Google Ads",
      "Publicités Meta (Facebook & Instagram)",
      "Campagnes B2B LinkedIn",
      "Stratégies de Retargeting",
      "Optimisation RoAS & CPA",
      "Copywriting & A/B Testing"
    ],
    stats: { value: "3x", label: "RoAS Cible Moyen" },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Search,
    title: "Optimisation pour les Moteurs de Recherche",
    description: "Générez une croissance organique durable et améliorez votre visibilité avec des stratégies SEO complètes.",
    badge: "Croissance Durable",
    badgeVariant: "secondary" as const,
    features: [
      "Audits SEO Techniques",
      "Recherche & Stratégie de Mots-clés",
      "Optimisation On-Page",
      "Campagnes de Netlinking",
      "Stratégie de Contenu SEO",
      "SEO Local & E-commerce"
    ],
    stats: { value: "200%", label: "Croissance Organique Moy." },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Optimisation des Conversions",
    description: "Maximisez votre ROI marketing grâce à l'expérimentation continue et l'optimisation des tunnels.",
    badge: "Maximisation ROI",
    badgeVariant: "secondary" as const,
    features: [
      "A/B Testing Données",
      "Analyse du Comportement Utilisateur",
      "Optimisation de Landing Page",
      "Audits Full-Funnel",
      "Amélioration des Taux de Validation",
      "Feuilles de Route Expérimentation"
    ],
    stats: { value: "+40%", label: "Hausse Taux de Conversion" },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Engagez votre audience et nourrissez vos prospects avec une automatisation marketing full-funnel.",
    badge: "Rétention",
    badgeVariant: "secondary" as const,
    features: [
      "Séquences d'Email Marketing",
      "Configuration & Intégration CRM",
      "Lead Scoring & Nurturing",
      "Campagnes de Rétention",
      "Automatisation de Workflows",
      "Rapports Automatisés"
    ],
    stats: { value: "150%", label: "Hausse Génération Leads" },
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
            Services de Growth Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions professionnelles de growth marketing pour développer votre présence en ligne et générer une croissance durable.
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