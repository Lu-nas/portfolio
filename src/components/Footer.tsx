import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-sm">
          Desenvolvido com <Heart className="h-4 w-4 text-accent fill-accent" /> por Luana Silva
        </p>
        <p className="text-xs mt-2 text-primary-foreground/70">
          © {currentYear} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
