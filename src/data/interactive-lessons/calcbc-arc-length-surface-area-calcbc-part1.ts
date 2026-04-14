export const calcbcArcLengthPart1Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'al1-intro',
      type: 'text' as const,
      content: `# Arc Length & Surface Area

**Part 1 of 7 — Arc Length of Cartesian Curves**

The length of a smooth curve $y = f(x)$ from $x = a$ to $x = b$ is:

$$\\boxed{L = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2}\\,dx}$$

### Derivation Sketch

Approximate the curve with short line segments of length $\\Delta s \\approx \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$. Factor out $\\Delta x$:

$$\\Delta s \\approx \\sqrt{1 + \\left(\\frac{\\Delta y}{\\Delta x}\\right)^2}\\,\\Delta x \\xrightarrow{\\Delta x \\to 0} \\sqrt{1 + (f'(x))^2}\\,dx$$

> **Key Fact:** The integrand $\\sqrt{1 + (f')^2}$ rarely simplifies to an elementary antiderivative. Many arc length problems require a calculator.`
    },
    {
      id: 'al1-examples',
      type: 'text' as const,
      content: `### Classic Examples

**Example 1.** $y = x^{3/2}$ from $x = 0$ to $x = 4$.

$y' = \\frac{3}{2}x^{1/2}$, so $(y')^2 = \\frac{9}{4}x$.

$$L = \\int_0^4 \\sqrt{1 + \\tfrac{9}{4}x}\\,dx$$

Let $u = 1 + \\frac{9}{4}x$, $du = \\frac{9}{4}dx$:

$$L = \\frac{4}{9}\\cdot\\frac{2}{3}\\left[u^{3/2}\\right]_1^{10} = \\frac{8}{27}\\left(10\\sqrt{10} - 1\\right)$$

**Example 2.** $y = \\frac{x^2}{4} - \\frac{\\ln x}{2}$ from $x = 1$ to $x = e$.

$y' = \\frac{x}{2} - \\frac{1}{2x}$. Then $1 + (y')^2 = 1 + \\frac{x^2}{4} - \\frac{1}{2} + \\frac{1}{4x^2} = \\left(\\frac{x}{2} + \\frac{1}{2x}\\right)^2$.

$$L = \\int_1^e \\left(\\frac{x}{2} + \\frac{1}{2x}\\right)dx = \\left[\\frac{x^2}{4} + \\frac{\\ln x}{2}\\right]_1^e = \\frac{e^2 - 1}{4} + \\frac{1}{2}$$

> **AP Tip:** Example 2 is the "perfect square" type — designed so the square root simplifies. AP problems often feature this pattern.`
    },
    {
      id: 'al1-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The arc length of $y = x$ from $x = 0$ to $x = 1$ is:',
            options: ['$\\sqrt{2}$', '$1$', '$2$', '$\\sqrt{2}/2$'],
            correctAnswer: 0,
            explanation: '$y\' = 1$. $L = \\int_0^1 \\sqrt{1+1}\\,dx = \\sqrt{2}$. This is the diagonal of a unit square — makes geometric sense.'
          },
          {
            question: 'For $y = \\sin x$, the arc length from $0$ to $\\pi$ equals $\\int_0^\\pi \\sqrt{1 + \\cos^2 x}\\,dx$. This integral:',
            options: ['Has no elementary antiderivative', 'Equals $\\pi\\sqrt{2}$', 'Equals $2$', 'Equals $\\pi$'],
            correctAnswer: 0,
            explanation: '$\\int\\sqrt{1+\\cos^2 x}\\,dx$ is an elliptic integral — no closed-form antiderivative. Calculator required.'
          },
          {
            question: 'Which function is most likely to have an arc length that can be computed by hand?',
            options: ['$y = x^{3/2}$', '$y = e^x$', '$y = \\tan x$', '$y = x^3$'],
            correctAnswer: 0,
            explanation: '$y = x^{3/2}$ gives $(y\')^2 = \\frac{9}{4}x$, leading to $\\int\\sqrt{1 + \\frac{9}{4}x}\\,dx$ which is a basic $u$-substitution.'
          }
        ]
      }
    },
    {
      id: 'al1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'Arc length is always _____ the straight-line distance between endpoints.',
            options: ['Greater than or equal to', 'Less than', 'Equal to', 'Unrelated to'],
            correctAnswers: ['Greater than or equal to'],
            hints: ['The shortest path between two points is a straight line.'],
            explanation: '$L \\ge \\sqrt{(b-a)^2 + (f(b)-f(a))^2}$ with equality only when $f$ is linear (the curve IS the straight line).'
          },
          {
            label: 'The differential of arc length is $ds = $',
            options: ['$\\sqrt{1 + (dy/dx)^2}\\,dx$', '$(1 + dy/dx)\\,dx$', '$\\sqrt{dx^2 + dy^2}$', 'Both the first and third options'],
            correctAnswers: ['Both the first and third options'],
            hints: ['$ds^2 = dx^2 + dy^2$.'],
            explanation: '$ds = \\sqrt{dx^2 + dy^2} = \\sqrt{1 + (dy/dx)^2}\\,dx$. Both forms are equivalent and commonly used.'
          }
        ]
      }
    },
    {
      id: 'al1-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Find the arc length of $y = \\frac{2}{3}x^{3/2}$ from $x = 0$ to $x = 3$. (Hint: $(y\')^2 = x$.)',
        correctAnswer: '14/3',
        acceptableAnswers: ['14/3', '4.67', '4.667'],
        hints: ['$y\' = x^{1/2}$, so $1 + (y\')^2 = 1 + x$.', '$L = \\int_0^3 \\sqrt{1+x}\\,dx = \\frac{2}{3}[(1+x)^{3/2}]_0^3$.'],
        explanation: '$L = \\frac{2}{3}[4^{3/2} - 1^{3/2}] = \\frac{2}{3}(8 - 1) = 14/3$.'
      }
    },
    {
      id: 'al1-summary',
      type: 'text' as const,
      content: `### Summary

- Arc length: $L = \\int_a^b \\sqrt{1 + (f\'(x))^2}\\,dx$
- Most arc length integrals need a calculator
- "Perfect square" problems are designed for hand computation
- $ds = \\sqrt{1 + (y\')^2}\\,dx = \\sqrt{(dx)^2 + (dy)^2}$

> **Next:** Part 2 — Arc length in parametric form.`
    }
  ]
};
