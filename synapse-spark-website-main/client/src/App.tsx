import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TechnologyPage from "./pages/TechnologyPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";
import InternalServerErrorPage from "./pages/InternalServerErrorPage";
import EnterprisePage from "./pages/EnterprisePage";
import { queryClient } from "./lib/queryClient";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Switch>
            <Route path="/" component={Index} />
            <Route path="/about" component={AboutPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/technology" component={TechnologyPage} />
            <Route path="/process" component={ProcessPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/enterprise" component={EnterprisePage} />
            <Route path="/500" component={InternalServerErrorPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
