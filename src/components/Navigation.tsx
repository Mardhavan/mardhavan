import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Expertise", id: "expertise" },
  { label: "Experience", id: "experience" },
  { label: "Work", id: "work" },
  { label: "Contact", id: "contact" },
];

const sectionIds = [
  "home",
  "about",
  "expertise",
  "experience",
  "work",
  "approach",
  "skills",
  "education",
  "testimonials",
  "contact",
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between md:h-[72px]">
        <button
          onClick={() => scrollToSection("home")}
          className="font-mono-ui text-sm uppercase tracking-[0.28em] transition-colors hover:text-primary"
          aria-label="Back to top"
        >
          M<span className="text-primary">A</span>
        </button>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative font-mono-ui text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 hover:text-foreground ${
                activeSection === item.id ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-primary transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
          <a
            href="/MARDHAVAN_ABBATHINI_BDM.pdf"
            download="Mardhavan_Abbathini_Resume.pdf"
            className="rounded-md border border-border px-4 py-2 font-mono-ui text-[10px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 md:hidden ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="shell flex flex-col py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`border-b border-border/50 py-4 text-left font-mono-ui text-xs uppercase tracking-[0.2em] ${
                activeSection === item.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/MARDHAVAN_ABBATHINI_BDM.pdf"
            download="Mardhavan_Abbathini_Resume.pdf"
            className="mt-5 inline-flex h-11 items-center justify-center rounded-md bg-primary font-mono-ui text-[10px] uppercase tracking-[0.2em] text-primary-foreground"
          >
            Download resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
