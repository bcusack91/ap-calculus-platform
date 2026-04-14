export const calcabDiffEqPart5Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de5-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 5 of 7 — Particular Solutions & Advanced IVPs**

### Harder Separable DEs

Not all separable DEs give $y = Ae^{kt}$. Here are the main solution forms:

| DE Type | Separation | Solution Form |
|:---:|:---:|:---:|
| $\\frac{dy}{dx} = ky$ | $\\frac{dy}{y} = k\\,dx$ | $y = Ae^{kx}$ |
| $\\frac{dy}{dx} = \\frac{f(x)}{y}$ | $y\\,dy = f(x)\\,dx$ | $y^2 = 2F(x) + C$ |
| $\\frac{dy}{dx} = f(x) \\cdot y^2$ | $\\frac{dy}{y^2} = f(x)\\,dx$ | $y = \\frac{-1}{F(x) + C}$ |
| $\\frac{dy}{dx} = \\frac{y}{f(x)}$ | $\\frac{dy}{y} = \\frac{dx}{f(x)}$ | $\\ln|y| = \\int \\frac{dx}{f(x)} + C$ |`
    },
    {
      id: 'de5-worked',
      type: 'text' as const,
      content: `### Worked Example 1: $y^2$ Type

$$\\frac{dy}{dx} = \\frac{y^2}{x}, \\quad y(1) = 2$$

$\\frac{dy}{y^2} = \\frac{dx}{x}$ → $-\\frac{1}{y} = \\ln|x| + C$

$y(1) = 2$: $-\\frac{1}{2} = 0 + C$, so $C = -\\frac{1}{2}$

$$-\\frac{1}{y} = \\ln x - \\frac{1}{2} \\implies y = \\frac{1}{\\frac{1}{2} - \\ln x} = \\frac{2}{1 - 2\\ln x}$$

### Worked Example 2: Square Root Type

$$\\frac{dy}{dx} = \\frac{x}{\\sqrt{y}}, \\quad y(0) = 4$$

$\\sqrt{y}\\,dy = x\\,dx$ → $\\frac{2}{3}y^{3/2} = \\frac{x^2}{2} + C$

$y(0) = 4$: $\\frac{2}{3}(8) = C = \\frac{16}{3}$

$$y^{3/2} = \\frac{3x^2}{4} + 8$$

