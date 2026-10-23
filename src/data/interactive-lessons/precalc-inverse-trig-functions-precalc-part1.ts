export const precalcInverseTrigPart1Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 🔄 Inverse Trigonometric Functions — Principal Values & Restricted Domains

**Part 1 of 7**

Trig functions are **not** one-to-one, so to define inverses we must **restrict** the domain to an interval where the function passes the horizontal line test.

### The Three Main Inverse Functions

| Function | Notation | Domain (inputs) | Range (principal values) = the trig function's restricted domain |
|:---------|:---------|:----------------|:-----------------------------------------------------------------|
| $\\arcsin x$ | $\\sin^{-1}x$ | $[-1, 1]$ | $\\left[-\\frac{\\pi}{2},\\, \\frac{\\pi}{2}\\right]$ |
| $\\arccos x$ | $\\cos^{-1}x$ | $[-1, 1]$ | $[0,\\, \\pi]$ |
| $\\arctan x$ | $\\tan^{-1}x$ | $(-\\infty, \\infty)$ | $\\left(-\\frac{\\pi}{2},\\, \\frac{\\pi}{2}\\right)$ |

The domain of each inverse is the **range** of the original function (sine and cosine only output values in $[-1, 1]$; tangent outputs every real number), and its range is the interval the original function was **restricted to**.

### Key Idea

$$\\boxed{\\text{Inverse trig functions output ANGLES, not ratios}}$$

$\\arcsin\\!\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{6}$ means "the angle (in the principal range) whose sine is $\\frac{1}{2}$".

> **Notation warning**: $\\sin^{-1}x$ means $\\arcsin x$, NOT $\\frac{1}{\\sin x}$ (that's $\\csc x$).
      `
    },
    {
      id: 'p1-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Evaluate $\\arcsin\\!\\left(\\frac{\\sqrt{3}}{2}\\right)$

Ask: "What angle $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ has $\\sin\\theta = \\frac{\\sqrt{3}}{2}$?"

$$\\theta = \\frac{\\pi}{3}$$

### Example 2: Evaluate $\\arccos(-1)$

Ask: "What angle $\\theta \\in [0, \\pi]$ has $\\cos\\theta = -1$?"

$$\\theta = \\pi$$

### Example 3: Evaluate $\\arctan(-1)$

Ask: "What angle $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ has $\\tan\\theta = -1$?"

$$\\theta = -\\frac{\\pi}{4}$$

### Example 4: Why $\\arcsin\\!\\left(\\sin \\frac{4\\pi}{3}\\right) \\neq \\frac{4\\pi}{3}$

$\\sin \\frac{4\\pi}{3} = -\\frac{\\sqrt{3}}{2}$. The principal value of $\\arcsin(-\\frac{\\sqrt{3}}{2})$ is $-\\frac{\\pi}{3}$, not $\\frac{4\\pi}{3}$, because $\\arcsin$ outputs must be in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.
      `
    },
    {
      id: 'p1-why-restrict',
      type: 'text' as const,
      figure: {
        svg: '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><title>y = sin x from -2 pi to 2 pi. The line y = 1/2 crosses the curve four times in this window; the piece of the curve on [-pi/2, pi/2] is highlighted, where each y-value is hit exactly once</title><g class="fig-accent-2"><rect x="140.2" y="12" width="71.6" height="162" fill="currentColor" fill-opacity="0.14" stroke="none"/></g><g class="fig-accent-2"><line x1="26" y1="66" x2="326" y2="66" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/></g><g stroke="currentColor" stroke-width="1.4"><line x1="20" y1="93" x2="330" y2="93"/><line x1="176" y1="178" x2="176" y2="8"/></g><text x="332" y="97" font-size="12" fill="currentColor">x</text><text x="182" y="10" font-size="12" fill="currentColor">y</text><line x1="32.8" y1="90" x2="32.8" y2="96" stroke="currentColor" stroke-width="1"/><text x="32.8" y="107" font-size="10.5" fill="currentColor" text-anchor="middle">−2π</text><line x1="104.4" y1="90" x2="104.4" y2="96" stroke="currentColor" stroke-width="1"/><text x="104.4" y="107" font-size="10.5" fill="currentColor" text-anchor="middle">−π</text><line x1="140.2" y1="90" x2="140.2" y2="96" stroke="currentColor" stroke-width="1"/><text x="140.2" y="107" font-size="10.5" fill="currentColor" text-anchor="middle">−π/2</text><line x1="211.8" y1="90" x2="211.8" y2="96" stroke="currentColor" stroke-width="1"/><text x="211.8" y="107" font-size="10.5" fill="currentColor" text-anchor="middle">π/2</text><line x1="247.6" y1="90" x2="247.6" y2="96" stroke="currentColor" stroke-width="1"/><text x="247.6" y="107" font-size="10.5" fill="currentColor" text-anchor="middle">π</text><line x1="319.2" y1="90" x2="319.2" y2="96" stroke="currentColor" stroke-width="1"/><text x="319.2" y="107" font-size="10.5" fill="currentColor" text-anchor="middle">2π</text><line x1="173" y1="147" x2="179" y2="147" stroke="currentColor" stroke-width="1"/><text x="170" y="150.5" font-size="10.5" fill="currentColor" text-anchor="end">−1</text><line x1="173" y1="39" x2="179" y2="39" stroke="currentColor" stroke-width="1"/><text x="170" y="42.5" font-size="10.5" fill="currentColor" text-anchor="end">1</text><g class="fig-accent"><path d="M 32.8 93 L 34 90.2 L 35.2 87.4 L 36.4 84.6 L 37.6 81.8 L 38.8 79 L 40 76.3 L 41.2 73.6 L 42.4 71 L 43.6 68.5 L 44.8 66 L 46 63.6 L 47.2 61.3 L 48.3 59 L 49.5 56.9 L 50.7 54.8 L 51.9 52.9 L 53.1 51 L 54.3 49.3 L 55.5 47.7 L 56.7 46.2 L 57.9 44.9 L 59.1 43.7 L 60.3 42.6 L 61.5 41.6 L 62.7 40.8 L 63.9 40.2 L 65 39.7 L 66.2 39.3 L 67.4 39.1 L 68.6 39 L 69.8 39.1 L 71 39.3 L 72.2 39.7 L 73.4 40.2 L 74.6 40.8 L 75.8 41.6 L 77 42.6 L 78.2 43.7 L 79.4 44.9 L 80.6 46.2 L 81.8 47.7 L 82.9 49.3 L 84.1 51 L 85.3 52.9 L 86.5 54.8 L 87.7 56.9 L 88.9 59 L 90.1 61.3 L 91.3 63.6 L 92.5 66 L 93.7 68.5 L 94.9 71 L 96.1 73.6 L 97.3 76.3 L 98.5 79 L 99.6 81.8 L 100.8 84.6 L 102 87.4 L 103.2 90.2 L 104.4 93 L 105.6 95.8 L 106.8 98.6 L 108 101.4 L 109.2 104.2 L 110.4 107 L 111.6 109.7 L 112.8 112.4 L 114 115 L 115.2 117.5 L 116.3 120 L 117.5 122.4 L 118.7 124.7 L 119.9 127 L 121.1 129.1 L 122.3 131.2 L 123.5 133.1 L 124.7 135 L 125.9 136.7 L 127.1 138.3 L 128.3 139.8 L 129.5 141.1 L 130.7 142.3 L 131.9 143.4 L 133.1 144.4 L 134.2 145.2 L 135.4 145.8 L 136.6 146.3 L 137.8 146.7 L 139 146.9 L 140.2 147 L 141.4 146.9 L 142.6 146.7 L 143.8 146.3 L 145 145.8 L 146.2 145.2 L 147.4 144.4 L 148.6 143.4 L 149.8 142.3 L 150.9 141.1 L 152.1 139.8 L 153.3 138.3 L 154.5 136.7 L 155.7 135 L 156.9 133.1 L 158.1 131.2 L 159.3 129.1 L 160.5 127 L 161.7 124.7 L 162.9 122.4 L 164.1 120 L 165.3 117.5 L 166.5 115 L 167.6 112.4 L 168.8 109.7 L 170 107 L 171.2 104.2 L 172.4 101.4 L 173.6 98.6 L 174.8 95.8 L 176 93 L 177.2 90.2 L 178.4 87.4 L 179.6 84.6 L 180.8 81.8 L 182 79 L 183.2 76.3 L 184.4 73.6 L 185.5 71 L 186.7 68.5 L 187.9 66 L 189.1 63.6 L 190.3 61.3 L 191.5 59 L 192.7 56.9 L 193.9 54.8 L 195.1 52.9 L 196.3 51 L 197.5 49.3 L 198.7 47.7 L 199.9 46.2 L 201.1 44.9 L 202.2 43.7 L 203.4 42.6 L 204.6 41.6 L 205.8 40.8 L 207 40.2 L 208.2 39.7 L 209.4 39.3 L 210.6 39.1 L 211.8 39 L 213 39.1 L 214.2 39.3 L 215.4 39.7 L 216.6 40.2 L 217.8 40.8 L 218.9 41.6 L 220.1 42.6 L 221.3 43.7 L 222.5 44.9 L 223.7 46.2 L 224.9 47.7 L 226.1 49.3 L 227.3 51 L 228.5 52.9 L 229.7 54.8 L 230.9 56.9 L 232.1 59 L 233.3 61.3 L 234.5 63.6 L 235.7 66 L 236.8 68.5 L 238 71 L 239.2 73.6 L 240.4 76.3 L 241.6 79 L 242.8 81.8 L 244 84.6 L 245.2 87.4 L 246.4 90.2 L 247.6 93 L 248.8 95.8 L 250 98.6 L 251.2 101.4 L 252.4 104.2 L 253.5 107 L 254.7 109.7 L 255.9 112.4 L 257.1 115 L 258.3 117.5 L 259.5 120 L 260.7 122.4 L 261.9 124.7 L 263.1 127 L 264.3 129.1 L 265.5 131.2 L 266.7 133.1 L 267.9 135 L 269.1 136.7 L 270.2 138.3 L 271.4 139.8 L 272.6 141.1 L 273.8 142.3 L 275 143.4 L 276.2 144.4 L 277.4 145.2 L 278.6 145.8 L 279.8 146.3 L 281 146.7 L 282.2 146.9 L 283.4 147 L 284.6 146.9 L 285.8 146.7 L 287 146.3 L 288.1 145.8 L 289.3 145.2 L 290.5 144.4 L 291.7 143.4 L 292.9 142.3 L 294.1 141.1 L 295.3 139.8 L 296.5 138.3 L 297.7 136.7 L 298.9 135 L 300.1 133.1 L 301.3 131.2 L 302.5 129.1 L 303.7 127 L 304.8 124.7 L 306 122.4 L 307.2 120 L 308.4 117.5 L 309.6 115 L 310.8 112.4 L 312 109.7 L 313.2 107 L 314.4 104.2 L 315.6 101.4 L 316.8 98.6 L 318 95.8 L 319.2 93" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></g><g class="fig-accent-2"><circle cx="44.8" cy="66" r="3.5" fill="currentColor"/></g><g class="fig-accent-2"><circle cx="92.5" cy="66" r="3.5" fill="currentColor"/></g><g class="fig-accent-2"><circle cx="187.9" cy="66" r="3.5" fill="currentColor"/></g><g class="fig-accent-2"><circle cx="235.7" cy="66" r="3.5" fill="currentColor"/></g><g class="fig-accent-2"><text x="289.5" y="60" font-size="10.5" fill="currentColor" text-anchor="start">y = 1/2</text></g><g class="fig-accent-2"><text x="141.3" y="163.2" font-size="10" fill="currentColor" text-anchor="start">one-to-one here</text></g></svg>',
        alt: 'Graph of y = sin x from x = -2 pi to 2 pi with the horizontal line y = 1/2. The line crosses the curve four times in this window. The piece of the curve from x = -pi/2 to pi/2 is highlighted; on that piece each y-value between -1 and 1 occurs exactly once.',
        caption: 'Figure 1. $y = \\sin x$ meets $y = \\frac{1}{2}$ again and again; on the highlighted piece $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ it meets each height exactly once.',
      },
      content: `
## 🔍 Why We Restrict the Domain

### Without Restriction: Infinitely Many Answers

$\\sin\\theta = \\frac{1}{2}$ has solutions $\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{13\\pi}{6}, \\frac{17\\pi}{6}, \\ldots$ and also $-\\frac{7\\pi}{6}, -\\frac{11\\pi}{6}, \\ldots$

A function can only return **one** output. So we pick the interval where each trig function is one-to-one:

| Function | Why This Interval? |
|:---------|:------------------|
| $\\sin$ restricted to $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ | Sine goes from $-1$ to $1$ (hits every y-value exactly once) |
| $\\cos$ restricted to $[0, \\pi]$ | Cosine goes from $1$ to $-1$ (hits every y-value exactly once) |
| $\\tan$ restricted to $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ | Tangent covers all reals (hits every y-value exactly once) |

### Quick Reference: Special Angle Outputs

| Input $x$ | $\\arcsin x$ | $\\arccos x$ |
|:----------|:------------|:------------|
| $0$ | $0$ | $\\frac{\\pi}{2}$ |
| $\\frac{1}{2}$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{3}$ |
| $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{4}$ |
| $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{6}$ |
| $1$ | $\\frac{\\pi}{2}$ | $0$ |

> 📏 **Radians only.** The AP exam measures every angle in radians, so inverse trig answers are written as $\\frac{\\pi}{6}$, not $30^\\circ$.
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\arccos\\!\\left(\\frac{1}{2}\\right)$ equals:',
            options: [
              '$\\frac{5\\pi}{3}$',
              '$\\frac{\\pi}{3}$',
              '$\\frac{2\\pi}{3}$',
              '$-\\frac{\\pi}{3}$'
            ],
            correctAnswer: 1,
            explanation: '$\\cos \\frac{\\pi}{3} = \\frac{1}{2}$ and $\\frac{\\pi}{3} \\in [0, \\pi]$, so $\\arccos(\\frac{1}{2}) = \\frac{\\pi}{3}$. $\\frac{5\\pi}{3}$ also has cosine $\\frac{1}{2}$ but lies outside $[0, \\pi]$, $\\frac{2\\pi}{3}$ is $\\arccos(-\\frac{1}{2})$, and $\\arccos$ never outputs a negative angle.'
          },
          {
            question: 'The range of $\\arctan x$ is:',
            options: [
              '$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$',
              '$\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$',
              '$[0, \\pi]$',
              '$(-\\pi, \\pi)$'
            ],
            correctAnswer: 1,
            explanation: '$\\arctan$ has range $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, an open interval: $\\tan$ is undefined at $\\pm\\frac{\\pi}{2}$, so those endpoints are never reached. The closed interval is the range of $\\arcsin$, and $[0, \\pi]$ is the range of $\\arccos$.'
          },
          {
            question: '$\\arcsin\\!\\left(\\sin \\frac{5\\pi}{6}\\right)$ equals:',
            options: [
              '$\\frac{5\\pi}{6}$',
              '$\\frac{\\pi}{6}$',
              '$-\\frac{\\pi}{6}$',
              '$-\\frac{5\\pi}{6}$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin \\frac{5\\pi}{6} = \\frac{1}{2}$. Then $\\arcsin(\\frac{1}{2}) = \\frac{\\pi}{6}$ (principal value in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$). $\\frac{5\\pi}{6}$ is outside the range, and the negative angles have sine $-\\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Inverse Trig Evaluation** 🧮

Write each answer as a multiple of $\\pi$ and enter the **coefficient** (type \`1/6\` for $\\frac{\\pi}{6}$).

**1)** $\\arcsin\\!\\left(\\frac{\\sqrt{2}}{2}\\right) = \\,?\\cdot\\pi$ (e.g., $\\arcsin(\\frac{\\sqrt{3}}{2}) = \\frac{\\pi}{3}$, coefficient \`1/3\`)

**2)** $\\arccos(0) = \\,?\\cdot\\pi$ (e.g., $\\arccos(-1) = \\pi$, coefficient \`1\`)

**3)** $\\arctan(\\sqrt{3}) = \\,?\\cdot\\pi$ (e.g., $\\arctan(1) = \\frac{\\pi}{4}$, coefficient \`1/4\`)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1/4', '1/2', '1/3'],
        hint1: '$\\sin \\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$ and $\\frac{\\pi}{4} \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$.',
        hint2: '$\\cos \\frac{\\pi}{2} = 0$ and $\\frac{\\pi}{2} \\in [0, \\pi]$.',
        hint3: '$\\tan \\frac{\\pi}{3} = \\sqrt{3}$ and $\\frac{\\pi}{3} \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$.',
        explanation: '1) $\\arcsin(\\frac{\\sqrt{2}}{2}) = \\frac{\\pi}{4}$. 2) $\\arccos(0) = \\frac{\\pi}{2}$. 3) $\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Domain & Range Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The domain of $\\arcsin x$ is',
            options: ['$[-1, 1]$', '$(-\\infty, \\infty)$', '$[0, \\pi]$', '$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$']
          },
          {
            label: 'The range of $\\arccos x$ is',
            options: ['$[-1, 1]$', '$[0, \\pi]$', '$(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$', '$(-\\infty, \\infty)$']
          },
          {
            label: '$\\sin^{-1}x$ is another notation for',
            options: ['$\\csc x$', '$\\frac{1}{\\sin x}$', '$\\arcsin x$', '$\\sin(\\frac{1}{x})$']
          },
          {
            label: 'The domain of $\\arctan x$ is',
            options: ['$[-1, 1]$', '$[0, \\pi]$', '$(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$', '$(-\\infty, \\infty)$']
          }
        ],
        correctAnswers: ['$[-1, 1]$', '$[0, \\pi]$', '$\\arcsin x$', '$(-\\infty, \\infty)$'],
        hint1: 'Sine outputs values between $-1$ and $1$, so its inverse accepts those as input.',
        hint2: 'Cosine was restricted to $[0, \\pi]$, so that becomes the range of arccos.',
        hint3: '$\\sin^{-1}$ means inverse function, not reciprocal.',
        explanation: 'Domain of $\\arcsin$: $[-1,1]$. Range of $\\arccos$: $[0,\\pi]$. $\\sin^{-1}x = \\arcsin x$. Domain of $\\arctan$: all reals.'
      }
    },
    {
      id: 'p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Why does $\\arcsin(\\sin 3)$ NOT equal $3$?',
            options: [
              'Because $3$ is outside the domain $[-1, 1]$ of $\\arcsin$',
              'Because $3$ is outside the range $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ of $\\arcsin$',
              'Because $\\sin 3$ is negative, so $\\arcsin$ returns a negative angle',
              'Because $3$ is not a rational multiple of $\\pi$'
            ],
            correctAnswer: 1,
            explanation: '$\\arcsin$ can only output angles in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}] \\approx [-1.57, 1.57]$. Since $3$ radians is outside this range, the output is a different angle with the same sine value (it is $\\pi - 3 \\approx 0.14$). The input of $\\arcsin$ here is $\\sin 3 \\approx 0.14$, which is inside $[-1, 1]$ and positive, and whether $3$ is a multiple of $\\pi$ is irrelevant.'
          },
          {
            question: '$\\arccos(-\\frac{\\sqrt{3}}{2})$ equals:',
            options: [
              '$-\\frac{\\pi}{6}$',
              '$\\frac{5\\pi}{6}$',
              '$\\frac{7\\pi}{6}$',
              '$-\\frac{5\\pi}{6}$'
            ],
            correctAnswer: 1,
            explanation: '$\\cos \\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$ and $\\frac{5\\pi}{6} \\in [0, \\pi]$. So $\\arccos(-\\frac{\\sqrt{3}}{2}) = \\frac{5\\pi}{6}$. $\\frac{7\\pi}{6}$ has the same cosine but lies outside $[0, \\pi]$, and $\\arccos$ never outputs a negative angle.'
          }
        ]
      }
    }
  ]
};
