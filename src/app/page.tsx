import ThreeBackground from "@/components/ThreeBackground";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="relative font-sans min-h-screen">
      <ThreeBackground />
      <NavBar />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <Section id="work" title="Work">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            <li className="rounded-xl border border-foreground/10 bg-background/60 p-5 backdrop-blur">
              <h3 className="font-semibold">Project One</h3>
              <p className="text-sm text-foreground/80">Brief description of the project, stack, and impact. Link to repo or live demo.</p>
            </li>
            <li className="rounded-xl border border-foreground/10 bg-background/60 p-5 backdrop-blur">
              <h3 className="font-semibold">Project Two</h3>
              <p className="text-sm text-foreground/80">Brief description of the project, stack, and impact. Link to repo or live demo.</p>
            </li>
          </ul>
        </Section>
        <Section id="about" title="About">
          <p>
            Short bio and what you do. Tools you love, how you collaborate, and the kind of work you’re excited about.
          </p>
        </Section>
      </main>
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-foreground/70">
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  );
}
