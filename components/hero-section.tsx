"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles, Heart } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-6 h-6 text-accent animate-float">
        <Sparkles className="w-full h-full" />
      </div>
      <div className="absolute top-40 right-20 w-8 h-8 text-primary animate-float" style={{ animationDelay: "1s" }}>
        <Heart className="w-full h-full" />
      </div>
      <div className="absolute bottom-40 left-20 w-5 h-5 text-secondary animate-float" style={{ animationDelay: "2s" }}>
        <Sparkles className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Hi, I'm <span className="text-primary">Isabela Ayn</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl">Web Designer & Developer ✨</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty">
              I design and build responsive, user-focused websites and digital solutions that improve visibility,
              engagement, and performance. Let's create something amazing together! 🌟
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl text-white font-semibold"
                style={{
                  background: "linear-gradient(135deg, oklch(0.55 0.18 35) 0%, oklch(0.65 0.15 140) 100%)",
                  color: "white",
                }}
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-background/80 backdrop-blur-sm"
              >
                <Download className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-2 shadow-2xl animate-pulse-glow">
                <Image
                  src="/images/profile2.png"
                  alt="Isabela Ayn M. Deocampo"
                  width={600}
                  height={600}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full animate-float"></div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/40 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -left-8 w-12 h-12 bg-secondary/25 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
