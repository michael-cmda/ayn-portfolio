"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Calendar, Briefcase, ChevronRight, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageModal } from "./image-modal"
const experiences = [
  {
    date: "2025-05",
    title: "Marketing Associate",
    company: "K9 Mania Dog Training",
    location: "Davao City",
    period: "May 2025 – Present",
    description: [
      "Developed and maintained high-performance websites (WordPress, Shopify, GHL)",
      "Optimized site performance and conducted routine maintenance",
      "Supported social media operations and compiled monthly reports",
    ],
    skills: ["WordPress", "Shopify", "GoHighLevel", "Performance Optimization"],
    highlightImage: "/images/profile2.png",
  },
  {
    date: "2024-06",
    title: "Web Designer & Developer",
    company: "Infosoft Studio",
    location: "Davao City",
    period: "Jun 2024 – May 2025",
    description: [
      "Designed client-centered websites using Figma",
      "Built a legislative tracking system with Vue.js, Vuex, and Vuetify",
      "Customized WordPress sites with Elementor and CSS",
      "Applied SEO strategies and taught workshops for clients",
    ],
    skills: ["Vue.js", "Figma", "WordPress", "SEO"],
    highlightImage: "/images/profile2.png",
  },
  {
    date: "2024-02",
    title: "Intern",
    company: "Infosoft Studio",
    location: "Davao City",
    period: "Feb 2024 – May 2024",
    description: [
      "Led a team of interns and managed project timelines",
      "Revamped WordPress sites and created interfaces with Figma",
      "Projects included tourism website and e-ticketing services",
    ],
    skills: ["Team Leadership", "Project Management", "Figma"],
    highlightImage: "/images/profile2.png",
  },
]

export function ExperienceSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [modalState, setModalState] = useState({ open: false, images: [] as string[] })

  return (
    <section id="experience" className="py-24 bg-background" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-primary border-primary/30">
            Career Path
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Professional <span className="text-muted-foreground/70">Experience</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-12"
            >
              {/* 1. DATE COLUMN (Desktop only) */}
              <div className="hidden md:flex flex-col items-end pt-2 text-right">
                <span className="text-sm font-bold text-primary tracking-tight">
                  {exp.period.split(' – ')[0]}
                </span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest mt-1">
                  {exp.period.split(' – ')[1]}
                </span>
              </div>

              {/* 2. THE CARD & DOT COLUMN */}
              <div className="relative pl-8 md:pl-0">
                {/* Vertical Timeline Line */}
                <div className="absolute left-0 md:-left-6 top-0 bottom-0 w-[1px] bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent">
                  {/* Glowing Dot */}
                  <div className="absolute top-2 -left-[5px] w-2.5 h-2.5 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] transition-transform group-hover:scale-125" />
                </div>

                <Card className="overflow-hidden border border-border/60 bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    
                    {/* Text Content */}
                    <div className="p-6 lg:p-8 lg:col-span-7">
                      <div className="mb-6">
                        <div className="flex items-center gap-2 text-primary font-bold mb-2">
                          <Briefcase size={14} />
                          <span className="text-xs uppercase tracking-[0.2em]">{exp.company}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{exp.title}</h3>
                        
                        {/* Mobile/Tablet Date & Location */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-medium">
                          <span className="flex items-center gap-1.5 md:hidden">
                            <Calendar size={14} className="text-primary" /> {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-primary" /> {exp.location}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <ChevronRight size={14} className="mt-1 text-primary shrink-0 opacity-70" />
                            <span className="text-muted-foreground text-[0.95rem] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-secondary/40 text-xs py-1 hover:bg-primary hover:text-white transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Image Area */}
                    <div 
                      className="relative h-56 lg:h-auto lg:col-span-5 cursor-pointer overflow-hidden border-t lg:border-t-0 lg:border-l border-border/50"
                      onClick={() => setModalState({ open: true, images: [exp.highlightImage] })}
                    >
                      <img 
                        src={exp.highlightImage} 
                        alt={exp.company}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={modalState.open}
        onClose={() => setModalState({ ...modalState, open: false })}
        images={modalState.images}
        currentImageIndex={0}
        onImageClick={() => {}}
      />
    </section>
  )
}