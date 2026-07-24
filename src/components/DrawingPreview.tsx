import type { DrawingData } from '@/lib/drawing'

/**
 * Read-only render of a note sketch as scalable SVG polylines. Used on the
 * /notes review page and anywhere a saved drawing is shown without editing.
 */
export default function DrawingPreview({ data, className }: { data: DrawingData; className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${data.w} ${data.h}`}
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Hand-drawn note"
    >
      <rect width={data.w} height={data.h} fill="white" />
      {data.strokes.map((stroke, i) => {
        const pts: string[] = []
        for (let j = 0; j + 1 < stroke.p.length; j += 2) pts.push(`${stroke.p[j]},${stroke.p[j + 1]}`)
        // A single dot (one point) renders as a tiny filled circle.
        if (pts.length === 1) {
          return <circle key={i} cx={stroke.p[0]} cy={stroke.p[1]} r={stroke.s / 2} fill={stroke.c} />
        }
        return (
          <polyline
            key={i}
            points={pts.join(' ')}
            fill="none"
            stroke={stroke.c}
            strokeWidth={stroke.s}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )
      })}
    </svg>
  )
}
