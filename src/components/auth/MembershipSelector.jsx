function MembershipSelector({ plans, value, onChange, error }) {
  return (
    <div>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#A3A3A3]">
        Membership Plan
      </span>
      <div role="radiogroup" aria-label="Membership plan" className="grid gap-3 sm:grid-cols-3">
        {plans.map((plan) => {
          const isSelected = value === plan.id
          return (
            <label
              key={plan.id}
              className={`relative flex cursor-pointer flex-col rounded-2xl border p-4 transition duration-300 ${
                isSelected ? 'border-[#F97316] bg-[#F97316]/10' : 'border-white/10 bg-white/5 hover:border-white/25'
              }`}
            >
              <input
                type="radio"
                name="membershipPlan"
                value={plan.id}
                checked={isSelected}
                onChange={() => onChange(plan.id)}
                className="sr-only"
              />
              {plan.badge && (
                <span className="absolute -top-2 right-3 rounded-full bg-[#F97316] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#090909]">
                  {plan.badge}
                </span>
              )}
              <span className="text-sm font-bold text-white">{plan.name}</span>
              <span className="mt-1 text-lg font-black text-[#F97316]">{plan.price}</span>
              <span className="mt-1 text-xs text-[#A3A3A3]">{plan.description}</span>
            </label>
          )
        })}
      </div>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  )
}

export default MembershipSelector
