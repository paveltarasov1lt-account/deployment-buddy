import { Leaf, Headphones, Tv, Play, Target, Shield, Globe, Sparkles } from "lucide-react";

const features = [
  { label: "Carbon Efficient", icon: Leaf },
  { label: "Audio", icon: Headphones },
  { label: "CTV", icon: Tv },
  { label: "SIMID", icon: Play },
  { label: "Contextual", icon: Target },
  { label: "Brand Safe", icon: Shield },
  { label: "Global Reach", icon: Globe },
  { label: "AI Powered", icon: Sparkles },
];

const ScrollingCarousel = () => {
  // Double the features for seamless loop
  const doubledFeatures = [...features, ...features];

  return (
    <section className="relative py-12 bg-background overflow-hidden border-y border-white/10">
      <div className="flex animate-scroll-left">
        {doubledFeatures.map((feature, index) => (
          <div
            key={`${feature.label}-${index}`}
            className="flex items-center gap-3 px-8 py-4 mx-4 rounded-full glass-card whitespace-nowrap"
          >
            <feature.icon className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">{feature.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollingCarousel;
