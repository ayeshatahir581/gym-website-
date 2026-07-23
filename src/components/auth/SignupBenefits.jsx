import { motion } from 'framer-motion'
import { Clock, Infinity as InfinityIcon, PartyPopper, ShieldCheck, Sparkles, Wheat } from 'lucide-react'
import { signupBenefits } from '../../data/signupData'
import SectionHeading from '../common/SectionHeading'

const iconMap = {
  shield: ShieldCheck,
  infinity: InfinityIcon,
  sparkles: Sparkles,
  wheat: Wheat,
  party: PartyPopper,
  clock: Clock,
}

function SignupBenefits() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Membership Benefits"
        title="Everything you need to train at your best"
        description="Every IronPulse membership is backed by premium support, equipment, and community."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {signupBenefits.map((benefit, index) => {
          const Icon = iconMap[benefit.icon]
          return (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-[#111111] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F97316]/40"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-[#F97316]/10 p-3 text-[#F97316]">
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

export default SignupBenefits
