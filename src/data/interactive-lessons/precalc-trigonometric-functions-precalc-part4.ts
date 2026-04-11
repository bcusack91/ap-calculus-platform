export const precalcTrigFunctionsPart4Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 🔺 Trigonometric Functions — Tangent, Cotangent, Secant & Cosecant

**Part 4 of 7**

Beyond sine and cosine, four more trig functions are built from ratios.

### Definitions

$$\\boxed{\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\qquad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} \\qquad \\sec\\theta = \\frac{1}{\\cos\\theta} \\qquad \\csc\\theta = \\frac{1}{\\sin\\theta}}$$

### Complete Comparison Table

| Function | Definition | Period | Domain Restriction | Range |
|:---------|:-----------|:-------|:-------------------|:------|
| $\\tan\\theta$ | $\\frac{\\sin\\theta}{\\cos\\theta}$ | $\\pi$ | $\\theta \\neq \\frac{\\pi}{2} + n\\pi$ | $(-\\infty, \\infty)$ |
| $\\cot\\theta$ | $\\frac{\\cos\\theta}{\\sin\\theta}$ | $\\pi$ | $\\theta \\neq n\\pi$ | $(-\\infty, \\infty)$ |
| $\\sec\\theta$ | $\\frac{1}{\\cos\\theta}$ | $2\\pi$ | $\\theta \\neq \\frac{\\pi}{2} + n\\pi$ | $(-\\infty, -1] \\cup [1, \\infty)$ |
| $\\csc\\theta$ | $\\frac{1}{\\sin\\theta}$ | $2\\pi$ | $\\theta \\neq n\\pi$ | $(-\\infty, -1] \\cup [1, \\infty)$ |

> **Key insight:** Tangent and secant share the same domain restrictions (undefined where $\\cos\\theta = 0$). Cotangent and cosecant share theirs (undefined where $\\sin\\theta = 0$).
      `
    },
    {
      id: 'p4-identities',
      type: 'text' as const,
      content: `
## 🔗 Pythagorean Identity Family

Dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\cos^2\\theta$ or $\\sin^2\\theta$ produces two more identities:

| Divide by | Result |
|:----------|:-------|
| $\\cos^2\\theta$ | $\\boxed{\\tan^2\\theta + 1 = \\sec^2\\theta}$ |
| $\\sin^2\\theta$ | $\\boxed{1 + \\cot^2\\theta = \\csc^2\\theta}$ |

### Symmetry Properties

