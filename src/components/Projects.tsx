import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Jc dias Atelier",
    description: "Landing Page desenvolvida em parceria com @HenriquedSS1912 para uma loja de confecção e conserto de peças personalizadas. Atuando na documentação e implementação do layout responsivo, SEO e integração do conteúdo.",
    tech: ["HTML","CSS","JavaScript", "Design Responsivo", "SEO"],
    github:"https://github.com/HenriquedSS1912/lp-jcdias.git", 
    demo: "https://jcdiasatelier.com.br/"
  },
  {
    title: "Econectar - Backend",
    description: "API REST desenvolvida com boas práticas para dar suporte ao sistema Econectar. Responsável pelo gerenciamento de usuários, serviços e categorias com validações, tratamento de erros e integração com banco de dados relacional.",
    tech: ["Java", "Spring Boot", "API REST", "JPA/Hibernate", "Validações"],
    github: "https://github.com/Lu-nas/Econectar_PI_Gen.git",
    
  },
    {
    title: "TeckGamer - Backend",
    description: "Projeto desenvolvido para simular o gerenciamento de produtos em um e-commerce gamer, implementando cadastro, validação e persistência de dados, e boas práticas no desenvolvimento de APIs REST.",
    tech: ["Java", "Spring Boot", "API REST", "MySQL", "Validações", "Postman"],
    github: "https://github.com/Lu-nas/TeckGamer_api.git",
    
  },
  {
    title: "Econectar - Frontend",
    description: "Interface web do sistema Econectar, focada em UX e organização de componentes, simulando uma plataforma de serviços urbanos sustentáveis permitindo a visualização, cadastro e interação. ",
    tech: ["React", "TypeScript", "Tailwind CSS", "API REST", "UX"],
    github: "https://github.com/Lu-nas/Econectar.git",
    
  },
  {
    title: "Gerenciador de tarefas",
    description: "Aplicação desenvolvida em Python. O sistema permite cadastrar, listar, atualizar e remover tarefas, aplicando conceitos como controle de fluxo, estruturas de dados e organização modular do código.", 
    tech: ["Lógica de programação","python", "JavaScript", "CRUD"],
    github: "https://github.com/Lu-nas/Gerenciador_de_tarefas.git",
    
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Principais Projetos
          </h2>
          <p className="text-sm text-muted-foreground mb-3">
            Experiência acadêmica e projetos práticos
          </p>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card className="hover:shadow-glow transition-all overflow-hidden group">
              <CardContent> 
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p> 
                
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
                
                <div className="flex gap-4 flex-wrap">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                    aria-label={`Ver código do projeto ${project.title} no GitHub`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  
                  {project.demo && (
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    aria-label={`Ver demo do projeto ${project.title}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo Live
                    </a>
                  </Button>
                  )}
                </div>
              </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
