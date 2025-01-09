"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

export function Nav() {
  const pathname = usePathname()
  
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-center space-x-2 md:justify-start">
          <Link href="/" className="font-bold">John Doe</Link>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <Link href="/introduction">
            <Button variant={pathname === "/introduction" ? "default" : "ghost"}>Introduction</Button>
          </Link>
          <Link href="/methodology">
            <Button variant={pathname === "/methodology" ? "default" : "ghost"}>Methodology</Button>
          </Link>
          <Link href="/findings">
            <Button variant={pathname === "/findings" ? "default" : "ghost"}>Findings</Button>
          </Link>
          <Link href="/conclusions">
            <Button variant={pathname === "/conclusions" ? "default" : "ghost"}>Conclusions</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}