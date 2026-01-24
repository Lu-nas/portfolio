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
              Olá! Sou estudante de <strong>Engenharia de Software</strong> Interessada em entender como
              os sistemas funcionam são projetados e evoluem ao longo do tempo. Tenho experiência acadêmica
              e prática no desenvolvimento de soluções utilizando<strong>Java</strong>, <strong>Python</strong>
              e tecnologias web, aplicando boas práticas de modelagem,organização e desenvolvimento.
              
            </p>
            
            <p>
             Atuo no desenvolvimento de projetos <strong>Fullstack </strong>, utilizando tecnologias do 
             ecossistema JavaScript como <strong>React</strong>, <strong>TypeScript</strong> e <strong>Node.js</strong>,
             além de APIs REST e integração com banco de dados. Busco construir aplicações funcionais,
             bem estruturadas e alinhadas a contextos reais de uso.
            </p> 

            <p>
              Também tenho vivência em <strong>processos corporativos e documentação técnica</strong>,
              além de interesse em <strong>Inteligência Artificial</strong>, utilizando ferramentas de apoio
              ao desenvolvimento para otimizar o aprendizado, produtividade e qualidade do código.
            </p>
          </div>
         
          <div className="grid gap-6">
             <div className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow transition-shadow ">
              <div className="flex items-center gap-3 mb-2.5">
                <Rocket className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">Eficiência e Performance</h3>
              </div>
              <p className="text-muted-foreground">
                Busco compreender como decisões técnicas impactam desempenho e manutenção, buscando construir
                priorizando soluções eficientes e uma experiência de uso consistente.
              </p>
            </div>
             <div className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow transition-shadow">
               <div className="flex items-center gap-3 mb-2.5">
                 <Lightbulb className="h-10 w-10 text-accent" />
                 <h3 className="text-xl font-semibold">Aprendizado Contínuo</h3>
               </div>
              <p className="text-muted-foreground">
                Mantenho uma rotina constante de estudos e prática para fortalecer fundamentos
                e evoluir de forma estruturada na Engenharia de Software. 
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow transition-shadow">
              <div className="flex items-center gap-3 mb-2.5">
                 <Code2 className="h-10 w-10 text-accent" />
                 <h3 className="text-xl font-semibold">Boas Práticas de Código</h3>
              </div>
              <p className="text-muted-foreground">
                Valorizo código limpo, organizado e legível, aplicando boas práticas que facilitam
                manutenção, testes e evolução das aplicações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
