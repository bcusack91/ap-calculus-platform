export const physCEMPotentialPart1Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p1-intro',
      type: 'text' as const,
      content: `# Electric Potential Energy

**Part 1 of 7 — Work and Energy in Electric Fields**

---

### Potential Energy of Point Charges

$U = k\\frac{q_1 q_2}{r} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_1 q_2}{r}$

| Sign | Interpretation |
|------|---------------|
| $U > 0$ | Like charges (repulsive) — energy stored |
| $U < 0$ | Unlike charges (attractive) — bound state |

---

### Work and the Conservative Field

The electric force is conservative, so the work it does is path-independent and equals the *drop* in potential energy:

$W_{\\text{electric}} = -\\Delta U = -(U_f - U_i)$

Equivalently, potential energy is built up by integrating the force along the path:

$\\Delta U = -\\int_{a}^{b} \\vec{F}\\cdot d\\vec{l}$

By the work–energy theorem, with only the electric force acting, $W_{\\text{electric}} = \\Delta KE$.

> Work done by the electric field equals the decrease in PE. Positive charges naturally move from high PE to low PE.`
    },
    {
      id: 'physicsc-electric-potential-em-p1-worked',
      type: 'text' as const,
      content: `### Worked Example — Energy of a Three-Charge Configuration

**Problem.** Three point charges sit at the corners of an equilateral triangle of side $a = 0.10\\,\\text{m}$: $q_1 = +2.0\\,\\mu\\text{C}$, $q_2 = +2.0\\,\\mu\\text{C}$, and $q_3 = -3.0\\,\\mu\\text{C}$. Find the total electric potential energy of the configuration. Use $k = 9.0\\times10^{9}\\,\\text{N}\\cdot\\text{m}^2/\\text{C}^2$.

**Step 1 — Sum over all distinct pairs.** Total PE is the sum of the pairwise energies:

$U = \\frac{k}{a}\\left(q_1 q_2 + q_1 q_3 + q_2 q_3\\right)$

since every pair is separated by the same distance $a$.

**Step 2 — Compute the products** (in units of $\\mu\\text{C}^2$, i.e. $10^{-12}\\,\\text{C}^2$):

$q_1 q_2 = (+2)(+2) = +4, \\quad q_1 q_3 = (+2)(-3) = -6, \\quad q_2 q_3 = (+2)(-3) = -6$

**Step 3 — Add them.**

$q_1 q_2 + q_1 q_3 + q_2 q_3 = 4 - 6 - 6 = -8\\ (\\times10^{-12}\\,\\text{C}^2)$

**Step 4 — Multiply by $k/a$.**

$U = \\frac{(9.0\\times10^{9})}{0.10}\\,(-8\\times10^{-12}) = (9.0\\times10^{10})(-8\\times10^{-12})$

$U = -0.72\\,\\text{J}$

**Takeaway.** The configuration energy is the *scalar* sum over distinct pairs — the negative result means net energy was released assembling these charges (the attractive pairs dominate).`
    },
    {
      id: 'physicsc-electric-potential-em-p1-deepen',
      type: 'text' as const,
      content: `### Potential Energy vs. Force: Why the Integral Matters

The electric force between two charges, $F = kq_1q_2/r^2$, falls off as $1/r^2$, while the potential energy $U = kq_1q_2/r$ falls off as $1/r$. These are not independent — one is the integral of the other.

Starting from the conservative-force definition,

$U(r) = -\\int_{\\infty}^{r} F\\,dr' = -\\int_{\\infty}^{r}\\frac{kq_1q_2}{r'^2}\\,dr'$

$U(r) = -kq_1q_2\\left[-\\frac{1}{r'}\\right]_{\\infty}^{r} = \\frac{kq_1q_2}{r}$

with the convention $U(\\infty) = 0$. Reversing the operation, the force is the negative derivative of $U$:

$F = -\\frac{dU}{dr} = \\frac{kq_1q_2}{r^2}$

**Why the reference point matters.** Only *differences* in potential energy are physical. Choosing $U = 0$ at infinity is convenient for isolated charges but is just a choice — what enters the work–energy theorem is always $\\Delta U$.

> $U$ is the integral of $F$ over distance; $F$ is the (negative) derivative of $U$. Same physics, two viewpoints.`
    },
    {
      id: 'physicsc-electric-potential-em-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Two positive charges are brought closer together. The PE:',
            options: ['Increases', 'Decreases', 'Stays the same', 'Becomes zero'],
            correctAnswer: 0,
            explanation: 'Like charges have $U = kq_1q_2/r > 0$. As $r$ decreases, $U$ increases (work must be done against repulsion).'
          },
          {
            question: 'Work done by the electric force on a charge moving in a uniform field can be written as:',
            options: ['$W = qEd$', '$W = -\\Delta U$', '$W = \\Delta KE$ (if only the electric force acts)', 'All of the above can be correct'],
            correctAnswer: 3,
            explanation: 'All three are valid expressions for the work done by the electric force in the appropriate setting.'
          },
          {
            question: 'A proton ($q = +e$) is released from rest in a region where it moves through a potential energy drop of $3.2\\times10^{-17}\\,\\text{J}$. Its final kinetic energy is:',
            options: ['$0$', '$3.2\\times10^{-17}\\,\\text{J}$', '$-3.2\\times10^{-17}\\,\\text{J}$', '$6.4\\times10^{-17}\\,\\text{J}$'],
            correctAnswer: 1,
            explanation: 'With only the electric force, $\\Delta KE = W = -\\Delta U = +3.2\\times10^{-17}\\,\\text{J}$. Starting from rest, this is the final KE.'
          },
          {
            question: 'Two charges $+q$ and $-q$ are separated by distance $r$. The potential energy of the pair is:',
            options: ['$+kq^2/r$', '$-kq^2/r$', '$0$', '$kq^2/r^2$'],
            correctAnswer: 1,
            explanation: '$U = kq_1q_2/r = k(+q)(-q)/r = -kq^2/r$. The negative sign reflects the attractive (bound) configuration.'
          },
          {
            question: 'The work required to assemble a configuration of charges equals:',
            options: [
              'The total kinetic energy of the charges',
              'The total electric potential energy of the configuration',
              'Always zero for a stable configuration',
              'The sum of the charges'
            ],
            correctAnswer: 1,
            explanation: 'The external work to bring charges from infinity to their positions equals the configuration’s total potential energy $U$.'
          },
          {
            question: 'If every charge in a configuration is doubled, the total potential energy of the configuration:',
            options: ['Doubles', 'Quadruples', 'Is unchanged', 'Halves'],
            correctAnswer: 1,
            explanation: 'Each pairwise term $U_{ij} = kq_iq_j/r_{ij}$ scales as the product of two charges, so doubling all charges multiplies every term — and the total — by $2 \\times 2 = 4$.'
          }
        ]
      }
    }
  ]
};
