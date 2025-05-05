"use client"

import { Navbar } from "@/components/navbar"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useEffect } from "react"

export default function ContactPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-300">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1">
            <ContactInfo />
          </div>
          <div className="order-1 md:order-2">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
