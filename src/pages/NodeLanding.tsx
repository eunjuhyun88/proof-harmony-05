import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";

export default function NodeLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <div className="font-mono text-[11px] text-primary tracking-[0.3em] mb-6">VERIFICATION NODE</div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-[-2px] mb-4">
            Keep AI<br />honest.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8">
            Run a verification node. Score data quality. Reach consensus. The network that proves AI data is real runs on people like you.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#" className="px-7 py-3 bg-primary text-primary-foreground font-semibold text-sm">Buy Genesis Node</a>
            <a href="#" className="px-7 py-3 border border-border text-foreground text-sm">Join Waitlist</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
