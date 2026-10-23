const figSinSquared = {
  svg: '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><title>y = sin squared x on [0, 2 pi]: a sinusoid between 0 and 1 with midline y = 1/2, peaks at pi/2 and 3 pi/2 and period pi; the dashed curve is y = sin x for comparison</title><g class="fig-muted"><line x1="28" y1="88.2" x2="326" y2="88.2" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/></g><g stroke="currentColor" stroke-width="1.4"><line x1="22" y1="135.9" x2="330" y2="135.9"/><line x1="28" y1="178" x2="28" y2="8"/></g><text x="332" y="139.9" font-size="12" fill="currentColor">x</text><text x="34" y="10" font-size="12" fill="currentColor">y</text><line x1="102.5" y1="132.9" x2="102.5" y2="138.9" stroke="currentColor" stroke-width="1"/><text x="102.5" y="149.9" font-size="10.5" fill="currentColor" text-anchor="middle">π/2</text><line x1="177" y1="132.9" x2="177" y2="138.9" stroke="currentColor" stroke-width="1"/><text x="177" y="149.9" font-size="10.5" fill="currentColor" text-anchor="middle">π</text><line x1="251.5" y1="132.9" x2="251.5" y2="138.9" stroke="currentColor" stroke-width="1"/><text x="251.5" y="149.9" font-size="10.5" fill="currentColor" text-anchor="middle">3π/2</text><line x1="326" y1="132.9" x2="326" y2="138.9" stroke="currentColor" stroke-width="1"/><text x="326" y="149.9" font-size="10.5" fill="currentColor" text-anchor="middle">2π</text><line x1="25" y1="88.2" x2="31" y2="88.2" stroke="currentColor" stroke-width="1"/><text x="22" y="91.7" font-size="10.5" fill="currentColor" text-anchor="end">1/2</text><line x1="25" y1="40.6" x2="31" y2="40.6" stroke="currentColor" stroke-width="1"/><text x="22" y="44.1" font-size="10.5" fill="currentColor" text-anchor="end">1</text><g class="fig-accent"><path d="M 28 135.9 L 29.2 135.8 L 30.5 135.6 L 31.7 135.3 L 33 134.8 L 34.2 134.3 L 35.5 133.6 L 36.7 132.7 L 37.9 131.8 L 39.2 130.7 L 40.4 129.5 L 41.7 128.2 L 42.9 126.8 L 44.1 125.3 L 45.4 123.6 L 46.6 121.9 L 47.9 120.1 L 49.1 118.2 L 50.3 116.2 L 51.6 114.2 L 52.8 112.1 L 54.1 109.9 L 55.3 107.6 L 56.6 105.3 L 57.8 103 L 59 100.6 L 60.3 98.1 L 61.5 95.7 L 62.8 93.2 L 64 90.7 L 65.2 88.2 L 66.5 85.7 L 67.7 83.3 L 69 80.8 L 70.2 78.3 L 71.5 75.9 L 72.7 73.5 L 73.9 71.2 L 75.2 68.9 L 76.4 66.6 L 77.7 64.4 L 78.9 62.3 L 80.2 60.2 L 81.4 58.3 L 82.6 56.4 L 83.9 54.5 L 85.1 52.8 L 86.4 51.2 L 87.6 49.7 L 88.8 48.3 L 90.1 47 L 91.3 45.8 L 92.6 44.7 L 93.8 43.8 L 95 42.9 L 96.3 42.2 L 97.5 41.6 L 98.8 41.2 L 100 40.8 L 101.3 40.7 L 102.5 40.6 L 103.7 40.7 L 105 40.8 L 106.2 41.2 L 107.5 41.6 L 108.7 42.2 L 110 42.9 L 111.2 43.8 L 112.4 44.7 L 113.7 45.8 L 114.9 47 L 116.2 48.3 L 117.4 49.7 L 118.6 51.2 L 119.9 52.8 L 121.1 54.5 L 122.4 56.4 L 123.6 58.3 L 124.9 60.2 L 126.1 62.3 L 127.3 64.4 L 128.6 66.6 L 129.8 68.9 L 131.1 71.2 L 132.3 73.5 L 133.5 75.9 L 134.8 78.3 L 136 80.8 L 137.3 83.3 L 138.5 85.7 L 139.8 88.2 L 141 90.7 L 142.2 93.2 L 143.5 95.7 L 144.7 98.1 L 146 100.6 L 147.2 103 L 148.4 105.3 L 149.7 107.6 L 150.9 109.9 L 152.2 112.1 L 153.4 114.2 L 154.6 116.2 L 155.9 118.2 L 157.1 120.1 L 158.4 121.9 L 159.6 123.6 L 160.9 125.3 L 162.1 126.8 L 163.3 128.2 L 164.6 129.5 L 165.8 130.7 L 167.1 131.8 L 168.3 132.7 L 169.5 133.6 L 170.8 134.3 L 172 134.8 L 173.3 135.3 L 174.5 135.6 L 175.8 135.8 L 177 135.9 L 178.2 135.8 L 179.5 135.6 L 180.7 135.3 L 182 134.8 L 183.2 134.3 L 184.5 133.6 L 185.7 132.7 L 186.9 131.8 L 188.2 130.7 L 189.4 129.5 L 190.7 128.2 L 191.9 126.8 L 193.1 125.3 L 194.4 123.6 L 195.6 121.9 L 196.9 120.1 L 198.1 118.2 L 199.3 116.2 L 200.6 114.2 L 201.8 112.1 L 203.1 109.9 L 204.3 107.6 L 205.6 105.3 L 206.8 103 L 208 100.6 L 209.3 98.1 L 210.5 95.7 L 211.8 93.2 L 213 90.7 L 214.2 88.2 L 215.5 85.7 L 216.7 83.3 L 218 80.8 L 219.2 78.3 L 220.5 75.9 L 221.7 73.5 L 222.9 71.2 L 224.2 68.9 L 225.4 66.6 L 226.7 64.4 L 227.9 62.3 L 229.2 60.2 L 230.4 58.3 L 231.6 56.4 L 232.9 54.5 L 234.1 52.8 L 235.4 51.2 L 236.6 49.7 L 237.8 48.3 L 239.1 47 L 240.3 45.8 L 241.6 44.7 L 242.8 43.8 L 244 42.9 L 245.3 42.2 L 246.5 41.6 L 247.8 41.2 L 249 40.8 L 250.3 40.7 L 251.5 40.6 L 252.7 40.7 L 254 40.8 L 255.2 41.2 L 256.5 41.6 L 257.7 42.2 L 259 42.9 L 260.2 43.8 L 261.4 44.7 L 262.7 45.8 L 263.9 47 L 265.2 48.3 L 266.4 49.7 L 267.6 51.2 L 268.9 52.8 L 270.1 54.5 L 271.4 56.4 L 272.6 58.3 L 273.9 60.2 L 275.1 62.3 L 276.3 64.4 L 277.6 66.6 L 278.8 68.9 L 280.1 71.2 L 281.3 73.5 L 282.5 75.9 L 283.8 78.3 L 285 80.8 L 286.3 83.3 L 287.5 85.7 L 288.8 88.2 L 290 90.7 L 291.2 93.2 L 292.5 95.7 L 293.7 98.1 L 295 100.6 L 296.2 103 L 297.4 105.3 L 298.7 107.6 L 299.9 109.9 L 301.2 112.1 L 302.4 114.2 L 303.7 116.2 L 304.9 118.2 L 306.1 120.1 L 307.4 121.9 L 308.6 123.6 L 309.9 125.3 L 311.1 126.8 L 312.3 128.2 L 313.6 129.5 L 314.8 130.7 L 316.1 131.8 L 317.3 132.7 L 318.6 133.6 L 319.8 134.3 L 321 134.8 L 322.3 135.3 L 323.5 135.6 L 324.8 135.8 L 326 135.9" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></g><g class="fig-muted"><path d="M 28 135.9 L 29.5 132.9 L 31 129.9 L 32.5 126.9 L 34 123.9 L 35.5 121 L 36.9 118 L 38.4 115.1 L 39.9 112.2 L 41.4 109.3 L 42.9 106.4 L 44.4 103.6 L 45.9 100.8 L 47.4 98 L 48.9 95.3 L 50.3 92.6 L 51.8 90 L 53.3 87.4 L 54.8 84.8 L 56.3 82.3 L 57.8 79.9 L 59.3 77.5 L 60.8 75.1 L 62.3 72.9 L 63.8 70.6 L 65.2 68.5 L 66.7 66.4 L 68.2 64.4 L 69.7 62.5 L 71.2 60.6 L 72.7 58.8 L 74.2 57.1 L 75.7 55.4 L 77.2 53.9 L 78.7 52.4 L 80.2 51 L 81.6 49.7 L 83.1 48.4 L 84.6 47.3 L 86.1 46.2 L 87.6 45.3 L 89.1 44.4 L 90.6 43.6 L 92.1 42.9 L 93.6 42.3 L 95 41.8 L 96.5 41.3 L 98 41 L 99.5 40.8 L 101 40.6 L 102.5 40.6 L 104 40.6 L 105.5 40.8 L 107 41 L 108.5 41.3 L 110 41.8 L 111.4 42.3 L 112.9 42.9 L 114.4 43.6 L 115.9 44.4 L 117.4 45.3 L 118.9 46.2 L 120.4 47.3 L 121.9 48.4 L 123.4 49.7 L 124.9 51 L 126.3 52.4 L 127.8 53.9 L 129.3 55.4 L 130.8 57.1 L 132.3 58.8 L 133.8 60.6 L 135.3 62.5 L 136.8 64.4 L 138.3 66.4 L 139.8 68.5 L 141.2 70.6 L 142.7 72.9 L 144.2 75.1 L 145.7 77.5 L 147.2 79.9 L 148.7 82.3 L 150.2 84.8 L 151.7 87.4 L 153.2 90 L 154.6 92.6 L 156.1 95.3 L 157.6 98 L 159.1 100.8 L 160.6 103.6 L 162.1 106.4 L 163.6 109.3 L 165.1 112.2 L 166.6 115.1 L 168.1 118 L 169.5 121 L 171 123.9 L 172.5 126.9 L 174 129.9 L 175.5 132.9 L 177 135.9 L 178.5 138.9 L 180 141.9 L 181.5 144.9 L 183 147.8 L 184.5 150.8 L 185.9 153.7 L 187.4 156.7 L 188.9 159.6 L 190.4 162.5 L 191.9 165.3 L 193.4 168.2 L 194.9 171 L 196.4 173.7 M 306.6 173.7 L 308.1 171 L 309.6 168.2 L 311.1 165.3 L 312.6 162.5 L 314.1 159.6 L 315.6 156.7 L 317.1 153.7 L 318.6 150.8 L 320 147.8 L 321.5 144.9 L 323 141.9 L 324.5 138.9 L 326 135.9" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" stroke-dasharray="3 3"/></g><g class="fig-accent"><circle cx="102.5" cy="40.6" r="4" fill="currentColor"/></g><g class="fig-accent"><circle cx="251.5" cy="40.6" r="4" fill="currentColor"/></g><g class="fig-accent"><circle cx="177" cy="135.9" r="4" fill="currentColor"/></g><g class="fig-accent"><text x="32.7" y="21.5" font-size="11.5" fill="currentColor" text-anchor="start">y = sin²x</text></g><g class="fig-muted"><text x="269.1" y="102.2" font-size="10.5" fill="currentColor" text-anchor="start">midline y = 1/2</text></g><g class="fig-accent"><text x="110.5" y="36.6" font-size="10.5" fill="currentColor" text-anchor="start">period π</text></g></svg>',
  alt: 'Graph of y = sin squared x on [0, 2 pi]: a sinusoid that runs between 0 and 1, with a dashed midline at y = 1/2, maximum points at x = pi/2 and x = 3 pi/2, a minimum at x = pi, and period pi. The dashed curve y = sin x is drawn for comparison.',
  caption: 'Figure 1. $y = \\sin^2 x = \\frac{1}{2} - \\frac{1}{2}\\cos 2x$ is a sinusoid with midline $y = \\frac{1}{2}$, amplitude $\\frac{1}{2}$ and period $\\pi$.',
}

