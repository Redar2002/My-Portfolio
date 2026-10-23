import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import { useLang } from '../i18n/LanguageContext'

const ease = [0.32, 0.72, 0, 1]
const SPARKS = 14

function Sparks() {
  return (
    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {Array.from({ length: SPARKS }).map((_, i) => {
        const angle = (i / SPARKS) * Math.PI * 2
        const dist = 38 + (i % 3) * 14
        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, scale: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`absolute rounded-full ${i % 2 ? 'h-1.5 w-1.5 bg-[#00df8f]' : 'h-1 w-1 bg-white'}`}
          />
        )
      })}
    </span>
  )
}

export default function ContactCurtain({ open, anchor, onClose, onSeeContact }) {
  const panel = useRef(null)
  const [copied, setCopied] = useState(false)
  const { t } = useLang()
  const [burst, setBurst] = useState(0)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (panel.current?.contains(e.target) || anchor.current?.contains(e.target)) return
      onClose()
    }
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [open, anchor, onClose])

  useEffect(() => {
    if (!open) setCopied(false)
  }, [open])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      // Ancien navigateur : sélection + copie manuelle
      const input = document.createElement('input')
      input.value = profile.email
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }
    setCopied(true)
    setBurst((b) => b + 1)
    setTimeout(() => setCopied(false), 2200)
  }

  const rect = anchor.current?.getBoundingClientRect()

  return (
    <AnimatePresence>
      {open && rect && (
        <motion.div
          ref={panel}
          role="dialog"
          aria-label={t.navbar.contactMe}
          initial={{ clipPath: 'inset(0% 0% 100% 0% round 28px)', y: -10 }}
          animate={{ clipPath: 'inset(0% 0% 0% 0% round 28px)', y: 0 }}
          exit={{ clipPath: 'inset(0% 0% 100% 0% round 28px)', y: -10 }}
          transition={{ duration: 0.65, ease }}
          style={{ top: rect.bottom + 14, right: Math.max(12, window.innerWidth - rect.right) }}
          className="fixed z-[60] w-[340px] overflow-hidden rounded-[28px] border border-white/10 bg-[#14181f]/95 p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9),0_0_50px_-20px_rgba(0,223,143,0.6)] backdrop-blur-2xl"
        >
          {/* Ourlet lumineux du rideau */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.25, duration: 0.6, ease }}
            className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-transparent via-[#00df8f] to-transparent"
          />
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00df8f]/15 blur-3xl" />

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
            className="relative"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } }}
              className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00df8f] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00df8f]" />
              </span>
              {t.curtain.status}
            </motion.p>

            <motion.p
              variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } }}
              className="mt-4 font-display text-2xl font-bold leading-none tracking-tighter text-white"
            >
              {t.curtain.title}<span className="text-[#00df8f]">.</span>
            </motion.p>

            <motion.button
              variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } }}
              whileTap={{ scale: 0.97 }}
              onClick={copy}
              className={`group relative mt-5 flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors duration-300 ${
                copied ? 'border-[#00df8f] bg-[#00df8f]/10' : 'border-white/10 bg-white/5 hover:border-[#00df8f]/60'
              }`}
            >
              <span className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-gray-500">{t.curtain.email}</span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'ok' : 'mail'}
                    initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                    transition={{ duration: 0.25 }}
                    className={`mt-1 block truncate text-sm font-semibold ${copied ? 'text-[#00df8f]' : 'text-white'}`}
                  >
                    {copied ? t.curtain.copied : profile.email}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span
                className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                  copied ? 'bg-[#00df8f] text-[#0d1116]' : 'bg-white/10 text-white group-hover:bg-[#00df8f] group-hover:text-[#0d1116]'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'check' : 'copy'}
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {copied ? <Check size={18} /> : <Copy size={16} />}
                  </motion.span>
                </AnimatePresence>
                {burst > 0 && <Sparks key={burst} />}
              </span>
            </motion.button>

            <motion.div
              variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } }}
              className="mt-3 grid grid-cols-2 gap-3"
            >
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-[#00df8f]/60 hover:text-white"
              >
                Gmail
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:rotate-45" />
              </a>
              <a
                href={profile.phoneHref}
                className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-[#00df8f]/60 hover:text-white"
              >
                {t.curtain.call}
                <Phone size={14} />
              </a>
            </motion.div>

            <motion.button
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              onClick={onSeeContact}
              className="mt-5 w-full text-center text-[11px] font-semibold uppercase tracking-widest text-gray-500 transition-colors hover:text-[#00df8f]"
            >
              {t.curtain.seeContact}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
