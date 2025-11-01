const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Mardhavan. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Built with Passion, React & ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
