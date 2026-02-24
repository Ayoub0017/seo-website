import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Award, Users, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutSection() {
    const skillCategories = [
        {
            title: "Growth Strategy",
            skills: [
                "Growth Marketing",
                "Technical Analysis",
                "Data Analytics",
                "Conversion Optimization",
                "User Acquisition",
                "Performance Tracking",
                "Retention Strategies"
            ]
        },
        {
            title: "Customer Acquisition",
            skills: [
                "Marketing Strategy",
                "Campaign Management",
                "Social Media Ads",
                "Email Automation",
                "Go-To-Market Plans",
                "Brand Voice Development"
            ]
        }
    ]

    const achievements = [
        {
            icon: TrendingUp,
            title: "Revenue Growth",
            description: "Substantial revenue increase for clients within months",
        },
        {
            icon: Users,
            title: "Happy Clients",
            description: "Businesses transformed through strategic growth marketing",
        },
        {
            icon: Award,
            title: "7+ Years Experience",
            description: "Proven expertise in growth marketing strategies",
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
            role: "Growth Marketing Consultant",
            company: "Freelance",
            description:
                "Providing strategic growth consulting services to businesses, helping them improve their visibility and drive sustainable growth through results-driven strategies.",
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
            role: "Content & Growth Manager",
            company: "Hostinger International",
            description:
                "Managed content strategy and creation, overseeing growth marketing initiatives to enhance brand presence in target markets.",
        },
        {
            period: "Jul 2019 - May 2022",
            role: "Web Marketing Manager",
            company: "Araoo",
            description:
                "Responsible for web marketing strategies, attribution marketing, and content creation. Developed and executed digital campaigns to drive user acquisition.",
        },
    ]

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Hi, I'm Ayoub
                        </h2>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            With over 7 years of experience in digital strategy, I specialize in helping businesses grow their
                            online presence through data-driven growth marketing strategies.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            I believe in growth strategies that deliver measurable results. My approach combines technical
                            expertise with creative solutions to drive sustainable growth for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="text-lg px-8 py-6 text-white" style={{ backgroundColor: '#1447E6' }}>
                                <Link href="#contact">Work With Me</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent hover:bg-[#1447E6] hover:text-white transition-colors border-[#1447E6] text-[#1447E6]">
                                <Link href="https://www.linkedin.com/in/ayoub-ouarain/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="mr-2 h-5 w-5" />
                                    Connect
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative w-full max-w-md mx-auto">
                        <div className="aspect-square rounded-full overflow-hidden p-8">
                            <Image
                                src="/ayoub-ouarain-profile.png"
                                alt="Ayoub Ouraian - Growth Marketing Consultant"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive marketing expertise focused on driving organic growth and engagement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                    {skillCategories.map((category, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader className="text-center">
                                <CardTitle className="text-xl text-primary mb-4">{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {category.skills.map((skill, sIndex) => (
                                        <Badge key={sIndex} variant="secondary" className="text-sm px-3 py-1">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proven Results</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {achievements.map((achievement, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <achievement.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                                <p className="text-muted-foreground">{achievement.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
