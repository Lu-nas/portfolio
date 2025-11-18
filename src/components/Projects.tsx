import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
    challenges: "Implementação de sistema de pagamentos seguro e gestão de estoque em tempo real."
  },
  {
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com colaboração em equipe.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
    challenges: "Real-time updates usando WebSockets e otimização de performance para grandes datasets."
  },
  {
    title: "AI Content Generator",
    description: "Ferramenta para geração de conteúdo usando APIs de IA e processamento de linguagem natural.",
    tech: ["React", "OpenAI API", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    challenges: "Integração com modelos LLM e implementação de rate limiting para controle de custos."
  },
  {
    title: "Real Estate Dashboard",
    description: "Dashboard analítico para gestão de imóveis com visualizações interativas.",
    tech: ["React", "Chart.js", "Express", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    challenges: "Criação de gráficos complexos e otimização de queries para grandes volumes de dados."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Meus Principais Projetos
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border shadow-lg-custom hover:shadow-glow transition-all overflow-hidden group"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2 text-foreground">Desafios Técnicos:</p>
                  <p className="text-sm text-muted-foreground italic">
                    {project.challenges}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo Live
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
