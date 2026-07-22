import { motion } from 'framer-motion'
import { CalendarDays, ChartNoAxesCombined, Clock3, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { scheduleBenefits } from '../../data/scheduleData'

const iconMap = {
  clock: Clock3,
  shield: ShieldCheck,
  users: Users,
  sparkles: Sparkles,
  chart: ChartNoAxesCombined,
  calendar: CalendarDays,
}

function ScheduleBenefits() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">Why Train With Us</p>
        <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Classes designed around your week</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {scheduleBenefits.map((benefit, index) => {
          const Icon = iconMap[benefit.icon]
          return (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[22px] border border-white/10 bg-[#111111] p-5"
            >
              <div className="mb-3 inline-flex rounded-full bg-[#F97316]/10 p-3 text-[#F97316]">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm text-[#A3A3A3]">{benefit.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default ScheduleBenefits
