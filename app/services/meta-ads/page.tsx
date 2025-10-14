import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Target, Users, TrendingUp, Eye, MessageSquare, ShoppingCart, Video, BarChart3, Zap, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Expert Meta Ads Management | Facebook & Instagram Advertising',
  description: 'Drive targeted traffic and conversions with our professional Meta Ads management. Facebook & Instagram advertising campaigns that deliver measurable ROI.',
  openGraph: {
    title: 'Expert Meta Ads Management | Facebook & Instagram Advertising',
    description: 'Drive targeted traffic and conversions with our professional Meta Ads management. Facebook & Instagram advertising campaigns that deliver measurable ROI.',
    type: 'website',
  },
}

const metaServices = [
  {
    title: 'Facebook Ads',
    description: 'Targeted Facebook advertising campaigns that reach your ideal customers',
    icon: Target,
    features: [
      'Custom audience targeting',
      'Lookalike audience creation',
      'Interest-based targeting',
      'Behavioral targeting',
      'Demographic targeting',
      'Geographic targeting'
    ],
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Instagram Ads',
    description: 'Visually compelling Instagram campaigns that drive engagement and sales',
    icon: Eye,
    features: [
      'Story ads creation',
      'Feed ads optimization',
      'Reels advertising',
      'Shopping ads setup',
      'Influencer collaboration',
      'Visual content strategy'
    ],
    color: 'bg-purple-50 border-purple-200'
  },
  {
    title: 'Lead Generation',
    description: 'Capture high-quality leads with optimized Meta lead generation campaigns',
    icon: Users,
    features: [
      'Lead form optimization',
      'CRM integration',
      'Lead scoring setup',
      'Follow-up automation',
      'Conversion tracking',
      'Lead nurturing campaigns'
    ],
    color: 'bg-green-50 border-green-200'
  },
  {
    title: 'E-commerce Ads',
    description: 'Drive online sales with dynamic product ads and shopping campaigns',
    icon: ShoppingCart,
    features: [
      'Product catalog setup',
      'Dynamic product ads',
      'Retargeting campaigns',
      'Abandoned cart recovery',
      'Cross-sell campaigns',
      'Revenue optimization'
    ],
    color: 'bg-orange-50 border-orange-200'
  },
  {
    title: 'Video Advertising',
    description: 'Engage audiences with compelling video content across Meta platforms',
    icon: Video,
    features: [
      'Video ad creation',
      'Story video ads',
      'Reels promotion',
      'Live video advertising',
      'Video retargeting',
      'Engagement optimization'
    ],
    color: 'bg-red-50 border-red-200'
  },
  {
    title: 'Campaign Optimization',
    description: 'Continuous optimization to maximize your Meta advertising ROI',
    icon: TrendingUp,
    features: [
      'A/B testing campaigns',
      'Bid optimization',
      'Budget allocation',
      'Performance monitoring',
      'Conversion optimization',
      'ROI maximization'
    ],
    color: 'bg-indigo-50 border-indigo-200'
  }
]

const benefits = [
  {
    icon: Target,
    title: 'Precise Targeting',
    description: 'Reach your exact audience with Meta\'s advanced targeting capabilities'
  },
  {
    icon: BarChart3,
    title: 'Measurable Results',
    description: 'Track every click, conversion, and dollar spent with detailed analytics'
  },
  {
    icon: Zap,
    title: 'Quick Results',
    description: 'Start seeing traffic and leads within hours of campaign launch'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Scale successful campaigns to maximize your advertising investment'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Strategy Development',
    description: 'We analyze your business goals and create a comprehensive Meta advertising strategy'
  },
  {
    step: '02',
    title: 'Audience Research',
    description: 'Identify and define your target audiences using Meta\'s advanced targeting options'
  },
  {
    step: '03',
    title: 'Creative Development',
    description: 'Design compelling ad creatives that resonate with your target audience'
  },
  {
    step: '04',
    title: 'Campaign Launch',
    description: 'Launch optimized campaigns across Facebook and Instagram platforms'
  },
  {
    step: '05',
    title: 'Optimization',
    description: 'Continuously monitor and optimize campaigns for maximum performance'
  },
  {
    step: '06',
    title: 'Reporting',
    description: 'Provide detailed reports on campaign performance and ROI'
  }
]

export default function MetaAdsPage() {
  return (
    <>
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                Meta Advertising Experts
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Drive Results with Expert Meta Ads Management
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Reach your ideal customers on Facebook and Instagram with targeted advertising campaigns that deliver measurable ROI and sustainable growth.
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
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Meta Ads Management?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine data-driven strategies with creative excellence to deliver Meta advertising campaigns that drive real business results.
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
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Meta Advertising Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Facebook ads to Instagram campaigns, we provide end-to-end Meta advertising solutions tailored to your business goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metaServices.map((service, index) => (
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
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Meta Ads Management Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your Meta advertising campaigns deliver maximum ROI from day one.
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
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meta Ads Results That Speak for Themselves
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">300%</div>
              <p className="text-blue-100">Average ROAS Increase</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50%</div>
              <p className="text-blue-100">Lower Cost Per Lead</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2.5M+</div>
              <p className="text-blue-100">Ad Impressions Managed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <p className="text-blue-100">Successful Campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your Business with Meta Ads?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a free strategy session and discover how we can help you reach more customers and drive more sales on Facebook and Instagram.
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
      </section>

      <Footer />
      </main>
    </>
  )
}