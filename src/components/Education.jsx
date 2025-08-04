import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  const [education] = useState([
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Bedfordshire",
      period: "2024 - 2025",
      description: "Specialized in software engineering with focus on modern web technologies, algorithms, and system design. Achieved distinction in multiple programming courses.",
      gpa: "3.8/4.0",
      achievements: ["Agile Project Management", "Advanced AI integrated Chemitry learning Platform", "Simple Calculation Game using API's"]
    },
    {
      id: 2,
      degree: "Higher National Diploma in Information Technology",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2022 - 2024",
      description: "Completed higher national diploma in information technology with a focus on software development and database management. Demonstrated strong problem-solving skills and ability to work in a team environment.",
      gpa: "3A's",
      achievements: [ "Database Design and Implementation", "Web Application Development", "Data Analysis and Visualization"]
    },
    {
      id: 3,
      degree: "Diploma Course",
      institution: "Esoft Metro Campus",
      period: "2021",
      description: "Successfully Completed Basic Diploma in Software Engineering and learned key concepts in Information Technology.",
      gpa: "9A's",
      achievements: ["ICT Excellence", "Problem-Solving Skills", "Basic Web Development"]
    }
  ]);

  return (
    <div className="mt-3 lg:mt-16 mb-16 lg:mb-24" id="education">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}> My </span> <span className="font-extrabold">Education</span>
        </motion.h2>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black hidden lg:block dark:bg-white"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-500 rounded-full border-4 border-black dark:border-white z-10"></div>
                
                {/* Retro Card */}
                <div className={`w-full lg:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                }`}>
                  <motion.article
                    className="bg-background flex w-full flex-col items-start justify-between border-4 border-black p-6 shadow-[8px_8px_0_0_#000] transition-shadow duration-300 hover:shadow-[12px_12px_0_0_#000] dark:border-white dark:shadow-[8px_8px_0_0_#fff] dark:hover:shadow-[12px_12px_0_0_#fff]"
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-2 flex items-center gap-x-2 text-xs">
                      <div className="text-foreground border-2 border-black bg-gray-500 px-3 py-1 font-bold dark:border-white uppercase">
                        {edu.period}
                      </div>
                      {/* <div className="text-foreground border-2 border-black bg-gray-500 px-3 py-1 font-bold dark:border-white uppercase">
                        GPA: {edu.gpa}
                      </div> */}
                    </div>
                    <div className="group relative">
                      <h3 className="group-hover:text-gray-500 text-foreground mt-3 text-2xl leading-6 font-black uppercase">
                        <span className="absolute inset-0 max-w-xs"></span>
                        {edu.degree}
                      </h3>
                      <p className="text-md mt-5 border-l-4 border-gray-500 pl-4 leading-6 text-gray-800 dark:text-gray-100">
                        {edu.description}
                      </p>
                      <p className="text-md mt-3 border-l-4 border-gray-500 pl-4 leading-6 text-gray-800 dark:text-gray-100 font-bold">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="relative mt-8 flex flex-col gap-4">
                      <div className="flex items-center gap-x-2 text-sm leading-6">
                        <FaGraduationCap className="text-gray-500 text-xl" />
                        <p className="text-foreground font-black uppercase">
                          <span className="absolute inset-0"></span>
                          Achievements
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="text-foreground border-2 border-black bg-gray-500 px-3 py-1 font-bold dark:border-white uppercase text-xs"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}