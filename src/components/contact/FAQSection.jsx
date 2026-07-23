import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { contactFAQs } from '../../data/contactData'
import SectionHeading from '../common/SectionHeading'

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Answers to the questions our members and visitors ask most before getting started."
      />

      <div className="mt-8 space-y-3">
        {contactFAQs.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={item.question}
              className={`overflow-hidden rounded-[20px] border bg-[#111111] transition duration-300 ${
                isOpen ? 'border-[#F97316]/40' : 'border-white/10'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-base font-semibold text-white">{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#F97316] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm text-[#A3A3A3]">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQSection
