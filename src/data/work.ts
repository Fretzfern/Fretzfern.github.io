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
export const CV_URL =
  'https://375b8e02-4420-493c-87c5-6325ab125e8c.filesusr.com/ugd/e6fe4c_637b43b135e8492fb67c153695161f5e.pdf'

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
