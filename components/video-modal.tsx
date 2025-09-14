"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function VideoModal({
  src,
  title,
  trigger,
}: {
  src: string
  title: string
  trigger: React.ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <video src={src} controls autoPlay className="w-full rounded-lg" />
      </DialogContent>
    </Dialog>
  )
}