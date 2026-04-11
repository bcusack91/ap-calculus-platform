export const chemGibbsFreeEnergyPart7Data = {
  topicSlug: 'gibbs-free-energy',
  sections: [
    {
      id: 'gf7-intro',
      type: 'text' as const,
      content: `# 🎯 Synthesis & AP Review — Gibbs Free Energy

**Part 7 of 7 — Mastering the Connections**

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
      id: 'gf7-master-summary',
      type: 'text' as const,
      content: `
## 🌡️ The Web of Thermodynamic Equations

### Core Equations
> 🔑 **Key Concept:** These five equations form the complete Gibbs free energy toolkit for AP Chemistry.
| Equation | When to Use |
|----------|-------------|
| $\\Delta G = \\Delta H - T\\Delta S$ | Calculate ΔG from enthalpy and entropy |
| $\\Delta G° = \\sum \\Delta G°_f(\\text{prod}) - \\sum \\Delta G°_f(\\text{react})$ | Calculate from tables |
| $\\Delta G° = -RT\\ln K$ | Connect free energy to equilibrium |
| $\\Delta G = \\Delta G° + RT\\ln Q$ | Non-standard conditions |
| $\\Delta G° = -nFE°$ | Connect to electrochemistry (Topic 4) |


---

### The Four Sign Cases

| $\\Delta H$ | $\\Delta S$ | Spontaneous? | Crossover T |
|-----------|-----------|-------------|-------------|
| − | + | Always | None |
| + | − | Never | None |
| − | − | Low T | $T = \\Delta H/\\Delta S$ |
| + | + | High T | $T = \\Delta H/\\Delta S$ |


---

### Critical Relationships
> ⚠️ **Warning:** Notice the distinction — $\Delta G°$ (with °) predicts equilibrium position, while $\Delta G$ (without °) predicts reaction direction.
- $\\Delta G° < 0 \\Leftrightarrow K > 1$ (products favored)
- $\\Delta G° = 0 \\Leftrightarrow K = 1$
- $\\Delta G° > 0 \\Leftrightarrow K < 1$ (reactants favored)
- $\\Delta G < 0$: forward reaction proceeds
- $\\Delta G = 0$: at equilibrium
- $\\Delta G > 0$: reverse reaction proceeds
      `
    },
    {
      id: 'gf7-comprehensive-quiz',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive AP Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction is exothermic with ΔH = −100 kJ and has ΔS = +50 J/K. At 298 K, ΔG° is:',
            options: [
              '−85.1 kJ',
              '−114.9 kJ',
              '−50 kJ',
              '+14.9 kJ'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G° = -100 - (298)(0.050) = -100 - 14.9 = -114.9$ kJ.'
          },
          {
            question: 'The equilibrium constant K for a reaction with ΔG° = 0 is:',
            options: [
              '0',
              '1',
              '∞',
              'undefined'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G° = -RT\\ln K = 0 \\Rightarrow \\ln K = 0 \\Rightarrow K = 1$.'
          },
          {
            question: 'Which statement correctly describes the difference between ΔG° and ΔG?',
            options: [
              'ΔG° applies at any conditions; ΔG only at standard',
              'ΔG° applies at standard conditions; ΔG at any conditions',
              'They are always equal',
              'ΔG includes only enthalpy; ΔG° includes entropy too'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G°$ is the free energy change when all species are at standard conditions (1 atm, 1 M). $\\Delta G$ is the free energy change at the actual (non-standard) conditions, calculated using $\\Delta G = \\Delta G° + RT\\ln Q$.'
          }
        ]
      }
    },
    {
      id: 'gf7-integration-drill',
      type: 'input-boxes' as const,
      content: `
**Integration Problems** 🧮

**1)** $\\Delta H° = -180$ kJ, $\\Delta S° = -250$ J/K. What is the crossover temperature? (in K)

**2)** At 298 K, $\\Delta G° = -57.1$ kJ/mol. What is $K$? (use $e^{23.0} \\approx 10^{10}$; express as a power of 10)

**3)** A reaction has $\\Delta G° = +5.0$ kJ/mol. At what value of $Q$ does $\\Delta G = 0$ at 298 K? (i.e., what is $K$? Round to nearest tenth; use $e^{-2.02} \\approx 0.1$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['720', '10^10', '0.1'],
        hint1: '$T = \\Delta H/\\Delta S = -180{,}000/(-250)$',
        hint2: '$K = e^{57100/(8.314 \\times 298)} = e^{23.0}$',
        hint3: 'At $\\Delta G = 0$: $Q = K = e^{-\\Delta G°/(RT)} = e^{-5000/2478}$',
        explanation: '1) $T = 180{,}000/250 = 720$ K. 2) $K = e^{23.0} \\approx 10^{10}$. 3) $K = e^{-5000/2478} = e^{-2.02} \\approx 0.13 \\approx 0.1$.'
      }
    },
    {
      id: 'gf7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Review** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'ΔG represents the maximum',
            options: ['heat released', 'useful work the system can do', 'entropy created', 'kinetic energy']
          },
          {
            label: 'A negative ΔG° means K is',
            options: ['less than 1', 'equal to 1', 'greater than 1', 'undefined']
          },
          {
            label: 'When Q > K, the net reaction proceeds',
            options: ['forward', 'in reverse', 'not at all', 'at maximum rate']
          },
          {
            label: 'The crossover temperature exists only when ΔH and ΔS',
            options: ['have opposite signs', 'have the same sign', 'are both zero', 'are equal']
          }
        ],
        correctAnswers: ['useful work the system can do', 'greater than 1', 'in reverse', 'have the same sign'],
        hint1: 'Free energy = energy available for non-PV work.',
        hint2: '$\\Delta G° < 0 \\Rightarrow -RT\\ln K < 0 \\Rightarrow \\ln K > 0 \\Rightarrow K > 1$.',
        hint3: 'Q > K: too many products → system shifts backward.',
        explanation: 'ΔG = maximum useful work. Negative ΔG° → K > 1. Q > K → reverse direction. Crossover T = ΔH/ΔS requires same-sign values for a positive temperature.'
      }
    },
    {
      id: 'gf7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Gibbs Free Energy Mastery** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has ΔG° = +10 kJ/mol at 298 K. A student starts with pure reactants (Q ≈ 0). Will the reaction proceed forward initially?',
            options: [
              'No — ΔG° > 0 means the reaction never proceeds forward',
              'Yes — with Q ≈ 0, RT ln Q is very negative, making ΔG < 0',
              'Only if a catalyst is added',
              'Only at higher temperatures'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G = \\Delta G° + RT\\ln Q$. When $Q \\approx 0$, $\\ln Q \\rightarrow -\\infty$, so $\\Delta G \\ll 0$. The reaction proceeds forward until $Q = K$ (equilibrium). Even reactions with positive ΔG° proceed forward from pure reactants!'
          },
          {
            question: 'Which relationship is CORRECT?',
            options: [
              'ΔG° < 0 means the reaction goes to completion',
              'ΔG < 0 means Q < K',
              'ΔG° = 0 means the reaction never occurs',
              'ΔG > 0 means Q < K'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G < 0$ means $Q < K$ — the system is below equilibrium, so the forward reaction is spontaneous. ΔG° < 0 means K > 1, not completion. ΔG° = 0 means K = 1. ΔG > 0 means Q > K.'
          }
        ]
      }
    }
  ]
}
