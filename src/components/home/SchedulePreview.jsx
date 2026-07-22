import { motion } from 'framer-motion'
import { CalendarRange } from 'lucide-react'
import { schedule } from '../../data/homeData'
import PrimaryButton from '../common/PrimaryButton'
import SectionHeading from '../common/SectionHeading'

function SchedulePreview() {
  return (
    <section id="schedule" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Weekly Schedule"
        title="See what your week looks like at IronPulse."
        description="A curated mix of strength, cardio, mobility, and performance-driven classes across the week."
      />

      <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#171717]">
        <div className="hidden grid-cols-5 gap-0 md:grid">
          <div className="border-b border-white/10 bg-[#111111] p-4 text-sm font-semibold text-[#A3A3A3]">Day</div>
          <div className="border-b border-white/10 bg-[#111111] p-4 text-sm font-semibold text-[#A3A3A3]">Class</div>
          <div className="border-b border-white/10 bg-[#111111] p-4 text-sm font-semibold text-[#A3A3A3]">Trainer</div>
          <div className="border-b border-white/10 bg-[#111111] p-4 text-sm font-semibold text-[#A3A3A3]">Time</div>
          <div className="border-b border-white/10 bg-[#111111] p-4 text-sm font-semibold text-[#A3A3A3]">Duration</div>
          {schedule.map((item, index) => (
            <motion.div
              key={`${item.day}-${item.className}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className={`col-span-5 grid grid-cols-5 border-b border-white/10 last:border-b-0 ${item.featured ? 'bg-[#F97316]/10' : ''}`}
            >
              <div className="p-4 text-sm text-white">{item.day}</div>
              <div className="p-4 text-sm text-white">{item.className}</div>
              <div className="p-4 text-sm text-white">{item.trainer}</div>
              <div className="p-4 text-sm text-white">{item.time}</div>
              <div className="p-4 text-sm text-white">{item.duration}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-3 p-4 md:hidden">
          {schedule.map((item) => (
            <div key={`${item.day}-${item.className}`} className={`rounded-2xl border p-4 ${item.featured ? 'border-[#F97316]/50 bg-[#F97316]/10' : 'border-white/10 bg-[#111111]'}`}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#F97316]">{item.day}</span>
                <span className="rounded-full bg-white/5 px-2 py-1 text-xs text-white">{item.time}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-white">{item.className}</h3>
              <p className="mt-1 text-sm text-[#A3A3A3]">Trainer: {item.trainer}</p>
              <p className="mt-1 text-sm text-[#A3A3A3]">Duration: {item.duration}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <PrimaryButton href="#contact">
          <CalendarRange size={16} className="mr-2" />
          View Full Schedule
        </PrimaryButton>
      </div>
    </section>
  )
}

export default SchedulePreview
