import AboutHero from '../components/about/AboutHero'
import AboutStats from '../components/about/AboutStats'
import CoreValues from '../components/about/CoreValues'
import FacilitiesShowcase from '../components/about/FacilitiesShowcase'
import MissionVision from '../components/about/MissionVision'
import OurStory from '../components/about/OurStory'
import TeamPreview from '../components/about/TeamPreview'

function About() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <AboutStats />
      <FacilitiesShowcase />
      <TeamPreview />
    </main>
  )
}

export default About
