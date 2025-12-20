import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
          One Platform to access the entire
          <br />
          <span className="text-primary">Supply-Side Ecosystem</span>
        </h2>

        <p className="text-foreground/60 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of media buyers who've transformed their programmatic strategy with Curated.Media
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base glow-primary">
            Get Started — it's Free
          </Button>
          <Button className="glass-button text-foreground rounded-full px-8 py-6 text-base">
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
