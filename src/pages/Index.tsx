import { Mail } from "lucide-react";
import bgHero from "@/assets/bg-hero.jpg";

const Index = () => {
  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center bg-background px-6">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.4]"
        style={{ backgroundImage: `url(${bgHero})` }}
      />

      {/* Subtle top line */}
      <div className="line-accent absolute top-0 left-0 z-10 h-px w-full opacity-30" />

      {/* Centred brand name */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-silver-gradient text-7xl font-light tracking-[0.25em] sm:text-8xl md:text-9xl">
          MFH
        </h1>
        <p className="mt-3 text-sm font-light uppercase tracking-[0.5em] text-muted-foreground sm:text-lg md:text-xl">
          Consulting Limited
        </p>
      </main>

      {/* Lower content */}
      <div className="relative z-10 mb-16 flex flex-col items-center text-center">
        <div className="line-accent mb-10 h-px w-24 opacity-40" />

        <p className="max-w-sm text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
          Professional consulting services.
        </p>

        <a
          href="mailto:accounts@mfhconsulting.co.uk"
          className="group mt-12 inline-flex items-center gap-2 border border-border px-6 py-3 text-xs font-light uppercase tracking-[0.3em] text-primary transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
        >
          <Mail className="h-3.5 w-3.5 opacity-60 transition-opacity group-hover:opacity-100" />
          Get in Touch
        </a>

        <p className="mt-4 text-xs text-muted-foreground/60">
          accounts@mfhconsulting.co.uk
        </p>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-auto pb-6 text-center">
        <p className="text-[10px] font-light uppercase tracking-[0.3em] text-muted-foreground/40">
          © {new Date().getFullYear()} MFH Consulting Limited
        </p>
      </footer>

      {/* Subtle bottom line */}
      <div className="line-accent absolute bottom-0 left-0 z-10 h-px w-full opacity-30" />
    </div>
  );
};

export default Index;
