import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { membershipFAQs } from '../../data/membershipData'

function MembershipFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">FAQ</p>
        <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Questions members usually ask</h2>
      </div>

      <div className="space-y-3">
        {membershipFAQs.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={item.question} className="rounded-[20px] border border-white/10 bg-[#111111]">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-base font-semibold text-white">{item.question}</span>
                <ChevronDown size={18} className={`text-[#F97316] transition ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && <p className="px-5 pb-4 text-sm text-[#A3A3A3]">{item.answer}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default MembershipFAQ
