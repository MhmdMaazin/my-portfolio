import React from 'react';
import ProjectFlipCard from './ProjectFlipCard';

const projects = [
  {
    id: 1,
    title: "ChemLab - AI-Powered Chemistry Learning Platform",
    description: "An AI-powered app for learning chemistry with interactive tools, quizzes, and a smart chatbot.",
    image: "/assets/project1.png",
    link: "https://chem--lab.vercel.app/",
    github: "https://github.com/MhmdMaazin/CHEM-LAB",
    technologies: ["React", "TypeScript", "Node.js", "Firebase", "Vite", "Tailwind", "Python"]




  },
  {
    id: 2,
    title: "Game Grabber: Free Game Tracker",
    description: "Retro-themed web app showing real-time free game giveaways from multiple platforms via API.",

    image: "/assets/project2.png",
    link: "https://game-grabber.vercel.app/",
    github: "https://github.com/MhmdMaazin/Game-Grabber",
    technologies: ["Next.js", "TypeScript", "Zod", "Tailwind", "React", "Framer", "Drizzle"]

  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management and secure payments.",
    image: "/assets/project3.png",
    link: "#",
    github: "#",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"]
  }
];

export default function Projects() {
  return (
    <div className="px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center">
        <span className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}> My </span> <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:pb-6 pb-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectFlipCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
