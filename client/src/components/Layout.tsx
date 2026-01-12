import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Building2, 
  FileCheck2, 
  BarChartBig, 
  Wallet, 
  Settings,
  LogOut,
  Menu,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  UserCheck
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/authContext";

const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Project Management", icon: Building2, href: "/projects" },
  { label: "Verification", icon: FileCheck2, href: "/verification" },
  { label: "Analytics", icon: BarChartBig, href: "/analytics" },
  { label: "Financials", icon: Wallet, href: "/financials" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isAuthenticated, userRole, logout } = useAuth();

  // If we are on landing or login, don't show the sidebar layout
  if (location === "/landing" || location === "/login") {
    return <>{children}</>;
  }

  const handleLogout = () => {
    logout();
    setLocation("/login");
  };

  const NavContent = (mobile = false) => {
    const collapsed = !mobile && isCollapsed;
    
    return (
      <div className={cn(
        "flex flex-col h-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64"
      )}>
        <div className="p-4 flex flex-col h-full">
          <div className={cn(
            "flex items-center gap-2 mb-8",
            collapsed ? "justify-center" : "px-2"
          )}>
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shrink-0">
              <span className="font-bold text-white text-lg">B</span>
            </div>
            {!collapsed && <span className="font-display font-bold text-xl tracking-tight transition-opacity duration-300">BNSC</span>}
          </div>
          
          <nav className="space-y-1 flex-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <a className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group relative",
                    isActive 
                      ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm" 
                      : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70",
                    collapsed && "justify-center px-0"
                  )}>
                    <item.icon className={cn("w-5 h-5 shrink-0", isActive ? "text-white" : "text-sidebar-foreground/70 group-hover:text-sidebar-accent-foreground")} />
                    {!collapsed && <span className="font-medium text-sm whitespace-nowrap overflow-hidden transition-opacity duration-300">{item.label}</span>}
                    {collapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md border whitespace-nowrap">
                        {item.label}
                      </div>
                    )}
                  </a>
                </Link>
              );
            })}

            {/* Super Admin Only: User Approval */}
            {userRole === "super_admin" && (
              <>
                <Separator className="bg-sidebar-border my-2" />
                <Link href="/user-approval">
                  <a className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group relative",
                    location === "/user-approval" 
                      ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm" 
                      : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70",
                    collapsed && "justify-center px-0"
                  )}>
                    <UserCheck className={cn("w-5 h-5 shrink-0", location === "/user-approval" ? "text-white" : "text-sidebar-foreground/70 group-hover:text-sidebar-accent-foreground")} />
                    {!collapsed && <span className="font-medium text-sm whitespace-nowrap overflow-hidden transition-opacity duration-300">User Approval</span>}
                    {collapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md border whitespace-nowrap">
                        User Approval
                      </div>
                    )}
                  </a>
                </Link>
              </>
            )}
          </nav>

          <div className="mt-auto space-y-4">
            <div className="space-y-1">
              <Link href="/settings">
                <a className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group relative",
                  location === "/settings" 
                    ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70",
                  collapsed && "justify-center px-0"
                )}>
                  <Settings className="w-5 h-5 shrink-0" />
                  {!collapsed && <span className="font-medium text-sm whitespace-nowrap overflow-hidden transition-opacity duration-300">Settings</span>}
                  {collapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md border whitespace-nowrap">
                      Settings
                    </div>
                  )}
                </a>
              </Link>
              <a 
                href="https://bnsc.com/help" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70 group relative",
                  collapsed && "justify-center px-0"
                )}
              >
                <HelpCircle className="w-5 h-5 shrink-0" />
                {!collapsed && <span className="font-medium text-sm whitespace-nowrap overflow-hidden transition-opacity duration-300">Help Center</span>}
                {collapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md border whitespace-nowrap">
                    Help Center
                  </div>
                )}
              </a>
            </div>

            <Separator className="bg-sidebar-border" />

            <div className={cn(
              "flex items-center gap-3 px-2 py-2 mb-2",
              collapsed && "justify-center px-0"
            )}>
              <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center border border-sidebar-border shrink-0">
                <span className="font-medium text-xs">JD</span>
              </div>
              {!collapsed && (
                <div className="flex flex-col overflow-hidden transition-opacity duration-300">
                  <span className="text-sm font-medium truncate">John Developer</span>
                  <span className="text-xs text-sidebar-foreground/50 capitalize">{userRole?.replace("_", " ") || "Admin"}</span>
                </div>
              )}
            </div>
            
            <Button 
              variant="ghost" 
              onClick={handleLogout}
              className={cn(
                "w-full justify-start text-sidebar-foreground/70 hover:text-destructive hover:bg-destructive/10 px-2 group relative",
                collapsed && "justify-center"
              )}
            >
              <LogOut className="w-4 h-4 shrink-0" />
              {!collapsed && <span className="ml-2">Log Out</span>}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md border whitespace-nowrap">
                  Log Out
                </div>
              )}
            </Button>

            {!mobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="w-full mt-2 hover:bg-sidebar-accent text-sidebar-foreground/50"
              >
                {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden md:block fixed inset-y-0 z-50 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64"
      )}>
        <NavContent />
      </aside>

      {/* Mobile Sidebar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar border-b border-sidebar-border px-4 py-3 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <span className="font-bold text-white text-lg">B</span>
            </div>
            <span className="font-display font-bold text-xl text-sidebar-foreground">BNSC</span>
          </div>
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-sidebar-foreground">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 border-none">
            {NavContent(true)}
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <main className={cn(
        "flex-1 p-4 md:p-8 pt-20 md:pt-8 min-h-screen transition-all duration-300 ease-in-out",
        "md:ml-0",
        !isCollapsed ? "md:ml-64" : "md:ml-20"
      )}>
        <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}