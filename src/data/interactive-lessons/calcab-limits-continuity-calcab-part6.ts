export const calcabLimitsPart6Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit6-intro',
      type: 'text' as const,
      content: `# ∫ Problem-Solving Workshop

**Part 6 of 7 — AP-Level Practice**

---

### Strategy Decision Tree

| Step | Action | If Result Is... |
|------|--------|----------------|
| 1 | Try direct substitution | A number → **done!** |
| 2a | Got $\\frac{0}{0}$? | Factor, rationalize, or use trig identities |
| 2b | Got $\\frac{\\text{nonzero}}{0}$? | Check one-sided limits → $\\pm\\infty$ or DNE |
| 2c | Got $\\frac{\\pm\\infty}{\\pm\\infty}$? | Divide top & bottom by highest power of $x$ |
| 3 | Piecewise or $|x|$? | Check both one-sided limits separately |
| 4 | Oscillating factor? | Try the Squeeze Theorem |

> 🔑 **Key Principle:** Every limit problem fits one of these patterns. Your job is pattern recognition — the technique follows automatically.`
    },
    {
      id: 'limit6-example1',
      type: 'text' as const,
      content: `
## 📖 Worked Example 1: Rationalization

$$\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$$

**Step 1:** Direct sub gives $\\frac{\\sqrt{4}-2}{4-4} = \\frac{0}{0}$ → indeterminate

**Step 2:** Radical in numerator → rationalize (conjugate trick):

$$\\frac{\\sqrt{x}-2}{x-4} \\cdot \\frac{\\sqrt{x}+2}{\\sqrt{x}+2} = \\frac{x-4}{(x-4)(\\sqrt{x}+2)} = \\frac{1}{\\sqrt{x}+2}$$

**Step 3:** Now substitute: $\\frac{1}{\\sqrt{4}+2} = \\frac{1}{4}$

$$\\boxed{\\lim_{x \\to 4} \\frac{\\sqrt{x}-2}{x-4} = \\frac{1}{4}}$$

---

## Worked Example 2: Trig Limit Manipulation

$$\\lim_{x \\to 0} \\frac{\\sin(3x)}{\\sin(5x)}$$

**Strategy:** Introduce the "missing" denominators to create $\\frac{\\sin u}{u}$ forms:

$$\\frac{\\sin(3x)}{\\sin(5x)} = \\frac{\\sin(3x)}{3x} \\cdot \\frac{5x}{\\sin(5x)} \\cdot \\frac{3x}{5x}$$

As $x \\to 0$: each $\\frac{\\sin u}{u} \\to 1$, so the answer is simply the ratio of coefficients:

$$\\boxed{\\lim_{x \\to 0} \\frac{\\sin(3x)}{\\sin(5x)} = \\frac{3}{5}}$$

> **AP Shortcut:** $\\lim_{x \\to 0} \\frac{\\sin(ax)}{\\sin(bx)} = \\frac{a}{b}$ — always the ratio of coefficients.`
    },
    {
      id: 'limit6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Rationalization & Trig** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 9} \\frac{\\sqrt{x} - 3}{x - 9}$.',
            options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$0$', '$6$'],
            correctAnswer: 0,
            explanation: 'Rationalize: $\\frac{\\sqrt{x}-3}{x-9} \\cdot \\frac{\\sqrt{x}+3}{\\sqrt{x}+3} = \\frac{1}{\\sqrt{x}+3}$. At $x=9$: $\\frac{1}{3+3} = \\frac{1}{6}$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin(7x)}{\\sin(2x)}$.',
            options: ['$\\frac{2}{7}$', '$\\frac{7}{2}$', '$0$', '$1$'],
            correctAnswer: 1,
            explanation: 'Using the ratio-of-coefficients shortcut: $\\frac{\\sin(7x)}{\\sin(2x)} \\to \\frac{7}{2}$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\tan(4x)}{x}$.',
            options: ['$0$', '$1$', '$4$', 'DNE'],
            correctAnswer: 2,
            explanation: '$\\frac{\\tan(4x)}{x} = \\frac{\\sin(4x)}{x \\cos(4x)} = \\frac{\\sin(4x)}{4x} \\cdot \\frac{4}{\\cos(4x)} \\to 1 \\cdot \\frac{4}{1} = 4$.'
          }
        ]
      }
    },
    {
      id: 'limit6-example3',
      type: 'text' as const,
      content: `
## 📖 Worked Example 3: Limits at $-\\infty$ with Radicals

$$\\lim_{x \\to -\\infty} \\frac{2x + 1}{\\sqrt{x^2 + 3}}$$

**The trap:** For $x < 0$, $\\sqrt{x^2} = |x| = -x$, not $x$!

**Step 1:** Factor $x$ from the numerator and $\\sqrt{x^2}$ from the denominator:

$$\\frac{2x+1}{\\sqrt{x^2+3}} = \\frac{x(2 + 1/x)}{|x|\\sqrt{1 + 3/x^2}}$$

**Step 2:** Since $x < 0$, we have $|x| = -x$:

$$= \\frac{x(2 + 1/x)}{-x\\sqrt{1 + 3/x^2}} = \\frac{-(2+1/x)}{\\sqrt{1+3/x^2}}$$

**Step 3:** As $x \\to -\\infty$: $1/x \\to 0$ and $3/x^2 \\to 0$:

$$\\boxed{\\lim_{x \\to -\\infty} \\frac{2x+1}{\\sqrt{x^2+3}} = \\frac{-2}{1} = -2}$$

> **AP Tip:** The sign of $\\sqrt{x^2}$ is the #1 source of errors on limits at $-\\infty$ with radicals. Always ask: "Is $x$ positive or negative here?"`
    },
    {
      id: 'limit6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Limits with Radicals** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to -\\infty} \\frac{5x}{\\sqrt{x^2 + 4}}$.',
            options: ['$5$', '$-5$', '$0$', '$\\infty$'],
            correctAnswer: 1,
            explanation: 'For $x < 0$: $\\sqrt{x^2} = -x$, so $\\sqrt{x^2+4} \\approx -x$. Then $\\frac{5x}{-x\\sqrt{1+4/x^2}} = \\frac{-5}{\\sqrt{1+4/x^2}} \\to -5$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to +\\infty} \\frac{5x}{\\sqrt{x^2 + 4}}$.',
            options: ['$5$', '$-5$', '$0$', '$\\infty$'],
            correctAnswer: 0,
            explanation: 'For $x > 0$: $\\sqrt{x^2} = x$, so $\\frac{5x}{x\\sqrt{1+4/x^2}} = \\frac{5}{\\sqrt{1+4/x^2}} \\to 5$. The sign FLIPS compared to $-\\infty$!'
          }
        ]
      }
    },
    {
      id: 'limit6-tricks',
      type: 'text' as const,
      content: `
## 📌 Complete AP Exam Limit Toolkit

| Problem Type | Key Move | Example |
|-------------|----------|---------|
| $\\frac{\\sqrt{\\ldots} - k}{\\text{something}}$ | Conjugate multiplication | $\\frac{\\sqrt{x}-2}{x-4}$ |
| $\\frac{\\sin(ax)}{bx}$ or $\\frac{\\sin(ax)}{\\sin(bx)}$ | Create $\\frac{\\sin u}{u}$ forms | $\\frac{\\sin 3x}{5x} = \\frac{3}{5}$ |
| Polynomial $\\frac{0}{0}$ | Factor and cancel | $\\frac{x^2-1}{x-1}$ |
| $x \\to \\pm\\infty$ rational | Divide by highest power | $\\frac{3x^2+1}{x^2-5} \\to 3$ |
| $x \\to \\pm\\infty$ with $\\sqrt{\\,}$ | Use $\\sqrt{x^2} = |x|$, mind the sign | See Example 3 |
| Piecewise or $|\\cdot|$ | Split into one-sided limits | Check $x \\to c^-$ and $x \\to c^+$ |
| Oscillation | Squeeze Theorem | $x^2\\sin(1/x) \\to 0$ |

> 🔑 **Key Fact:** On the AP exam, about 3–5 questions test limits directly, plus limits appear implicitly in derivative and integral questions.`
    },
    {
      id: 'limit6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Quick Evaluation Drill** 🔍`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 1} \\frac{x^3-1}{x-1}$', options: ['0', '1', '2', '3'] },
          { label: '$\\lim_{x \\to 0} \\frac{\\tan x}{x}$', options: ['0', '1', '-1', 'DNE'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{2x}{3x-1}$', options: ['0', '2/3', '1', '∞'] },
          { label: '$\\lim_{x \\to 0} \\frac{1-\\cos x}{x^2}$', options: ['0', '1/2', '1', 'DNE'] }
        ],
        correctAnswers: ['3', '1', '2/3', '1/2'],
        hint1: 'Factor $x^3-1 = (x-1)(x^2+x+1)$ and cancel.',
        hint2: '$\\tan x = \\frac{\\sin x}{\\cos x}$, so $\\frac{\\tan x}{x} = \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x}$.',
        hint3: 'Same degree — ratio of leading coefficients.',
        explanation: '$\\frac{x^3-1}{x-1} = x^2+x+1 \\to 3$. $\\frac{\\tan x}{x} \\to 1$. $\\frac{2x}{3x-1} \\to \\frac{2}{3}$. $\\frac{1-\\cos x}{x^2} \\to \\frac{1}{2}$ (classic result).'
      }
    },
    {
      id: 'limit6-input',
      type: 'input-box' as const,
      content: `**Compute the Limit** ✍️`,
      exercise: {
        question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin(6x)}{\\sin(4x)}$. Give your answer as a simplified fraction.',
        correctAnswer: '3/2',
        acceptableAnswers: ['3/2', '1.5', '6/4'],
        hint1: 'Use the ratio-of-coefficients shortcut for $\\frac{\\sin(ax)}{\\sin(bx)}$.',
        hint2: 'The answer is $\\frac{6}{4}$. Simplify this fraction.',
        explanation: '$\\lim_{x \\to 0} \\frac{\\sin(6x)}{\\sin(4x)} = \\frac{6}{4} = \\frac{3}{2}$.'
      }
    }
  ]
}
