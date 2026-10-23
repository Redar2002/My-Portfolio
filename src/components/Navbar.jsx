import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { scrollToId } from '../lib/utils'
import { profile } from '../data/profile'

const links = [
  { label: 'À propos', id: 'about' },
  { label: 'Parcours', id: 'journey' },
  { label: 'Projets', id: 'work' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full bg-[#0f1115]/80 backdrop-blur-md transition-all duration-500 ${
        scrolled ? 'h-20 border-b border-white/10' : 'h-24 border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => go()}
          className="font-display text-2xl font-bold tracking-tighter text-white"
          aria-label="Retour en haut"
        >
          {profile.firstName.toUpperCase()}
          <span className="text-[#00df8f]">.</span>
        </button>

        <div className="flex items-center gap-6 md:gap-10">
          <ul className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="group relative text-sm font-semibold uppercase tracking-wider text-gray-300 transition-colors hover:text-[#00df8f]"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#00df8f] transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#14181f] transition-colors hover:border-[#00df8f]/60"
          >
            <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#00df8f]/40" />
            <motion.span
              animate={{ scale: open ? 1.6 : 1 }}
              className="relative h-3 w-3 rounded-full bg-[#00df8f] shadow-[0_0_12px_rgba(0,223,143,0.8)]"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="absolute right-4 top-full mt-3 w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#14181f]/95 p-6 shadow-2xl backdrop-blur-xl sm:right-8"
          >
            <ul className="space-y-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => go(l.id)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 font-display text-2xl font-bold uppercase tracking-tighter text-white transition-colors hover:bg-white/5 hover:text-[#00df8f]"
                  >
                    {l.label}
                    <span className="text-xs font-medium tracking-widest text-gray-500">0{i + 1}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
            <div className="mt-5 border-t border-white/10 pt-5 text-sm text-gray-400">
              <a href={`mailto:${profile.email}`} className="block break-all hover:text-[#00df8f]">
                {profile.email}
              </a>
              <a href={profile.cv} target="_blank" rel="noreferrer" className="mt-2 inline-block text-[#00df8f]">
                Télécharger mon CV ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
