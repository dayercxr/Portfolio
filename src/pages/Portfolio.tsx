import { Background } from "@/components/background.tsx";
import { Navbar } from "@/components/navbar/navbar.tsx";
import { Hero } from "@/components/hero/hero.tsx";
import { Skills } from "@/components/skills/skills.tsx";
import { Education } from "@/components/education/education.tsx";
import { Experience } from "@/components/experience/experience.tsx";
import { Projects } from "@/components/projects/projects.tsx";

function Portfolio() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Skills />
    </>
  );
}

export default Portfolio;
