import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-light dark:bg-bg-dark w-full h-screen"
      initial={{ y: 0 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center">
          {/* Spinner */}
          <motion.div
            className="w-16 h-16 border-4 border-border-light dark:border-border-dark rounded-full"
          />
          <motion.div
            className="absolute w-16 h-16 border-4 border-primary border-t-transparent rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: 'linear',
            }}
          />
        </div>

        {/* Texto */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-text-dark-muted dark:text-text-dark-muted uppercase">
            Iniciando Experiência
          </span>
          <motion.div
            className="h-[1px] bg-primary w-12"
            animate={{ width: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
