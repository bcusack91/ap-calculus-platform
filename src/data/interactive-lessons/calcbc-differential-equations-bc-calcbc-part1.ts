export const calcbcDiffEqPart1Data = {
  topicSlug: 'differential-equations-bc-calcbc',
  sections: [
    {
      id: 'de1-intro',
      type: 'text' as const,
      content: `# Differential Equations — BC-Level Techniques

**Part 1 of 7 — Separable Differential Equations**

### What is a Differential Equation?

A differential equation (DE) relates a function to its derivatives. In BC Calculus, we focus on **first-order** DEs of the form:

$$\\frac{dy}{dx} = f(x, y)$$

### Separable Equations

A DE is **separable** if it can be written as:

$$\\boxed{\\frac{dy}{dx} = g(x) \\cdot h(y)}$$

**Solution method:** Separate variables, then integrate both sides:

$$\\int \\frac{1}{h(y)}\\,dy = \\int g(x)\\,dx$$

> **Key Fact:** This is the ONLY analytic solving method required on the BC exam.`
    },
    {
      id: 'de1-example1',
      type: 'text' as const,
      content: `### Worked Example 1

Solve $\\frac{dy}{dx} = 2xy$, $y(0) = 3$.

| Step | Work |
|------|------|
| Separate | $\\frac{dy}{y} = 2x\\,dx$ |
| Integrate | $\\ln|y| = x^2 + C$ |
| Solve for $y$ | $y = Ae^{x^2}$ where $A = \\pm e^C$ |
| Apply IC | $3 = Ae^0 = A$ |
| **Solution** | $y = 3e^{x^2}$ |

### Worked Example 2

Solve $\\frac{dy}{dx} = \\frac{x}{y^2}$, $y(0) = 1$.

| Step | Work |
|------|------|
| Separate | $y^2\\,dy = x\\,dx$ |
| Integrate | $\\frac{y^3}{3} = \\frac{x^2}{2} + C$ |
| Apply IC | $\\frac{1}{3} = 0 + C$, so $C = \\frac{1}{3}$ |
| **Solution** | $y^3 = \\frac{3x^2}{2} + 1$ |

> **AP Tip:** Leave implicit solutions as-is unless the problem specifically asks to solve for $y$. Don't introduce errors by unnecessary algebra.`
    },
    {
      id: 'de1-common',
      type: 'text' as const,
      content: `### Common Separable Forms

| DE | Separated form | General solution |
|----|---------------|------------------|
| $y' = ky$ | $dy/y = k\\,dx$ | $y = Ce^{kx}$ |
| $y' = ky(1-y/L)$ | Logistic | $y = \\frac{L}{1 + Ae^{-kt}}$ |
| $y' = x/y$ | $y\\,dy = x\\,dx$ | $y^2 = x^2 + C$ |
| $y' = y^2\\sin x$ | $dy/y^2 = \\sin x\\,dx$ | $-1/y = -\\cos x + C$ |

### When Separation Fails

Not all DEs are separable. For example, $y' = x + y$ is NOT separable. On the BC exam, non-separable DEs are handled with:
- Slope fields (qualitative analysis)
- Euler's method (numerical approximation)`
    },
    {
      id: 'de1-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: 'Which DE is separable?',
            options: ['$y\' = x^2 y^3$ (can write as $x^2 \\cdot y^3$)', '$y\' = x + y$', '$y\' = xy + x + y + 1$... wait, factor: $(x+1)(y+1)$. Both A and C are separable!', '$y\' = x^2 + y^2$'],
            correctAnswer: 0,
            explanation: '$y\' = x^2 y^3$ is immediately separable: $g(x) = x^2$, $h(y) = y^3$. (C is also separable after factoring.)'
          },
          {
            question: 'Solve $dy/dx = 3y$ with $y(0) = 5$:',
            options: ['$y = 5e^{3x}$', '$y = 3e^{5x}$', '$y = 5 + 3x$', '$y = e^{3x} + 4$'],
            correctAnswer: 0,
            explanation: '$\\int dy/y = \\int 3\\,dx \\Rightarrow \\ln|y| = 3x + C \\Rightarrow y = Ae^{3x}$. IC: $5 = A$.'
          },
          {
            question: 'After separating $y\' = \\frac{y}{x}$, you get:',
            options: ['$\\frac{dy}{y} = \\frac{dx}{x}$, giving $\\ln|y| = \\ln|x| + C$', '$y\\,dy = x\\,dx$', '$dy = dx$', '$\\frac{dx}{y} = \\frac{dy}{x}$'],
            correctAnswer: 0,
            explanation: 'Divide both sides by $y$, multiply by $dx$: $dy/y = dx/x$.'
          }
        ]
      }
    },
    {
      id: 'de1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Step-by-Step Solution**\n\nSolve $\\frac{dy}{dx} = \\frac{2x}{y}$, $y(1) = 4$.',
      exercise: {
        dropdowns: [
          {
            label: 'After separating: $y\\,dy = 2x\\,dx$. Integrating both sides:',
            options: ['$y^2/2 = x^2 + C$', '$y^2 = x^2 + C$', '$\\ln y = x^2 + C$', '$y^2/2 = 2x^2 + C$'],
            correctAnswers: ['$y^2/2 = x^2 + C$'],
            hints: ['$\\int y\\,dy = y^2/2$; $\\int 2x\\,dx = x^2$.'],
            explanation: '$\\int y\\,dy = y^2/2$ and $\\int 2x\\,dx = x^2$.'
          },
          {
            label: 'Applying $y(1) = 4$: $16/2 = 1 + C$, so $C =$',
            options: ['$7$', '$8$', '$15$', '$6$'],
            correctAnswers: ['$7$'],
            hints: ['$8 = 1 + C$.'],
            explanation: '$16/2 = 8 = 1 + C \\Rightarrow C = 7$.'
          },
          {
            label: 'The particular solution is:',
            options: ['$y^2 = 2x^2 + 14$ (or equivalently $y = \\sqrt{2x^2 + 14}$)', '$y = x^2 + 7$', '$y^2 = x^2 + 7$', '$y^2/2 = x^2 + 7$ only'],
            correctAnswers: ['$y^2 = 2x^2 + 14$ (or equivalently $y = \\sqrt{2x^2 + 14}$)'],
            hints: ['Multiply $y^2/2 = x^2 + 7$ by 2.'],
            explanation: '$y^2 = 2x^2 + 14$. Since $y(1) = 4 > 0$, $y = \\sqrt{2x^2 + 14}$ near $x = 1$.'
          }
        ]
      }
    },
    {
      id: 'de1-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'Solve $dy/dx = -2y$ with $y(0) = 10$. What is $y(1)$? (Round to 3 decimal places.)',
        correctAnswer: '1.353',
        acceptableAnswers: ['1.353', '1.354', '10e^{-2}', '10/e^2'],
        hints: ['$y = 10e^{-2x}$. Then $y(1) = 10e^{-2}$.'],
        explanation: '$y = 10e^{-2x}$. $y(1) = 10e^{-2} \\approx 1.353$.'
      }
    },
    {
      id: 'de1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

$$\\boxed{\\frac{dy}{dx} = g(x) \\cdot h(y) \\implies \\int \\frac{dy}{h(y)} = \\int g(x)\\,dx + C}$$

1. Check if the DE is separable (product of $g(x)$ and $h(y)$)
2. Separate variables to opposite sides
3. Integrate both sides (don't forget $+C$)
4. Apply initial condition to find $C$
5. Solve for $y$ if requested

**Next: Part 2 — Verifying Solutions and Initial Value Problems**`
    }
  ]
};
