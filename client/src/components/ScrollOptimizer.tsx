import { useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useSmoothScroll";

interface ScrollOptimizerProps {
  children: React.ReactNode;
  className?: string;
  enableParallax?: boolean;
  enableFadeIn?: boolean;
  threshold?: number;
}

export function ScrollOptimizer({
  children,
  className = "",
  enableParallax = false,
  enableFadeIn = false,
  threshold = 0.1,
}: ScrollOptimizerProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const fadeInRef = useScrollAnimation(threshold);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !enableParallax) return;

    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      element.style.transform = `translateY(${rate}px)`;
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    const handleScroll = () => {
      requestTick();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableParallax]);

  const classes = [
    className,
    enableParallax ? "parallax" : "",
    enableFadeIn ? "scroll-fade-in" : "",
    "scroll-optimized",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={
        enableFadeIn
          ? (fadeInRef as React.RefObject<HTMLDivElement>)
          : elementRef
      }
      className={classes}
    >
      {children}
    </div>
  );
}

// Debounced scroll hook for performance
export function useDebouncedScroll(callback: () => void, delay = 16) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(callback, delay);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [callback, delay]);
}

// Scroll progress indicator
export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progressBar = progressRef.current;
    if (!progressBar) return;

    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      progressBar.style.width = `${scrollPercent}%`;
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress(); // Initial call

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-[#ffcf00] to-yellow-400 transition-all duration-150 ease-out"
        style={{ width: "0%" }}
      />
    </div>
  );
}
