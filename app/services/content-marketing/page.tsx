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
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 via-background to-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                <PenTool className="h-4 w-4 mr-2" />
                Content Marketing
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Engage, Convert & Grow with 
                <span className="text-primary"> Strategic Content</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Build brand authority, engage your audience, and drive conversions through compelling content marketing strategies that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Content Strategy</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Content Marketing Matters
              </h2>
              <p className="text-xl text-muted-foreground">
                Content marketing generates 3x more leads than traditional marketing while costing 62% less
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Content Marketing Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive content solutions to engage your audience and drive business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${service.color}`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                My Content Marketing Process
              </h2>
              <p className="text-xl text-muted-foreground">
                A strategic approach to content creation that drives engagement and conversions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < process.length - 1 && (
                    <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto mt-4 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Content Pieces Created</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">250%</div>
                <div className="text-muted-foreground">Average Engagement Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">85%</div>
                <div className="text-muted-foreground">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create compelling content that engages your audience and drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start Content Strategy</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">View Content Examples</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}