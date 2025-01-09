import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FlaskConical, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Methodology() {
  return (
    <main className="container max-w-4xl mx-auto py-12 px-4">
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <FlaskConical className="h-8 w-8" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Methodology</h1>
            <p className="text-muted-foreground">Research methods and approaches</p>
          </div>
        </div>

        <Card className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Research Approach</h2>
            <p className="mb-4">
              Our research employed a mixed-methods approach, combining quantitative data analysis
              with qualitative insights from industry practitioners.
            </p>

            <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
            <ul className="space-y-2 mb-4">
              <li>Online surveys with development teams</li>
              <li>In-depth interviews with tech leaders</li>
              <li>Analysis of project metrics and KPIs</li>
              <li>Case studies of successful implementations</li>
            </ul>

            <Separator className="my-6" />

            <h3 className="text-xl font-semibold mb-3">Analysis Framework</h3>
            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Quantitative Analysis</h4>
                <ul className="text-sm space-y-1">
                  <li>Performance metrics</li>
                  <li>Deployment frequency</li>
                  <li>Error rates</li>
                  <li>Development velocity</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Qualitative Analysis</h4>
                <ul className="text-sm space-y-1">
                  <li>Team satisfaction</li>
                  <li>Process effectiveness</li>
                  <li>Collaboration patterns</li>
                  <li>Knowledge sharing</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="font-medium">Methodology Note:</p>
              <p className="text-sm text-muted-foreground">
                All data collection and analysis followed strict ethical guidelines and
                maintained participant confidentiality throughout the research process.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex justify-between">
          <Link href="/introduction">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Introduction
            </Button>
          </Link>
          <Link href="/findings">
            <Button>
              Next: Findings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}