import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Target, Eye, Mail, CheckCircle, TrendingUp, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "SEO Services",
    description: "Boost your search rankings and drive organic traffic with comprehensive SEO strategies.",
    badge: "Most Popular",
    badgeVariant: "default" as const,
    features: [
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Link Building Campaigns",
      "Local SEO & Google My Business",
      "E-commerce SEO",
      "Content SEO Strategy",
      "Performance Tracking & Reporting"
    ],
    stats: { value: "300%", label: "Avg. Traffic Increase" },
    href: "/services/seo",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "Drive immediate results with targeted Google Ads campaigns that maximize your ROI.",
    badge: "Fast Results",
    badgeVariant: "secondary" as const,
    features: [
      "Search Ads Management",
      "Display Advertising",
      "Shopping Campaigns",
      "YouTube Advertising",
      "Keyword Research & Bidding",
      "Landing Page Optimization",
      "Conversion Tracking",
      "Performance Analytics"
    ],
    stats: { value: "400%", label: "Average ROAS" },
    href: "/services/google-ads",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Eye,
    title: "Meta Ads",
    description: "Reach your ideal customers on Facebook and Instagram with targeted social media advertising.",
    badge: "High Engagement",
    badgeVariant: "outline" as const,
    features: [
      "Facebook Ads Management",
      "Instagram Advertising",
      "Lead Generation Campaigns",
      "E-commerce Ads",
      "Video Advertising",
      "Audience Targeting",
      "Creative Development",
      "Campaign Optimization"
    ],
    stats: { value: "300%", label: "Average ROAS" },
    href: "/services/meta-ads",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Mail,
    title: "Cold Emailing",
    description: "Generate quality leads with personalized cold email campaigns that get responses.",
    badge: "Lead Generation",
    badgeVariant: "default" as const,
    features: [
      "Prospect Research & Targeting",
      "Email Copywriting",
      "Campaign Management",
      "Deliverability Optimization",
      "CRM Integration",
      "Follow-up Sequences",
      "Response Tracking",
      "Performance Analytics"
    ],
    stats: { value: "25%", label: "Average Open Rate" },
    href: "/services/cold-emailing",
    gradient: "from-blue-500/10 to-purple-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Digital Marketing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From SEO to Meta Ads, we provide end-to-end digital marketing solutions tailored to your business goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`bg-white border-2 hover:shadow-lg transition-shadow rounded-lg p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center`}>
                  <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  {service.badge && (
                    <Badge variant={service.badgeVariant} className="text-xs">
                      {service.badge}
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{color: '#1447E6'}}>{service.stats.value}</div>
                  <p className="text-sm text-gray-600">{service.stats.label}</p>
                </div>
                <Button asChild className="text-white" style={{backgroundColor: '#1447E6'}}>
                  <Link href={service.href} className="flex items-center gap-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
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