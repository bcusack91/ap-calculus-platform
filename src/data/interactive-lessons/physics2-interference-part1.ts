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
              '$2m\\lambda$',
              '$\\frac{m}{2}\\lambda$'
            ],
            correctAnswer: 1,
            explanation: 'Destructive interference occurs when $\\Delta r = (m + \\frac{1}{2})\\lambda$, meaning the path difference is a half-integer number of wavelengths (0.5λ, 1.5λ, 2.5λ, ...).'
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
      id: 'id1-intensity',
      type: 'text' as const,
      content: `
## Intensity and Interference

For two coherent waves of equal amplitude $E_0$, the resultant intensity depends on the phase difference $\\phi$:

$$I = 4I_0 \\cos^2\\left(\\frac{\\phi}{2}\\right)$$

where $I_0$ is the intensity of each individual wave.

### Phase Difference and Path Difference

The phase difference $\\phi$ is related to the path difference $\\Delta r$:

$$\\phi = \\frac{2\\pi}{\\lambda} \\Delta r$$

| Condition | Phase Difference | Intensity |
|-----------|-----------------|-----------|
| Constructive | $\\phi = 0, 2\\pi, 4\\pi, \\ldots$ | $4I_0$ (maximum) |
| Destructive | $\\phi = \\pi, 3\\pi, 5\\pi, \\ldots$ | $0$ (minimum) |
| In between | Other values | Between $0$ and $4I_0$ |

### Energy Conservation

Interference doesn't create or destroy energy — it **redistributes** it. The extra intensity at bright spots comes at the expense of dark spots. The average intensity over the full pattern is $2I_0$, the same as without interference.
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
            label: 'Maximum intensity from two equal sources is',
            options: ['$I_{0}$', '$2I_{0}$', '$3I_{0}$', '$4I_{0}$']
          }
        ],
        correctAnswers: ['destructive interference', 'constant phase relationship', 'zero', '$4I_{0}$'],
        hint1: '2.5λ = (2 + ½)λ — that is a half-integer multiple.',
        hint2: 'Coherent sources must have the same frequency AND a fixed phase difference.',
        hint3: 'At the center, both waves travel the same distance.',
        explanation: '2.5λ is half-integer → destructive. Coherence requires constant phase. Central max: Δr = 0. Two equal waves constructively combine: $I = 4I_0$.'
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
            question: 'If the intensity of each source is $I_0$, the intensity at a point of constructive interference from two coherent sources is:',
            options: [
              '$I_0$',
              '$2I_0$',
              '$3I_0$',
              '$4I_0$'
            ],
            correctAnswer: 3,
            explanation: 'At constructive interference, the amplitudes add: $E = 2E_0$. Since $I \\propto E^2$, $I = 4I_0$.'
          }
        ]
      }
    }
  ]
}
