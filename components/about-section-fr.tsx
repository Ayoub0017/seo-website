import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Award, Users, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutSectionFR() {
    const skillCategories = [
        {
            title: "Stratégie de Croissance",
            skills: [
                "Growth Marketing",
                "Analyse Technique",
                "Analyse de Données",
                "Optimisation des Conversions",
                "Acquisition d'Utilisateurs",
                "Suivi des Performances",
                "Stratégies de Rétention"
            ]
        },
        {
            title: "Acquisition Client",
            skills: [
                "Stratégie Marketing",
                "Gestion de Campagnes",
                "Publicité Réseaux Sociaux",
                "Automatisation Email",
                "Plans Go-To-Market",
                "Développement de Marque"
            ]
        }
    ]

    const achievements = [
        {
            icon: TrendingUp,
            title: "Croissance des Revenus",
            description: "Augmentation substantielle des revenus pour les clients en quelques mois",
        },
        {
            icon: Users,
            title: "Clients Satisfaits",
            description: "Des entreprises transformées grâce au growth marketing stratégique",
        },
        {
            icon: Award,
            title: "7+ Ans d'Expérience",
            description: "Expertise prouvée en stratégies de growth marketing",
        },
        {
            icon: Clock,
            title: "Support 24/7",
            description: "Support dédié et optimisation continue",
        },
    ]

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Bonjour, je suis Ayoub
                        </h2>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            Avec plus de 7 ans d'expérience en stratégie digitale, je me spécialise pour aider les entreprises à développer leur présence en ligne grâce à des stratégies de growth marketing axées sur les données.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Je crois en des stratégies de croissance qui donnent des résultats mesurables. Mon approche combine l'expertise technique avec des solutions créatives pour générer une croissance durable.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="text-lg px-8 py-6 text-white" style={{ backgroundColor: '#1447E6' }}>
                                <Link href="#contact">Travailler Avec Moi</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent hover:bg-[#1447E6] hover:text-white transition-colors border-[#1447E6] text-[#1447E6]">
                                <Link href="https://www.linkedin.com/in/ayoub-ouarain/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="mr-2 h-5 w-5" />
                                    Se connecter
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative w-full max-w-md mx-auto">
                        <div className="aspect-square rounded-full overflow-hidden p-8">
                            <Image
                                src="/ayoub-ouarain-profile.png"
                                alt="Ayoub Ouraian - Consultant en Growth Marketing"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Compétences & Expertise</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Expertise marketing complète axée sur la croissance organique et l'engagement.
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
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Résultats Prouvés</h2>
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
