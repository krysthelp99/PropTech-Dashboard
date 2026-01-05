import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";

import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import ProjectInput from "@/pages/ProjectInput";
import Inventory from "@/pages/Inventory";
import Verification from "@/pages/Verification";
import Analytics from "@/pages/Analytics";
import Financials from "@/pages/Financials";
import Settings from "@/pages/Settings";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/login" component={Login} />
        
        {/* Main Dashboard Routes */}
        <Route path="/" component={Dashboard} />
        <Route path="/projects" component={ProjectInput} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/verification" component={Verification} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/financials" component={Financials} />
        <Route path="/settings" component={Settings} />
        
        {/* Fallback to landing if not found or directly at root for initial session */}
        <Route path="/:rest*" component={() => <Redirect to="/landing" />} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;