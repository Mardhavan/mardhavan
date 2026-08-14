import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Profile", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Capabilities", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = ["home", "about", "experience", "skills", "education", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-5 md:px-10 lg:px-16">
        <a
          href="#home"
          className="font-mono-ui text-sm uppercase tracking-[0.24em] text-foreground transition-colors hover:text-primary"
        >
          M<span className="text-primary">A</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`font-mono-ui text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-primary ${
                activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/MARDHAVAN_ABBATHINI_BDM.pdf"
            download="Mardhavan_Abbathini_Resume.pdf"
            className="border border-border px-4 py-2 font-mono-ui text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-primary"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="text-foreground md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background/98 backdrop-blur-lg md:hidden">
          <div className="flex flex-col px-5 py-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="border-b border-border py-3 text-left font-mono-ui text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/MARDHAVAN_ABBATHINI_BDM.pdf"
              download="Mardhavan_Abbathini_Resume.pdf"
              className="py-3 font-mono-ui text-[11px] uppercase tracking-[0.18em] text-primary"
            >
              Download resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
