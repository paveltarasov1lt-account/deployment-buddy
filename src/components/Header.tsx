import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import curatedLogo from "@/assets/curated-logo.svg";

const navItems = [
  { label: "Product", hasDropdown: true },
  { label: "Channels", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Customer Stories", hasDropdown: false },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={curatedLogo} alt="Curated.Media" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <div className="glass-nav flex items-center gap-1 rounded-full px-2 py-1.5">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </button>
            ))}
          </div>
        </nav>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
            Login
          </Button>
          <Button className="glass-button text-white rounded-full px-5">
            Book a Call
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 glow-primary">
            Get Started — it's Free
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-nav mt-2 mx-4 rounded-2xl p-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </button>
            ))}
            <div className="border-t border-white/10 my-2 pt-4 flex flex-col gap-2">
              <Button variant="ghost" className="text-white hover:bg-white/10 justify-start">
                Login
              </Button>
              <Button className="glass-button text-white rounded-full">
                Book a Call
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full glow-primary">
                Get Started — it's Free
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
