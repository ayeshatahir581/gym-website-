import { motion } from 'framer-motion'
import ProgramCard from './ProgramCard'

function ProgramsGrid({ programs, onOpenDetails }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {programs.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <ProgramCard program={program} onOpenDetails={onOpenDetails} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProgramsGrid
