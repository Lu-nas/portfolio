import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import PresentationVideo from "@/components/PresentationVideo";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <PresentationVideo/>
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
