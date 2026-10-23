import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import { scrollToId } from '../lib/utils'
import { profile } from '../data/profile'
import { useLang } from '../i18n/LanguageContext'

const ease = [0.22, 1, 0.36, 1]

const reveal = (delay) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
})

function IdCard() {
  const constraints = useRef(null)
  const { t, data } = useLang()

  return (
    <div ref={constraints} className="relative flex h-[660px] w-full items-start justify-center sm:h-[740px] lg:h-[620px]">
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, type: 'spring', stiffness: 60, damping: 12 }}
        className="relative mt-36 sm:mt-44 lg:mt-24"
      >
        <motion.div
          drag
          dragConstraints={constraints}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          whileDrag={{ scale: 1.03, cursor: 'grabbing' }}
          className="relative cursor-grab touch-none select-none"
        >
        <motion.div
          animate={{ y: [0, -15, 0], rotateZ: [-1, 1, -1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top center' }}
          className="relative"
        >
          {/* Lanyard strip */}
          <div className="absolute bottom-full left-1/2 h-28 w-9 sm:h-40 lg:h-[100vh] -translate-x-1/2">
            <div className="h-full w-full bg-gradient-to-b from-[#00b373]/0 via-[#00b373] to-[#00df8f] [mask-image:linear-gradient(to_bottom,transparent,black_40%)]">
              <div className="flex h-full flex-col items-center justify-end gap-6 overflow-hidden pb-6 font-display text-[10px] font-bold tracking-[0.3em] text-[#0d1116]/70 [writing-mode:vertical-rl]">
                <span>REDA LAKSYER • BUSINESS INTELLIGENCE • REDA LAKSYER • DATA</span>
              </div>
            </div>
          </div>
          {/* Clip */}
          <div className="absolute -top-7 left-1/2 z-10 flex h-10 w-16 -translate-x-1/2 items-end justify-center rounded-t-xl bg-gradient-to-b from-gray-300 to-gray-500 shadow-lg">
            <div className="mb-2 h-2 w-8 rounded-full bg-[#0d1116]" />
          </div>

          <div className="relative w-[280px] rounded-[28px] bg-gradient-to-b from-[#232a35] to-[#14181f] p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),0_0_60px_-20px_rgba(0,223,143,0.35)] sm:w-[320px]">
            <div className="rounded-[20px] border border-white/10 p-2">
              <div className="mb-2 flex items-center justify-between px-2 pt-1 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                <span>ID • 2026</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00df8f]" /> {t.hero.available}
                </span>
              </div>
              <div className="relative h-[340px] overflow-hidden rounded-2xl sm:h-[390px]">
                <img
                  src={profile.photo}
                  alt={`${profile.firstName} ${profile.lastName}`}
                  draggable={false}
                  className="pointer-events-none h-full w-full object-cover object-[50%_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1116] via-[#0d1116]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-3xl font-bold leading-none tracking-tighter text-white">
                    {profile.firstName}
                    <span className="text-[#00df8f]">.</span>
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gray-300">
                    {data.shortRole}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 pb-1 pt-3">
                <div className="flex gap-[3px]">
                  {[3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2].map((w, i) => (
                    <span key={i} className="h-6 rounded-sm bg-white/30" style={{ width: w }} />
                  ))}
                </div>
                <span className="font-display text-xs font-bold tracking-widest text-[#00df8f]">RL—BI</span>
              </div>
            </div>
          </div>
        </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const { t, data } = useLang()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0d1116] bg-grid pt-24">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none font-display text-[20vw] font-bold leading-none tracking-tighter text-white opacity-[0.02]">
          DATA
        </span>
      </div>
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#00df8f]/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-5 sm:px-8 lg:grid-cols-2">
        <div className="pt-10 lg:pt-0">
          <motion.p {...reveal(0.1)} className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-gray-400 sm:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00df8f] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00df8f]" />
            </span>
            {data.role}
          </motion.p>

          <h1 className="font-display font-bold leading-[0.9] tracking-tighter">
            <motion.span {...reveal(0.2)} className="block text-5xl text-white sm:text-6xl md:text-7xl xl:text-8xl">
              DATA-DRIVEN
            </motion.span>
            <motion.span {...reveal(0.35)} className="mt-2 block text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
              <span className="text-outline">INSIGHTS</span>
              <span className="text-[#00df8f]">.</span>
            </motion.span>
          </h1>

          <motion.p {...reveal(0.5)} className="mt-8 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
            {t.hero.intro[0]}
            <span className="font-semibold text-white">{profile.firstName} {profile.lastName}</span>
            {t.hero.intro[1]}
          </motion.p>

          <motion.div {...reveal(0.65)} className="mt-10 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToId('work')}
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-[#00df8f] to-[#00b373] py-2 pl-7 pr-2 font-semibold text-[#0d1116] shadow-[0_10px_40px_-10px_rgba(0,223,143,0.7)]"
            >
              {t.hero.seeWork}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d1116] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full border border-white/15 bg-[#14181f] px-7 py-4 font-semibold text-white transition-colors hover:border-[#00df8f]/60"
            >
              <span className="h-2 w-2 rounded-full bg-[#00df8f]" />
              {t.hero.cv}
              <Download size={16} className="text-gray-400" />
            </motion.a>
          </motion.div>

          <motion.div {...reveal(0.8)} className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
            <span>SQL</span>
            <span>Power BI</span>
            <span>SSIS / SSAS</span>
            <span>Python</span>
            <span>Machine Learning</span>
            <span>LLM / RAG</span>
          </motion.div>
        </div>

        <IdCard />
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollToId('about')}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-semibold uppercase tracking-widest text-gray-500 md:flex"
      >
        {t.hero.scroll}
        <span className="relative h-10 w-6 rounded-full border border-white/20">
          <motion.span
            animate={{ y: [4, 18, 4] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="absolute left-1/2 h-2 w-1 -translate-x-1/2 rounded-full bg-[#00df8f]"
          />
        </span>
      </motion.button>
    </section>
  )
}
