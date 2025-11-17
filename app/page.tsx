"use client";

import React from "react";
import HeroCarousel from "../src/components/HeroCarousel";
import ProgramCard from "../src/components/ProgramCard";
import { programs } from "../src/data/programs";
import TrackCard from "../src/components/TrackCard";
import { tracks } from "../src/data/tracks";
import PillarCard from "../src/components/PillarCard";
import { pillars } from "../src/data/pillars";
import SuccessCard from "../src/components/SuccessCard";
import { successStories } from "../src/data/success";
import MentorCard from "../src/components/MentorCard";
import { mentors } from "../src/data/mentors";
import { upcomingProjects } from "../src/data/upcomingProjects";


import Reveal from "../src/components/Reveal";

export default function HomePage() {
  return (
    <div className="w-full">

      {/* 1. HERO CAROUSEL */}
      <HeroCarousel />

      {/* 2. ABOUT SECTION */}
      <Reveal>
        <section className="max-w-[1200px] bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] mx-auto py-24 px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight relative inline-block pb-3">
              About <span className="text-[var(--primary)]">GSTECH Hub</span>

              <span className="absolute left-0 bottom-0 w-24 h-[3px] bg-[var(--primary)]"></span>
              <span className="absolute left-0 bottom-[-6px] w-16 h-[3px] bg-[var(--primary)]/60"></span>
            </h2>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              GSTech Hub is an innovation and talent acceleration ecosystem
              empowering founders and young talents across Africa.
            </p>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              We merge structured programs, real mentorship, modern tools, and
              hands-on project development.
            </p>

            {/* CARDS */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {programs.map((p, i) => (
                <Reveal delay={i * 0.1} key={p.slug}>
                  <div
                    className="
                      rounded-xl p-4
                      border border-[var(--primary)] dark:border-[var(--primary)]
                      shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[var(--primary)]
                      transition-all duration-300
                      bg-[var(--bg-secondary)]
                    "
                  >
                    <p className="font-semibold text-[var(--text-primary)]">
                      {p.title}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <Reveal delay={0.2}>
            <div className="relative w-full">
              <div
                className="
                  overflow-hidden shadow-xl rounded-2xl border
                  border-[var(--primary)]/30
                  [clip-path:polygon(12%_0%,100%_0%,100%_88%,88%_100%,0%_100%,0%_12%)]
                "
              >
                <img
                  src="/img-1.jpg"
                  alt="About the Hub"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              <div
                className="
                  absolute -bottom-5 -right-5 w-full h-full 
                  rounded-2xl bg-[var(--primary)]/15 
                  -z-10
                  [clip-path:polygon(12%_0%,100%_0%,100%_88%,88%_100%,0%_100%,0%_12%)]
                "
              />
            </div>
          </Reveal>
        </section>
      </Reveal>

      {/* 3. WHY CHOOSE US */}
      <Reveal>
        <section className="bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)] py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-4xl font-bold mb-14 leading-tight relative inline-block pb-3">
              Why <span className="text-[var(--primary)]">Choose Us</span>
              <span className="absolute left-0 bottom-0 w-28 h-[4px] bg-[var(--primary)]"></span>
              <span className="absolute left-0 bottom-[-7px] w-16 h-[var(--primary)]/50"></span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {pillars.map((p, i) => (
                <Reveal delay={i * 0.1} key={p.title}>
                  <PillarCard {...p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 4. PROGRAMS OVERVIEW */}
      <Reveal>
        <section className="max-w-[1200px] mx-auto py-24 px-6">
          <h2 className="text-4xl font-bold mb-14 leading-tight relative inline-block pb-3">
            Our <span className="text-[var(--primary)]">Programs</span>
            <span className="absolute left-0 bottom-0 w-28 h-[4px] bg-[var(--primary)]"></span>
            <span className="absolute left-0 bottom-[-7px] w-16 h-[var(--primary)]/50"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {programs.map((p, i) => (
              <Reveal delay={i * 0.1} key={p.slug}>
                <ProgramCard {...p} />
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 5. HOW IT WORKS */}
      <Reveal>
        <section className="bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)] py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 leading-tight relative inline-block pb-3">
              How <span className="text-[var(--primary)]">It Works</span>
              <span className="absolute left-0 bottom-0 w-28 h-[4px] bg-[var(--primary)]"></span>
              <span className="absolute left-0 bottom-[-7px] w-16 h-[var(--primary)]/50"></span>
            </h2>

            <div className="relative flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-[var(--primary)]/20 z-0"></div>
              <div className="md:hidden absolute top-0 left-5 w-1 h-full bg-[var(--primary)]/20 z-0"></div>

              {[
                {
                  title: "Apply",
                  description:
                    "Submit your application with your startup idea or tech skill interest.",
                },
                {
                  title: "Evaluation",
                  description:
                    "Our team reviews your application and shortlists eligible candidates.",
                },
                {
                  title: "Start Program",
                  description:
                    "Join mentorship, workshops, and hands-on projects tailored to your track.",
                },
                {
                  title: "Launch / Scale",
                  description:
                    "Launch your product or scale your skills and get real-world experience.",
                },
              ].map((step, i) => (
                <Reveal delay={i * 0.15} key={i}>
                  <div
                    className="
                      relative z-10
                      flex flex-col items-center text-center
                      md:flex-1 md:px-4 mb-12 md:mb-0
                    "
                  >
                    <div
                      className="
                        w-12 h-12 rounded-full bg-[var(--primary)] text-white
                        flex items-center justify-center font-bold text-lg
                        mb-4 shadow-md
                      "
                    >
                      {i + 1}
                    </div>

                    <div
                      className="
                        bg-white/10 dark:bg-[#0b1220]/20
                        rounded-xl border border-[var(--primary)]/30 dark:border-[var(--primary)]/20
                        shadow-sm hover:shadow-md transition-all duration-300
                        p-6 flex flex-col
                      "
                    >
                      <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 6. TRACKS */}
      <Reveal>
        <section className="max-w-[1200px] mx-auto py-24 px-6">
          <h2 className="text-4xl font-bold mb-16 relative inline-block pb-3">
            Learning <span className="text-[var(--primary)]">Tracks</span>
            <span className="absolute left-0 bottom-0 w-28 h-[4px] bg-[var(--primary)]"></span>
            <span className="absolute left-0 bottom-[-7px] w-16 h-[var(--primary)]/50"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {tracks.map((track, i) => (
              <Reveal delay={i * 0.1} key={track.id}>
                <TrackCard {...track} />
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>


      {/* 8. MENTORS PREVIEW */}
      <Reveal>
        <section className="max-w-[1200px] mx-auto py-24 px-6">
          <h2 className="text-4xl font-bold mb-16 relative inline-block pb-3">
            Meet Our <span className="text-[var(--primary)]">Mentors</span>
            <span className="absolute left-0 bottom-0 w-28 h-[4px] bg-[var(--primary)]"></span>
            <span className="absolute left-0 bottom-[-7px] w-16 h-[var(--primary)]/50"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {mentors.slice(0, 8).map((m, i) => (
              <Reveal delay={i * 0.1} key={m.name}>
                <div
                  className="
                    bg-white/10 dark:bg-[#0b1220]/20
                    border border-[var(--primary)]/30 dark:border-[var(--primary)]/25
                    rounded-xl
                    p-6 text-center
                    shadow-sm hover:shadow-md transition-all duration-300
                    hover:-translate-y-1
                    flex flex-col items-center
                  "
                >
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-[var(--primary)]/40 dark:border-[var(--primary)]/25"
                  />
                  <div className="mt-4 font-semibold text-[var(--text-primary)]">
                    {m.name}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] mt-1">
                    {m.role}
                  </div>
                  <div className="mt-2 text-sm text-[var(--text-secondary)]">
                    {m.expertise}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 9. CTA FOOTER */}
      <Reveal>
        <section className="py-24 bg-[var(--primary)] text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/5 rotate-6 pointer-events-none"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative inline-block pb-3">
            Ready to grow your startup or launch your tech career?
            <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-32 h-2 bg-white rounded-full"></span>
          </h2>

          <a
            href="/apply"
            className="
              px-10 py-4 bg-white text-[var(--primary)] font-semibold rounded-xl shadow-lg
              hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block
            "
          >
            Apply Now
          </a>
        </section>
      </Reveal>

    </div>
  );
}
