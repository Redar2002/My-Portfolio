import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { scrollToId } from '../lib/utils'
import { profile } from '../data/profile'

const links = [
  { label: 'À propos', id: 'about' },
  { label: 'Parcours', id: 'journey' },
  { label: 'Projets', id: 'work' },
  { label: 'Contact', id: 'contact' },
]

const spring = { type: 'spring', stiffness: 260, damping: 30 }
const ease = [0.32, 0.72, 0, 1]

function useActiveSection() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    const onTop = () => window.scrollY < 200 && setActive(null)
    window.addEventListener('scroll', onTop, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onTop)
    }
  }, [])

  return active
}

function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 15, mass: 0.4 })
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 15, mass: 0.4 })

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={reset} style={{ x, y }} className={className}>
      {children}
    </motion.div>
  )
}

function Logo({ onClick }) {
  const letters = profile.firstName.toUpperCase().split('')
  return (
    <motion.button
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
      aria-label="Retour en haut"
      className="relative flex items-center font-display text-2xl font-bold tracking-tighter text-white"
    >
      {letters.map((l, i) => (
        <motion.span
          key={i}
          variants={{ rest: { y: 0 }, hover: { y: [0, -6, 0] } }}
          transition={{ duration: 0.45, delay: i * 0.05, ease: 'easeOut' }}
          className="inline-block"
        >
          {l}
        </motion.span>
      ))}
      <motion.span
        variants={{ rest: { scale: 1 }, hover: { scale: 1.6 } }}
        transition={spring}
        className="ml-0.5 inline-block h-2 w-2 self-end rounded-full bg-[#00df8f] shadow-[0_0_10px_rgba(0,223,143,0.9)] [margin-bottom:0.42rem]"
      />
    </motion.button>
  )
}

function MenuToggle({ open, onClick }) {
  return (
    <Magnetic>
      <button
        onClick={onClick}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={open}
        className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 ${
          open ? 'border-[#00df8f] bg-[#00df8f]' : 'border-white/15 bg-[#14181f] hover:border-[#00df8f]/60'
        }`}
      >
        <motion.span
          animate={open ? { rotate: 45, y: 0, backgroundColor: '#0d1116' } : { rotate: 0, y: -4, backgroundColor: '#ffffff' }}
          transition={spring}
          className="absolute h-[2px] w-5 rounded-full"
        />
        <motion.span
          animate={open ? { rotate: -45, x: 0, y: 0, width: 20, backgroundColor: '#0d1116' } : { rotate: 0, x: 4, y: 4, width: 12, backgroundColor: '#00df8f' }}
          transition={spring}
          className="absolute h-[2px] rounded-full"
        />
      </button>
    </Magnetic>
  )
}

function MobileMenu({ active, onNavigate }) {
  return (
    <motion.div
      initial={{ clipPath: 'circle(0% at 92% 48px)' }}
      animate={{ clipPath: 'circle(150% at 92% 48px)' }}
      exit={{ clipPath: 'circle(0% at 92% 48px)' }}
      transition={{ duration: 0.8, ease }}
      className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-[#0d1116] bg-grid px-6 pb-10 pt-32 sm:px-10"
    >
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#00df8f]/15 blur-[120px]" />

      <ul className="relative space-y-2">
        {links.map((l, i) => (
          <motion.li
            key={l.id}
            initial={{ opacity: 0, y: 60, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.7, ease }}
            className="overflow-hidden"
          >
            <button
              onClick={() => onNavigate(l.id)}
              className="group flex w-full items-baseline gap-5 py-2 text-left"
            >
              <span className="font-display text-sm font-bold text-[#00df8f]">0{i + 1}</span>
              <span
                className={`font-display text-5xl font-bold uppercase leading-none tracking-tighter transition-all duration-500 group-hover:translate-x-3 sm:text-7xl ${
                  active === l.id ? 'text-outline' : 'text-white group-hover:text-[#00df8f]'
                }`}
              >
                {l.label}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className="relative mt-16 space-y-6 border-t border-white/10 pt-8"
      >
        <a href={`mailto:${profile.email}`} className="block break-all font-display text-xl font-bold tracking-tight text-white">
          {profile.email}
        </a>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-widest text-gray-400">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-[#00df8f]">
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [hovered, setHovered] = useState(null)
  const active = useActiveSection()

  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 40)
    setHidden(y > prev && y > 300)
  })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const go = (id) => {
    setOpen(false)
    // Laisse le menu se refermer avant de défiler
    setTimeout(() => scrollToId(id), open ? 350 : 0)
  }

  const compact = scrolled && !open

  return (
    <>
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: hidden && !open ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-5"
      >
        <motion.nav
          initial={false}
          animate={{
            maxWidth: compact ? 880 : 1280,
            marginTop: compact ? 14 : 0,
            height: compact ? 64 : 96,
            borderRadius: compact ? 9999 : 0,
            paddingLeft: compact ? 22 : 20,
            paddingRight: compact ? 10 : 20,
          }}
          transition={spring}
          className={`relative flex w-full items-center justify-between overflow-hidden border transition-[background-color,border-color,box-shadow] duration-500 sm:px-8 ${
            compact
              ? 'border-white/10 bg-[#14181f]/70 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_40px_-20px_rgba(0,223,143,0.5)] backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <Logo onClick={() => go()} />

          <ul className="hidden items-center md:flex" onMouseLeave={() => setHovered(null)}>
            {links.map((l) => {
              const isActive = active === l.id
              return (
                <li key={l.id} className="relative" onMouseEnter={() => setHovered(l.id)}>
                  {hovered === l.id && (
                    <motion.span
                      layoutId="nav-hover"
                      transition={spring}
                      className="absolute inset-0 rounded-full bg-white/[0.06]"
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={spring}
                      className="absolute inset-0 rounded-full border border-[#00df8f]/40 bg-[#00df8f]/10 shadow-[0_0_20px_rgba(0,223,143,0.25)]"
                    />
                  )}
                  <button
                    onClick={() => go(l.id)}
                    className={`relative block overflow-hidden px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? 'text-[#00df8f]' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <motion.span
                      className="block"
                      animate={{ y: hovered === l.id ? '-160%' : '0%' }}
                      transition={{ duration: 0.35, ease }}
                    >
                      {l.label}
                    </motion.span>
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 flex items-center justify-center text-[#00df8f]"
                      initial={false}
                      animate={{ y: hovered === l.id ? '0%' : '160%' }}
                      transition={{ duration: 0.35, ease }}
                    >
                      {l.label}
                    </motion.span>
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Magnetic className="hidden md:block">
              <a
                href={`mailto:${profile.email}`}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#00df8f] to-[#00b373] py-2 pl-5 pr-2 text-sm font-semibold text-[#0d1116] shadow-[0_8px_30px_-8px_rgba(0,223,143,0.7)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Me contacter</span>
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#0d1116] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </Magnetic>
            <div className="md:hidden">
              <MenuToggle open={open} onClick={() => setOpen((o) => !o)} />
            </div>
          </div>

          {/* Scroll progress */}
          <motion.span
            style={{ scaleX: progress }}
            animate={{ opacity: compact ? 1 : 0 }}
            className="absolute inset-x-6 bottom-0 h-[2px] origin-left rounded-full bg-gradient-to-r from-[#00df8f] to-[#00b373]"
          />
        </motion.nav>
      </motion.header>

      <AnimatePresence>{open && <MobileMenu active={active} onNavigate={go} />}</AnimatePresence>
    </>
  )
}
