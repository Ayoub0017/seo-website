import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function BrandsSection() {
  const brands = [
    { name: "Hostinger", logo: "/hostinger-logo-1.png" },
    { name: "Araoo", logo: "/araoo-logo-1.png" },
    { name: "Abstract27", logo: "/abstract27-logo-1.png" },
    { name: "PeoplePerHour", logo: "/peopleperhour-logo-1.png" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
          Some Brands I Worked With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-12">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={180}
                height={80}
                className="object-contain h-20"
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}