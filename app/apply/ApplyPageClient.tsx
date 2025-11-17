'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import ApplyForm from '../../src/components/forms/ApplyForm'
import ContactForm from '../../src/components/forms/ContactForm'
import { programs } from '../../src/data/programs'
import { motion } from 'framer-motion'

export default function ApplyPageClient() {
  const params = useSearchParams()
  const programParam = params?.get('program') ?? ''
  const program = programs.find(p => p.slug === programParam) || null

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] dark:bg-[var(--bg-secondary)] text-[var(--text-primary)]">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative py-20 bg-[var(--primary)] text-white"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Apply to <span className="text-[var(--accent)]">{program ? program.title : 'GSTECH Hub Program'}</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl">
                Join a cohort that blends mentorship, hands-on projects, and investor-readiness.
                Fill the form below to apply — successful applicants will be contacted for interviews.
              </p>
            </motion.div>

            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full md:w-96 bg-white/10 dark:bg-white/5 rounded-xl p-6 border border-[var(--primary)]/20"
            >
              <div className="text-sm text-white/90 mb-3">Program</div>
              <div className="font-semibold text-lg">
                {program ? program.title : 'GSTECH Hub — General Application'}
              </div>
              {program && (
                <p className="text-sm text-white/90 mt-2">{program.subtitle}</p>
              )}
              <div className="mt-4">
                <a
                  href="#apply-form"
                  className="inline-block px-4 py-2 bg-white text-[var(--primary)] rounded-lg font-semibold"
                >
                  Start Application
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* MAIN CONTENT */}
      <section className="max-w-[1100px] mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

        {/* LEFT SIDE: FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-2"
        >
          <div id="apply-form" className="mb-6">
            <h2 className="text-3xl font-bold relative inline-block pb-3">
              Application <span className="text-[var(--primary)]">Form</span>
              <span className="absolute left-0 bottom-0 w-24 h-1 bg-[var(--primary)]"></span>
            </h2>
            <p className="mt-2 text-[var(--text-secondary)]">
              Complete this form and attach a short pitch or portfolio (optional). We review applications weekly.
            </p>
          </div>

          <ApplyForm program={program?.slug || undefined} />

          {/* FAQ SECTION */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">Application FAQs</h3>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
                hidden: {}
              }}
              className="space-y-3"
            >
              {[
                {
                  q: 'Who should apply?',
                  a: 'Founders, early-stage teams, and individuals seeking tech placements or project experience.'
                },
                {
                  q: 'Is there an application fee?',
                  a: 'No — selected applicants progress to interviews and onboarding. Some tracks may request a refundable deposit for workspace access.'
                },
                {
                  q: 'How long does selection take?',
                  a: 'We typically complete reviews within 2 weeks of closing the batch.'
                }
              ].map((item, i) => (
                <motion.details
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-white dark:bg-[#0b1220] p-4 rounded-xl border border-[var(--primary)]/10"
                >
                  <summary className="cursor-pointer font-medium">{item.q}</summary>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.a}</p>
                </motion.details>
              ))}
            </motion.div>

          </div>

        </motion.div>

        {/* RIGHT SIDEBAR INFO */}
        <motion.aside
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="space-y-6"
        >
          {[
            {
              title: 'What we look for',
              content: (
                <ul className="mt-3 text-[var(--text-secondary)] list-disc pl-5 space-y-2 text-sm">
                  <li>Commitment & availability for the program duration</li>
                  <li>Clear problem or learning objective</li>
                  <li>Openness to mentorship and team collaboration</li>
                </ul>
              )
            },
            {
              title: 'Need help?',
              content: (
                <>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    If you have questions about the apply form, send us a message.
                  </p>
                  <div className="mt-4">
                    <ContactForm />
                  </div>
                </>
              )
            },
            {
              title: 'Contact',
              content: (
                <div className="mt-3 text-sm text-[var(--text-secondary)]">
                  <div><strong>Email:</strong> info@gstechhub.com</div>
                  <div className="mt-2"><strong>Phone:</strong> +234 800 000 0000</div>
                  <div className="mt-2"><strong>Location:</strong> Port Harcourt, Nigeria</div>
                </div>
              )
            }
          ].map((box, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-6 rounded-xl bg-white/10 dark:bg-[#0b1220]/20 border border-[var(--primary)]/20 shadow-sm"
            >
              <h4 className="font-semibold text-lg">{box.title}</h4>
              {box.content}
            </motion.div>
          ))}

        </motion.aside>

      </section>

      {/* FINAL CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="py-16 bg-[var(--primary)] dark:bg-[var(--bg-primary)]"
      >
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text-secondary)]">
            Questions before applying?
          </h3>
          <p className="text-[var(--text-secondary)] mb-6">
            Join our info session or reach out — we’re here to help.
          </p>
          <a href="/contact" className="inline-block px-6 py-3 bg-[var(--bg-primary)] text-[var(--primary)] rounded-lg font-semibold">
            Contact Us
          </a>
        </div>
      </motion.section>

    </main>
  )
}
