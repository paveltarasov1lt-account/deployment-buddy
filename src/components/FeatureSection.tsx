import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    tag: "AUDIENCE-LAYERED",
    title: "Find More In-Market Prospects",
    description: "Publishers first-party data and third-party audiences layered supply-side.",
    cta: "Get these PMPs Now",
    gradient: "from-curated-purple/20 to-curated-lavender/20",
  },
  {
    tag: "CTV PACKAGES",
    title: "TV People Watch",
    description: "CTV inventory leaning towards a specific context or genre.",
    cta: "Get these PMPs Now",
    gradient: "from-curated-deep/80 to-curated-purple/20",
  },
  {
    tag: "PERFORMANCE",
    title: "Increase Conversion",
    description: "Placements curated to drive towards the KPI of your choice.",
    cta: "Get these PMPs Now",
    gradient: "from-curated-deep/80 to-curated-lavender/20",
  },
];

const FeatureSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-curated-deep overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-curated-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-curated-lavender/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-curated-lavender text-lg mb-4">
            The leading independent self-service curation platform
            <br className="hidden md:block" />
            for programmatic media buyers.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.tag}
              className={`relative group rounded-3xl p-8 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-curated-purple/50 to-transparent" />
              
              <span className="inline-block px-3 py-1 text-xs font-medium text-curated-lavender bg-white/5 rounded-full mb-6">
                {feature.tag}
              </span>
              
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-white/70 mb-8">
                {feature.description}
              </p>
              
              <Button
                variant="ghost"
                className="group/btn text-curated-purple hover:text-white hover:bg-curated-purple/20 p-0"
              >
                {feature.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="mt-24 text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 max-w-4xl mx-auto leading-relaxed">
            Select boldly, see ahead, shape supply, tweak fast, track truth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full px-6">
              Customer Stories
            </Button>
            <Button className="glass-button text-white rounded-full px-6">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
