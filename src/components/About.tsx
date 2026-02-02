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
              Olá! Sou estudante de <strong>Engenharia de Software</strong>, interessada em compreender como
              os sistemas são projetados, implementados e evoluem ao longo do tempo. Possuo experiência acadêmica
              no desenvolvimento de soluções utilizando <strong>Java</strong>, <strong>Python </strong> 
              e tecnologias web, aplicando boas práticas de modelagem, organização e desenvolvimento de software.
              
            </p>
            
            <p>
              Atuando em projetos, com foco em <strong>backend</strong>, trabalhando na construção de <strong>APIs REST</strong>,
              integração com <strong>bancos de dados relacionais</strong> e lógica de negócio. 
              Também utilizo tecnologias do ecossistema JavaScript, como <strong> React</strong>, <strong>TypeScript</strong> e 
              <strong> Node.js</strong>, para integração entre camadas e desenvolvimento de sistemas web completos.
            </p> 

            <p>
              Possuo vivência em <strong>processos corporativos</strong> e <strong>documentação técnica</strong>,
              além de interesse em <strong>Inteligência Artificial</strong> como ferramenta de apoio ao
              desenvolvimento, visando otimizar o aprendizado, a produtividade e a qualidade do código.
            </p>
          </div>
         
          <div className="grid gap-6">
             <div className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow transition-shadow ">
              <div className="flex items-center gap-3 mb-2.5">
                <Rocket className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">Eficiência e Performance</h3>
              </div>
              <p className="text-muted-foreground">
                Busco compreender como decisões técnicas impactam o desempenho e manutenção, em
                soluções eficientes e experiências de uso consistente.
              </p>
            </div>
             <div className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow transition-shadow">
               <div className="flex items-center gap-3 mb-2.5">
                 <Lightbulb className="h-10 w-10 text-accent" />
                 <h3 className="text-xl font-semibold">Aprendizado Contínuo</h3>
               </div>
              <p className="text-muted-foreground">
                Mantenho uma rotina constante de estudos e prática, fortalecendo fundamentos
                e evoluindo de forma estruturada na Engenharia de Software. 
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
