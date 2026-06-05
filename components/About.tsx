import { about } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full py-24 border-t border-foreground/10"
    >
      <h2 className="text-2xl font-semibold text-foreground mb-6">About</h2>

      <div className="space-y-4 mb-10">
        {about.story.map((paragraph, i) => (
          <p key={i} className="text-foreground/70 text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-16">
        {about.values.map((value) => (
          <span
            key={value}
            className="font-mono text-sm px-3 py-1.5 rounded-lg border border-accent/40 text-accent"
          >
            {value}
          </span>
        ))}
      </div>

      <p className="text-muted font-mono text-xs">
        Built with Next.js, TypeScript, Tailwind CSS — deployed on Vercel
      </p>
    </section>
  );
}
