import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Calendar } from "lucide-react"
import Link from "next/link"

export function ContactSectionFR() {
    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "contact@ayoubouarain.com",
            description: "Envoyez-moi un message à tout moment",
            href: "mailto:contact@ayoubouarain.com",
        },
        {
            icon: Phone,
            title: "Téléphone",
            value: "+212669705440",
            description: "Appelez pour une assistance immédiate",
            href: "tel:+212669705440",
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            value: "Se connecter avec moi",
            description: "Réseautage professionnel",
            href: "https://www.linkedin.com/in/ayoub-ouarain/",
        },
        {
            icon: Calendar,
            title: "Consultation Gratuite",
            value: "Réserver un appel",
            description: "Planifier une consultation gratuite",
            href: "https://calendly.com/ab-ouarain/30min",
        },
    ]

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Commençons Votre Succès
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Prêt à développer votre entreprise ? J'aimerais en savoir plus sur votre projet et voir comment je peux vous aider à atteindre vos objectifs.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Contactez-moi</CardTitle>
                                <CardDescription>Plusieurs façons de me joindre selon votre convenance.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <info.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium">{info.title}</h3>
                                            {info.href ? (
                                                <Link
                                                    href={info.href}
                                                    className="text-primary hover:text-primary/80 transition-colors"
                                                    target={info.href.startsWith("http") ? "_blank" : undefined}
                                                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                >
                                                    {info.value}
                                                </Link>
                                            ) : (
                                                <p>{info.value}</p>
                                            )}
                                            <p className="text-sm text-muted-foreground">{info.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card className="bg-primary/5 border-primary/20">
                            <CardHeader>
                                <CardTitle className="text-xl text-center">Prêt à commencer ?</CardTitle>
                                <CardDescription className="text-center">
                                    Réservez une consultation gratuite de 30 minutes pour discuter de votre projet et de vos objectifs.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center space-y-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                    <Calendar className="h-8 w-8 text-primary" />
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Pendant notre appel, nous discuterons de vos objectifs commerciaux, de vos défis actuels et de la façon dont je peux vous aider à réussir en ligne.
                                </p>
                                <Button asChild size="lg" className="w-full text-white" style={{ backgroundColor: '#1447E6' }}>
                                    <Link href="https://calendly.com/ab-ouarain/30min" target="_blank" rel="noopener noreferrer">
                                        Réserver une Consultation Gratuite
                                    </Link>
                                </Button>
                                <p className="text-xs text-muted-foreground">
                                    Aucun engagement requis • Session stratégique gratuite
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
