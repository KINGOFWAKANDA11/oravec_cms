"use client"

import { useTranslation } from "./language-provider"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
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
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-zinc-900 p-8 rounded-lg text-white"
    >
      <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 text-emerald-500">
        {t("contact.title")}
      </motion.h3>

      <motion.p variants={itemVariants} className="mb-8 text-zinc-300">
        {t("contact.description")}
      </motion.p>

      <div className="space-y-6">
        <motion.div variants={itemVariants} className="flex items-start">
          <div className="bg-zinc-800 p-3 rounded-full mr-4">
            <MapPin className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <h4 className="font-medium mb-1">{t("contact.info.address")}</h4>
            <p className="text-zinc-400">Daxnerova 9, 010 01 Žilina</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-start">
          <div className="bg-zinc-800 p-3 rounded-full mr-4">
            <Phone className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <h4 className="font-medium mb-1">{t("contact.info.phone")}</h4>
            <p className="text-zinc-400">+421 911 990 580</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-start">
          <div className="bg-zinc-800 p-3 rounded-full mr-4">
            <Mail className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <h4 className="font-medium mb-1">{t("contact.info.email")}</h4>
            <p className="text-zinc-400">info@lubooravec.sk</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-start">
          <div className="bg-zinc-800 p-3 rounded-full mr-4">
            <Clock className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <h4 className="font-medium mb-1">{t("contact.info.hours")}</h4>
            <p className="text-zinc-400">{t("contact.info.hours.value")}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
