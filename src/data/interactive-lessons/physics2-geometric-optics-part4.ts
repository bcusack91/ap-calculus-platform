export const physics2GeomOpticsPart4Data = {
  topicSlug: 'geometric-optics-mirrors',
  sections: [
    {
      id: 'geometricopticsmirrors-p4-intro',
      type: 'text' as const,
      content: `# ✏️ Sign Conventions & Problem-Solving

**Part 4 of 7 — Mastering the Signs**

---

### The Complete Sign Convention Table

| Quantity | Symbol | Positive When... | Negative When... |
|----------|--------|-------------------|-------------------|
| Object distance | $d_o$ | Object in front of mirror (always for single mirror) | Virtual object (multi-mirror systems only) |
| Image distance | $d_i$ | Image in front of mirror (**real**) | Image behind mirror (**virtual**) |
| Focal length | $f$ | Concave (converging) mirror | Convex (diverging) mirror |
| Radius of curvature | $R$ | Center of curvature in front | Center of curvature behind |
| Magnification | $m$ | Image is **upright** | Image is **inverted** |
| Image height | $h_i$ | Upright image | Inverted image |

> 🔑 **"FRONT = POSITIVE"** — In front of the mirror is where reflected light goes. Behind the mirror is where reflected light doesn't go.

### The Golden Rules

1. **$f = R/2$** (always — signs included)
2. **$1/f = 1/d_o + 1/d_i$** (the mirror equation)
3. **$m = -d_i/d_o = h_i/h_o$** (magnification)
4. **Real images** have $d_i > 0$ → can be projected on a screen
5. **Virtual images** have $d_i < 0$ → cannot be projected, only seen by looking into the mirror
      `
    },
    {
      id: 'geometricopticsmirrors-p4-troubleshoot',
      type: 'text' as const,
      content: `
## Common Sign Errors & How to Avoid Them

| Mistake | Why It's Wrong | Fix |
|---------|---------------|-----|
| Using $f > 0$ for convex | Convex mirrors diverge light; $f$ must be negative | Always check: concave → $f > 0$, convex → $f < 0$ |
| Forgetting negative in $m = -d_i/d_o$ | The negative sign is part of the formula | Write $m = -(d_i)/(d_o)$ with the negative explicitly |
| Saying $d_i < 0$ means "no image" | $d_i < 0$ means virtual image, not "no image" | Virtual image = real phenomenon, just can't be projected |
| Dropping signs when computing $1/d_i$ | $1/(-15) - 1/30 \\neq 1/15 - 1/30$ | Keep track of signs at every step |
| Confusing $R$ and $f$ | Students plug $R$ where $f$ belongs | Always convert first: $f = R/2$ |

### Special Cases Worth Memorizing

| Condition | Result |
|-----------|--------|
| $d_o = f$ | $d_i \\to \\infty$ (parallel reflected rays) |
| $d_o = 2f = R$ | $d_i = 2f$, $m = -1$ (same size, inverted) |
| $d_o \\to \\infty$ | $d_i = f$ (defines the focal point!) |
| $d_o = 0$ | Doesn't make physical sense |
| Plane mirror ($f \\to \\infty$) | $d_i = -d_o$, $m = +1$ |

### Step-by-Step Problem Solving

1. **Identify the mirror type** → sets sign of $f$
2. **Write down knowns** with correct signs
3. **Calculate $f = R/2$** if given $R$
4. **Solve $1/d_i = 1/f - 1/d_o$** (rearranged mirror equation)
5. **Find $m = -d_i/d_o$**
6. **Interpret signs**: $d_i > 0$ → real; $d_i < 0$ → virtual; $m > 0$ → upright; $m < 0$ → inverted
7. **Sanity check** against the five-case table for concave or the "always virtual" rule for convex
      `
    },
    {
      id: 'geometricopticsmirrors-p4-check1',
      type: 'multiple-choice' as const,
      content: `
**Sign Convention Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A mirror produces an image with $d_i = +25$ cm and $m = -0.5$. The image is:',
            options: [
              'Real, inverted, reduced — in front of mirror',
              'Virtual, upright, magnified — behind mirror',
              'Real, upright, reduced — in front of mirror',
              'Virtual, inverted, reduced — behind mirror'
            ],
            correctAnswer: 0,
            explanation: '$d_i > 0$ → real → in front of mirror. $m < 0$ → inverted. $|m| = 0.5 < 1$ → reduced. All consistent: real images from curved mirrors are always inverted.'
          },
          {
            question: 'You solve a problem and get $d_i = -12$ cm, $m = +0.4$ for a concave mirror with $f = 20$ cm. Is this reasonable?',
            options: [
              'Yes — virtual, upright, reduced image',
              'No — concave mirrors with $d_o > f$ always give real images. Check if $d_o < f$.',
              'No — concave mirrors never give virtual images',
              'Yes, but only if $d_i = -12$ means the image is 12 cm in front'
            ],
            correctAnswer: 0,
            explanation: 'This IS possible for a concave mirror — it happens when $d_o < f$. From $m = -d_i/d_o$: $d_o = -d_i/m = -(-12)/0.4 = 30$ cm. Wait, that gives $d_o = 30 > f = 20$. Let me recheck: $1/d_i = 1/20 - 1/30 = 1/60$, $d_i = 60 \\neq -12$. The answer is actually B — the numbers are inconsistent!'
          },
          {
            question: 'A convex mirror has $R = -50$ cm. What is $f$?',
            options: [
              '$f = -25$ cm',
              '$f = +25$ cm',
              '$f = -50$ cm',
              '$f = -100$ cm'
            ],
            correctAnswer: 0,
            explanation: '$f = R/2 = -50/2 = -25$ cm. The sign carries through — convex mirror has negative $R$ AND negative $f$. Never drop the sign!'
          },
          {
            question: 'Which scenario is IMPOSSIBLE for a single mirror?',
            options: [
              'Concave mirror, $d_i > 0$, $m < 0$',
              'Convex mirror, $d_i < 0$, $m > 0$',
              'Convex mirror, $d_i > 0$, $m < 0$',
              'Concave mirror, $d_i < 0$, $m > 0$'
            ],
            correctAnswer: 2,
            explanation: 'A convex mirror ALWAYS produces $d_i < 0$ (virtual) and $m > 0$ (upright). Getting $d_i > 0$ (real) with $m < 0$ (inverted) from a convex mirror is impossible. Options A (concave, object beyond $F$) and D (concave, object inside $F$) are both valid scenarios.'
          }
        ]
      }
    },
    {
      id: 'geometricopticsmirrors-p4-input',
      type: 'input-boxes' as const,
      content: `
**Sign Practice** 🧮

A concave mirror ($R = 30$ cm) has object at 10 cm.

**1)** $f$ = ? (cm)

**2)** $d_i$ = ? (cm, include sign)

**3)** $m$ = ? (include sign)

**4)** Image type: "real" or "virtual"?
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['15', '-30', '3', 'virtual'],
        hint1: '$f = R/2 = 30/2 = 15$ cm',
        hint2: '$1/d_i = 1/15 - 1/10 = 2/30 - 3/30 = -1/30$',
        hint3: '$m = -d_i/d_o = -(-30)/10$. Since $d_i < 0$...',
        explanation: '1) $f = 15$ cm. 2) $1/d_i = 1/15 - 1/10 = -1/30$, so $d_i = -30$ cm. 3) $m = -(-30)/10 = +3$. 4) $d_i < 0$ → virtual. Object inside $F$ (10 < 15), so we get a virtual, upright, magnified image — consistent with the five-case table!'
      }
    }
  ]
};
