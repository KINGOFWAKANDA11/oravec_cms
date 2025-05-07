"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const { t, language, setLanguage } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-emerald-500">
              <span className="text-white">Ľubo</span>Oravec
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className={cn(
              "text-sm font-medium hover:text-emerald-500 transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              {t("nav.about")}
            </Link>
            <Link href="/#services" className={cn(
              "text-sm font-medium hover:text-emerald-500 transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              {t("nav.services")}
            </Link>
            <Link href="/#references" className={cn(
              "text-sm font-medium hover:text-emerald-500 transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              {t("nav.references")}
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium hover:text-emerald-500 transition-colors",
                pathname === "/contact" && "text-emerald-500",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              Kontakt
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")} className={cn(language === "en" && "bg-muted")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("sk")} className={cn(language === "sk" && "bg-muted")}>
                  Slovenčina
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link href="/contact">{t("nav.speak")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(
                  isScrolled ? "text-foreground" : "text-white"
                )}>
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")} className={cn(language === "en" && "bg-muted")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("sk")} className={cn(language === "sk" && "bg-muted")}>
                  Slovenčina
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-2">
            <Link
              href="/#about"
              className={cn(
                "block py-2 text-sm font-medium hover:text-emerald-500 transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/#services"
              className={cn(
                "block py-2 text-sm font-medium hover:text-emerald-500 transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.services")}
            </Link>
            <Link
              href="/#references"
              className={cn(
                "block py-2 text-sm font-medium hover:text-emerald-500 transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.references")}
            </Link>
            <Link
              href="/contact"
              className={cn(
                "block py-2 text-sm font-medium hover:text-emerald-500 transition-colors",
                pathname === "/contact" && "text-emerald-500",
                isScrolled ? "text-foreground" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
            <Button asChild className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.speak")}
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
