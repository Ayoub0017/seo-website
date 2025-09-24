import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Zap, Shield, CheckCircle, ArrowRight, Monitor, Rocket, Globe, Database, Layers } from "lucide-react"
import Link from "next/link"

export default function NextJSWebDevelopmentPage() {
  const developmentServices = [
    {
      title: "Next.js Development",
      description: "High-performance websites built with Next.js for optimal speed and SEO",
      features: ["Server-side rendering", "Static site generation", "API routes", "Image optimization"]
    },
    {
      title: "Headless CMS Integration",
      description: "Flexible content management with Sanity and Contentful for seamless editing",
      features: ["Sanity CMS setup", "Contentful integration", "Real-time previews", "Content modeling"]
    },
    {
      title: "Performance & SEO Optimization",
      description: "Lightning-fast websites optimized for search engines and user experience",
      features: ["Core Web Vitals optimization", "SEO-friendly architecture", "Image optimization", "Caching strategies"]
    },
    {
      title: "Security & Maintenance",
      description: "Secure, scalable websites with ongoing support and maintenance",
      features: ["Security best practices", "Regular updates", "Performance monitoring", "Technical support"]
    }
  ]

  const technologies = [
    { name: "Next.js", description: "React framework for production websites" },
    { name: "Sanity", description: "Structured content platform" },
    { name: "Contentful", description: "API-first headless CMS" },
    { name: "TypeScript", description: "Type-safe development" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    { name: "Vercel", description: "Deployment and hosting platform" }
  ]

  const benefits = [
    "Lightning-fast loading speeds (under 2 seconds)",
    "SEO-optimized from the ground up",
    "Secure and scalable architecture",
    "Easy content management with headless CMS",
    "Mobile-first responsive design",
    "Built-in performance monitoring"
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <Code className="w-4 h-4 mr-2" />
              Next.js Development
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Next.js & Headless <span className="text-primary">CMS</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Lightning-fast, secure, and SEO-optimized websites built with Next.js and headless CMS tools like Sanity and Contentful. 
              Modern web development that drives performance and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Your Next.js Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built for Performance & Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every website I build is designed with performance, user experience, 
              and search engine optimization as top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Optimized for speed with loading times under 3 seconds</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Mobile First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Responsive design that works perfectly on all devices</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Built with security best practices and reliable hosting</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">SEO Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Search engine friendly from day one</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Complete Web Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple landing pages to complex web applications, 
              I provide end-to-end development solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-primary" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Modern Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I use cutting-edge technologies and frameworks to build websites 
              that are fast, scalable, and future-proof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose Professional Web Development?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                A professionally developed website is an investment in your business growth. 
                It's not just about looking good—it's about performing well and driving results.
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
                <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">99.9%</h3>
                <p className="text-muted-foreground">Uptime Guarantee</p>
              </Card>
              <Card className="text-center p-6">
                <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">100+</h3>
                <p className="text-muted-foreground">Websites Built</p>
              </Card>
              <Card className="text-center p-6">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">&lt;3s</h3>
                <p className="text-muted-foreground">Average Load Time</p>
              </Card>
              <Card className="text-center p-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
                <p className="text-muted-foreground">Security Monitoring</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project requirements and create a website that exceeds your expectations 
            and drives real business results.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/contact">
              Start Your Web Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}