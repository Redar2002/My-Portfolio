import { motion } from 'framer-motion'
import { fadeUp } from '../lib/utils'
import { useLang } from '../i18n/LanguageContext'

export default function About() {
  const { t, data } = useLang()
  const { skillGroups, softSkills, languages } = data
  const p1 = t.about.p1

  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <motion.p {...fadeUp} className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#00df8f] sm:text-sm">
            {t.about.label}
          </motion.p>
          <motion.h2 {...fadeUp} className="font-display text-4xl font-bold leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {t.about.title[0]} <span className="text-outline">{t.about.title[1]}</span>
            <span className="text-[#00df8f]">{t.about.title[2]}</span>
          </motion.h2>
          <motion.p {...fadeUp} className="mt-8 text-base leading-relaxed text-gray-400 sm:text-lg">
            {p1.map((part, i) => (i % 2 ? <span key={i} className="text-white">{part}</span> : part))}
          </motion.p>
          <motion.p {...fadeUp} className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            {t.about.p2}
          </motion.p>

          <motion.div {...fadeUp} className="mt-12 flex flex-wrap items-stretch gap-y-6">
            {t.about.stats.map((s, i) => (
              <div key={s.label} className="flex items-stretch">
                {i > 0 && <span className="mx-6 w-px bg-white/10 sm:mx-10" />}
                <div>
                  <p className="font-display text-4xl font-bold tracking-tighter text-white sm:text-5xl">
                    {s.value.replace(/[%+]/, '')}
                    <span className="text-[#00df8f]">{s.value.match(/[%+]/)?.[0]}</span>
                  </p>
                  <p className="mt-2 max-w-[9rem] text-xs font-semibold uppercase tracking-widest text-gray-500">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          className="relative h-fit overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md sm:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#00df8f]/10 blur-3xl" />
          <div className="relative">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold tracking-tighter sm:text-3xl">{t.about.toolbox}</h3>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                {skillGroups.reduce((n, g) => n + g.items.length, 0)} {t.about.skills}
              </span>
            </div>
            <div className="space-y-7">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#00df8f]">{group.title}</p>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((s, i) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="cursor-default rounded-full border border-white/10 bg-[#14181f]/80 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-[#00df8f] hover:text-[#00df8f] hover:shadow-[0_0_15px_rgba(0,223,143,0.3)]"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="my-8 h-px bg-white/10" />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">{t.about.soft}</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {softSkills.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[#00df8f]" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">{t.about.languages}</p>
                <ul className="space-y-2">
                  {languages.map((l) => (
                    <li key={l.name} className="flex items-center justify-between gap-4 rounded-lg border border-white/10 px-3 py-1.5 text-sm">
                      <span className="text-gray-300">{l.name}</span>
                      <span className="text-xs uppercase tracking-widest text-gray-500">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
