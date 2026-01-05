import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import skyscraperImage from '@assets/generated_images/modern_skyscrapers_urban_aesthetic_background.png';

export default function Landing() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${skyscraperImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-700">
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl">
          <Building2 className="w-12 h-12 text-primary" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight">
            PropTech Developer
          </h1>
          <p className="text-2xl font-medium text-white/90">BNSC</p>
        </div>

        <div className="pt-12">
          <Link href="/login">
            <Button size="lg" className="h-16 px-12 text-xl bg-blue-600 hover:bg-blue-700 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}