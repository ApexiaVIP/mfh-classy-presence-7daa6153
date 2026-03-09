import { Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      {/* Subtle top line */}
      <div className="line-accent absolute top-0 left-0 h-px w-full opacity-30" />

      <main className="flex max-w-xl flex-col items-center text-center">
        {/* Company name */}
        <h1 className="text-silver-gradient text-5xl font-light tracking-[0.25em] sm:text-6xl md:text-7xl">
          MFH
        </h1>
        <p className="mt-2 text-xs font-light uppercase tracking-[0.5em] text-muted-foreground sm:text-sm">
          Consulting Limited
        </p>

        {/* Divider */}
        <div className="line-accent my-10 h-px w-24 opacity-40" />

        {/* Tagline */}
        <p className="max-w-sm text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
          Professional consulting services based in the United Kingdom.
        </p>

        {/* Contact */}
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
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 text-center">
        <p className="text-[10px] font-light uppercase tracking-[0.3em] text-muted-foreground/40">
          © {new Date().getFullYear()} MFH Consulting Limited
        </p>
      </footer>

      {/* Subtle bottom line */}
      <div className="line-accent absolute bottom-0 left-0 h-px w-full opacity-30" />
    </div>
  );
};

export default Index;
