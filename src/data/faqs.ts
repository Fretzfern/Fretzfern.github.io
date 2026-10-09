export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I handle SEO end to end: technical audits, on-page and off-page optimization, local SEO and Google Business Profile, Schema markup, and GA4, Search Console and Tag Manager setup. I also design and build custom, responsive WordPress sites.',
  },
  {
    q: 'How fast can you start?',
    a: 'Reach out with your site and goals and I will reply with a clear plan. Small fixes can usually start sooner than a full audit or a site build.',
  },
  {
    q: 'How much do you charge?',
    a: 'Pricing depends on the scope: a one-off audit, a WordPress build, or ongoing SEO. Send me the details and I will put a quote together.',
  },
  {
    q: 'Where are you based?',
    a: 'I am based in the Philippines and work with clients remotely.',
  },
  {
    q: 'What happens after I write?',
    a: 'I read every message and reply by email with a few questions about your site and goals. From there we agree on scope and next steps.',
  },
]
