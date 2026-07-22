import { motion } from 'framer-motion'
import { HeartHandshake, ShieldCheck, Sparkles, TimerReset, UserRoundCheck, Wheat } from 'lucide-react'
import { features } from '../../data/homeData'
import SectionHeading from '../common/SectionHeading'

const iconMap = {
  'Modern Equipment': Sparkles,
  'Certified Trainers': ShieldCheck,
  'Personalized Plans': UserRoundCheck,
  'Flexible Timings': TimerReset,
  'Nutrition Guidance': Wheat,
  'Clean Environment': HeartHandshake,
}

function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-4xl border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.17),transparent_36%),linear-gradient(135deg,#111111,#171717)] p-6 lg:p-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Luxury-level fitness design, backed by smart support."
          description="Everything at IronPulse is curated to help you stay consistent, feel stronger, and train with confidence."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.title]
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-3xl border border-white/10 bg-[#111111]/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F97316]/40"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-[#F97316]/10 p-3 text-[#F97316]">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-[#A3A3A3]">{feature.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
