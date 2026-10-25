/**
 * The one share-card renderer behind every opengraph-image / twitter-image
 * route (course hubs, topics, test-prep hubs, competitive challenges).
 *
 * Designed for the phone: iMessage, WhatsApp and Slack show the 1200×630
 * card at roughly a quarter of its size, so the title is ≥ 84 px extra-bold
 * (auto-fitted to two lines from real font metrics), the tagline ≥ 40 px,
 * chips and brand ≥ 30 px, all pure white on the course gradient (stops
 * darkened to ≥ 4.5:1 in course-theme.ts), plus one big emoji tile. No
 * decorative orbs or fine print, since they turn into noise when shrunk.
 *
 * Fonts: self-hosted Inter (SemiBold + ExtraBold TTF, read from disk at
 * request time). Emoji: Twemoji, which next/og fetches per glyph from a CDN
 * at request time. That fetch is why every route keeps
 * `dynamic = 'force-dynamic'`: prerendering at build time made the CDN
 * fetch part of the deploy, and it could ETIMEDOUT and fail the build.
 */
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { cardGradient } from './course-theme'
import { parseFontMetrics, wrapLines, type FontMetrics } from './font-metrics'

export const SHARE_CARD_SIZE = { width: 1200, height: 630 }

export interface ShareCardProps {
  /** The big line: course, topic, or challenge headline. */
  title: string
  /** Small caps line above the title, e.g. "ASVAB · Arithmetic Reasoning". */
  eyebrow?: string
  /** One short supporting line under the title. */
  tagline?: string
  /** Up to three short pills along the bottom. */
  chips?: string[]
  /** Emoji (rendered via Twemoji) or a text glyph such as ∫. */
  icon?: string
  /** Two or three hex stops; darkened automatically for white-text contrast. */
  gradient: string[]
  /** Replaces the icon tile, e.g. a challenger's score to beat. */
  stat?: { value: string; label: string }
}

// ── Layout constants (px at 1200×630) ──────────────────────────────────────
const PAD_X = 64
const PAD_Y = 50
const TILE = 232
const TILE_GAP = 44
const TEXT_W = SHARE_CARD_SIZE.width - 2 * PAD_X - TILE - TILE_GAP // 796
const BRAND_H = 56
const CHIP_FONT = 30
const CHIP_H = Math.round(CHIP_FONT * 1.25) + 2 * 12 + 4
const ROW_GAP = 26
const EYEBROW_FONT = 30
const TAGLINE_FONT = 40
const TITLE_MAX = 116
const TITLE_MIN = 84
const TITLE_FLOOR = 60 // only for unusually long topic titles
const TITLE_LH = 1.06
const TAGLINE_LH = 1.22
const WHITE = '#ffffff'

// ── Fonts (cached per server instance) ─────────────────────────────────────
interface LoadedFonts {
  semibold: Buffer
  extrabold: Buffer
  /** ExtraBold metrics (titles, stat values). */
  metrics: FontMetrics
  /** SemiBold metrics (eyebrow, tagline, chips). */
  semiMetrics: FontMetrics
}
let fontsPromise: Promise<LoadedFonts> | null = null

function loadFonts(): Promise<LoadedFonts> {
  if (!fontsPromise) {
    const dir = join(process.cwd(), 'src/lib/og/fonts')
    fontsPromise = Promise.all([
      readFile(join(dir, 'Inter-SemiBold.ttf')),
      readFile(join(dir, 'Inter-ExtraBold.ttf')),
    ])
      .then(([semibold, extrabold]) => ({
        semibold,
        extrabold,
        metrics: parseFontMetrics(extrabold),
        semiMetrics: parseFontMetrics(semibold),
      }))
      .catch((err) => {
        fontsPromise = null // retry on the next request instead of caching the failure
        throw err
      })
  }
  return fontsPromise
}

