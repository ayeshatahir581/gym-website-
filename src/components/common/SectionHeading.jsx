function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignmentClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
  }[align]

  return (
    <div className={`mx-auto flex max-w-3xl flex-col gap-3 ${alignmentClass}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#F97316]">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-base text-[#A3A3A3]">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
