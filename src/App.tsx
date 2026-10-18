import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import {
  About,
  EducationLeadership,
  Projects,
  Skills,
  Certificates,
  Contact,
} from "./components/Sections";
import CertModal from "./components/CertModal";
import { profile, type Certificate } from "./data";

export default function App() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <>
      <Nav />
      <main className="deck">
        <Hero />
        <About />
        <EducationLeadership />
        <Projects />
        <Skills />
        <Certificates onOpen={setActive} />
        <Contact />
      </main>
      <footer className="footer">
        © {profile.year} {profile.name}
      </footer>
      <CertModal cert={active} onClose={() => setActive(null)} />
    </>
  );
}