// ── Brand mark (the site favicon, inlined) ─────────────────────────────────
const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#2563EB"/></linearGradient></defs><rect width="256" height="256" rx="56" fill="url(#g)"/><rect x="60" y="80" width="136" height="96" rx="18" fill="#fff" stroke="#7C3AED" stroke-width="6"/><rect x="68" y="88" width="120" height="80" rx="12" fill="#e0e7ff"/><path d="M68 88 Q128 108 188 88" fill="none" stroke="#7C3AED" stroke-width="4"/><ellipse cx="100" cy="122" rx="8" ry="10" fill="#7C3AED"/><ellipse cx="156" cy="122" rx="8" ry="10" fill="#7C3AED"/><path d="M105 142 Q128 156 151 142" stroke="#7C3AED" stroke-width="4" fill="none"/></svg>`
const LOGO_SRC = `data:image/svg+xml;base64,${Buffer.from(LOGO_SVG).toString('base64')}`

// ── Text fitting ───────────────────────────────────────────────────────────
export interface TitleFit {
  fontSize: number
  /** The title split into the lines the card renders (one div per line). */
  lines: string[]
}

const letterSpacingFor = (fontSize: number) => -Math.round(fontSize * 0.022)
/** A title stays on one line if that keeps ≥ 82% of the two-line size. */
const ONE_LINE_RATIO = 0.82

/**
 * Two lines with the break that makes them most even, so a title never ends
 * in a lone short word ("AP Calculus / BC", "Maya challenges / you").
 */
function balancedTwoLines(words: string[], width: number, w: (s: string) => number): string[] | null {
  let best: string[] | null = null
  let bestMax = Infinity
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(' ')
    const b = words.slice(i).join(' ')
    const m = Math.max(w(a), w(b))
    if (m <= width && m < bestMax) {
      best = [a, b]
      bestMax = m
    }
  }
  return best
}

/**
 * Pick the title size and line breaks from real font metrics: one line when
 * that costs little size, else two balanced lines at the largest size from
 * 116 down to 84 px. A few long topic titles drop to three lines at ≥ 60 px; anything
 * longer is cut at a word boundary with an ellipsis, never clipped.
 */
export function fitTitle(
  title: string,
  metrics: FontMetrics,
  maxHeight: number,
  width = TEXT_W,
): TitleFit {
  const words = title.split(/\s+/).filter(Boolean)
  const widthAt = (size: number) => (s: string) => metrics.measure(s, size, letterSpacingFor(size))
  const tall = (n: number, size: number) => n * size * TITLE_LH <= maxHeight

  let oneLine = 0
  for (let size = TITLE_MAX; size >= TITLE_MIN && !oneLine; size -= 2) {
    if (widthAt(size)(title) <= width && tall(1, size)) oneLine = size
  }
  let twoLines: TitleFit | null = null
  for (let size = TITLE_MAX; size >= TITLE_MIN && !twoLines; size -= 2) {
    const lines = tall(2, size) ? balancedTwoLines(words, width, widthAt(size)) : null
    if (lines) twoLines = { fontSize: size, lines }
  }
  // One line reads cleaner, but not at the cost of much smaller type.
  if (oneLine && (!twoLines || oneLine >= ONE_LINE_RATIO * twoLines.fontSize)) {
    return { fontSize: oneLine, lines: [title] }
  }
  if (twoLines) return twoLines
  const greedy = (text: string, size: number, maxLines: number): string[] | null => {
    const w = widthAt(size)
    const lines = wrapLines(text, width, w)
    return lines.length <= maxLines && lines.every((l) => w(l) <= width) && tall(lines.length, size)
      ? lines
      : null
  }
  for (let size = TITLE_MIN - 2; size >= TITLE_FLOOR; size -= 2) {
    const lines = greedy(title, size, 2) ?? greedy(title, size, 3)
    if (lines) return { fontSize: size, lines }
  }
  const cut = [...words]
  while (cut.length > 1) {
    cut.pop()
    const lines = greedy(`${cut.join(' ').replace(/[\s,:;–—-]+$/, '')}…`, TITLE_FLOOR, 3)
    if (lines) return { fontSize: TITLE_FLOOR, lines }
  }
  return { fontSize: TITLE_FLOOR, lines: [title] }
}

