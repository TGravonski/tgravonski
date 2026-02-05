import { User, Code2, Rocket, Coffee } from 'lucide-react';
import Profile from '../assets/profile.webp'; // Corrigido para .JPG conforme o arquivo real

const About = () => {
  const stats = [
    { label: "Anos de Experiência", value: "2+", icon: <Rocket className="text-primary" size={20} /> },
    { label: "Projetos Finalizados", value: "6+", icon: <Code2 className="text-purple-600" size={20} /> },
    { label: "Xícaras de Café", value: "∞", icon: <Coffee className="text-amber-600" size={20} /> },
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden max-w-7xl mx-auto">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Coluna da Imagem/Card Visual */}
<div className="relative group max-w-sm mx-auto md:max-w-none"> {/* Centraliza e limita largura no mobile */}
  <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
  <div className="relative bg-bg-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden shadow-2xl">
    <img
      src={Profile}
      alt="Thiago Gravonski"
      className="w-full h-64 md:h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
    />
    <div className="p-4 md:p-6 bg-bg-light dark:bg-surface-dark flex justify-around">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="flex justify-center mb-1">{stat.icon}</div>
          <div className="text-lg md:text-xl font-bold text-text-main dark:text-text-dark-main">{stat.value}</div>
          <div className="text-[10px] md:text-xs text-text-dark-muted uppercase tracking-wider">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</div>

          {/* Coluna de Texto */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm mb-4">
              <User size={18} />
              <span>Sobre Mim</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-text-dark-main mb-6">
              Um pouco da minha <span className="text-primary">História</span>
            </h2>

            <div className="space-y-4 text-lg text-text-muted dark:text-text-dark-muted leading-relaxed">
              <p>
                Olá! Me chamo <span className='text-text-main dark:text-text-dark-main font-semibold'>Thiago</span>, um desenvolvedor apaixonado por criar soluções digitais que realmente fazem a diferença. Com mais de <span className='text-text-main dark:text-text-dark-main font-semibold'>2 anos</span> de experiência e <span className='text-text-main dark:text-text-dark-main font-semibold'>Bacharel em Ciência da Computação</span>, atuo em duas frentes tecnológicas para atender diferentes necessidades de negócio.
              </p>
              <p>
                Para isso criei a <a className='hover:text-green-500 font-semibold text-white' href="#">GRA.CODE</a> onde desenvolvo sistemas robustos em <span className='text-text-main dark:text-text-dark-main font-semibold'>PHP</span>, ideais para soluções ágeis e servidores otimizados, e construo aplicações modernas com <span className='text-text-main dark:text-text-dark-main font-semibold'>React, TypeScript e Node.js</span>, focadas em alta performance e escalabilidade. Acredito que a tecnologia é um meio, não o fim; por isso, escolho a stack que entrega o máximo de valor real para cada projeto.
              </p>
              <p>
                Embora minha trajetória tenha me exigido o domínio de todo o fluxo <span className='text-text-main dark:text-text-dark-main font-semibold'>Fullstack</span>, é no <span className='text-text-main dark:text-text-dark-main font-semibold'>Front-end</span> e no <span className='text-text-main dark:text-text-dark-main font-semibold'>Design de Interface</span> que minha expertise se destaca. Quando não estou codando, você provavelmente me encontrará explorando as sutilezas do <span className='text-text-main dark:text-text-dark-main font-semibold'>UI/UX</span> e <span className='text-text-main dark:text-text-dark-main font-semibold'>arquitetura de software</span>, sempre buscando traduzir lógica complexa em experiências visuais de alto nível.
              </p>
            </div>

            {/* Tags de Soft Skills ou Foco */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Arquitetura Limpa', 'UX Design', 'Performance', 'Problem Solving'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-surface-light dark:bg-slate-800/50 border border-border-light dark:border-border-dark rounded-full text-sm font-medium text-text-muted dark:text-text-dark-muted">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
