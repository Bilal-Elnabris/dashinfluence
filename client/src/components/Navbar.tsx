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

interface NavbarProps {
  forceDark?: boolean;
}

export default function Navbar({ forceDark = false }: NavbarProps) {
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
    { href: "/why-us", label: "Why Influence", isLogo: true },
    { href: "/packages", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  // Determine if on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 767;

  // Page-specific navbar behavior configuration
  const pageConfigs = {
    "/": {
      disableTransform: false,
      scrollThreshold: isMobile ? 2.5 / 12 : 0.22,
      darkenOnly: false,
    }, // Home
    "/why-us": {
      disableTransform: false,
      scrollThreshold: isMobile ? 0.9 : 0.8,
      darkenOnly: false,
    }, // Why Influence
    "/packages": {
      disableTransform: false,
      scrollThreshold: isMobile ? 0.025 : 0.5,
      darkenOnly: true,
    }, // Services
    "/contact": {
      disableTransform: false,
      scrollThreshold: 0.72,
      darkenOnly: true,
    }, // Contact
  };

  const currentPageConfig =
    pageConfigs[location as keyof typeof pageConfigs] || pageConfigs["/"];

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

  // Custom scroll trigger for /packages on mobile
  let mobilePackagesTrigger = false;
  if (
    location === "/packages" &&
    typeof window !== "undefined" &&
    window.innerWidth <= 767
  ) {
    mobilePackagesTrigger = window.scrollY > window.innerHeight / 6;
  }

  // Show colored navbar based on page-specific configuration
  const coloredNavbar = currentPageConfig.disableTransform
    ? false // Never show colored navbar on pages with disabled transformation
    : currentPageConfig.darkenOnly
    ? location === "/packages" &&
      typeof window !== "undefined" &&
      window.innerWidth <= 767
      ? mobilePackagesTrigger
      : scrollProgress >= currentPageConfig.scrollThreshold
    : scrollProgress >= currentPageConfig.scrollThreshold;

  // Animation effect for colored navbar (only if transformation is enabled)
  useEffect(() => {
    if (currentPageConfig.disableTransform) {
      // Keep navbar transparent on pages with disabled transformation
      setShowColored(false);
      setHasAnimated(false);
      return;
    }

    if (coloredNavbar && !showColored) {
      setShowColored(true);
      setTimeout(() => setHasAnimated(true), 400); // Animation duration
    } else if (!coloredNavbar && showColored) {
      setShowColored(false);
      setHasAnimated(false);
    }
  }, [coloredNavbar, currentPageConfig.disableTransform]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navbar classes for smooth transition
  const navbarBase =
    "fixed top-0 left-0 w-full z-50 static-optimized border-b-0 transition-all duration-400 ease-in-out";
  const navbarColored = forceDark
    ? "bg-black text-white shadow-lg border-b border-white/10 backdrop-blur-lg"
    : "bg-gradient-to-r from-[#203ab5] via-[#3553e0] to-[#3046c5] shadow-lg border-b border-white/10 backdrop-blur-lg";
  const navbarTransparent = forceDark
    ? "bg-black text-white shadow-lg border-b border-white/10 backdrop-blur-lg"
    : location === "/contact" && scrollProgress >= (isMobile ? 0.1 : 1 / 7)
    ? "bg-black/30 shadow-none backdrop-blur-lg"
    : "bg-transparent shadow-none backdrop-blur-lg";

  // Slide-up animation classes for transparent navbar
  const slideUp = showColored
    ? "opacity-0 pointer-events-none -translate-y-8 transition-all duration-400 ease-in-out"
    : "opacity-100 pointer-events-auto translate-y-0 transition-all duration-400 ease-in-out";

  // Slide-down animation classes
  const slideDown = showColored
    ? "opacity-100 translate-y-0 pointer-events-auto transition-all duration-400 ease-in-out"
    : "opacity-0 pointer-events-none -translate-y-8 transition-all duration-400 ease-in-out";

  // Active nav item rounded corners
  const activeNavClass = "bg-white/20";
  const hoverNavClass = "hover:bg-white/10";

  // 3-column flex layout for logo, nav, CTA
  const navRow =
    "flex items-center justify-between px-0 lg:px-8 pt-3 pb-3 gap-2 w-full overflow-x-hidden";
  const logoCol = "flex items-center min-w-0 pl-0 ml-2 lg:pl-0 lg:ml-0";
  const navCol = "flex-1 flex justify-center items-center min-w-0";
  const ctaCol = "flex items-center min-w-0 pr-0 mr-2 lg:pr-0 lg:mr-0";

  return (
    <>
      {/* Transparent navbar always rendered, but hidden when colored navbar is visible */}
      <nav
        className={`${navbarBase} ${navbarTransparent} ${slideUp}`}
        ref={navRef}
        style={{ position: "fixed" }}
      >
        <LoadingLine coloredNavbar={false} progress={scrollProgress} />
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 relative">
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
                  className="h-7 sm:h-8 w-auto max-w-[110px] sm:max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105 ml-0"
                  style={{ minWidth: 32 }}
                />
              </Link>
            </div>
            {/* Desktop Navigation Links */}
            <div
              className={navCol + " hidden lg:flex justify-center items-center"}
            >
              <div className="flex space-x-8 bg-black/20 rounded-[0.75rem] px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-white no-underline font-extrabold text-base dash-underline px-3 py-2 transition-all duration-300 flex items-center relative group rounded-t-[0.75rem] h-16 justify-center ${
                      location === item.href ? activeNavClass : hoverNavClass
                    }`}
                    style={{ lineHeight: "2.5rem" }}
                    onClick={closeMenu}
                  >
                    {item.isLogo ? (
                      <span className="flex items-center gap-1 px-3 py-2">
                        <span className="font-extrabold text-lg leading-none">
                          Why
                        </span>
                        <img
                          src={logo_long}
                          alt="DashInfluence Logo"
                          className="h-6 w-auto max-w-[100px] object-contain transition-transform duration-300 -mt-1.5"
                        />
                      </span>
                    ) : (
                      <span className="relative z-10">{item.label}</span>
                    )}
                    <div
                      className="absolute left-0 right-0 bottom-0 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 h-16 rounded-t-[0.75rem]"
                      style={{ borderRadius: "0.75rem 0.75rem 0 0" }}
                    ></div>
                  </Link>
                ))}
              </div>
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
            <div
              className={
                ctaCol + " lg:hidden flex items-center space-x-3 justify-end"
              }
            >
              <Button
                className="text-white hover:bg-white/10 p-2 ml-1 transition-all duration-300 hover:scale-110 min-w-[40px] min-h-[40px] flex items-center justify-center relative overflow-hidden focus:outline-none focus:ring-0 focus:border-none active:outline-none active:ring-0 active:border-none"
                style={{ borderRadius: 8 }}
                onClick={toggleMenu}
              >
                <span
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    opacity: isMenuOpen ? 0 : 1,
                    transform: isMenuOpen
                      ? "rotate(90deg) scale(0.7)"
                      : "rotate(0deg) scale(1)",
                    transition: "opacity 0.3s, transform 0.3s",
                  }}
                >
                  <Menu className="h-6 w-6" />
                </span>
                <span
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen
                      ? "rotate(0deg) scale(1)"
                      : "rotate(-90deg) scale(0.7)",
                    transition: "opacity 0.3s, transform 0.3s",
                  }}
                >
                  <X className="h-6 w-6" />
                </span>
              </Button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            className={`lg:hidden border-t-0 bg-transparent transition-all duration-400 overflow-hidden ${
              isMenuOpen
                ? "max-h-96 opacity-100 backdrop-blur-md bg-black/40"
                : "max-h-0 opacity-0"
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
                  {item.isLogo ? (
                    <span className="flex items-center gap-1">
                      <span className="font-extrabold text-lg leading-none">
                        Why
                      </span>
                      <img
                        src={logo_long}
                        alt="DashInfluence Logo"
                        className="h-6 w-auto max-w-[100px] object-contain -mt-1.5"
                      />
                    </span>
                  ) : (
                    <span className="relative z-10">{item.label}</span>
                  )}
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
                {/* Show "Why" + logo on mobile, just logo on desktop */}
                {isMobile ? (
                  <span className="flex items-center gap-1">
                    <span className="font-extrabold text-lg leading-none text-white">
                      Why
                    </span>
                    <img
                      src={logo_long}
                      alt="DashInfluence Logo"
                      className="h-6 w-auto max-w-[100px] object-contain transition-transform duration-300 group-hover:scale-105 -mt-1.5"
                    />
                  </span>
                ) : (
                  <img
                    src={logo_long}
                    alt="DashInfluence Logo"
                    className="h-6 sm:h-8 w-auto max-w-[120px] sm:max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </Link>
            </div>
            {/* Desktop Navigation Links */}
            <div className={navCol + " hidden lg:flex space-x-8"}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white no-underline font-extrabold text-base dash-underline px-3 py-2 transition-all duration-300 flex items-center relative group rounded-t-[0.75rem] h-16 justify-center ${
                    location === item.href ? activeNavClass : hoverNavClass
                  }`}
                  style={{ lineHeight: "2.5rem" }}
                  onClick={closeMenu}
                >
                  {item.isLogo ? (
                    <span className="flex items-center gap-1 px-3 py-2">
                      <span className="font-extrabold text-lg leading-none">
                        Why
                      </span>
                      <img
                        src={logo_long}
                        alt="DashInfluence Logo"
                        className="h-6 w-auto max-w-[100px] object-contain transition-transform duration-300 -mt-1.5"
                      />
                    </span>
                  ) : (
                    <span className="relative z-10">{item.label}</span>
                  )}
                  <div
                    className="absolute left-0 right-0 bottom-0 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 h-16 rounded-t-[0.75rem]"
                    style={{ borderRadius: "0.75rem 0.75rem 0 0" }}
                  ></div>
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
                  {item.isLogo ? (
                    <span className="flex items-center gap-1">
                      <span className="font-extrabold text-lg leading-none">
                        Why
                      </span>
                      <img
                        src={logo_long}
                        alt="DashInfluence Logo"
                        className="h-6 w-auto max-w-[100px] object-contain -mt-1.5"
                      />
                    </span>
                  ) : (
                    <span className="relative z-10">{item.label}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
