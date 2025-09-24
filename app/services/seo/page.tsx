import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Brain, Network, BookOpen } from "lucide-react"
import Link from "next/link"

export default function SemanticSEOPage() {
  const semanticSEOServices = [
    {
      title: "Entity-Based Optimization",
      description: "Optimize your content around entities and their relationships for better semantic understanding",
      features: ["Entity identification", "Entity relationships mapping", "Knowledge panel optimization", "Entity-based content strategy"]
    },
    {
      title: "Topical Authority Building",
      description: "Establish your website as the go-to authority in your niche through comprehensive topic coverage",
      features: ["Topic cluster creation", "Content gap analysis", "Authority mapping", "Expertise demonstration"]
    },
    {
      title: "Semantic Keyword Research",
      description: "Advanced keyword research focusing on semantic relationships and user intent",
      features: ["Intent-based clustering", "Semantic keyword mapping", "Related entity discovery", "Context-aware optimization"]
    },
    {
      title: "Knowledge Graph Optimization",
      description: "Optimize your content to appear in Google's Knowledge Graph and featured snippets",
      features: ["Structured data implementation", "FAQ optimization", "Featured snippet targeting", "Knowledge panel enhancement"]
    }
  ]

  const benefits = [
    "Dominate search results through topical authority",
    "Improve semantic understanding by search engines",
    "Higher click-through rates from rich snippets",
    "Better user experience with contextual content",
    "Future-proof SEO strategy aligned with AI search",
    "Establish thought leadership in your industry"
  ]

  return (
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
              Semantic <span className="text-primary">SEO</span> Mastery
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced semantic SEO focusing on entities and topical authority to dominate search results. 
              Build lasting search visibility through strategic content optimization and semantic understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Semantic SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/blog">Read Our Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Semantic SEO Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced semantic optimization strategies that focus on entities, topical authority, 
              and semantic relationships to dominate search results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {semanticSEOServices.map((service, index) => {
              const icons = [Brain, Network, Target, BookOpen];
              const IconComponent = icons[index];
              
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose Semantic SEO?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Semantic SEO goes beyond traditional keyword optimization. It's about building topical authority 
                and semantic understanding that future-proofs your search visibility in the AI era.
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
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">300%</h3>
                <p className="text-muted-foreground">Average Traffic Increase</p>
              </Card>
              <Card className="text-center p-6">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">90%</h3>
                <p className="text-muted-foreground">Client Satisfaction Rate</p>
              </Card>
              <Card className="text-center p-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">6 Months</h3>
                <p className="text-muted-foreground">Average Time to Results</p>
              </Card>
              <Card className="text-center p-6">
                <Search className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">50+</h3>
                <p className="text-muted-foreground">Keywords Ranked</p>
              </Card>
            </div>
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
            Let's discuss your semantic SEO goals and create a strategy that establishes your authority in your niche.
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
  )
}