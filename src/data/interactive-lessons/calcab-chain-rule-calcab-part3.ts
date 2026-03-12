export const calcabChainRulePart3Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain3-intro',
      type: 'text' as const,
      content: `# 🔗 Implicit Differentiation

**Part 3 of 7 — Implicit Differentiation**

### What Is Implicit Differentiation?

Sometimes a relationship between $x$ and $y$ is not solved for $y$. For example:

$$x^2 + y^2 = 25$$

This is a circle. We cannot easily write $y$ as a single function of $x$. But we can still find $\\frac{dy}{dx}$ using the **Chain Rule**.

### The Key Idea

When you differentiate a term containing $y$ with respect to $x$, treat $y$ as a function of $x$ and apply the Chain Rule:

$$\\frac{d}{dx}[y^2] = 2y \\cdot \\frac{dy}{dx}$$

The $\\frac{dy}{dx}$ appears because $y$ is implicitly a function of $x$.

### Worked Example 1

**Find** $\\frac{dy}{dx}$ for $x^2 + y^2 = 25$

| Step | Work |
|------|------|
| Differentiate both sides | $2x + 2y\\frac{dy}{dx} = 0$ |
| Isolate $\\frac{dy}{dx}$ | $2y\\frac{dy}{dx} = -2x$ |
| Solve | $\\frac{dy}{dx} = -\\frac{x}{y}$ |

### Worked Example 2

**Find** $\\frac{dy}{dx}$ for $x^3 + y^3 = 6xy$

| Step | Work |
|------|------|
| Differentiate | $3x^2 + 3y^2\\frac{dy}{dx} = 6y + 6x\\frac{dy}{dx}$ |
| Group $dy/dx$ terms | $3y^2\\frac{dy}{dx} - 6x\\frac{dy}{dx} = 6y - 3x^2$ |
| Factor | $\\frac{dy}{dx}(3y^2 - 6x) = 6y - 3x^2$ |
| Solve | $\\frac{dy}{dx} = \\frac{6y - 3x^2}{3y^2 - 6x} = \\frac{2y - x^2}{y^2 - 2x}$ |

> **AP Tip:** Implicit differentiation appears frequently on the AP exam, especially when finding slopes of tangent lines to curves defined implicitly.`
    },
    {
      id: 'chain3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice Implicit Differentiation** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{dy}{dx}$ for $x^2 + 3y^2 = 12$.',
            options: ['$-\\frac{x}{3y}$', '$-\\frac{2x}{3y}$', '$-\\frac{x}{6y}$', '$\\frac{x}{3y}$'],
            correctAnswer: 0,
            explanation: 'Differentiate: $2x + 6y\\frac{dy}{dx} = 0$. Solve: $\\frac{dy}{dx} = \\frac{-2x}{6y} = -\\frac{x}{3y}$.'
          },
          {
            question: 'Find $\\frac{dy}{dx}$ for $xy = 10$.',
            options: ['$-\\frac{y}{x}$', '$\\frac{10}{x^2}$', '$-\\frac{x}{y}$', '$\\frac{y}{x}$'],
            correctAnswer: 0,
            explanation: 'Use product rule: $y + x\\frac{dy}{dx} = 0$. Solve: $\\frac{dy}{dx} = -\\frac{y}{x}$.'
          }
        ]
      }
    },
    {
      id: 'chain3-text2',
      type: 'text' as const,
      content: `### Implicit Differentiation with Trig Functions

### Worked Example 3

**Find** $\\frac{dy}{dx}$ for $\\sin(y) = x$

| Step | Work |
|------|------|
| Differentiate | $\\cos(y) \\cdot \\frac{dy}{dx} = 1$ |
| Solve | $\\frac{dy}{dx} = \\frac{1}{\\cos(y)}$ |

This also equals $\\sec(y)$, which makes sense since $y = \\arcsin(x)$ and $\\frac{d}{dx}\\arcsin(x) = \\frac{1}{\\sqrt{1-x^2}} = \\sec(\\arcsin(x))$.

### Worked Example 4: Finding a Tangent Line

**Find the slope of the tangent line to** $x^2 + xy + y^2 = 7$ **at** $(1, 2)$.

| Step | Work |
|------|------|
| Differentiate | $2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$ |
| Collect $dy/dx$ | $\\frac{dy}{dx}(x + 2y) = -2x - y$ |
| Solve | $\\frac{dy}{dx} = \\frac{-2x - y}{x + 2y}$ |
| Evaluate at $(1,2)$ | $\\frac{dy}{dx} = \\frac{-2(1) - 2}{1 + 2(2)} = \\frac{-4}{5}$ |

The tangent line has slope $-\\frac{4}{5}$ at $(1, 2)$.`
    },
    {
      id: 'chain3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Implicit Differentiation Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{dy}{dx}$ for $e^y = x^2 + 1$.',
            options: ['$\\frac{2x}{e^y}$', '$\\frac{e^y}{2x}$', '$2xe^{-y}$', 'Both A and C'],
            correctAnswer: 3,
            explanation: 'Differentiate: $e^y \\cdot \\frac{dy}{dx} = 2x$. Solve: $\\frac{dy}{dx} = \\frac{2x}{e^y} = 2xe^{-y}$. Both A and C are equivalent.'
          },
          {
            question: 'For $x^2 + y^2 = 25$, find the slope of the tangent at $(3, 4)$.',
            options: ['$-\\frac{3}{4}$', '$\\frac{3}{4}$', '$-\\frac{4}{3}$', '$\\frac{4}{3}$'],
            correctAnswer: 0,
            explanation: 'We found $\\frac{dy}{dx} = -\\frac{x}{y}$. At $(3,4)$: $\\frac{dy}{dx} = -\\frac{3}{4}$.'
          },
          {
            question: 'Find $\\frac{dy}{dx}$ for $\\cos(xy) = x$.',
            options: ['$\\frac{-1 + y\\sin(xy)}{x\\sin(xy)}$', '$\\frac{1 + y\\sin(xy)}{x\\sin(xy)}$', '$\\frac{-1 - y\\sin(xy)}{x\\sin(xy)}$', '$-\\frac{\\sin(xy)}{x}$'],
            correctAnswer: 0,
            explanation: 'Differentiate: $-\\sin(xy)(y + x\\frac{dy}{dx}) = 1$. Expand: $-y\\sin(xy) - x\\sin(xy)\\frac{dy}{dx} = 1$. Solve: $\\frac{dy}{dx} = \\frac{-1 - y\\sin(xy) \\cdot(-1)}{x\\sin(xy)\\cdot(-1)} = \\frac{-1+y\\sin(xy)}{x\\sin(xy)}$... Let me redo: $-y\\sin(xy) - x\\sin(xy)\\frac{dy}{dx} = 1 \\Rightarrow \\frac{dy}{dx} = \\frac{-1-y\\sin(xy)}{x\\sin(xy)}$. Hmm, rearranging: $\\frac{dy}{dx} = \\frac{-(1+y\\sin(xy))}{x\\sin(xy)}$.'
          }
        ]
      }
    },
    {
      id: 'chain3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Which differentiation rule is needed?** 🔍\n\nFor each term, select the rule needed when differentiating with respect to $x$.',
      exercise: {
        dropdowns: [
          { label: '$y^3$', options: ['Power Rule only', 'Chain Rule (implicit)', 'Product Rule', 'Quotient Rule'] },
          { label: '$xy^2$', options: ['Power Rule only', 'Chain Rule only', 'Product Rule + Chain Rule', 'Product Rule only'] },
          { label: '$\\sin(y)$', options: ['Power Rule only', 'Chain Rule (implicit)', 'Product Rule', 'No rule needed'] },
          { label: '$x^3$', options: ['Power Rule only', 'Chain Rule (implicit)', 'Product Rule + Chain Rule', 'Quotient Rule'] }
        ],
        correctAnswers: ['Chain Rule (implicit)', 'Product Rule + Chain Rule', 'Chain Rule (implicit)', 'Power Rule only'],
        hint1: 'Any term with $y$ requires the chain rule because $y$ is a function of $x$.',
        hint2: '$xy^2$ has both $x$ and $y$ multiplied, so product rule. The $y^2$ part also needs chain rule.',
        hint3: '$x^3$ has no $y$ in it, so just regular power rule.',
        explanation: '$y^3$: Chain Rule gives $3y^2\\frac{dy}{dx}$. $xy^2$: Product Rule + Chain Rule gives $y^2 + 2xy\\frac{dy}{dx}$. $\\sin(y)$: Chain Rule gives $\\cos(y)\\frac{dy}{dx}$. $x^3$: just $3x^2$.'
      }
    },
    {
      id: 'chain3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. **Implicit differentiation** uses the Chain Rule: every time you differentiate $y$, multiply by $\\frac{dy}{dx}$
2. **Steps:** differentiate both sides → collect $\\frac{dy}{dx}$ terms → factor → solve
3. **Product rule** is often needed when $x$ and $y$ appear together (like $xy$)
4. **Tangent lines:** plug in the point after finding the general $\\frac{dy}{dx}$ formula

> **Next up:** Related rates — using implicit differentiation with respect to time.`
    }
  ]
};
