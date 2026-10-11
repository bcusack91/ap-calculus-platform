'use client'

/**
 * The Digital SAT math reference sheet (the "Reference" button in Bluebook's
 * Math modules), typeset with KaTeX. Esc closes and focus returns to the
 * trigger (FocusTrapDialog).
 */

import { useEffect, useMemo, useState } from 'react'
import FocusTrapDialog from '@/components/FocusTrapDialog'
import { renderRichText } from '@/lib/render-rich-text'
import { preloadKatex } from '@/lib/katex-lazy'

interface RefItem {
  shape: string
  formulas: string[]
}

export const SAT_REFERENCE_ITEMS: RefItem[] = [
  { shape: 'Circle', formulas: ['$A = \\pi r^2$', '$C = 2\\pi r$'] },
  { shape: 'Rectangle', formulas: ['$A = \\ell w$'] },
  { shape: 'Triangle', formulas: ['$A = \\tfrac{1}{2}bh$'] },
  { shape: 'Right triangle (Pythagorean theorem)', formulas: ['$c^2 = a^2 + b^2$'] },
  {
    shape: 'Special right triangle 30°-60°-90°',
    formulas: ['Short leg $x$, long leg $x\\sqrt{3}$, hypotenuse $2x$'],
  },
  {
    shape: 'Special right triangle 45°-45°-90°',
    formulas: ['Legs $s$ and $s$, hypotenuse $s\\sqrt{2}$'],
  },
  { shape: 'Rectangular prism', formulas: ['$V = \\ell w h$'] },
  { shape: 'Cylinder', formulas: ['$V = \\pi r^2 h$'] },
  { shape: 'Sphere', formulas: ['$V = \\tfrac{4}{3}\\pi r^3$'] },
  { shape: 'Cone', formulas: ['$V = \\tfrac{1}{3}\\pi r^2 h$'] },
  { shape: 'Pyramid', formulas: ['$V = \\tfrac{1}{3}\\ell w h$'] },
]

export const SAT_REFERENCE_FACTS: string[] = [
  'The number of degrees of arc in a circle is $360$.',
  'The number of radians of arc in a circle is $2\\pi$.',
  'The sum of the measures in degrees of the angles of a triangle is $180$.',
]

function Tex({ text, ready }: { text: string; ready: boolean }) {
  const html = useMemo(() => renderRichText(text), [text, ready]) // eslint-disable-line react-hooks/exhaustive-deps
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

export default function SatReferenceSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    if (!open) return
    let live = true
    preloadKatex().catch(() => {}).then(() => { if (live) setReady(true) })
    return () => { live = false }
  }, [open])

  return (
    <FocusTrapDialog open={open} onClose={onClose} title="SAT math reference sheet" className="mx-4 w-full max-w-2xl">
      <div className="p-5 sm:p-6">
        <h2 className="mb-1 pr-8 text-lg font-bold text-gray-900 dark:text-white">Reference</h2>
        <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
          The same formulas the Digital SAT provides in every Math module. Press Esc to close.
        </p>
        <dl className="grid gap-2 sm:grid-cols-2">
          {SAT_REFERENCE_ITEMS.map((item) => (
            <div key={item.shape} className="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{item.shape}</dt>
              {item.formulas.map((f) => (
                <dd key={f} className="mt-1 text-gray-900 dark:text-gray-100">
                  <Tex text={f} ready={ready} />
                </dd>
              ))}
            </div>
          ))}
        </dl>
        <ul className="mt-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          {SAT_REFERENCE_FACTS.map((f) => (
            <li key={f}><Tex text={f} ready={ready} /></li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          <Tex text={'Notation: $r$ radius, $\\ell$ length, $w$ width, $h$ height, $b$ base.'} ready={ready} />
        </p>
      </div>
    </FocusTrapDialog>
  )
}
