import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { content } from '../data/profile'
import { ui } from './ui'

const STORAGE_KEY = 'portfolio-lang'
const WIPE_MS = 1100

const LanguageContext = createContext(null)

const initialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'fr' || saved === 'en') return saved
  } catch {
    // Stockage indisponible (navigation privée…)
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr'
}

function LanguageWipe({ lang }) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
      animate={{ clipPath: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 100%)'] }}
      transition={{ duration: WIPE_MS / 1000, times: [0, 0.45, 1], ease: [0.76, 0, 0.24, 1] }}
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#00df8f] to-[#00b373]"
    >
      <motion.span
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: [40, 0, 0, -40], opacity: [0, 1, 1, 0] }}
        transition={{ duration: WIPE_MS / 1000, times: [0.15, 0.4, 0.6, 0.85] }}
        className="font-display text-[22vw] font-bold leading-none tracking-tighter text-[#0d1116]"
      >
        {lang.toUpperCase()}
        <span className="text-white">.</span>
      </motion.span>
    </motion.div>
  )
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)
  const [wipe, setWipe] = useState(null)
  const timers = useRef([])

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignoré : la langue reste valable pour cette visite
    }
  }, [lang])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const setLang = useCallback(
    (next) => {
      if (next === lang || wipe) return
      setWipe(next)
      timers.current = [
        // La langue change quand le rideau couvre tout l'écran
        setTimeout(() => setLangState(next), WIPE_MS * 0.45),
        setTimeout(() => setWipe(null), WIPE_MS),
      ]
    },
    [lang, wipe],
  )

  const value = { lang, setLang, t: ui[lang], data: content[lang] }

  return (
    <LanguageContext.Provider value={value}>
      {children}
      <AnimatePresence>{wipe && <LanguageWipe key={wipe} lang={wipe} />}</AnimatePresence>
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LanguageContext)
