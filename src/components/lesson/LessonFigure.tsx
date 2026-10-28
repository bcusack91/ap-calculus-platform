import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'
import { FIGURE_THEME_CLASSES, isSafeSvg, type LessonFigureSpec } from '@/lib/lesson-figure'

/**
 * One authored lesson figure: sanitized inline SVG + caption + alt text.
 * Shape, SVG rules and the theme classes are documented in src/lib/lesson-figure.ts.
 *
 * The box sets the text colour (so `currentColor` strokes follow light/dark
 * mode) and styles the fig-* theme classes; the SVG is injected only after
 * isSafeSvg, otherwise the alt text is shown so the step is never blank.
 */

const SIZE: Record<NonNullable<LessonFigureSpec['size']>, string> = {
  sm: '[&>svg]:max-w-xs',
  md: '[&>svg]:max-w-lg',
  lg: '[&>svg]:max-w-none',
}

// Theme vocabulary for authored SVGs — shared with slide figures (lesson-figure.ts).
const THEME = FIGURE_THEME_CLASSES

export function LessonFigure({ figure }: { figure: LessonFigureSpec }) {
  const size = SIZE[figure.size ?? 'md'] ?? SIZE.md
  const alt = typeof figure.alt === 'string' ? figure.alt : ''
  return (
    <figure className="not-prose my-0 flex flex-col">
      {isSafeSvg(figure.svg) ? (
        <div
          role="img"
          aria-label={alt}
          data-testid="lesson-figure-svg"
          className={`overflow-x-auto rounded-xl border border-gray-200 p-3 dark:border-gray-700 [&>svg]:mx-auto [&>svg]:block [&>svg]:h-auto [&>svg]:w-full ${size} ${THEME}`}
          dangerouslySetInnerHTML={{ __html: figure.svg }}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="rounded-xl border-2 border-dashed border-gray-300 p-4 text-sm text-gray-600 dark:border-gray-600 dark:text-gray-300"
        >
          {alt || 'Figure unavailable.'}
        </div>
      )}
      {figure.caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300 [&_p]:m-0">
          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {escapeCurrencyMath(figure.caption)}
          </ReactMarkdown>
        </figcaption>
      )}
    </figure>
  )
}

/** A section's figures: one full-width figure, or a two-column grid of panels. */
export function LessonFigures({ figures }: { figures: LessonFigureSpec[] }) {
  if (figures.length === 0) return null
  return (
    <div className={`mb-6 ${figures.length > 1 ? 'grid grid-cols-1 gap-4 sm:grid-cols-2' : ''}`}>
      {figures.map((figure, i) => (
        <LessonFigure key={i} figure={figure} />
      ))}
    </div>
  )
}