| Function | Odd/Even | Identity |
|:---------|:---------|:---------|
| $\\tan\\theta$ | **Odd** | $\\tan(-\\theta) = -\\tan\\theta$ |
| $\\cot\\theta$ | **Odd** | $\\cot(-\\theta) = -\\cot\\theta$ |
| $\\sec\\theta$ | **Even** | $\\sec(-\\theta) = \\sec\\theta$ |
| $\\csc\\theta$ | **Odd** | $\\csc(-\\theta) = -\\csc\\theta$ |
      `
    },
    {
      id: 'p4-worked',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Evaluate all six trig functions at $\\theta = \\frac{5\\pi}{6}$

$\\frac{5\\pi}{6}$ is in Q II, reference angle $= \\frac{\\pi}{6}$.

| Function | Reference Value | Sign in Q II | Result |
|:---------|:---------------|:-------------|:-------|
| $\\sin$ | $\\frac{1}{2}$ | $+$ | $\\frac{1}{2}$ |
| $\\cos$ | $\\frac{\\sqrt{3}}{2}$ | $-$ | $-\\frac{\\sqrt{3}}{2}$ |
| $\\tan$ | $\\frac{1}{\\sqrt{3}}$ | $-$ | $-\\frac{1}{\\sqrt{3}} = -\\frac{\\sqrt{3}}{3}$ |
| $\\cot$ | $\\sqrt{3}$ | $-$ | $-\\sqrt{3}$ |
| $\\sec$ | $\\frac{2}{\\sqrt{3}}$ | $-$ | $-\\frac{2\\sqrt{3}}{3}$ |
| $\\csc$ | $2$ | $+$ | $2$ |

### Example 2: Given $\\tan\\theta = -\\frac{3}{4}$ and $\\theta$ in Q II, find $\\sec\\theta$

Using $\\sec^2\\theta = 1 + \\tan^2\\theta = 1 + \\frac{9}{16} = \\frac{25}{16}$

$\\sec\\theta = \\pm\\frac{5}{4}$. In Q II, cosine is negative, so secant is negative:

$$\\boxed{\\sec\\theta = -\\frac{5}{4}}$$
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\tan\\frac{3\\pi}{4}$ equals:',
            options: [
              '$1$',
              '$-1$',
              '$\\sqrt{3}$',
              '$-\\sqrt{3}$'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{3\\pi}{4}$ is in Q II, ref angle $\\frac{\\pi}{4}$. $\\tan\\frac{\\pi}{4} = 1$. Tangent is negative in Q II: $\\tan\\frac{3\\pi}{4} = -1$.'
          },
          {
            question: 'Where is $\\csc\\theta$ undefined?',
            options: [
              'Where $\\cos\\theta = 0$',
              'Where $\\sin\\theta = 0$',
              'Where $\\tan\\theta = 0$',
              'Nowhere — it is always defined'
            ],
            correctAnswer: 1,
            explanation: '$\\csc\\theta = \\frac{1}{\\sin\\theta}$, so it is undefined when $\\sin\\theta = 0$, which occurs at $\\theta = 0, \\pi, 2\\pi, \\ldots$ (multiples of $\\pi$).'
          },
          {
            question: 'If $\\sec\\theta = -2$, what is $\\cos\\theta$?',
            options: [
              '$2$',
              '$-2$',
              '$\\frac{1}{2}$',
              '$-\\frac{1}{2}$'
            ],
            correctAnswer: 3,
            explanation: '$\\sec\\theta = \\frac{1}{\\cos\\theta}$, so $\\cos\\theta = \\frac{1}{\\sec\\theta} = \\frac{1}{-2} = -\\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Trig Function Computations** 🧮

**1)** Evaluate $\\tan\\frac{5\\pi}{3}$. Write as a simplified expression using sqrt if needed. (e.g., $\\tan\\frac{2\\pi}{3}$: Q II, ref $\\frac{\\pi}{3}$, $\\tan 60° = \\sqrt{3}$, negative in Q II → $-\\sqrt{3}$)

**2)** Given $\\cot\\theta = \\frac{5}{12}$ and $\\theta$ in Q III, find $\\csc\\theta$. Write as a fraction with sign. (e.g., $\\cot\\alpha = 3/4$ in Q I: $\\csc^2\\alpha = 1 + 9/16 = 25/16$, so $\\csc\\alpha = 5/4$)

**3)** Evaluate $\\sec\\frac{\\pi}{3}$. Write as an integer. (e.g., $\\sec 0 = 1/\\cos 0 = 1/1 = 1$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-sqrt(3)', '-13/12', '2'],
        hint1: '$\\frac{5\\pi}{3}$ is in Q IV, ref angle $\\frac{\\pi}{3}$. $\\tan 60° = \\sqrt{3}$. Tangent is negative in Q IV.',
        hint2: 'Use $\\csc^2\\theta = 1 + \\cot^2\\theta = 1 + 25/144 = 169/144$. In Q III, sine (and thus cosecant) is negative.',
        hint3: '$\\sec\\frac{\\pi}{3} = \\frac{1}{\\cos\\frac{\\pi}{3}} = \\frac{1}{1/2}$.',
        explanation: '1) $\\tan\\frac{5\\pi}{3} = -\\tan\\frac{\\pi}{3} = -\\sqrt{3}$. 2) $\\csc^2\\theta = 1 + (5/12)^2 = 169/144$, so $\\csc\\theta = \\pm 13/12$. Q III → $-13/12$. 3) $\\sec(\\pi/3) = 1/(1/2) = 2$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Function Properties** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The period of $\\tan\\theta$ is',
            options: ['$\\frac{\\pi}{2}$', '$\\pi$', '$2\\pi$', '$4\\pi$']
          },
          {
            label: '$\\sec\\theta$ is an ____ function',
            options: ['odd', 'even', 'neither', 'undefined']
          },
          {
            label: '$\\tan^2\\theta + 1$ equals',
            options: ['$\\csc^2\\theta$', '$\\sec^2\\theta$', '$\\cot^2\\theta$', '$1$']
          },
          {
            label: 'The range of $\\csc\\theta$ is',
            options: ['$(-\\infty, \\infty)$', '$[-1, 1]$', '$(-\\infty, -1] \\cup [1, \\infty)$', '$(0, \\infty)$']
          }
        ],
        correctAnswers: ['$\\pi$', 'even', '$\\sec^2\\theta$', '$(-\\infty, -1] \\cup [1, \\infty)$'],
        hint1: 'Tangent repeats every half-revolution.',
        hint2: '$\\sec(-\\theta) = 1/\\cos(-\\theta) = 1/\\cos\\theta = \\sec\\theta$. Same output for $\\pm\\theta$.',
        hint3: 'Divide the Pythagorean identity by $\\cos^2\\theta$.',
        explanation: 'Period of tangent is $\\pi$. Secant is even (like cosine). $\\tan^2\\theta + 1 = \\sec^2\\theta$. Cosecant outputs are always $\\leq -1$ or $\\geq 1$.'
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
            question: 'If $\\sin\\theta = \\frac{5}{13}$ and $\\cos\\theta = -\\frac{12}{13}$, what is $\\tan\\theta$?',
            options: [
              '$\\frac{5}{12}$',
              '$-\\frac{5}{12}$',
              '$\\frac{12}{5}$',
              '$-\\frac{12}{5}$'
            ],
            correctAnswer: 1,
            explanation: '$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{5/13}{-12/13} = -\\frac{5}{12}$.'
          },
          {
            question: 'Given $\\sec\\theta = \\frac{5}{3}$ and $\\theta$ in Q I, find $\\tan\\theta$.',
            options: [
              '$\\frac{3}{4}$',
              '$\\frac{4}{3}$',
              '$\\frac{4}{5}$',
              '$\\frac{3}{5}$'
            ],
            correctAnswer: 1,
            explanation: '$\\tan^2\\theta = \\sec^2\\theta - 1 = \\frac{25}{9} - 1 = \\frac{16}{9}$. In Q I: $\\tan\\theta = \\frac{4}{3}$.'
          }
        ]
      }
    }
  ]
}
