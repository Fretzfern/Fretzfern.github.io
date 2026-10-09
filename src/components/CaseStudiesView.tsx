import { caseStudies } from '@/data/work'
import '@/styles/work.css'

/** /case-studies: three SEO case studies, each with its own result images. */
export default function CaseStudiesView() {
  return (
    <section className="wk" aria-labelledby="cs-title">
      <header className="wk__head">
        <span className="pgrid__eyebrow">Case studies</span>
        <h1 className="pgrid__title" id="cs-title">
          SEO work, and what it moved.
        </h1>
        <p className="pgrid__lede">
          Three client campaigns: the problem, what I did, and the numbers that came back.
        </p>
      </header>

      <div className="wk__stack">
        {caseStudies.map((c, i) => (
          <article className="wk__card" key={c.id} aria-labelledby={`${c.id}-title`}>
            <div className="wk__card-head">
              <span className="wk__num">Case study {i + 1}</span>
              <h2 className="wk__card-title" id={`${c.id}-title`}>
                {c.client}
              </h2>
              <p className="wk__meta">
                {c.industry} · {c.scope}
              </p>
            </div>

            <div className="wk__cols">
              <div>
                <h3 className="wk__h3">Background</h3>
                <p className="wk__p">{c.background}</p>
                <h3 className="wk__h3">Key challenges</h3>
                <ul className="wk__list">
                  {c.challenges.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="wk__h3">Solution and strategy</h3>
                <ul className="wk__list">
                  {c.solution.map((s) => (
                    <li key={s.title}>
                      <strong>{s.title}.</strong> {s.body}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="wk__h3">Results</h3>
            <ul className="wk__stats">
              {c.results.map((r) => (
                <li className="wk__stat" key={r.label}>
                  <span className="wk__stat-value">{r.value}</span>
                  <span className="wk__stat-label">{r.label}</span>
                </li>
              ))}
            </ul>

            <div className={c.shots.length > 1 ? 'wk__shots wk__shots--multi' : 'wk__shots'}>
              {c.shots.map((s) => (
                <figure className="wk__shot" key={s.src}>
                  <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
