export const physics2SeriesParallelPart3Data = {
  topicSlug: 'series-parallel-circuits',
  sections: [
    {
      id: 'sp3-intro',
      type: 'text' as const,
      content: `
# 🧩 Combination Circuits

**Part 3 of 7 — Series and Parallel Together**

Most real circuits aren't purely series or purely parallel — they contain **combinations** of both. The strategy is to identify series and parallel groups, simplify step by step, then work backward to find individual voltages and currents.

In this part you'll learn:
- How to identify series and parallel groups in a complex circuit
- The step-by-step reduction method
- How to work backward to find voltages and currents for each resistor
- Multi-step circuit analysis problems
      `
    },
    {
      id: 'sp3-strategy',
      type: 'text' as const,
      content: `
## Circuit Reduction Strategy

### Step-by-Step Method

1. **Identify** groups of resistors that are purely in series or purely in parallel
2. **Replace** each group with a single equivalent resistor
3. **Repeat** until you have a single equivalent resistance
4. **Find total current** using $I = V/R_{\\text{total}}$
5. **Work backward** — expand each group and use series/parallel rules to find individual $V$ and $I$ values

### How to Tell Series from Parallel

- **Series:** Two resistors are in series if **all** the current through one must also pass through the other (no branching between them)
- **Parallel:** Two resistors are in parallel if they share the **same two nodes** (same start point and same end point)

### Example: Three-Resistor Combination

Consider: $R_1 = 6 \\; \\Omega$ in series with the parallel combination of $R_2 = 4 \\; \\Omega$ and $R_3 = 12 \\; \\Omega$. Battery: $V = 24$ V.

**Step 1:** Find the parallel combination:
$$R_{23} = \\frac{R_2 \\cdot R_3}{R_2 + R_3} = \\frac{4 \\times 12}{4 + 12} = \\frac{48}{16} = 3 \\; \\Omega$$

**Step 2:** Now $R_1$ and $R_{23}$ are in series:
$$R_{\\text{total}} = R_1 + R_{23} = 6 + 3 = 9 \\; \\Omega$$

**Step 3:** Total current:
$$I_{\\text{total}} = \\frac{V}{R_{\\text{total}}} = \\frac{24}{9} = \\frac{8}{3} \\approx 2.67 \\text{ A}$$

**Step 4:** Work backward:
- $V_1 = I \\cdot R_1 = \\frac{8}{3} \\times 6 = 16$ V
- $V_{23} = I \\cdot R_{23} = \\frac{8}{3} \\times 3 = 8$ V (same voltage across $R_2$ and $R_3$)
- $I_2 = V_{23}/R_2 = 8/4 = 2$ A
- $I_3 = V_{23}/R_3 = 8/12 = 2/3$ A

**Check:** $I_2 + I_3 = 2 + 2/3 = 8/3$ A ✓ and $V_1 + V_{23} = 16 + 8 = 24$ V ✓
      `
    },
    {
      id: 'sp3-identify-quiz',
      type: 'multiple-choice' as const,
      content: `
**Identifying Series & Parallel**
      `,
      exercise: {
        questions: [
          {
            question: '$R_1$ is in series with the parallel combination of $R_2$ and $R_3$. If $R_1 = R_2 = R_3 = 12 \\; \\Omega$, the total resistance is:',
            options: [
              '36 Ω',
              '18 Ω',
              '12 Ω',
              '4 Ω'
            ],
            correctAnswer: 1,
            explanation: '$R_{23} = 12 \\times 12 / (12 + 12) = 144/24 = 6 \\; \\Omega$. $R_{\\text{total}} = R_1 + R_{23} = 12 + 6 = 18 \\; \\Omega$.'
          },
          {
            question: 'In a combination circuit, which quantity is always the same for resistors in the same parallel group?',
            options: [
              'Current',
              'Resistance',
              'Power',
              'Voltage'
            ],
            correctAnswer: 3,
            explanation: 'Resistors in parallel share the same two nodes, so they all have the same voltage across them. Current and power will generally differ.'
          }
        ]
      }
    },
    {
      id: 'sp3-combo-drill',
      type: 'input-boxes' as const,
      content: `
**Combination Circuit Drill**

$R_1 = 5 \\; \\Omega$ is in series with the parallel combination of $R_2 = 10 \\; \\Omega$ and $R_3 = 40 \\; \\Omega$. The battery provides $V = 20$ V.

1) Equivalent resistance of $R_2$ and $R_3$ in parallel (in $\\Omega$)
2) Total circuit resistance (in $\\Omega$)
3) Total current from the battery (in A)
4) Voltage across $R_1$ (in V)
5) Voltage across the parallel group (in V)
6) Current through $R_2$ (in A)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 6,
        correctAnswers: ['8', '13', '1.54', '7.7', '12.3', '1.23'],
        hint1: '$R_{23} = (10 \\times 40)/(10 + 40) = 400/50 = 8 \\; \\Omega$.',
        hint2: '$R_{\\text{total}} = 5 + 8 = 13 \\; \\Omega$. $I = 20/13 \\approx 1.54$ A.',
        hint3: '$V_1 = 1.54 \\times 5 \\approx 7.7$ V. $V_{23} = 20 - 7.7 \\approx 12.3$ V. $I_2 = 12.3/10 \\approx 1.23$ A.',
        explanation: '$R_{23} = 400/50 = 8 \\; \\Omega$. $R_{\\text{total}} = 13 \\; \\Omega$. $I = 20/13 = 1.538$ A. $V_1 = (20/13)(5) = 100/13 \\approx 7.69$ V. $V_{23} = (20/13)(8) = 160/13 \\approx 12.31$ V. $I_2 = (160/13)/10 = 16/13 \\approx 1.23$ A.'
      }
    },
    {
      id: 'sp3-four-resistor',
      type: 'text' as const,
      content: `
## Four-Resistor Combination

Consider a more complex circuit:

$R_1 = 2 \\; \\Omega$ and $R_2 = 6 \\; \\Omega$ are in parallel. This parallel combination is in series with $R_3 = 4 \\; \\Omega$ and $R_4 = 3 \\; \\Omega$. Battery: $V = 18$ V.

### Step 1: Simplify the parallel pair
$$R_{12} = \\frac{2 \\times 6}{2 + 6} = \\frac{12}{8} = 1.5 \\; \\Omega$$

### Step 2: Add all series resistances
$$R_{\\text{total}} = R_{12} + R_3 + R_4 = 1.5 + 4 + 3 = 8.5 \\; \\Omega$$

### Step 3: Total current
$$I_{\\text{total}} = \\frac{18}{8.5} \\approx 2.12 \\text{ A}$$

### Step 4: Voltages and currents
- $V_{12} = 2.12 \\times 1.5 \\approx 3.18$ V
- $V_3 = 2.12 \\times 4 \\approx 8.47$ V
- $V_4 = 2.12 \\times 3 \\approx 6.35$ V
- $I_1 = 3.18/2 \\approx 1.59$ A
- $I_2 = 3.18/6 \\approx 0.53$ A

**Check:** $3.18 + 8.47 + 6.35 = 18$ V ✓ and $1.59 + 0.53 \\approx 2.12$ A ✓
      `
    },
    {
      id: 'sp3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Combination Circuits**
      `,
      exercise: {
        questions: [
          {
            question: 'A $10 \\; \\Omega$ resistor is in parallel with a $10 \\; \\Omega$ resistor. This parallel combination is in series with a $5 \\; \\Omega$ resistor. The total resistance is:',
            options: [
              '25 Ω',
              '15 Ω',
              '10 Ω',
              '7.5 Ω'
            ],
            correctAnswer: 2,
            explanation: 'Parallel: $10 \\times 10/(10+10) = 100/20 = 5 \\; \\Omega$. Series: $5 + 5 = 10 \\; \\Omega$.'
          },
          {
            question: 'In a combination circuit, after finding total current, you "work backward" to find individual voltages and currents. The correct approach is:',
            options: [
              'Assume equal current through all resistors',
              'Use the series rule (same I) for series groups, and the parallel rule (same V) for parallel groups',
              'Divide the total voltage equally among all resistors',
              'Use only Ohm\'s law — no other rules are needed'
            ],
            correctAnswer: 1,
            explanation: 'As you expand each equivalent resistor back, apply the appropriate rule: series elements share the same current, parallel elements share the same voltage. Then use Ohm\'s law within each group.'
          }
        ]
      }
    }
  ]
}