export const precalcTrigIdentitiesPart5Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# ✖️ Trigonometric Identities — Double-Angle Identities

**Part 5 of 7 — Double-Angle Identities**

**Double-angle** identities express $\\sin 2\\theta$ and $\\cos 2\\theta$ in terms of $\\sin\\theta$ and $\\cos\\theta$. They let you evaluate, rewrite, and solve when an expression mixes $2\\theta$ with $\\theta$.

### Double-Angle Identities

$$\\boxed{\\sin 2\\theta = 2\\sin\\theta\\cos\\theta}$$

$$\\boxed{\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta}$$

> **Why three forms for $\\cos 2\\theta$?** Each is best in different situations:

| Form | Best when you know … |
|:-----|:--------------------|
| $\\cos^2\\theta - \\sin^2\\theta$ | Both $\\sin\\theta$ and $\\cos\\theta$ |
| $2\\cos^2\\theta - 1$ | Only $\\cos\\theta$ |
| $1 - 2\\sin^2\\theta$ | Only $\\sin\\theta$ |

### Where They Come From

Double-angle identities are the **sum identities** of Part 4 with $B = A$:

$$\\sin(A + A) = \\sin A\\cos A + \\cos A\\sin A = 2\\sin A\\cos A$$

$$\\cos(A + A) = \\cos A\\cos A - \\sin A\\sin A = \\cos^2 A - \\sin^2 A$$

