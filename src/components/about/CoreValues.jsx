import { motion } from 'framer-motion'
import { BadgeCheck, Shield, Users, Trophy, Repeat2, TrendingUp } from 'lucide-react'
import { coreValues } from '../../data/aboutData'

const iconMap = {
  shield: Shield,
  users: Users,
  trophy: Trophy,
  repeat: Repeat2,
  trending: TrendingUp,
  badge: BadgeCheck,
}

function CoreValues() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">Our Principles</p>
        <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">The values behind every session</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {coreValues.map((value, index) => {
          const Icon = iconMap[value.icon]
          return (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[22px] border border-white/10 bg-[#111111] p-5"
            >
              <div className="mb-3 inline-flex rounded-full bg-[#F97316]/10 p-3 text-[#F97316]">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">{value.title}</h3>
              <p className="mt-2 text-sm text-[#A3A3A3]">{value.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default CoreValues
