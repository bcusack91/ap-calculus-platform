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

  // A `$$…$$` span cannot be closed across a blank line — remark-math ends the
  // math node at the paragraph break, so the opener renders as a red KaTeX
  // error and the rest of the card spills out as raw LaTeX with a trailing
  // `$$`. Five MCAT physics cards lost their answer that way ("**14.7 N**\n\n
  // fk = μk × N = …" wrapped whole). Format each paragraph on its own and put
  // the blank lines back.
  return content
    .split(/\n[ \t]*\n/)
    .map(formatBlock)
    .join('\n\n')
}

/** Markdown emphasis / inline code: prose by definition, never math. */
const EMPHASIS_RUN = /(\*\*[^*\n]+\*\*|`[^`\n]+`)/

/** Math emitted into markdown must live on ONE line to stay closable. */
function flattenMath(eq: string): string {
  return eq.trim().replace(/\s*\n\s*/g, ' ')
}

/**
 * Wrap a part that reads as a standalone equation, keeping markdown emphasis
 * and any lead-in words OUT of the math span. `$$**14.7 N**` is not LaTeX: it
 * renders as a red KaTeX error and takes the card's answer with it.
 *
 * The prose/equation decision is made by the caller on the WHOLE sentence —
 * splitting first would drop the word count below the prose threshold and
 * start typesetting things like "gambling/slot" as a fraction.
 */
function wrapEquation(part: string, display: boolean): string {
  if (EMPHASIS_RUN.test(part)) {
    return part
      .split(EMPHASIS_RUN)
      .map((seg, i) => {
        if (i % 2 === 1) return seg // **bold** / `code` stays verbatim
        // What is left of the sentence is only math if it still holds an `=`.
        return seg.trim() && seg.includes('=') ? wrapEquation(seg, display) : seg
      })
      .join('')
  }
  // A part can hold several equations on their own lines ("12 ÷ 4 = 3\n(-12) ÷
  // (-4) = 3"). Wrap each line on its own: one span per line stays closable and
  // keeps the lines apart, where a single flattened span ran them together.
  if (part.trim().includes('\n')) {
    return part
      .split('\n')
      .map((line) => (line.trim() && line.includes('=') ? wrapEquation(line, display) : line))
      .join('\n')
  }
  const open = display ? '\n\n$$' : '$'
  const close = display ? '$$\n\n' : '$'
  // An inline span keeps a space between the lead-in words and the math.
  const gap = display ? '' : ' '
  // Keep a lead-in phrase ("Current I = E/(R+r) = …") outside the math — words
  // typeset as math come out as spaced-out italic identifiers. The equation
  // starts at the FIRST identifier that an `=` follows, and the lead is only
  // taken when it is whole words ending at a space: without that guard the
  // split lands mid-expression ("1/" + "$$R_total = 1/6 + …$$").
  const eqStart = part.search(/[A-Za-z_][A-Za-z0-9_]*\s*=/)
  const lead = eqStart > 0 ? part.slice(0, eqStart) : ''
  if (/^\s*[A-Za-z][A-Za-z\s,:;'"()-]*\s$/.test(lead)) {
    return lead.trim() + gap + open + convertToLatex(flattenMath(part.slice(eqStart))) + close
  }
  // Same idea for a labelled equation ("Lens equation: 1/f = 1/do + …"), whose
  // formula starts with a number so the identifier scan can't find the edge.
  // The formula must start on a symbol, so a qualifier stays out of the math:
  // "Earth's field: ~0.5 G = 5×10⁻⁵ T" would lose its `~` (a non-breaking
  // space in LaTeX, so it renders as nothing at all).
  const labelled = part.match(/^(\s*[A-Za-z][A-Za-z\s,;'"()-]*:\s+)([A-Za-z0-9([][\s\S]*)$/)
  if (labelled) {
    return labelled[1].trim() + gap + open + convertToLatex(flattenMath(labelled[2])) + close
  }
  // Last resort for an inline span: the original, looser lead split. It can cut
  // mid-token ("(Δ" | "T = 0"), but that has been the rendering for a year and
  // keeping it here means this fix changes nothing it doesn't have to.
  if (!display) {
    const eqMatch = part.match(/^(.*?)(\b[A-Za-z_][A-Za-z0-9_]*\s*=\s*.+)$/)
    if (eqMatch && eqMatch[1].trim()) {
      return eqMatch[1].trim() + ' $' + convertToLatex(flattenMath(eqMatch[2])) + '$'
    }
  }
  return open + convertToLatex(flattenMath(part)) + close
}

function formatBlock(content: string): string {
  if (!content.trim()) return content

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
          // A run joined only by slashes is a date, score or idiom inside prose
          // ("Studies of 9/11", "open 24/7", "a 50/50 split") — not arithmetic.
          // Typesetting it turns 9/11 into the fraction nine-elevenths. Real
          // arithmetic in prose carries a ×, ÷, +, −, * or = as well.
          if (!/[×÷+*=\-]/.test(run)) return run
          // Sentence punctuation trailing the arithmetic ("= 20,") belongs to
          // the prose, not the math span. `[\s\S]` not `.`: an arithmetic run
          // can contain a newline (`\s` in the pattern above), and with `.`
          // this match returned null and THREW — one prod card ("Replace x
          // with (x - 2)…") crashed every flashcard surface that formats it.
          const m = run.match(/^([\s\S]*?)([.,]*)$/) as RegExpMatchArray
          return '$' + convertToLatex(m[1].trim()) + '$' + m[2]
        }
      )
    }

    // If it looks like a standalone equation (multiple = or = with math notation), wrap as display equation
    if (equalsCount >= 2 && (hasMathChars || hasBrackets || hasFractions)) {
      return wrapEquation(part, true)
    }

    // Single equation with math notation
    if (equalsCount >= 1 && (hasMathChars || hasBrackets || hasFractions || hasExponents)) {
      return wrapEquation(part, false)
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
