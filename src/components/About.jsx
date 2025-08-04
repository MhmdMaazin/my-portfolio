import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export default function About() {
  const aboutContent = `
I'm Mohammed **Maazin**, a passionate and dedicated **Computer** **Science** Student with a strong interest in web development, artificial intelligence, and problem-solving.

My web development journey started in **2021**, and since then, I've continuously evolved, taking on new challenges and keeping up with the latest technologies. Today, I build **cutting-edge web applications** using **Next.js, TypeScript, TailwindCSS, Supabase, and more**.

I'm a **fast learner** and **problem-solver** at heart. I love diving deep into complex problems and finding elegant solutions. Whether it's building web applications, optimizing algorithms, or contributing to open-source projects, I'm always up for the challenge.

I believe in continuous growth and collaboration, and I’m always open to new opportunities and challenges. Let’s connect and create something extraordinary together! Feel free to contact me check out my projects on **GitHub**.
  `;

  return (
    <div className="px-5 lg:px-28 mt-3 lg:mt-16 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          <span className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}> About</span> <span className="font-extrabold">Me</span>
        </h2>
        <div className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10 space-y-3 lg:space-y-5">
          <ReactMarkdown>{aboutContent}</ReactMarkdown>
        </div>
      </motion.div>
    </div>
  );
}
