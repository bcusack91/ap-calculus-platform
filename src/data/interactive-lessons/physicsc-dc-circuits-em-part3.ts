export const physCEMCircuitsPart3Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p3-intro',
      type: 'text' as const,
      content: `# Kirchhoff's Rules

**Part 3 of 7 — Analyzing Complex Circuits**

---

### Junction Rule (KCL)

$\\sum I_{\\text{in}} = \\sum I_{\\text{out}}$

This is a statement of conservation of charge at any junction (node).

---

### Loop Rule (KVL)

$\\sum \\Delta V = 0$

Around any closed loop, the total change in potential is zero — a statement of energy conservation.

**Sign Conventions:**
| Element | Direction of travel | $\\Delta V$ |
|---------|-----------|-------------|
| Battery | $-$ to $+$ | $+\\mathcal{E}$ |
| Battery | $+$ to $-$ | $-\\mathcal{E}$ |
| Resistor | With the current | $-IR$ |
| Resistor | Against the current | $+IR$ |

> Write enough independent equations (junction + loop) to solve for all unknown currents.`
    },
    {
      id: 'physicsc-dc-circuits-em-p3-worked',
      type: 'text' as const,
      content: `### Worked Example — A Two-Loop Circuit

**Problem.** A battery $\\mathcal{E} = 12\\,\\text{V}$ connects to node A. From A, two parallel branches run to node B: branch 1 has $R_1 = 4\\,\\Omega$, branch 2 has $R_2 = 6\\,\\Omega$. From B the current returns through $R_3 = 2\\,\\Omega$ back to the battery. Find the current $I_3$ through $R_3$.

**Step 1 — Recognize structure.** $R_1 \\parallel R_2$, then in series with $R_3$. Let $I_1$, $I_2$ be the branch currents and $I_3$ the return current.

**Step 2 — Junction rule at A.**

$I_3 = I_1 + I_2$

**Step 3 — Both branches share the same A-to-B voltage** $V_{AB}$, so $I_1 = V_{AB}/4$ and $I_2 = V_{AB}/6$. Substituting:

$I_3 = \\frac{V_{AB}}{4} + \\frac{V_{AB}}{6} = V_{AB}\\left(\\frac{3 + 2}{12}\\right) = \\frac{5V_{AB}}{12}$

**Step 4 — Loop rule (battery, through B, through $R_3$).**

$\\mathcal{E} - V_{AB} - I_3 R_3 = 0 \\;\\Rightarrow\\; 12 = V_{AB} + 2I_3$

**Step 5 — Solve the system.** From Step 3, $V_{AB} = \\tfrac{12}{5}I_3 = 2.4\\,I_3$. Substitute:

$12 = 2.4\\,I_3 + 2I_3 = 4.4\\,I_3 \\;\\Rightarrow\\; I_3 = \\frac{12}{4.4} \\approx 2.7\\,\\text{A}$

**Check.** $R_1 \\parallel R_2 = (4)(6)/10 = 2.4\\,\\Omega$, so $R_{eq} = 2.4 + 2 = 4.4\\,\\Omega$ and $I_3 = 12/4.4 \\approx 2.7\\,\\text{A}$. Consistent.`
    },
    {
      id: 'physicsc-dc-circuits-em-p3-worked2',
      type: 'text' as const,
      content: `### Worked Example (Calculus) — The Loop Rule Produces a Differential Equation

The loop rule is not limited to constant currents. Applied to a circuit with a capacitor, it becomes a **differential equation** in time. Consider a battery $\\mathcal{E}$, resistor $R$, and initially uncharged capacitor $C$ in a single charging loop.

**Step 1 — Write the loop rule, term by term.** Traveling around the loop (battery rise, resistor drop, capacitor drop):

$\\mathcal{E} - IR - \\frac{q}{C} = 0$

**Step 2 — Replace $I$ with its calculus definition.** During charging the capacitor's charge grows, so $I = +\\dfrac{dq}{dt}$:

$\\mathcal{E} - R\\frac{dq}{dt} - \\frac{q}{C} = 0$

**Step 3 — Rearrange into a first-order ODE.**

$R\\frac{dq}{dt} = \\mathcal{E} - \\frac{q}{C} \\;\\Rightarrow\\; \\frac{dq}{dt} = \\frac{1}{R}\\left(\\mathcal{E} - \\frac{q}{C}\\right)$

**Step 4 — Separate variables and integrate.** With $q(0) = 0$ and final charge $q$:

$\\int_0^{q}\\frac{dq'}{\\,\\mathcal{E} - q'/C\\,} = \\int_0^{t}\\frac{dt'}{R}$

The left side integrates to $-C\\ln\\!\\left(\\mathcal{E} - q/C\\right)$ evaluated from $0$ to $q$, giving

$-C\\ln\\!\\frac{\\mathcal{E} - q/C}{\\mathcal{E}} = \\frac{t}{R}$

**Step 5 — Solve for $q(t)$.** Exponentiate and rearrange:

$q(t) = C\\mathcal{E}\\left(1 - e^{-t/RC}\\right)$

**Takeaway.** Kirchhoff's loop rule plus $I = dq/dt$ turns directly into a separable differential equation; the exponential charging law is its solution, not a separate formula to memorize.`
    },
    {
      id: 'physicsc-dc-circuits-em-p3-deepen',
      type: 'text' as const,
      content: `### A Reliable Recipe for Multi-Loop Circuits

When the network won't reduce by simple series/parallel collapsing (e.g. a Wheatstone-bridge layout), fall back on the full Kirchhoff procedure:

1. **Assign a current** (with an assumed direction) to every branch. If there are $b$ branches with unknown currents, you need $b$ independent equations.
2. **Junction equations.** With $n$ nodes, exactly $n - 1$ of the junction equations are independent.
3. **Loop equations.** Make up the remaining $b - (n - 1)$ equations from independent loops, applying the sign conventions consistently.
4. **Solve the linear system** (substitution or matrices).
5. **Interpret signs.** A negative current just means the true direction is opposite your guess.

**Energy bookkeeping.** Once all currents are known, the power delivered by each EMF, $P = \\mathcal{E} I$, must equal the total dissipated, $\\sum I^2 R$ — a built-in check on your algebra.

> Count branches and nodes first; that tells you exactly how many equations to write — no more, no less.`
    },
    {
      id: 'physicsc-dc-circuits-em-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: "Kirchhoff's junction rule is based on conservation of:",
            options: ['Energy', 'Charge', 'Momentum', 'Mass'],
            correctAnswer: 1,
            explanation: 'The junction rule states that charge in equals charge out — conservation of charge.'
          },
          {
            question: "Kirchhoff's loop rule is based on conservation of:",
            options: ['Charge', 'Mass', 'Energy', 'Momentum'],
            correctAnswer: 2,
            explanation: 'The loop rule states that the total potential change around a closed loop is zero — conservation of energy.'
          },
          {
            question: 'Three wires meet at a junction. $5\\,\\text{A}$ flows in along one wire and $2\\,\\text{A}$ flows in along another. The current in the third wire is:',
            options: ['$3\\,\\text{A}$ out', '$7\\,\\text{A}$ out', '$7\\,\\text{A}$ in', '$3\\,\\text{A}$ in'],
            correctAnswer: 1,
            explanation: 'By the junction rule, $I_{in} = I_{out}$. Here $5 + 2 = 7\\,\\text{A}$ enters, so $7\\,\\text{A}$ must leave through the third wire.'
          },
          {
            question: 'When traversing a resistor in the SAME direction as the assumed current, the potential change to use in the loop rule is:',
            options: ['$+IR$', '$-IR$', '$0$', '$+\\mathcal{E}$'],
            correctAnswer: 1,
            explanation: 'Current flows from high to low potential through a resistor, so traveling with the current you drop in potential: $\\Delta V = -IR$.'
          },
          {
            question: 'A single loop has a $9\\,\\text{V}$ battery driving current through a $1\\,\\Omega$ and a $2\\,\\Omega$ resistor in series. Applying the loop rule, the current is:',
            options: ['$9\\,\\text{A}$', '$4.5\\,\\text{A}$', '$3\\,\\text{A}$', '$1\\,\\text{A}$'],
            correctAnswer: 2,
            explanation: 'Loop rule: $9 - I(1) - I(2) = 0 \\Rightarrow 9 = 3I \\Rightarrow I = 3\\,\\text{A}$.'
          },
          {
            question: 'If a current variable solved from Kirchhoff equations comes out negative, it means:',
            options: [
              'You made an arithmetic error',
              'The actual current flows opposite to the assumed direction',
              'The current is imaginary',
              'The circuit is open'
            ],
            correctAnswer: 1,
            explanation: 'A negative result simply means the true direction is opposite to the one you assumed; the magnitude is still correct.'
          }
        ]
      }
    }
  ]
};
