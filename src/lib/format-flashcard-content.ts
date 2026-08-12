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

  // Split content into sentences and process each
  // This prevents equations from being broken across sentence boundaries
  const parts = content.split(/(?<=\.)\s+/)
  const processed = parts.map(part => {
    // Detect chemistry/math equation patterns:
    // - Contains = with math operators AND brackets/parens/fractions (e.g. Rate = -(1/a)Δ[A]/Δt = ...)
    // - Contains = with Greek letters (Δ, etc.)
    // - Contains multiple = signs (chained equations)
    const equalsCount = (part.match(/=/g) || []).length
    const hasMathChars = /[Δ∑∏∫√±×÷°²³₀₁₂₃₄₅₆₇₈₉]/.test(part)
    const hasBrackets = /\[.*\]/.test(part)
    const hasFractions = /\(1\/[a-z]\)/.test(part) || /\b\d+\/\d+\b/.test(part)
    const hasExponents = /\^[\-+]?\d+|\^[a-z]/.test(part)

    // Prose guard. The wrap-the-whole-part branches below were built for
    // standalone chemistry/physics equations ("Rate = -(1/a)Δ[A]/Δt = ..."),
    // where the only word is something like "Rate". Elementary-math cards are
    // SENTENCES that merely contain arithmetic — "Multiply the ones place:
    // 4 × 5 = 20, write 0 and carry 2" — and wrapping the whole sentence in
    // $...$ typesets every letter as a separate math identifier and eats the
    // spaces (the "M u l t i p l y" rendering bug). If the part reads like
    // prose, wrap only the arithmetic runs and leave the words alone.
    const proseWordCount = (part.match(/[A-Za-z]{3,}/g) || []).length
    const looksLikeProse = proseWordCount >= 4

    if (looksLikeProse) {
      // Wrap contiguous arithmetic runs: numbers joined by ×÷+−*/= operators
      // ("4 × 5 = 20", "30 × 5 = 150", "34 × 5"). Everything else stays text.
      return part.replace(
        /\d[\d.,]*(?:\s*[×÷+*/=\-]\s*\d[\d.,]*)+/g,
        (run) => {
          // Sentence punctuation trailing the arithmetic ("= 20,") belongs to
          // the prose, not the math span.
          const m = run.match(/^(.*?)([.,]*)$/) as RegExpMatchArray
          return '$' + convertToLatex(m[1].trim()) + '$' + m[2]
        }
      )
    }

    // If it looks like a standalone equation (multiple = or = with math notation), wrap as display equation
    if (equalsCount >= 2 && (hasMathChars || hasBrackets || hasFractions)) {
      // Convert the equation to proper LaTeX
      return '\n\n$$' + convertToLatex(part.trim()) + '$$\n\n'
    }

    // Single equation with math notation
    if (equalsCount >= 1 && (hasMathChars || hasBrackets || hasFractions || hasExponents)) {
      // Check if there's surrounding text
      const eqMatch = part.match(/^(.*?)(\b[A-Za-z_][A-Za-z0-9_]*\s*=\s*.+)$/)
      if (eqMatch && eqMatch[1].trim()) {
        // Text before equation + equation
        return eqMatch[1].trim() + ' $' + convertToLatex(eqMatch[2].trim()) + '$'
      }
      return '$' + convertToLatex(part.trim()) + '$'
    }

    // Fallback: use the regex-based approach for simpler patterns
    return formatSimplePatterns(part)
  })

  return processed.join(' ')
}

/**
 * Convert plain-text equation notation to proper LaTeX
 */
