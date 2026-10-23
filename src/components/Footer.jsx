import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { fadeUp, scrollToId } from '../lib/utils'
import { profile } from '../data/profile'

const menu = [
  { label: 'Accueil', id: null },
  { label: 'À propos', id: 'about' },
  { label: 'Parcours', id: 'journey' },
  { label: 'Projets', id: 'work' },
]

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Presse-papiers indisponible : le lien mailto prend le relais
    }
  }

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 pb-10 pt-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <span className="translate-y-[18%] select-none font-display text-[25vw] font-bold leading-none tracking-tighter text-white opacity-[0.05]">
          CONTACT
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p {...fadeUp} className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#00df8f] sm:text-sm">
              05 — Contact
            </motion.p>
            <motion.h2 {...fadeUp} className="font-display text-5xl font-bold leading-[0.9] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              TRAVAILLONS <span className="text-outline">ENSEMBLE</span>
              <span className="text-[#00df8f]">?</span>
            </motion.h2>
            <motion.p {...fadeUp} className="mt-8 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
              Ingénieur BI & Data disponible pour de nouvelles opportunités — Business Intelligence,
              analyse de données, data engineering ou IA appliquée. Parlons de votre projet.
            </motion.p>
            <motion.div {...fadeUp} className="mt-10 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={`mailto:${profile.email}`}
                onClick={copyEmail}
                className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-7 pr-2 font-semibold text-black"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'copied' : 'email'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {copied ? 'Adresse copiée !' : profile.email}
                  </motion.span>
                </AnimatePresence>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00df8f] text-[#0d1116] transition-transform duration-300 group-hover:rotate-12">
                  {copied ? <Check size={18} /> : <Copy size={16} />}
                </span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#14181f] py-2 pl-7 pr-2 font-semibold text-white transition-colors hover:border-[#00df8f]/60"
              >
                Écrire via Gmail
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </motion.a>
            </motion.div>
            <motion.div {...fadeUp} className="mt-10 flex flex-col gap-3 text-sm text-gray-400 sm:flex-row sm:gap-8">
              <a href={profile.phoneHref} className="flex items-center gap-2 hover:text-[#00df8f]">
                <Phone size={16} className="text-[#00df8f]" /> {profile.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-[#00df8f]" /> {profile.location}
              </span>
              <a href={profile.cv} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#00df8f]">
                <Mail size={16} className="text-[#00df8f]" /> CV (PDF)
              </a>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="grid grid-cols-2 gap-10 lg:col-span-5 lg:justify-self-end">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-500">Menu</p>
              <ul className="space-y-4">
                {menu.map((m) => (
                  <li key={m.label}>
                    <button onClick={() => scrollToId(m.id)} className="text-lg font-medium text-gray-300 transition-colors hover:text-[#00df8f]">
                      {m.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-500">Réseaux</p>
              <ul className="space-y-4">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 text-lg font-medium text-gray-300 transition-colors hover:text-[#00df8f]"
                    >
                      {s.label}
                      <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-32 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-500 sm:mt-48 sm:flex-row">
          <p>© 2026 Reda Laksyer Portfolio. Tous droits réservés.</p>
          <div className="flex gap-6">
            <span>{profile.location}</span>
            <button onClick={() => scrollToId()} className="uppercase tracking-widest hover:text-[#00df8f]">
              Haut de page ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
