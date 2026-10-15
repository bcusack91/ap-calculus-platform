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
| Dispersal of matter | Phase change to a freer state, larger gas volume, more moles of gas → higher S |
| Dispersal of energy | Higher temperature → broader energy distribution → higher S |
| Phase order | $S_{\\text{solid}} < S_{\\text{liquid}} \\ll S_{\\text{gas}}$ |
| Third Law | $S = 0$ for perfect crystal at 0 K |


---

### Predicting and Calculating ΔS

| Method | Approach |
|--------|----------|
| Qualitative | Count $\\Delta n_{\\text{gas}}$; more gas → higher S |
| Quantitative | $\\Delta S° = \\sum n S°(\\text{prod}) - \\sum m S°(\\text{react})$ |
| Phase transition | $\\Delta S = \\Delta H_{\\text{trans}}/T_{\\text{trans}}$ |


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
              '$N_{2}$ has a fairly high molar mass for a gas',
              '$N_{2}$ at 298 K is not in its standard state',
              'S° > 0 for any substance at temperatures above 0 K',
              'Only isolated atoms, not molecules, have S° = 0'
            ],
            correctAnswer: 2,
            explanation: 'By the Third Law, S = 0 only at 0 K for a perfect crystal. At any temperature above 0 K (including standard 298 K), all substances have positive entropy. This is true for elements AND compounds alike.'
          },
          {
            question: 'A reaction has ΔH° = −40 kJ and ΔS° = −120 J/K. At 500 K, ΔG° is:',
            options: [
              '−100 kJ',
              '+20 kJ',
              '+59,960 kJ',
              '+100 kJ'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G° = \\Delta H° - T\\Delta S° = -40 - (500)(-0.120) = -40 + 60 = +20$ kJ. At 500 K, the reaction is nonspontaneous because the entropy penalty ($-T\\Delta S$) outweighs the enthalpy benefit. Dropping the sign of ΔS° gives −100 kJ, flipping the sign of ΔH° gives +100 kJ, and using ΔS° in J/K with ΔH° in kJ gives −40 + 60,000 = +59,960 kJ.'
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

**2)** Calculate $\\Delta G°$ at 298 K for a reaction with $\\Delta H° = -200$ kJ and $\\Delta S° = -50$ J/K. (in kJ, to 3 significant figures)

**3)** Is the reaction in (2) thermodynamically favored at 298 K? (type "yes" or "no")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['300', '-185', 'yes'],
        hint1: '$T = \\Delta H/\\Delta S = -90{,}000 / -300$. Above this T, $\\Delta G > 0$.',
        hint2: '$\\Delta G° = \\Delta H° - T\\Delta S° = -200 - (298)(-0.050)$',
        hint3: 'Is $\\Delta G° < 0$?',
        explanation: '1) $T = \\Delta H/\\Delta S = -90{,}000/-300 = 300$ K. Above 300 K, the reaction is nonspontaneous. 2) $\\Delta G° = -200 - (298)(-0.050) = -200 + 14.9 = -185$ kJ. 3) Yes, $\\Delta G° < 0$: the large negative ΔH outweighs the small entropy decrease at 298 K.'
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
            label: 'Heating a gas at constant volume increases its entropy because the',
            options: ['gas molecules get larger', 'energy distribution broadens', 'number of moles increases', 'volume increases']
          },
          {
            label: 'A reaction with ΔH < 0 and ΔS < 0 is spontaneous at',
            options: ['all temperatures', 'no temperature', 'low temperatures', 'high temperatures']
          },
          {
            label: 'A process with ΔH > 0 and ΔS > 0 becomes favored at',
            options: ['low temperatures', 'all temperatures', 'high temperatures', 'no temperature']
          },
          {
            label: 'To calculate ΔG from ΔH and ΔS, temperature must be in',
            options: ['°C', 'K', '°F', 'any unit']
          }
        ],
        correctAnswers: ['energy distribution broadens', 'low temperatures', 'high temperatures', 'K'],
        hint1: 'Energy is spread over a wider range of motions.',
        hint2: '$\\Delta G = \\Delta H - T\\Delta S$. At low T, ΔH dominates (and it\'s negative → spontaneous).',
        hint3: 'The favorable entropy term −TΔS grows with temperature.',
        explanation: 'Heating broadens the distribution of kinetic energies, dispersing energy and raising entropy. ΔH < 0, ΔS < 0: favored when |ΔH| > T|ΔS| (low T). ΔH > 0, ΔS > 0: favored when TΔS > ΔH (high T). Temperature must be in Kelvin for ΔG calculations.'
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
              '0.4 K',
              '2.5 K',
              '6,250 K'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta G = 0 \\Rightarrow \\Delta H = T\\Delta S \\Rightarrow T = \\Delta H/\\Delta S = 50{,}000/125 = 400$ K. Below 400 K: nonspontaneous. Above 400 K: spontaneous. Leaving ΔH in kJ gives 0.4 K, dividing ΔS by ΔH gives 2.5 K, and multiplying (50 × 125) gives 6,250 K.'
          },
          {
            question: 'Which statement about entropy is FALSE?',
            options: [
              'Entropy increases when a solid melts',
              'Entropy increases with temperature',
              'The standard molar entropy of an element is zero',
              'Entropy increases when a gas expands at constant T'
            ],
            correctAnswer: 2,
            explanation: 'Unlike ΔH°f, the standard molar entropy S° of an element is positive (for example, $O_{2}(g)$ is 205.1 J/(mol·K)), because the particles have some dispersal of matter and energy at 298 K. The other three statements are true: melting, heating, and expansion all increase dispersal.'
          }
        ]
      }
    }
  ]
}
