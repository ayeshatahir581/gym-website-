import { motion } from 'framer-motion'
import { ArrowRight, Activity, Dumbbell, HeartPulse, Leaf, TimerReset, Trophy } from 'lucide-react'
import { programs } from '../../data/homeData'
import PrimaryButton from '../common/PrimaryButton'
import SectionHeading from '../common/SectionHeading'

const iconMap = {
  'Strength Training': Dumbbell,
  Bodybuilding: Trophy,
  'Weight Loss': Activity,
  CrossFit: TimerReset,
  Cardio: HeartPulse,
  Yoga: Leaf,
}

function ProgramsSection() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Popular Programs"
        title="Choose a training path that matches your ambition."
        description="Explore six premium classes built to challenge, energize, and deliver measurable progress."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {programs.map((program, index) => {
          const Icon = iconMap[program.title]
          return (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#171717]"
            >
              <div className="overflow-hidden">
                <img
                  src={program.image}
                  alt={program.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl bg-[#F97316]/10 p-2 text-[#F97316]">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-xl font-bold text-white">{program.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-[#A3A3A3]">{program.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#D4D4D4]">
                  <span className="rounded-full border border-white/10 px-3 py-1">{program.difficulty}</span>
                  <span className="rounded-full border border-white/10 px-3 py-1">{program.duration}</span>
                </div>
                <div className="mt-5">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316]">
                    View Details <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>

      <div className="mt-8 text-center">
        <PrimaryButton href="#schedule">View All Programs</PrimaryButton>
      </div>
    </section>
  )
}

export default ProgramsSection
