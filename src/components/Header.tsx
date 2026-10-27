import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navItems.map((item) => item.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const active = useActiveSection(sectionIds);

  // Escape closes the mobile menu and returns focus to the menu button.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="#top" className="brand" aria-label={`${profile.fullName}, back to top`}>
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-name">{profile.shortName}</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className={`burger ${open ? "burger--open" : ""}`} aria-hidden="true" />
        </button>

        <nav id="primary-nav" className={`nav ${open ? "nav--open" : ""}`} aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? "is-active" : undefined}
                  aria-current={active === item.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
