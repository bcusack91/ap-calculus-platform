import type { LessonData } from './registry'

export const electricFieldsMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-electricity-electric-fields-mcat',
  sections: [
    {
      id: 'esf1-intro',
      type: 'text' as const,
      content: `# Electrostatics Part 2: Electric Fields

**Part 1 of 2 — The Electric Field & Null Points**

**Where this fits.** *Electrostatics Part 1: Charge & Coulomb's Law* found the force between one pair of charges. This lesson turns that force into the **electric field**, a map of the push any charge would feel at each point in space, and then follows charges as they move through a field. The next lesson, *Electrostatics Part 3: Electric Potential & Energy*, describes the same space in terms of energy.

### The Electric Field

A charge changes the space around it: it sets up an **electric field**. A second charge placed in that space feels a force from the field at its own location. The field is there whether or not anything is placed in it.

**Definition.** The field at a point is the force per unit charge on a small positive test charge $q_0$ placed there:

$$\\vec{E} = \\frac{\\vec{F}}{q_0}$$

- **Units.** Newtons per coulomb, N/C (the same unit as volts per metre, V/m, which the next lesson explains).
- **A vector.** Its direction is the way a POSITIVE charge would be pushed.
- **The gravity parallel.** Near Earth, $g = F/m$ is the gravitational force per kilogram (N/kg). $E$ is the electric force per coulomb.

**Force from field.** Turn the definition around:

$$\\vec{F} = q\\vec{E}$$

- A **positive** charge is pushed ALONG $\\vec{E}$.
- A **negative** charge is pushed AGAINST $\\vec{E}$, with the same size of force for the same size of charge.
- **The field belongs to the source, not the test charge.** Double the test charge and the force doubles, but $F/q_0$ is the same. Swap a positive test charge for a negative one and the force reverses, but the field does not.

**Field of a point charge.** Put a test charge $q_0$ a distance $r$ from a source charge $Q$. Coulomb's law gives $|F| = k|Q|q_0/r^2$, and dividing by $q_0$ leaves

$$|E| = \\frac{k|Q|}{r^2}$$

with $k = 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$ and $r$ measured from the source.

- **Size from the formula, direction from the sign.** Use the magnitude of $Q$ for the size. Then the field points AWAY from a positive source and TOWARD a negative source, along the line through the charge.
- **Inverse square.** Double the distance and the field drops to $\\frac{1}{4}$; triple it and the field drops to $\\frac{1}{9}$. Double $Q$ and the field doubles.
- **One charge, not two.** The field contains only the source charge. The force $|F| = k|q_1 q_2|/r^2$ contains both.

| Quantity | Formula | Charges in it | Belongs to |
|---|---|---|---|
| Force | $\\lvert F\\rvert = k\\lvert q_1 q_2\\rvert/r^2$, or $F = qE$ | both | a charge placed in the field |
| Field | $\\lvert E\\rvert = k\\lvert Q\\rvert/r^2$ | the source only | a point in space |

**Quick example.** A small sphere carries $-4.0\\;\\text{nC}$. Point P is $0.20\\;\\text{m}$ due east of it.

- **Field at P.** $|E| = \\dfrac{(9.0 \\times 10^9)(4.0 \\times 10^{-9})}{(0.20)^2} = \\dfrac{36}{0.04} = 900\\;\\text{N/C}$, pointing WEST, toward the negative sphere.
- **Force on a $+2.0\\;\\text{nC}$ bead at P.** $F = qE = (2.0 \\times 10^{-9})(900) = 1.8 \\times 10^{-6}\\;\\text{N}$, west, along $\\vec{E}$: the bead is pulled toward the sphere.
- **Force on an electron at P.** $F = eE = (1.6 \\times 10^{-19})(900) = 1.4 \\times 10^{-16}\\;\\text{N}$, EAST, against $\\vec{E}$: two negative charges repel.
- **Field at $0.60\\;\\text{m}$.** Three times the distance, so $900/9 = 100\\;\\text{N/C}$, still pointing west.

**Working backward.** A measured force gives the field: $E = F/|q|$, pointing the same way as the force if the test charge is positive and the OPPOSITE way if it is negative. Then $|Q| = Er^2/k$ gives the size of the source, and the field's direction gives its sign (field toward the source means a negative source).`
    },
    {
      id: 'esf1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: The Electric Field** 🎯`,
      exercise: {
        questions: [
          {
            question: `The electric field $2.0\\;\\text{cm}$ from a small charged bead is $360\\;\\text{N/C}$. What is the field $6.0\\;\\text{cm}$ from the bead?`,
            options: [`$120\\;\\text{N/C}$`, `$1080\\;\\text{N/C}$`, `$3240\\;\\text{N/C}$`, `$40\\;\\text{N/C}$`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `The distance triples, and $|E| \\propto 1/r^2$, so the field falls by $3^2 = 9$: $360/9 = 40\\;\\text{N/C}$. $120\\;\\text{N/C}$ divides by 3, treating the field as $1/r$. The two larger values make the field grow with distance, by a factor of 3 or of 9, when a point-charge field always weakens as you move away.`
          },
          {
            question: `A sodium ion ($+e$) at point P inside an open ion channel feels an electric force $F$ directed into the cell. It is replaced by a chloride ion ($-e$) at the same point. Compared with before, the field at P and the force on the ion at P are:`,
            options: [`Field unchanged; force $F$, now directed out of the cell`, `Field reversed; force $F$, now directed out of the cell`, `Field unchanged; force $F$, directed into the cell`, `Field reversed; force $F$, directed into the cell`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The field is set by the source charges and the location, not by the ion placed there, so it is unchanged. The chloride ion has the same size of charge with the opposite sign, so $F = qE$ has the same size and the opposite direction: out of the cell. Saying the field reverses confuses the force on the ion with the field, and a force still directed into the cell forgets that a negative charge is pushed against $\\vec{E}$.`
          },
          {
            question: `A small sphere carries a charge of $-6.0\\;\\text{nC}$. What are the size and direction of the electric field at a point $0.30\\;\\text{m}$ from it? ($k = 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$)`,
            options: [`$180\\;\\text{N/C}$, away from the sphere`, `$600\\;\\text{N/C}$, toward the sphere`, `$180\\;\\text{N/C}$, toward the sphere`, `$600\\;\\text{N/C}$, away from the sphere`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `$|E| = k|Q|/r^2 = (9.0 \\times 10^9)(6.0 \\times 10^{-9})/(0.30)^2 = 54/0.09 = 600\\;\\text{N/C}$, and the field of a negative charge points toward it. $180\\;\\text{N/C}$ divides by $r$ instead of $r^2$. "Away from the sphere" draws the field of a negative charge as if it were positive.`
          },
          {
            question: `An electron at point P feels an electric force of $3.2 \\times 10^{-16}\\;\\text{N}$ directed east. What is the electric field at P? ($e = 1.6 \\times 10^{-19}\\;\\text{C}$)`,
            options: [`$2.0 \\times 10^{3}\\;\\text{N/C}$, east`, `$5.0 \\times 10^{-4}\\;\\text{N/C}$, west`, `$2.0 \\times 10^{3}\\;\\text{N/C}$, west`, `$5.0 \\times 10^{-4}\\;\\text{N/C}$, east`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$E = F/|q| = (3.2 \\times 10^{-16})/(1.6 \\times 10^{-19}) = 2.0 \\times 10^{3}\\;\\text{N/C}$. The electron is negative, so it is pushed against the field: a force to the east means the field points west. "East" takes the force's direction as the field's, which is right only for a positive charge, and $5.0 \\times 10^{-4}\\;\\text{N/C}$ divides the charge by the force.`
          }
        ]
      }
    },
    {
      id: 'esf1-superposition',
      type: 'text' as const,
      content: `### Superposition of Fields

Real problems have more than one source. **Superposition:** the net field at a point is the VECTOR sum of the fields of the individual charges, each found as if the others were not there:

$$\\vec{E}_{net} = \\vec{E}_1 + \\vec{E}_2 + \\dots$$

Each field has the size $k|q|/r^2$ and a direction set by its own charge's sign.

**On a line.** Draw each field as an arrow at the point, choose a positive direction, give each field a sign from the way its arrow points, and add.

- **Between two OPPOSITE charges** both fields point toward the negative charge (away from the $+$, toward the $-$), so they ADD.
- **Between two LIKE charges** the fields point opposite ways and partly cancel. Whichever is larger, $k|q|/r^2$, wins.

**Off a line.** Split each field into x- and y-components, add the components separately, and recombine with $E = \\sqrt{E_x^2 + E_y^2}$. Look for symmetry first:

- Two equal charges placed symmetrically about a point cancel one component and double the other.
- Three equal charges at the corners of an equilateral triangle give ZERO field at its centre: three equal arrows $120^\\circ$ apart.

**Net field to force.** Once you have $\\vec{E}_{net}$, any charge placed there feels $\\vec{F} = q\\vec{E}_{net}$: along the net field if positive, against it if negative.

### Null Points

A **null point** is a place where the fields are equal in size and opposite in direction, so $E_{net} = 0$. It is the same spot as the zero-force point from the Coulomb's law lesson: since $F = qE$, any charge placed at a null point feels no electric force, whatever its sign or size.

**Step 1: decide the region.** The two fields must point OPPOSITE ways there.

| Charges | Where the null point is | Why |
|---|---|---|
| Like, equal | the midpoint | equal sizes at equal distances |
| Like, unequal | between them, nearer the SMALLER charge | nearness makes up for less charge |
| Opposite, unequal | outside the pair, beyond the SMALLER charge | between them the fields add |
| Opposite, equal | nowhere (at any finite distance) | the nearer charge always wins outside |

For opposite charges the null point is never between them (both fields point toward the negative charge there) and never beyond the larger charge (there the larger charge is also the nearer one, so its field always wins).

**Step 2: set the sizes equal.**

$$\\frac{k|q_1|}{r_1^2} = \\frac{k|q_2|}{r_2^2} \\quad\\Rightarrow\\quad \\frac{r_1}{r_2} = \\sqrt{\\frac{|q_1|}{|q_2|}}$$

$k$ cancels, and the distance ratio is the SQUARE ROOT of the charge ratio.

- **$+4Q$ and $+Q$, a distance $d$ apart.** $r_1/r_2 = \\sqrt{4} = 2$, and between the charges $r_1 + r_2 = d$, so $r_2 = d/3$: the null point is $d/3$ from the $+Q$.
- **$-4Q$ and $+Q$, a distance $d$ apart.** Again $r_1/r_2 = 2$, but now the point is outside, beyond the $+Q$, so $r_1 = d + r_2$. Then $d + r_2 = 2r_2$ and $r_2 = d$: the null point is a distance $d$ beyond the $+Q$.`
    },
    {
      id: 'esf1-worked',
      type: 'text' as const,
      content: `### Worked Example — Net Field and Null Point on a Line

**Problem.** A $+8.0\\;\\text{nC}$ charge is fixed at $x = 0$ and a $+2.0\\;\\text{nC}$ charge at $x = 0.60\\;\\text{m}$. Use $k = 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$.

- **(a)** What field does each charge produce at the midpoint, $x = 0.30\\;\\text{m}$?
- **(b)** What is the net field there?
- **(c)** Where on the x-axis is the field zero?
- **(d)** What force would a chloride ion ($-e$) feel at the midpoint?

**(a) Each field alone.** From the $+8.0\\;\\text{nC}$ charge: $\\dfrac{(9.0 \\times 10^9)(8.0 \\times 10^{-9})}{(0.30)^2} = \\dfrac{72}{0.09} = 800\\;\\text{N/C}$, in the $+x$ direction (away from it). From the $+2.0\\;\\text{nC}$ charge: $\\dfrac{18}{0.09} = 200\\;\\text{N/C}$, in the $-x$ direction (away from it).

**(b) Add with signs.** The arrows from (a) point opposite ways: $E_{net} = 800 - 200 = 600\\;\\text{N/C}$ in the $+x$ direction, toward the smaller charge.

**(c) Null point.** Like charges, so it lies between them, nearer the $+2.0\\;\\text{nC}$ charge. $r_1/r_2 = \\sqrt{8.0/2.0} = 2$ and $r_1 + r_2 = 0.60\\;\\text{m}$, so $r_2 = 0.20\\;\\text{m}$ and $r_1 = 0.40\\;\\text{m}$: the field is zero at $x = 0.40\\;\\text{m}$. Check: $72/(0.40)^2 = 450\\;\\text{N/C}$ and $18/(0.20)^2 = 450\\;\\text{N/C}$, equal and opposite.

**(d) Force on the ion.** With the $600\\;\\text{N/C}$ from (b): $F = eE = (1.6 \\times 10^{-19})(600) = 9.6 \\times 10^{-17}\\;\\text{N}$, in the $-x$ direction, AGAINST the field, toward the $+8.0\\;\\text{nC}$ charge.

### Worked Example — Symmetry Off the Line

**Problem.** Two $+2.0\\;\\text{nC}$ charges are fixed at $(0, +0.30\\;\\text{m})$ and $(0, -0.30\\;\\text{m})$. Point P is at $(0.40\\;\\text{m}, 0)$.

- **(a)** How far is P from each charge, and how large is each charge's field there?
- **(b)** What is the net field at P?
- **(c)** The lower charge is replaced by $-2.0\\;\\text{nC}$. What is the net field at P now?

**(a) Distance and size.** A 3-4-5 triangle: $r = \\sqrt{0.30^2 + 0.40^2} = 0.50\\;\\text{m}$. Each field is $\\dfrac{(9.0 \\times 10^9)(2.0 \\times 10^{-9})}{(0.50)^2} = \\dfrac{18}{0.25} = 72\\;\\text{N/C}$.

**(b) Components.** Each $72\\;\\text{N/C}$ field from (a) points away from its charge, with an x-part of $72 \\times \\dfrac{0.40}{0.50} = 57.6\\;\\text{N/C}$ and a y-part of $72 \\times \\dfrac{0.30}{0.50} = 43.2\\;\\text{N/C}$. The y-parts point opposite ways and cancel; the x-parts add: $E_{net} = 115.2 \\approx 1.2 \\times 10^2\\;\\text{N/C}$ along $+x$. It is NOT $72 + 72 = 144\\;\\text{N/C}$: the arrows are not parallel.

**(c) One sign flipped.** The negative charge's field now points TOWARD it, so its x-part reverses and cancels the other x-part, while both y-parts point down ($-y$) and add: $E_{net} = 2(43.2) = 86.4 \\approx 86\\;\\text{N/C}$ along $-y$, from the positive charge's side toward the negative charge's side. This pair is an electric dipole, the subject of the next part.`
    },
    {
      id: 'esf1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Superposition & Null Points** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $+4.0\\;\\text{nC}$ charge is fixed at $x = 0$ and a $-4.0\\;\\text{nC}$ charge at $x = 0.40\\;\\text{m}$. What is the net electric field at the midpoint, $x = 0.20\\;\\text{m}$? ($k = 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$)`,
            options: [`$900\\;\\text{N/C}$, toward the negative charge`, `$900\\;\\text{N/C}$, toward the positive charge`, `$1800\\;\\text{N/C}$, toward the negative charge`, `Zero, as the two fields cancel`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Each charge gives $36/(0.20)^2 = 36/0.04 = 900\\;\\text{N/C}$ at the midpoint. The positive charge's field points away from it and the negative charge's field points toward itself, so both point toward the negative charge and add to $1800\\;\\text{N/C}$. Zero is the result for two EQUAL LIKE charges, whose fields oppose at the midpoint; $900\\;\\text{N/C}$ counts only one charge's field; and "toward the positive charge" also reverses the arrows, as if fields pointed toward positive charges.`
          },
          {
            question: `A charge $+Q$ is fixed at $x = 0$ and a charge $-4Q$ at $x = d$. At which point on the x-axis is the electric field zero?`,
            options: [`$x = -d$`, `$x = d/3$`, `$x = 3d/2$`, `$x = -d/3$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `For opposite charges the null point is outside the pair, beyond the smaller charge: here at negative $x$. Equal sizes need $r_{4Q}/r_Q = \\sqrt{4} = 2$, and at $x = -d$ the distances are $2d$ and $d$. At $x = d/3$ the two sizes are also equal, but both fields point toward the $-4Q$, so they add instead of cancelling. At $x = 3d/2$ the larger charge is also the nearer one and wins, and at $x = -d/3$ the distances are $4d/3$ and $d/3$, a ratio of 4 instead of 2.`
          },
          {
            question: `A $+1.0\\;\\mu\\text{C}$ charge is fixed at $x = 0$ and a $+9.0\\;\\mu\\text{C}$ charge at $x = 0.80\\;\\text{m}$. A small negatively charged bead feels no net electric force when it is placed on the x-axis at:`,
            options: [`$x = 0.08\\;\\text{m}$`, `$x = 0.40\\;\\text{m}$`, `$x = 0.60\\;\\text{m}$`, `$x = 0.20\\;\\text{m}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `No force means zero field, whatever the bead's sign. For like charges the null point is between them, nearer the smaller one, with $r_9/r_1 = \\sqrt{9.0/1.0} = 3$ and $r_1 + r_9 = 0.80\\;\\text{m}$: $r_1 = 0.20\\;\\text{m}$, so $x = 0.20\\;\\text{m}$. $x = 0.60\\;\\text{m}$ puts the point nearer the larger charge, $x = 0.40\\;\\text{m}$ is the midpoint (right only for equal charges), and $x = 0.08\\;\\text{m}$ uses the charge ratio 9 without its square root.`
          },
          {
            question: `Three identical positive ions sit at the corners of an equilateral triangle, and each alone produces a field of size $E_0$ at the triangle's centre, where the net field is zero. One ion is then removed. The net field at the centre is now:`,
            options: [`Still zero, since the two remaining fields cancel each other`, `Of size $E_0$, pointing toward the empty corner`, `Of size $E_0$, pointing away from the empty corner`, `Of size $2E_0$, pointing toward the empty corner`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `With all three ions, the two that remain must together cancel the third ion's field, so their sum is equal and opposite to it. The removed ion's field pointed away from its corner with size $E_0$; the remaining two therefore give $E_0$ pointing TOWARD the empty corner. $2E_0$ adds the two magnitudes as if the arrows were parallel, when they are $120^\\circ$ apart. The two remaining fields cannot cancel, because they are not opposite.`
          }
        ]
      }
    },
    {
      id: 'esf1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Field defined.** $\\vec{E} = \\vec{F}/q_0$ in N/C: the force per unit positive charge, a property of a point in space.
- **Force from field.** $\\vec{F} = q\\vec{E}$: a positive charge is pushed along the field, a negative charge against it.
- **Point charge.** $|E| = k|Q|/r^2$: size from the formula, direction from the sign (away from $+$, toward $-$).
- **Superposition.** Fields add as vectors: with signs on a line, by components and symmetry off it.
- **Null points.** Like charges: between, nearer the smaller. Opposite charges: outside, beyond the smaller. $r_1/r_2 = \\sqrt{|q_1|/|q_2|}$.

**Common traps**

- **Field follows the test charge.** A negative test charge reverses the FORCE; the field is unchanged.
- **Scaling as $1/r$.** Field is inverse-SQUARE: three times the distance gives one-ninth of the field.
- **Adding magnitudes.** Check each arrow's direction first; two fields can add, partly cancel or meet at an angle.
- **Null point between opposite charges.** Both fields point toward the negative charge there, so they can never cancel.
- **Forgetting the square root.** The distance ratio at a null point is $\\sqrt{|q_1|/|q_2|}$, and the point sits nearer the SMALLER charge.`
    }
  ]
}
