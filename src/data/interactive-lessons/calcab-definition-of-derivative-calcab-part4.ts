export const calcabDerivativeDefPart4Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef4-intro',
      type: 'text' as const,
      content: `
# ∫ Derivative Notation

**Part 4 of 7 — The Language of Derivatives**

### 1. Common Notations

All of these mean "the derivative of $y$ with respect to $x$":

| Notation | Read as | Emphasized by |
|----------|---------|---------------|
| $f'(x)$ | "$f$ prime of $x$" | Lagrange |
| $\\frac{dy}{dx}$ | "$dy\\,dx$" | Leibniz |
| $\\frac{d}{dx}[f(x)]$ | "d dx of $f(x)$" | Operator form |
| $\\dot{y}$ | "$y$ dot" | Newton (time derivatives) |

### 2. Leibniz Notation: More Than Just a Symbol

$\\frac{dy}{dx}$ is NOT a fraction, but it **behaves** like one in many situations:

**Chain rule:** $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$ (cancels like fractions!)

**Evaluated at a point:** $\\left.\\frac{dy}{dx}\\right|_{x=3}$ means "evaluate the derivative at $x = 3$"

### 3. Higher-Order Derivatives

| Order | Lagrange | Leibniz |
|-------|----------|---------|
| First | $f'(x)$ | $\\frac{dy}{dx}$ |
| Second | $f''(x)$ | $\\frac{d^2y}{dx^2}$ |
| Third | $f'''(x)$ | $\\frac{d^3y}{dx^3}$ |
| $n$-th | $f^{(n)}(x)$ | $\\frac{d^ny}{dx^n}$ |

### 4. Units of Derivatives

If $y$ has units of meters and $x$ has units of seconds, then:
- $\\frac{dy}{dx}$ has units of $\\frac{\\text{meters}}{\\text{seconds}}$ (velocity)
- $\\frac{d^2y}{dx^2}$ has units of $\\frac{\\text{meters}}{\\text{seconds}^2}$ (acceleration)
      `
    },
    {
      id: 'derdef4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'If $s(t)$ gives position in feet at time $t$ seconds, what are the units of $s\'\'(t)$?',
            options: ['feet', 'feet/second', 'feet/second$^2$', 'seconds/foot'],
            correctAnswer: 2,
            explanation: '$s\'(t)$ is velocity: feet/second. $s\'\'(t)$ is acceleration: the rate of change of velocity, which has units feet/second$^2$.'
          },
          {
            question: 'Which notation represents "the second derivative of $y$ with respect to $x$, evaluated at $x = 1$"?',
            options: ['$\\frac{d^2y}{dx^2}(1)$', '$\\frac{dy}{dx}\\bigg|_{x=1}$', '$f\'(1)$', '$\\left.\\frac{d^2y}{dx^2}\\right|_{x=1}$'],
            correctAnswer: 3,
            explanation: '$\\left.\\frac{d^2y}{dx^2}\\right|_{x=1}$ is the standard Leibniz notation for the second derivative evaluated at $x=1$.'
          }
        ]
      }
    },
    {
      id: 'derdef4-detail',
      type: 'text' as const,
      content: `
### When to Use Which Notation

- **$f'(x)$** — Best for general function manipulation, stating rules
- **$\\frac{dy}{dx}$** — Best for related rates, implicit differentiation, chain rule
- **$\\frac{d}{dx}[\\text{expression}]$** — Best as an operator: "take the derivative of this expression"

**Example in context:** "Find $\\frac{d}{dx}[x^2 \\sin x]$" means "differentiate $x^2 \\sin x$ with respect to $x$."
      `
    },
    {
      id: 'derdef4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'If $P(t)$ represents population (in thousands) at time $t$ (in years), and $P\'(10) = 3$, this means:',
            options: [
              'The population is 3,000 at year 10',
              'The population is growing at 3,000 people per year at $t = 10$',
              'The population will reach 3,000 in 10 years',
              'The population triples every 10 years'
            ],
            correctAnswer: 1,
            explanation: '$P\'(10) = 3$ means the rate of change of population at $t = 10$ is $3$ thousand per year, which is 3,000 people per year. The derivative gives the instantaneous rate of change.'
          }
        ]
      }
    },
    {
      id: 'derdef4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Notation** 🔍`,
      exercise: {
        dropdowns: [
          { label: '$\\frac{d}{dx}[x^3]$ equals', options: ['$x^3$', '$3x^2$', '$3x^3$', '$x^2/3$'] },
          { label: '$f\'\'(x)$ in Leibniz notation is', options: ['$\\frac{dy}{dx}$', '$\\frac{d^2y}{dx^2}$', '$\\frac{d^2y}{d^2x}$', '$\\left(\\frac{dy}{dx}\\right)^2$'] },
          { label: 'If distance is in meters and time in seconds, $\\frac{dx}{dt}$ has units', options: ['meters', 'm/s', 'm/s²', 's/m'] }
        ],
        correctAnswers: ['$3x^2$', '$\\frac{d^2y}{dx^2}$', 'm/s'],
        hint1: 'Apply the power rule: $\\frac{d}{dx}[x^n] = nx^{n-1}$.',
        hint2: 'The second derivative in Leibniz notation squares the $d$, not the $x$.',
        hint3: 'Derivative units = units of output / units of input.',
        explanation: '$\\frac{d}{dx}[x^3] = 3x^2$ by the power rule. The Leibniz second derivative is $\\frac{d^2y}{dx^2}$. Distance/time = m/s.'
      }
    }
  ]
}
