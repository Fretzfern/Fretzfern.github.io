import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Two bands, top to bottom: the three-step method (on a dark plate) and the
 * five services as cards. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, orange for the index
 * and the accent.
 *
 * Copy comes from Fretz's resume.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Audit',
    body: 'I crawl the site and review technical health, structure and tracking to find what holds rankings back.',
    Icon: MagnetStraight,
    chips: ['Site errors', 'Architecture', 'Core Web Vitals', 'Keywords'],
  },
  {
    index: '02',
    label: 'Optimize',
    body: 'I fix the issues and improve on-page content, schema and pages, then build authority with links and citations.',
    Icon: Timer,
    chips: ['On-page', 'Schema', 'Link-building'],
  },
  {
    index: '03',
    label: 'Measure',
    body: 'I track results in GA4 and Search Console and adjust as algorithms change.',
    Icon: Trophy,
    chips: ['GA4', 'Search Console', 'Reporting'],
  },
]

/* ---------- The services ---------- */

const SEO = '/icons/tools/seo.svg'
const SCHEMA = '/icons/tools/schema.svg'
const GA4 = '/icons/tools/ga4.svg'
const GSC = '/icons/tools/gsc.svg'
const GTM = '/icons/tools/gtm.svg'
const GBP = '/icons/tools/gbp.svg'
const WP = '/icons/tools/wp.svg'
const WOO = '/icons/tools/woo.svg'
const CODE = '/icons/tools/css.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}


const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Technical SEO audits',
    description: 'Find and fix what holds your site back in search.',
    chip: 'SEO',
    logos: [SEO, GSC],
    bullets: ['Site errors and architecture', 'Core Web Vitals', 'Actionable reporting'],
  },
  {
    index: '02',
    title: 'Schema & tracking',
    description: 'Structured data and clean measurement setup.',
    chip: 'Analytics',
    logos: [SCHEMA, GA4, GTM],
    bullets: ['Schema markup', 'GTM event tracking', 'GA4 and GSC integration'],
  },
  {
    index: '03',
    title: 'Local SEO',
    description: 'Get found by customers in your area.',
    chip: 'Local',
    logos: [GBP, SEO],
    bullets: ['Google Business Profile', 'Local citations', 'Reputation management'],
  },
  {
    index: '04',
    title: 'WordPress design',
    description: 'Custom, responsive sites that load fast and convert.',
    chip: 'WordPress',
    logos: [WP, WOO, CODE],
    bullets: ['Custom-coded layouts', 'WooCommerce stores', 'Speed and security upkeep'],
  },
  {
    index: '05',
    title: 'Content & graphics',
    description: 'Optimized content and visuals for your brand.',
    chip: 'Content',
    logos: [SEO, WP],
    bullets: ['Content optimization', 'Social media graphics', 'Promotional materials'],
  },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          SEO and WordPress, end to end.
        </h1>
        <p className="pgrid__lede">
          From the first audit to the finished site and the monthly report.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I work</span>
            <h2 className="sgrid__method-title" id="method-title">
              One. Two. Three.
              <br />
              <span>Audit, optimize, measure.</span>
            </h2>
            <p className="sgrid__method-sub">
              Every step is tied to data, so progress is clear and measurable.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">What I can do for you.</h2>
            <p className="sgrid__offers-sub">Pick one, or combine them.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
