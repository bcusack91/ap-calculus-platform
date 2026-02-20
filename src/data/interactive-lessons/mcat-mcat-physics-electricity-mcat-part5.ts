export const mcatPhysElecPart5Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe5-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 5 of 7 — Lenses & Mirrors**

### Thin Lens / Mirror Equation

$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$$

### Magnification

$$m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}$$

- $|m| > 1$: enlarged; $|m| < 1$: reduced
- $m > 0$: upright; $m < 0$: inverted

### Sign Conventions

| Quantity | Positive | Negative |
|----------|----------|----------|
| $d_o$ | Object on same side as incoming light | (Virtual object) |
| $d_i$ | Image on opposite side (real) | Same side as object (virtual) |
| $f$ | Converging (convex lens/concave mirror) | Diverging (concave lens/convex mirror) |

### MCAT Must-Know

- **Concave mirror / Convex lens**: Converging, $f > 0$
- **Convex mirror / Concave lens**: Diverging, $f < 0$, always produces virtual, upright, reduced image`
    },
    {
      id: 'pe5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Lenses & Mirrors** 🎯',
      exercise: {
        questions: [
          {
            question: 'An object is placed 30 cm from a converging lens with $f = 20$ cm. The image distance is:',
            options: ['60 cm (real, inverted)', '12 cm', '-60 cm', '10 cm'],
            correctAnswer: 0,
            explanation: '$1/f = 1/d_o + 1/d_i \\implies 1/20 = 1/30 + 1/d_i \\implies 1/d_i = 1/20 - 1/30 = 3/60 - 2/60 = 1/60$. So $d_i = 60$ cm (positive = real image, on opposite side of lens).'
          },
          {
            question: 'A convex mirror always produces images that are:',
            options: ['Virtual, upright, and reduced', 'Real, inverted, and enlarged', 'Virtual, inverted, and reduced', 'Real, upright, and enlarged'],
            correctAnswer: 0,
            explanation: 'Diverging optical elements (convex mirror, concave lens) ALWAYS produce virtual, upright, reduced images regardless of object position. This is a must-memorize fact.'
          }
        ]
      }
    },
    {
      id: 'pe5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- $1/f = 1/d_o + 1/d_i$ — works for both lenses and mirrors
- Diverging elements ($f < 0$): always virtual, upright, reduced
- Sign of $d_i$ tells you real (+) vs virtual (−)
- Sign of $m$ tells you inverted (−) vs upright (+)`
    }
  ]
};
