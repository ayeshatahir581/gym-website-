import { Search, SlidersHorizontal, X } from 'lucide-react'

function ScheduleFilters({
  dayOptions,
  activeDay,
  onDayChange,
  categoryOptions,
  activeCategory,
  onCategoryChange,
  trainerOptions,
  activeTrainer,
  onTrainerChange,
  difficultyOptions,
  activeDifficulty,
  onDifficultyChange,
  search,
  onSearchChange,
  activeFilterCount,
  onClear,
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-white/10 bg-[#111111] p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <SlidersHorizontal size={16} className="text-[#F97316]" />
            Filter Classes
            {activeFilterCount > 0 && (
              <span className="rounded-full bg-[#F97316]/15 px-2.5 py-0.5 text-xs font-semibold text-[#FDBA74]">
                {activeFilterCount} active
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#F97316]/40 px-4 py-2 text-sm font-semibold text-[#F97316] transition hover:bg-[#F97316] hover:text-[#090909]"
          >
            <X size={14} />
            Clear Filters
          </button>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr]">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#A3A3A3]">Search class or trainer</span>
            <div className="relative">
              <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A3A3]" />
              <input
                type="text"
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="e.g. HIIT, Sofia Martinez"
                className="w-full rounded-full border border-white/10 bg-[#090909] py-3 pl-11 pr-4 text-white outline-none transition focus:border-[#F97316]"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#A3A3A3]">Day</span>
            <select
              value={activeDay}
              onChange={(event) => onDayChange(event.target.value)}
              className="w-full rounded-full border border-white/10 bg-[#090909] px-4 py-3 text-white outline-none transition focus:border-[#F97316]"
            >
              {dayOptions.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#A3A3A3]">Class Type</span>
            <select
              value={activeCategory}
              onChange={(event) => onCategoryChange(event.target.value)}
              className="w-full rounded-full border border-white/10 bg-[#090909] px-4 py-3 text-white outline-none transition focus:border-[#F97316]"
            >
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#A3A3A3]">Difficulty</span>
            <select
              value={activeDifficulty}
              onChange={(event) => onDifficultyChange(event.target.value)}
              className="w-full rounded-full border border-white/10 bg-[#090909] px-4 py-3 text-white outline-none transition focus:border-[#F97316]"
            >
              {difficultyOptions.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-4">
          <label className="block lg:max-w-xs">
            <span className="mb-2 block text-sm font-medium text-[#A3A3A3]">Trainer</span>
            <select
              value={activeTrainer}
              onChange={(event) => onTrainerChange(event.target.value)}
              className="w-full rounded-full border border-white/10 bg-[#090909] px-4 py-3 text-white outline-none transition focus:border-[#F97316]"
            >
              {trainerOptions.map((trainer) => (
                <option key={trainer} value={trainer}>
                  {trainer}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </section>
  )
}

export default ScheduleFilters
