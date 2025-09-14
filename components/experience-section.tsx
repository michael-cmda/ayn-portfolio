import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
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
    },
    {
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
      skills: ["Vue.js", "Figma", "WordPress", "SEO", "Elementor"],
    },
    {
      title: "Intern",
      company: "Infosoft Studio",
      location: "Davao City",
      period: "Feb 2024 – May 2024",
      description: [
        "Led a team of interns and managed project timelines",
        "Revamped WordPress sites and created interfaces with Figma",
        "Projects included tourism website, e-ticketing service, merchandise site, pet profiling system, and research portal",
      ],
      skills: ["Team Leadership", "Project Management", "WordPress", "Figma"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            My professional journey in web development and design, from internship to current role.
          </p>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {experiences.map((exp, index) => (
    <Card key={index} className="relative overflow-hidden h-full">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent"></div>
    <CardHeader>
  <div>
    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
    <div className="flex items-center gap-6 text-muted-foreground text-sm flex-wrap">
      <span className="font-medium text-primary">{exp.company}</span>
      <div className="flex items-center gap-1">
        <MapPin className="h-4 w-4" />
        <span>{exp.location}</span>
      </div>
      <div className="flex items-center gap-1">
        <Calendar className="h-4 w-4" />
        <span>{exp.period}</span>
      </div>
    </div>
  </div>
</CardHeader>

      <CardContent>
        <ul className="space-y-2 mb-4">
          {exp.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-pretty">{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {exp.skills.map((skill, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {skill}
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
