import { profile } from "../data";

export default function Hero() {
  return (
    <section id="home" className="slide slide--green hero" aria-labelledby="hero-title">
      <div className="hero__stage">
      <svg className="hero__title" viewBox="0 0 1200 520" role="img" aria-labelledby="hero-title">
        <title id="hero-title">Portfolio</title>
        <defs>
          <path id="hero-arc" d="M 40 480 Q 600 -150 1160 480" />
        </defs>
        <text className="hero__text">
          <textPath href="#hero-arc" startOffset="50%" textAnchor="middle">
            PORTFOLIO
          </textPath>
        </text>
      </svg>

      <div className="hero__glow" aria-hidden="true" />
      <img
        className="hero__photo"
        src="/images/portrait.webp"
        alt={`Portrait of ${profile.name}`}
        width={900}
        height={1030}
        fetchPriority="high"
      />

      <div className="hero__name">
        <p className="hero__name-main">{profile.name}</p>
        <p className="hero__name-role">{profile.role}</p>
      </div>
      <p className="hero__year">{profile.year}</p>
      </div>
    </section>
  );
}