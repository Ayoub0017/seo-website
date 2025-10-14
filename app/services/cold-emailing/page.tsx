import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Mail, Users, Target, TrendingUp, MessageSquare, Database, Zap, BarChart3, Shield, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Cold Email Marketing | Lead Generation & Outreach',
  description: 'Generate high-quality leads with our professional cold email marketing services. Personalized outreach campaigns that convert prospects into customers.',
  openGraph: {
    title: 'Professional Cold Email Marketing | Lead Generation & Outreach',
    description: 'Generate high-quality leads with our professional cold email marketing services. Personalized outreach campaigns that convert prospects into customers.',
    type: 'website',
  },
}

const coldEmailServices = [
  {
    title: 'Lead Generation',
    description: 'Identify and target high-quality prospects for your business',
    icon: Target,
    features: [
      'Prospect research & identification',
      'Lead list building',
      'Contact verification',
      'Industry targeting',
      'Company size filtering',
      'Geographic targeting'
    ],
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Email Copywriting',
    description: 'Compelling email copy that gets responses and drives conversions',
    icon: MessageSquare,
    features: [
      'Personalized email templates',
      'A/B tested subject lines',
      'Value proposition crafting',
      'Call-to-action optimization',
      'Follow-up sequences',
      'Industry-specific messaging'
    ],
    color: 'bg-green-50 border-green-200'
  },
  {
    title: 'Campaign Management',
    description: 'End-to-end management of your cold email campaigns',
    icon: BarChart3,
    features: [
      'Campaign setup & launch',
      'Automated follow-ups',
      'Response tracking',
      'Performance monitoring',
      'List management',
      'Deliverability optimization'
    ],
    color: 'bg-purple-50 border-purple-200'
  },
  {
    title: 'Email Deliverability',
    description: 'Ensure your emails reach the inbox, not the spam folder',
    icon: Shield,
    features: [
      'Domain authentication setup',
      'IP warming strategies',
      'Spam score optimization',
      'Blacklist monitoring',
      'Reputation management',
      'Inbox placement testing'
    ],
    color: 'bg-orange-50 border-orange-200'
  },
  {
    title: 'CRM Integration',
    description: 'Seamlessly integrate with your existing sales and marketing tools',
    icon: Database,
    features: [
      'CRM synchronization',
      'Lead scoring setup',
      'Pipeline automation',
      'Contact management',
      'Activity tracking',
      'Sales handoff process'
    ],
    color: 'bg-red-50 border-red-200'
  },
  {
    title: 'Analytics & Reporting',
    description: 'Detailed insights to optimize your cold email performance',
    icon: TrendingUp,
    features: [
      'Open rate tracking',
      'Click-through analysis',
      'Response rate monitoring',
      'Conversion tracking',
      'ROI measurement',
      'Performance reporting'
    ],
    color: 'bg-indigo-50 border-indigo-200'
  }
]

const benefits = [
  {
    icon: Users,
    title: 'Quality Leads',
    description: 'Generate high-quality prospects that are more likely to convert'
  },
  {
    icon: Zap,
    title: 'Scalable Outreach',
    description: 'Reach hundreds of prospects while maintaining personalization'
  },
  {
    icon: BarChart3,
    title: 'Measurable Results',
    description: 'Track every metric that matters for your lead generation goals'
  },
  {
    icon: TrendingUp,
    title: 'Cost-Effective',
    description: 'Lower cost per lead compared to traditional marketing channels'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Strategy & Planning',
    description: 'Define target audience, messaging strategy, and campaign objectives'
  },
  {
    step: '02',
    title: 'Prospect Research',
    description: 'Identify and verify high-quality prospects that match your ideal customer profile'
  },
  {
    step: '03',
    title: 'Email Creation',
    description: 'Craft personalized, compelling email templates and subject lines'
  },
  {
    step: '04',
    title: 'Technical Setup',
    description: 'Configure email infrastructure, authentication, and deliverability settings'
  },
  {
    step: '05',
    title: 'Campaign Launch',
    description: 'Launch campaigns with proper timing and volume controls'
  },
  {
    step: '06',
    title: 'Optimization',
    description: 'Monitor performance and continuously optimize for better results'
  }
]

export default function ColdEmailingPage() {
  return (
    <>
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="outline" className="mb-4">
                  Cold Email Specialists
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Generate Quality Leads with Professional Cold Email Marketing
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Turn cold prospects into warm leads with personalized email campaigns that get responses, build relationships, and drive revenue growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" style={{backgroundColor: '#1447E6'}} asChild>
                  <Link href="https://calendly.com/ab-ouarain/30min">
                    Get Free Strategy Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Cold Email Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine proven strategies with advanced technology to deliver cold email campaigns that generate real business results.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Cold Email Marketing Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From prospect research to campaign optimization, we handle every aspect of your cold email marketing strategy.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coldEmailServices.map((service, index) => (
                <Card key={index} className={`${service.color} border-2 hover:shadow-lg transition-shadow`}>
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Cold Email Marketing Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach that ensures your cold email campaigns deliver consistent results and sustainable growth.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cold Email Results That Drive Growth
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">25%</div>
                <p className="text-blue-100">Average Open Rate</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">8%</div>
                <p className="text-blue-100">Average Response Rate</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500K+</div>
                <p className="text-blue-100">Emails Delivered</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">1200+</div>
                <p className="text-blue-100">Qualified Leads Generated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Generate More Leads with Cold Email?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get a free cold email audit and discover how we can help you reach more prospects and convert them into paying customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" style={{backgroundColor: '#1447E6'}} asChild>
                  <Link href="https://calendly.com/ab-ouarain/30min">
                    Get Free Strategy Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </>
  )
}