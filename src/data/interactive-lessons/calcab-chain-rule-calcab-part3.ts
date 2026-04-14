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

$$\\boxed{\\text{Differentiate both sides with respect to } x.\\text{ Every time you differentiate } y, \\text{ multiply by } \\frac{dy}{dx}.}$$

Why? Because $y$ is implicitly a function of $x$, so:

$$\\frac{d}{dx}[y^n] = ny^{n-1} \\cdot \\frac{dy}{dx}$$

> **Key Concept:** Implicit differentiation is just the Chain Rule applied to $y$, treating $y$ as a function of $x$.`
    },
    {
      id: 'chain3-steps',
      type: 'text' as const,
      content: `### Step-by-Step Method

| Step | Action |
|:---:|------|
| 1 | Differentiate every term with respect to $x$ |
| 2 | Apply Chain Rule to any term with $y$ (attach $\\frac{dy}{dx}$) |
| 3 | Use Product/Quotient Rule when $x$ and $y$ are multiplied/divided |
| 4 | Collect all $\\frac{dy}{dx}$ terms on one side |
| 5 | Factor out $\\frac{dy}{dx}$ |
| 6 | Solve for $\\frac{dy}{dx}$ |

### Worked Example 1: Circle

**Find** $\\frac{dy}{dx}$ for $x^2 + y^2 = 25$

| Step | Work |
|------|------|
| Differentiate both sides | $2x + 2y\\frac{dy}{dx} = 0$ |
| Isolate | $2y\\frac{dy}{dx} = -2x$ |
| Solve | $\\frac{dy}{dx} = -\\frac{x}{y}$ |

> Notice: the derivative depends on BOTH $x$ and $y$. This is typical for implicit differentiation.

### Worked Example 2: Folium of Descartes

**Find** $\\frac{dy}{dx}$ for $x^3 + y^3 = 6xy$

| Step | Work |
|------|------|
| Differentiate | $3x^2 + 3y^2\\frac{dy}{dx} = 6y + 6x\\frac{dy}{dx}$ |
| Group $\\frac{dy}{dx}$ terms | $3y^2\\frac{dy}{dx} - 6x\\frac{dy}{dx} = 6y - 3x^2$ |
| Factor | $\\frac{dy}{dx}(3y^2 - 6x) = 6y - 3x^2$ |
| Solve | $\\frac{dy}{dx} = \\frac{6y - 3x^2}{3y^2 - 6x} = \\frac{2y - x^2}{y^2 - 2x}$ |

> **AP Tip:** Implicit differentiation appears frequently on the AP exam, especially when finding slopes of tangent lines to curves.`
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
          },
          {
            question: 'Find $\\frac{dy}{dx}$ for $y^3 = x$.',
            options: ['$3y^2$', '$\\frac{1}{3y^2}$', '$\\frac{x}{3}$', '$\\frac{1}{3x^2}$'],
            correctAnswer: 1,
            explanation: 'Differentiate: $3y^2\\frac{dy}{dx} = 1$. Solve: $\\frac{dy}{dx} = \\frac{1}{3y^2}$.'
          }
        ]
      }
    },
    {
      id: 'chain3-trig',
      type: 'text' as const,
      content: `### Implicit Differentiation with Trig Functions

**Example 3:** $\\sin(y) = x$

| Step | Work |
|------|------|
| Differentiate | $\\cos(y) \\cdot \\frac{dy}{dx} = 1$ |
| Solve | $\\frac{dy}{dx} = \\frac{1}{\\cos(y)} = \\sec(y)$ |

> **Key Fact:** This is exactly how we derive the formula $\\frac{d}{dx}[\\arcsin(x)] = \\frac{1}{\\sqrt{1-x^2}}$. Since $\\sin(y) = x$, we know $\\cos(y) = \\sqrt{1-x^2}$.

### Tangent Line Applications

**Example 4:** Find the slope of the tangent line to $x^2 + xy + y^2 = 7$ at $(1, 2)$.

| Step | Work |
|------|------|
| Differentiate | $2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$ |
| Collect $\\frac{dy}{dx}$ | $(x + 2y)\\frac{dy}{dx} = -2x - y$ |
| Solve | $\\frac{dy}{dx} = \\frac{-2x - y}{x + 2y}$ |
| Plug in $(1,2)$ | $\\frac{dy}{dx} = \\frac{-2(1) - 2}{1 + 2(2)} = \\frac{-4}{5}$ |

$$\\boxed{\\text{Tangent line: } y - 2 = -\\frac{4}{5}(x - 1)}$$

### Which Rules Are Needed?

| Term | Rule(s) Required |
|:---:|:---:|
| $x^n$ terms | Power Rule only |
| $y^n$ terms | Power Rule + Chain Rule ($\\frac{dy}{dx}$) |
| $xy$ products | Product Rule + Chain Rule |
| $\\sin(y)$, $e^y$, etc. | Chain Rule applied to $y$ |`
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
          }
        ]
      }
    },
    {
      id: 'chain3-secondderiv',
      type: 'text' as const,
      content: `### Second Derivatives (Implicit)

