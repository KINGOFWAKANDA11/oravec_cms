"use client"

import { useTranslation } from "./language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Home, FileText, Key, Building, Landmark, MapPin, Briefcase, Shield } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { useEffect, useState } from "react"

export function Hero() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[120vh] sm:min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dark-texture-background.jpg"
          alt="Background texture"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-white/[0.2]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.05, scale: 1, rotate: 0 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 w-[300px] h-[300px] border border-white/20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 0.03, scale: 1, rotate: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute top-40 left-40 w-[200px] h-[200px] border border-white/20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-40 left-1/4 w-[150px] h-[150px] bg-emerald-500/20 rounded-full blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 0.1, width: "30%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/3 left-0 h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 0.1, width: "20%" }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute top-1/3 left-0 mt-4 h-[1px] bg-gradient-to-r from-sage-500/30 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 0.1, height: "20%" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute top-1/3 left-[10%] w-[1px] bg-gradient-to-b from-emerald-500/30 to-transparent"
        />
      </div>

      <div className="absolute right-[15%] lg:right-[20%] bottom-0 z-10 h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[20%] right-[30%] w-[450px] h-[450px] rounded-full bg-sage-500/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-[35%] right-[35%] w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-[25%] right-[25%] w-[350px] h-[350px] rounded-full bg-emerald-500/30 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20 md:pt-0">
        <div className="block md:hidden w-full mb-8">
          {/* Mobile image section stays unchanged */}
        </div>

        <div className="grid lg:grid-cols-2 gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:pr-12"
          >
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-emerald-500 mb-4 max-w-[100px]"
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {mounted && (
                  <TypeAnimation
                    sequence={[t("hero.title"), 1000]}
                    wrapper="span"
                    speed={50}
                    repeat={0}
                    cursor={false}
                    className="block"
                  />
                )}
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="text-zinc-400"
                >
                  {t("hero.subtitle")}
                </motion.span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-zinc-300 max-w-md"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="flex flex-wrap items-center text-lg text-emerald-400 font-medium min-h-[32px]"
            >
              <span className="text-white mr-2">Specializing in:</span>
              {mounted && (
                <TypeAnimation
                  sequence={[
                    "Property Settlements",
                    2000,
                    "Real Estate Expertise",
                    2000,
                    "Legal Documentation",
                    2000,
                    "Property Valuation",
                    2000,
                    "Contract Reviews",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className="text-emerald-400"
                />
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg h-auto group w-full sm:w-auto"
              >
                <Link href="/contact">
                  {t("hero.cta")}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Desktop icons section stays unchanged */}
        </div>
      </div>

      <div className="absolute right-[15%] lg:right-[20%] bottom-0 z-20 h-[90%] lg:h-[95%] hidden md:flex items-end">
        {/* Person image section stays unchanged */}
      </div>

      {/* Green accent bar with animated quote */}
      <div className="absolute bottom-0 left-0 right-0 bg-sage-500 py-6 sm:py-8 z-10">
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center">
            <motion.div
              initial={{ scale: 0, y: 0 }}
              animate={{ scale: 1, y: -30, rotate: [0, 10, 0] }}
              transition={{ duration: 0.5, delay: 3.5 }}
              className="text-[80px] sm:text-[120px] font-serif italic text-white mr-4 absolute -top-12 sm:-top-16 left-2 sm:left-4 opacity-90"
            >
              "
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.8 }}
              className="text-white text-base sm:text-lg md:text-xl italic font-medium pl-10 sm:pl-12"
            >
              {t("hero.quote")}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Help section stays unchanged */}
    </section>
  )
}