import { Link } from 'react-router-dom'
import { Activity, Dumbbell, HeartPulse, Leaf, Scale, UserRound, Waves, Zap } from 'lucide-react'

const iconMap = {
  dumbbell: Dumbbell,
  muscle: Dumbbell,
  scale: Scale,
  fitness: Activity,
  zap: Zap,
  heart: HeartPulse,
  leaf: Leaf,
  activity: Activity,
  user: UserRound,
  waves: Waves,
}

function ProgramCard({ program, onOpenDetails }) {
  const Icon = iconMap[program.suitableIcon] || Dumbbell

  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#F97316]/40">
      <div className="relative overflow-hidden">
        <img
          src={program.image}
          alt={program.alt}
          loading="lazy"
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.src = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80'
          }}
        />
      </div>

      <div className="flex h-[calc(100%-15rem)] flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#F97316]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FDBA74]">
            {program.category}
          </span>
          <div className="rounded-full bg-white/5 p-2 text-[#F97316]">
            <Icon size={16} />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white">{program.title}</h3>
        <p className="mt-3 text-sm text-[#A3A3A3]">{program.description}</p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-[#E5E5E5]">
          <div className="rounded-xl bg-white/5 p-3">
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#A3A3A3]">Difficulty</span>
            <span className="mt-1 block font-semibold">{program.difficulty}</span>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#A3A3A3]">Duration</span>
            <span className="mt-1 block font-semibold">{program.duration}</span>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#A3A3A3]">Sessions</span>
            <span className="mt-1 block font-semibold">{program.sessionsPerWeek}/week</span>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#A3A3A3]">Suitable</span>
            <span className="mt-1 block font-semibold">{program.suitable}</span>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onOpenDetails(program)}
            className="rounded-full bg-[#F97316] px-4 py-2.5 text-sm font-semibold text-[#090909] transition hover:bg-[#fb923c]"
          >
            View Details
          </button>
          <Link
            to="/signup"
            className="rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#F97316] hover:text-[#F97316]"
          >
            Join
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProgramCard
