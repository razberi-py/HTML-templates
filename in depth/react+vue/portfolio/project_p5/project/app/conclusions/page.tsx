import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Conclusions() {
  return (
    <main className="container max-w-4xl mx-auto py-12 px-4">
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <CheckCircle className="h-8 w-8" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Conclusions</h1>
            <p className="text-muted-foreground">Summary and recommendations</p>
          </div>
        </div>

        <Card className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <p className="mb-6">
              The research clearly demonstrates the significant benefits of adopting modern
              development practices in software development organizations.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Takeaways</h3>
            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Benefits</h4>
                <ul className="text-sm space-y-1">
                  <li>Increased productivity</li>
                  <li>Higher code quality</li>
                  <li>Better team morale</li>
                  <li>Faster delivery</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Challenges</h4>
                <ul className="text-sm space-y-1">
                  <li>Initial learning curve</li>
                  <li>Tool integration</li>
                  <li>Process adaptation</li>
                  <li>Cultural shift</li>
                </ul>
              </div>
            </div>

            <Separator className="my-6" />

            <h3 className="text-xl font-semibold mb-3">Recommendations</h3>
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium">1. Gradual Implementation</p>
                <p className="text-sm text-muted-foreground">
                  Start with small, manageable changes and gradually expand adoption
                  across teams and processes.
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium">2. Comprehensive Training</p>
                <p className="text-sm text-muted-foreground">
                  Invest in training programs to ensure teams are comfortable with
                  new tools and methodologies.
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium">3. Measure and Adjust</p>
                <p className="text-sm text-muted-foreground">
                  Continuously monitor key metrics and gather feedback to optimize
                  processes and tools.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-between">
          <Link href="/findings">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Findings
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline">
              Back to Contents
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}