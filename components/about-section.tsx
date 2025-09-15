import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Palette, Zap, Star, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-10 right-10 w-6 h-6 text-accent/30 animate-float">
        <Star className="w-full h-full" />
      </div>
      <div
        className="absolute bottom-20 left-10 w-5 h-5 text-primary/30 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <Heart className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me 💫
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm a web designer and developer with experience in building responsive websites, integrating backend
            systems, and optimizing performance across different platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-card p-6 rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div>
                <h4 className="font-medium">Bachelor of Information Technology</h4>
                <p className="text-muted-foreground">University of Mindanao – Davao City</p>
                <p className="text-sm text-muted-foreground">Graduated 2024</p>
                <p className="text-sm mt-2 text-pretty">
                  <strong>Thesis:</strong> VetInspect: A Cross-Platform Livestock Inspection App with Descriptive
                  Analytics Integration in Davao City Office's Report
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center p-6 border-2 border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
              <CardContent className="pt-6">
                <Code className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">Frontend Development</h3>
                <p className="text-sm text-muted-foreground">HTML, CSS, JavaScript, Vue.js, Dart</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-accent/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
              <CardContent className="pt-6">
                <Palette className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">Figma, Canva, Responsive Design</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">Web Platforms</h3>
                <p className="text-sm text-muted-foreground">WordPress, Shopify, GoHighLevel</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-accent/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
              <CardContent className="pt-6">
                <GraduationCap className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">Soft Skills</h3>
                <p className="text-sm text-muted-foreground">Team Leadership, Time Management</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
