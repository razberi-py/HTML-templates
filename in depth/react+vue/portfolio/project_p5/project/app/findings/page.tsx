import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LineChart, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Findings() {
  return (
    <main className="container max-w-4xl mx-auto py-12 px-4">
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <LineChart className="h-8 w-8" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Findings</h1>
            <p className="text-muted-foreground">Key results and analysis</p>
          </div>
        </div>

        <Card className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Key Results</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Development Velocity</h3>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <p className="font-medium">Key Finding:</p>
                  <p className="text-sm text-muted-foreground">
                    Teams using modern practices showed a 40% increase in development velocity
                    compared to traditional approaches.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li>Shorter development cycles</li>
                  <li>Faster time to market</li>
                  <li>Improved iteration speed</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Code Quality</h3>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <p className="font-medium">Key Finding:</p>
                  <p className="text-sm text-muted-foreground">
                    Automated testing and CI/CD practices led to a 60% reduction in production bugs.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li>Higher test coverage</li>
                  <li>Fewer production issues</li>
                  <li>Better maintainability</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Team Satisfaction</h3>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <p className="font-medium">Key Finding:</p>
                  <p className="text-sm text-muted-foreground">
                    85% of developers reported higher job satisfaction after adopting modern practices.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li>Better work-life balance</li>
                  <li>Reduced stress levels</li>
                  <li>Increased collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-between">
          <Link href="/methodology">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Methodology
            </Button>
          </Link>
          <Link href="/conclusions">
            <Button>
              Next: Conclusions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}