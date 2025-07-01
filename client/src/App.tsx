import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import RevenueCalculator from "@/pages/RevenueCalculator";
import AutomationQuiz from "@/pages/AutomationQuiz";

import WhyDashInfluence from "@/pages/WhyDashInfluence";
import ServicePackages from "@/pages/ServicePackages";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import NotFound from "@/pages/not-found";
import LegacyHome from "@/pages/LegacyHome";
import { useScrollToTop } from "@/hooks/useScrollToTop";

function Router() {
  // Use the custom scroll-to-top hook
  useScrollToTop();

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/legacy-home" component={LegacyHome} />
      <Route path="/calculator" component={RevenueCalculator} />
      <Route path="/quiz" component={AutomationQuiz} />
      <Route path="/packages" component={ServicePackages} />
      <Route path="/why-us" component={WhyDashInfluence} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col smooth-scroll">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
