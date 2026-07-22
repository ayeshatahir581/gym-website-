import PrimaryButton from '../common/PrimaryButton'
import SecondaryButton from '../common/SecondaryButton'

function ScheduleCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[30px] border border-[#F97316]/20 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(17,17,17,0.96))] p-8 text-center shadow-2xl shadow-black/30 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">Get Started</p>
        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
          Find the Right Time to Start Your Transformation
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[#D4D4D4]">
          Pick a class that fits your week, meet your trainer, and join a training environment built to keep you consistent from day one.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton to="/signup">Join Now</PrimaryButton>
          <SecondaryButton to="/contact">Contact Us</SecondaryButton>
        </div>
      </div>
    </section>
  )
}

export default ScheduleCTA
