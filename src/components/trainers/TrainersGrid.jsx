import { motion } from 'framer-motion'
import TrainerCard from './TrainerCard'

function TrainersGrid({ trainers, onOpenProfile }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {trainers.map((trainer, index) => (
          <motion.div
            key={trainer.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <TrainerCard trainer={trainer} onOpenProfile={onOpenProfile} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TrainersGrid
