"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import projects from "./data";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-[#0A192F]/80">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white inline-block relative">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA] transform origin-left" />
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`project-${project.id}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-[#112240] rounded-lg overflow-hidden shadow-lg border border-[#1E3A5F] hover:border-[#64FFDA]/30 transition-all"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={`tag-${tag}-${i}`}
                        className="text-xs px-2 py-1 rounded bg-[#1E3A5F] text-[#64FFDA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    {/* <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center text-sm text-[#64FFDA] hover:underline"
                      rel="noreferrer"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </motion.a> */}
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center text-sm text-[#64FFDA] hover:underline"
                      rel="noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 rounded-md bg-[#1E3A5F] text-[#64FFDA] border border-[#64FFDA]/30 hover:bg-[#64FFDA]/10 transition-colors"
            >
              {showAll ? "See Less" : "See More"}
            </motion.button>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
