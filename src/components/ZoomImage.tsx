import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import '@/styles/zoom.css'

type Props = {
  src: string
  alt: string
  /** Shown under the enlarged image. */
  title?: string
  detail?: string
  /** Set for images hosted on another site. */
  noReferrer?: boolean
}

/**
 * An image that lifts slightly on hover and opens in a full-screen viewer
 * with a fade-and-scale transition when clicked. Esc, the close button or a
 * click outside the image closes it.
 */
export default function ZoomImage({ src, alt, title, detail, noReferrer }: Props) {
  const [open, setOpen] = useState(false)
  const [shown, setShown] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const closeBtn = useRef<HTMLButtonElement>(null)
  const referrerPolicy = noReferrer ? 'no-referrer' : undefined

  const close = useCallback(() => {
    setShown(false)
    window.setTimeout(() => {
      setOpen(false)
      trigger.current?.focus()
    }, 240)
  }, [])

  useEffect(() => {
    if (!open) return
    const raf = requestAnimationFrame(() => {
      setShown(true)
      closeBtn.current?.focus()
    })
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open, close])

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="zi"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image: ${alt}`}
      >
        <img src={src} alt={alt} loading="lazy" decoding="async" referrerPolicy={referrerPolicy} />
      </button>
      {open &&
        createPortal(
          <div
            className={shown ? 'zi__overlay zi__overlay--on' : 'zi__overlay'}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={close}
          >
            <figure className="zi__figure" onClick={(e) => e.stopPropagation()}>
              <img src={src} alt={alt} referrerPolicy={referrerPolicy} />
              {(title || detail) && (
                <figcaption className="zi__caption">
                  {title && <strong>{title}</strong>}
                  {detail && <span>{detail}</span>}
                </figcaption>
              )}
              <button ref={closeBtn} type="button" className="zi__close" onClick={close} aria-label="Close image">
                {'\u00D7'}
              </button>
            </figure>
          </div>,
          document.body,
        )}
    </>
  )
}
