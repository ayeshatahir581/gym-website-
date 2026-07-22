import { motion } from 'framer-motion'
import { Activity, Dumbbell, Flame, HeartPulse, PersonStanding, Sparkles, Target, Users, Waves, Zap } from 'lucide-react'
import { scheduleData } from '../../data/scheduleData'

const iconMap = {
  dumbbell: Dumbbell,
  flame: Flame,
  zap: Zap,
  activity: Activity,
  'heart-pulse': HeartPulse,
  waves: Waves,
  'person-standing': PersonStanding,
  sparkles: Sparkles,
  target: Target,
}

const featuredClasses = scheduleData.filter((session) => session.featured)

function WeeklySchedule() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">Featured Classes</p>
          <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">A sample of what's running this week</h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {featuredClasses.map((session, index) => {
          const Icon = iconMap[session.icon] || Users
          return (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[22px] border border-white/10 bg-[#111111] p-5"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex rounded-full bg-[#F97316]/10 p-3 text-[#F97316]">
                  <Icon size={20} />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-[#A3A3A3]">
                  {session.day}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">{session.className}</h3>
              <p className="mt-1 text-sm text-[#A3A3A3]">Trainer: {session.trainer}</p>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-white/5 px-3 py-1 font-semibold text-white">
                  {session.startTime} - {session.endTime}
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 font-semibold text-white">{session.difficulty}</span>
                <span className="rounded-full bg-white/5 px-3 py-1 font-semibold text-white">
                  {session.spotsAvailable} / {session.totalCapacity} spots
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default WeeklySchedule
