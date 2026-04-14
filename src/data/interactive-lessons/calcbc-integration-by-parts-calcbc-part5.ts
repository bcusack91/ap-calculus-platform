export const calcbcIntByPartsPart5Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp5-intro',
      type: 'text' as const,
      content: `# \u222B Integration by Parts

**Part 5 of 7 \u2014 Special Cases: Inverse Trig & Logarithms**

Some functions don\u2019t have obvious antiderivatives, but they DO have known derivatives. For these, we set the tricky function as $u$ and let $dv = dx$.`
    },
    {
      id: 'ibp5-strategy',
      type: 'text' as const,
      content: `### The \u201c$dv = dx$\u201d Strategy

When the integrand has no obvious product structure, set:
- $u = $ the function (so you can differentiate it)
- $dv = dx$ (so $v = x$)

This works beautifully for:

| Function | $u$ | $du$ |
|----------|-----|------|
| $\\ln x$ | $\\ln x$ | $\\frac{1}{x}\\,dx$ |
| $\\arctan x$ | $\\arctan x$ | $\\frac{1}{1+x^2}\\,dx$ |
| $\\arcsin x$ | $\\arcsin x$ | $\\frac{1}{\\sqrt{1-x^2}}\\,dx$ |
| $(\\ln x)^2$ | $(\\ln x)^2$ | $\\frac{2\\ln x}{x}\\,dx$ |

> **Key Fact:** L and I in LIATE always become $u$. Their derivatives produce algebraic expressions that pair nicely with $v = x$.`
    },
    {
      id: 'ibp5-examples',
      type: 'text' as const,
      content: `### Essential Results

**1. $\\int \\ln x\\,dx$**

$u = \\ln x$, $dv = dx \\Rightarrow du = \\frac{1}{x}\\,dx$, $v = x$

$$\\int \\ln x\\,dx = x\\ln x - \\int x \\cdot \\frac{1}{x}\\,dx = x\\ln x - x + C$$

$$\\boxed{\\int \\ln x\\,dx = x(\\ln x - 1) + C}$$

---

**2. $\\int \\arctan x\\,dx$**

$u = \\arctan x$, $dv = dx \\Rightarrow du = \\frac{1}{1+x^2}\\,dx$, $v = x$

$$\\int \\arctan x\\,dx = x\\arctan x - \\int \\frac{x}{1+x^2}\\,dx$$

The remaining integral: let $w = 1+x^2$, $dw = 2x\\,dx$:

$$\\boxed{\\int \\arctan x\\,dx = x\\arctan x - \\frac{1}{2}\\ln(1+x^2) + C}$$

---

**3. $\\int \\arcsin x\\,dx$**

$u = \\arcsin x$, $dv = dx \\Rightarrow du = \\frac{1}{\\sqrt{1-x^2}}\\,dx$, $v = x$

$$\\int \\arcsin x\\,dx = x\\arcsin x - \\int \\frac{x}{\\sqrt{1-x^2}}\\,dx$$

Let $w = 1 - x^2$: remaining integral $= \\sqrt{1-x^2}$

$$\\boxed{\\int \\arcsin x\\,dx = x\\arcsin x + \\sqrt{1-x^2} + C}$$`
    },
    {
      id: 'ibp5-powers',
      type: 'text' as const,
      content: `### Higher Powers of $\\ln x$

**$\\int (\\ln x)^2\\,dx$**

$u = (\\ln x)^2$, $dv = dx$

$$= x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C$$

$$\\boxed{\\int (\\ln x)^2\\,dx = x[(\\ln x)^2 - 2\\ln x + 2] + C}$$

**Reduction formula** (for reference):
$$\\int (\\ln x)^n\\,dx = x(\\ln x)^n - n\\int (\\ln x)^{n-1}\\,dx$$`
    },
    {
      id: 'ibp5-mc1',
      type: 'multiple-choice' as const,
      content: '**Special Cases Practice**',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\arcsin x\\,dx$.',
            options: [
              '$x\\arcsin x + \\sqrt{1-x^2} + C$',
              '$x\\arcsin x - \\sqrt{1-x^2} + C$',
              '$\\frac{x}{\\sqrt{1-x^2}} + C$',
              '$x\\arcsin x + C$'
            ],
            correctAnswer: 0,
            explanation: '$u = \\arcsin x$, $dv = dx$. The remaining integral $-\\int \\frac{x}{\\sqrt{1-x^2}}\\,dx$ evaluates to $+\\sqrt{1-x^2}$ via u-sub $w = 1-x^2$.'
          },
          {
            question: 'What is $\\int x\\ln x\\,dx$?',
            options: [
              '$\\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$',
              '$\\frac{x^2}{2}\\ln x + C$',
              '$x\\ln x - x + C$',
              '$\\frac{x^2}{4}\\ln x + C$'
            ],
            correctAnswer: 0,
            explanation: '$u = \\ln x$ (L beats A), $dv = x\\,dx$, $v = \\frac{x^2}{2}$. Result: $\\frac{x^2}{2}\\ln x - \\int \\frac{x^2}{2} \\cdot \\frac{1}{x}\\,dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$.'
          }
        ]
      }
    },
    {
      id: 'ibp5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Setup**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\int \\arctan(3x)\\,dx$, the correct choice is:',
            options: ['$u = \\arctan(3x)$, $dv = dx$', '$u = 3x$, $dv = \\arctan\\,dx$', '$u = dx$, $dv = \\arctan(3x)$'],
            correctAnswers: ['$u = \\arctan(3x)$, $dv = dx$'],
            hints: ['Inverse trig (I) always goes as $u$. There\u2019s no second factor, so $dv = dx$.'],
            explanation: '$u = \\arctan(3x)$, $du = \\frac{3}{1+9x^2}\\,dx$, $v = x$. The remaining integral is manageable via u-sub.'
          },
          {
            label: 'The remaining integral after applying IBP to $\\int \\arctan x\\,dx$ is solved using:',
            options: ['u-substitution', 'Another IBP', 'Partial fractions', 'Direct integration'],
            correctAnswers: ['u-substitution'],
            hints: ['The remaining integral is $\\int \\frac{x}{1+x^2}\\,dx$. What substitution works?'],
            explanation: 'Let $w = 1 + x^2$, then $dw = 2x\\,dx$. The integral becomes $\\frac{1}{2}\\ln(1+x^2)$.'
          }
        ]
      }
    },
    {
      id: 'ibp5-input',
      type: 'input-box' as const,
      content: '**Numerical Evaluation**',
      exercise: {
        question: 'Evaluate $\\int_0^1 \\arctan x\\,dx$. Using the antiderivative $x\\arctan x - \\frac{1}{2}\\ln(1+x^2)$, compute the exact answer: $\\frac{\\pi}{a} - \\frac{1}{2}\\ln b$. What is $a + b$?',
        correctAnswer: '6',
        acceptableAnswers: ['6'],
        hints: ['At $x=1$: $1 \\cdot \\frac{\\pi}{4} - \\frac{1}{2}\\ln 2$. At $x=0$: $0 - 0 = 0$.', 'So the answer is $\\frac{\\pi}{4} - \\frac{1}{2}\\ln 2$. Thus $a = 4$, $b = 2$.'],
        explanation: '$[x\\arctan x - \\frac{1}{2}\\ln(1+x^2)]_0^1 = \\frac{\\pi}{4} - \\frac{1}{2}\\ln 2$. So $a = 4$, $b = 2$, and $a + b = 6$.'
      }
    },
    {
      id: 'ibp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

| Integral | Result |
|----------|--------|
| $\\int \\ln x\\,dx$ | $x(\\ln x - 1) + C$ |
| $\\int \\arctan x\\,dx$ | $x\\arctan x - \\frac{1}{2}\\ln(1+x^2) + C$ |
| $\\int \\arcsin x\\,dx$ | $x\\arcsin x + \\sqrt{1-x^2} + C$ |
| $\\int (\\ln x)^2\\,dx$ | $x[(\\ln x)^2 - 2\\ln x + 2] + C$ |

> **AP Tip:** These results are worth memorizing \u2014 they appear frequently in free-response questions and save substantial time.

> **Coming Up:** Part 6 is a **problem-solving workshop** with mixed IBP challenges.`
    }
  ]
};
