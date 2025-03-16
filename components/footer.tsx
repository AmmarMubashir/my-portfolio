"use client";

import { motion } from "framer-motion";

import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/AmmarMubashir",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/ammar-mubashir/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:muhammadammarmubashir@gmail.com",
      label: "Email",
    },
    {
      icon: <FaWhatsapp className="h-5 w-5" />,
      href: "https://wa.me/03135769671",
      label: "Email",
    },
  ];

  return (
    <footer className="py-8 bg-[#0A192F] border-t border-[#1E3A5F]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="text-2xl font-bold text-[#64FFDA]">AM.</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-4 mb-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#64FFDA" }}
                className="text-gray-400 hover:text-[#64FFDA] transition-colors p-2"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm text-center"
          >
            <p>&copy; 2023 Ammar Mubashir. All rights reserved.</p>
           
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
