'use client'
import React from 'react'
import { motion } from 'framer-motion'
import MentorCard from '../../src/components/MentorCard'
import { mentors } from '../../src/data/mentors'

export default function AboutPage() {
  return (
    <div className="text-[var(--text-primary)] dark:text-[var(--text-primary)]">

      {/* HERO */}
      <section className="relative h-[60vh] bg-[url('/img-2.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-[var(--primary)]/40 dark:bg-[var(--primary)]/50"></div>

        <motion.div
          className="relative text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            About <span className="text-[var(--accent)]">GSTECH Hub</span>
          </h1>

          <motion.p
            className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Empowering startups, accelerating tech talent, and building scalable solutions across Africa.
          </motion.p>
        </motion.div>
      </section>

      {/* OUR MISSION */}
      <section className="max-w-[1200px] mx-auto py-24 px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold relative inline-block pb-4">
            Our <span className="text-[var(--primary)]">Mission</span>
            <span className="absolute left-0 bottom-0 w-24 h-1 bg-[var(--primary)]"></span>
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            GSTech Hub exists to accelerate the growth of startups and nurture tech talent across Africa.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {[
              { title: 'Mentorship', desc: 'Guidance from experienced founders and industry leaders.' },
              { title: 'Real Projects', desc: 'Hands-on experience building and scaling tech solutions.' },
              { title: 'Networking', desc: 'Access to investors, partners, and peers.' },
              { title: 'Skill Development', desc: 'Structured programs for industry-ready skills.' }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-white dark:bg-[#0b1220] border-[var(--primary)]/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg text-[var(--primary)] dark:text-[var(--bg-primary)]">{card.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img src="/img-3.jpg" alt="Our Mission" className="w-full h-96 object-cover" />
          </div>
        </motion.div>

      </section>

      {/* OUR VISION */}
      <section className="bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)] py-24">
        <motion.div
          className="max-w-[1200px] mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold relative inline-block pb-4">
            Our <span className="text-[var(--primary)]">Vision</span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-[var(--primary)]"></span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            To become Africa’s leading hub for tech innovation and talent development.
          </p>

          {/* VISION CARDS */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { title: 'Innovation', desc: 'Creative problem-solving and cutting-edge solutions.' },
              { title: 'Excellence', desc: 'High-quality programs and mentorship.' },
              { title: 'Collaboration', desc: 'Strong partnerships and networks.' },
              { title: 'Impact', desc: 'Measurable results for startups and talents.' }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="p-6 border rounded-xl shadow-sm bg-white dark:bg-[#0b1220] border-[var(--primary)]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg text-[var(--primary)] dark:text-[var(--bg-primary)]">{card.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TIMELINE / STORY */}
      <section className="max-w-[1200px] mx-auto py-24 px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 relative inline-block pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our <span className="text-[var(--primary)]">Journey</span>
          <span className="absolute left-0 bottom-0 w-24 h-1 bg-[var(--primary)]"></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            { year: '2024', event: 'Founded GSTech Hub to accelerate startups.' },
            { year: '2025', event: 'Launched first accelerator and skill programs.' },
            { year: '2026', event: 'First cohort of tech talents onboarded.' },
            { year: '2027', event: 'Expansion across multiple African cities.' }
          ].map((item, i) => (
            <motion.div
              key={item.year}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-[var(--primary)] font-bold text-xl">{item.year}</div>
              <p className="text-gray-700 dark:text-gray-300">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)] py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold pb-4 mb-12 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Core <span className="text-[var(--primary)]">Values</span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-[var(--primary)]"></span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'We act with honesty and transparency.' },
              { title: 'Innovation', desc: 'We drive creative and tech-forward solutions.' },
              { title: 'Collaboration', desc: 'We value teamwork and partnerships.' },
              { title: 'Excellence', desc: 'We always deliver high-quality outcomes.' }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="p-6 border rounded-xl shadow-sm bg-white dark:bg-[#0b1220] border-[var(--primary)]/30"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg text-[var(--primary)] dark:text-[var(--bg-primary)]">{card.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MENTORS */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold pb-4 mb-12 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our <span className="text-[var(--primary)]">Mentors</span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-[var(--primary)]"></span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {mentors.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <MentorCard {...mentor} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-24 bg-[var(--primary)] text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to join GSTech Hub?
        </h2>

        <motion.a
          href="/apply"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="px-8 py-4 bg-white text-[var(--primary)] font-semibold rounded-lg shadow"
        >
          Apply Now
        </motion.a>
      </motion.section>
    </div>
  )
}
