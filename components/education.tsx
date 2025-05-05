"use client"

import { useTranslation } from "./language-provider"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  GraduationCap,
  CheckCircle,
  Calendar,
  Clock,
  Users,
  Award,
  FileText,
  Video,
  Download,
  ArrowRight,
  Star,
  Shield,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export function Education() {
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
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle patterns */}
        <div className="absolute left-0 top-0 h-64 w-64 bg-emerald-200 rounded-full opacity-[0.07] blur-3xl -translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute right-0 bottom-0 h-64 w-64 bg-sage-200 rounded-full opacity-[0.07] blur-3xl translate-y-1/2 translate-x-1/3"></div>

        {/* Academic elements */}
        <svg
          className="absolute top-1/4 right-0 h-40 w-40 text-emerald-500 opacity-[0.03]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 10L90 30L50 50L10 30L50 10Z" stroke="currentColor" strokeWidth="2" />
          <path d="M25 40V70" stroke="currentColor" strokeWidth="2" />
          <path d="M90 30V60" stroke="currentColor" strokeWidth="2" />
          <path d="M50 50V80" stroke="currentColor" strokeWidth="2" />
          <path d="M25 70C25 75 35 85 50 85C65 85 75 75 75 70" stroke="currentColor" strokeWidth="2" />
        </svg>

        <svg
          className="absolute bottom-1/4 left-0 h-40 w-40 text-sage-500 opacity-[0.03]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="20" y="20" width="60" height="60" rx="5" stroke="currentColor" strokeWidth="2" />
          <path d="M30 40 L70 40" stroke="currentColor" strokeWidth="2" />
          <path d="M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
          <path d="M30 60 L70 60" stroke="currentColor" strokeWidth="2" />
          <path d="M30 70 L50 70" stroke="currentColor" strokeWidth="2" />
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
          <div className="inline-flex items-center justify-center mb-4">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-3 py-1 text-sm font-medium rounded-full">
              {t("education.badge")}
            </Badge>
          </div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            {t("education.title")}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-zinc-600 text-lg">
            {t("education.description")}
          </motion.p>
        </motion.div>

        {/* Course Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">{t("education.courseTitle")}</h3>
              <p className="text-zinc-600 mb-6">{t("education.courseDescription")}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-emerald-500 mr-2" />
                  <span className="text-zinc-700">{t("education.duration")}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-emerald-500 mr-2" />
                  <span className="text-zinc-700">{t("education.startDate")}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-emerald-500 mr-2" />
                  <span className="text-zinc-700">{t("education.students")}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">{t("education.tag1")}</Badge>
                <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">{t("education.tag2")}</Badge>
                <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">{t("education.tag3")}</Badge>
                <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">{t("education.tag4")}</Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("education.benefit1")}</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("education.benefit2")}</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("education.benefit3")}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div variants={itemVariants} className="relative rounded-lg overflow-hidden shadow-xl">
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-200 rounded-full opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-sage-200 rounded-full opacity-70"></div>

              {/* Image container with border */}
              <div className="relative z-10 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?key=xdwat"
                    alt="Real Estate Education Course"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-4 shadow-lg cursor-pointer hover:bg-white transition-colors">
                    <Video className="h-8 w-8 text-emerald-600" />
                  </div>
                </div>

                {/* Caption at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-medium">{t("education.videoCaption")}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Pricing Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-emerald-500 relative">
            <div className="absolute -top-4 right-4 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              {t("education.limitedOffer")}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h4 className="text-xl font-bold text-zinc-900">{t("education.courseName")}</h4>
                <p className="text-zinc-600">{t("education.courseShortDescription")}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-zinc-900">€699</div>
                <p className="text-zinc-500 text-sm">{t("education.oneTimePayment")}</p>
              </div>
            </div>

            <hr className="my-6" />

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-zinc-700">{t("education.feature1")}</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-zinc-700">{t("education.feature2")}</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-zinc-700">{t("education.feature3")}</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-zinc-700">{t("education.feature4")}</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-zinc-700">{t("education.feature5")}</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-zinc-700">{t("education.feature6")}</p>
              </div>
            </div>

            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 h-auto text-lg">
              {t("education.enrollNow")}
            </Button>

            <p className="text-center text-zinc-500 text-sm mt-4">{t("education.moneyBackGuarantee")}</p>
          </div>
        </motion.div>

        {/* Course Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mb-8">
            {t("education.courseContentTitle")}
          </motion.h3>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="module-1">
                <AccordionTrigger className="px-6 py-4 hover:bg-zinc-50">
                  <div className="flex items-center">
                    <div className="bg-emerald-100 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium">{t("education.module1.title")}</h4>
                      <p className="text-sm text-zinc-500">{t("education.module1.duration")}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="pl-11 space-y-3">
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module1.lesson1")}</p>
                    </div>
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module1.lesson2")}</p>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module1.resource1")}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="module-2">
                <AccordionTrigger className="px-6 py-4 hover:bg-zinc-50">
                  <div className="flex items-center">
                    <div className="bg-emerald-100 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium">{t("education.module2.title")}</h4>
                      <p className="text-sm text-zinc-500">{t("education.module2.duration")}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="pl-11 space-y-3">
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module2.lesson1")}</p>
                    </div>
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module2.lesson2")}</p>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module2.resource1")}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="module-3">
                <AccordionTrigger className="px-6 py-4 hover:bg-zinc-50">
                  <div className="flex items-center">
                    <div className="bg-emerald-100 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium">{t("education.module3.title")}</h4>
                      <p className="text-sm text-zinc-500">{t("education.module3.duration")}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="pl-11 space-y-3">
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module3.lesson1")}</p>
                    </div>
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module3.lesson2")}</p>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module3.resource1")}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="module-4">
                <AccordionTrigger className="px-6 py-4 hover:bg-zinc-50">
                  <div className="flex items-center">
                    <div className="bg-emerald-100 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      4
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium">{t("education.module4.title")}</h4>
                      <p className="text-sm text-zinc-500">{t("education.module4.duration")}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="pl-11 space-y-3">
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module4.lesson1")}</p>
                    </div>
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module4.lesson2")}</p>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module4.resource1")}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="module-5">
                <AccordionTrigger className="px-6 py-4 hover:bg-zinc-50">
                  <div className="flex items-center">
                    <div className="bg-emerald-100 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      5
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium">{t("education.module5.title")}</h4>
                      <p className="text-sm text-zinc-500">{t("education.module5.duration")}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="pl-11 space-y-3">
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module5.lesson1")}</p>
                    </div>
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module5.lesson2")}</p>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-zinc-500 mr-2" />
                      <p className="text-zinc-700">{t("education.module5.resource1")}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mb-8">
            {t("education.testimonialsTitle")}
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-zinc-700 mb-4">"{t("education.testimonial1.text")}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3">
                  {t("education.testimonial1.name").charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900">{t("education.testimonial1.name")}</h4>
                  <p className="text-sm text-zinc-500">{t("education.testimonial1.role")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-zinc-700 mb-4">"{t("education.testimonial2.text")}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 font-bold mr-3">
                  {t("education.testimonial2.name").charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900">{t("education.testimonial2.name")}</h4>
                  <p className="text-sm text-zinc-500">{t("education.testimonial2.role")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-zinc-700 mb-4">"{t("education.testimonial3.text")}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3">
                  {t("education.testimonial3.name").charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900">{t("education.testimonial3.name")}</h4>
                  <p className="text-sm text-zinc-500">{t("education.testimonial3.role")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mb-8">
            {t("education.faqTitle")}
          </motion.h3>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-left font-medium text-zinc-900">
                  {t("education.faq1.question")}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700">{t("education.faq1.answer")}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-left font-medium text-zinc-900">
                  {t("education.faq2.question")}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700">{t("education.faq2.answer")}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-left font-medium text-zinc-900">
                  {t("education.faq3.question")}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700">{t("education.faq3.answer")}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-left font-medium text-zinc-900">
                  {t("education.faq4.question")}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700">{t("education.faq4.answer")}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-left font-medium text-zinc-900">
                  {t("education.faq5.question")}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700">{t("education.faq5.answer")}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-emerald-50 rounded-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">{t("education.ctaTitle")}</h3>
              <p className="text-zinc-700 mb-6">{t("education.ctaDescription")}</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("education.ctaPoint1")}</p>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("education.ctaPoint2")}</p>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-700">{t("education.ctaPoint3")}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white py-6 h-auto text-lg flex-1">
                  {t("education.enrollNow")} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-6 h-auto text-lg flex-1"
                >
                  {t("education.downloadSyllabus")} <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?key=zv8uc"
                  alt="Join our real estate education program"
                  fill
                  className="object-cover"
                />

                {/* Overlay with pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/30 to-transparent">
                  <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full bg-dot-white/[0.3]"></div>
                  </div>
                </div>

                {/* Caption at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="h-6 w-6 text-emerald-400 mr-2" />
                    <span className="text-white font-medium text-lg">{t("education.instructorName")}</span>
                  </div>
                  <p className="text-zinc-200">{t("education.instructorTitle")}</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-200 rounded-full opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-sage-200 rounded-full opacity-70"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
