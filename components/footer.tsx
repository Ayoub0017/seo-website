"use client"

import Link from "next/link"
import { Linkedin, Mail, Phone } from "lucide-react"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()
  const isFrench = pathname?.startsWith("/fr")

  const footerLinks = {
    services: [
      { href: isFrench ? "/fr/services/seo" : "/services/seo", label: "SEO" },
      { href: isFrench ? "/fr/services/marketing-de-contenu" : "/services/content-marketing", label: isFrench ? "Marketing de Contenu" : "Content Marketing" },
    ],
    company: [
      { href: isFrench ? "/fr/a-propos" : "/about", label: isFrench ? "À Propos" : "About Me" },
      { href: isFrench ? "/fr/contact" : "/contact", label: isFrench ? "Contact" : "Contact" },
    ],
    contact: [
      { href: "mailto:contact@ayoubouarain.com", label: "contact@ayoubouarain.com", icon: Mail },
      { href: "tel:+212669705440", label: "+212669705440", icon: Phone },
      { href: "https://www.linkedin.com/in/ayoub-ouarain/", label: isFrench ? "Profil LinkedIn" : "LinkedIn Profile", icon: Linkedin },
    ],
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-semibold text-xl text-white mb-4 block">
              Ayoub Ouraian
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {isFrench
                ? "J'aide les entreprises à développer leur présence en ligne grâce à des services professionnels de SEO et de Marketing de Contenu qui génèrent du trafic organique et de l'engagement."
                : "Helping businesses grow their online presence through professional SEO and Content Marketing services that drive organic traffic and engagement."
              }
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/ayoub-ouarain/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@ayoubouarain.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">{isFrench ? "Services" : "Services"}</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">{isFrench ? "Entreprise" : "Company"}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">{isFrench ? "Contactez-moi" : "Get in Touch"}</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <link.icon className="h-4 w-4 mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Ayoub Ouraian. {isFrench ? "Tous droits réservés. Construit avec Next.js et Tailwind CSS." : "All rights reserved. Built with Next.js and Tailwind CSS."}
          </p>
        </div>
      </div>
    </footer>
  )
}
