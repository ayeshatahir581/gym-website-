import { useEffect, useMemo, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import ScheduleHero from '../components/schedule/ScheduleHero'
import ScheduleFilters from '../components/schedule/ScheduleFilters'
import WeeklySchedule from '../components/schedule/WeeklySchedule'
import ScheduleTable from '../components/schedule/ScheduleTable'
import ScheduleCards from '../components/schedule/ScheduleCards'
import ClassDetailsModal from '../components/schedule/ClassDetailsModal'
import ScheduleBenefits from '../components/schedule/ScheduleBenefits'
import ScheduleCTA from '../components/schedule/ScheduleCTA'
import {
  scheduleData,
  dayOptions,
  categoryOptions,
  trainerOptions,
  difficultyOptions,
} from '../data/scheduleData'

function Schedule() {
  const [activeDay, setActiveDay] = useState('All Days')
  const [activeCategory, setActiveCategory] = useState('All Classes')
  const [activeTrainer, setActiveTrainer] = useState('All Trainers')
  const [activeDifficulty, setActiveDifficulty] = useState('All Levels')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedClass, setSelectedClass] = useState(null)
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    if (!toastMessage) return undefined
    const timer = setTimeout(() => setToastMessage(''), 3200)
    return () => clearTimeout(timer)
  }, [toastMessage])

  const filteredClasses = useMemo(() => {
    const searchValue = searchTerm.trim().toLowerCase()

    return scheduleData.filter((session) => {
      const matchesDay = activeDay === 'All Days' || session.day === activeDay
      const matchesCategory = activeCategory === 'All Classes' || session.category === activeCategory
      const matchesTrainer = activeTrainer === 'All Trainers' || session.trainer === activeTrainer
      const matchesDifficulty = activeDifficulty === 'All Levels' || session.difficulty === activeDifficulty
      const matchesSearch =
        searchValue.length === 0 ||
        session.className.toLowerCase().includes(searchValue) ||
        session.trainer.toLowerCase().includes(searchValue)

      return matchesDay && matchesCategory && matchesTrainer && matchesDifficulty && matchesSearch
    })
  }, [activeDay, activeCategory, activeTrainer, activeDifficulty, searchTerm])

  const activeFilterCount = [
    activeDay !== 'All Days',
    activeCategory !== 'All Classes',
    activeTrainer !== 'All Trainers',
    activeDifficulty !== 'All Levels',
    searchTerm.trim().length > 0,
  ].filter(Boolean).length

  const clearFilters = () => {
    setActiveDay('All Days')
    setActiveCategory('All Classes')
    setActiveTrainer('All Trainers')
    setActiveDifficulty('All Levels')
    setSearchTerm('')
  }

  const handleReserve = (session) => {
    setToastMessage(`Your spot in "${session.className}" has been reserved temporarily.`)
  }

  return (
    <main className="bg-[#0A0A0A] text-white">
      <ScheduleHero />

      <WeeklySchedule />

      <ScheduleFilters
        dayOptions={dayOptions}
        activeDay={activeDay}
        onDayChange={setActiveDay}
        categoryOptions={categoryOptions}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        trainerOptions={trainerOptions}
        activeTrainer={activeTrainer}
        onTrainerChange={setActiveTrainer}
        difficultyOptions={difficultyOptions}
        activeDifficulty={activeDifficulty}
        onDifficultyChange={setActiveDifficulty}
        search={searchTerm}
        onSearchChange={setSearchTerm}
        activeFilterCount={activeFilterCount}
        onClear={clearFilters}
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        {filteredClasses.length === 0 ? (
          <div className="rounded-[28px] border border-white/10 bg-[#111111] p-8 text-center">
            <p className="text-lg font-semibold text-white">No classes match your current filters.</p>
            <p className="mt-2 text-sm text-[#A3A3A3]">Try another day, class type, trainer, or search term.</p>
          </div>
        ) : (
          <>
            <ScheduleTable classes={filteredClasses} onOpenDetails={setSelectedClass} onReserve={handleReserve} />
            <ScheduleCards classes={filteredClasses} onOpenDetails={setSelectedClass} onReserve={handleReserve} />
          </>
        )}
      </section>

      <ScheduleBenefits />
      <ScheduleCTA />

      <ClassDetailsModal
        session={selectedClass}
        onClose={() => setSelectedClass(null)}
        onReserve={(session) => {
          handleReserve(session)
          setSelectedClass(null)
        }}
      />

      {toastMessage && (
        <div className="fixed inset-x-0 bottom-6 z-60 flex justify-center px-4">
          <div className="flex items-center gap-2 rounded-full border border-[#F97316]/40 bg-[#111111] px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/40">
            <CheckCircle2 size={16} className="text-[#F97316]" />
            {toastMessage}
          </div>
        </div>
      )}
    </main>
  )
}

export default Schedule
