export const physics2ElectrostaticsPart7Data = {
  topicSlug: 'electric-charge-coulombs-law',
  sections: [
    {
      id: 'ec7-intro',
      type: 'text' as const,
      content: `
# 🏆 Synthesis & AP Exam Strategies

**Part 7 of 7 — The Grand Finale**

You've built every tool you need. Now let's put it all together with multi-step problems and the strategies that top-scoring AP students use.
      `
    },
    {
      id: 'ec7-ap-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy Guide

### What the Exam Tests

The AP Physics 2 exam tests Coulomb's Law in three main ways:

**1. Proportional Reasoning (most common)**
"What happens to the force when ___?" → Use scaling, not calculation.

**2. Vector Superposition**
Three or more charges → find net force. Usually 1D or with symmetric 2D geometry.

**3. Conceptual Understanding**
Conductors vs insulators, charging methods, conservation of charge.

### Time-Saving Tips

- 🚀 **Don't plug in numbers for scaling questions** — use ratios
- 🎯 **Symmetry first** — if the geometry is symmetric, exploit it to eliminate components
- 📐 **Draw before you solve** — a quick diagram prevents sign errors
- ⚡ **Watch units** — μC → C is the #1 calculation error
- 🧪 **Sanity check** — lab-scale forces should be in the range of 0.001–10 N
      `
    },
    {
      id: 'ec7-synthesis-problem1',
      type: 'text' as const,
      content: `
## Synthesis Problem 1 — Combined Concepts

**Problem:** Two identical metal spheres, A and B, are on insulating stands.
- A has charge $+12\\ \\mu\\text{C}$
- B has charge $-4\\ \\mu\\text{C}$
- They are 0.30 m apart

**(a)** What is the force between them?
**(b)** They are touched together and separated back to 0.30 m. What is the new force?

### Solution

**(a) Before contact:**

$$F = k\\frac{|q_A q_B|}{r^2} = (9 \\times 10^9)\\frac{(12 \\times 10^{-6})(4 \\times 10^{-6})}{(0.30)^2}$$

$$F = (9 \\times 10^9)\\frac{48 \\times 10^{-12}}{0.09} = (9 \\times 10^9)(5.33 \\times 10^{-10}) = 4.8 \\text{ N}$$

Direction: **Attractive** (opposite charges)

**(b) After contact:**

Charge sharing: $q_{\\text{each}} = \\frac{+12 + (-4)}{2} = +4\\ \\mu\\text{C}$

$$F = (9 \\times 10^9)\\frac{(4 \\times 10^{-6})^2}{(0.30)^2} = (9 \\times 10^9)\\frac{16 \\times 10^{-12}}{0.09} = 1.6 \\text{ N}$$

Direction: **Repulsive** (both positive now)

The force decreased from 4.8 N attractive to 1.6 N repulsive — and changed direction!
      `
    },
    {
      id: 'ec7-synthesis-problem2',
      type: 'text' as const,
      content: `
## Synthesis Problem 2 — Scaling + Superposition

**Problem:** Two charges $+Q$ and $+4Q$ are separated by distance $d$.

**(a)** Where along the line between them is the net force on a test charge zero?

### Solution

Let the test charge $+q$ be at distance $x$ from $+Q$ (so distance $d - x$ from $+4Q$).

At equilibrium: $F_1 = F_2$

$$k\\frac{Qq}{x^2} = k\\frac{4Qq}{(d-x)^2}$$

Cancel $k$ and $q$:

$$\\frac{Q}{x^2} = \\frac{4Q}{(d-x)^2}$$

$$\\frac{1}{x^2} = \\frac{4}{(d-x)^2}$$

Cross-multiply:

$$(d-x)^2 = 4x^2$$

$$d - x = 2x \\quad (\\text{taking positive root})$$

$$d = 3x \\quad \\Rightarrow \\quad x = \\frac{d}{3}$$

The equilibrium point is at **d/3 from the smaller charge** — closer to the smaller charge, as expected!
      `
    },
    {
      id: 'ec7-mixed-drill',
      type: 'input-boxes' as const,
      content: `
**Mixed Concepts Drill**

Two identical spheres, each with charge $+6\\ \\mu\\text{C}$, are 0.20 m apart.

1) Force between them (in N, use $k = 9 \\times 10^9$)
2) One sphere touches a neutral identical sphere, then is returned. Its new charge? (in μC)
3) New force between the original pair (in N, round to 2 decimals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8.1', '3', '4.05'],
        hint1: '$F = (9 \\times 10^9)(6 \\times 10^{-6})^2/(0.2)^2 = (9 \\times 10^9)(36 \\times 10^{-12})/0.04$.',
        hint2: 'Touching neutral sphere: +6 shared equally → +3 μC each.',
        hint3: 'New force: $(9 \\times 10^9)(3 \\times 10^{-6})(6 \\times 10^{-6})/(0.2)^2$.',
        explanation: 'Original F = 8.1 N. After sharing, one sphere has +3 μC. New F = k(3)(6)/r² × 10⁻¹² = 4.05 N. Force halved because one charge halved.'
      }
    },
    {
      id: 'ec7-final-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Mastery Quiz** — All concepts combined.
      `,
      exercise: {
        questions: [
          {
            question: 'A charged balloon sticks to a wall. A student says the wall must be charged. Is this correct?',
            options: [
              'Yes — only charged objects attract',
              'No — the charged balloon polarizes the neutral wall, creating attraction',
              'Yes — the wall absorbed charge from the air',
              'No — gravity holds the balloon up'
            ],
            correctAnswer: 1,
            explanation: 'Polarization! The charged balloon induces a charge separation in the neutral wall. The closer opposite charges create a stronger attractive force than the farther same-sign repulsive force.'
          },
          {
            question: 'Charge $q_1 = +2\\ \\mu\\text{C}$ is at the origin. $q_2 = +8\\ \\mu\\text{C}$ is at $x = 1$ m. Where is the equilibrium point for a positive test charge?',
            options: [
              'x = 0.25 m',
              'x = 0.33 m',
              'x = 0.50 m',
              'x = 0.67 m'
            ],
            correctAnswer: 1,
            explanation: 'Using $|q_1|/x^2 = |q_2|/(1-x)^2$: $2/x^2 = 8/(1-x)^2$. So $(1-x)^2 = 4x^2$, giving $1-x = 2x$, so $x = 1/3 \\approx 0.33$ m. Closer to the smaller charge.'
          },
          {
            question: 'Three identical spheres have charges +9 μC, −3 μC, and 0 μC. All three touch simultaneously. Final charge on each?',
            options: [
              '+3 μC', '+2 μC', '+6 μC', '0 μC'
            ],
            correctAnswer: 1,
            explanation: 'Total charge = +9 + (−3) + 0 = +6 μC. Shared equally among 3 identical spheres: +6/3 = +2 μC each.'
          },
          {
            question: 'Which combination of changes would increase the Coulomb force by exactly 6×?',
            options: [
              'Triple one charge, double the distance',
              'Double both charges, keep distance same',
              'Triple one charge, double the other, keep distance same',
              'Quadruple one charge, halve the distance'
            ],
            correctAnswer: 2,
            explanation: 'Triple one charge (×3) × double the other (×2) × distance unchanged = 6×. Check the others: (a) 3/(2²) = 3/4. (b) 2×2 = 4×. (d) 4/(0.5²) = 4/0.25 = 16×. Only (c) gives exactly 6×.'
          },
          {
            question: 'A conducting sphere has excess charge +Q. A cavity is carved inside (no charge in the cavity). What is the electric field inside the cavity?',
            options: [
              'Points radially outward',
              'Points radially inward',
              'Zero everywhere inside the cavity',
              'Depends on the shape of the cavity'
            ],
            correctAnswer: 2,
            explanation: 'In a conductor at electrostatic equilibrium, E = 0 everywhere inside the conductor material — including inside any empty cavity. All excess charge resides on the outer surface.'
          }
        ]
      }
    },
    {
      id: 'ec7-common-mistakes-final',
      type: 'multiple-choice' as const,
      content: `
**Final Check** — The two mistakes that cost the most points on the AP exam.
      `,
      exercise: {
        questions: [
          {
            question: 'Rank these errors by how many points they typically cost on an AP free-response question:',
            options: [
              'Arithmetic error → minor deduction only',
              'Wrong sign on direction → moderate deduction',
              'Forgot to convert μC to C → entire calculation wrong, major deduction',
              'All errors are weighted equally'
            ],
            correctAnswer: 2,
            explanation: 'Unit conversion errors cascade through the entire calculation, making every subsequent number wrong. The AP rubric often awards partial credit for correct method even with arithmetic errors, but a unit conversion error makes the whole answer unreasonable.'
          },
          {
            question: 'On a conceptual AP question, a student explains Coulomb\'s Law but forgets to mention it gives magnitude only. This matters because:',
            options: [
              'It doesn\'t matter — the grader will assume they know',
              'Direction must be stated separately; the equation alone is incomplete',
              'The equation automatically gives direction',
              'Magnitude is not important for AP scoring'
            ],
            correctAnswer: 1,
            explanation: 'AP rubrics specifically look for: (1) correct equation, (2) correct substitution, (3) correct magnitude, AND (4) correct direction with reasoning. Missing the direction discussion can cost 1-2 points.'
          }
        ]
      }
    }
  ]
}
