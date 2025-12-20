import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCode from "./AnimatedCode";

const useCases = [
  {
    tag: "USE CASE",
    title: "Media Agency",
    description: "Programmatic without curation is just chaos. Control the pipes or get played by them.",
    cta: "Explore Now",
  },
  {
    tag: "USE CASE",
    title: "Direct Advertiser",
    description: "Brands win when supply is shaped, not shuffled. Cut out the noise. Curate what matters.",
    cta: "Explore Now",
  },
  {
    tag: "USE CASE",
    title: "Publisher",
    description: "O&O & Audience Extension. Maximize your inventory value with precision curation.",
    cta: "Explore Now",
  },
  {
    tag: "USE CASE",
    title: "Ad Tech",
    description: "Our Stack is Yours. Build on top of our proven curation infrastructure.",
    cta: "Explore Now",
  },
];

const UseCasesSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Built for Every Player
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Whether you're buying, selling, or building — we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group relative rounded-3xl p-8 glass-card overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated code background */}
              {index === 0 && <AnimatedCode />}

              {/* Top glow line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-white/5 rounded-full mb-4">
                  {useCase.tag}
                </span>

                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                  {useCase.title}
                </h3>

                <p className="text-foreground/60 mb-6">
                  {useCase.description}
                </p>

                <Button
                  variant="ghost"
                  className="group/btn text-primary hover:text-foreground hover:bg-primary/20 p-0"
                >
                  {useCase.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
