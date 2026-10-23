import { motion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'

const langs = ['fr', 'en']

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang()

  return (
    <motion.button
      onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
      whileTap={{ scale: 0.92 }}
      aria-label={t.navbar.switchTo}
      title={t.navbar.switchTo}
      className="group relative flex h-11 items-center rounded-full border border-white/15 bg-[#14181f] p-1 transition-colors hover:border-[#00df8f]/60"
    >
      {langs.map((l) => {
        const active = l === lang
        return (
          <span key={l} className="relative flex h-full w-10 items-center justify-center">
            {active && (
              <motion.span
                layoutId="lang-thumb"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00df8f] to-[#00b373] shadow-[0_0_18px_rgba(0,223,143,0.6)]"
              />
            )}
            <span
              className={`relative font-display text-xs font-bold tracking-wider transition-colors duration-300 ${
                active ? 'text-[#0d1116]' : 'text-gray-400 group-hover:text-white'
              }`}
            >
              {l.toUpperCase()}
            </span>
          </span>
        )
      })}
    </motion.button>
  )
}
