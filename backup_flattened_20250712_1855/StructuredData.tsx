import { useEffect } from "react";

interface StructuredDataProps {
  type: "organization" | "service" | "webpage";
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach((script) => script.remove());

    // Add new structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [data]);

  return null;
}

// Predefined structured data for common pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DashInfluence",
  url: "https://dashinfluence.com",
  logo: "https://dashinfluence.com/logo-long.png",
  description:
    "AI-powered business automation solutions that transform businesses with intelligent automation, 24/7 booking, and smart call handling.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-825-250-0262",
    contactType: "customer service",
    email: "hello@dashinfluence.com",
  },
  sameAs: ["https://calendly.com/dashinfluence/new-meeting"],
  serviceArea: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Automation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Essential AI Package",
          description:
            "24/7 Booking AI Chat, Real-Time Scheduling, Automated SMS Reminders",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Professional AI Package",
          description:
            "All Essential features plus Repeat Customer Automation and Service Analytics",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Complete AI Suite",
          description:
            "All Professional features plus AI Phone Call Handling and Advanced Business Reports",
        },
      },
    ],
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Business Automation",
  description:
    "Transform your business with AI automation. Stop losing revenue to missed calls and manual scheduling. 24/7 automated booking, smart call handling, and revenue optimization.",
  provider: {
    "@type": "Organization",
    name: "DashInfluence",
  },
  serviceType: "Business Automation",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Automation Packages",
  },
};
