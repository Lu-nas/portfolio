import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

type ProjectLink = {
  label: string;
  url: string;
  type: "github" | "external";
};

type Project = {
  title: string;
  description: string;
  contribution: string;
  details?: string;
  tech: string[];
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    title: "Econectar",
    description: 
      "Plataforma de serviços urbanos sustentáveis desenvolvida como projeto integrador.",
    contribution:
    "Desenvolvi a seção de Serviços da aplicação e, posteriormente refatorei parte da estrutura do projeto.",
    details:"Utilizei o projeto como base para uma refatoração própria, reorganizando classes e estrutura do código.",
    tech:["Java", "Spring Boot",  "React", "TypeScript"],
    links:[
      {
        label:"Backend",
        url:"https://github.com/Lu-nas/Econectar_PI_Gen.git",
        type:"github",
      },
      {
        label: "Frontend",
        url: "https://github.com/Lu-nas/Econectar.git",
        type: "github",
      },
    ],   
  },
  
  {
   title:"Jc dias Atelier",
   description:"Landing Page desenvolvida em parceria para uma loja de confecção e conserto de peças personalizadas.",
   contribution:"Atuei no desenvolvimento da seção de contato e do login destinado aos administradores do site.",
   details:"A página foi desenvolvida com layout responsivo, SEO, documentação e organização do conteúdo.",
   tech: ["HTML","CSS","SEO","JavaScript","Design Responsivo",],
   links: [
      {
        label: "Código",
        url: "https://github.com/HenriquedSS1912/lp-jcdias.git",
        type: "github",
      },
      {
        label: "Demo Live",
        url: "https://jcdiasatelier.com.br/",
        type: "external",
      },
    ],
  },
  
  {
  title:"TeckGamer - Backend",
  description:"Projeto desenvolvido como exercício guiado de APIs REST, simulando o gerenciamento de produtos em um e-commerce gamer.",
  contribution:"Atuei em funcionalidades de cadastro, categorias e produtos, utilizando operações CRUD e testes da API com Postman.",
  details:" Implementa funcionalidades para gerenciamento de games, categorias e produtos.",
  tech:["Java","Spring Boot","API REST","MySQL","Postman"],
  links:[
      {
        label:"Código",
        url:"https://github.com/Lu-nas/TeckGamer_api.git",
        type:"github",
       },
     ],
   },
  
  {
  title: "Gerenciador de tarefas",
  description:"Aplicação desenvolvida em Python para gerenciamento de tarefas, explorando estrutura de dados, fluxo de controle e organização modular.", 
  contribution:"Implementei a API responsável pelas operações de cadastro, atualização e gerenciamento de tarefas.",
  details:"Inclui marcação de tarefas como concluídas, persistência em arquivos JSON, e testes da API com Postman.",
  tech:["Python","CRUD","Lógica de programação","Estruturas de Dados",],
  links:[
    {
      label:"Código", 
      url:"https://github.com/Lu-nas/Gerenciador_de_tarefas.git",
      type:"github",
    },
  ],
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
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card  key={project.title} className="hover:shadow-glow transition-all overflow-hidden group">
              <CardContent> 
              <div className="p-5">
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

              <div className="mb-4">
                <p className="text-muted-foreground mb-3">
                  {project.description}
                </p> 

                <p className="text-muted-foreground mb-3">
                  {project.contribution}
                </p>

                  {project.details && (
                    <details className="text-sm mb-4">
                      <summary className="cursor-pointer text-primary hover:underline">
                        Mais detalhes
                      </summary>

                      <p className="mt-2 text-muted-foreground">
                        {project.details}
                      </p>
                    </details>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs bg-accent/10 text-accent rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              
                <div className="flex gap-4 flex-wrap">
                  {project.links.map((link) => (
                    <Button
                     key={link.label}
                      variant={link.type === "github" ? "outline" : "default"}
                      size="sm"
                      className={
                        link.type === "github"
                        ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        : ""
                      }
                      asChild
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} do projeto ${project.title}`}
                      >
                        {link.type === "github" ? (
                        <Github className="mr-2 h-4 w-4" />
                        ) : (
                        <ExternalLink className="mr-2 h-4 w-4" />
                        )}

                        {link.label}
                      </a>
                    </Button>
                  ))}
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
