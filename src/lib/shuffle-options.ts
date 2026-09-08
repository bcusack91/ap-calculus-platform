/**
 * Deterministically shuffle multiple-choice options using a seeded PRNG.
 * Ensures the correct answer position is uniformly distributed across questions
 * while remaining stable across re-renders for the same seed.
 */
/**
 * Uniform Fisher-Yates shuffle. Returns a NEW array; the input is not mutated.
 * Use this instead of the biased `.sort(() => Math.random() - 0.5)` idiom.
 */
export function shuffleArray<T>(arr: readonly T[]): T[] {
  const result = arr.slice()
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function shuffleOptions(
  options: string[],
  correctIndex: number,
  seed: string,
): { options: string[]; correctIndex: number } {
  if (options.length <= 1) return { options, correctIndex }

  // Simple string hash (djb2-variant)
  let hash = 5381
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) + hash + seed.charCodeAt(i)) | 0
  }

  // Fisher-Yates shuffle with LCG PRNG
  const indices = options.map((_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    hash = (hash * 1664525 + 1013904223) | 0
    const j = ((hash >>> 0) % (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }

  return {
    options: indices.map(i => options[i]),
    correctIndex: indices.indexOf(correctIndex),
  }
}
