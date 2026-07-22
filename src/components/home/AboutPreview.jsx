import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { imageUrls } from '../../data/homeData'
import SecondaryButton from '../common/SecondaryButton'
import SectionHeading from '../common/SectionHeading'

const checklist = [
  'Certified Trainers',
  'Modern Equipment',
  'Personal Training Plans',
  'Flexible Timings',
]

function AboutPreview() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src={imageUrls.about}
            alt="Luxury gym facility with modern equipment and training space"
            loading="lazy"
            className="h-[26rem] w-full rounded-3xl object-cover"
          />
          <div className="absolute left-4 top-4 rounded-full border border-[#F97316]/50 bg-[#090909]/90 px-3 py-2 text-xs font-semibold text-[#FDBA74]">
            10+ Years of Excellence
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <SectionHeading
            eyebrow="About IronPulse"
            title="Transform your body and build your confidence with every session."
            description="A premium gym experience designed to elevate your strength, discipline, and lifestyle — all under one elite roof."
            align="left"
          />

          <div className="space-y-3">
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-3 text-[#E5E5E5]">
                <CheckCircle2 size={18} className="text-[#F97316]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <SecondaryButton href="#membership" className="mt-2">
            Learn More
            <ArrowRight size={16} className="ml-2" />
          </SecondaryButton>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPreview
