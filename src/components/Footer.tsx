const Footer = () => {
  return (
    <footer className="border-t border-border px-5 py-8 md:px-10 lg:px-16">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          © {new Date().getFullYear()} Mardhavan Abbathini
        </p>
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Business Development · Hyderabad, India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
