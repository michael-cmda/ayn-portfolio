"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Calendar, Briefcase, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Marketing Associate",
    company: "K9 Mania Dog Training",
    location: "Davao City",
    period: "May 2025 – Present",
    description: [
      "Developed and maintained high-performance websites (WordPress, Shopify)",
      "Managed hosting, updates, backups, and uptime monitoring",
      "Created and optimized funnels, landing pages, and workflows in GoHighLevel",
      "Applied SEO strategies to improve website visibility and optimize performance.",
    ],
    skills: [],
  },
  {
    title: "Web Designer & Developer",
    company: "Infosoft Studio",
    location: "Davao City",
    period: "Jun 2024 – May 2025",
    description: [
      "Designed client-centered websites and systems using Figma",
      "Built a Legislative Tracking System with Vue.js, Vuex, and Vuetify",
      "Customized WordPress sites with Elementor",
      "Led workshops on WordPress, Figma, and Canva basics",
    ],
    skills: [],
  },
  {
    title: "Intern",
    company: "Infosoft Studio",
    location: "Davao City",
    period: "Feb 2024 – May 2024",
    description: [
      "Led a team of interns and managed project timelines",
      "Revamped and customized responsive WordPress Official Government Websites in Davao Region.",
      "Created  interfaces using Figma for diverse projects including a tourism website, e-ticketing service for kiosks, merchandise website, pet profiling system, and school research portal.",
    ],
    skills: [],
  },
]

export function ExperienceSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 bg-background" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-primary border-primary/30">
            Career Path
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Professional <span className="text-muted-foreground/70">Experience</span>
          </h2>
        </div>

        <div className="relative space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Vertical Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent ml-4 md:ml-0">
                <div className="absolute top-8 -left-[5px] w-2.5 h-2.5 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
              </div>

              <Card className="ml-10 md:ml-8 overflow-hidden border border-border/60 bg-card hover:border-primary/40 transition-all duration-300">
                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Left Column: Role Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 text-primary font-bold mb-2">
                      <Briefcase size={14} />
                      <span className="text-xs uppercase tracking-widest">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{exp.title}</h3>
                    
                    <div className="space-y-2 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-primary/70" /> {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary/70" /> {exp.location}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-secondary/40 text-[10px] px-2 py-0">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Responsibilities */}
                  <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-border/50 pt-6 lg:pt-0 lg:pl-8">
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ChevronRight size={14} className="mt-1 text-primary shrink-0 opacity-70" />
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}