import { useEffect } from 'react'
import { X } from 'lucide-react'
import { classBenefits } from '../../data/scheduleData'

function ClassDetailsModal({ session, onClose, onReserve }) {
  useEffect(() => {
    if (!session) {
      document.body.style.overflow = ''
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [session, onClose])

  if (!session) return null

  const benefits = classBenefits.benefitsList[session.category] || []

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6" onClick={onClose}>
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-white/10 bg-[#111111] shadow-2xl shadow-black/40"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative p-6">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/5 p-2 text-white transition hover:bg-[#F97316] hover:text-[#090909]"
            aria-label="Close class details"
          >
            <X size={18} />
          </button>

          <span className="inline-block rounded-full bg-[#F97316]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FDBA74]">
            {session.category}
          </span>

          <h3 className="mt-4 text-3xl font-black text-white">{session.className}</h3>
          <p className="mt-3 text-base text-[#D4D4D4]">{session.description}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Trainer</p>
              <p className="mt-2 text-sm font-semibold text-white">{session.trainer}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Day & Time</p>
              <p className="mt-2 text-sm font-semibold text-white">
                {session.day}, {session.startTime} - {session.endTime}
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Duration</p>
              <p className="mt-2 text-sm font-semibold text-white">{session.duration}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Difficulty</p>
              <p className="mt-2 text-sm font-semibold text-white">{session.difficulty}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Studio</p>
              <p className="mt-2 text-sm font-semibold text-white">{session.studio}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Available Spots</p>
              <p className="mt-2 text-sm font-semibold text-white">
                {session.spotsAvailable} / {session.totalCapacity}
              </p>
            </div>
          </div>

          {benefits.length > 0 && (
            <div className="mt-5">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Class Benefits</p>
              <ul className="mt-2 space-y-2 text-sm text-[#E5E5E5]">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#F97316]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">What to Bring</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {classBenefits.whatToBring.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-[#A3A3A3]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onReserve(session)}
              className="rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-[#090909] transition hover:bg-[#fb923c]"
            >
              Reserve Spot
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#F97316] hover:text-[#F97316]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassDetailsModal
