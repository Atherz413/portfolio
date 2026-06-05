import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full">
      <div className="space-y-6">
        <p className="text-muted font-mono text-sm tracking-widest uppercase">
          Backend / Full Stack Developer
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
          {siteConfig.name}
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl leading-relaxed">
          {siteConfig.tagline}
        </p>
        <p className="text-base text-muted max-w-xl leading-relaxed">
          {siteConfig.subTagline}
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-foreground/20 text-foreground font-medium text-sm hover:border-foreground/50 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.resume}
            download
            className="px-5 py-2.5 rounded-lg border border-foreground/20 text-foreground font-medium text-sm hover:border-foreground/50 transition-colors"
          >
            Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
}
