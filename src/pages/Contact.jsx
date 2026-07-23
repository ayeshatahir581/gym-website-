import ContactHero from '../components/contact/ContactHero'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import BusinessHours from '../components/contact/BusinessHours'
import LocationMap from '../components/contact/LocationMap'
import FAQSection from '../components/contact/FAQSection'
import SocialLinks from '../components/contact/SocialLinks'
import ContactCTA from '../components/contact/ContactCTA'

function Contact() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <ContactHero />
      <ContactInfo />

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <ContactForm />
          <div className="flex flex-col gap-6">
            <BusinessHours />
            <LocationMap />
          </div>
        </div>
      </section>

      <FAQSection />
      <SocialLinks />
      <ContactCTA />
    </main>
  )
}

export default Contact
