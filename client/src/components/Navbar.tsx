import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import logoPath from "@assets/Transparent-logo_1751231371630.png";

import logo_long from "@assets/logo-long.png";

export default function Navbar() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/calculator", label: "Revenue Calculator" },
    { href: "/quiz", label: "Automation Quiz" },
    { href: "/packages", label: "Service Packages" },
    { href: "/why-us", label: "Why DashInfluence" },
  ];

  return (
    <nav className="bg-[hsl(225,71%,53%)] shadow-lg sticky top-0 z-50 static-optimized">
      <div className="max-w-6xl mx-auto px-6 bg-[#203ab5]">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center">
              <img 
                src={logo_long} 
                alt="DashInfluence Logo" 
                className="h-8 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white font-medium dash-underline px-3 py-2 transition-colors ${
                    location === item.href ? 'text-orange-300' : 'hover:text-orange-200'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Theme Toggle & CTA Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              className="text-white hover:bg-white/10"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            {/* CTA Button */}
            <Button 
              className="bg-[#ffcf00] text-[hsl(217,69%,34%)] font-semibold px-6 py-2.5 rounded-lg hover:bg-yellow-400 transition-colors duration-200"
              onClick={() => window.open('https://calendly.com/dashinfluence/consultation', '_blank')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
