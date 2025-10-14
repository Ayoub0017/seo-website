import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Holistic Digital <span className="text-primary">Marketing</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            I help businesses scale with holistic marketing strategies that cover SEO, Meta Ads, Google Ads, and Cold Emailing. 
            Building complete acquisition machines rather than siloed campaigns.
          </p>

          <div className="flex justify-center mb-16">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">
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