The other two forms replace $\\sin^2 A$ or $\\cos^2 A$ using the Pythagorean identity.

> Half-angle identities and the tangent double-angle identity are not assessed on the AP Precalculus exam.
      `
    },
    {
      id: 'p5-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Given $\\sin\\theta = \\frac{3}{5}$ with $\\theta$ in QI, find $\\sin 2\\theta$

Since $\\sin\\theta = 3/5$ and QI: $\\cos\\theta = 4/5$.

$$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2 \\cdot \\frac{3}{5} \\cdot \\frac{4}{5} = \\frac{24}{25}$$

### Example 2: Find $\\cos 2\\theta$ given $\\cos\\theta = -\\frac{1}{3}$

Use the form that only needs $\\cos\\theta$ (no quadrant is needed, because cosine gets squared):

$$\\cos 2\\theta = 2\\cos^2\\theta - 1 = 2\\left(\\frac{1}{9}\\right) - 1 = \\frac{2}{9} - 1 = -\\frac{7}{9}$$

### Example 3: Step zero — find the missing ratio, then locate $2\\theta$

Given $\\sin\\theta = \\frac{5}{13}$ with $\\theta$ in Quadrant II. The Pythagorean identity and the quadrant give $\\cos\\theta = -\\sqrt{1 - \\frac{25}{169}} = -\\frac{12}{13}$ (the negative sign comes from the quadrant, not the arithmetic).

$$\\sin 2\\theta = 2\\cdot\\frac{5}{13}\\cdot\\left(-\\frac{12}{13}\\right) = -\\frac{120}{169} \\qquad \\cos 2\\theta = 1 - 2\\cdot\\frac{25}{169} = \\frac{119}{169}$$

Sine negative and cosine positive put $2\\theta$ in **Quadrant IV**.

> ⚠️ Doubling an angle can move it to a different quadrant. Never assume $2\\theta$ shares the quadrant of $\\theta$.

### Example 4: Solve $\\sin 2\\theta = \\sin\\theta$ on $[0, 2\\pi)$

Rewrite so every term uses the same angle, then factor. Never divide by $\\sin\\theta$, because that loses the solutions where $\\sin\\theta = 0$.

$$2\\sin\\theta\\cos\\theta - \\sin\\theta = 0 \\implies \\sin\\theta\\,(2\\cos\\theta - 1) = 0$$

- $\\sin\\theta = 0$: $\\theta = 0, \\pi$
- $\\cos\\theta = \\frac{1}{2}$: $\\theta = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$

**Solutions:** $\\theta = 0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$ (Part 6 does more of these.)
      `
    },
    {
      id: 'p5-recognize',
      type: 'text' as const,
      content: `
## 🔁 Reading the Identities Backwards

Problems often do not say "use the double-angle identity". They show an expression like $2\\sin 3x\\cos 3x$ and expect you to **recognize** it. Read each identity right-to-left: whatever is inside becomes the "$\\theta$", and the angle doubles.

| If you see … | It equals … | Why |
|:-------------|:------------|:----|
| $2\\sin\\alpha\\cos\\alpha$ | $\\sin 2\\alpha$ | the $\\sin 2\\theta$ pattern with $\\theta = \\alpha$ |
| $\\cos^2\\alpha - \\sin^2\\alpha$ | $\\cos 2\\alpha$ | first form of $\\cos 2\\theta$ |
| $1 - 2\\sin^2\\alpha$ | $\\cos 2\\alpha$ | third form of $\\cos 2\\theta$ |
| $2\\cos^2\\alpha - 1$ | $\\cos 2\\alpha$ | second form of $\\cos 2\\theta$ |
| $\\sin\\alpha\\cos\\alpha$ | $\\frac{1}{2}\\sin 2\\alpha$ | half of the $\\sin 2\\theta$ pattern |

**Example:** $2\\sin 3x\\cos 3x = \\sin(2\\cdot 3x) = \\sin 6x$. Here $\\alpha = 3x$, so $2\\alpha = 6x$.

### Sometimes You Must Factor First

The pattern is often hidden until you pull out a constant:

$$6\\sin\\theta\\cos\\theta = 3\\,(2\\sin\\theta\\cos\\theta) = 3\\sin 2\\theta \\qquad 4\\cos^2\\theta - 2 = 2\\,(2\\cos^2\\theta - 1) = 2\\cos 2\\theta$$

> ⚠️ **Don't force it.** $2\\cos^2\\theta - 1$ is a double angle, but $2\\cos^2\\theta + 1$ is **not**: the $-1$ is essential.
      `
    },
    {
      id: 'p5-sinusoid',
      type: 'text' as const,
      figure: figSinSquared,
      content: `
## 📈 Squared Sines and Cosines as Sinusoids

Solve the $\\cos 2\\theta$ identity for the squared term:

$$\\sin^2 x = \\frac{1 - \\cos 2x}{2} = \\frac{1}{2} - \\frac{1}{2}\\cos 2x \\qquad\\qquad \\cos^2 x = \\frac{1 + \\cos 2x}{2} = \\frac{1}{2} + \\frac{1}{2}\\cos 2x$$

The squared function on the left becomes a **first-power** cosine of the **doubled** angle on the right, plus a constant. So $y = \\sin^2 x$ is a sinusoid, and you can read its features exactly as for any $y = a\\cos(bx) + d$:

| Feature | $y = \\sin^2 x$ | Reason |
|:--------|:---------------|:-------|
| Midline | $y = \\frac{1}{2}$ | the constant term |
| Amplitude | $\\frac{1}{2}$ | $\\lvert -\\frac{1}{2} \\rvert$ |
| Period | $\\pi$ | $\\frac{2\\pi}{2}$ |
| Range | $0 \\le y \\le 1$ | midline $\\pm$ amplitude |

The period is $\\pi$, **half** the period of $\\sin x$: squaring makes every negative value positive, so the graph repeats twice as often (see Figure 1).

**Example:** $y = 6\\cos^2(3x) = 6\\cdot\\frac{1 + \\cos 6x}{2} = 3 + 3\\cos 6x$: midline $y = 3$, amplitude $3$, period $\\frac{2\\pi}{6} = \\frac{\\pi}{3}$, range $0 \\le y \\le 6$.

> ⚠️ The inside angle **doubles** ($3x$ becomes $6x$). Forgetting the doubling gives the wrong period, which is the usual error here.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which form of $\\cos 2\\theta$ should you use if you only know $\\sin\\theta$?',
            options: [
              '$\\cos^2\\theta - \\sin^2\\theta$',
              '$2\\cos^2\\theta - 1$',
              '$1 - 2\\sin^2\\theta$',
              '$1 - 2\\cos^2\\theta$'
            ],
            correctAnswer: 2,
            explanation: '$1 - 2\\sin^2\\theta$ uses only $\\sin\\theta$, so it is the best choice when $\\cos\\theta$ is unknown. $1 - 2\\cos^2\\theta$ is not equal to $\\cos 2\\theta$ at all (it is $-\\cos 2\\theta$).'
          },
          {
            question: 'Which expression is equal to $2\\cos^2\\!\\left(\\frac{x}{2}\\right) - 1$?',
            options: [
              '$\\cos x$',
              '$\\cos 2x$',
              '$\\cos\\frac{x}{4}$',
              '$\\sin x$'
            ],
            correctAnswer: 0,
            explanation: '$2\\cos^2\\alpha - 1 = \\cos 2\\alpha$ with $\\alpha = \\frac{x}{2}$, so the angle doubles to $x$ and the expression equals $\\cos x$. Doubling twice gives $\\cos 2x$, halving gives $\\cos\\frac{x}{4}$, and the sine pattern needs a product $\\sin\\alpha\\cos\\alpha$.'
          },
          {
            question: 'To solve $\\cos 2\\theta + \\sin\\theta = 0$, which replacement for $\\cos 2\\theta$ produces a quadratic in $\\sin\\theta$?',
            options: [
              '$2\\cos^2\\theta - 1$',
              '$\\cos^2\\theta - \\sin^2\\theta$',
              '$1 - 2\\sin^2\\theta$',
              '$2\\sin\\theta\\cos\\theta$'
            ],
            correctAnswer: 2,
            explanation: 'Replacing $\\cos 2\\theta$ with $1 - 2\\sin^2\\theta$ gives $-2\\sin^2\\theta + \\sin\\theta + 1 = 0$, an equation in $\\sin\\theta$ alone. The other forms leave a cosine in the equation or are not equal to $\\cos 2\\theta$.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Double-Angle Computation** 🧮

**1)** If $\\cos\\theta = \\frac{8}{17}$ and $\\theta$ is in Quadrant IV, find $\\sin 2\\theta$. Write as a fraction. (e.g., if $\\sin\\theta = 3/5, \\cos\\theta = 4/5$, then $\\sin 2\\theta = 2(3/5)(4/5) = 24/25$)

**2)** Find $\\cos 2\\theta$ if $\\sin\\theta = \\frac{1}{4}$. Write as a fraction. (e.g., if $\\sin\\theta = \\frac{3}{5}$: $\\cos 2\\theta = 1 - 2(3/5)^2 = 1 - 18/25 = 7/25$)

**3)** $y = 4\\sin^2(3x)$ is a sinusoid. What is its period? Enter the coefficient of $\\pi$ (type \`1/2\` for $\\frac{\\pi}{2}$). (e.g., $y = \\cos^2 x$ has period $\\pi$, coefficient \`1\`)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-240/289', '7/8', '1/3'],
        hint1: 'In Quadrant IV sine is negative: $\\sin\\theta = -\\sqrt{1 - \\frac{64}{289}} = -\\frac{15}{17}$. Then $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$.',
        hint2: 'Use $\\cos 2\\theta = 1 - 2\\sin^2\\theta = 1 - 2(1/4)^2 = 1 - 2/16 = 1 - 1/8$.',
        hint3: '$4\\sin^2(3x) = 4\\cdot\\frac{1 - \\cos 6x}{2} = 2 - 2\\cos 6x$. The period of $\\cos 6x$ is $\\frac{2\\pi}{6}$.',
        explanation: '1) $2\\left(-\\frac{15}{17}\\right)\\left(\\frac{8}{17}\\right) = -\\frac{240}{289}$. 2) $1 - 2(1/16) = 1 - 1/8 = 7/8$. 3) $2 - 2\\cos 6x$ has period $\\frac{2\\pi}{6} = \\frac{\\pi}{3}$, coefficient $\\frac{1}{3}$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Formula Recognition** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$10\\sin\\theta\\cos\\theta$ is equal to',
            options: ['$10\\sin 2\\theta$', '$5\\sin 2\\theta$', '$20\\sin 2\\theta$', '$5\\sin\\theta$']
          },
          {
            label: '$\\cos^2 4x - \\sin^2 4x$ is equivalent to',
            options: ['$\\sin 8x$', '$\\cos 8x$', '$\\cos 2x$', '$1$']
          },
          {
            label: 'Solving $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ for $\\sin^2\\theta$ gives',
            options: ['$\\frac{1+\\cos 2\\theta}{2}$', '$\\frac{1-\\cos 2\\theta}{2}$', '$\\frac{\\sin 2\\theta}{2}$', '$1 - \\cos\\theta$']
          },
          {
            label: 'On $[0, 2\\pi)$, the equation $\\cos 2\\theta = \\cos\\theta$ has this many solutions:',
            options: ['$2$', '$3$', '$4$', '$6$']
          }
        ],
        correctAnswers: ['$5\\sin 2\\theta$', '$\\cos 8x$', '$\\frac{1-\\cos 2\\theta}{2}$', '$3$'],
        hint1: 'Factor out the $2$ the identity needs: $10\\sin\\theta\\cos\\theta = 5(2\\sin\\theta\\cos\\theta)$.',
        hint2: '$\\cos^2\\alpha - \\sin^2\\alpha = \\cos 2\\alpha$ with $\\alpha = 4x$, so the angle doubles.',
        hint3: '$\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}$ (the minus goes with sine). For the last one, write $\\cos 2\\theta = 2\\cos^2\\theta - 1$ and factor $2\\cos^2\\theta - \\cos\\theta - 1$.',
        explanation: '$10\\sin\\theta\\cos\\theta = 5\\sin 2\\theta$. $\\cos^2 4x - \\sin^2 4x = \\cos 8x$. $\\sin^2\\theta = (1-\\cos 2\\theta)/2$. $2\\cos^2\\theta - \\cos\\theta - 1 = (2\\cos\\theta + 1)(\\cos\\theta - 1) = 0$ gives $\\cos\\theta = 1$ or $-\\frac{1}{2}$: $\\theta = 0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$, three solutions.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\cos\\theta = -\\frac{3}{5}$ with $\\theta$ in QII, then $\\cos 2\\theta$ equals:',
            options: [
              '$-\\frac{7}{25}$',
              '$\\frac{7}{25}$',
              '$-\\frac{18}{25}$',
              '$\\frac{18}{25}$'
            ],
            correctAnswer: 0,
            explanation: '$\\cos 2\\theta = 2\\cos^2\\theta - 1 = 2(9/25) - 1 = 18/25 - 1 = -7/25$.'
          },
          {
            question: 'Rewritten as a sinusoid, $y = 4\\cos^2(\\pi x)$ has:',
            options: [
              'Midline $y = 0$, amplitude $4$, period $2$',
              'Midline $y = 2$, amplitude $2$, period $2$',
              'Midline $y = 2$, amplitude $2$, period $1$',
              'Midline $y = 2$, amplitude $4$, period $1$'
            ],
            correctAnswer: 2,
            explanation: '$4\\cos^2(\\pi x) = 4\\cdot\\frac{1 + \\cos 2\\pi x}{2} = 2 + 2\\cos 2\\pi x$: midline $y = 2$, amplitude $2$ and period $\\frac{2\\pi}{2\\pi} = 1$. A period of $2$ forgets to double the angle, amplitude $4$ forgets to halve, and midline $0$ reads the features before rewriting.'
          }
        ]
      }
    }
  ]
};
