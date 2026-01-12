import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Building2, ShieldCheck, Loader2 } from "lucide-react";
import { useAuth } from "@/lib/authContext";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import skyscraperImage from '@assets/generated_images/modern_skyscrapers_urban_aesthetic_background.png';

export default function Login() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const [step, setStep] = useState<"credentials" | "mfa">("credentials");
  const [isLoading, setIsLoading] = useState(false);
  const [mfaCode, setMfaCode] = useState("");
  const [selectedRole, setSelectedRole] = useState<"super_admin" | "admin">("super_admin");

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("mfa");
    }, 800);
  };

  const handleMfaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mfaCode.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        login(selectedRole);
        setLocation("/");
      }, 600);
    }
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
          {step === "credentials" ? (
            <>
              <div className="space-y-2 mb-8 text-center lg:text-left">
                <h1 className="text-3xl font-display font-bold text-foreground">Welcome Back!</h1>
                <p className="text-muted-foreground">Enter your credentials to access your account.</p>
              </div>

              <form onSubmit={handleCredentialsSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email or Username</Label>
                  <Input id="email" placeholder="Enter your email" required className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" required className="h-12" />
                </div>

                <div className="space-y-2">
                  <Label>Login as (Demo)</Label>
                  <div className="flex gap-4">
                    <Button 
                      type="button" 
                      variant={selectedRole === "super_admin" ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setSelectedRole("super_admin")}
                    >
                      Super Admin
                    </Button>
                    <Button 
                      type="button" 
                      variant={selectedRole === "admin" ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setSelectedRole("admin")}
                    >
                      Admin
                    </Button>
                  </div>
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

                <Button type="submit" className="w-full h-12 bg-[#1a237e] hover:bg-[#121858] text-white font-semibold text-lg" disabled={isLoading}>
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Continue"}
                </Button>
              </form>
            </>
          ) : (
            <>
              <div className="space-y-2 mb-8 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl font-display font-bold text-foreground">Two-Factor Authentication</h1>
                <p className="text-muted-foreground">Enter the 6-digit code from your authenticator app.</p>
              </div>

              <form onSubmit={handleMfaSubmit} className="space-y-8">
                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={mfaCode} onChange={setMfaCode}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} className="w-12 h-14 text-xl" />
                      <InputOTPSlot index={1} className="w-12 h-14 text-xl" />
                      <InputOTPSlot index={2} className="w-12 h-14 text-xl" />
                      <InputOTPSlot index={3} className="w-12 h-14 text-xl" />
                      <InputOTPSlot index={4} className="w-12 h-14 text-xl" />
                      <InputOTPSlot index={5} className="w-12 h-14 text-xl" />
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-[#1a237e] hover:bg-[#121858] text-white font-semibold text-lg" 
                  disabled={mfaCode.length !== 6 || isLoading}
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify & Login"}
                </Button>

                <Button 
                  type="button" 
                  variant="ghost" 
                  className="w-full text-muted-foreground"
                  onClick={() => setStep("credentials")}
                >
                  Back to login
                </Button>
              </form>
            </>
          )}
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