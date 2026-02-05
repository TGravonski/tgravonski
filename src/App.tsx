import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

export default function App() {
  const [loading, setLoading] = useState(true);

  const { scrollY } = useScroll();

  // Parallax suave no background
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 50]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // tempo do preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader */}
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {/* App */}
      {!loading && (
        <div className="relative min-h-screen bg-bg-light dark:bg-bg-dark overflow-x-hidden">
          
          {/* Background Global - Padronizado com as cores do tema */}
          <div className="fixed inset-0 opacity-20 pointer-events-none">
            <motion.div
              style={{ y: y1 }}
              className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-primary blur-[120px]"
            />

            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-purple-600 blur-[120px]"
            />
          </div>

          <Header />

          <main className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Skills />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
