"use client"

import { useTranslation } from "./language-provider"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Globe } from "lucide-react"

export function Footer() {
  const { t, language, setLanguage } = useTranslation()

  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-500">Ľubo Oravec</h3>
            <p className="text-zinc-400 mb-4">Profesionálne vysporiadanie majetku</p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Rýchle odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/#references" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  {t("nav.references")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Služby</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  {t("services.settlement.title")}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  {t("services.expertise.title")}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  {t("services.consultation.title")}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  {t("services.legal.title")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <address className="not-italic text-zinc-400 space-y-2">
              <p>Daxnerova 9</p>
              <p>Žilina, 010 01</p>
              <p>+421 911 990 580</p>
              <p>info@lubooravec.sk</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ľubo Oravec. {t("footer.rights")}
          </p>

          <div className="flex items-center space-x-6">
            <div className="flex opacity-0 items-center space-x-2">
              <Globe className="h-4 w-4 text-zinc-400" />
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm ${language === "en" ? "text-emerald-500" : "text-zinc-400 hover:text-white"}`}
              >
                EN
              </button>
              <span className="text-zinc-600">|</span>
              <button
                onClick={() => setLanguage("sk")}
                className={`text-sm ${language === "sk" ? "text-emerald-500" : "text-zinc-400 hover:text-white"}`}
              >
                SK
              </button>
            </div>

            <Link href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors text-sm">
              {t("footer.privacy")}
            </Link>

            <Link href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors text-sm">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
