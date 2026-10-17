/**
 * Work history, case studies and portfolio samples. One file, so each fact
 * lives in exactly one place. Case-study copy comes from Fretz's case-study
 * document; the roles come from his resume.
 */

export type Stat = { value: string; label: string }
export type Shot = { src: string; alt: string }

export type CaseStudy = {
  id: string
  client: string
  industry: string
  scope: string
  background: string
  challenges: string[]
  solution: { title: string; body: string }[]
  results: Stat[]
  /** An honest note on what the next round of work targets. */
  next?: string
  shots: Shot[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'kratom-delivery-canada',
    client: 'Kratom Delivery Canada',
    industry: 'E-commerce / botanical products',
    scope: 'SEO project: technical and content optimization',
    background:
      'The client wanted to expand their online presence across Canada, improve website visibility, and increase user engagement through continuous search performance monitoring and targeted optimizations. Operating in a niche market required strict compliance with content standards while driving high-intent organic traffic.',
    challenges: [
      'High local competition in targeted metropolitan regions (the GTA and nationally).',
      'Technical SEO bottlenecks hindering crawl budget efficiency and page indexing.',
      'Need for strict keyword targeting to reach users looking for fast local fulfillment.',
    ],
    solution: [
      {
        title: 'Technical SEO audit and fixes',
        body: 'Resolved crawl errors, improved page speed, and structured XML sitemaps to ensure optimal site health, reaching a Website Health Score of 99/100.',
      },
      {
        title: 'On-page and keyword optimization',
        body: 'Targeted focused long-tail keywords around regional delivery terms, optimizing product metadata and descriptions.',
      },
      {
        title: 'Link authority building',
        body: 'Ran a targeted link-building campaign to build high-quality domain authority.',
      },
    ],
    results: [
      { value: '+31.25%', label: 'Organic traffic, reaching 2.1K monthly visitors' },
      { value: '22 (+3)', label: 'Top 3 keyword rankings' },
      { value: '48 (+5)', label: 'Top 10 keyword rankings' },
      { value: '32 (+6)', label: 'Domain Rating (DR)' },
      { value: '295 (+34)', label: 'Backlinks' },
      { value: '99/100', label: 'Website health score' },
    ],
    shots: [
      { src: '/work/cs-kratom-dashboard.jpg', alt: 'Kratom Delivery Canada SEO results dashboard' },
      { src: '/work/cs-kratom-gsc.jpg', alt: 'Google Search Console performance for Kratom Delivery Canada' },
      { src: '/work/cs-kratom-ga4.jpg', alt: 'Google Analytics overview for Kratom Delivery Canada' },
    ],
  },
  {
    id: 'ajt-roofing-contracting',
    client: 'AJT Roofing & Contracting',
    industry: 'Local service / contracting, St. Catharines and the Niagara region',
    scope: 'SEO campaign: search recovery and ranking dominance (monthly report, November 2025)',
    background:
      'The client experienced a drop in website traffic and overall online visibility. They required an aggressive search engine optimization strategy to recover lost positions, improve search visibility, and convert traffic into inbound service leads.',
    challenges: [
      'Ranking fluctuations caused by technical site issues and outdated on-page SEO.',
      'Poor search visibility score impacting local search presence.',
      'Sub-optimal user engagement metrics affecting overall site authority.',
    ],
    solution: [
      {
        title: 'Core Web Vitals and technical overhaul',
        body: 'Corrected indexing issues, optimized structured data, and fixed broken or suspicious links, clearing all 14 audit errors and lifting the health score from 84 to 87.',
      },
      {
        title: 'Local and intent-focused content',
        body: 'Restructured landing page copy and metadata to align with intent-driven local service queries.',
      },
      {
        title: 'UX and conversion optimization',
        body: 'Streamlined navigation and clear call-to-action paths to improve dwell time and reduce bounce rates.',
      },
    ],
    results: [
      { value: '14 to 0', label: 'Critical site errors in the audit' },
      { value: '84 to 87', label: 'Site health score' },
      { value: '169 to 81', label: 'Audit warnings (112 fixed)' },
      { value: '585 (+162)', label: 'Organic clicks per month (SE Ranking)' },
      { value: '896 (+37)', label: 'Organic keywords' },
      { value: '507', label: 'Referring domains, up from 445 (Domain Trust 18)' },
      { value: '1,123 (+95.6%)', label: 'Business Profile views in October vs October 2024' },
      { value: '105 (+12.9%)', label: 'Profile interactions in November vs November 2024' },
      { value: '643 to 667', label: 'Sessions, October to November (GA4)' },
    ],
    next:
      'Search Console clicks eased from 176 to 126 over the month and average position slipped from 16 to 18.5, as "roofing st catharines" and related terms dropped one or two places and Business Profile search appearances fell from 160 to 16. The next round recovers the core local service pages, rewrites titles and descriptions to lift the 0.4% click-through rate, adds internal links to lift Page Trust (13), and refreshes Business Profile posts, photos and citations.',
    shots: [
      { src: '/cases/ajt-crawl-comparison.jpg', alt: 'AJT Roofing site audit comparison: errors cleared from 14 to 0' },
      { src: '/cases/ajt-top-keywords.jpg', alt: 'AJT Roofing top, jumped and dropped keywords' },
      { src: '/cases/ajt-gbp-october.jpg', alt: 'AJT Roofing Business Profile interactions, October 2025' },
      { src: '/cases/ajt-gbp-november.jpg', alt: 'AJT Roofing Business Profile interactions, November 2025' },
      { src: '/cases/ajt-views-october.jpg', alt: 'AJT Roofing Business Profile views and searches, October 2025' },
      { src: '/cases/ajt-views-november.jpg', alt: 'AJT Roofing Business Profile views and searches, November 2025' },
      { src: '/cases/ajt-gsc-october.jpg', alt: 'AJT Roofing Search Console data, October 2025' },
      { src: '/cases/ajt-gsc-november.jpg', alt: 'AJT Roofing Search Console data, November 2025' },
    ],
  },
  {
    id: 'cloud-pharmacy',
    client: 'Cloud Pharmacy',
    industry: 'Healthcare / online pharmacy services',
    scope: 'SEO and analytics performance campaign',
    background:
      'The client sought to enhance online visibility and drive steady organic traffic growth through targeted SEO strategies, combined with robust tracking setups to accurately measure user behavior and conversions.',
    challenges: [
      'Highly competitive industry requiring high authority and technical reliability.',
      'Lack of custom analytics tracking for key conversion events and user actions.',
      'Sub-optimal visibility across top targeted keywords.',
    ],
    solution: [
      {
        title: 'Technical and on-page SEO',
        body: 'Standardized metadata, structured schema markup, and optimized site hierarchy for improved crawl efficiency.',
      },
      {
        title: 'Custom tracking infrastructure',
        body: 'Configured Google Search Console, Google Analytics (GA4), and Google Tag Manager custom events to track precise user paths and engagement goals.',
      },
      {
        title: 'Authority building',
        body: 'Used targeted backlinking tactics to raise Domain Trust and rank core commercial pages.',
      },
    ],
    results: [
      { value: '19', label: 'Keywords in the Top 3' },
      { value: '45', label: 'Keywords in the Top 10' },
      { value: '27.73%', label: 'Search visibility' },
      { value: '3.1K', label: 'Organic keywords' },
      { value: '1.8K', label: 'Sessions in the monthly report' },
      { value: '202', label: 'Conversions tracked' },
      { value: '68.9%', label: 'Share of traffic from organic search (+14.2%)' },
      { value: '2m 48s', label: 'Average session duration (+9.7%)' },
      { value: '42.6%', label: 'Bounce rate (down 6.3%)' },
    ],
    shots: [
      { src: '/work/cs-pharmacy-dashboard.jpg', alt: 'Cloud Pharmacy SEO and analytics performance overview' },
      { src: '/work/cs-pharmacy-analytics.jpg', alt: 'Cloud Pharmacy traffic and engagement dashboard' },
    ],
  },
  {
    id: 'travel-time-taxi',
    client: 'Travel Time Taxi & Limousine',
    industry: 'Airport taxi and limousine service, Halifax',
    scope: 'Monthly SEO program: local SEO, content, links and reporting',
    background:
      'Travel Time Taxi & Limousine serves Halifax Stanfield International Airport and long-distance routes across Nova Scotia through taxihalifaxairport.com. The program aims for steadier airport and long-distance bookings from search, backed by monthly reporting on the Google Business Profile, rankings, traffic and site health.',
    challenges: [
      'Business Profile views and interactions were running 12% to 15% below the same months of 2025.',
      'Many airport terms ranked on page one but earned few clicks, with click-through rate holding at 0.9%.',
      'The backlink profile included low-quality bookmark and syndicated links that needed ongoing monitoring.',
    ],
    solution: [
      {
        title: 'Local SEO and Google Business Profile',
        body: 'Posted eight Business Profile updates in September on flat-rate, long-distance and flight-day topics, and kept the 4.9-star, 45-review profile active.',
      },
      {
        title: 'Content and on-page',
        body: 'Added airport-focused blog posts such as a Dalhousie-to-airport guide and a delayed-flight guide, with rewritten SEO titles, slugs and meta descriptions.',
      },
      {
        title: 'Links and monitoring',
        body: 'Tracked 65 referring domains and 191 backlinks, kept a 34-entry disavow list, and watched for lost or broken links.',
      },
      {
        title: 'Analytics and technical',
        body: 'Reported monthly from GA4, Search Console and SE Ranking, and held the site audit at a health score of 95/100 across 198 pages.',
      },
    ],
    results: [
      { value: '45 to 295', label: 'Conversions, August to September (GA4)' },
      { value: '34 to 227', label: 'Organic conversions, August to September' },
      { value: '544 to 670', label: 'Sessions, August to September' },
      { value: '50.6%', label: 'Engagement rate, up from 47.06%' },
      { value: '3,670', label: 'Business Profile views in September (+30.55%)' },
      { value: '#1 (+24)', label: '"Scheduled airport pickup Halifax" ranking' },
      { value: '510 (+21)', label: 'Organic keywords' },
      { value: '95/100', label: 'Site health score' },
    ],
    next:
      'Over the last three months clicks and impressions eased (744 to 612 clicks) and average position moved from 11.9 to 14.3. The next round targets click-through with sharper titles and descriptions, pushing "Halifax airport transportation" from #6 into the top 3, and closing the year-on-year Business Profile gap with reviews and Maps-focused posts.',
    shots: [
      { src: '/cases/ttt-ga-august.jpg', alt: 'Travel Time Taxi Google Analytics overview, August 2026' },
      { src: '/cases/ttt-ga-september.jpg', alt: 'Travel Time Taxi Google Analytics overview, September 2026' },
      { src: '/cases/ttt-organic-august.jpg', alt: 'Travel Time Taxi organic traffic sources, August 2026' },
      { src: '/cases/ttt-organic-september.jpg', alt: 'Travel Time Taxi organic traffic sources, September 2026' },
      { src: '/cases/ttt-keyword-rankings.jpg', alt: 'Travel Time Taxi keyword rankings table' },
      { src: '/cases/ttt-top-keywords.jpg', alt: 'Travel Time Taxi top, jumped and dropped keywords' },
      { src: '/cases/ttt-gbp-august.jpg', alt: 'How people discovered the Travel Time Taxi Business Profile, August 2026' },
      { src: '/cases/ttt-gbp-september.jpg', alt: 'How people discovered the Travel Time Taxi Business Profile, September 2026' },
    ],
  },
  {
    id: 'brown-coach-line',
    client: 'Brown Coach Line',
    industry: 'Charter bus and coach rental, Toronto and the GTA',
    scope: 'Monthly SEO program: rankings, content, links and reporting',
    background:
      'Brown Coach Line is a Markham, Ontario coach company offering charter and group transportation across Toronto, the GTA and Ontario. The program targets high-intent rental searches such as bus rental costs and "near me" queries, with monthly reporting for August 13 to September 13, 2026.',
    challenges: [
      'Competitive "bus rental" and "charter" searches across Toronto and the GTA.',
      'A new full-site crawl surfaced 3 errors and 55 warnings to clear.',
      'Link equity sat on a few pages: 20 anchor-text variations and only 25 domains linking to the homepage.',
    ],
    solution: [
      {
        title: 'Keyword and content strategy',
        body: 'Targeted rental, cost and "near me" terms with long-form guides, including a Toronto charter bus cost guide, a corporate event transportation guide and a group airport transfer comparison.',
      },
      {
        title: 'On-page optimization',
        body: 'Wrote SEO titles, slugs and meta descriptions around quote requests for each new post.',
      },
      {
        title: 'Off-page and links',
        body: 'Grew a profile of 505 backlinks from 149 referring domains, including Medium, Pinterest, Trustpilot and BBB, with a 12-entry disavow list.',
      },
      {
        title: 'Technical and speed',
        body: 'Ran full-site crawls and PageSpeed tests, lifting the audit health score from 84 to 93.',
      },
    ],
    results: [
      { value: '#1', label: '"Bus for rent cheap" (+32), "coach rentals near me", "coach bus rental costs" and "Toronto Bus Rental Cost"' },
      { value: '+96', label: '"Charter bus rental companies near me" jumped to #4' },
      { value: '49 to 67', label: 'Search Console clicks (+36.7%)' },
      { value: '40.5 to 35.7', label: 'Average position in Search Console' },
      { value: '46.15%', label: 'Organic engagement rate, up from 38.24%' },
      { value: '24 to 28', label: 'Conversions (+16.7%)' },
      { value: '84 to 93', label: 'Site health score, from Strong to Excellent' },
      { value: '505', label: 'Backlinks from 149 referring domains' },
    ],
    next:
      'Organic sessions dipped (353 to 260) and the new crawl found work to do. The next round recovers session volume, rewrites titles and descriptions for top-ranking terms that earn few clicks, clears the 3 errors and 55 warnings, and adds homepage links from relevant Canadian sources.',
    shots: [
      { src: '/cases/bcl-ranking-overview.jpg', alt: 'Brown Coach Line keyword ranking overview' },
      { src: '/cases/bcl-top-keywords.jpg', alt: 'Brown Coach Line top, jumped and dropped keywords' },
      { src: '/cases/bcl-search-console.jpg', alt: 'Brown Coach Line Search Console data' },
      { src: '/cases/bcl-crawl-comparison.jpg', alt: 'Brown Coach Line site audit comparison' },
      { src: '/cases/bcl-referring-domain-trends.jpg', alt: 'Brown Coach Line referring domain trends' },
      { src: '/cases/bcl-referring-domains.jpg', alt: 'Brown Coach Line referring domains' },
      { src: '/cases/bcl-blog-posts.jpg', alt: 'New Brown Coach Line blog posts' },
    ],
  },
]

