"use client"

import type React from "react"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface ImageModalProps {
  src: string
  alt: string
  title: string
  trigger: React.ReactNode
}

export function ImageModal({ src, alt, title, trigger }: ImageModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 overflow-hidden" showCloseButton={false}>
        <div className="relative">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[90vh] object-contain"
            priority
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
              asChild
            >
              <a href={src} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
