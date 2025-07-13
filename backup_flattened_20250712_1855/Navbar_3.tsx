import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo_long from "@assets/logo-long.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/why-us", label: "Why DashInfluence" },
    { href: "/packages", label: "Service Packages" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-[#203ab5] via-[#3553e0] to-[#3046c5] shadow-lg sticky top-0 z-50 static-optimized backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center group"
              onClick={closeMenu}
            >
              <img
                src={logo_long}
                alt="DashInfluence Logo"
                className="h-8 sm:h-10 w-auto max-w-[200px] sm:max-w-none object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-10 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white font-extrabold text-lg dash-underline px-3 py-2 transition-all duration-300 flex items-center relative group ${
                  location === item.href
                    ? "text-orange-300"
                    : "hover:text-orange-200"
                }`}
                style={{ lineHeight: "2.5rem" }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Section */}
          <div className="hidden lg:flex items-center">
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
          <div className="lg:hidden flex items-center space-x-2">
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
              variant="ghost"
              size="sm"
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
          className={`lg:hidden border-t border-white/20 bg-gradient-to-r from-[#203ab5] via-[#3553e0] to-[#3046c5] transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-white font-bold text-lg py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  location === item.href
                    ? "bg-white/20 text-orange-300 shadow-lg"
                    : "hover:bg-white/10 hover:shadow-md"
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
  );
}
