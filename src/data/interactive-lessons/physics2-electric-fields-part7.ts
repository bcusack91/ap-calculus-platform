export const physics2ElectricFieldsPart7Data = {
  topicSlug: 'electric-fields-potential',
  sections: [
    {
      id: 'ef7-intro',
      type: 'text' as const,
      content: `
# 🏆 Capacitors, Energy Storage & Synthesis

**Part 7 of 7 — The Capstone**

Capacitors are the ultimate application of everything you've learned: fields, potential, energy, and conductors — all in one device.
      `
    },
    {
      id: 'ef7-capacitance',
      type: 'text' as const,
      content: `
## What Is a Capacitor?

A **capacitor** is a device that stores charge (and therefore energy) in an electric field.

The simplest capacitor: two parallel conducting plates separated by a gap.

### Capacitance

$$C = \\frac{Q}{V}$$

Where:
- $C$ = capacitance (in **farads**, F)
- $Q$ = charge stored on one plate (equal and opposite on the other)
- $V$ = potential difference between the plates

### Parallel-Plate Capacitance

$$C = \\frac{\\epsilon_0 A}{d}$$

Where:
- $\\epsilon_0 = 8.85 \\times 10^{-12}\\ \\text{F/m}$ (permittivity of free space)
- $A$ = area of each plate
- $d$ = separation between plates

### Scaling

| Change | Effect on C |
|:---:|:---:|
| Double plate area | $C$ doubles |
| Double separation | $C$ halves |
| Insert dielectric ($\\kappa$) | $C$ multiplied by $\\kappa$ |
      `
    },
    {
      id: 'ef7-energy-stored',
      type: 'text' as const,
      content: `
## Energy Stored in a Capacitor

The energy stored in a charged capacitor:

$$U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C} = \\frac{1}{2}QV$$

These three forms are all equivalent (use whichever is most convenient).

### Where Is the Energy?

The energy is stored **in the electric field** between the plates, not on the plates themselves.

Energy density (energy per unit volume):

$$u = \\frac{1}{2}\\epsilon_0 E^2$$

This is a profound result: **electric fields carry energy**. This concept extends far beyond capacitors — it's the basis for electromagnetic waves carrying energy from the Sun to Earth.
      `
    },
    {
      id: 'ef7-dielectrics',
      type: 'text' as const,
      content: `
## Dielectrics

A **dielectric** is an insulating material placed between capacitor plates.

### Effects of a Dielectric (constant $\\kappa > 1$)

| Quantity | Battery connected | Battery disconnected |
|:---:|:---:|:---:|
| **Capacitance** | $C' = \\kappa C$ (increases) | $C' = \\kappa C$ (increases) |
| **Charge** | $Q' = \\kappa Q$ (increases) | $Q' = Q$ (unchanged — isolated) |
| **Voltage** | $V' = V$ (fixed by battery) | $V' = V/\\kappa$ (decreases) |
| **Field** | $E' = E$ (V/d unchanged) | $E' = E/\\kappa$ (decreases) |
| **Energy** | $U' = \\kappa U$ (increases) | $U' = U/\\kappa$ (decreases) |

### Why? (Physical Mechanism)

The dielectric **polarizes** — its molecules align with the external field, creating an internal field that partially cancels the external one. This reduces the effective field, which reduces the voltage across the gap (for a fixed charge).
      `
    },
    {
      id: 'ef7-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Capacitor Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'A parallel-plate capacitor has $C = 10\\ \\mu\\text{F}$ and is charged to $V = 100$ V. The energy stored is:',
            options: [
              '0.05 J',
              '0.1 J',
              '1 J',
              '500 J'
            ],
            correctAnswer: 0,
            explanation: '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10 \\times 10^{-6})(100)^2 = \\frac{1}{2}(10^{-5})(10^4) = 0.05$ J.'
          },
          {
            question: 'A capacitor is charged and then disconnected from the battery. A dielectric ($\\kappa = 3$) is inserted. What happens to the voltage?',
            options: [
              'Triples',
              'Stays the same',
              'Drops to 1/3',
              'Drops to zero'
            ],
            correctAnswer: 2,
            explanation: 'Battery disconnected → $Q$ is fixed. $C$ triples ($\\kappa = 3$). Since $V = Q/C$, voltage drops to $V/3$.'
          },
          {
            question: 'Doubling the plate separation of a parallel-plate capacitor (battery still connected) causes the stored energy to:',
            options: [
              'Double',
              'Halve',
              'Quadruple',
              'Stay the same'
            ],
            correctAnswer: 1,
            explanation: 'Battery connected → $V$ fixed. Doubling $d$ halves $C$ (since $C = \\epsilon_0 A/d$). $U = \\frac{1}{2}CV^2$ → energy halves.'
          }
        ]
      }
    },
    {
      id: 'ef7-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Capacitor Calculation Drill**

A parallel-plate capacitor: plate area $A = 0.01\\ \\text{m}^2$, separation $d = 0.001$ m, no dielectric. Use $\\epsilon_0 = 8.85 \\times 10^{-12}$ F/m.

1) Capacitance (in pF, where 1 pF = $10^{-12}$ F)

2) If charged to $V = 200$ V, charge stored $Q$ (in nC, where 1 nC = $10^{-9}$ C)

