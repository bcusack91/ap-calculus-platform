export const physics2InterferencePart1Data = {
  topicSlug: 'interference-diffraction',
  sections: [
    {
      id: 'id1-intro',
      type: 'text' as const,
      content: `
# 🌊 Wave Nature of Light

**Part 1 of 7 — Superposition and Interference**

Light is a wave — and when waves overlap, they combine. This principle of **superposition** is the foundation for understanding interference patterns, one of the most beautiful phenomena in physics.
      `
    },
    {
      id: 'id1-superposition',
      type: 'text' as const,
      content: `
## The Principle of Superposition

When two or more waves overlap in the same region of space, the **resultant displacement** at any point is the algebraic sum of the individual displacements:

$$y_{\\text{total}} = y_1 + y_2$$

This is called the **principle of superposition**. It applies to all linear waves, including light, sound, and water waves.

### Key Requirement: Coherent Sources

For a **stable** interference pattern, the sources must be **coherent**:
- Same frequency (wavelength)
- Constant phase relationship

Incoherent sources (like two light bulbs) produce rapidly shifting patterns that average out — no visible interference.

### Two Types of Interference

| Type | Condition | Result |
|------|-----------|--------|
| **Constructive** | Waves arrive in phase | Amplitude doubles → bright spot |
| **Destructive** | Waves arrive 180° out of phase | Amplitudes cancel → dark spot |
      `
    },
    {
      id: 'id1-path-difference',
      type: 'text' as const,
      content: `
## Path Difference: The Key to Interference

The type of interference depends on the **path difference** $\\Delta r$ — the difference in distance each wave travels from its source to the observation point.

### Constructive Interference (Bright)

Waves arrive in phase when the path difference is a whole number of wavelengths:

$$\\Delta r = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)$$

The waves reinforce each other, producing maximum intensity.

### Destructive Interference (Dark)

Waves arrive out of phase when the path difference is a half-integer number of wavelengths:

$$\\Delta r = \\left(m + \\frac{1}{2}\\right)\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)$$

The waves cancel each other, producing zero intensity.

### The Central Maximum

At the center of the pattern ($m = 0$), the path difference is zero — both waves travel the same distance. This always gives **constructive** interference.
      `
    },
    {
      id: 'id1-phase-quiz',
      type: 'multiple-choice' as const,
      content: `
**Phase and Path Difference Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two coherent sources emit waves with wavelength 600 nm. If one wave travels 1.8 μm farther than the other, the interference is:',
            options: [
              'Constructive (bright)',
              'Destructive (dark)',
              'Partially constructive',
              'No interference occurs'
            ],
            correctAnswer: 0,
            explanation: 'Path difference = 1.8 μm = 1800 nm. $\\Delta r / \\lambda = 1800/600 = 3$. Since this is a whole integer ($m = 3$), the interference is constructive.'
          },
          {
            question: 'For destructive interference, the path difference must equal:',
            options: [
              '$m\\lambda$',
              '$(m + \\frac{1}{2})\\lambda$',
              '$(2m + 1)\\lambda$',
              '$\\frac{m}{2}\\lambda$'
            ],
            correctAnswer: 1,
            explanation: 'Destructive interference occurs when $\\Delta r = (m + \\frac{1}{2})\\lambda$, meaning the path difference is a half-integer number of wavelengths (0.5λ, 1.5λ, 2.5λ, ...). A whole number of wavelengths, $m\\lambda$, is the bright (constructive) condition, and $(2m + 1)\\lambda$ drops the factor of ½: it is a whole number of wavelengths, which is also constructive.'
          },
          {
            question: 'Two waves of the same frequency but from independent (incoherent) light bulbs are aimed at a screen. You observe:',
            options: [
              'A clear interference pattern of bright and dark fringes',
              'Only constructive interference everywhere',
              'A uniform glow with no visible fringes',
              'Only destructive interference everywhere'
            ],
            correctAnswer: 2,
            explanation: 'Incoherent sources have a randomly varying phase relationship. The interference pattern shifts so rapidly that it averages out, and you see a uniform intensity.'
          }
        ]
      }
    },
    {
      id: 'id1-two-source',
      type: 'text' as const,
      content: `
## Two-Source Patterns: Loud Spots and Quiet Spots

Path difference works for **any** waves — light, water, or sound. Two loudspeakers driven by the same signal are coherent sources you can walk around in.

### Worked Example

Two speakers 3.0 m apart emit the same tone **in phase** with wavelength $\\lambda = 1.0$ m.

**Point P** is 4.0 m from speaker A and 5.0 m from speaker B:

$$\\Delta r = 5.0 - 4.0 = 1.0 \\text{ m} = 1\\lambda \\quad \\Rightarrow \\quad \\text{constructive: loud}$$

**Point Q** is 4.0 m from A and 5.5 m from B:

$$\\Delta r = 5.5 - 4.0 = 1.5 \\text{ m} = 1.5\\lambda \\quad \\Rightarrow \\quad \\text{destructive: quiet}$$

**Any point on the center line** between the speakers is equally far from both, so $\\Delta r = 0$ and it is always loud.

### The Whole Pattern

- Walking sideways across the room, you pass through **alternating loud and quiet regions**: $\\Delta r = 0, \\tfrac{1}{2}\\lambda, \\lambda, \\tfrac{3}{2}\\lambda, \\ldots$
- In a ripple tank with two in-phase dippers, the quiet regions show up as **nodal lines** of calm water fanning out between lines of large waves
- A **shorter wavelength** packs the loud and quiet regions closer together; sources **farther apart** do the same

### Sources Out of Phase

If one speaker is wired backward, the waves leave **half a cycle apart**. Every condition swaps: $\\Delta r = 0$ on the center line now gives a **quiet** spot, and $\\Delta r = \\tfrac{1}{2}\\lambda$ gives a loud one.
      `
    },
    {
      id: 'id1-concept-drill',
      type: 'dropdown-select' as const,
      content: `
**Interference Concept Check** 🔬
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Path difference of 2.5λ produces',
            options: ['constructive interference', 'destructive interference', 'no interference', 'partial interference']
          },
          {
            label: 'Two coherent sources are required because they must maintain a',
            options: ['constant phase relationship', 'constant amplitude', 'constant frequency only', 'random phase']
          },
          {
            label: 'At the central maximum, the path difference is',
            options: ['λ', 'λ/2', 'zero', '2λ']
          },
          {
            label: 'Two in-phase speakers emit λ = 0.80 m. A listener 2.0 m farther from one speaker hears',
            options: ['a loud spot', 'a quiet spot', 'an average loudness', 'a rising pitch']
          }
        ],
        correctAnswers: ['destructive interference', 'constant phase relationship', 'zero', 'a quiet spot'],
        hint1: '2.5λ = (2 + ½)λ — that is a half-integer multiple.',
        hint2: 'Coherent sources must have the same frequency and a fixed phase difference.',
        hint3: 'At the center, both waves travel the same distance. For the speakers, divide the path difference by the wavelength.',
        explanation: '2.5λ is half-integer → destructive. Coherence requires constant phase. Central max: Δr = 0. For the speakers, 2.0 m ÷ 0.80 m = 2.5 wavelengths → destructive → quiet.'
      }
    },
    {
      id: 'id1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Wave Superposition** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Two coherent waves with $\\lambda = 500$ nm have a path difference of 750 nm. What type of interference occurs?',
            options: [
              'Constructive',
              'Destructive',
              'Neither — partially constructive',
              'Cannot determine without knowing amplitude'
            ],
            correctAnswer: 1,
            explanation: '$750/500 = 1.5 = (1 + \\frac{1}{2})$. This is a half-integer, so destructive interference occurs.'
          },
          {
            question: 'Two speakers driven in phase emit sound of wavelength 0.50 m. A listener stands 3.00 m from one speaker and 4.00 m from the other. What does the listener hear?',
            options: [
              'A quiet spot, from destructive interference',
              'A loud spot, from constructive interference',
              'Loudness halfway between loud and quiet',
              'A loudness that beats up and down'
            ],
            correctAnswer: 1,
            explanation: 'The path difference is 1.00 m = 2.0 wavelengths, a whole number, so the waves arrive in phase and the spot is loud. A quiet spot would need a half-integer number of wavelengths, and beats require two different frequencies.'
          }
        ]
      }
    }
  ]
}