/* ---------- Testimonials ---------- */

export type Testimonial = {
  headline: string
  /** 1 to 5 */
  rating: number
  /** A short pull-quote for small cards. */
  teaser?: string
  /** One entry per paragraph. */
  quote: string[]
  name: string
  /** Job title, when the reviewer is an owner or manager. */
  role?: string
  business: string
  service?: string
  project?: string
  impact?: { label: string; text: string }[]
}

/** Add more testimonials to this list and they appear on the Case studies page. */
export const testimonials: Testimonial[] = [
  {
    headline: '5 out of 5 stars for SEO services',
    rating: 5,
    quote: [
      'We really appreciated all the work Fretz put into helping our website improve its organic growth and search visibility. His SEO efforts were very helpful, and we could see the value in the work he was doing for the business. He was professional, knowledgeable, helpful, and easy to communicate with throughout the process. We were very happy with the work he completed and would have no problem recommending Fretz to others looking for SEO services.',
    ],
    teaser: 'We really appreciated all the work Fretz put into helping our website improve its organic growth and search visibility.',
    name: 'Alfonso',
    business: 'Kratom Delivery Canada',
    service: 'Search engine optimization (SEO) and search visibility',
    project: 'Organic search strategy and technical SEO',
    impact: [
      { label: 'Growth', text: 'Increased organic traffic and search engine visibility.' },
      { label: 'Working together', text: 'Praised for professionalism, knowledge and clear communication.' },
      { label: 'Verdict', text: 'Would recommend to businesses looking for SEO services.' },
    ],
  },
  {
    headline: '5 out of 5 stars',
    rating: 5,
    quote: [
      'Fretz has improved our organic reach and local search performance significantly since he started doing SEO for us.',
      'Fretz is professional, responsive, and data-driven. He is super easy to communicate with and very reliable. Thanks, Fretz, for all your hard work!',
      'Overall I am very happy with Fretz\'s work. Since he started, results have improved. He has listened to our suggestions and worked on them to achieve results. I am looking forward to seeing improved results on opportunities. Thank you!',
    ],
    teaser: 'Fretz has improved our organic reach and local search performance significantly since he started doing SEO for us.',
    name: 'Faisal',
    business: 'Travel Time Taxi and Limo',
    service: 'Search engine optimization (SEO) and local search',
    impact: [
      { label: 'Growth', text: 'Organic reach and local search performance improved significantly.' },
      { label: 'Working together', text: 'Professional, responsive, data-driven and very reliable.' },
      { label: 'Feedback', text: 'Listened to suggestions and worked on them to achieve results.' },
    ],
  },
  {
    headline: '5 out of 5 stars',
    rating: 5,
    quote: [
      'Fretz was an indispensable part of the JNB Web Promotion team during his three years with us as a Junior SEO Specialist. Handling a demanding portfolio of multiple client accounts at once, he showed a rare level of discipline and adaptability.',
      'From meticulous on-site optimizations to solid off-site strategies, Fretz consistently delivered measurable rank improvements and steady organic growth across diverse industries. He took complete ownership of his accounts and balanced competing priorities with ease. Any team or client would be lucky to have his dedication and SEO expertise.',
    ],
    name: 'John Bertrand',
    role: 'Owner',
    business: 'JNB Web Promotion',
    service: 'Performance review: Junior SEO Specialist, three years',
  },
  {
    headline: '5 out of 5 stars',
    rating: 5,
    quote: [
      'Fretz is an absolute powerhouse. He manages our client accounts across the US, Canada, and Australia with ease, across completely different niches. From technical, on-site, and off-site SEO to GBP management, social posting, and DNS audits, he handles the full spectrum.',
      'What sets him apart is his initiative. When our web developers were tied up, Fretz researched and resolved complex SEO plugin errors on his own. He is reliable, proactive, and essential to Volfyre Digital.',
    ],
    name: 'Archy',
    role: 'Founder and Owner',
    business: 'Volfyre Digital Marketing',
  },
  {
    headline: '5 out of 5 stars',
    rating: 5,
    quote: [
      'Fretz took our core product pages, revitalized the on-page elements and content, and built a clean, powerful backlink profile that sent our keyword rankings soaring. Even while balancing multiple complex accounts, his attention to detail and proactive strategy never missed a beat!',
    ],
    name: 'Marverly',
    business: 'Bingerlabs',
  },
]

