"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ShaikMuskanFirdos" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muskanfirdos-433b772b4/" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
  ]

  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
             Sk Muskan
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-2 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <div className="text-sm text-gray-400">© 2025 Sk Muskan. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}
