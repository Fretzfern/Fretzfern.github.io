/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Fretz Fernandez',
  firstName: 'Fretz',
  handle: '@fretzfern',
  role: 'SEO Specialist / WordPress Designer',
  avatarSrc: '/avatar.png',
  verifiedLabel: 'Senior SEO Specialist, 7+ years of experience',
  email: 'fretzfern@gmail.com',
  location: 'Philippines',
  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    { value: '7+ yrs', label: 'In SEO', Icon: Briefcase },
    { value: 'GA4 · GSC', label: 'Analytics stack', Icon: SealCheck },
    { value: '2016', label: 'Working since', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Rank higher.', line2: 'Build better sites.' },
  hero: {
    body: 'SEO specialist and WordPress designer helping businesses grow organic traffic and turn visits into leads.',
    portraitSrc: '/avatar.png',
    portraitAlt: 'Portrait of Fretz Fernandez',
  },
  socials: [
    { label: 'Facebook profile', href: 'https://www.facebook.com/Fretzified', iconPath: '/icons/facebook.svg' },
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/fretz-fernandez/', iconPath: '/icons/linkedin.svg' },
    { label: 'Discord profile', href: 'https://discord.com/users/1095240527655473154', iconPath: '/icons/discord.svg' },
  ],
}