> **AP Tip:** On AP FRQs, it's acceptable to leave the answer in implicit form (not solved for $y$) unless the problem specifically says "solve for $y$".`
    },
    {
      id: 'de5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Advanced Separation** 🎯',
      exercise: {
        questions: [
          {
            question: 'Solve $\\frac{dy}{dx} = \\frac{y}{x+1}$ with $y(0) = 4$.',
            options: ['$y = 4(x+1)$', '$y = 4e^x$', '$y = (x+1)^4$', '$y = 4\\ln(x+1)$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{y} = \\frac{dx}{x+1}$. $\\ln|y| = \\ln|x+1| + C$. $y = A(x+1)$. $y(0) = A = 4$.'
          },
          {
            question: 'Solve $\\frac{dy}{dx} = 2xy^2$ with $y(0) = 1$.',
            options: ['$y = \\frac{1}{1-x^2}$', '$y = e^{x^2}$', '$y = \\frac{1}{1+x^2}$', '$y = (1+x^2)^2$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{y^2} = 2x\\,dx$. $-1/y = x^2+C$. $y(0)=1$: $C=-1$. $y = \\frac{1}{1-x^2}$.'
          },
          {
            question: 'The domain of $y = \\frac{1}{1-x^2}$ from the previous problem is:',
            options: ['All real numbers', '$-1 < x < 1$', '$x > 0$', '$x \\neq \\pm 1$'],
            correctAnswer: 1,
            explanation: '$y$ is undefined when $1-x^2 = 0$ ($x = \\pm 1$). Since $y(0)=1 > 0$ and solution must be continuous, domain is $(-1, 1)$.'
          }
        ]
      }
    },
    {
      id: 'de5-domain',
      type: 'text' as const,
      content: `### Domain of Solutions

$$\\boxed{\\text{The domain of a particular solution may be restricted!}}$$

When finding a particular solution, always check:

| Issue | Example | Domain Restriction |
|:---:|:---:|:---:|
| Division by zero | $y = \\frac{2}{1-2\\ln x}$ | $x \\neq e^{1/2}$ |
| Square root of negative | $y = \\sqrt{9-x^2}$ | $-3 \\leq x \\leq 3$ |
| Logarithm of non-positive | $\\ln|y| = f(x)$ | Where $f(x)$ is defined |
| Continuity through IC | Must connect to initial point | Choose interval containing IC |

> **Key Fact:** A particular solution exists on the **largest interval** containing the initial point where the solution is continuous and the DE is defined.`
    },
    {
      id: 'de5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Analyze solutions.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{dy}{dx} = \\frac{2x}{y}$, $y(0) = 3$. The solution is:',
            options: ['$y = 3e^{x^2}$', '$y = \\sqrt{x^2 + 9}$ (positive root)', '$y = x^2 + 9$', '$y = \\pm\\sqrt{x^2 + 9}$'],
            correctAnswers: ['$y = \\sqrt{x^2 + 9}$ (positive root)'],
            hints: ['$y\\,dy = 2x\\,dx$. $y^2/2 = x^2 + C$. $y(0) = 3$ forces positive root.'],
            explanation: '$y^2 = 2x^2 + 9$. Since $y(0) = 3 > 0$, take positive root: $y = \\sqrt{2x^2+9}$.'
          },
          {
            label: 'For $y = \\frac{2}{1 - 2\\ln x}$, $y$ has a vertical asymptote at:',
            options: ['$x = 0$', '$x = e^{1/2} = \\sqrt{e}$', '$x = e$', '$x = 1$'],
            correctAnswers: ['$x = e^{1/2} = \\sqrt{e}$'],
            hints: ['Set denominator $= 0$: $1 - 2\\ln x = 0$.'],
            explanation: '$\\ln x = 1/2$, so $x = e^{1/2} = \\sqrt{e}$.'
          },
          {
            label: 'If $y\' = y(y-4)$, the long-term behavior when $0 < y(0) < 4$ is:',
            options: ['$y \\to 0$', '$y \\to 4$', '$y \\to \\infty$', '$y$ oscillates'],
            correctAnswers: ['$y \\to 0$'],
            hints: ['When $0 < y < 4$: $y > 0$ and $y-4 < 0$, so $y\' < 0$.'],
            explanation: '$y\' = y(y-4) < 0$ when $0 < y < 4$, so $y$ decreases toward $0$.'
          }
        ]
      }
    },
    {
      id: 'de5-input',
      type: 'input-box' as const,
      content: '**Find a particular solution value.** ✍️',
      exercise: {
        question: 'Given $\\frac{dy}{dx} = \\frac{x^2}{y}$ with $y(0) = 2$, find $y(3)$.\n\n(Enter an exact answer using sqrt notation.)',
        correctAnswer: 'sqrt(22)',
        acceptableAnswers: ['sqrt(22)', 'sqrt22', '√22'],
        hints: [
          '$y\\,dy = x^2\\,dx$.',
          '$y^2/2 = x^3/3 + C$. $y(0) = 2$: $C = 2$.',
          '$y^2 = 2x^3/3 + 4$. At $x = 3$: $y^2 = 18 + 4 = 22$.'
        ],
        explanation: '$y^2/2 = x^3/3 + C$. $y(0) = 2$: $4/2 = C$, so $C = 2$. $y^2 = 2x^3/3 + 4$. $y(3) = \\sqrt{2(27)/3 + 4} = \\sqrt{18+4} = \\sqrt{22}$.'
      }
    },
    {
      id: 'de5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Concept | Key Point |
|:---:|:---:|
| $1/y^2$ DEs | Give $-1/y = F(x) + C$ solutions |
| $\\sqrt{y}$ DEs | Give $y^{3/2} = F(x) + C$ solutions |
| Domain restrictions | Check for division by zero, square roots |
| IC determines branch | Positive IC → positive root |
| Implicit solutions OK | Don't need to solve for $y$ unless asked |

> **Up Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
