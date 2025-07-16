import { Switch, Route, useLocation } from "wouter";
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
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { ScrollProgress } from "@/components/ScrollOptimizer";
import { LenisProvider } from "@/components/LenisProvider";
import CarDetailingCalculator from "@/pages/CarDetailingCalculator";
import RealEstateCalculator from "@/pages/RealEstateCalculator";
import HomeServicesCalculator from "@/pages/HomeServicesCalculator";
import HealthWellnessCalculator from "@/pages/HealthWellnessCalculator";
import RestaurantsCafesCalculator from "@/pages/RestaurantsCafesCalculator";
import EarlyAccess from "@/pages/EarlyAccess";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function Router() {
  useScrollToTop();
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/calculator" component={RevenueCalculator} />
      <Route
        path="/calculator/car-detailing"
        component={CarDetailingCalculator}
      />
      <Route path="/calculator/real-estate" component={RealEstateCalculator} />
      <Route
        path="/calculator/home-services"
        component={HomeServicesCalculator}
      />
      <Route
        path="/calculator/health-wellness"
        component={HealthWellnessCalculator}
      />
      <Route
        path="/calculator/restaurants-cafes"
        component={RestaurantsCafesCalculator}
      />
      <Route path="/quiz" component={AutomationQuiz} />
      <Route path="/packages" component={ServicePackages} />
      <Route path="/early-access" component={EarlyAccess} />
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
  const [location] = useLocation();
  const isQuizPage = location === "/quiz";
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <LenisProvider>
              <ScrollProgress />
              <div className="min-h-screen flex flex-col smooth-scroll">
                <Navbar forceDark={isQuizPage} />
                <main className="flex-1">
                  <Router />
                </main>
                <Footer isQuizPage={isQuizPage} />
              </div>
              <Toaster />
            </LenisProvider>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}

export default App;
