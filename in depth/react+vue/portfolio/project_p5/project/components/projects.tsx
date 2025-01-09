"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Globe } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=450&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    type: "Full Stack",
    github: "https://github.com",
    demo: "https://demo.com",
    outcomes: [
      "Increased conversion rate by 25%",
      "Reduced load time by 40%",
      "Processed $500K in transactions",
    ],
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content generation tool using OpenAI's GPT-3 API.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    type: "AI/ML",
    github: "https://github.com",
    demo: "https://demo.com",
    outcomes: [
      "10,000+ articles generated",
      "95% user satisfaction rate",
      "Featured on Product Hunt",
    ],
  },
]

const filters = {
  type: ["All", "Full Stack", "Frontend", "Backend", "AI/ML"],
  tech: ["All", "Next.js", "React", "Node.js", "TypeScript", "Python"],
}

export function Projects() {
  const [activeType, setActiveType] = useState("All")
  const [activeTech, setActiveTech] = useState("All")

  const filteredProjects = projects.filter((project) => {
    const typeMatch = activeType === "All" || project.type === activeType
    const techMatch =
      activeTech === "All" || project.tags.includes(activeTech)
    return typeMatch && techMatch
  })

  return (
    <section className="py-24 bg-muted/50" id="projects">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-12">Featured Projects</h2>
        
        <div className="space-y-4 mb-8">
          <div className="flex gap-2 flex-wrap">
            {filters.type.map((type) => (
              <Button
                key={type}
                variant={activeType === type ? "default" : "outline"}
                onClick={() => setActiveType(type)}
                className="text-sm"
              >
                {type}
              </Button>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.tech.map((tech) => (
              <Button
                key={tech}
                variant={activeTech === tech ? "default" : "outline"}
                onClick={() => setActiveTech(tech)}
                className="text-sm"
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle>{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.outcomes.map((outcome, i) => (
                    <p key={i} className="text-sm">
                      • {outcome}
                    </p>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button className="flex-1">
                  <Globe className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}