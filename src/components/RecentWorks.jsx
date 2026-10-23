import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp } from '../lib/utils'
import { profile, projects } from '../data/profile'

const ease = [0.32, 0.72, 0, 1]

export default function RecentWorks() {
  const [activeIdx, setActiveIdx] = useState(0)
  const total = projects.length
  const active = projects[activeIdx]

  const handleCardClick = (idx) => {
    setActiveIdx(idx === activeIdx ? (activeIdx + 1) % total : idx)
  }

  return (
    <section id="work" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <motion.p {...fadeUp} className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#00df8f] sm:text-sm">
              03 — Projets
            </motion.p>
            <motion.h2 {...fadeUp} className="font-display text-4xl font-bold leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              RECENT <span className="text-outline">WORKS</span>
              <span className="text-[#00df8f]">.</span>
            </motion.h2>
          </div>
          <motion.a
            {...fadeUp}
            href={profile.socials.find((s) => s.label === 'GitHub').href}
            target="_blank"
            rel="noreferrer"
            className="group flex w-fit items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-[#00df8f] hover:text-[#00df8f]"
          >
            Voir tout sur GitHub
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          {/* The stack */}
          <motion.div {...fadeUp} className="lg:col-span-7">
            <div className="relative h-[340px] sm:h-[450px] md:h-[480px]" style={{ perspective: 1400 }}>
              {projects.map((p, idx) => {
                const diff = (idx - activeIdx + total) % total
                const visible = diff < 4
                return (
                  <motion.button
                    key={p.id}
                    onClick={() => handleCardClick(idx)}
                    aria-label={p.title}
                    initial={false}
                    animate={{
                      y: diff * 35,
                      scale: 1 - diff * 0.05,
                      rotateX: diff * 2,
                      opacity: visible ? 1 - diff * 0.15 : 0,
                      zIndex: total - diff,
                    }}
                    whileHover={diff === 0 ? { y: -6 } : { y: diff * 35 - 6 }}
                    transition={{ duration: 0.7, ease }}
                    style={{ transformOrigin: 'top center', pointerEvents: visible ? 'auto' : 'none' }}
                    className="absolute inset-x-0 top-0 h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-[#14181f] bg-[radial-gradient(circle_at_30%_20%,rgba(0,223,143,0.25),transparent_60%)] text-left shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] sm:h-[350px] md:h-[370px]"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.visibility = 'hidden'
                      }}
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1116]/90 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#00df8f] sm:text-xs">{p.category}</p>
                        <p className="mt-1 font-display text-lg font-bold tracking-tight text-white sm:text-2xl">{p.title}</p>
                      </div>
                      <span className="font-display text-sm font-bold text-white/40">
                        {String(idx + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
                      </span>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            <div className="flex items-center justify-center gap-3">
              {projects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Projet ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    idx === activeIdx ? 'w-10 bg-[#00df8f]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <div className="lg:col-span-5 lg:pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease }}
              >
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#00df8f] sm:text-sm">
                  <span className="h-px w-8 bg-[#00df8f]" />
                  {active.category}
                </p>
                <h3 className="mt-5 font-display text-3xl font-bold leading-[0.95] tracking-tighter sm:text-4xl md:text-5xl">
                  {active.title}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg">{active.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={active.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#00df8f] to-[#00b373] py-2 pl-6 pr-2 font-semibold text-[#0d1116]"
                >
                  Explorer le projet
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d1116] text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
