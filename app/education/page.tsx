"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Education } from "@/components/education"
import { useEffect } from "react"

export default function EducationPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Education />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}