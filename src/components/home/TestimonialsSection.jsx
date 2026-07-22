import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/homeData'
import SectionHeading from '../common/SectionHeading'

function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Testimonials"
        title="What our members are saying."
        description="Real stories from people who’ve turned commitment into visible, lasting results."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="rounded-[28px] border border-white/10 bg-[#171717] p-5"
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                loading="lazy"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-white">{testimonial.name}</h3>
                <p className="text-sm text-[#A3A3A3]">{testimonial.duration}</p>
              </div>
            </div>

            <div className="mt-4 flex gap-1 text-[#F97316]">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={`${testimonial.name}-${starIndex}`} size={16} fill="currentColor" />
              ))}
            </div>

            <Quote className="mt-4 text-[#F97316]" size={24} />
            <p className="mt-2 text-sm leading-6 text-[#D4D4D4]">{testimonial.quote}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
