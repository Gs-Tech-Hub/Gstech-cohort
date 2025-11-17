import React from 'react'
import { partners } from '../data/partners'

export default function PartnerLogos() {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      {partners.map((p, i) => (
        <img key={i} src={p} alt={`partner-${i}`} className="h-12 grayscale hover:grayscale-0" />
      ))}
    </div>
  )
}
