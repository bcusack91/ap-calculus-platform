export const chemEntropySecondLawV3Part6Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    { id: 'en6v3-intro', type: 'text' as const, content: `
# 🔧 Problem-Solving Workshop

**Part 6 of 7 — Timed Practice with Worked Solutions**

AP Chemistry gives you about 90 seconds per free-response sub-part. Let's practice calculating $\\Delta S^\\circ_{\\text{rxn}}$ efficiently.
    ` },
    { id: 'en6v3-method', type: 'text' as const, content: `
## Efficient Calculation Method

$$\\Delta S^\\circ_{\\text{rxn}} = \\sum n \\cdot S^\\circ(\\text{products}) - \\sum n \\cdot S^\\circ(\\text{reactants})$$

**Speed tips:**
1. Write products first, then subtract reactants
2. Don't forget coefficients—they multiply $S^\\circ$ values
3. Keep track of units: $\\text{J/(mol·K)}$

**Reference values for this workshop:**

| Substance | $S^\\circ$ [J/(mol·K)] |
|-----------|----------------------|
| $\\text{N}_2\\text{(g)}$ | 191.6 |
| $\\text{H}_2\\text{(g)}$ | 130.7 |
| $\\text{NH}_3\\text{(g)}$ | 192.8 |
| $\\text{O}_2\\text{(g)}$ | 205.2 |
| $\\text{H}_2\\text{O(g)}$ | 188.8 |
| $\\text{H}_2\\text{O(l)}$ | 69.9 |
| $\\text{CO}_2\\text{(g)}$ | 213.8 |
| $\\text{C(s, graphite)}$ | 5.7 |
    ` },
    { id: 'en6v3-calc1', type: 'input-boxes' as const, content: `
**Problem 1:** $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\to 2\\text{NH}_3\\text{(g)}$

Products: $2 \\times 192.8 = 385.6$

Reactants: $1 \\times 191.6 + 3 \\times 130.7 = 191.6 + 392.1 = 583.7$

Calculate $\\Delta S^\\circ_{\\text{rxn}}$ in J/(mol·K):
    `, exercise: { boxes: 1, correctAnswers: ['-198.1'],
        hint1: 'ΔS° = 385.6 − 583.7',
        explanation: '$\\Delta S^\\circ = 385.6 - 583.7 = -198.1$ J/(mol·K). Negative, as expected: 4 mol gas → 2 mol gas.' } },
    { id: 'en6v3-calc2', type: 'input-boxes' as const, content: `
**Problem 2:** $\\text{C(s, graphite)} + \\text{O}_2\\text{(g)} \\to \\text{CO}_2\\text{(g)}$

Calculate $\\Delta S^\\circ_{\\text{rxn}}$ in J/(mol·K):
    `, exercise: { boxes: 1, correctAnswers: ['2.9'],
        hint1: 'Products: 1 × 213.8 = 213.8. Reactants: 1 × 5.7 + 1 × 205.2 = 210.9.',
        explanation: '$\\Delta S^\\circ = 213.8 - (5.7 + 205.2) = 213.8 - 210.9 = 2.9$ J/(mol·K). Close to zero — same gas moles on both sides. Slightly positive because CO₂ is more complex than O₂.' } },
    { id: 'en6v3-calc3', type: 'input-boxes' as const, content: `
**Problem 3 (Multi-step):**

$2\\text{H}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\to 2\\text{H}_2\\text{O(g)}$

a) Calculate $\\Delta S^\\circ_{\\text{rxn}}$ in J/(mol·K):

b) Now calculate for: $2\\text{H}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\to 2\\text{H}_2\\text{O(l)}$

$\\Delta S^\\circ_{\\text{rxn}}$ in J/(mol·K):
    `, exercise: { boxes: 2, correctAnswers: ['-88.4', '-326.6'],
        hint1: 'Part a: Products: 2 × 188.8 = 377.6. Reactants: 2 × 130.7 + 205.2 = 466.6.',
        hint2: 'Part b: Products: 2 × 69.9 = 139.8. Same reactants: 466.6.',
        explanation: 'a) $377.6 - 466.6 = -88.4$ J/(mol·K). b) $139.8 - 466.6 = -326.6$ J/(mol·K). Forming liquid water gives much more negative $\\Delta S$ because liquid has far less entropy than gas.' } },
    { id: 'en6v3-analysis', type: 'multiple-choice' as const, content: `
**Analysis Questions**
    `, exercise: { questions: [
          { question: 'In Problem 3, why is ΔS° much more negative when H₂O(l) forms vs H₂O(g)?', options: ['Liquid water has higher entropy', 'You lose 3 mol of gas instead of 1 mol', 'The temperature changes', 'The enthalpy is different'], correctAnswer: 1, explanation: 'With H₂O(g): 3 mol gas → 2 mol gas (net -1). With H₂O(l): 3 mol gas → 0 mol gas (net -3). Going from gas to liquid represents a much larger decrease in disorder.' },
          { question: 'A student calculates $\\Delta S^\\circ = +45$ J/(mol·K) for a reaction. Which is most likely true?', options: ['More gas molecules in products', 'All reactants and products are solids', 'Fewer gas molecules in products', 'Temperature must be positive'], correctAnswer: 0, explanation: 'A positive $\\Delta S^\\circ$ most commonly results from a net increase in gas molecules. Solids have such small $S^\\circ$ values that reactions among only solids rarely give +45 J/(mol·K).' }
        ] } },
    { id: 'en6v3-check', type: 'multiple-choice' as const, content: `
**Final Check** ✅
    `, exercise: { questions: [
          { question: 'For $\\Delta S^\\circ_{\\text{rxn}}$ calculations, what units must $S^\\circ$ values be in?', options: ['kJ/(mol·K)', 'J/(mol·K)', 'J/K', 'cal/(mol·K)'], correctAnswer: 1, explanation: 'Standard molar entropy values are tabulated in J/(mol·K). Be careful when combining with ΔH (which is in kJ) — you must convert!' }
        ] } }
  ]
}
