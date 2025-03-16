"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaSass,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaNpm,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMui,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 className="h-8 w-8 text-[#E34F26]" />, name: "HTML5" },
    { icon: <FaCss3Alt className="h-8 w-8 text-[#1572B6]" />, name: "CSS3" },
    { icon: <FaJs className="h-8 w-8 text-[#F7DF1E]" />, name: "JavaScript" },
    {
      icon: <FaBootstrap className="h-8 w-8 text-[#8513F5]" />,
      name: "Bootstrap",
    },
    {
      icon: <SiTypescript className="h-8 w-8 text-[#3178C6]" />,
      name: "TypeScript",
    },
    { icon: <FaReact className="h-8 w-8 text-[#61DAFB]" />, name: "React" },
    { icon: <SiNextdotjs className="h-8 w-8 text-white" />, name: "Next.js" },
    {
      icon: <SiTailwindcss className="h-8 w-8 text-[#06B6D4]" />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiMui className="h-8 w-8 text-[#0073E6]" />,
      name: "Material UI",
    },
    { icon: <FaSass className="h-8 w-8 text-[#CC6699]" />, name: "Sass" },
    { icon: <FaNodeJs className="h-8 w-8 text-[#339933]" />, name: "Node.js" },
    {
      icon: <SiExpress className="h-8 w-8 text-[#FFFFFF]" />,
      name: "Express js",
    },
    {
      icon: <SiMongodb className="h-8 w-8 text-[#00E661]" />,
      name: "Mongodb",
    },
    {
      icon: <SiFirebase className="h-8 w-8 text-[#DD2C00]" />,
      name: "Firebase",
    },
    {
      icon: <GrMysql className="h-8 w-8 text-[#00758F]" />,
      name: "SQL",
    },
    { icon: <FaFigma className="h-8 w-8 text-[#F24E1E]" />, name: "Figma" },
    { icon: <FaGitAlt className="h-8 w-8 text-[#F05032]" />, name: "Git" },
    { icon: <FaGithub className="h-8 w-8 text-[#FFFFFF]" />, name: "GitHub" },
    { icon: <FaDocker className="h-8 w-8 text-[#2496ED]" />, name: "Docker" },
    { icon: <FaNpm className="h-8 w-8 text-[#CB3837]" />, name: "npm" },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0A192F]/90">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white inline-block relative">
            My Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA] transform origin-left" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.1 }}
              className="flex flex-col items-center bg-[#112240] p-4 rounded-lg border border-[#1E3A5F] hover:border-[#64FFDA]/50 transition-all"
            >
              {skill.icon}
              <p className="mt-2 text-sm text-gray-400">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
