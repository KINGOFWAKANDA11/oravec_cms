"use client"

import { useTranslation } from "./language-provider"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Home, FileText, MessageSquare, Scale } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Services() {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle patterns */}
        <div className="absolute right-0 top-0 h-64 w-64 bg-emerald-200 rounded-full opacity-[0.07] blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute left-0 bottom-0 h-64 w-64 bg-sage-200 rounded-full opacity-[0.07] blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        {/* Architectural elements */}
        <svg
          className="absolute top-1/4 left-0 h-40 w-40 text-sage-500 opacity-[0.03]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="10" width="80" height="80" rx="8" stroke="currentColor" strokeWidth="2" />
          <rect x="25" y="25" width="50" height="50" rx="4" stroke="currentColor" strokeWidth="2" />
          <rect x="40" y="40" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        </svg>

        <svg
          className="absolute bottom-1/4 right-0 h-40 w-40 text-emerald-500 opacity-[0.03]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" />
        </svg>

        {/* Dotted pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-dot-black/[0.2]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            {t("services.title")}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-zinc-600">
            {t("services.description")}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Real Estate Settlement Card */}
          <motion.div variants={itemVariants} className="rounded-lg shadow-lg relative overflow-hidden h-[320px] group">
            {/* Background Image */}
            <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500">
              <Image src="/images/service-settlement.jpg" alt="Real Estate Settlement" fill className="object-cover" />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
            </div>

            <div className="relative h-full p-8 flex flex-col">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100/90 backdrop-blur-sm rounded-full mb-4">
                <Home className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t("services.settlement.title")}</h3>
              <p className="text-zinc-200">{t("services.settlement.description")}</p>
              <div className="mt-auto pt-4">
                <Link
                  href="/services/settlement"
                  className="inline-flex items-center text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors"
                >
                  Zistiť viac
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Property Expertise Card */}
          <motion.div variants={itemVariants} className="rounded-lg shadow-lg relative overflow-hidden h-[320px] group">
            {/* Background Image */}
            <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500">
              <Image src="/images/service-expertise.jpg" alt="Property Expertise" fill className="object-cover" />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
            </div>

            <div className="relative h-full p-8 flex flex-col">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-100/90 backdrop-blur-sm rounded-full mb-4">
                <FileText className="h-6 w-6 text-sage-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t("services.expertise.title")}</h3>
              <p className="text-zinc-200">{t("services.expertise.description")}</p>
              <div className="mt-auto pt-4">
                <Link
                  href="/services/expertise"
                  className="inline-flex items-center text-sage-400 text-sm font-medium hover:text-sage-300 transition-colors"
                >
                  Zistiť viac
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Consultation Card */}
          <motion.div variants={itemVariants} className="rounded-lg shadow-lg relative overflow-hidden h-[320px] group">
            {/* Background Image */}
            <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500">
              <Image src="/images/service-consultation.jpg" alt="Consultation" fill className="object-cover" />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
            </div>

            <div className="relative h-full p-8 flex flex-col">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100/90 backdrop-blur-sm rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t("services.consultation.title")}</h3>
              <p className="text-zinc-200">{t("services.consultation.description")}</p>
              <div className="mt-auto pt-4">
                <Link
                  href="/services/consultation"
                  className="inline-flex items-center text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors"
                >
                  Zistiť viac
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Legal Support Card */}
          <motion.div variants={itemVariants} className="rounded-lg shadow-lg relative overflow-hidden h-[320px] group">
            {/* Background Image */}
            <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500">
              <Image src="/images/service-legal.jpg" alt="Legal Support" fill className="object-cover" />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
            </div>

            <div className="relative h-full p-8 flex flex-col">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-100/90 backdrop-blur-sm rounded-full mb-4">
                <Scale className="h-6 w-6 text-sage-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t("services.legal.title")}</h3>
              <p className="text-zinc-200">{t("services.legal.description")}</p>
              <div className="mt-auto pt-4">
                <Link
                  href="/services/legal"
                  className="inline-flex items-center text-sage-400 text-sm font-medium hover:text-sage-300 transition-colors"
                >
                  Zistiť viac
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
