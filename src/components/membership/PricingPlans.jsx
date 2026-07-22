import { motion } from 'framer-motion'
import PricingCard from './PricingCard'

function PricingPlans({ plans, billing }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <PricingCard plan={plan} billing={billing} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default PricingPlans
