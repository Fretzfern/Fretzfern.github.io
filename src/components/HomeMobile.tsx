import { Link } from 'react-router-dom'
import { SealCheck, CaretRight, Stack, Coffee } from '@/components/slab'
import { profile } from '@/data/profile'
import { testimonials } from '@/data/work'
import QuickMenu from './QuickMenu'

/**
 * Home on a phone, the parts the rail and the bento used to carry:
 *
 *   HomeProfile  avatar, name, verified mark, handle and the QuickMenu
 *                (theme + accessibility) - the rail's identity block, laid flat
 *   HomeStats    three proof facts (profile.stats), each named by a glyph so
 *                it reads at a glance
 *   HomeExplore  one shelf card per rail view in a snap row, then the first
 *                testimonial as a video stage
 */

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt="" width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
          <SealCheck size={16} weight="fill" className="hprofile__verified" aria-label={profile.verifiedLabel} />
        </span>
        <span className="hprofile__handle">
          {profile.handle} · {profile.role}
        </span>
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const featured = testimonials.find((q) => q.teaser)

const TILES = [
  { n: '01', label: 'Case studies', to: '/case-studies', title: 'Five SEO case studies', desc: 'The problem, the work, the numbers.', img: '/work/site-kratom-delivery.png' },
  { n: '02', label: 'Services', to: '/services', title: 'SEO and WordPress, end to end', desc: 'Audits, local SEO, schema, site builds.', Icon: Stack },
  { n: '03', label: 'Portfolio', to: '/portfolio', title: 'Websites and results', desc: 'Featured sites and result screenshots.', Icon: Coffee, accent: true },
  { n: '04', label: 'Experience', to: '/experience', title: 'Experience', desc: 'Where I have worked since 2016.', img: '/logos/canadian-web-designs.png' },
  { n: '05', label: 'About', to: '/about', title: `Hi, I'm ${profile.firstName}.`, desc: 'Seven years of SEO and web design.', img: profile.avatarSrc },
] as const

export function HomeExplore() {
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className={`htile${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              {'img' in t ? (
                <span className="htile__media"><img className="htile__img" src={t.img} alt="" loading="lazy" /></span>
              ) : (
                <span className="htile__media htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              )}
              <span className="htile__body">
                <span className="htile__n">{t.n} {t.label}</span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* A header that links carries its chevron on the title itself. */}
      <div className="hsec">
        <h2 className="hsec__title">
          <Link to="/case-studies#client-reviews" className="hsec__link">
            What clients say
            <CaretRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </h2>
      </div>
      {featured && (
        <Link
          to="/case-studies#client-reviews"
          className="hproof"
          aria-label={`Read client reviews. ${featured.name}, ${featured.business}: ${featured.teaser}`}
        >
          <span className="hproof__stage hproof__stage--quote">
            <span className="hproof__stars" aria-hidden="true">{'\u2605'.repeat(featured.rating)}</span>
            <span className="hproof__quote">{`\u201C${featured.teaser}\u201D`}</span>
          </span>
          <span className="hproof__copy">
            <span className="hproof__title">{featured.name}, {featured.business}</span>
            <span className="hproof__meta">Read all client reviews</span>
          </span>
        </Link>
      )}
    </>
  )
}
