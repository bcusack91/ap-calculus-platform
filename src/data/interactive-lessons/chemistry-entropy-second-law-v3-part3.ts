export const chemEntropySecondLawV3Part3Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    { id: 'en3v3-intro', type: 'text' as const, content: `
# ⚡ Second Law Mastery

**Part 3 of 7 — The Universe Always Wins**

The Second Law isn't just about disorder — it's the fundamental rule that determines which processes happen and which don't. Let's master it through practice.
    ` },
    { id: 'en3v3-core', type: 'text' as const, content: `
## Second Law Essentials

### The Rule

$$\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0 \\quad \\text{(spontaneous)}$$

### Connecting to Enthalpy

$$\\Delta S_{\\text{surr}} = \\frac{-\\Delta H_{\\text{sys}}}{T}$$

### Four Scenarios

| $\\Delta H$ | $\\Delta S_{\\text{sys}}$ | Spontaneous? | Example |
|-----------|---------------------|-------------|---------|
| − | + | Always | Combustion |
| + | − | Never | Electrolysis of water (requires input) |
| − | − | Low T only | Freezing water |
| + | + | High T only | Dissolving NH₄NO₃ |
    ` },
    { id: 'en3v3-practice', type: 'input-boxes' as const, content: `
**Second Law Calculations** 🧮

For a reaction with $\\Delta H = -120$ kJ and $\\Delta S_{\\text{sys}} = -250$ J/K at $T = 300$ K:

1) Calculate $\\Delta S_{\\text{surr}}$ in J/K.

2) Calculate $\\Delta S_{\\text{univ}}$ in J/K.

3) Is this spontaneous? (type yes or no)
    `, exercise: { boxes: 3, correctAnswers: ['400', '150', 'yes'],
        hint1: '$\\Delta S_{\\text{surr}} = -(-120{,}000)/300$',
        hint2: '$\\Delta S_{\\text{univ}} = -250 + 400$',
        hint3: 'Is the result positive?',
        explanation: '1) $\\Delta S_{\\text{surr}} = 120{,}000/300 = 400$ J/K. 2) $\\Delta S_{\\text{univ}} = -250 + 400 = 150$ J/K. 3) Yes — $\\Delta S_{\\text{univ}} > 0$.' } },
    { id: 'en3v3-quiz', type: 'multiple-choice' as const, content: `
**Conceptual Check** 🎯
    `, exercise: { questions: [
          { question: 'A refrigerator moves heat from cold to hot. Does this violate the Second Law?', options: ['Yes — heat cannot flow from cold to hot', 'No — electrical work input increases the total entropy of the universe', 'Yes — entropy of the food decreases', 'No — refrigerators are exempt from thermodynamic laws'], correctAnswer: 1, explanation: 'The refrigerator uses work (electricity) to move heat. The total entropy increase from electricity generation exceeds the local entropy decrease, so $\\Delta S_{\\text{univ}} > 0$.' },
          { question: 'At what temperature does a reaction with $\\Delta H = +60$ kJ and $\\Delta S = +200$ J/K become spontaneous?', options: ['100 K', '200 K', '300 K', '400 K'], correctAnswer: 2, explanation: '$T = \\Delta H/\\Delta S = 60{,}000/200 = 300$ K. Above 300 K, the $T\\Delta S$ term dominates and the reaction becomes spontaneous.' }
        ] } },
    { id: 'en3v3-dropdown', type: 'dropdown-select' as const, content: `
**Classify** 🔽
    `, exercise: { dropdowns: [
          { label: '$\\Delta H = -80$ kJ, $\\Delta S = +100$ J/K at 298 K is', options: ['always spontaneous', 'never spontaneous', 'spontaneous at low T only', 'spontaneous at high T only'] },
          { label: '$\\Delta H = +200$ kJ, $\\Delta S = -50$ J/K at 298 K is', options: ['always spontaneous', 'never spontaneous', 'spontaneous at low T only', 'spontaneous at high T only'] },
          { label: 'An ice cube melting at 25°C has $\\Delta S_{\\text{sys}}$', options: ['positive', 'negative', 'zero', 'undefined'] }
        ], correctAnswers: ['always spontaneous', 'never spontaneous', 'positive'],
        hint1: 'Both factors favor spontaneity (exothermic + entropy increase).',
        hint2: 'Both factors oppose spontaneity.',
        hint3: 'Solid → liquid increases disorder.',
        explanation: '-H, +S = always spontaneous. +H, -S = never spontaneous. Melting increases microstates → positive ΔS.' } },
    { id: 'en3v3-exit', type: 'multiple-choice' as const, content: `
**Exit Check** ✅
    `, exercise: { questions: [
          { question: 'The key insight of the Second Law is:', options: ['Energy is conserved', 'The universe tends toward maximum entropy', 'Reactions always release heat', 'Entropy is conserved'], correctAnswer: 1, explanation: 'The Second Law says $\\Delta S_{\\text{univ}} > 0$ for spontaneous processes — the universe always moves toward higher total entropy.' }
        ] } }
  ]
}
