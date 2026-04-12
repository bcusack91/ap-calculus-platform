export const calcbcRadConvPart5Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'radiusconvergence-p5-intro',
      type: 'text' as const,
      content: `# 🧩 Applications of Power Series

**Part 5 of 7 — Using Series to Solve Problems**

---

### Approximating Integrals

Some functions have no elementary antiderivative but CAN be integrated term by term:

$$\\\\int_0^1 e^{-x^2}dx = \\\\int_0^1 \\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n x^{2n}}{n!}dx = \\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n}{(2n+1)n!}$$

### Evaluating Limits

$$\\\\lim_{x \\\\to 0} \\\\frac{\\\\sin x - x}{x^3} = \\\\lim_{x \\\\to 0} \\\\frac{(x - x^3/6 + \\\\cdots) - x}{x^3} = \\\\lim_{x \\\\to 0} \\\\frac{-x^3/6 + \\\\cdots}{x^3} = -\\\\frac{1}{6}$$

### Solving Differential Equations

Assume $y = \\\\sum c_n x^n$, substitute into the DE, and match coefficients.`
    },    {
      id: 'radiusconvergence-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: '$\\\\int e^{-x^2}dx$ cannot be expressed in terms of elementary functions, but:',
            options: ['It doesn’t exist', 'It can be approximated using power series', 'It equals $e^{-x^3}/3$', 'We use integration by parts'],
            correctAnswer: 1,
            explanation: 'Substitute the power series for $e^{-x^2}$ and integrate term by term.'
          },
          {
            question: '$\\\\lim_{x \\\\to 0} \\\\frac{e^x - 1 - x}{x^2}$, using series:',
            options: ['0', '1/2', '1', 'DNE'],
            correctAnswer: 1,
            explanation: '$e^x = 1 + x + x^2/2 + \\\\cdots$. Numerator = $x^2/2 + \\\\cdots$. Divide by $x^2$: limit = $1/2$.'
          },
          {
            question: 'The alternating series error bound says the error is at most:',
            options: ['The last included term', 'The first omitted term', 'Half the last term', 'The sum of all remaining terms'],
            correctAnswer: 1,
            explanation: 'Error $\\\\leq |a_{n+1}|$, the absolute value of the first omitted term.'
          }
        ]
      }
    },    {
      id: 'radiusconvergence-p5-input',
      type: 'input-boxes' as const,
      content: `
**Series Applications** 🧮

Approximate $\\\\int_0^{0.5} \\\\sin(x^2)\\\\,dx$ using the first two non-zero terms of the series.

$\\\\sin u = u - u^3/6 + \\\\cdots$, so $\\\\sin(x^2) = x^2 - x^6/6 + \\\\cdots$

**1)** $\\\\int_0^{0.5} x^2\\\\,dx = ?$ (as a fraction)

**2)** $\\\\int_0^{0.5} x^6/6\\\\,dx = ?$ (round to 6 decimal places)

**3)** Approximate value of $\\\\int_0^{0.5} \\\\sin(x^2)dx$ using these two terms? (round to 4 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1/24', '0.000019', '0.0417'],
        hint1: '$x^3/3$ evaluated from 0 to 0.5',
        hint2: '$x^7/(7 \\\\times 6)$ from 0 to 0.5',
        hint3: 'Subtract: $1/24 - \\\\text{tiny correction}$',
        explanation: '1) $(0.5)^3/3 = 0.125/3 = 1/24 \\\\approx 0.04167$. 2) $(0.5)^7/42 \\\\approx 0.000019$. 3) $0.04167 - 0.00002 \\\\approx 0.0417$.'
      }
    }
  ]
};
