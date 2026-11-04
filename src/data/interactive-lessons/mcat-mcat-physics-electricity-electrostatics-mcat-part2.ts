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
- Sign of pair energy: $U = kq_1q_2/r$ is negative for opposite charges, so bringing them together releases energy.

### Units Check

$1\\;\\text{V} = 1\\;\\text{J/C}$, and $1\\;\\text{N/C} = 1\\;\\text{V/m}$. If an answer choice's units don't work out, eliminate it.`
    },
    {
      id: 'es2-worked',
      type: 'text' as const,
      content: `### Worked Example — Field and Potential of a Point Charge

**Problem.** A charge $Q = +5.0 \\times 10^{-9}\\;\\text{C}$ sits at the origin. Use $k \\approx 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$.

- **(a)** What is the electric field at $r = 3.0\\;\\text{m}$, and which way does it point?
- **(b)** What is the potential at the same point?
- **(c)** Do the two results pass the point-charge check $V = E \\cdot r$?

**(a) Field.** $E = k\\frac{Q}{r^2} = \\frac{(9.0 \\times 10^9)(5.0 \\times 10^{-9})}{(3.0)^2} = \\frac{45}{9} = 5.0\\;\\text{N/C}$, pointing away from $Q$ because $Q$ is positive.

**(b) Potential.** $V = k\\frac{Q}{r} = \\frac{(9.0 \\times 10^9)(5.0 \\times 10^{-9})}{3.0} = \\frac{45}{3} = 15\\;\\text{V}$

**(c) Consistency check.** With $E = 5.0\\;\\text{N/C}$ from (a): $E \\cdot r = (5.0)(3.0) = 15\\;\\text{V}$, matching (b). For a point charge $V = E \\cdot r$, a quick check on any answer.

### Worked Example — Work to Move a Charge

**Problem.** You push a charge $q = +2.0 \\times 10^{-6}\\;\\text{C}$ slowly from a point at $100\\;\\text{V}$ to a point at $200\\;\\text{V}$.

- **(a)** By how much does the charge's potential energy change?
- **(b)** How much work must YOU do?
- **(c)** How much work does the field do, and why does its sign make sense?

**(a) Energy change.** $\\Delta U = q\\,\\Delta V = (2.0 \\times 10^{-6})(200 - 100) = 2.0 \\times 10^{-4}\\;\\text{J}$

**(b) Your work.** Moving slowly means no kinetic energy change, so your work equals the $\\Delta U$ from (a): $W_{you} = +2.0 \\times 10^{-4}\\;\\text{J}$.

**(c) The field's work.** $W_{field} = -q\\,\\Delta V = -2.0 \\times 10^{-4}\\;\\text{J}$. Pushing a positive charge toward higher potential is "uphill," so you do positive work while the field does negative work.

### Worked Example — Parallel Plates

**Problem.** Two parallel plates $2.0\\;\\text{mm}$ apart are connected to a $6.0\\;\\text{V}$ battery.

- **(a)** What is the electric field between the plates?
- **(b)** Where between the plates does that value hold, and which way does the field point?

**(a) Field.** Convert $d$ to metres first: $E = \\frac{V}{d} = \\frac{6.0}{2.0 \\times 10^{-3}} = 3.0 \\times 10^{3}\\;\\text{V/m}$

**(b) Uniform and directed.** The $3.0 \\times 10^{3}\\;\\text{V/m}$ from (a) holds uniformly everywhere between the plates (away from the edges), pointing from the $+$ plate to the $-$ plate.`
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
            yield: 'ULTRA_HIGH',
            explanation: `$E \\propto 1/r^2$: doubling $r$ divides the field by $2^2 = 4$. Halving it would treat the field as $1/r$, and $2E$ has the scaling upside down.`
          },
          {
            question: `The electric potential of a point charge is $V$ at distance $r$. At distance $2r$ it is:`,
            options: [`$V/4$`, `$2V$`, `$V$ (unchanged)`, `$V/2$`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `$V = kQ/r \\propto 1/r$, so doubling the distance halves the potential. Distinguish this from field and force, which fall as $1/r^2$.`
          },
          {
            question: `A charge of $2\\;\\mu\\text{C}$ sits where the field is $500\\;\\text{N/C}$. The electric force on it is:`,
            options: [`$1.0 \\times 10^{-3}\\;\\text{N}$`, `$2.5 \\times 10^{8}\\;\\text{N}$`, `$1.0 \\times 10^{3}\\;\\text{N}$`, `$4.0 \\times 10^{-9}\\;\\text{N}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$F = qE = (2 \\times 10^{-6})(500) = 1.0 \\times 10^{-3}\\;\\text{N}$. The value $2.5 \\times 10^8\\;\\text{N}$ divides the field by the charge, $4.0 \\times 10^{-9}\\;\\text{N}$ divides the charge by the field, and $1.0 \\times 10^{3}\\;\\text{N}$ drops the micro prefix entirely.`
          },
          {
            question: `A $5\\;\\mu\\text{C}$ charge moves through a potential difference of $200\\;\\text{V}$. The magnitude of the change in its electrical potential energy is:`,
            options: [`$4.0 \\times 10^{7}\\;\\text{J}$`, `$2.5 \\times 10^{-8}\\;\\text{J}$`, `$1.0 \\times 10^{-3}\\;\\text{J}$`, `$1.0 \\times 10^{3}\\;\\text{J}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$|\\Delta U| = q\\,\\Delta V = (5 \\times 10^{-6})(200) = 1.0 \\times 10^{-3}\\;\\text{J}$. Dividing instead of multiplying gives $4.0 \\times 10^{7}$ or $2.5 \\times 10^{-8}\\;\\text{J}$, and dropping the micro prefix gives $1.0 \\times 10^{3}\\;\\text{J}$.`
          },
          {
            question: `Parallel plates $4.0\\;\\text{mm}$ apart hold a potential difference of $12\\;\\text{V}$. The field between them is:`,
            options: [`$48\\;\\text{V/m}$`, `$3.0 \\times 10^{3}\\;\\text{V/m}$`, `$3.0\\;\\text{V/m}$`, `$4.8 \\times 10^{-2}\\;\\text{V/m}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$E = V/d = 12/(4.0 \\times 10^{-3}) = 3.0 \\times 10^{3}\\;\\text{V/m}$. Forgetting to convert mm to m gives $3.0\\;\\text{V/m}$; multiplying $V$ by $d$ gives $48$ or $4.8 \\times 10^{-2}$, which would carry units of V·m, not V/m.`
          }
        ]
      }
    },
    {
      id: 'es2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Pair vs. field quantities.** $F$ and $U$ contain both charges; $E$ and $V$ contain only the source charge.
- **Two scalings.** Force-flavored $F$ and $E$ fall as $1/r^2$; energy-flavored $U$ and $V$ fall as $1/r$.
- **The bridges.** $F = qE$, $U = qV$, and $E = V/d$ between parallel plates.
- **Work and potential.** The field does $W = -q\\,\\Delta V$, so moving along an equipotential takes zero work.

**Common traps**

- **Mixing $1/r$ and $1/r^2$.** Doubling $r$ cuts $E$ to a quarter but only halves $V$.
- **Skipping SI conversions.** Convert mm to m and $\\mu\\text{C}$ to C before plugging in; unit slips are the top distractor.
- **Dividing instead of multiplying.** $F = qE$ and $\\Delta U = q\\,\\Delta V$ are products; check units, since $q/E$ or $E/q$ does not give newtons.
- **Your work vs. the field's.** Moving a charge slowly, you do $+\\Delta U$ of work and the field does $-\\Delta U$.`
    }
  ]
};
