import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">
            <Zap className="h-4 w-4 mr-2" />
            SEO & GEO Consultant
          </Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SEO & Generative Engine Optimization Consultant
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Increase your visibility on search engines and AI-powered platforms like ChatGPT, Google AI Overviews, and Perplexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="text-lg px-8 py-6" style={{ backgroundColor: '#1447E6', color: 'white' }}>
              <Link href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
