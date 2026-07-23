import { useState } from 'react'
import { Eye, EyeOff, Lock } from 'lucide-react'

function PasswordField({
  id,
  name,
  label,
  value,
  onChange,
  error,
  placeholder = '••••••••',
  autoComplete,
}) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#A3A3A3]">
        {label}
      </label>
      <div className="relative">
        <Lock size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A3A3]" />
        <input
          id={id}
          name={name}
          type={isVisible ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-2xl border bg-white/5 py-3 pl-11 pr-11 text-sm text-white placeholder:text-[#6B6B6B] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
            error ? 'border-red-500/60' : 'border-white/10'
          }`}
        />
        <button
          type="button"
          onClick={() => setIsVisible((visible) => !visible)}
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full text-[#A3A3A3] transition hover:text-[#F97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
        >
          {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

export default PasswordField
