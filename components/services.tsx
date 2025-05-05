"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

import { useTranslation } from "./language-provider"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Home, CheckCircle, X, Building, Crown, FileCheck, Clock, Shield } from "lucide-react"
import Image from "next/image"

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

        {/* Main Service Description */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-[300px]">
              <Image src="/images/service-settlement.jpg" alt={t("services.mainTitle")} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-end">
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{t("services.mainTitle")}</h3>
                  <p className="text-xl text-zinc-200">{t("services.mainSubtitle")}</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-zinc-700 mb-6">{t("services.mainDescription")}</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                    <FileCheck className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900">{t("services.legalCompliance")}</h4>
                    <p className="text-sm text-zinc-600">{t("services.legalComplianceDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                    <Clock className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900">{t("services.timelyProcessing")}</h4>
                    <p className="text-sm text-zinc-600">{t("services.timelyProcessingDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900">{t("services.riskManagement")}</h4>
                    <p className="text-sm text-zinc-600">{t("services.riskManagementDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Packages */}
        <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center flex flex-col gap-4 mb-8">
          <div className="mb-8">{t("services.choosePackage")}</div>
          <div className="w-full mx-auto p-6 space-y-6 rounded-2xl shadow-2xl border border-zinc-200">
            <h2 className="text-xl font-bold text-gray-800">Analýza nehnuteľnosti</h2>
            <p className="italic text-emerald-500">„Dobrá príprava je základ!“</p>
            <h3 className="font-semibold text-gray-700">Úvodná základná analýza nehnuteľnosti</h3>
            <ul className="text-sm pl-5 space-y-1 text-gray-700">
              <li>Overím stav vlastníckych vzťahov na liste vlastníctva.</li>
              <li>Posúdim, či je na pozemok prístup a zistím možnosti využitia v zmysle územného plánu (ak je vypracovaný).</li>
              <li>Získate jasné odporúčanie, či je projekt perspektívny alebo nie.</li>
            </ul>
            <div className="max-w-64 mx-auto">
            <p className="border-2 border-emerald-600 rounded-xl font-semibold text-green-600">Zdarma</p>
            </div>
          </div>
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Basic Package */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-zinc-200 hover:border-emerald-300 transition-colors duration-300 flex flex-col h-full"
          >
            <div className="relative h-[200px]">
              <Image
                src="/images/service-settlement.jpg"
                alt={t("services.basic.title")}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-emerald-800/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t("services.basic.title")}</h3>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-zinc-900">€1000</div>
                <p className="text-zinc-500">{t("services.basic.payment")}</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("services.basic.feature1")}</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("services.basic.feature2")}</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("services.basic.feature3")}</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("services.basic.feature4")}</p>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="/contact?package=basic">{t("services.basic.select")}</Link>
              </Button>
            </div>
          </motion.div>

          {/* Standard Package */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-emerald-500 flex flex-col h-full relative"
          >
            <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 text-sm font-medium">
              {t("services.standard.mostPopular")}
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/images/service-expertise.jpg"
                alt={t("services.standard.title")}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-emerald-800/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t("services.standard.title")}</h3>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-zinc-900">€4000+</div>
                <p className="text-zinc-500">{t("services.basic.payment")}</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("services.standard.feature1")}</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("services.standard.feature2")}</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("services.standard.feature3")}</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("services.standard.feature4")}</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("services.standard.feature5")}</p>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="/contact?package=standard">{t("services.standard.select")}</Link>
              </Button>
            </div>
          </motion.div>

          {/* Premium Package */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-zinc-200 hover:border-emerald-300 transition-colors duration-300 flex flex-col h-full"
          >
            <div className="relative h-[200px]">
              <Image src="/images/service-legal.jpg" alt={t("services.premium.title")} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-emerald-800/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t("services.premium.title")}</h3>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-zinc-900">Individuálna cena</div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("services.premium.feature1")}</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("services.premium.feature2")}</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("services.premium.feature3")}</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("services.premium.feature4")}</p>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="/contact?package=premium">{t("services.premium.select")}</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
