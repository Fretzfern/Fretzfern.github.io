import { profile } from '@/data/profile'

/**
 * Contact submission.
 *
 * The form sends straight to profile.email through FormSubmit (formsubmit.co),
 * a free forwarding service that needs no account. The first message ever sent
 * makes FormSubmit email profile.email an activation link; click it once and
 * every later message arrives in the inbox with the visitor's address as
 * Reply-To.
 *
 * If the send fails for any reason (offline, not yet activated), the visitor's
 * mail client opens with the message already addressed, so nothing is lost.
 *
 * To use a different backend, set VITE_CONTACT_ENDPOINT in .env.production to
 * a URL that accepts a JSON POST of the Lead type below and answers 2xx.
 */

export const ENDPOINT: string = import.meta.env.VITE_CONTACT_ENDPOINT ?? ''
export const RECIPIENT = profile.email
const FORMSUBMIT = `https://formsubmit.co/ajax/${RECIPIENT}`

export const MAX_NAME = 80
export const MAX_EMAIL = 254
export const MAX_MESSAGE = 5000

// Built from \u escapes so the source stays pure ASCII.
// Control chars U+0000-U+001F and U+007F; when newlines are allowed, tab,
// LF and CR survive. Zero-width and bidi marks always go.
const CTRL_NO_NL = new RegExp('[\\u0000-\\u001F\\u007F]', 'g')
const CTRL_KEEP_NL = new RegExp('[\\u0000-\\u0008\\u000B\\u000C\\u000E-\\u001F\\u007F]', 'g')
const ZERO_WIDTH = new RegExp('[\\u200B-\\u200F\\u202A-\\u202E\\u2060\\uFEFF]', 'g')

export function sanitize(input: string, allowNewlines = false): string {
  const controls = allowNewlines ? CTRL_KEEP_NL : CTRL_NO_NL
  return input.replace(controls, '').replace(ZERO_WIDTH, '')
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type Lead = {
  firstName: string
  lastName: string
  email: string
  message: string
  /** Honeypot. Empty for a person; your backend should drop anything else. */
  website: string
}

export type SubmitResult = { via: 'webhook' } | { via: 'mailto' }

/** Read, trim, cap and sanitise the four fields. Returns null if a required
 *  field is missing or the email does not look like one. */
export function readLead(data: FormData): Lead | null {
  const firstName = sanitize(String(data.get('firstName') ?? '').trim()).slice(0, MAX_NAME)
  const lastName = sanitize(String(data.get('lastName') ?? '').trim()).slice(0, MAX_NAME)
  const email = sanitize(String(data.get('email') ?? '').trim()).slice(0, MAX_EMAIL)
  const message = sanitize(String(data.get('message') ?? '').trim(), true).slice(0, MAX_MESSAGE)
  if (!firstName || !lastName || !email || !message || !EMAIL_RE.test(email)) return null
  const website = String(data.get('website') ?? '')
  return { firstName, lastName, email, message, website }
}

export class SubmitError extends Error {}

function openMailClient(lead: Lead): SubmitResult {
  const subject = `Project inquiry from ${lead.firstName} ${lead.lastName}`
  const body = [`Name: ${lead.firstName} ${lead.lastName}`, `Email: ${lead.email}`, '', lead.message].join('\n')
  // encodeURIComponent on every value blocks header injection (CR/LF) and
  // parameter smuggling via & or ?.
  window.location.href = `mailto:${encodeURIComponent(RECIPIENT)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return { via: 'mailto' }
}

export async function submitLead(lead: Lead): Promise<SubmitResult> {
  // A person leaves the honeypot empty. A bot that fills it gets a quiet
  // success and nothing is sent.
  if (lead.website) return { via: 'webhook' }

  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    })
    if (!res.ok) {
      const body = await res.json().catch(() => null)
      throw new SubmitError(body?.error || `The server answered ${res.status}.`)
    }
    return { via: 'webhook' }
  }

  try {
    const res = await fetch(FORMSUBMIT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: `${lead.firstName} ${lead.lastName}`,
        email: lead.email,
        message: lead.message,
        _subject: `Portfolio inquiry from ${lead.firstName} ${lead.lastName}`,
        _template: 'table',
        _captcha: 'false',
      }),
    })
    const body = await res.json().catch(() => null)
    const refused = body && (body.success === false || body.success === 'false')
    if (res.ok && !refused) return { via: 'webhook' }
  } catch {
    // Offline or blocked: fall through to the mail client below.
  }
  return openMailClient(lead)
}
