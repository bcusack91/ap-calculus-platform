/**
 * Flashcard Auto-Generation Utilities
 * Extracts key concepts, equations, constants, and definitions from topic content
 */

interface FlashcardCandidate {
  front: string
  back: string
  hint?: string
  type: 'equation' | 'constant' | 'definition' | 'concept'
}

/**
 * Extract LaTeX equations from content
 */
export function extractEquations(content: string): FlashcardCandidate[] {
  const flashcards: FlashcardCandidate[] = []
  
  // Match inline math $...$ and display math $$...$$
  const displayMathRegex = /\$\$([^$]+)\$\$/g
  
  // Extract display math equations (more likely to be important)
  let match
  while ((match = displayMathRegex.exec(content)) !== null) {
    const equation = match[1].trim()
    
    // Skip if too short or looks like a number
    if (equation.length > 3 && !/^\d+$/.test(equation)) {
      flashcards.push({
        front: `Write the key equation related to this concept`,
        back: `$${equation}$`,
        type: 'equation'
      })
    }
  }
  
  // Look for named equations (e.g., "The derivative of x^n is:")
  const namedEquationRegex = /(?:formula|equation|rule|theorem|identity)(?:\s+(?:for|of|is))?\s*[:\-]\s*\$([^$]+)\$/gi
  while ((match = namedEquationRegex.exec(content)) !== null) {
    const equation = match[1].trim()
    flashcards.push({
      front: `What is the formula mentioned in this section?`,
      back: `$${equation}$`,
      hint: 'Look for the key mathematical relationship',
      type: 'equation'
    })
  }
  
  return flashcards
}

/**
 * Extract important constants from content
 */
export function extractConstants(content: string): FlashcardCandidate[] {
  const flashcards: FlashcardCandidate[] = []
  
  // Common physics/math constants patterns
  const constantPatterns = [
    { regex: /speed of light.*?(\d+(?:,\d+)*(?:\.\d+)?.*?m\/s)/i, name: 'Speed of light' },
    { regex: /gravitational constant.*?(\d+(?:\.\d+)?.*?m\/s²?)/i, name: 'Gravitational acceleration' },
    { regex: /Planck'?s? constant.*?(\d+(?:\.\d+)?.*?J·?s)/i, name: 'Planck\'s constant' },
    { regex: /Avogadro'?s? number.*?(\d+(?:\.\d+)?.*?mol)/i, name: 'Avogadro\'s number' },
    { regex: /gas constant.*?R\s*=\s*(\d+(?:\.\d+)?.*?J)/i, name: 'Gas constant' },
    { regex: /π\s*[=≈]\s*(\d+\.\d+)/i, name: 'Pi (π)' },
    { regex: /e\s*[=≈]\s*(\d+\.\d+)/i, name: 'Euler\'s number (e)' },
  ]
  
  for (const pattern of constantPatterns) {
    const match = content.match(pattern.regex)
    if (match) {
      flashcards.push({
        front: `What is the value of ${pattern.name}?`,
        back: match[1],
        type: 'constant'
      })
    }
  }
  
  return flashcards
}

/**
 * Extract key definitions from content
 */
export function extractDefinitions(content: string): FlashcardCandidate[] {
  const flashcards: FlashcardCandidate[] = []
  
  // Match "X is defined as Y" or "X: Y" patterns
  const definitionPatterns = [
    /\*\*([^*]+)\*\*\s+is\s+(?:defined as|the)\s+([^.!?]+[.!?])/gi,
    /\*\*([^*]+)\*\*[:\-]\s+([^.!?]+[.!?])/gi,
    /^#+\s+(.+?)\n\n(.+?)(?:\n\n|$)/gm, // Headers followed by first paragraph
  ]
  
  for (const pattern of definitionPatterns) {
    let match
    while ((match = pattern.exec(content)) !== null) {
      const term = match[1].trim()
      const definition = match[2].trim()
      
      // Skip if too short or too long
      if (term.length > 2 && term.length < 100 && definition.length > 10 && definition.length < 300) {
        flashcards.push({
          front: `What is ${term}?`,
          back: definition,
          hint: `Think about the key characteristic`,
          type: 'definition'
        })
      }
    }
  }
  
  return flashcards
}

/**
 * Extract important concepts and relationships
 */
export function extractConcepts(content: string): FlashcardCandidate[] {
  const flashcards: FlashcardCandidate[] = []
  
  // Look for "Remember" or "Key Point" sections
  const keyPointRegex = /(?:Remember|Key Point|Important|Note)[:\-]\s*(.+?)(?:\n\n|$)/gi
  let match
  while ((match = keyPointRegex.exec(content)) !== null) {
    const concept = match[1].trim()
    if (concept.length > 20 && concept.length < 200) {
      flashcards.push({
        front: `What is an important concept to remember about this topic?`,
        back: concept,
        type: 'concept'
      })
    }
  }
  
  return flashcards
}

/**
 * Main function to auto-generate flashcards from topic content
 */
export function generateFlashcardsFromContent(content: string): FlashcardCandidate[] {
  const allFlashcards: FlashcardCandidate[] = []
  
  // Extract different types of content
  allFlashcards.push(...extractEquations(content))
  allFlashcards.push(...extractConstants(content))
  allFlashcards.push(...extractDefinitions(content))
  allFlashcards.push(...extractConcepts(content))
  
  // Remove duplicates based on front/back similarity
  const uniqueFlashcards = allFlashcards.filter((card, index, self) => 
    index === self.findIndex(c => 
      c.front.toLowerCase() === card.front.toLowerCase() ||
      c.back.toLowerCase() === card.back.toLowerCase()
    )
  )
  
  // Limit to top 10 most important flashcards per topic
  return uniqueFlashcards.slice(0, 10)
}

/**
 * Score flashcard importance based on heuristics
 */
function scoreFlashcard(card: FlashcardCandidate): number {
  let score = 0
  
  // Equations are high priority
  if (card.type === 'equation') score += 10
  
  // Constants are important
  if (card.type === 'constant') score += 8
  
  // Definitions are useful
  if (card.type === 'definition') score += 6
  
  // Has LaTeX math notation
  if (card.back.includes('$')) score += 5
  
  // Reasonable length (not too short, not too long)
  if (card.back.length > 30 && card.back.length < 200) score += 3
  
  return score
}

/**
 * Get the top N most important flashcards
 */
export function getTopFlashcards(cards: FlashcardCandidate[], n: number = 10): FlashcardCandidate[] {
  return cards
    .map(card => ({ card, score: scoreFlashcard(card) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map(item => item.card)
}
