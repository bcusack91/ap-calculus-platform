import 'katex/dist/katex.min.css'
import './note-sheet.css'
import type { ReactNode } from 'react'
import { renderRichText } from '@/lib/render-rich-text'
import { isSafeSvg } from '@/lib/safe-svg'
import {
  BLANK_TOKEN,
  clockLabel,
  type EquationSheet,
  type NoteFigure,
  type NoteItem,
  type NoteSection,
  type SheetProblem,
  type VideoSheet,
  type WorkedPart,
} from '@/lib/note-sheets'

/**
 * The printed pieces of a note sheet (src/lib/note-sheets.ts). Server
 * components only: the data carries the answers, and `showKey` decides
 * whether they are printed. The page must `await preloadKatex()` first, since
 * renderRichText renders math synchronously.
 */

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Rich text (math, bold, tables) with its blanks drawn as rules, or as answers on the key. */
function richHtml(md: string, answers: readonly string[] = [], showKey = false): string {
  return renderRichText(md).replace(BLANK_TOKEN, (_, n: string) => {
    const a = answers[Number(n)] ?? ''
    const width = Math.min(26, Math.max(6, Math.round(a.length * 1.25) + 2))
    return showKey
      ? `<span class="ns-blank ns-key">${esc(a)}</span>`
      : `<span class="ns-blank" style="min-width:${width}ch">&nbsp;</span>`
  })
}

export function Rich({
  md,
  as: Tag = 'span',
  className,
  answers,
  showKey,
}: {
  md: string
  as?: 'span' | 'p' | 'div'
  className?: string
  answers?: readonly string[]
  showKey?: boolean
}) {
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: richHtml(md, answers, showKey) }}
    />
  )
}

export function Rules({ n }: { n: number }) {
  return (
    <div className="ns-rules" aria-hidden>
      {Array.from({ length: n }, (_, i) => (
        <div key={i} className="ns-rule" />
      ))}
    </div>
  )
}

export function WorkGrid({ inches }: { inches: number }) {
  return <div className="ns-grid" style={{ height: `${inches}in` }} aria-hidden />
}

export function SheetFrame({
  eyebrow,
  title,
  sub,
  how,
  children,
}: {
  eyebrow: string
  title: string
  sub?: string
  how?: string
  children: ReactNode
}) {
  return (
    <article className="ns-sheet">
      <header className="ns-head">
        <div>
          <div className="ns-eyebrow">{eyebrow}</div>
          <h1>
            <Rich md={title} />
          </h1>
          {sub && <p className="ns-sub">{sub}</p>}
        </div>
        <div className="ns-name">
          Name <span className="ns-fill" /> &nbsp; Date <span className="ns-fill ns-short" />
        </div>
      </header>
      {how && <p className="ns-how">{how}</p>}
      {children}
    </article>
  )
}

function Figure({ figure }: { figure: NoteFigure }) {
  if (!isSafeSvg(figure.svg)) return null
  return (
    <figure className="ns-figure">
      <div role="img" aria-label={figure.alt} dangerouslySetInnerHTML={{ __html: figure.svg }} />
      {figure.caption && (
        <figcaption>
          <Rich md={figure.caption} />
        </figcaption>
      )}
    </figure>
  )
}

const LETTERS = 'ABCDEFGH'

function WorkedPartView({ part, showKey }: { part: WorkedPart; showKey: boolean }) {
  return (
    <div className="ns-part">
      <p>
        <b>({part.label})</b> <Rich md={part.prompt} />
      </p>
      {showKey ? (
        part.solution ? (
          <Rich as="div" className="ns-solution ns-key" md={part.solution} />
        ) : null
      ) : (
        <WorkGrid inches={1.2} />
      )}
    </div>
  )
}

