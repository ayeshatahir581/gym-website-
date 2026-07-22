function ScheduleTable({ classes, onOpenDetails, onReserve }) {
  return (
    <div className="hidden overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] lg:block">
      <div className="max-h-[640px] overflow-auto">
        <table className="w-full min-w-[960px] border-collapse text-left">
          <thead>
            <tr>
              {['Day', 'Time', 'Class', 'Trainer', 'Difficulty', 'Studio', 'Availability', 'Action'].map((heading) => (
                <th
                  key={heading}
                  className="sticky top-0 z-10 border-b border-white/10 bg-[#111111] px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#A3A3A3]"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {classes.map((session) => {
              const isLow = session.spotsAvailable <= 3
              return (
                <tr key={session.id} className="border-b border-white/5 transition last:border-b-0 hover:bg-white/[0.03]">
                  <td className="px-4 py-4 text-sm font-semibold text-white">{session.day}</td>
                  <td className="px-4 py-4 text-sm text-[#E5E5E5]">
                    {session.startTime} - {session.endTime}
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-sm font-bold text-white">{session.className}</p>
                    <span className="mt-1 inline-block rounded-full bg-[#F97316]/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FDBA74]">
                      {session.category}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-[#E5E5E5]">{session.trainer}</td>
                  <td className="px-4 py-4">
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-[#A3A3A3]">
                      {session.difficulty}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-[#E5E5E5]">{session.studio}</td>
                  <td className="px-4 py-4">
                    <span className={`text-sm font-semibold ${isLow ? 'text-[#F97316]' : 'text-white'}`}>
                      {session.spotsAvailable} / {session.totalCapacity} spots
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onOpenDetails(session)}
                        className="rounded-full border border-white/10 px-3.5 py-2 text-xs font-semibold text-white transition hover:border-[#F97316] hover:text-[#F97316]"
                      >
                        View Details
                      </button>
                      <button
                        type="button"
                        onClick={() => onReserve(session)}
                        className="rounded-full bg-[#F97316] px-3.5 py-2 text-xs font-semibold text-[#090909] transition hover:bg-[#fb923c]"
                      >
                        Reserve Spot
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ScheduleTable
