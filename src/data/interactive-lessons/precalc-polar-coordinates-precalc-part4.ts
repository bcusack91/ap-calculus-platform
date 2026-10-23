const figCardioidPoints = {
  svg: '<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><title>r = 2 + 2 cos theta with eight plotted points</title><g class="fig-muted"><circle cx="130" cy="130" r="25.3" fill="none" stroke="currentColor" stroke-width="0.8"/><circle cx="130" cy="130" r="50.7" fill="none" stroke="currentColor" stroke-width="0.8"/><circle cx="130" cy="130" r="76" fill="none" stroke="currentColor" stroke-width="0.8"/><circle cx="130" cy="130" r="101.3" fill="none" stroke="currentColor" stroke-width="0.8"/><line x1="130" y1="130" x2="244" y2="130" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="228.7" y2="73" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="187" y2="31.3" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="130" y2="16" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="73" y2="31.3" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="31.3" y2="73" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="16" y2="130" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="31.3" y2="187" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="73" y2="228.7" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="130" y2="244" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="187" y2="228.7" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="130" x2="228.7" y2="187" stroke="currentColor" stroke-width="0.6"/></g><g stroke="currentColor" stroke-width="1.3"><line x1="12" y1="130" x2="248" y2="130"/><line x1="130" y1="248" x2="130" y2="12"/></g><text x="156.3" y="141" font-size="9.5" fill="currentColor" text-anchor="middle">1</text><text x="181.7" y="141" font-size="9.5" fill="currentColor" text-anchor="middle">2</text><text x="207" y="141" font-size="9.5" fill="currentColor" text-anchor="middle">3</text><text x="232.3" y="141" font-size="9.5" fill="currentColor" text-anchor="middle">4</text><g class="fig-accent"><path d="M 231.3 130 L 231.3 128.2 L 231.2 126.5 L 231.1 124.7 L 231 122.9 L 230.8 121.2 L 230.5 119.4 L 230.2 117.7 L 229.9 116 L 229.5 114.2 L 229 112.5 L 228.6 110.8 L 228 109.2 L 227.5 107.5 L 226.9 105.8 L 226.2 104.2 L 225.5 102.6 L 224.8 101 L 224 99.5 L 223.2 97.9 L 222.4 96.4 L 221.5 94.9 L 220.5 93.4 L 219.6 92 L 218.6 90.6 L 217.5 89.2 L 216.5 87.8 L 215.4 86.5 L 214.2 85.2 L 213.1 84 L 211.9 82.7 L 210.7 81.5 L 209.4 80.4 L 208.1 79.3 L 206.8 78.2 L 205.5 77.1 L 204.2 76.1 L 202.8 75.2 L 201.4 74.2 L 200 73.3 L 198.5 72.5 L 197.1 71.7 L 195.6 70.9 L 194.2 70.2 L 192.7 69.5 L 191.2 68.8 L 189.6 68.2 L 188.1 67.7 L 186.6 67.2 L 185 66.7 L 183.5 66.2 L 182 65.8 L 180.4 65.5 L 178.8 65.2 L 177.3 64.9 L 175.7 64.7 L 174.2 64.5 L 172.6 64.4 L 171.1 64.3 L 169.5 64.2 L 168 64.2 L 166.5 64.2 L 165 64.3 L 163.4 64.4 L 161.9 64.5 L 160.5 64.7 L 159 64.9 L 157.5 65.1 L 156.1 65.4 L 154.7 65.7 L 153.3 66.1 L 151.9 66.5 L 150.5 66.9 L 149.1 67.4 L 147.8 67.9 L 146.5 68.4 L 145.2 68.9 L 144 69.5 L 142.7 70.1 L 141.5 70.8 L 140.3 71.4 L 139.2 72.1 L 138 72.8 L 136.9 73.6 L 135.8 74.3 L 134.8 75.1 L 133.8 75.9 L 132.8 76.8 L 131.8 77.6 L 130.9 78.5 L 130 79.3 L 129.1 80.2 L 128.3 81.1 L 127.5 82.1 L 126.7 83 L 126 83.9 L 125.3 84.9 L 124.6 85.8 L 123.9 86.8 L 123.3 87.8 L 122.7 88.8 L 122.2 89.8 L 121.7 90.7 L 121.2 91.7 L 120.7 92.7 L 120.3 93.7 L 119.9 94.7 L 119.5 95.7 L 119.2 96.7 L 118.9 97.7 L 118.6 98.7 L 118.3 99.6 L 118.1 100.6 L 117.9 101.6 L 117.8 102.5 L 117.6 103.5 L 117.5 104.4 L 117.4 105.4 L 117.4 106.3 L 117.3 107.2 L 117.3 108.1 L 117.3 108.9 L 117.4 109.8 L 117.4 110.7 L 117.5 111.5 L 117.6 112.3 L 117.7 113.1 L 117.9 113.9 L 118 114.7 L 118.2 115.4 L 118.4 116.1 L 118.6 116.8 L 118.8 117.5 L 119 118.2 L 119.3 118.9 L 119.5 119.5 L 119.8 120.1 L 120 120.7 L 120.3 121.3 L 120.6 121.8 L 120.9 122.4 L 121.2 122.9 L 121.5 123.4 L 121.9 123.9 L 122.2 124.3 L 122.5 124.7 L 122.8 125.2 L 123.1 125.5 L 123.5 125.9 L 123.8 126.3 L 124.1 126.6 L 124.4 126.9 L 124.8 127.2 L 125.1 127.5 L 125.4 127.8 L 125.7 128 L 126 128.2 L 126.3 128.4 L 126.6 128.6 L 126.9 128.8 L 127.1 129 L 127.4 129.1 L 127.6 129.2 L 127.9 129.4 L 128.1 129.5 L 128.3 129.6 L 128.5 129.6 L 128.7 129.7 L 128.9 129.8 L 129.1 129.8 L 129.2 129.9 L 129.4 129.9 L 129.5 129.9 L 129.6 130 L 129.7 130 L 129.8 130 L 129.9 130 L 129.9 130 L 130 130 L 130 130 L 130 130 L 130 130 L 130 130 L 129.9 130 L 129.9 130 L 129.8 130 L 129.7 130 L 129.6 130 L 129.5 130.1 L 129.4 130.1 L 129.2 130.1 L 129.1 130.2 L 128.9 130.2 L 128.7 130.3 L 128.5 130.4 L 128.3 130.4 L 128.1 130.5 L 127.9 130.6 L 127.6 130.8 L 127.4 130.9 L 127.1 131 L 126.9 131.2 L 126.6 131.4 L 126.3 131.6 L 126 131.8 L 125.7 132 L 125.4 132.2 L 125.1 132.5 L 124.8 132.8 L 124.4 133.1 L 124.1 133.4 L 123.8 133.7 L 123.5 134.1 L 123.1 134.5 L 122.8 134.8 L 122.5 135.3 L 122.2 135.7 L 121.9 136.1 L 121.5 136.6 L 121.2 137.1 L 120.9 137.6 L 120.6 138.2 L 120.3 138.7 L 120 139.3 L 119.8 139.9 L 119.5 140.5 L 119.3 141.1 L 119 141.8 L 118.8 142.5 L 118.6 143.2 L 118.4 143.9 L 118.2 144.6 L 118 145.3 L 117.9 146.1 L 117.7 146.9 L 117.6 147.7 L 117.5 148.5 L 117.4 149.3 L 117.4 150.2 L 117.3 151.1 L 117.3 151.9 L 117.3 152.8 L 117.4 153.7 L 117.4 154.6 L 117.5 155.6 L 117.6 156.5 L 117.8 157.5 L 117.9 158.4 L 118.1 159.4 L 118.3 160.4 L 118.6 161.3 L 118.9 162.3 L 119.2 163.3 L 119.5 164.3 L 119.9 165.3 L 120.3 166.3 L 120.7 167.3 L 121.2 168.3 L 121.7 169.3 L 122.2 170.2 L 122.7 171.2 L 123.3 172.2 L 123.9 173.2 L 124.6 174.2 L 125.3 175.1 L 126 176.1 L 126.7 177 L 127.5 177.9 L 128.3 178.9 L 129.1 179.8 L 130 180.7 L 130.9 181.5 L 131.8 182.4 L 132.8 183.2 L 133.8 184.1 L 134.8 184.9 L 135.8 185.7 L 136.9 186.4 L 138 187.2 L 139.2 187.9 L 140.3 188.6 L 141.5 189.2 L 142.7 189.9 L 144 190.5 L 145.2 191.1 L 146.5 191.6 L 147.8 192.1 L 149.1 192.6 L 150.5 193.1 L 151.9 193.5 L 153.3 193.9 L 154.7 194.3 L 156.1 194.6 L 157.5 194.9 L 159 195.1 L 160.5 195.3 L 161.9 195.5 L 163.4 195.6 L 165 195.7 L 166.5 195.8 L 168 195.8 L 169.5 195.8 L 171.1 195.7 L 172.6 195.6 L 174.2 195.5 L 175.7 195.3 L 177.3 195.1 L 178.8 194.8 L 180.4 194.5 L 182 194.2 L 183.5 193.8 L 185 193.3 L 186.6 192.8 L 188.1 192.3 L 189.6 191.8 L 191.2 191.2 L 192.7 190.5 L 194.2 189.8 L 195.6 189.1 L 197.1 188.3 L 198.5 187.5 L 200 186.7 L 201.4 185.8 L 202.8 184.8 L 204.2 183.9 L 205.5 182.9 L 206.8 181.8 L 208.1 180.7 L 209.4 179.6 L 210.7 178.5 L 211.9 177.3 L 213.1 176 L 214.2 174.8 L 215.4 173.5 L 216.5 172.2 L 217.5 170.8 L 218.6 169.4 L 219.6 168 L 220.5 166.6 L 221.5 165.1 L 222.4 163.6 L 223.2 162.1 L 224 160.5 L 224.8 159 L 225.5 157.4 L 226.2 155.8 L 226.9 154.2 L 227.5 152.5 L 228 150.8 L 228.6 149.2 L 229 147.5 L 229.5 145.8 L 229.9 144 L 230.2 142.3 L 230.5 140.6 L 230.8 138.8 L 231 137.1 L 231.1 135.3 L 231.2 133.5 L 231.3 131.8 L 231.3 130" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></g><g class="fig-accent"><circle cx="231.3" cy="130" r="3.5" fill="currentColor"/></g><g class="fig-accent"><circle cx="168" cy="64.2" r="3.5" fill="currentColor"/></g><g class="fig-accent"><circle cx="130" cy="79.3" r="3.5" fill="currentColor"/></g><g class="fig-accent"><circle cx="117.3" cy="108.1" r="3.5" fill="currentColor"/></g><g class="fig-accent"><circle cx="130" cy="130" r="3.5" fill="currentColor"/></g><g class="fig-accent"><circle cx="117.3" cy="151.9" r="3.5" fill="currentColor"/></g><g class="fig-accent"><circle cx="130" cy="180.7" r="3.5" fill="currentColor"/></g><g class="fig-accent"><circle cx="168" cy="195.8" r="3.5" fill="currentColor"/></g><g class="fig-accent"><text x="14" y="16" font-size="12" fill="currentColor" text-anchor="start">r = 2 + 2cos θ</text></g></svg>',
  alt: 'Polar graph of the cardioid r = 2 + 2 cos theta with eight plotted points from the table: (4, 0) on the right, points at angles pi/3, pi/2 and 2 pi/3 with radii 3, 2 and 1 curving up and to the left, the pole at theta = pi, and the mirror-image points below the axis.',
  caption: 'Figure 1. The cardioid $r = 2 + 2\\cos\\theta$ with the table points plotted; the lower half mirrors the upper half.',
}

export const precalcPolarPart4Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 📊 Graphing Polar Equations by Hand

**Part 4 of 7**

Graphing polar equations by hand requires building a table of $(r, \\theta)$ values and plotting points.

### Step-by-Step Process

1. **Make a table** of $\\theta$ values (usually multiples of $\\frac{\\pi}{6}$ or $\\frac{\\pi}{4}$)
2. **Compute** $r$ for each $\\theta$
3. **Plot** each $(r, \\theta)$ point on polar grid
4. **Connect** points with a smooth curve
5. **Check symmetry** to reduce work

### Symmetry Tests

| Symmetry | Test | Replace |
|:---------|:-----|:--------|
| Polar axis ($x$-axis) | Replace $\\theta$ with $-\\theta$ | If same equation: symmetric |
| Line $\\theta = \\frac{\\pi}{2}$ ($y$-axis) | Replace $\\theta$ with $\\pi - \\theta$ | If same equation: symmetric |
| Pole (origin) | Replace $r$ with $-r$, **or** $\\theta$ with $\\theta + \\pi$ | If same equation: symmetric |

> ⚠️ These tests are **sufficient, not necessary**: a passing test proves the symmetry, but a failing test does not rule it out, because a polar point has many names. For example, $r = 3\\sin(2\\theta)$ fails the $-\\theta$ test ($3\\sin(-2\\theta) = -3\\sin 2\\theta$ is a different equation) yet its graph **is** symmetric about the polar axis: the point $(r, \\theta)$ reflects to $(-r, \\pi - \\theta)$, which is also on the curve.
      `
    },
    {
      id: 'p4-example',
      type: 'text' as const,
      figure: figCardioidPoints,
      content: `
