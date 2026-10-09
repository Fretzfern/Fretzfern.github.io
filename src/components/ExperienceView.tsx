import { roles } from '@/data/work'
import { profile } from '@/data/profile'
import '@/styles/work.css'

/** /experience: the role-by-role work history from the resume. */
export default function ExperienceView() {
  return (
    <section className="wk" aria-labelledby="xp-title">
      <header className="wk__head">
        <span className="pgrid__eyebrow">Experience</span>
        <h1 className="pgrid__title" id="xp-title">
          A career in search and web design.
        </h1>
        <p className="pgrid__lede">
          Where I have worked since 2016. Want the details?{' '}
          <a className="wk__link" href={`mailto:${profile.email}`}>
            Email me
          </a>
          .
        </p>
      </header>

      <ol className="wk__timeline">
        {roles.map((r) => (
          <li className="wk__role" key={`${r.company}-${r.years}`}>
            <span className="wk__role-logo" aria-hidden="true">
              {r.logo ? <img src={r.logo} alt="" width={44} height={44} loading="lazy" /> : <b>{r.company.charAt(0)}</b>}
            </span>
            <div className="wk__role-body">
              <div className="wk__role-top">
                <h2 className="wk__role-title">{r.title}</h2>
                <span className="wk__role-years">{r.years}</span>
              </div>
              <p className="wk__role-co">{r.company}</p>
              <p className="wk__p">{r.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
