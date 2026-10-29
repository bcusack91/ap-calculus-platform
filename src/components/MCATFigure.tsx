import type { MCATFigureSpec } from '@/data/mcat/types'
import { MathText } from '@/components/MathText'

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
  // Pad by a share of the data's own span (a fixed 0.5 floor pushed a 0–1
  // absorbance axis out to −0.5…1.5); flat data still gets a visible band.
  const span = rawMax - rawMin
  const yPad = span > 0 ? span * 0.08 : Math.max(Math.abs(rawMax) * 0.1, 0.5)
  const padMax = rawMax + yPad
  // Bars must originate from a true zero baseline (or below, if negatives) so
  // heights are proportional; line/scatter can use a padded min to fill the
  // plot, but never dip below zero for data that never does.
  const padMin = kind === 'bar' ? Math.min(0, rawMin) : rawMin >= 0 ? Math.max(0, rawMin - yPad) : rawMin - yPad
  // Round ticks: the smallest step of 1, 2, 2.5 or 5 × 10^k that spans the
  // data in at most six intervals, with the axis extended out to whole steps
  // (0, 0.2 … 1.2 rather than 1.08, 0.81 …).
  const padSpan = padMax - padMin > 0 ? padMax - padMin : 1
  const mag0 = Math.pow(10, Math.floor(Math.log10(padSpan / 6)))
  const intervals = (c: number) => Math.ceil(padMax / c - 1e-9) - Math.floor(padMin / c + 1e-9)
  const step = [1, 2, 2.5, 5, 10, 20, 25, 50].map((m) => m * mag0).find((c) => intervals(c) <= 6) ?? 100 * mag0
  const mag = Math.pow(10, Math.floor(Math.log10(step) + 1e-9))
  const minY = Math.floor(padMin / step + 1e-9) * step
  const maxY = Math.ceil(padMax / step - 1e-9) * step
  const yRange = maxY - minY > 0 ? maxY - minY : 1
  const yTicks = Array.from({ length: Math.round(yRange / step) + 1 }, (_, i) => maxY - i * step)
  const tickDecimals = Math.max(0, -Math.floor(Math.log10(step) + 1e-9) + (step / mag === 2.5 ? 1 : 0))
  const tickLabel = (v: number) => (Math.abs(v) < step * 1e-6 ? 0 : v).toFixed(tickDecimals)

  // Position numeric x by value; categorical x evenly by index.
  const numericX = xValues.length > 0 && xValues.every((v) => typeof v === 'number')
  const xNums = numericX ? (xValues as number[]) : xValues.map((_, i) => i)
  const xMin = Math.min(...xNums)
  const xMax = Math.max(...xNums)
  // No floor of 1: a 0.1–0.5 axis must fill the plot width too.
  const xRange = xMax - xMin > 0 ? xMax - xMin : 1
  const lastIdx = Math.max(xValues.length - 1, 1)

  const W = 480, H = 260, padL = 56, padR = 16, padB = 52
  const pw = W - padL - padR
  const sx = (i: number) => padL + (numericX ? (xNums[i] - xMin) / xRange : i / lastIdx) * pw
  // Bars occupy equal cells centered at (i+0.5)/N; line/scatter points sit at sx(i).
  // x-axis tick labels and annotation markers must follow whichever layout is in use.
  const xCenter = (i: number) => (kind === 'bar' ? padL + (i + 0.5) * (pw / Math.max(xValues.length, 1)) : sx(i))

  // Annotation labels: keep each inside the drawing (anchor start/end near an
  // edge) and lift a label one row when it would collide with a neighbour, so
  // markers that sit close together stay readable. Width is estimated from
  // the character count at the 9-unit font.
  const ANN_ROW = 11
  const annLayout = (() => {
    const rowsEnd: number[] = []
    return annotations.map((a) => {
      const x = xCenter(Math.min(Math.max(a.xIndex, 0), lastIdx))
      const w = a.label.length * 4.9
      let left = x - w / 2
      let anchor: 'start' | 'middle' | 'end' = 'middle'
      if (left < 4) { left = x; anchor = 'start' }
      if (left + w > W - 4) { left = x - w; anchor = 'end' }
      let row = rowsEnd.findIndex((end) => left > end + 6)
      if (row === -1) { row = rowsEnd.length; rowsEnd.push(0) }
      rowsEnd[row] = left + w
      return { x, anchor, row }
    })
  })()
  const annRows = annLayout.reduce((m, a) => Math.max(m, a.row + 1), 1)
  const padT = 18 + (annRows - 1) * ANN_ROW
  const ph = H - padT - padB
  const sy = (v: number) => padT + ph - ((v - minY) / yRange) * ph

  const lineColors = ['stroke-cyan-500', 'stroke-amber-500', 'stroke-emerald-500']
  const dotColors = ['fill-cyan-500', 'fill-amber-500', 'fill-emerald-500']
  const barColors = ['fill-cyan-500/80', 'fill-amber-500/80', 'fill-emerald-500/80']
  const legendDot = ['bg-cyan-500', 'bg-amber-500', 'bg-emerald-500']

  // X tick labels: skip any that would touch the previous one (points placed
  // by value can sit close together, e.g. 0, 0.25, 0.5 … 8), always keeping
  // the last. Width is estimated from the character count at the 10-unit font.
  const shownTicks = (() => {
    const keep: number[] = []
    const half = (i: number) => (String(xValues[i]).length * 5.6) / 2
    for (let i = 0; i < xValues.length; i++) {
      const prev = keep[keep.length - 1]
      if (prev === undefined || xCenter(i) - half(i) > xCenter(prev) + half(prev) + 4) keep.push(i)
      else if (i === xValues.length - 1) keep[keep.length - 1] = i
    }
    return new Set(keep)
  })()

  return (
    <figure className="rounded-xl border border-cyan-200 bg-white p-4 dark:border-cyan-800 dark:bg-gray-900/40">
      {/* Not uppercased: units and symbols are case-sensitive (mM vs MM, ε vs Ε), and titles may carry $…$ math. */}
      <figcaption className="mb-3 text-xs font-semibold tracking-wide text-cyan-700 dark:text-cyan-300"><MathText text={title} inline /></figcaption>
      <div className="rounded-lg border border-dashed border-cyan-200 bg-cyan-50/50 p-3 dark:border-cyan-900 dark:bg-cyan-950/20">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 'auto', minHeight: '200px' }} role="img" aria-label={`${title.replace(/\$/g, '')}. ${yLabel} versus ${xLabel}.`}>
          {/* Y gridlines + ticks */}
          {yTicks.map((v) => {
            const y = sy(v)
            return (
              <g key={`grid-${v}`}>
                <line x1={padL} y1={y} x2={padL + pw} y2={y} className="stroke-gray-300 dark:stroke-gray-700" strokeDasharray="4 3" />
                <text x={padL - 6} y={y + 4} textAnchor="end" fontSize={10} className="fill-gray-500 dark:fill-gray-400">{tickLabel(v)}</text>
              </g>
            )
          })}

          {/* Axes */}
          <line x1={padL} y1={padT} x2={padL} y2={padT + ph} className="stroke-gray-500 dark:stroke-gray-400" strokeWidth={1.5} />
          <line x1={padL} y1={padT + ph} x2={padL + pw} y2={padT + ph} className="stroke-gray-500 dark:stroke-gray-400" strokeWidth={1.5} />

          {/* Annotations (vertical markers) */}
          {annotations.map((a, ai) => {
            const { x, anchor, row } = annLayout[ai]
            return (
              <g key={`ann-${ai}`}>
                <line x1={x} y1={padT} x2={x} y2={padT + ph} className="stroke-rose-400 dark:stroke-rose-500" strokeDasharray="3 3" strokeWidth={1} />
                <text x={x} y={padT - 5 - row * ANN_ROW} textAnchor={anchor} fontSize={9} className="fill-rose-500 dark:fill-rose-300">{a.label}</text>
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
          {xValues.map((xv, i) => (shownTicks.has(i) ? (
            <text key={`xt-${i}`} x={xCenter(i)} y={padT + ph + 16} textAnchor="middle" fontSize={10} className="fill-gray-500 dark:fill-gray-400">{xv}</text>
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
