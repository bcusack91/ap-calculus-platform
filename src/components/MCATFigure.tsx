import type { MCATFigureSpec } from '@/data/mcat/types'

/**
 * Renders a structured MCAT passage figure as an actual SVG graph — titration
 * curves, Michaelis-Menten/dose-response/kinetics curves, or bar comparisons.
 * Numeric x-axes are positioned by VALUE (so curves are quantitatively faithful);
 * categorical x-axes are evenly spaced. Supports multiple overlaid series, a
 * legend, and vertical annotation markers (e.g. equivalence points).
 */
export default function MCATFigure({ spec }: { spec: MCATFigureSpec }) {
  const {
    title, kind = 'line', xValues, yValues, seriesLabel,
    comparisonSeries = [], xLabel, yLabel, xUnit, yUnit,
    annotations = [], hidePointLabels,
  } = spec

  const series = [
    { label: seriesLabel, yValues, key: 'primary' },
    ...comparisonSeries.map((s, i) => ({ label: s.label, yValues: s.yValues, key: `cmp-${i}` })),
  ]
  const allY = series.flatMap((s) => s.yValues)
  const rawMax = allY.length ? Math.max(...allY) : 1
  const rawMin = allY.length ? Math.min(...allY) : 0
  const yPad = Math.max((rawMax - rawMin) * 0.08, 0.5)
  const maxY = rawMax + yPad
  const minY = rawMin - yPad
  const yRange = Math.max(maxY - minY, 1)

  // Position numeric x by value; categorical x evenly by index.
  const numericX = xValues.length > 0 && xValues.every((v) => typeof v === 'number')
  const xNums = numericX ? (xValues as number[]) : xValues.map((_, i) => i)
  const xMin = Math.min(...xNums)
  const xMax = Math.max(...xNums)
  const xRange = Math.max(xMax - xMin, 1)
  const lastIdx = Math.max(xValues.length - 1, 1)

  const W = 480, H = 260, padL = 56, padR = 16, padT = 18, padB = 52
  const pw = W - padL - padR, ph = H - padT - padB
  const sx = (i: number) => padL + (numericX ? (xNums[i] - xMin) / xRange : i / lastIdx) * pw
  const sy = (v: number) => padT + ph - ((v - minY) / yRange) * ph

  const lineColors = ['stroke-cyan-500', 'stroke-amber-500', 'stroke-emerald-500']
  const dotColors = ['fill-cyan-500', 'fill-amber-500', 'fill-emerald-500']
  const barColors = ['fill-cyan-500/80', 'fill-amber-500/80', 'fill-emerald-500/80']
  const legendDot = ['bg-cyan-500', 'bg-amber-500', 'bg-emerald-500']

  // X tick labels: thin out if many points so they don't collide.
  const tickEvery = xValues.length > 9 ? Math.ceil(xValues.length / 8) : 1

  return (
    <figure className="rounded-xl border border-cyan-200 bg-white p-4 dark:border-cyan-800 dark:bg-gray-900/40">
      <figcaption className="mb-3 text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">{title}</figcaption>
      <div className="rounded-lg border border-dashed border-cyan-200 bg-cyan-50/50 p-3 dark:border-cyan-900 dark:bg-cyan-950/20">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 'auto', minHeight: '200px' }} role="img" aria-label={`${title}. ${yLabel} versus ${xLabel}.`}>
          {/* Y gridlines + ticks */}
          {[0, 0.25, 0.5, 0.75, 1].map((f) => {
            const y = padT + f * ph
            return (
              <g key={`grid-${f}`}>
                <line x1={padL} y1={y} x2={padL + pw} y2={y} className="stroke-gray-300 dark:stroke-gray-700" strokeDasharray="4 3" />
                <text x={padL - 6} y={y + 4} textAnchor="end" fontSize={10} className="fill-gray-500 dark:fill-gray-400">{(maxY - f * yRange).toFixed(1)}</text>
              </g>
            )
          })}

          {/* Axes */}
          <line x1={padL} y1={padT} x2={padL} y2={padT + ph} className="stroke-gray-500 dark:stroke-gray-400" strokeWidth={1.5} />
          <line x1={padL} y1={padT + ph} x2={padL + pw} y2={padT + ph} className="stroke-gray-500 dark:stroke-gray-400" strokeWidth={1.5} />

          {/* Annotations (vertical markers) */}
          {annotations.map((a, ai) => {
            const x = sx(Math.min(Math.max(a.xIndex, 0), lastIdx))
            return (
              <g key={`ann-${ai}`}>
                <line x1={x} y1={padT} x2={x} y2={padT + ph} className="stroke-rose-400 dark:stroke-rose-500" strokeDasharray="3 3" strokeWidth={1} />
                <text x={x} y={padT - 5} textAnchor="middle" fontSize={9} className="fill-rose-500 dark:fill-rose-300">{a.label}</text>
              </g>
            )
          })}

          {/* Bars */}
          {kind === 'bar' && series.map((s, si) => {
            const groupW = pw / xValues.length
            const barW = Math.max((groupW * 0.7) / series.length, 3)
            return s.yValues.map((v, i) => {
              const x0 = padL + i * groupW + groupW * 0.15 + si * barW
              return <rect key={`bar-${s.key}-${i}`} x={x0} y={sy(v)} width={barW} height={Math.max(padT + ph - sy(v), 0)} className={barColors[si % barColors.length]} />
            })
          })}

          {/* Lines / scatter */}
          {kind !== 'bar' && series.map((s, si) => {
            const pts = s.yValues.map((v, i) => ({ x: sx(i), y: sy(v), v, xl: xValues[i] }))
            return (
              <g key={`series-${s.key}`}>
                {kind === 'line' && <polyline points={pts.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" className={lineColors[si % lineColors.length]} strokeWidth={2.5} />}
                {pts.map((p, i) => (
                  <g key={`pt-${s.key}-${i}`}>
                    <circle cx={p.x} cy={p.y} r={3.5} className={dotColors[si % dotColors.length]} />
                    {si === 0 && !hidePointLabels && <text x={p.x} y={p.y - 8} textAnchor="middle" fontSize={9} className="fill-gray-700 dark:fill-gray-200">{p.v}</text>}
                  </g>
                ))}
              </g>
            )
          })}

          {/* X tick labels */}
          {xValues.map((xv, i) => (i % tickEvery === 0 ? (
            <text key={`xt-${i}`} x={sx(i)} y={padT + ph + 16} textAnchor="middle" fontSize={10} className="fill-gray-500 dark:fill-gray-400">{xv}</text>
          ) : null))}

          {/* Axis titles */}
          <text x={padL + pw / 2} y={H - 4} textAnchor="middle" fontSize={11} fontWeight={600} className="fill-gray-600 dark:fill-gray-300">{xLabel}{xUnit ? ` (${xUnit})` : ''}</text>
          <text x={0} y={0} textAnchor="middle" fontSize={11} fontWeight={600} className="fill-gray-600 dark:fill-gray-300" transform={`translate(13, ${padT + ph / 2}) rotate(-90)`}>{yLabel}{yUnit ? ` (${yUnit})` : ''}</text>
        </svg>

        {series.length > 1 && (
          <div className="mt-2 flex flex-wrap gap-4 text-xs text-gray-600 dark:text-gray-300">
            {series.map((s, si) => (
              <span key={`lg-${s.key}`} className="inline-flex items-center gap-1.5">
                <span className={`inline-block h-3 w-3 rounded-full ${legendDot[si % legendDot.length]}`} />
                {s.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </figure>
  )
}
