import { Check, X } from 'lucide-react'
import { comparisonRows } from '../../data/membershipData'

function ComparisonTable() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">Compare Plans</p>
        <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">See exactly what each membership includes</h2>
      </div>

      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]">
        <div className="hidden grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-0 md:grid">
          <div className="border-b border-white/10 p-4 font-semibold text-[#A3A3A3]">Features</div>
          <div className="border-b border-l border-white/10 p-4 text-center font-semibold text-white">Basic</div>
          <div className="border-b border-l border-white/10 p-4 text-center font-semibold text-white">Pro</div>
          <div className="border-b border-l border-white/10 p-4 text-center font-semibold text-white">Elite</div>

          {comparisonRows.map((row) => (
            <div key={row.label} className="contents">
              <div className="border-b border-white/10 p-4 text-[#E5E5E5]">{row.label}</div>
              <div className="border-b border-l border-white/10 p-4 text-center">
                {row.basic ? <Check size={18} className="mx-auto text-[#F97316]" /> : <X size={18} className="mx-auto text-[#A3A3A3]" />}
              </div>
              <div className="border-b border-l border-white/10 p-4 text-center">
                {row.pro ? <Check size={18} className="mx-auto text-[#F97316]" /> : <X size={18} className="mx-auto text-[#A3A3A3]" />}
              </div>
              <div className="border-b border-l border-white/10 p-4 text-center">
                {row.elite ? <Check size={18} className="mx-auto text-[#F97316]" /> : <X size={18} className="mx-auto text-[#A3A3A3]" />}
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden space-y-3 p-4">
          {comparisonRows.map((row) => (
            <div key={row.label} className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-4">
              <p className="text-sm font-semibold text-white">{row.label}</p>
              <div className="mt-3 grid grid-cols-3 gap-3 text-sm text-[#E5E5E5]">
                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3]">Basic</span>
                  {row.basic ? <Check size={16} className="mx-auto mt-2 text-[#F97316]" /> : <X size={16} className="mx-auto mt-2 text-[#A3A3A3]" />}
                </div>
                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3]">Pro</span>
                  {row.pro ? <Check size={16} className="mx-auto mt-2 text-[#F97316]" /> : <X size={16} className="mx-auto mt-2 text-[#A3A3A3]" />}
                </div>
                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3]">Elite</span>
                  {row.elite ? <Check size={16} className="mx-auto mt-2 text-[#F97316]" /> : <X size={16} className="mx-auto mt-2 text-[#A3A3A3]" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComparisonTable
