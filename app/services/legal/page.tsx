"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Scale, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function LegalPage() {
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
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sage-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100/10 backdrop-blur-sm rounded-full mb-6">
                <Scale className="h-8 w-8 text-sage-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Legal Support</h1>
              <p className="text-xl text-zinc-300 mb-8">
                Assistance with legal aspects of real estate transactions, including contract review and compliance
                verification.
              </p>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative rounded-lg overflow-hidden h-[400px]">
                <Image src="/images/service-legal.jpg" alt="Legal Support" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Comprehensive Legal Support</h3>
                  <p className="text-zinc-200">Ensuring your real estate transactions are legally sound</p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-zinc-900 mb-6">Real Estate Legal Support</h2>
                <p className="text-zinc-600 mb-6">
                  Our legal support services ensure that all aspects of your real estate transactions comply with
                  relevant laws and regulations, protecting your interests throughout the process.
                </p>
                <p className="text-zinc-600 mb-8">
                  From contract review to compliance verification, our expertise helps you navigate the complex legal
                  landscape of real estate with confidence and peace of mind.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-sage-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-zinc-900">Contract Review & Drafting</h3>
                      <p className="text-zinc-600">
                        Thorough review and drafting of real estate contracts and agreements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-sage-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-zinc-900">Compliance Verification</h3>
                      <p className="text-zinc-600">
                        Ensuring all transactions comply with current laws and regulations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-sage-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-zinc-900">Legal Dispute Resolution</h3>
                      <p className="text-zinc-600">Support and guidance for resolving real estate legal disputes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Need Legal Support?</h2>
              <p className="text-zinc-600 mb-8">
                Contact us today to discuss your real estate legal support needs. Our team is ready to help ensure your
                transactions are legally sound and your interests are protected.
              </p>
              <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg h-auto">
                <Link href="/contact" className="inline-flex items-center">
                  Get Legal Support
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
