import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-foreground tracking-tight text-lg">hoot.ai</span>
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide hidden sm:block"
          >
            Docs
          </a>
          <a
            href="#"
            className="px-5 py-2 bg-primary text-primary-foreground text-xs font-semibold tracking-wide hover:bg-primary/90 transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
