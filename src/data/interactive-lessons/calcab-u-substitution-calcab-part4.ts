export const calcabUSubPart4Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub4-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 4 of 7 — Trickier Substitutions**

### Beyond Basic Patterns

Some integrals require creative choices of $u$ or algebraic manipulation before substitution.

| Category | Example | Strategy |
|:---:|:---:|:---:|
| Exponential inside | $\\int \\frac{e^x}{1+e^x}\\,dx$ | $u = 1 + e^x$ |
| Log inside | $\\int \\frac{\\ln x}{x}\\,dx$ | $u = \\ln x$ |
| Square root | $\\int x\\sqrt{x+1}\\,dx$ | $u = x+1$, then $x = u-1$ |
| Nested functions | $\\int \\sin(\\ln x)\\frac{1}{x}\\,dx$ | $u = \\ln x$ |
| Radical denominator | $\\int \\frac{1}{\\sqrt{x}(1+\\sqrt{x})}\\,dx$ | $u = 1 + \\sqrt{x}$ |`
    },
    {
      id: 'usub4-exponential',
      type: 'text' as const,
      content: `### Exponential Substitutions

$$\\boxed{\\int \\frac{e^x}{f(e^x)}\\,dx: \\text{ let } u = e^x \\text{ or } u = f(e^x)}$$

**Example 1:** $\\int \\frac{e^{2x}}{e^x + 3}\\,dx$

Let $u = e^x + 3$, $du = e^x\\,dx$. Rewrite $e^{2x} = e^x \\cdot e^x$:

$$\\int \\frac{e^x \\cdot e^x}{e^x + 3}\\,dx = \\int \\frac{u - 3}{u}\\,du = \\int \\left(1 - \\frac{3}{u}\\right)du = u - 3\\ln|u| + C = e^x + 3 - 3\\ln(e^x+3) + C$$

**Example 2:** $\\int e^x \\sqrt{e^x + 1}\\,dx$

$u = e^x + 1$, $du = e^x\\,dx$:

$$\\int \\sqrt{u}\\,du = \\frac{2}{3}u^{3/2} + C = \\frac{2}{3}(e^x+1)^{3/2} + C$$

> **Key Fact:** When $e^x$ appears both in the integrand and provides $du$, try $u = \\text{(the other piece)}$.`
    },
    {
      id: 'usub4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Trickier integrals.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{\\ln x}{x}\\,dx$.',
            options: ['$\\ln(\\ln x) + C$', '$\\frac{(\\ln x)^2}{2} + C$', '$\\frac{1}{x^2} + C$', '$x\\ln x - x + C$'],
            correctAnswer: 1,
            explanation: '$u = \\ln x$, $du = dx/x$. $\\int u\\,du = u^2/2 = (\\ln x)^2/2 + C$.'
          },
          {
            question: 'For $\\int x\\sqrt{x-1}\\,dx$ with $u = x-1$, we rewrite $x$ as:',
            options: ['$u^2$', '$u + 1$', '$\\sqrt{u}$', '$u - 1$'],
            correctAnswer: 1,
            explanation: 'If $u = x-1$, then $x = u+1$. So: $\\int (u+1)\\sqrt{u}\\,du = \\int (u^{3/2} + u^{1/2})\\,du$.'
          },
          {
            question: 'What is $\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}}\\,dx$?',
            options: ['$e^{\\sqrt{x}} + C$', '$2e^{\\sqrt{x}} + C$', '$\\frac{e^{\\sqrt{x}}}{2} + C$', '$e^{\\sqrt{x}}\\sqrt{x} + C$'],
            correctAnswer: 1,
            explanation: '$u = \\sqrt{x}$, $du = \\frac{1}{2\\sqrt{x}}dx$. $2\\int e^u\\,du = 2e^{\\sqrt{x}} + C$.'
          }
        ]
      }
    },
    {
      id: 'usub4-sqrt',
      type: 'text' as const,
      content: `### Square Root Substitutions — Solving for $x$

When $x$ appears **outside** the composition, express $x$ in terms of $u$.

**Example:** $\\int x^2\\sqrt{x+2}\\,dx$

$u = x+2$, so $x = u-2$, $x^2 = (u-2)^2 = u^2 - 4u + 4$, $dx = du$:

$$\\int (u^2-4u+4)\\sqrt{u}\\,du = \\int (u^{5/2} - 4u^{3/2} + 4u^{1/2})\\,du$$

$$= \\frac{2u^{7/2}}{7} - \\frac{8u^{5/2}}{5} + \\frac{8u^{3/2}}{3} + C$$

