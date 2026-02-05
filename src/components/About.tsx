import { useState } from 'react';
import { User, Code2, Rocket, Coffee, CheckCircle2 } from 'lucide-react';
import Profile from '../assets/profile.webp';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const stats = [
    { label: "Experiência", value: "2+", icon: <Rocket className="text-primary" size={18} /> },
    { label: "Projetos", value: "6+", icon: <Code2 className="text-purple-500" size={18} /> },
    { label: "Cafés", value: "∞", icon: <Coffee className="text-amber-500" size={18} /> },
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden max-w-7xl mx-auto">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* COLUNA DA IMAGEM */}
          <div className="relative group max-w-sm mx-auto lg:max-w-md">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative bg-white dark:bg-slate-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] text-white font-medium uppercase tracking-widest">Open to Work</span>
              </div>

              <div className="relative h-[450px] overflow-hidden">
                <img
                  src={Profile}
                  alt="Thiago Gravonski"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-4">
                <div className="grid grid-cols-3 gap-2 bg-white/10 dark:bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center border-r last:border-0 border-white/10">
                      <div className="p-2 bg-white/5 rounded-lg mb-1">{stat.icon}</div>
                      <span className="text-lg font-bold text-white leading-none">{stat.value}</span>
                      <span className="text-[9px] text-slate-300 uppercase font-medium tracking-tighter mt-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DE TEXTO */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <User size={18} />
              </div>
              <span>Sobre Mim</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Um pouco da minha{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                História
              </span>
            </h2>

            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Olá! Me chamo <span className="text-text-main dark:text-text-dark-main font-semibold">Thiago</span>,
                um desenvolvedor apaixonado por criar soluções digitais que realmente fazem a diferença.
                Com mais de <span className="font-semibold text-text-main dark:text-text-dark-main">2 anos</span> de experiência
                e <span className="font-semibold text-text-main dark:text-text-dark-main">Bacharel em Ciência da Computação</span>.
              </p>

              {expanded && (
                <>
                  <p>
                    Criei a{' '}
                    <a className="hover:text-green-500 font-semibold text-white" href="#">
                      GRA.CODE
                    </a>{' '}
                    onde desenvolvo sistemas em <span className="font-semibold">PHP</span> e aplicações modernas com{' '}
                    <span className="font-semibold">React, TypeScript e Node.js</span>, focadas em performance e escalabilidade.
                  </p>

                  <p>
                    Atuo como <span className="font-semibold">Fullstack</span>, com forte destaque em{' '}
                    <span className="font-semibold">Front-end</span> e <span className="font-semibold">UI/UX</span>,
                    sempre buscando transformar lógica complexa em experiências visuais refinadas.
                  </p>
                </>
              )}
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-primary font-semibold hover:underline self-start"
            >
              {expanded ? 'Ler menos' : 'Ler mais'}
            </button>

            <div className="mt-10 flex flex-wrap gap-2">
              {['Arquitetura Limpa', 'UX Design', 'Performance', 'Problem Solving'].map(tag => (
                <div
                  key={tag}
                  className="group flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary/50 transition-colors"
                >
                  <CheckCircle2 size={14} className="text-primary opacity-50 group-hover:opacity-100" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{tag}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
