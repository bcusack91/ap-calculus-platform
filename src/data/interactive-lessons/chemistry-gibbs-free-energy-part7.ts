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
> 🔑 **Key Concept:** These equations, plus the Q vs. K comparison, form the complete Gibbs free energy toolkit for AP Chemistry.
| Equation | When to Use |
|----------|-------------|
| $\\Delta G = \\Delta H - T\\Delta S$ | Calculate ΔG from enthalpy and entropy |
| $\\Delta G° = \\sum \\Delta G°_f(\\text{prod}) - \\sum \\Delta G°_f(\\text{react})$ | Calculate from tables |
| $\\Delta G° = -RT\\ln K$ | Connect free energy to equilibrium |
| $\\Delta G°_{\\text{overall}} = \\Delta G°_1 + \\Delta G°_2$ | Coupled reactions |
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
> ⚠️ **Warning:** Keep the two questions separate — $\\Delta G°$ (or $K$) tells you where equilibrium lies, while comparing $Q$ with $K$ tells you which way a particular mixture will shift.
- $\\Delta G° < 0 \\Leftrightarrow K > 1$ (products favored)
- $\\Delta G° = 0 \\Leftrightarrow K = 1$
- $\\Delta G° > 0 \\Leftrightarrow K < 1$ (reactants favored)
- $Q < K$: net reaction proceeds forward
- $Q = K$: at equilibrium
- $Q > K$: net reaction proceeds in reverse
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
              '−100.0 kJ',
              '−15,000 kJ'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G° = -100 - (298)(0.050) = -100 - 14.9 = -114.9$ kJ. Adding the $T\\Delta S$ term gives −85.1 kJ, ignoring entropy gives −100.0 kJ, and leaving ΔS in J/K gives −15,000 kJ.'
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
            question: 'Which statement about ΔG° is correct?',
            options: [
              'ΔG° < 0 means the reaction is fast at that temperature',
              'ΔG° < 0 means K > 1 under standard conditions',
              'ΔG° depends on the starting amounts of reactants',
              'ΔG° has the same value at every temperature'
            ],
            correctAnswer: 1,
            explanation: 'A negative ΔG° means products are favored at equilibrium, K > 1 (CED 9.5.A.1). ΔG° says nothing about rate, it refers to standard conditions rather than the starting amounts, and it changes with temperature through ΔG° = ΔH° − TΔS°.'
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

**3)** A reaction has $\\Delta G° = +5.0$ kJ/mol at 298 K. What is $K$? (Round to 2 significant figures.)
      `,
      exercise: {
        questions: [{ question: '1)', answer: '720', acceptableAnswers: ['720'] }, { question: '2)', answer: '10^10', acceptableAnswers: ['10^10', '1e10', '1.0e10', '1x10^10', '1×10^10'] }, { question: '3)', answer: '0.13', acceptableAnswers: ['0.13', '0.133'] }],
        hint1: '$T = \\Delta H/\\Delta S = -180{,}000/(-250)$',
        hint2: '$K = e^{57100/(8.314 \\times 298)} = e^{23.0}$',
        hint3: '$K = e^{-\\Delta G°/(RT)} = e^{-5000/2478}$',
        explanation: '1) $T = 180{,}000/250 = 720$ K. 2) $K = e^{23.0} \\approx 10^{10}$. 3) $K = e^{-5000/2478} = e^{-2.02} \\approx 0.13$.'
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
            label: 'Coupling a reaction with ΔG° = +30 kJ to one with ΔG° = −50 kJ gives an overall ΔG° of',
            options: ['+80 kJ', '−20 kJ', '−80 kJ', '+20 kJ']
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
        correctAnswers: ['−20 kJ', 'greater than 1', 'in reverse', 'have the same sign'],
        hint1: 'ΔG° values add when reactions add.',
        hint2: '$\\Delta G° < 0 \\Rightarrow -RT\\ln K < 0 \\Rightarrow \\ln K > 0 \\Rightarrow K > 1$.',
        hint3: 'Q > K: too many products → system shifts backward.',
        explanation: 'Coupled ΔG° values add: +30 + (−50) = −20 kJ. Negative ΔG° → K > 1. Q > K → reverse direction. Crossover T = ΔH/ΔS requires same-sign values for a positive temperature.'
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
              'Yes — Q ≈ 0 is less than K, so the net reaction proceeds forward',
              'No — it must be heated until ΔG° turns negative',
              'Only if a catalyst first lowers ΔG° below zero'
            ],
            correctAnswer: 1,
            explanation: 'A positive ΔG° means K < 1 (here K ≈ 0.018), but K is not zero. Starting from pure reactants, Q ≈ 0 < K, so some product forms until Q = K. Heating or a catalyst is not required for this; a catalyst never changes ΔG°.'
          },
          {
            question: 'Which relationship is CORRECT?',
            options: [
              'ΔG° < 0 means the reaction goes to completion',
              'Q < K means the net reaction proceeds forward',
              'ΔG° = 0 means the reaction never occurs',
              'Q > K means the net reaction proceeds forward'
            ],
            correctAnswer: 1,
            explanation: 'When Q < K the mixture has too little product, so the net reaction proceeds forward toward equilibrium. ΔG° < 0 means K > 1, not completion; ΔG° = 0 means K = 1; and Q > K means the net reaction runs in reverse.'
          }
        ]
      }
    }
  ]
}