function convertToLatex(eq: string): string {
  let latex = eq

  // Convert Δ[X]/Δt patterns to proper fractions before individual substitutions
  latex = latex.replace(/Δ\[([A-Z][a-z]*(?:\d*[+\-]*)?)\]\/Δt/g, '\\frac{\\Delta[\\text{$1}]}{\\Delta t}')

  // Replace remaining Δ with \Delta
  latex = latex.replace(/Δ/g, '\\Delta ')

  // Percent inside math mode starts a LaTeX COMMENT — everything after it in
  // the formula silently disappears ("… × 100%." rendered as "… ×"). Escape.
  latex = latex.replace(/(?<!\\)%/g, '\\%')

  // Characters KaTeX has no metrics/symbol for (strict-mode warnings, render
  // in a fallback font or as empty boxes): vulgar fractions, the radical sign,
  // and the combining vector arrow. Convert to real LaTeX.
  latex = latex.replace(/½/g, '\\frac{1}{2}')
  latex = latex.replace(/¼/g, '\\frac{1}{4}')
  latex = latex.replace(/¾/g, '\\frac{3}{4}')
  latex = latex.replace(/√\(([^()]+)\)/g, '\\sqrt{$1}')
  latex = latex.replace(/√\[([^[\]]+)\]/g, '\\sqrt{$1}')
  latex = latex.replace(/√([A-Za-z0-9.]+)/g, '\\sqrt{$1}')
  latex = latex.replace(/√/g, '\\sqrt{\\,}')
  latex = latex.replace(/([A-Za-z])⃗/g, '\\vec{$1}')

  // Replace [X] concentration notation with \text{[X]} or just [X] in math mode
  // In LaTeX, brackets need to be explicit
  latex = latex.replace(/\[([A-Z][a-z]*(?:\d*[+\-]*)?)\]/g, '[\\text{$1}]')

  // Replace (1/x) fraction patterns with \frac{1}{x}
  latex = latex.replace(/\((\d+)\/([a-z])\)/g, '\\frac{$1}{$2}')

  // Replace simple fractions like a/b (but not in the middle of words)
  latex = latex.replace(/(?<![a-zA-Z])(\w+)\/(\w+)(?![a-zA-Z])/g, '\\frac{$1}{$2}')

  // Replace ^ with proper superscript
  latex = latex.replace(/\^(\{[^}]+\}|[\-+]?\d+|[a-zA-Z])/g, '^{$1}')
  // Clean double braces
  latex = latex.replace(/\^\{\{([^}]+)\}\}/g, '^{$1}')

  // Replace subscript notation like _0, _i
  latex = latex.replace(/_([a-zA-Z0-9])\b/g, '_{$1}')

  // Replace unicode superscript RUNS with a single ^{...} group. Doing the
  // whole run at once (not char-by-char) is what keeps 10⁻¹² from becoming
  // the KaTeX-invalid 10⁻¹^{2} ("double superscript") we shipped before.
  // Combining macron (x̄, sampling-distribution notation) → \bar{x} BEFORE
  // subscript handling so μ_x̄ becomes μ_{\bar{x}} instead of a stray mark.
  // Combining macron/overline (U+0304/U+0305) after a letter → \bar{...}.
  latex = latex.replace(/([A-Za-z])[\u0304\u0305]/g, '\\bar{$1}')
  // Subscript-x + macron (`μₓ̄`, sampling-distribution notation) — must run
  // BEFORE the subscript-run conversion below, or the mark strands outside
  // the braces (`_{x}̄`) and KaTeX rejects it.
  latex = latex.replace(/\u2093[\u0304\u0305]/g, '_{\\bar{x}}')

  const SUP: Record<string, string> = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-', '⁺': '+', 'ⁿ': 'n', 'ᵐ': 'm', 'ˣ': 'x', 'ⁱ': 'i', 'ᵗ': 't', 'ᵏ': 'k', 'ᵃ': 'a', 'ᵇ': 'b', 'ᵖ': 'p', 'ʸ': 'y', 'ʳ': 'r', 'ˢ': 's', 'ᵈ': 'd', 'ᵉ': 'e', 'ᶜ': 'c', 'ᵘ': 'u', 'ᵛ': 'v', 'ʷ': 'w', 'ᶻ': 'z', 'ʰ': 'h', 'ᵍ': 'g', 'ᵒ': 'o', 'ˡ': 'l', 'ʲ': 'j' }
  latex = latex.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺ⁿᵐˣⁱᵗᵏᵃᵇᵖʸʳˢᵈᵉᶜᵘᵛʷᶻʰᵍᵒˡʲ]+/g, (run) => `^{${run.split('').map((c) => SUP[c] ?? c).join('')}}`)
  // A unicode run followed by an explicit ^{...} (mixed notation in the same
  // number, e.g. `10⁻¹^{2}` in source data) merges into one exponent.
  latex = latex.replace(/\^\{([^}]*)\}\^\{([^}]*)\}/g, '^{$1$2}')

  // Unicode subscript runs → _{...}
  const SUB: Record<string, string> = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9', '₊': '+', '₋': '-', 'ₙ': 'n', 'ₘ': 'm', 'ₓ': 'x', 'ᵢ': 'i', 'ₜ': 't', 'ₖ': 'k', 'ₐ': 'a', 'ₑ': 'e' }
  latex = latex.replace(/[₀₁₂₃₄₅₆₇₈₉₊₋ₙₘₓᵢₜₖₐₑ]+/g, (run) => `_{${run.split('').map((c) => SUB[c] ?? c).join('')}}`)

  // Escape bare ampersands (E&M, R&D) — `&` is a column separator in KaTeX.
  latex = latex.replace(/(?<!\\)&/g, '\\& ')

  // Replace × with \times
  latex = latex.replace(/×/g, '\\times ')

  // Ensure Rate, rate, and other common words render as text
  latex = latex.replace(/\bRate\b/g, '\\text{Rate}')
  latex = latex.replace(/\brate\b/g, '\\text{rate}')

  return latex
}

/**
 * Handle simpler patterns (variables, superscripts, subscripts) that don't need full equation treatment
 */
function formatSimplePatterns(content: string): string {
  let formatted = content

  // Pattern 1: Detect equation-like expressions (contains =, +, -, *, /, ^, subscripts, etc.)
  const equationPattern = /\b([a-zA-Z_][a-zA-Z0-9_]*\s*[=<>≤≥≈]\s*[^.,;!?]*(?:[+\-*/^²³°₀₁₂₃₄₅₆₇₈₉]|\\times|\\div)[^.,;!?]*)/g
  
  // Pattern 2: Fractions like "1/2" or "a/b" 
  const fractionPattern = /\b([a-zA-Z0-9_]+\/[a-zA-Z0-9_]+)\b/g
  
  // Pattern 3: Variables with subscripts like d_o, d_i, v_0
  const subscriptPattern = /\b([a-zA-Z]+_[a-zA-Z0-9]+)\b/g
  
  // Pattern 4: Superscripts like m^2, x^3, 10^-3
  const superscriptPattern = /\b([a-zA-Z0-9]+\^[\-+]?[a-zA-Z0-9]+)\b/g
  
  // First, wrap entire equations
  formatted = formatted.replace(equationPattern, (match) => {
    if (match.includes('$')) return match
    return `$${match}$`
  })
  
  // Then wrap fractions that aren't already in LaTeX
  formatted = formatted.replace(fractionPattern, (match) => {
    const beforeMatch = formatted.substring(0, formatted.indexOf(match))
    const openDollars = (beforeMatch.match(/\$/g) || []).length
    if (openDollars % 2 === 1) return match
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
