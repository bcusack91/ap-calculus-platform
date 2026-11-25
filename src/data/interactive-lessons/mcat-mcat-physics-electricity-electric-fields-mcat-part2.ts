import type { LessonData } from './registry'

export const electricFieldsMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-electricity-electric-fields-mcat',
  sections: [
    {
      id: 'esf2-intro',
      type: 'text' as const,
      content: `# Electrostatics Part 2: Electric Fields

**Part 2 of 2 — Field Lines, Dipoles & Uniform Fields**

Part 1 found the field at one point at a time. This part draws the whole field at once, looks at two special charge arrangements (the dipole and the conductor), and then follows charges moving through the simplest field of all, the uniform field between two charged plates.

### Field Lines

Field lines are a map of the field. Four rules let you draw them or read them:

- **Start and end.** Lines start on positive charges and end on negative charges (or run off to infinity).
- **Direction.** The field at any point is tangent to the line through it. A positive charge is pushed along the line, a negative charge against it.
- **Never cross.** The field has only one direction at each point, so two lines can never cross.
- **Count.** The number of lines leaving or ending on a charge is proportional to the size of that charge.

**Density shows strength.** Where lines crowd together the field is strong; where they spread apart it is weak. Twice the line density means twice the field. Evenly spaced parallel lines mean a UNIFORM field.

Reading two common pictures:

- **Two equal positive charges.** The lines leave both and bend away from each other, leaving an empty spot at the midpoint: the null point from Part 1.
- **$+2Q$ and $-Q$.** Twice as many lines leave the $+2Q$ as end on the $-Q$. The extra lines run off to infinity; do not count them as ending on the negative charge.

### Dipoles

An **electric dipole** is a $+q$ and a $-q$ a small distance $d$ apart. Every polar bond is one, and so is a whole polar molecule such as water.

**Field pattern.** The lines leave $+q$, loop around and end on $-q$.

- Between the charges the field points from $+$ to $-$.
- On the line halfway between them (the perpendicular bisector) the field is parallel to the dipole's axis, pointing from the $+$ side toward the $-$ side, as in the last worked example of Part 1.

**Dipole moment.** A dipole's strength is its dipole moment:

$$p = qd$$

in C·m, drawn as an arrow from $-q$ to $+q$. More separated charge, or a longer separation, means a larger $p$.

**A dipole in a UNIFORM field.**

- **No net force.** The two ends feel equal and opposite forces, $+qE$ and $-qE$, so the dipole does not drift.
- **A torque.** Unless $\\vec{p}$ already lines up with $\\vec{E}$, those two forces act along different lines and twist the dipole: $\\tau = pE\\sin\\theta$, where $\\theta$ is the angle between $\\vec{p}$ and $\\vec{E}$. The torque is largest at $90^\\circ$ and zero when aligned.
- **Stable when aligned.** The torque always turns $\\vec{p}$ toward $\\vec{E}$, so a dipole bumped out of line swings back.

In a NONuniform field the two ends feel different sizes of force, so there is a net force as well. Takeaway: polar molecules such as water swing into line with a field, but a uniform field does not make them drift.

### Conductors in Electrostatic Equilibrium

A conductor holds charges that are free to move. If there were a field inside the metal, those charges would feel $F = qE$ and keep moving. They stop only when the following are all true, and this state is **electrostatic equilibrium**:

- **$E = 0$ inside the metal.** Exactly zero, not merely small.
- **Excess charge sits on the outer surface.** None stays in the interior.
- **The field just outside is perpendicular to the surface.** Any part of the field along the surface would push charges along it.
- **A charged sphere looks like a point charge from outside.** Outside a conducting sphere, solid or hollow, $|E| = k|Q|/r^2$ with $r$ measured from the CENTRE. Inside, $E = 0$.
- **Shielding.** A hollow conductor with no charge inside shields its interior from outside fields: charges on the metal rearrange until they cancel the outside field everywhere within. This is why a car body protects its passengers from lightning, and why rooms used to record tiny nerve and brain signals are enclosed in metal.

Insulators, such as the lipid bilayer, do none of this: their charges are held in place, so a field can exist inside them.`
    },
    {
      id: 'esf2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Field Lines, Dipoles & Conductors** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a field-line diagram, 20 lines end on charge A. Five of them start on charge B, and the other 15 come in from the edges of the diagram. Charge B is $+2.0\\;\\text{nC}$. What is charge A?`,
            options: [`$-8.0\\;\\text{nC}$`, `$+8.0\\;\\text{nC}$`, `$-6.0\\;\\text{nC}$`, `$-0.50\\;\\text{nC}$`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Lines end on negative charges, so A is negative, and line counts are proportional to charge: 20 lines for A against 5 for B makes A four times as large, $-8.0\\;\\text{nC}$. $+8.0\\;\\text{nC}$ misses that lines ENDING on a charge make it negative. $-6.0\\;\\text{nC}$ counts only the 15 lines that do not come from B, and $-0.50\\;\\text{nC}$ inverts the ratio.`
          },
          {
            question: `A water molecule sits in a uniform electric field with its dipole moment at $90^\\circ$ to the field. At that moment the molecule experiences:`,
            options: [`No torque, and a net force along the field`, `The maximum torque, and a net force along the field`, `No torque, and no net force`, `The maximum torque, and no net force`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `In a uniform field the two ends of a dipole feel equal and opposite forces, so the net force is zero at any angle. Those forces act along different lines and give a torque $\\tau = pE\\sin\\theta$, which is largest at $90^\\circ$. The torque vanishes only when the dipole is lined up with the field, and a net force would need a NONuniform field.`
          },
          {
            question: `A hollow metal sphere of radius $0.10\\;\\text{m}$ carries a charge of $+2.0\\;\\text{nC}$. What is the electric field $0.05\\;\\text{m}$ from its centre, and $0.30\\;\\text{m}$ from its centre? ($k = 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$)`,
            options: [`$7200\\;\\text{N/C}$, then $200\\;\\text{N/C}$`, `$0$, then $200\\;\\text{N/C}$`, `$0$, then $450\\;\\text{N/C}$`, `$1800\\;\\text{N/C}$, then $200\\;\\text{N/C}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Inside a conductor in equilibrium, hollow or solid, the field is zero. Outside, the sphere acts like a point charge at its centre: $|E| = (9.0 \\times 10^9)(2.0 \\times 10^{-9})/(0.30)^2 = 18/0.09 = 200\\;\\text{N/C}$. $7200\\;\\text{N/C}$ uses $k|Q|/r^2$ inside the sphere, and $1800\\;\\text{N/C}$ is the surface value carried inside. $450\\;\\text{N/C}$ measures $r$ from the surface ($0.20\\;\\text{m}$) instead of from the centre.`
          },
          {
            question: `To protect an amplifier that records nerve signals, a researcher encloses it in a closed, uncharged copper box. A strongly charged plastic sheet is then brought near the outside of the box. Once the charges in the copper settle, the electric field inside the box is:`,
            options: [`Unchanged, since the copper box carries no net charge`, `Weaker than outside, but pointing the same way as before`, `Zero, since induced charges on the copper cancel the sheet's field`, `Reversed, since the near wall takes on the opposite charge`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Free charges in the copper move until the field inside the metal is zero, and with no charge inside the hollow, the enclosed space is shielded too. The box needs no net charge to do this: its own charges simply separate. The cancellation is complete, not partial, because the charges keep moving as long as any field remains in the metal, and equilibrium never overshoots into a reversed field.`
          }
        ]
      }
    },
    {
      id: 'esf2-uniform',
      type: 'text' as const,
      content: `### Charges in a Uniform Field

Two large, parallel plates with equal and opposite charges make a **uniform field** between them: the same size and direction at every point (away from the edges), pointing from the $+$ plate to the $-$ plate and drawn as straight, evenly spaced lines. Outside the plates the field is nearly zero.

The field's size is set by the voltage across the plates and the gap between them, $E = \\Delta V/d$; the next lesson shows where that comes from. Here the field is simply given, in N/C or V/m (the same unit).

**Constant field, constant force.** $F = qE$ has the same size at every point between the plates, near either plate or in the middle.

- A positive charge is pushed toward the $-$ plate; a negative charge toward the $+$ plate.
- A proton and an electron feel forces of EQUAL size, $eE$, in opposite directions. Force depends on charge, not mass.

**Constant force, constant acceleration.**

$$a = \\frac{qE}{m}$$

- The electron's mass is about 1836 times smaller than the proton's, so in the same field its acceleration is about 1836 times larger.
- **Released from rest**, a charge moves like a dropped ball: $v = at$ and $d = \\frac{1}{2}at^2$.
- **Fired across the field**, a charge keeps its sideways velocity and accelerates along the line of the field, so it follows a PARABOLA, like a ball thrown horizontally. Crossing plates of length $L$ at speed $v$ takes $t = L/v$, and the deflection is $y = \\frac{1}{2}at^2$. This is how fields steer electron beams and charged ink drops. A circular path belongs to a magnetic field, not an electric one.

**What about gravity?** For an electron or an ion it is negligible. An electron's weight is about $9 \\times 10^{-30}\\;\\text{N}$; a modest field of $100\\;\\text{N/C}$ pushes it with $1.6 \\times 10^{-17}\\;\\text{N}$, over a trillion times more. For a charged droplet or dust grain both forces matter, and the drop hovers when the electric force points up and balances its weight: $|q|E = mg$.

### Gel Electrophoresis

A gel run is a uniform field put to work. A voltage across the gel sets up a field along its length, and a molecule of charge $q$ feels $F = qE$ toward the electrode of the OPPOSITE sign.

- **DNA runs to the positive electrode.** The phosphate backbone makes DNA negative all along its length, so the wells are placed at the negative electrode and the fragments migrate toward the positive one (the anode).
- **The field pulls, the gel sorts.** A fragment twice as long carries twice the charge and feels twice the force, so the force per unit charge is the same for all fragments. What differs is how much the gel's mesh holds each one back: shorter fragments slip through more easily and travel FARTHER in the same time.
- **Proteins.** In SDS-PAGE, the detergent SDS coats each protein with negative charge in proportion to its length, so proteins also run toward the positive electrode and separate by size. Without SDS, a protein's net charge depends on the pH: at a pH equal to its isoelectric point (pI) the net charge is zero, so $F = qE = 0$ and it stops moving.
- **Steady drift.** The molecules do not keep accelerating: drag from the gel balances the electric force almost at once, so each band drifts at a steady speed.`
    },
    {
      id: 'esf2-worked',
      type: 'text' as const,
      content: `### Worked Example — Electron Crossing a Uniform Field

**Problem.** Two horizontal plates $4.0\\;\\text{cm}$ long have a uniform field of $910\\;\\text{N/C}$ between them, with the top plate positive. An electron ($e = 1.6 \\times 10^{-19}\\;\\text{C}$, $m_e = 9.1 \\times 10^{-31}\\;\\text{kg}$) enters midway between the plates, moving horizontally at $2.0 \\times 10^{7}\\;\\text{m/s}$.

- **(a)** What force acts on the electron, and which way? Is its weight worth including?
- **(b)** What is its acceleration?
- **(c)** How long does it spend between the plates?
- **(d)** How far has it been deflected when it leaves, and what shape is its path?

**(a) Force.** The field points down, from the $+$ plate to the $-$ plate. $F = eE = (1.6 \\times 10^{-19})(910) \\approx 1.5 \\times 10^{-16}\\;\\text{N}$, UPWARD, against the field, toward the positive plate. The weight is $mg \\approx 9 \\times 10^{-30}\\;\\text{N}$, far too small to matter.

**(b) Acceleration.** $a = \\dfrac{eE}{m} = \\dfrac{(1.6 \\times 10^{-19})(910)}{9.1 \\times 10^{-31}} = 1.6 \\times 10^{14}\\;\\text{m/s}^2$, upward.

**(c) Time.** The force is vertical, so the horizontal velocity does not change: $t = \\dfrac{L}{v} = \\dfrac{0.040}{2.0 \\times 10^{7}} = 2.0 \\times 10^{-9}\\;\\text{s}$.

**(d) Deflection.** With $a$ from (b) and $t$ from (c): $y = \\frac{1}{2}at^2 = \\frac{1}{2}(1.6 \\times 10^{14})(2.0 \\times 10^{-9})^2 = 3.2 \\times 10^{-4}\\;\\text{m}$, about $0.3\\;\\text{mm}$ upward. The path is a parabola curving toward the positive plate, exactly like a ball thrown horizontally, only "falling" up.

### Worked Example — Running a Gel

**Problem.** A gel $0.25\\;\\text{m}$ long has a uniform field of $400\\;\\text{N/C}$ along it, with the sample wells at the negative electrode. A DNA fragment in the gel carries a charge of $-3.2 \\times 10^{-17}\\;\\text{C}$.

- **(a)** Which way does the field point, and which way does the fragment move?
- **(b)** What electric force acts on the fragment?
- **(c)** A fragment twice as long carries twice the charge. What force acts on it?
- **(d)** After an hour, which fragment has travelled farther, and why?

**(a) Directions.** The field points from the positive electrode back toward the negative electrode at the wells. DNA is negative, so it is pushed AGAINST the field, away from the wells and toward the positive electrode.

**(b) Force.** $F = |q|E = (3.2 \\times 10^{-17})(400) = 1.28 \\times 10^{-14} \\approx 1.3 \\times 10^{-14}\\;\\text{N}$.

**(c) Twice the charge.** The same field gives twice the force of (b), about $2.6 \\times 10^{-14}\\;\\text{N}$. The force per unit charge, $E$, is the same for both.

**(d) The shorter one.** The gel's mesh holds back the longer fragment more, so it drifts more slowly even though it is pulled harder. The shorter fragment ends up nearer the positive electrode.`
    },
    {
      id: 'esf2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Charges in a Uniform Field** 🎯`,
      exercise: {
        questions: [
          {
            question: `A proton and an alpha particle (charge $+2e$, mass about four times the proton's) are released from rest in the same uniform electric field. Compared with the proton's acceleration, the alpha particle's acceleration is:`,
            options: [`Twice as large`, `One quarter as large`, `Half as large`, `Exactly the same`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$a = qE/m$. The alpha particle has twice the charge, so twice the force, but four times the mass: $a_\\alpha = (2e)E/(4m_p) = \\frac{1}{2}a_p$. "Twice as large" compares the forces and ignores the mass, "one quarter" compares the masses and ignores the charge, and equal accelerations would need equal charge-to-mass ratios.`
          },
          {
            question: `A tiny oil droplet of mass $3.2 \\times 10^{-15}\\;\\text{kg}$ carries two excess electrons and hovers motionless between two horizontal charged plates. What are the size and direction of the field between the plates? ($e = 1.6 \\times 10^{-19}\\;\\text{C}$, $g = 10\\;\\text{m/s}^2$)`,
            options: [`$1.0 \\times 10^{4}\\;\\text{N/C}$, pointing downward`, `$1.0 \\times 10^{5}\\;\\text{N/C}$, pointing downward`, `$1.0 \\times 10^{4}\\;\\text{N/C}$, pointing upward`, `$1.0 \\times 10^{5}\\;\\text{N/C}$, pointing upward`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Hovering means $|q|E = mg$, so $E = mg/|q| = (3.2 \\times 10^{-15})(10)/(3.2 \\times 10^{-19}) = 1.0 \\times 10^{5}\\;\\text{N/C}$. The electric force must point up, and the droplet is negative, so the field points DOWN. An upward field would push the negative droplet down, adding to its weight, and $1.0 \\times 10^{4}\\;\\text{N/C}$ leaves out $g$, dividing the mass by the charge.`
          },
          {
            question: `An electron fired horizontally between two charged plates leaves them deflected by a distance $y$. A second electron enters the same field along the same line at twice the speed. Its deflection on leaving the plates is:`,
            options: [`$y/4$`, `$y/2$`, `$y$`, `$2y$`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The acceleration $a = eE/m$ is the same for both electrons, but the faster one spends half the time between the plates ($t = L/v$). Deflection is $\\frac{1}{2}at^2$, so half the time gives one quarter of the deflection. $y/2$ scales the deflection with $t$ instead of $t^2$, an unchanged $y$ forgets that the sideways speed sets the time, and $2y$ has the effect backwards.`
          },
          {
            question: `A researcher loads a mixture of DNA fragments of 200, 800 and 3000 base pairs into the wells of an agarose gel and applies a field. After an hour, which band lies closest to the positive electrode, and why?`,
            options: [`3000 bp, as it carries the most charge and feels the largest force`, `3000 bp, as the wells are placed beside the positive electrode`, `200 bp, as it carries the most charge per unit length`, `200 bp, as the gel's mesh holds back the shortest fragment the least`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `DNA is negative and runs from the wells at the negative electrode toward the positive electrode, and the shortest fragment slips through the gel's mesh most easily, so the 200 bp band travels farthest. The 3000 bp fragment does feel the largest force, but the gel holds it back even more. Charge per unit length is the same for every fragment, and the wells sit at the negative electrode, not the positive one.`
          }
        ]
      }
    },
    {
      id: 'esf2-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Field lines.** From $+$ to $-$, never crossing; line count shows charge, line density shows field strength.
- **Dipoles.** $p = qd$; in a uniform field a dipole feels a torque $\\tau = pE\\sin\\theta$ toward alignment and no net force.
- **Conductors.** In equilibrium $E = 0$ inside, excess charge on the outer surface, field perpendicular at the surface.
- **Uniform field.** The same $F = qE$ everywhere between the plates, so $a = qE/m$ is constant.
- **Motion.** From rest, $v = at$ and $d = \\frac{1}{2}at^2$; fired across the field, a parabola.
- **Electrophoresis.** Negative DNA runs to the positive electrode, and shorter fragments travel farther.

**Common traps**

- **Widely spaced lines.** Spread-out lines mean a WEAK field; lines running off to infinity do not end on the other charge.
- **A dipole drifting.** A uniform field only turns a dipole; a net force needs a nonuniform field.
- **A weak field inside metal.** Inside a conductor the field is exactly zero, and outside a sphere $r$ is measured from the centre.
- **Stronger near a plate.** Between parallel plates the field, and so the force, is the same at every point.
- **Equal forces, equal accelerations.** A proton and an electron feel the same size of force, but the electron accelerates about 1836 times more.
- **DNA to the negative electrode.** DNA is negative, so it moves against the field, toward the positive electrode.

**Next up:** *Electrostatics Part 3: Electric Potential & Energy* describes these same fields in terms of energy: potential energy, voltage, and where $E = \\Delta V/d$ comes from.`
    }
  ]
}
