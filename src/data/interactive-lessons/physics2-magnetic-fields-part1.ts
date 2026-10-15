export const physics2MagneticFieldsPart1Data = {
  topicSlug: 'magnetic-fields-forces',
  sections: [
    {
      id: 'mf1-intro',
      type: 'text' as const,
      content: `
# 🧲 Magnetic Fields — Sources and Properties

**Part 1 of 7 — Where Do Magnetic Fields Come From?**

Magnetism has been known for millennia — ancient Greeks observed lodestone attracting iron. Today we understand that **all magnetic fields originate from moving electric charges**. Whether it's a bar magnet, an electromagnet, or Earth itself, the underlying source is always charges in motion.
      `
    },
    {
      id: 'mf1-sources',
      type: 'text' as const,
      content: `
## Sources of Magnetic Fields

### 1. Permanent Magnets

Bar magnets and horseshoe magnets produce fields due to the **aligned spin of electrons** within their atoms. In ferromagnetic materials (iron, nickel, cobalt), electron spins in microscopic domains align to create a net magnetic field.

### 2. Moving Charges

A single charge $q$ moving with velocity $\\vec{v}$ creates a magnetic field around it:

- The field at a point depends on the charge's **speed** and on the **distance** to that point — it weakens farther away
- The field direction is **perpendicular to both** the velocity and the line from the charge to the point (found with a right-hand rule)
- The field is **strongest** at points where that line is perpendicular to $\\vec{v}$, and zero straight ahead of or behind the charge

A charge at rest produces no magnetic field at all. The constant that sets the size of magnetic fields in empty space is $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A, the **permeability of free space**.

### 3. Electric Currents

A current-carrying wire produces a magnetic field that circles around the wire. This is the most practical source of controllable magnetic fields — the basis for electromagnets, motors, and MRI machines.

### Key Insight

**Electricity and magnetism are deeply connected.** Moving charges create magnetic fields, and (as we'll see later) changing magnetic fields create electric fields. This unification is one of the great triumphs of physics.
      `
    },
    {
      id: 'mf1-field-lines',
      type: 'text' as const,
      content: `
## Magnetic Field Lines

Magnetic field lines visualize the $\\vec{B}$ field, similar to electric field lines for $\\vec{E}$.

### Rules for Magnetic Field Lines

1. **Outside a magnet**: Lines point from **North (N) to South (S)**
2. **Inside a magnet**: Lines point from **South to North** (completing closed loops)
3. **Lines never cross** — the field has a unique direction at every point
4. **Line density** indicates field strength — closer lines = stronger $\\vec{B}$
5. **Magnetic field lines always form closed loops** — there are no magnetic monopoles!

### Bar Magnet Field Pattern

The field of a bar magnet looks similar to the electric field of a dipole:
- Lines emerge from the **North pole**
- Arc through space
- Enter the **South pole**
- Continue through the interior back to North

### Critical Difference from Electric Fields

Electric field lines begin on positive charges and end on negative charges. Magnetic field lines **have no beginning or end** — they always close on themselves. This reflects the fact that **magnetic monopoles do not exist** (as far as we know).
      `
    },
    {
      id: 'mf1-earths-field',
      type: 'text' as const,
      content: `
## Earth's Magnetic Field

Earth's field can be approximated as the field of a **magnetic dipole** — a giant bar magnet — but with an important twist:

### Geographic vs. Magnetic Poles

- Earth's **geographic North Pole** is near Earth's **magnetic South pole**
- A compass needle's north end points toward geographic north because it's attracted to the magnetic south pole located there
- The magnetic axis is tilted slightly from the rotation axis, so "magnetic north" and "true north" differ a little

### Field Strength

Earth's magnetic field strength at the surface:

$$B_{\\text{Earth}} \\approx 25 - 65 \\text{ μT}$$

This is quite weak compared to lab magnets (which can be 1 T or more), but it's strong enough to orient compass needles and protect us from charged particles in the solar wind.

### Source

Earth's magnetic field comes from **moving charges in the molten iron** of the outer core — consistent with the rule that every magnetic field traces back to charges in motion.
      `
    },
    {
      id: 'mf1-units',
      type: 'text' as const,
      content: `
## Units of Magnetic Field

The SI unit of magnetic field $\\vec{B}$ is the **Tesla (T)**:

$$1 \\text{ T} = 1 \\frac{\\text{kg}}{\\text{A}\\cdot\\text{s}^2} = 1 \\frac{\\text{N}}{\\text{A}\\cdot\\text{m}}$$

The form $\\text{N}/(\\text{A}\\cdot\\text{m})$ is the useful one: it says a 1 T field pushes with 1 N on each meter of wire carrying 1 A at right angles to the field (Part 4).

### Typical Magnetic Field Strengths

| Source | Strength |
|--------|----------|
| MRI machine | 1.5 – 3 T |
| Strong lab magnet | 1 – 10 T |
| Refrigerator magnet | ~5 mT |
| Earth's surface | ~50 μT |
| Interstellar space | ~0.1 nT |

### The Permeability Constant

$$\\mu_0 = 4\\pi \\times 10^{-7} \\text{ T}\\cdot\\text{m/A}$$

This constant appears in all formulas for magnetic fields produced by currents, just as $\\varepsilon_0$ appears in electric field formulas.
      `
    },
    {
      id: 'mf1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Magnetic Fields Concept Quiz** 🧲
      `,
      exercise: {
        questions: [
          {
            question: 'Magnetic field lines outside a bar magnet point from:',
            options: [
              'South to North',
              'North to South',
              'They point radially outward',
              'They form circles around the magnet'
            ],
            correctAnswer: 1,
            explanation: 'Outside a magnet, B field lines point from North (N) to South (S). Inside the magnet, they continue from S to N, forming closed loops.'
          },
          {
            question: 'All magnetic fields are ultimately produced by:',
            options: [
              'Magnetic monopoles',
              'Charges at rest',
              'Moving electric charges',
              'Gravitational forces'
            ],
            correctAnswer: 2,
            explanation: 'All known magnetic fields come from moving charges — whether electron spins in permanent magnets or currents in wires. No magnetic monopoles have ever been found.'
          },
          {
            question: 'A compass needle\'s north pole points toward geographic north because:',
            options: [
              'Earth\'s magnetic north pole lies at geographic north',
              'Geographic north is near a magnetic south pole',
              'The compass is repelled by the geographic south pole',
              'Earth\'s field points from geographic north to south'
            ],
            correctAnswer: 1,
            explanation: 'The north end of a compass is attracted to the magnetic south pole, which is located near Earth\'s geographic North Pole. Opposite magnetic poles attract.'
          },
          {
            question: 'A compass is carried steadily farther away from a bar magnet. How does the magnet\'s field at the compass change?',
            options: [
              'It weakens as the distance grows',
              'It stays the same at every distance',
              'It grows stronger as the distance grows',
              'It stays the same until the compass passes a pole'
            ],
            correctAnswer: 0,
            explanation: 'The field of a magnetic dipole decreases with increasing distance, which is why field lines spread apart far from the magnet. A field that never weakens or that grows with distance would contradict the thinning of the field lines.'
          }
        ]
      }
    },
    {
      id: 'mf1-exit-quiz',
      type: 'dropdown-select' as const,
      content: `
**Exit Check — Magnetic Field Basics** ✅
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Magnetic field lines form:',
            options: ['open lines', 'closed loops', 'spirals that diverge']
          },
          {
            label: 'The SI unit of magnetic field is the:',
            options: ['Coulomb', 'Weber', 'Tesla', 'Volt']
          },
          {
            label: 'Inside a bar magnet, field lines point from:',
            options: ['north to south', 'south to north', 'the middle outward', 'nowhere (B = 0)']
          },
          {
            label: 'Earth\'s surface field is approximately:',
            options: ['50 T', '50 mT', '50 μT', '50 nT']
          }
        ],
        correctAnswers: ['closed loops', 'Tesla', 'south to north', '50 μT'],
        hint1: 'Magnetic monopoles have never been found — lines must close.',
        hint2: 'The SI unit is named after Nikola Tesla.',
        hint3: 'Outside, lines leave the north pole; to close the loop they must run the other way inside. Earth\'s field is very weak.',
        explanation: 'Magnetic field lines always form closed loops (no monopoles), so inside a bar magnet they run from south to north. Field strength is measured in tesla, and Earth\'s surface field is roughly 50 μT.'
      }
    }
  ]
}
