// Planted rendering bugs — consumed ONLY by tests/lib/rendering-gate.test.ts
// to prove the content gate fails when it should. Never imported by the app.
export const probeBad = {
  garble: 'Tickets cost $5 for kids and $9 for adults today.',
  katex: 'Compute $\\frac{1}{$ now.',
  rawtex: 'The answer is \\frac{1}{2} of the total.',
}
