import { CheckCircle2, Globe2, MapPin, Quote } from "lucide-react";
import { experiences } from "@/content/experience";
import { profile } from "@/content/profile";

export function HomeExperience() {
  return (
    <>
      <div className="home-experience-grid">
        <div className="home-timeline">
          {experiences.map((experience, index) => (
            <article className="home-timeline-item" key={`${experience.role}-${experience.company ?? "freelance"}`}>
              <span className="home-timeline-dot" data-current={index === 0 ? "true" : undefined} aria-hidden="true" />
              <div className="home-timeline-period">{experience.period}</div>
              <div>
                <h3>{experience.role}</h3>
                {experience.company ? <strong>{experience.company}</strong> : null}
                <p>{experience.responsibilities[0]}</p>
              </div>
            </article>
          ))}
        </div>
        <aside className="home-philosophy">
          <Quote size={38} strokeWidth={1.4} aria-hidden="true" />
          <blockquote>“I enjoy turning complex requirements into clear, reliable digital products.”</blockquote>
          <p>— {profile.name}</p>
        </aside>
      </div>
      <div className="home-presence-row" aria-label="Location and availability">
        <span><MapPin size={15} aria-hidden="true" /> Based in {profile.location}</span>
        <span><Globe2 size={15} aria-hidden="true" /> Working worldwide</span>
        <span><CheckCircle2 size={15} aria-hidden="true" /> {profile.availability}</span>
      </div>
    </>
  );
}
