export const calcabLimitsInfinityPart6Data = {
  topicSlug: 'limits-at-infinity-calcab',
  sections: [
    {
      id: 'lai6-intro',
      type: 'text' as const,
      content: `# ∫ Limits at Infinity — Problem-Solving Workshop

**Part 6 of 7 — AP-Level Practice**

---

> 🔑 This part focuses on **mixed practice** at the level of the AP Calculus AB exam. Each problem integrates techniques from Parts 1–5.`
    },
    {
      id: 'lai6-problem-set1',
      type: 'text' as const,
      content: `
## Problem Set A: Rational & Radical Limits

### Problem 1
$$\\lim_{x \\to \\infty} \\frac{2x^3 - 5x^2 + 1}{-x^3 + 4x}$$

**Solution:** Degrees equal (both 3). Ratio of leading coefficients: $\\frac{2}{-1} = -2$.

---

### Problem 2
$$\\lim_{x \\to -\\infty} \\frac{\\sqrt{9x^2 - x}}{2x + 3}$$

**Solution:** For $x < 0$, $\\sqrt{9x^2} = -3x$:

$$\\frac{-3x\\sqrt{1 - 1/(9x)}}{2x+3} = \\frac{-3\\sqrt{1-0}}{2 + 3/x} = \\frac{-3}{2}$$

---

### Problem 3
$$\\lim_{x \\to \\infty} \\left(\\sqrt{x^2 + 6x + 1} - x\\right)$$

**Solution:** Multiply by conjugate:

$$\\frac{x^2+6x+1-x^2}{\\sqrt{x^2+6x+1}+x} = \\frac{6x+1}{\\sqrt{x^2+6x+1}+x}$$

Divide by $x$: $\\frac{6+1/x}{\\sqrt{1+6/x+1/x^2}+1} \\to \\frac{6}{2} = 3$`
    },
    {
      id: 'lai6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice Set A** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{(3x+1)^2}{x^2 - x + 2}$.',
            options: ['$3$', '$6$', '$9$', '$\\infty$'],
            correctAnswer: 2,
            explanation: '$(3x+1)^2 = 9x^2 + 6x + 1$. Degree 2 over degree 2: $\\frac{9}{1} = 9$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{\\sqrt{x^2+1} - \\sqrt{x^2-1}}{1}$.',
            options: ['$0$', '$2$', '$1$', '$\\infty$'],
            correctAnswer: 0,
            explanation: 'Conjugate: $\\frac{(x^2+1)-(x^2-1)}{\\sqrt{x^2+1}+\\sqrt{x^2-1}} = \\frac{2}{\\sqrt{x^2+1}+\\sqrt{x^2-1}} \\to \\frac{2}{x+x} = \\frac{1}{x} \\to 0$.'
          },
          {
            question: '$\\lim_{x \\to -\\infty} \\frac{|2x+1|}{x+3}$ equals:',
            options: ['$2$', '$-2$', '$1$', 'Does not exist'],
            correctAnswer: 1,
            explanation: 'For large negative $x$: $2x+1 < 0$, so $|2x+1| = -(2x+1)$. Then $\\frac{-(2x+1)}{x+3} = \\frac{-2x-1}{x+3} \\to \\frac{-2}{1} = -2$.'
          }
        ]
      }
    },
    {
      id: 'lai6-problem-set2',
      type: 'text' as const,
      content: `
## Problem Set B: Exponential, Logarithmic & Special Limits

### Problem 4
$$\\lim_{x \\to \\infty} \\frac{3e^{2x} - e^x}{e^{2x} + 5}$$

Divide by $e^{2x}$:
$$\\frac{3 - e^{-x}}{1 + 5e^{-2x}} \\to \\frac{3-0}{1+0} = 3$$

---

### Problem 5
$$\\lim_{x \\to \\infty} x^2(1 - \\cos(2/x))$$

Let $u = 2/x$: as $x \\to \\infty, u \\to 0$. Rewrite:

$$\\frac{4}{u^2}(1 - \\cos u) = 4 \\cdot \\frac{1 - \\cos u}{u^2}$$

Using $\\lim_{u \\to 0} \\frac{1-\\cos u}{u^2} = \\frac{1}{2}$:

$$= 4 \\cdot \\frac{1}{2} = 2$$

---

### Problem 6
$$\\lim_{x \\to \\infty} \\frac{\\ln(3x)}{\\ln(5x)}$$

$$= \\lim_{x \\to \\infty} \\frac{\\ln 3 + \\ln x}{\\ln 5 + \\ln x} = \\lim_{x \\to \\infty} \\frac{\\ln 3/\\ln x + 1}{\\ln 5/\\ln x + 1} = \\frac{0+1}{0+1} = 1$$`
    },
    {
      id: 'lai6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice Set B** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} x\\left(e^{3/x} - 1\\right)$.',
            options: ['$0$', '$1$', '$3$', '$e^3$'],
            correctAnswer: 2,
            explanation: 'Let $u = 3/x$: $\\frac{3}{u}(e^u - 1) = 3 \\cdot \\frac{e^u-1}{u} \\to 3 \\cdot 1 = 3$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{\\ln x^5}{5\\ln x + 2}$.',
            options: ['$0$', '$1$', '$5$', '$\\infty$'],
            correctAnswer: 1,
            explanation: '$\\ln x^5 = 5\\ln x$. So $\\frac{5\\ln x}{5\\ln x + 2} \\to 1$ as the $+2$ becomes negligible.'
          }
        ]
      }
    },
    {
      id: 'lai6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice Drill** 🧮

**1)** $\\lim_{x \\to \\infty} \\frac{(2x-1)(3x+4)}{(x+2)(6x-5)} = $

**2)** $\\lim_{x \\to \\infty} \\left(\\sqrt{4x^2+3x} - 2x\\right) = $

**3)** $\\lim_{x \\to \\infty} \\frac{\\sin(x) + x^2}{x^2 + 1} = $
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '3/4', '1'],
        hint1: 'Expand: $\\frac{6x^2+5x-4}{6x^2+7x-10}$. Equal degrees, ratio = $6/6 = 1$.',
        hint2: 'Conjugate: $\\frac{4x^2+3x-4x^2}{\\sqrt{4x^2+3x}+2x} = \\frac{3x}{\\sqrt{4x^2+3x}+2x}$. Divide by $x$: $\\frac{3}{2+2} = 3/4$.',
        hint3: '$\\frac{\\sin x + x^2}{x^2+1} = \\frac{\\sin x/x^2 + 1}{1 + 1/x^2} \\to \\frac{0+1}{1+0} = 1$.',
        explanation: '1) $1$. 2) $3/4$. 3) $1$ (using Squeeze for the $\\sin x / x^2$ term).'
      }
    },
    {
      id: 'lai6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Identify the Limit Value** 🔽`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to \\infty} \\frac{x}{\\sqrt{x^2+4}}$', options: ['$0$', '$1/2$', '$1$', '$2$'] },
          { label: '$\\lim_{x \\to -\\infty} \\frac{3x}{\\sqrt{9x^2+1}}$', options: ['$1$', '$-1$', '$3$', '$-3$'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{2^x + 3^x}{4^x}$', options: ['$0$', '$1$', '$\\infty$', '$5$'] },
          { label: '$\\lim_{x \\to \\infty} (1+2/x)^{5x}$', options: ['$1$', '$e^{10}$', '$e^5$', '$e^2$'] }
        ],
        correctAnswers: ['$1$', '$-1$', '$0$', '$e^{10}$'],
        hint1: '$\\sqrt{x^2+4} \\approx x$ for large $x > 0$.',
        hint2: 'For $x < 0$: $\\sqrt{9x^2} = -3x$.',
        hint3: 'Divide by $4^x$: $(2/4)^x + (3/4)^x = (1/2)^x + (3/4)^x \\to 0+0$.',
        explanation: '1) $1$. 2) $-1$. 3) $0$ (both terms decay). 4) $[(1+2/x)^x]^5 = (e^2)^5 = e^{10}$.'
      }
    },
    {
      id: 'lai6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `**Workshop Exit Quiz** ✅`,
      exercise: {
        questions: [
          {
            question: 'A function $f$ satisfies $x^2 \\leq f(x) \\leq x^2 + x$ for all $x > 0$. What is $\\lim_{x \\to \\infty} \\frac{f(x)}{x^2}$?',
            options: ['$0$', '$1$', '$\\infty$', 'Cannot be determined'],
            correctAnswer: 1,
            explanation: 'Divide the inequality by $x^2$: $1 \\leq \\frac{f(x)}{x^2} \\leq 1 + \\frac{1}{x}$. As $x \\to \\infty$, both bounds approach $1$, so the limit is $1$ by Squeeze.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{e^x - e^{-x}}{e^x + e^{-x}}$.',
            options: ['$0$', '$1$', '$-1$', 'Does not exist'],
            correctAnswer: 1,
            explanation: 'Divide by $e^x$: $\\frac{1 - e^{-2x}}{1 + e^{-2x}} \\to \\frac{1-0}{1+0} = 1$. (This is actually $\\tanh x \\to 1$.)'
          }
        ]
      }
    }
  ]
}
