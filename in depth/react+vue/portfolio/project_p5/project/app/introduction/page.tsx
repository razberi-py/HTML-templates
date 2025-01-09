import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BookOpen, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Introduction() {
  return (
    <main className="container max-w-4xl mx-auto py-12 px-4">
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <BookOpen className="h-8 w-8" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Introduction</h1>
            <p className="text-muted-foreground">Overview and key concepts</p>
          </div>
        </div>
        
        <Card className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Background</h2>
            <p className="mb-4">
              Modern software development practices have evolved significantly over the past decade,
              driven by increasing demands for faster delivery, higher quality, and better user experiences.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Key Objectives</h3>
            <ul className="space-y-2 mb-4">
              <li>Analyze current development methodologies</li>
              <li>Evaluate impact on software quality</li>
              <li>Identify best practices and patterns</li>
              <li>Provide actionable recommendations</li>
            </ul>

            <Separator className="my-6" />

            <h3 className="text-xl font-semibold mb-3">Research Scope</h3>
            <p className="mb-4">
              This study focuses on organizations that have adopted modern development practices
              within the last three years, examining their processes, tools, and outcomes.
            </p>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="font-medium">Note:</p>
              <p className="text-sm text-muted-foreground">
                The findings presented are based on data collected from over 100 software development
                teams across various industries and organization sizes.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex justify-between">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Contents
            </Button>
          </Link>
          <Link href="/methodology">
            <Button>
              Next: Methodology
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}