import { Clock3 } from 'lucide-react'
import { businessHours } from '../../data/contactData'

function BusinessHours() {
  const today = new Date().getDay()

  return (
    <div className="rounded-[28px] border border-white/10 bg-[#111111] p-6 sm:p-7">
      <div className="mb-5 flex items-center gap-3">
        <div className="inline-flex rounded-2xl bg-[#F97316]/10 p-3 text-[#F97316]">
          <Clock3 size={20} />
        </div>
        <h3 className="text-lg font-bold text-white">Business Hours</h3>
      </div>

      <ul className="space-y-3">
        {businessHours.map((entry) => {
          const isToday = entry.days.includes(today)
          return (
            <li
              key={entry.label}
              className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition ${
                isToday
                  ? 'border border-[#F97316]/40 bg-[#F97316]/10 text-white'
                  : 'border border-white/5 bg-white/5 text-[#D4D4D4]'
              }`}
            >
              <span className="flex items-center gap-2 font-semibold">
                {entry.label}
                {isToday && (
                  <span className="rounded-full bg-[#F97316] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#090909]">
                    Today
                  </span>
                )}
              </span>
              <span className={isToday ? 'text-[#FDBA74]' : 'text-[#A3A3A3]'}>{entry.hours}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BusinessHours
