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
  title: "Content Marketing Services - Engage, Convert & Grow Your Audience",
  description: "Strategic content marketing services including blog writing, social media content, email marketing, and content strategy. Build brand authority and drive conversions through compelling content.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/services/content-marketing",
    languages: {
      "en-US": "https://ayoubouarain.com/services/content-marketing",
    },
  },
  openGraph: {
    title: "Content Marketing Services - Ayoub Ouraian",
    description: "Strategic content marketing services including blog writing, social media content, email marketing, and content strategy. Build brand authority and drive conversions through compelling content.",
    url: "https://ayoubouarain.com/services/content-marketing",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Content Marketing Services by Ayoub Ouraian",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Services - Ayoub Ouraian",
    description: "Strategic content marketing services including blog writing, social media content, email marketing, and content strategy. Build brand authority and drive conversions through compelling content.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
  },
}

export default function ContentMarketingPage() {
  const contentServices = [
    {
      title: "Content Strategy & Planning",
      description: "Develop comprehensive content strategies aligned with your business goals and audience needs",
      icon: Target,
      features: ["Content audit & analysis", "Audience research & personas", "Content calendar planning", "Competitive content analysis", "Content gap identification", "Performance metrics setup"],
      color: "bg-[#1447E6]/10 text-[#1447E6]"
    },
    {
      title: "Blog Writing & SEO Content",
      description: "Create engaging, SEO-optimized blog posts and articles that drive traffic and establish authority",
      icon: BookOpen,
      features: ["SEO-optimized blog posts", "Long-form content creation", "Topic research & ideation", "Keyword integration", "Content optimization", "Editorial calendar management"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Social Media Content",
      description: "Craft compelling social media content that engages your audience and builds community",
      icon: Share2,
      features: ["Platform-specific content", "Visual content creation", "Social media captions", "Hashtag strategy", "Community engagement", "Social media calendars"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Email Marketing Content",
      description: "Design email campaigns that nurture leads and drive conversions through strategic messaging",
      icon: Mail,
      features: ["Email campaign creation", "Newsletter content", "Drip campaign sequences", "Subject line optimization", "A/B testing content", "Personalization strategies"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Video & Multimedia Content",
      description: "Create engaging video scripts, multimedia content, and interactive materials",
      icon: Video,
      features: ["Video script writing", "Podcast content planning", "Infographic concepts", "Interactive content", "Webinar planning", "Multimedia storytelling"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "Brand Voice & Messaging",
      description: "Develop consistent brand voice and messaging that resonates with your target audience",
      icon: Megaphone,
      features: ["Brand voice development", "Messaging framework", "Tone of voice guidelines", "Content style guides", "Brand storytelling", "Message consistency"],
      color: "bg-indigo-500/10 text-indigo-600"
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: "Audience Engagement",
      description: "Build meaningful connections with your audience through valuable, relevant content"
    },
    {
      icon: TrendingUp,
      title: "Increased Traffic",
      description: "Drive more qualified traffic to your website through strategic content marketing"
    },
    {
      icon: Award,
      title: "Brand Authority",
      description: "Establish your business as a thought leader and trusted authority in your industry"
    },
    {
      icon: Heart,
      title: "Customer Loyalty",
      description: "Build lasting relationships with customers through consistent, valuable content"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Content Audit & Strategy",
      description: "Analyze existing content, identify gaps, and develop a comprehensive content strategy"
    },
    {
      step: "02",
      title: "Content Planning",
      description: "Create detailed content calendars and editorial plans aligned with your business goals"
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Produce high-quality, engaging content across multiple formats and platforms"
    },
    {
      step: "04",
      title: "Distribution & Optimization",
      description: "Distribute content strategically and continuously optimize based on performance data"
    }
  ]

  const contentTypes = [
    "Blog Posts & Articles",
    "Social Media Content",
    "Email Campaigns",
    "Video Scripts",
    "Infographics",
    "Whitepapers & eBooks",
    "Case Studies",
    "Landing Page Copy",
    "Product Descriptions",
    "Press Releases"
  ]

  return (
    <>
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Content Marketing Services",
          description: "Strategic content marketing services to engage audiences and drive business growth",
          provider: ayoubPersonData,
          serviceType: "Content Marketing",
          areaServed: "Worldwide"
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
                Content Marketing
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1447E6] to-purple-600 bg-clip-text text-transparent">
                Content Marketing
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Build brand authority, engage your audience, and drive conversions through compelling content marketing strategies that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" style={{backgroundColor: '#1447E6', color: 'white'}} asChild>
                  <Link href="https://calendly.com/ab-ouarain/30min">Get Free Strategy Session</Link>
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
                Why Choose Content Marketing?
              </h2>
              <p className="text-xl text-gray-600">
                Content marketing generates 3x more leads than traditional marketing while costing 62% less
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
                Comprehensive Content Marketing Services
              </h2>
              <p className="text-xl text-gray-600">
                Full-spectrum content solutions tailored to your business needs and goals
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
                Content Types We Create
              </h2>
              <p className="text-xl text-muted-foreground">
                From blog posts to video scripts, we create content that resonates with your audience
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
                My Content Marketing Process
              </h2>
              <p className="text-xl text-gray-600">
                A proven methodology that delivers consistent results for businesses of all sizes
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
                <div className="text-blue-100">Content Pieces Created</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">250%</div>
                <div className="text-blue-100">Average Engagement Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">85%</div>
                <div className="text-blue-100">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free strategy session and discover how to engage your audience and drive growth through compelling content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" style={{backgroundColor: '#1447E6'}} asChild>
                <Link href="https://calendly.com/ab-ouarain/30min">Get Free Strategy Session</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}