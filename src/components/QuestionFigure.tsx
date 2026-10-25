import { LessonFigure } from '@/components/lesson/LessonFigure'

/**
 * The optional picture of a quiz item (`figure` + `figureAlt` on exit-quiz,
 * entrance-quiz and unit-test items; ASVAB pools so far). Drawn with the
 * lesson-figure renderer, so the SVG is injected only after isSafeSvg and
 * follows the light/dark theme. Renders nothing when the item has no figure,
 * so every figure-less item looks exactly as before.
 */
export default function QuestionFigure({
  svg,
  alt,
  size = 'md',
  className = 'mb-5',
}: {
  svg?: string | null
  alt?: string | null
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  if (!svg) return null
  return (
    <div className={className} data-testid="question-figure">
      <LessonFigure figure={{ svg, alt: alt ?? '', size }} />
    </div>
  )
}