/* ---------- Portfolio ---------- */

/** The resume PDF hosted with the site (public/Fretz-Fernandez-CV.pdf). */
export const CV_URL = '/Fretz-Fernandez-CV.pdf'

export type FeaturedSite = { name: string; note: string; src: string }

export const featuredSites: FeaturedSite[] = [
  { name: 'Kratom Delivery Canada', note: 'E-commerce, GTA and Canada-wide delivery', src: '/work/site-kratom-delivery.png' },
  { name: 'AJT Roofing & Contracting', note: 'Local service website', src: '/work/site-ajt-roofing.png' },
  { name: 'Cloud Pharmacy', note: 'Online pharmacy services', src: '/work/site-cloud-pharmacy.png' },
  { name: 'Halifax Airport Taxi & Limousine', note: 'Transport service website', src: '/work/site-halifax-taxi.png' },
]

export type Sample = { name: string; id: string; w: number; h: number; about: string }

/** Cover images are loaded straight from Wix. */
export const sampleProjects: Sample[] = [
  { name: 'Fraserlife', id: 'ea9bebf1d053427ab5d2f1e1dc057554', w: 1206, h: 616, about: 'Monthly content posting, offsite work, content optimization and technical checks, plus scheduled social posts (YouTube optimization, Instagram, Facebook, LinkedIn), transcriptions, captions and infographic designs.' },
  { name: 'Ashmira', id: 'aa444cfd1ee0459eb9727adb557b5f39', w: 1202, h: 702, about: 'A wax and skincare site: onsite and technical optimization, including structured metadata and loading-speed fixes.' },
  { name: 'NYCO Renovations', id: '7609d1c7f4254ed3b550c2826c125f9a', w: 1202, h: 672, about: 'Link building, content and social media marketing, guest posting, PDF submissions, business and directory listings, with monthly PR, blog, informational and Web 2.0 posts.' },
  { name: 'Frame 25', id: '3b5a59bd481943f6b95c178d3e4faf74', w: 1215, h: 668, about: 'Built on CraftCMS, where the dashboard is harder to explore than WordPress. Onsite optimization and technical analysis.' },
  { name: 'WeAnswer', id: '5609ca3d06114f8ab0330b732b65afc2', w: 1201, h: 617, about: '' },
  { name: 'Cyber Security', id: '7823dc9d405d4be5988c30f752ef5f26', w: 1198, h: 686, about: 'Link building, guest posting, PDF submissions, business listings and directories.' },
  { name: 'FarmTX', id: '9bfd824a662341b0a480589ea094d1f7', w: 1199, h: 698, about: 'Moved WooCommerce product images to a second domain under development, and added product variations and descriptions.' },
  { name: 'Cyberhunter', id: '32a6dacdc87f4964a724c475721ea66c', w: 1199, h: 684, about: 'Link building, content and social media marketing, guest posting, PDF submissions, listings and directories, with monthly content posting.' },
  { name: 'Stash&co', id: '08d6e20af64644dc85cb0d6bebed9fcf', w: 1200, h: 695, about: 'Business listings, directory and PDF submissions, guest posting, link building, content and social media marketing, with monthly content posting.' },
  { name: 'We Buy House', id: '1661f12407a244e4b8c5f80fad3752ab', w: 1196, h: 682, about: 'Link building, content and social media marketing, guest posting, PDF submissions, listings and directories, with monthly content posting.' },
  { name: 'BigBus', id: 'b7bf2ec052494fadb594bebbff8946c2', w: 1201, h: 698, about: 'Link building, guest posting, PDF submissions, business listings and directories.' },
  { name: 'Tremblay', id: 'c4ae40c9ea434dab958dd49d6b446157', w: 1197, h: 673, about: 'Link building, content and social media marketing, guest posting, PDF submissions, listings and directories, with monthly content posting.' },
  { name: 'All Roofing', id: 'a779297036b1408ea44f72a84883232b', w: 1205, h: 631, about: 'Link building, guest posting, PDF submissions, business listings and directories, with a traffic status report every weekend.' },
  { name: 'Bittrust', id: '902493c5ecaf44b1b8080b10a2789f7c', w: 1173, h: 683, about: 'A cryptocurrency and bitcoin project I manage: link building, content and social media marketing, guest posting, listings and directories, with monthly content posting.' },
  { name: 'WooCommerce: FranceAtHome', id: '5c0761ea44fd471ca897d95de326d3e9', w: 1354, h: 688, about: 'Australia\'s biggest online French supermarket. Product, variation and pricing checks, plus offsite, onsite and image optimization.' },
]

