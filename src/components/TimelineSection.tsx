import React from 'react'

type TimelineSectionProps = {
  steps: { title: string; description: string }[]
}

export default function TimelineSection({ steps }: TimelineSectionProps) {
  return (
    <section className="mx-auto py-20 px-16 relative bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)]">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block pb-3">
        How <span className="text-[var(--primary)]">It Works</span>
        <span className="absolute left-0 bottom-0 w-24 h-1 bg-[var(--primary)]"></span>
      </h2>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {steps.map((step, i) => (
          <div key={i} className="relative md:w-1/4 flex flex-col items-center text-center">
            {/* Step Number Circle */}
            <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white font-bold flex items-center justify-center mb-4 shadow-lg">
              {i + 1}
            </div>

            {/* Step Card */}
            <div className="bg-white dark:bg-[#0b1220] p-6 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1 w-full">
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
            </div>

            {/* Desktop connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 right-[-50%] w-[100%] h-1 bg-[var(--primary)]/50 z-0"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