/** Cut `text` at a word boundary with an ellipsis so it fits in `maxLines`. */
export function ellipsize(
  text: string,
  maxWidth: number,
  maxLines: number,
  width: (s: string) => number,
): string {
  const ok = (t: string) => {
    const lines = wrapLines(t, maxWidth, width)
    return lines.length <= maxLines && lines.every((l) => width(l) <= maxWidth)
  }
  if (ok(text)) return text
  const words = text.split(/\s+/)
  while (words.length > 1) {
    words.pop()
    const t = `${words.join(' ').replace(/[\s,:;·–—-]+$/, '')}…`
    if (ok(t)) return t
  }
  return text
}

// ── Pieces ─────────────────────────────────────────────────────────────────
/** ∫ / ∬ / ∭ as strokes: Inter has no integral glyphs, and a missing glyph
 * renders as a "NO GLYPH" box, so the calculus courses get drawn symbols. */
const INTEGRAL_COUNT: Record<string, number> = { '∫': 1, '∬': 2, '∭': 3 }

function IntegralGlyph({ count }: { count: number }) {
  const step = 46
  const width = 84 + step * (count - 1)
  const d = (dx: number) =>
    `M ${dx + 70} 30 C ${dx + 64} 8, ${dx + 46} 10, ${dx + 44} 40 L ${dx + 40} 160 C ${dx + 38} 190, ${dx + 20} 194, ${dx + 14} 172`
  return (
    <svg width={Math.round((width / 200) * 170)} height={170} viewBox={`0 0 ${width} 200`}>
      {Array.from({ length: count }, (_, i) => (
        <path key={i} d={d(i * step)} fill="none" stroke={WHITE} strokeWidth={17} strokeLinecap="round" />
      ))}
    </svg>
  )
}

function IconTile({ icon }: { icon: string }) {
  const integrals = INTEGRAL_COUNT[icon.trim()]
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: TILE,
        height: TILE,
        borderRadius: 56,
        background: 'rgba(255,255,255,0.16)',
        border: '3px solid rgba(255,255,255,0.32)',
        fontSize: 150,
        fontWeight: 800,
        color: WHITE,
        lineHeight: 1,
      }}
    >
      {integrals ? <IntegralGlyph count={integrals} /> : icon}
    </div>
  )
}

function StatTile({ value, label, metrics }: { value: string; label: string; metrics: FontMetrics }) {
  let valueSize = 104
  while (valueSize > 44 && metrics.measure(value, valueSize, -2) > TILE - 44) valueSize -= 4
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: TILE,
        height: TILE,
        borderRadius: 56,
        background: 'rgba(0,0,0,0.26)',
        border: '3px solid rgba(255,255,255,0.4)',
        color: WHITE,
      }}
    >
      <div style={{ display: 'flex', fontSize: valueSize, fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>
        {value}
      </div>
      <div style={{ display: 'flex', fontSize: 30, fontWeight: 600, marginTop: 14, textAlign: 'center' }}>
        {label}
      </div>
    </div>
  )
}

function Chip({ children }: { children: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: CHIP_H,
        padding: '0 26px',
        borderRadius: 999,
        background: 'rgba(0,0,0,0.24)',
        border: '2px solid rgba(255,255,255,0.34)',
        color: WHITE,
        fontSize: CHIP_FONT,
        fontWeight: 600,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </div>
  )
}

