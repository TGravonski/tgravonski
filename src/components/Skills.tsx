
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiPhp,
  SiWordpress,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
  SiPostgresql,
  SiNextdotjs,
} from 'react-icons/si';

const skills = [
  { name: "HTML5", icon: <SiHtml5 size={24} className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss3 size={24} className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <SiJavascript size={24} className="text-[#F7DF1E]" /> },
  { name: "React", icon: <SiReact size={24} className="text-[#61DAFB]" /> },
  { name: "TypeScript", icon: <SiTypescript size={24} className="text-[#3178C6]" /> },
  { name: "Node.js", icon: <SiNodedotjs size={24} className="text-[#339933]" /> },
  { name: "Next.js", icon: <SiNextdotjs size={24} className="text-[#000000]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={24} className="text-[#4169E1]" /> },
  { name: "MySQL", icon: <SiMysql size={24} className="text-[#4479A1]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} className="text-[#06B6D4]" /> },
  { name: "Git", icon: <SiGit size={24} className="text-[#F05032]" /> },
  { name: "GitHub", icon: <SiGithub size={24} className="text-[#181717] dark:text-white" /> },
  { name: "REST APIs", icon: <SiPostman size={24} className="text-[#FF6C37]" /> },
  { name: "PHP", icon: <SiPhp size={24} className="text-[#777BB4]" /> },
  { name: "WordPress", icon: <SiWordpress size={24} className="text-[#21759B]" /> },
];

const Skills = () => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="stacks" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-14 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-main dark:text-text-dark-main">
          Minha <span className="text-primary">Tech Stack</span>
        </h2>
        <p className="mt-4 text-text-muted dark:text-text-dark-muted max-w-2xl mx-auto">
          Tecnologias que utilizo para construir soluções modernas,
          escaláveis e focadas em performance.
        </p>
      </div>

      <div className="relative group">
        <div className="flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-6">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index}
                className="
                  mx-4 flex items-center gap-4 px-8 py-4
                  rounded-2xl
                  bg-bg-light/70 dark:bg-surface-dark/70
                  backdrop-blur-md
                  border border-border-light/50 dark:border-border-dark/50
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
                  hover:border-primary/50
                  hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.4)]
                  hover:-translate-y-1 hover:scale-[1.02]
                  transition-all duration-300
                "
              >
                <span className="flex items-center justify-center w-10 h-10">
                  {skill.icon}
                </span>

                <span className="text-lg font-semibold text-text-muted dark:text-text-dark-main">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
