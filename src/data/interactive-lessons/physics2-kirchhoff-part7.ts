export const physics2KirchhoffPart7Data = {
  topicSlug: 'kirchhoffs-laws',
  sections: [
    {
      id: 'kl7-intro',
      type: 'text' as const,
      content: `
# 🏆 Synthesis & AP Review

**Part 7 of 7 — Complete Circuit Analysis Strategy**

You now have all the tools: the junction rule, the loop rule, single-loop analysis, multi-loop circuits, potential maps and meters, and RC circuits. This final part brings everything together with a complete analysis strategy, common mistakes to avoid, and AP-style problems.
      `
    },
    {
      id: 'kl7-strategy',
      type: 'text' as const,
      content: `
## Complete Circuit Analysis Strategy

### Master Checklist

1. **Identify the circuit type**
   - Single loop → the loop rule alone is sufficient
   - Multi-loop → combine the junction rule and the loop rule
   - Contains capacitors → analyze the initial state (capacitor = wire) and the final state (capacitor = break)

2. **Label everything**
   - Assign a current with a direction to each branch
   - Label junctions and any points whose potential you need
   - Pick a reference point at $0$ V if potentials are asked for

3. **Write equations**
   - Junction rule wherever branches meet
   - Loop rule around closed paths, each through at least one new branch
   - Name the principle: junction rule = conservation of charge, loop rule = conservation of energy

4. **Solve**
   - Substitution or elimination for two or three unknowns
   - Negative answers → current flows opposite to the assumed direction

5. **Check your answer**
   - Do the currents satisfy the junction rule at every junction?
   - Does the loop rule hold for every loop?
   - Does the battery current match $\\varepsilon / R_{\\text{eq}}$?

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

### ❌ Mistake 2: Using One Current for Different Branches
After a junction, the current divides. A loop equation that uses the battery current for a resistor in a parallel branch double-counts charge.

### ❌ Mistake 3: Inconsistent Current Directions
Make sure the same current ($I_k$) flowing into a junction in your junction equation is the same one, with the same direction, that appears in every loop equation through that branch.

### ❌ Mistake 4: RC Snapshot Mix-ups
- **Uncharged capacitor, just after closing**: acts like a wire; current is maximum
- **After a long time**: acts like a break; no current in its branch, and $V_C$ equals the potential difference of whatever it is in parallel with
- **One time constant**: about 63% of the final charge (charging) or 37% of the initial charge (discharging)

### ❌ Mistake 5: Unit Errors in RC
- $R$ in ohms, $C$ in farads → $\\tau$ in seconds
- $\\text{k}\\Omega \\times \\mu\\text{F}$: $(10^3)(10^{-6}) = 10^{-3}$ s = ms
- Always convert to base SI units first!

### ✅ Pro Tip for AP FRQs
Show your work clearly: state which rule you are applying (junction or loop), write the equation, then solve. Graders give partial credit for correct setups even if the algebra goes wrong.
      `
    },
    {
      id: 'kl7-frq-practice',
      type: 'input-boxes' as const,
      content: `
**AP-Style FRQ: Multi-Loop Circuit**

A $24$ V battery is in series with $R_1 = 4\\;\\Omega$. The current $I_1$ then splits at a junction into $I_2$ through $R_2 = 6\\;\\Omega$ and $I_3$ through $R_3 = 12\\;\\Omega$, which are in parallel.

Junction rule: $I_1 = I_2 + I_3$

Loop through $R_2$: $24 - 4I_1 - 6I_2 = 0$

Loop through $R_3$: $24 - 4I_1 - 12I_3 = 0$

1) Find $I_1$ (in A):

2) Find $I_2$ (in A):

3) Find $I_3$ (in A):

4) Power dissipated by $R_2$ (in W):
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['3', '2', '1', '24'],
        hint1: 'Subtracting the loop equations gives $6I_2 = 12I_3$, so $I_2 = 2I_3$ and $I_1 = 3I_3$.',
        hint2: 'Substitute into the loop through $R_3$: $24 - 12I_3 - 12I_3 = 0$.',
        hint3: 'Check with $R_{\\text{eq}} = 4 + \\frac{(6)(12)}{6 + 12} = 8\\;\\Omega$. Then $P_{R_2} = I_2^2R_2$.',
        explanation: '$24 = 24I_3$ gives $I_3 = 1$ A, so $I_2 = 2$ A and $I_1 = 3$ A, matching $24/8 = 3$ A. Verify the loop through $R_2$: $24 - 12 - 12 = 0$ ✓. $P_{R_2} = (2)^2(6) = 24$ W.'
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

3) Charge on the capacitor after a long time (in mC):

4) Energy stored in the capacitor after a long time (in J):
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['0.1', '0.15', '15', '0.225'],
        hint1: '$\\tau = RC = (200)(500 \\times 10^{-6})$.',
        hint2: 'The current is largest just after closing, when the capacitor acts like a wire: $I_0 = \\varepsilon / R$.',
        hint3: 'After a long time $V_C = \\varepsilon$: $Q = C\\varepsilon$ and $U_C = \\tfrac{1}{2}C\\varepsilon^2$.',
        explanation: '$\\tau = 0.1$ s. $I_0 = 30/200 = 0.15$ A. $Q = (500 \\times 10^{-6})(30) = 0.015$ C $= 15$ mC. $U_C = \\tfrac{1}{2}(500 \\times 10^{-6})(30)^2 = 0.225$ J.'
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
            question: 'A single battery feeds two parallel branches with unequal resistances. Which statement must be true?',
            options: [
              'Each branch carries the same current',
              'Branch currents add to the total',
              'More resistance means more branch current',
              'The branch potential differences sum to the emf'
            ],
            correctAnswer: 1,
            explanation: 'The junction rule (conservation of charge) requires the branch currents to sum to the current leaving the battery. Unequal resistances give unequal currents, the larger resistance carries the smaller current, and parallel branches share one potential difference rather than adding.'
          },
          {
            question: 'In an RC charging circuit, after one time constant the charge on the capacitor is approximately:',
            options: [
              '37% of its final value',
              '50% of its final value',
              '63% of its final value',
              '100% of its final value'
            ],
            correctAnswer: 2,
            explanation: 'One time constant brings a charging capacitor to about 63% of its final charge. 37% is what remains after one time constant of discharging, 50% is a common guess, and the full value is approached only after many time constants.'
          },
          {
            question: 'A fully charged capacitor in a DC circuit behaves like:',
            options: [
              'A short circuit carrying maximum current',
              'A resistor in series with the source',
              'An open circuit',
              'A second battery driving current'
            ],
            correctAnswer: 2,
            explanation: 'A fully charged capacitor has $V_C = \\varepsilon$ and $I = 0$. No current flows — it acts like an open circuit (a break in the wire).'
          },
          {
            question: 'You traverse a single loop and write: $+12 - 3I - 8 - 5I = 0$. This loop contains:',
            options: [
              'One battery and one resistor',
              'Two batteries and two resistors',
              'Two batteries and one resistor',
              'One battery and two resistors'
            ],
            correctAnswer: 1,
            explanation: 'The $+12$ and $-8$ terms are EMFs (two batteries). The $-3I$ and $-5I$ terms are drops across two resistors that carry the same loop current; the 8 V battery is crossed from + to −, so it opposes the 12 V battery.'
          }
        ]
      }
    }
  ]
}
