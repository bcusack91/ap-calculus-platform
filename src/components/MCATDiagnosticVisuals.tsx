'use client'

/**
 * Passage and figure rendering shared by the MCAT diagnostic test page and
 * DiagnosticReview, so a passage looks the same while testing and when
 * reviewing an attempt. Passage bodies and authored figure blocks go through
 * renderRichText, which handles $…$ KaTeX and markdown pipe tables, the same
 * way the full-length exam's passage runner renders them.
 */

import { useEffect, useMemo, useState } from 'react'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'

type Series = { label: string; yValues: number[] }

export interface DiagnosticDataTable {
  title: string
  xLabel: string
  yLabel: string
  xValues: number[]
  yValues: number[]
  comparisonSeries?: Series[]
  xUnit: string
  yUnit: string
}

export interface DiagnosticFigure {
  title: string
  seriesLabel: string
  xLabel?: string
  yLabel?: string
  xValues: number[]
  yValues: number[]
  comparisonSeries?: Series[]
  xUnit: string
  yUnit: string
}

export interface DiagnosticPassage {
  id: string
  title: string
  body: string
  /** Authored markdown figure/data block (pipe table, $…$ math). */
  figureMarkdown?: string
  dataTable?: DiagnosticDataTable
  figure?: DiagnosticFigure
}

/** Rich text (KaTeX + markdown tables); re-renders once KaTeX has loaded. */
export function RichTextBlock({ text, className }: { text: string; className?: string }) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let mounted = true
    preloadKatex().then(() => mounted && setReady(true))
    return () => {
      mounted = false
    }
  }, [])
  // renderRichText handles newlines, pipe tables, markdown bold/italic and
  // KaTeX — authored figure captions use `**Figure 1. …**`.
  const html = useMemo(
    () => renderRichText(text),
    [text, ready], // eslint-disable-line react-hooks/exhaustive-deps
  )
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}

/** A passage's body, authored figure block, and chart/table. */
export function DiagnosticPassageContent({ passage }: { passage: DiagnosticPassage }) {
  return (
    <>
      <RichTextBlock
        text={passage.body}
        className="mt-3 text-sm leading-relaxed text-gray-800 dark:text-gray-200"
      />
      {passage.figureMarkdown && (
        <RichTextBlock
          text={passage.figureMarkdown}
          className="mt-4 overflow-x-auto text-sm leading-relaxed text-gray-800 dark:text-gray-200"
        />
      )}
      <DataVisual data={passage} />
    </>
  )
}

