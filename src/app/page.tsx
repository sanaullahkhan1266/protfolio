import ThreeBackground from "@/components/ThreeBackground";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectsGrid";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative font-sans min-h-screen">
      <ThreeBackground />
      <NavBar />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <Section id="work" title="Selected Work">
          <ProjectsGrid />
        </Section>
        <Section id="about" title="About">
          <p>
            I’m <strong>Sanaullah</strong>, a <strong>Blockchain</strong> and <strong>AI</strong> developer with strong experience building
            <strong> fintech</strong> applications. I design and ship secure, scalable systems—from smart contracts and on-chain data
            pipelines to AI-driven services and real-time dashboards. I focus on clear architecture, maintainable code, and delivering
            measurable business impact.
          </p>
        </Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-foreground/70">
        © {new Date().getFullYear()} Sanaullah
      </footer>
    </div>
  );
}
