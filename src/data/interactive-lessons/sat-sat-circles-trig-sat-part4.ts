export const satCirclesTrigPart4Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct4-intro',
      type: 'text' as const,
      content: `
# 🔵 Unit Circle Basics

**Part 4 of 7 — Radian Measure, Coordinates at Key Angles, Reference Angles**

The **unit circle** is a circle with radius $1$ centered at the origin. Any point on the unit circle has coordinates:

$$(\\cos \\theta, \\sin \\theta)$$

This means:
- $\\cos \\theta =$ the $x$-coordinate
- $\\sin \\theta =$ the $y$-coordinate

**Key angles and their coordinates:**

| $\\theta$ (rad) | $\\theta$ (deg) | $(\\cos \\theta,\\; \\sin \\theta)$ |
|-------------------|-------------------|--------------------------------------|
| $0$ | $0°$ | $(1, 0)$ |
| $\\frac{\\pi}{6}$ | $30°$ | $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$ |
| $\\frac{\\pi}{4}$ | $45°$ | $\\left(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$ |
| $\\frac{\\pi}{3}$ | $60°$ | $\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$ |
| $\\frac{\\pi}{2}$ | $90°$ | $(0, 1)$ |
      `
    },
    {
      id: 'sat-ct4-reference',
      type: 'text' as const,
      content: `
## Reference Angles

A **reference angle** is the acute angle formed between the terminal side and the $x$-axis.

| Quadrant | Reference angle formula | $\\sin$ | $\\cos$ |
|----------|------------------------|---------|---------|
| I ($0°$–$90°$) | $\\theta_{\\text{ref}} = \\theta$ | $+$ | $+$ |
| II ($90°$–$180°$) | $\\theta_{\\text{ref}} = 180° - \\theta$ | $+$ | $-$ |
| III ($180°$–$270°$) | $\\theta_{\\text{ref}} = \\theta - 180°$ | $-$ | $-$ |
| IV ($270°$–$360°$) | $\\theta_{\\text{ref}} = 360° - \\theta$ | $-$ | $+$ |

**Worked Example:** Find $\\cos 150°$.

1. $150°$ is in Quadrant II; reference angle $= 180° - 150° = 30°$.
2. $\\cos 30° = \\frac{\\sqrt{3}}{2}$.
3. Cosine is **negative** in QII: $\\cos 150° = -\\frac{\\sqrt{3}}{2}$.
      `
    },
    {
      id: 'sat-ct4-sign-pattern',
      type: 'text' as const,
      content: `
## Sign Patterns — "All Students Take Calculus"

A handy mnemonic for which trig functions are positive:

| Quadrant | Positive functions | Mnemonic |
|----------|-------------------|----------|
| I | **All** ($\\sin$, $\\cos$, $\\tan$) | **A**ll |
| II | $\\sin$ only | **S**tudents |
| III | $\\tan$ only | **T**ake |
| IV | $\\cos$ only | **C**alculus |

**Example:** $\\sin 210°$
1. QII​I; reference angle $= 210° - 180° = 30°$.
2. $\\sin 30° = \\frac{1}{2}$.
3. Sine is negative in QIII: $\\sin 210° = -\\frac{1}{2}$.
      `
    },
    {
      id: 'sat-ct4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Unit Circle** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What are the coordinates of the point at $\\frac{5\\pi}{6}$ on the unit circle?',
            options: ['$\\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$', '$\\left(\\frac{\\sqrt{3}}{2}, -\\frac{1}{2}\\right)$', '$\\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$', '$\\left(-\\frac{\\sqrt{3}}{2}, -\\frac{1}{2}\\right)$'],
            correctAnswer: 0,
            explanation: '$\\frac{5\\pi}{6} = 150°$ is in QII. Reference angle $= 30°$. $\\cos 150° = -\\frac{\\sqrt{3}}{2}$ (neg in QII), $\\sin 150° = \\frac{1}{2}$ (pos in QII).'
          },
          {
            question: 'If $\\sin \\theta = -\\frac{\\sqrt{2}}{2}$ and $\\cos \\theta > 0$, in which quadrant does $\\theta$ lie?',
            options: ['I', 'II', 'III', 'IV'],
            correctAnswer: 3,
            explanation: 'Sine is negative and cosine is positive only in Quadrant IV. (Think: "Calculus" — $\\cos$ is positive in QIV.)'
          }
        ]
      }
    },
    {
      id: 'sat-ct4-input',
      type: 'input-boxes' as const,
      content: `
**Find each value. Enter as a simplified fraction or integer.** 🧮

1) $\\cos 0° = ?$

2) $\\sin 270° = ?$

3) What is the reference angle for $315°$ (in degrees)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '-1', '45'],
        hint1: 'The point at $0°$ on the unit circle is $(1, 0)$. $\\cos 0° = x$-coordinate $= 1$.',
        hint2: 'The point at $270°$ is $(0, -1)$. $\\sin 270° = y$-coordinate $= -1$.',
        hint3: '$315°$ is in QIV. Reference angle $= 360° - 315° = 45°$.',
        explanation: '1) $(1,0)$ → $\\cos = 1$. 2) $(0,-1)$ → $\\sin = -1$. 3) $360 - 315 = 45°$.'
      }
    },
    {
      id: 'sat-ct4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each angle to its sine value.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\sin 120°$',
            options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$-\\frac{\\sqrt{3}}{2}$', '$-\\frac{1}{2}$']
          },
          {
            label: '$\\sin 240°$',
            options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$-\\frac{\\sqrt{3}}{2}$', '$-\\frac{1}{2}$']
          },
          {
            label: '$\\sin 330°$',
            options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$-\\frac{\\sqrt{3}}{2}$', '$-\\frac{1}{2}$']
          }
        ],
        correctAnswers: ['$\\frac{\\sqrt{3}}{2}$', '$-\\frac{\\sqrt{3}}{2}$', '$-\\frac{1}{2}$'],
        hint1: '$120°$ is in QII, ref angle $60°$. Sin is positive in QII: $\\sin 120° = \\frac{\\sqrt{3}}{2}$.',
        hint2: '$240°$ is in QIII, ref angle $60°$. Sin is negative in QIII: $\\sin 240° = -\\frac{\\sqrt{3}}{2}$.',
        hint3: '$330°$ is in QIV, ref angle $30°$. Sin is negative in QIV: $\\sin 330° = -\\frac{1}{2}$.',
        explanation: 'Use reference angles and sign rules (ASTC) to evaluate each.'
      }
    },
    {
      id: 'sat-ct4-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If the terminal side of angle $\\theta$ in standard position passes through the point $\\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$, what is $\\theta$?',
            options: ['$60°$', '$120°$', '$150°$', '$240°$'],
            correctAnswer: 1,
            explanation: 'The point $(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$ lies on the unit circle in QII. $\\cos\\theta=-\\frac{1}{2}$ and $\\sin\\theta=\\frac{\\sqrt{3}}{2}$. Reference angle is $60°$, so $\\theta = 180° - 60° = 120°$.'
          },
          {
            question: 'What is the exact value of $\\cos\\frac{7\\pi}{4}$?',
            options: ['$-\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'],
            correctAnswer: 1,
            explanation: '$\\frac{7\\pi}{4} = 315°$ is in QIV. Reference angle $= 45°$. Cosine is positive in QIV: $\\cos 315° = \\frac{\\sqrt{2}}{2}$.'
          }
        ]
      }
    }
  ]
}
