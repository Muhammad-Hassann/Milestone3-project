import Link from 'next/link'

interface OverlaySectionProps {
  title: string
  subtitle: string
  linkText?: string
  linkHref?: string
}

const OverlaySection: React.FC<OverlaySectionProps> = ({ title, subtitle, linkText, linkHref }) => {
  return (
    <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('/hero2.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-white mb-8">{subtitle}</p>
        {linkText && linkHref && (
          <Link
            href={linkHref}
            className="bg-white text-pink-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-100 transition duration-300"
          >
            {linkText}
          </Link>
        )}
      </div>
    </section>
  )
}

export default OverlaySection