3) Energy stored (in μJ, where 1 μJ = $10^{-6}$ J)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['88.5', '17.7', '1.77'],
        hint1: '$C = \epsilon_0 A/d = (8.85 \\times 10^{-12})(0.01)/(0.001)$.',
        hint2: '$Q = CV = (88.5 \\times 10^{-12})(200)$. Convert to nC.',
        hint3: '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(88.5 \\times 10^{-12})(200)^2$. Convert to μJ.',
        explanation: '$C = 8.85 \\times 10^{-11}$ F = 88.5 pF. $Q = 88.5 \\times 10^{-12} \\times 200 = 17.7 \\times 10^{-9}$ C = 17.7 nC. $U = 0.5 \\times 88.5 \\times 10^{-12} \\times 40000 = 1.77 \\times 10^{-6}$ J = 1.77 μJ.'
      }
    },
    {
      id: 'ef7-final-synthesis',
      type: 'multiple-choice' as const,
      content: `
**Final Synthesis Quiz** — All of Electric Fields & Potential
      `,
      exercise: {
        questions: [
          {
            question: 'A positive charge is released from rest in a region where $\\vec{E}$ points to the right. The charge will:',
            options: [
              'Move left and gain KE',
              'Move right and gain KE',
              'Move right and lose KE',
              'Stay in place'
            ],
            correctAnswer: 1,
            explanation: '$\\vec{F} = q\\vec{E}$ → positive charge accelerates in the direction of $\\vec{E}$ (right). It moves from high V to low V, converting PE to KE.'
          },
          {
            question: 'At point P, $V = 0$ and $E = 5000$ N/C. Which is true?',
            options: [
              'No charge can exist at P',
              'A charge at P feels no force',
              'A charge at P feels a force but has zero potential energy (relative to infinity)',
              'This situation is impossible'
            ],
            correctAnswer: 2,
            explanation: '$V = 0$ means a test charge has zero PE at P (relative to infinity). But $E \\neq 0$ means there\'s still a force. The charge will accelerate, gaining KE (which comes from the PE being negative at nearby points).'
          },
          {
            question: 'Rank the electric field strength at these three points: (A) between plates with $\\Delta V = 100$ V, $d = 1$ cm; (B) 1 m from a $+1\\ \\mu\\text{C}$ charge; (C) at the surface of a conductor with $V = 1000$ V.',
            options: [
              'A > B > C',
              'A > B, but C cannot be determined without more info',
              'B > A > C',
              'All equal'
            ],
            correctAnswer: 1,
            explanation: 'A: $E = 100/0.01 = 10{,}000$ V/m. B: $E = kq/r^2 = 9 \\times 10^9 \\times 10^{-6}/1 = 9000$ V/m. C: We only know V at the surface, not how V changes with distance, so $E = -dV/dr$ is unknown. A > B is clear; C requires more info.'
          },
          {
            question: 'Which combination best summarizes the differences between $E$ and $V$?',
            options: [
              '$E$ = scalar, $V$ = vector; $E$ is easier to compute',
              '$E$ = vector, $V$ = scalar; $V$ is easier to compute for multiple charges',
              '$E$ and $V$ are both vectors that point in the same direction',
              '$E$ and $V$ are both scalars that decrease with distance'
            ],
            correctAnswer: 1,
            explanation: '$E$ is a vector (direction matters, components needed). $V$ is a scalar (just add numbers). For multi-charge problems, computing V first and then finding E from V is often the easiest approach.'
          },
          {
            question: 'An electron enters a uniform electric field with velocity perpendicular to the field. Its path will be:',
            options: [
              'A straight line',
              'A circle',
              'A parabola (like projectile motion)',
              'A spiral'
            ],
            correctAnswer: 2,
            explanation: 'Constant force perpendicular to initial velocity → constant acceleration in one direction, constant velocity in the other → parabolic path. This is exactly like a ball thrown horizontally in a gravitational field.'
          }
        ]
      }
    },
    {
      id: 'ef7-ap-tips',
      type: 'text' as const,
      content: `
## 🎯 AP Exam Tips — Electric Fields & Potential

### Top 5 Exam Mistakes to Avoid

1. **Confusing $V$ and $E$** — V is scalar (just add), E is vector (use components)
2. **Forgetting direction** — E points high V → low V; positive charges accelerate in that direction; electrons go the other way
3. **Ignoring signs in PE** — $U = kq_1 q_2/r$ keeps the signs; $F = k|q_1 q_2|/r^2$ uses absolute values
4. **Dielectric scenarios** — Always ask: "Is the battery connected?" This determines what stays constant ($V$ or $Q$)
5. **Units** — V/m = N/C (both valid for E). J/C = V (voltage). $C^{2}/(N\\cdot m^{2})$ = F (capacitance).

### Free-Response Strategy

1. **Draw a diagram** — label all charges, distances, and the point of interest
2. **State your approach** — "I'll use conservation of energy" or "I'll find the net field using superposition"
3. **Show the equation** before substituting numbers
4. **Check the sign and direction** of your answer
5. **Verify reasonableness** — lab-scale E ≈ $10^{2}$–$10^{6}$ V/m, V ≈ 1–$10^{4}$ V

### You're Ready!

You've mastered electric fields, potential, energy, equipotentials, and capacitors. These concepts are the foundation for everything else in AP Physics 2: circuits, magnetism, and electromagnetic waves.
      `
    }
  ]
}
