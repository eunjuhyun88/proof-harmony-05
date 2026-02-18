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
    { to: "/", label: "홈" },
    { to: "/protocol", label: "프로토콜" },
    { to: "/agents", label: "에이전트" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-border"
          : "bg-background/60 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="text-xl">🦉</span>
          <span className="font-mono text-sm font-medium text-foreground tracking-wider">HOOT</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 text-xs font-mono rounded-md transition-colors ${
                location.pathname === link.to
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-5 py-2 rounded-lg bg-accent text-accent-foreground text-xs font-mono font-medium tracking-wider hover:bg-accent/90 transition-all hover:-translate-y-px"
        >
          시작하기 →
        </button>
      </div>
    </nav>
  );
}
