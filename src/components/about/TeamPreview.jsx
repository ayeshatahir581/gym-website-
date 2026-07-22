import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { teamPreview } from '../../data/aboutData'

function TeamPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">Meet the Team</p>
          <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Coaches who elevate every session</h2>
        </div>
        <div className="hidden items-center gap-2 text-sm text-[#A3A3A3] md:flex">
          <span>Book a consultation</span>
          <ArrowUpRight size={16} className="text-[#F97316]" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {teamPreview.map((coach, index) => (
          <motion.article
            key={coach.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111]"
          >
            <img
              src={coach.image}
              alt={coach.alt}
              loading="lazy"
              className="h-72 w-full object-cover"
              onError={(event) => {
                event.currentTarget.src = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
              }}
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-white">{coach.name}</h3>
              <p className="mt-1 text-sm text-[#F97316]">{coach.specialty}</p>
              <p className="mt-3 text-sm text-[#A3A3A3]">{coach.experience} of experience in premium coaching</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default TeamPreview
