import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Let's Start Your Success Story",
  description: "Ready to grow your business online? Contact Ayoub Ouraian for professional SEO, content marketing, and web development services. Get a free consultation today.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/contact",
    languages: {
      "en-US": "https://ayoubouarain.com/contact",
    },
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}