On the AP exam, you may be asked to find $\\frac{d^2y}{dx^2}$ implicitly.

**Example:** For $x^2 + y^2 = 25$, find $\\frac{d^2y}{dx^2}$.

We already found $\\frac{dy}{dx} = -\\frac{x}{y}$. Now differentiate again using quotient rule:

$$\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(-\\frac{x}{y}\\right) = -\\frac{y(1) - x\\frac{dy}{dx}}{y^2}$$

Substitute $\\frac{dy}{dx} = -\\frac{x}{y}$:

$$= -\\frac{y - x\\left(-\\frac{x}{y}\\right)}{y^2} = -\\frac{y + \\frac{x^2}{y}}{y^2} = -\\frac{\\frac{y^2+x^2}{y}}{y^2} = -\\frac{x^2+y^2}{y^3}$$

Since $x^2+y^2 = 25$:

$$\\boxed{\\frac{d^2y}{dx^2} = -\\frac{25}{y^3}}$$

> **AP Tip:** When finding $\\frac{d^2y}{dx^2}$, substitute the original $\\frac{dy}{dx}$ expression AND use the original equation to simplify. This is a common free-response technique.`
    },
    {
      id: 'chain3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Which differentiation rule is needed?** 🔍\n\nFor each term (when differentiating with respect to $x$), select the rule needed.',
      exercise: {
        dropdowns: [
          {
            label: '$y^3$',
            options: ['Power Rule only', 'Chain Rule (implicit)', 'Product Rule', 'Quotient Rule'],
            correctAnswers: ['Chain Rule (implicit)'],
            hints: ['$y$ is a function of $x$, so differentiating $y^n$ requires the chain rule.'],
            explanation: '$\\frac{d}{dx}[y^3] = 3y^2 \\cdot \\frac{dy}{dx}$. The $\\frac{dy}{dx}$ factor comes from the chain rule.'
          },
          {
            label: '$xy^2$',
            options: ['Power Rule only', 'Chain Rule only', 'Product Rule + Chain Rule', 'Product Rule only'],
            correctAnswers: ['Product Rule + Chain Rule'],
            hints: ['$x$ and $y^2$ are multiplied — thats a product. $y^2$ also needs chain rule.'],
            explanation: '$\\frac{d}{dx}[xy^2] = y^2 + x \\cdot 2y\\frac{dy}{dx}$. Product rule for the product, chain rule for the $y^2$.'
          },
          {
            label: '$\\sin(y)$',
            options: ['Power Rule only', 'Chain Rule (implicit)', 'Product Rule', 'No rule needed'],
            correctAnswers: ['Chain Rule (implicit)'],
            hints: ['$\\sin(y)$ where $y$ is a function of $x$ — chain rule!'],
            explanation: '$\\frac{d}{dx}[\\sin(y)] = \\cos(y) \\cdot \\frac{dy}{dx}$.'
          },
          {
            label: '$x^3$',
            options: ['Power Rule only', 'Chain Rule (implicit)', 'Product Rule + Chain Rule', 'Quotient Rule'],
            correctAnswers: ['Power Rule only'],
            hints: ['No $y$ here — just a regular power of $x$.'],
            explanation: '$\\frac{d}{dx}[x^3] = 3x^2$. No chain rule needed because $x$ is the variable of differentiation.'
          }
        ]
      }
    },
    {
      id: 'chain3-input',
      type: 'input-box' as const,
      content: '**Implicit Differentiation computation.** ✍️',
      exercise: {
        question: 'For the curve $x^2 + y^2 = 25$, find $\\frac{dy}{dx}$ at the point $(3, 4)$. Enter your answer as a fraction (e.g., -3/4).',
        correctAnswer: '-3/4',
        acceptableAnswers: ['-3/4', '-0.75'],
        hints: [
          'Differentiate implicitly: $2x + 2y\\frac{dy}{dx} = 0$.',
          'Solve: $\\frac{dy}{dx} = -\\frac{x}{y}$.',
          'Plug in $x=3$ and $y=4$.'
        ],
        explanation: '$2x + 2y\\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = -\\frac{x}{y}$.\\n\\nAt $(3,4)$: $\\frac{dy}{dx} = -\\frac{3}{4}$.'
      }
    },
    {
      id: 'chain3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

$$\\boxed{\\text{Every time you differentiate } y, \\text{ attach } \\frac{dy}{dx}}$$

| Step | Action |
|:---:|------|
| 1 | Differentiate both sides w.r.t. $x$ |
| 2 | Chain Rule on every $y$ term |
| 3 | Product Rule when $x$ and $y$ multiply |
| 4 | Collect, factor, solve for $\\frac{dy}{dx}$ |

**Common Errors:**
- Forgetting $\\frac{dy}{dx}$ on $y$ terms
- Missing the product rule on $xy$ terms
- Plugging in the point too early (always find general $\\frac{dy}{dx}$ first)

> **Up Next:** Part 4 — Related Rates (using implicit differentiation with respect to time).`
    }
  ]
};
