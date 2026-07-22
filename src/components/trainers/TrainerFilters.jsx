function TrainerFilters({
  categories,
  activeCategory,
  onCategoryChange,
  search,
  onSearchChange,
  experience,
  onExperienceChange,
  onClear,
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-white/10 bg-[#111111] p-4 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? 'bg-[#F97316] text-[#090909]'
                      : 'border border-white/10 bg-[#1a1a1a] text-[#E5E5E5] hover:border-[#F97316]/60 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#A3A3A3]">Search trainer</span>
              <input
                type="text"
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search by trainer name"
                className="w-full rounded-full border border-white/10 bg-[#090909] px-4 py-3 text-white outline-none transition focus:border-[#F97316]"
              />
            </label>
          </div>

          <div className="flex flex-col justify-between gap-4 lg:items-end">
            <label className="block w-full lg:max-w-xs">
              <span className="mb-2 block text-sm font-medium text-[#A3A3A3]">Experience</span>
              <select
                value={experience}
                onChange={(event) => onExperienceChange(event.target.value)}
                className="w-full rounded-full border border-white/10 bg-[#090909] px-4 py-3 text-white outline-none transition focus:border-[#F97316]"
              >
                <option value="All">All</option>
                <option value="1–3 Years">1–3 Years</option>
                <option value="4–7 Years">4–7 Years</option>
                <option value="8+ Years">8+ Years</option>
              </select>
            </label>

            <button
              type="button"
              onClick={onClear}
              className="rounded-full border border-[#F97316]/40 px-4 py-2 text-sm font-semibold text-[#F97316] transition hover:bg-[#F97316] hover:text-[#090909]"
            >
              Clear filters
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrainerFilters
