import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-title">

      {/* Fundo decorativo */}
      <div  aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in"> 
        <h1  id="hero-title" className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Luana Silva
        </h1>
        <h2 className="sr-only">Engenharia de Software com foco em Backend</h2>

        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
          Estudante de Engenharia de Software | Backend
        </p>
        
       <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Desenvolvedora em formação, atuando no desenvolvimento de <strong> APIs REST</strong>,  
          lógica de negócio e integração com <strong>bancos de dados relacionais</strong>.
          Possuo experiência acadêmica utilizando{" "}
          <span className="text-foreground font-medium">
            Java (Spring Boot), MySQL, React, TypeScript  
          </span> 
            , aplicando boas práticas de desenvolvimento e organização de código.
        </p> 
        
        <div className="flex flex-wrap gap-4 justify-center mb-12"> 
          <Button size="lg" className="shadow-glow hover:scale-105 transition-transform" asChild>
            <a href="#projects">
              Ver Projetos
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>

          <Button size="lg" className="shadow-glow hover:scale-105 transition-transform" asChild>
            <a href="#contact">
             Fale comigo
            <Mail className="ml-2 h-5 w-5" />
            </a>
          </Button> 
        </div>
        
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/Lu-nas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/luanasilva-lu-nas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:luanasilva.ss9497@gmail.com"
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
