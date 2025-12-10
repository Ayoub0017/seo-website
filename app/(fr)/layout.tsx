import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "../globals.css"

export const metadata: Metadata = {
    title: {
        default: "Ayoub Ouraian - Consultant SEO & Marketing de Contenu",
        template: "%s | Ayoub Ouraian"
    },
    description: "Services professionnels de SEO, Marketing de Contenu et Développement Web par Ayoub Ouraian pour développer votre activité en ligne.",
    generator: "v0.app",
    icons: {
        icon: "/ayoub-ouarain-logo.png",
        shortcut: "/ayoub-ouarain-logo.png",
        apple: "/ayoub-ouarain-logo.png",
    },
    alternates: {
        languages: {
            'en': 'https://ayoubouarain.com',
            'fr': 'https://ayoubouarain.com/fr',
        },
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <head>
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-DMGLELW39Z"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DMGLELW39Z');
            `,
                    }}
                />
            </head>
            <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
                <ThemeProvider attribute="class" defaultTheme="system" forcedTheme="light" disableTransitionOnChange>
                    {children}
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    )
}
