"use client"

import { Button } from "@/components/ui/button"
import { MoveRight, Github, Linkedin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                John Doe
              </h1>
              <p className="text-xl text-muted-foreground">
                Full Stack Developer crafting exceptional digital experiences
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="inline-flex items-center">
                View Projects <MoveRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-auto aspect-square overflow-hidden rounded-full border-2">
            <Image
              alt="John Doe"
              className="object-cover"
              height={600}
              width={600}
              priority
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
    </section>
  )
}