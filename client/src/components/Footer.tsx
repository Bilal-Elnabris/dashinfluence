import { Link } from "wouter";
import logoPath from "@assets/Transparent-logo_1751231371630.png";

import logo_long from "@assets/logo-long.png";

export default function Footer() {
  return (
    <footer className="text-white section-padding bg-[#203ab5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logo_long} 
                alt="DashInfluence Logo" 
                className="h-8 w-auto mr-3"
              />
            </div>
            <p className="text-lg mb-4">AI Automation That Moves Business Forward</p>
            <p className="text-sm opacity-80 max-w-md">
              Transforming real estate professionals with intelligent automation solutions that drive real results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link href="/calculator" className="opacity-80 hover:opacity-100 transition-opacity">Revenue Calculator</Link></li>
              <li><Link href="/quiz" className="opacity-80 hover:opacity-100 transition-opacity">Automation Quiz</Link></li>
              <li><Link href="/mapper" className="opacity-80 hover:opacity-100 transition-opacity">Workflow Mapper</Link></li>
              <li><Link href="/why-us" className="opacity-80 hover:opacity-100 transition-opacity">Why Choose Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80">hello@dashinfluence.com</li>
              <li className="opacity-80">(555) 123-4567</li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Schedule Consultation</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Free Automation Audit</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80 mb-4 md:mb-0">
            © 2024 DashInfluence. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
