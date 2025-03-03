import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home" className="h-screen">
        <Hero />
      </section>
      <section id="about" className="py-16">
        <About />
      </section>
      <section id="skills" className="py-16">
        <Skills />
      </section>
      <section id="projects" className="py-16">
        <Projects />
      </section>
      <section id="contact" className="py-16">
        <Contact />
      </section>
    </main>
  );
}