export const sampleImage = (p: Sample) =>
  `https://static.wixstatic.com/media/e6fe4c_${p.id}~mv2.png/v1/fill/w_${p.w},h_${p.h},al_c/e6fe4c_${p.id}~mv2.png`

/* ---------- Experience (from the resume) ---------- */

export type Role = { title: string; company: string; years: string; logo?: string; body: string }

export const roles: Role[] = [
  {
    title: 'Senior SEO Specialist',
    company: 'Canadian Web Designs',
    years: '2024 - 2026',
    logo: '/logos/canadian-web-designs.png',
    body: 'Technical site audits, site architecture optimization, and schema markup to maximize organic visibility. High-authority link-building, reputation management, and performance analytics to adapt strategies to algorithm shifts and drive measurable search growth.',
  },
  {
    title: 'WordPress Web Dev Apprentice',
    company: 'WooCommerce store network',
    years: '2023 - 2024',
    body: 'Managed high-volume WooCommerce infrastructure across a network of specialized e-commerce stores, maintaining uptime, site security, and large product catalogs. Optimized page speed and diagnostics while customizing storefront layouts with HTML, CSS, and custom PHP snippets. Worked with senior developers to resolve staging bugs, run database cleanups, and keep transaction environments responsive.',
  },
  {
    title: 'Freelance SEO Specialist',
    company: 'Bingerlabs',
    years: '2023',
    logo: '/logos/bingerlabs.png',
    body: 'Performance-focused search engine optimization: technical audits, local citation building, and high-intent keyword targeting to lift rankings and drive qualified organic traffic.',
  },
  {
    title: 'Senior SEO / WordPress Designer',
    company: 'Volfyre Digital Marketing',
    years: '2019 - 2023',
    logo: '/logos/volfyre.png',
    body: 'WordPress web design and graphic design alongside full-lifecycle SEO: technical audits, local citations, and Core Web Vitals optimization. Built fully responsive, custom-coded WordPress sites and designed visual assets that increased brand engagement across client campaigns.',
  },
  {
    title: 'Junior SEO / Graphic Designer',
    company: 'JNB Web Promotion',
    years: '2016 - 2019',
    logo: '/logos/jnb.png',
    body: 'Combined SEO and visual design to drive organic traffic and brand presence for client websites: keyword research, on-page optimization, link-building campaigns, social media graphics and promotional materials, with reporting from Google Analytics and Search Console.',
  },
]

