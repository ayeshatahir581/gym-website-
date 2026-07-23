import { motion } from 'framer-motion'
import { Dumbbell, Shield, Trophy, Users } from 'lucide-react'
import SignupForm from '../components/auth/SignupForm'
import SignupBenefits from '../components/auth/SignupBenefits'
import { signupHero, signupStats } from '../data/signupData'

const statIconMap = {
  users: Users,
  trophy: Trophy,
  dumbbell: Dumbbell,
  shield: Shield,
}

function Signup() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] shadow-2xl shadow-black/40 lg:grid-cols-2"
        >
          <div className="p-8 sm:p-10 lg:p-14">
            <SignupForm />
          </div>

          <div className="relative isolate order-first min-h-[280px] overflow-hidden lg:order-last lg:min-h-full">
            <img
              src={signupHero.image}
              alt={signupHero.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.src = signupHero.fallbackImage
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(9,9,9,0.88),rgba(9,9,9,0.5)_45%,rgba(9,9,9,0.92))]" />

            <div className="relative flex h-full min-h-[280px] flex-col justify-end p-8 sm:p-10 lg:min-h-full">
              <p className="max-w-sm text-base font-semibold text-white sm:text-lg">{signupHero.caption}</p>
            </div>
          </div>
        </motion.div>
      </section>

      <SignupBenefits />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.17),transparent_36%),linear-gradient(135deg,#111111,#171717)] p-6 lg:p-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#F97316]">Why Join IronPulse</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Trusted by a growing community of members
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {signupStats.map((stat, index) => {
              const Icon = statIconMap[stat.icon]
              return (
                <motion.article
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-[#171717] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#F97316]/50"
                >
                  <div className="mb-3 inline-flex rounded-2xl bg-[#F97316]/10 p-3 text-[#F97316]">
                    <Icon size={20} />
                  </div>
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-[#A3A3A3]">{stat.label}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Signup
