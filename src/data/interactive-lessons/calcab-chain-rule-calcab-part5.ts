export const calcabChainRulePart5Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain5-intro',
      type: 'text' as const,
      content: `# 🔗 Advanced Chain Rule Applications

**Part 5 of 7 — Applications**

### Logarithmic Differentiation

For functions like $y = x^x$ or $y = (\\sin x)^{\\cos x}$, standard rules fail. **Logarithmic differentiation** solves this:

1. Take $\\ln$ of both sides
2. Use log properties to simplify
3. Differentiate implicitly
4. Solve for $\\frac{dy}{dx}$

### Worked Example 1

**Find** $\\frac{d}{dx}x^x$ for $x > 0$

| Step | Work |
|------|------|
| Take ln | $\\ln y = x \\ln x$ |
| Differentiate | $\\frac{1}{y}\\frac{dy}{dx} = \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$ |
| Solve | $\\frac{dy}{dx} = y(\\ln x + 1) = x^x(\\ln x + 1)$ |

### Worked Example 2: Simplifying Products

**Find** $\\frac{d}{dx}\\frac{x^2\\sqrt{x+1}}{(2x-3)^4}$

Without log differentiation, you would need the quotient rule, product rule, and chain rule combined. With logs:

| Step | Work |
|------|------|
| Take ln | $\\ln y = 2\\ln x + \\frac{1}{2}\\ln(x+1) - 4\\ln(2x-3)$ |
| Differentiate | $\\frac{y'}{y} = \\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{8}{2x-3}$ |
| Solve | $y' = \\frac{x^2\\sqrt{x+1}}{(2x-3)^4}\\left(\\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{8}{2x-3}\\right)$ |`
    },
    {
      id: 'chain5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Logarithmic Differentiation** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}(\\ln x)^x$ using logarithmic differentiation. Which equation do you get after taking ln of both sides?',
            options: ['$\\ln y = x \\ln(\\ln x)$', '$\\ln y = \\ln x \\cdot \\ln x$', '$\\ln y = x^2$', '$\\ln y = e^{x \\ln x}$'],
            correctAnswer: 0,
            explanation: '$y = (\\ln x)^x$, so $\\ln y = \\ln[(\\ln x)^x] = x \\ln(\\ln x)$.'
          },
          {
            question: 'If $\\ln y = 3\\ln x + 2\\ln(x+1)$, what is $\\frac{y\'}{y}$?',
            options: ['$\\frac{3}{x} + \\frac{2}{x+1}$', '$3x^2 + 2(x+1)$', '$\\frac{3}{x} \\cdot \\frac{2}{x+1}$', '$\\frac{5}{x(x+1)}$'],
            correctAnswer: 0,
            explanation: 'Differentiate term by term: $\\frac{d}{dx}[3\\ln x] = \\frac{3}{x}$ and $\\frac{d}{dx}[2\\ln(x+1)] = \\frac{2}{x+1}$.'
          }
        ]
      }
    },
    {
      id: 'chain5-text2',
      type: 'text' as const,
      content: `### Chain Rule with Inverse Trig Functions

Recall the derivatives of inverse trig functions — they all involve the Chain Rule when the argument is not just $x$:

| Function | Derivative |
|----------|-----------|
| $\\arcsin(u)$ | $\\frac{u'}{\\sqrt{1-u^2}}$ |
| $\\arccos(u)$ | $\\frac{-u'}{\\sqrt{1-u^2}}$ |
| $\\arctan(u)$ | $\\frac{u'}{1+u^2}$ |

### Worked Example 3

**Find** $\\frac{d}{dx}\\arctan(3x)$

$$\\frac{d}{dx}\\arctan(3x) = \\frac{3}{1+(3x)^2} = \\frac{3}{1+9x^2}$$

### Worked Example 4

**Find** $\\frac{d}{dx}\\arcsin(x^2)$

$$\\frac{d}{dx}\\arcsin(x^2) = \\frac{2x}{\\sqrt{1-(x^2)^2}} = \\frac{2x}{\\sqrt{1-x^4}}$$`
    },
    {
      id: 'chain5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Inverse Trig Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\arctan(5x^2)$.',
            options: ['$\\frac{1}{1+25x^4}$', '$\\frac{10x}{1+25x^4}$', '$\\frac{5x}{1+25x^4}$', '$\\frac{10x}{\\sqrt{1-25x^4}}$'],
            correctAnswer: 1,
            explanation: '$\\frac{d}{dx}\\arctan(5x^2) = \\frac{10x}{1+(5x^2)^2} = \\frac{10x}{1+25x^4}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\arcsin(e^x)$.',
            options: ['$\\frac{1}{\\sqrt{1-e^{2x}}}$', '$\\frac{e^x}{\\sqrt{1-e^{2x}}}$', '$\\frac{e^x}{1+e^{2x}}$', '$\\frac{1}{1-e^{2x}}$'],
            correctAnswer: 1,
            explanation: '$\\frac{d}{dx}\\arcsin(e^x) = \\frac{e^x}{\\sqrt{1-(e^x)^2}} = \\frac{e^x}{\\sqrt{1-e^{2x}}}$.'
          }
        ]
      }
    },
    {
      id: 'chain5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

1. **Logarithmic differentiation** handles $u^v$ where both base and exponent are functions of $x$
2. **Steps:** $\\ln$ both sides → simplify → differentiate implicitly → solve
3. **Inverse trig + Chain Rule:** always multiply by the derivative of the inner function
4. The Chain Rule is truly everywhere in calculus — almost no real problem avoids it

> **Next up:** Problem-Solving Workshop with mixed Chain Rule problems.`
    }
  ]
};