Substitute back: replace $u$ with $x+2$.

| Step | Purpose |
|:---:|:---:|
| Choose $u$ = expression under radical | Simplifies the root |
| Express all other $x$'s as $u \\pm c$ | Everything becomes a $u$-integral |
| Expand and integrate term by term | Standard power rule |
| Back-substitute $u \\to x+c$ | Return to original variable |`
    },
    {
      id: 'usub4-log',
      type: 'text' as const,
      content: `### Logarithmic Substitutions

When $\\ln x$ appears as an argument and $1/x$ is present (or producible):

$$\\boxed{u = \\ln x, \\quad du = \\frac{1}{x}\\,dx}$$

| Integral | Substitution | Result |
|:---:|:---:|:---:|
| $\\int \\frac{(\\ln x)^n}{x}\\,dx$ | $u = \\ln x$ | $\\frac{(\\ln x)^{n+1}}{n+1} + C$ |
| $\\int \\frac{\\cos(\\ln x)}{x}\\,dx$ | $u = \\ln x$ | $\\sin(\\ln x) + C$ |
| $\\int \\frac{1}{x\\ln x}\\,dx$ | $u = \\ln x$ | $\\ln|\\ln x| + C$ |

> **AP Tip:** The combination "$\\frac{\\text{stuff with } \\ln x}{x}$" almost always signals $u = \\ln x$.`
    },
    {
      id: 'usub4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the correct substitution.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\int \\frac{e^x}{(e^x+1)^2}\\,dx$, choose $u$:',
            options: ['$u = e^x$', '$u = e^x + 1$', '$u = (e^x+1)^2$', '$u = x$'],
            correctAnswers: ['$u = e^x + 1$'],
            hints: ['The denominator is $(e^x+1)^2$ and $d(e^x+1) = e^x\\,dx$.'],
            explanation: '$u = e^x+1$, $du = e^x\\,dx$. $\\int u^{-2}\\,du = -u^{-1} + C = -\\frac{1}{e^x+1} + C$.'
          },
          {
            label: 'For $\\int x\\sqrt{2x+3}\\,dx$, after $u = 2x+3$, $x$ becomes:',
            options: ['$u - 3$', '$(u-3)/2$', '$2u + 3$', '$\\sqrt{u}$'],
            correctAnswers: ['$(u-3)/2$'],
            hints: ['$u = 2x+3 \\Rightarrow 2x = u-3 \\Rightarrow x = (u-3)/2$.'],
            explanation: 'Solve $u = 2x+3$ for $x$: $x = (u-3)/2$. Also $dx = du/2$.'
          },
          {
            label: '$\\int \\frac{(\\ln x)^3}{x}\\,dx$ evaluates to:',
            options: ['$3(\\ln x)^2/x + C$', '$(\\ln x)^4/4 + C$', '$\\ln(\\ln x)^3 + C$', '$(\\ln x)^3 \\cdot x + C$'],
            correctAnswers: ['$(\\ln x)^4/4 + C$'],
            hints: ['$u = \\ln x$: $\\int u^3\\,du$.'],
            explanation: '$u = \\ln x$: $\\int u^3\\,du = u^4/4 = (\\ln x)^4/4 + C$.'
          }
        ]
      }
    },
    {
      id: 'usub4-input',
      type: 'input-box' as const,
      content: '**Try a tricky one.** ✍️',
      exercise: {
        question: 'Evaluate $\\int_1^e \\frac{(\\ln x)^2}{x}\\,dx$.\n\n(Give an exact answer as a fraction like a/b.)',
        correctAnswer: '1/3',
        acceptableAnswers: ['1/3'],
        hints: [
          '$u = \\ln x$, $du = dx/x$.',
          'Limits: $x=1 \\to u=0$, $x=e \\to u=1$.',
          '$\\int_0^1 u^2\\,du = \\frac{u^3}{3}\\Big|_0^1$.'
        ],
        explanation: '$u = \\ln x$: $\\int_0^1 u^2\\,du = [u^3/3]_0^1 = 1/3$.'
      }
    },
    {
      id: 'usub4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Technique | When to Use |
|:---:|:---:|
| $u = e^x + c$ | Exponential in denominator or under root |
| $u = \\ln x$ | $\\ln x$ in numerator with $1/x$ present |
| $u =$ radical expression | Solve for $x = f(u)$ and substitute |
| Nested: $u =$ inner function | $1/x$ or $e^x$ provides $du$ |

> **Up Next:** Part 5 — Long Division & Completing the Square.`
    }
  ]
};