function Item({ item, showKey }: { item: NoteItem; showKey: boolean }) {
  switch (item.kind) {
    case 'text':
      return (
        <Rich
          as="p"
          className={`ns-text${item.bullet ? 'ns-bullet' : ''}`}
          md={item.md}
          answers={item.answers}
          showKey={showKey}
        />
      )
    case 'equation':
      return (
        <div className="ns-eq">
          <div className="ns-label">Equation</div>
          {showKey ? (
            <div className="ns-eq-row ns-key">
              <Rich md={`$${item.tex}$`} />
            </div>
          ) : (
            <div className="ns-eq-row">
              {item.lhs && <Rich md={`$${item.lhs} =$`} />}
              <span className="ns-eq-space" />
            </div>
          )}
          <div className="ns-eq-units">
            <span className="ns-label">Each symbol and its unit</span>
            <span />
          </div>
        </div>
      )
    case 'table':
      return (
        <table className="ns-table">
          <thead>
            <tr>
              {item.header.map((h, i) => (
                <th key={i}>
                  <Rich md={h} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {item.rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => (
                  <td key={j} className={j > 0 && showKey ? 'ns-key' : undefined}>
                    {j === 0 || showKey ? <Rich md={c} /> : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
    case 'figure':
      return <Figure figure={item.figure} />
    case 'poll':
      return (
        <div className="ns-poll">
          <div className="ns-label">Poll {item.number}</div>
          <Rich as="p" className="ns-text" md={item.question} />
          <div className="ns-opts">
            {item.options.map((o, i) => (
              <div key={i} className="ns-opt">
                <span className="ns-bubble">{LETTERS[i] ?? i + 1}</span>
                <Rich md={o} />
              </div>
            ))}
          </div>
          <div className="ns-pollrow">
            <span>
              My answer <span className="ns-fill ns-short" />
            </span>
            <span>
              Class answer <span className="ns-fill ns-short" />
            </span>
            <span className="ns-why">
              <span>Why</span>
              <span />
            </span>
          </div>
        </div>
      )
    case 'recall':
      return (
        <div className="ns-recall">
          {item.entries.map((e, i) => (
            <div key={i}>
              <b>
                <Rich md={e.title} />
              </b>
              {showKey ? (
                <Rich as="p" className="ns-text ns-key ns-keynote" md={e.body} />
              ) : (
                <Rules n={2} />
              )}
            </div>
          ))}
        </div>
      )
    case 'worked':
      return (
        <div>
          {item.problems.map((p, i) => (
            <div key={i} style={i > 0 ? { marginTop: 14 } : undefined}>
              {/* The problem, the reminder and part (a) stay on one page. */}
              <div className="ns-keep">
                <div className="ns-problem">
                  {p.statement.map((s, k) => (
                    <Rich key={k} as="p" md={s} />
                  ))}
                  {p.figure && <Figure figure={p.figure} />}
                </div>
                {!showKey && (
                  <div className="ns-try">Try each part yourself before the answer goes up.</div>
                )}
                {p.parts[0] && <WorkedPartView part={p.parts[0]} showKey={showKey} />}
              </div>
              {p.parts.slice(1).map((part, k) => (
                <WorkedPartView key={k} part={part} showKey={showKey} />
              ))}
              {p.parts.length === 0 && !showKey && <WorkGrid inches={2} />}
            </div>
          ))}
          {showKey && (item.solutionFigure || item.solutionNotes.length > 0) && (
            <div className="ns-part">
              {item.solutionFigure && <Figure figure={item.solutionFigure} />}
              {item.solutionNotes.map((n, k) => (
                <Rich key={k} as="p" className="ns-text ns-bullet ns-key" md={n} />
              ))}
            </div>
          )}
        </div>
      )
  }
}

/** The guided notes for a live class: one section per slide unit. */
export function LiveSections({
  sections,
  showKey,
}: {
  sections: readonly NoteSection[]
  showKey: boolean
}) {
  return (
    <>
      {sections.map((s, i) => (
        <section key={i} className="ns-section">
          {/* The heading travels with the first item, so it never ends a page alone. */}
          <div className="ns-keep">
            <h2>
              <Rich md={s.title} />
            </h2>
            {s.items[0] && s.items[0].kind !== 'worked' && (
              <Item item={s.items[0]} showKey={showKey} />
            )}
          </div>
          <div className="ns-items">
            {s.items.map((it, k) =>
              k === 0 && it.kind !== 'worked' ? null : <Item key={k} item={it} showKey={showKey} />
            )}
          </div>
        </section>
      ))}
    </>
  )
}

function QuantityTable({ rows, showKey }: { rows: EquationSheet['quantities']; showKey: boolean }) {
  return (
    <table className="ns-table">
      <thead>
        <tr>
          <th>Quantity</th>
          {showKey ? (
            <th>Symbol and SI unit</th>
          ) : (
            <>
              <th>Symbol</th>
              <th>SI unit</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map((q, i) => (
          <tr key={i}>
            <td>{q.quantity}</td>
            {showKey ? (
              <td className="ns-key">
                <Rich md={q.answer} />
              </td>
            ) : (
              <>
                <td />
                <td />
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/** The last page: every quantity and equation of the topic, blank. */
export function EquationSheetPage({
  topicTitle,
  sheet,
  showKey,
}: {
  topicTitle: string
  sheet: EquationSheet
  showKey: boolean
}) {
  if (sheet.quantities.length === 0 && sheet.equations.length === 0) return null
  return (
    <SheetFrame
      eyebrow={showKey ? 'Equation sheet · answer key' : 'Equation sheet'}
      title={topicTitle}
      how={
        showKey
          ? undefined
          : 'The MCAT gives you no formula sheet. Fill this in from memory, then check it against your flashcards.'
      }
    >
      {sheet.quantities.length > 0 && (
        <section className="ns-section">
          <h2>Quantities</h2>
          <QuantityTable rows={sheet.quantities} showKey={showKey} />
        </section>
      )}
      {sheet.equations.length > 0 && (
        <section className="ns-section">
          <h2>Equations: write each one, then say what every symbol stands for</h2>
          <table className="ns-table">
            <tbody>
              {sheet.equations.map((e, i) => (
                <tr key={i}>
                  <td style={{ width: '42%', fontWeight: 400 }}>
                    <Rich md={e.prompt} />
                  </td>
                  <td
                    className={showKey ? 'ns-key' : undefined}
                    style={showKey ? undefined : { height: '0.55in' }}
                  >
                    {showKey ? <Rich md={e.answer} /> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </SheetFrame>
  )
}

function Problem({ problem, showKey }: { problem: SheetProblem; showKey: boolean }) {
  return (
    <div>
      <div className="ns-keep">
        <div className="ns-problem">
          <Rich as="p" md={problem.question} />
          {problem.figure && <Figure figure={problem.figure} />}
        </div>
        {!showKey && (
          <>
            <div className="ns-try">Pause the video here and try it first.</div>
            <div className="ns-steps" aria-hidden>
              <span>Given / find</span>
              <i />
              <span>Convert units</span>
              <i />
              <span>Equation</span>
              <i />
              <span>Solve</span>
              <i style={{ minHeight: '1.1in' }} />
            </div>
          </>
        )}
      </div>
      <table className="ns-table" style={{ marginTop: 8 }}>
        <thead>
          <tr>
            <th>Part</th>
            <th>My answer</th>
            <th>Video answer</th>
          </tr>
        </thead>
        <tbody>
          {problem.parts.map((p, i) => (
            <tr key={i}>
              <td style={{ width: '46%', fontWeight: 400 }}>
                <b>({p.label})</b> <Rich md={p.prompt} />
                {p.unit ? <span style={{ color: '#555' }}> [{p.unit}]</span> : null}
              </td>
              <td />
              <td className={showKey ? 'ns-key' : undefined}>
                {showKey && p.expected ? <Rich md={p.expected} /> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showKey && <Rich as="p" className="ns-text ns-key ns-keynote" md={problem.explanation} />}
    </div>
  )
}

/** One sheet per video: a tracker for a concept video, a workbook for a worked-examples video. */
export function VideoSheetView({
  sheet,
  lessonTitle,
  moduleLabel,
  showKey,
}: {
  sheet: VideoSheet
  lessonTitle: string
  moduleLabel: string | null
  showKey: boolean
}) {
  const workbook = sheet.kind === 'workbook'
  const kindLabel = workbook ? 'Worked-example workbook' : 'Video notes'
  return (
    <SheetFrame
      eyebrow={[lessonTitle, moduleLabel, showKey ? `${kindLabel} · answer key` : kindLabel]
        .filter(Boolean)
        .join(' · ')}
      title={sheet.video !== null ? `Video ${sheet.video}: ${sheet.title}` : sheet.title}
      how={
        showKey
          ? undefined
          : workbook
            ? 'Work each problem on this page before you watch its solution. Write the video’s answer next to yours.'
            : 'Tick each section as you finish it. Write the idea in your own words, not the narration.'
      }
    >
      {sheet.sections.map((s, i) => {
        if (s.recap) {
          return (
            <div key={i} className="ns-box">
              <div className="ns-clip-head">
                <span className="ns-check" />
                <Rich md={s.title} />
                <span className="ns-time">{clockLabel(s.durationSec)}</span>
              </div>
              {sheet.quantities.length > 0 && (
                <div style={{ marginTop: 8 }}>
                  <div className="ns-label" style={{ marginBottom: 4 }}>
                    Before the flashcards: write these from memory
                  </div>
                  <QuantityTable rows={sheet.quantities} showKey={showKey} />
                </div>
              )}
              {!showKey && (
                <div style={{ marginTop: 10 }}>
                  <div className="ns-label">
                    {workbook ? 'The method, in my own steps' : 'Three things to remember'}
                  </div>
                  <div className="ns-numbered">
                    {Array.from({ length: workbook ? 4 : 3 }, (_, k) => (
                      <span key={k} style={{ display: 'contents' }}>
                        <b>{k + 1}.</b>
                        <div className="ns-rule" />
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {s.checkpoints > 0 && (
                <p className="ns-text" style={{ marginTop: 10, fontSize: '9.5pt' }}>
                  Recap questions on screen: <span className="ns-fill ns-short" /> out of{' '}
                  {s.checkpoints}
                </p>
              )}
            </div>
          )
        }
        if (s.problems.length > 0) {
          return (
            <div key={i} className="ns-clip" style={{ breakInside: 'auto' }}>
              <div className="ns-clip-head" style={{ marginBottom: 6 }}>
                <span className="ns-check" />
                <Rich md={s.title} />
                <span className="ns-time">{clockLabel(s.durationSec)}</span>
              </div>
              {s.problems.map((p, k) => (
                <Problem key={k} problem={p} showKey={showKey} />
              ))}
            </div>
          )
        }
        return (
          <div key={i} className="ns-clip">
            <div className="ns-clip-head">
              <span className="ns-check" />
              <Rich md={s.title} />
              <span className="ns-time">{clockLabel(s.durationSec)}</span>
            </div>
            {s.checkpoints > 0 && (
              <div className="ns-cp">
                <span>Checkpoint:</span>
                <span>
                  <span className="ns-check" />
                  right first time
                </span>
                <span>
                  <span className="ns-check" />
                  missed, rewatch this section
                </span>
              </div>
            )}
            {s.role === 'solution' ? (
              <>
                <div className="ns-label" style={{ marginTop: 6 }}>
                  What I missed, or would do differently
                </div>
                <Rules n={3} />
              </>
            ) : (
              <Rules n={3} />
            )}
          </div>
        )
      })}
    </SheetFrame>
  )
}
