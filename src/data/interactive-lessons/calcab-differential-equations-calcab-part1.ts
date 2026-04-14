export const calcabDiffEqPart1Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de1-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 1 of 7 — Introduction to Differential Equations**

### Table of Contents
1. What is a Differential Equation?
2. Separation of Variables
3. Slope Fields
4. Exponential Growth & Decay
5. Particular Solutions & IVPs
6. Problem-Solving Workshop
7. Comprehensive Assessment

---

### What is a Differential Equation?

A **differential equation (DE)** is an equation that relates a function to one or more of its derivatives.

| Type | Example | Method |
|:---:|:---:|:---:|
| Directly integrable | $\\frac{dy}{dx} = 3x^2$ | Integrate both sides |
| Separable | $\\frac{dy}{dx} = 2y$ | Separate and integrate |
| Non-separable | $\\frac{dy}{dx} = x + y$ | Not on AP AB |

> **Key Fact:** On the AP Calculus AB exam, you only need to solve **separable** DEs and those solvable by **direct integration**.`
    },
    {
      id: 'de1-direct',
      type: 'text' as const,
      content: `### Solving by Direct Integration

When $\\frac{dy}{dx} = f(x)$ (right side depends only on $x$):

$$\\boxed{y = \\int f(x)\\,dx + C}$$

### Step-by-Step Process

| Step | Action | Example: $\\frac{dy}{dx} = 6x^2 - 4x + 1$, $y(0) = 3$ |
|:---:|:---:|:---:|
| 1 | Integrate both sides | $y = \\int (6x^2 - 4x + 1)\\,dx$ |
| 2 | Find antiderivative | $y = 2x^3 - 2x^2 + x + C$ |
| 3 | Apply initial condition | $y(0) = 0 - 0 + 0 + C = 3$ |
| 4 | Write particular solution | $y = 2x^3 - 2x^2 + x + 3$ |

### General vs. Particular Solutions

| Term | Meaning | Example |
|:---:|:---:|:---:|
| **General solution** | Family of curves (includes $C$) | $y = 2x^3 - 2x^2 + x + C$ |
| **Particular solution** | One specific curve ($C$ determined) | $y = 2x^3 - 2x^2 + x + 3$ |
| **Initial condition** | Point that determines $C$ | $y(0) = 3$ |

> **AP Tip:** ALWAYS write "$+C$" when finding a general solution. Forgetting $+C$ is one of the most common point-losing mistakes on FRQs.`
    },
    {
      id: 'de1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Direct Integration Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Solve $\\frac{dy}{dx} = \\cos x + 2$ with $y(0) = 1$.',
            options: ['$y = \\sin x + 2x + 1$', '$y = \\sin x + 2x$', '$y = -\\sin x + 2x + 1$', '$y = \\cos x + 2x + 1$'],
            correctAnswer: 0,
            explanation: '$y = \\sin x + 2x + C$. $y(0) = 0 + 0 + C = 1$, so $C = 1$. $y = \\sin x + 2x + 1$.'
          },
          {
            question: 'The general solution of $\\frac{dy}{dx} = e^x + 3x^2$ is:',
            options: ['$y = e^x + x^3 + C$', '$y = e^x + 6x + C$', '$y = xe^x + x^3 + C$', '$y = e^x + x^3$'],
            correctAnswer: 0,
            explanation: '$\\int (e^x + 3x^2)\\,dx = e^x + x^3 + C$.'
          },
          {
            question: 'If $f\'(x) = 4x^3$ and $f(1) = 7$, then $f(2) =$',
            options: ['$16$', '$22$', '$15$', '$20$'],
            correctAnswer: 1,
            explanation: '$f(x) = x^4 + C$. $f(1) = 1 + C = 7$, so $C = 6$. $f(2) = 16 + 6 = 22$.'
          }
        ]
      }
    },
    {
      id: 'de1-secondorder',
      type: 'text' as const,
      content: `### Double Integration (Second-Order Direct)

When given $\\frac{d^2y}{dx^2} = f(x)$ with two conditions:

$$\\boxed{\\text{Integrate twice, using one condition each time}}$$

**Example:** $f''(x) = 12x$, $f'(0) = -2$, $f(0) = 5$.

**Step 1:** $f'(x) = \\int 12x\\,dx = 6x^2 + C_1$

$f'(0) = C_1 = -2$, so $f'(x) = 6x^2 - 2$

**Step 2:** $f(x) = \\int (6x^2 - 2)\\,dx = 2x^3 - 2x + C_2$

$f(0) = C_2 = 5$, so $f(x) = 2x^3 - 2x + 5$

> **Key Fact:** Each integration introduces one constant, each initial condition determines one constant.`
    },
    {
      id: 'de1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each DE.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{dy}{dx} = x^2 + 5$ is solved by:',
            options: ['Direct integration', 'Separation of variables', 'Both methods work', 'Cannot be solved on AP AB'],
            correctAnswers: ['Direct integration'],
            hints: ['The right side depends only on $x$.'],
            explanation: 'Since $f(x) = x^2 + 5$ has no $y$, integrate directly: $y = x^3/3 + 5x + C$.'
          },
          {
            label: '$\\frac{dy}{dx} = 3y$ is solved by:',
            options: ['Direct integration', 'Separation of variables', 'Both methods work', 'Cannot be solved on AP AB'],
            correctAnswers: ['Separation of variables'],
            hints: ['The right side depends on $y$, not just $x$.'],
            explanation: 'Separate: $\\frac{dy}{y} = 3\\,dx$. $y = Ae^{3x}$.'
          },
          {
            label: '$\\frac{dy}{dx} = x + y$ is solved by:',
            options: ['Direct integration', 'Separation of variables', 'Both methods work', 'Cannot be solved on AP AB'],
            correctAnswers: ['Cannot be solved on AP AB'],
            hints: ['Can you separate $x + y$ into $f(x) \\cdot g(y)$? No!'],
            explanation: 'This is non-separable (the sum $x+y$ cannot be written as a product). Not tested on AP AB.'
          }
        ]
      }
    },
    {
      id: 'de1-input',
      type: 'input-box' as const,
      content: '**Solve an IVP.** ✍️',
      exercise: {
        question: 'Given $f\'\'(x) = 6x$, $f\'(0) = 4$, $f(0) = -1$, find $f(2)$.\n\n(Enter an integer.)',
        correctAnswer: '15',
        acceptableAnswers: ['15'],
        hints: [
          '$f\'(x) = \\int 6x\\,dx = 3x^2 + C_1$. Use $f\'(0) = 4$.',
          '$f\'(x) = 3x^2 + 4$. Now integrate again.',
          '$f(x) = x^3 + 4x + C_2$. Use $f(0) = -1$ to find $C_2 = -1$.'
        ],
        explanation: '$f\'(x) = 3x^2 + 4$. $f(x) = x^3 + 4x - 1$. $f(2) = 8 + 8 - 1 = 15$.'
      }
    },
    {
      id: 'de1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Concept | Key Point |
|:---:|:---:|
| Differential equation | Relates a function to its derivatives |
| Direct integration | When $dy/dx = f(x)$ — integrate both sides |
| General solution | Includes $+C$ (family of curves) |
| Particular solution | $C$ determined by initial condition |
| Double integration | Integrate twice for $f''(x)$, two conditions needed |

> **Up Next:** Part 2 — Separation of Variables.`
    }
  ]
};
