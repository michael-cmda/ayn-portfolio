"use client"

import { useState } from "react" // 👈 Added for state management
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Play } from "lucide-react"
import Image from "next/image"
import { ImageModal } from "./image-modal"
import { VideoModal } from "./video-modal"

export function ProjectsSection() {
  // 1. Define your categories
  const categories = ["All", "Web App", "Mobile", "Landing Page", "Design"]
  const [activeTab, setActiveTab] = useState("All")

const projects = [
  {
    title: "Pet Profiling System",
    description: "Desktop web application for veterinary offices to register pets, track vaccination status, and manage patient records.",
    video: "/videos/video.mp4",
    technologies: ["Web App", "Database", "Veterinary", "Record Management"],
    categories: ["Web App"], // 👈 Changed to array
    featured: true
  },
  {
    title: "VetInspect",
    description: "A cross-platform livestock inspection app with descriptive analytics integration for Davao City Office's reporting system.",
    image: "/images/vetinspect-hero.png",
    technologies: ["Flutter", "Analytics", "Cross-platform", "Government"],
    categories: ["Mobile", "Web App"],
  },
  {
    title: "Dog Care App",
    description: "Mobile application connecting dog owners with trusted daycare providers and veterinary facilities in Davao City.",
    image: "/images/dog-care-hero.png",
    technologies: ["Mobile Design", "UI/UX", "Pet Care", "Location Services"],
    categories: ["Mobile", "Design"],
  },
  {
    title: "Mood Lamp Tracker",
    description: "A mood tracking application that allows users to monitor daily emotions and gain insights into emotional well-being.",
    image: "/images/mood-lamp-hero.png",
    technologies: ["Flutter", "Mood Tracking", "Data Visualization", "Mental Health"],
    categories: ["Mobile"],
  },
  {
    title: "Festival QR Registration",
    description: "Landing page and QR code verification system designed for the Lanzones Festival in Camiguin with festive branding.",
    image: "/images/festival-qr-hero.png",
    technologies: ["Landing Page", "QR Codes", "Event Management", "Responsive Design"],
    categories: ["Web App", "Landing Page"],
  },
  {
    title: "Puppy Training Portal",
    description: "A comprehensive onboarding landing page for new puppy owners, featuring course modules, progress expectations, and curriculum highlights.",
    image: "/images/Puppy Program Course.png",
    technologies: ["LMS Design", "UI/UX", "Onboarding", "Responsive"],
    categories: ["Landing Page", "Design"],
  },
  {
    title: "Private Training Portal",
    description: "Client-facing dashboard design for personalized dog training programs, focusing on behavior modification and tailored training plans.",
    image: "/images/Private Program Course.png",
    technologies: ["Client Portal", "Web Design", "Service Design"],
    categories: ["Web App", "Design"],
  },
  {
    title: "Midway Training Session",
    description: "A 'Phase 2' transition page designed to maintain student momentum, featuring learning theory foundations and video resource libraries.",
    image: "/images/Midway Session.png",
    technologies: ["E-Learning", "Video Integration", "Course Design"],
    categories: ["Landing Page"],
  },
  {
    title: "IGP Helper Camp Event",
    description: "High-energy event landing page for professional dog training camps, featuring tiered pricing tables and registration management.",
    image: "/images/igarki.png",
    technologies: ["Event Landing Page", "Conversion Optimization", "Tiered Pricing"],
    categories: ["Landing Page"],
  },
  {
    title: "Founder-Free Workshop",
    description: "A high-end B2B landing page for 'Buzzworthy,' designed for 7-8 figure founders looking to automate their business operations.",
    image: "/images/Founder Workshop.png",
    technologies: ["B2B Marketing", "Conversion Design", "Sales Funnel"],
    categories: ["Landing Page", "Design"],
  },
  {
    title: "Board & Train Service Page",
    description: "Localized service page for a dog training facility in NY, featuring social proof, FAQ sections, and integrated Google Maps.",
    image: "/images/Board And Train In Albertson NY K9 Mania Dog Training.png",
    technologies: ["Local SEO", "Web Design", "Lead Generation"],
    categories: ["Landing Page"],
  },
  {
    title: "Baseball Ducks Partnership",
    description: "Marketing landing page for a sports-themed pet promotion, featuring free consultation leads and event schedules.",
    image: "/images/baseball ducks.png",
    technologies: ["Partnership Marketing", "Promotional Page", "UI Design"],
    categories: ["Landing Page", "Design"],
  },
  {
    title: "Rule of 26 Review Page",
    description: "A streamlined, high-conversion review solicitation page for authors, featuring Amazon review integration and social proof.",
    image: "/images/Rule of 26 Review Page.png",
    technologies: ["Reputation Management", "Minimalist Design", "UX"],
    categories: ["Landing Page", "Design"],
  },
  {
    title: "Revenue Engine Audit",
    description: "Interactive audit landing page featuring a personalized 'walk-through' UI to help business owners identify operational bottlenecks.",
    image: "/images/Revenue Engine Audit.png",
    technologies: ["SaaS Design", "Consultancy UI", "Business Analytics"],
    categories: ["Web App", "Design"],
  },
];

  // 2. Filter logic
const filteredProjects =
  activeTab === "All"
    ? projects
    : projects.filter((p) => p.categories?.includes(activeTab))
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Featured Projects ✨
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A showcase of my work spanning mobile apps, web systems, and cross-platform solutions.
          </p>
        </div>

        {/* 3. Filter Tabs UI */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeTab === cat ? "default" : "outline"}
              onClick={() => setActiveTab(cat)}
              className="rounded-full px-6 transition-all"
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title} // Better to use title than index for filtering
              className={`bg-white group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden border-2 hover:border-primary/50 ${
                project.featured && activeTab === "All" ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    muted autoPlay loop playsInline
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.video ? (
                      <VideoModal
                        src={project.video}
                        title={project.title}
                        trigger={
                          <Button size="sm" variant="secondary" className="flex-1 bg-background/90 hover:bg-background text-foreground">
                            <Play className="h-4 w-4 mr-2" /> Watch Video
                          </Button>
                        }
                      />
                    ) : (
                      <ImageModal
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        title={project.title}
                        trigger={
                          <Button size="sm" variant="secondary" className="flex-1 bg-background/90 hover:bg-background text-foreground">
                            <Eye className="h-4 w-4 mr-2" /> View Image
                          </Button>
                        }
                      />
                    )}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}