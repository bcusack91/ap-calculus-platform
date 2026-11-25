import type { LessonData } from './registry'

export const electrostaticsMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-electricity-electrostatics-mcat',
  sections: [
    {
      id: 'esc2-intro',
      type: 'text' as const,
      content: `# Electrostatics Part 1: Charge & Coulomb's Law

**Part 2 of 2 — Coulomb's Law & Superposition**

Part 1 said that like charges repel and unlike charges attract. This part puts a number on that force, then shows how to combine the forces from several charges.

### Coulomb's Law

**Coulomb's law** gives the size of the electric force between two point charges $q_1$ and $q_2$ whose centers are a distance $r$ apart:

$$|F| = k\\frac{|q_1 q_2|}{r^2} \\qquad k = 9.0 \\times 10^{9}\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$$

It also holds for uniformly charged spheres, with $r$ measured center to center.

- **The formula gives a magnitude only.** Put in the sizes of the charges, without signs. Then get the direction from the signs: like charges repel, unlike charges attract.
- **The force acts along the line joining the two charges.**
- **Newton's third law applies.** Each charge feels a force of the SAME size, in opposite directions, even when one charge is far larger than the other. The product $q_1 q_2$ belongs to the pair.
- **Convert before you calculate.** $\\mu\\text{C} \\rightarrow 10^{-6}\\;\\text{C}$, $\\text{nC} \\rightarrow 10^{-9}\\;\\text{C}$, $\\text{cm} \\rightarrow 10^{-2}\\;\\text{m}$, $\\text{nm} \\rightarrow 10^{-9}\\;\\text{m}$.

**A quick calculation.** A $+3.0\\;\\mu\\text{C}$ charge and a $-4.0\\;\\mu\\text{C}$ charge are held $0.30\\;\\text{m}$ apart.

$$|F| = \\frac{(9.0 \\times 10^{9})(3.0 \\times 10^{-6})(4.0 \\times 10^{-6})}{(0.30)^2} = \\frac{0.108}{0.090} = 1.2\\;\\text{N}$$

The charges are unlike, so the force is attractive: each charge is pulled toward the other with $1.2\\;\\text{N}$.

**Ratio reasoning.** Most MCAT questions on Coulomb's law never need the full calculation. The force is proportional to each charge and to $1/r^2$, so apply each change as a factor and multiply the factors.

| Change | Factor on the force |
|---|---|
| double one charge | $\\times 2$ |
| double both charges | $\\times 4$ |
| double the distance | $\\times \\frac{1}{4}$ |
| triple the distance | $\\times \\frac{1}{9}$ |
| halve the distance | $\\times 4$ |

- **Combining changes.** Two ions attract with force $F$. One is replaced by an ion of three times the charge (same sign), and the distance is doubled: $F_{\\text{new}} = F \\times 3 \\times \\frac{1}{4} = \\frac{3}{4}F$, still attractive.
- **Working backward needs a square root.** To make the force 4 times larger, the distance must be HALVED, not quartered. To cut the force to $\\frac{1}{9}$, triple the distance.

**Electric force versus gravity.** Newton's law of gravity, $F = G\\dfrac{m_1 m_2}{r^2}$, has the same form: both are inverse-square laws. Two differences matter.

- Gravity only attracts. The electric force can attract or repel.
- The electric force is enormously stronger: for two protons, about $10^{36}$ times their gravitational attraction. This is why gravity is ignored for ions, electrons and molecules.

Then why does gravity run the solar system? Large objects are almost exactly neutral, so their electric forces cancel, while mass only adds up.

**A size check.** One coulomb is huge. Lab charges are $\\mu\\text{C}$ or nC, and the forces between them at centimeter distances are a few newtons or less. An answer of hundreds of thousands of newtons usually means a $\\mu\\text{C}$ was never converted; a tiny answer usually means a distance was left in centimeters.

<!-- yield:low -->
- The constant is sometimes written $k = \\dfrac{1}{4\\pi\\varepsilon_0}$, where $\\varepsilon_0 = 8.85 \\times 10^{-12}\\;\\text{C}^2/(\\text{N}\\cdot\\text{m}^2)$ is the permittivity of free space. More precisely $k = 8.99 \\times 10^{9}$; use $9.0 \\times 10^{9}$.
- Coulomb's law as written is for charges in a vacuum or air. In water the force between two ions is about 80 times weaker, which is one reason salts dissolve.
<!-- /yield -->`
    },
    {
      id: 'esc2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Coulomb's Law** 🎯`,
      exercise: {
        questions: [
          {
            question: `A sodium ion ($\\text{Na}^+$) and a chloride ion ($\\text{Cl}^-$) a distance $r$ apart attract each other with force $F$. With what force do a calcium ion ($\\text{Ca}^{2+}$) and a chloride ion attract each other when they are a distance $r/2$ apart?`,
            options: [`$2F$`, `$4F$`, `$8F$`, `$16F$`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Replacing $+e$ with $+2e$ doubles one charge, a factor of 2, and halving the distance multiplies the force by $2^2 = 4$, so the force is $2 \\times 4 = 8F$. $2F$ leaves out the change in distance, $4F$ leaves out the change in charge (or treats the force as proportional to $1/r$), and $16F$ doubles both charges when only the cation changed.`
          },
          {
            question: `An alpha particle (charge $+2e$) passes close to a gold nucleus (charge $+79e$). How does the electric force on the alpha particle compare with the electric force on the gold nucleus at that instant?`,
            options: [`About 40 times larger, in the opposite direction`, `Exactly the same in size, in the opposite direction`, `About 40 times smaller, in the opposite direction`, `Exactly the same in size, in the same direction`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `The two forces are a Newton's third law pair: equal in size and opposite in direction, however unequal the charges. Coulomb's law contains the product $q_1 q_2$, which belongs to both particles, so neither one "owns" a larger force. The alpha particle is deflected far more only because its mass is much smaller, so the same force gives it a much larger acceleration.`
          },
          {
            question: `In a salt crystal, a sodium ion ($+e$) and a neighboring chloride ion ($-e$) have their centers $0.30\\;\\text{nm}$ apart. What is the electric force between them? ($e = 1.6 \\times 10^{-19}\\;\\text{C}$, $k = 9.0 \\times 10^{9}\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$)`,
            options: [`$2.6 \\times 10^{-9}\\;\\text{N}$, attractive`, `$2.6 \\times 10^{-9}\\;\\text{N}$, repulsive`, `$7.7 \\times 10^{-19}\\;\\text{N}$, attractive`, `$2.6 \\times 10^{-27}\\;\\text{N}$, attractive`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `With $r = 3.0 \\times 10^{-10}\\;\\text{m}$, $r^2 = 9.0 \\times 10^{-20}\\;\\text{m}^2$, so $|F| = (9.0 \\times 10^{9})(1.6 \\times 10^{-19})^2/(9.0 \\times 10^{-20}) = 2.6 \\times 10^{-9}\\;\\text{N}$, and unlike charges attract. "Repulsive" has the right size but the wrong direction, $7.7 \\times 10^{-19}\\;\\text{N}$ divides by $r$ instead of $r^2$, and $2.6 \\times 10^{-27}\\;\\text{N}$ leaves the distance as 0.30 without converting nanometers to meters.`
          },
          {
            question: `In a hydrogen atom, the electric attraction between the proton and the electron is about $10^{39}$ times their gravitational attraction. If the two particles were moved to twice their original separation, this ratio would be:`,
            options: [`Doubled, as gravity weakens faster with distance`, `Halved, as the electric force weakens faster`, `Quadrupled, as only gravity depends on distance`, `Unchanged, as both fall to one-quarter`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Both forces are inverse-square laws, so doubling the separation cuts each to one-quarter and their ratio does not change. Any answer in which the ratio changes assumes the two forces depend on distance differently. The ratio is set by the charges and masses alone, since $r^2$ cancels.`
          }
        ]
      }
    },
    {
      id: 'esc2-superposition',
      type: 'text' as const,
      content: `### Superposition of Forces

Real situations involve more than two charges: an ion in a binding site feels every charged group around it. The rule for combining forces is **superposition**:

- **The net force on a charge is the vector sum of the separate Coulomb forces from every other charge.**
- **Each pair force is independent.** Find it as if the other charges were not there. Adding a third charge does not change the force between the first two.

**The method.**

1. Sketch the charges and pick the one you are finding the force ON.
2. For each other charge, find the size of its force from $|F| = k|q_1 q_2|/r^2$, using that pair's OWN separation.
3. Get each force's direction from like or unlike charges.
4. Add the forces as vectors.

**On a line.** Pick a positive direction. Give each force a sign from the direction it POINTS, not from the sign of the charge that causes it. Forces in the same direction add; forces in opposite directions partly cancel.

**At right angles.** Break each force into x- and y-components, add the components, and combine them with the Pythagorean theorem:

$$F = \\sqrt{F_x^2 + F_y^2} \\qquad \\tan\\theta = \\frac{F_y}{F_x}$$

Two perpendicular forces form the legs of a right triangle, with the net force as the hypotenuse. Magnitudes add directly ONLY when the forces point the same way. Two forces of 3 N and 4 N can give anything from 1 N (opposite) to 7 N (aligned), and 5 N when perpendicular.

**Use symmetry first.** Matching charges at matching distances give forces of matching size, and their sideways components cancel.

- A charge at the exact center of a square with equal charges on all four corners feels zero net force: opposite corners cancel in pairs.
- Three equal positive charges at the corners of an equilateral triangle each feel a net push straight away from the center.

**Where is the net force zero?** For two fixed charges on a line, a third charge can be in balance only where the two forces on it are opposite in direction AND equal in size.

| The two fixed charges | Where a third charge feels zero net force |
|---|---|
| same sign | between them, closer to the smaller charge |
| opposite signs, unequal sizes | outside the pair, beyond the smaller charge |
| opposite signs, equal sizes | nowhere |

- **Why between, for like charges?** Between two like charges the forces on a third charge point opposite ways, so they can cancel. Outside the pair both forces point the same way.
- **Why outside, for unlike charges?** Between unlike charges both forces point the SAME way (one pushes, the other pulls), so they add. Outside they oppose, and the third charge must sit nearer the smaller charge so that closeness makes up for the smaller size.
- **Why nowhere, for equal and opposite charges?** Outside the pair the nearer charge always wins, and at the midpoint the two forces add.

The balance condition is

$$\\frac{|q_1|}{r_1^2} = \\frac{|q_2|}{r_2^2}$$

where $r_1$ and $r_2$ are the distances from the third charge to each fixed charge. The third charge's own size and sign cancel out, so the same point works for any charge placed there. *Electrostatics Part 2: Electric Fields* explains why: that point is where the electric field is zero.`
    },
    {
      id: 'esc2-worked',
      type: 'text' as const,
      content: `### Worked Example — Three Charges on a Line

**Problem.** Three charges sit on the x-axis: $q_A = +1.0\\;\\mu\\text{C}$ at $x = 0$, $q_B = -4.0\\;\\mu\\text{C}$ at $x = 0.40\\;\\text{m}$, and $q_C = +2.0\\;\\mu\\text{C}$ at $x = 0.10\\;\\text{m}$. Use $k = 9.0 \\times 10^{9}\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$.

- **(a)** What force does A exert on C?
- **(b)** What force does B exert on C?
- **(c)** What is the net force on C?
- **(d)** With A and B fixed, where on the axis could C be placed to feel zero net force?

**(a) A on C.** The separation is $0.10\\;\\text{m}$: $|F| = \\dfrac{(9.0 \\times 10^{9})(1.0 \\times 10^{-6})(2.0 \\times 10^{-6})}{(0.10)^2} = \\dfrac{0.018}{0.010} = 1.8\\;\\text{N}$. Both are positive, so A repels C: the force points in the $+x$ direction.

**(b) B on C.** The separation is $0.40 - 0.10 = 0.30\\;\\text{m}$, not B's coordinate: $|F| = \\dfrac{(9.0 \\times 10^{9})(4.0 \\times 10^{-6})(2.0 \\times 10^{-6})}{(0.30)^2} = \\dfrac{0.072}{0.090} = 0.80\\;\\text{N}$. The charges are unlike, so B pulls C toward itself: also the $+x$ direction.

**(c) Net force.** Both forces point the same way, so they add: $1.8 + 0.80 = 2.6\\;\\text{N}$ in the $+x$ direction. Between two unlike charges, the push and the pull always reinforce.

**(d) Zero net force.** A and B have opposite signs, so the point lies outside the pair, beyond the smaller charge A. Let it be a distance $d$ to the left of A, which puts it $d + 0.40$ from B:

$$\\frac{1.0}{d^2} = \\frac{4.0}{(d + 0.40)^2} \\quad\\Rightarrow\\quad d + 0.40 = 2d \\quad\\Rightarrow\\quad d = 0.40\\;\\text{m}$$

So C would be in balance at $x = -0.40\\;\\text{m}$. Check the directions there: A pushes C toward $-x$ and B pulls it toward $+x$, so the forces oppose. C's own charge never entered the equation.

### Worked Example — Forces at Right Angles

**Problem.** A $+1.0\\;\\mu\\text{C}$ charge sits at the origin. A $-2.0\\;\\mu\\text{C}$ charge is at $(0.30\\;\\text{m}, 0)$ and a $+1.5\\;\\mu\\text{C}$ charge is at $(0, 0.30\\;\\text{m})$. Use $k = 9.0 \\times 10^{9}\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$.

- **(a)** What force does the $-2.0\\;\\mu\\text{C}$ charge exert on the charge at the origin?
- **(b)** What force does the $+1.5\\;\\mu\\text{C}$ charge exert on it?
- **(c)** What is the size of the net force?
- **(d)** What is its direction?

**(a) The charge on the x-axis.** $|F| = \\dfrac{(9.0 \\times 10^{9})(2.0 \\times 10^{-6})(1.0 \\times 10^{-6})}{(0.30)^2} = \\dfrac{0.018}{0.090} = 0.20\\;\\text{N}$. Unlike charges attract, so it points along $+x$, toward the $-2.0\\;\\mu\\text{C}$ charge.

**(b) The charge on the y-axis.** $|F| = \\dfrac{(9.0 \\times 10^{9})(1.5 \\times 10^{-6})(1.0 \\times 10^{-6})}{(0.30)^2} = \\dfrac{0.0135}{0.090} = 0.15\\;\\text{N}$. Like charges repel, so it points along $-y$, away from the $+1.5\\;\\mu\\text{C}$ charge.

**(c) Size.** The forces from (a) and (b) are perpendicular: $F = \\sqrt{0.20^2 + 0.15^2} = \\sqrt{0.0625} = 0.25\\;\\text{N}$. This is a 3-4-5 triangle scaled by 0.05; adding $0.20 + 0.15 = 0.35\\;\\text{N}$ would be wrong.

**(d) Direction.** $\\tan\\theta = \\dfrac{0.15}{0.20} = 0.75$, so $\\theta \\approx 37^\\circ$ below the $+x$ axis: to the right and down.`
    },
    {
      id: 'esc2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Superposition of Forces** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $-2.0\\;\\mu\\text{C}$ charge is fixed at $x = 0$ and a $+2.0\\;\\mu\\text{C}$ charge at $x = 0.60\\;\\text{m}$. A $+1.0\\;\\mu\\text{C}$ charge is placed midway between them, at $x = 0.30\\;\\text{m}$. What is the net electric force on it? ($k = 9.0 \\times 10^{9}\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$)`,
            options: [`$0.40\\;\\text{N}$, toward the positive charge`, `$0.40\\;\\text{N}$, toward the negative charge`, `$0.20\\;\\text{N}$, toward the negative charge`, `Zero, as the two forces cancel`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Each fixed charge is $0.30\\;\\text{m}$ away and exerts $(9.0 \\times 10^{9})(2.0 \\times 10^{-6})(1.0 \\times 10^{-6})/(0.30)^2 = 0.20\\;\\text{N}$. The negative charge pulls the middle charge toward itself and the positive charge pushes it the same way, so the forces add to $0.40\\;\\text{N}$ toward the negative charge. "Zero" assumes that equal sizes mean cancellation, which would be true only for two charges of the SAME sign, and $0.20\\;\\text{N}$ counts one force only.`
          },
          {
            question: `A $+9.0\\;\\mu\\text{C}$ charge is fixed at $x = 0$ and a $-1.0\\;\\mu\\text{C}$ charge at $x = 0.20\\;\\text{m}$. At which point on the x-axis would a third charge feel zero net electric force?`,
            options: [`$x = 0.15\\;\\text{m}$`, `$x = 0.10\\;\\text{m}$`, `$x = -0.10\\;\\text{m}$`, `$x = 0.30\\;\\text{m}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `For unlike charges the balance point is outside the pair, beyond the smaller charge. At $x = 0.30\\;\\text{m}$ the distances are 0.30 m and 0.10 m, and $9.0/0.30^2 = 100 = 1.0/0.10^2$, with the two forces pointing opposite ways. At $x = 0.15\\;\\text{m}$ the two forces are also equal in size, but between unlike charges they point the same way and add. $x = 0.10\\;\\text{m}$ is the midpoint, and $x = -0.10\\;\\text{m}$ is beyond the LARGER charge, which is both bigger and nearer there.`
          },
          {
            question: `In an enzyme's binding site, a bound ion feels a force of $6.0\\;\\text{pN}$ from one charged side chain and a force of $8.0\\;\\text{pN}$ from another. The two forces act at right angles to each other. What is the size of the net force on the ion?`,
            options: [`$10\\;\\text{pN}$`, `$14\\;\\text{pN}$`, `$2.0\\;\\text{pN}$`, `$7.0\\;\\text{pN}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Perpendicular forces combine by the Pythagorean theorem: $\\sqrt{6.0^2 + 8.0^2} = \\sqrt{100} = 10\\;\\text{pN}$, a 3-4-5 triangle doubled. $14\\;\\text{pN}$ adds the magnitudes, which is right only when the forces point the same way, $2.0\\;\\text{pN}$ subtracts them as if they were opposite, and $7.0\\;\\text{pN}$ averages them.`
          },
          {
            question: `Four equal positive charges are fixed at the corners of a square, and a small negative charge at the center feels zero net force. One of the corner charges is then removed. In which direction is the net force on the center charge now?`,
            options: [`Toward the empty corner`, `Still zero, as the other forces cancel`, `Toward the corner diagonally opposite the empty one`, `Along a side of the square`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `With all four corners filled, the attractions cancel in opposite pairs. Removing one charge leaves the pair on the other diagonal still cancelling, but the charge opposite the empty corner now pulls with nothing to balance it, so the net force points toward that charge. "Toward the empty corner" would be right for a positive center charge, which would be pushed away from the remaining corner.`
          }
        ]
      }
    },
    {
      id: 'esc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Coulomb's law.** $|F| = k|q_1 q_2|/r^2$ with $k = 9.0 \\times 10^{9}\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$ and $r$ measured center to center.
- **Magnitude, then direction.** Put in sizes only; like charges repel, unlike attract, along the line joining them.
- **Equal and opposite.** Both charges feel the same size of force, whatever their sizes (Newton's third law).
- **Ratios.** $F \\propto q_1 q_2$ and $F \\propto 1/r^2$: double the distance for one-quarter of the force, and multiply the factors.
- **Like gravity, but stronger.** Both are inverse-square laws; the electric force can also repel and is about $10^{36}$ times stronger for two protons.
- **Superposition.** Net force is the VECTOR sum of independent pair forces: signs from directions on a line, components and Pythagoras at right angles.
- **Zero-force points.** Same signs: between, nearer the smaller charge. Opposite signs: outside, beyond the smaller charge. Use $|q_1|/r_1^2 = |q_2|/r_2^2$.

**Common traps**

- **Using $1/r$.** Doubling the distance cuts the force to a quarter, not a half; working backward needs a square root.
- **Bigger charge, bigger force.** The larger charge does NOT feel the larger force; the pair shares one force size.
- **Signs in the formula.** A negative result is not a direction. Use magnitudes, then state attract or repel.
- **Unconverted units.** $\\mu\\text{C}$, nC, cm and nm must become C and m before they enter the formula.
- **Adding magnitudes.** Forces in different directions add as vectors: 3 N and 4 N at right angles give 5 N, not 7 N.
- **Coordinate as distance.** Each pair needs its own separation, not a charge's position on the axis.
- **Balance between unlike charges.** Between a positive and a negative charge the two forces point the same way and can never cancel.

<!-- yield:low -->
- Low-yield extras: $k = 1/(4\\pi\\varepsilon_0)$ with $\\varepsilon_0 = 8.85 \\times 10^{-12}\\;\\text{C}^2/(\\text{N}\\cdot\\text{m}^2)$ and the more precise $k = 8.99 \\times 10^{9}$; the roughly 80-fold weakening of the force between ions in water.
<!-- /yield -->

**Next up:** *Electrostatics Part 2: Electric Fields* asks what a charge does to the space around it, and turns Coulomb's law into the electric field.`
    }
  ]
}
