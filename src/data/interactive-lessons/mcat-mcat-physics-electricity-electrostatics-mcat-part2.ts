import type { LessonData } from './registry'

export const electrostaticsMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-electricity-electrostatics-mcat',
  sections: [
    {
      id: 'es2-toolkit',
      type: 'text' as const,
      content: `# Electrostatics

**Part 2 of 4 — The Quantitative Toolkit**

Every electrostatics calculation on the MCAT comes from a short list of formulas. Learn which quantity each one produces and how it scales with $r$.

### The Core Four (Point Charge $Q$, Distance $r$)

| Formula | Gives | Scaling | Type |
|---------|-------|---------|------|
| $F = k\\dfrac{q_1 q_2}{r^2}$ | force between two charges | $1/r^2$ | vector |
| $E = k\\dfrac{Q}{r^2}$ | field of one charge | $1/r^2$ | vector |
| $V = k\\dfrac{Q}{r}$ | potential of one charge | $1/r$ | scalar |
| $U = k\\dfrac{q_1 q_2}{r}$ | energy of a pair | $1/r$ | scalar |

Memory hook: the two "pair" quantities ($F$, $U$) contain both charges; the two "field" quantities ($E$, $V$) contain one. The two energy-flavored quantities ($V$, $U$) go as $1/r$; the two force-flavored ones ($F$, $E$) go as $1/r^2$.

### Connecting Formulas

- Force from field: $F = qE$
- Energy from potential: $U = qV$, and work done BY the field: $W = q(V_i - V_f) = -q\\,\\Delta V$
- Uniform field (parallel plates separated by $d$): $E = \\dfrac{V}{d}$

### Units Check

$1\\;\\text{V} = 1\\;\\text{J/C}$, and $1\\;\\text{N/C} = 1\\;\\text{V/m}$. If an answer choice's units don't work out, eliminate it.`
    },
    {
      id: 'es2-worked',
      type: 'text' as const,
      content: `### Worked Example — Field and Potential of a Point Charge

A charge $Q = +5.0 \\times 10^{-9}\\;\\text{C}$ sits at the origin. Find $E$ and $V$ at $r = 3.0\\;\\text{m}$. (Use $k \\approx 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$.)

**Field:**

$E = k\\frac{Q}{r^2} = \\frac{(9.0 \\times 10^9)(5.0 \\times 10^{-9})}{(3.0)^2} = \\frac{45}{9} = 5.0\\;\\text{N/C}$, pointing away from $Q$.

**Potential:**

$V = k\\frac{Q}{r} = \\frac{(9.0 \\times 10^9)(5.0 \\times 10^{-9})}{3.0} = \\frac{45}{3} = 15\\;\\text{V}$

Notice $V = E \\cdot r$ for a point charge — a quick consistency check.

### Worked Example — Work to Move a Charge

How much work must YOU do to push a charge $q = +2.0 \\times 10^{-6}\\;\\text{C}$ slowly from a point at $100\\;\\text{V}$ to a point at $200\\;\\text{V}$?

**Step 1 —** The charge's potential energy changes by

$\\Delta U = q\\,\\Delta V = (2.0 \\times 10^{-6})(200 - 100) = 2.0 \\times 10^{-4}\\;\\text{J}$

**Step 2 —** Moving slowly (no kinetic energy change), your work equals $\\Delta U$:

$W_{you} = +2.0 \\times 10^{-4}\\;\\text{J}$

The sign makes sense: pushing a positive charge toward higher potential is "uphill," so you do positive work while the field does $-2.0 \\times 10^{-4}\\;\\text{J}$.

### Worked Example — Parallel Plates

Two parallel plates $2.0\\;\\text{mm}$ apart are connected to a $6.0\\;\\text{V}$ battery. The field between them:

$E = \\frac{V}{d} = \\frac{6.0}{2.0 \\times 10^{-3}} = 3.0 \\times 10^{3}\\;\\text{V/m}$

Uniform everywhere between the plates, pointing from the $+$ plate to the $-$ plate.`
    },
    {
      id: 'es2-quiz1',
      type: 'multiple-choice' as const,
      content: `**The Electrostatics Toolkit** 🎯`,
      exercise: {
        questions: [
          {
            question: `The electric field of a point charge is $E$ at distance $r$. At distance $2r$ the field is:`,
            options: [`$E/2$`, `$E/4$`, `$2E$`, `$E$ (unchanged)`],
            correctAnswer: 1,
            explanation: `$E \\propto 1/r^2$: doubling $r$ divides the field by $2^2 = 4$. (If the question had asked about POTENTIAL, the answer would be $V/2$, since $V \\propto 1/r$.)`
          },
          {
            question: `The electric potential of a point charge is $V$ at distance $r$. At distance $2r$ it is:`,
            options: [`$V/4$`, `$2V$`, `$V$ (unchanged)`, `$V/2$`],
            correctAnswer: 3,
            explanation: `$V = kQ/r \\propto 1/r$, so doubling the distance halves the potential. Distinguish this from field and force, which fall as $1/r^2$.`
          },
          {
            question: `A charge of $2\\;\\mu\\text{C}$ sits where the field is $500\\;\\text{N/C}$. The electric force on it is:`,
            options: [`$1.0 \\times 10^{-3}\\;\\text{N}$`, `$2.5 \\times 10^{8}\\;\\text{N}$`, `$1.0 \\times 10^{3}\\;\\text{N}$`, `$4.0 \\times 10^{-9}\\;\\text{N}$`],
            correctAnswer: 0,
            explanation: `$F = qE = (2 \\times 10^{-6})(500) = 1.0 \\times 10^{-3}\\;\\text{N}$. The distractor $2.5 \\times 10^8$ comes from dividing instead of multiplying.`
          },
          {
            question: `A $5\\;\\mu\\text{C}$ charge moves through a potential difference of $200\\;\\text{V}$. The magnitude of the change in its electrical potential energy is:`,
            options: [`$4.0 \\times 10^{7}\\;\\text{J}$`, `$2.5 \\times 10^{-8}\\;\\text{J}$`, `$1.0 \\times 10^{-3}\\;\\text{J}$`, `$1.0 \\times 10^{3}\\;\\text{J}$`],
            correctAnswer: 2,
            explanation: `$|\\Delta U| = q\\,\\Delta V = (5 \\times 10^{-6})(200) = 1.0 \\times 10^{-3}\\;\\text{J}$.`
          },
          {
            question: `Parallel plates $4.0\\;\\text{mm}$ apart hold a potential difference of $12\\;\\text{V}$. The field between them is:`,
            options: [`$48\\;\\text{V/m}$`, `$3.0 \\times 10^{3}\\;\\text{V/m}$`, `$3.0\\;\\text{V/m}$`, `$4.8 \\times 10^{-2}\\;\\text{V/m}$`],
            correctAnswer: 1,
            explanation: `$E = V/d = 12/(4.0 \\times 10^{-3}) = 3.0 \\times 10^{3}\\;\\text{V/m}$. Forgetting to convert mm to m gives the distractor $3.0\\;\\text{V/m}$.`
          }
        ]
      }
    },
    {
      id: 'es2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Pair quantities ($F$, $U$) use both charges; field quantities ($E$, $V$) use one
- Force-flavored: $F$, $E \\propto 1/r^2$. Energy-flavored: $U$, $V \\propto 1/r$
- Bridges: $F = qE$, $U = qV$, and $E = V/d$ between parallel plates
- Work by the field: $W = -q\\,\\Delta V$; along equipotentials $W = 0$
- Always convert mm and $\\mu\\text{C}$ to SI before plugging in — unit slips are the top distractor trap`
    }
  ]
};
