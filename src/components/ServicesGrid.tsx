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

type Tool = { name: string; icon?: string }

const tool = (name: string, icon?: string): Tool => ({
  name,
  icon: icon ? `/icons/tools/${icon}.svg` : undefined,
})

/** Every tool, defined once. Skills below pick from this list. */
const T = {
  seranking: tool('SE Ranking', 'seranking'),
  ahrefs: tool('Ahrefs', 'ahrefs'),
  semrush: tool('Semrush', 'semrush'),
  ubersuggest: tool('Ubersuggest', 'ubersuggest'),
  moz: tool('Moz Pro', 'moz'),
  frog: tool('Screaming Frog', 'screamingfrog'),
  psi: tool('PageSpeed Insights', 'psi'),
  gsc: tool('Search Console', 'gsc'),
  ga4: tool('Google Analytics 4', 'ga4'),
  gtm: tool('Tag Manager', 'gtm'),
  gbp: tool('Business Profile', 'gbp'),
  kwp: tool('Keyword Planner', 'keywordplanner'),
  surfer: tool('Surfer SEO', 'surfer'),
  yoast: tool('Yoast SEO', 'yoast'),
  rankmath: tool('Rank Math'),
  brightlocal: tool('BrightLocal', 'brightlocal'),
  gridmb: tool('Grid My Business'),
  schema: tool('Schema markup', 'schema'),
  wp: tool('WordPress', 'wp'),
  woo: tool('WooCommerce', 'woo'),
  shopify: tool('Shopify', 'shopify'),
  wix: tool('Wix', 'wix'),
  css: tool('HTML & CSS', 'css'),
  chatgpt: tool('ChatGPT', 'chatgpt'),
  gemini: tool('Gemini', 'gemini'),
  claude: tool('Claude', 'claude'),
  perplexity: tool('Perplexity', 'perplexity'),
}

type Service = {
  title: string
  description: string
  chip: string
  /** The marks in the card header. */
  logos: string[]
  bullets: string[]
  /** Shown in their own "Tools" row under the bullets. */
  tools: Tool[]
}

const SERVICES: Service[] = [
  {
    title: 'Technical optimization',
    description: 'Find and fix what holds your site back in search.',
    chip: 'Technical',
    logos: [SEO, GSC],
    bullets: ['Site audits and crawl errors', 'Indexing, sitemaps and architecture', 'Core Web Vitals and page speed'],
    tools: [T.frog, T.seranking, T.psi, T.gsc],
  },
  {
    title: 'On-page SEO',
    description: 'Make every page clear to search engines and visitors.',
    chip: 'On-page',
    logos: [SEO, WP],
    bullets: ['Titles, meta descriptions and headings', 'Internal links and page structure', 'Image and content optimization'],
    tools: [T.yoast, T.rankmath, T.surfer, T.gsc],
  },
  {
    title: 'Off-page SEO',
    description: 'Build the authority and trust that lift rankings.',
    chip: 'Off-page',
    logos: [SEO],
    bullets: ['Business listings and directories', 'Guest posting and PDF submissions', 'Authority and backlink monitoring'],
    tools: [T.ahrefs, T.moz, T.seranking, T.semrush],
  },
  {
    title: 'Link building',
    description: 'Earn quality links and keep the profile clean.',
    chip: 'Links',
    logos: [SEO],
    bullets: ['High-authority link-building campaigns', 'Backlink audits and toxicity checks', 'Disavow files and link monitoring'],
    tools: [T.ahrefs, T.seranking, T.moz, T.semrush],
  },
  {
    title: 'Local SEO',
    description: 'Get found by customers in your area.',
    chip: 'Local',
    logos: [GBP, SEO],
    bullets: ['Google Business Profile optimization', 'Local citations and reputation', 'Local map rank tracking'],
    tools: [T.gbp, T.brightlocal, T.gridmb],
  },
  {
    title: 'Keyword research',
    description: 'Find the searches that bring in the right visitors.',
    chip: 'Research',
    logos: [SEO],
    bullets: ['Search intent and long-tail keywords', 'Competitor keyword gaps', 'Keyword mapping to pages'],
    tools: [T.kwp, T.ahrefs, T.semrush, T.ubersuggest],
  },
  {
    title: 'WordPress design',
    description: 'Custom, responsive sites that load fast and convert.',
    chip: 'WordPress',
    logos: [WP, WOO, CODE],
    bullets: ['Custom-coded layouts', 'WooCommerce stores', 'Wix and Shopify site management'],
    tools: [T.wp, T.woo, T.shopify, T.wix, T.css],
  },
  {
    title: 'Content optimization: AEO / GEO',
    description: 'Content written to rank and to be quoted in AI answers.',
    chip: 'Content',
    logos: [SEO, WP],
    bullets: ['Content refreshes for search intent', 'Answer-style content for AI Overviews (AEO)', 'Tracking AI visibility in ChatGPT, Gemini and Perplexity (GEO)'],
    tools: [T.surfer, T.chatgpt, T.gemini, T.claude, T.perplexity],
  },
  {
    title: 'Schema & tracking',
    description: 'Structured data and clean measurement setup.',
    chip: 'Analytics',
    logos: [SCHEMA, GA4, GTM],
    bullets: ['Schema markup', 'GTM event tracking', 'GA4 and GSC integration'],
    tools: [T.schema, T.gtm, T.ga4, T.gsc],
  },
  {
    title: 'Organic social media optimization',
    description: 'Consistent, scheduled posts that support your brand.',
    chip: 'Social',
    logos: [SEO],
    bullets: ['Social media posting and scheduling', 'Profile and post optimization', 'Graphics and promotional visuals'],
    // Platforms come from the Fraserlife sample. Add your scheduling tool
    // here (for example { name: 'Buffer' }) once you tell me which you used.
    tools: [{ name: 'Facebook' }, { name: 'Instagram' }, { name: 'LinkedIn' }, { name: 'YouTube' }],
  },
  {
    title: 'Monitoring & reporting',
    description: 'Clear numbers every month, with next steps.',
    chip: 'Reporting',
    logos: [GA4, GSC],
    bullets: ['Monthly performance reports', 'Rank, traffic and conversion tracking', 'Local map rank reports'],
    tools: [T.ga4, T.gsc, T.seranking, T.gridmb],
  },
]

const pad = (n: number) => String(n).padStart(2, '0')

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
                        {SERVICES.map((s, i) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">
                      {pad(i + 1)} / {pad(SERVICES.length)}
                    </span>
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
                <div className="sgrid__tools-wrap">
                  <span className="sgrid__tools-label">Tools</span>
                  <ul className="sgrid__tools" role="list" aria-label={`Tools for ${s.title}`}>
                    {s.tools.map((t) => (
                      <li key={t.name} className="sgrid__tool">
                        {t.icon && <img src={t.icon} alt="" width={14} height={14} loading="lazy" decoding="async" />}
                        {t.name}
                      </li>
                    ))}
                                   </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
