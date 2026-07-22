import { motion } from 'framer-motion'

function ScheduleCards({ classes, onOpenDetails, onReserve }) {
  return (
    <div className="grid gap-4 lg:hidden">
      {classes.map((session, index) => {
        const isLow = session.spotsAvailable <= 3
        return (
          <motion.div
            key={session.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            className="rounded-[22px] border border-white/10 bg-[#111111] p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#F97316]">{session.day}</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white">
                {session.startTime} - {session.endTime}
              </span>
            </div>

            <h3 className="mt-3 text-lg font-bold text-white">{session.className}</h3>
            <span className="mt-2 inline-block rounded-full bg-[#F97316]/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FDBA74]">
              {session.category}
            </span>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-[#E5E5E5]">
              <div className="rounded-xl bg-white/5 p-3">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-[#A3A3A3]">Trainer</span>
                <span className="mt-1 block font-semibold">{session.trainer}</span>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-[#A3A3A3]">Difficulty</span>
                <span className="mt-1 block font-semibold">{session.difficulty}</span>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-[#A3A3A3]">Room</span>
                <span className="mt-1 block font-semibold">{session.studio}</span>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-[#A3A3A3]">Availability</span>
                <span className={`mt-1 block font-semibold ${isLow ? 'text-[#F97316]' : 'text-white'}`}>
                  {session.spotsAvailable} / {session.totalCapacity}
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onOpenDetails(session)}
                className="rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#F97316] hover:text-[#F97316]"
              >
                View Details
              </button>
              <button
                type="button"
                onClick={() => onReserve(session)}
                className="rounded-full bg-[#F97316] px-4 py-2.5 text-sm font-semibold text-[#090909] transition hover:bg-[#fb923c]"
              >
                Reserve Spot
              </button>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default ScheduleCards
