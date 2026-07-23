import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Loader2, LogIn, Mail } from 'lucide-react'
import PasswordField from './PasswordField'
import SocialLoginButtons from './SocialLoginButtons'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialFormData = {
  email: '',
  password: '',
  rememberMe: false,
}

function validate(formData) {
  const errors = {}

  if (!formData.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!formData.password) {
    errors.password = 'Password is required.'
  } else if (formData.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.'
  }

  return errors
}

function LoginForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }))
    setErrors((previous) => ({ ...previous, [name]: undefined }))
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
              Login UI is ready. Backend authentication will be connected later.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">Welcome Back</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
        Log In to Your IronPulse Account
      </h1>
      <p className="mt-3 text-sm text-[#A3A3A3] sm:text-base">
        Enter your details to access your training dashboard, class schedule, and membership benefits.
      </p>

      <form noValidate onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#A3A3A3]">
            Email
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
              className={`w-full rounded-2xl border bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-[#6B6B6B] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
                errors.email ? 'border-red-500/60' : 'border-white/10'
              }`}
            />
          </div>
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <PasswordField
          id="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="current-password"
        />

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <label className="flex items-center gap-2 text-[#D4D4D4]">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 rounded border-white/20 bg-white/5 text-[#F97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
            />
            Remember me
          </label>
          <a href="#" className="font-semibold text-[#F97316] transition hover:text-[#fb923c]">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F97316] px-5 py-3.5 text-sm font-semibold text-[#090909] transition duration-300 hover:bg-[#fb923c] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Logging in...
            </>
          ) : (
            <>
              <LogIn size={16} />
              Log In
            </>
          )}
        </button>
      </form>

      <div className="my-7 flex items-center gap-4">
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-xs uppercase tracking-[0.2em] text-[#A3A3A3]">or continue with</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <SocialLoginButtons />

      <p className="mt-8 text-center text-sm text-[#A3A3A3]">
        Don&apos;t have an account?{' '}
        <Link to="/signup" className="font-semibold text-[#F97316] transition hover:text-[#fb923c]">
          Sign Up
        </Link>
      </p>
    </div>
  )
}

export default LoginForm
