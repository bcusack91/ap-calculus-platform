export const calcabAntiderivativesPart6Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti6-intro',
      type: 'text' as const,
      content: `# ∫ Antiderivatives

**Part 6 of 7 — Mixed Practice Workshop**

### The Real Challenge: Choosing the Right Tool

On the AP Exam, nobody tells you WHICH rule to use. You must:

1. **Look** at the integrand's structure
2. **Classify** it (power rule? trig? inverse trig? rewrite first?)
3. **Apply** the correct formula
4. **Check** by differentiating

### Decision Flowchart

| Ask Yourself | If YES → | Example |
|:---:|:---:|:---:|
| Is it a sum/difference? | Split into separate integrals | $\\int (x^2 + e^x)\\,dx$ |
| Is it $x^n$? | Power Rule | $\\int x^{-3}\\,dx$ |
| Is it $1/x$? | $\\ln|x| + C$ | $\\int \\frac{5}{x}\\,dx$ |
| Is it $e^x$ or $a^x$? | Exponential rule | $\\int 3e^x\\,dx$ |
| Is it a trig function? | Trig formula table | $\\int \\sec^2 x\\,dx$ |
| Does it have $\\sqrt{a^2 - x^2}$? | Arcsin form | $\\int \\frac{1}{\\sqrt{4-x^2}}\\,dx$ |
| Does it have $a^2 + x^2$? | Arctan form | $\\int \\frac{1}{9+x^2}\\,dx$ |
| Is it a product/fraction? | Can I rewrite algebraically? | $\\int \\frac{x^2+1}{x}\\,dx$ |

> **Key Concept:** Most "hard" antiderivatives are actually easy formulas in disguise — you just need to rewrite first!`
    },
    {
      id: 'anti6-worked',
      type: 'text' as const,
      content: `### Mixed Worked Examples

**Example 1:** $\\int \\left(\\frac{3}{x} + 4\\cos x - x^5\\right)dx$

Split: $3\\ln|x| + 4\\sin x - \\frac{x^6}{6} + C$

**Example 2:** $\\int \\frac{x^3 + 2x - 1}{x^2}\\,dx$

Rewrite: $\\int (x + 2x^{-1} - x^{-2})\\,dx = \\frac{x^2}{2} + 2\\ln|x| + \\frac{1}{x} + C$

**Example 3:** $\\int (\\sqrt{x} + e^x + \\sec x \\tan x)\\,dx$

$= \\frac{2}{3}x^{3/2} + e^x + \\sec x + C$

**Example 4 (IVP):** $f'(x) = 6x^2 - 4x + 1$, $f(1) = 3$.

$f(x) = 2x^3 - 2x^2 + x + C$. $f(1) = 2 - 2 + 1 + C = 3 \\Rightarrow C = 2$.

$f(x) = 2x^3 - 2x^2 + x + 2$

> **AP Tip:** Always verify by differentiating. If $\\frac{d}{dx}[\\text{your answer}] = \\text{integrand}$, you're correct!`
    },
    {
      id: 'anti6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Antiderivative Problems — Set 1** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int (e^x + \\sec^2 x - x^3)\\,dx$.',
            options: ['$e^x + \\tan x - \\frac{x^4}{4} + C$', '$e^x + \\sec x - \\frac{x^4}{4} + C$', '$e^x + \\tan x - 3x^2 + C$', '$xe^x + \\tan x - \\frac{x^4}{4} + C$'],
            correctAnswer: 0,
            explanation: 'Integrate term by term: $\\int e^x = e^x$, $\\int \\sec^2 x = \\tan x$, $\\int x^3 = x^4/4$. Result: $e^x + \\tan x - \\frac{x^4}{4} + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{x^2 - 4}{x - 2}\\,dx$ for $x \\neq 2$.',
            options: ['$\\frac{x^2}{2} + 2x + C$', '$\\frac{x^2}{2} - 2x + C$', '$x^2 + 2x + C$', '$\\ln|x-2| + C$'],
            correctAnswer: 0,
            explanation: 'Factor the numerator: $\\frac{(x-2)(x+2)}{(x-2)} = x + 2$. So $\\int (x+2)\\,dx = \\frac{x^2}{2} + 2x + C$.'
          },
          {
            question: 'Evaluate $\\int \\left(\\frac{5}{\\sqrt{x}} - \\frac{3}{x}\\right)dx$.',
            options: ['$10\\sqrt{x} - 3\\ln|x| + C$', '$\\frac{5}{2\\sqrt{x}} - 3\\ln|x| + C$', '$5\\sqrt{x} - 3\\ln|x| + C$', '$10\\sqrt{x} - \\frac{3}{x^2} + C$'],
            correctAnswer: 0,
            explanation: '$\\int 5x^{-1/2} = 5 \\cdot 2x^{1/2} = 10\\sqrt{x}$. $\\int 3/x = 3\\ln|x|$. Result: $10\\sqrt{x} - 3\\ln|x| + C$.'
          }
        ]
      }
    },
    {
      id: 'anti6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Mixed Antiderivative Problems — Set 2** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $f(x)$ if $f\'(x) = \\cos x + \\frac{1}{x}$ and $f(\\pi) = 0$.',
            options: ['$\\sin x + \\ln|x| - \\ln\\pi$', '$\\sin x + \\ln|x|$', '$-\\sin x + \\ln|x| - \\ln\\pi$', '$\\cos x + \\ln|x| - \\ln\\pi$'],
            correctAnswer: 0,
            explanation: '$f(x) = \\sin x + \\ln|x| + C$. $f(\\pi) = \\sin\\pi + \\ln\\pi + C = 0 + \\ln\\pi + C = 0$, so $C = -\\ln\\pi$.'
          },
          {
            question: 'Evaluate $\\int \\frac{x^4 + 3}{x^2}\\,dx$.',
            options: ['$\\frac{x^3}{3} - \\frac{3}{x} + C$', '$\\frac{x^3}{3} + \\frac{3}{x} + C$', '$\\frac{x^5}{5} + 3\\ln|x| + C$', '$x^2 - \\frac{3}{x} + C$'],
            correctAnswer: 0,
            explanation: 'Split: $\\int (x^2 + 3x^{-2})\\,dx = \\frac{x^3}{3} + 3 \\cdot \\frac{x^{-1}}{-1} + C = \\frac{x^3}{3} - \\frac{3}{x} + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{1}{\\sqrt{1-x^2}}\\,dx$.',
            options: ['$\\arctan(x) + C$', '$\\arcsin(x) + C$', '$-\\sqrt{1-x^2} + C$', '$\\frac{1}{2}\\ln|1-x^2| + C$'],
            correctAnswer: 1,
            explanation: 'The $\\sqrt{a^2-x^2}$ form with $a = 1$: $\\arcsin(x) + C$.'
          }
        ]
      }
    },
    {
      id: 'anti6-strategies',
      type: 'text' as const,
      content: `### Common AP Mistakes on Mixed Problems

| Mistake | Wrong | Correct |
|:---:|:---:|:---:|
| Forgetting $+C$ | $\\int x\\,dx = x^2/2$ | $\\int x\\,dx = x^2/2 + C$ |
| $\\int 1/x = x^0/0$ | Undefined | $\\ln|x| + C$ |
| Missing coefficient | $\\int x^{1/2} = x^{3/2}$ | $\\frac{2}{3}x^{3/2}$ |
| Trig sign errors | $\\int \\sin x = \\sin x$ | $\\int \\sin x = -\\cos x$ |
| Not rewriting first | $\\int \\frac{x+1}{x}$ stuck | $= \\int (1 + 1/x)\\,dx$ |
| $\\int f \\cdot g \\neq (\\int f)(\\int g)$ | Product of integrals | Must rewrite or use u-sub |

> **Key Fact:** The most common FRQ error is forgetting $+C$ on indefinite integrals. On the AP Exam, this can cost you a point!`
    },
    {
      id: 'anti6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the technique and compute.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{3}{\\sqrt{16-x^2}}\\,dx$: The technique is:',
            options: ['Power Rule', 'Trig formula', 'Inverse trig (arcsin)', 'Inverse trig (arctan)', 'Rewrite first'],
            correctAnswers: ['Inverse trig (arcsin)'],
            hints: ['$\\sqrt{a^2-x^2}$ form with constant numerator.'],
            explanation: '$a = 4$: $3\\arcsin(x/4) + C$.'
          },
          {
            label: '$\\int \\frac{x^3-1}{x}\\,dx$: The technique is:',
            options: ['Power Rule', 'Trig formula', 'Inverse trig (arcsin)', 'Inverse trig (arctan)', 'Rewrite first'],
            correctAnswers: ['Rewrite first'],
            hints: ['Divide each term by $x$ first.'],
            explanation: '$\\int (x^2 - x^{-1})\\,dx = \\frac{x^3}{3} - \\ln|x| + C$.'
          },
          {
            label: '$\\int (\\csc^2 x + e^x)\\,dx$: The technique is:',
            options: ['Power Rule', 'Trig formula + exponential', 'Inverse trig (arcsin)', 'Inverse trig (arctan)', 'Rewrite first'],
            correctAnswers: ['Trig formula + exponential'],
            hints: ['Split and use known formulas for each.'],
            explanation: '$\\int \\csc^2 x = -\\cot x$ and $\\int e^x = e^x$. Result: $-\\cot x + e^x + C$.'
          }
        ]
      }
    },
    {
      id: 'anti6-input',
      type: 'input-box' as const,
      content: '**Solve the IVP.** ✍️',
      exercise: {
        question: 'Given $f\'(x) = 6x^2 - 4x + 1$ and $f(1) = 3$, find $f(2)$.\n\n(Enter a whole number.)',
        correctAnswer: '12',
        acceptableAnswers: ['12', '12.0'],
        hints: [
          'First find the general antiderivative: $f(x) = 2x^3 - 2x^2 + x + C$.',
          'Use $f(1) = 3$: $2(1) - 2(1) + 1 + C = 3$, so $C = 2$.',
          '$f(x) = 2x^3 - 2x^2 + x + 2$. Now compute $f(2)$.'
        ],
        explanation: '$f(x) = 2x^3 - 2x^2 + x + C$. $f(1) = 2 - 2 + 1 + C = 1 + C = 3$, so $C = 2$. $f(2) = 2(8) - 2(4) + 2 + 2 = 16 - 8 + 2 + 2 = 12$.'
      }
    },
    {
      id: 'anti6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Strategy | When to Use |
|:---:|:---:|
| Split the integral | Sums and differences |
| Power Rule | Any $x^n$ with $n \\neq -1$ |
| $\\ln|x|$ | $n = -1$ |
| Trig formulas | Recognize the 6 basic forms |
| Inverse trig | $\\sqrt{a^2-x^2}$ or $a^2+x^2$ |
| Rewrite first | Products, fractions, radicals |

$$\\boxed{\\text{Step 1: Classify} \\to \\text{Step 2: Apply} \\to \\text{Step 3: Verify by differentiating}}$$

> **Up Next:** Part 7 — Comprehensive Assessment.`
    }
  ]
};
