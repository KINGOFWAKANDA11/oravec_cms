"use client"

import { useTranslation } from "./language-provider"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Building2, Users, CheckCircle, Trophy } from 'lucide-react'

export function About() {
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
    <section id="about" className="py-16 sm:py-24 md:py-32 mt-16 sm:mt-24 md:mt-32 bg-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-grid-black/[0.2]"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-100 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-sage-200 rounded-full opacity-20 blur-2xl translate-y-1/2 -translate-x-1/3"></div>

        {/* Abstract shapes */}
        <svg
          className="absolute top-10 right-10 w-24 h-24 text-emerald-200 opacity-20"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
          <path d="M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
          <path d="M50 30 L50 70" stroke="currentColor" strokeWidth="2" />
        </svg>

        <svg
          className="absolute bottom-10 left-10 w-32 h-32 text-sage-300 opacity-10"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" />
        </svg>
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
            {t("about.title")}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-zinc-600">
            {t("about.description")}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-4 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-lg text-center relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 border border-transparent"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                <Building2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-4xl font-bold text-zinc-900 mb-2">8+</h3>
              <p className="text-zinc-600">{t("about.experience")}</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-lg text-center relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-sage-200 border border-transparent"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-sage-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-4 group-hover:bg-sage-200 transition-colors duration-300">
                <Users className="h-8 w-8 text-sage-500" />
              </div>
              <h3 className="text-4xl font-bold text-zinc-900 mb-2">100 000 m2</h3>
              <p className="text-zinc-600">{t("about.clients")}</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-lg text-center relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 border border-transparent"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-4xl font-bold text-zinc-900 mb-2">€ 4,45 mil.</h3>
              <p className="text-zinc-600">{t("about.projects")}</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-lg text-center relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-sage-200 border border-transparent"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-sage-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-4 group-hover:bg-sage-200 transition-colors duration-300">
                <Trophy className="h-8 w-8 text-sage-500" />
              </div>
              <h3 className="text-4xl font-bold text-zinc-900 mb-2">€ 1,8 mil.</h3>
              <p className="text-zinc-600">{t("about.satisfaction")}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
