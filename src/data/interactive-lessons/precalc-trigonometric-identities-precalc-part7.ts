export const precalcTrigIdentitiesPart7Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🧩 Trigonometric Identities — Full Synthesis

**Part 7 of 7**

This final part combines **every identity type** from Parts 1–6 into mixed problems. The challenge: recognizing which identity to apply and when.

### Complete Identity Reference

| Category | Key Formulas |
|:---------|:------------|
| **Pythagorean** | $\\sin^2\\theta + \\cos^2\\theta = 1$, $1 + \\tan^2\\theta = \\sec^2\\theta$, $1 + \\cot^2\\theta = \\csc^2\\theta$ |
| **Reciprocal** | $\\csc\\theta = \\frac{1}{\\sin\\theta}$, $\\sec\\theta = \\frac{1}{\\cos\\theta}$, $\\cot\\theta = \\frac{1}{\\tan\\theta}$ |
| **Quotient** | $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$, $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$ |
| **Even-Odd** | $\\cos(-\\theta) = \\cos\\theta$, $\\sin(-\\theta) = -\\sin\\theta$, $\\tan(-\\theta) = -\\tan\\theta$ |
| **Cofunction** | $\\sin\\theta = \\cos(\\frac{\\pi}{2}-\\theta)$, $\\tan\\theta = \\cot(\\frac{\\pi}{2}-\\theta)$, etc. |
| **Sum/Difference** | $\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$, $\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$ |
| **Double-Angle** | $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, $\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$ |
| **$\\cos 2\\theta$ rearranged** | $\\sin^2\\theta = \\frac{1-\\cos 2\\theta}{2}$, $\\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}$ |
      `
    },
    {
      id: 'p7-decision',
      type: 'text' as const,
      content: `
## 🗺️ Identity Selection Flowchart

### What Do I See? → What Do I Use?

| Pattern in Expression | Identity to Apply |
|:---------------------|:-----------------|
| $\\sin^2$ or $\\cos^2$ alone | Pythagorean → replace with $1 - \\text{other}^2$ |
| $\\sec, \\csc, \\tan, \\cot$ mixed | Reciprocal/Quotient → convert to sin/cos |
| Negative angle $(-\\theta)$ | Even-odd |
| $\\frac{\\pi}{2} - \\theta$ | Cofunction |
| Non-standard angle ($\\frac{\\pi}{12}, \\frac{5\\pi}{12}, \\frac{7\\pi}{12}$…) | Sum/Difference formulas |
| $\\sin\\theta\\cos\\theta$ product | Double-angle: $= \\frac{1}{2}\\sin 2\\theta$ |
| $\\cos^2\\theta - \\sin^2\\theta$ | Recognize $= \\cos 2\\theta$ |
| $1 \\pm \\cos\\theta$ in denominator | Multiply by the conjugate, then use Pythagorean |
| Verifying LHS = RHS | Work the complex side only; never cross the $=$ |

### Multi-Step Strategy

1. **Scan** — Identify the identity types present
2. **Convert** — Rewrite everything in sin/cos if mixed functions appear
3. **Combine** — Get a single fraction if multiple terms
4. **Substitute** — Apply Pythagorean, double-angle, etc.
5. **Simplify** — Cancel and reduce
      `
    },
    {
      id: 'p7-examples',
      type: 'text' as const,
      content: `
## 📝 Mixed Worked Examples

### Example 1: Simplify $\\frac{\\sin 2\\theta}{1 + \\cos 2\\theta}$

Use double-angle expansions:
- Numerator: $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$
- Denominator: $1 + \\cos 2\\theta = 1 + (2\\cos^2\\theta - 1) = 2\\cos^2\\theta$

$$\\frac{2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$$

### Example 2: Find $\\sin \\frac{5\\pi}{12}\\cos \\frac{\\pi}{12} + \\cos \\frac{5\\pi}{12}\\sin \\frac{\\pi}{12}$

Recognize the sum pattern: $\\sin A\\cos B + \\cos A\\sin B = \\sin(A + B)$

$$= \\sin(\\frac{5\\pi}{12} + \\frac{\\pi}{12}) = \\sin \\frac{\\pi}{2} = 1$$

### Example 3: Simplify $\\frac{\\sec(-\\theta)}{\\csc(\\frac{\\pi}{2} - \\theta)}$

Apply even-odd: $\\sec(-\\theta) = \\sec\\theta$ (even).

Apply cofunction: $\\csc(\\frac{\\pi}{2} - \\theta) = \\sec\\theta$.

$$\\frac{\\sec\\theta}{\\sec\\theta} = 1$$

### Example 4: Verify $\\frac{\\sin 2\\theta}{\\sin\\theta} - \\frac{\\cos 2\\theta}{\\cos\\theta} = \\sec\\theta$

Work the left side:

$$\\frac{2\\sin\\theta\\cos\\theta}{\\sin\\theta} - \\frac{1 - 2\\sin^2\\theta}{\\cos\\theta} = 2\\cos\\theta - \\frac{1 - 2\\sin^2\\theta}{\\cos\\theta}$$

$$= \\frac{2\\cos^2\\theta - 1 + 2\\sin^2\\theta}{\\cos\\theta} = \\frac{2(\\cos^2\\theta + \\sin^2\\theta) - 1}{\\cos\\theta} = \\frac{2 - 1}{\\cos\\theta} = \\frac{1}{\\cos\\theta} = \\sec\\theta \\;\\checkmark$$
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Mixed Identity Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\cos \\frac{\\pi}{9}\\cos \\frac{2\\pi}{9} - \\sin \\frac{\\pi}{9}\\sin \\frac{2\\pi}{9}$ equals:',
            options: [
              '$\\cos \\frac{\\pi}{3}$',
              '$\\cos(-\\frac{\\pi}{9})$',
              '$\\sin \\frac{\\pi}{3}$',
              '$\\sin(-\\frac{\\pi}{9})$'
            ],
            correctAnswer: 0,
            explanation: 'This matches $\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B$ with $A=\\frac{\\pi}{9}, B=\\frac{2\\pi}{9}$. So $\\cos(\\frac{\\pi}{9}+\\frac{2\\pi}{9}) = \\cos \\frac{\\pi}{3} = \\frac{1}{2}$.'
          },
          {
            question: 'Simplify: $\\frac{1 - \\cos 2\\theta}{\\sin 2\\theta}$',
            options: [
              '$\\cot^2\\theta$',
              '$\\tan\\theta$',
              '$\\sin^2\\theta$',
              '$2\\tan\\theta$'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1 - (1 - 2\\sin^2\\theta)}{2\\sin\\theta\\cos\\theta} = \\frac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$.'
          },
          {
            question: 'If $\\sin\\alpha = \\frac{3}{5}$ (QI) and $\\cos\\beta = \\frac{5}{13}$ (QI), then $\\cos(\\alpha - \\beta)$ equals:',
            options: [
              '$\\frac{56}{65}$',
              '$\\frac{63}{65}$',
              '$\\frac{33}{65}$',
              '$\\frac{16}{65}$'
            ],
            correctAnswer: 0,
            explanation: '$\\cos\\alpha = 4/5$, $\\sin\\beta = 12/13$ (QI). $\\cos(\\alpha-\\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta = \\frac{4}{5}\\cdot\\frac{5}{13} + \\frac{3}{5}\\cdot\\frac{12}{13} = \\frac{20}{65} + \\frac{36}{65} = \\frac{56}{65}$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Cross-Topic Computation** 🧮

**1)** $\\cos^2 \\frac{\\pi}{12} + \\sin^2 \\frac{\\pi}{12}$ = ? Write as an integer. (e.g., $\\cos^2 1.3 + \\sin^2 1.3 = 1$ by Pythagorean identity)

**2)** Simplify $\\frac{\\sin 2\\theta}{2\\sin\\theta}$ to a single trig function. Write the function name. (e.g., $\\frac{\\cos 2\\theta + 1}{2\\cos\\theta}$ simplifies by expanding $\\cos 2\\theta$)

**3)** $\\sin(-\\frac{\\pi}{6})\\sec(-\\frac{\\pi}{6})$ = ? Write as a fraction. (e.g., $\\cos(-\\frac{\\pi}{3})\\csc(-\\frac{\\pi}{3}) = \\cos \\frac{\\pi}{3} \\cdot (-\\csc \\frac{\\pi}{3}) = \\frac{1}{2} \\cdot (-\\frac{2\\sqrt{3}}{3})$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', 'cos', '-sqrt(3)/3'],
        hint1: 'This is the Pythagorean identity $\\sin^2\\theta + \\cos^2\\theta = 1$ — works for any angle.',
        hint2: '$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, so $\\frac{2\\sin\\theta\\cos\\theta}{2\\sin\\theta} = ?$',
        hint3: '$\\sin(-\\frac{\\pi}{6}) = -\\sin \\frac{\\pi}{6} = -1/2$ (odd). $\\sec(-\\frac{\\pi}{6}) = \\sec \\frac{\\pi}{6} = \\frac{2}{\\sqrt{3}}$ (even). Multiply them.',
        explanation: '1) $\\cos^2\\theta + \\sin^2\\theta = 1$ always. 2) $\\frac{2\\sin\\theta\\cos\\theta}{2\\sin\\theta} = \\cos\\theta$. 3) $(-1/2)(2/\\sqrt{3}) = -1/\\sqrt{3} = -\\sqrt{3}/3$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identity Classification** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To simplify $\\sin\\theta\\cos\\theta$, rewrite using',
            options: ['Pythagorean identity', 'Double-angle: $\\frac{1}{2}\\sin 2\\theta$', 'Sum formula', 'Even-odd identity']
          },
          {
            label: 'To find the exact value of $\\cos \\frac{\\pi}{12}$, use',
            options: ['Pythagorean identity', 'Double-angle formula', 'Sum/Difference formula', 'Cofunction identity']
          },
          {
            label: '$\\cos(-\\theta)\\csc(-\\theta)$ simplifies using',
            options: ['Sum formulas', 'Even-odd identities', 'Double-angle formulas', 'Power-reduction']
          },
          {
            label: '$\\sin \\frac{2\\pi}{5}$ can be rewritten as $\\cos \\frac{\\pi}{10}$ using',
            options: ['Even-odd identity', 'Pythagorean identity', 'Cofunction identity', 'Double-angle identity']
          }
        ],
        correctAnswers: ['Double-angle: $\\frac{1}{2}\\sin 2\\theta$', 'Sum/Difference formula', 'Even-odd identities', 'Cofunction identity'],
        hint1: '$\\sin\\theta\\cos\\theta = \\frac{1}{2}(2\\sin\\theta\\cos\\theta) = \\frac{1}{2}\\sin 2\\theta$.',
        hint2: '$\\frac{\\pi}{12} = \\frac{\\pi}{4} - \\frac{\\pi}{6}$, so use the difference formula for cosine.',
        hint3: 'Cosine is even, cosecant is odd — determine the signs first.',
        explanation: '$\\sin\\theta\\cos\\theta \\to$ double-angle. $\\cos \\frac{\\pi}{12} \\to$ difference formula. Negative angles $\\to$ even-odd. $\\sin \\frac{2\\pi}{5} = \\cos \\frac{\\pi}{10} \\to$ cofunction.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{\\cos 2\\theta + 1}{2}$',
            options: [
              '$\\sin^2\\theta$',
              '$\\cos^2\\theta$',
              '$\\tan^2\\theta$',
              '$1 + \\sin\\theta$'
            ],
            correctAnswer: 1,
            explanation: 'This is the power-reduction formula: $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$.'
          },
          {
            question: 'Which sequence of identities simplifies $\\frac{\\sec(-\\theta)\\sin 2\\theta}{2}$?',
            options: [
              'Even-odd → double-angle → cancel',
              'Sum formula → Pythagorean → reciprocal',
              'Cofunction → Pythagorean → quotient',
              'Double-angle → cofunction → even-odd'
            ],
            correctAnswer: 0,
            explanation: '$\\sec(-\\theta) = \\sec\\theta$ (even-odd). $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ (double-angle). So $\\frac{\\sec\\theta \\cdot 2\\sin\\theta\\cos\\theta}{2} = \\frac{1}{\\cos\\theta} \\cdot \\sin\\theta\\cos\\theta = \\sin\\theta$.'
          }
        ]
      }
    }
  ]
};
