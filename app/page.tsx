import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navigation />
      <HeroSection />
   
      {/* <AboutSection /> */}
      <ExperienceSection />
      <ProjectsSection />
         <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
