export const chemEntropySecondLawV3Part5Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    { id: 'en5v3-intro', type: 'text' as const, content: `
# 🎯 Prediction Bootcamp

**Part 5 of 7 — Rapid-Fire $\\Delta S$ Predictions**

The AP exam demands fast, confident sign predictions. Let's drill until it's automatic.
    ` },
    { id: 'en5v3-rules', type: 'text' as const, content: `
## Decision Flowchart

**Step 1:** Count moles of gas on each side.
- More gas in products → $\\Delta S > 0$
- Fewer gas in products → $\\Delta S < 0$
- Same gas moles → look at other factors

**Step 2:** Check for phase changes.
- Solid → liquid, liquid → gas → $\\Delta S > 0$
- Gas → liquid, liquid → solid → $\\Delta S < 0$

**Step 3:** Check for dissolving.
- Solid dissolving → usually $\\Delta S > 0$
- Precipitation → usually $\\Delta S < 0$

**Step 4:** Check complexity.
- Simpler → more complex molecules (same phase) → slight $\\Delta S > 0$
    ` },
    { id: 'en5v3-rapid', type: 'dropdown-select' as const, content: `
**Rapid-Fire Round** 🔽

Predict $\\Delta S$ sign for each:
    `, exercise: { dropdowns: [
          { label: '$\\text{I}_2\\text{(s)} \\to \\text{I}_2\\text{(g)}$', options: ['positive', 'negative', 'zero'] },
          { label: '$\\text{3 O}_2\\text{(g)} \\to \\text{2 O}_3\\text{(g)}$', options: ['positive', 'negative', 'zero'] },
          { label: '$\\text{KNO}_3\\text{(s)} \\to \\text{K}^+\\text{(aq)} + \\text{NO}_3^-\\text{(aq)}$', options: ['positive', 'negative', 'zero'] },
          { label: '$\\text{2 Mg(s)} + \\text{O}_2\\text{(g)} \\to \\text{2 MgO(s)}$', options: ['positive', 'negative', 'zero'] },
          { label: '$\\text{PCl}_5\\text{(g)} \\to \\text{PCl}_3\\text{(g)} + \\text{Cl}_2\\text{(g)}$', options: ['positive', 'negative', 'zero'] }
        ], correctAnswers: ['positive', 'negative', 'positive', 'negative', 'positive'],
        hint1: 'Solid → gas = huge entropy increase.',
        hint2: '3 mol gas → 2 mol gas.',
        hint3: 'Solid dissolves into ions in solution.',
        explanation: 'Sublimation: +(s→g). $O_{2}$→$O_{3}$: −(3mol→2mol gas). Dissolving: +(ordered solid → spread ions). $Mg+O_{2}$: −(1mol gas→0). $PCl_{5}$ decomposition: +(1mol→2mol gas).' } },
    { id: 'en5v3-tricky', type: 'multiple-choice' as const, content: `
**Tricky Cases** 🎯
    `, exercise: { questions: [
          { question: 'For $\\text{H}_2\\text{(g)} + \\text{Cl}_2\\text{(g)} \\to \\text{2 HCl(g)}$, $\\Delta S$ is approximately:', options: ['Very positive', 'Very negative', 'Close to zero (slightly positive)', 'Cannot predict'], correctAnswer: 2, explanation: '2 mol gas → 2 mol gas. Same number of gas moles, so $\\Delta S \\approx 0$. In reality slightly positive because HCl has more vibrational modes.' },
          { question: 'Mixing 50 mL of 1M HCl with 50 mL of 1M NaOH (neutralization) — $\\Delta S_{\\text{sys}}$ is:', options: ['Very positive', 'Close to zero or slightly negative', 'Very negative', 'Exactly zero'], correctAnswer: 1, explanation: 'Ions in solution combine with water to form more water molecules. The solution becomes slightly more organized as ion concentration decreases. $\\Delta S_{\\text{sys}}$ is close to zero or slightly negative.' }
        ] } },
    { id: 'en5v3-practice', type: 'input-boxes' as const, content: `
**Applying the Rules** 🧮

For each reaction, determine the net change in moles of GAS.

**1)** $\\text{CaCO}_3\\text{(s)} \\to \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$: Net change in gas moles = ?

**2)** $\\text{N}_2\\text{(g)} + \\text{3 H}_2\\text{(g)} \\to \\text{2 NH}_3\\text{(g)}$: Net change in gas moles = ?

**3)** $\\text{4 NH}_3\\text{(g)} + \\text{5 O}_2\\text{(g)} \\to \\text{4 NO(g)} + \\text{6 H}_2\\text{O(g)}$: Net change in gas moles = ?
    `, exercise: { boxes: 3, correctAnswers: ['+1', '-2', '+1'],
        hint1: '0 mol gas → 1 mol gas.',
        hint2: '4 mol gas → 2 mol gas.',
        hint3: '9 mol gas → 10 mol gas.',
        explanation: '1) 0→1 = +1 (positive ΔS). 2) 4→2 = −2 (negative ΔS). 3) 9→10 = +1 (positive ΔS, despite 9 gas molecules — the net gain matters).' } },
    { id: 'en5v3-exit', type: 'multiple-choice' as const, content: `
**Exit Check** ✅
    `, exercise: { questions: [
          { question: 'What is the MOST reliable predictor of $\\Delta S$ sign for a chemical reaction?', options: ['Whether it is exothermic', 'The net change in moles of gas', 'The number of reactants vs products', 'The temperature'], correctAnswer: 1, explanation: 'Gas molecules have enormously higher entropy than any condensed phase. The net change in moles of gas is the most reliable predictor of the sign of $\\Delta S$.' }
        ] } }
  ]
}
