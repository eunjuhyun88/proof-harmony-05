import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">H</span>
              </div>
              <span className="font-bold text-foreground tracking-tight">HOOTS</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Proof Layer for AI Data.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Protocol</h4>
            <div className="flex flex-col gap-2">
              <Link to="/protocol" className="text-sm text-foreground/70 hover:text-primary transition-colors">Protocol</Link>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Whitepaper</a>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Tokenomics</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Products</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">Browser</Link>
              <Link to="/agents" className="text-sm text-foreground/70 hover:text-primary transition-colors">Agents</Link>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Node</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Resources</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Docs</a>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Blog</a>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">About</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Community</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Discord</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Hoots. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Powered by Hoots Protocol</p>
        </div>
      </div>
    </footer>
  );
}
