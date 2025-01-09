import { Hero } from '@/components/hero'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <section className="container max-w-4xl mx-auto py-12 px-4">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <div className="space-y-4">
            <Link href="/introduction" className="block">
              <Button variant="outline" className="w-full justify-between">
                1. Introduction
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/methodology" className="block">
              <Button variant="outline" className="w-full justify-between">
                2. Methodology
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/findings" className="block">
              <Button variant="outline" className="w-full justify-between">
                3. Findings
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/conclusions" className="block">
              <Button variant="outline" className="w-full justify-between">
                4. Conclusions
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </main>
  )
}