## 📝 Graphing $r = 2 + 2\\cos\\theta$ (Cardioid)

### Step 1: Table of Values

| $\\theta$ | $\\cos\\theta$ | $r = 2 + 2\\cos\\theta$ |
|:---------|:-------------|:----------------------|
| $0$ | $1$ | $4$ |
| $\\frac{\\pi}{3}$ | $\\frac{1}{2}$ | $3$ |
| $\\frac{\\pi}{2}$ | $0$ | $2$ |
| $\\frac{2\\pi}{3}$ | $-\\frac{1}{2}$ | $1$ |
| $\\pi$ | $-1$ | $0$ |
| $\\frac{4\\pi}{3}$ | $-\\frac{1}{2}$ | $1$ |
| $\\frac{3\\pi}{2}$ | $0$ | $2$ |
| $\\frac{5\\pi}{3}$ | $\\frac{1}{2}$ | $3$ |
| $2\\pi$ | $1$ | $4$ |

### Step 2: Symmetry Check

Replace $\\theta$ with $-\\theta$: $r = 2 + 2\\cos(-\\theta) = 2 + 2\\cos\\theta$ ✓

Symmetric about the polar axis! Only need to plot $[0, \\pi]$ and reflect (Figure 1).

### Key Feature

Passes through origin at $\\theta = \\pi$ (where $r = 0$).
      `
    },
    {
      id: 'p4-rose-graph',
      type: 'text' as const,
      content: `
