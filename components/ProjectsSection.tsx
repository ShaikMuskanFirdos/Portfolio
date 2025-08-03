"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "LearnEase Digital Education",
      description:
        "A comprehensive web application designed for online education featuring virtual classrooms, interactive exams, student progress tracking, and real-time collaboration tools. Built to enhance remote learning experiences with intuitive user interface and robust backend systems.",
      image: "/LearnEase_Digital_Education_Platform.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Enhancing Alzheimer's Disease Prediction through Deep Learning Models",
      description:
        "Research paper and implementation focusing on improving early detection of Alzheimer's disease using advanced deep learning techniques. Developed CNN models for brain image analysis and achieved significant improvements in prediction accuracy compared to traditional methods.",
      image: "/Enhancing_Alzheimers_Disease_Prediction_through_Deep_Learning_Models.jpg",
      liveUrl: "https://ieeexplore.ieee.org/document/10808306",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Automated Resume Filtering System",
      description:
        "An intelligent resume screening system that automatically filters and ranks resumes based on job requirements. Features include keyword extraction, skills matching, experience analysis, and ML-powered candidate scoring to streamline the recruitment process.",
      image: "/Automated_Resume_Filtering_System.jpg",
     
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className={`w-full h-48 ${project.id === 2 ? 'object-top' : 'object-cover'} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.liveUrl}>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.githubUrl}>
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
