"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function ConsultationPage() {
  const { t } = useTranslation()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-zinc-900 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-grid-white/[0.2]"></div>
          </div>
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100/10 backdrop-blur-sm rounded-full mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Consultation Services</h1>
              <p className="text-xl text-zinc-300 mb-8">
                Expert advice on real estate matters, property rights, and optimal settlement strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-6">Professional Real Estate Consultation</h2>
                <p className="text-zinc-600 mb-6">
                  Our consultation services provide expert guidance on all aspects of real estate, helping you navigate
                  complex property situations with confidence.
                </p>
                <p className="text-zinc-600 mb-8">
                  Whether you're facing property rights issues, need settlement strategy advice, or require general real
                  estate consultation, our expertise ensures you make informed decisions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-zinc-900">Property Rights Consultation</h3>
                      <p className="text-zinc-600">Expert advice on complex property rights issues and disputes.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-zinc-900">Settlement Strategy Planning</h3>
                      <p className="text-zinc-600">Customized strategies for optimal property settlement outcomes.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-zinc-900">Investment Consultation</h3>
                      <p className="text-zinc-600">Professional guidance for real estate investment decisions.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden h-[400px]">
                <Image
                  src="/images/service-consultation.jpg"
                  alt="Consultation Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Expert Consultation</h3>
                  <p className="text-zinc-200">Personalized advice for your real estate needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Schedule a Consultation</h2>
              <p className="text-zinc-600 mb-8">
                Contact us today to schedule a consultation with our real estate experts. We're ready to provide the
                guidance you need for your property matters.
              </p>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg h-auto">
                <Link href="/contact" className="inline-flex items-center">
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