/* ---------- Reports and analytics ---------- */

export type Report = {
  /** One or more cropped screenshots from the same report. */
  files: string[]
  title: string
  /** The tool and site the screenshot comes from. */
  context: string
  shows: string
  did: string
  result: string
}

export type ReportGroup = { title: string; lede: string; items: Report[] }

export const reportGroups: ReportGroup[] = [
  {
    title: 'Rankings and visibility',
    lede: 'Rank tracking in SE Ranking: where the keywords started and where they sit now.',
    items: [
      {
        files: ['rank-tracker-halifax-taxi-1-v3', 'rank-tracker-halifax-taxi-2-v3'],
        title: 'Airport taxi searches take the top spots',
        context: 'SE Ranking and Search Console · Travel Time Taxi',
        shows: 'Keyword positions for the Travel Time Taxi website, with last month of Search Console data underneath.',
        did: 'I pointed airport-intent searches at dedicated pages and tracked every movement.',
        result:
          'Top 3 keywords reached 40 (+34), Top 10 reached 64 (+55), and search visibility hit 53.7% (+52.3). "Halifax taxi from airport" (390 searches) sits at #1. Last month brought 213 clicks from 20.2K impressions at an average position of 4.7.',
      },
      {
        files: ['rank-tracker-visibility-1-v3'],
        title: 'From position 100 to the low 30s, and holding',
        context: 'SE Ranking · Cloud Pharmacy, Google Canada (Toronto)',
        shows: 'Average position over time for Cloud Pharmacy\'s 116 tracked keywords, from a March 2025 baseline to October 2026.',
        did: 'Keyword research, on-page fixes and link-building, then steady tracking to see which gains last.',
        result:
          'Average position moved from around 100 at baseline to 32 and has held since late 2025. Search visibility is 45 (+27), 43% of keywords are in the Top 10 (+9), and the traffic forecast is 19,977 (+5,806).',
      },
      {
        files: ['rank-tracker-pharmacy-1-v3'],
        title: 'Local pharmacy terms at #1 to #3',
        context: 'SE Ranking · Cloud Pharmacy',
        shows: 'Cloud Pharmacy\'s tracked keywords with their positions three months ago, last month and today.',
        did: 'I optimized service pages and product questions for local and long-tail searches and watched content scores.',
        result:
          '"Compliance Packaging Toronto" and "Medication Synchronization Toronto" are at #1. "cloud pharmacy toronto", "small pharmacy near me" and "compounded pharmacy near me" are at #2. "Prescription medication Toronto" climbed from 22 to 2 in three months.',
      },
      {
        files: ['rank-tracker-bus-charter-1-v3'],
        title: 'Bus charter keywords reach page one',
        context: 'SE Ranking · Brown Coach Line',
        shows: '131 tracked keywords for Brown Coach Line, a coach and bus rental service around Toronto and the GTA.',
        did: 'I targeted high-intent rental and hiring searches with matching service and pricing pages.',
        result:
          '"Bus for rent near me" went from 37 to 5 in three months, "toronto bus charter companies" from 59 to 5, and "hiring a coach and driver GTA" from 24 to 5. Cost-related terms slipped back, so pricing content is the next focus.',
      },
    ],
  },
  {
    title: 'Technical health and speed',
    lede: 'Audits and speed tests: the groundwork that lets the content rank.',
    items: [
      {
        files: ['pagespeed-halifax-blog-1-v3', 'pagespeed-halifax-blog-2-v3'],
        title: 'Perfect speed score on mobile and desktop',
        context: 'PageSpeed Insights · Travel Time Taxi blog',
        shows: 'PageSpeed Insights results for one blog article, mobile on the left and desktop on the right.',
        did: 'I tuned images, scripts and layout for Core Web Vitals so pages load fast on phones.',
        result: 'Performance 100, Best Practices 100 and SEO 100 on both devices, with Accessibility at 92.',
      },
      {
        files: ['competitors-and-audit-halifax-1-v3', 'competitors-and-audit-halifax-2-v3'],
        title: 'Competitor benchmark and a 95/100 site health',
        context: 'SE Ranking · Travel Time Taxi',
        shows: 'Competitive research for Canada next to the site audit of the same website.',
        did: 'I benchmark against local competitors and work through audit errors and warnings.',
        result:
          'Organic traffic is 236 (+47) across 510 organic keywords (+21). Site health is 95/100 over 198 pages, with 185 healthy and 2 errors. SE Ranking\'s marketing plan lists 65 tasks that are my queue for the next round.',
      },
      {
        files: ['page-level-crawl-halifax-1-v3'],
        title: 'Page-level crawl: what earns keywords',
        context: 'SE Ranking audit · Travel Time Taxi',
        shows: 'Every page with its traffic, indexability, depth and keyword count.',
        did: 'I check each page\'s indexability, canonical status and internal links, and find the pages that earn keywords.',
        result:
          'The homepage ranks for 490 keywords, and comparison posts such as "Uber vs taxi" rank for 48 and 63. Nearly every page is indexable with a 200 status. One services page is flagged non-canonical, the kind of detail I triage.',
      },
      {
        files: ['site-audit-and-backlinks-1-v3', 'site-audit-and-backlinks-2-v3'],
        title: 'Health score 98 and a clean link profile',
        context: 'SE Ranking · Brown Coach Line audit and backlinks',
        shows: 'The audit health score and issue breakdown above, the backlink profile below.',
        did: 'I fix audit errors and warnings, build quality links, and keep a disavow list for the bad ones.',
        result:
          'Health score 98 (Excellent), up 5. Healthy pages rose by 59 to 183 of 186, leaving 3 errors. The profile holds 505 backlinks from 149 domains.',
      },
    ],
  },
  {
    title: 'Traffic and Search Console',
    lede: 'What visitors do once they arrive, and how the pages appear in Google.',
    items: [
      {
        files: ['gsc-august-impressions-1-v3'],
        title: '300K impressions at average position 8.9',
        context: 'Google Search Console · Cloud Pharmacy, August 2026',
        shows: 'A month of Search Console data: clicks, impressions, click-through rate and average position.',
        did: 'I match titles, metadata and content to intent-driven queries and watch query-level changes.',
        result:
          '1.3K clicks from 302.1K impressions at an average position of 8.9. The 0.4% click-through rate shows where title and snippet testing pays off next.',
      },
      {
        files: ['gsc-and-ai-features-1-v3', 'gsc-and-ai-features-2-v3'],
        title: 'Showing up in AI-generated answers',
        context: 'Google Search Console · Brown Coach Line, Web and Generative AI features',
        shows: 'Web performance for August 2026, with the new Generative AI features report below it.',
        did: 'I add Schema and answer-style content for GEO and AEO, then watch this report to see it work.',
        result:
          'Web: 54 clicks from 15.6K impressions at average position 39.3. AI features: 3.89K impressions over three months, rising from around 50 a day to a peak above 130 in late September.',
      },
      {
        files: ['ga4-engagement-overview-1-v3'],
        title: '92% engagement and 202 conversions',
        context: 'Google Analytics 4 · Cloud Pharmacy, August 2026',
        shows: 'The audience report for a month: sessions, users, views, engagement and conversions.',
        did: 'I set up GA4 and Tag Manager events so conversions are counted properly.',
        result: '1.8K sessions, 1.6K users and 4.7K views, with a 92.32% engagement rate and 202 conversions.',
      },
      {
        files: ['ga4-baseline-1-v3'],
        title: 'A baseline to build on',
        context: 'Google Analytics 4 · Brown Coach Line',
        shows: '538 sessions and 509 users, with 15 conversions, a 36.43% engagement rate and 13 seconds of average engagement.',
        did: 'Conversion events are in place, so the funnel can be measured from day one.',
        result:
          'These numbers are the starting line. Content depth and page experience are the next work to raise engagement time and rate.',
      },
    ],
  },
  {
    title: 'Local SEO and links',
    lede: 'Google Business Profile reach and the directory links that support it.',
    items: [
      {
        files: ['gbp-pharmacy-reach-1-v3', 'gbp-pharmacy-reach-2-v3'],
        title: '58,982 profile views from local search',
        context: 'Google Business Profile · Cloud Pharmacy, May to October 2026',
        shows: 'How people find a pharmacy\'s profile, on which platform, and what they search.',
        did: 'I optimize the profile and track which searches bring people in.',
        result:
          '58,982 profile views (50% from Google Maps on mobile, 35% from Search on mobile), 3,299 interactions and 31,748 searches that showed the profile. The top terms are "pharmacy" (17K) and "pharmacy near me" (3,616). October is a partial month, which explains the final dip.',
      },
      {
        files: ['gbp-monthly-interactions-1-v3', 'gbp-monthly-interactions-2-v3'],
        title: 'Profile interactions across two clients',
        context: 'Google Business Profile · Kratom Delivery Canada (May) and Travel Time Taxi (July) 2026',
        shows: 'Business Profile interactions for two clients in two different months.',
        did: 'I keep the profile complete and track calls, website clicks and bookings.',
        result: '356 interactions for Kratom Delivery Canada in May 2026 and 159 for Travel Time Taxi in July 2026.',
      },
      {
        files: ['backlinks-citations-1-v3'],
        title: 'Clean links from directories and clinics',
        context: 'SE Ranking backlink checker · Cloud Pharmacy',
        shows: 'New backlinks pointing at a pharmacy\'s website, with their authority and toxicity scores.',
        did: 'I build local citations and directory links, then check each one for toxicity.',
        result:
          'Links from Medimap (Domain Trust 74), a clinic directory (49) and others, all with a toxicity score of 0. Two are marked as best links.',
      },
    ],
  },
]
