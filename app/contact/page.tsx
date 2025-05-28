"use client"

import { Navbar } from "@/components/navbar"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Suspense, useEffect } from "react"

export default function ContactPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/dark-texture-background.jpg")' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-24 sm:h-[1200px] h-auto">
        <h1 className="text-4xl font-bold mb-12 text-slate-200 text-center">Kontakt</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1">
            <ContactInfo />
          </div>
          <div className="order-1 md:order-2">
          <Suspense fallback={<div>Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
