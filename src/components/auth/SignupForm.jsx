import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Cake, CheckCircle2, Loader2, Mail, Phone, User, UserPlus } from 'lucide-react'
import PasswordField from './PasswordField'
import PasswordStrength from './PasswordStrength'
import MembershipSelector from './MembershipSelector'
import TermsCheckbox from './TermsCheckbox'
import { GoogleIcon } from './SocialLoginButtons'
import { genderOptions, signupHero, signupMembershipPlans } from '../../data/signupData'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  dob: '',
  gender: '',
  membershipPlan: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false,
  subscribeNewsletter: false,
}

function validate(formData) {
  const errors = {}

  if (!formData.fullName.trim()) {
    errors.fullName = 'Full name is required.'
  } else if (formData.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.'
  }

  if (!formData.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!PHONE_PATTERN.test(formData.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (!formData.dob) {
    errors.dob = 'Date of birth is required.'
  }

  if (!formData.gender) {
    errors.gender = 'Please select a gender.'
  }

  if (!formData.membershipPlan) {
    errors.membershipPlan = 'Please select a membership plan.'
  }

  if (!formData.password) {
    errors.password = 'Password is required.'
  } else if (formData.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.'
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password.'
  } else if (formData.confirmPassword !== formData.password) {
    errors.confirmPassword = 'Passwords do not match.'
  }

  if (!formData.agreeToTerms) {
    errors.agreeToTerms = 'You must agree to the Terms & Conditions to continue.'
  }

  return errors
}

const inputClass = (hasError) =>
  `w-full rounded-2xl border bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-[#6B6B6B] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
    hasError ? 'border-red-500/60' : 'border-white/10'
  }`

function SignupForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }))
    setErrors((previous) => ({ ...previous, [name]: undefined }))
  }

  const handleMembershipChange = (planId) => {
    setFormData((previous) => ({ ...previous, membershipPlan: planId }))
    setErrors((previous) => ({ ...previous, membershipPlan: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 4000)
    }, 900)
  }

  return (
    <div>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            role="status"
            className="fixed left-1/2 top-24 z-50 flex w-[calc(100%-3rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-2xl border border-[#F97316]/30 bg-[#1a1a1a] px-5 py-4 shadow-2xl shadow-black/40"
          >
            <CheckCircle2 size={20} className="shrink-0 text-[#F97316]" />
            <p className="text-sm font-semibold text-white">
              Your account information is ready. Backend registration will be connected later.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">{signupHero.label}</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">{signupHero.title}</h1>
      <p className="mt-3 text-sm text-[#A3A3A3] sm:text-base">{signupHero.description}</p>

      <form noValidate onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#A3A3A3]">
              Full Name
            </label>
            <div className="relative">
              <User size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A3A3]" />
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Carter"
                autoComplete="name"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                className={inputClass(errors.fullName)}
              />
            </div>
            {errors.fullName && (
              <p id="fullName-error" className="mt-1.5 text-xs text-red-400">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#A3A3A3]">
              Email Address
            </label>
            <div className="relative">
              <Mail size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A3A3]" />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={inputClass(errors.email)}
              />
            </div>
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#A3A3A3]">
              Phone Number
            </label>
            <div className="relative">
              <Phone size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A3A3]" />
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (800) 555-0148"
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={inputClass(errors.phone)}
              />
            </div>
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-xs text-red-400">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="dob" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#A3A3A3]">
              Date of Birth
            </label>
            <div className="relative">
              <Cake size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A3A3]" />
              <input
                id="dob"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                autoComplete="bday"
                aria-invalid={Boolean(errors.dob)}
                aria-describedby={errors.dob ? 'dob-error' : undefined}
                className={`${inputClass(errors.dob)} [color-scheme:dark]`}
              />
            </div>
            {errors.dob && (
              <p id="dob-error" className="mt-1.5 text-xs text-red-400">
                {errors.dob}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="gender" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#A3A3A3]">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            aria-invalid={Boolean(errors.gender)}
            aria-describedby={errors.gender ? 'gender-error' : undefined}
            className={`w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
              errors.gender ? 'border-red-500/60' : 'border-white/10'
            }`}
          >
            <option value="" disabled className="bg-[#111111]">
              Select an option
            </option>
            {genderOptions.map((option) => (
              <option key={option} value={option} className="bg-[#111111]">
                {option}
              </option>
            ))}
          </select>
          {errors.gender && (
            <p id="gender-error" className="mt-1.5 text-xs text-red-400">
              {errors.gender}
            </p>
          )}
        </div>

        <MembershipSelector
          plans={signupMembershipPlans}
          value={formData.membershipPlan}
          onChange={handleMembershipChange}
          error={errors.membershipPlan}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <PasswordField
              id="password"
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              autoComplete="new-password"
            />
            <PasswordStrength password={formData.password} />
          </div>

          <PasswordField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            autoComplete="new-password"
          />
        </div>

        <TermsCheckbox
          id="agreeToTerms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          error={errors.agreeToTerms}
        >
          I agree to the <span className="text-[#F97316]">Terms &amp; Conditions</span>.
        </TermsCheckbox>

        <TermsCheckbox
          id="subscribeNewsletter"
          name="subscribeNewsletter"
          checked={formData.subscribeNewsletter}
          onChange={handleChange}
        >
          Subscribe to our newsletter for training tips and offers (optional).
        </TermsCheckbox>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F97316] px-5 py-3.5 text-sm font-semibold text-[#090909] transition duration-300 hover:bg-[#fb923c] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Creating account...
            </>
          ) : (
            <>
              <UserPlus size={16} />
              Create Account
            </>
          )}
        </button>
      </form>

      <div className="my-7 flex items-center gap-4">
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-xs uppercase tracking-[0.2em] text-[#A3A3A3]">or continue with</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <button
        type="button"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
      >
        <GoogleIcon />
        Continue with Google
      </button>

      <p className="mt-8 text-center text-sm text-[#A3A3A3]">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-[#F97316] transition hover:text-[#fb923c]">
          Login
        </Link>
      </p>
    </div>
  )
}

export default SignupForm
