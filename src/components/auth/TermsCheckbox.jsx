function TermsCheckbox({ id, name, checked, onChange, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-3 text-sm text-[#D4D4D4]">
        <input
          id={id}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 text-[#F97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
        />
        <span>{children}</span>
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

export default TermsCheckbox
