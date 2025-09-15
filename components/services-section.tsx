import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Smartphone, Zap, Search, Settings } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with modern technologies, responsive design, and optimized performance.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions using Figma and Canva to create engaging digital experiences.",
    },
    {
      icon: Smartphone,
      title: "WordPress & Shopify",
      description: "Custom theme development, plugin integration, and e-commerce store setup and customization.",
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Seamless integration with third-party services, automation tools, and REST APIs.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization strategies to improve visibility and organic traffic.",
    },
    {
      icon: Settings,
      title: "Digital Marketing Support",
      description: "GoHighLevel automation, CRM setup, and digital marketing campaign support.",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive web development and design services to help your business grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
