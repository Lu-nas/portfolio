import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Vamos Conversar?
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou construindo minha trajetória em tecnologia e buscando oportunidades  
            para continuar aprendendo, contribuindo e transformando conhecimento em prática. 
           </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href="mailto:luanasilva.ss9497@gmail.com"
            className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow hover:-translate-y-1 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-4 rounded-full group-hover:bg-accent/20 transition-colors">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">luanasilva.ss9497@gmail.com</p>
              </div>
            </div>
          </a>
          
          <a
            href="https://www.linkedin.com/in/luanasilva-lu-nas"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow hover:-translate-y-1 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-4 rounded-full group-hover:bg-accent/20 transition-colors">
                <Linkedin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">linkedin.com/in/luanasilva-lu-nas</p>
              </div>
            </div>
          </a>
          
          <a
           href="https://github.com/Lu-nas"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow hover:-translate-y-1 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-4 rounded-full group-hover:bg-accent/20 transition-colors">
                <Github className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">github.com/Lu-nas</p>
              </div>
            </div>
          </a>
          
          <a
            href="https://wa.me/5519983350638"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow hover:-translate-y-1 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-4 rounded-full group-hover:bg-accent/20 transition-colors">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
                <p className="text-sm text-muted-foreground">+55 (19) 98335-0638</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
