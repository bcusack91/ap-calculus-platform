export const physics2SeriesParallelPart7Data = {
  topicSlug: 'series-parallel-circuits',
  sections: [
    {
      id: 'sp7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

This final part integrates everything from Parts 1–6. You'll develop a systematic circuit analysis strategy, review the most common AP mistakes, and tackle AP-style problems.

In this part you'll learn:
- A step-by-step strategy for any circuit problem
- Common mistakes that cost points on the AP exam
- How to approach AP free-response circuit questions
- A comprehensive mastery quiz
      `
    },
    {
      id: 'sp7-strategy',
      type: 'text' as const,
      content: `
## Circuit Analysis Strategy

### Step-by-Step Approach

1. **Draw and label** — Redraw the circuit neatly. Label all resistors/capacitors and the source.
2. **Identify topology** — Find series and parallel groups.
3. **Simplify** — Reduce combination groups one step at a time.
4. **Solve for totals** — Find $R_{\\text{total}}$ (or $C_{\\text{total}}$), then $I_{\\text{total}}$ or $Q_{\\text{total}}$.
5. **Expand backward** — Work back through each simplification step, applying:
   - **Series:** same $I$, voltages add
   - **Parallel:** same $V$, currents add
6. **Verify** — Check that voltages around any loop sum to zero, currents at any node balance, and total power balances.

### Quick Reference

| Quantity | Series | Parallel |
|----------|--------|----------|
| $R$ | $R_1 + R_2$ | $\\frac{R_1 R_2}{R_1 + R_2}$ |
| $C$ | $\\frac{C_1 C_2}{C_1 + C_2}$ | $C_1 + C_2$ |
| Same... | $I$ (resistors), $Q$ (capacitors) | $V$ (both) |
| Splits... | $V$ | $I$ (resistors), $Q$ (capacitors) |
      `
    },
    {
      id: 'sp7-common-mistakes',
      type: 'text' as const,
      content: `
## Common AP Mistakes

### ❌ Mistake 1: Confusing Resistor and Capacitor Rules

| | Series adds | Reciprocal adds |
|---|---|---|
| **Resistors** | ✅ Series | ✅ Parallel |
| **Capacitors** | ✅ Parallel | ✅ Series |

They're **opposite**! The #1 error is applying resistor series rules to capacitors in series.

### ❌ Mistake 2: "Bigger R = More Power" Always

- In **series**: yes, bigger $R$ → more power ($P = I^2 R$)
- In **parallel**: **no**, bigger $R$ → less power ($P = V^2/R$)

The relationship depends on whether current or voltage is shared!

### ❌ Mistake 3: Forgetting to Work Backward

Finding $R_{\\text{total}}$ is only half the problem. You must expand back to find individual voltages and currents.

### ❌ Mistake 4: Assuming Equal Distribution

In series, voltage does NOT split equally (unless $R$ values are equal).
In parallel, current does NOT split equally (unless $R$ values are equal).

### ❌ Mistake 5: Adding Reciprocals Incorrectly

$$\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2} \\neq \\frac{1}{R_1 + R_2}$$

Don't forget to take the final reciprocal!
      `
    },
    {
      id: 'sp7-mistakes-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mistake Spotter**
      `,
      exercise: {
        questions: [
          {
            question: 'A student says: "Three $6 \\; \\mu$F capacitors in series give $18 \\; \\mu$F total." This is:',
            options: [
              'Correct',
              'Incorrect — that rule is for capacitors in parallel',
              'Incorrect — the answer should be 2 μF',
              'Both B and C'
            ],
            correctAnswer: 3,
            explanation: 'The student applied the parallel rule to a series combination. For series capacitors: $1/C = 1/6 + 1/6 + 1/6 = 3/6 = 1/2$, so $C = 2 \\; \\mu$F. The correct answer is 2 μF, and the student confused the rules.'
          },
          {
            question: 'Two resistors ($4 \\; \\Omega$ and $8 \\; \\Omega$) are in parallel across a 24 V battery. A student says the $8 \\; \\Omega$ resistor dissipates more power. This is:',
            options: [
              'Correct — larger resistance means more power',
              'Incorrect — in parallel, the smaller resistor dissipates more power',
              'Correct — the 8 Ω resistor has more current',
              'Incorrect — they dissipate equal power'
            ],
            correctAnswer: 1,
            explanation: 'In parallel, both resistors have the same voltage. $P = V^2/R$, so the smaller $R$ (4 Ω) gets more power: $P_4 = 576/4 = 144$ W vs $P_8 = 576/8 = 72$ W.'
          }
        ]
      }
    },
    {
      id: 'sp7-frq-preview',
      type: 'text' as const,
      content: `
## AP Free-Response Strategy

AP Physics 2 circuit FRQs typically ask you to:

### Part (a): Rank or Compare
"Rank the brightness of the bulbs" or "Compare the current through each resistor."

**Strategy:** Identify the topology, determine which quantities are shared, then compare.

### Part (b): Calculate
"Determine the current through $R_2$" or "Calculate the total power."

**Strategy:** Reduce the circuit, find totals, expand backward.

### Part (c): Predict a Change
"A switch opens, disconnecting $R_3$. What happens to the brightness of $R_1$?"

**Strategy:**
1. Analyze the circuit **before** the change
2. Analyze the circuit **after** the change
3. Compare the quantity of interest

### Part (d): Justify with Physics
"Explain your reasoning using principles of circuit analysis."

**Strategy:** State the relevant rule (Kirchhoff's laws, Ohm's law, series/parallel properties) and connect it logically to your answer.
      `
    },
    {
      id: 'sp7-synthesis-drill',
      type: 'input-boxes' as const,
      content: `
**Synthesis Problem**

A circuit has a 36 V battery connected to $R_1 = 12 \\; \\Omega$ in series with the parallel combination of $R_2 = 8 \\; \\Omega$ and $R_3 = 24 \\; \\Omega$.

1) $R_{\\text{total}}$ of the circuit (in $\\Omega$)

2) Total current from the battery (in A)

3) Power dissipated by $R_1$ (in W)

4) Current through $R_3$ (in A)

5) Total power delivered by the battery (in W)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['18', '2', '48', '0.5', '72'],
        hint1: '$R_{23} = 8 \\times 24/(8+24) = 192/32 = 6 \\; \\Omega$. $R_{\\text{total}} = 12 + 6 = 18 \\; \\Omega$.',
        hint2: '$I = 36/18 = 2$ A. $P_1 = I^2 R_1 = 4 \\times 12 = 48$ W.',
        hint3: '$V_{23} = I \\times R_{23} = 2 \\times 6 = 12$ V. $I_3 = 12/24 = 0.5$ A. $P_{\\text{total}} = IV = 2 \\times 36 = 72$ W.',
        explanation: '$R_{23} = 6 \\; \\Omega$. $R_{\\text{total}} = 18 \\; \\Omega$. $I = 2$ A. $P_1 = 48$ W. $V_{23} = 12$ V. $I_3 = 0.5$ A. $P_{\\text{total}} = 72$ W. Check: $P_1 + P_2 + P_3 = 48 + 144/8 + 144/24 = 48 + 18 + 6 = 72$ W ✓.'
      }
    },
    {
      id: 'sp7-mastery-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mastery Quiz — Series & Parallel Circuits**
      `,
      exercise: {
        questions: [
          {
            question: 'Three identical resistors (each $R$) can be combined in different ways. Which arrangement gives the LARGEST total resistance?',
            options: [
              'All three in parallel',
              'All three in series',
              'Two in parallel, that combination in series with the third',
              'Two in series, that combination in parallel with the third'
            ],
            correctAnswer: 1,
            explanation: 'All in series: $3R$ (largest). Two in parallel + one in series: $R/2 + R = 3R/2$. Two in series + one in parallel: $(2R)(R)/(2R+R) = 2R/3$. All in parallel: $R/3$ (smallest).'
          },
          {
            question: 'A $10 \\; \\mu$F capacitor and a $40 \\; \\mu$F capacitor are connected in series across a 20 V battery. The voltage across the $10 \\; \\mu$F capacitor is:',
            options: [
              '4 V',
              '10 V',
              '16 V',
              '20 V'
            ],
            correctAnswer: 2,
            explanation: '$C_{\\text{series}} = (10 \\times 40)/(10+40) = 400/50 = 8 \\; \\mu$F. $Q = 8 \\times 20 = 160 \\; \\mu$C. $V_1 = Q/C_1 = 160/10 = 16$ V. The smaller capacitor gets the larger voltage (opposite of resistors in series!).'
          },
          {
            question: 'Two identical lightbulbs are initially in series with a battery. One bulb is then removed and replaced with a wire (short circuit). The remaining bulb:',
            options: [
              'Gets dimmer',
              'Stays the same brightness',
              'Gets brighter',
              'Burns out immediately'
            ],
            correctAnswer: 2,
            explanation: 'With two bulbs in series: $I = V/(2R)$, $P = I^2 R = V^2/(4R)$. With one bulb: $I = V/R$, $P = V^2/R$. Power quadruples, so the remaining bulb is 4× brighter (and may indeed burn out if not rated for it!).'
          },
          {
            question: 'In a parallel circuit, one branch is removed (opened). The current through the remaining branches:',
            options: [
              'Increases (current redistributes)',
              'Decreases (less total current)',
              'Stays the same (each branch is independent)',
              'Drops to zero'
            ],
            correctAnswer: 2,
            explanation: 'Each parallel branch sees the same battery voltage regardless of other branches. Removing one branch doesn\'t affect the voltage across (or current through) the others. Only the total current decreases.'
          },
          {
            question: 'A circuit has a 12 V battery, a $3 \\; \\Omega$ resistor in series with two $6 \\; \\Omega$ resistors in parallel. The total power is:',
            options: [
              '12 W',
              '18 W',
              '24 W',
              '36 W'
            ],
            correctAnswer: 2,
            explanation: 'Parallel: $6 \\times 6/(6+6) = 3 \\; \\Omega$. Total: $3 + 3 = 6 \\; \\Omega$. $I = 12/6 = 2$ A. $P = IV = 2 \\times 12 = 24$ W.'
          }
        ]
      }
    }
  ]
}
