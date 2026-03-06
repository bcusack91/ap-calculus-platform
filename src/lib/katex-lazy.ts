/**
 * Lazy-loaded KaTeX utility.
 *
 * Dynamically imports KaTeX only when math rendering is actually needed,
 * saving ~77 kB gzip from the initial client bundle on every route that
 * uses math rendering.
 */

let katexModule: typeof import('katex') | null = null

interface KatexOptions {
  displayMode?: boolean
  throwOnError?: boolean
  output?: 'html' | 'mathml' | 'htmlAndMathml'
  [key: string]: unknown
}

/**
 * Render a LaTeX expression to an HTML string.
 * Lazily loads KaTeX on first use.
 */
export async function renderKatex(
  expression: string,
  options?: KatexOptions,
): Promise<string> {
  if (!katexModule) {
    katexModule = await import('katex')
  }
  return katexModule.default.renderToString(expression, {
    throwOnError: false,
    ...options,
  })
}

/**
 * Synchronous render — only works AFTER KaTeX has been loaded via renderKatex().
 * Falls back to the raw expression if KaTeX hasn't loaded yet.
 */
export function renderKatexSync(
  expression: string,
  options?: KatexOptions,
): string {
  if (!katexModule) return expression
  return katexModule.default.renderToString(expression, {
    throwOnError: false,
    ...options,
  })
}

/**
 * Pre-load KaTeX module without rendering anything.
 * Useful to eagerly warm the cache in a useEffect.
 */
export async function preloadKatex(): Promise<void> {
  if (!katexModule) {
    katexModule = await import('katex')
  }
}
