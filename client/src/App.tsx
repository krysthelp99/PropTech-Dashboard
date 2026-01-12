import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import { AuthProvider, useAuth } from "@/lib/authContext";

import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import ProjectInput from "@/pages/ProjectInput";
import Inventory from "@/pages/Inventory";
import Verification from "@/pages/Verification";
import Analytics from "@/pages/Analytics";
import Financials from "@/pages/Financials";
import Settings from "@/pages/Settings";
import UserApproval from "@/pages/UserApproval";

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return <Component />;
}

function SuperAdminRoute({ component: Component }: { component: React.ComponentType }) {
  const { isAuthenticated, userRole } = useAuth();
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  if (userRole !== "super_admin") {
    return <Redirect to="/" />;
  }
  return <Component />;
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/login" component={Login} />
        
        {/* Protected Dashboard Routes */}
        <Route path="/" component={() => <ProtectedRoute component={Dashboard} />} />
        <Route path="/projects" component={() => <ProtectedRoute component={ProjectInput} />} />
        <Route path="/inventory" component={() => <ProtectedRoute component={Inventory} />} />
        <Route path="/verification" component={() => <ProtectedRoute component={Verification} />} />
        <Route path="/analytics" component={() => <ProtectedRoute component={Analytics} />} />
        <Route path="/financials" component={() => <ProtectedRoute component={Financials} />} />
        <Route path="/settings" component={() => <ProtectedRoute component={Settings} />} />
        
        {/* Super Admin Only */}
        <Route path="/user-approval" component={() => <SuperAdminRoute component={UserApproval} />} />
        
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;