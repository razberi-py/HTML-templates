"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "John's technical expertise and attention to detail made our project a huge success. His ability to understand complex requirements and deliver elegant solutions is remarkable.",
  },
  {
    name: "Michael Chen",
    role: "CTO at StartupX",
    content: "Working with John was a game-changer for our startup. His full-stack capabilities and problem-solving skills helped us launch our MVP ahead of schedule.",
  },
]

export function About() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
            <p className="text-muted-foreground">
              With over 8 years of experience in full-stack development, I specialize in building scalable web applications using modern technologies. My passion lies in creating elegant solutions to complex problems while ensuring the best possible user experience.
            </p>
            <Button className="inline-flex items-center">
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">What People Say</h3>
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="mb-4 italic">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}