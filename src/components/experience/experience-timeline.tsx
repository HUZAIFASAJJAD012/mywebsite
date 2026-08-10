import { experiences } from "@/content/experience";
import { Reveal } from "@/components/motion/reveal";

export function ExperienceTimeline() {
  return (
    <div className="timeline">
      {experiences.map((experience, index) => (
        <Reveal key={`${experience.role}-${experience.company ?? "freelance"}`} delay={index * .04}>
          <article className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-meta">{experience.period}</div>
            <div className="timeline-content">
              <h3>{experience.role}{experience.company ? <> <span className="muted">— {experience.company}</span></> : null}</h3>
              <ul>{experience.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
