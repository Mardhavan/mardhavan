import { ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border/70 py-10">
    <div className="shell flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        © {new Date().getFullYear()} Mardhavan Abbathini
      </p>
      <p className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Business Development · GTM · Hyderabad, India
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
      >
        Top
        <ArrowUp className="h-3.5 w-3.5" />
      </button>
    </div>
  </footer>
);

export default Footer;
