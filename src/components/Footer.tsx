import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import curatedLogo from "@/assets/curated-logo.svg";

const footerLinks = {
  product: {
    title: "Product",
    links: ["Packages", "Channels", "Analytics", "Integrations"],
  },
  useCases: {
    title: "Use Cases",
    links: ["Media Agencies", "Direct Advertisers", "Publishers", "Ad Tech"],
  },
  channels: {
    title: "Channels",
    links: ["CTV", "Audio", "Display", "Video"],
  },
  resources: {
    title: "Resources",
    links: ["Documentation", "API Reference", "Blog", "Support"],
  },
  legal: {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10">
      {/* CTA Section */}
      <div className="py-16 md:py-24 text-center border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            Start Trading Supply-Side Today
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base glow-primary">
              Get Started — it's Free
            </Button>
            <Button className="glass-button text-foreground rounded-full px-8 py-6 text-base">
              Book a Call
            </Button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Logo column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <img src={curatedLogo} alt="Curated.Media" className="h-10 w-auto mb-4" />
              <p className="text-foreground/60 text-sm mb-4">
                Supply Side Trader®
              </p>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors inline-flex"
              >
                <Linkedin className="h-5 w-5 text-foreground/80" />
              </a>
            </div>

            {/* Link columns */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="text-foreground font-semibold mb-4 text-sm">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-foreground/60 hover:text-foreground text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/60 text-sm">
              ©2025 Curated.Media: Supply Side Trader®
            </p>
            <div className="flex items-center gap-4">
              <span className="text-foreground/40 text-xs">IAB Tech Lab Member</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
