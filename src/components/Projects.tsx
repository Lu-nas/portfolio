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
  tech: string[];
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    title: "Econectar",
    description: 
      "Plataforma de serviços urbanos sustentáveis desenvolvida como projeto integrador.",
    contribution:
    "No projeto integrador, desenvolvi a seção de Serviços da aplicação. Posteriormente utilizei o projeto como base para uma refatoração própria, reorganizando classes e estrutura do código.",
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
   description:"Landing Page desenvolvida em parceria com @HenriquedSS1912 para uma loja de confecção e conserto de peças personalizadas. com foco em layout responsivo, SEO, documentação e organização do conteúdo.",
   contribution:"Desenvolvimento da seção de contato e implementação do login destinado aos administradores do site.",
   tech: ["HTML","CSS","JavaScript","Design Responsivo","SEO"],
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
  description:"Projeto desenvolvido como parte de um aprendizado guiado de APIs REST, simulando o gerenciamento de produtos em um e-commerce gamer com cadastro, validação e persistência de dados, aplicando boas práticas.",
  contribution:"Desenvolvi as funcionalidades de cadastro, manutenção dos games em categorias e produtos, útilizando operações CRUD e realizando testes das APIs com Postman.",
  tech:["Java","Spring Boot","API REST","MySQL","Validações","Postman"],
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
  description:"Aplicação desenvolvida em Python. permitindo cadastro, em lista, para atualizar e remover tarefas, aplicando conceitos como controle de fluxo, estruturas de dados e organização modular do código.", 
  contribution:" implementação da API com cadastro e gerenciamento de tarefas, funcionalidade para marcá-las como concluídas e manipulação de arquivos JSON, finalizando positivo os testes realizados no Postman.",
  tech:["python","Lógica de programação","Estruturas de Dados","CRUD"],
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
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card  key={project.title} className="hover:shadow-glow transition-all overflow-hidden group">
              <CardContent> 
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p> 
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Minha contribuição
                  </h4>
                
                  <p className="text-muted-foreground">
                    {project.contribution}
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
              
                <div className="flex gap-4 flex-wrap">
                  {project.links.map((link) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      size="sm"
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
