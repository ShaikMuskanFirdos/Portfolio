"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users } from "lucide-react"

export default function SkillsSection() {
  const skills = {
    technical: [
      "Python",
      "Java", 
      "C#",
      "HTML CSS JavaScript",
      "SQL",
      "Git",
    ],
    mlai: [
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Deep Learning",
    ],
    automation: [
      "Playwright",
      "Selenium",
      "API Testing",
      "Test Automation",
    ],
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Code className="h-6 w-6 text-blue-600" />
                  <CardTitle>Programming</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {skills.technical.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* ML/AI Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 text-purple-600">🤖</div>
                  <CardTitle>ML & AI</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {skills.mlai.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Automation Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 text-teal-600">⚡</div>
                  <CardTitle>Automation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {skills.automation.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-6 w-6 text-green-600" />
                <CardTitle>Soft Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Problem Solving",
                  "Team Collaboration", 
                  "Communication",
                  "Project Management",
                  "Creative Thinking",
                  "Adaptability",
                  "Critical Analysis",
                  "Research Skills",
                  "Leadership",
                  "Time Management",
                  "Innovation",
                  "Attention to Detail",
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-600 to-teal-600 rounded-full" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
