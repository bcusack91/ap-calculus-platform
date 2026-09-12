import type { LessonData } from './registry'

export const electrostaticsMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-electricity-electrostatics-mcat',
  sections: [
    {
      id: 'es1-intro',
      type: 'text' as const,
      content: `# Electrostatics

**Part 1 of 4 — Charge & Field Concepts**

### Electric Charge

- Charge comes in two types: positive and negative. Like charges repel, opposites attract.
- Charge is **quantized**: every charge is a whole-number multiple of the elementary charge $e = 1.6 \\times 10^{-19}\\;\\text{C}$. An electron carries $-e$; a proton carries $+e$.
- Charge is **conserved**: rubbing a balloon on hair transfers electrons, it never creates or destroys charge.

### Conductors vs. Insulators

- **Conductors** (metals, salt water, extracellular fluid): charges move freely. In electrostatic equilibrium the field INSIDE a conductor is zero and excess charge sits on the surface.
- **Insulators** (glass, rubber, the lipid bilayer of a cell membrane): charges stay put. A membrane can therefore hold separated charge on its two faces.

### Coulomb's Law (Qualitative Picture)

$F = k\\frac{q_1 q_2}{r^2}$ with $k = 8.99 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$

- Inverse-square law, exactly like gravity — but electric force can attract OR repel, and it is enormously stronger than gravity for particles.
- Both charges enter symmetrically: by Newton's third law, each charge feels the same magnitude of force.

### Electric Field

$\\vec{E} = \\frac{\\vec{F}}{q}$ — the force per unit positive test charge, in N/C (equivalently V/m).

- Field lines point AWAY from positive charges and TOWARD negative charges.
- Density of field lines indicates field strength.
- A positive charge placed in a field feels a force along $\\vec{E}$; a negative charge feels a force opposite $\\vec{E}$.

### Potential vs. Potential Energy — Keep Them Straight

| Quantity | Symbol | Nature | Belongs to |
|----------|--------|--------|------------|
| Electric field | $E$ | vector, N/C | a point in space |
| Electric potential | $V$ | scalar, volts | a point in space |
| Potential energy | $U = qV$ | scalar, joules | a charge AT that point |

- Positive charges spontaneously "fall" from high $V$ to low $V$.
- Negative charges spontaneously move from low $V$ to high $V$ — both directions LOWER the potential energy $U = qV$.

### Equipotentials and Dipoles

- **Equipotential surfaces** are everywhere perpendicular to field lines; moving a charge along one takes zero work from the electric force.
- An **electric dipole** (equal $+q$ and $-q$ separated by a small distance — think of a polar molecule like water) feels zero NET force in a uniform field but a **torque** that rotates it into alignment with the field.`
    },
    {
      id: 'es1-worked',
      type: 'text' as const,
      content: `### Worked Example — Ratio Reasoning with Coulomb's Law

Two ions attract each other with force $F$. The distance between them is then doubled and one ion's charge is replaced by an ion of three times the charge. What is the new force?

**Step 1 — Write the proportionality.** $F \\propto \\dfrac{q_1 q_2}{r^2}$.

**Step 2 — Apply each change as a factor.**

- Tripling one charge multiplies $F$ by $3$.
- Doubling $r$ multiplies $F$ by $\\dfrac{1}{2^2} = \\dfrac{1}{4}$.

**Step 3 — Combine.**

$F_{new} = F \\times 3 \\times \\frac{1}{4} = \\frac{3}{4}F$

The new force is $0.75F$, still attractive. This factor-by-factor style is how the MCAT expects you to handle Coulomb's law — almost never with a full plug-and-chug.

### Worked Example — Which Way Does the Charge Move?

A chloride ion ($\\text{Cl}^-$, charge $-e$) sits in a region where the potential increases from left ($V = -20\\;\\text{mV}$) to right ($V = +40\\;\\text{mV}$). Which way does the electric force push it?

**Step 1 — Use energy.** $U = qV$. With $q < 0$, the ion's energy is LOWEST where $V$ is HIGHEST.

**Step 2 — Conclusion.** The force pushes the chloride ion to the right, toward $+40\\;\\text{mV}$. Equivalently: $\\vec{E}$ points from high to low potential (right to left here), and a negative charge feels force opposite $\\vec{E}$ — again, to the right.`
    },
    {
      id: 'es1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Charge & Field Concepts** 🎯`,
      exercise: {
        questions: [
          {
            question: `A glass rod is rubbed with silk and becomes positively charged. This happens because:`,
            options: [`The rod gains protons from the silk`, `Positive charge is created by friction`, `The rod loses electrons to the silk`, `The silk loses electrons to the rod`],
            correctAnswer: 2,
            explanation: `Charging by friction only ever transfers electrons — protons are locked in nuclei, and charge is never created. Losing electrons leaves the rod with net positive charge.`
          },
          {
            question: `Inside a metal sphere in electrostatic equilibrium, the electric field is:`,
            options: [`Zero everywhere inside`, `Equal to $kQ/r^2$`, `Strongest at the center`, `Directed radially outward`],
            correctAnswer: 0,
            explanation: `Free charges in a conductor rearrange on the surface until they cancel any interior field. If the interior field were nonzero, charges would still be moving — not equilibrium.`
          },
          {
            question: `Which statement correctly contrasts electric field and electric potential?`,
            options: [`Both are vectors`, `Potential is a vector; field is a scalar`, `Both are scalars`, `Field is a vector; potential is a scalar`],
            correctAnswer: 3,
            explanation: `$\\vec{E}$ has magnitude and direction (N/C); $V$ is a scalar (volts). This is why potentials from several charges simply add algebraically, while fields must be added as vectors.`
          },
          {
            question: `Left on its own in an electric field, a negative charge will spontaneously move:`,
            options: [`Toward lower potential`, `Toward higher potential`, `Along an equipotential`, `Opposite to its velocity`],
            correctAnswer: 1,
            explanation: `Spontaneous motion lowers $U = qV$. With $q < 0$, $U$ decreases as $V$ increases, so negative charges "fall uphill" in potential. (Positive charges move toward lower $V$.)`
          },
          {
            question: `A water molecule (a permanent dipole) is placed in a uniform electric field. It experiences:`,
            options: [`A net force but no torque`, `Both a net force and a torque in all orientations`, `A torque but no net force`, `Neither force nor torque`],
            correctAnswer: 2,
            explanation: `In a UNIFORM field the $+$ and $-$ ends feel equal and opposite forces — zero net force — but unless the dipole is already aligned, those forces form a couple that rotates it into alignment with $\\vec{E}$.`
          }
        ]
      }
    },
    {
      id: 'es1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Charge is quantized (multiples of $e = 1.6 \\times 10^{-19}\\;\\text{C}$) and conserved; friction moves electrons only
- Conductors: zero interior field, charge on surface; insulators (like membranes) hold charge in place
- Coulomb: $F \\propto q_1 q_2/r^2$ — solve MCAT problems with factor-by-factor ratio reasoning
- Field $\\vec{E}$ is a vector (away from $+$, toward $-$); potential $V$ is a scalar; energy $U = qV$
- Positive charges fall toward low $V$; negative charges toward high $V$ — both lower $U$
- Uniform field + dipole = torque without net force`
    }
  ]
};
