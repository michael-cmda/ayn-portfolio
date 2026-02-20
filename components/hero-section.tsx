"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Facebook, ArrowUpRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center bg-[#fbfafa] overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* TEXT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex-1 z-20 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4"
          >
            Based in San Francisco
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-8xl font-black text-black leading-[0.9] mb-6"
          >
            ISABELA <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #000" }}
            >
              AYN DEOCAMPO
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-black/60 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Crafting <span className="text-black font-bold">user-centric digital experiences</span> with pixel-perfect precision and modern design systems.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto rounded-none bg-black text-white hover:bg-primary h-14 px-8 font-bold group"
            >
              VIEW PROJECTS
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>

            <a
              href="/cv/Isabela-Ayn-CV.pdf"
              download="Isabela_Ayn_CV.pdf"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto rounded-none border-black/10 h-14 px-8 font-bold flex gap-2 hover:bg-black hover:text-white transition-all"
              >
                <FileText size={18} />
                DOWNLOAD CV
              </Button>
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
        <motion.div
  variants={fadeInUp}
  className="flex gap-8 items-center justify-center lg:justify-start"
>
  <a
    href="https://github.com/iadeocampo/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black/40 hover:text-black transition-colors flex items-center gap-2 text-sm font-bold tracking-widest"
  >
    <Github size={20} /> GITHUB
  </a>
  <a
    href="https://www.linkedin.com/in/isabela-ayn/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black/40 hover:text-[#0077b5] transition-colors flex items-center gap-2 text-sm font-bold tracking-widest"
  >
    <Linkedin size={20} /> LINKEDIN
  </a>
  <a
    href="https://www.facebook.com/isabela.aynd"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black/40 hover:text-[#1877f2] transition-colors flex items-center gap-2 text-sm font-bold tracking-widest"
  >
    <Facebook size={20} /> FACEBOOK
  </a>
</motion.div>
        </motion.div>

        {/* IMAGE AREA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[600px]">
            <div className="absolute inset-0 bg-primary/5 -rotate-6 rounded-3xl" />
            <Image
              src="/images/profile5.png"
              alt="Isabela Ayn"
              fill
              priority
              className="relative z-10 object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
