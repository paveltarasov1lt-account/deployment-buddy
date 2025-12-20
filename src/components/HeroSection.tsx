import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-curated-deep/80 via-curated-deep/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-curated-deep/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Left content */}
          <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight mb-4 animate-fade-in">
              <span className="font-serif italic">Introducing</span>
              <br />
              <span className="font-semibold">Curated.Media</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Supply Side Trader®
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-6 text-base glow-primary">
                Get Started — it's Free
              </Button>
              <Button className="glass-button text-white rounded-full px-6 py-6 text-base">
                Book a Call
              </Button>
            </div>
          </div>

          {/* Right content - Scroll indicator */}
          <div className="hidden lg:flex flex-col items-end gap-4 text-right animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="glass-nav rounded-2xl p-6 flex flex-col items-center gap-3">
              <p className="text-foreground text-lg font-medium">
                Scroll down
                <br />
                & discover
              </p>
              <div className="w-10 h-10 rounded-full border-2 border-foreground/30 flex items-center justify-center animate-float">
                <ArrowDown className="h-5 w-5 text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile scroll indicator */}
      <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-8 h-8 rounded-full border-2 border-foreground/30 flex items-center justify-center animate-float">
          <ArrowDown className="h-4 w-4 text-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
