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
  Separator as SeparatorIcon
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Project Management", icon: Building2, href: "/projects" },
  { label: "Verification", icon: FileCheck2, href: "/verification" },
  { label: "Analytics", icon: BarChartBig, href: "/analytics" },
  { label: "Financials", icon: Wallet, href: "/financials" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const NavContent = () => (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
            <span className="font-bold text-white text-lg">B</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">BNSC</span>
        </div>
        
        <nav className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <a className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group",
                  isActive 
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm" 
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70"
                )}>
                  <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-sidebar-foreground/70 group-hover:text-sidebar-accent-foreground")} />
                  <span className="font-medium text-sm">{item.label}</span>
                </a>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-4">
        <div className="space-y-1">
          <Link href="/settings">
            <a className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group",
              location === "/settings" 
                ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70"
            )}>
              <Settings className="w-5 h-5" />
              <span className="font-medium text-sm">Settings</span>
            </a>
          </Link>
          <a 
            href="https://bnsc.com/help" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70"
          >
            <HelpCircle className="w-5 h-5" />
            <span className="font-medium text-sm">Help Center</span>
          </a>
        </div>

        <Separator className="bg-sidebar-border" />

        <div className="flex items-center gap-3 px-3 py-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center border border-sidebar-border">
            <span className="font-medium text-xs">JD</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Developer</span>
            <span className="text-xs text-sidebar-foreground/50">Admin</span>
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-start text-sidebar-foreground/70 hover:text-destructive hover:bg-destructive/10 pl-3">
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 fixed inset-y-0 z-50">
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
            <NavContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 pt-20 md:pt-8 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}