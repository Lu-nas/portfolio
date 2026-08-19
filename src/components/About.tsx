import { Code2, SearchCode, Workflow } from "lucide-react";

const About = () => {
  return (
    <section id="about" aria-labelledby="about-title" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 id="about-title" className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-foreground/90">
            <p>
              Sou estudante de <strong>Engenharia de Software</strong> e venho construindo
              minha trajetória na tecnologia por meio de estudos e projetos práticos.
              Tenho interesse em compreender não apenas como desenvolver uma aplicação,
              mas também como suas diferentes partes se organizam e evoluem.
            </p>
            
            <p>
              Atualmente, direciono meus estudos para o <strong>desenvolvimento backend</strong>,
              explorando a construção de APIs, regras de negócio, integração com bancos de
              dados e comunicação entre diferentes camadas de uma aplicação.
            </p> 

            <p>
              Minha formação também se conecta a experiências com <strong>processos,
              documentação e organização</strong>, que contribuem para uma visão mais
              estruturada do desenvolvimento de software. Estou em uma fase de construção
              profissional, buscando transformar o conhecimento adquirido em projetos
              cada vez mais consistentes.
            </p>
          </div>
         
          <div className="grid gap-6">
             <div className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow transition-shadow ">
              <div className="flex items-center gap-3 mb-2.5">
                <SearchCode className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">Exploração técnica</h3>
              </div>
              <p className="text-muted-foreground">
                Busco compreender o funcionamento das soluções e não apenas reproduzir implementações,
                explorando diferentes possibilidades durante meus estudos e projetos.
              </p>
            </div>
             <div className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow transition-shadow">
               <div className="flex items-center gap-3 mb-2.5">
                 <Workflow className="h-8 w-8 text-accent" />
                 <h3 className="text-xl font-semibold">Aprendizado aplicado</h3>
               </div>
              <p className="text-muted-foreground">
                Procuro transformar o conteúdo estudado em prática, revisitando projetos 
                e aplicando novos conhecimentos à medida que minha formação avança.

                </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow transition-shadow">
              <div className="flex items-center gap-3 mb-2.5">
                 <Code2 className="h-8 w-8 text-accent" />
                 <h3 className="text-xl font-semibold">Código e organização</h3>
              </div>
              <p className="text-muted-foreground">
                Valorizo estruturas claras, documentação e código organizado,
                buscando facilitar a compreensão e a evolução das aplicações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
