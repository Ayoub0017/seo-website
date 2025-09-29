import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Brain, Network, BookOpen, Map, FileText, Code2, Lightbulb } from "lucide-react"
import Link from "next/link"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Semantic SEO Services",
  description: "Advanced semantic SEO services focusing on topical authority, entity relationships, and contextual content optimization. Build lasting search presence through semantic understanding and schema markup.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/services/semantic-seo",
    languages: {
      "en-US": "https://ayoubouarain.com/services/semantic-seo",
    },
  },
}

export default function SemanticSEOServicesPage() {
  const semanticSeoServices = [
    {
      title: "Topical Map Development",
      description: "Create comprehensive topical maps that establish your authority across entire subject areas, not just individual keywords",
      features: ["Entity relationship mapping", "Topic cluster architecture", "Content gap analysis", "Semantic keyword research"],
      icon: Map
    },
    {
      title: "Semantic Content Briefs",
      description: "Develop content briefs based on semantic SEO principles that guide writers to create contextually rich, topically relevant content",
      features: ["Entity-based content planning", "Contextual keyword integration", "Topic depth analysis", "Semantic content structure"],
      icon: FileText
    },
    {
      title: "Schema Markup Implementation",
      description: "Advanced schema markup strategies to help search engines understand your content's context and relationships",
      features: ["Structured data optimization", "Entity markup implementation", "Rich snippet enhancement", "Knowledge graph integration"],
      icon: Code2
    },
    {
      title: "Contextual Content Flow",
      description: "Optimize content in logical, contextual flows that demonstrate topical expertise and semantic relationships",
      features: ["Content hierarchy optimization", "Internal linking strategy", "Topic progression mapping", "Semantic content clustering"],
      icon: Network
    },
    {
      title: "Entity-Based Optimization",
      description: "Focus on entities and their relationships rather than traditional keyword density for modern search algorithms",
      features: ["Entity identification & optimization", "Relationship mapping", "Knowledge panel optimization", "Entity-based content strategy"],
      icon: Brain
    },
    {
      title: "Topical Authority Building",
      description: "Establish your website as the definitive source on specific topics through comprehensive semantic coverage",
      features: ["Topic authority assessment", "Content depth analysis", "Expertise demonstration", "Thought leadership positioning"],
      icon: Lightbulb
    }
  ]

  const semanticApproach = [
    {
      title: "Topics Over Keywords",
      description: "We focus on comprehensive topic coverage rather than individual keyword targeting, building true topical authority."
    },
    {
      title: "Entity Relationships",
      description: "Understanding and optimizing for entity relationships helps search engines better comprehend your content's context."
    },
    {
      title: "Contextual Relevance",
      description: "Content is optimized for semantic meaning and contextual relevance, not just keyword density."
    },
    {
      title: "Schema-First Approach",
      description: "Structured data and schema markup are integral to our semantic SEO strategy from the ground up."
    }
  ]

  const benefits = [
    "Build comprehensive topical authority in your niche",
    "Future-proof your SEO against algorithm changes",
    "Improve semantic understanding by search engines",
    "Higher click-through rates from rich snippets",
    "Better user experience with contextual content",
    "Establish thought leadership through topic mastery",
    "Dominate entire topic clusters, not just keywords",
    "Enhanced visibility in AI-powered search results"
  ]

  return (
    <>
      {/* Schema Markup for Semantic SEO Service */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Semantic SEO Services",
          description: "Advanced semantic SEO services focusing on topical authority, entity relationships, and contextual content optimization. Build lasting search presence through semantic understanding and schema markup.",
          provider: ayoubPersonData,
          areaServed: "Worldwide",
          serviceType: "Semantic Search Engine Optimization",
          offers: {
            description: "Professional semantic SEO services including topical mapping, entity optimization, schema markup implementation, and contextual content strategy"
          }
        }} 
      />
      
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <Brain className="w-4 h-4 mr-2" />
              Semantic SEO Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">Semantic SEO</span> Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced semantic SEO services that focus on topics, not keywords. Build topical authority through 
              strategic content mapping, entity optimization, and contextual content flows that search engines truly understand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Semantic SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/blog">Learn About Semantic SEO</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Semantic Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Semantic SEO Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We go beyond traditional keyword optimization to build comprehensive topical authority 
              that search engines and users recognize as expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {semanticApproach.map((approach, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    {approach.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {approach.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Semantic SEO Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive semantic SEO strategies that establish topical authority, optimize for entity relationships,
              and create content that search engines understand at a deeper level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {semanticSeoServices.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose Semantic SEO?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Semantic SEO represents the future of search optimization. By focusing on topics, entities, and contextual 
                relationships, we build sustainable search visibility that adapts to algorithm changes and AI-powered search.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Map className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Topical Maps</h3>
                <p className="text-muted-foreground">Comprehensive topic coverage strategy</p>
              </Card>
              <Card className="text-center p-6">
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Entity Focus</h3>
                <p className="text-muted-foreground">Entity-based optimization approach</p>
              </Card>
              <Card className="text-center p-6">
                <Code2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Schema Markup</h3>
                <p className="text-muted-foreground">Advanced structured data implementation</p>
              </Card>
              <Card className="text-center p-6">
                <Network className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Content Flow</h3>
                <p className="text-muted-foreground">Logical contextual content structure</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Semantic SEO Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to building topical authority and semantic understanding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Topic Research</h3>
              <p className="text-muted-foreground">Identify core topics and entity relationships in your niche</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Topical Mapping</h3>
              <p className="text-muted-foreground">Create comprehensive topical maps and content clusters</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Content Briefs</h3>
              <p className="text-muted-foreground">Develop semantic content briefs for contextual optimization</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Implementation</h3>
              <p className="text-muted-foreground">Execute schema markup and contextual content optimization</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Build Topical Authority?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your semantic SEO goals and create a strategy that establishes your authority through 
            comprehensive topic coverage and entity optimization.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/contact">
              Start Your Semantic SEO Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
    </>
  )
}