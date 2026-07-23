import { motion } from 'framer-motion'
import { CalendarDays, Dumbbell, Trophy, Users } from 'lucide-react'

const heroImage = 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80'
const fallbackImage = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80'

const stats = [
  { icon: Users, value: '2500+', label: 'Members' },
  { icon: Trophy, value: '25+', label: 'Trainers' },
  { icon: CalendarDays, value: '7 Days', label: 'Open' },
]

function AuthLayout({ children }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] shadow-2xl shadow-black/40 lg:grid-cols-2"
      >
        <div className="relative isolate flex min-h-[280px] flex-col justify-between overflow-hidden p-8 sm:p-10 lg:min-h-[640px]">
          <img
            src={heroImage}
            alt="Athlete training with heavy weights inside a premium IronPulse gym"
            loading="eager"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.src = fallbackImage
            }}
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,rgba(9,9,9,0.9),rgba(9,9,9,0.55)_45%,rgba(9,9,9,0.92))]" />

          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F97316]/50 bg-[#F97316]/10 text-[#F97316]">
              <Dumbbell size={20} />
            </span>
            <div>
              <p className="text-lg font-black tracking-[0.18em] text-white">IRONPULSE</p>
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#A3A3A3]">Gym</p>
            </div>
          </div>

          <div>
            <p className="max-w-sm text-xl font-bold italic leading-snug text-white sm:text-2xl">
              &ldquo;Discipline is the bridge between goals and results.&rdquo;
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm"
                >
                  <stat.icon size={16} className="mx-auto text-[#F97316]" />
                  <p className="mt-2 text-sm font-black text-white sm:text-base">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[#A3A3A3]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center p-8 sm:p-10 lg:p-14">
          <div className="w-full">{children}</div>
        </div>
      </motion.div>
    </section>
  )
}

export default AuthLayout
