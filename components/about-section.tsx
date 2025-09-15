import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Palette, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <Card className="p-8 border border-neutral-200/80 shadow-md rounded-3xl bg-white">
      <CardContent className="pl-30 pr-30">
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> */}
          {/* Left side - Education */}
          {/* <div>
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-sm">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div>
                <h4 className="font-medium">Bachelor of Information Technology</h4>
                <p className="text-muted-foreground">University of Mindanao – Davao City</p>
                <p className="text-sm text-muted-foreground">Graduated 2024</p>
                <p className="text-sm mt-2 text-pretty">
                  <strong>Thesis:</strong> VetInspect: A Cross-Platform Livestock Inspection App with
                  Descriptive Analytics Integration in Davao City Office&apos;s Report
                </p>
              </div>
            </div>
          </div> */}

          {/* Right side - Skill cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <Card className="text-center p-6 border border-primary/10 hover:border-primary/30 hover:shadow-md transition group">
              <CardContent className="pt-6">
                <Code className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Frontend Development</h3>
                <p className="text-sm text-muted-foreground">HTML, CSS, JavaScript, Vue.js, Dart</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border border-accent/10 hover:border-accent/30 hover:shadow-md transition group">
              <CardContent className="pt-6">
                <Palette className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">Figma, Canva, Responsive Design</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border border-primary/10 hover:border-primary/30 hover:shadow-md transition group">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Web Platforms</h3>
                <p className="text-sm text-muted-foreground">WordPress, Shopify, GoHighLevel</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border border-accent/10 hover:border-accent/30 hover:shadow-md transition group">
              <CardContent className="pt-6">
                <GraduationCap className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Soft Skills</h3>
                <p className="text-sm text-muted-foreground">Team Leadership, Time Management</p>
              </CardContent>
            </Card>
          {/* </div> */}
        </div>
      </CardContent>
    </Card>
  )
}
