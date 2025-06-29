import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import RevenueCalculator from "@/pages/RevenueCalculator";
import AutomationQuiz from "@/pages/AutomationQuiz";
import WorkflowMapper from "@/pages/WorkflowMapper";
import WhyDashInfluence from "@/pages/WhyDashInfluence";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/calculator" component={RevenueCalculator} />
      <Route path="/quiz" component={AutomationQuiz} />
      <Route path="/mapper" component={WorkflowMapper} />
      <Route path="/why-us" component={WhyDashInfluence} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
