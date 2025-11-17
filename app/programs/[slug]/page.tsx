'use client'
import React from 'react'
import { programs } from '../../../src/data/programs'
import TimelineSection from '../../../src/components/TimelineSection'
import FAQSection from '../../../src/components/FAQSection'
import MentorCard from '../../../src/components/MentorCard'
import TestimonialCard from '../../../src/components/TestimonialCard'
import { mentors } from '../../../src/data/mentors'
import { testimonials } from '../../../src/data/testimonials'
import Reveal from '../../../src/components/Reveal'

type Props = { params: { slug: string } }

export default function ProgramDetail({ params }: Props) {
  const slug = params.slug
  const program = programs.find(p => p.slug === slug)
  if (!program) return <div className="p-20 text-center text-xl">Program not found</div>

  return (
    <div className="text-[var(--text-primary)] dark:text-[var(--text-primary)]">

      {/* HERO */}
      <Reveal>
        <section
          className="relative h-[60vh] md:h-[70vh] w-full bg-cover bg-center rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${program.image})` }}
        >
          <div className="absolute inset-0 bg-[var(--primary)]/50 dark:bg-[var(--primary)]/60"></div>
          <div className="relative h-full flex flex-col justify-center items-start px-6 md:px-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">{program.title}</h1>
            <p className="mt-4 text-lg md:text-xl">{program.subtitle}</p>
          </div>
        </section>
      </Reveal>

      {/* OVERVIEW / BENEFITS */}
      <Reveal delay={0.1}>
        <section className=" mx-auto py-16 px-16">
          <h2 className="text-3xl font-bold mb-8 relative inline-block pb-3">
            What <span className="text-[var(--primary)]">You'll Gain</span>
            <span className="absolute left-0 bottom-0 w-24 h-1 bg-[var(--primary)]"></span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {program.benefits?.map((b, i) => (
              <Reveal delay={0.1 * i} key={i}>
                <div className="p-6 rounded-xl border border-[var(--primary)]/30 dark:border-[var(--primary)]/20 bg-white dark:bg-[#0b1220] shadow hover:shadow-lg transition hover:-translate-y-1">
                  <p className="text-gray-900 dark:text-gray-100 font-medium">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* TIMELINE */}
      <Reveal delay={0.15}>
        <TimelineSection
          steps={[
            { title: "Apply", description: "Submit your application to join the program and provide basic info about your idea or startup." },
            { title: "Evaluate", description: "Our team reviews applications and shortlists candidates based on potential and alignment." },
            { title: "Start Program", description: "Join the cohort, access mentorship, training, and hands-on projects." },
            { title: "Launch / Scale", description: "Graduates launch their products or scale their startup with ongoing support." }
          ]}
        />
      </Reveal>

      {/* PROGRAM DETAILS */}
      <Reveal delay={0.2}>
        <section className="mx-auto py-16 px-16">
          <h2 className="text-3xl font-bold mb-6 relative inline-block pb-3">
            Program <span className="text-[var(--primary)]">Details</span>
            <span className="absolute left-0 bottom-0 w-24 h-1 bg-[var(--primary)]"></span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This {program.title} program is carefully designed to provide startups and aspiring tech talent with practical, hands-on experience,
            mentorship from industry leaders, and a clear roadmap to scale their ideas into real-world solutions. You'll gain actionable insights,
            networking opportunities, and the technical and business knowledge to thrive.
          </p>
        </section>
      </Reveal>

      {/* MENTORS */}
      <Reveal delay={0.25}>
        <section className="bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)] py-20">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block pb-3">
              Meet <span className="text-[var(--primary)]">Mentors</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-[var(--primary)]"></span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {mentors.slice(0, 6).map((m, i) => (
                <Reveal delay={0.1 * i} key={m.name}>
                  <MentorCard {...m} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* FAQ */}
      <Reveal delay={0.3}>
        <FAQSection
          faqs={[
            { q: 'Who can apply?', a: 'Founders, early-stage startups, and teams with innovative ideas.' },
            { q: 'Is there a fee?', a: 'No fee for selected participants. Scholarships and support may be available.' },
            { q: 'What is the program duration?', a: `Typically ${program.duration || '8-12 weeks'} depending on the track.` },
            { q: 'Do I need prior experience?', a: 'Basic tech or startup knowledge helps, but beginners are welcome.' }
          ]}
        />
      </Reveal>

      {/* CTA */}
      <Reveal delay={0.35}>
        <section className="py-24 bg-[var(--primary)] text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to join {program.title} and accelerate your journey?
          </h2>
          <a
            href="/apply"
            className="px-8 py-4 bg-white text-[var(--primary)] font-semibold rounded-lg shadow hover:shadow-lg transition"
          >
            Apply Now
          </a>
        </section>
      </Reveal>

    </div>
  )
}
