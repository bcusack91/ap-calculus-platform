/**
 * Parse pasted text or CSV into flashcard term/definition pairs.
 *
 * Accepts the common Quizlet/Knowt export shapes: one card per line, with the
 * term and definition separated by a TAB (Quizlet's default) or a comma. The
 * split is on the FIRST separator only, so a definition may itself contain
 * commas (e.g. "a, b, and c").
 */
export interface ParsedCard {
  front: string
  back: string
}

const MAX_FRONT = 500
const MAX_BACK = 1000

export function parseFlashcardInput(
  input: string,
  maxCards = 500,
): { cards: ParsedCard[]; errors: string[] } {
  const cards: ParsedCard[] = []
  const errors: string[] = []
  if (typeof input !== 'string') return { cards, errors: ['No input provided'] }

  const lines = input.split(/\r?\n/)
  lines.forEach((raw, i) => {
    const line = raw.trim()
    if (!line) return // skip blank lines silently

    // Prefer a tab separator (Quizlet default); fall back to the first comma.
    let sep = line.indexOf('\t')
    if (sep < 0) sep = line.indexOf(',')
    if (sep < 0) {
      errors.push(`Line ${i + 1}: no tab or comma separating term and definition`)
      return
    }

    const front = line.slice(0, sep).trim()
    const back = line.slice(sep + 1).trim()
    if (!front || !back) {
      errors.push(`Line ${i + 1}: missing term or definition`)
      return
    }

    if (cards.length < maxCards) {
      cards.push({ front: front.slice(0, MAX_FRONT), back: back.slice(0, MAX_BACK) })
    }
  })

  return { cards, errors }
}
