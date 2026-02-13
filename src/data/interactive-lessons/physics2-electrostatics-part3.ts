export const physics2ElectrostaticsPart3Data = {
  topicSlug: 'electric-charge-coulombs-law',
  sections: [
    {
      id: 'ec3-intro',
      type: 'text' as const,
      content: `
# 🧮 Coulomb's Law — Problem Solving

**Part 3 of 7**

Time to use Coulomb's Law with real numbers. You'll practice the 5-step problem-solving workflow and build confidence computing electrostatic forces.

By the end of this part, you'll solve Coulomb's Law calculations in a few clean lines.
      `
    },
    {
      id: 'ec3-workflow',
      type: 'text' as const,
      content: `
## The 5-Step Workflow

Every Coulomb's Law problem follows the same pattern:

**Step 1 — Given:** List charges, distances, and what you need to find

**Step 2 — Formula:** Write Coulomb's Law

$$F_E = k\\frac{|q_1 q_2|}{r^2}$$

**Step 3 — Convert:** Make sure everything is in SI units (C, m, N)

| Prefix | Conversion |
|--------|-----------|
| $\\mu$C (micro) | $\\times 10^{-6}$ C |
| nC (nano) | $\\times 10^{-9}$ C |
| cm | $\\times 10^{-2}$ m |
| mm | $\\times 10^{-3}$ m |

**Step 4 — Substitute & Solve:** Plug in and compute

**Step 5 — Interpret:** State magnitude AND direction
      `
    },
    {
      id: 'ec3-example1',
      type: 'text' as const,
      content: `
## Worked Example 1

**Problem:** Two charges, $q_1 = +3.0\\ \\mu\\text{C}$ and $q_2 = -5.0\\ \\mu\\text{C}$, are separated by 0.20 m. Find the force.

**Step 1 — Given:**
- $q_1 = +3.0 \\times 10^{-6}$ C
- $q_2 = -5.0 \\times 10^{-6}$ C
- $r = 0.20$ m

**Step 2 — Formula:**

$$F_E = k\\frac{|q_1 q_2|}{r^2}$$

**Step 3 — Substitute:**

$$F_E = (8.99 \\times 10^9)\\frac{|(3.0 \\times 10^{-6})(-5.0 \\times 10^{-6})|}{(0.20)^2}$$

**Step 4 — Solve:**

$$F_E = (8.99 \\times 10^9)\\frac{15.0 \\times 10^{-12}}{0.04}$$

$$F_E = (8.99 \\times 10^9)(3.75 \\times 10^{-10})$$

$$F_E = 3.37 \\text{ N}$$

**Step 5 — Interpret:**
- Magnitude: **3.37 N**
- Direction: **Attractive** (opposite charges)
- The charges pull toward each other with 3.37 N of force
      `
    },
    {
      id: 'ec3-example2',
      type: 'text' as const,
      content: `
## Worked Example 2

**Problem:** Two identical charges of $+4.0\\ \\mu\\text{C}$ are 0.30 m apart. Find the force on each.

**Given:**
- $q_1 = q_2 = +4.0 \\times 10^{-6}$ C
- $r = 0.30$ m

**Solution:**

$$F_E = (8.99 \\times 10^9)\\frac{(4.0 \\times 10^{-6})^2}{(0.30)^2}$$

$$F_E = (8.99 \\times 10^9)\\frac{16.0 \\times 10^{-12}}{0.09}$$

$$F_E = (8.99 \\times 10^9)(1.78 \\times 10^{-10})$$

$$F_E = 1.60 \\text{ N}$$

**Direction:** Repulsive — each charge pushes the other away with 1.60 N.

**Key point:** By Newton's Third Law, both charges experience the same magnitude of force, even if they had different charges!
      `
    },
    {
      id: 'ec3-computation-drill',
      type: 'input-boxes' as const,
      content: `
**Your Turn!**

$q_1 = +2.0\\ \\mu\\text{C}$, $q_2 = +8.0\\ \\mu\\text{C}$, separated by $r = 0.40$ m.

Use $k = 9.0 \\times 10^9$ N·m²/C² (rounded for cleaner math).

Enter in order:
1) $|q_1 q_2|$ in C² (use scientific notation like \`16e-12\`)
2) $r^2$ in m²
3) Force magnitude in N (round to 1 decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16e-12', '0.16', '0.9'],
        hint1: '$|q_1 q_2| = (2.0 \\times 10^{-6})(8.0 \\times 10^{-6})$.',
        hint2: '$r^2 = (0.40)^2 = 0.16$ m².',
        hint3: '$F = (9.0 \\times 10^9)(16 \\times 10^{-12}/0.16) = (9.0 \\times 10^9)(10^{-10}) = 0.9$ N.',
        explanation: 'F = k|q₁q₂|/r² = (9.0 × 10⁹)(16 × 10⁻¹²)/(0.16) = 0.9 N. Repulsive — both positive.'
      }
    },
    {
      id: 'ec3-unit-conversion',
      type: 'dropdown-select' as const,
      content: `
**Unit Conversion Check** — These trip up students constantly on the AP exam.
      `,
      exercise: {
        dropdowns: [
          {
            label: '5.0 μC in coulombs is',
            options: ['5.0 × 10⁻³ C', '5.0 × 10⁻⁶ C', '5.0 × 10⁻⁹ C', '5.0 × 10⁻¹² C']
          },
          {
            label: '30 cm in meters is',
            options: ['30 m', '3.0 m', '0.30 m', '0.030 m']
          },
          {
            label: '200 nC in coulombs is',
            options: ['2.0 × 10⁻⁵ C', '2.0 × 10⁻⁷ C', '2.0 × 10⁻⁹ C', '200 × 10⁻⁹ C']
          }
        ],
        correctAnswers: ['5.0 × 10⁻⁶ C', '0.30 m', '2.0 × 10⁻⁷ C'],
        hint1: 'μ (micro) = 10⁻⁶, n (nano) = 10⁻⁹.',
        hint2: '1 cm = 10⁻² m.',
        hint3: '200 × 10⁻⁹ = 2.0 × 10⁻⁷.',
        explanation: 'Unit conversion is the #1 source of errors on AP electrostatics problems. Always convert to SI before plugging into formulas.'
      }
    },
    {
      id: 'ec3-quiz',
      type: 'multiple-choice' as const,
      content: `
**Problem-Solving Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Two charges of +1.0 μC each are 1.0 m apart. The force between them is approximately:',
            options: [
              '9.0 × 10⁻³ N (about 0.009 N)',
              '9.0 N',
              '9.0 × 10³ N',
              '9.0 × 10⁹ N'
            ],
            correctAnswer: 0,
            explanation: 'F = k|q₁q₂|/r² = (9 × 10⁹)(10⁻⁶)(10⁻⁶)/(1)² = 9 × 10⁻³ N. The force is small because microcoulombs are tiny amounts of charge.'
          },
          {
            question: 'If you solve a Coulomb\'s Law problem and get F = 450,000 N between two small lab charges, what most likely happened?',
            options: [
              'That\'s reasonable for static electricity',
              'You forgot to convert μC to C (used 10⁻⁶ incorrectly)',
              'You used the wrong constant k',
              'Coulomb\'s Law doesn\'t work for small charges'
            ],
            correctAnswer: 1,
            explanation: 'Forces between lab-scale charges (μC) at cm-scale distances are typically in the range of newtons or less. Huge forces usually mean a unit conversion error — most commonly forgetting to convert microcoulombs to coulombs.'
          },
          {
            question: 'By Newton\'s Third Law, if charge A exerts 5 N on charge B, what force does B exert on A?',
            options: [
              'Depends on the charge magnitudes',
              '5 N in the opposite direction',
              '5 N in the same direction',
              'Zero — only A exerts force'
            ],
            correctAnswer: 1,
            explanation: 'Newton\'s Third Law: every force has an equal and opposite reaction. If A pulls B with 5 N, B pulls A with 5 N in the opposite direction — regardless of whether the charges are equal.'
          }
        ]
      }
    },
    {
      id: 'ec3-mistakes',
      type: 'multiple-choice' as const,
      content: `
**Before You Move On** — The biggest calculation traps.
      `,
      exercise: {
        questions: [
          {
            question: 'A student uses r = 20 cm directly in the formula without converting. Their answer will be off by:',
            options: [
              'A factor of 100 (too small)',
              'A factor of 10,000 (too small)',
              'A factor of 100 (too big)',
              'A factor of 10,000 (too big)'
            ],
            correctAnswer: 3,
            explanation: 'Using r = 20 instead of r = 0.20 means r² = 400 instead of 0.04. Since r² appears in the denominator, the denominator is 10,000× too large, making F 10,000× too small.'
          },
          {
            question: 'Which step in problem-solving is most often skipped, causing errors?',
            options: [
              'Writing the formula',
              'Converting units to SI',
              'Plugging in numbers',
              'Drawing a diagram'
            ],
            correctAnswer: 1,
            explanation: 'Unit conversion is the most commonly skipped step. Students plug in μC or cm directly, leading to answers that are off by many orders of magnitude.'
          }
        ]
      }
    }
  ]
}
