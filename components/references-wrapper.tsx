'use client'

import dynamic from 'next/dynamic'

// lazy-load References komponent len na klientovi
const References = dynamic(() => import('@/components/references'), {
  ssr: false,
})

export default function ClientReferencesWrapper() {
  return <References />
}