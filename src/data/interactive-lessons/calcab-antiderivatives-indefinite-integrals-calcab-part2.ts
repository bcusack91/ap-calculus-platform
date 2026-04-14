export const calcabAntiderivativesPart2Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti2-intro',
      type: 'text' as const,
      content: `# ∫ Antiderivatives

**Part 2 of 7 — Essential Antiderivative Formulas**

### The Complete Table

$$\\boxed{\\text{Memorize these — they are the building blocks of ALL integration}}$$

| Function $f(x)$ | Antiderivative $\\int f(x)\\,dx$ | Derivative Check |
|:---:|:---:|:---:|
| $x^n$ $(n \\neq -1)$ | $\\frac{x^{n+1}}{n+1} + C$ | $\\frac{d}{dx}\\left[\\frac{x^{n+1}}{n+1}\\right] = x^n$ ✓ |
| $\\frac{1}{x}$ | $\\ln|x| + C$ | $\\frac{d}{dx}[\\ln|x|] = \\frac{1}{x}$ ✓ |
| $e^x$ | $e^x + C$ | $\\frac{d}{dx}[e^x] = e^x$ ✓ |
| $a^x$ | $\\frac{a^x}{\\ln a} + C$ | $\\frac{d}{dx}\\left[\\frac{a^x}{\\ln a}\\right] = a^x$ ✓ |

> **Key Fact:** $e^x$ is its OWN antiderivative — the only function (up to constants) with this property!`
    },
    {
      id: 'anti2-trig',
      type: 'text' as const,
      content: `### Trigonometric Antiderivatives

| Function | Antiderivative | Memory Aid |
|:---:|:---:|:---:|
| $\\sin x$ | $-\\cos x + C$ | Negative! (sign flips) |
| $\\cos x$ | $\\sin x + C$ | Positive! (no flip) |
| $\\sec^2 x$ | $\\tan x + C$ | Reverse of $\\frac{d}{dx}[\\tan x]$ |
| $\\csc^2 x$ | $-\\cot x + C$ | Negative! |
| $\\sec x \\tan x$ | $\\sec x + C$ | Reverse of $\\frac{d}{dx}[\\sec x]$ |
| $\\csc x \\cot x$ | $-\\csc x + C$ | Negative! |

> **Pattern:** The "co-" functions (cosine, cosecant, cotangent) always get a NEGATIVE sign when integrating.

### Inverse Trig Antiderivatives

| Function | Antiderivative |
|:---:|:---:|
| $\\frac{1}{\\sqrt{1-x^2}}$ | $\\arcsin x + C$ |
| $\\frac{1}{1+x^2}$ | $\\arctan x + C$ |

> **AP Tip:** These two inverse trig forms appear often on the AP exam. Know them cold!`
    },
    {
      id: 'anti2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Essential Antiderivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int (3\\sin x + 2e^x)\\,dx$.',
            options: ['$-3\\cos x + 2e^x + C$', '$3\\cos x + 2e^x + C$', '$-3\\cos x + e^{2x} + C$', '$3\\sin x + 2e^x + C$'],
            correctAnswer: 0,
            explanation: '$\\int 3\\sin x\\,dx = -3\\cos x$. $\\int 2e^x\\,dx = 2e^x$. Together: $-3\\cos x + 2e^x + C$.'
          },
          {
            question: 'Evaluate $\\int \\left(\\frac{4}{x} + \\sec^2 x\\right)\\,dx$.',
            options: ['$4\\ln x + \\tan x + C$', '$4\\ln|x| + \\tan x + C$', '$\\frac{4}{x^2} + \\sec x + C$', '$4\\ln|x| + \\sec x + C$'],
            correctAnswer: 1,
            explanation: '$\\int \\frac{4}{x}\\,dx = 4\\ln|x|$ (absolute value!). $\\int \\sec^2 x\\,dx = \\tan x$. Answer: $4\\ln|x| + \\tan x + C$.'
          },
          {
            question: 'Evaluate $\\int 5^x\\,dx$.',
            options: ['$5^x + C$', '$\\frac{5^{x+1}}{x+1} + C$', '$\\frac{5^x}{\\ln 5} + C$', '$x \\cdot 5^{x-1} + C$'],
            correctAnswer: 2,
            explanation: '$\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$. With $a = 5$: $\\frac{5^x}{\\ln 5} + C$.'
          }
        ]
      }
    },
    {
      id: 'anti2-linearity',
      type: 'text' as const,
      content: `### Linearity of Integration

$$\\boxed{\\int [af(x) + bg(x)]\\,dx = a\\int f(x)\\,dx + b\\int g(x)\\,dx}$$

### Worked Examples

**Example 1:** $\\int (5\\cos x - 3e^x + \\frac{2}{x})\\,dx$

$= 5\\sin x - 3e^x + 2\\ln|x| + C$

**Example 2:** $\\int (\\sec^2 x - \\csc^2 x)\\,dx$

$= \\tan x - (-\\cot x) + C = \\tan x + \\cot x + C$

### What You CANNOT Do

| ✗ Wrong | Why |
|:---:|:---:|
| $\\int f(x) \\cdot g(x)\\,dx = \\int f\\,dx \\cdot \\int g\\,dx$ | Products don't split! |
| $\\int \\frac{f(x)}{g(x)}\\,dx = \\frac{\\int f\\,dx}{\\int g\\,dx}$ | Quotients don't split! |
| $\\int [f(x)]^2\\,dx = \\frac{[F(x)]^3}{3}$ | Composition doesn't work this way! |

> **Key Concept:** Integration is LINEAR (constants and sums), but NOT multiplicative. You can only split **sums** and pull out **constants**.`
    },
    {
      id: 'anti2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Trig & Exponential Integrals** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int (\\cos x - \\sin x)\\,dx$.',
            options: ['$\\sin x + \\cos x + C$', '$\\sin x - \\cos x + C$', '$-\\sin x + \\cos x + C$', '$-\\sin x - \\cos x + C$'],
            correctAnswer: 0,
            explanation: '$\\int \\cos x\\,dx = \\sin x$. $\\int (-\\sin x)\\,dx = \\cos x$. Answer: $\\sin x + \\cos x + C$.'
          },
          {
            question: 'Which integral is INVALID to split?',
            options: ['$\\int (x^2 + 3x)\\,dx$', '$\\int 5\\sin x\\,dx$', '$\\int x^2 \\cdot e^x\\,dx$', '$\\int (e^x - \\cos x)\\,dx$'],
            correctAnswer: 2,
            explanation: 'The product $x^2 \\cdot e^x$ cannot be split into separate integrals. This requires integration by parts (BC topic).'
          }
        ]
      }
    },
    {
      id: 'anti2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match each integral to its result.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int e^x\\,dx =$',
            options: ['$e^x + C$', '$xe^{x-1} + C$', '$\\frac{e^{x+1}}{x+1} + C$', '$\\ln(e^x) + C$'],
            correctAnswers: ['$e^x + C$'],
            hints: ['$e^x$ is its own antiderivative.'],
            explanation: '$e^x$ is the unique function (up to constants) that equals its own derivative.'
          },
          {
            label: '$\\int \\sec x \\tan x\\,dx =$',
            options: ['$\\sec^2 x + C$', '$\\sec x + C$', '$\\tan x + C$', '$-\\sec x + C$'],
            correctAnswers: ['$\\sec x + C$'],
            hints: ['What function has derivative $\\sec x \\tan x$?'],
            explanation: '$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$, so $\\int \\sec x \\tan x\\,dx = \\sec x + C$.'
          },
          {
            label: '$\\int \\frac{1}{1+x^2}\\,dx =$',
            options: ['$\\ln(1+x^2) + C$', '$\\arctan x + C$', '$\\arcsin x + C$', '$\\frac{-1}{(1+x^2)^2} + C$'],
            correctAnswers: ['$\\arctan x + C$'],
            hints: ['This is one of the inverse trig forms.'],
            explanation: '$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1+x^2}$, so the integral is $\\arctan x + C$.'
          }
        ]
      }
    },
    {
      id: 'anti2-input',
      type: 'input-box' as const,
      content: '**Evaluate the integral.** ✍️',
      exercise: {
        question: '$\\int (6e^x + 4\\cos x)\\,dx$ evaluated at $x = 0$ (with $C = 0$) equals what?',
        correctAnswer: '6',
        acceptableAnswers: ['6', '6.0'],
        hints: [
          'First find the antiderivative: $6e^x + 4\\sin x + C$.',
          'Set $C = 0$ and evaluate at $x = 0$.',
          '$6e^0 + 4\\sin(0) = 6(1) + 4(0)$.'
        ],
        explanation: '$\\int (6e^x + 4\\cos x)\\,dx = 6e^x + 4\\sin x + C$.\\n\\nAt $x = 0$ with $C = 0$: $6e^0 + 4\\sin 0 = 6(1) + 0 = 6$.'
      }
    },
    {
      id: 'anti2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

$$\\boxed{\\text{"Co-" functions get a negative: } \\int \\sin x = -\\cos x, \\quad \\int \\csc^2 x = -\\cot x}$$

| Category | Key Formulas |
|:---:|:---:|
| Exponential | $\\int e^x\\,dx = e^x + C$; $\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$ |
| Trig | Memorize all 6; "co-" functions are negative |
| Inverse trig | $\\int \\frac{1}{\\sqrt{1-x^2}} = \\arcsin$; $\\int \\frac{1}{1+x^2} = \\arctan$ |
| Linearity | Only sums and constants — NOT products or quotients |

> **Up Next:** Part 3 — Initial Value Problems.`
    }
  ]
};
