import { useState } from 'react'
import { Link } from 'react-router-dom'
import MembershipHero from '../components/membership/MembershipHero'
import BillingToggle from '../components/membership/BillingToggle'
import PricingPlans from '../components/membership/PricingPlans'
import ComparisonTable from '../components/membership/ComparisonTable'
import MembershipBenefits from '../components/membership/MembershipBenefits'
import MembershipFAQ from '../components/membership/MembershipFAQ'
import { pricingPlans } from '../data/membershipData'

function Membership() {
  const [billing, setBilling] = useState('Monthly')

  return (
    <main className="bg-[#0A0A0A] text-white">
      <MembershipHero />
      <BillingToggle billing={billing} onToggle={setBilling} />
      <PricingPlans plans={pricingPlans} billing={billing} />
      <ComparisonTable />
      <MembershipBenefits />
      <MembershipFAQ />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#F97316]/20 bg-[linear-gradient(135deg,rgba(249,115,22,0.15),rgba(17,17,17,0.95))] p-8 sm:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FDBA74]">Ready to Start?</p>
              <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Build your stronger routine with IronPulse</h2>
              <p className="mt-3 text-base text-[#D4D4D4]">
                Choose the tier that fits your current goals and upgrade anytime as your training evolves.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/signup"
                className="rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-[#090909] transition hover:bg-[#fb923c]"
              >
                Join Membership
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#F97316] hover:text-[#F97316]"
              >
                Talk to a Coach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Membership