export function DataVisual({
  data,
}: {
  data: { dataTable?: DiagnosticDataTable; figure?: DiagnosticFigure }
}) {
  const figure = data.figure
  const table = data.dataTable
  const series = figure
    ? [
        { label: figure.seriesLabel, yValues: figure.yValues, key: 'primary' },
        ...(figure.comparisonSeries ?? []).map((s, idx) => ({ label: s.label, yValues: s.yValues, key: `cmp-${idx}` })),
      ]
    : []
  const allY = series.flatMap((s) => s.yValues)
  const maxY = allY.length > 0 ? Math.max(...allY, 1) : 1
  const minY = allY.length > 0 ? Math.min(...allY, 0) : 0
  const yRange = Math.max(maxY - minY, 1)

  // Asymmetric padding: left room for y-axis tick labels + rotated axis title,
  // bottom room for x-axis tick labels + axis title.
  const chartWidth = 480
  const chartHeight = 240
  const padLeft = 56
  const padRight = 16
  const padTop = 16
  const padBottom = 48
  const plotWidth = chartWidth - padLeft - padRight
  const plotHeight = chartHeight - padTop - padBottom

  const pointsBySeries = figure
    ? series.map((seriesItem) => {
        const points = seriesItem.yValues.map((value, index) => {
          const xDenominator = Math.max(figure.xValues.length - 1, 1)
          const x = padLeft + (index / xDenominator) * plotWidth
          const y = padTop + plotHeight - ((value - minY) / yRange) * plotHeight
          return { x, y, value, xLabel: figure.xValues[index] }
        })
        return { ...seriesItem, points, polylinePoints: points.map((p) => `${p.x},${p.y}`).join(' ') }
      })
    : []

  const lineColors = ['stroke-cyan-500', 'stroke-amber-500', 'stroke-emerald-500']
  const pointColors = [
    'fill-emerald-400 stroke-cyan-700 dark:stroke-cyan-200',
    'fill-amber-300 stroke-amber-700 dark:stroke-amber-200',
    'fill-teal-300 stroke-emerald-700 dark:stroke-emerald-200',
  ]

  if (!figure && !table) return null

  return (
    <div className="mt-4 flex flex-col gap-4">
      {table && (
        <div className="rounded-xl border border-cyan-200 bg-white p-4 dark:border-cyan-800 dark:bg-gray-900/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">{table.title}</p>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 text-sm">
              <thead>
                <tr>
                  <th className="rounded-tl-lg border border-gray-200 bg-gray-50 px-3 py-2 text-left font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
                    Condition
                  </th>
                  <th className="border border-gray-200 bg-gray-50 px-3 py-2 text-left font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
                    {table.xLabel} ({table.xUnit})
                  </th>
                  <th className={`border border-gray-200 bg-gray-50 px-3 py-2 text-left font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 ${(table.comparisonSeries ?? []).length === 0 ? 'rounded-tr-lg' : ''}`}>
                    {table.yLabel} ({table.yUnit})
                  </th>
                  {(table.comparisonSeries ?? []).map((s, idx) => (
                    <th key={`thead-cmp-${idx}`} className={`border border-gray-200 bg-gray-50 px-3 py-2 text-left font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 ${idx === (table.comparisonSeries ?? []).length - 1 ? 'rounded-tr-lg' : ''}`}>
                      {s.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.xValues.map((xValue, index) => (
                  <tr key={`${xValue}-${table.yValues[index]}`}>
                    <td className="border border-gray-200 px-3 py-2 text-gray-700 dark:border-gray-700 dark:text-gray-200">{index + 1}</td>
                    <td className="border border-gray-200 px-3 py-2 text-gray-700 dark:border-gray-700 dark:text-gray-200">{xValue}</td>
                    <td className="border border-gray-200 px-3 py-2 text-gray-700 dark:border-gray-700 dark:text-gray-200">{table.yValues[index]}</td>
                    {(table.comparisonSeries ?? []).map((s, idx) => (
                      <td key={`tbody-cmp-${idx}-${index}`} className="border border-gray-200 px-3 py-2 text-gray-700 dark:border-gray-700 dark:text-gray-200">
                        {s.yValues[index]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {figure && (
        <div className="rounded-xl border border-cyan-200 bg-white p-4 dark:border-cyan-800 dark:bg-gray-900/40">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">{figure.title}</p>
          <div className="rounded-lg border border-dashed border-cyan-200 bg-cyan-50/50 p-3 dark:border-cyan-900 dark:bg-cyan-950/20">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full" style={{ height: 'auto', minHeight: '180px' }}>
              {/* Y-axis gridlines and tick labels */}
              {[0, 0.25, 0.5, 0.75, 1].map((fraction) => {
                const y = padTop + fraction * plotHeight
                const tickValue = (maxY - fraction * yRange).toFixed(1)
                return (
                  <g key={`grid-${fraction}`}>
                    <line
                      x1={padLeft}
                      y1={y}
                      x2={padLeft + plotWidth}
                      y2={y}
                      className="stroke-gray-300 dark:stroke-gray-700"
                      strokeDasharray="4 3"
                    />
                    <text x={padLeft - 5} y={y + 4} textAnchor="end" fontSize={10} className="fill-gray-500 dark:fill-gray-400">
                      {tickValue}
                    </text>
                  </g>
                )
              })}

              {/* Axes */}
              <line x1={padLeft} y1={padTop} x2={padLeft} y2={padTop + plotHeight} className="stroke-gray-500 dark:stroke-gray-400" strokeWidth={1.5} />
              <line x1={padLeft} y1={padTop + plotHeight} x2={padLeft + plotWidth} y2={padTop + plotHeight} className="stroke-gray-500 dark:stroke-gray-400" strokeWidth={1.5} />

              {/* Data series */}
              {pointsBySeries.map((seriesItem, seriesIndex) => (
                <g key={`line-${seriesItem.key}`}>
                  <polyline
                    points={seriesItem.polylinePoints}
                    fill="none"
                    className={lineColors[seriesIndex % lineColors.length]}
                    strokeWidth="2.5"
                  />
                  {seriesItem.points.map((point) => (
                    <g key={`${seriesItem.key}-${point.xLabel}-${point.value}`}>
                      <circle cx={point.x} cy={point.y} r="4" className={pointColors[seriesIndex % pointColors.length]} strokeWidth="1.5" />
                      {seriesIndex === 0 && (
                        <text x={point.x} y={point.y - 9} textAnchor="middle" fontSize={10} className="fill-gray-700 dark:fill-gray-200">
                          {point.value}
                        </text>
                      )}
                    </g>
                  ))}
                </g>
              ))}

              {/* X-axis tick labels */}
              {pointsBySeries[0]?.points.map((point) => (
                <text key={`xtick-${point.xLabel}`} x={point.x} y={padTop + plotHeight + 16} textAnchor="middle" fontSize={10} className="fill-gray-500 dark:fill-gray-400">
                  {point.xLabel}
                </text>
              ))}

              {/* X-axis title */}
              <text
                x={padLeft + plotWidth / 2}
                y={chartHeight - 4}
                textAnchor="middle"
                fontSize={11}
                fontWeight="600"
                className="fill-gray-600 dark:fill-gray-300"
              >
                {figure.xLabel ?? 'Condition'} ({figure.xUnit})
              </text>

              {/* Y-axis title (rotated) */}
              <text
                x={0}
                y={0}
                textAnchor="middle"
                fontSize={11}
                fontWeight="600"
                className="fill-gray-600 dark:fill-gray-300"
                transform={`translate(12, ${padTop + plotHeight / 2}) rotate(-90)`}
              >
                {figure.yLabel ?? figure.seriesLabel} ({figure.yUnit})
              </text>
            </svg>

            {series.length > 1 && (
              <div className="mt-2 flex flex-wrap gap-4 text-xs text-gray-600 dark:text-gray-300">
                {series.map((seriesItem, seriesIndex) => (
                  <div key={`legend-${seriesItem.key}`} className="inline-flex items-center gap-1.5">
                    <span className={`inline-block h-3 w-3 rounded-full ${seriesIndex === 0 ? 'bg-cyan-500' : seriesIndex === 1 ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                    <span>{seriesItem.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
