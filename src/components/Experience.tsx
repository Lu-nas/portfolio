import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "Bacharelado em Engenharia de Software",
    organization: "Universidade Federal",
    period: "2021 - 2025",
    description: "Formação completa em engenharia de software, com foco em desenvolvimento web, arquitetura de sistemas e boas práticas."
  },
  {
    type: "work",
    title: "Desenvolvedora Frontend",
    organization: "Tech Startup",
    period: "2023 - Presente",
    description: "Desenvolvimento de interfaces modernas usando React e TypeScript. Colaboração com equipe backend para integração de APIs."
  },
  {
    type: "work",
    title: "Desenvolvedora Freelance",
    organization: "Autônoma",
    period: "2022 - 2023",
    description: "Projetos diversos para clientes locais e internacionais, incluindo landing pages, e-commerce e aplicações web."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Experiência & Formação
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
