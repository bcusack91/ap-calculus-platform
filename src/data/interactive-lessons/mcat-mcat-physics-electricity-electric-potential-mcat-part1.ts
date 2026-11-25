import type { LessonData } from './registry'

export const electricPotentialMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-electricity-electric-potential-mcat',
  sections: [
    {
      id: 'esp1-intro',
      type: 'text' as const,
      content: `# Electrostatics Part 3: Electric Potential & Energy

**Part 1 of 2 — Potential Energy & Potential**

**Where this fits.** *Electrostatics Part 1: Charge & Coulomb's Law* gave the force between charges, and *Electrostatics Part 2: Electric Fields* turned that force into a property of space, the force per charge. This lesson does the same with energy: the potential energy stored in a pair of charges, then potential (energy per charge), and in the second half equipotentials, energy conservation and ions crossing a membrane.

### Electric Potential Energy

Lift a ball and the ball–Earth system stores energy; let go and that energy becomes motion. Charges do the same. Push two positive charges together and the pair stores energy; release them and they fly apart.

This works because the electric force is **conservative**: the work it does on a charge depends only on where the charge starts and ends, never on the path between. A straight route and a long winding route between the same two points involve exactly the same work by the field. That is what lets us define a potential energy $U$.

For two point charges a distance $r$ apart:

$$U = k\\frac{q_1 q_2}{r}$$

with $k = 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$, and $U = 0$ when the charges are infinitely far apart.

- **The signs go IN.** Coulomb's law is used with magnitudes, and you get the direction from like or unlike. Here the sign of each charge stays in the formula, because the sign of $U$ carries meaning.
- **A scalar, in joules.** $U$ has no direction, and it belongs to the PAIR, not to either charge alone.
- **$1/r$, not $1/r^2$.** Halve the separation and $U$ doubles, while the force quadruples.

**Reading the sign**

| Pair | Sign of $U$ | What it means | If released |
|---|---|---|---|
| like charges ($+\\,+$ or $-\\,-$) | $U > 0$ | work was done to push them together | they fly apart |
| unlike charges ($+\\,-$) | $U < 0$ | the pair is bound; energy must be added to separate it | they come together |

One rule covers both rows: **a system left alone moves toward LOWER $U$**. Like charges lower $U$ by moving apart (a positive number shrinking toward 0). Unlike charges lower $U$ by moving together (a negative number growing more negative).

**Work: the field's and yours**

- The field does $W_{\\text{field}} = -\\Delta U$, where $\\Delta U = U_{\\text{final}} - U_{\\text{initial}}$.
- If YOU move a charge slowly, so that it gains no kinetic energy, you do $W_{\\text{you}} = +\\Delta U$.

The two are equal and opposite. Push two protons closer: $U$ rises, you do positive work, the field does negative work. Let a sodium ion drift toward a chloride ion: $U$ falls and the field does positive work.

**Three or more charges.** Add the energy of EVERY pair once, with signs. Three charges make three pairs: $U_{\\text{total}} = U_{12} + U_{13} + U_{23}$. The total is the work needed to assemble the arrangement from far apart.`
    },
    {
      id: 'esp1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Electric Potential Energy** 🎯`,
      exercise: {
        questions: [
          {
            question: `A proton and an electron, starting at rest, drift closer together. What happens to the electric potential energy of the pair?`,
            options: [`It rises, because the charges get closer`, `It stays the same, as neither charge changes`, `It falls toward zero as $r$ shrinks`, `It falls, becoming more negative as $r$ shrinks`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `For unlike charges $U = kq_1q_2/r$ is negative, and a smaller $r$ makes it more negative, so $U$ falls; the field does positive work, $W = -\\Delta U$, as the charges move the way the force pulls them. Rising with closeness is what happens for two LIKE charges. $U$ depends on $r$ as well as on the charges, and zero is the value far apart, not close together.`
          },
          {
            question: `Two like ions, repelling with force $F$, are pushed together until the force between them has grown to $16F$. If the pair's potential energy was $U$ at the start, it is now:`,
            options: [`$4U$`, `$16U$`, `$U/4$`, `$U/16$`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `Force goes as $1/r^2$, so a force of $16F$ means the separation is 4 times smaller. Energy goes as $1/r$, so it rises to $4U$. $16U$ gives the energy the force's inverse-square law, and the two fractions have the energy of like charges falling as they are pushed together.`
          },
          {
            question: `In a salt crystal a sodium ion (charge $+e$) and a chloride ion (charge $-e$) sit $3.0 \\times 10^{-10}\\;\\text{m}$ apart. Treating them as point charges, with $k = 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$ and $e = 1.6 \\times 10^{-19}\\;\\text{C}$, the pair's potential energy is closest to:`,
            options: [`$7.7 \\times 10^{-19}\\;\\text{J}$`, `$-2.6 \\times 10^{-9}\\;\\text{J}$`, `$-7.7 \\times 10^{-19}\\;\\text{J}$`, `$-4.8\\;\\text{J}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$U = kq_1q_2/r = (9.0 \\times 10^9)(1.6 \\times 10^{-19})(-1.6 \\times 10^{-19})/(3.0 \\times 10^{-10}) = -7.7 \\times 10^{-19}\\;\\text{J}$, negative because unlike charges form a bound pair. The positive value drops the sign as if this were Coulomb's law with magnitudes, $-2.6 \\times 10^{-9}$ divides by $r^2$, and $-4.8$ uses only one factor of $e$.`
          },
          {
            question: `Charges $+q$, $+q$ and $-q$ sit at the corners of an equilateral triangle with sides of length $d$. What is the total electric potential energy of the arrangement?`,
            options: [`$+kq^2/d$`, `$-kq^2/d$`, `$-3kq^2/d$`, `$+3kq^2/d$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `There are three pairs, each a distance $d$ apart: the like pair gives $+kq^2/d$ and each of the two unlike pairs gives $-kq^2/d$, for a total of $-kq^2/d$. $+kq^2/d$ counts only the like pair, $-3kq^2/d$ treats all three pairs as unlike, and $+3kq^2/d$ adds the three as magnitudes.`
          }
        ]
      }
    },
    {
      id: 'esp1-potential',
      type: 'text' as const,
      content: `### Electric Potential

The electric field was force per charge, $E = F/q$. **Electric potential** is the same move for energy: potential energy per unit charge.

$$V = \\frac{U}{q}$$

The unit is the **volt**: $1\\;\\text{V} = 1\\;\\text{J/C}$. Like the field, potential belongs to a POINT in space. It is set by the source charges and it is there whether or not a test charge sits at that point.

**Potential of a point charge**

$$V = k\\frac{q}{r}$$

with $V = 0$ far away. Again the sign of $q$ goes in: $V$ is positive near a positive charge and negative near a negative charge. It falls off as $1/r$, more slowly than the field's $1/r^2$.

**Several charges: add signed numbers.** Potential is a scalar, so the potentials from several charges simply add:

$$V = k\\frac{q_1}{r_1} + k\\frac{q_2}{r_2} + \\dots$$

No components and no angles; all you need is each charge's own distance to the point. This makes potential far easier to add than field.

**Only differences matter.** What moves charges and stores energy is the potential difference $\\Delta V = V_B - V_A$, often called voltage. Where $V = 0$ is a choice: far from all charges for point charges, the ground wire in a circuit, the fluid outside the cell in physiology.

### Potential vs. Potential Energy

This is the number one trap of the topic. The two names sound alike, but they are different quantities with different units.

| Quantity | Symbol | Unit | Type | Belongs to |
|---|---|---|---|---|
| Electric field | $E$ | N/C | vector | a point in space |
| Electric potential | $V$ | V = J/C | scalar | a point in space |
| Potential energy | $U$ | J | scalar | a charge placed at that point |

**The bridge** between them is

$$U = qV \\qquad \\text{and} \\qquad \\Delta U = q\\,\\Delta V$$

Take a point where $V = +50\\;\\text{V}$. A proton placed there has $U = (+1.6 \\times 10^{-19})(50) = +8.0 \\times 10^{-18}\\;\\text{J}$. An electron placed there has $U = -8.0 \\times 10^{-18}\\;\\text{J}$. One point, one potential, two opposite energies.

**Which way do charges go?** Every released charge moves toward lower $U$. Because $U = qV$:

- a **positive** charge moves toward **lower** $V$;
- a **negative** charge moves toward **higher** $V$.

Both lose potential energy. An electron "falls uphill" in potential.

**Bringing a charge in.** Far away $V = 0$, so carrying a charge $q$ slowly from far away to a point at potential $V$ takes work $W_{\\text{you}} = \\Delta U = qV$, with both signs kept.

**$E = 0$ and $V = 0$ are independent facts.** Fields add as vectors; potentials add as signed numbers. Take two charges with the midpoint a distance $r$ from each:

| Midpoint between | Field $E$ | Potential $V$ |
|---|---|---|
| $+q$ and $+q$ | $0$ (the two fields cancel) | $2kq/r$ |
| $+q$ and $-q$ | $2kq/r^2$, toward $-q$ | $0$ |

A charge placed where $E = 0$ feels no force but can still have potential energy $qV$. A charge placed where $V = 0$ has no potential energy but can still feel a force.

Between two unlike charges of different size, $V = 0$ where $k q_1/r_1 = k|q_2|/r_2$, which is closer to the SMALLER charge.

<!-- yield:low -->
- For unlike charges of different size there is a second point with $V = 0$ on the line outside the pair, beyond the smaller charge.
<!-- /yield -->`
    },
    {
      id: 'esp1-worked',
      type: 'text' as const,
      content: `### Worked Example — Pushing Two Charges Together

**Problem.** Charges of $+2.0\\;\\mu\\text{C}$ and $+4.0\\;\\mu\\text{C}$ are held $0.60\\;\\text{m}$ apart. Use $k = 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$.

- **(a)** What is the potential energy of the pair?
- **(b)** What is it when they are $0.20\\;\\text{m}$ apart?
- **(c)** How much work do you do pushing them slowly from $0.60\\;\\text{m}$ to $0.20\\;\\text{m}$, and how much does the field do?
- **(d)** Released from $0.20\\;\\text{m}$, how much kinetic energy do they share once they are far apart?

**(a) Energy at the start.** First the product $kq_1q_2 = (9.0 \\times 10^9)(2.0 \\times 10^{-6})(4.0 \\times 10^{-6}) = 0.072\\;\\text{J}\\cdot\\text{m}$. Then $U = \\dfrac{0.072}{0.60} = 0.12\\;\\text{J}$, positive for like charges.

**(b) Three times closer.** $U = \\dfrac{0.072}{0.20} = 0.36\\;\\text{J}$: a third of the distance gives three times the energy, because $U \\propto 1/r$.

**(c) Your work and the field's.** $\\Delta U = 0.36 - 0.12 = +0.24\\;\\text{J}$. You do $+0.24\\;\\text{J}$; the field, which pushes against you the whole way, does $-0.24\\;\\text{J}$.

**(d) Let go.** Far apart $U = 0$, so the full $0.36\\;\\text{J}$ becomes kinetic energy, shared between the two charges. Note that it is the final $U$ from (b), not the change from (c).

### Worked Example — Potential at a Point from Two Charges

**Problem.** A $+6.0\\;\\text{nC}$ charge sits at the origin and a $-4.0\\;\\text{nC}$ charge sits on the x-axis at $x = 0.80\\;\\text{m}$. Point P is on the y-axis at $y = 0.60\\;\\text{m}$. Use $k = 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$ and $e = 1.6 \\times 10^{-19}\\;\\text{C}$.

- **(a)** What is the potential at P due to each charge?
- **(b)** What is the total potential at P?
- **(c)** How much work do you do bringing a $+2.0\\;\\mu\\text{C}$ charge slowly from far away to P?
- **(d)** What is the potential energy of an electron placed at P?

**(a) One potential per charge.** P is $0.60\\;\\text{m}$ from the positive charge and $\\sqrt{0.60^2 + 0.80^2} = 1.0\\;\\text{m}$ from the negative charge (a 3-4-5 triangle). So $V_1 = \\dfrac{(9.0 \\times 10^9)(6.0 \\times 10^{-9})}{0.60} = \\dfrac{54}{0.60} = +90\\;\\text{V}$ and $V_2 = \\dfrac{(9.0 \\times 10^9)(-4.0 \\times 10^{-9})}{1.0} = -36\\;\\text{V}$.

**(b) Add as numbers.** $V = 90 - 36 = 54\\;\\text{V}$. No components, no angles.

**(c) Work to bring a charge in.** $W_{\\text{you}} = qV = (2.0 \\times 10^{-6})(54) = 1.1 \\times 10^{-4}\\;\\text{J}$.

**(d) An electron at P.** $U = qV = (-1.6 \\times 10^{-19})(54) = -8.6 \\times 10^{-18}\\;\\text{J}$. The potential at P is positive, yet the electron's potential energy there is negative: $V$ belongs to the point, $U$ to the charge you put there.`
    },
    {
      id: 'esp1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Potential vs. Potential Energy** 🎯`,
      exercise: {
        questions: [
          {
            question: `A proton and then an electron are placed, one at a time, at the same point P near a fixed positive charge. Which quantity is the same for both?`,
            options: [`The potential energy of the particle at P`, `The electric potential at P`, `The direction of the electric force at P`, `The work to bring it to P from far away`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Potential belongs to the point and is set by the source charge alone, so P has one value of $V$ whatever is placed there. Potential energy is $U = qV$, so charges of $+e$ and $-e$ at P have energies of opposite sign, and the work to bring each one in, $qV$, is opposite too. The forces also point opposite ways: the proton is repelled and the electron attracted.`
          },
          {
            question: `Two equal positive charges $+Q$ are fixed a distance $2r$ apart. At the point midway between them:`,
            options: [`$E = 0$ and $V = 0$`, `$E = 2kQ/r^2$ and $V = 0$`, `$E = 2kQ/r^2$ and $V = 2kQ/r$`, `$E = 0$ and $V = 2kQ/r$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The two fields at the midpoint are equal in size and opposite in direction, so they cancel: $E = 0$. Potentials are signed numbers, and both are positive, so they add to $2kQ/r$. A zero field with a zero potential assumes one implies the other, and a field of $2kQ/r^2$ with $V = 0$ is the pattern for $+Q$ and $-Q$.`
          },
          {
            question: `Point P is $0.20\\;\\text{m}$ from a $+4.0\\;\\text{nC}$ charge and $0.30\\;\\text{m}$ from a $-2.0\\;\\text{nC}$ charge. What is the electric potential at P? ($k = 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$)`,
            options: [`$120\\;\\text{V}$`, `$240\\;\\text{V}$`, `$700\\;\\text{V}$`, `$180\\;\\text{V}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$V = \\dfrac{(9.0 \\times 10^9)(4.0 \\times 10^{-9})}{0.20} + \\dfrac{(9.0 \\times 10^9)(-2.0 \\times 10^{-9})}{0.30} = 180 - 60 = 120\\;\\text{V}$. $240\\;\\text{V}$ drops the minus sign of the negative charge, $700\\;\\text{V}$ divides by $r^2$ as for a field ($900 - 200$), and $180\\;\\text{V}$ leaves the negative charge out.`
          },
          {
            question: `The potential at a binding site on a membrane protein is $-150\\;\\text{mV}$ relative to a point far away. How much work must an outside agent do to bring a $\\text{Ca}^{2+}$ ion (charge $+2e$) slowly from far away to the site? ($e = 1.6 \\times 10^{-19}\\;\\text{C}$)`,
            options: [`$+4.8 \\times 10^{-20}\\;\\text{J}$`, `$-2.4 \\times 10^{-20}\\;\\text{J}$`, `$-4.8 \\times 10^{-20}\\;\\text{J}$`, `$-4.8 \\times 10^{-17}\\;\\text{J}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$W = \\Delta U = qV = (2)(1.6 \\times 10^{-19})(-0.150) = -4.8 \\times 10^{-20}\\;\\text{J}$. The work is negative because the field pulls a positive ion toward a negative potential, so the agent only has to hold it back. The positive value drops the sign of $V$, $-2.4 \\times 10^{-20}$ uses a charge of $e$ instead of $2e$, and $-4.8 \\times 10^{-17}$ leaves the potential in millivolts.`
          }
        ]
      }
    },
    {
      id: 'esp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Pair energy.** $U = kq_1q_2/r$ with the signs kept and $U = 0$ far apart: like charges $U > 0$, unlike charges $U < 0$ (bound).
- **Downhill in $U$.** A system left alone moves toward lower $U$: like charges apart, unlike charges together.
- **Work.** The field does $-\\Delta U$; moving a charge slowly, you do $+\\Delta U$.
- **Potential.** $V = U/q$ in volts (J/C); for a point charge $V = kq/r$, signed, falling as $1/r$.
- **Superposition.** Potentials add as signed numbers; several charges store the sum of every pair's $U$.
- **The bridge.** $U = qV$ and $\\Delta U = q\\,\\Delta V$: $V$ belongs to the point, $U$ to the charge placed there.
- **Direction.** Positive charges move toward lower $V$, negative charges toward higher $V$; both lose $U$.

**Common traps**

- **Dropping signs.** $U$ and $V$ keep the sign of every charge; only Coulomb's law is used with magnitudes.
- **Using $1/r^2$ for energy.** $U$ and $V$ go as $1/r$; force and field go as $1/r^2$.
- **Volts versus joules.** $V$ is in volts and belongs to a place; $U$ is in joules and needs a charge there.
- **The field's work versus yours.** For a charge moved slowly they are equal and opposite.
- **Adding potentials as vectors.** No components: just each charge's distance and sign.
- **$E = 0$ means $V = 0$.** They are independent; midway between equal positive charges $E = 0$ but $V = 2kq/r$.
- **Missing a pair.** Three charges have three pairs; count each exactly once.

<!-- yield:low -->
- Low-yield extras: the second $V = 0$ point outside a pair of unequal unlike charges, beyond the smaller one.
<!-- /yield -->`
    }
  ]
};
