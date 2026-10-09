import { ArrowUpRight } from '@/components/slab'
import { CV_URL, WIX_PORTFOLIO, featuredSites, reportGroups, resultShots, sampleProjects } from '@/data/work'
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
        <h2 className="wk__card-title">Reports and analytics</h2>
        <p className="wk__p">
          Screenshots from the tools I work in every day, each with what it shows, what I did, and the improvement.
        </p>
        {reportGroups.map((g) => (
          <section className="wk__group" key={g.title} aria-label={g.title}>
            <h3 className="wk__h3">{g.title}</h3>
            <p className="wk__p">{g.lede}</p>
            <ul className="wk__reports">
              {g.items.map((r) => (
                <li className="wk__report" key={r.file}>
                  <img
                    src={`/reports/${r.file}.png`}
                    alt={`${r.title}: ${r.context}`}
                    width={670}
                    height={370}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="wk__report-body">
                    <h4 className="wk__report-title">{r.title}</h4>
                    <span className="wk__report-ctx">{r.context}</span>
                    <p className="wk__p">
                      <strong>What it shows.</strong> {r.shows}
                    </p>
                    <p className="wk__p">
                      <strong>What I do.</strong> {r.did}
                    </p>
                    <p className="wk__p wk__p--result">
                      <strong>The improvement.</strong> {r.result}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
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
