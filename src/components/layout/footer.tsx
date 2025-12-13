const Footer = () => {
  return (
    <footer className="border-t bg-background/50">
      <div className="container mx-auto flex items-center justify-center py-8 px-4 md:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
