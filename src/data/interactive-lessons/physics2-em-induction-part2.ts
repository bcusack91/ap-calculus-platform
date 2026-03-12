export const physics2EmInductionPart2Data = {
  topicSlug: 'electromagnetic-induction',
  sections: [
    {
      id: 'ei2-intro',
      type: 'text' as const,
      content: `
# ⚡ Faraday's Law of Induction

**Part 2 of 7 — EMF from Changing Flux**

Michael Faraday's greatest discovery: a **changing magnetic flux** through a loop induces an electromotive force (EMF). This single law is the basis of generators, transformers, and most of the electrical power grid.
      `
    },
    {
      id: 'ei2-faradays-law',
      type: 'text' as const,
      content: `
## Faraday's Law

### Statement

The induced EMF in a loop is equal to the **negative rate of change of magnetic flux** through the loop:

$$\\varepsilon = -\\frac{d\\Phi_B}{dt}$$

For a coil with $N$ turns:

$$\\varepsilon = -N\\frac{d\\Phi_B}{dt}$$

### Key Points

- The **magnitude** of the EMF depends on how **fast** the flux changes
- The **negative sign** is related to Lenz's Law (Part 3) — it tells us the direction of the induced EMF opposes the change
- If the flux is constant ($d\\Phi_B/dt = 0$), there is **no induced EMF**
- The unit of EMF is the **Volt** (V)

### Average EMF

For a finite change in flux over a time interval:

$$|\\varepsilon| = N\\frac{|\\Delta\\Phi_B|}{\\Delta t} = N\\frac{|\\Phi_f - \\Phi_i|}{\\Delta t}$$

This is the form you'll use most often in AP Physics 2 calculations.
      `
    },
    {
      id: 'ei2-three-ways',
      type: 'text' as const,
      content: `
## Three Ways to Induce an EMF

Since $\\Phi_B = BA\\cos\\theta$, the flux can change by changing any factor:

### 1. Changing $B$ — Varying the Field

Push a magnet toward a coil: $B$ increases at the coil → $\\Phi$ increases → EMF induced.

$$|\\varepsilon| = NA\\cos\\theta \\cdot \\frac{|\\Delta B|}{\\Delta t}$$

**Example:** A solenoid's field increases from 0 to 0.5 T in 0.1 s through a 100-turn coil of area 0.02 m² ($\\theta = 0°$):

$$|\\varepsilon| = (100)(0.02)(1)\\frac{0.5}{0.1} = 10 \\text{ V}$$

### 2. Changing $A$ — Varying the Area

Pull a loop partially out of the field: the area inside the field decreases → $\\Phi$ decreases → EMF induced.

$$|\\varepsilon| = NB\\cos\\theta \\cdot \\frac{|\\Delta A|}{\\Delta t}$$

### 3. Changing $\\theta$ — Rotating the Loop

Rotate the loop in the field: $\\theta$ changes → $\\cos\\theta$ changes → $\\Phi$ changes → EMF induced.

This is exactly how an **AC generator** works (covered in Part 5).
      `
    },
    {
      id: 'ei2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Faraday's Law Concept Check** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'According to Faraday\'s Law, an EMF is induced in a loop when:',
            options: [
              'A magnetic field exists near the loop',
              'The magnetic flux through the loop is changing',
              'The loop is in a strong magnetic field',
              'The loop carries a current'
            ],
            correctAnswer: 1,
            explanation: 'Faraday\'s Law: $\\varepsilon = -N(d\\Phi_B/dt)$. An EMF is induced only when the flux is **changing**, not just when a field is present.'
          },
          {
            question: 'A coil has 50 turns. The flux through each turn changes from 0.08 Wb to 0.02 Wb in 0.2 s. The magnitude of the average induced EMF is:',
            options: [
              '0.3 V',
              '3 V',
              '15 V',
              '30 V'
            ],
            correctAnswer: 2,
            explanation: '$|\\varepsilon| = N\\frac{|\\Delta\\Phi|}{\\Delta t} = 50 \\times \\frac{|0.02 - 0.08|}{0.2} = 50 \\times \\frac{0.06}{0.2} = 50 \\times 0.3 = 15$ V.'
          },
          {
            question: 'Doubling the number of turns in a coil while keeping everything else the same will:',
            options: [
              'Double the flux through each turn',
              'Double the induced EMF',
              'Halve the induced EMF',
              'Have no effect on the EMF'
            ],
            correctAnswer: 1,
            explanation: '$\\varepsilon = -N(d\\Phi_B/dt)$. Doubling $N$ doubles the EMF. The flux through each individual turn remains the same.'
          }
        ]
      }
    },
    {
      id: 'ei2-worked-example',
      type: 'text' as const,
      content: `
## Worked Example: Magnet Moving Into a Coil

A bar magnet is pushed into a 200-turn coil of radius 5 cm. The magnetic field at the coil increases uniformly from 0 T to 0.4 T in 0.25 s.

### Step 1: Find the area
$$A = \\pi r^2 = \\pi(0.05)^2 = 7.85 \\times 10^{-3} \\text{ m}^2$$

### Step 2: Find the change in flux (per turn)
$$\\Delta\\Phi = \\Delta B \\cdot A \\cdot \\cos 0° = (0.4)(7.85 \\times 10^{-3})(1) = 3.14 \\times 10^{-3} \\text{ Wb}$$

### Step 3: Apply Faraday's Law
$$|\\varepsilon| = N\\frac{|\\Delta\\Phi|}{\\Delta t} = 200 \\times \\frac{3.14 \\times 10^{-3}}{0.25} = 200 \\times 0.01256 = 2.51 \\text{ V}$$

### Key Takeaway
Even modest changes in flux through many-turn coils can produce significant voltages!
      `
    },
    {
      id: 'ei2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Faraday's Law Calculation Drill** 📐

A square coil has 80 turns, each with side length 10 cm. The coil sits in a uniform field ($\\theta = 0°$) that decreases from 0.6 T to 0.2 T in 0.05 s.

1) Area of each turn (in m²)
2) Change in flux per turn $|\\Delta\\Phi|$ (in Wb)
3) Magnitude of the induced EMF (in V)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.01', '0.004', '6.4', '0.010', '0.0040', '6.40'],
        hint1: '$A = (0.10)^2 = 0.01$ m².',
        hint2: '$|\\Delta\\Phi| = |\\Delta B| \\cdot A = |0.2 - 0.6| \\times 0.01 = 0.004$ Wb.',
        hint3: '$|\\varepsilon| = N \\frac{|\\Delta\\Phi|}{\\Delta t} = 80 \\times \\frac{0.004}{0.05} = 6.4$ V.',
        explanation: '$A = 0.01$ m². $|\\Delta\\Phi| = (0.4)(0.01) = 0.004$ Wb. $|\\varepsilon| = 80 \\times 0.004/0.05 = 80 \\times 0.08 = 6.4$ V.'
      }
    },
    {
      id: 'ei2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Faraday's Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A single loop encloses a flux of 0.05 Wb. If the flux drops to zero in 0.01 s, the induced EMF is:',
            options: [
              '0.5 V',
              '5 V',
              '50 V',
              '500 V'
            ],
            correctAnswer: 1,
            explanation: '$|\\varepsilon| = \\frac{|\\Delta\\Phi|}{\\Delta t} = \\frac{0.05}{0.01} = 5$ V.'
          },
          {
            question: 'A loop is in a uniform magnetic field. Which scenario produces the LARGEST induced EMF?',
            options: [
              'Flux changes by 2 Wb in 4 s',
              'Flux changes by 1 Wb in 0.5 s',
              'Flux changes by 0.5 Wb in 0.1 s',
              'Flux changes by 3 Wb in 10 s'
            ],
            correctAnswer: 2,
            explanation: 'EMF = $|\\Delta\\Phi/\\Delta t|$. (A) 0.5 V, (B) 2 V, (C) 5 V, (D) 0.3 V. Option C gives the largest EMF because the flux changes most rapidly.'
          }
        ]
      }
    }
  ]
}
