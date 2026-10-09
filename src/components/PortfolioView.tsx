import { ArrowUpRight } from '@/components/slab'
import { CV_URL, WIX_PORTFOLIO, featuredSites, resultShots, sampleProjects } from '@/data/work'
import '@/styles/work.css'

/** /portfolio: websites worked on, the full sample list, and result screenshots. */
export default function PortfolioView() {
  return (
    <section className="wk" aria-labelledby="pf-title">
      <header className="wk__head">
        <span className="pgrid__eyebrow">Portfolio</span>
        <h1 className="pgrid__title" id="pf-title">
          Sites I have built and optimized.
        </h1>
        <p className="pgrid__lede">
          A few featured websites, more samples from my full portfolio, and the result screenshots behind them.
        </p>
        <div className="wk__actions">
          <a className="wk__btn wk__btn--solid" href={WIX_PORTFOLIO} target="_blank" rel="noopener noreferrer">
            Full portfolio
            <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
          </a>
          <a className="wk__btn" href={CV_URL} target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
      </header>

      <div className="wk__card">
        <h2 className="wk__card-title">Featured websites</h2>
        <ul className="wk__sites">
          {featuredSites.map((s) => (
            <li className="wk__site" key={s.name}>
              <img src={s.src} alt={`${s.name} website`} loading="lazy" decoding="async" />
              <span className="wk__site-name">{s.name}</span>
              <span className="wk__site-note">{s.note}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="wk__card">
        <h2 className="wk__card-title">More samples</h2>
        <ul className="wk__chips">
          {sampleProjects.map((p) => (
            <li key={p.href}>
              <a className="wk__chip" href={p.href} target="_blank" rel="noopener noreferrer">
                {p.name}
                <ArrowUpRight size={12} weight="bold" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="wk__card">
        <h2 className="wk__card-title">Project results</h2>
        <ul className="wk__gallery">
          {resultShots.map((src, i) => (
            <li key={src}>
              <img
                src={src}
                alt={`Project result screenshot ${i + 1}`}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
