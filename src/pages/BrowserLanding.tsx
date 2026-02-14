import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";

export default function BrowserLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <div className="font-mono text-[11px] text-primary tracking-[0.3em] mb-6">HOOT BROWSER</div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-[-2px] mb-4">
            A browser that<br />thinks for you.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8">
            Built-in crypto AI. 700+ tool orchestration. Every interaction verified. No other browser does all three.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#" className="px-7 py-3 bg-primary text-primary-foreground font-semibold text-sm">Download for macOS</a>
            <a href="#" className="px-7 py-3 border border-border text-foreground text-sm">Windows</a>
            <a href="#" className="px-7 py-3 border border-border text-foreground text-sm">Linux</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
