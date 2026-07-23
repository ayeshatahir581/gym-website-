import { motion } from 'framer-motion'
import { Mail, MapPin, MessageCircle, Phone, ShieldAlert } from 'lucide-react'
import { contactInfoCards } from '../../data/contactData'

const iconMap = {
  phone: Phone,
  mail: Mail,
  'map-pin': MapPin,
  whatsapp: MessageCircle,
  emergency: ShieldAlert,
}

function ContactInfo() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {contactInfoCards.map((card, index) => {
          const Icon = iconMap[card.icon]
          const isExternal = card.href.startsWith('http')

          return (
            <motion.a
              key={card.title}
              href={card.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group rounded-3xl border border-white/10 bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F97316]/40"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-[#F97316]/10 p-3 text-[#F97316] transition duration-300 group-hover:bg-[#F97316] group-hover:text-[#090909]">
                <Icon size={20} />
              </div>
              <h3 className="text-base font-bold text-white">{card.title}</h3>
              <p className="mt-2 break-words text-sm font-semibold text-[#E5E5E5]">{card.value}</p>
              <p className="mt-1 text-xs text-[#A3A3A3]">{card.description}</p>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}

export default ContactInfo
