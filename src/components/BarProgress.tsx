"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress";


export function BarProgress() {
  const [progress, setProgress] = React.useState(15)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} max={20} className="w-[100%]" >
  </Progress>
}
