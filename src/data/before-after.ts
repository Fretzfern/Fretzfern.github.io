import type { Shot } from '@/data/work'

/**
 * One combined before/after image per case study, keyed by case-study id.
 * Add an entry here and it appears on the Case studies page.
 */
export const beforeAfter: Record<string, Shot> = {
  'kratom-delivery-canada': {
    src: '/cases/kratom-before-after.png',
    alt: 'Kratom Delivery Canada Search Console and Google Analytics, before (Aug to Sep 2025) and after (Aug 2026)',
  },
}
