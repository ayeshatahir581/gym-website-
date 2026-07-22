import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Crown, Sparkles } from 'lucide-react'
import { pricingPlans } from '../../data/homeData'
import PrimaryButton from '../common/PrimaryButton'
import SectionHeading from '../common/SectionHeading'

function MembershipPreview() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="membership" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Membership"
        title="Choose your level of commitment."
        description="Flexible plans designed to support beginners, performance-driven members, and elite athletes alike."
      />

      <div className="mt-6 flex items-center justify-center gap-3 rounded-full border border-white/10 bg-[#111111] p-1">
        <button
          type="button"
          onClick={() => setIsYearly(false)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${!isYearly ? 'bg-[#F97316] text-[#090909]' : 'text-[#A3A3A3]'}`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setIsYearly(true)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${isYearly ? 'bg-[#F97316] text-[#090909]' : 'text-[#A3A3A3]'}`}
        >
          Yearly
        </button>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className={`rounded-[28px] border p-6 ${plan.featured ? 'border-[#F97316]/70 bg-[linear-gradient(180deg,rgba(249,115,22,0.14),rgba(23,23,23,1))] shadow-[0_14px_50px_rgba(249,115,22,0.18)]' : 'border-white/10 bg-[#171717]'}`}
          >
            {plan.featured ? (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F97316] px-3 py-1 text-xs font-bold text-[#090909]">
                <Sparkles size={14} /> Most Popular
              </div>
            ) : null}

            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              {plan.featured ? <Crown size={18} className="text-[#F97316]" /> : null}
            </div>
            <p className="mt-3 text-sm text-[#A3A3A3]">{plan.description}</p>

            <div className="mt-5 flex items-end gap-2">
              <span className="text-5xl font-black text-white">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
              <span className="pb-1 text-sm text-[#A3A3A3]">/ {isYearly ? 'year' : 'month'}</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-[#E5E5E5]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5 text-[#F97316]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-2xl border border-white/10 bg-[#111111] p-4 text-sm text-[#A3A3A3]">
              <p className="font-semibold text-white">Not included</p>
              <p className="mt-1">{plan.excluded.join(' • ')}</p>
            </div>

            <div className="mt-6">
              <PrimaryButton href="#contact" className="w-full">Join Now</PrimaryButton>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default MembershipPreview
