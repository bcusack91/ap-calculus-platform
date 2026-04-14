export const calcabDiffEqPart2Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de2-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 2 of 7 — Separation of Variables**

### The Most Important DE Technique on AP AB

A DE is **separable** if it can be written as:

$$\\boxed{\\frac{dy}{dx} = f(x) \\cdot g(y)}$$

### The 5-Step Method

| Step | Action | Example: $\\frac{dy}{dx} = xy$, $y(0) = 2$ |
|:---:|:---:|:---:|
| 1 | Separate variables | $\\frac{dy}{y} = x\\,dx$ |
| 2 | Integrate both sides | $\\int \\frac{dy}{y} = \\int x\\,dx$ |
| 3 | Add $+C$ (one side only) | $\\ln|y| = \\frac{x^2}{2} + C$ |
| 4 | Solve for $y$ | $y = Ae^{x^2/2}$ where $A = \\pm e^C$ |
| 5 | Apply initial condition | $y(0) = A = 2$ → $y = 2e^{x^2/2}$ |

> **Key Fact:** You only need ONE constant $C$ (not $C_1$ and $C_2$ on each side). The constants combine.`
    },
    {
      id: 'de2-common',
      type: 'text' as const,
      content: `### Common Separable Patterns

| DE Form | Separation | General Solution |
|:---:|:---:|:---:|
| $\\frac{dy}{dx} = ky$ | $\\frac{dy}{y} = k\\,dx$ | $y = Ae^{kx}$ |
| $\\frac{dy}{dx} = \\frac{x}{y}$ | $y\\,dy = x\\,dx$ | $y^2 = x^2 + C$ |
| $\\frac{dy}{dx} = xy^2$ | $\\frac{dy}{y^2} = x\\,dx$ | $y = \\frac{-1}{x^2/2 + C}$ |
| $\\frac{dy}{dx} = \\frac{y}{x}$ | $\\frac{dy}{y} = \\frac{dx}{x}$ | $y = Ax$ |
| $\\frac{dy}{dx} = y(1-y)$ | $\\frac{dy}{y(1-y)} = dx$ | Logistic (partial fractions) |

### Worked Example — Careful with Signs

$\\frac{dy}{dx} = -\\frac{x}{y}$, $y(3) = 4$

$y\\,dy = -x\\,dx$

$\\frac{y^2}{2} = -\\frac{x^2}{2} + C$

$y^2 = -x^2 + 2C$, i.e., $x^2 + y^2 = K$

$y(3) = 4$: $9 + 16 = K = 25$

$$x^2 + y^2 = 25 \\quad \\text{(a circle!)}$$`
    },
    {
      id: 'de2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Separation of Variables** 🎯',
      exercise: {
        questions: [
          {
            question: 'Solve $\\frac{dy}{dx} = \\frac{x}{y}$ with $y(0) = 3$.',
            options: ['$y = \\sqrt{x^2 + 9}$', '$y = x^2 + 9$', '$y = \\sqrt{x + 9}$', '$y = \\sqrt{2x^2 + 9}$'],
            correctAnswer: 0,
            explanation: '$y\\,dy = x\\,dx$. $y^2/2 = x^2/2 + C$. $y(0) = 3$: $9/2 = C$. $y^2 = x^2 + 9$. $y = \\sqrt{x^2+9}$.'
          },
          {
            question: 'Solve $\\frac{dy}{dx} = 3y$ with $y(0) = 5$.',
            options: ['$y = 5e^{3x}$', '$y = 3e^{5x}$', '$y = 5 + 3x$', '$y = e^{3x} + 4$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{y} = 3\\,dx$. $\\ln|y| = 3x + C$. $y = Ae^{3x}$. $y(0) = A = 5$.'
          },
          {
            question: 'Which DE is NOT separable?',
            options: ['$\\frac{dy}{dx} = xy + x$', '$\\frac{dy}{dx} = x + y$', '$\\frac{dy}{dx} = \\frac{e^x}{y}$', '$\\frac{dy}{dx} = y^2 \\sin x$'],
            correctAnswer: 1,
            explanation: '$x + y$ cannot be written as $f(x) \\cdot g(y)$. But $xy + x = x(y+1)$ IS separable.'
          }
        ]
      }
    },
    {
      id: 'de2-mistakes',
      type: 'text' as const,
      content: `### Common Mistakes in Separation

