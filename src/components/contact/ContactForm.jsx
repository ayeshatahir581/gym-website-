import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Loader2, Mail, MessageSquare, Phone, Send, User } from 'lucide-react'
import { membershipInterestOptions, subjectOptions } from '../../data/contactData'

const MAX_MESSAGE_LENGTH = 500
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  membershipInterest: '',
  message: '',
  agreeToTerms: false,
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

  if (!formData.subject.trim()) {
    errors.subject = 'Subject is required.'
  }

  if (!formData.membershipInterest) {
    errors.membershipInterest = 'Please select a membership interest.'
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required.'
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  } else if (formData.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`
  }

  if (!formData.agreeToTerms) {
    errors.agreeToTerms = 'You must agree to the terms to continue.'
  }

  return errors
}

const inputClass = (hasError) =>
  `w-full rounded-2xl border bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-[#6B6B6B] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
    hasError ? 'border-red-500/60' : 'border-white/10'
  }`

function ContactForm() {
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
      setFormData(initialFormData)
      setTimeout(() => setShowToast(false), 4000)
    }, 900)
  }

  const messageLength = formData.message.length
  const isNearLimit = messageLength > MAX_MESSAGE_LENGTH * 0.9

  return (
    <div className="relative rounded-[28px] border border-white/10 bg-[#111111] p-6 sm:p-8">
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
              Message sent successfully! Our team will get back to you soon.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <h2 className="text-2xl font-black text-white sm:text-3xl">Send Us a Message</h2>
      <p className="mt-2 text-sm text-[#A3A3A3]">
        Fill out the form below and our team will respond as soon as possible.
      </p>

      <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
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
            <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#A3A3A3]">
              Subject
            </label>
            <div className="relative">
              <MessageSquare size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A3A3]" />
              <input
                id="subject"
                name="subject"
                type="text"
                list="subject-options"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                className={inputClass(errors.subject)}
              />
              <datalist id="subject-options">
                {subjectOptions.map((option) => (
                  <option key={option} value={option} />
                ))}
              </datalist>
            </div>
            {errors.subject && (
              <p id="subject-error" className="mt-1.5 text-xs text-red-400">
                {errors.subject}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="membershipInterest"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#A3A3A3]"
          >
            Membership Interest
          </label>
          <select
            id="membershipInterest"
            name="membershipInterest"
            value={formData.membershipInterest}
            onChange={handleChange}
            aria-invalid={Boolean(errors.membershipInterest)}
            aria-describedby={errors.membershipInterest ? 'membershipInterest-error' : undefined}
            className={`w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
              errors.membershipInterest ? 'border-red-500/60' : 'border-white/10'
            }`}
          >
            <option value="" disabled className="bg-[#111111]">
              Select an option
            </option>
            {membershipInterestOptions.map((option) => (
              <option key={option} value={option} className="bg-[#111111]">
                {option}
              </option>
            ))}
          </select>
          {errors.membershipInterest && (
            <p id="membershipInterest-error" className="mt-1.5 text-xs text-red-400">
              {errors.membershipInterest}
            </p>
          )}
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A3A3A3]">
              Message
            </label>
            <span className={`text-xs ${isNearLimit ? 'text-[#F97316]' : 'text-[#6B6B6B]'}`}>
              {messageLength}/{MAX_MESSAGE_LENGTH}
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={MAX_MESSAGE_LENGTH}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your fitness goals or question..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`w-full resize-none rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#6B6B6B] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
              errors.message ? 'border-red-500/60' : 'border-white/10'
            }`}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-red-400">
              {errors.message}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm text-[#D4D4D4]">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              aria-invalid={Boolean(errors.agreeToTerms)}
              aria-describedby={errors.agreeToTerms ? 'agreeToTerms-error' : undefined}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 text-[#F97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
            />
            <span>
              I agree to the <span className="text-[#F97316]">Terms of Service</span> and{' '}
              <span className="text-[#F97316]">Privacy Policy</span>.
            </span>
          </label>
          {errors.agreeToTerms && (
            <p id="agreeToTerms-error" className="mt-1.5 text-xs text-red-400">
              {errors.agreeToTerms}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F97316] px-5 py-3.5 text-sm font-semibold text-[#090909] transition duration-300 hover:bg-[#fb923c] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
