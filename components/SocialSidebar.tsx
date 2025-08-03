"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function SocialSidebar() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ShaikMuskanFirdos" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muskanfirdos-433b772b4/" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
  ]

  return (
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          className="p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <social.icon className="h-5 w-5" />
        </motion.a>
      ))}
    </div>
  )
}