## 🌹 Graphing a Rose: $r = 3\\cos(2\\theta)$

### Finding the Petals

Set $r = 0$: $\\cos(2\\theta) = 0 \\implies 2\\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\ldots$

$\\theta = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$

These are the "zeros" between petals.

### Petal Locations

Maximum $r = 3$ when $\\cos(2\\theta) = 1$:

$2\\theta = 0, 2\\pi, 4\\pi \\implies \\theta = 0, \\pi$ (petals along $x$-axis)

Also $r = -3$ when $\\cos(2\\theta) = -1$:

$2\\theta = \\pi, 3\\pi \\implies \\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$ (petals along $y$-axis, traced with negative $r$)

### Result

4 petals along the axes, each of length 3. The curve has **both** $x$-axis and $y$-axis symmetry, plus origin symmetry. (The $-\\theta$ and $\\pi - \\theta$ tests both pass; for the pole, the $-r$ test fails but the $\\theta + \\pi$ test passes: $3\\cos(2\\theta + 2\\pi) = 3\\cos 2\\theta$.)
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Graphing Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $r = 1 + \\sin\\theta$, when does the curve pass through the origin?',
            options: ['$\\theta = 0$', '$\\theta = \\frac{\\pi}{2}$', '$\\theta = \\pi$', '$\\theta = \\frac{3\\pi}{2}$'],
            correctAnswer: 3,
            explanation: '$r = 0$ when $\\sin\\theta = -1$, i.e., $\\theta = \\frac{3\\pi}{2}$.'
          },
          {
            question: '$r = 4\\cos\\theta$ has symmetry about:',
            options: ['The polar axis only', 'The line $\\theta = \\frac{\\pi}{2}$ only', 'Both axes', 'The origin'],
            correctAnswer: 0,
            explanation: 'Replace $\\theta$ with $-\\theta$: $\\cos(-\\theta) = \\cos\\theta$ ✓. Polar axis symmetry. The graph is a circle centered at $(2, 0)$, which is not symmetric about the $y$-axis or the origin.'
          },
          {
            question: 'For the rose $r = 5\\sin(3\\theta)$, the maximum distance from the origin is:',
            options: ['$3$', '$5$', '$8$', '$15$'],
            correctAnswer: 1,
            explanation: 'Maximum $\\lvert r \\rvert = 5$ (the coefficient $a = 5$), achieved when $\\sin(3\\theta) = \\pm 1$.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Compute $r$ Values** 🧮

For $r = 3 - 3\\sin\\theta$:

**1)** At $\\theta = 0$: $r$ = ? (e.g., for $r = 2 + 2\\cos\\theta$ at $\\theta = 0$: $r = 2+2(1) = 4$)

