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
    industry: 'Local service / contracting',
    scope: 'SEO campaign: search recovery and ranking dominance',
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
        body: 'Corrected indexing issues, optimized structured data, and fixed broken or suspicious links to reach 99/100 Website Health.',
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
      { value: '58,731', label: 'Total impressions' },
      { value: '24,892', label: 'Clicks' },
      { value: '45 (+9.7%)', label: 'Search visibility score' },
      { value: '2m 48s', label: 'Average engagement time' },
      { value: '68.9%', label: 'Organic search traffic share' },
      { value: '99/100', label: 'Website health score' },
    ],
    shots: [{ src: '/work/cs-ajt-dashboard.jpg', alt: 'Analytics dashboard for the AJT Roofing campaign' }],
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
      { value: '35', label: 'Total keywords secured' },
      { value: '19', label: 'Keywords in the Top 3' },
      { value: '72', label: 'Keywords in the Top 10' },
      { value: '79 (+14.2%)', label: 'Search visibility score' },
      { value: '1.8K+', label: 'Organic sessions' },
      { value: '+27.73%', label: 'Organic traffic performance' },
    ],
    shots: [{ src: '/work/cs-pharmacy-dashboard.jpg', alt: 'Cloud Pharmacy SEO and analytics performance overview' }],
  },
]

/* ---------- Portfolio ---------- */

export const WIX_PORTFOLIO = 'https://fretzfernff.wixsite.com/portfolio2023/portfolio'
/** The resume PDF hosted with the site (public/Fretz-Fernandez-CV.pdf). */
export const CV_URL = '/Fretz-Fernandez-CV.pdf'

export type FeaturedSite = { name: string; note: string; src: string }

export const featuredSites: FeaturedSite[] = [
  { name: 'Kratom Delivery Canada', note: 'E-commerce, GTA and Canada-wide delivery', src: '/work/site-kratom-delivery.jpg' },
  { name: 'AJT Roofing & Contracting', note: 'Local service website', src: '/work/site-ajt-roofing.jpg' },
  { name: 'Cloud Pharmacy', note: 'Online pharmacy services', src: '/work/site-cloud-pharmacy.jpg' },
  { name: 'Halifax Airport Taxi & Limousine', note: 'Transport service website', src: '/work/site-halifax-taxi.jpg' },
]

const WIX_PROJECT_BASE = 'https://fretzfernff.wixsite.com/portfolio2023/portfolio-collections/my-portfolio/'

export const sampleProjects: { name: string; href: string }[] = [
  ['Fraserlife', 'fraser'],
  ['Ashmira', 'ashmira'],
  ['NYCO Renovations', 'nyco'],
  ['Frame 25', 'frame25'],
  ['WeAnswer', 'weanswer'],
  ['Cyber Security', 'my-project-96942e'],
  ['FarmTX', 'talun-eco'],
  ['Cyberhunter', 'cyber-security'],
  ['Stash&co', 'untitled-project-0ea30f'],
  ['We Buy House', 'real-estate'],
  ['BigBus', 'big-bus'],
  ['Tremblay', 'tremblay'],
  ['All Roofing', 'untitled-project-015fa6'],
  ['Bittrust', 'untitled-project'],
  ['WooCommerce: FranceAtHome', 'my-project'],
].map(([name, slug]) => ({ name, href: WIX_PROJECT_BASE + slug }))

const RESULT_IDS = [
  '67a73d5609c3491b848c8ad86d0a437f',
  '9f1aca7e373d451e80ce9c585238a982',
  'c790db00e5ac48b08fc0f59206f4b9ca',
  '8ffa5e3d111c418e8d2df7336a90da14',
  '597b8b711fe04091869791d36d9f5c52',
  '235c7ff237a441b29a09e6150e0c5967',
  '4630dc04db4b430b82b95516cf0d4aea',
  '2f785c3d26aa4d928a654084a27da0f6',
  '6d2446c2622343c798ce59475f315cfa',
  'cd4a923a52fe4288b17f74db2b14135c',
  '1e6666a4f8484f89a0ac5c1d39ef178d',
  '5a9d3fd781fe4573917eb6a4b6edea8e',
  'c717d30f675e44719793fd9f360553e2',
  '2dd718ae962d4221820626e5c97296e2',
  '8daa2787c02344ee9cb4c30b08fdf7c1',
  'c7ecdd3c507b475bb32c53bc9d94f898',
  '36c68e1652df48e09fb404e05803748c',
  'c3040dd155374531906807ba55c4fa53',
  '53d699534e9c4b4c9d1e6a787f90699b',
]

