'use client'
import React from 'react'
import ContactForm from '../../src/components/forms/ContactForm'
import Reveal from '../../src/components/Reveal'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] dark:bg-[var(--bg-secondary)] text-[var(--text-primary)]">

      {/* HERO */}
      <Reveal>
        <section className="py-20 bg-[var(--primary)] text-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Get in Touch</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              We’re here to answer questions about our programs, partnerships, cohort admissions, workspace, or opportunities.
            </p>
          </div>
        </section>
      </Reveal>

      {/* MAIN GRID */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

        {/* LEFT SIDE */}
        <aside className="space-y-8">

          {/* Contact Card */}
          <Reveal delay={0.1}>
            <div className="p-6 rounded-xl bg-white dark:bg-[#0b1220] border border-[var(--primary)]/20 shadow-sm">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <p className="text-[var(--text-secondary)] mt-2">
                Reach out to us through any of the details below. We respond within 24–48 hours.
              </p>

              <div className="mt-6 space-y-4 text-[var(--text-secondary)] text-sm">
                <div>
                  <div className="font-semibold text-[var(--primary)]">Email</div>
                  <a href="mailto:info@gstechhub.com" className="hover:text-[var(--primary)] transition">
                    info@gstechhub.com
                  </a>
                </div>

                <div>
                  <div className="font-semibold text-[var(--primary)]">Phone</div>
                  <a href="tel:+2348000000000" className="hover:text-[var(--primary)] transition">
                    +234 800 000 0000
                  </a>
                </div>

                <div>
                  <div className="font-semibold text-[var(--primary)]">Address</div>
                  <p>Port Harcourt, Rivers State, Nigeria</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.2}>
            <div className="rounded-xl overflow-hidden border border-[var(--primary)]/20 shadow-sm">
              <div className="w-full h-56 bg-gray-200 dark:bg-[#0a0f20] flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                Map/Location Placeholder
              </div>
            </div>
          </Reveal>

          {/* FAQ */}
          <Reveal delay={0.3}>
            <div className="p-6 rounded-xl bg-white dark:bg-[#0b1220] border border-[var(--primary)]/20 shadow-sm">
              <h3 className="font-semibold text-lg">Quick Questions</h3>
              <div className="mt-4 space-y-3">

                <details className="bg-gray-50 dark:bg-[#071025] rounded p-3 border border-[var(--primary)]/10">
                  <summary className="cursor-pointer font-medium">How do I join a program?</summary>
                  <p className="text-sm mt-2 text-[var(--text-secondary)]">
                    Visit the Apply page and select a track. Applications are reviewed weekly.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-[#071025] rounded p-3 border border-[var(--primary)]/10">
                  <summary className="cursor-pointer font-medium">Do you offer partnerships?</summary>
                  <p className="text-sm mt-2 text-[var(--text-secondary)]">
                    Yes — reach out with your proposal. We collaborate with institutions, startups, and community groups.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-[#071025] rounded p-3 border border-[var(--primary)]/10">
                  <summary className="cursor-pointer font-medium">How fast do you respond?</summary>
                  <p className="text-sm mt-2 text-[var(--text-secondary)]">
                    We respond within 24–48 hours depending on the volume of messages.
                  </p>
                </details>

              </div>
            </div>
          </Reveal>

        </aside>

        {/* FORM SIDE */}
        <Reveal delay={0.2}>
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold relative inline-block pb-3">
              Send Us a Message
              <span className="absolute left-0 bottom-0 w-24 h-1 bg-[var(--primary)]"></span>
            </h2>
            <p className="text-[var(--text-secondary)] mt-2 mb-8 max-w-2xl">
              Fill out the form below and our team will get back to you. For urgent matters, call us directly.
            </p>

            <ContactForm />
          </div>
        </Reveal>

      </section>

      {/* CTA */}
      <Reveal>
        <section className="py-16 bg-[var(--primary)] dark:bg-[var(--bg-primary)]">
          <div className="max-w-[1200px] mx-auto text-center px-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text-secondary)]">Need more information?</h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Explore our programs, workspace opportunities, or upcoming cohorts.
            </p>
            <a
              href="/about"
              className="inline-block px-6 py-3 rounded-lg bg-[var(--bg-secondary)] text-[var(--primary)] font-semibold hover:bg-[var(--primary)]/90 transition"
            >
              Explore Programs
            </a>
          </div>
        </section>
      </Reveal>

    </main>
  )
}
