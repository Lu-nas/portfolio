import { Code2, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-foreground/90">
            <p>
              Olá! Sou estudante de <strong>Engenharia de Software</strong> com paixão por 
              criar soluções tecnológicas que fazem a diferença. Minha jornada no desenvolvimento 
              começou com curiosidade e se transformou em uma carreira focada em excelência técnica.
            </p>
            
            <p>
              Como <strong>Desenvolvedora Fullstack JavaScript</strong>, trabalho com as 
              tecnologias mais modernas do ecossistema JS, incluindo React, Node.js, TypeScript 
              e frameworks cloud. Tenho experiência em construir aplicações escaláveis do zero 
              até a produção.
            </p>
            
            <p>
              Além disso, sou entusiasta de <strong>Inteligência Artificial</strong> e utilizo 
              ferramentas como GitHub Copilot e modelos LLMs para otimizar meu fluxo de trabalho, 
              aumentar a produtividade e entregar código de maior qualidade.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow transition-shadow">
              <Code2 className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Código Limpo</h3>
              <p className="text-muted-foreground">
                Comprometida com boas práticas, arquitetura sólida e código manutenível.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow transition-shadow">
              <Rocket className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-muted-foreground">
                Focada em otimização, Core Web Vitals e experiências de usuário rápidas.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow transition-shadow">
              <Lightbulb className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Aprendizado Contínuo</h3>
              <p className="text-muted-foreground">
                Sempre explorando novas tecnologias e aprimorando minhas habilidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
