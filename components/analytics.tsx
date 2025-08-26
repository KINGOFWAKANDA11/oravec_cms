'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { pageview } from '@/lib/gtag'

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      pageview(pathname)
    }
  }, [pathname])

  return null
}
