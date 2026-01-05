import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Building2 } from "lucide-react";
import skyscraperImage from '@assets/generated_images/modern_skyscrapers_urban_aesthetic_background.png';

export default function Login() {
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left Column - Image */}
      <div 
        className="hidden lg:block lg:w-1/2 relative"
        style={{
          backgroundImage: `url(${skyscraperImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
      </div>

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-background p-8 md:p-16">
        <div className="flex items-center gap-2 mb-16">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">PropTech Developer</span>
        </div>

        <div className="max-w-md w-full mx-auto flex-1 flex flex-col justify-center">
          <div className="space-y-2 mb-8 text-center lg:text-left">
            <h1 className="text-3xl font-display font-bold text-foreground">Welcome to PropTech Developer!</h1>
            <p className="text-muted-foreground">Please enter your login credentials to access your account.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email or Username</Label>
              <Input id="email" placeholder="Enter your email" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" required className="h-12" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">Remember me</Label>
              </div>
              <Button variant="link" className="p-0 text-primary h-auto font-normal">
                Forgot Password?
              </Button>
            </div>

            <Button type="submit" className="w-full h-12 bg-[#1a237e] hover:bg-[#121858] text-white font-semibold text-lg">
              Login
            </Button>
          </form>
        </div>

        <div className="mt-auto pt-8 text-center text-sm">
          <p className="text-muted-foreground">
            Don't have an account? <Button variant="link" className="p-0 h-auto text-primary font-semibold">Register</Button>
          </p>
        </div>
      </div>
    </div>
  );
}