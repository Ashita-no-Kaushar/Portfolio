const Footer = () => {
  return (
    <footer className="border-t bg-background/70">
      <div className="container mx-auto px-4 py-6 text-center md:px-6">
        <p className="text-xs text-muted-foreground/80">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
