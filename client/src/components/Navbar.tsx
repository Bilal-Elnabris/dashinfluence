import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/Transparent-logo_1751231371630.png";

import logo_long from "@assets/logo-long.png";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/calculator", label: "Revenue Calculator" },
    { href: "/quiz", label: "Automation Quiz" },
    { href: "/mapper", label: "Workflow Mapper" },
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
          
          {/* CTA Button */}
          <Button className="bg-[#ffcf00] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-orange-500 transition-colors duration-200">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
