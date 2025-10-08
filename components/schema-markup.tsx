import Script from 'next/script'

interface PersonSchema {
  name: string
  jobTitle: string
  description: string
  image?: string
  email?: string
  telephone?: string
  url?: string
  sameAs?: string[]
  address?: {
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
  worksFor?: {
    name: string
    url?: string
  }
}

interface WebSiteSchema {
  name: string
  url: string
  description?: string
  potentialAction?: {
    target: string
    queryInput: string
  }
}

interface ServiceSchema {
  name: string
  description: string
  provider: PersonSchema
  areaServed?: string
  serviceType?: string
  offers?: {
    price?: string
    priceCurrency?: string
    description?: string
  }
}

interface BlogPostingSchema {
  headline: string
  description: string
  author: PersonSchema
  datePublished: string
  dateModified?: string
  image?: string
  url: string
  mainEntityOfPage: string
  publisher: PersonSchema
  keywords?: string[]
}

interface BlogSchema {
  name: string
  description: string
  url: string
  author: PersonSchema
  publisher: PersonSchema
}

interface ContactPageSchema {
  name: string
  description: string
  url: string
  mainEntity: PersonSchema
}

interface SchemaMarkupProps {
  type: 'person' | 'website' | 'service' | 'blogPosting' | 'blog' | 'contactPage'
  data: PersonSchema | WebSiteSchema | ServiceSchema | BlogPostingSchema | BlogSchema | ContactPageSchema
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
    }

    switch (type) {
      case 'person':
        const personData = data as PersonSchema
        return {
          ...baseSchema,
          "@type": "Person",
          name: personData.name,
          jobTitle: personData.jobTitle,
          description: personData.description,
          image: personData.image,
          email: personData.email,
          telephone: personData.telephone,
          url: personData.url,
          sameAs: personData.sameAs,
          address: personData.address ? {
            "@type": "PostalAddress",
            ...personData.address
          } : undefined,
          worksFor: personData.worksFor ? {
            "@type": "Organization",
            ...personData.worksFor
          } : undefined
        }

      case 'website':
        const websiteData = data as WebSiteSchema
        return {
          ...baseSchema,
          "@type": "WebSite",
          name: websiteData.name,
          url: websiteData.url,
          description: websiteData.description,
          potentialAction: websiteData.potentialAction ? {
            "@type": "SearchAction",
            target: websiteData.potentialAction.target,
            "query-input": websiteData.potentialAction.queryInput
          } : undefined
        }

      case 'service':
        const serviceData = data as ServiceSchema
        return {
          ...baseSchema,
          "@type": "ProfessionalService",
          name: serviceData.name,
          description: serviceData.description,
          provider: {
            "@type": "Person",
            ...serviceData.provider
          },
          areaServed: serviceData.areaServed,
          serviceType: serviceData.serviceType,
          offers: serviceData.offers ? {
            "@type": "Offer",
            ...serviceData.offers
          } : undefined
        }

      case 'blogPosting':
        const blogPostData = data as BlogPostingSchema
        return {
          ...baseSchema,
          "@type": "BlogPosting",
          headline: blogPostData.headline,
          description: blogPostData.description,
          author: {
            "@type": "Person",
            ...blogPostData.author
          },
          datePublished: blogPostData.datePublished,
          dateModified: blogPostData.dateModified || blogPostData.datePublished,
          image: blogPostData.image,
          url: blogPostData.url,
          mainEntityOfPage: blogPostData.mainEntityOfPage,
          publisher: {
            "@type": "Person",
            ...blogPostData.publisher
          },
          keywords: blogPostData.keywords
        }

      case 'blog':
        const blogData = data as BlogSchema
        return {
          ...baseSchema,
          "@type": "Blog",
          name: blogData.name,
          description: blogData.description,
          url: blogData.url,
          author: {
            "@type": "Person",
            ...blogData.author
          },
          publisher: {
            "@type": "Person",
            ...blogData.publisher
          }
        }

      case 'contactPage':
        const contactData = data as ContactPageSchema
        return {
          ...baseSchema,
          "@type": "ContactPage",
          name: contactData.name,
          description: contactData.description,
          url: contactData.url,
          mainEntity: {
            "@type": "Person",
            ...contactData.mainEntity
          }
        }

      default:
        return baseSchema
    }
  }

  const schema = generateSchema()

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  )
}

// Common person data for Ayoub Ouraian
export const ayoubPersonData: PersonSchema = {
  name: "Ayoub Ouraian",
  jobTitle: "SEO and Content Marketing Consultant",
  description: "Professional SEO consultant helping businesses grow their online presence through strategic SEO, compelling content marketing, and modern web development solutions.",
  image: "https://ayoubouarain.com/images/ayoub-ouraian.jpg",
  email: "ayoub@ayoubouarain.com",
  url: "https://ayoubouarain.com/",
  sameAs: [
    "https://www.linkedin.com/in/ayoub-ouarain/",
    "https://x.com/Ouarain01",
    "https://github.com/Ayoub0017"
  ],
  address: {
    addressCountry: "Morocco"
  },
  worksFor: {
    name: "Ayoub Ouraian Digital Marketing",
    url: "https://ayoubouarain.com/"
  }
}