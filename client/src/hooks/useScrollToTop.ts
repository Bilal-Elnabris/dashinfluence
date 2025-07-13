import { useEffect } from "react";
import { useLocation } from "wouter";
import { lenisRef } from "@/components/LenisProvider";

export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Use Lenis for smooth scroll to top whenever location changes
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.2 });
    } else {
      // Fallback to native smooth scroll
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
}
