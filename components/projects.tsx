"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "Admin dashboard for managing products, orders, and customers with real-time analytics.",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
      tags: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      id: 2,
      title: "Travel App UI",
      description: "Mobile application UI design for a travel booking platform with interactive maps.",
      image: "/placeholder.svg?height=300&width=500",
      category: "mobile",
      tags: ["React Native", "Firebase", "Google Maps API"],
    },
    {
      id: 3,
      title: "Personal Finance Tool",
      description: "Web app for tracking expenses, income, and financial goals with data visualization.",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
      tags: ["Vue.js", "TypeScript", "D3.js", "Firebase"],
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Comprehensive analytics dashboard for social media managers to track performance.",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
      tags: ["React", "Redux", "Node.js", "PostgreSQL"],
    },
    {
      id: 5,
      title: "Fitness Tracker App",
      description: "Mobile app for tracking workouts, nutrition, and progress with personalized recommendations.",
      image: "/placeholder.svg?height=300&width=500",
      category: "mobile",
      tags: ["React Native", "GraphQL", "MongoDB"],
    },
    {
      id: 6,
      title: "AI Content Generator",
      description: "Web app that uses AI to generate marketing content for various platforms.",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
      tags: ["Next.js", "OpenAI API", "Tailwind CSS"],
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 bg-[#0A192F]/80">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white inline-block relative">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA] transform origin-left" />
          </h2>

          <div className="flex justify-center mt-8 space-x-4">
            {["all", "web", "mobile"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                  activeTab === tab ? "bg-[#64FFDA] text-[#0A192F]" : "bg-[#112240] text-gray-300 hover:bg-[#172A45]"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
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
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-[#1E3A5F] text-[#64FFDA]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center text-sm text-[#64FFDA] hover:underline"
                    >
                      <GitHub className="h-4 w-4 mr-1" />
                      Code
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center text-sm text-[#64FFDA] hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

