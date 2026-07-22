import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import ProgramsHero from '../components/programs/ProgramsHero'
import ProgramFilters from '../components/programs/ProgramFilters'
import ProgramsGrid from '../components/programs/ProgramsGrid'
import ProgramBenefits from '../components/programs/ProgramBenefits'
import ProgramsCTA from '../components/programs/ProgramsCTA'
import { programsData } from '../data/programsData'

const categories = ['All', 'Strength', 'Bodybuilding', 'Weight Loss', 'CrossFit', 'Cardio', 'Yoga', 'Personal Training']

function Programs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [difficultyFilter, setDifficultyFilter] = useState('All')
  const [selectedProgram, setSelectedProgram] = useState(null)

  const filteredPrograms = useMemo(() => {
    return programsData.filter((program) => {
      const matchesCategory = activeCategory === 'All' || program.category === activeCategory
      const matchesDifficulty = difficultyFilter === 'All' || program.difficulty === difficultyFilter
      const searchValue = searchTerm.trim().toLowerCase()
      const matchesSearch =
        searchValue.length === 0 ||
        program.title.toLowerCase().includes(searchValue) ||
        program.description.toLowerCase().includes(searchValue) ||
        program.category.toLowerCase().includes(searchValue)

      return matchesCategory && matchesDifficulty && matchesSearch
    })
  }, [activeCategory, difficultyFilter, searchTerm])

  const clearFilters = () => {
    setActiveCategory('All')
    setSearchTerm('')
    setDifficultyFilter('All')
  }

  return (
    <main className="bg-[#0A0A0A] text-white">
      <ProgramsHero />

      <ProgramFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        search={searchTerm}
        onSearchChange={setSearchTerm}
        difficulty={difficultyFilter}
        onDifficultyChange={setDifficultyFilter}
        onClear={clearFilters}
      />

      {filteredPrograms.length === 0 ? (
        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-white/10 bg-[#111111] p-8 text-center">
            <p className="text-lg font-semibold text-white">No programs match your current search.</p>
            <p className="mt-2 text-sm text-[#A3A3A3]">Try another category, difficulty, or search term.</p>
          </div>
        </section>
      ) : (
        <ProgramsGrid programs={filteredPrograms} onOpenDetails={setSelectedProgram} />
      )}

      <ProgramBenefits />
      <ProgramsCTA />

      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-white/10 bg-[#111111] shadow-2xl shadow-black/40">
            <div className="relative">
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-[#F97316] hover:text-[#090909]"
                aria-label="Close program details"
              >
                <X size={18} />
              </button>
              <img
                src={selectedProgram.image}
                alt={selectedProgram.alt}
                className="h-64 w-full object-cover"
                onError={(event) => {
                  event.currentTarget.src = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80'
                }}
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#F97316]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FDBA74]">
                  {selectedProgram.category}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#A3A3A3]">
                  {selectedProgram.difficulty}
                </span>
              </div>

              <h3 className="mt-4 text-3xl font-black text-white">{selectedProgram.title}</h3>
              <p className="mt-3 text-base text-[#D4D4D4]">{selectedProgram.fullDescription}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Duration</p>
                  <p className="mt-2 text-sm font-semibold text-white">{selectedProgram.duration}</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Weekly Sessions</p>
                  <p className="mt-2 text-sm font-semibold text-white">{selectedProgram.sessionsPerWeek} per week</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Difficulty</p>
                  <p className="mt-2 text-sm font-semibold text-white">{selectedProgram.difficulty}</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Suitable For</p>
                  <p className="mt-2 text-sm font-semibold text-white">{selectedProgram.suitable}</p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#A3A3A3]">Benefits</p>
                <ul className="mt-2 space-y-2 text-sm text-[#E5E5E5]">
                  {selectedProgram.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#F97316]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/signup"
                  className="rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-[#090909] transition hover:bg-[#fb923c]"
                >
                  Join This Program
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#F97316] hover:text-[#F97316]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Programs
