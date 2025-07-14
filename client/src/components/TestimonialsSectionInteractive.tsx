import { useState, useEffect, useRef } from "react";

interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialsSectionInteractive() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [focusedCardIndex, setFocusedCardIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);

  const testimonials: Testimonial[] = [
    {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      name: "John Anderson",
      role: "CEO, TechStart Inc.",
      quote:
        "Transformative expertise and dedication helped us achieve incredible results.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      name: "Sarah Mitchell",
      role: "Marketing Director, GrowthCorp",
      quote:
        "Professionalism and detail exceeded expectations, boosting ROI by 300%.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      name: "Michael Chen",
      role: "Founder, InnovateLab",
      quote: "Consistent, outstanding results tailored to our industry.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      name: "Emily Rodriguez",
      role: "Operations Manager, ServicePro",
      quote:
        "Flawless strategies improved customer satisfaction significantly.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      name: "David Thompson",
      role: "VP of Sales, MarketLeaders",
      quote: "Understood our vision and doubled our market share.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      name: "Lisa Wang",
      role: "CMO, Digital Innovations",
      quote: "Innovative approach led to our most successful campaign.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      name: "Robert Kim",
      role: "CTO, FutureTech Solutions",
      quote: "Expertise in digital transformation modernized our operations.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      name: "Amanda Foster",
      role: "Director of Growth, ScaleUp Co.",
      quote: "Exceptional service delivered beyond our expectations.",
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (
      !isDesktop ||
      !gridRef.current ||
      !viewportRef.current ||
      !cursorRef.current ||
      !parallaxBgRef.current
    )
      return;
    let isInsideViewport = false;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isInsideViewport) return;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.left = `${e.clientX}px`;
          cursorRef.current.style.top = `${e.clientY}px`;
        }
        if (parallaxBgRef.current) {
          const parallaxX = (e.clientX / window.innerWidth - 0.5) * 20;
          const parallaxY = (e.clientY / window.innerHeight - 0.5) * 20;
          parallaxBgRef.current.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
        }

        // Pointer-to-center navigation logic
        if (viewportRef.current && gridRef.current) {
          const viewportRect = viewportRef.current.getBoundingClientRect();
          const mouseX = e.clientX - viewportRect.left;
          const mouseY = e.clientY - viewportRect.top;

          // Calculate which card is closest to the mouse
          const cardWidth = 300;
          const cardHeight = 300;
          const gap = 10;
          const cardsPerRow = 4;

          let closestCardIndex = 0;
          let minDistance = Infinity;

          testimonials.forEach((_, index) => {
            const row = Math.floor(index / cardsPerRow);
            const col = index % cardsPerRow;

            const cardCenterX = col * (cardWidth + gap) + cardWidth / 2;
            const cardCenterY = row * (cardHeight + gap) + cardHeight / 2;

            const distance = Math.sqrt(
              Math.pow(mouseX - cardCenterX, 2) +
                Math.pow(mouseY - cardCenterY, 2)
            );

            if (distance < minDistance) {
              minDistance = distance;
              closestCardIndex = index;
            }
          });

          setFocusedCardIndex(closestCardIndex);

          // Calculate grid translation to center the focused card
          const focusedRow = Math.floor(closestCardIndex / cardsPerRow);
          const focusedCol = closestCardIndex % cardsPerRow;

          const focusedCardCenterX =
            focusedCol * (cardWidth + gap) + cardWidth / 2;
          const focusedCardCenterY =
            focusedRow * (cardHeight + gap) + cardHeight / 2;

          const viewportCenterX = viewportRect.width / 2;
          const viewportCenterY = viewportRect.height / 2;

          // Calculate how much to move the grid to center the focused card
          const translateX = viewportCenterX - focusedCardCenterX;
          const translateY = viewportCenterY - focusedCardCenterY;

          if (isHovered) {
            // Apply the translation to center the focused card
            gridRef.current.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px))`;
          } else {
            gridRef.current.style.transform =
              "translate(-50%, -50%) rotateX(15deg) rotateY(0deg) skewY(-10deg)";
          }
        }
      });
    };

    const handleViewportEnter = () => {
      isInsideViewport = true;
      setIsHovered(true);
      if (heroSubtitleRef.current) {
        heroSubtitleRef.current.style.opacity = "0";
        heroSubtitleRef.current.style.transition = "opacity 0.3s ease";
      }
    };

    const handleViewportLeave = () => {
      isInsideViewport = false;
      setIsHovered(false);
      setFocusedCardIndex(null);
      if (heroSubtitleRef.current) {
        heroSubtitleRef.current.style.opacity = "0.9";
      }
      if (gridRef.current) {
        gridRef.current.style.transform =
          "translate(-50%, -50%) rotateX(15deg) rotateY(0deg) skewY(-10deg)";
      }
    };

    const handleCardHover = (e: Event) => {
      const targetCard = (e.target as Element).closest(".testimonial-card");
      if (targetCard && gridRef.current) {
        const allCards = gridRef.current.querySelectorAll(".testimonial-card");
        allCards.forEach((card) => {
          (card as HTMLElement).style.transform = "scale(0.9) translateZ(0)";
        });
        (targetCard as HTMLElement).style.transform =
          "scale(1.15) translateZ(30px)";
      }
    };

    const handleCardLeave = () => {
      if (gridRef.current) {
        const allCards = gridRef.current.querySelectorAll(".testimonial-card");
        allCards.forEach((card) => {
          (card as HTMLElement).style.transform = "scale(0.9) translateZ(0)";
        });
      }
    };

    viewportRef.current?.addEventListener("mousemove", handleMouseMove);
    viewportRef.current?.addEventListener("mouseenter", handleViewportEnter);
    viewportRef.current?.addEventListener("mouseleave", handleViewportLeave);
    viewportRef.current?.addEventListener("mouseover", handleCardHover);
    viewportRef.current?.addEventListener("mouseout", handleCardLeave);

    return () => {
      cancelAnimationFrame(rafId);
      viewportRef.current?.removeEventListener("mousemove", handleMouseMove);
      viewportRef.current?.removeEventListener(
        "mouseenter",
        handleViewportEnter
      );
      viewportRef.current?.removeEventListener(
        "mouseleave",
        handleViewportLeave
      );
      viewportRef.current?.removeEventListener("mouseover", handleCardHover);
      viewportRef.current?.removeEventListener("mouseout", handleCardLeave);
    };
  }, [isDesktop, isHovered, testimonials]);

  const openLightbox = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsLightboxOpen(true);
  };
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedTestimonial(null);
  };

  // Inline styles for key animations
  const floatKeyframes = `@keyframes float {0%,100%{transform:translateY(0) translateX(0) scale(1);opacity:0.4;}50%{transform:translateY(-15px) translateX(5px) scale(1.1);opacity:0.7;}}`;
  const twinkleKeyframes = `@keyframes twinkle {0%,100%{opacity:0.4;transform:scale(1);}50%{opacity:1;transform:scale(1.3);}}`;

  return (
    <div className="section-padding bg-white dark:bg-white relative overflow-hidden min-h-screen">
      <style>{floatKeyframes + twinkleKeyframes}</style>
      <div
        ref={parallaxBgRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "120%",
          height: "120%",
          background:
            "radial-gradient(circle at 50% 50%,rgba(30,41,59,0.2),transparent 100%)",
          zIndex: 0,
          transition: "transform 0.2s ease-out",
        }}
      />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle,rgba(255,255,255,0.1),transparent 80%)",
              borderRadius: "50%",
              animation: "float 10s ease-in-out infinite",
              width: 50 + i * 15,
              height: 50 + i * 15,
              top: `${10 + i * 20}%`,
              left: `${10 + i * 25}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>
      {isDesktop && (
        <div
          ref={cursorRef}
          style={{
            position: "fixed",
            width: 16,
            height: 16,
            background:
              "radial-gradient(circle,rgba(255,255,255,0.8) 60%,rgba(255,255,255,0.2) 80%,transparent 100%)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 9999,
            transition: "transform 0.05s ease-out",
            boxShadow: "0 0 15px rgba(255,255,255,0.5)",
          }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#203ab5] dark:text-[#ffcf00]">
            What Our Clients Say
          </h2>
          <p
            ref={heroSubtitleRef}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-opacity duration-300"
          >
            Hover over the grid to explore testimonials in a dynamic 3D view.
          </p>
        </div>
        <div className="flex justify-center">
          <div
            ref={viewportRef}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 1000,
              height: 600,
              background:
                "linear-gradient(135deg,rgba(32,58,181,0.9),rgba(48,70,197,0.9))",
              borderRadius: "1rem",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              perspective: 1200,
            }}
          >
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: 4,
                    height: 4,
                    background: "white",
                    borderRadius: "50%",
                    animation: "twinkle 2s ease-in-out infinite",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1.5 + Math.random() * 1.5}s`,
                    opacity: 0.4 + Math.random() * 0.6,
                  }}
                />
              ))}
            </div>
            <div
              ref={gridRef}
              style={{
                position: "absolute",
                width: "calc(4*300px + 3*10px)",
                height: "calc(2*300px + 1*10px)",
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gridTemplateRows: "repeat(2,1fr)",
                gap: "10px",
                transition:
                  "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                willChange: "transform",
                transform: isHovered
                  ? "translate(-50%, -50%)"
                  : "translate(-50%, -50%) rotateX(15deg) rotateY(0deg) skewY(-10deg)",
                transformOrigin: "center center",
                top: "50%",
                left: "50%",
                overflow: "visible",
              }}
            >
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="testimonial-card"
                  style={{
                    width: 300,
                    height: 300,
                    padding: 16,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                    background:
                      "linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                    borderRadius: "0.5rem",
                    transition: "all 0.2s ease-out",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                    transform: "scale(0.9)",
                  }}
                  onClick={() => openLightbox(testimonial)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) =>
                    e.key === "Enter" && openLightbox(testimonial)
                  }
                  aria-label={`View testimonial from ${testimonial.name}`}
                >
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      marginBottom: 12,
                      border: "2px solid rgba(255,255,255,0.2)",
                      objectFit: "cover",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                    }}
                    loading="lazy"
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 4,
                      marginBottom: 12,
                    }}
                  >
                    {[...Array(5)].map((_, j) => (
                      <span key={j} style={{ color: "#facc15", fontSize: 16 }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      lineHeight: 1.25,
                      marginBottom: 12,
                      fontStyle: "italic",
                      color: "rgba(255,255,255,0.9)",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    "{testimonial.quote}"
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{ fontSize: 14, fontWeight: 600, color: "white" }}
                    >
                      {testimonial.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#d1d5db" }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 16,
                right: 16,
                background: "rgba(0,0,0,0.5)",
                padding: "4px 8px",
                borderRadius: 6,
                fontSize: 12,
                color: "#d1d5db",
                transition: "opacity 0.3s",
              }}
            >
              Move cursor to explore
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "200+", label: "Happy Clients" },
            { value: "25%", label: "Average Revenue Increase" },
            { value: "24/7", label: "AI Availability" },
            { value: "4.7/5", label: "Client Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-[#ffcf00] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isLightboxOpen && selectedTestimonial && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(4px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            transition: "opacity 0.3s",
          }}
          onClick={closeLightbox}
          role="dialog"
          aria-labelledby="lightbox-title"
          aria-modal="true"
        >
          <div
            style={{
              background:
                "linear-gradient(135deg,rgba(30,41,59,0.95),rgba(17,24,39,0.95))",
              borderRadius: "1.5rem",
              padding: 32,
              maxWidth: 600,
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                width: 32,
                height: 32,
                background: "rgba(255,255,255,0.1)",
                color: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Close testimonial"
            >
              <span aria-hidden="true">✕</span>
            </button>
            <img
              src={selectedTestimonial.avatar}
              alt={`${selectedTestimonial.name}'s avatar`}
              style={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                margin: "0 auto 24px",
                border: "3px solid rgba(255,255,255,0.2)",
                objectFit: "cover",
                boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
              }}
              loading="lazy"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 4,
                marginBottom: 24,
              }}
            >
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "#facc15", fontSize: 20 }}>
                  ★
                </span>
              ))}
            </div>
            <div
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                marginBottom: 24,
                fontStyle: "italic",
                color: "#e5e7eb",
              }}
            >
              "{selectedTestimonial.quote}"
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{ fontSize: 18, fontWeight: 600, color: "white" }}
                id="lightbox-title"
              >
                {selectedTestimonial.name}
              </div>
              <div style={{ fontSize: 14, color: "#d1d5db" }}>
                {selectedTestimonial.role}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
