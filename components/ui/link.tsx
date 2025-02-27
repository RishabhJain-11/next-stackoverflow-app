"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type LinkProps = React.ComponentProps<typeof Link>;

const LinkComponent = React.forwardRef<HTMLAnchorElement, LinkProps>(({ className, href, ...props }, ref) => {
  return (
    <Link {...props} href={href} ref={ref} className={cn("text-orange-500 hover:text-orange-400 transition-colors", className)} />
  )
})
LinkComponent.displayName = "Link"

export { LinkComponent as Link }

