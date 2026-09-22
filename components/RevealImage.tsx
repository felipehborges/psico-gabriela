"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

export function RevealImage({ className = "", onLoad, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Image
      {...props}
      className={`zip-reveal-image${isLoaded ? " is-loaded" : ""}${className ? ` ${className}` : ""}`}
      onLoad={(event) => {
        setIsLoaded(true)
        onLoad?.(event)
      }}
    />
  )
}
