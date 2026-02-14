import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <span className="font-bold text-foreground text-lg tracking-tight">HOOT</span>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed font-mono">
              The Proof Protocol for<br />AI Data and Agents.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 font-mono">PRODUCT</h4>
            <div className="flex flex-col gap-1.5">
              <Link to="/" className="text-xs text-foreground/60 hover:text-foreground transition-colors font-mono">Browser</Link>
              <Link to="/agents" className="text-xs text-foreground/60 hover:text-foreground transition-colors font-mono">Agents</Link>
              <a href="#" className="text-xs text-foreground/60 hover:text-foreground transition-colors font-mono">Node</a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 font-mono">PROTOCOL</h4>
            <div className="flex flex-col gap-1.5">
              <Link to="/protocol" className="text-xs text-foreground/60 hover:text-foreground transition-colors font-mono">Protocol</Link>
              <a href="#" className="text-xs text-foreground/60 hover:text-foreground transition-colors font-mono">Whitepaper</a>
              <a href="#" className="text-xs text-foreground/60 hover:text-foreground transition-colors font-mono">Tokenomics</a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 font-mono">RESOURCES</h4>
            <div className="flex flex-col gap-1.5">
              <a href="#" className="text-xs text-foreground/60 hover:text-foreground transition-colors font-mono">Docs</a>
              <a href="#" className="text-xs text-foreground/60 hover:text-foreground transition-colors font-mono">Blog</a>
              <a href="#" className="text-xs text-foreground/60 hover:text-foreground transition-colors font-mono">About</a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 font-mono">COMMUNITY</h4>
            <div className="flex flex-col gap-1.5">
              <a href="#" className="text-xs text-foreground/60 hover:text-foreground transition-colors font-mono">Twitter</a>
              <a href="#" className="text-xs text-foreground/60 hover:text-foreground transition-colors font-mono">Discord</a>
            </div>
          </div>
        </div>
        <div className="border-t border-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-muted-foreground font-mono">
            © 2026 HOOT PROTOCOL. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] text-muted-foreground font-mono">
            POWERED BY HOOT PROTOCOL
          </p>
        </div>
      </div>
    </footer>
  );
}
