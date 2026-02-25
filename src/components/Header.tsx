import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Github, Instagram, Linkedin, Menu, X } from 'lucide-react';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
  });

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/TGravonski" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/thiago-gravonski" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/thiago_gravonski/" },
  ];

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Stacks', id: 'stacks' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4"
    >
      {/* Container Pílula */}
      <div className={`
        flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-full relative
        ${isScrolled
          ? "max-w-5xl bg-bg-dark/80 backdrop-blur-xl border border-white/10 shadow-2xl"
          : "max-w-7xl bg-transparent border border-transparent shadow-none"}
      `}>

        {/* Lado Esquerdo: Logo */}
        <div
          className="flex items-center gap-3 z-[110] group cursor-pointer flex-1"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative w-10 h-10 bg-bg-dark rounded-xl flex items-center justify-center border border-white/10 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-violet-600 to-accent opacity-90" />
              <span className="relative text-white font-black text-sm tracking-tighter">TG</span>
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-text-dark-main">
              Thiago<span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent ml-1">Dev</span>
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-text-dark-muted font-bold">FULL STACK</span>
          </div>
        </div>

        {/* Centro: Nav Desktop */}
        <nav className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2 z-[120]">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative text-[12px] uppercase tracking-[0.2em] font-bold text-text-dark-muted hover:text-white transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Lado Direito: Socials & Mobile Trigger */}
        <div className="flex items-center justify-end gap-5 flex-1 z-[110]">
          <div className="hidden md:flex items-center gap-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dark-muted hover:text-white transition-all hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-text-dark-muted hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 h-screen bg-bg-dark/95 md:hidden flex flex-col items-center justify-center z-[105]"
          >
            <nav className="flex flex-col items-center gap-8">
              {menuItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold tracking-tighter text-white hover:text-accent transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="flex gap-8 mt-12 pt-8 border-t border-white/10 w-64 justify-center">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" className="text-text-dark-muted hover:text-white transition-colors scale-125">
                    {social.icon}
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
