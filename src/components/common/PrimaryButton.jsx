import { Link } from 'react-router-dom'

function PrimaryButton({ children, href = '#', to, className = '' }) {
  const commonClassName = `inline-flex items-center justify-center rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-[#090909] transition duration-300 hover:bg-[#fb923c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909] ${className}`

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

export default PrimaryButton
