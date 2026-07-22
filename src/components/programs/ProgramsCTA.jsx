import PrimaryButton from '../common/PrimaryButton'

function ProgramsCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[30px] border border-[#F97316]/20 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(17,17,17,0.96))] p-8 text-center shadow-2xl shadow-black/30 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F97316]">Start Today</p>
        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Find the Program That Matches Your Goal</h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton to="/signup">Join Now</PrimaryButton>
          <PrimaryButton to="/membership" className="bg-transparent text-white ring-1 ring-white/15 hover:bg-white/10 hover:text-white">
            View Memberships
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

export default ProgramsCTA
