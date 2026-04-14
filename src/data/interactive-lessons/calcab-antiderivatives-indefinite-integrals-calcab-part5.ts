export const calcabAntiderivativesPart5Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti5-intro',
      type: 'text' as const,
      content: `# ∫ Antiderivatives

**Part 5 of 7 — Inverse Trig Antiderivatives**

### The Two Essential Forms (AB Exam)

$$\\boxed{\\int \\frac{1}{\\sqrt{a^2 - x^2}}\\,dx = \\arcsin\\left(\\frac{x}{a}\\right) + C}$$

$$\\boxed{\\int \\frac{1}{a^2 + x^2}\\,dx = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C}$$

> **Key Fact:** The arcsecant formula ($\\int \\frac{1}{x\\sqrt{x^2-a^2}}$) is BC only. AB students need ONLY arcsin and arctan forms.

### How to Recognize Them

| Pattern in Denominator | Form | Antiderivative |
|:---:|:---:|:---:|
| $\\sqrt{a^2 - x^2}$ (square root, MINUS) | Arcsin | $\\arcsin(x/a)$ |
| $a^2 + x^2$ (no square root, PLUS) | Arctan | $\\frac{1}{a}\\arctan(x/a)$ |

**Careful with signs:** $\\sqrt{x^2 - a^2}$ is NOT the arcsin form (notice the minus is flipped!).`
    },
    {
      id: 'anti5-worked',
      type: 'text' as const,
      content: `### Worked Examples

**Example 1:** $\\int \\frac{1}{\\sqrt{9-x^2}}\\,dx$

Here $a^2 = 9$, so $a = 3$: $\\arcsin\\left(\\frac{x}{3}\\right) + C$

**Example 2:** $\\int \\frac{1}{4 + x^2}\\,dx$

Here $a^2 = 4$, so $a = 2$: $\\frac{1}{2}\\arctan\\left(\\frac{x}{2}\\right) + C$

**Example 3:** $\\int \\frac{3}{\\sqrt{1 - 4x^2}}\\,dx$

Rewrite: $\\frac{3}{\\sqrt{1-(2x)^2}}$. Let $u = 2x$, $du = 2\\,dx$:

$\\frac{3}{2}\\int \\frac{du}{\\sqrt{1-u^2}} = \\frac{3}{2}\\arcsin(u) + C = \\frac{3}{2}\\arcsin(2x) + C$

### Completing the Square

Sometimes you need to complete the square first:

$$\\int \\frac{1}{x^2 + 6x + 13}\\,dx$$

$x^2 + 6x + 13 = (x+3)^2 + 4$. Now it's arctan form!

$= \\frac{1}{2}\\arctan\\left(\\frac{x+3}{2}\\right) + C$

> **AP Tip:** If the denominator is a quadratic that doesn't factor, try completing the square to reveal an inverse trig form.`
    },
    {
      id: 'anti5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inverse Trig Integrals** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{1}{\\sqrt{9 - x^2}}\\,dx$.',
            options: ['$\\arcsin\\left(\\frac{x}{3}\\right) + C$', '$\\arcsin(3x) + C$', '$3\\arcsin(x) + C$', '$\\arctan\\left(\\frac{x}{3}\\right) + C$'],
            correctAnswer: 0,
            explanation: '$a = 3$: $\\int \\frac{1}{\\sqrt{9-x^2}}\\,dx = \\arcsin(x/3) + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{1}{4 + x^2}\\,dx$.',
            options: ['$\\frac{1}{2}\\arctan\\left(\\frac{x}{2}\\right) + C$', '$\\arctan\\left(\\frac{x}{2}\\right) + C$', '$\\frac{1}{4}\\arctan(x) + C$', '$\\ln|4+x^2| + C$'],
            correctAnswer: 0,
            explanation: '$a = 2$: $\\frac{1}{a}\\arctan(x/a) = \\frac{1}{2}\\arctan(x/2) + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{3}{\\sqrt{1 - 4x^2}}\\,dx$.',
            options: ['$3\\arcsin(2x) + C$', '$\\frac{3}{2}\\arcsin(2x) + C$', '$3\\arcsin(4x) + C$', '$\\frac{3}{4}\\arcsin(2x) + C$'],
            correctAnswer: 1,
            explanation: 'Rewrite as $\\frac{3}{\\sqrt{1-(2x)^2}}$. With $u = 2x$: $\\frac{3}{2}\\arcsin(2x) + C$.'
          }
        ]
      }
    },
    {
      id: 'anti5-compare',
      type: 'text' as const,
      content: `### Don't Confuse These!

| Integral | Result | Key Clue |
|:---:|:---:|:---:|
| $\\int \\frac{1}{\\sqrt{1-x^2}}\\,dx$ | $\\arcsin(x) + C$ | Square root + minus |
| $\\int \\frac{1}{1+x^2}\\,dx$ | $\\arctan(x) + C$ | No square root + plus |
| $\\int \\frac{x}{1+x^2}\\,dx$ | $\\frac{1}{2}\\ln(1+x^2) + C$ | Has $x$ in numerator! (u-sub) |
| $\\int \\frac{x}{\\sqrt{1-x^2}}\\,dx$ | $-\\sqrt{1-x^2} + C$ | Has $x$ in numerator! (u-sub) |

> **Key Concept:** The inverse trig forms ONLY work when the numerator is a CONSTANT. If there's an $x$ in the numerator, it's a $u$-substitution problem instead!`
    },
    {
      id: 'anti5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Distinguish the Forms** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{x}{9+x^2}\\,dx$.',
            options: ['$\\frac{1}{3}\\arctan(x/3) + C$', '$\\frac{1}{2}\\ln(9+x^2) + C$', '$x\\arctan(x/3) + C$', '$\\frac{x^2}{18+2x^2} + C$'],
            correctAnswer: 1,
            explanation: 'There is an $x$ in the numerator! Let $u = 9+x^2$, $du = 2x\\,dx$: $\\frac{1}{2}\\int \\frac{du}{u} = \\frac{1}{2}\\ln|u| + C = \\frac{1}{2}\\ln(9+x^2) + C$.'
          },
          {
            question: 'Which integral gives an inverse trig result?',
            options: ['$\\int \\frac{x}{\\sqrt{4-x^2}}\\,dx$', '$\\int \\frac{5}{\\sqrt{4-x^2}}\\,dx$', '$\\int \\frac{2x}{4+x^2}\\,dx$', '$\\int \\frac{x^2}{1+x^2}\\,dx$'],
            correctAnswer: 1,
            explanation: 'Only option B has a constant numerator with the $\\sqrt{a^2-x^2}$ form: $5\\arcsin(x/2) + C$. The others have $x$ in the numerator or need algebraic rewriting.'
          }
        ]
      }
    },
    {
      id: 'anti5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each integral.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{1}{\\sqrt{25-x^2}}\\,dx$ is:',
            options: ['Arcsin form', 'Arctan form', 'Logarithm (u-sub)', 'Power Rule'],
            correctAnswers: ['Arcsin form'],
            hints: ['$\\sqrt{a^2-x^2}$ in denominator, constant numerator.'],
            explanation: '$a = 5$: $\\arcsin(x/5) + C$.'
          },
          {
            label: '$\\int \\frac{1}{16+x^2}\\,dx$ is:',
            options: ['Arcsin form', 'Arctan form', 'Logarithm (u-sub)', 'Power Rule'],
            correctAnswers: ['Arctan form'],
            hints: ['$a^2 + x^2$ in denominator, no square root, constant numerator.'],
            explanation: '$a = 4$: $\\frac{1}{4}\\arctan(x/4) + C$.'
          },
          {
            label: '$\\int \\frac{x}{16+x^2}\\,dx$ is:',
            options: ['Arcsin form', 'Arctan form', 'Logarithm (u-sub)', 'Power Rule'],
            correctAnswers: ['Logarithm (u-sub)'],
            hints: ['There is an $x$ in the numerator — that changes everything!'],
            explanation: '$u = 16+x^2$, $du = 2x\\,dx$: $\\frac{1}{2}\\ln(16+x^2) + C$.'
          }
        ]
      }
    },
    {
      id: 'anti5-input',
      type: 'input-box' as const,
      content: '**Evaluate the definite integral.** ✍️',
      exercise: {
        question: 'Find $\\int_0^1 \\frac{1}{1+x^2}\\,dx$.\n\nGive your answer as a fraction of $\\pi$.\n\n(Enter as: pi/4, pi/3, etc.)',
        correctAnswer: 'pi/4',
        acceptableAnswers: ['pi/4', 'π/4', '0.785', '0.7854'],
        hints: [
          'This is the arctan form with $a = 1$.',
          '$\\int_0^1 \\frac{1}{1+x^2}\\,dx = [\\arctan(x)]_0^1$.',
          '$\\arctan(1) - \\arctan(0) = \\frac{\\pi}{4} - 0$.'
        ],
        explanation: '$\\int_0^1 \\frac{1}{1+x^2}\\,dx = [\\arctan x]_0^1 = \\arctan(1) - \\arctan(0) = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$.'
      }
    },
    {
      id: 'anti5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

$$\\boxed{\\frac{1}{\\sqrt{a^2-x^2}} \\to \\arcsin\\left(\\frac{x}{a}\\right) \\qquad \\frac{1}{a^2+x^2} \\to \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right)}$$

| Concept | Key Rule |
|:---:|:---:|
| Arcsin form | $\\sqrt{a^2-x^2}$ in denominator, constant numerator |
| Arctan form | $a^2+x^2$ in denominator, constant numerator |
| $x$ in numerator | NOT inverse trig — use $u$-substitution |
| Completing square | Reveals hidden inverse trig forms |
| AB vs BC | AB only needs arcsin and arctan (not arcsec) |

> **Up Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
