import { motion } from 'framer-motion'
import { Dumbbell, ShieldCheck, Trophy, Users } from 'lucide-react'
import { stats } from '../../data/homeData'

const iconMap = {
  users: Users,
  trophy: Trophy,
  dumbbell: Dumbbell,
  shield: ShieldCheck,
}

function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = iconMap[stat.icon]
          return (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-[#171717] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F97316]/50 hover:shadow-[0_12px_40px_rgba(249,115,22,0.16)]"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-[#F97316]/10 p-3 text-[#F97316]">
                <Icon size={20} />
              </div>
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-[#A3A3A3]">{stat.label}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default StatsSection
