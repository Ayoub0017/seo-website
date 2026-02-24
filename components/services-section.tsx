import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Target, Eye, Mail, CheckCircle, TrendingUp, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Target,
    title: "Paid Media & Advertising",
    description: "Scale your customer acquisition with data-driven paid advertising campaigns across multiple channels.",
    badge: "Fast Results",
    badgeVariant: "default" as const,
    features: [
      "Google Ads Management",
      "Meta (Facebook & Instagram) Ads",
      "LinkedIn B2B Campaigns",
      "Retargeting Strategies",
      "RoAS & CPA Optimization",
      "Ad Copywriting & A/B Testing"
    ],
    stats: { value: "3x", label: "Avg. Target RoAS" },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Drive sustainable organic growth and improve your visibility with comprehensive SEO strategies.",
    badge: "Sustainable Growth",
    badgeVariant: "secondary" as const,
    features: [
      "Technical SEO Audits",
      "Keyword Strategy & Research",
      "On-Page Optimization",
      "Link Building Campaigns",
      "Content SEO Strategy",
      "Local & E-commerce SEO"
    ],
    stats: { value: "200%", label: "Avg. Organic Growth" },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description: "Maximize your marketing ROI through continuous experimentation and funnel optimization.",
    badge: "Maximize ROI",
    badgeVariant: "secondary" as const,
    features: [
      "Data-driven A/B Testing",
      "User Behavior Analysis",
      "Landing Page Optimization",
      "Full-Funnel Audits",
      "Checkout Rate Improvement",
      "Experimentation Roadmaps"
    ],
    stats: { value: "+40%", label: "Conversion Rate Uplift" },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Engage your audience and nurture leads with personalized full-funnel marketing automation.",
    badge: "Retention",
    badgeVariant: "secondary" as const,
    features: [
      "Email Marketing Sequences",
      "CRM Setup & Integration",
      "Lead Scoring & Nurturing",
      "Customer Retention Campaigns",
      "Workflow Automation",
      "Automated Reporting"
    ],
    stats: { value: "150%", label: "Increase in Lead Gen" },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Growth Marketing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional growth marketing solutions to grow your online presence and drive sustainable business growth.
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
                    <span>Discuss Your Needs</span>
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