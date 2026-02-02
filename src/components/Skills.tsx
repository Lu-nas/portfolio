const skills = {
  frontend: [
    "HTML5", "CSS3", "JavaScript ES6+","TypeScript (básico)", 
    "React (Hooks)" 
  ],
  backend: [
    "Java(Spring Boot)", "APIs REST", 
    "Validações e Regras de Negócio",
    "Arquitetura em Camadas (básico)"
  ],
  database: [
    "MySQL","SQL (básico)", "Modelagem de dados (UML)", 
  ],
  testing: [
    "Testes manuais","Postman",
    "Bug reporting", "Validação de fluxos"
  ],
  processes: [
  "SoftExpert","BPMN","Documentação Técnica ","Modelagem Processos",
  ],
  tools: [
    "Git", "GitHub","Netlify (deploy)","VS Code","Metodologias Ágeis (Scrum)",
  ],
  ai: [
    "ChatGPT","Prompt Engineering (básico)",
    "IA aplicada como apoio ao desenvolvimento",
  ],
};

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 id="skills-title" className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Tech Stack & Ferramentas
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Frontend" skills={skills.frontend} />
          <SkillCategory title="Backend" skills={skills.backend} />
          <SkillCategory title="Database" skills={skills.database} />
          <SkillCategory title="Testing" skills={skills.testing} />
         <SkillCategory title="Processos & BPM" skills={skills.processes} />
          <SkillCategory title="DevOps & Tools" skills={skills.tools} />
          <SkillCategory title="AI & Productivity Tools" skills={skills.ai} highlight />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ 
  title, 
  skills, 
  highlight = false 
}: { 
  title: string; 
  skills: string[];
  highlight?: boolean;
}) => {
  return (
    <div 
      className={`bg-card p-6 rounded-lg border ${
        highlight 
          ? 'border-accent shadow-glow' 
          : 'border-border shadow-lg-custom'
      } hover:scale-105 transition-transform`}
    >
      <h3 className={`text-xl font-semibold mb-4 ${
        highlight ? 'text-accent' : 'text-foreground'
      }`}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1 text-sm rounded-full ${
              highlight
                ? 'bg-accent/10 text-accent border border-accent/20'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
