'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

type FAQ = { q: string; a: string }

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading with double underline */}
        <h2 className="text-4xl font-bold mb-12 relative inline-block pb-3">
          Frequently Asked <span className="text-[var(--primary)]">Questions</span>
          <span className="absolute left-0 bottom-0 w-28 h-[4px] bg-[var(--primary)]"></span>
          <span className="absolute left-0 bottom-[-7px] w-16 h-[4px] bg-[var(--primary)]/50"></span>
        </h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#0b1220] border border-[var(--primary)]/20 dark:border-[var(--primary)]/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggle(i)}
              >
                <span className="font-medium text-gray-900 dark:text-gray-100">{f.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-[var(--primary)]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[var(--primary)]" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-gray-700 dark:text-gray-300 text-sm transition-all duration-300">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
