"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation: Check if any field is empty
    if (
      !formState.name ||
      !formState.email ||
      !formState.subject ||
      !formState.message
    ) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!;

    const templateParams = {
      name: formState.name,
      email: formState.email,
      subject: formState.subject,
      message: formState.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success("Message sent successfully! ✅");

      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white inline-block relative">
            Contact Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA] transform origin-left" />
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Feel free to contact me for any project ideas or if you have any
            questions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-[#112240] p-8 rounded-lg shadow-lg border border-[#1E3A5F]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0A192F] border border-[#1E3A5F] text-white rounded focus:outline-none focus:border-[#64FFDA] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0A192F] border border-[#1E3A5F] text-white rounded focus:outline-none focus:border-[#64FFDA] transition-colors"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-gray-300 mb-2 text-sm"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formState.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0A192F] border border-[#1E3A5F] text-white rounded focus:outline-none focus:border-[#64FFDA] transition-colors"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-300 mb-2 text-sm"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0A192F] border border-[#1E3A5F] text-white rounded focus:outline-none focus:border-[#64FFDA] transition-colors"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              disabled={loading}
              className={`w-full py-3 px-4 rounded font-medium flex items-center justify-center transition-colors ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#64FFDA] hover:bg-[#4CD3A9] text-[#0A192F]"
              }`}
            >
              {loading ? (
                <Loader className="animate-spin h-4 w-4 mr-2" />
              ) : (
                <Send className="h-4 w-4 mr-2" />
              )}
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
