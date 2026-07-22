import { Link } from 'react-router-dom'
import { BriefcaseBusiness, Globe, Send, Star, UserRound } from 'lucide-react'

const socialIconMap = {
  instagram: Globe,
  x: Send,
  linkedin: BriefcaseBusiness,
}

function TrainerCard({ trainer, onOpenProfile }) {
  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#F97316]/40">
      <div className="relative overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.alt}
          loading="lazy"
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.src = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80'
          }}
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
            <p className="mt-1 text-sm text-[#F97316]">{trainer.specialty}</p>
          </div>
          <div className="rounded-full bg-[#F97316]/10 p-2 text-[#F97316]">
            <UserRound size={16} />
          </div>
        </div>

        <p className="mt-3 text-sm text-[#A3A3A3]">{trainer.biography}</p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-[#E5E5E5]">
          <div className="rounded-xl bg-white/5 p-3">
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#A3A3A3]">Experience</span>
            <span className="mt-1 block font-semibold">{trainer.experience}</span>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#A3A3A3]">Clients</span>
            <span className="mt-1 block font-semibold">{trainer.clients}+</span>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#A3A3A3]">Rating</span>
            <span className="mt-1 flex items-center gap-1 font-semibold">
              <Star size={14} className="text-[#F97316]" />
              {trainer.rating}
            </span>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#A3A3A3]">Available</span>
            <span className="mt-1 block font-semibold">{trainer.days.join(', ')}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          {Object.entries(trainer.socials).map(([key, value]) => {
            const Icon = socialIconMap[key] || UserRound
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

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onOpenProfile(trainer)}
            className="rounded-full bg-[#F97316] px-4 py-2.5 text-sm font-semibold text-[#090909] transition hover:bg-[#fb923c]"
          >
            View Profile
          </button>
          <Link
            to="/contact"
            className="rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#F97316] hover:text-[#F97316]"
          >
            Book Session
          </Link>
        </div>
      </div>
    </article>
  )
}

export default TrainerCard
