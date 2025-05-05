"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTranslation } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send, CheckCircle } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("")
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get the package from URL query parameters
    const packageParam = searchParams.get("package")
    if (packageParam) {
      setSelectedPackage(packageParam)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      {isSubmitted ? (
        <div className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-zinc-900 mb-2">Thank you for your message!</h3>
          <p className="text-zinc-600">I will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
              {t("contact.form.name")}
            </label>
            <Input id="name" type="text" required className="w-full bg-white text-zinc-900 border-zinc-200" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
              {t("contact.form.email")}
            </label>
            <Input id="email" type="email" required className="w-full bg-white text-zinc-900 border-zinc-200" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">
              {t("contact.form.phone")}
            </label>
            <Input id="phone" type="tel" className="w-full bg-white text-zinc-900 border-zinc-200" />
          </div>

          <div>
            <label htmlFor="package" className="block text-sm font-medium text-zinc-700 mb-1">
              {t("contact.form.packageLabel")}
            </label>
            <Select value={selectedPackage} onValueChange={setSelectedPackage}>
              <SelectTrigger className="w-full bg-white text-zinc-900 border-zinc-200">
                <SelectValue placeholder={t("contact.form.packagePlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">{t("contact.form.noPackage")}</SelectItem>
                <SelectItem value="basic">{t("contact.form.basicPackage")}</SelectItem>
                <SelectItem value="standard">{t("contact.form.standardPackage")}</SelectItem>
                <SelectItem value="premium">{t("contact.form.premiumPackage")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
              {t("contact.form.message")}
            </label>
            <Textarea id="message" required rows={5} className="w-full bg-white text-zinc-900 border-zinc-200" />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              <span className="flex items-center">
                {t("contact.form.submit")}
                <Send className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  )
}
