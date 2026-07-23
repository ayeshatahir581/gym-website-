import { motion } from 'framer-motion'
import { Briefcase, Camera, Globe2, Music2, PlayCircle } from 'lucide-react'
import { socialLinks } from '../../data/contactData'
import SectionHeading from '../common/SectionHeading'

const iconMap = {
  facebook: Globe2,
  instagram: Camera,
  tiktok: Music2,
  youtube: PlayCircle,
  linkedin: Briefcase,
}

function SocialLinks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Stay Connected"
        title="Follow IronPulse on Social Media"
        description="Join our community online for training tips, member stories, and behind-the-scenes updates."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {socialLinks.map((social, index) => {
          const Icon = iconMap[social.icon]
          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-[#111111] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#F97316]/40"
            >
              <div className="inline-flex rounded-2xl bg-[#F97316]/10 p-3 text-[#F97316] transition duration-300 group-hover:bg-[#F97316] group-hover:text-[#090909]">
                <Icon size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{social.name}</p>
                <p className="mt-1 text-xs text-[#A3A3A3]">{social.handle}</p>
              </div>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}

export default SocialLinks
