export const calcabBasicDiffPart7Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff7-intro',
      type: 'text' as const,
      content: `# 📐 Review & Applications

**Part 7 of 7 — Comprehensive Review & AP Exam Preparation**

### Complete Derivative Reference Table

| Rule | Formula |
|------|---------|
| **Power** | $\\frac{d}{dx}[x^n] = nx^{n-1}$ |
| **Constant** | $\\frac{d}{dx}[c] = 0$ |
| **Constant Multiple** | $\\frac{d}{dx}[cf] = cf'$ |
| **Sum/Difference** | $\\frac{d}{dx}[f \\pm g] = f' \\pm g'$ |
| **Product** | $(fg)' = f'g + fg'$ |
| **Quotient** | $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$ |

### Special Function Derivatives

| Function | Derivative | Domain Note |
|----------|-----------|-------------|
| $e^x$ | $e^x$ | All reals |
| $\\ln x$ | $\\frac{1}{x}$ | $x > 0$ |
| $a^x$ | $a^x \\ln a$ | $a > 0, a \\neq 1$ |
| $\\log_a x$ | $\\frac{1}{x \\ln a}$ | $x > 0$ |

### Trig Derivatives (Must Memorize!)

| Positive Derivatives | Negative Derivatives |
|:---:|:---:|
| $\\frac{d}{dx}[\\sin x] = \\cos x$ | $\\frac{d}{dx}[\\cos x] = -\\sin x$ |
| $\\frac{d}{dx}[\\tan x] = \\sec^2 x$ | $\\frac{d}{dx}[\\cot x] = -\\csc^2 x$ |
| $\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$ | $\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$ |`
    },
    {
      id: 'diff7-ap-types',
      type: 'text' as const,
      content: `### AP Exam Question Types for Basic Differentiation

| Type | What They Ask | Key Skill |
|------|-------------|-----------|
| **Direct computation** | "Find $f'(x)$" | Apply correct rule |
| **Evaluate at a point** | "Find $f'(2)$" | Differentiate then substitute |
| **From a table** | Given $f(a), f'(a), g(a), g'(a)$ | Plug into Product/Quotient Rule |
| **Tangent line** | "Equation of tangent at $x = c$" | Need point + slope |
| **Normal line** | "Equation of normal at $x = c$" | Slope = $-\\frac{1}{f'(c)}$ |
| **Horizontal tangent** | "Where is tangent horizontal?" | Solve $f'(x) = 0$ |
| **Particle motion** | "When at rest? Direction?" | Analyze $v(t) = s'(t)$ |

### Table-Based Problems — Complete Strategy

Given this table:

| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |
|:---:|:---:|:---:|:---:|:---:|
| $1$ | $4$ | $-2$ | $3$ | $5$ |

Find each of the following at $x = 1$:

| Expression | Formula | Computation | Answer |
|-----------|---------|-------------|--------|
| $(f+g)'(1)$ | $f'(1)+g'(1)$ | $-2+5$ | $3$ |
| $(fg)'(1)$ | $f'g+fg'$ | $(-2)(3)+(4)(5)$ | $14$ |
| $(f/g)'(1)$ | $\\frac{f'g-fg'}{g^2}$ | $\\frac{(-2)(3)-(4)(5)}{9}$ | $-\\frac{26}{9}$ |
| $(3f)'(1)$ | $3f'(1)$ | $3(-2)$ | $-6$ |`
    },
    {
      id: 'diff7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}(x^2 e^x \\sin x)$ at $x = 0$.',
            options: ['$0$', '$1$', '$2$', 'undefined'],
            correctAnswer: 0,
            explanation: 'Using triple product rule: $f\'gh + fg\'h + fgh\'$. At $x=0$, $f(0) = 0$ (from $x^2$), and two of the three terms contain the factor $x^2$ evaluated at 0. The full derivative at 0: $2(0)(1)(0) + 0(1)(0) + 0(0)(1) = 0$.'
          },
          {
            question: 'If $f(x) = \\frac{x^2+1}{x^2-1}$, where is $f\'(x) = 0$?',
            options: ['$x = 0$', '$x = 1$', 'Nowhere — $f\'(x)$ is never zero', '$x = \\pm 1$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = \\frac{2x(x^2-1) - (x^2+1)(2x)}{(x^2-1)^2} = \\frac{-4x}{(x^2-1)^2}$. This equals 0 only when $x = 0$.'
          },
          {
            question: 'Find the 50th derivative of $\\cos x$.',
            options: ['$\\cos x$', '$-\\cos x$', '$\\sin x$', '$-\\sin x$'],
            correctAnswer: 1,
            explanation: 'The cycle repeats every 4: $\\cos x, -\\sin x, -\\cos x, \\sin x, \\cos x, ...$. $50 = 4(12) + 2$, so the 50th derivative matches the 2nd: $-\\cos x$.'
          }
        ]
      }
    },
    {
      id: 'diff7-tangent',
      type: 'text' as const,
      content: `### Tangent & Normal Lines — AP Exam Template

**Tangent Line** at $x = c$:

$$\\boxed{y - f(c) = f'(c)(x - c)}$$

**Normal Line** at $x = c$ (perpendicular to tangent):

$$\\boxed{y - f(c) = -\\frac{1}{f'(c)}(x - c)}$$

### Complete Worked Example

**Find the tangent and normal lines to** $y = x^3 - 4x$ **at** $x = 2$.

| Step | Tangent | Normal |
|------|---------|--------|
| Point: $y(2) = 8-8 = 0$ | $(2, 0)$ | $(2, 0)$ |
| $y' = 3x^2 - 4$ | $y'(2) = 8$ | slope $= -\\frac{1}{8}$ |
| Equation | $y = 8(x-2) = 8x-16$ | $y = -\\frac{1}{8}(x-2)$ |

### Horizontal & Vertical Tangent Lines

| Type | Condition | Meaning |
|------|-----------|---------|
| Horizontal tangent | $f'(c) = 0$ | Critical point candidate |
| Vertical tangent | $f'(c)$ is undefined, $f$ continuous | Cusp or vertical tangent point |

> **AP Tip:** When asked "for what values of $x$ is the tangent horizontal?", you are being asked to solve $f'(x) = 0$. Always check that $f$ is defined at those points!`
    },
    {
      id: 'diff7-quiz2',
      type: 'multiple-choice' as const,
      content: '**AP-Style Final Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A function $f$ satisfies $f(1) = 3$, $f\'(1) = -2$. If $g(x) = x^2 f(x)$, find $g\'(1)$.',
            options: ['$-2$', '$4$', '$6$', '$2$'],
            correctAnswer: 1,
            explanation: '$g\'(x) = 2xf(x) + x^2f\'(x)$. At $x=1$: $g\'(1) = 2(1)(3) + (1)^2(-2) = 6 - 2 = 4$.'
          },
          {
            question: 'Find the equation of the tangent line to $y = x^3 - 4x$ at $x = 2$.',
            options: ['$y = 8x - 16$', '$y = 8x - 8$', '$y = 8(x-2)$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$y(2) = 8-8 = 0$. $y\'(x) = 3x^2-4$, $y\'(2) = 12-4 = 8$. Tangent: $y - 0 = 8(x-2)$, i.e., $y = 8x - 16$. Both A and C are equivalent.'
          },
          {
            question: 'For $f(x) = x^2 + \\frac{2}{x}$, at what $x > 0$ does $f$ have a horizontal tangent?',
            options: ['$x = 1$', '$x = 2$', '$x = \\sqrt[3]{1}$', '$x = \\sqrt[3]{1} = 1$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = 2x - 2x^{-2} = 2x - \\frac{2}{x^2}$. Set to 0: $2x = \\frac{2}{x^2}$, so $x^3 = 1$, giving $x = 1$.'
          }
        ]
      }
    },
    {
      id: 'diff7-common-errors',
      type: 'text' as const,
      content: `### Common Errors to Avoid on the AP Exam

| Error | Wrong | Correct |
|-------|-------|---------|
| Multiplying derivatives | $(fg)' = f'g'$ | $(fg)' = f'g + fg'$ |
| Forgetting negative in QR | $\\frac{f'g + fg'}{g^2}$ | $\\frac{f'g - fg'}{g^2}$ |
| Co-function sign | $\\frac{d}{dx}[\\cos x] = \\sin x$ | $\\frac{d}{dx}[\\cos x] = -\\sin x$ |
| Constant derivative | $\\frac{d}{dx}[\\pi^2] = 2\\pi$ | $\\frac{d}{dx}[\\pi^2] = 0$ |
| Forgetting to rewrite | $\\frac{d}{dx}[\\sqrt{x}] = \\frac{1}{2}\\sqrt{x-1}$ | $x^{1/2} \\to \\frac{1}{2}x^{-1/2}$ |
| Wrong evaluation | Computing $f'(x)$ but forgetting to plug in $x = c$ | Always substitute AFTER differentiating |`
    },
    {
      id: 'diff7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick fire — identify the derivative.**',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{d}{dx}[x^{-3/2}] = $',
            options: ['$-\\frac{3}{2}x^{-5/2}$', '$\\frac{3}{2}x^{-1/2}$', '$-\\frac{3}{2}x^{-1/2}$', '$\\frac{2}{3}x^{-5/2}$'],
            correctAnswers: ['$-\\frac{3}{2}x^{-5/2}$'],
            hints: ['Power Rule: bring down $-3/2$ and subtract 1 from the exponent.'],
            explanation: '$\\frac{d}{dx}[x^{-3/2}] = -\\frac{3}{2}x^{-3/2 - 1} = -\\frac{3}{2}x^{-5/2}$.'
          },
          {
            label: 'If $f(2) = 5$ and $g(2) = 3$, $f\'(2) = -1$, $g\'(2) = 4$, find $(fg)\'(2)$:',
            options: ['$17$', '$-4$', '$23$', '$-3$'],
            correctAnswers: ['$17$'],
            hints: ['$(fg)\' = f\'g + fg\'$. Plug in all four values.'],
            explanation: '$f\'(2)g(2) + f(2)g\'(2) = (-1)(3) + (5)(4) = -3 + 20 = 17$.'
          }
        ]
      }
    },
    {
      id: 'diff7-input',
      type: 'input-box' as const,
      content: '**Final challenge problem.** ✍️',
      exercise: {
        question: 'Given $f(2) = 3$, $f\'(2) = -1$, $g(2) = 4$, $g\'(2) = 2$, find $\\left(\\frac{f}{g}\\right)\'(2)$. Write as a fraction (e.g., -5/8).',
        correctAnswer: '-10/16',
        acceptableAnswers: ['-10/16', '-5/8', '-0.625'],
        hints: [
          'Use the Quotient Rule: $\\left(\\frac{f}{g}\\right)\' = \\frac{f\'g - fg\'}{g^2}$.',
          'Plug in: $\\frac{(-1)(4) - (3)(2)}{(4)^2}$.',
          'Numerator: $-4 - 6 = -10$. Denominator: $16$.'
        ],
        explanation: '$\\left(\\frac{f}{g}\\right)\'(2) = \\frac{f\'(2)g(2) - f(2)g\'(2)}{[g(2)]^2} = \\frac{(-1)(4) - (3)(2)}{4^2} = \\frac{-4-6}{16} = \\frac{-10}{16} = -\\frac{5}{8}$.'
      }
    },
    {
      id: 'diff7-summary',
      type: 'text' as const,
      content: `### Basic Differentiation Rules — Complete! ✅

**You have mastered:**
- ✅ Power Rule (including negative/fractional exponents)
- ✅ Constant, Constant Multiple, and Sum/Difference Rules
- ✅ Product Rule: $(fg)' = f'g + fg'$
- ✅ Quotient Rule: $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$
- ✅ All six trigonometric derivatives
- ✅ Higher-order derivatives and concavity
- ✅ Particle motion analysis
- ✅ Tangent and normal lines
- ✅ Table-based derivative problems

### What's Next?

| Next Topic | What You'll Learn |
|-----------|-------------------|
| **Chain Rule** | Derivatives of compositions: $f(g(x))$ |
| **Implicit Differentiation** | When $y$ is not explicitly solved |
| **Related Rates** | How quantities change together |

> The Chain Rule is arguably the most important rule in calculus — it extends everything you've learned to composite functions!`
    }
  ]
};
