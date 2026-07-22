import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BriefcaseBusiness, Globe, Send, Star, X } from 'lucide-react'

const socialIconMap = {
  instagram: Globe,
  x: Send,
  linkedin: BriefcaseBusiness,
}

function TrainerModal({ trainer, onClose }) {
  useEffect(() => {
    if (!trainer) {
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
  }, [trainer, onClose])

  if (!trainer) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6" onClick={onClose}>
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-white/10 bg-[#111111] shadow-2xl shadow-black/40"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-[#F97316] hover:text-[#090909]"
            aria-label="Close trainer profile"
          >
            <X size={18} />
          </button>
          <img
            src={trainer.image}
            alt={trainer.alt}
            className="h-72 w-full object-cover"
            onError={(event) => {
              event.currentTarget.src = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80'
            }}
          />
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#F97316]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FDBA74]">
              {trainer.specialty}
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#A3A3A3]">
              {trainer.experience}
            </span>
          </div>

          <h3 className="mt-4 text-3xl font-black text-white">{trainer.name}</h3>
          <p className="mt-3 text-base text-[#D4D4D4]">{trainer.fullBiography}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Specialties</p>
              <p className="mt-2 text-sm text-white">{trainer.specialties.join(', ')}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Certifications</p>
              <p className="mt-2 text-sm text-white">{trainer.certifications.join(', ')}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Weekly Availability</p>
              <p className="mt-2 text-sm text-white">{trainer.days.join(', ')}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Rating & Clients</p>
              <p className="mt-2 flex items-center gap-1 text-sm text-white">
                <Star size={14} className="text-[#F97316]" />
                {trainer.rating} / {trainer.clients}+ clients
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2">
            {Object.entries(trainer.socials).map(([key, value]) => {
              const Icon = socialIconMap[key] || Instagram
              return (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 p-2 text-[#A3A3A3] transition hover:border-[#F97316] hover:text-[#F97316]"
                  aria-label={key}
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-[#090909] transition hover:bg-[#fb923c]"
            >
              Book Session
            </Link>
            <Link
              to="/signup"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#F97316] hover:text-[#F97316]"
            >
              Join IronPulse
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainerModal
