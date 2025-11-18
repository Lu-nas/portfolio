import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
          <span className="text-sm font-medium text-accent">Disponível para oportunidades</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Luana Silva
        </h1>
        
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
          Engenheira de Software & Desenvolvedora Fullstack
        </p>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Especializada em JavaScript/TypeScript, React, Node.js e ferramentas de IA. 
          Transformando ideias em soluções escaláveis e performáticas.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" className="shadow-glow" asChild>
            <a href="#contact">
              Entrar em Contato
              <Mail className="ml-2 h-5 w-5" />
            </a>
          </Button>
          
          <Button size="lg" variant="outline" asChild>
            <a href="#projects">
              Ver Projetos
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:luana.silva@example.com"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
