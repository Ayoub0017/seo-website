import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Zap, Shield, CheckCircle, ArrowRight, Globe, Palette, Database, Rocket, Users, TrendingUp, Award, Monitor, Server, Search } from "lucide-react"
import Link from "next/link"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development Services - Custom Websites & Web Applications",
  description: "Professional web development services including responsive websites, e-commerce platforms, web applications, and custom solutions. Modern, fast, and SEO-optimized websites that drive results.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/services/web-development",
    languages: {
      "en-US": "https://ayoubouarain.com/services/web-development",
    },
  },
  openGraph: {
    title: "Web Development Services - Ayoub Ouraian",
    description: "Professional web development services including responsive websites, e-commerce platforms, web applications, and custom solutions. Modern, fast, and SEO-optimized websites that drive results.",
    url: "https://ayoubouarain.com/services/web-development",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "Web Development Services by Ayoub Ouraian",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services - Ayoub Ouraian",
    description: "Professional web development services including responsive websites, e-commerce platforms, web applications, and custom solutions. Modern, fast, and SEO-optimized websites that drive results.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
  },
}

export default function WebDevelopmentPage() {
  const webServices = [
    {
      title: "Custom Website Development",
      description: "Build modern, responsive websites tailored to your business needs and brand identity",
      icon: Globe,
      features: ["Responsive design", "Custom functionality", "CMS integration", "Performance optimization", "Cross-browser compatibility", "Mobile-first approach"],
      color: "bg-[#1447E6]/10 text-[#1447E6]"
    },
    {
      title: "E-commerce Development",
      description: "Create powerful online stores with secure payment processing and inventory management",
      icon: Database,
      features: ["Shopping cart functionality", "Payment gateway integration", "Inventory management", "Order tracking", "Customer accounts", "Admin dashboard"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Web Application Development",
      description: "Develop custom web applications with advanced functionality and user experiences",
      icon: Code,
      features: ["Custom web apps", "API development", "Database design", "User authentication", "Real-time features", "Scalable architecture"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Frontend Development",
      description: "Create stunning user interfaces with modern frameworks and responsive design",
      icon: Palette,
      features: ["React/Next.js development", "Vue.js applications", "Interactive UI/UX", "Animation & transitions", "Component libraries", "State management"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Backend Development",
      description: "Build robust server-side solutions with secure APIs and database management",
      icon: Server,
      features: ["RESTful API development", "Database optimization", "Server configuration", "Security implementation", "Performance tuning", "Cloud deployment"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "Website Optimization",
      description: "Optimize existing websites for speed, performance, and search engine visibility",
      icon: Rocket,
      features: ["Performance optimization", "SEO implementation", "Core Web Vitals", "Speed optimization", "Code refactoring", "Technical SEO"],
      color: "bg-indigo-500/10 text-indigo-600"
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance with modern development practices"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Perfect user experience across all devices and screen sizes"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security best practices and reliable hosting solutions"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Search engine friendly code structure and technical SEO implementation"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understand your requirements, goals, and create a detailed project roadmap"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes for approval"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build your website with clean code, thorough testing, and quality assurance"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploy your website and provide ongoing maintenance and support"
    }
  ]

  const technologies = [
    "React & Next.js",
    "Vue.js & Nuxt.js",
    "Node.js & Express",
    "Python & Django",
    "PHP & Laravel",
    "WordPress & Headless CMS",
    "MongoDB & PostgreSQL",
    "AWS & Vercel",
    "TypeScript",
    "Tailwind CSS"
  ]

  const projectTypes = [
    {
      title: "Business Websites",
      description: "Professional websites for businesses and organizations",
      features: ["Company profiles", "Service pages", "Contact forms", "Blog integration"]
    },
    {
      title: "E-commerce Stores",
      description: "Online stores with full shopping functionality",
      features: ["Product catalogs", "Shopping carts", "Payment processing", "Order management"]
    },
    {
      title: "Web Applications",
      description: "Custom web apps with advanced functionality",
      features: ["User dashboards", "Data management", "API integrations", "Real-time features"]
    },
    {
      title: "Portfolio Sites",
      description: "Showcase your work with stunning portfolio websites",
      features: ["Gallery displays", "Project showcases", "Client testimonials", "Contact integration"]
    }
  ]

  return (
    <>
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Web Development Services",
          description: "Professional web development services for modern, responsive websites and applications",
          provider: ayoubPersonData,
          serviceType: "Web Development",
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
                <Code className="h-4 w-4 mr-2" />
                Web Development
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Custom Websites & 
                <span className="text-primary"> Web Applications</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Build modern, responsive websites and web applications that drive results. From simple business sites to complex e-commerce platforms, I create digital solutions that grow with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Project</Link>
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
                Why Choose Professional Web Development
              </h2>
              <p className="text-xl text-muted-foreground">
                Modern websites built with the latest technologies and best practices
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
                Web Development Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive web development solutions for businesses of all sizes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webServices.map((service, index) => (
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

        {/* Project Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Types of Projects I Build
              </h2>
              <p className="text-xl text-muted-foreground">
                From simple websites to complex applications, I create solutions that fit your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectTypes.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
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

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Technologies I Use
              </h2>
              <p className="text-xl text-muted-foreground">
                Modern tech stack for building scalable and maintainable applications
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <p className="font-medium text-sm">{tech}</p>
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
                My Development Process
              </h2>
              <p className="text-xl text-muted-foreground">
                A structured approach to deliver high-quality web solutions on time and within budget
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100+</div>
                <div className="text-muted-foreground">Websites Developed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">99%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create a modern, responsive website that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}