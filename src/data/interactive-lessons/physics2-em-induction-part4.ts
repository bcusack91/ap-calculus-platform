export const physics2EmInductionPart4Data = {
  topicSlug: 'electromagnetic-induction',
  sections: [
    {
      id: 'ei4-intro',
      type: 'text' as const,
      content: `
# 🚂 Motional EMF

**Part 4 of 7 — Moving Conductors in Magnetic Fields**

When a conductor moves through a magnetic field, the free charges inside experience a magnetic force. This force drives a current — producing what we call **motional EMF**. It's Faraday's Law in action, derived from the Lorentz force.
      `
    },
    {
      id: 'ei4-sliding-rod',
      type: 'text' as const,
      content: `
## The Sliding Rod Setup

Imagine a conducting rod of length $L$ sliding with velocity $v$ along two parallel rails connected by a resistor $R$. A uniform magnetic field $\\vec{B}$ points **into the page**.

### Deriving the EMF

As the rod moves to the right with speed $v$, the area of the circuit increases:

$$\\frac{dA}{dt} = L \\cdot v$$

The flux is increasing:

$$\\frac{d\\Phi}{dt} = B \\cdot \\frac{dA}{dt} = BLv$$

By Faraday's Law:

$$|\\varepsilon| = BLv$$

This is the **motional EMF** for a rod moving perpendicular to both its own length and the magnetic field.

### The Induced Current

$$I = \\frac{\\varepsilon}{R} = \\frac{BLv}{R}$$

By Lenz's Law, the current flows **counterclockwise** (to oppose the increasing into-page flux).
      `
    },
    {
      id: 'ei4-force-analysis',
      type: 'text' as const,
      content: `
## Force on the Moving Rod

The current-carrying rod sits in a magnetic field, so it experiences a force:

$$F = BIL = B \\cdot \\frac{BLv}{R} \\cdot L = \\frac{B^2L^2v}{R}$$

### Direction of the Force

By Lenz's Law (or the $\\vec{F} = I\\vec{L} \\times \\vec{B}$ force law), this force **opposes the rod's motion** — it acts to the **left** if the rod moves right.

### Constant Velocity Requires an External Force

To keep the rod moving at constant velocity, you must apply an external force equal and opposite to the magnetic braking force:

$$F_{\\text{ext}} = \\frac{B^2L^2v}{R}$$

### Power Analysis

$$P_{\\text{ext}} = F_{\\text{ext}} \\cdot v = \\frac{B^2L^2v^2}{R}$$

$$P_{\\text{dissipated}} = I^2R = \\left(\\frac{BLv}{R}\\right)^2 R = \\frac{B^2L^2v^2}{R}$$

The power you put in equals the power dissipated as heat in the resistor. **Energy is conserved!** Mechanical energy → electrical energy → thermal energy.
      `
    },
    {
      id: 'ei4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Motional EMF Concept Check** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'A rod slides along rails in a magnetic field. If you double the rod\'s speed, the induced EMF:',
            options: [
              'Stays the same',
              'Doubles',
              'Quadruples',
              'Halves'
            ],
            correctAnswer: 1,
            explanation: '$\\varepsilon = BLv$. EMF is directly proportional to $v$, so doubling $v$ doubles $\\varepsilon$.'
          },
          {
            question: 'The force required to maintain constant velocity of the rod is proportional to:',
            options: [
              '$v$',
              '$v^2$',
              '$1/v$',
              '$\\sqrt{v}$'
            ],
            correctAnswer: 0,
            explanation: '$F = B^2L^2v/R$. The force is directly proportional to $v$. Faster motion → more EMF → more current → more opposing force.'
          },
          {
            question: 'If the resistance in the circuit doubles (everything else constant), the braking force on the rod:',
            options: [
              'Doubles',
              'Halves',
              'Stays the same',
              'Quadruples'
            ],
            correctAnswer: 1,
            explanation: '$F = B^2L^2v/R$. Doubling $R$ halves the force, because less current flows → less magnetic braking. A perfectly insulating circuit ($R → ∞$) would have zero braking force.'
          }
        ]
      }
    },
    {
      id: 'ei4-rail-problem',
      type: 'text' as const,
      content: `
## Rail Problem — Complete Analysis

### Problem Setup

A 0.5 m long rod slides at 4 m/s along frictionless rails connected by a 2 Ω resistor. The field is $B = 0.3$ T into the page.

### Solution

**EMF:**
$$\\varepsilon = BLv = (0.3)(0.5)(4) = 0.6 \\text{ V}$$

**Current:**
$$I = \\frac{\\varepsilon}{R} = \\frac{0.6}{2} = 0.3 \\text{ A}$$

**Magnetic braking force:**
$$F = BIL = (0.3)(0.3)(0.5) = 0.045 \\text{ N}$$

*Or equivalently:*
$$F = \\frac{B^2L^2v}{R} = \\frac{(0.3)^2(0.5)^2(4)}{2} = \\frac{0.09 \\times 0.25 \\times 4}{2} = 0.045 \\text{ N}$$

**Power to maintain constant speed:**
$$P = Fv = (0.045)(4) = 0.18 \\text{ W}$$

**Power dissipated in resistor:**
$$P = I^2R = (0.3)^2(2) = 0.18 \\text{ W} \\quad \\checkmark$$
      `
    },
    {
      id: 'ei4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Motional EMF Calculation Drill** 📐

A conducting rod of length 0.8 m slides at 5 m/s along rails connected to a 4 Ω resistor in a uniform field $B = 0.5$ T (perpendicular to the rail plane).

1) Induced EMF (in V)
2) Current in the circuit (in A)
3) Force needed to maintain constant velocity (in N)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '0.5', '0.2', '0.50', '0.20'],
        hint1: '$\\varepsilon = BLv = (0.5)(0.8)(5)$.',
        hint2: '$I = \\varepsilon / R = 2/4 = 0.5$ A.',
        hint3: '$F = BIL = (0.5)(0.5)(0.8) = 0.2$ N. Or: $F = B^2L^2v/R$.',
        explanation: '$\\varepsilon = (0.5)(0.8)(5) = 2$ V. $I = 2/4 = 0.5$ A. $F = (0.5)(0.5)(0.8) = 0.2$ N.'
      }
    },
    {
      id: 'ei4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Motional EMF** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A rod slides along rails at constant velocity. Where does the energy dissipated in the resistor come from?',
            options: [
              'The magnetic field',
              'The kinetic energy of the rod',
              'The work done by the external force maintaining constant velocity',
              'The gravitational potential energy of the rod'
            ],
            correctAnswer: 2,
            explanation: 'The external force does work on the rod to maintain constant velocity. This mechanical work is converted to electrical energy (EMF drives current) and then to heat in the resistor. The magnetic field does no net work — it merely mediates the energy transfer.'
          },
          {
            question: 'If the rails have no resistor (open circuit), a rod pushed along them will:',
            options: [
              'Slow down due to magnetic braking',
              'Speed up due to the induced EMF',
              'Continue at constant velocity (no current, no force)',
              'Oscillate back and forth'
            ],
            correctAnswer: 2,
            explanation: 'Open circuit → $R = \\infty$ → $I = 0$ → no magnetic force on the rod. The EMF exists across the rod\'s ends, but no current flows, so there is no braking force. The rod slides freely.'
          }
        ]
      }
    }
  ]
}
