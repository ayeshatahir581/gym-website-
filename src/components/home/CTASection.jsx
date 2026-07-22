import { imageUrls } from '../../data/homeData'
import PrimaryButton from '../common/PrimaryButton'
import SecondaryButton from '../common/SecondaryButton'

function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#111111]">
        <img
          src={imageUrls.cta}
          alt="Athlete training with intensity in a gym atmosphere"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.45),transparent_40%),linear-gradient(180deg,rgba(9,9,9,0.45),rgba(9,9,9,0.8))]" />
        <div className="relative px-6 py-14 text-center sm:px-10 lg:px-16">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Your Strongest Version Starts Today</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-[#D4D4D4]">
            Join the IronPulse community and commit to the most powerful version of your fitness journey.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <PrimaryButton href="#membership">Join Now</PrimaryButton>
            <SecondaryButton href="#contact">Contact Trainer</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
