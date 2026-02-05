import { ExternalLink, Github, Layers } from 'lucide-react';
import VinceCred from '../assets/vincecred.webp';
import Delphos from '../assets/delphos.webp';
import Bolini from '../assets/bolini.webp';
import XPTO from '../assets/xpto.webp';

const projects = [
  {
    title: "Vince Cred",
    category: "Site Institucional",
    description: "Projeto de um site institucional para empresa de crédito, focado em apresentar serviços e captar leads.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "MySQL"],
    image: VinceCred,
    link: "https://youtu.be/gngFEFeKFUA",
    github: "#"
  },
  {
    title: "Agência Delhpos",
    category: "Site Institucional",
    description: "Projeto de um site institucional para agência de marketing digital, com foco em apresentar portfólio e serviços.",
    tech: ["Figma", "HTML", "CSS", "JavaScript", "PHP", "Tailwind CSS"],
    image: Delphos,
    link: "https://youtu.be/NVI-dJD8Tnk",
    github: "#"
  },
  {
    title: "Bolini",
    category: "Site Institucional",
    description: "Site institucional com layout profissional e otimizado para conversão.",
    tech: ["Figma", "HTML", "CSS", "JavaScript", "PHP", "Tailwind CSS"],
    image: Bolini,
    link: "https://youtu.be/R5NEQZv_bOE",
    github: "#"
  },
  {
    title: "Sistema de Estoqeu XPTO",
    category: "Sistema",
    description: "Sistema web completo para gestão de estoque, com controle de produtos, fornecedores e relatórios detalhados.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL"],
    image: XPTO,
    link: "https://youtu.be/p6ZS30bwW2g",
    github: "#"
  },
 
 
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm mb-3">
              <Layers size={18} />
              <span>Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-main dark:text-text-dark-main">
              Trabalhos em <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Destaque</span>
            </h2>
          </div>
          <p className="text-text-muted dark:text-text-dark-muted max-w-xs">
            Uma seleção de projetos onde transformo café em código eficiente e escalável.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-surface-light dark:bg-surface-dark/40 border border-border-light dark:border-border-dark rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] hover:-translate-y-2"
            >
              {/* Imagem com Overlay */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 z-20 bg-bg-light/90 dark:bg-surface-dark/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                  {project.category}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-text-dark-muted dark:text-text-dark-muted">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-text-main dark:text-text-dark-main group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-muted dark:text-text-dark-muted mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-6">
                  <a 
                    href={project.link} target='_blank' 
                    className="flex items-center gap-2 text-sm font-bold text-text-main dark:text-text-dark-main hover:underline underline-offset-4" 
                  >
                    Ver Projeto <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm font-bold text-text-dark-muted hover:text-text-main dark:hover:text-text-dark-main transition-colors"
                  >
                    GitHub <Github size={16} />
                  </a>
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
