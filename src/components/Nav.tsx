const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#home" aria-label="Back to top">
        N.D. Aguilar
      </a>
      <nav aria-label="Primary">
        <ul className="nav__list">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
