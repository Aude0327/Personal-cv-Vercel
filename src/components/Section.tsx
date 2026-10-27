import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  tone?: "light" | "mint";
  children: ReactNode;
}

export default function Section({ id, kicker, title, intro, tone = "light", children }: SectionProps) {
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal>
          <header className="section-head">
            <p className="kicker">{kicker}</p>
            <h2 id={`${id}-title`}>{title}</h2>
            {intro && <p className="section-intro">{intro}</p>}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
