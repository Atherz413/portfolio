import { projects, type Project } from "@/lib/data";

function TypeBadge({ type }: { type: Project["type"] }) {
  const isBackend = type === "backend";
  return (
    <span
      className={`text-xs font-mono px-2 py-0.5 rounded-full ${
        isBackend ? "bg-accent/20 text-accent" : "bg-foreground/10 text-muted"
      }`}
    >
      {isBackend ? "backend project" : "production system"}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-foreground/10 rounded-xl p-6 hover:border-foreground/25 transition-colors">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div>
          <div className="mb-1">
            <TypeBadge type={project.type} />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        </div>

        <div className="flex gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition-opacity"
            >
              Live API
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg border border-foreground/20 text-foreground font-medium hover:border-foreground/50 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      <p className="text-foreground/70 text-sm leading-relaxed mb-4">{project.description}</p>

      <ul className="space-y-1.5 mb-4">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="text-sm text-muted flex gap-2">
            <span className="text-accent mt-0.5">→</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2 py-1 rounded-md bg-foreground/5 text-muted border border-foreground/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full py-24"
    >
      <h2 className="text-2xl font-semibold text-foreground mb-2">Projects</h2>
      <p className="text-muted text-sm mb-12">Production systems and backend engineering work</p>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