**2)** At $\\theta = \\frac{\\pi}{2}$: $r$ = ? (e.g., at $\\theta = \\frac{\\pi}{2}$: $r = 2+2(0) = 2$)

**3)** At $\\theta = \\frac{3\\pi}{2}$: $r$ = ? (e.g., at $\\theta = \\pi$: $r = 2+2(-1) = 0$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '0', '6'],
        hint1: '$r = 3 - 3\\sin 0 = 3 - 0 = 3$.',
        hint2: '$r = 3 - 3\\sin\\frac{\\pi}{2} = 3 - 3 = 0$.',
        hint3: '$r = 3 - 3\\sin\\frac{3\\pi}{2} = 3 - 3(-1) = 6$.',
        explanation: '1) $r = 3$. 2) $r = 0$. 3) $r = 6$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify Features** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$r = 4 - 2\\cos\\theta$: maximum $r$ occurs at',
            options: ['$\\theta = 0$', '$\\theta = \\pi$', '$\\theta = \\frac{\\pi}{2}$'],
            correctAnswer: 1
          },
          {
            label: 'A curve symmetric about the polar axis uses which test?',
            options: ['Replace $\\theta$ with $-\\theta$', 'Replace $\\theta$ with $\\pi - \\theta$', 'Replace $r$ with $-r$']
          },
          {
            label: '$r = 2\\sin(4\\theta)$: zeros between petals occur at $\\theta =$',
            options: ['$0, \\frac{\\pi}{4}, \\frac{\\pi}{2}, ...$', '$0, \\frac{\\pi}{2}, \\pi, ...$', '$\\frac{\\pi}{8}, \\frac{3\\pi}{8}, ...$']
          },
          {
            label: 'The largest value of $r$ for $r = 5 + 3\\cos\\theta$ is',
            options: ['$5$', '$8$', '$3$', '$2$']
          }
        ],
        correctAnswers: ['$\\theta = \\pi$', 'Replace $\\theta$ with $-\\theta$', '$0, \\frac{\\pi}{4}, \\frac{\\pi}{2}, ...$', '$8$'],
        hint1: '$r = 4 - 2\\cos\\theta$ is largest when $\\cos\\theta = -1$, i.e., $\\theta = \\pi$.',
        hint2: 'Polar axis = $x$-axis symmetry → test $-\\theta$.',
        hint3: '$\\sin(4\\theta) = 0$ when $4\\theta = 0, \\pi, 2\\pi, ...$, so $\\theta = 0, \\frac{\\pi}{4}, ...$.',
        explanation: 'Max $r$ when $\\cos\\theta = -1$ ($\\theta = \\pi$). Polar axis: test $-\\theta$. Zeros at multiples of $\\frac{\\pi}{4}$. Max $r = 5+3 = 8$.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The cardioid $r = 1 - \\cos\\theta$ is symmetric about:',
            options: ['The polar axis ($x$-axis)', 'The line $\\theta = \\frac{\\pi}{2}$ ($y$-axis)', 'The origin', 'No symmetry'],
            correctAnswer: 0,
            explanation: '$\\cos(-\\theta) = \\cos\\theta$, so replacing $\\theta$ with $-\\theta$ gives the same equation. Polar axis symmetry.'
          },
          {
            question: 'How many times does $r = 3\\sin(2\\theta)$ pass through the origin for $0 \\le \\theta < 2\\pi$?',
            options: ['2', '4', '6', '8'],
            correctAnswer: 1,
            explanation: '$r = 0$ when $\\sin(2\\theta) = 0$, i.e., $2\\theta = 0, \\pi, 2\\pi, 3\\pi$ (with $2\\theta < 4\\pi$), giving $\\theta = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$: 4 passes through the origin.'
          }
        ]
      }
    }
  ]
};
