import {
  profile,
  education,
  leadership,
  project,
  technicalSkills,
  softSkills,
  certificates,
  type Certificate,
} from "../data";

/* ---------- About ---------- */
export function About() {
  return (
    <section id="about" className="slide slide--green about" aria-labelledby="about-h">
      <div className="about__photo">
        <img src="/images/portrait.webp" alt="" width={900} height={1030} loading="lazy" />
      </div>
      <div className="about__body">
        <h2 id="about-h" className="display">About me</h2>
        <p>{profile.about}</p>
        <dl className="about__facts">
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd>{profile.address}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

/* ---------- Education & leadership ---------- */
export function EducationLeadership() {
  return (
    <section id="education" className="slide slide--pink edu" aria-labelledby="edu-h">
      <div className="edu__entries">
        <article>
          <h3>{education.degree}</h3>
          <p>{education.school}</p>
        </article>
        <article>
          <h3>
            {leadership.org}
            <span className="edu__period">{leadership.period}</span>
          </h3>
          <p>{leadership.role}</p>
        </article>
      </div>
      <h2 id="edu-h" className="display edu__title">
        Education &amp;
        <br />
        leadership
      </h2>
    </section>
  );
}

/* ---------- Projects ---------- */
export function Projects() {
  return (
    <section id="projects" className="slide slide--green projects" aria-labelledby="projects-h">
      <div className="projects__head">
        <h2 id="projects-h" className="display">
          Academic
          <br />
          projects
        </h2>
        <div className="projects__meta">
          <p className="projects__name">
            {project.title} <span>({project.tag})</span>
          </p>
          <p className="projects__role">{project.role}</p>
        </div>
      </div>
      <div className="projects__grid">
        {project.points.map((p) => (
          <article key={p.heading} className="projects__tile">
            <h3>{p.heading}</h3>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */
export function Skills() {
  return (
    <section id="skills" className="slide slide--pink skills" aria-labelledby="skills-h">
      <h2 id="skills-h" className="display">Skills</h2>
      <h3 className="skills__sub">Technical skills</h3>
      <ul className="skills__grid">
        {technicalSkills.map((s, i) => (
          <li key={s} className={`tile tile--${i % 4}`}>
            {s}
          </li>
        ))}
      </ul>
      <h3 className="skills__sub">Soft skills</h3>
      <ul className="skills__soft">
        {softSkills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Certificates ---------- */
export function Certificates({ onOpen }: { onOpen: (c: Certificate) => void }) {
  return (
    <section id="certificates" className="slide slide--green certs" aria-labelledby="certs-h">
      <h2 id="certs-h" className="display">Certificates</h2>
      <ul className="certs__grid">
        {certificates.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              className="cert"
              onClick={() => onOpen(c)}
              aria-haspopup="dialog"
              aria-label={`View certificate: ${c.title}`}
            >
              <span className="cert__thumb">
                <img src={c.image} alt={c.alt} loading="lazy" />
                <span className="cert__zoom" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="10.5" cy="10.5" r="6.5" />
                    <path d="M15.5 15.5 21 21M10.5 8v5M8 10.5h5" />
                  </svg>
                  View
                </span>
              </span>
              <span className="cert__title">{c.title}</span>
              <span className="cert__meta">{c.issuer}</span>
              <span className="cert__meta">{c.detail}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Contact ---------- */
export function Contact() {
  return (
    <section id="contact" className="slide slide--pink contact" aria-labelledby="contact-h">
      <h2 id="contact-h" className="display contact__title">
        Thank
        <br />
        you
      </h2>
      <div className="contact__body">
        <p>Open to web development roles where I can keep learning and work on real products.</p>
        <ul className="contact__list">
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>{profile.address}</li>
        </ul>
        <a className="btn" href="/Novin-Durf-Aguilar-Resume.pdf" download>
          Download resume
        </a>
      </div>
    </section>
  );
}