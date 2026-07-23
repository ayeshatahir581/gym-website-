import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Compass, Home, LifeBuoy } from 'lucide-react'
import PrimaryButton from '../components/common/PrimaryButton'
import SecondaryButton from '../components/common/SecondaryButton'

const heroImage = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80'
const fallbackImage = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80'

function NotFound() {
  return (
    <main className="relative isolate overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0 -z-10 bg-black">
        <img
          src={heroImage}
          alt="Dimly lit premium gym floor with strength equipment"
          loading="lazy"
          className="h-full w-full object-cover opacity-45"
          onError={(event) => {
            event.currentTarget.src = fallbackImage
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,9,0.55),rgba(9,9,9,0.75)_55%,#090909_92%)]" />
      </div>

      <section className="mx-auto flex min-h-[75vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-8xl font-black tracking-tight text-[#F97316] sm:text-9xl">404</p>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Looks Like You Missed a Rep.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base text-[#A3A3A3] sm:text-lg">
            The page you're looking for doesn't exist, may have moved, or the link may be broken. Let's get you
            back on track.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton to="/">
              <Home size={16} className="mr-2" />
              Back to Home
            </PrimaryButton>
            <SecondaryButton to="/programs">
              <Compass size={16} className="mr-2" />
              Explore Programs
            </SecondaryButton>
          </div>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#A3A3A3] transition duration-300 hover:text-[#F97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
          >
            <LifeBuoy size={15} />
            Contact Support
          </Link>
        </motion.div>
      </section>
    </main>
  )
}

export default NotFound
