"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "sk"

type Translations = {
  [key: string]: {
    en: string
    sk: string
  }
}

// Define all translations here
const translations: Translations = {
  // Navbar
  "nav.about": {
    en: "About Me",
    sk: "O mne",
  },
  "nav.services": {
    en: "Services",
    sk: "Služby",
  },
  "nav.references": {
    en: "References",
    sk: "Referencie",
  },
  "nav.contact": {
    en: "Contact",
    sk: "Kontakt",
  },
  "nav.speak": {
    en: "Speak with me",
    sk: "Kontaktujte ma",
  },

  // Hero
  "hero.title": {
    en: "TOP RATED Expert",
    sk: "NAJLEPŠIE HODNOTENÝ Expert",
  },
  "hero.subtitle": {
    en: "In Real Estate Settlement",
    sk: "V oblasti vysporiadania nehnuteľností",
  },
  "hero.description": {
    en: "Professional real estate settlement and expertise services with proven results.",
    sk: "Profesionálne služby v oblasti vysporiadania nehnuteľností a znalecké posudky s preukázateľnými výsledkami.",
  },
  "hero.cta": {
    en: "Speak with me",
    sk: "Kontaktujte ma",
  },
  "hero.quote": {
    en: "Real estate the way it should be, not the way it used to be.",
    sk: "Nehnuteľnosti tak, ako by mali byť, nie tak, ako bývali.",
  },

  // Help section
  "help.title": {
    en: "How Can I Help You?",
    sk: "Ako Vám môžem pomôcť?",
  },
  "help.description": {
    en: "I provide comprehensive real estate settlement services and expertise to help you navigate complex property situations.",
    sk: "Poskytujem komplexné služby v oblasti vysporiadania nehnuteľností a odborné znalosti, ktoré vám pomôžu zorientovať sa v zložitých situáciách s nehnuteľnosťami.",
  },

  // About
  "about.title": {
    en: "About Me",
    sk: "O mne",
  },
  "about.description": {
    en: "With years of experience in real estate settlement and expertise, I provide professional services to help clients navigate complex property situations. My goal is to ensure smooth, transparent, and legally sound real estate transactions.",
    sk: "S dlhoročnými skúsenosťami v oblasti vysporiadania nehnuteľností a odborných posudkov poskytujem profesionálne služby, ktoré pomáhajú klientom orientovať sa v zložitých situáciách s nehnuteľnosťami. Mojím cieľom je zabezpečiť hladké, transparentné a právne bezchybné transakcie s nehnuteľnosťami.",
  },
  "about.experience": {
    en: "Years of Experience",
    sk: "Roky skúseností",
  },
  "about.clients": {
    en: "Satisfied Clients",
    sk: "Spokojných klientov",
  },
  "about.projects": {
    en: "Completed Projects",
    sk: "Dokončených projektov",
  },

  // Services
  "services.title": {
    en: "Services",
    sk: "Služby",
  },
  "services.description": {
    en: "I offer a comprehensive range of real estate settlement and expertise services tailored to your specific needs.",
    sk: "Ponúkam komplexný rozsah služieb v oblasti vysporiadania nehnuteľností a odborných posudkov prispôsobených vašim špecifickým potrebám.",
  },
  "services.settlement.title": {
    en: "Real Estate Settlement",
    sk: "Vysporiadanie nehnuteľností",
  },
  "services.settlement.description": {
    en: "Complete handling of property settlements, including documentation, legal compliance, and transaction management.",
    sk: "Kompletné spracovanie vysporiadania nehnuteľností vrátane dokumentácie, právneho súladu a riadenia transakcií.",
  },
  "services.expertise.title": {
    en: "Property Expertise",
    sk: "Znalecké posudky",
  },
  "services.expertise.description": {
    en: "Professional property valuation and detailed expertise reports for legal, financial, or personal purposes.",
    sk: "Profesionálne oceňovanie nehnuteľností a podrobné znalecké posudky pre právne, finančné alebo osobné účely.",
  },
  "services.consultation.title": {
    en: "Consultation",
    sk: "Konzultácie",
  },
  "services.consultation.description": {
    en: "Expert advice on real estate matters, property rights, and optimal settlement strategies.",
    sk: "Odborné poradenstvo v oblasti nehnuteľností, vlastníckych práv a optimálnych stratégií vysporiadania.",
  },
  "services.legal.title": {
    en: "Legal Support",
    sk: "Právna podpora",
  },
  "services.legal.description": {
    en: "Assistance with legal aspects of real estate transactions, including contract review and compliance verification.",
    sk: "Pomoc s právnymi aspektmi transakcií s nehnuteľnosťami vrátane kontroly zmlúv a overenia súladu s predpismi.",
  },

  // References
  "references.title": {
    en: "References",
    sk: "Referencie",
  },
  "references.description": {
    en: "What my clients say about my services and expertise in real estate settlement.",
    sk: "Čo hovoria moji klienti o mojich službách a odborných znalostiach v oblasti vysporiadania nehnuteľností.",
  },
  "references.client1.name": {
    en: "Martin Novák",
    sk: "Martin Novák",
  },
  "references.client1.position": {
    en: "Property Owner",
    sk: "Majiteľ nehnuteľnosti",
  },
  "references.client1.testimonial": {
    en: "Ľub provided exceptional service in settling our family property. His expertise and attention to detail made the entire process smooth and stress-free.",
    sk: "Ľub poskytol výnimočné služby pri vysporiadaní našej rodinnej nehnuteľnosti. Jeho odborné znalosti a pozornosť k detailom urobili celý proces hladkým a bezstresovým.",
  },
  "references.client2.name": {
    en: "Jana Kováčová",
    sk: "Jana Kováčová",
  },
  "references.client2.position": {
    en: "Real Estate Investor",
    sk: "Investorka do nehnuteľností",
  },
  "references.client2.testimonial": {
    en: "I've worked with many real estate experts, but Ľub's professionalism and knowledge stand out. His expertise reports are thorough and have been invaluable for my investment decisions.",
    sk: "Spolupracovala som s mnohými odborníkmi na nehnuteľnosti, ale Ľubova profesionalita a znalosti vynikajú. Jeho znalecké posudky sú dôkladné a boli neoceniteľné pre moje investičné rozhodnutia.",
  },
  "references.client3.name": {
    en: "Peter Horváth",
    sk: "Peter Horváth",
  },
  "references.client3.position": {
    en: "Business Owner",
    sk: "Majiteľ firmy",
  },
  "references.client3.testimonial": {
    en: "Ľub helped us navigate a complex commercial property settlement. His expertise and guidance were crucial in achieving a favorable outcome for all parties involved.",
    sk: "Ľub nám pomohol zorientovať sa v zložitom vysporiadaní komerčnej nehnuteľnosti. Jeho odborné znalosti a vedenie boli kľúčové pri dosiahnutí priaznivého výsledku pre všetky zúčastnené strany.",
  },

  // Contact
  "contact.title": {
    en: "Contact",
    sk: "Kontakt",
  },
  "contact.description": {
    en: "Get in touch with me for any inquiries about real estate settlement and expertise services.",
    sk: "Kontaktujte ma ohľadom akýchkoľvek otázok o vysporiadaní nehnuteľností a znaleckých službách.",
  },
  "contact.form.name": {
    en: "Full Name",
    sk: "Celé meno",
  },
  "contact.form.email": {
    en: "Email Address",
    sk: "Emailová adresa",
  },
  "contact.form.phone": {
    en: "Phone Number",
    sk: "Telefónne číslo",
  },
  "contact.form.message": {
    en: "Your Message",
    sk: "Vaša správa",
  },
  "contact.form.submit": {
    en: "Send Message",
    sk: "Odoslať správu",
  },
  "contact.info.address": {
    en: "Address",
    sk: "Adresa",
  },
  "contact.info.phone": {
    en: "Phone",
    sk: "Telefón",
  },
  "contact.info.email": {
    en: "Email",
    sk: "Email",
  },
  "contact.info.hours": {
    en: "Working Hours",
    sk: "Pracovná doba",
  },
  "contact.info.hours.value": {
    en: "Monday - Friday: 9:00 AM - 5:00 PM",
    sk: "Pondelok - Piatok: 9:00 - 17:00",
  },

  // Footer
  "footer.rights": {
    en: "All rights reserved",
    sk: "Všetky práva vyhradené",
  },
  "footer.privacy": {
    en: "Privacy Policy",
    sk: "Ochrana osobných údajov",
  },
  "footer.terms": {
    en: "Terms of Service",
    sk: "Podmienky služby",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "sk")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}
