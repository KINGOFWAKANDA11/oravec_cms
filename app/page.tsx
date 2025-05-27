import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CookieConsent } from "@/components/cookie"
import ClientReferencesWrapper from '@/components/references-wrapper'



export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ClientReferencesWrapper />
        <CookieConsent/>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
