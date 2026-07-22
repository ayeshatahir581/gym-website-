function BillingToggle({ billing, onToggle }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-fit items-center rounded-full border border-white/10 bg-[#111111] p-1">
        {['Monthly', 'Yearly'].map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onToggle(option)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              billing === option
                ? 'bg-[#F97316] text-[#090909]'
                : 'text-[#A3A3A3] hover:text-white'
            }`}
          >
            {option}
          </button>
        ))}

        <span className="ml-2 rounded-full bg-[#F97316]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FDBA74]">
          Save 20%
        </span>
      </div>
    </section>
  )
}

export default BillingToggle
