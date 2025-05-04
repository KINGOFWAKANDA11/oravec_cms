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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Právna podpora</h1>
              <p className="text-xl text-zinc-300 mb-8">
                Pomoc s právnymi aspektmi realitných transakcií vrátane kontroly zmlúv a overenia súladu s legislatívou.
              </p>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative rounded-lg overflow-hidden h-[400px]">
                <Image src="/images/service-legal.jpg" alt="Právna podpora" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Komplexná právna podpora</h3>
                  <p className="text-zinc-200">Zabezpečenie právnej bezchybnosti vašich realitných transakcií</p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-zinc-900 mb-6">Právna podpora pre nehnuteľnosti</h2>
                <p className="text-zinc-600 mb-6">
                  Naše právne služby zabezpečia, aby všetky aspekty vašich realitných transakcií boli v súlade s platnými zákonmi a predpismi, čím chránime vaše záujmy počas celého procesu.
                </p>
                <p className="text-zinc-600 mb-8">
                  Od kontroly zmlúv až po overenie súladu s legislatívou – naše skúsenosti vám pomôžu zorientovať sa v zložitom právnom prostredí realít s istotou a pokojom.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-sage-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-zinc-900">Kontrola a vypracovanie zmlúv</h3>
                      <p className="text-zinc-600">
                        Dôkladná kontrola a príprava zmlúv a dohôd o nehnuteľnostiach.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-sage-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-zinc-900">Overenie súladu s predpismi</h3>
                      <p className="text-zinc-600">
                        Zabezpečenie, že všetky transakcie sú v súlade s aktuálnou legislatívou.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-sage-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-zinc-900">Riešenie právnych sporov</h3>
                      <p className="text-zinc-600">Podpora a vedenie pri riešení právnych sporov týkajúcich sa nehnuteľností.</p>
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
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Potrebujete právnu podporu?</h2>
              <p className="text-zinc-600 mb-8">
                Kontaktujte nás ešte dnes a prediskutujte svoje potreby v oblasti právnej podpory pre nehnuteľnosti. Náš tím je pripravený pomôcť vám zabezpečiť právnu bezchybnosť transakcií a ochranu vašich záujmov.
              </p>
              <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg h-auto">
                <Link href="/contact" className="inline-flex items-center">
                  Získať právnu podporu
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