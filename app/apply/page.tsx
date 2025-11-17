import React, { Suspense } from 'react'
import ApplyPageClient from './ApplyPageClient'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ApplyPageClient />
    </Suspense>
  )
}
