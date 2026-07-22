import { motion } from 'framer-motion'
import { facilities } from '../../data/aboutData'

function FacilitiesShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">Facilities</p>
        <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Train inside a premium environment</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {facilities.map((facility, index) => (
          <motion.article
            key={facility.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111]"
          >
            <img
              src={facility.image}
              alt={facility.alt}
              loading="lazy"
              className="h-56 w-full object-cover"
              onError={(event) => {
                event.currentTarget.src = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80'
              }}
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-white">{facility.title}</h3>
              <p className="mt-2 text-sm text-[#A3A3A3]">{facility.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default FacilitiesShowcase
