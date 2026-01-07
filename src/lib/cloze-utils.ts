/**
 * Utility to detect and render cloze deletion flashcards
 * 
 * Cloze format: "Fill in the blank: Light travels in {{c1::straight lines}}"
 * Renders as: "Fill in the blank: Light travels in [........]" initially
 * Then reveals: "Fill in the blank: Light travels in straight lines" (in color)
 */

export interface ClozeData {
  isCloze: boolean
  parts?: Array<{ text: string; isCloze: boolean }>
}

/**
 * Detect if text contains cloze deletions
 * Supports formats:
 * - {{c1::answer}}
 * - {{answer}}
 * - _______ _______ (blank spaces)
 */
export function detectCloze(text: string): ClozeData {
  // Check for {{c1::answer}} or {{answer}} format
  const clozeRegex = /\{\{(?:c\d+::)?([^}]+)\}\}/g
  const hasClozeMarkers = clozeRegex.test(text)
  
  // Check for "Fill in the blank" with underscores
  const hasBlankFormat = text.includes('Fill in the blank') && text.includes('_______')
  
  if (!hasClozeMarkers && !hasBlankFormat) {
    return { isCloze: false }
  }
  
  // Parse cloze deletions
  const parts: Array<{ text: string; isCloze: boolean }> = []
  
  if (hasClozeMarkers) {
    // Reset regex lastIndex
    const regex = /\{\{(?:c\d+::)?([^}]+)\}\}/g
    let lastIndex = 0
    let match
    
    while ((match = regex.exec(text)) !== null) {
      // Add text before the cloze
      if (match.index > lastIndex) {
        parts.push({ text: text.substring(lastIndex, match.index), isCloze: false })
      }
      // Add the cloze deletion
      parts.push({ text: match[1], isCloze: true })
      lastIndex = regex.lastIndex
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({ text: text.substring(lastIndex), isCloze: false })
    }
  } else if (hasBlankFormat) {
    // Handle "Fill in the blank: text _______ _______" format
    // Look in the back text for the answer
    parts.push({ text, isCloze: false })
  }
  
  return { isCloze: true, parts }
}

/**
 * Extract answer from cloze card's back text
 * For "Fill in the blank" style cards, the answer is usually the first 1-3 words
 */
export function extractClozeAnswer(backText: string): string {
  // If back text starts with the answer, extract it
  const match = backText.match(/^([^.!?,]+)/)
  return match ? match[1].trim() : backText.split('.')[0].trim()
}
