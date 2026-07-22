import { Camera, Globe2, Mail, MapPin, Phone, Send, Clock3 } from 'lucide-react'
import { contactDetails } from '../../data/homeData'

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-[#F97316]/40 bg-[#F97316]/10 p-2 text-[#F97316]">
              <span className="text-lg font-black">I</span>
            </div>
            <div>
              <p className="text-lg font-black tracking-[0.18em] text-white">IRONPULSE</p>
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#A3A3A3]">Gym</p>
            </div>
          </div>
          <p className="max-w-sm text-sm text-[#A3A3A3]">
            IronPulse delivers a luxurious training experience built around performance, discipline, and real transformation.
          </p>
          <div className="flex gap-3 text-[#A3A3A3]">
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/10 p-2 transition hover:border-[#F97316]/60 hover:text-[#F97316]"><Camera size={16} /></a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-white/10 p-2 transition hover:border-[#F97316]/60 hover:text-[#F97316]"><Globe2 size={16} /></a>
            <a href="#" aria-label="Email" className="rounded-full border border-white/10 p-2 transition hover:border-[#F97316]/60 hover:text-[#F97316]"><Mail size={16} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#A3A3A3]">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#programs" className="hover:text-white">Programs</a></li>
            <li><a href="#trainers" className="hover:text-white">Trainers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Popular Programs</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#A3A3A3]">
            <li>Strength Training</li>
            <li>Bodybuilding</li>
            <li>CrossFit</li>
            <li>Cardio Blast</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Contact Info</h3>
          <div className="mt-4 space-y-3 text-sm text-[#A3A3A3]">
            <p className="flex items-center gap-2"><MapPin size={14} className="text-[#F97316]" /> {contactDetails.address}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#F97316]" /> {contactDetails.phone}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#F97316]" /> {contactDetails.email}</p>
            <p className="flex items-center gap-2"><Clock3 size={14} className="text-[#F97316]" /> {contactDetails.hours}</p>
          </div>

          <div className="mt-6 flex gap-2">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Your email"
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#A3A3A3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
            />
            <button type="button" aria-label="Subscribe to newsletter" className="rounded-full bg-[#F97316] p-3 text-[#090909] transition hover:bg-[#fb923c]">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-[#A3A3A3] sm:px-6 lg:px-8">
        <span>© 2026 IronPulse Gym. All rights reserved.</span>
        <span className="mx-3">|</span>
        <a href="#" className="hover:text-white">Terms</a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:text-white">Privacy</a>
      </div>
    </footer>
  )
}

export default Footer
