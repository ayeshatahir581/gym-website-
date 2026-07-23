const LEVELS = [
  { label: 'Too Weak', color: 'bg-red-500', textColor: 'text-red-400' },
  { label: 'Weak', color: 'bg-red-500', textColor: 'text-red-400' },
  { label: 'Fair', color: 'bg-[#F97316]', textColor: 'text-[#F97316]' },
  { label: 'Good', color: 'bg-[#F97316]', textColor: 'text-[#F97316]' },
  { label: 'Strong', color: 'bg-emerald-500', textColor: 'text-emerald-400' },
  { label: 'Very Strong', color: 'bg-emerald-500', textColor: 'text-emerald-400' },
]

function getScore(password) {
  let score = 0
  if (password.length >= 8) score += 1
  if (password.length >= 12) score += 1
  if (/[A-Z]/.test(password)) score += 1
  if (/[a-z]/.test(password)) score += 1
  if (/[0-9]/.test(password)) score += 1
  if (/[^A-Za-z0-9]/.test(password)) score += 1
  return score
}

function PasswordStrength({ password }) {
  if (!password) return null

  const score = getScore(password)
  const level = LEVELS[Math.min(score, LEVELS.length - 1)]
  const filledSegments = Math.min(Math.ceil((score / 6) * 4), 4)

  return (
    <div className="mt-2" aria-live="polite">
      <div className="flex gap-1.5">
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              index < filledSegments ? level.color : 'bg-white/10'
            }`}
          />
        ))}
      </div>
      <p className={`mt-1.5 text-xs font-medium ${level.textColor}`}>{level.label}</p>
    </div>
  )
}

export default PasswordStrength
