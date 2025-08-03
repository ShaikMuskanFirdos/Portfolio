"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SocialSidebar from "./SocialSidebar"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Sk Muskan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Hi! I'm Sk Muskan, a passionate developer specializing in Machine Learning and AI solutions. I create intelligent automation systems that solve real-world problems and streamline complex processes.
          </p>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            When I'm not building models or developing automation scripts, you'll find me exploring cutting-edge AI technologies and contributing to innovative projects that push the boundaries of what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              See My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>

      <SocialSidebar />
    </section>
  )
}
