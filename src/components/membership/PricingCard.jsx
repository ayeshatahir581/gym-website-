import { Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'

function PricingCard({ plan, billing }) {
  const price = billing === 'Monthly' ? plan.monthlyPrice : plan.yearlyPrice
  const isYearly = billing === 'Yearly'

  return (
    <article
      className={`group h-full rounded-[28px] border p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 ${
        plan.badge === 'Most Popular'
          ? 'border-[#F97316]/80 bg-[#151515] shadow-orange-500/10'
          : 'border-white/10 bg-[#111111]'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
          <p className="mt-2 text-sm text-[#A3A3A3]">{plan.description}</p>
        </div>
        {plan.badge && (
          <span className="rounded-full bg-[#F97316] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#090909]">
            {plan.badge}
          </span>
        )}
      </div>

      <div className="mt-6 flex items-end gap-2">
        <span className="text-5xl font-black text-white">${price}</span>
        <span className="pb-1 text-sm text-[#A3A3A3]">/{isYearly ? 'year' : 'month'}</span>
      </div>

      <div className="mt-3 text-sm text-[#A3A3A3]">
        {isYearly ? 'Billed annually at $' + plan.yearlyPrice : 'Billed monthly'}
      </div>

      <ul className="mt-6 space-y-3 text-sm text-[#E5E5E5]">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check size={16} className="mt-0.5 text-[#F97316]" />
            <span>{feature}</span>
          </li>
        ))}
        {plan.excluded.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-[#A3A3A3]">
            <X size={16} className="mt-0.5 text-[#A3A3A3]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          to="/signup"
          className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
            plan.badge === 'Most Popular'
              ? 'bg-[#F97316] text-[#090909] hover:bg-[#fb923c]'
              : 'border border-white/10 bg-transparent text-white hover:border-[#F97316] hover:text-[#F97316]'
          }`}
        >
          Join Now
        </Link>
      </div>
    </article>
  )
}

export default PricingCard
