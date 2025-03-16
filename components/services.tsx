"use client"

import { motion } from "framer-motion"
import { Code, Figma, Smartphone } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-[#64FFDA]" />,
      title: "Web Development",
      description: "Building responsive and performance-focused websites using modern technologies and best practices.",
    },
    {
      icon: <Figma className="h-10 w-10 text-[#64FFDA]" />,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and meaningful experiences with attention to detail.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-[#64FFDA]" />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications that provide native-like experiences.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white inline-block relative">
            Services
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA] transform origin-left" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#112240] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-[#1E3A5F] hover:border-[#64FFDA]/30"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

