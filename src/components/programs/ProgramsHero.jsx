import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

function ProgramsHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
          alt="Premium dark gym environment with athletes training"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,9,0.92),rgba(9,9,9,0.65),rgba(9,9,9,0.82))]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-2 text-sm text-[#A3A3A3]">
            <span>Home</span>
            <ChevronRight size={14} />
            <span className="text-[#F97316]">Programs</span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">Our Programs</p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Training Programs Built for Every Goal
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[#D4D4D4] sm:text-lg">
            Discover performance-driven training tracks designed to help you build strength, improve conditioning, recover smarter, and stay consistent from week to week.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramsHero
