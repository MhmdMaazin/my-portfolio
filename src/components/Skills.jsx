import { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { RiNextjsFill,RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript,SiStrapi,SiLaravel  } from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    { id: 1,name: "Next.js", icon: <RiNextjsFill size={50} /> },
    { id: 2, name: "TypeScript", icon: <SiTypescript size={50} /> },
    { id: 3, name: "React", icon: <FaReact size={50} /> },
    { id: 4, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 5, name: "Python", icon: <FaPython size={50} /> },
    { id: 6, name: "MongoDB", icon: <FaDatabase size={50} /> },
    { id: 7, name: "Strapi CMS", icon: <SiStrapi size={50} /> },
    { id: 8,  name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 9, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
    { id: 10, name: "Laravel", icon: <SiLaravel size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Witsberry",
      role: "Intern Software Engineer",
      period: "May 2025 - Present",
      description:
        "Built a modern, SEO-friendly software company website using Next.js, TypeScript, and Strapi for better performance and content management. Also developed a SaaS e-commerce platform with Laravel, Filament, and Next.js (TypeScript) to help rural and local shop owners easily create and manage their own online stores. The platform supports multi-tenancy, custom branding, and real-time updates, with a focus on modular design, smooth UX, and full responsiveness for all devices.",
      logo: "/assets/wits.png",
    },
    // {
    //   id: 2,
    //   company: "Youtube",
    //   role: "Software Engineer",
    //   period: "Jan 2017 - Oct 2019",
    //   description:
    //     "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    //   logo: "/assets/youtube.svg",
    // },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}> My </span> <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}> My </span> <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Timeline */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 w-8 h-8 lg:w-16 lg:h-16 rounded-full bg-black border-2 border-white flex items-center justify-center">
                  <img className="w-4 h-4 lg:w-8 lg:h-8 rounded-full object-cover" src={exp.logo} alt={exp.company} />
                </div>
                
                {/* Experience card */}
                <div className="ml-6 lg:ml-8 flex-1">
                  <div className="bg-white border-2 border-black rounded-lg p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-black">{exp.role}</h3>
                        <p className="text-lg lg:text-xl text-gray-700 mt-1">{exp.company}</p>
                      </div>
                      <span className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mt-2 lg:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
