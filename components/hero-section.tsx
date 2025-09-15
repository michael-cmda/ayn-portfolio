"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Facebook, Linkedin, Github } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="bg-emerald-50/50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5">
        {/* LEFT: Profile card */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-md border border-emerald-900/5 flex flex-col items-center">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72">
            <div className="absolute inset-0 rounded-full border-2 border-emerald-600/50 border-dotted" />
            <Image
              src="/images/profile4.png.png"
              alt="Your name"
              fill
              priority
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-neutral-900">
            Isabela Ayn
          </h2>
          <p className="mt-2 text-neutral-600 text-center">
            I am a Web Designer based in San&nbsp;Francisco.
          </p>

          {/* socials */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              className="grid h-12 w-12 place-items-center rounded-2xl border border-neutral-200 hover:bg-neutral-50"
            >
              <Facebook className="h-5 w-5 text-neutral-700" />
            </a>
            <a
              href="#"
              className="grid h-12 w-12 place-items-center rounded-2xl border border-neutral-200 hover:bg-neutral-50"
            >
              <Linkedin className="h-5 w-5 text-neutral-700" />
            </a>
            <a
              href="#"
              className="grid h-12 w-12 place-items-center rounded-2xl border border-neutral-200 hover:bg-neutral-50"
            >
              <Github className="h-5 w-5 text-neutral-700" />
            </a>
          </div>
        </div>

        {/* RIGHT: Intro card */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-md border border-emerald-900/5 flex flex-col justify-center">
          <p className="text-neutral-500 mb-3">Hello There!</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug text-neutral-900">
            I’M <span className="text-primary">ISABELA AYN</span>, A PRODUCT
            DESIGNER CRAFTING{" "}
            <span className="text-outline">USER-CENTRIC DESIGN</span> WITH
            PIXEL-PERFECT PRECISION.
          </h1>

          <div className="mt-6 flex items-center gap-3 text-neutral-600">
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
            Available for Freelancing
          </div>

          <div className="mt-7">
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
