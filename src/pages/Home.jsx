import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import AboutPreview from '../components/home/AboutPreview'
import ProgramsSection from '../components/home/ProgramsSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import TrainersPreview from '../components/home/TrainersPreview'
import MembershipPreview from '../components/home/MembershipPreview'
import SchedulePreview from '../components/home/SchedulePreview'
import TestimonialsSection from '../components/home/TestimonialsSection'
import CTASection from '../components/home/CTASection'

function Home() {
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ProgramsSection />
      <WhyChooseUs />
      <TrainersPreview />
      <MembershipPreview />
      <SchedulePreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default Home
