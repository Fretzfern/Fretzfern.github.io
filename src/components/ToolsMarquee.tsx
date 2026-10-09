import { useMemo } from 'react'

/**
 * ToolsMarquee
 *
 * Horizontally scrolling strip of brand logos + labels for the tools you work with.
 * The list below is Fretz's SEO tools and platforms (icons live in public/icons/tools/).
 * The strip lives on the cream shader page, NOT inside a dark section.
 *
 * Implementation notes:
 * - The tools list is duplicated in JSX (`doubled`) so the CSS keyframe can translate
 *   by exactly -50% and produce a seamless loop. The halfway point lands on the seam
 *   between the two copies, so the reset at 100% is invisible.
 * - Icons come in two flavors:
 *     1. Single-color simple-icons SVGs (.svg) are rendered as CSS masks tinted
 *        via a per-item `--brand-color` custom property. This lets us ship one
 *        black-shape file per brand and paint it with the brand color.
 *     2. Multi-color brand marks (PNG or multi-color SVG - GoHighLevel,
 *        Lightspeed, Claude Code, VS Code, Google Workspace) are rendered as
 *        raw `<img>` tags because gradients/layered fills cannot be reduced to
 *        a single silhouette.
 *   The renderer picks the mode by whether a `color` is set: color -> mask,
 *   no color -> img.
 * - Brand colors live in the data layer below (not tokens.css) because they are
 *   external brand identifiers, not part of the site palette. They are passed to
 *   CSS via `--brand-color` custom properties so the component stylesheet stays
 *   free of inline hex values.
 * - Accessibility: the animated track is aria-hidden because its content is
 *   duplicated and moving. The real semantic list sits in an sr-only <ul> so
 *   screen readers get a clean, deduped enumeration of the tools.
 */

type Tool = {
  name: string
  /** What I use it for. Read out by screen readers. */
  what: string
  iconPath: string
  /** When set, the SVG silhouette is tinted via CSS mask. Omit for multi-color marks. */
  color?: string
}

export const tools: Tool[] = [
  { name: 'SE Ranking', what: 'Keyword research, rank tracking, competitor analysis and SEO audits', iconPath: '/icons/tools/ser.svg' },
  { name: 'Ahrefs', what: 'Keyword research, backlink analysis, competitor research, content gaps and site audits', iconPath: '/icons/tools/ahrefs.svg' },
  { name: 'Semrush', what: 'Keyword research, competitor analysis, position tracking, backlinks and technical audits', iconPath: '/icons/tools/semrush.svg' },
  { name: 'Ubersuggest', what: 'Keyword research, competitor analysis, backlink research and content ideas', iconPath: '/icons/tools/ubersuggest.svg' },
  { name: 'Google Search Console', what: 'Search performance, indexing, queries, Core Web Vitals and technical monitoring', iconPath: '/icons/tools/gsc.svg' },
  { name: 'Google Analytics 4', what: 'Traffic, user behavior, conversions and performance tracking', iconPath: '/icons/tools/ga4.svg' },
  { name: 'Google Tag Manager', what: 'Custom event tracking and analytics implementation', iconPath: '/icons/tools/gtm.svg' },
  { name: 'Google Business Profile', what: 'Local SEO and business listing optimization', iconPath: '/icons/tools/gbp.svg' },
  { name: 'PageSpeed Insights', what: 'Website speed and Core Web Vitals analysis', iconPath: '/icons/tools/psi.svg' },
  { name: 'Screaming Frog', what: 'Technical crawling: broken links, redirects, metadata, canonicals and indexability', iconPath: '/icons/tools/frog.svg' },
  { name: 'Yoast SEO / Rank Math', what: 'WordPress SEO: metadata, XML sitemaps, schema and on-page optimization', iconPath: '/icons/tools/yoast.svg' },
  { name: 'Google Keyword Planner', what: 'Keyword research and search volume analysis', iconPath: '/icons/tools/kwp.svg' },
  { name: 'Surfer SEO', what: 'Content optimization and competitor content analysis', iconPath: '/icons/tools/surfer.svg' },
  { name: 'WordPress', what: 'Website design, landing pages, on-page SEO and optimization', iconPath: '/icons/tools/wp.svg' },
  { name: 'Wix', what: 'Website management, on-page SEO and optimization', iconPath: '/icons/tools/wix.svg' },
  { name: 'Shopify', what: 'E-commerce SEO, on-page optimization and website management', iconPath: '/icons/tools/shopify.svg' },
  { name: 'HTML & CSS', what: 'Basic website customization and responsive design', iconPath: '/icons/tools/css.svg' },
]

export default function ToolsMarquee() {
  // Duplicate the list so the -50% translate lands on a seamless seam.
  // useMemo keeps the doubled array reference-stable across renders.
  const doubled = useMemo(() => [...tools, ...tools], [])

  return (
    <section className="tools-marquee" aria-label="Tools I work with" data-reveal>
      <div className="tools-marquee__track" aria-hidden="true">
        {doubled.map((tool, i) => {
          const useMask = tool.iconPath.endsWith('.svg') && !!tool.color
          return (
            <div key={`${tool.name}-${i}`} className="tools-marquee__item">
              {/* A plain box on desktop (display: contents); on phones it is
                  the rounded app-icon tile - a masked icon cannot carry its
                  own background, so the tile needs its own element. */}
              <span className="tools-marquee__tile">
                {useMask ? (
                  <span
                    className="tools-marquee__icon"
                    style={{
                      ['--icon-url' as string]: `url('${tool.iconPath}')`,
                      ['--brand-color' as string]: tool.color ?? 'var(--navy)',
                    }}
                  />
                ) : (
                  <img
                    className="tools-marquee__img"
                    src={tool.iconPath}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    width={20}
                    height={20}
                  />
                )}
              </span>
              <span className="tools-marquee__label">{tool.name}</span>
            </div>
          )
        })}
      </div>

      {/* Real semantic list for screen readers, dedupes the visual loop. */}
      <ul className="sr-only">
        {tools.map((t) => (
          <li key={t.name}>
            {t.name}: {t.what}
          </li>
        ))}
      </ul>
    </section>
  )
}
