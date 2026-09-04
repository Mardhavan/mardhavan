import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

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
        return rect.top <= 160 && rect.bottom >= 160;
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 md:pt-5">
      <nav
        aria-label="Primary"
        className={`mx-auto flex w-full max-w-[1180px] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-5 ${
          isScrolled
            ? "glass shadow-[var(--shadow-medium)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="rounded-full px-1 font-mono-ui text-sm uppercase tracking-[0.3em] transition-colors hover:text-primary"
          aria-label="Back to top"
        >
          M<span className="text-primary">A</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative rounded-full px-3.5 py-2 font-mono-ui text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 hover:text-foreground ${
                activeSection === item.id ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {activeSection === item.id && (
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-primary/40 bg-primary/10"
                />
              )}
              <span className="relative">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="/MARDHAVAN_ABBATHINI_BDM.pdf"
            download="Mardhavan_Abbathini_Resume.pdf"
            className="hidden rounded-full border border-border px-4 py-2 font-mono-ui text-[10px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary/60 hover:text-primary md:inline-flex"
          >
            Resume
          </a>
          <ThemeToggle className="rounded-full" />
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/60 hover:text-primary md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        id="mobile-navigation"
        className={`mx-auto mt-3 w-full max-w-[1180px] overflow-hidden rounded-2xl transition-[max-height,opacity] duration-500 md:hidden ${
          isOpen ? "glass max-h-[460px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 py-3">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`border-b border-border/40 py-4 text-left font-mono-ui text-xs uppercase tracking-[0.22em] ${
                activeSection === item.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/MARDHAVAN_ABBATHINI_BDM.pdf"
            download="Mardhavan_Abbathini_Resume.pdf"
            className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-primary font-mono-ui text-[10px] uppercase tracking-[0.22em] text-primary-foreground"
          >
            Download resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