// ── Renderer ───────────────────────────────────────────────────────────────
export async function renderShareCard(props: ShareCardProps): Promise<ImageResponse> {
  const { semibold, extrabold, metrics, semiMetrics } = await loadFonts()
  const CONTENT_W = SHARE_CARD_SIZE.width - 2 * PAD_X
  // Chips that would overflow the row are dropped rather than squeezed.
  const chips: string[] = []
  let chipsW = 0
  for (const c of (props.chips ?? []).filter(Boolean).slice(0, 3)) {
    const w = semiMetrics.measure(c, CHIP_FONT) + 2 * 26 + 4 + (chips.length ? 16 : 0)
    if (chipsW + w > CONTENT_W) break
    chips.push(c)
    chipsW += w
  }
  const eyebrow = props.eyebrow
    ? ellipsize(props.eyebrow.toUpperCase(), TEXT_W, 1, (t) => semiMetrics.measure(t, EYEBROW_FONT, 1.5))
    : undefined
  const tagline = props.tagline
    ? ellipsize(props.tagline, TEXT_W, 2, (t) => semiMetrics.measure(t, TAGLINE_FONT))
    : undefined
  const stops = cardGradient(props.gradient.length >= 2 ? props.gradient : [...props.gradient, ...props.gradient])
  const background =
    stops.length === 2
      ? `linear-gradient(135deg, ${stops[0]} 0%, ${stops[1]} 100%)`
      : `linear-gradient(135deg, ${stops[0]} 0%, ${stops[1]} 50%, ${stops[2]} 100%)`

  // Vertical budget for the main block, then the title gets whatever is left
  // after the eyebrow and tagline.
  const mainH =
    SHARE_CARD_SIZE.height - 2 * PAD_Y - BRAND_H - ROW_GAP - (chips.length ? CHIP_H + ROW_GAP : 0)
  const eyebrowH = eyebrow ? Math.round(EYEBROW_FONT * 1.25) + 12 : 0
  const taglineLines = tagline
    ? Math.min(2, wrapLines(tagline, TEXT_W, (t) => semiMetrics.measure(t, TAGLINE_FONT)).length)
    : 0
  const taglineH = taglineLines ? 18 + Math.round(taglineLines * TAGLINE_FONT * TAGLINE_LH) : 0
  const title = fitTitle(props.title, metrics, mainH - eyebrowH - taglineH)

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          padding: `${PAD_Y}px ${PAD_X}px`,
          background,
          fontFamily: 'Inter',
          color: WHITE,
        }}
      >
        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: BRAND_H }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img src={LOGO_SRC} width={BRAND_H} height={BRAND_H} style={{ borderRadius: 14 }} />
            <div style={{ display: 'flex', fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>Study Mondo</div>
          </div>
          <div style={{ display: 'flex', fontSize: 30, fontWeight: 600 }}>studymondo.com</div>
        </div>

        {/* Main row: text column + icon/stat tile */}
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', marginTop: ROW_GAP, gap: TILE_GAP }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: TEXT_W }}>
            {eyebrow && (
              <div
                style={{
                  display: 'flex',
                  fontSize: EYEBROW_FONT,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  marginBottom: 12,
                }}
              >
                {eyebrow}
              </div>
            )}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: title.fontSize,
                fontWeight: 800,
                lineHeight: TITLE_LH,
                letterSpacing: letterSpacingFor(title.fontSize),
              }}
            >
              {title.lines.map((line, i) => (
                <div key={i} style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                  {line}
                </div>
              ))}
            </div>
            {tagline && (
              <div
                style={{
                  display: 'flex',
                  fontSize: TAGLINE_FONT,
                  fontWeight: 600,
                  lineHeight: TAGLINE_LH,
                  marginTop: 18,
                }}
              >
                {tagline}
              </div>
            )}
          </div>
          {props.stat ? <StatTile {...props.stat} metrics={metrics} /> : <IconTile icon={props.icon ?? '📚'} />}
        </div>

        {/* Chips */}
        {chips.length > 0 && (
          <div style={{ display: 'flex', gap: 16, marginTop: ROW_GAP }}>
            {chips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
        )}
      </div>
    ),
    {
      ...SHARE_CARD_SIZE,
      emoji: 'twemoji',
      fonts: [
        { name: 'Inter', data: semibold, weight: 600, style: 'normal' },
        { name: 'Inter', data: extrabold, weight: 800, style: 'normal' },
      ],
    },
  )
}
