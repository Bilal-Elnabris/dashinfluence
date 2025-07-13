import { useCallback } from "react";
import { lenisRef } from "@/components/LenisProvider";

export function useLenisScroll() {
  const scrollTo = useCallback(
    (
      target: number | string | Element,
      options?: {
        duration?: number;
        easing?: (t: number) => number;
        offset?: number;
      }
    ) => {
      if (!lenisRef.current) return;

      const { duration = 1.2, offset = 0 } = options || {};

      let targetPosition: number;

      if (typeof target === "number") {
        targetPosition = target;
      } else if (typeof target === "string") {
        const element = document.querySelector(target);
        if (!element) return;
        targetPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
      } else {
        targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset;
      }

      // Apply offset
      targetPosition -= offset;

      lenisRef.current.scrollTo(targetPosition, { duration });
    },
    []
  );

  const scrollToTop = useCallback((duration = 1.2) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration });
    }
  }, []);

  const scrollToElement = useCallback(
    (
      selector: string,
      options?: {
        duration?: number;
        offset?: number;
      }
    ) => {
      scrollTo(selector, options);
    },
    [scrollTo]
  );

  return {
    scrollTo,
    scrollToTop,
    scrollToElement,
    lenis: lenisRef.current,
  };
}

// Hook for scroll-triggered animations with Lenis
export function useLenisScrollAnimation(threshold = 0.1) {
  const { lenis } = useLenisScroll();

  const addScrollListener = useCallback(
    (callback: (e: any) => void) => {
      if (!lenis) return;

      const unsubscribe = lenis.on("scroll", callback);
      return unsubscribe;
    },
    [lenis]
  );

  return { addScrollListener, lenis };
}
