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
$$\\lim_{x \\to \\infty} \\frac{\\sqrt{x^2 + 6x + 1}}{3x - 2}$$

**Solution:** For $x > 0$, $\\sqrt{x^2 + 6x + 1} = x\\sqrt{1 + 6/x + 1/x^2}$:

$$\\frac{x\\sqrt{1 + 6/x + 1/x^2}}{3x - 2} = \\frac{\\sqrt{1 + 6/x + 1/x^2}}{3 - 2/x} \\to \\frac{\\sqrt{1}}{3} = \\frac{1}{3}$$`
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
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{\\sqrt{x^2+1}}{\\sqrt{4x^2-1}}$.',
            options: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$2$', '$1$'],
            correctAnswer: 0,
            explanation: 'For large $x$, $\\sqrt{x^2+1} \\approx x$ and $\\sqrt{4x^2-1} \\approx 2x$, so the ratio tends to $\\frac{x}{2x} = \\frac{1}{2}$. The value $\\frac{1}{4}$ forgets to take the square root of $4$, $2$ flips the ratio, and $1$ ignores the coefficient $4$.'
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
$$\\lim_{x \\to -\\infty} \\frac{3e^{2x} - e^x}{e^{2x} + 5}$$

Same function as Problem 4, opposite direction. As $x \\to -\\infty$, $e^{2x} \\to 0$ and $e^x \\to 0$, so nothing grows and no division is needed:

$$\\frac{3(0) - 0}{0 + 5} = 0$$

Problem 4 gave $y = 3$ on the right; this gives $y = 0$ on the left. Exponential functions often have different horizontal asymptotes in the two directions.

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
            question: 'Evaluate $\\lim_{x \\to \\infty} e^{(3x + 1)/x}$.',
            options: ['$\\infty$', '$e$', '$e^3$', '$3$'],
            correctAnswer: 2,
            explanation: 'The exponent $\\frac{3x + 1}{x} \\to 3$, and $e^u$ is continuous, so the limit is $e^3$. Answering $\\infty$ treats the exponent as growing, $e$ treats it as tending to $1$, and $3$ drops the exponential.'
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

**2)** $\\lim_{x \\to \\infty} \\frac{3x}{\\sqrt{16x^2+3x}} = $

**3)** $\\lim_{x \\to \\infty} \\frac{\\sin(x) + x^2}{x^2 + 1} = $
      `,
      exercise: {
        questions: [{ question: '(1)', answer: '1', acceptableAnswers: ['1'] }, { question: '(2)', answer: '3/4', acceptableAnswers: ['3/4', '0.75'] }, { question: '(3)', answer: '1', acceptableAnswers: ['1'] }],
        hint1: 'Expand: $\\frac{6x^2+5x-4}{6x^2+7x-10}$. Equal degrees, ratio = $6/6 = 1$.',
        hint2: 'For $x > 0$, $\\sqrt{16x^2+3x} = 4x\\sqrt{1 + 3/(16x)}$, so the ratio tends to $\\frac{3x}{4x} = \\frac{3}{4}$.',
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
          { label: '$\\lim_{x \\to \\infty} \\frac{5e^x}{2e^x + x^3}$', options: ['$0$', '$5/2$', '$\\infty$', '$5$'] }
        ],
        correctAnswers: ['$1$', '$-1$', '$0$', '$5/2$'],
        hint1: '$\\sqrt{x^2+4} \\approx x$ for large $x > 0$.',
        hint2: 'For $x < 0$: $\\sqrt{9x^2} = -3x$.',
        hint3: 'Divide by $4^x$: $(2/4)^x + (3/4)^x = (1/2)^x + (3/4)^x \\to 0+0$.',
        explanation: '1) $1$. 2) $-1$. 3) $0$ (both terms decay). 4) Divide by $e^x$: $\\frac{5}{2 + x^3/e^x} \\to \\frac{5}{2}$, since $e^x$ dominates $x^3$.'
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
            explanation: 'Divide by $e^x$: $\\frac{1 - e^{-2x}}{1 + e^{-2x}} \\to \\frac{1-0}{1+0} = 1$.'
          }
        ]
      }
    }
  ]
}