| Mistake | Problem | Correction |
|:---:|:---:|:---:|
| Forgetting to separate ALL $y$'s | Leaving $y$ on the $dx$ side | Move everything with $y$ to one side |
| Dividing by $g(y) = 0$ | Lose equilibrium solutions! | Check: does $g(y) = 0$ give solutions? |
| Wrong sign on $\\ln|y|$ | $\\int \\frac{dy}{y} = \\ln|y|$, not $-\\ln|y|$ | Careful with negative exponents |
| Forgetting absolute value | $\\ln y$ vs $\\ln|y|$ | Use $|y|$ then consider $A = \\pm e^C$ |
| Two constants of integration | $C_1$ on left AND $C_2$ on right | Combine into single $C$ on one side |

### Domain Restrictions

$$\\boxed{\\text{When dividing by } g(y), \\text{ check if } g(y) = 0 \\text{ gives an equilibrium solution}}$$

**Example:** $\\frac{dy}{dx} = y(3-y)$

Dividing by $y(3-y)$ loses $y = 0$ and $y = 3$ — these ARE constant solutions (equilibria).`
    },
    {
      id: 'de2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Analyze each DE.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{dy}{dx} = x(y+1)$ — after separation, the left side is:',
            options: ['$\\frac{dy}{y+1}$', '$\\frac{dy}{y}$', '$(y+1)\\,dy$', '$\\frac{dy}{x}$'],
            correctAnswers: ['$\\frac{dy}{y+1}$'],
            hints: ['Divide both sides by $(y+1)$ and multiply by $dx$.'],
            explanation: '$\\frac{dy}{y+1} = x\\,dx$. $\\ln|y+1| = x^2/2 + C$.'
          },
          {
            label: '$\\frac{dy}{dx} = y^2 \\cos x$ with $y(0) = 1$ — the solution involves:',
            options: ['$e^{\\sin x}$', '$\\frac{1}{1-\\sin x}$', '$\\tan x$', '$\\sin^2 x$'],
            correctAnswers: ['$\\frac{1}{1-\\sin x}$'],
            hints: ['$\\frac{dy}{y^2} = \\cos x\\,dx$. $-1/y = \\sin x + C$. Use $y(0)=1$.'],
            explanation: '$-1/y = \\sin x + C$. $y(0) = 1$: $C = -1$. $y = \\frac{1}{1 - \\sin x}$.'
          },
          {
            label: 'The equilibrium solutions of $\\frac{dy}{dx} = y^2 - 4$ are:',
            options: ['$y = 0$ only', '$y = 2$ and $y = -2$', '$y = 4$ only', 'No equilibrium solutions'],
            correctAnswers: ['$y = 2$ and $y = -2$'],
            hints: ['Set $dy/dx = 0$: $y^2 - 4 = 0$.'],
            explanation: '$y^2 = 4$ gives $y = 2$ and $y = -2$. These are constant solutions.'
          }
        ]
      }
    },
    {
      id: 'de2-input',
      type: 'input-box' as const,
      content: '**Solve a separable IVP.** ✍️',
      exercise: {
        question: 'Solve $\\frac{dy}{dx} = \\frac{2x}{y}$ with $y(0) = 4$. Find $y(3)$.\n\n(Enter an exact value. If irrational, use sqrt notation like sqrt(N).)',
        correctAnswer: 'sqrt(34)',
        acceptableAnswers: ['sqrt(34)', 'sqrt34', '√34'],
        hints: [
          'Separate: $y\\,dy = 2x\\,dx$.',
          'Integrate: $y^2/2 = x^2 + C$. Use $y(0) = 4$: $C = 8$.',
          '$y^2 = 2x^2 + 16$. At $x = 3$: $y^2 = 18 + 16 = 34$.'
        ],
        explanation: '$y\\,dy = 2x\\,dx$. $y^2/2 = x^2 + C$. $y(0) = 4$: $8 = C$. $y^2 = 2x^2 + 16$. $y(3) = \\sqrt{18+16} = \\sqrt{34}$.'
      }
    },
    {
      id: 'de2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Concept | Key Rule |
|:---:|:---:|
| Separable DE | $dy/dx = f(x) \\cdot g(y)$ |
| Method | Separate, integrate, solve, apply IC |
| Only one $C$ | Constants combine — use $C$ on one side only |
| Equilibrium solutions | Set $g(y) = 0$ — don't lose them! |
| $\\int dy/y = \\ln|y|$ | Don't forget the absolute value |

> **Up Next:** Part 3 — Slope Fields.`
    }
  ]
};
