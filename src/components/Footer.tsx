import { Linkedin } from "lucide-react";
import curatedLogo from "@/assets/curated-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-curated-deep border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and copyright */}
          <div className="flex items-center gap-4">
            <img src={curatedLogo} alt="Curated.Media" className="h-8 w-auto" />
            <p className="text-white/60 text-sm">
              ©2025 Curated.Media: Supply Side Trader®
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <Linkedin className="h-5 w-5 text-white/80" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
