import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { fadeUp } from '../lib/utils'
import { useLang } from '../i18n/LanguageContext'

export default function Services() {
  const [open, setOpen] = useState(0)
  const { t, data } = useLang()

  return (
    <section className="relative border-t border-white/10 bg-[#0b0e12] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.p {...fadeUp} className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[#00df8f] sm:text-sm">
          {t.services.label}
        </motion.p>
        <motion.h2 {...fadeUp} className="mb-16 text-center font-display text-4xl font-bold leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl">
          {t.services.title[0]} <span className="text-outline">{t.services.title[1]}</span>
          <span className="text-[#00df8f]">.</span>
        </motion.h2>

        <ul className="border-t border-white/10">
          {data.stages.map((s, i) => {
            const isOpen = open === i
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-5 py-7 text-left sm:gap-8 sm:py-8"
                >
                  <span className={`font-display text-sm font-bold transition-colors ${isOpen ? 'text-[#00df8f]' : 'text-gray-600'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`flex-1 font-display text-2xl font-bold tracking-tighter transition-colors sm:text-4xl md:text-5xl ${
                      isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`}
                  >
                    {s.title}
                  </span>
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-12 sm:w-12 ${
                      isOpen
                        ? 'rotate-180 border-[#00df8f] bg-[#00df8f] text-[#0d1116]'
                        : 'border-white/15 text-white group-hover:border-[#00df8f] group-hover:text-[#00df8f]'
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-8 pl-10 text-base leading-relaxed text-gray-400 sm:pl-14 sm:text-lg">{s.text}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
