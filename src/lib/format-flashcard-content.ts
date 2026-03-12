/**
 * Automatically formats flashcard content to ensure equations are properly wrapped in LaTeX delimiters
 * This allows older flashcards with plain-text equations to render properly with KaTeX
 */

export function formatFlashcardContent(content: string): string {
  if (!content) return content
  
  // If content already has LaTeX delimiters, return as-is
  if (content.includes('$') || content.includes('\\[') || content.includes('\\(')) {
    return content
  }
  
  // Pattern 1: Detect equation-like expressions (contains =, +, -, *, /, ^, subscripts, etc.)
  // Match patterns like: "1/f = 1/d_o + 1/d_i" or "E = mc²" or "v² = v₀² + 2aΔx"
  const equationPattern = /\b([a-zA-Z_][a-zA-Z0-9_]*\s*[=<>≤≥≈]\s*[^.,;!?]*(?:[+\-*/^²³°₀₁₂₃₄₅₆₇₈₉]|\\times|\\div)[^.,;!?]*)/g
  
  // Pattern 2: Fractions like "1/2" or "a/b" 
  const fractionPattern = /\b([a-zA-Z0-9_]+\/[a-zA-Z0-9_]+)\b/g
  
  // Pattern 3: Variables with subscripts like d_o, d_i, v_0
  const subscriptPattern = /\b([a-zA-Z]+_[a-zA-Z0-9]+)\b/g
  
  // Pattern 4: Superscripts like m^2, x^3, 10^-3
  const superscriptPattern = /\b([a-zA-Z0-9]+\^[\-+]?[a-zA-Z0-9]+)\b/g
  
  let formatted = content
  
  // First, wrap entire equations (e.g., "1/f = 1/d_o + 1/d_i" becomes "$1/f = 1/d_o + 1/d_i$")
  formatted = formatted.replace(equationPattern, (match) => {
    // Don't double-wrap if already wrapped
    if (match.includes('$')) return match
    return `$${match}$`
  })
  
  // Then wrap fractions that aren't already in LaTeX
  formatted = formatted.replace(fractionPattern, (match) => {
    // Check if this fraction is already inside a $ delimiter
    const beforeMatch = formatted.substring(0, formatted.indexOf(match))
    const openDollars = (beforeMatch.match(/\$/g) || []).length
    if (openDollars % 2 === 1) return match // Already inside LaTeX
    return `$${match}$`
  })
  
  // Wrap subscripts
  formatted = formatted.replace(subscriptPattern, (match) => {
    const beforeMatch = formatted.substring(0, formatted.indexOf(match))
    const openDollars = (beforeMatch.match(/\$/g) || []).length
    if (openDollars % 2 === 1) return match
    return `$${match}$`
  })
  
  // Wrap superscripts
  formatted = formatted.replace(superscriptPattern, (match) => {
    const beforeMatch = formatted.substring(0, formatted.indexOf(match))
    const openDollars = (beforeMatch.match(/\$/g) || []).length
    if (openDollars % 2 === 1) return match
    return `$${match}$`
  })
  
  // Clean up any double-wrapping like "$$x$$" -> "$x$"
  formatted = formatted.replace(/\$\$([^$]+)\$\$/g, '$$$1$$')
  
  // Clean up adjacent LaTeX blocks like "$x$$y$" -> "$x$ $y$"
  formatted = formatted.replace(/\$\$\$/g, '$ $')
  
  return formatted
}

/**
 * More aggressive formatting that wraps common equation patterns
 */
export function formatFlashcardContentAggressive(content: string): string {
  if (!content) return content
  
  let formatted = content
  
  // If the entire content looks like a single equation, wrap the whole thing
  if (/^[^.!?]*[=<>≤≥][^.!?]*$/.test(content) && !content.includes('$')) {
    formatted = `$${content}$`
  } else {
    // Otherwise use the standard formatter
    formatted = formatFlashcardContent(content)
  }
  
  return formatted
}
