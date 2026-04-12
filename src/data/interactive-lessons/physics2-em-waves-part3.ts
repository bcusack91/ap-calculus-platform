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

- **Unpolarized:** E field oscillates in all directions perpendicular to propagation
- **Linearly polarized:** E field oscillates in only one plane

### Malus’s Law

When polarized light passes through a polarizer at angle $\\\\theta$ to the transmission axis:

$$I = I_0 \\\\cos^2\\\\theta$$

### Special Cases
| Angle | Result |
|-------|--------|
| $\\\\theta = 0°$ | $I = I_0$ (full transmission) |
| $\\\\theta = 90°$ | $I = 0$ (complete block) |
| $\\\\theta = 45°$ | $I = I_0/2$ |

### Unpolarized Through One Polarizer

$$I = \\\\frac{I_0}{2}$$

Always halved, regardless of polarizer orientation.`
    },    {
      id: 'electromagneticwaves-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Unpolarized light passes through a polarizer. The transmitted intensity is:',
            options: ['$I_0$', '$I_0/2$', '$I_0/4$', 'Zero'],
            correctAnswer: 1,
            explanation: 'Unpolarized through one polarizer always gives $I_0/2$.'
          },
          {
            question: 'Polarized light at 60° to a polarizer: transmitted intensity?',
            options: ['$I_0/2$', '$I_0/4$', '$3I_0/4$', '$I_0 \\\\cos 60°$'],
            correctAnswer: 1,
            explanation: '$I = I_0 \\\\cos^2(60°) = I_0(1/2)^2 = I_0/4$.'
          },
          {
            question: 'Two crossed polarizers (90°) transmit:',
            options: ['Half the light', 'Quarter of the light', 'No light', 'All the light'],
            correctAnswer: 2,
            explanation: '$I = I_0 \\\\cos^2(90°) = 0$. Crossed polarizers block all light.'
          }
        ]
      }
    },    {
      id: 'electromagneticwaves-p3-input',
      type: 'input-boxes' as const,
      content: `
**Polarization Problems** 🧮

Unpolarized light with $I_0 = 200$ W/m² passes through two polarizers.

First polarizer: transmits in vertical direction.
Second polarizer: at 30° from vertical.

**1)** Intensity after first polarizer? (W/m²)

**2)** Intensity after second polarizer? (W/m²)

**3)** What angle between polarizers gives zero transmission?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['100', '75', '90'],
        hint1: 'Unpolarized → $I_0/2$',
        hint2: '$100 \\\\cos^2(30°) = 100(3/4)$',
        hint3: '$\\\\cos^2(\\\\theta) = 0$ when?',
        explanation: '1) $200/2 = 100$ W/m². 2) $100 \\\\cos^2(30°) = 100(0.75) = 75$ W/m². 3) 90° (crossed polarizers).'
      }
    }
  ]
};
