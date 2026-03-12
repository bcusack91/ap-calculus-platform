export const physics2KirchhoffPart7Data = {
  topicSlug: 'kirchhoffs-laws',
  sections: [
    {
      id: 'kl7-intro',
      type: 'text' as const,
      content: `
# 🏆 Synthesis & AP Review

**Part 7 of 7 — Complete Circuit Analysis Strategy**

You now have all the tools: KCL, KVL, single-loop analysis, multi-loop systems, and RC circuits. This final part brings everything together with a complete analysis strategy, common mistakes to avoid, and AP-style problems.
      `
    },
    {
      id: 'kl7-strategy',
      type: 'text' as const,
      content: `
## Complete Circuit Analysis Strategy

### Master Checklist

1. **Identify the circuit type**
   - Single loop → KVL alone is sufficient
   - Multi-loop → Need both KCL and KVL
   - Contains capacitors → Consider time-dependent (RC) behavior

2. **Label everything**
   - Assign current variables with directions to each branch
   - Label nodes (junctions) with letters
   - Identify independent loops

3. **Write equations**
   - KCL at $N - 1$ nodes
   - KVL around $B - N + 1$ loops
   - Verify: total equations = total unknowns

4. **Solve the system**
   - For 2 unknowns: substitution or elimination
   - For 3+ unknowns: systematic elimination or matrices
   - Negative answers → current flows opposite to assumed direction

5. **Check your answer**
   - Do the currents satisfy KCL at every node?
   - Does KVL hold for every loop?
   - Are the signs and magnitudes physically reasonable?

### Common Shortcuts

- **Resistors in series**: $R_{\\text{eq}} = R_1 + R_2 + \\cdots$
- **Resistors in parallel**: $\\frac{1}{R_{\\text{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots$
- **Two in parallel**: $R_{\\text{eq}} = \\frac{R_1 R_2}{R_1 + R_2}$

> Simplify with series/parallel **first**, then use Kirchhoff's laws on what remains!
      `
    },
    {
      id: 'kl7-common-mistakes',
      type: 'text' as const,
      content: `
## Common Mistakes on the AP Exam

### ❌ Mistake 1: Wrong Sign Convention
Going through a battery from + to − is $-\\varepsilon$, not $+\\varepsilon$. Going through a resistor **with** the current is $-IR$.

### ❌ Mistake 2: Forgetting a Branch
Every branch needs a current variable. If you miss one, your system is underdetermined and you'll get infinite solutions or contradictions.

### ❌ Mistake 3: Inconsistent Current Directions at Nodes
Make sure the same current ($I_k$) flowing into a node in your KCL equation is the same one that appears in the KVL equation for any loop containing that branch.

### ❌ Mistake 4: RC Circuit Mix-ups
- **Charging**: $V_C = \\varepsilon(1 - e^{-t/RC})$ — starts at 0, rises to $\\varepsilon$
- **Discharging**: $V_C = V_0 e^{-t/RC}$ — starts at $V_0$, falls to 0
- Don't confuse the two!

### ❌ Mistake 5: Unit Errors in RC
- $R$ in ohms, $C$ in farads → $\\tau$ in seconds
- $\\text{k}\\Omega \\times \\mu\\text{F}$: $(10^3)(10^{-6}) = 10^{-3}$ s = ms
- Always convert to base SI units first!

### ✅ Pro Tip for AP FRQs
Show your work clearly: state which rule you're applying (KCL or KVL), write the equation, then solve. Graders give partial credit for correct setups even if the algebra goes wrong.
      `
    },
    {
      id: 'kl7-frq-practice',
      type: 'input-boxes' as const,
      content: `
**AP-Style FRQ: Multi-Loop Circuit**

A circuit has two loops sharing a middle branch:
- Left loop: $\\varepsilon_1 = 24$ V, $R_1 = 4\\;\\Omega$ (left branch)
- Middle branch: $R_2 = 6\\;\\Omega$
- Right loop: $\\varepsilon_2 = 6$ V, $R_3 = 6\\;\\Omega$ (right branch)

Assume $I_1$ flows down through the left branch, $I_2$ flows down through the middle, $I_3$ flows down through the right branch.

KCL: $I_1 = I_2 + I_3$

Left loop (CW): $24 - 4I_1 - 6I_2 = 0$

Right loop (CW): $6I_2 - 6I_3 - 6 = 0$

1) Find $I_1$ (in A):
2) Find $I_2$ (in A):
3) Find $I_3$ (in A):
4) Power dissipated by $R_2$ (in W):
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['3', '2', '1', '24'],
        hint1: 'Substitute $I_1 = I_2 + I_3$ into the left loop: $24 - 4(I_2 + I_3) - 6I_2 = 0 \\Rightarrow 24 - 10I_2 - 4I_3 = 0$.',
        hint2: 'From right loop: $6I_2 - 6I_3 = 6 \\Rightarrow I_2 - I_3 = 1 \\Rightarrow I_2 = I_3 + 1$.',
        hint3: 'Substitute: $24 - 10(I_3 + 1) - 4I_3 = 0 \\Rightarrow 14 - 14I_3 = 0 \\Rightarrow I_3 = 1$ A.',
        explanation: 'From right loop: $I_2 = I_3 + 1$. Substituting into left loop: $24 - 10(I_3+1) - 4I_3 = 0 \\Rightarrow 14 = 14I_3 \\Rightarrow I_3 = 1$ A. Then $I_2 = 2$ A and $I_1 = 3$ A. Verify: Left $24 - 12 - 12 = 0$ ✓. Right $12 - 6 - 6 = 0$ ✓. $P_{R_2} = I_2^2 R_2 = (2)^2(6) = 24$ W.'
      }
    },
    {
      id: 'kl7-rc-review',
      type: 'input-boxes' as const,
      content: `
**RC Circuit Review**

A $30\\;\\text{V}$ battery is connected in series with a $200\\;\\Omega$ resistor and a $500\\;\\mu\\text{F}$ capacitor. The capacitor is initially uncharged.

1) Time constant $\\tau$ (in s):
2) Maximum current $I_0$ (in A):
3) Current at $t = 0.2$ s (in A, to three decimal places):
4) Voltage across the capacitor at $t = 0.1$ s (in V, to one decimal place):
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['0.1', '0.15', '0.020', '19.0', '0.10', '0.150', '0.0200', '0.02', '19.00'],
        hint1: '$\\tau = RC = (200)(500 \\times 10^{-6}) = 0.1$ s.',
        hint2: '$I_0 = \\varepsilon / R = 30/200 = 0.15$ A.',
        hint3: '$I(0.2) = 0.15 \\cdot e^{-0.2/0.1} = 0.15 \\cdot e^{-2} = 0.15 \\times 0.1353 = 0.0203 \\approx 0.020$ A.',
        explanation: '$\\tau = 0.1$ s. $I_0 = 0.15$ A. $I(0.2) = 0.15 e^{-2} = 0.020$ A. $V_C(0.1) = 30(1 - e^{-1}) = 30(0.632) = 19.0$ V.'
      }
    },
    {
      id: 'kl7-mastery-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mastery Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'KCL is based on conservation of ____; KVL is based on conservation of ____.',
            options: [
              'Energy; Charge',
              'Charge; Energy',
              'Charge; Momentum',
              'Energy; Momentum'
            ],
            correctAnswer: 1,
            explanation: 'KCL (junction rule) = conservation of charge. KVL (loop rule) = conservation of energy.'
          },
          {
            question: 'A circuit has 3 nodes and 5 branches. How many KCL and KVL equations do you write?',
            options: [
              '2 KCL + 3 KVL',
              '3 KCL + 2 KVL',
              '2 KCL + 2 KVL',
              '3 KCL + 3 KVL'
            ],
            correctAnswer: 0,
            explanation: 'KCL: $N - 1 = 3 - 1 = 2$ equations. KVL: $B - N + 1 = 5 - 3 + 1 = 3$ equations. Total: 5 = number of unknowns ✓.'
          },
          {
            question: 'In an RC charging circuit, after $5\\tau$ the capacitor voltage is approximately:',
            options: [
              '50% of $\\varepsilon$',
              '63% of $\\varepsilon$',
              '95% of $\\varepsilon$',
              '99% of $\\varepsilon$'
            ],
            correctAnswer: 3,
            explanation: '$V_C(5\\tau) = \\varepsilon(1 - e^{-5}) = \\varepsilon(1 - 0.0067) = 0.993\\varepsilon \\approx 99.3\\%$ of $\\varepsilon$.'
          },
          {
            question: 'A fully charged capacitor in a DC circuit behaves like:',
            options: [
              'A short circuit (wire)',
              'A resistor',
              'An open circuit (break in wire)',
              'A battery'
            ],
            correctAnswer: 2,
            explanation: 'A fully charged capacitor has $V_C = \\varepsilon$ and $I = 0$. No current flows — it acts like an open circuit.'
          },
          {
            question: 'You traverse a loop and write: $+12 - 3I_1 + 5I_2 - 8 = 0$. This loop contains:',
            options: [
              'One battery and one resistor',
              'Two batteries and two resistors',
              'Two batteries and one resistor',
              'One battery and two resistors'
            ],
            correctAnswer: 1,
            explanation: 'The $+12$ and $-8$ terms are EMFs (two batteries). The $-3I_1$ and $+5I_2$ terms are resistor voltage changes (two resistors, traversed in opposite relative directions to their currents).'
          }
        ]
      }
    }
  ]
}
