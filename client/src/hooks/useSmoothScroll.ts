import { useEffect, useCallback, useRef } from "react";

interface SmoothScrollOptions {
  duration?: number;
  easing?: "linear" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad";
  offset?: number;
}

// Easing functions for smooth scrolling
const easingFunctions = {
  linear: (t: number) => t,
  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => t * (2 - t),
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
};

export function useSmoothScroll(options: SmoothScrollOptions = {}) {
  const { duration = 800, easing = "easeInOutQuad", offset = 0 } = options;

  const isScrolling = useRef(false);

  const smoothScrollTo = useCallback(
    (target: number | Element | string) => {
      if (isScrolling.current) return;

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

      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();

      isScrolling.current = true;

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const ease = easingFunctions[easing];
        const easedProgress = ease(progress);

        window.scrollTo(0, startPosition + distance * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          isScrolling.current = false;
        }
      };

      requestAnimationFrame(animateScroll);
    },
    [duration, easing, offset]
  );

  const scrollToTop = useCallback(() => {
    smoothScrollTo(0);
  }, [smoothScrollTo]);

  const scrollToElement = useCallback(
    (selector: string) => {
      smoothScrollTo(selector);
    },
    [smoothScrollTo]
  );

  return {
    smoothScrollTo,
    scrollToTop,
    scrollToElement,
    isScrolling: isScrolling.current,
  };
}

// Enhanced scroll to top hook
export function useEnhancedScrollToTop() {
  const { scrollToTop } = useSmoothScroll({
    duration: 600,
    easing: "easeOutQuad",
  });

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Home") {
        e.preventDefault();
        scrollToTop();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [scrollToTop]);

  return { scrollToTop };
}

// Intersection Observer hook for scroll-triggered animations
export function useScrollAnimation(threshold = 0.1) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return elementRef;
}
