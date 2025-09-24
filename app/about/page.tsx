import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Award, Users, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const skillCategories = [
    {
      title: "SEO & Search Marketing",
      skills: [
        "Semantic SEO",
        "Technical SEO", 
        "Keyword Research",
        "Link Building",
        "Google Analytics",
        "Entity Optimization",
        "Topical Authority"
      ]
    },
    {
      title: "Content Marketing",
      skills: [
        "Content Strategy",
        "Blog Writing",
        "Social Media Content",
        "Email Marketing",
        "Content Planning",
        "Brand Voice Development"
      ]
    },
    {
      title: "Web Development",
      skills: [
        "Next.js Development",
        "React & TypeScript",
        "Headless CMS",
        "Performance Optimization",
        "SEO-Friendly Architecture",
        "Responsive Design"
      ]
    }
  ]

  const achievements = [
    {
      icon: TrendingUp,
      title: "500% Traffic Growth",
      description: "Average organic traffic increase for clients within 6 months",
    },
    {
      icon: Users,
      title: "50+ Happy Clients",
      description: "Businesses transformed through strategic digital marketing",
    },
    {
      icon: Award,
      title: "7+ Years Experience",
      description: "Proven expertise in SEO and content marketing",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Dedicated support and ongoing optimization",
    },
  ]

  const experience = [
    {
      period: "Jan 2024 - Present",
      role: "Search Engine Optimization Consultant",
      company: "Freelance",
      description:
        "Providing strategic SEO consulting services to businesses, helping them improve their organic search visibility and drive sustainable growth through data-driven optimization strategies.",
    },
    {
      period: "Jan 2025 - Jul 2025",
      role: "Growth Lead",
      company: "Agency",
      description:
        "Leading growth initiatives and developing comprehensive digital marketing strategies to drive client acquisition and revenue growth across multiple channels.",
    },
    {
      period: "May 2022 - Nov 2023",
      role: "French Content Manager",
      company: "Hostinger International",
      description:
        "Managed French content strategy and creation, overseeing content marketing initiatives and editorial processes to enhance brand presence in French-speaking markets.",
    },
    {
      period: "Jul 2019 - May 2022",
      role: "Web Marketing Manager",
      company: "Araoo",
      description:
        "Responsible for web marketing strategies, attribution marketing, and content creation. Developed and executed digital marketing campaigns to drive user acquisition and engagement.",
    },
    {
      period: "Sep 2017 - Jul 2019",
      role: "Freelance Content Marketer",
      company: "Independent",
      description:
        "Provided content marketing consulting services, specializing in search engine optimization and marketing strategy for various clients across different industries.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Hi, I'm <span className="text-primary">Ayoub Ouraian</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                With over 7 years of experience in digital marketing, I specialize in helping businesses grow their
                online presence through strategic SEO, compelling content marketing, and modern web development.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I believe in data-driven strategies that deliver measurable results. My approach combines technical
                expertise with creative content solutions to drive sustainable growth for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact">Work With Me</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                  <Image
                    src="/ayoub-ouarain-profile.png"
                    alt="Ayoub Ouraian - SEO and Content Marketing Specialist"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across three core service areas to drive your digital success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-primary mb-4">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Proven Results</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak for themselves - real results for real businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A track record of success across various industries and company sizes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {index < experience.length - 1 && <div className="absolute left-3 top-8 w-0.5 h-full bg-border"></div>}
                <div className="absolute left-0 top-2 w-6 h-6 bg-primary rounded-full"></div>

                <Card className="ml-4">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to take your digital marketing to the next level? I'd love to hear about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                View LinkedIn Profile
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  )
}
