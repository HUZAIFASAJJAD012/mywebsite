import { capabilities } from "@/content/capabilities";
import { Reveal } from "@/components/motion/reveal";

export function CapabilitySystem() {
  return (
    <div className="capability-wrap">
      {capabilities.map(({ title, description, tools, icon: Icon }, index) => (
        <Reveal className="capability-reveal" key={title} delay={index * .06}>
          <article className="capability-card">
            <div className="capability-icon"><Icon size={21} strokeWidth={1.7} /></div>
            <h3>{title}</h3><p>{description}</p>
            <div className="tag-list">{tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
