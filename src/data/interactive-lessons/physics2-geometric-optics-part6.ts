export const physics2GeomOpticsPart6Data = {
  topicSlug: 'geometric-optics-mirrors',
  sections: [
    {
      id: 'geometricopticsmirrors-p6-intro',
      type: 'text' as const,
      content: `# 🔧 Problem-Solving Workshop

**Part 6 of 7 — Multi-Step Mirror Problems**

---

### The LOST Method for Mirror Problems

| Step | Action | Details |
|------|--------|---------|
| **L** — Locate | Identify mirror type and givens | Concave ($f > 0$) or Convex ($f < 0$)? What's given? |
| **O** — Organize | Write sign-correct values | Convert $R \\to f$, assign correct signs |
| **S** — Solve | Apply mirror equation & magnification | $1/d_i = 1/f - 1/d_o$, then $m = -d_i/d_o$ |
| **T** — Test | Verify against expected behavior | Check sign of $d_i$ and $m$; compare to five-case table |

### Common AP Problem Types

1. **Find the image**: Given mirror type, $f$ or $R$, and $d_o$ → find $d_i$, $m$, image properties
2. **Find the object**: Given $d_i$ and $f$ → find $d_o$ (rearrange mirror equation)
3. **Find the focal length**: Given $d_o$ and $d_i$ → find $f$
4. **Multi-step**: Combine with magnification, image height, or real-world constraints
      `
    },
    {
      id: 'geometricopticsmirrors-p6-worked1',
      type: 'text' as const,
      content: `
## Worked Problem 1: Dentist's Mirror

**A dentist uses a concave mirror with $f = 3.0$ cm. She holds it 2.0 cm from a tooth. Describe the image.**

**L**: Concave mirror → $f > 0$. Given: $f = 3.0$ cm, $d_o = 2.0$ cm.

**O**: $d_o = 2.0$ cm < $f = 3.0$ cm → object is inside focal point → expect virtual, upright, magnified.

**S**: 
$$\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{d_o} = \\frac{1}{3.0} - \\frac{1}{2.0} = \\frac{2 - 3}{6.0} = \\frac{-1}{6.0}$$
$$d_i = -6.0 \\text{ cm}$$
$$m = -\\frac{d_i}{d_o} = -\\frac{-6.0}{2.0} = +3.0$$

**T**: $d_i < 0$ → virtual ✓. $m > 0$ → upright ✓. $|m| = 3$ → 3× magnified ✓. Matches "inside $F$" case. ✅

The dentist sees a virtual, upright image that is 3× larger — perfect for examining small features.

---

## Worked Problem 2: Car Side Mirror

**A convex mirror on a car ($R = -1.2$ m) shows a car 20 m behind. How tall does a 1.5 m tall car appear?**

$$f = R/2 = -0.60 \\text{ m}$$
$$\\frac{1}{d_i} = \\frac{1}{-0.60} - \\frac{1}{20} = -1.667 - 0.050 = -1.717$$
$$d_i = -0.582 \\text{ m}$$
$$m = -\\frac{-0.582}{20} = +0.029$$
$$h_i = m \\cdot h_o = 0.029 \\times 1.5 = 0.044 \\text{ m} = 4.4 \\text{ cm}$$

A 1.5 m car appears only 4.4 cm tall in the mirror — demonstrating why "objects are closer than they appear"!
      `
    },
    {
      id: 'geometricopticsmirrors-p6-check1',
      type: 'multiple-choice' as const,
      content: `
**Problem-Solving Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A concave mirror with $f = 12$ cm produces an image at $d_i = 24$ cm. Where is the object?',
            options: [
              '$d_o = 24$ cm',
              '$d_o = 8$ cm',
              '$d_o = 36$ cm',
              '$d_o = 12$ cm'
            ],
            correctAnswer: 0,
            explanation: '$1/d_o = 1/f - 1/d_i = 1/12 - 1/24 = 2/24 - 1/24 = 1/24$, so $d_o = 24$ cm. Object at $C$ (= $2f = 24$), image at $C$ — the symmetric case where $m = -1$.'
          },
          {
            question: 'A 5.0 cm tall object is placed 15 cm from a concave mirror ($f = 10$ cm). What is the image height?',
            options: [
              '$h_i = -10$ cm',
              '$h_i = +10$ cm',
              '$h_i = -3.3$ cm',
              '$h_i = +3.3$ cm'
            ],
            correctAnswer: 0,
            explanation: '$1/d_i = 1/10 - 1/15 = 3/30 - 2/30 = 1/30$, $d_i = 30$ cm. $m = -30/15 = -2$. $h_i = m \\cdot h_o = -2 \\times 5.0 = -10$ cm. Negative height → inverted. The image is 10 cm tall and inverted.'
          },
          {
            question: 'You need a mirror that produces a virtual image exactly 2× the object size. Which setup works?',
            options: [
              'Concave, $d_o = f/2$',
              'Concave, $d_o = 2f$',
              'Convex, $d_o = f/2$',
              'Convex mirrors cannot produce magnified images'
            ],
            correctAnswer: 0,
            explanation: 'Need $m = +2$ (virtual, upright, 2× magnified) → concave with object inside $F$. $m = -d_i/d_o = 2$ → $d_i = -2d_o$. Substituting: $1/f = 1/d_o + 1/(-2d_o) = 1/d_o - 1/(2d_o) = 1/(2d_o)$. So $d_o = f/2$. Place object at half the focal length!'
          },
          {
            question: 'A concave mirror has $f = 20$ cm. An object is at 60 cm. If the object moves to 40 cm, the image:',
            options: [
              'Moves closer to the mirror and gets smaller',
              'Moves farther from the mirror and gets larger',
              'Stays the same — same mirror, same image',
              'Becomes virtual'
            ],
            correctAnswer: 1,
            explanation: 'At $d_o = 60$: $d_i = 30$ cm, $m = -0.5$. At $d_o = 40$: $d_i = 40$ cm, $m = -1$. Image moved from 30 to 40 cm (farther) and grew from 0.5× to 1× (larger). As the object moves toward $C$, the image also moves toward $C$ and grows.'
          }
        ]
      }
    },
    {
      id: 'geometricopticsmirrors-p6-input',
      type: 'input-boxes' as const,
      content: `
**Challenge Problem** 🧮

A concave makeup mirror ($f = 25$ cm) is held 15 cm from your face.

**1)** Image distance $d_i$? (cm, include sign)

**2)** Magnification $m$?

**3)** If your nose is 3.0 cm wide, how wide does it appear in the mirror? (cm)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-37.5', '2.5', '7.5'],
        hint1: '$1/d_i = 1/25 - 1/15 = 3/75 - 5/75 = -2/75$',
        hint2: '$m = -d_i/d_o$',
        hint3: '$h_i = |m| \\times h_o$',
        explanation: '1) $d_i = -75/2 = -37.5$ cm (virtual — behind mirror). 2) $m = -(-37.5)/15 = +2.5$ (upright, magnified). 3) Apparent width = $2.5 \\times 3.0 = 7.5$ cm. Your nose looks 2.5× bigger — classic makeup mirror effect!'
      }
    }
  ]
};
