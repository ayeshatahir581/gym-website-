import { motion } from 'framer-motion'
import { Camera, Globe2, MessageCircle } from 'lucide-react'
import { trainers } from '../../data/homeData'
import PrimaryButton from '../common/PrimaryButton'
import SectionHeading from '../common/SectionHeading'

function TrainersPreview() {
  return (
    <section id="trainers" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Elite Coaches"
        title="Meet the trainers behind your next breakthrough."
        description="Our specialists guide every rep, every plan, and every milestone with precision and care."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {trainers.map((trainer, index) => (
          <motion.article
            key={trainer.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#171717]"
          >
            <div className="relative overflow-hidden">
              <img
                src={trainer.image}
                alt={trainer.alt}
                loading="lazy"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#090909]/85 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2 text-white backdrop-blur"><Camera size={14} /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-2 text-white backdrop-blur"><Globe2 size={14} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 text-white backdrop-blur"><MessageCircle size={14} /></a>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
              <p className="mt-1 text-sm text-[#F97316]">{trainer.specialty}</p>
              <p className="mt-3 text-sm text-[#A3A3A3]">{trainer.experience} of experience</p>
              <button type="button" className="mt-4 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#F97316]/50 hover:text-[#F97316]">
                View Profile
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <PrimaryButton href="#contact">Meet All Trainers</PrimaryButton>
      </div>
    </section>
  )
}

export default TrainersPreview
