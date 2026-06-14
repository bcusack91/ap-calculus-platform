export const mcatPhysElecPart5Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe5-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 5 of 7 — Lenses & Mirrors**

### Thin Lens / Mirror Equation

$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$

### Magnification

$m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}$

- $|m| > 1$: enlarged; $|m| < 1$: reduced
- $m > 0$: upright; $m < 0$: inverted

### Sign Conventions

| Quantity | Positive | Negative |
|----------|----------|----------|
| $d_o$ | Object on the same side as incoming light | (Virtual object) |
| $d_i$ | Image on the opposite side (real) | Same side as object (virtual) |
| $f$ | Converging (convex lens / concave mirror) | Diverging (concave lens / convex mirror) |

### MCAT Must-Know

- **Concave mirror / Convex lens**: Converging, $f > 0$
- **Convex mirror / Concave lens**: Diverging, $f < 0$, always produces a virtual, upright, reduced image

Power of a lens (diopters) is $P = 1/f$ with $f$ in meters. Always interpret the sign of $d_i$ and $m$ before choosing the image description.`
    },
    {
      id: 'pe5-worked',
      type: 'text' as const,
      content: `### Worked Example — Image from a Converging Lens

An object sits $d_o = 15\\;\\text{cm}$ in front of a converging lens with focal length $f = 10\\;\\text{cm}$. Find the image distance and magnification, then describe the image.

**Step 1 — Apply the thin-lens equation.**

$\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{d_o} = \\frac{1}{10} - \\frac{1}{15}$

**Step 2 — Find a common denominator.**

$\\frac{1}{10} - \\frac{1}{15} = \\frac{3}{30} - \\frac{2}{30} = \\frac{1}{30}$, so $d_i = 30\\;\\text{cm}$.

**Step 3 — Compute the magnification.**

$m = -\\frac{d_i}{d_o} = -\\frac{30}{15} = -2$

**Step 4 — Interpret.** Positive $d_i$ means a REAL image (opposite side of the lens). Negative $m$ means INVERTED, and $|m| = 2$ means it is enlarged $2\\times$. So the image is real, inverted, and twice as tall — the kind of image a projector forms.`
    },
    {
      id: 'pe5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Lenses & Mirrors** 🎯`,
      exercise: {
        questions: [
          {
            question: `An object is placed 30 cm from a converging lens with $f = 20$ cm. The image distance is:`,
            options: [`60 cm (real, inverted)`, `12 cm`, `-60 cm`, `10 cm`],
            correctAnswer: 0,
            explanation: `$1/f = 1/d_o + 1/d_i \\Rightarrow 1/20 = 1/30 + 1/d_i \\Rightarrow 1/d_i = 1/20 - 1/30 = 3/60 - 2/60 = 1/60$. So $d_i = 60$ cm (positive = real image on the opposite side of the lens).`
          },
          {
            question: `A convex mirror always produces images that are:`,
            options: [`Virtual, upright, and reduced`, `Real, inverted, and enlarged`, `Virtual, inverted, and reduced`, `Real, upright, and enlarged`],
            correctAnswer: 0,
            explanation: `Diverging optical elements (convex mirror, concave lens) ALWAYS produce virtual, upright, reduced images regardless of object position. This is a must-memorize fact.`
          },
          {
            question: `For a converging lens, a positive image distance indicates the image is:`,
            options: [`Virtual and upright`, `Real and inverted`, `Virtual and inverted`, `Always reduced`],
            correctAnswer: 1,
            explanation: `Positive $d_i$ means the image forms on the opposite side of the lens, which is a real image and (for a single converging lens) inverted.`
          },
          {
            question: `An object is placed exactly at the focal point of a converging lens ($d_o = f$). The image forms:`,
            options: [`At infinity (rays emerge parallel)`, `At the lens`, `At $2f$`, `At the focal point on the same side`],
            correctAnswer: 0,
            explanation: `$1/d_i = 1/f - 1/d_o = 1/f - 1/f = 0$, so $d_i \\to \\infty$. The refracted rays emerge parallel and no finite image forms — the basis of a collimator.`
          },
          {
            question: `A magnification of $m = +0.5$ describes an image that is:`,
            options: [`Upright and half the object's height`, `Inverted and half the height`, `Upright and twice the height`, `Inverted and twice the height`],
            correctAnswer: 0,
            explanation: `Positive $m$ means upright; $|m| = 0.5 < 1$ means reduced to half height. This is typical of a diverging lens or a convex mirror.`
          },
          {
            question: `A lens has focal length $f = 0.25\\;\\text{m}$. Its power in diopters is:`,
            options: [`$4\\;\\text{D}$`, `$0.25\\;\\text{D}$`, `$2.5\\;\\text{D}$`, `$0.5\\;\\text{D}$`],
            correctAnswer: 0,
            explanation: `Power $P = 1/f = 1/0.25 = 4\\;\\text{diopters}$. A shorter focal length means a more powerful (more strongly converging) lens.`
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
- Sign of $d_i$ tells you real ($+$) vs. virtual ($-$)
- Sign of $m$ tells you inverted ($-$) vs. upright ($+$); $|m|$ gives the size ratio
- Lens power in diopters: $P = 1/f$ with $f$ in meters`
    }
  ]
};
