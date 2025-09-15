"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Play } from "lucide-react"
import Image from "next/image"
import { ImageModal } from "./image-modal"
import { VideoModal } from "./video-modal" // 👈 make sure this file exists

export function ProjectsSection() {
  const projects = [
  {
      title: "Pet Profiling System",
      description:
        "Desktop web application for veterinary offices to register pets, track vaccination status, and manage patient records.",
      video: "/videos/video.mp4", // 👈 your video here
      technologies: ["Web App", "Database", "Veterinary", "Record Management"],
      featured:true
    },
    {
      title: "VetInspect",
      description:
        "A cross-platform livestock inspection app with descriptive analytics integration for Davao City Office's reporting system.",
      image: "/images/vetinspect-hero.png",
      technologies: ["Flutter", "Analytics", "Cross-platform", "Government"],
    },
    {
      title: "Dog Care App",
      description:
        "Mobile application connecting dog owners with trusted daycare providers and veterinary facilities in Davao City.",
      image: "/images/dog-care-hero.png",
      technologies: ["Mobile Design", "UI/UX", "Pet Care", "Location Services"],
    },
    {
      title: "Mood Lamp Tracker",
      description:
        "A mood tracking application that allows users to monitor daily emotions and gain insights into emotional well-being.",
      image: "/images/mood-lamp-hero.png",
      technologies: ["Flutter", "Mood Tracking", "Data Visualization", "Mental Health"],
    },
    {
      title: "Festival QR Registration",
      description:
        "Landing page and QR code verification system designed for the Lanzones Festival in Camiguin with festive branding.",
      image: "/images/festival-qr-hero.png",
      technologies: ["Landing Page", "QR Codes", "Event Management", "Responsive Design"],
    },
  ]

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-white group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden border-2 hover:border-primary/50 animate-float ${project.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={project.featured ? 800 : 400}
                    height={project.featured ? 400 : 300}
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
                          <Button
                            size="sm"
                            variant="secondary"
                            className="flex-1 bg-background/90 hover:bg-background text-foreground"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Watch Video
                          </Button>
                        }
                      />
                    ) : (
                      <ImageModal
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        title={project.title}
                        trigger={
                          <Button
                            size="sm"
                            variant="secondary"
                            className="flex-1 bg-background/90 hover:bg-background text-foreground"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Image
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
