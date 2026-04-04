export const physics2LensesPart5Data = {
  topicSlug: 'lenses',
  sections: [
    {
      id: 'ln5-intro',
      type: 'text' as const,
      content: `
# 🔬 Multi-Lens Systems

**Part 5 of 7 — Compound Optics**

Real optical instruments — microscopes, telescopes, cameras — use **multiple lenses** working together. The key principle: the **image from the first lens becomes the object for the second lens**.
      `
    },
    {
      id: 'ln5-two-lens-method',
      type: 'text' as const,
      content: `
## Two-Lens Systems: Step-by-Step Method

### Algorithm

1. **Lens 1**: Use the thin lens equation to find $d_{i1}$ from $d_{o1}$ and $f_1$
2. **Transfer**: The object distance for lens 2 is $d_{o2} = L - d_{i1}$, where $L$ is the distance between the two lenses
3. **Lens 2**: Use the thin lens equation again to find $d_{i2}$ from $d_{o2}$ and $f_2$
4. **Total magnification**: $m_{\\text{total}} = m_1 \\times m_2$

### Important Notes

- If $d_{i1} > L$, then $d_{o2} < 0$ — the image from lens 1 is a **virtual object** for lens 2 (it's on the far side of lens 2)
- Each magnification: $m_1 = -d_{i1}/d_{o1}$ and $m_2 = -d_{i2}/d_{o2}$
- Total magnification is the **product**: $m_{\\text{total}} = m_1 \\times m_2$
      `
    },
    {
      id: 'ln5-example',
      type: 'text' as const,
      content: `
## Worked Example

Two converging lenses are separated by 50 cm. Lens 1 has $f_1 = 20$ cm. Lens 2 has $f_2 = 10$ cm. An object is placed 30 cm in front of lens 1.

**Lens 1:**

$$\\frac{1}{d_{i1}} = \\frac{1}{20} - \\frac{1}{30} = \\frac{3-2}{60} = \\frac{1}{60}$$

$$d_{i1} = 60 \\text{ cm}$$

$$m_1 = -\\frac{60}{30} = -2$$

**Transfer to Lens 2:**

$$d_{o2} = L - d_{i1} = 50 - 60 = -10 \\text{ cm}$$

Negative $d_{o2}$ means the image from lens 1 is 10 cm **past** lens 2 — a virtual object for lens 2.

**Lens 2:**

$$\\frac{1}{d_{i2}} = \\frac{1}{10} - \\frac{1}{-10} = \\frac{1}{10} + \\frac{1}{10} = \\frac{2}{10} = \\frac{1}{5}$$

$$d_{i2} = 5 \\text{ cm}$$

$$m_2 = -\\frac{5}{-10} = +0.5$$

**Total magnification:**

$$m_{\\text{total}} = m_1 \\times m_2 = (-2)(+0.5) = -1$$

The final image is 5 cm past lens 2, real, inverted, and the same size as the object.
      `
    },
    {
      id: 'ln5-instruments',
      type: 'text' as const,
      content: `
## Optical Instruments

### Compound Microscope

A microscope uses two converging lenses:

- **Objective lens** (short $f$): placed so the specimen is just outside $f_1$ → produces a real, enlarged, inverted image inside the tube
- **Eyepiece** (longer $f$): acts as a magnifying glass on the real image → produces a virtual, enlarged image for the eye

$$M_{\\text{microscope}} \\approx -\\frac{L}{f_{\\text{obj}}} \\times \\frac{25\\text{ cm}}{f_{\\text{eye}}}$$

where $L$ is the tube length and 25 cm is the near point of the eye.

### Refracting Telescope

A telescope uses two converging lenses:

- **Objective lens** (long $f$): captures light from a distant object → forms a real, inverted image at its focal point
- **Eyepiece** (short $f$): magnifies that real image

$$M_{\\text{telescope}} = -\\frac{f_{\\text{obj}}}{f_{\\text{eye}}}$$

The negative sign indicates the image is inverted.
      `
    },
    {
      id: 'ln5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Multi-Lens Concepts**
      `,
      exercise: {
        questions: [
          {
            question: 'In a two-lens system, the total magnification is:',
            options: [
              '$m_1 + m_2$',
              '$m_1 - m_2$',
              '$m_1 \\times m_2$',
              '$m_1 / m_2$'
            ],
            correctAnswer: 2,
            explanation: 'Total magnification is the product of individual magnifications: $m_{\\text{total}} = m_1 \\times m_2$. Each lens multiplies the size of the previous image.'
          },
          {
            question: 'A telescope has an objective lens with $f = 100$ cm and an eyepiece with $f = 5$ cm. The angular magnification is:',
            options: [
              '$+20$',
              '$-20$',
              '$+500$',
              '$-500$'
            ],
            correctAnswer: 1,
            explanation: '$M = -f_{\\text{obj}}/f_{\\text{eye}} = -100/5 = -20$. The magnitude is 20 and the negative sign indicates the image is inverted.'
          }
        ]
      }
    },
    {
      id: 'ln5-input-drill',
      type: 'input-boxes' as const,
      content: `
**Two-Lens Calculation** 🧮

Two converging lenses are 55 cm apart. Lens 1: $f_1 = 15$ cm. Lens 2: $f_2 = 10$ cm. An object is 30 cm in front of lens 1.

1) Image distance from lens 1: $d_{i1}$ (in cm)
2) Object distance for lens 2: $d_{o2}$ (in cm)
3) Image distance from lens 2: $d_{i2}$ (in cm, round to 1 decimal)
4) Total magnification $m_{\\text{total}}$ (round to 2 decimals)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['30', '25', '16.7', '0.67'],
        hint1: '$\\frac{1}{d_{i1}} = \\frac{1}{15} - \\frac{1}{30} = \\frac{2-1}{30} = \\frac{1}{30}$, so $d_{i1} = 30$ cm.',
        hint2: '$d_{o2} = L - d_{i1} = 55 - 30 = 25$ cm.',
        hint3: '$\\frac{1}{d_{i2}} = \\frac{1}{10} - \\frac{1}{25} = \\frac{5-2}{50} = \\frac{3}{50}$, so $d_{i2} = 50/3 \\approx 16.7$ cm. $m_1 = -30/30 = -1$, $m_2 = -16.7/25 \\approx -0.67$, $m_{\\text{total}} = (-1)(-0.67) = +0.67$.',
        explanation: '$d_{i1} = 30$ cm. $m_1 = -1$. $d_{o2} = 55 - 30 = 25$ cm. $\\frac{1}{d_{i2}} = \\frac{1}{10} - \\frac{1}{25} = \\frac{3}{50}$, so $d_{i2} \\approx 16.7$ cm. $m_2 = -16.7/25 \\approx -0.67$. $m_{\\text{total}} = (-1)(-0.67) = +0.67$. The final image is real, upright (relative to the object), and reduced.'
      }
    },
    {
      id: 'ln5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'In a compound microscope, the objective lens produces:',
            options: [
              'A virtual, reduced image',
              'A real, enlarged image',
              'A virtual, enlarged image',
              'A real, reduced image'
            ],
            correctAnswer: 1,
            explanation: 'The objective lens has the specimen just outside its focal length (Case 3: $f < d_o < 2f$), producing a real, inverted, enlarged image inside the tube.'
          },
          {
            question: 'If the image from lens 1 forms past lens 2 (i.e., $d_{i1} > L$), then for lens 2 the object is:',
            options: [
              'Real, with positive $d_{o2}$',
              'Virtual, with negative $d_{o2}$',
              'At infinity',
              'Nonexistent'
            ],
            correctAnswer: 1,
            explanation: '$d_{o2} = L - d_{i1}$. If $d_{i1} > L$, then $d_{o2} < 0$ — a virtual object for lens 2. The light was converging toward a point past lens 2 when it was intercepted.'
          }
        ]
      }
    }
  ]
}
