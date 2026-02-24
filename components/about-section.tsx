import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Code, Palette, Zap, GraduationCap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#fbfafa]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <Card className="border border-neutral-200/80 shadow-md rounded-3xl bg-white">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* LEFT: Text */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                  Get to know me 
                </h2>

                <p className="mt-4 text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  I’m a Web Designer & Web Developer who builds responsive, high-performance websites
                  from design to deployment.
                </p>

                <p className="mt-4 text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  I focus on clean layouts, smooth user experience, and fast load times. I also handle
                  hosting, updates, and performance optimization, with experience integrating CRM tools
                  like GoHighLevel to support funnels and lead workflows.
                </p>

                <p className="mt-4 text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Outside of work, I’m a Capricorn who enjoys cross-stitching and hands-on crafts that
                  help me reset and stay creative.
                </p>

                <div className="mt-8">
                  <h3 className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary/80 mb-3">
                    Career story
                  </h3>

                  <div className="mt-4 space-y-4 text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    <p>
                      I started as a UI/UX Designer, building user-centered interfaces. Coding felt
                      intimidating at first, but I decided to try anyway.
                    </p>

                    <p>
                      That choice pulled me into front-end development, where I learned how designs
                      become real websites. I explored WordPress on my own and eventually got comfortable
                      building end-to-end layout, customization, performance, and deployment.
                    </p>

                    <p>
                      Now I work across design, development, and automation. My biggest takeaway is that
                      growth happens when you stay curious and keep building even when it feels uncomfortable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-end gap-8">
                <div className="w-full max-w-md">
                  <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
                    <div className="aspect-[4/5] w-full" />
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-neutral-400">
                      <Image
      src="/images/my-profile-picture.JPG"  
      alt="Your Name"
      fill
      className="object-cover"
      priority
    />
                    </div>
                  </div>
                </div>

                {/* Skills grid */}
                {/* <div className="w-full max-w-md grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="p-5 border border-neutral-200 hover:shadow-md transition">
                    <CardContent className="p-0">
                      <Code className="h-6 w-6 text-primary" />
                      <h4 className="mt-3 font-bold text-neutral-900">Frontend</h4>
                      <p className="mt-1 text-sm text-neutral-600">
                        HTML, CSS, JavaScript, Vue, Dart
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-5 border border-neutral-200 hover:shadow-md transition">
                    <CardContent className="p-0">
                      <Palette className="h-6 w-6 text-primary" />
                      <h4 className="mt-3 font-bold text-neutral-900">UI/UX</h4>
                      <p className="mt-1 text-sm text-neutral-600">
                        Figma, Canva, Responsive design
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-5 border border-neutral-200 hover:shadow-md transition">
                    <CardContent className="p-0">
                      <Zap className="h-6 w-6 text-primary" />
                      <h4 className="mt-3 font-bold text-neutral-900">Platforms</h4>
                      <p className="mt-1 text-sm text-neutral-600">
                        WordPress, Shopify, GoHighLevel
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-5 border border-neutral-200 hover:shadow-md transition">
                    <CardContent className="p-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <h4 className="mt-3 font-bold text-neutral-900">Soft skills</h4>
                      <p className="mt-1 text-sm text-neutral-600">
                        Leadership, Communication, Time mgmt
                      </p>
                    </CardContent>
                  </Card>
                </div> */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}