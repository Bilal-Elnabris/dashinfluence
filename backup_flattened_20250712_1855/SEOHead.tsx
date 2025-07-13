import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  canonical,
}: SEOHeadProps) {
  const [location] = useLocation();

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update Open Graph title
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta && ogTitle) {
      ogTitleMeta.setAttribute("content", ogTitle);
    }

    // Update Open Graph description
    const ogDescMeta = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescMeta && ogDescription) {
      ogDescMeta.setAttribute("content", ogDescription);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink && canonical) {
      canonicalLink.setAttribute("href", canonical);
    }

    // Update Open Graph URL
    const ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta) {
      const baseUrl = "https://dashinfluence.com";
      ogUrlMeta.setAttribute("content", `${baseUrl}${location}`);
    }
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    canonical,
    location,
  ]);

  return null; // This component doesn't render anything
}
