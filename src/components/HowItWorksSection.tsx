import { Package, BarChart3, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Pick a Package & Customize It",
    description: "Browse our curated packages or build your own. Filter by audience, context, format, and more.",
    icon: Package,
    video: "/videos/clip5.mp4",
  },
  {
    number: "02",
    title: "Review Forecast & Bidding Guidance",
    description: "Get real-time forecasts on reach, impressions, and recommended bid ranges before you commit.",
    icon: BarChart3,
    video: "/videos/clip6.mp4",
  },
  {
    number: "03",
    title: "Generate PMP Deals within Seconds",
    description: "One click and your deal IDs are ready to activate in any DSP. It's that simple.",
    icon: Zap,
    video: "/videos/clip7.mp4",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            From selection to activation in three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Video preview */}
              <div className="relative rounded-2xl overflow-hidden aspect-video mb-6 glass-card">
                <video
                  src={step.video}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                {/* Step number overlay */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                  <span className="text-primary font-semibold">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
