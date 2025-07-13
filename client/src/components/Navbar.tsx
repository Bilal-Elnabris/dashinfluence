import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo_long from "@assets/logo-long.png";

// Loading/progress line component
function LoadingLine({
  coloredNavbar,
  progress,
}: {
  coloredNavbar: boolean;
  progress: number;
}) {
  return (
    <div
      className={`w-full h-1 z-[100] ${
        coloredNavbar ? "absolute left-0 bottom-0" : "fixed left-0 top-0"
      }`}
      style={{ pointerEvents: "none" }}
    >
      <div
        className="h-full bg-gradient-to-r from-[#ffcf00] to-yellow-400"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isHome, setIsHome] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [showColored, setShowColored] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/why-us", label: "logo", isLogo: true },
    { href: "/packages", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    setIsHome(location === "/");
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Calculate scroll progress
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show colored navbar when progress reaches 20% (1/5 of the page)
  const coloredNavbar = scrollProgress >= 0.2;

  // Animation effect for colored navbar
  useEffect(() => {
    if (coloredNavbar && !showColored) {
      setShowColored(true);
      setTimeout(() => setHasAnimated(true), 400); // Animation duration
    } else if (!coloredNavbar && showColored) {
      setShowColored(false);
      setHasAnimated(false);
    }
  }, [coloredNavbar]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navbar classes for smooth transition
  const navbarBase =
    "fixed top-0 left-0 w-full z-50 static-optimized border-b-0 transition-all duration-400 ease-in-out";
  const navbarColored =
    "bg-gradient-to-r from-[#203ab5] via-[#3553e0] to-[#3046c5] shadow-lg border-b border-white/10 backdrop-blur-sm";
  const navbarTransparent = "bg-transparent shadow-none backdrop-blur-none";

  // Slide-down animation classes
  const slideDown =
    showColored && !hasAnimated
      ? "opacity-0 -translate-y-10 pointer-events-none transition-all duration-400 ease-in-out"
      : showColored && hasAnimated
      ? "opacity-100 translate-y-0 pointer-events-auto transition-all duration-400 ease-in-out"
      : "hidden transition-all duration-400 ease-in-out";

  // Active nav item rounded corners
  const activeNavClass = "bg-white/20 rounded-xl";
  const hoverNavClass = "hover:bg-white/10 rounded-xl";

  // 3-column flex layout for logo, nav, CTA
  const navRow = "flex items-center justify-between px-8 pt-4 pb-4 gap-2";
  const logoCol = "flex items-center min-w-0";
  const navCol = "flex-1 flex justify-center items-center min-w-0";
  const ctaCol = "flex items-center min-w-0";

  return (
    <>
      {/* Transparent navbar always rendered, but hidden when colored navbar is visible */}
      <nav
        className={`${navbarBase} ${navbarTransparent} ${
          showColored
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        } transition-all duration-400`}
        ref={navRef}
        style={{ position: "fixed" }}
      >
        <LoadingLine coloredNavbar={false} progress={scrollProgress} />
        <div className="w-full px-8 relative">
          <div className={navRow}>
            {/* Logo Section */}
            <div className={logoCol}>
              <Link
                href="/"
                className="flex items-center group"
                onClick={closeMenu}
              >
                <img
                  src={logo_long}
                  alt="DashInfluence Logo"
                  className="h-6 sm:h-8 w-auto max-w-[120px] sm:max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
            {/* Desktop Navigation Links */}
            <div className={navCol + " hidden lg:flex space-x-8"}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white no-underline font-extrabold text-base dash-underline px-3 py-2 transition-all duration-300 flex items-center relative group ${
                    location === item.href ? activeNavClass : hoverNavClass
                  }`}
                  style={{ lineHeight: "2.5rem" }}
                  onClick={closeMenu}
                >
                  {item.isLogo ? (
                    <span className="flex items-center gap-1">
                      <span className="font-extrabold text-lg">Why</span>
                      <img
                        src={logo_long}
                        alt="DashInfluence Logo"
                        className="h-6 w-auto max-w-[100px] object-contain transition-transform duration-300"
                      />
                    </span>
                  ) : (
                    <span className="relative z-10">{item.label}</span>
                  )}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </Link>
              ))}
            </div>
            {/* Desktop CTA Section */}
            <div className={ctaCol + " hidden lg:flex"}>
              <Button
                className="bg-[#ffcf00] text-[hsl(217,69%,34%)] font-semibold px-4 sm:px-6 py-2.5 rounded-lg hover:bg-yellow-300 transition-all duration-300 text-sm sm:text-base whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105 transform"
                onClick={() =>
                  window.open(
                    "https://calendly.com/dashinfluence/new-meeting",
                    "_blank"
                  )
                }
              >
                Get Started
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <div className={ctaCol + " lg:hidden flex space-x-2 justify-end"}>
              <Button
                className="bg-[#ffcf00] text-[hsl(217,69%,34%)] font-semibold px-3 sm:px-4 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-300 text-xs sm:text-sm whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105 transform"
                onClick={() =>
                  window.open(
                    "https://calendly.com/dashinfluence/new-meeting",
                    "_blank"
                  )
                }
              >
                Get Started
              </Button>
              <Button
                className="text-white hover:bg-white/10 p-2 transition-all duration-300 hover:scale-110"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 transition-transform duration-300 rotate-180" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300" />
                )}
              </Button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            className={`lg:hidden border-t-0 bg-transparent transition-all duration-400 overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-white font-bold text-lg py-3 px-4 transition-all duration-300 transform hover:scale-105 ${
                    location === item.href
                      ? "bg-white/20 rounded-xl"
                      : "hover:bg-white/10 rounded-xl"
                  }`}
                  onClick={closeMenu}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen
                      ? "slideInDown 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* Colored navbar with slide-down animation */}
      <nav
        className={`${navbarBase} ${navbarColored} ${slideDown}`}
        style={{ position: "fixed" }}
      >
        <LoadingLine coloredNavbar={true} progress={scrollProgress} />
        <div className="w-full px-8 relative">
          <div className={navRow}>
            {/* Logo Section */}
            <div className={logoCol}>
              <Link
                href="/"
                className="flex items-center group"
                onClick={closeMenu}
              >
                <img
                  src={logo_long}
                  alt="DashInfluence Logo"
                  className="h-6 sm:h-8 w-auto max-w-[120px] sm:max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
            {/* Desktop Navigation Links */}
            <div className={navCol + " hidden lg:flex space-x-8"}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white no-underline font-extrabold text-base dash-underline px-3 py-2 transition-all duration-300 flex items-center relative group ${
                    location === item.href ? activeNavClass : hoverNavClass
                  }`}
                  style={{ lineHeight: "2.5rem" }}
                  onClick={closeMenu}
                >
                  {item.isLogo ? (
                    <span className="flex items-center gap-1">
                      <span className="font-extrabold text-lg">Why</span>
                      <img
                        src={logo_long}
                        alt="DashInfluence Logo"
                        className="h-6 w-auto max-w-[100px] object-contain transition-transform duration-300"
                      />
                    </span>
                  ) : (
                    <span className="relative z-10">{item.label}</span>
                  )}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </Link>
              ))}
            </div>
            {/* Desktop CTA Section */}
            <div className={ctaCol + " hidden lg:flex"}>
              <Button
                className="bg-[#ffcf00] text-[hsl(217,69%,34%)] font-semibold px-4 sm:px-6 py-2.5 rounded-lg hover:bg-yellow-300 transition-all duration-300 text-sm sm:text-base whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105 transform"
                onClick={() =>
                  window.open(
                    "https://calendly.com/dashinfluence/new-meeting",
                    "_blank"
                  )
                }
              >
                Get Started
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <div className={ctaCol + " lg:hidden flex space-x-2 justify-end"}>
              <Button
                className="bg-[#ffcf00] text-[hsl(217,69%,34%)] font-semibold px-3 sm:px-4 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-300 text-xs sm:text-sm whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105 transform"
                onClick={() =>
                  window.open(
                    "https://calendly.com/dashinfluence/new-meeting",
                    "_blank"
                  )
                }
              >
                Get Started
              </Button>
              <Button
                className="text-white hover:bg-white/10 p-2 transition-all duration-300 hover:scale-110"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 transition-transform duration-300 rotate-180" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300" />
                )}
              </Button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            className={`lg:hidden border-t border-white/20 bg-gradient-to-r from-[#203ab5] via-[#3553e0] to-[#3046c5] transition-all duration-400 overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-white font-bold text-lg py-3 px-4 transition-all duration-300 transform hover:scale-105 ${
                    location === item.href
                      ? "bg-white/20 rounded-xl"
                      : "hover:bg-white/10 rounded-xl"
                  }`}
                  onClick={closeMenu}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen
                      ? "slideInDown 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
