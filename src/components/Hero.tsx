import { careerObjective, intro, profile } from "../data/content";
import ImageSlot from "./ImageSlot";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="portrait-frame">
          <ImageSlot image={profile.portrait} className="portrait" />
        </div>

        <p className="eyebrow">{profile.level}</p>
        <h1 id="hero-title">{profile.fullName}</h1>
        <p className="hero-role">{profile.title}</p>
        <p className="hero-location">{profile.location}</p>

        <p className="hero-intro">{intro}</p>

        <div className="hero-actions">
          <a className="btn btn--primary" href="#experience">
            View my experience
          </a>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </div>

        <aside className="objective" aria-labelledby="objective-title">
          <h2 id="objective-title">Career objective</h2>
          <p>{careerObjective}</p>
        </aside>
      </div>
    </section>
  );
}
