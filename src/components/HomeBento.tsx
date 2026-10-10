import type React from 'react'
import { Link } from 'react-router-dom'
import { profile } from '@/data/profile'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Robot,
  Medal,
  Stack,
  Quotes,
  FunnelSimple,
  Gear,
  AddressBook,
  Globe,
  AppWindow,
  SealCheck,
  MagnifyingGlass,
  ChartLineUp,
  TagSimple,
  MapPin,
  Browser,
  Article,
  Code,
} from '@/components/slab'
import type { Icon as PhosphorIcon } from '@/components/slab'

/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds, each built from content the portfolio already ships. Every card is
 * a link. Nothing here invents a fact - the funnels, the tools, the clients
 * and the credentials are the same records the views render in full.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

const PROJECT_SHOTS = [
  '/work/site-kratom-delivery.jpg',
  '/work/cs-kratom-dashboard.jpg',
  '/work/site-ajt-roofing.jpg',
  '/work/cs-pharmacy-dashboard.jpg',
]

const OFFERS = [
  { Icon: FunnelSimple, title: 'Technical SEO audits', note: 'Site errors, architecture, Core Web Vitals' },
  { Icon: Gear, title: 'Schema & tracking', note: 'Schema markup, GTM events, GA4 and GSC' },
  { Icon: AddressBook, title: 'Local SEO', note: 'Google Business Profile and citations' },
  { Icon: Globe, title: 'WordPress design', note: 'Custom, responsive, fast-loading sites' },
  { Icon: AppWindow, title: 'Content & graphics', note: 'Optimized content and social visuals' },
] as const

const CLIENTS = [
  { name: 'Canadian Web Designs', role: 'Senior SEO Specialist · 2024 - 2026', work: 'Audits · Schema · Link-building', logo: '/logos/canadian-web-designs.png' },
  { name: 'Volfyre Digital Marketing', role: 'Senior SEO / WordPress Designer · 2019 - 2023', work: 'SEO · WordPress · Graphics', logo: '/logos/volfyre.png' },
  { name: 'Bingerlabs', role: 'Freelance SEO Specialist · 2023', work: 'Audits · Citations · Keywords', logo: '/logos/bingerlabs.png' },
  { name: 'JNB Web Promotion', role: 'Junior SEO / Graphic Designer · 2016 - 2019', work: 'Keywords · On-page · Design', logo: '/logos/jnb.png' },
]


type Skill = { id: string; name: string; Icon: PhosphorIcon; status?: string }

/** The skills from the resume, shown as two scrolling chip rows. */
const AI_BUILDS: Skill[] = [
  { id: 'audits', name: 'Technical SEO audits', Icon: MagnifyingGlass },
  { id: 'schema', name: 'Schema markup', Icon: Code },
  { id: 'ga4', name: 'GA4 and Search Console', Icon: ChartLineUp },
  { id: 'gtm', name: 'GTM event tracking', Icon: TagSimple },
  { id: 'local', name: 'Local SEO and GBP', Icon: MapPin },
  { id: 'aeo', name: 'GEO / AEO', Icon: MagnifyingGlass },
  { id: 'wp', name: 'WordPress design', Icon: Browser },
  { id: 'content', name: 'Content optimization', Icon: Article },
  { id: 'ahrefs', name: 'Ahrefs · Semrush · SE Ranking', Icon: ChartLineUp },
  { id: 'frog', name: 'Screaming Frog', Icon: MagnifyingGlass },
  { id: 'yoast', name: 'Yoast · Rank Math', Icon: Code },
  { id: 'cms', name: 'WordPress · Wix · Shopify', Icon: Browser },
]

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(AI_BUILDS.length / 2)
  const toolRows = [AI_BUILDS.slice(0, half), AI_BUILDS.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Case studies: site and dashboard shots drift upward on a looped track. */}
      <Link to="/case-studies" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Case studies" desc="Five SEO campaigns and their results." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_SHOTS, ...PROJECT_SHOTS].map((src, i) => (
              <span key={i} className="bento__shot">
                <img src={src} alt="" loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* About: a short note about me. */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="Seven years of SEO and web design." />
        <div className="bento__media bento__aboutme">
          <img className="bento__aboutme-photo" src={profile.avatarSrc} alt="" width={56} height={56} />
          <p className="bento__aboutme-text">
            I am Fretz, an SEO specialist and WordPress designer. I help businesses get found on Google with technical
            SEO, local SEO and fast, custom WordPress sites.
          </p>
        </div>
      </Link>

      {/* AI builds: the systems from the Projects tree, two chip rows
          scrolling against each other. */}
      <Link to="/about" className="bento__card bento__card--ai">
        <CardHead Icon={Robot} title="Skills" desc="The tools and methods I use every day." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {toolRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((n, i) => (
                  <span key={`${n.id}-${i}`} className="bento__chip" data-status={n.status}>
                    <n.Icon size={15} weight="duotone" />
                    {n.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* Credentials: the badge that matters, on its plate. */}
      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Credentials" desc="Visual Graphics Design, Megumi Information Technology Center." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <img src="/placeholders/badge.svg" alt="" width={72} height={72} />
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            Visual Graphics Design
          </span>
        </div>
      </Link>

      {/* Services: the five offers as a compact index. */}
      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Services" desc="SEO and WordPress services for growing businesses." />
        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ Icon, title, note }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{note}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>

      {/* Testimonials: client cards drifting up a clipped column. */}
      <Link to="/experience" className="bento__card bento__card--quotes">
        <CardHead Icon={Quotes} title="Experience" desc="Where I have worked since 2016." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  {c.logo ? (
                    <img src={c.logo} alt="" width={18} height={18} />
                  ) : (
                    <Quotes size={14} weight="fill" />
                  )}
                  <b>{c.name}</b>
                </span>
                <span className="bento__review-role">{c.role}</span>
                <span className="bento__review-work">{c.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
