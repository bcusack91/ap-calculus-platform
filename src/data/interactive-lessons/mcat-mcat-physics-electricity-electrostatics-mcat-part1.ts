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

**Problem.** Two ions attract each other with force $F$. The distance between them is then doubled, and one ion is replaced by an ion of three times the charge (same sign).

- **(a)** By what factor does tripling one charge change the force?
- **(b)** By what factor does doubling the distance change the force?
- **(c)** What is the new force, and is it still attractive?

**(a) The charge factor.** $F \\propto \\dfrac{q_1 q_2}{r^2}$, and one charge enters to the first power, so tripling it multiplies $F$ by $3$.

**(b) The distance factor.** $r$ enters squared in the denominator, so doubling it multiplies $F$ by $\\dfrac{1}{2^2} = \\dfrac{1}{4}$.

**(c) Combine.** With the factors from (a) and (b): $F_{new} = F \\times 3 \\times \\frac{1}{4} = \\frac{3}{4}F$. The new force is $0.75F$, still attractive. This factor-by-factor style is how the MCAT expects you to handle Coulomb's law, almost never with a full plug-and-chug.

### Worked Example — Which Way Does the Charge Move?

**Problem.** A chloride ion ($\\text{Cl}^-$, charge $-e$) sits in a region where the potential increases from left ($V = -20\\;\\text{mV}$) to right ($V = +40\\;\\text{mV}$).

- **(a)** Where is the ion's potential energy lowest?
- **(b)** Which way does the electric force push it?
- **(c)** Which way does $\\vec{E}$ point, and does the field picture agree?

**(a) Use energy.** $U = qV$. With $q < 0$, the ion's energy is LOWEST where $V$ is HIGHEST: at the right, $+40\\;\\text{mV}$.

**(b) The push.** A charge is pushed toward lower potential energy, so with the low-energy side from (a) on the right, the force pushes the chloride ion to the right, toward $+40\\;\\text{mV}$.

**(c) Field check.** $\\vec{E}$ points from high to low potential, here right to left. A negative charge feels a force opposite $\\vec{E}$: again to the right, agreeing with (b).`
    },
    {
      id: 'es1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Charge & Field Concepts** 🎯`,
      exercise: {
        questions: [
          {
            question: `A glass rod is rubbed with silk and becomes positively charged. This happens because:`,
            options: [`The rod gains protons rubbed off the silk`, `Friction creates new positive charge on it`, `The rod loses electrons to the silk`, `Electrons flow from the silk onto the rod`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Charging by friction only ever transfers electrons: protons are locked in nuclei, and charge is never created. Losing electrons leaves the rod with net positive charge. Electrons flowing ONTO the rod would make it negative.`
          },
          {
            question: `Inside a metal sphere in electrostatic equilibrium, the electric field is:`,
            options: [`Zero everywhere inside the metal`, `Equal to $kQ/r^2$, as for a point charge`, `Strongest at the center of the sphere`, `Directed radially outward from the center`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Free charges in a conductor rearrange on the surface until they cancel any interior field. If the interior field were nonzero, charges would still be moving, which is not equilibrium. The point-charge field $kQ/r^2$ applies only OUTSIDE the sphere.`
          },
          {
            question: `Which statement correctly contrasts electric field and electric potential?`,
            options: [`Both are vectors`, `Potential is a vector; field is a scalar`, `Both are scalars`, `Field is a vector; potential is a scalar`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$\\vec{E}$ has magnitude and direction (N/C); $V$ is a scalar (volts). This is why potentials from several charges simply add algebraically, while fields must be added as vectors.`
          },
          {
            question: `Left on its own in an electric field, a negative charge will spontaneously move:`,
            options: [`Toward lower potential, lowering its energy`, `Toward higher potential, lowering its energy`, `Toward higher potential, raising its energy`, `Toward lower potential, raising its energy`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Spontaneous motion always lowers the potential energy $U = qV$. With $q < 0$, $U$ decreases as $V$ increases, so negative charges "fall uphill" in potential. Moving toward lower potential is the rule for positive charges, and no charge released on its own gains potential energy.`
          },
          {
            question: `A water molecule (a permanent dipole) is placed in a uniform electric field, not aligned with it. It experiences:`,
            options: [`A net force, but no torque`, `Both a net force and a torque`, `A torque, but no net force`, `Neither a net force nor a torque`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `In a UNIFORM field the $+$ and $-$ ends feel equal and opposite forces, so the net force is zero; that rules out both answers with a net force. Because the dipole is not aligned, those equal and opposite forces act along different lines and form a couple, a torque that rotates it into alignment with $\\vec{E}$, so "neither" is wrong too. A net force appears only in a NONuniform field.`
          }
        ]
      }
    },
    {
      id: 'es1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Quantized and conserved.** Every charge is a multiple of $e = 1.6 \\times 10^{-19}\\;\\text{C}$, and rubbing only moves electrons.
- **Conductors vs. insulators.** A conductor in equilibrium has zero interior field; insulators like membranes hold charge in place.
- **Coulomb by ratios.** $F \\propto q_1 q_2/r^2$: apply each change as a factor instead of plugging in numbers.
- **Field, potential, energy.** $\\vec{E}$ is a vector from $+$ toward $-$, $V$ is a scalar, and $U = qV$ belongs to the charge.

**Common traps**

- **Protons moving on rubbing.** Friction transfers electrons only; protons stay locked in nuclei.
- **Negatives falling to low $V$.** Negative charges move toward HIGHER potential, yet both signs lower $U = qV$.
- **Adding fields as numbers.** Fields add as vectors and can cancel; only potentials add as signed numbers.
- **Net force on a dipole.** In a uniform field a dipole feels zero net force, only a torque toward alignment.`
    }
  ]
};
