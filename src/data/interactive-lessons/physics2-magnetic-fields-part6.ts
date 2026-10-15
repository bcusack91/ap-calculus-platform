export const physics2MagneticFieldsPart6Data = {
  topicSlug: 'magnetic-fields-forces',
  sections: [
    {
      id: 'mf6-intro',
      type: 'text' as const,
      content: `
# 🧭 Magnetic Materials and the Hall Effect

**Part 6 of 7 — Magnetic Materials, Dipoles, and the Hall Effect**

Why does a refrigerator magnet stick to steel but not to aluminum? Why does a compass swing to line up with a field? And how can a magnetic field reveal whether the charges moving in a wire are positive or negative? This part connects magnetism to what is happening inside matter.
      `
    },
    {
      id: 'mf6-dipoles',
      type: 'text' as const,
      content: `
## Magnetic Dipoles

A **magnetic dipole** is anything with a north pole and a south pole: a bar magnet, a compass needle, a current loop (Part 5), or a single atom.

### Where Dipoles Come From

Magnetic dipoles result from the **circular or rotational motion of electric charges**. In magnetic materials, that motion is the motion of **electrons** — their orbits and their spin. Each atom can act as a tiny magnet.

### Rules for Dipoles

- **No monopoles.** A north pole is never found without a south pole. Break a bar magnet in half and you get **two smaller magnets**, each with its own north and south pole.
- **Like poles repel; opposite poles attract.**
- **The field weakens with distance** from the dipole.
- **Dipoles align with fields.** A compass needle placed in a magnetic field tends to rotate until it points along the field, with its north end pointing in the direction of $\\vec{B}$. That is exactly how a compass maps field lines.

### Earth as a Dipole

Earth's field can be approximated as the field of a single huge dipole. A compass needle aligns with Earth's field, and since its north end points toward geographic north, the pole of Earth's "magnet" near geographic north must be a **magnetic south pole**.
      `
    },
    {
      id: 'mf6-materials',
      type: 'text' as const,
      content: `
## How Materials Respond to a Magnetic Field

A material's **composition** determines how its atomic dipoles behave in an external field.

### Ferromagnetic Materials — iron, nickel, cobalt

The atomic dipoles line up with their neighbors in regions called **magnetic domains**. In an unmagnetized piece of iron, the domains point in random directions and their fields cancel. An external field makes the domains aligned with it grow and others rotate, so the iron becomes strongly magnetized.

- **Induced magnetism:** an unmagnetized iron nail is attracted to **either** pole of a magnet, because the magnet's field aligns the nail's domains so that the nail's nearby end becomes the opposite pole.
- **Permanent magnetism:** a strong enough field can leave the domains aligned after the field is removed, producing a permanent magnet.

### Paramagnetic Materials — aluminum, titanium, magnesium

The atomic dipoles align **weakly** with an external field, producing a weak attraction. When the field is removed, thermal motion scrambles the dipoles again, so the material **does not stay magnetized**.

### Diamagnetism — every material

**All** materials are diamagnetic: their electrons respond to an external field by producing a usually weak alignment **opposite** to the field, so the material is weakly repelled. In iron or aluminum, the stronger ferromagnetic or paramagnetic effect hides it; in water, wood, or copper it is the main effect.

| Type | Alignment with external field | Stays magnetized? | Examples |
|------|-------------------------------|-------------------|----------|
| Ferromagnetic | Strong, same direction | Can, yes | Iron, nickel, cobalt |
| Paramagnetic | Weak, same direction | No | Aluminum, titanium, magnesium |
| Diamagnetic | Weak, opposite direction | No | All materials (dominant in water, copper) |
      `
    },
    {
      id: 'mf6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Magnetic Materials Concept Quiz** 🧲
      `,
      exercise: {
        questions: [
          {
            question: 'A bar magnet is snapped in half at its middle. Which describes the two pieces?',
            options: [
              'Each piece has both a north and a south pole',
              'One piece is all north, the other all south',
              'Neither piece is magnetic any longer',
              'Both pieces keep only the pole at their outer end'
            ],
            correctAnswer: 0,
            explanation: 'Magnetism comes from aligned atomic dipoles, and each piece still contains aligned dipoles, so each piece is a complete dipole with two poles. Isolated north or south poles (monopoles) have never been observed.'
          },
          {
            question: 'An unmagnetized iron nail is attracted to the north pole of a magnet and also to its south pole. Why?',
            options: [
              'The nail carries a net charge that both poles attract',
              'The magnet\'s field aligns the domains in the nail',
              'The nail is diamagnetic, so its dipoles oppose the field',
              'Iron is a permanent magnet whose poles keep flipping'
            ],
            correctAnswer: 1,
            explanation: 'Iron is ferromagnetic: either pole\'s field aligns the nail\'s domains so the near end of the nail becomes the opposite pole, and opposite poles attract. A diamagnetic response would make the nail repelled, and a net charge does not interact with a static magnet.'
          },
          {
            question: 'An aluminum rod is placed in a strong magnetic field and then removed. What happens to the alignment of its atomic dipoles?',
            options: [
              'It stays aligned, leaving a permanent magnet',
              'It reverses to point opposite the old field',
              'It returns to random orientations',
              'It stays aligned along the rod\'s length only'
            ],
            correctAnswer: 2,
            explanation: 'Aluminum is paramagnetic: its dipoles align only weakly while the field is present and become randomly oriented again once it is removed. Staying aligned after the field is gone is ferromagnetic behavior.'
          }
        ]
      }
    },
    {
      id: 'mf6-permeability',
      type: 'text' as const,
      content: `
## Magnetic Permeability

**Magnetic permeability** measures how much a material becomes magnetized in response to an external magnetic field.

- **Free space** has a constant permeability, the **vacuum permeability** $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A. It is the constant that appears in equations such as $B = \\dfrac{\\mu_0 I}{2\\pi r}$.
- **Matter** has a permeability different from $\\mu_0$, set by the material's composition and arrangement.
- A material's permeability is **not a constant**: it changes with temperature, with orientation, and with the strength of the external field.

### Comparing Materials

- **Ferromagnetic** materials have permeabilities far greater than $\\mu_0$. This is why wrapping a current-carrying coil around an **iron core** makes a much stronger electromagnet: the aligned domains add their own field to the field of the current.
- **Paramagnetic** materials have permeabilities slightly greater than $\\mu_0$.
- **Diamagnetic** materials have permeabilities slightly less than $\\mu_0$.

Heating a ferromagnet scrambles its domains and lowers its permeability — a hot enough magnet loses its magnetism.
      `
    },
    {
      id: 'mf6-hall-effect',
      type: 'text' as const,
      content: `
## The Hall Effect

Send a current through a flat conducting strip that sits in a magnetic field perpendicular to the strip. The moving charges feel a sideways magnetic force and pile up along one edge, leaving the opposite edge with the opposite charge. The result is a **potential difference across the width of the strip** — the **Hall voltage**.

### Reaching Balance

The separated charge creates an electric field $E$ across the strip. Charges keep drifting sideways until the electric force balances the magnetic force (the two fields exert independent forces):

$$qE = qvB \\quad \\Rightarrow \\quad E = vB$$

For a strip of width $w$, the uniform field gives a Hall voltage $\\Delta V = Ew = vBw$.

### Worked Example

A semiconductor strip 1.0 cm wide lies in the page and carries current to the right. A 0.40 T field points into the page, and the charge carriers drift at 5.0 m/s.

**Size:** $E = vB = (5.0)(0.40) = 2.0$ V/m, so $\\Delta V = (2.0)(0.010) = 0.020$ V = 20 mV.

**Direction:** If the carriers are **positive**, they move right; right × into the page gives a force **up** the page. Positive charge collects on the top edge, so the **top edge is at the higher potential**.

If the carriers are **electrons**, they move **left**. For a negative charge moving left, the force is also **up** the page, so electrons collect on the top edge and the **top edge is at the lower potential**.

### Why It Matters

- The **sign** of the Hall voltage reveals whether the moving charges are positive or negative — evidence that the current in most metals is carried by negative charges.
- The Hall voltage grows with $B$, so **Hall sensors** measure magnetic fields and detect nearby magnets (for example, the sensor that notices a laptop lid closing).
      `
    },
    {
      id: 'mf6-hall-drill',
      type: 'input-boxes' as const,
      content: `
**Hall Effect Drill** 🔢

A conducting strip 2.0 cm wide carries current in a 0.50 T magnetic field perpendicular to the strip. The charge carriers drift at 3.0 m/s.

1) Electric field across the strip once the sideways forces balance (in V/m)

2) Hall voltage across the strip (in V)

3) Hall voltage if the magnetic field is doubled to 1.0 T, with the same drift speed (in V)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.5', '0.030', '0.060'],
        hint1: 'At balance $qE = qvB$, so $E = vB$.',
        hint2: '$\\Delta V = Ew$ with $w = 0.020$ m.',
        hint3: '$\\Delta V = vBw$ is proportional to $B$.',
        explanation: '(1) $E = vB = (3.0)(0.50) = 1.5$ V/m. (2) $\\Delta V = Ew = (1.5)(0.020) = 0.030$ V. (3) Doubling $B$ doubles the Hall voltage to 0.060 V.'
      }
    },
    {
      id: 'mf6-exit-quiz',
      type: 'dropdown-select' as const,
      content: `
**Exit Check — Materials and the Hall Effect** ✅
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ferromagnetic materials include:',
            options: ['aluminum and titanium', 'iron, nickel, and cobalt', 'copper and gold', 'glass and wood']
          },
          {
            label: 'The magnetic property that every material has is:',
            options: ['ferromagnetism', 'paramagnetism', 'diamagnetism', 'permanent magnetism']
          },
          {
            label: 'A compass placed in a magnetic field tends to:',
            options: ['align with the field', 'point opposite the field', 'point perpendicular to the field', 'stay in any orientation']
          },
          {
            label: 'Compared with $\\mu_0$, the permeability of iron is:',
            options: ['far greater', 'slightly less', 'exactly equal', 'zero']
          },
          {
            label: 'The Hall voltage forms across a strip in the direction:',
            options: ['along the current', 'perpendicular to both I and B', 'parallel to B', 'opposite the current']
          }
        ],
        correctAnswers: ['iron, nickel, and cobalt', 'diamagnetism', 'align with the field', 'far greater', 'perpendicular to both I and B'],
        hint1: 'Ferromagnetic metals are the ones a refrigerator magnet sticks to.',
        hint2: 'All materials weakly oppose an applied field; in many it is hidden by a stronger effect.',
        hint3: 'The magnetic force on the carriers is perpendicular to both their velocity and $\\vec{B}$.',
        explanation: 'Iron, nickel, and cobalt are ferromagnetic, with permeabilities far greater than $\\mu_0$. Diamagnetism is present in every material. A compass, like any dipole, tends to align with the field. The Hall voltage appears across the strip, perpendicular to both the current and the field, because that is the direction of the magnetic force on the carriers.'
      }
    }
  ]
}
