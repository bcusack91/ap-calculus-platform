export const chemEntropySecondLawV3Part2Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    { id: 'en2v3-intro', type: 'text' as const, content: `
# 🧪 Comparing Entropies

**Part 2 of 7 — Particle-Level Comparisons**

Let's build intuition for **which sample has more entropy** and **why**, using the two kinds of dispersal from Part 1.
    ` },
    { id: 'en2v3-dispersal-types', type: 'text' as const, content: `
## Matter Dispersal vs. Energy Dispersal

| Kind of dispersal | What changes | Examples of higher entropy |
|-------------------|--------------|----------------------------|
| **Matter** | How freely particles move and how much space they occupy | Gas > liquid > solid; larger volume of the same gas; dissolved ions vs. a crystal |
| **Energy** | How broadly kinetic energy is spread among the particles | The same substance at a higher temperature |

### Which Effect Is Biggest?

For the sign of an entropy change, **changes in the amount of gas** (and phase changes into or out of the gas phase) usually dominate, because gas particles are so much more dispersed than particles in a liquid or solid.

### Temperature's Role

Higher $T$ → the distribution of kinetic energies broadens → energy is more dispersed → higher $S$. This is true for every substance (CED 9.1.A.2).
    ` },
    { id: 'en2v3-practice', type: 'input-boxes' as const, content: `
**Which Has More Entropy?** 🧮

**1)** 1 mol Ne(g) in 1 L or in 10 L, both at 300 K? (type **1** or **10**)

**2)** 1 mol $\\text{H}_2\\text{O}(l)$ at 20 °C or at 80 °C? (type **20** or **80**)

**3)** 1 mol solid NaCl or 1 mol NaCl dissolved in water? (type **solid** or **dissolved**)
    `, exercise: { questions: [{ question: '(1)', answer: '10', acceptableAnswers: ['10', '10 L'] }, { question: '(2)', answer: '80', acceptableAnswers: ['80', '80 C', '80 °C'] }, { question: '(3)', answer: 'dissolved', acceptableAnswers: ['dissolved', 'aqueous', 'aq'] }],
        hint1: 'Same temperature; which sample is more spread out?',
        hint2: 'Which sample has the broader spread of kinetic energies?',
        hint3: 'Ions locked in a crystal or ions spread through water?',
        explanation: '1) 10 L: the gas is dispersed through a larger volume. 2) 80 °C: energy is more dispersed at the higher temperature. 3) Dissolved: the ions spread through the solution instead of sitting in a crystal lattice.' } },
    { id: 'en2v3-quiz', type: 'multiple-choice' as const, content: `
**Concept Questions** 🎯
    `, exercise: { questions: [
          { question: 'Why does a gas at 500 K have higher entropy than the same gas at 300 K in the same container?', options: ['There are more molecules present at the higher temperature', 'The kinetic energies are spread over a broader range', 'The gas expands, so it fills a larger volume at higher T', 'Chemical bonds vibrate faster, so the gas holds more heat'], correctAnswer: 1, explanation: 'At higher temperature the distribution of kinetic energies broadens, so energy is more dispersed and entropy is higher. The amount of gas is unchanged, the container fixes the volume, and "holding more heat" is not what entropy measures.' },
          { question: 'Which change produces the LARGEST increase in entropy for 1 mol of water?', options: ['Warming the liquid from 20 °C to 30 °C', 'Melting ice at 0 °C', 'Boiling the liquid at 100 °C', 'Cooling steam from 120 °C to 110 °C'], correctAnswer: 2, explanation: 'Boiling turns a liquid into a gas that fills a vastly larger volume, the biggest jump in dispersal. Melting is a smaller increase, warming the liquid by 10 °C is smaller still, and cooling steam decreases entropy.' }
        ] } },
    { id: 'en2v3-dropdown', type: 'dropdown-select' as const, content: `
**Complete** 🔽
    `, exercise: { dropdowns: [
          { label: 'Doubling the volume available to a gas at constant temperature', options: ['increases its entropy', 'decreases its entropy', 'does not change its entropy', 'makes its entropy zero'] },
          { label: 'The most likely distribution of gas molecules in a container is', options: ['all on one side', 'evenly spread out', 'clustered in corners', 'stacked at the bottom'] },
          { label: 'Energy dispersal in a substance increases with', options: ['pressure', 'temperature', 'concentration', 'molar mass only'] }
        ], correctAnswers: ['increases its entropy', 'evenly spread out', 'temperature'],
        hint1: 'More volume = more space to spread into.',
        hint2: 'Spread-out arrangements vastly outnumber clustered ones.',
        hint3: 'A higher temperature broadens the energy distribution.',
        explanation: 'More volume lets a gas disperse, raising entropy. An even spread is overwhelmingly the most likely arrangement. Temperature controls how broadly energy is distributed.' } },
    { id: 'en2v3-exit', type: 'multiple-choice' as const, content: `
**Exit Check** ✅
    `, exercise: { questions: [
          { question: "Which factor usually has the LARGEST effect on a substance's entropy?", options: ['The molar mass of the substance', 'The physical state of the substance', 'The number of atoms in each formula unit', 'The pressure applied to a solid sample'], correctAnswer: 1, explanation: 'Physical state (phase) usually has the largest effect: gas particles are far more dispersed than particles in a liquid or solid. Molar mass, molecular complexity, and pressure on a solid matter much less than the jump from solid or liquid to gas.' }
        ] } }
  ]
}
