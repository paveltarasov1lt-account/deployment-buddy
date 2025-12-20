import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    tag: "AUDIENCE-LAYERED",
    title: "Find More In-Market Prospects",
    description: "Publishers first-party data and third-party audiences layered supply-side.",
    cta: "Get these PMPs Now",
    video: "/videos/clip1.mp4",
  },
  {
    tag: "CTV PACKAGES",
    title: "TV People Watch",
    description: "CTV inventory leaning towards a specific context or genre.",
    cta: "Get these PMPs Now",
    video: "/videos/clip2.mp4",
  },
  {
    tag: "PERFORMANCE",
    title: "Increase Conversion",
    description: "Placements curated to drive towards the KPI of your choice.",
    cta: "Get these PMPs Now",
    video: "/videos/clip3.mp4",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="video-card relative group rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        src={feature.video}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <span className="inline-block w-fit px-3 py-1 text-xs font-medium text-accent bg-white/10 backdrop-blur-sm rounded-full mb-4">
          {feature.tag}
        </span>

        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
          {feature.title}
        </h3>

        <p className="text-foreground/70 mb-6 text-sm md:text-base">
          {feature.description}
        </p>

        <Button
          variant="ghost"
          className="group/btn w-fit text-primary hover:text-foreground hover:bg-primary/20 p-0"
        >
          {feature.cta}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-accent text-lg md:text-xl mb-4 max-w-2xl mx-auto">
            The leading independent self-service curation platform
            <br className="hidden md:block" />
            for programmatic media buyers.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.tag} feature={feature} index={index} />
          ))}
        </div>

        {/* Tagline */}
        <div className="mt-24 text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Select boldly, see ahead, shape supply, tweak fast, track truth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button variant="ghost" className="text-foreground hover:bg-white/10 rounded-full px-6">
              Customer Stories
            </Button>
            <Button className="glass-button text-foreground rounded-full px-6">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
