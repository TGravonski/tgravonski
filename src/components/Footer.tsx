import { Github, Linkedin, Mail } from 'lucide-react';

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/seu-usuario', label: 'Visitar perfil no GitHub' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/seu-perfil', label: 'Conectar no LinkedIn' },
  { name: 'E-mail', icon: Mail, href: 'mailto:seuemail@exemplo.com', label: 'Enviar um e-mail' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full py-12 border-t border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Copyright */}
        <p className="text-text-muted dark:text-text-dark-muted text-sm font-medium">
          © {currentYear} <span className="text-text-main dark:text-text-dark-main">Thiago Gravonski</span>. 
          <span className="hidden sm:inline"> Todos os direitos reservados.</span>
        </p>
        
        {/* Redes Sociais */}
        <nav aria-label="Links de redes sociais" className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ name, icon: Icon, href, label }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group p-2 -m-2 text-text-dark-muted hover:text-primary dark:hover:text-white transition-all duration-200 ease-in-out"
            >
              <Icon 
                size={22} 
                className="transform group-hover:scale-110 transition-transform" 
              />
            </a>
          ))}
        </nav>

      </div>
    </footer>
  );
};

export default Footer;
