export const physics2GeomOpticsPart2Data = {
  topicSlug: 'geometric-optics-mirrors',
  sections: [
    {
      id: 'geometricopticsmirrors-p2-intro',
      type: 'text' as const,
      content: `# 🔭 Concave Mirrors

**Part 2 of 7 — Converging Mirrors**

---

### Mirror Equation

$$\\boxed{\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}}$$

For a concave (converging) mirror:
- $f > 0$ (focal point is in front of the mirror)
- $f = R/2$ where $R$ is the radius of curvature

### Magnification

$$m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}$$

| $m$ value | Meaning |
|-----------|---------|
| $m > 0$ | Upright image |
| $m < 0$ | Inverted image |
| $|m| > 1$ | Magnified |
| $|m| < 1$ | Reduced |
| $|m| = 1$ | Same size |
      `
    },
    {
      id: 'geometricopticsmirrors-p2-cases',
      type: 'text' as const,
      content: `
## Image Properties by Object Position

| Object Location | Image Location | Type | Orientation | Size | Example Use |
|----------------|---------------|------|-------------|------|------------|
| Beyond $C$ ($d_o > 2f$) | Between $F$ and $C$ | Real | Inverted | Smaller | — |
| At $C$ ($d_o = 2f$) | At $C$ | Real | Inverted | Same size | — |
| Between $C$ and $F$ | Beyond $C$ | Real | Inverted | Larger | Projector |
| At $F$ ($d_o = f$) | At $\\infty$ | — | — | — | Searchlight/headlight |
| Inside $F$ ($d_o < f$) | Behind mirror | Virtual | Upright | Larger | Makeup/shaving mirror |

> 🔑 **Memory aid:** As the object moves from far away toward $F$, the real image moves farther away and gets bigger. Once the object passes $F$, the image "jumps" to behind the mirror and becomes virtual.

### Why Concave Mirrors Converge Light

Parallel rays hitting a concave mirror all reflect through the focal point $F$. This is because the normal at each point on the curved surface is different, directing reflected rays inward.

### Applications

| Application | Object Position | Image Type |
|------------|----------------|------------|
| Makeup mirror | Inside $F$ | Virtual, magnified |
| Dentist's mirror | Inside $F$ | Virtual, magnified |
| Reflecting telescope | Beyond $C$ | Real, reduced |
| Headlight reflector | At $F$ | Parallel beam |
| Solar furnace | Parallel rays → $F$ | Concentrated energy |
      `
    },
    {
      id: 'geometricopticsmirrors-p2-check1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A concave mirror with $f = 10$ cm. Object at 30 cm. Image distance:',
            options: ['15 cm (real)', '7.5 cm (real)', '30 cm (virtual)', '6 cm (real)'],
            correctAnswer: 0,
            explanation: '$1/d_i = 1/10 - 1/30 = 3/30 - 1/30 = 2/30 = 1/15$. $d_i = 15$ cm. Positive → real image, in front of mirror.'
          },
          {
            question: 'For the above: magnification is:',
            options: ['$-0.5$ (inverted, half-size)', '$+0.5$ (upright, half-size)', '$-2$ (inverted, 2× size)', '$+2$ (upright, 2× size)'],
            correctAnswer: 0,
            explanation: '$m = -d_i/d_o = -15/30 = -0.5$. Negative → inverted; $|m| = 0.5$ → half the size. Object was beyond $C$ (at $2f = 20$ cm), so image is between $F$ and $C$, smaller.'
          },
          {
            question: 'An object placed inside the focal point of a concave mirror produces:',
            options: ['A real, inverted image', 'A virtual, upright, magnified image', 'No image at all', 'A real, upright image'],
            correctAnswer: 1,
            explanation: 'Inside $F$: reflected rays diverge → virtual image behind mirror. $d_i < 0$, so $m = -d_i/d_o > 0$ (upright) and $|m| > 1$ (magnified). This is how makeup/shaving mirrors work!'
          },
          {
            question: 'A concave mirror with $f = 20$ cm. Object at $d_o = 20$ cm (at the focal point). What happens?',
            options: [
              'Real image at $C$',
              'Virtual image behind mirror',
              'No image — reflected rays are parallel and never converge',
              'Image at the mirror surface'
            ],
            correctAnswer: 2,
            explanation: '$1/d_i = 1/20 - 1/20 = 0$, so $d_i \\to \\infty$. The reflected rays are parallel — they never converge (or appear to diverge from a point). This is the principle behind flashlight reflectors: place the bulb at $F$ → parallel beam.'
          }
        ]
      }
    },
    {
      id: 'geometricopticsmirrors-p2-input',
      type: 'input-boxes' as const,
      content: `
**Concave Mirror Calculations** 🧮

A concave mirror has $R = 40$ cm. An object is 30 cm from the mirror.

**1)** Focal length $f$? (in cm)

**2)** Image distance $d_i$? (in cm)

**3)** Magnification $m$? (include sign)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '60', '-2'],
        hint1: '$f = R/2$',
        hint2: '$1/d_i = 1/f - 1/d_o = 1/20 - 1/30$',
        hint3: '$m = -d_i/d_o$',
        explanation: '1) $f = 40/2 = 20$ cm. 2) $1/d_i = 1/20 - 1/30 = 1/60$, so $d_i = 60$ cm. 3) $m = -60/30 = -2$. Image is real, inverted, and 2× magnified.'
      }
    },
    {
      id: 'geometricopticsmirrors-p2-worked',
      type: 'multiple-choice' as const,
      content: `
**Worked Example Extension** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the previous problem ($f = 20$ cm, $d_o = 30$ cm, $d_i = 60$ cm), the object is:',
            options: [
              'Beyond $C$ — so image should be between $F$ and $C$, smaller. Wait, $d_i = 60 > 40 = 2f = C$. Something is wrong!',
              'Between $C$ and $F$ — image beyond $C$, magnified. $d_o = 30$ is between $f = 20$ and $C = 40$. $d_i = 60 > C$. Correct!',
              'Inside $F$ — image should be virtual',
              'At $C$ — image should be same size'
            ],
            correctAnswer: 1,
            explanation: 'Check: $f = 20$, $C = 2f = 40$. Object at $d_o = 30$ is between $F$ and $C$. Table says: image beyond $C$, real, inverted, LARGER. Image at $d_i = 60 > 40 = C$ ✓, $m = -2$ (inverted, 2× larger) ✓. Always verify your answer against the table!'
          }
        ]
      }
    }
  ]
};
