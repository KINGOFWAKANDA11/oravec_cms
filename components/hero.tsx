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
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-white/[0.2]"></div>
        </div>

        {/* Abstract shapes */}
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

        {/* Architectural line elements */}
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

      {/* Decorative blobs positioned directly behind the person */}
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
        {/* Mobile image in circular frame - visible only on small screens */}
        <div className="block md:hidden w-full mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mx-auto"
          >
            {/* Decorative rings around the circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border-2 border-emerald-500/30 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-sage-500/20"></div>

            {/* Main circular container */}
            <div className="relative w-[250px] h-[250px] mx-auto rounded-full overflow-hidden border-4 border-emerald-600/20 shadow-lg shadow-emerald-900/30">
              {/* Background gradient inside the circle */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 to-sage-900/40"></div>

              {/* The image itself */}
              <div className="relative w-full h-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_eraser%20%281%29-keZkM74S16DEDXA1jwvPGIuepMd8vf.png"
                  alt="Ľub Oravec"
                  fill
                  className="object-cover object-top scale-[1.2] translate-y-5"
                  priority
                />
              </div>
            </div>

            {/* Small decorative circles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute top-5 right-[30%] w-8 h-8 rounded-full bg-emerald-500/30 backdrop-blur-sm border border-emerald-500/40"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="absolute bottom-10 right-[20%] w-6 h-6 rounded-full bg-sage-500/30 backdrop-blur-sm border border-sage-500/40"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="absolute bottom-20 left-[25%] w-10 h-10 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30"
            ></motion.div>
          </motion.div>
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

            {/* Typing animation for services */}
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

          {/* Floating icons in a half-circle - desktop only */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0">
              {/* Half-circle of icons */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
                {/* Icon positions remain the same */}
                {/* Icon 1 - Top of arc */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30">
                    <Home className="h-5 w-5 text-emerald-400" />
                  </div>
                </motion.div>

                {/* Icon 2 - 30 degrees */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute top-[6.7%] right-[25%] -translate-y-1/2"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-sage-500/20 backdrop-blur-sm rounded-full border border-sage-500/30">
                    <FileText className="h-4 w-4 text-sage-400" />
                  </div>
                </motion.div>

                {/* Icon 3 - 60 degrees */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="absolute top-[25%] right-[6.7%] -translate-y-1/2"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30">
                    <Key className="h-6 w-6 text-emerald-400" />
                  </div>
                </motion.div>

                {/* Icon 4 - 90 degrees (right middle) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-sage-500/20 backdrop-blur-sm rounded-full border border-sage-500/30">
                    <Building className="h-5 w-5 text-sage-400" />
                  </div>
                </motion.div>

                {/* Icon 5 - 120 degrees */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="absolute bottom-[25%] right-[6.7%] translate-y-1/2"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30">
                    <Landmark className="h-4 w-4 text-emerald-400" />
                  </div>
                </motion.div>

                {/* Icon 6 - 150 degrees */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                  className="absolute bottom-[6.7%] right-[25%] translate-y-1/2"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-sage-500/20 backdrop-blur-sm rounded-full border border-sage-500/30">
                    <MapPin className="h-5 w-5 text-sage-400" />
                  </div>
                </motion.div>

                {/* Icon 7 - 180 degrees (bottom) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30">
                    <Briefcase className="h-6 w-6 text-emerald-400" />
                  </div>
                </motion.div>

                {/* Icon 8 - 210 degrees */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                  className="absolute bottom-[6.7%] left-[25%] translate-y-1/2"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-sage-500/20 backdrop-blur-sm rounded-full border border-sage-500/30">
                    <Shield className="h-4 w-4 text-sage-400" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Person image - positioned more toward the middle - desktop only */}
      <div className="absolute right-[15%] lg:right-[20%] bottom-0 z-20 h-[90%] lg:h-[95%] hidden md:flex items-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
          style={{ height: "100%" }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_eraser%20%281%29-keZkM74S16DEDXA1jwvPGIuepMd8vf.png"
            alt="Ľub Oravec"
            width={600}
            height={1000}
            className="h-full w-auto object-contain object-bottom max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-none"
            priority
          />
        </motion.div>
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

      {/* Help section */}
      <div className="absolute -bottom-24 sm:-bottom-32 left-0 right-0 bg-white py-8 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3 sm:mb-4"
          >
            {t("help.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto"
          >
            {t("help.description")}
          </motion.p>
        </div>
      </div>
    </section>
  )
}