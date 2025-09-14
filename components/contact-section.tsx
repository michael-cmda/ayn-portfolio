"use client"

import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch ✨
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-6">Let's work together 🌟</h3>
            <p className="text-muted-foreground mb-8 text-pretty">
              I'm always interested in new opportunities and exciting projects. Whether you need a website, mobile app,
              or digital solution, I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <a
                href="mailto:sayhelloayn@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                sayhelloayn@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border-2 border-accent/20 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <a href="tel:09353069571" className="text-muted-foreground hover:text-accent transition-colors">
                09353069571
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Location</h4>
              <span className="text-muted-foreground">Davao City, Philippines</span>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border-2 border-accent/20 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Linkedin className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">LinkedIn</h4>
              <a
                href="https://linkedin.com/in/isabela-ayn-deocampo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Connect with me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
