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
  "nav.speak": {
    en: "Speak with me",
    sk: "Kontaktujte ma",
  },
  "nav.contact": {
    en: "Contact",
    sk: "Kontakt",
  },
  "nav.education": {
    en: "Education",
    sk: "Vzdelávanie",
  },

  // Hero
  "hero.title": {
    en: "Specialization",
    sk: "Špecialista v oblasti",
  },
  "hero.subtitle": {
    en: "In Real Estate Settlement",
    sk: "vysporiadania nehnuteľnosti",
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
    en: "My path was not always directly about real estate, but each experience shaped me into what I do today: transforming complicated property situations into real values. I started in advocacy, where I learned to navigate the tangle of legal regulations. However, I soon discovered that I was more attracted to the dynamics of business. Therefore, while still in school, I built and then successfully sold a franchise concept. This experience gave me valuable practical lessons and led me to the area where I found my true calling – real estate. During my business, I encountered a frustrating reality: a lot of land and real estate lie fallow, are practically worthless and unusable simply because of complex or unresolved ownership relationships. However, I also saw enormous potential – that with the right arrangement, such property can become a valuable asset. For the last 8 years (since 2017), I have therefore been fully dedicated to real estate settlement, initially for my own, successfully implemented and sold projects. It was here that I verified that the settlement process itself has high added value.",
    sk: "Moja cesta nebola vždy priamo o nehnuteľnostiach, no každá skúsenosť ma formovala k tomu, čím sa zaoberám dnes: premieňaniu komplikovaných majetkových situácií na reálne hodnoty. Začínal som v advokácii, kde som sa naučil orientovať v spleti právnych predpisov. Čoskoro som však zistil, že ma viac láka dynamika podnikania. Ešte počas školy som preto vybudoval a následne úspešne predal franchisingový koncept. Táto skúsenosť mi dala cenné lekcie z praxe a priviedla ma k oblasti, kde som našiel svoje skutočné poslanie – nehnuteľnosti. Počas podnikania som narazil na frustrujúcu realitu: množstvo pozemkov a nehnuteľností leží ladom, sú prakticky bezcenné a nepoužiteľné len kvôli zložitým alebo nevyriešeným vlastníckym vzťahom. Videl som však aj obrovský potenciál – že správnym vysporiadaním sa z takéhoto majetku stáva hodnotné aktívum. Posledných 8 rokov (od 2017) som sa preto naplno venoval vysporiadaniu nehnuteľností, najprv pre vlastné, úspešne realizované a predané projekty. Práve tu som si overil, že proces vysporiadania má sám o sebe vysokú pridanú hodnotu.",
  },
  "about.experience": {
    en: "Years of Experience",
    sk: "Roky praxe",
  },
  "about.clients": {
    en: "Area of land settled",
    sk: "Plocha vysporiadaných pozemkov",
  },
  "about.projects": {
    en: "Value of sales made",
    sk: "Hodnota realizovaných predajov",
  },
  "about.satisfaction": {
    en: "Owners approached",
    sk: "Oslovených vlastníkov",
  },

  // Education
  "education.badge": {
    en: "Professional Course",
    sk: "Profesionálny kurz",
  },
  "education.title": {
    en: "Real Estate Settlement Mastery",
    sk: "Majstrovstvo v oblasti vysporiadania nehnuteľností",
  },
  "education.description": {
    en: "Comprehensive education program for real estate professionals and property owners looking to master the settlement process.",
    sk: "Komplexný vzdelávací program pre profesionálov v oblasti nehnuteľností a vlastníkov nehnuteľností, ktorí chcú zvládnuť proces vysporiadania.",
  },
  "education.courseTitle": {
    en: "Master the Art of Real Estate Settlement",
    sk: "Zvládnite umenie vysporiadania nehnuteľností",
  },
  "education.courseDescription": {
    en: "This comprehensive course will equip you with the knowledge, tools, and strategies needed to navigate complex real estate settlements with confidence. Whether you're a property owner, real estate agent, or aspiring settlement expert, this program will transform your understanding of the entire process.",
    sk: "Tento komplexný kurz vás vybaví znalosťami, nástrojmi a stratégiami potrebnými na sebavedomé zvládnutie zložitých vysporiadaní nehnuteľností. Či už ste vlastníkom nehnuteľnosti, realitným agentom alebo začínajúcim odborníkom na vysporiadanie, tento program zmení vaše chápanie celého procesu.",
  },
  "education.duration": {
    en: "8 Weeks, Self-Paced",
    sk: "8 týždňov, vlastným tempom",
  },
  "education.startDate": {
    en: "Start Anytime",
    sk: "Začnite kedykoľvek",
  },
  "education.students": {
    en: "500+ Students Enrolled",
    sk: "500+ zapísaných študentov",
  },
  "education.tag1": {
    en: "Property Settlement",
    sk: "Vysporiadanie nehnuteľností",
  },
  "education.tag2": {
    en: "Legal Documentation",
    sk: "Právna dokumentácia",
  },
  "education.tag3": {
    en: "Negotiation Skills",
    sk: "Vyjednávacie zručnosti",
  },
  "education.tag4": {
    en: "Risk Management",
    sk: "Riadenie rizík",
  },
  "education.benefit1": {
    en: "Learn to navigate complex property settlements with confidence and expertise",
    sk: "Naučte sa s istotou a odbornosťou orientovať v zložitých vysporiadaniach nehnuteľností",
  },
  "education.benefit2": {
    en: "Master the legal documentation and compliance requirements for successful settlements",
    sk: "Zvládnite právnu dokumentáciu a požiadavky na dodržiavanie predpisov pre úspešné vysporiadania",
  },
  "education.benefit3": {
    en: "Develop advanced negotiation skills to achieve optimal outcomes for all parties",
    sk: "Rozvíjajte pokročilé vyjednávacie zručnosti na dosiahnutie optimálnych výsledkov pre všetky strany",
  },
  "education.videoCaption": {
    en: "Watch the course introduction",
    sk: "Pozrite si úvod do kurzu",
  },
  "education.reviewCount": {
    en: "Based on 127 student reviews",
    sk: "Na základe 127 recenzií študentov",
  },
  "education.limitedOffer": {
    en: "Limited Time Offer",
    sk: "Časovo obmedzená ponuka",
  },
  "education.courseName": {
    en: "Complete Real Estate Settlement Course",
    sk: "Kompletný kurz vysporiadania nehnuteľností",
  },
  "education.courseShortDescription": {
    en: "All-inclusive training program with lifetime access",
    sk: "Komplexný tréningový program s doživotným prístupom",
  },
  "education.oneTimePayment": {
    en: "One-time payment",
    sk: "Jednorazová platba",
  },
  "education.feature1": {
    en: "8 weeks of comprehensive training",
    sk: "8 týždňov komplexného tréningu",
  },
  "education.feature2": {
    en: "40+ video lessons with detailed explanations",
    sk: "40+ video lekcií s podrobnými vysvetleniami",
  },
  "education.feature3": {
    en: "Downloadable templates and resources",
    sk: "Stiahnuteľné šablóny a zdroje",
  },
  "education.feature4": {
    en: "Access to student community forum",
    sk: "Prístup do fóra študentskej komunity",
  },
  "education.feature5": {
    en: "Certificate of completion",
    sk: "Certifikát o absolvovaní",
  },
  "education.feature6": {
    en: "Lifetime access to course updates",
    sk: "Doživotný prístup k aktualizáciám kurzu",
  },
  "education.enrollNow": {
    en: "Enroll Now",
    sk: "Zapísať sa teraz",
  },
  "education.moneyBackGuarantee": {
    en: "30-day money-back guarantee",
    sk: "30-dňová záruka vrátenia peňazí",
  },
  "education.courseContentTitle": {
    en: "What You'll Learn",
    sk: "Čo sa naučíte",
  },
  "education.module1.title": {
    en: "Foundations of Real Estate Settlement",
    sk: "Základy vysporiadania nehnuteľností",
  },
  "education.module1.duration": {
    en: "6 lessons • 2 hours",
    sk: "6 lekcií • 2 hodiny",
  },
  "education.module1.lesson1": {
    en: "Introduction to Real Estate Settlement",
    sk: "Úvod do vysporiadania nehnuteľností",
  },
  "education.module1.lesson2": {
    en: "Key Legal Concepts and Terminology",
    sk: "Kľúčové právne koncepty a terminológia",
  },
  "education.module1.resource1": {
    en: "Settlement Process Flowchart",
    sk: "Vývojový diagram procesu vysporiadania",
  },
  "education.module2.title": {
    en: "Documentation and Compliance",
    sk: "Dokumentácia a dodržiavanie predpisov",
  },
  "education.module2.duration": {
    en: "8 lessons • 3 hours",
    sk: "8 lekcií • 3 hodiny",
  },
  "education.module2.lesson1": {
    en: "Essential Settlement Documents",
    sk: "Základné dokumenty vysporiadania",
  },
  "education.module2.lesson2": {
    en: "Regulatory Compliance Requirements",
    sk: "Požiadavky na dodržiavanie predpisov",
  },
  "education.module2.resource1": {
    en: "Document Checklist Template",
    sk: "Šablóna kontrolného zoznamu dokumentov",
  },
  "education.module3.title": {
    en: "Negotiation and Conflict Resolution",
    sk: "Vyjednávanie a riešenie konfliktov",
  },
  "education.module3.duration": {
    en: "7 lessons • 2.5 hours",
    sk: "7 lekcií • 2,5 hodiny",
  },
  "education.module3.lesson1": {
    en: "Advanced Negotiation Strategies",
    sk: "Pokročilé vyjednávacie stratégie",
  },
  "education.module3.lesson2": {
    en: "Resolving Common Settlement Disputes",
    sk: "Riešenie bežných sporov pri vysporiadaní",
  },
  "education.module3.resource1": {
    en: "Negotiation Preparation Worksheet",
    sk: "Pracovný list na prípravu vyjednávania",
  },
  "education.module4.title": {
    en: "Risk Management and Problem Solving",
    sk: "Riadenie rizík a riešenie problémov",
  },
  "education.module4.duration": {
    en: "6 lessons • 2 hours",
    sk: "6 lekcií • 2 hodiny",
  },
  "education.module4.lesson1": {
    en: "Identifying and Mitigating Settlement Risks",
    sk: "Identifikácia a zmierňovanie rizík vysporiadania",
  },
  "education.module4.lesson2": {
    en: "Case Studies: Complex Settlement Scenarios",
    sk: "Prípadové štúdie: Komplexné scenáre vysporiadania",
  },
  "education.module4.resource1": {
    en: "Risk Assessment Matrix",
    sk: "Matica hodnotenia rizík",
  },
  "education.module5.title": {
    en: "Advanced Settlement Strategies",
    sk: "Pokročilé stratégie vysporiadania",
  },
  "education.module5.duration": {
    en: "8 lessons • 3.5 hours",
    sk: "8 lekcií • 3,5 hodiny",
  },
  "education.module5.lesson1": {
    en: "Complex Property Settlements",
    sk: "Komplexné vysporiadania nehnuteľností",
  },
  "education.module5.lesson2": {
    en: "International Settlement Considerations",
    sk: "Aspekty medzinárodného vysporiadania",
  },
  "education.module5.resource1": {
    en: "Advanced Settlement Strategy Guide",
    sk: "Príručka pokročilých stratégií vysporiadania",
  },
  "education.testimonialsTitle": {
    en: "What Our Students Say",
    sk: "Čo hovoria naši študenti",
  },
  "education.testimonial1.text": {
    en: "This course completely transformed my approach to real estate settlements. The practical strategies and document templates alone were worth the investment.",
    sk: "Tento kurz úplne zmenil môj prístup k vysporiadaniu nehnuteľností. Praktické stratégie a šablóny dokumentov samotné stáli za investíciu.",
  },
  "education.testimonial1.name": {
    en: "Martin Kováč",
    sk: "Martin Kováč",
  },
  "education.testimonial1.role": {
    en: "Real Estate Agent",
    sk: "Realitný agent",
  },
  "education.testimonial2.text": {
    en: "As a property owner dealing with a complex settlement, this course gave me the confidence and knowledge to navigate the process successfully. Highly recommended!",
    sk: "Ako vlastník nehnuteľnosti riešiaci zložité vysporiadanie mi tento kurz dal sebavedomie a znalosti na úspešné zvládnutie procesu. Vrelo odporúčam!",
  },
  "education.testimonial2.name": {
    en: "Jana Nováková",
    sk: "Jana Nováková",
  },
  "education.testimonial2.role": {
    en: "Property Owner",
    sk: "Vlastníčka nehnuteľnosti",
  },
  "education.testimonial3.text": {
    en: "The course was absolutely worth it. The coaching sessions helped me apply the concepts to my specific situation and saved me thousands of euros.",
    sk: "Kurz sa absolútne oplatil. Koučovacie sedenia mi pomohli aplikovať koncepty na moju konkrétnu situáciu a ušetrili mi tisíce eur.",
  },
  "education.testimonial3.name": {
    en: "Peter Horváth",
    sk: "Peter Horváth",
  },
  "education.testimonial3.role": {
    en: "Property Investor",
    sk: "Investor do nehnuteľností",
  },
  "education.faqTitle": {
    en: "Frequently Asked Questions",
    sk: "Často kladené otázky",
  },
  "education.faq1.question": {
    en: "Who is this course for?",
    sk: "Pre koho je tento kurz určený?",
  },
  "education.faq1.answer": {
    en: "This course is designed for real estate agents, property owners, investors, and anyone involved in property transactions who wants to master the settlement process. No prior experience is required.",
    sk: "Tento kurz je určený pre realitných agentov, vlastníkov nehnuteľností, investorov a každého, kto sa podieľa na transakciách s nehnuteľnosťami a chce zvládnuť proces vysporiadania. Nie sú potrebné žiadne predchádzajúce skúsenosti.",
  },
  "education.faq2.question": {
    en: "How long do I have access to the course?",
    sk: "Ako dlho mám prístup ku kurzu?",
  },
  "education.faq2.answer": {
    en: "You receive lifetime access to all course materials and all future updates. Once you enroll, you'll always have access to the content.",
    sk: "Získavate doživotný prístup ku všetkým materiálom kurzu a všetkým budúcim aktualizáciám. Po zápise budete mať vždy prístup k obsahu.",
  },
  "education.faq3.question": {
    en: "Is there a payment plan available?",
    sk: "Je k dispozícii splátkový kalendár?",
  },
  "education.faq3.answer": {
    en: "Currently, we only offer a one-time payment option. However, we do provide a 30-day money-back guarantee if you're not satisfied with the course.",
    sk: "V súčasnosti ponúkame iba možnosť jednorazovej platby. Poskytujeme však 30-dňovú záruku vrátenia peňazí, ak nie ste s kurzom spokojní.",
  },
  "education.faq4.question": {
    en: "Is there a money-back guarantee?",
    sk: "Existuje záruka vrátenia peňazí?",
  },
  "education.faq4.answer": {
    en: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course for any reason, simply contact us within 30 days of purchase for a full refund.",
    sk: "Áno, ponúkame 30-dňovú záruku vrátenia peňazí. Ak nie ste z akéhokoľvek dôvodu spokojní s kurzom, jednoducho nás kontaktujte do 30 dní od nákupu a dostanete plnú refundáciu.",
  },
  "education.faq5.question": {
    en: "How much time should I dedicate to the course each week?",
    sk: "Koľko času by som mal venovať kurzu každý týždeň?",
  },
  "education.faq5.answer": {
    en: "We recommend dedicating 3-5 hours per week to get the most out of the course. However, since it's self-paced, you can adjust your schedule according to your availability.",
    sk: "Odporúčame venovať 3-5 hodín týždenne, aby ste z kurzu vyťažili čo najviac. Keďže však postupujete vlastným tempom, môžete si upraviť rozvrh podľa svojich možností.",
  },
  "education.ctaTitle": {
    en: "Transform Your Real Estate Settlement Skills",
    sk: "Transformujte svoje zručnosti v oblasti vysporiadania nehnuteľností",
  },
  "education.ctaDescription": {
    en: "Join hundreds of successful students who have mastered the art of real estate settlement. Enroll today and take your skills to the next level.",
    sk: "Pripojte sa k stovkám úspešných študentov, ktorí zvládli umenie vysporiadania nehnuteľností. Zapíšte sa ešte dnes a posuňte svoje zručnosti na vyššiu úroveň.",
  },
  "education.ctaPoint1": {
    en: "Risk-free with our 30-day money-back guarantee",
    sk: "Bez rizika s našou 30-dňovou zárukou vrátenia peňazí",
  },
  "education.ctaPoint2": {
    en: "Earn a professional certificate upon completion",
    sk: "Získajte profesionálny certifikát po absolvovaní",
  },
  "education.ctaPoint3": {
    en: "Join a community of real estate professionals",
    sk: "Pripojte sa ku komunite profesionálov v oblasti nehnuteľností",
  },
  "education.downloadSyllabus": {
    en: "Download Syllabus",
    sk: "Stiahnuť sylabus",
  },
  "education.instructorName": {
    en: "Ľub Oravec",
    sk: "Ľub Oravec",
  },
  "education.instructorTitle": {
    en: "Real Estate Settlement Expert & Course Instructor",
    sk: "Expert na vysporiadanie nehnuteľností & Inštruktor kurzu",
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

  //free package
  "services.free.first": {
    "en": "Property analysis",
    "sk": "Analýza nehnuteľnosti"
  },
  "services.free.second": {
    "en": "Good preparation is the foundation!",
    "sk": "Dobrá príprava je základ!"
  },
  "services.free.third": {
    "en": "Initial basic property analysis",
    "sk": "Úvodná základná analýza nehnuteľnosti"
  },
  "services.free.fift": {
    "en": "I will verify the ownership status listed in the land registry.",
    "sk": "Overím stav vlastníckych vzťahov na liste vlastníctva."
  },
  "services.free.sixt": {
    "en": "I will assess if the plot has access and check its potential use according to the zoning plan (if available).",
    "sk": "Posúdim, či je na pozemok prístup a zistím možnosti využitia v zmysle územného plánu (ak je vypracovaný)."
  },
  "services.free.seventh": {
    "en": "You will receive a clear recommendation on whether the project is promising or not.",
    "sk": "ískate jasné odporúčanie, či je projekt perspektívny alebo nie."
  },
  "services.free.eight": {
    en: "Free",
    sk: "Zdarma",
  },

  // Services page
  "services.mainTitle": {
    en: "Real Estate Settlement Services",
    sk: "Služby vysporiadania pozemkov a nehnuteľností",
  },
  "services.mainSubtitle": {
    en: "Professional property settlement solutions for all your needs",
    sk: "Profesionálne riešenia vysporiadania nehnuteľností pre všetky vaše potreby",
  },
  "services.mainDescription": {
    en: "Our comprehensive real estate settlement services provide end-to-end solutions for all your property transaction needs. With years of experience and expertise, we ensure smooth, legally compliant, and stress-free settlements for residential and commercial properties.",
    sk: "Vysporiadanie pozemkov znamená vyriešenie komplikovaných vlastníckych vzťahov, ktoré vám dnes znemožňujú nehnuteľnosť využívať, rozvíjať alebo výhodne predať. Ak ste zdedili, kúpili alebo dostali pozemok, no bránia vám v jeho využívaní mnohí vlastníci, neznámi spoluvlastníci či iné problematické zápisy na liste vlastníctva, pomôžem vám tieto prekážky rýchlo a efektívne odstrániť. Výsledkom vysporiadania nehnuteľnosti je výrazné zvýšenie hodnoty vášho majetku.",
  },
  "services.legalCompliance": {
    en: "Legal Compliance",
    sk: "Analýza nehnuteľností",
  },
  "services.legalComplianceDesc": {
    en: "All documentation meets legal requirements",
    sk: "dôkladnou analýzou nehnuteľnosti a listu vlastníctva",
  },
  "services.timelyProcessing": {
    en: "Timely Processing",
    sk: "Včasné spracovanie",
  },
  "services.timelyProcessingDesc": {
    en: "Efficient handling of all settlement steps",
    sk: "Efektívne zvládnutie všetkých krokov vysporiadania",
  },
  "services.riskManagement": {
    en: "Risk Management",
    sk: "Právne vedenie",
  },
  "services.riskManagementDesc": {
    en: "Identifying and mitigating potential issues",
    sk: "prípravou a vedením prípadných správnych a súdnych konaní",
  },
  "services.choosePackage": {
    en: "Choose the Right Package for Your Needs",
    sk: "Ponúkam tri úrovne spolupráce podľa vašich potrieb",
  },
  "services.freePackage": {
    en: "Choose the Right Package for Your Needs",
    sk: "Ponúkam tri úrovne spolupráce podľa vašich potrieb",
  },

  // Basic package
  "services.basic.title": {
    en: "Basic Package",
    sk: "Rozšírená analýza",
  },
  "services.basic.payment": {
    en: "One-time payment",
    sk: "Jednorazová platba",
  },
  "services.basic.feature1": {
    en: "Standard documentation preparation",
    sk: "Detailné overenie vlastníctva, tiarch a prístupu",
  },
  "services.basic.feature2": {
    en: "Basic legal compliance check",
    sk: "Vyhodnotenie územného plánu + vyjadrenia obce",
  },
  "services.basic.feature3": {
    en: "Email support",
    sk: "Analýza dostupnosti inžinierskych sietí",
  },
  "services.basic.feature4": {
    en: "Settlement coordination",
    sk: "Biznis plán s nákladmi, ziskom a časovým odhadom",
  },
  "services.basic.missing1": {
    en: "Advanced risk assessment",
    sk: "Pokročilé hodnotenie rizík",
  },
  "services.basic.missing2": {
    en: "Priority processing",
    sk: "Prioritné spracovanie",
  },
  "services.basic.select": {
    en: "Select Basic",
    sk: "Vybrať ponuku",
  },

  // Standard package
  "services.standard.title": {
    en: "Standard Package",
    sk: "Osobný mentoring pri vysporiadaní",
  },
  "services.standard.mostPopular": {
    en: "Most Popular",
    sk: "cca 10 €/m², min. 4000 €",
  },
  "services.standard.feature1": {
    en: "Comprehensive documentation",
    sk: "Osobné sprevádzanie celým procesom vysporiadania",
  },
  "services.standard.feature2": {
    en: "Full legal compliance verification",
    sk: "Jasné inštrukcie na každý krok",
  },
  "services.standard.feature3": {
    en: "Email and phone support",
    sk: "Riešenie vzniknutých situácií počas procesu",
  },
  "services.standard.feature4": {
    en: "Settlement coordination",
    sk: "Prístup k vzorovým dokumentom a know-how",
  },
  "services.standard.feature5": {
    en: "Basic risk assessment",
    sk: "Získate moju expertízu a dlhoročné skúsenosti",
  },
  "services.standard.missing1": {
    en: "",
    sk: "",
  },
  "services.standard.select": {
    en: "Select Standard",
    sk: "Vybrať ponuku",
  },

  // Premium package
  "services.premium.title": {
    en: "Premium Package",
    sk: "Individuálna spolupráca",
  },
  "services.premium.price": {
    en: "Individual pricing",
    sk: "Individuálna cena",
  },
  "services.premium.feature1": {
    en: "Premium documentation package",
    sk: "Spoluúčasť na projekte s vopred dohodnutými podielmi",
  },
  "services.premium.feature2": {
    en: "Advanced legal compliance verification",
    sk: "Poskytnutie skúseností, právnej aj finančnej podpory",
  },
  "services.premium.feature3": {
    en: "24/7 priority support",
    sk: "Ideálne pri nedostatku kapitálu alebo skúseností",
  },
  "services.premium.feature4": {
    en: "VIP settlement coordination",
    sk: "Zamerané na realizáciu investičných príležitostí",
  },
  "services.premium.feature5": {
    en: "",
    sk: "",
  },
  "services.premium.feature6": {
    en: "",
    sk: "",
  },
  "services.premium.select": {
    en: "Select Premium",
    sk: "Vybrať ponuku",
  },

  "services.vzdelanie.title": {
    en: "Learning course",
    sk: "Vzdelávací kurz",
  },
  "services.vzdelanie.price": {
    en: "Individual pricing",
    sk: "Individuálna cena",
  },
  "services.vzdelanie.feature1": {
    en: "Intense course with professional",
    sk: "Intenzívne školenie pod vedením odborníka",
  },
  "services.vzdelanie.feature2": {
    en: "Practical exercises and studies",
    sk: "Praktické cvičenia a prípadové štúdie",
  },
  "services.vzdelanie.feature3": {
    en: "Certificate",
    sk: "Osvedčenie o absolvovaní",
  },
  "services.vzdelanie.vybrat": {
    en: "Select course",
    sk: "Zvoliť kurz",
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
    en: "AUTO-VALAS GROUP, s.r.o. ",
    sk: "AUTO-VALAS GROUP, s.r.o. ",
  },
  "references.client1.position": {
    en: "Property Owner",
    sk: "",
  },
  "references.client1.testimonial": {
    en: "Ľub provided exceptional service in settling our family property. His expertise and attention to detail made the entire process smooth and stress-free.",
    sk: "V Košiciach sme hľadali pozemok pre nový autosalón. Lubo našiel vhodné územie s vyše 40 spoluvlastníkmi. Všetko vyriešil a dnes tam stojí...",
  },
  "references.client2.name": {
    en: "APIL s.r.o.",
    sk: "APIL s.r.o.",
  },
  "references.client2.position": {
    en: "Real Estate Investor",
    sk: "",
  },
  "references.client2.testimonial": {
    en: "I've worked with many real estate experts, but Ľub's professionalism and knowledge stand out. His expertise reports are thorough and have been invaluable for my investment decisions.",
    sk: "Dlho som chcel rozšíriť areál. Susedný pozemok mal dvoch vlastníkov, jeden už nežil. S Lubom sme to právne vyriešili včas a za dohodnutú...",
  },
  "references.client3.name": {
    en: "ODEKO",
    sk: "ODEKO",
  },
  "references.client3.position": {
    en: "Business Owner",
    sk: "",
  },
  "references.client3.testimonial": {
    en: "Ľubo helped us navigate a complex commercial property settlement. His expertise and guidance were crucial in achieving a favorable outcome for all parties involved.",
    sk: "Spolupracujeme dlhodobo pri akvizícií pozemkov pre naše developerské projekty.",
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
  // Contact form package selection
  "contact.form.packageLabel": {
    en: "Service Package",
    sk: "Balík služieb",
  },
  "contact.form.packagePlaceholder": {
    en: "Select a package (optional)",
    sk: "Vyberte si balík (voliteľné)",
  },
  "contact.form.noPackage": {
    en: "No package - General inquiry",
    sk: "Iné / Konzultácia",
  },
  "contact.form.basicPackage": {
    en: "Basic Package (€499)",
    sk: "Rozšírená analýza nehnuteľnosti (€1000)",
  },
  "contact.form.standardPackage": {
    en: "Standard Package (€899)",
    sk: "Osobný mentoring pri vysporiadaní  (€8000+)",
  },
  "contact.form.premiumPackage": {
    en: "Premium Package (€1,499)",
    sk: "Individuálna spolupráca (individuálna cena)",
  },
  "contact.form.course": {
    en: "Premium Package (€1,499)",
    sk: "Vzdelávací kurz",
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

  "footer.hodnota": {
    en: "Professional property settlement",
    sk: "Profesionálne vysporiadanie majetku",
  },

  // Footer
  "footer.rights": {
    en: "All rights reserved",
    sk: "Všetky práva vyhradené",
  },
  "footer.privacy": {
    en: "Privacy Policy",
    sk: "Zásady ochrany osobných údajov",
  },
  "footer.terms": {
    en: "Cookie Policy",
    sk: "Zásady používania súborov cookie",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("sk")

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
