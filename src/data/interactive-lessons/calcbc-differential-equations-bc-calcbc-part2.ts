export const calcbcDiffEqPart2Data = {
  topicSlug: 'differential-equations-bc-calcbc',
  sections: [
    {
      id: 'de2-intro',
      type: 'text' as const,
      content: `# Verifying Solutions and Initial Value Problems

**Part 2 of 7 — Does This Function Solve the DE?**

### Verifying a Solution

To verify that $y = f(x)$ solves $\\frac{dy}{dx} = F(x, y)$:

1. Compute $f'(x)$ (the left side)
2. Substitute $y = f(x)$ into $F(x, y)$ (the right side)
3. Check that both sides are equal

$$\\boxed{\\text{If } f'(x) = F(x, f(x)) \\text{ for all } x \\text{ in the domain, then } y = f(x) \\text{ is a solution.}}$$

> **AP Tip:** Verification problems appear regularly on FRQs. They require substitution, not solving.`
    },
    {
      id: 'de2-example',
      type: 'text' as const,
      content: `### Worked Example

Verify that $y = 2e^{3x} - 1$ solves $\\frac{dy}{dx} = 3(y + 1)$.

| Check | Computation |
|-------|------------|
| Left side: $dy/dx$ | $\\frac{d}{dx}(2e^{3x} - 1) = 6e^{3x}$ |
| Right side: $3(y+1)$ | $3(2e^{3x} - 1 + 1) = 3(2e^{3x}) = 6e^{3x}$ |
| Equal? | ✓ $6e^{3x} = 6e^{3x}$ |

### Initial Value Problems (IVPs)

An IVP consists of:
- A differential equation: $dy/dx = f(x, y)$
- An initial condition: $y(x_0) = y_0$

The initial condition selects ONE particular solution from the **family** of general solutions.

### General vs. Particular Solution

| Type | Has $C$? | Example |
|------|----------|---------|
| General solution | Yes | $y = Ce^{3x}$ |
| Particular solution | No (C determined) | $y = 5e^{3x}$ (if $y(0)=5$) |`
    },
    {
      id: 'de2-ivp',
      type: 'text' as const,
      content: `### IVP Worked Example

Solve the IVP: $\\frac{dy}{dx} = \\frac{y^2}{x}$, $y(1) = 2$.

**Step 1 — Separate:** $\\frac{dy}{y^2} = \\frac{dx}{x}$

**Step 2 — Integrate:** $-\\frac{1}{y} = \\ln|x| + C$

**Step 3 — Apply IC:** $-\\frac{1}{2} = \\ln 1 + C = 0 + C$, so $C = -\\frac{1}{2}$

**Step 4 — Solve:** $-\\frac{1}{y} = \\ln x - \\frac{1}{2}$

$$y = \\frac{1}{\\frac{1}{2} - \\ln x} = \\frac{2}{1 - 2\\ln x}$$

> **Domain restriction:** Valid only for $\\ln x < 1/2$, i.e., $0 < x < \\sqrt{e}$.`
    },
    {
      id: 'de2-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: 'To verify $y = x^2 + 1$ solves $y\' = 2x$, you should:',
            options: ['Compute $y\' = 2x$ and confirm it equals the right side $2x$ ✓', 'Integrate $2x$ and check if you get $x^2 + 1$', 'Solve $y\' = 2x$ from scratch', 'Plug in specific values of $x$'],
            correctAnswer: 0,
            explanation: 'Differentiate the proposed solution and check it matches the DE.'
          },
          {
            question: 'The general solution to $y\' = -y$ is $y = Ce^{-x}$. With $y(0) = 7$, the particular solution is:',
            options: ['$y = 7e^{-x}$', '$y = Ce^{-x}$ with $C = 7$', '$y = e^{-7x}$', '$y = -7e^{-x}$'],
            correctAnswer: 0,
            explanation: '$y(0) = Ce^0 = C = 7$, so $y = 7e^{-x}$.'
          },
          {
            question: 'A general solution has how many arbitrary constants?',
            options: ['One (for a first-order DE)', 'Zero', 'Two', 'Infinitely many'],
            correctAnswer: 0,
            explanation: 'A first-order DE produces one constant of integration. One IC determines it.'
          }
        ]
      }
    },
    {
      id: 'de2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Verification Practice**\n\nIs $y = e^{x^2}$ a solution to $y\' = 2xy$?',
      exercise: {
        dropdowns: [
          {
            label: 'Left side: $dy/dx =$',
            options: ['$2xe^{x^2}$ (chain rule)', '$e^{x^2}$', '$x^2 e^{x^2}$', '$2e^{x^2}$'],
            correctAnswers: ['$2xe^{x^2}$ (chain rule)'],
            hints: ['$\\frac{d}{dx}e^{x^2} = e^{x^2} \\cdot 2x$.'],
            explanation: 'Chain rule: $e^{x^2} \\cdot 2x = 2xe^{x^2}$.'
          },
          {
            label: 'Right side: $2xy = 2x \\cdot e^{x^2} =$',
            options: ['$2xe^{x^2}$', '$2e^{x^2}$', '$2x^2 e^{x^2}$', '$e^{2x}$'],
            correctAnswers: ['$2xe^{x^2}$'],
            hints: ['Substitute $y = e^{x^2}$ into $2xy$.'],
            explanation: '$2x \\cdot e^{x^2} = 2xe^{x^2}$.'
          },
          {
            label: 'Conclusion:',
            options: ['$y = e^{x^2}$ IS a solution (both sides equal $2xe^{x^2}$)', '$y = e^{x^2}$ is NOT a solution', 'Cannot determine', 'Only valid for $x > 0$'],
            correctAnswers: ['$y = e^{x^2}$ IS a solution (both sides equal $2xe^{x^2}$)'],
            hints: ['Compare left and right sides.'],
            explanation: 'Left = Right = $2xe^{x^2}$ for all $x$. Verified. ✓'
          }
        ]
      }
    },
    {
      id: 'de2-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'The general solution to $y\' = 4y$ is $y = Ce^{4x}$. If $y(0) = -3$, what is $C$?',
        correctAnswer: '-3',
        acceptableAnswers: ['-3', '-3.0'],
        hints: ['$y(0) = Ce^0 = C$.'],
        explanation: '$y(0) = Ce^{4 \\cdot 0} = C = -3$.'
      }
    },
    {
      id: 'de2-summary',
      type: 'text' as const,
      content: `### Key Takeaways

$$\\boxed{\\text{Verify: compute } y' \\text{ and check } y' = F(x,y)}$$

$$\\boxed{\\text{IVP: General solution + initial condition} \\to \\text{particular solution}}$$

- Verification ≠ solving. Just substitute and compare.
- One initial condition determines $C$ in a first-order DE.
- Always check domain restrictions after solving.

**Next: Part 3 — Modeling with Differential Equations**`
    }
  ]
};
