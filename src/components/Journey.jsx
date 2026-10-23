import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { fadeUp } from '../lib/utils'
import { education, experiences } from '../data/profile'

function Timeline({ icon: Icon, title, items, render }) {
  return (
    <div>
      <motion.div {...fadeUp} className="mb-10 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#14181f] text-[#00df8f]">
          <Icon size={20} />
        </span>
        <h3 className="font-display text-2xl font-bold tracking-tighter sm:text-3xl">{title}</h3>
      </motion.div>
      <ol className="relative border-l border-white/10">
        {items.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group relative pb-10 pl-8 last:pb-0"
          >
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-[#14181f] ring-2 ring-white/20 transition-all duration-300 group-hover:bg-[#00df8f] group-hover:ring-[#00df8f]/40" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00df8f]">{item.year}</p>
            <h4 className="mt-2 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">{item.title}</h4>
            {render(item)}
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

export default function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-20 border-t border-white/10 bg-[#0b0e12] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.p {...fadeUp} className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#00df8f] sm:text-sm">
          02 — Parcours
        </motion.p>
        <motion.h2 {...fadeUp} className="mb-16 font-display text-4xl font-bold leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          EXPÉRIENCE & <span className="text-outline">FORMATION</span>
          <span className="text-[#00df8f]">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Timeline
              icon={Briefcase}
              title="Expériences"
              items={experiences}
              render={(e) => (
                <>
                  <p className="mt-1 text-sm text-gray-500">{e.place}</p>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                        <span className="mt-2.5 h-px w-3 shrink-0 bg-[#00df8f]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            />
          </div>
          <div className="lg:col-span-5">
            <Timeline
              icon={GraduationCap}
              title="Formation"
              items={education}
              render={(e) => (
                <>
                  <p className="mt-1 text-sm text-gray-400">{e.school}</p>
                  <span className="mt-3 inline-block rounded-full border border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-gray-400">
                    {e.detail}
                  </span>
                </>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
