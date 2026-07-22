import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Dumbbell } from 'lucide-react'
import { navLinks } from '../../data/homeData'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  const handleNavigate = (path) => {
    closeMenu()
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-white/10 bg-[#090909]/85 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <button type="button" onClick={() => handleNavigate('/')} className="flex items-center gap-3" aria-label="IronPulse home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F97316]/50 bg-[#F97316]/10 text-[#F97316]">
            <Dumbbell size={18} />
          </span>
          <div>
            <p className="text-lg font-black tracking-[0.18em] text-white">IRONPULSE</p>
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#A3A3A3]">Gym</p>
          </div>
        </button>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `${isActive ? 'text-[#F97316]' : 'text-[#A3A3A3]'} text-sm font-medium transition hover:text-white`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button type="button" onClick={() => handleNavigate('/login')} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#F97316]/60 hover:text-[#F97316]">
            Login
          </button>
          <button type="button" onClick={() => handleNavigate('/signup')} className="rounded-full bg-[#F97316] px-4 py-2 text-sm font-semibold text-[#090909] transition hover:bg-[#fb923c]">
            Join Now
          </button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-full border border-white/10 p-2 text-white lg:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div className={`overflow-hidden transition-all duration-300 lg:hidden ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-[#111111] p-4 shadow-2xl shadow-black/40">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavigate(link.to)}
                className="rounded-lg px-2 py-2 text-left text-sm text-[#A3A3A3] transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-2 flex gap-2">
              <button type="button" onClick={() => handleNavigate('/login')} className="flex-1 rounded-full border border-white/15 px-4 py-2 text-center text-sm text-white">Login</button>
              <button type="button" onClick={() => handleNavigate('/signup')} className="flex-1 rounded-full bg-[#F97316] px-4 py-2 text-center text-sm font-semibold text-[#090909]">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
