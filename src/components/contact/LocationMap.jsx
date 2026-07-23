import { MapPin, Navigation } from 'lucide-react'
import { mapDetails } from '../../data/contactData'

function LocationMap() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]">
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18),transparent_60%),linear-gradient(135deg,#161616,#0c0c0c)]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative flex flex-col items-center gap-2 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F97316] text-[#090909] shadow-lg shadow-[#F97316]/30">
            <MapPin size={22} />
          </span>
          <p className="max-w-[220px] text-sm font-semibold text-white">{mapDetails.address}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-6 sm:flex-row">
        <a
          href={mapDetails.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-[#090909] transition duration-300 hover:bg-[#fb923c]"
        >
          <Navigation size={16} />
          Get Directions
        </a>
        <a
          href={mapDetails.viewMapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-[#F97316]/60 hover:text-[#F97316]"
        >
          <MapPin size={16} />
          Open in Google Maps
        </a>
      </div>
    </div>
  )
}

export default LocationMap
