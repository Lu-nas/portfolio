import { Mail, Linkedin, Github, Download, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

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
            Estou sempre aberta a novas oportunidades e conversas sobre tecnologia. <br></br>
            Entre em contato através dos canais abaixo!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:luana.silva@example.com"
            className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow hover:scale-105 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-4 rounded-full group-hover:bg-accent/20 transition-colors">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">luanasilva.ss9497@gmail.com</p>
              </div>
            </div>
          </a>
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow hover:scale-105 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-4 rounded-full group-hover:bg-accent/20 transition-colors">
                <Linkedin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">https://www.linkedin.com/in/luanasilva-lu-nas</p>
              </div>
            </div>
          </a>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow hover:scale-105 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-4 rounded-full group-hover:bg-accent/20 transition-colors">
                <Github className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                <p className="text-sm text-muted-foreground">https://github.com/Lu-nas/Lu-nas</p>
              </div>
            </div>
          </a>
          
          <a
            href="https://wa.me/5519983350638"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-6 rounded-lg border border-border shadow-lg-custom hover:shadow-glow hover:scale-105 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-4 rounded-full group-hover:bg-accent/20 transition-colors">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">+55 (19) 98335-0638</p>
              </div>
            </div>
          </a>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="shadow-glow" asChild>
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Baixar CV (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
