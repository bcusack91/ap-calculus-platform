export const physics2ThermoProcPart4Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p4-intro',
      type: 'text' as const,
      content: `# 🌀 Entropy & the Second Law

**Part 4 of 7 — Disorder and Irreversibility**

---

### Entropy

$$\\\\Delta S = \\\\frac{Q_{rev}}{T}$$

Entropy is a measure of the number of microscopic arrangements (microstates) consistent with a macroscopic state.

### Second Law of Thermodynamics

> For any spontaneous process, the total entropy of the universe increases:
> $$\\\\Delta S_{universe} \\\\geq 0$$

- Reversible process: $\\\\Delta S_{universe} = 0$
- Irreversible process: $\\\\Delta S_{universe} > 0$

---

### Consequences

1. Heat flows spontaneously from hot to cold, never cold to hot
2. No engine can be 100% efficient
3. The entropy of an isolated system never decreases

### Statistical Interpretation

$$S = k_B \\\\ln \\\\Omega$$

where $\\\\Omega$ is the number of microstates and $k_B = 1.38 \\\\times 10^{-23}$ J/K.`
    },    {
      id: 'thermodynamicprocesses-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'The entropy of the universe:',
            options: ['Always decreases', 'Always increases or stays the same', 'Can increase or decrease', 'Is always zero'],
            correctAnswer: 1,
            explanation: 'Second Law: $\\\\Delta S_{universe} \\\\geq 0$. Total entropy never decreases.'
          },
          {
            question: 'A reversible process has:',
            options: ['$\\\\Delta S_{universe} = 0$', '$\\\\Delta S_{universe} > 0$', '$\\\\Delta S_{universe} < 0$', '$\\\\Delta S_{system} = 0$'],
            correctAnswer: 0,
            explanation: 'Reversible processes are the limiting case where $\\\\Delta S_{universe} = 0$.'
          },
          {
            question: 'Is it possible for the entropy of a system to decrease?',
            options: ['No, never', 'Yes, but the surroundings must increase by at least as much', 'Yes, with no restrictions', 'Only at absolute zero'],
            correctAnswer: 1,
            explanation: 'System entropy can decrease, but total (system + surroundings) must not decrease.'
          }
        ]
      }
    },    {
      id: 'thermodynamicprocesses-p4-input',
      type: 'input-boxes' as const,
      content: `
**Entropy Calculations** 🧮

500 J of heat flows from a reservoir at 400 K to one at 300 K.

**1)** Entropy change of hot reservoir? (in J/K, include sign)

**2)** Entropy change of cold reservoir? (in J/K)

**3)** Total entropy change? (in J/K) Is this process spontaneous?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1.25', '1.67', '0.42'],
        hint1: '$\\\\Delta S_H = -Q/T_H = -500/400$',
        hint2: '$\\\\Delta S_C = Q/T_C = 500/300$',
        hint3: 'Add them. Positive = spontaneous.',
        explanation: '1) $-500/400 = -1.25$ J/K. 2) $500/300 \\\\approx 1.67$ J/K. 3) $-1.25 + 1.67 = 0.42$ J/K > 0 → spontaneous.'
      }
    }
  ]
};
