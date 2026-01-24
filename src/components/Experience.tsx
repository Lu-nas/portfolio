import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
   {
    type: "work",
    title: "Estagiária em TI – Automação de Processos",
    organization: "Matera Systems (Home Office)",
    period: "08/2024 - 02/2025",
    description: "Atuação na análise, mapeamento e otimização de processos utilizando BPMN e metodologias Lean. Uso de ferramentas corporativas como SoftExpert, Jira e Confluence, com foco em documentação técnica e melhoria contínua."
  },
  {
    type: "education",
    title: "Bacharelado em Engenharia de Software",
    organization: "Cruzeiro do Sul – Virtual ",
    period: "2024 - 2028 (em andamento)",
    description: "Graduação em Engenharia de software, com foco em desenvolvimento, arquitetura de sistemas, modelagem de dados e boas práticas de engenharia." 
    
  },
   {
    type: "education",
    title: "Bootcamp Full Stack",
    organization: "Generation Brasil",
    period: "2024",
    description: "Formação intensiva em desenvolvimento Full Stack, com foco em Java, Spring Boot, APIs REST, MySQL e fundamentos de Frontend."
  },
   {
    type: "education",
    title: "Bootcamp Desenvolvimento Web",
    organization: "Workover Academy – Trend’s IT",
    period: "2024",
    description: "Bootcamp Full Stack com ênfase em Frontend, Backend e desenvolvimento de projetos práticos."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Experiência Profissional & Formação
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent to-primary" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10" />
                
                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      {exp.type === "education" ? (
                        <GraduationCap className="h-6 w-6 text-accent" />
                      ) : (
                        <Briefcase className="h-6 w-6 text-accent" />
                      )}
                      <span className="text-sm font-medium text-accent">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1 text-foreground">
                      {exp.title}
                    </h3>
                    
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      {exp.organization}
                    </p>
                    
                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
