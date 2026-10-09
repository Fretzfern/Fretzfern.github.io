import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Swap the marks below for your own (any square SVG/PNG in public/).
 */

const SEO = { src: '/icons/tools/seo.svg', name: 'Technical SEO' }
const GA4 = { src: '/icons/tools/ga4.svg', name: 'Google Analytics 4' }
const GSC = { src: '/icons/tools/gsc.svg', name: 'Google Search Console' }
const GTM = { src: '/icons/tools/gtm.svg', name: 'Google Tag Manager' }
const GBP = { src: '/icons/tools/gbp.svg', name: 'Google Business Profile' }
const SCHEMA = { src: '/icons/tools/schema.svg', name: 'Schema markup' }
const WP = { src: '/icons/tools/wp.svg', name: 'WordPress' }
const WOO = { src: '/icons/tools/woo.svg', name: 'WooCommerce' }
const CODE = { src: '/icons/tools/css.svg', name: 'HTML, CSS and PHP' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Technical SEO & audits',
    marks: [SEO, SCHEMA]
  },
  {
    index: '02',
    title: 'Analytics & tracking',
    marks: [GA4, GSC, GTM]
  },
  {
    index: '03',
    title: 'WordPress design & development',
    marks: [WP, WOO, CODE]
  },
  {
    index: '04',
    title: 'Local SEO & Google tools',
    marks: [GBP, SEO]
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          SEO specialist and WordPress designer with over 7 years of experience.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I help websites get found and get chosen.
            <span> Technical, on-page and off-page SEO, built on clean, fast WordPress sites.</span>
          </p>

          <p className="agrid__note">
            <strong>Results-driven</strong> and detail-oriented. I run technical audits, Schema
            markup, GTM event tracking and GA4/GSC integration, plus keyword research, local SEO,
            GBP optimization and modern search strategy (GEO/AEO), to fix site errors, improve
            architecture and deliver measurable results.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/placeholders/badge.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Visual Graphics Design</span>
                <span className="agrid__cell-meta">Megumi Information Technology Center</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Working with clients remotely</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href="mailto:fretzfern@gmail.com">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/logos/canadian-web-designs.png" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Canadian Web Designs</span>
                <span className="agrid__cell-meta">Senior SEO Specialist · 2024 - 2026</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt="Portrait of Fretz Fernandez"
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
