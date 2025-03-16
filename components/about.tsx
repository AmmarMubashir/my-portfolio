"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0A192F]/80">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white inline-block relative">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA] transform origin-left" />
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#112240] p-8 rounded-lg shadow-lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4">
                Who I Am
              </h3>
              <p className="text-gray-300 mb-4">
                I'm a passionate frontend developer with 2+ years of experience
                creating beautiful, functional, and user-centered digital
                experiences. With a strong foundation in HTML, CSS, and
                JavaScript, combined with expertise in modern frameworks like
                React, Next, I bring creative ideas to life.
              </p>
              <p className="text-gray-300 mb-6">
                Throughout my career, I've collaborated with talented
                individuals to create digital products for both business and
                consumer use. I'm quietly confident, naturally curious, and
                perpetually working on improving my skills one design problem at
                a time.
              </p>

              <div className="flex justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-[#64FFDA]/10 border border-[#64FFDA] text-[#64FFDA] rounded font-medium transition-colors hover:bg-[#64FFDA]/20"
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
