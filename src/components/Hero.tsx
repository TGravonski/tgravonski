import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id='hero' className="relative min-h-svh flex justify-center items-center py-20 lg:py-32 overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Badge de Disponibilidade */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Disponível para novos projetos
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-text-main dark:text-text-dark-main mb-6 leading-[1.1]">
            Thiago <br className="md:hidden" />
            <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Gravonski
            </span>
          </h1>

          {/* Descrição */}
          <p className="max-w-2xl text-lg md:text-xl text-text-muted dark:text-text-dark-muted mb-12 leading-relaxed font-medium">
            Desenvolvedor <span className="text-text-main dark:text-slate-200">Full-stack</span> especializado em construir aplicações web modernas, escaláveis e focadas na experiência do usuário.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto"
            >
              Ver Projetos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-bg-light dark:bg-surface-dark border border-border-light dark:border-border-dark px-8 py-4 rounded-full font-semibold hover:bg-surface-light dark:hover:bg-slate-800 transition-all text-text-main dark:text-text-dark-main w-full sm:w-auto shadow-sm"
            >
              <FileText size={20} />
              Currículo
            </a>
          </div>


        </div>
      </div>

      {/* Indicador de Scroll Otimizado */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Scroll</span>

        <div className="w-[26px] h-[42px] border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center p-1.5">
          {/* A bolinha que se move */}
          <div className="w-1 h-2 bg-slate-500 dark:bg-slate-300 rounded-full animate-scroll-inner" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
