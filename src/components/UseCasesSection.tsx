import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-curated-deep to-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-curated-purple/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group relative rounded-3xl p-8 bg-curated-deep/60 backdrop-blur-sm border border-white/10 hover:border-curated-purple/30 transition-all duration-300"
            >
              {/* Top glow line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-curated-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <span className="inline-block px-3 py-1 text-xs font-medium text-curated-lavender bg-white/5 rounded-full mb-4">
                {useCase.tag}
              </span>
              
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                {useCase.title}
              </h3>
              
              <p className="text-white/60 mb-6">
                {useCase.description}
              </p>
              
              <Button
                variant="ghost"
                className="group/btn text-curated-purple hover:text-white hover:bg-curated-purple/20 p-0"
              >
                {useCase.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
