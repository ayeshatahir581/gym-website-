import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { storyContent } from '../../data/aboutData'

function OurStory() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src={storyContent.image}
            alt={storyContent.alt}
            loading="lazy"
            className="h-105 w-full rounded-3xl object-cover"
            onError={(event) => {
              event.currentTarget.src = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
            }}
          />
          <div className="absolute left-4 top-4 rounded-full border border-[#F97316]/50 bg-[#090909]/90 px-3 py-2 text-xs font-semibold text-[#FDBA74]">
            {storyContent.badge}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">Our Story</p>
          <h2 className="text-3xl font-black text-white sm:text-4xl">{storyContent.title}</h2>
          <p className="text-base text-[#A3A3A3]">{storyContent.description}</p>

          <div className="space-y-3">
            {storyContent.points.map((point) => (
              <div key={point} className="flex items-start gap-3 text-[#E5E5E5]">
                <CheckCircle2 size={18} className="mt-0.5 text-[#F97316]" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory
