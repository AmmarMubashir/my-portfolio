"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0A192F]/90 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0A192F] to-transparent z-20"></div>
      </div>

      <div className="container mx-auto px-6 z-30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <p className="text-[#64FFDA] mb-4 font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Ammar Mubashir
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 h-10">
              A{" "}
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React js Developer",
                  2000,
                  "Next js Developer",
                  2000,
                  "Creative Coder",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Number.POSITIVE_INFINITY}
                className="text-[#64FFDA]"
              />
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the
              web, focusing on responsive design and modern technologies.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#projects"
                whileHover={{ x: 5 }}
                className="inline-flex items-center px-6 py-3 bg-[#64FFDA] text-[#0A192F] rounded font-medium transition-colors hover:bg-[#4CD3A9]"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 border border-[#64FFDA] text-[#64FFDA] rounded font-medium transition-colors hover:bg-[#64FFDA]/10"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#64FFDA]">
              <Image
                src="/profile.jpeg?height=350&width=350"
                alt="Ammar"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 transition-colors duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
