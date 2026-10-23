import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

const langs = ['fr', 'en']

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang()
  const dragged = useRef(false)

  const choose = (l) => {
    // Un glisser-déposer ne doit pas changer la langue
    if (dragged.current) return
    setLang(l)
  }

  return (
    <div className="pointer-events-none fixed bottom-5 left-3 z-40 flex sm:left-5 xl:inset-y-0 xl:left-6 xl:items-center">
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 120, damping: 14 }}
        className="pointer-events-auto"
      >
        <motion.div
          drag
          dragSnapToOrigin
          dragElastic={0.35}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          onDragStart={() => (dragged.current = true)}
          onDragEnd={() => setTimeout(() => (dragged.current = false), 50)}
          whileHover={{ scale: 1.08 }}
          whileDrag={{ scale: 1.12, rotate: -6, cursor: 'grabbing' }}
          className="cursor-grab touch-none"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="group relative flex flex-col items-center gap-1 rounded-full border border-white/10 bg-[#14181f]/80 p-1.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9),0_0_30px_-10px_rgba(0,223,143,0.5)] backdrop-blur-xl"
            role="group"
            aria-label={t.navbar.switchTo}
          >
            {/* Halo qui respire */}
            <motion.span
              animate={{ opacity: [0.25, 0.6, 0.25], scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-[#00df8f]/20 blur-xl"
            />

            <span className="hidden h-8 w-10 items-center justify-center text-gray-500 sm:flex transition-colors group-hover:text-[#00df8f]">
              <motion.span
                animate={{ rotate: lang === 'fr' ? 0 : 360 }}
                transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              >
                <Languages size={16} />
              </motion.span>
            </span>

            {langs.map((l) => {
              const active = l === lang
              return (
                <motion.button
                  key={l}
                  onClick={() => choose(l)}
                  whileTap={{ scale: 0.85 }}
                  aria-pressed={active}
                  className="relative flex h-9 w-9 items-center justify-center rounded-full sm:h-10 sm:w-10"
                >
                  {active && (
                    <motion.span
                      layoutId="lang-thumb"
                      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00df8f] to-[#00b373] shadow-[0_0_20px_rgba(0,223,143,0.7)]"
                    />
                  )}
                  <span
                    className={`relative font-display text-xs font-bold tracking-wider transition-colors duration-300 ${
                      active ? 'text-[#0d1116]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {l.toUpperCase()}
                  </span>
                </motion.button>
              )
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
