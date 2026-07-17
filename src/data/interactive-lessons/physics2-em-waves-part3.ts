export const physics2EmWavesPart3Data = {
  topicSlug: 'electromagnetic-waves',
  sections: [
    {
      id: 'electromagneticwaves-p3-intro',
      type: 'text' as const,
      content: `# 🕶️ Polarization

**Part 3 of 7 — Polarization of Light**

---

### Unpolarized vs Polarized Light

- **Unpolarized:** E field oscillates in **all** directions perpendicular to propagation (random orientations)
- **Linearly polarized:** E field oscillates in **only one** plane

Natural light from the sun, light bulbs, and most sources is unpolarized. Polarizers, reflection, and scattering can produce polarized light.

### How Polarizers Work

A polarizer has a **transmission axis**. Only the component of the E field along this axis passes through.

| Type | Mechanism |
|------|-----------|
| Polaroid filters | Aligned polymer chains absorb one component |
| Reflection (Brewster) | At Brewster's angle, reflected light is fully polarized |
| Scattering | Scattered sunlight is partially polarized (blue sky) |
      `
    },
    {
      id: 'electromagneticwaves-p3-malus',
      type: 'text' as const,
      content: `
## Malus's Law

When **already-polarized** light passes through a second polarizer (analyzer) at angle $\\theta$ to the transmission axis:

$$\\boxed{I = I_0 \\cos^2\\theta}$$

### Special Cases

| Angle | $\\cos^2\\theta$ | Result |
|-------|-----------------|--------|
| $0°$ | 1 | Full transmission |
| $30°$ | $3/4$ | 75% transmitted |
| $45°$ | $1/2$ | Half transmitted |
| $60°$ | $1/4$ | Quarter transmitted |
| $90°$ | 0 | Complete block |

### Unpolarized Through First Polarizer

When **unpolarized** light hits the first polarizer, the E field has all orientations equally. Averaging $\\cos^2\\theta$ over all angles gives:

$$I_{after} = \\frac{I_0}{2}$$

This happens **regardless** of the polarizer's orientation. The light emerging is now polarized along the transmission axis.

### Multi-Polarizer Problems (AP Favorite!)

For each successive polarizer, apply Malus's law using the angle **between adjacent polarizers**:

$$I_0 \\xrightarrow{\\text{unpolarized}} \\frac{I_0}{2} \\xrightarrow{\\theta_1} \\frac{I_0}{2}\\cos^2\\theta_1 \\xrightarrow{\\theta_2} \\frac{I_0}{2}\\cos^2\\theta_1 \\cdot \\cos^2\\theta_2$$

> 🔑 **Key insight:** Inserting a third polarizer between two crossed (90°) polarizers can actually INCREASE transmission! Two crossed polarizers transmit zero, but adding a 45° polarizer between them transmits $I_0/8$.
      `
    },
    {
      id: 'electromagneticwaves-p3-check1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Unpolarized light passes through a single polarizer. The transmitted intensity is:',
            options: ['$I_0$', '$I_0/2$', '$I_0/4$', 'Zero'],
            correctAnswer: 1,
            explanation: 'Unpolarized light through the first polarizer ALWAYS gives $I_0/2$, because the average of $\\cos^2\\theta$ over all random E-field directions is $1/2$. The orientation of the polarizer doesn\'t matter.'
          },
          {
            question: 'Polarized light at 60° to a polarizer. Transmitted intensity?',
            options: ['$I_0/2$', '$I_0/4$', '$3I_0/4$', '$I_0 \\cos 60°$'],
            correctAnswer: 1,
            explanation: '$I = I_0 \\cos^2(60°) = I_0(1/2)^2 = I_0/4$. Note: it\'s $\\cos^2$, not just $\\cos$! Using $\\cos$ instead of $\\cos^2$ is a very common AP error.'
          },
          {
            question: 'Two crossed polarizers (90° apart) transmit:',
            options: ['Half the light', 'Quarter of the light', 'No light at all', 'All the light'],
            correctAnswer: 2,
            explanation: '$I = I_0 \\cos^2(90°) = I_0 \\times 0 = 0$. Crossed polarizers block all light.'
          },
          {
            question: 'Unpolarized light → Polarizer 1 (vertical) → Polarizer 2 (at 30° from vertical) → Polarizer 3 (at 60° from vertical). What fraction of original intensity emerges?',
            options: ['$3/32$', '$9/32$', '$3/8$', '$1/8$'],
            correctAnswer: 1,
            explanation: '$I_0/2$ (unpolarized→P1) × $\\cos^2(30°) = 3/4$ (P1→P2, angle = 30°) × $\\cos^2(30°) = 3/4$ (P2→P3, angle = 60°−30° = 30°). Total: $(I_0/2)(3/4)(3/4) = 9I_0/32$.'
          }
        ]
      }
    },
    {
      id: 'electromagneticwaves-p3-input',
      type: 'input-boxes' as const,
      content: `
**Polarization Problems** 🧮

Unpolarized light with $I_0 = 200$ $W/m^{2}$ passes through two polarizers.

First polarizer: transmits in vertical direction.
Second polarizer: at 30° from vertical.

**1)** Intensity after first polarizer? $(W/m^{2})$

**2)** Intensity after second polarizer? $(W/m^{2})$

**3)** What angle between two polarizers gives zero transmission?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['100', '75', '90'],
        hint1: 'Unpolarized through first polarizer → $I_0/2$',
        hint2: '$100 \\cos^2(30°) = 100(3/4)$',
        hint3: '$\\cos^2(\\theta) = 0$ when $\\theta = ?$',
        explanation: '1) $200/2 = 100$ $W/m^{2}$ (first polarizer always halves unpolarized light). 2) $100 \\cos^2(30°) = 100(0.75) = 75$ $W/m^{2}$. 3) 90° — crossed polarizers transmit nothing.'
      }
    },
    {
      id: 'electromagneticwaves-p3-brewster',
      type: 'multiple-choice' as const,
      content: `
**Brewster's Angle & Polarization by Reflection** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At Brewster\'s angle, reflected light is:',
            options: [
              'Unpolarized',
              'Fully polarized parallel to the surface',
              'Circularly polarized',
              'Completely absorbed'
            ],
            correctAnswer: 1,
            explanation: 'At Brewster\'s angle ($\\tan\\theta_B = n_2/n_1$), the reflected ray and refracted ray are perpendicular. The reflected light is fully polarized with E parallel to the surface. This is why polarized sunglasses reduce glare from roads and water.'
          },
          {
            question: 'Polarized sunglasses reduce glare because:',
            options: [
              'They block all light equally',
              'Reflected glare is partially polarized horizontally, and the sunglasses block horizontal polarization',
              'They change the color of light',
              'They bend light away from your eyes'
            ],
            correctAnswer: 1,
            explanation: 'Light reflected off horizontal surfaces (roads, water) is preferentially polarized with E horizontal. Polarized sunglasses have a vertical transmission axis, blocking this horizontal component while letting other light through.'
          }
        ]
      }
    }
  ]
};
