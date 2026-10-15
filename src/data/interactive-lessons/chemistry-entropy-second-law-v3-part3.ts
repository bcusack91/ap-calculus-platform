export const chemEntropySecondLawV3Part3Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    { id: 'en3v3-intro', type: 'text' as const, content: `
# ⚡ Energy vs. Dispersal

**Part 3 of 7 — What Decides a Process's Direction**

Matter and energy tend to spread out, and systems tend to release energy. Whether a process is **thermodynamically favored** depends on both tendencies together. Let's master the four possible combinations through practice.
    ` },
    { id: 'en3v3-core', type: 'text' as const, content: `
## Favorability Essentials

### Two Factors

- **Energy factor:** $\\Delta H < 0$ (exothermic) favors a process.
- **Dispersal factor:** $\\Delta S > 0$ favors a process.
- **Temperature** sets how much the dispersal factor counts: the higher the temperature, the more it matters.

### Four Scenarios

| $\\Delta H$ | $\\Delta S$ | Thermodynamically favored? | Example |
|-----------|------------|---------------------------|---------|
| − | + | At all temperatures | Combustion of a fuel |
| + | − | At no temperature | Decomposing water into $\\text{H}_2$ and $\\text{O}_2$ without electrical input |
| − | − | At low temperature only | Freezing water |
| + | + | At high temperature only | Dissolving $\\text{NH}_4\\text{NO}_3$ is favored at room temperature and above |

> 💡 "Thermodynamically favored" is the CED's preferred phrase for what older books call "spontaneous." It says nothing about how fast a process happens (CED 9.3.A.2, 9.4).
    ` },
    { id: 'en3v3-practice', type: 'input-boxes' as const, content: `
**Favorability Practice** 🧮

For a reaction with $\\Delta H° = -120$ kJ and $\\Delta S° = -250$ J/K:

**1)** Which factor favors the reaction? (type **enthalpy** or **entropy**)

**2)** At what temperature do the two factors balance? Use $T = \\Delta H°/\\Delta S°$. (in K)

**3)** Is the reaction favored at 300 K? (type yes or no)
    `, exercise: { questions: [{ question: '(1)', answer: 'enthalpy', acceptableAnswers: ['enthalpy', 'energy', 'ΔH'] }, { question: '(2)', answer: '480', acceptableAnswers: ['480', '480 K'] }, { question: '(3)', answer: 'yes', acceptableAnswers: ['yes'] }],
        hint1: 'Which sign is favorable: ΔH < 0 or ΔS < 0?',
        hint2: '$T = -120{,}000 / -250$',
        hint3: 'Below the balance temperature, the favorable enthalpy factor wins.',
        explanation: '1) Enthalpy: ΔH < 0 favors the reaction, while ΔS < 0 opposes it. 2) $T = 120{,}000/250 = 480$ K. 3) Yes: 300 K is below 480 K, so the energy factor dominates and the reaction is favored.' } },
    { id: 'en3v3-quiz', type: 'multiple-choice' as const, content: `
**Conceptual Check** 🎯
    `, exercise: { questions: [
          { question: 'Dissolving ammonium nitrate in water makes the water cold, yet the salt dissolves readily. Which statement explains this?', options: ['The process is exothermic, so it releases the energy that drives it', 'The increase in dispersal of the ions outweighs the unfavorable energy change', 'Cold solutions always favor dissolving', 'The salt has no activation energy for dissolving'], correctAnswer: 1, explanation: 'Dissolving is endothermic (the water cools), which is unfavorable, but the ions spread through the solution, a large favorable entropy increase. At room temperature the entropy factor wins. Activation energy affects rate, not favorability.' },
          { question: 'At what temperature does a reaction with $\\Delta H = +60$ kJ and $\\Delta S = +200$ J/K become thermodynamically favored?', options: ['0.3 K', '3.3 K', '300 K', '12,000 K'], correctAnswer: 2, explanation: '$T = \\Delta H/\\Delta S = 60{,}000/200 = 300$ K. Above 300 K, the $T\\Delta S$ term dominates and the reaction becomes favored. Leaving ΔH in kJ gives 0.3 K, dividing ΔS by ΔH gives 3.3 K, and multiplying (60 × 200) gives 12,000 K.' }
        ] } },
    { id: 'en3v3-dropdown', type: 'dropdown-select' as const, content: `
**Classify** 🔽
    `, exercise: { dropdowns: [
          { label: '$\\Delta H = -80$ kJ, $\\Delta S = +100$ J/K is', options: ['favored at all T', 'favored at no T', 'favored at low T only', 'favored at high T only'] },
          { label: '$\\Delta H = +200$ kJ, $\\Delta S = -50$ J/K is', options: ['favored at all T', 'favored at no T', 'favored at low T only', 'favored at high T only'] },
          { label: 'An ice cube melting at 25°C has $\\Delta S$', options: ['positive', 'negative', 'zero', 'undefined'] }
        ], correctAnswers: ['favored at all T', 'favored at no T', 'positive'],
        hint1: 'Both factors favor the process (exothermic + entropy increase).',
        hint2: 'Both factors oppose the process.',
        hint3: 'Solid → liquid increases dispersal.',
        explanation: '−H, +S = favored at all T. +H, −S = never favored. Melting lets the molecules move past one another, so ΔS is positive.' } },
    { id: 'en3v3-exit', type: 'multiple-choice' as const, content: `
**Exit Check** ✅
    `, exercise: { questions: [
          { question: 'Which statement best describes how ΔH and ΔS determine whether a process is thermodynamically favored?', options: ['Only ΔH matters; exothermic processes are always favored', 'Each matters, and temperature decides the outcome when they disagree', 'Only ΔS matters; processes that increase entropy are always favored', 'Neither matters; only the activation energy decides'], correctAnswer: 1, explanation: 'Favorability depends on both factors. When they agree, the answer is the same at every temperature; when they compete, the energy factor wins at low T and the entropy factor wins at high T. Activation energy affects only the rate.' }
        ] } }
  ]
}
