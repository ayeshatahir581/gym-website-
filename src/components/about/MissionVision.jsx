import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'
import { missionVision } from '../../data/aboutData'

const iconMap = {
  target: Target,
  eye: Eye,
}

function MissionVision() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">Mission & Vision</p>
        <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Why IronPulse stands apart</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {missionVision.map((item, index) => {
          const Icon = iconMap[item.icon]
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-[#111111] p-6"
            >
              <div className="mb-4 inline-flex rounded-full bg-[#F97316]/10 p-3 text-[#F97316]">
                <Icon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-[#A3A3A3]">{item.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default MissionVision