/** Result screenshots, loaded straight from the Wix portfolio. */
export const resultShots: string[] = RESULT_IDS.map(
  (id) =>
    `https://static.wixstatic.com/media/e6fe4c_${id}~mv2.jpg/v1/fill/w_945,h_421,q_90,enc_avif,quality_auto/e6fe4c_${id}~mv2.jpg`,
)

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
  file: string
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
        file: 'rank-tracker-halifax-taxi',
        title: 'Airport taxi searches take the top spots',
        context: 'SE Ranking and Search Console · Halifax airport taxi site',
        shows: 'Keyword positions for a Halifax airport taxi website, with last month of Search Console data underneath.',
        did: 'I pointed airport-intent searches at dedicated pages and tracked every movement.',
        result:
          'Top 3 keywords reached 40 (+34), Top 10 reached 64 (+55), and search visibility hit 53.7% (+52.3). "Halifax taxi from airport" (390 searches) sits at #1. Last month brought 213 clicks from 20.2K impressions at an average position of 4.7.',
      },
      {
        file: 'rank-tracker-visibility',
        title: 'From position 100 to the low 30s, and holding',
        context: 'SE Ranking · Google Canada, Toronto',
        shows: 'Average position over time for 116 tracked keywords, from a March 2025 baseline to October 2026.',
        did: 'Keyword research, on-page fixes and link-building, then steady tracking to see which gains last.',
        result:
          'Average position moved from around 100 at baseline to 32 and has held since late 2025. Search visibility is 45 (+27), 43% of keywords are in the Top 10 (+9), and the traffic forecast is 19,977 (+5,806).',
      },
      {
        file: 'rank-tracker-pharmacy',
        title: 'Local pharmacy terms at #1 to #3',
        context: 'SE Ranking · Toronto pharmacy',
        shows: 'A Toronto pharmacy\'s tracked keywords with their positions three months ago, last month and today.',
        did: 'I optimized service pages and product questions for local and long-tail searches and watched content scores.',
        result:
          '"Compliance Packaging Toronto" and "Medication Synchronization Toronto" are at #1. "cloud pharmacy toronto", "small pharmacy near me" and "compounded pharmacy near me" are at #2. "Prescription medication Toronto" climbed from 22 to 2 in three months.',
      },
      {
        file: 'rank-tracker-bus-charter',
        title: 'Bus charter keywords reach page one',
        context: 'SE Ranking · GTA coach and bus rental',
        shows: '131 tracked keywords for a coach and bus rental service around Toronto and the GTA.',
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
        file: 'pagespeed-halifax-blog',
        title: 'Perfect speed score on mobile and desktop',
        context: 'PageSpeed Insights · Halifax airport taxi blog',
        shows: 'PageSpeed Insights results for one blog article, mobile on the left and desktop on the right.',
        did: 'I tuned images, scripts and layout for Core Web Vitals so pages load fast on phones.',
        result: 'Performance 100, Best Practices 100 and SEO 100 on both devices, with Accessibility at 92.',
      },
      {
        file: 'competitors-and-audit-halifax',
        title: 'Competitor benchmark and a 95/100 site health',
        context: 'SE Ranking · Halifax airport taxi',
        shows: 'Competitive research for Canada next to the site audit of the same website.',
        did: 'I benchmark against local competitors and work through audit errors and warnings.',
        result:
          'Organic traffic is 236 (+47) across 510 organic keywords (+21). Site health is 95/100 over 198 pages, with 185 healthy and 2 errors. SE Ranking\'s marketing plan lists 65 tasks that are my queue for the next round.',
      },
      {
        file: 'page-level-crawl-halifax',
        title: 'Page-level crawl: what earns keywords',
        context: 'SE Ranking audit · Halifax airport taxi',
        shows: 'Every page with its traffic, indexability, depth and keyword count.',
        did: 'I check each page\'s indexability, canonical status and internal links, and find the pages that earn keywords.',
        result:
          'The homepage ranks for 490 keywords, and comparison posts such as "Uber vs taxi" rank for 48 and 63. Nearly every page is indexable with a 200 status. One services page is flagged non-canonical, the kind of detail I triage.',
      },
      {
        file: 'site-audit-and-backlinks',
        title: 'Health score 98 and a clean link profile',
        context: 'SE Ranking · site audit and backlinks',
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
        file: 'gsc-august-impressions',
        title: '300K impressions at average position 8.9',
        context: 'Google Search Console · August 2026',
        shows: 'A month of Search Console data: clicks, impressions, click-through rate and average position.',
        did: 'I match titles, metadata and content to intent-driven queries and watch query-level changes.',
        result:
          '1.3K clicks from 302.1K impressions at an average position of 8.9. The 0.4% click-through rate shows where title and snippet testing pays off next.',
      },
      {
        file: 'gsc-and-ai-features',
        title: 'Showing up in AI-generated answers',
        context: 'Google Search Console · Web and Generative AI features',
        shows: 'Web performance for August 2026, with the new Generative AI features report below it.',
        did: 'I add Schema and answer-style content for GEO and AEO, then watch this report to see it work.',
        result:
          'Web: 54 clicks from 15.6K impressions at average position 39.3. AI features: 3.89K impressions over three months, rising from around 50 a day to a peak above 130 in late September.',
      },
      {
        file: 'ga4-engagement-overview',
        title: '92% engagement and 202 conversions',
        context: 'Google Analytics 4 · August 2026',
        shows: 'The audience report for a month: sessions, users, views, engagement and conversions.',
        did: 'I set up GA4 and Tag Manager events so conversions are counted properly.',
        result: '1.8K sessions, 1.6K users and 4.7K views, with a 92.32% engagement rate and 202 conversions.',
      },
      {
        file: 'ga4-baseline',
        title: 'A baseline to build on',
        context: 'Google Analytics 4 · Audience report',
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
        file: 'gbp-pharmacy-reach',
        title: '58,982 profile views from local search',
        context: 'Google Business Profile · May to October 2026',
        shows: 'How people find a pharmacy\'s profile, on which platform, and what they search.',
        did: 'I optimize the profile and track which searches bring people in.',
        result:
          '58,982 profile views (50% from Google Maps on mobile, 35% from Search on mobile), 3,299 interactions and 31,748 searches that showed the profile. The top terms are "pharmacy" (17K) and "pharmacy near me" (3,616). October is a partial month, which explains the final dip.',
      },
      {
        file: 'gbp-monthly-interactions',
        title: 'Year-on-year profile interactions',
        context: 'Google Business Profile · May and July 2026',
        shows: 'Business Profile interactions for two months, each compared with the same month of 2025.',
        did: 'I keep the profile complete and track calls, website clicks and bookings.',
        result: '356 interactions in May 2026 and 159 in July 2026, both up on the same month of 2025.',
      },
      {
        file: 'backlinks-citations',
        title: 'Clean links from directories and clinics',
        context: 'SE Ranking backlink checker · pharmacy site',
        shows: 'New backlinks pointing at a pharmacy\'s website, with their authority and toxicity scores.',
        did: 'I build local citations and directory links, then check each one for toxicity.',
        result:
          'Links from Medimap (Domain Trust 74), a clinic directory (49) and others, all with a toxicity score of 0. Two are marked as best links.',
      },
    ],
  },
]
