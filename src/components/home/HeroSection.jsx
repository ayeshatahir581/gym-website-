import { motion } from 'framer-motion'
import { ArrowRight, Clock3, Dumbbell, Sparkles } from 'lucide-react'
import { imageUrls } from '../../data/homeData'
import PrimaryButton from '../common/PrimaryButton'
import SecondaryButton from '../common/SecondaryButton'

function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black">
        <img
          src={imageUrls.hero}
          alt="Premium gym interior with athlete training in a high-end fitness facility"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,9,0.92),rgba(9,9,9,0.58),rgba(9,9,9,0.72))]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/40 bg-[#F97316]/10 px-3 py-1 text-xs font-semibold text-[#FDBA74]">
              <Sparkles size={14} />
              Transform Your Body
            </div>

            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Train Hard. <span className="text-[#F97316]">Live Strong.</span>
              </h1>
              <p className="max-w-xl text-base text-[#D4D4D4] sm:text-lg">
                Step into a premium training environment where elite coaching, powerful results, and a luxury fitness experience come together.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <PrimaryButton href="#membership">Start Your Journey</PrimaryButton>
              <SecondaryButton href="#programs">Explore Programs</SecondaryButton>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-white">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <Dumbbell size={16} className="text-[#F97316]" />
                2500+ Active Members
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <Clock3 size={16} className="text-[#F97316]" />
                Open 24/7
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
          >
            <div className="rounded-3xl border border-white/10 bg-[#111111]/80 p-5 backdrop-blur-sm">
              <p className="text-sm text-[#A3A3A3]">Signature offer</p>
              <p className="mt-2 text-2xl font-bold text-white">Elite Coaching</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-[#D4D4D4]">
                <ArrowRight size={16} className="text-[#F97316]" />
                Personalized performance plans
              </div>
            </div>
            <div className="rounded-3xl border border-[#F97316]/30 bg-[#F97316]/10 p-5 backdrop-blur-sm">
              <p className="text-sm text-[#FDBA74]">Premium member perks</p>
              <p className="mt-2 text-2xl font-bold text-white">Recovery + Mobility</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[#A3A3A3]">
        Scroll
      </div>
    </section>
  )
}

export default HeroSection
