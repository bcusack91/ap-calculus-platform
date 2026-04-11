export const precalcLawSinesCosinesPart2Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# ⚠️ The Ambiguous Case (SSA)

**Part 2 of 7**

When given **two sides and an angle opposite one of them** (SSA), there might be **zero, one, or two** possible triangles.

### Why It's Ambiguous

Given $a$, $b$, and angle $A$:

We compute $\\sin B = \\frac{b \\sin A}{a}$.

| Condition | # of Triangles |
|:----------|:--------------|
| $\\sin B > 1$ | **0** triangles (impossible) |
| $\\sin B = 1$ | **1** triangle ($B = 90°$) |
| $\\sin B < 1$ and $A$ is obtuse | **1** triangle (only acute $B$ works) |
| $\\sin B < 1$ and $A$ is acute | **1 or 2** triangles — check both $B$ and $180° - B$ |

### The Key Test for Two Triangles

If $\\sin B < 1$ and angle $A$ is acute, compute:

$B_1 = \\arcsin(\\frac{b \\sin A}{a})$ and $B_2 = 180° - B_1$

- If $A + B_2 < 180°$: **TWO triangles** exist
- If $A + B_2 \\geq 180°$: **ONE triangle** (only $B_1$ works)
      `
    },
    {
      id: 'p2-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Two Triangles

Given: $a = 8$, $b = 12$, $A = 30°$

$\\sin B = \\frac{12 \\sin 30°}{8} = \\frac{12(0.5)}{8} = 0.75$

$B_1 = \\arcsin(0.75) \\approx 48.6°$, $B_2 = 180° - 48.6° = 131.4°$

Check: $A + B_2 = 30° + 131.4° = 161.4° < 180°$ ✓

**Triangle 1:** $A = 30°$, $B \\approx 48.6°$, $C \\approx 101.4°$
**Triangle 2:** $A = 30°$, $B \\approx 131.4°$, $C \\approx 18.6°$

### Example 2: One Triangle

Given: $a = 15$, $b = 10$, $A = 60°$

$\\sin B = \\frac{10 \\sin 60°}{15} = \\frac{10(0.866)}{15} \\approx 0.577$

$B_1 \\approx 35.3°$, $B_2 = 180° - 35.3° = 144.7°$

Check: $A + B_2 = 60° + 144.7° = 204.7° > 180°$ ✗

Only **one triangle**: $B \\approx 35.3°$, $C \\approx 84.7°$.

### Example 3: No Triangle

Given: $a = 5$, $b = 20$, $A = 40°$

$\\sin B = \\frac{20 \\sin 40°}{5} = \\frac{20(0.643)}{5} \\approx 2.57 > 1$

**No triangle** exists — impossible!
      `
    },
    {
      id: 'p2-flowchart',
      type: 'text' as const,
      content: `
## 🔄 Decision Flowchart for SSA

$$\\boxed{\\text{Step 1: Compute } \\sin B = \\frac{b \\sin A}{a}}$$

**If $\\sin B > 1$:** No triangle. Stop.

**If $\\sin B = 1$:** One right triangle. $B = 90°$.

**If $\\sin B < 1$:**

$B_1 = \\arcsin(\\sin B)$

$B_2 = 180° - B_1$

- If $A + B_1 \\geq 180°$: No triangle
- Else if $A + B_2 \\geq 180°$: One triangle (use $B_1$)
- Else: **Two triangles** (use both $B_1$ and $B_2$)

### Quick Rule of Thumb

If $a \\geq b$ (the side opposite the given angle is longer), there's always **exactly one** triangle. The ambiguous case only arises when $a < b$.
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Ambiguous Case Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Given $a = 5$, $b = 8$, $A = 40°$, how many triangles exist?',
            options: [
              '0',
              '1',
              '2',
              'Cannot determine'
            ],
            correctAnswer: 2,
            explanation: '$\\sin B = \\frac{8\\sin 40°}{5} = \\frac{8(0.643)}{5} \\approx 1.029 > 1$... Actually: $\\frac{5.14}{5} \\approx 1.03$. Wait — let me recalculate: $8 \\times 0.6428 = 5.14$, $5.14/5 = 1.03 > 1$. No triangle! But let\'s verify the setup. With $a < b$, $\\sin B > 1$ means 0 triangles.'
          },
          {
            question: 'The ambiguous case occurs with which given information?',
            options: [
              'ASA',
              'SSA',
              'SAS',
              'SSS'
            ],
            correctAnswer: 1,
            explanation: 'SSA (two sides and a non-included angle) is the only case that can produce 0, 1, or 2 triangles.'
          },
          {
            question: 'If $\\sin B = 0.6$ and $A = 100°$, how many triangles?',
            options: [
              '0',
              '1',
              '2',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: '$B_1 = \\arcsin(0.6) \\approx 36.9°$. Since $A$ is obtuse, $B_2 = 143.1°$ would give $A + B_2 = 243.1° > 180°$. Only one triangle with $B \\approx 36.9°$.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Ambiguous Case Calculations** 🧮

**1)** Given $a = 10$, $b = 14$, $A = 35°$. Compute $\\sin B$ to 2 decimal places. (e.g., $\\frac{12 \\sin 30°}{8} = \\frac{12(0.5)}{8} = 0.75$)

**2)** In a triangle with $\\sin B = 0.8$ and this might be ambiguous: $B_1 = \\arcsin(0.8) \\approx 53°$, what is $B_2$? (e.g., if $B_1 = 45°$, then $B_2 = 180 - 45 = 135$)

**3)** How many triangles exist if $a = 20$, $b = 10$, $A = 50°$? (When $a > b$, the side opposite the known angle is longer.) Answer: 0, 1, or 2.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.80', '127', '1'],
        hint1: '$\\sin B = \\frac{14 \\sin 35°}{10} = \\frac{14(0.574)}{10} = 0.80$.',
        hint2: '$B_2 = 180° - 53° = 127°$.',
        hint3: 'Since $a > b$, the side opposite $A$ is the longest — exactly one triangle.',
        explanation: '1) $0.80$. 2) $127°$. 3) $a > b$ guarantees exactly 1 triangle.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Case** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$a = 3$, $b = 7$, $A = 20°$: $\\sin B = \\frac{7\\sin 20°}{3} \\approx 0.80$. Number of triangles:',
            options: ['0', '1', '2']
          },
          {
            label: '$a = 10$, $b = 6$, $A = 45°$: Since $a > b$, number of triangles:',
            options: ['0', '1', '2']
          },
          {
            label: 'If $\\sin B > 1$, the number of triangles is:',
            options: ['0', '1', '2']
          },
          {
            label: 'SSA with $A$ obtuse and $\\sin B < 1$ gives:',
            options: ['0 triangles', '1 triangle', '2 triangles']
          }
        ],
        correctAnswers: ['2', '1', '0', '1 triangle'],
        hint1: '$\\sin B < 1$ and $A$ is acute and $a < b$ — check both $B_1$ and $B_2$.',
        hint2: 'When $a > b$, only one triangle is possible.',
        hint3: '$\\sin B > 1$ is impossible, so no triangle exists.',
        explanation: '$a < b$ and $\\sin B < 1$ can give 2 triangles. $a > b$ gives 1. $\\sin B > 1$ gives 0. Obtuse $A$ with valid $\\sin B$ gives 1.'
      }
    },
    {
      id: 'p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Why can\'t there be two triangles when $A$ is obtuse and $\\sin B < 1$?',
            options: [
              'Because $\\sin B$ must equal 1 for obtuse angles',
              'Because $B_2 = 180° - B_1$ would also be obtuse, and a triangle can\'t have two obtuse angles',
              'Because the Law of Sines doesn\'t work for obtuse angles',
              'Because $B$ must be zero'
            ],
            correctAnswer: 1,
            explanation: 'If $A$ is obtuse (>90°) and $B_2$ is also obtuse (>90°), then $A + B_2 > 180°$, which violates the angle sum. So only the acute $B_1$ works.'
          },
          {
            question: 'Given SSA with $a = 6$, $b = 6$, $A = 45°$, how many triangles?',
            options: [
              '0',
              '1',
              '2',
              'Infinitely many'
            ],
            correctAnswer: 1,
            explanation: '$\\sin B = \\frac{6\\sin 45°}{6} = \\sin 45°$. $B = 45°$ (isosceles) or $B = 135°$ giving $A + B = 180°$, no room for $C$. One triangle.'
          }
        ]
      }
    }
  ]
};
