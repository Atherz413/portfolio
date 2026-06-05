import { skills, type Skill } from "@/lib/data";

function SkillGroup({ group }: { group: Skill }) {
  return (
    <div className="space-y-3">
      <p className="text-muted font-mono text-sm">{group.category}</p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="font-mono text-xs bg-foreground/5 border border-foreground/10 px-2 py-1 rounded-md text-foreground/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full py-24"
    >
      <h2 className="text-2xl font-semibold text-foreground mb-2">Skills</h2>
      <p className="text-muted text-sm mb-12">What I work with</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((group, i) => (
          <div
            key={group.category}
            className={skills.length % 2 !== 0 && i === skills.length - 1 ? "md:col-span-2" : undefined}
          >
            <SkillGroup group={group} />
          </div>
        ))}
      </div>
    </section>
  );
}
