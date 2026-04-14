export const physics2GeomOpticsPart7Data = {
  topicSlug: 'geometric-optics-mirrors',
  sections: [
    {
      id: 'geometricopticsmirrors-p7-intro',
      type: 'text' as const,
      content: `# 🧩 Geometric Optics — Synthesis & Review

**Part 7 of 7 — Mixed Mirror Review**

---

### Quick Reference: All Mirror Equations

| Equation | Formula | When to Use |
|----------|---------|-------------|
| Mirror equation | $\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$ | Any mirror problem |
| Focal length from radius | $f = R/2$ | When given $R$ |
| Magnification (distances) | $m = -d_i/d_o$ | Find $m$ from positions |
| Magnification (heights) | $m = h_i/h_o$ | Find image height |
| Law of reflection | $\\theta_i = \\theta_r$ | All mirrors |
| Multiple images (plane) | $n = 360°/\\theta - 1$ | Two plane mirrors at angle $\\theta$ |

### Master Comparison Table

| Property | Plane | Concave | Convex |
|----------|-------|---------|--------|
| $f$ | $\\infty$ | Positive | Negative |
| $R$ | $\\infty$ | Positive | Negative |
| Real image? | Never | Yes (if $d_o > f$) | Never |
| Virtual image? | Always | Yes (if $d_o < f$) | Always |
| Upright image? | Always | Only when virtual | Always |
| Inverted image? | Never | When real | Never |
| Magnified? | Never ($m = 1$) | Yes (possible) | Never ($|m| < 1$) |
| $|m|$ range | Exactly 1 | $0$ to $\\infty$ | $0$ to $1$ |
      `
    },
    {
      id: 'geometricopticsmirrors-p7-connections',
      type: 'text' as const,
      content: `
## Cross-Topic Connections

| Mirror Concept | Connects To... | How |
|---------------|----------------|-----|
| $f = R/2$ | Lenses: $1/f = (n-1)(1/R_1 - 1/R_2)$ | Same focal concept, different formula |
| Virtual image behind mirror | Virtual image on same side as object (lenses) | Virtual = light does not actually pass through image |
| Concave = converging | Convex lens = converging | Same type of image formation, different geometry |
| Convex = diverging | Concave lens = diverging | Both always produce virtual, reduced images |
| Law of reflection | Snell's law | Reflection vs. refraction at boundaries |
| Real image | Interference patterns on screen | Both require actual light convergence |

### AP Exam Tips for Mirrors

| Common AP Question | Key Insight |
|-------------------|-------------|
| Which mirror produces a real image? | Only concave (among mirrors) |
| Describe the image as object moves | Know the five cases for concave; convex always virtual/upright/reduced |
| Draw a ray diagram | Use exactly 2 of 3 principal rays; draw from object tip |
| Calculate image properties | Mirror equation → $d_i$ → magnification → interpret signs |
| Compare mirrors and lenses | Concave mirror ↔ convex lens (converging); convex mirror ↔ concave lens (diverging) |

### Key Distinctions

1. **Real vs. Virtual**: Real images form where light actually converges (projectable). Virtual images form where light *appears* to come from (only visible by looking into the mirror/lens).
2. **Magnification sign vs. magnitude**: Sign tells orientation ($+$ upright, $-$ inverted). Magnitude tells size ($> 1$ larger, $< 1$ smaller, $= 1$ same).
3. **Mirror vs. Lens sign conventions differ**: In mirrors, $d_i > 0$ = same side as object (front). In lenses, $d_i > 0$ = opposite side from object.
      `
    },
    {
      id: 'geometricopticsmirrors-p7-check1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A mirror produces an image that is virtual, upright, and the same size as the object. The mirror is:',
            options: ['Concave', 'Convex', 'Plane (flat)', 'Could be any of the three'],
            correctAnswer: 2,
            explanation: 'Only a plane mirror always produces $m = +1$ (upright, same size, virtual). Concave virtual images are magnified ($|m| > 1$). Convex virtual images are reduced ($|m| < 1$). Only plane gives exactly $|m| = 1$ and virtual.'
          },
          {
            question: 'An object is 10 cm from a concave mirror ($f = 10$ cm). The image is:',
            options: [
              'Real, at 10 cm, same size',
              'Virtual, behind the mirror, magnified',
              'At infinity — no focused image forms',
              'Real, at 20 cm, same size'
            ],
            correctAnswer: 2,
            explanation: '$d_o = f = 10$ cm. $1/d_i = 1/10 - 1/10 = 0$ so $d_i \\to \\infty$. The reflected rays are parallel and never converge. This is the flashlight configuration: place the source at $F$ to produce a parallel beam.'
          },
          {
            question: 'Which combination is IMPOSSIBLE?',
            options: [
              'Concave mirror, real image, $m = -3$ (inverted, magnified)',
              'Convex mirror, virtual image, $m = +0.5$ (upright, reduced)',
              'Concave mirror, virtual image, $m = +2$ (upright, magnified)',
              'Plane mirror, virtual image, $m = -1$ (inverted, same size)'
            ],
            correctAnswer: 3,
            explanation: 'Plane mirrors always give $m = +1$ (upright), never $m = -1$ (inverted). Options A (concave, $d_o$ between $C$ and $F$), B (any convex setup), and C (concave, $d_o < f$) are all physically realizable.'
          },
          {
            question: 'A concave mirror is used as a solar furnace. Where should the material to be heated be placed?',
            options: [
              'At the center of curvature $C$',
              'At the focal point $F$',
              'At the mirror surface',
              'Beyond $C$'
            ],
            correctAnswer: 1,
            explanation: 'Sunlight arrives as parallel rays ($d_o \\to \\infty$). Parallel rays converge at the focal point $F$. This is where energy concentration is maximum — temperatures can exceed 3,000°C in large solar furnaces!'
          }
        ]
      }
    },
    {
      id: 'geometricopticsmirrors-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

A concave mirror with $R = 24$ cm. An object 4.0 cm tall is at 18 cm.

**1)** $f$ = ? (cm)

**2)** $d_i$ = ? (cm)

**3)** $m$ = ?

**4)** $h_i$ = ? (cm, include sign)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['12', '36', '-2', '-8'],
        hint1: '$f = R/2$',
        hint2: '$1/d_i = 1/12 - 1/18 = 3/36 - 2/36 = 1/36$',
        hint3: '$m = -d_i/d_o$',
        hint4: '$h_i = m \\times h_o$',
        explanation: '1) $f = 24/2 = 12$ cm. 2) $d_i = 36$ cm (real, in front). 3) $m = -36/18 = -2$ (inverted, 2x magnified). 4) $h_i = -2 \\times 4.0 = -8.0$ cm (inverted, 8 cm tall). Object between $C$ and $F$ gives image beyond $C$, real, inverted, magnified.'
      }
    },
    {
      id: 'geometricopticsmirrors-p7-trap',
      type: 'multiple-choice' as const,
      content: `
**Tricky AP-Style Question** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An object is placed at the center of curvature of a concave mirror, then moved slightly closer to the mirror. The image:',
            options: [
              'Moves closer to mirror and gets smaller',
              'Moves farther from mirror and gets larger',
              'Stays at $C$ — small movements do not matter',
              'Becomes virtual immediately'
            ],
            correctAnswer: 1,
            explanation: 'At $C$: $d_i = 2f$, $m = -1$. Moving closer (toward $F$): $d_o$ decreases from $2f$, entering the between $C$ and $F$ zone. In this zone, the image moves beyond $C$ (farther) and becomes larger. The image stays real until the object passes $F$.'
          }
        ]
      }
    }
  ]
};
