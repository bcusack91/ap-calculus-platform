export const chemEntropySecondLawV3Part7Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    { id: 'en7v3-intro', type: 'text' as const, content: `
# 🏆 Synthesis & AP Review

**Part 7 of 7 — Pulling It All Together**

This final section connects entropy concepts to Gibbs free energy and tests your readiness for AP-level questions.
    ` },
    { id: 'en7v3-gibbs', type: 'text' as const, content: `
## The Gibbs Connection

$$\\Delta G = \\Delta H - T\\Delta S$$

| $\\Delta H$ | $\\Delta S$ | $\\Delta G$ | Spontaneous? |
|-----------|-----------|-----------|-------------|
| − | + | Always − | Always spontaneous |
| + | − | Always + | Never spontaneous |
| − | − | − at low T | Spontaneous at low T |
| + | + | − at high T | Spontaneous at high T |

**Key insight:** When $\\Delta H$ and $\\Delta S$ have the same sign, temperature determines spontaneity.

$$T_{\\text{crossover}} = \\frac{\\Delta H}{\\Delta S}$$
    ` },
    { id: 'en7v3-classify', type: 'dropdown-select' as const, content: `
**Classify Each Reaction** 🔽

For each process, identify whether it is always, never, or conditionally spontaneous:
    `, exercise: { dropdowns: [
          { label: '$\\Delta H < 0$, $\\Delta S > 0$', options: ['Always spontaneous', 'Never spontaneous', 'Spontaneous at low T only', 'Spontaneous at high T only'] },
          { label: '$\\Delta H > 0$, $\\Delta S > 0$', options: ['Always spontaneous', 'Never spontaneous', 'Spontaneous at low T only', 'Spontaneous at high T only'] },
          { label: '$\\Delta H < 0$, $\\Delta S < 0$', options: ['Always spontaneous', 'Never spontaneous', 'Spontaneous at low T only', 'Spontaneous at high T only'] },
          { label: '$\\Delta H > 0$, $\\Delta S < 0$', options: ['Always spontaneous', 'Never spontaneous', 'Spontaneous at low T only', 'Spontaneous at high T only'] }
        ], correctAnswers: ['Always spontaneous', 'Spontaneous at high T only', 'Spontaneous at low T only', 'Never spontaneous'],
        hint1: 'ΔG = ΔH − TΔS. If ΔH < 0 and ΔS > 0, both terms make ΔG negative.',
        hint2: 'If both are positive, ΔG = (+) − T(+). At high T, the TΔS term dominates.',
        explanation: '(−,+): Both terms drive ΔG negative → always. (+,+): Need high T so TΔS > ΔH. (−,−): Need low T so |ΔH| > T|ΔS|. (+,−): Both terms make ΔG positive → never.' } },
    { id: 'en7v3-crossover', type: 'input-boxes' as const, content: `
**Crossover Temperature**

A reaction has $\\Delta H = +44.0$ kJ/mol and $\\Delta S = +118.8$ J/(mol·K).

**1)** Convert $\\Delta H$ to J/mol:

**2)** Calculate $T_{\\text{crossover}} = \\Delta H / \\Delta S$ (in K, round to nearest whole number):

**3)** Is this reaction spontaneous at 400 K?
    `, exercise: { boxes: 3, correctAnswers: ['44000', '370', 'Yes'],
        hint1: '44.0 kJ × 1000 = 44000 J.',
        hint2: '44000 / 118.8 ≈ 370 K.',
        hint3: '400 K > 370 K, and ΔS > 0, so TΔS term dominates.',
        explanation: '1) 44000 J/mol. 2) 44000/118.8 ≈ 370 K. 3) Yes — at 400 K > 370 K, the TΔS term exceeds ΔH, making ΔG < 0.' } },
    { id: 'en7v3-ap-mc', type: 'multiple-choice' as const, content: `
**AP-Style Multiple Choice** 📝
    `, exercise: { questions: [
          { question: 'Ice melts spontaneously above 273 K. Which best describes this process?', options: ['ΔH < 0, ΔS < 0', 'ΔH > 0, ΔS > 0, spontaneous at high T', 'ΔH < 0, ΔS > 0, always spontaneous', 'ΔH > 0, ΔS < 0, never spontaneous'], correctAnswer: 1, explanation: 'Melting is endothermic (ΔH > 0, must add heat) and increases entropy (ΔS > 0, liquid more disordered). It becomes spontaneous above 273 K when TΔS > ΔH.' },
          { question: 'The Second Law states that for any spontaneous process, $\\Delta S_{\\text{universe}}$ must be:', options: ['Negative', 'Zero', 'Positive', 'Equal to ΔH/T'], correctAnswer: 2, explanation: 'The Second Law: $\\Delta S_{\\text{universe}} > 0$ for all spontaneous processes. The universe always trends toward greater total entropy.' },
          { question: 'A reaction has $\\Delta G^\\circ = -30$ kJ/mol at 298 K. If $\\Delta S^\\circ = +100$ J/(mol·K), what happens to spontaneity at 500 K?', options: ['Less spontaneous (ΔG becomes less negative)', 'More spontaneous (ΔG becomes more negative)', 'No change', 'Cannot determine'], correctAnswer: 1, explanation: 'Since ΔS > 0, increasing T makes the −TΔS term more negative, making ΔG more negative. The reaction becomes MORE spontaneous at higher temperature.' },
          { question: 'Which has the highest standard molar entropy?', options: ['Fe(s) at 298 K', 'H₂O(l) at 298 K', 'H₂O(g) at 298 K', 'NaCl(s) at 298 K'], correctAnswer: 2, explanation: 'Gases have much higher entropy than liquids or solids. H₂O(g) has the highest S° among these choices. S°(H₂O(g)) = 188.8 J/(mol·K) vs S°(H₂O(l)) = 69.9.' }
        ] } },
    { id: 'en7v3-final', type: 'multiple-choice' as const, content: `
**Final Concept Check** ✅
    `, exercise: { questions: [
          { question: 'A student says: "An endothermic reaction can never be spontaneous." Is this correct?', options: ['Yes — endothermic means non-spontaneous', 'No — if ΔS is positive enough and T is high enough, ΔG can be negative', 'No — all endothermic reactions are spontaneous at room temperature', 'It depends on pressure only'], correctAnswer: 1, explanation: 'Incorrect statement! If ΔS > 0, then at sufficiently high temperature, TΔS > ΔH and ΔG < 0. Example: ice melting above 273 K, dissolving NH₄NO₃ in water.' }
        ] } }
  ]
}
