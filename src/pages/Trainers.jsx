import { useMemo, useState } from 'react'
import TrainersHero from '../components/trainers/TrainersHero'
import TrainerFilters from '../components/trainers/TrainerFilters'
import TrainersGrid from '../components/trainers/TrainersGrid'
import TrainerModal from '../components/trainers/TrainerModal'
import TrainingApproach from '../components/trainers/TrainingApproach'
import TrainersCTA from '../components/trainers/TrainersCTA'
import { trainersData } from '../data/trainersData'

const categories = ['All', 'Strength', 'Bodybuilding', 'Weight Loss', 'CrossFit', 'Cardio', 'Yoga', 'Functional Training', 'Personal Training']

function Trainers() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [experienceFilter, setExperienceFilter] = useState('All')
  const [selectedTrainer, setSelectedTrainer] = useState(null)

  const filteredTrainers = useMemo(() => {
    return trainersData.filter((trainer) => {
      const matchesCategory = activeCategory === 'All' || trainer.specialty === activeCategory
      const matchesExperience = experienceFilter === 'All' || trainer.experience === experienceFilter
      const matchesSearch =
        searchTerm.trim().length === 0 || trainer.name.toLowerCase().includes(searchTerm.trim().toLowerCase())

      return matchesCategory && matchesExperience && matchesSearch
    })
  }, [activeCategory, experienceFilter, searchTerm])

  const clearFilters = () => {
    setActiveCategory('All')
    setSearchTerm('')
    setExperienceFilter('All')
  }

  return (
    <main className="bg-[#0A0A0A] text-white">
      <TrainersHero />

      <TrainerFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        search={searchTerm}
        onSearchChange={setSearchTerm}
        experience={experienceFilter}
        onExperienceChange={setExperienceFilter}
        onClear={clearFilters}
      />

      {filteredTrainers.length === 0 ? (
        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-white/10 bg-[#111111] p-8 text-center">
            <p className="text-lg font-semibold text-white">No trainers match your current filter.</p>
            <p className="mt-2 text-sm text-[#A3A3A3]">Try another specialty, experience range, or trainer name search.</p>
          </div>
        </section>
      ) : (
        <TrainersGrid trainers={filteredTrainers} onOpenProfile={setSelectedTrainer} />
      )}

      <TrainingApproach />
      <TrainersCTA />

      <TrainerModal trainer={selectedTrainer} onClose={() => setSelectedTrainer(null)} />
    </main>
  )
}

export default Trainers
