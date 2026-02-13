import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">H</span>
              </div>
              <span className="font-bold text-foreground tracking-tight">HOOT</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Proof Protocol for the AI Era.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Protocol</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">Home</Link>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Whitepaper</a>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Tokenomics</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Products</h4>
            <div className="flex flex-col gap-2">
              <Link to="/browser" className="text-sm text-foreground/70 hover:text-primary transition-colors">Browser</Link>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Nodes</a>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Data Hub</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Community</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Discord</a>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Docs</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Hoot Protocol. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Built for the AI era.</p>
        </div>
      </div>
    </footer>
  );
}
