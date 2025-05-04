"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function ExpertisePage() {
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
                <FileText className="h-8 w-8 text-sage-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Odborné posudky nehnuteľností</h1>
              <p className="text-xl text-zinc-300 mb-8">
                Profesionálne ocenenie nehnuteľností a detailné odborné posudky na právne, finančné alebo osobné účely.
              </p>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative rounded-lg overflow-hidden h-[400px]">
                <Image src="/images/service-expertise.jpg" alt="Odborné posudky nehnuteľností" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Detailná analýza nehnuteľností</h3>
                  <p className="text-zinc-200">Komplexné hodnotenie hodnoty a charakteristík nehnuteľnosti</p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-zinc-900 mb-6">Odborné ocenenie nehnuteľností</h2>
                <p className="text-zinc-600 mb-6">
                  Naše odborné služby poskytujú detailné a presné ocenenia a posudky, na ktoré sa môžete spoľahnúť pri akomkoľvek účele – od súdnych sporov až po investičné rozhodnutia.
                </p>
                <p className="text-zinc-600 mb-8">
                  Vďaka rokom skúseností na realitnom trhu vám zaručujeme dôkladné, nezaujaté a profesionálne pripravené hodnotenia nehnuteľností.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-sage-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-zinc-900">Detailné ocenenia a správy</h3>
                      <p className="text-zinc-600">Komplexné ocenenia nehnuteľností s podrobnou analýzou trhu.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-sage-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-zinc-900">Právna odborná dokumentácia</h3>
                      <p className="text-zinc-600">Správy pripravené pre súdne konania a spory o nehnuteľnosti.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-sage-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-zinc-900">Investičná analýza</h3>
                      <p className="text-zinc-600">Detailné hodnotenia nehnuteľností pre investičné rozhodnutia.</p>
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
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Potrebujete odborný posudok?</h2>
              <p className="text-zinc-600 mb-8">
                Kontaktujte nás ešte dnes a prediskutujte svoje potreby ohľadom ocenenia a odborných posudkov. Náš profesionálny tím je pripravený poskytnúť vám detailnú analýzu, ktorú potrebujete.
              </p>
              <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg h-auto">
                <Link href="/contact" className="inline-flex items-center">
                  Požiadať o posudok
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