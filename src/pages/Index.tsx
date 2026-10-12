import FloatingNav from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import WorkStyle from "@/components/WorkStyle";
import Contact from "@/components/Contact";

const Index = () => (
  <main className="relative">
    <FloatingNav />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <WorkStyle />
    <Contact />

    <footer className="py-8 px-6 text-center border-t border-border/50">
      <p className="text-sm text-muted-foreground font-mono">
        © Ilakkiya Murugesan | Product Engineer
      </p>
    </footer>
  </main>
);

export default Index;
