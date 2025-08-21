import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub, FaLaravel } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiPhpFill } from "react-icons/ri";
import { SiTypescript, SiFirebase, SiVite, SiZod, SiDrizzle, SiStrapi, SiMysql, SiFilament  } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";

export default function ProjectFlipCard({ project, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const techIcons = {
    "React": <FaReact size={16} />,
    "TypeScript": <SiTypescript size={16} />,
    "Laravel": <FaLaravel size={16} />,
    "Node.js": <FaNodeJs size={16} />,
    "Firebase": <SiFirebase size={16} />,
    "Vite": <SiVite size={16} />,
    "MongoDB": <FaDatabase size={16} />,
    "Next.js": <RiNextjsFill size={16} />,
    "Python": <FaPython size={16} />,
    "Tailwind": <RiTailwindCssFill size={16} />,
    "JavaScript": <FaJs size={16} />,
    "Zod": <SiZod size={16} />,
    "Framer": <FiFramer size={16} />,
    "Drizzle": <SiDrizzle size={16} />,
    "Strapi": <SiStrapi size={16} />,
    "MySQL": <SiMysql size={16} />,
    "Filament": <SiFilament size={16} />,
    "PHP": <RiPhpFill size={16} />,
  };

  return (
    <motion.div
      key={project.id}
      className="flex justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Flip Card Container */}
      <div
        className="group relative h-[400px] w-full lg:w-full [perspective:2000px] cursor-pointer"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        // onTouchStart={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={cn(
            'relative h-full w-full',
            '[transform-style:preserve-3d]',
            'transition-all duration-700',
            isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
          )}
        >
          {/* Front of card - Project Image */}
          <div
            className={cn(
              'absolute inset-0 h-full w-full',
              '[transform:rotateY(0deg)] [backface-visibility:hidden]',
              'overflow-hidden rounded-2xl',
              'bg-gradient-to-br from-white via-slate-50 to-slate-100',
              'dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800',
              'border border-slate-200 dark:border-zinc-800/50',
              'shadow-lg dark:shadow-xl',
              'transition-all duration-700',
              'group-hover:shadow-xl dark:group-hover:shadow-2xl',
              'group-hover:border-primary/20 dark:group-hover:border-primary/30'
            )}
          >
            <img
              className="w-full h-full object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/100 via-black/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-lg font-bold mb-1">{project.title}</h3>
              <p className="text-white/95 text-sm">Click to see details</p>
            </div>
          </div>

          {/* Back of card - Project Details */}
          <div
            className={cn(
              'absolute inset-0 h-full w-full',
              '[transform:rotateY(180deg)] [backface-visibility:hidden]',
              'rounded-2xl p-6 relative overflow-hidden',
              'bg-gradient-to-br from-white via-slate-50 to-slate-100',
              'dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800',
              'border border-slate-200 dark:border-zinc-800',
              'shadow-lg dark:shadow-xl',
              'flex flex-col',
              'transition-all duration-700',
              'group-hover:shadow-xl dark:group-hover:shadow-2xl',
              'group-hover:border-primary/20 dark:group-hover:border-primary/30'
            )}
          >
            {/* Radial gradient from center */}
               <div className="absolute inset-0 rounded-2xl z-0">
                 <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25)_0%,transparent_80%)]"></div>
               </div>
              {/* Background gradient */}
              <div className="from-primary/5 dark:from-primary/10 absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent to-blue-500/5 dark:to-blue-500/10 z-0" />
              
              <div className="relative z-10 flex-1 space-y-4 flex flex-col">
              <div>
                <h2 className="font-extrabold text-2xl lg:text-4xl text-primary mb-2">
                  {String(project.id).padStart(2, "0")}
                </h2>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="font-light text-xs/6 lg:text-sm text-[#71717A] dark:text-zinc-400 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-2">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs text-zinc-700 dark:text-zinc-300">
                        {techIcons[tech] || <span className="w-4 h-4 bg-zinc-500 rounded-full"></span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                  {/* <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs text-zinc-700 dark:text-zinc-300">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div> */}
                  <div className="flex gap-3">
                    <a 
                      href={project.link} 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <TbWorld size={18} />
                      Live Project
                    </a>
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 dark:bg-zinc-700 text-white rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors duration-200"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={18} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info (visible on non-hover state) */}
      {/* <div className="lg:w-1/2 lg:space-y-6 space-y-4 lg:pl-8">
        <h2 className="font-extrabold mt-5 lg:mt-0 text-3xl lg:text-5xl">
          {String(project.id).padStart(2, "0")}
        </h2>
        <p className="font-bold text-xl lg:text-3xl">{project.title}</p>
        <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
          {project.description}
        </p>
        <a href={project.link} className="mt-3 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
          <TbExternalLink size={23} />
          View Project
        </a>
      </div> */}
    </motion.div>
  );
}