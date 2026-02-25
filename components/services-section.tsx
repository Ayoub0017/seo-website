import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Target, Eye, Mail, CheckCircle, TrendingUp, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Target,
    title: "Technical SEO",
    description: "Build a solid technical foundation to ensure optimal crawling, indexing, and performance on search engines.",
    badge: "Foundation",
    badgeVariant: "default" as const,
    features: [
      "Site Architecture & Taxonomy",
      "Core Web Vitals Optimization",
      "Advanced Schema Markup",
      "Log File Analysis",
      "JavaScript SEO Structuring",
      "Indexation Troubleshooting"
    ],
    stats: { value: "100%", label: "Crawlability Score" },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Search,
    title: "Organic Acquisition",
    description: "Drive sustainable, high-quality traffic through comprehensive organic growth strategies tailored to your industry.",
    badge: "Sustainable Growth",
    badgeVariant: "secondary" as const,
    features: [
      "Keyword Strategy & Research",
      "Link Building Campaigns",
      "E-commerce SEO Optimization",
      "SaaS SEO Strategies",
      "Local SEO & Map Pack",
      "Performance Analytics"
    ],
    stats: { value: "200%", label: "Avg. Organic Growth" },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Content Strategy",
    description: "Create compelling, search-optimized content that engages your audience and establishes topical authority.",
    badge: "Authority",
    badgeVariant: "secondary" as const,
    features: [
      "Topic Cluster Planning",
      "Content Gap Analysis",
      "SEO & Conversion Copywriting",
      "E-E-A-T Audits",
      "Blog Content Strategy",
      "Content Refreshing"
    ],
    stats: { value: "3x", label: "Better Engagement" },
    href: "#contact",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Zap,
    title: "Generative Engine Optimization (GEO)",
    description: "Increase your visibility on AI search engines and LLM platforms like ChatGPT, Perplexity, and AI Overviews.",
    badge: "Future-proof",
    badgeVariant: "secondary" as const,
    features: [
      "AI Platform Audits",
      "Brand Entity Optimization",
      "Citation Generation",
      "Conversational Keyword Strategy",
      "LLM-friendly Structuring",
      "Content Format Adaptations"
    ],
    stats: { value: "Top", label: "AI Search Placements" },
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
            SEO & GEO Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional SEO and AI search optimization solutions to increase your visibility and drive sustainable organic growth.
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