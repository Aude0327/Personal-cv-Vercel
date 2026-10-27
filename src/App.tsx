import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Reveal from "./components/Reveal";
import ImageSlot from "./components/ImageSlot";
import {
  aboutParagraphs,
  achievements,
  basicInfo,
  education,
  experience,
  links,
  profile,
  project,
  skillGroups,
  strengths,
} from "./data/content";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />

      <main id="main">
        <Hero />

        <Section id="about" kicker="01 · About" title="About me" tone="mint">
          <div className="about-grid">
            <Reveal>
              <div className="prose">
                {aboutParagraphs.map((text) => (
                  <p key={text.slice(0, 30)}>{text}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="card info-card">
                <h3>Basic information</h3>
                <dl className="info-list">
                  {basicInfo.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{row.href ? <a href={row.href}>{row.value}</a> : row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section id="education" kicker="02 · Education" title="Education">
          <div className="grid grid--2">
            {education.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className="card card--lift">
                  <h3>{item.title}</h3>
                  <p className="card-strong">{item.school}</p>
                  <p className="muted">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          kicker="03 · Skills"
          title="Technical and professional skills"
          intro="Skills I have built through study, work and running a small business."
          tone="mint"
        >
          <div className="grid grid--2">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 70}>
                <article className="card card--lift">
                  <h3>{group.title}</h3>
                  <ul className="chips">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="strengths">
              <h3>Personal strengths</h3>
              <ul className="chips chips--soft">
                {strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Section>

        <Section
          id="experience"
          kicker="04 · Experience"
          title="Experience"
          intro="Dated roles first, most recent at the top."
        >
          <ul className="grid grid--2 plain" aria-label="Experience">
            {experience.map((item, index) => (
              <li key={`${item.role}-${item.period}`}>
                <Reveal delay={(index % 2) * 90}>
                  <article className="card card--lift experience-card">
                    <p className="badge">{item.period}</p>
                    <h3>{item.role}</h3>
                    {item.organization && <p className="card-strong">{item.organization}</p>}
                    <p className="muted">{item.summary}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" kicker="05 · Projects" title="Projects" tone="mint">
          <Reveal>
            <article className="card project-card">
              <ImageSlot image={project.image} className="project-image" />
              <div className="project-body">
                <p className="badge badge--status">{project.status}</p>
                <h3>{project.title}</h3>
                <p className="muted">{project.description}</p>
                <ul className="chips chips--soft" aria-label="Built with">
                  {project.builtWith.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                  <a className="text-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    View repository on GitHub
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
              </div>
            </article>
          </Reveal>
        </Section>

        <Section
          id="achievements"
          kicker="06 · Achievements"
          title="Achievements and activities"
          intro="Experiences I am proud to achieve and be part of."
        >
          <div className="grid grid--2">
            {achievements.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 90}>
                <article className="card card--lift achievement-card">
                  <p className="badge">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.context}</p>
                  {item.image && <ImageSlot image={item.image} className="activity-photo" />}
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="connect"
          kicker="07 · Connect"
          title="GitHub, LinkedIn and email"
          intro="The best way to reach me is by email."
          tone="mint"
        >
          <div className="grid grid--3">
            {links.map((link, index) => (
              <Reveal key={link.label} delay={index * 80}>
                <a
                  className="card card--lift link-card"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.description}, ${link.handle} (opens in a new tab)`}
                >
                  <span className="link-label">{link.label}</span>
                  <span className="link-handle">{link.handle}</span>
                  <span className="link-arrow" aria-hidden="true">
                    Visit profile ↗
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={160}>
              <a className="card card--lift link-card" href={`mailto:${profile.email}`}>
                <span className="link-label">Email</span>
                <span className="link-handle">{profile.email}</span>
                <span className="link-arrow" aria-hidden="true">
                  Write to me →
                </span>
              </a>
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <p>
            <a href="https://github.com/Aude0327" target="_blank" rel="noopener noreferrer">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
