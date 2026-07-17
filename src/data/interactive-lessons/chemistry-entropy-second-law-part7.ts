export const chemEntropySecondLawPart7Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en7-intro',
      type: 'text' as const,
      content: `# 🎯 Synthesis & AP Review — Entropy

**Part 7 of 7 — Bringing It All Together**

---

### Bringing It All Together

This comprehensive review connects every concept from Parts 1–6 with AP-style problems. The questions are designed to mirror what you'll see on the actual exam — multi-step, multi-concept, and requiring clear written explanations.

> 🔑 **Why this matters:** AP Chemistry exam questions rarely test one concept in isolation — success requires connecting ideas across topics.

---

### What You'll Master in Part 7
- Solving AP-style questions that integrate multiple concepts from this unit
- Writing clear, concise explanations using proper chemistry terminology
- Identifying and avoiding common AP exam traps and mistakes`
    },
    {
      id: 'en7-summary',
      type: 'text' as const,
      content: `
## 📌 Complete Concept Map

### Entropy Fundamentals

| Concept | Key Equation/Idea |
|---------|------------------|
| Boltzmann equation | $S = k_B \\ln W$ |
| More microstates | Higher entropy |
| Phase order | $S_{\\text{solid}} < S_{\\text{liquid}} \\ll S_{\\text{gas}}$ |
| Third Law | $S = 0$ for perfect crystal at 0 K |


---

### Predicting and Calculating ΔS

| Method | Approach |
|--------|----------|
| Qualitative | Count $\\Delta n_{\\text{gas}}$; more gas → higher S |
| Quantitative | $\\Delta S° = \\sum n S°(\\text{prod}) - \\sum m S°(\\text{react})$ |
| Phase transition | $\\Delta S = \\Delta H_{\\text{trans}}/T_{\\text{trans}}$ |
| Surroundings | $\\Delta S_{\\text{surr}} = -\\Delta H_{\\text{sys}}/T$ |


---

### Spontaneity

| $\\Delta H$ | $\\Delta S$ | Spontaneity |
|-----------|-----------|-------------|
| − | + | Always spontaneous |
| + | − | Never spontaneous |
| − | − | Spontaneous at low T |
| + | + | Spontaneous at high T |

> 🔑 **Key Concept:** Memorize this table — it determines spontaneity via $\\Delta G = \\Delta H - T\\Delta S$.


---

> ⚠️ **Warning:** $\\Delta H$ is in **kJ** and $\\Delta S$ is in **J/K** — always convert before combining in $\\Delta G = \\Delta H - T\\Delta S$!
      `
    },
    {
      id: 'en7-comprehensive-quiz',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive AP Review Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following processes has a NEGATIVE ΔS?',
            options: [
              'Evaporation of ethanol',
              '$2NO_{2}(g)$ → $N_{2}O_{4}(g)$',
              'Dissolving sugar in water',
              '$CaCO_{3}(s)$ → CaO(s) + $CO_{2}(g)$'
            ],
            correctAnswer: 1,
            explanation: '$2\\text{NO}_2(g) \\rightarrow \\text{N}_2\\text{O}_4(g)$: $\\Delta n_{\\text{gas}} = 1 - 2 = -1$. Fewer moles of gas = lower entropy. All other options increase entropy.'
          },
          {
            question: 'The standard molar entropy of $N_{2}(g)$ is 191.6 J/(mol·K). This value is NOT zero because:',
            options: [
              '$N_{2}$ has a very high molar mass',
              '$N_{2}$ is not in its standard state',
              'All substances have S° > 0 at temperatures above 0 K',
              '$N_{2}$ is a molecule, not an atom'
            ],
            correctAnswer: 2,
            explanation: 'By the Third Law, S = 0 only at 0 K for a perfect crystal. At any temperature above 0 K (including standard 298 K), all substances have positive entropy. This is true for elements AND compounds alike.'
          },
          {
            question: 'A reaction has ΔH° = −40 kJ and ΔS° = −120 J/K. At 500 K, ΔG° is:',
            options: [
              '−100 kJ',
              '+20 kJ',
              '−20 kJ',
              '+100 kJ'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G° = \\Delta H° - T\\Delta S° = -40 - (500)(-0.120) = -40 + 60 = +20$ kJ. At 500 K, the reaction is nonspontaneous because the entropy penalty ($T\\Delta S$) outweighs the enthalpy benefit.'
          }
        ]
      }
    },
    {
      id: 'en7-integration-drill',
      type: 'input-boxes' as const,
      content: `
**Integration Problems** 🧮

**1)** At what temperature does a reaction with $\\Delta H = -90$ kJ and $\\Delta S = -300$ J/K become nonspontaneous? (in K)

**2)** Calculate $\\Delta S_{\\text{universe}}$ for an exothermic reaction with $\\Delta H = -200$ kJ, $\\Delta S_{\\text{sys}} = -50$ J/K, at $T = 298$ K. (in J/K, round to nearest whole number)

**3)** Is the process in (2) spontaneous? (type "yes" or "no")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['300', '621', 'yes'],
        hint1: '$T = \\Delta H/\\Delta S = -90{,}000 / -300$. Above this T, $\\Delta G > 0$.',
        hint2: '$\\Delta S_{\\text{surr}} = -\\Delta H/T = -(-200{,}000)/298$. Then add $\\Delta S_{\\text{sys}}$.',
        hint3: 'Is $\\Delta S_{\\text{universe}} > 0$?',
        explanation: '1) $T = \\Delta H/\\Delta S = -90{,}000/-300 = 300$ K. Above 300 K, the reaction is nonspontaneous. 2) $\\Delta S_{\\text{surr}} = 200{,}000/298 = 671$ J/K. $\\Delta S_{\\text{univ}} = -50 + 671 = 621$ J/K. 3) Yes, $\\Delta S_{\\text{univ}} > 0$.'
      }
    },
    {
      id: 'en7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Review** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Boltzmann constant k_B relates entropy to',
            options: ['temperature', 'pressure', 'the number of microstates', 'molar mass']
          },
          {
            label: 'A reaction with ΔH < 0 and ΔS < 0 is spontaneous at',
            options: ['all temperatures', 'no temperature', 'low temperatures', 'high temperatures']
          },
          {
            label: 'The entropy of the universe for any real process',
            options: ['decreases', 'stays constant', 'increases', 'is undefined']
          },
          {
            label: 'To calculate ΔG from ΔH and ΔS, temperature must be in',
            options: ['°C', 'K', '°F', 'any unit']
          }
        ],
        correctAnswers: ['the number of microstates', 'low temperatures', 'increases', 'K'],
        hint1: '$S = k_B \\ln W$ — W is the number of microstates.',
        hint2: '$\\Delta G = \\Delta H - T\\Delta S$. At low T, ΔH dominates (and it\'s negative → spontaneous).',
        hint3: 'The Second Law: $\\Delta S_{\\text{univ}} > 0$ for all spontaneous processes.',
        explanation: '$S = k_B \\ln W$ connects entropy to microstates. ΔH < 0, ΔS < 0: spontaneous when |ΔH| > T|ΔS| (low T). The Second Law guarantees S_univ always increases. Temperature must be in Kelvin for ΔG calculations.'
      }
    },
    {
      id: 'en7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Entropy Mastery** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'At equilibrium, ΔG = 0. If ΔH = +50 kJ and ΔS = +125 J/K, the equilibrium temperature is:',
            options: [
              '400 K',
              '250 K',
              '0.4 K',
              '625 K'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta G = 0 \\Rightarrow \\Delta H = T\\Delta S \\Rightarrow T = \\Delta H/\\Delta S = 50{,}000/125 = 400$ K. Below 400 K: nonspontaneous. Above 400 K: spontaneous.'
          },
          {
            question: 'Which statement about entropy is FALSE?',
            options: [
              'Entropy is a state function',
              'Entropy can be created but not destroyed',
              'Entropy is always conserved in the universe',
              'The entropy of a perfect crystal at 0 K is zero'
            ],
            correctAnswer: 2,
            explanation: 'Entropy is NOT conserved — it is always created in irreversible (real) processes. This is the essence of the Second Law. Energy is conserved (First Law), but entropy is not.'
          }
        ]
      }
    }
  ]
}
