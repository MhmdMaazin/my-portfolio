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
    title: "MyGulu - Multi-tenant SaaS e-commerce platform for local vendors",
    description: "An e-commerce platform builder that lets create, customize and manage their own online store website. Built with Laravel (backend) and Next.js (frontend).",


    image: "/assets/project2.png",
    link: "http://mygulu.com/store",
    github: "",
    technologies: ["Laravel", "Filament", "Next.js", "TypeScript", "PHP", "Tailwind", "MySQL"]


  },
  {
    id: 3,
    title: "Witsberry - A Futuristic Portfolio & Marketing Site",

    description: "A modern, scalable, full-stack app using Next.js and Strapi (headless CMS) for a Software Company",

    image: "/assets/project3.png",
    link: "https://www.witsberry.com/",
    github: "",
    technologies: ["Next.js", "Strapi", "TypeScript", "Tailwind", "React", "Framer", "MySQL"]

  },
  {
    id: 4,
    title: "Game Grabber - Free Game Tracker",
    description: "Retro-themed web app showing real-time free game giveaways from multiple platforms via API.",

    image: "/assets/project4.png",
    link: "https://game-grabber.vercel.app/",
    github: "https://github.com/MhmdMaazin/Game-Grabber",
    technologies: ["Next.js", "TypeScript", "Zod", "Tailwind", "React", "Framer", "Drizzle"]

  },
  {
    id: 5,
    title: "Invoture - An Invoice Generator",

    description: "Invoture is a web-based invoice generator application with beautiful templates and easy-to-use features.",
    image: "/assets/project5.png",
    link: "https://invoture.vercel.app/",
    github: "https://github.com/MhmdMaazin/invoture",
    technologies: ["Next.js", "TypeScript", "Tailwind", "React", "Zod"]

  },
  {
    id: 6,
    title: "Construction Lead Management Portal",
    description: "A construction lead management portal for construction companies to manage their leads, clients, and projects.",
    image: "/assets/project6.png",
    link: "https://lead-man-portal.vercel.app/",
    github: "https://github.com/MhmdMaazin/lead-management-portal",
    technologies: ["Next.js", "JavaScript", "Tailwind", "React", "MongoDB"]

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
