import { aboutStats } from '../../data/aboutData'

function AboutStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {aboutStats.map((stat) => (
          <div key={stat.label} className="rounded-[22px] border border-white/10 bg-[#111111] p-6 text-center">
            <p className="text-4xl font-black text-[#F97316]">{stat.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#A3A3A3]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutStats
