export const calcabLimitsPart6Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit6-intro',
      type: 'text' as const,
      content: `
# ∫ Problem-Solving Workshop

**Part 6 of 7 — AP-Level Practice**

### Strategy Guide for Limit Problems

**Step 1: Try direct substitution.** If it works, you're done.

**Step 2: Identify the form.**
- $\\frac{0}{0}$: Try factoring, rationalizing, or trig identities
- $\\frac{\\text{nonzero}}{0}$: The limit is $\\pm\\infty$ (or DNE if signs differ by side)
- $\\frac{\\pm\\infty}{\\pm\\infty}$: Divide top and bottom by highest power of $x$

**Step 3: For piecewise or absolute value,** check both one-sided limits.

**Step 4: For oscillating factors,** try the Squeeze Theorem.

### Worked Example 1

$$\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$$

Direct sub: $\\frac{0}{0}$. Rationalize:

$\\frac{\\sqrt{x}-2}{x-4} \\cdot \\frac{\\sqrt{x}+2}{\\sqrt{x}+2} = \\frac{x-4}{(x-4)(\\sqrt{x}+2)} = \\frac{1}{\\sqrt{x}+2}$

At $x = 4$: $\\frac{1}{\\sqrt{4}+2} = \\frac{1}{4}$

### Worked Example 2

$$\\lim_{x \\to 0} \\frac{\\sin(3x)}{\\sin(5x)}$$

Rewrite: $\\frac{\\sin(3x)}{\\sin(5x)} = \\frac{\\sin(3x)}{3x} \\cdot \\frac{5x}{\\sin(5x)} \\cdot \\frac{3x}{5x} = 1 \\cdot 1 \\cdot \\frac{3}{5} = \\frac{3}{5}$

### Worked Example 3

$$\\lim_{x \\to -\\infty} \\frac{2x + 1}{\\sqrt{x^2 + 3}}$$

For $x < 0$: $\\sqrt{x^2} = |x| = -x$. Factor:

$\\frac{2x+1}{\\sqrt{x^2+3}} = \\frac{x(2+1/x)}{|x|\\sqrt{1+3/x^2}} = \\frac{x(2+1/x)}{-x\\sqrt{1+3/x^2}}$

$= \\frac{-(2+1/x)}{\\sqrt{1+3/x^2}} \\to \\frac{-2}{1} = -2$
      `
    },
    {
      id: 'limit6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$.',
            options: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$0$', '$4$'],
            correctAnswer: 0,
            explanation: 'Rationalize: $\\frac{\\sqrt{x}-2}{x-4} \\cdot \\frac{\\sqrt{x}+2}{\\sqrt{x}+2} = \\frac{x-4}{(x-4)(\\sqrt{x}+2)} = \\frac{1}{\\sqrt{x}+2}$. At $x=4$: $\\frac{1}{2+2} = \\frac{1}{4}$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin(3x)}{\\sin(5x)}$.',
            options: ['$\\frac{5}{3}$', '$\\frac{3}{5}$', '$0$', '$1$'],
            correctAnswer: 1,
            explanation: '$\\frac{\\sin(3x)}{\\sin(5x)} = \\frac{\\sin(3x)}{3x} \\cdot \\frac{5x}{\\sin(5x)} \\cdot \\frac{3}{5} \\to 1 \\cdot 1 \\cdot \\frac{3}{5} = \\frac{3}{5}$'
          }
        ]
      }
    },
    {
      id: 'limit6-detail',
      type: 'text' as const,
      content: `
### Common AP Exam Limit Tricks

| Problem Type | Key Move |
|-------------|----------|
| $\\frac{\\sqrt{\\text{stuff}} - \\text{number}}{\\text{something}}$ | Multiply by conjugate |
| $\\frac{\\sin(ax)}{\\sin(bx)}$ | Rewrite using $\\frac{\\sin u}{u} \\to 1$ |
| $\\frac{f(x)}{g(x)}$ as $x \\to \\pm\\infty$ | Divide by highest power of $x$ |
| $\\frac{0}{0}$ with polynomials | Factor! |
| Function with $|x|$ | Split into cases: $x > 0$ and $x < 0$ |
      `
    },
    {
      id: 'limit6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to -\\infty} \\frac{5x}{\\sqrt{x^2 + 4}}$.',
            options: ['$5$', '$-5$', '$0$', '$\\infty$'],
            correctAnswer: 1,
            explanation: 'For $x < 0$: $\\sqrt{x^2} = -x$, so $\\sqrt{x^2+4} \\approx -x$ for large $|x|$. Then $\\frac{5x}{\\sqrt{x^2+4}} = \\frac{5x}{-x\\sqrt{1+4/x^2}} = \\frac{-5}{\\sqrt{1+4/x^2}} \\to -5$.'
          }
        ]
      }
    },
    {
      id: 'limit6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Quick Evaluation** 🔍`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 1} \\frac{x^3-1}{x-1}$', options: ['0', '1', '2', '3'] },
          { label: '$\\lim_{x \\to 0} \\frac{\\tan x}{x}$', options: ['0', '1', '-1', 'DNE'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{2x}{3x-1}$', options: ['0', '2/3', '1', '∞'] }
        ],
        correctAnswers: ['3', '1', '2/3'],
        hint1: 'Factor $x^3-1 = (x-1)(x^2+x+1)$ and cancel.',
        hint2: '$\\tan x = \\frac{\\sin x}{\\cos x}$, so $\\frac{\\tan x}{x} = \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x}$.',
        hint3: 'Same degree — ratio of leading coefficients.',
        explanation: '$\\frac{x^3-1}{x-1} = x^2+x+1 \\to 3$. $\\frac{\\tan x}{x} = \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x} \\to 1 \\cdot 1 = 1$. $\\frac{2x}{3x-1}$: same degree, ratio $= \\frac{2}{3}$.'
      }
    }
  ]
}
