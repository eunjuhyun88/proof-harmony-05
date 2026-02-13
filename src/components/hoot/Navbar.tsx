import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "BROWSER" },
    { to: "/protocol", label: "PROTOCOL" },
    { to: "/agents", label: "AGENTS" },
    { to: "/docs", label: "DOCS" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-foreground/10" : "bg-background border-foreground/10"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="font-bold text-foreground tracking-tight text-lg">HOOT</span>
          <span className="font-mono text-[10px] text-muted-foreground border border-border px-1.5 py-0.5">
            V1.0
          </span>
        </Link>

        <div className="flex items-center gap-0">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 text-xs font-medium tracking-wider transition-colors ${
                location.pathname === link.to
                  ? "text-foreground underline underline-offset-4"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#waitlist"
            className="ml-4 px-5 py-2 bg-foreground text-background text-xs font-bold tracking-wider hover:bg-foreground/90 transition-colors"
          >
            JOIN_WAITLIST
          </a>
        </div>
      </div>
    </nav>
  );
}
