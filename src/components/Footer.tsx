import { ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border/50 py-12">
    <div className="shell flex flex-col items-center justify-between gap-5 sm:flex-row">
      <p className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        © {new Date().getFullYear()} Mardhavan Abbathini
      </p>
      <p className="text-center font-mono-ui text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        Business Development · GTM · Hyderabad, India
      </p>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="group inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 font-mono-ui text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
      >
        Top
        <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </div>
  </footer>
);

export default Footer;
