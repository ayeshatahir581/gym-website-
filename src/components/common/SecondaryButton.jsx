import { Link } from 'react-router-dom'

function SecondaryButton({ children, href = '#', to, className = '' }) {
  const commonClassName = `inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-[#F97316]/60 hover:text-[#F97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909] ${className}`

  if (to) {
    return (
      <Link to={to} className={commonClassName}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={commonClassName}>
      {children}
    </a>
  )
}

export default SecondaryButton
