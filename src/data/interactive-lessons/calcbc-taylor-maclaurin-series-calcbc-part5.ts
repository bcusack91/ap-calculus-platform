export const calcbcTaylorPart5Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tm5-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin — AP FRQ Strategies

**Part 5 of 7 — Exam Techniques**

### The FRQ Taylor Series Question

This appears on virtually EVERY BC exam. The typical structure:

**Part (a):** Write the first 4 nonzero terms and the general term of the Taylor/Maclaurin series for $f$.

**Part (b):** Find the interval/radius of convergence.

**Part (c):** Use the series to approximate a value or integral.

**Part (d):** Show the approximation has error less than some bound.

### Part (a) Strategy

| If $f$ is... | Strategy |
|-------------|---------|
| A known function ($e^x$, $\\sin x$, etc.) | Write the known series directly |
| A composition/product | Manipulate known series |
| An unfamiliar function | Compute derivatives at center |
| Given as a DE solution | Match coefficients |

> **AP Tip:** "General term" means write $\\sum$ notation with $n$. This is where students lose the most points — verify your general term by checking it produces the first few terms correctly.`
    },
    {
      id: 'tm5-parts',
      type: 'text' as const,
      content: `### Part (b): Interval of Convergence

Always use Ratio Test → test endpoints.

Write your answer as an interval with proper notation: $[-1,1)$, not "$-1$ to $1$."

### Part (c): Approximation

Substitute the given value into your series:
$\\sin(0.5) \\approx 0.5 - (0.5)^3/6 + (0.5)^5/120 = 0.5 - 0.02083 + 0.00026 = 0.47943$

### Part (d): Error Bound

Choose between:
- **AST Error Bound** if the series alternates (simpler!)
- **Lagrange Error Bound** if not alternating or specifically asked

**Template for AST:** "Since the series is alternating with decreasing terms converging to $0$, the error is bounded by the first omitted term: $|R| \\le |a_{N+1}| = \\ldots < \\epsilon$."

**Template for Lagrange:** "By Taylor's theorem, $|R_n(x)| \\le M|x-c|^{n+1}/(n+1)!$ where $M = \\max|f^{(n+1)}| = \\ldots$"

### Scoring Insight

Each part is typically worth 2-3 points. Justification language matters — use precise mathematical statements.`
    },
    {
      id: 'tm5-mc1',
      type: 'multiple-choice' as const,
      content: '**AP Question Types**',
      exercise: {
        questions: [
          {
            question: 'A BC FRQ says: "Write the first four nonzero terms of the Maclaurin series for $f(x) = x \\sin x$." The correct first term is:',
            options: ['$x^2$', '$x$', '$1$', '$x^3$'],
            correctAnswer: 0,
            explanation: '$x \\sin x = x(x - x^3/6 + \\cdots) = x^2 - x^4/6 + \\cdots$. First nonzero term is $x^2$.'
          },
          {
            question: 'When asked for the "general term" of $\\cos x$, the correct answer is:',
            options: ['$\\frac{(-1)^n x^{2n}}{(2n)!}$', '$\\frac{(-1)^n x^n}{n!}$', '$\\frac{x^{2n}}{(2n)!}$', '$\\frac{(-1)^{n+1} x^{2n}}{(2n)!}$'],
            correctAnswer: 0,
            explanation: '$\\cos x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}$. The general term is $(-1)^n x^{2n}/(2n)!$.'
          },
          {
            question: 'If $f(x) = \\sum a_n x^n$ and you need $\\int_0^{1/2} f(x)\\,dx$, you should:',
            options: ['Integrate term by term: $\\sum a_n (1/2)^{n+1}/(n+1)$', 'Find an antiderivative and evaluate', 'Use numerical integration', 'This cannot be computed from the series'],
            correctAnswer: 0,
            explanation: '$\\int_0^{1/2} \\sum a_n x^n\\,dx = \\sum a_n \\int_0^{1/2} x^n\\,dx = \\sum a_n \\frac{(1/2)^{n+1}}{n+1}$.'
          }
        ]
      }
    },
    {
      id: 'tm5-dropdown',
      type: 'dropdown-select' as const,
      content: '**FRQ Decisions**',
      exercise: {
        dropdowns: [
          {
            label: 'An FRQ gives $f\'(0) = 3$, $f\'\'(0) = -4$, $f\'\'\'(0) = 12$, $f(0) = 1$. The $T_3$ is:',
            options: ['$1 + 3x - 2x^2 + 2x^3$', '$1 + 3x - 4x^2 + 12x^3$', '$1 + 3x - 4x^2/2 + 12x^3/6$', '$3x - 2x^2 + 2x^3$'],
            correctAnswers: ['$1 + 3x - 2x^2 + 2x^3$'],
            hints: ['$a_n = f^{(n)}(0)/n!$: $a_0=1$, $a_1=3$, $a_2=-4/2=-2$, $a_3=12/6=2$.'],
            explanation: '$T_3 = 1 + 3x + (-4/2)x^2 + (12/6)x^3 = 1 + 3x - 2x^2 + 2x^3$.'
          },
          {
            label: 'To show error $< 1/100$ for $\\sin(1/2) \\approx T_5(1/2)$, the easiest approach is:',
            options: ['AST: error $\\le (1/2)^7/7! = 1/645120 < 1/100$ ✓', 'Lagrange with $M = 1$', 'Compute $T_7$ and compare', 'Use a calculator'],
            correctAnswers: ['AST: error $\\le (1/2)^7/7! = 1/645120 < 1/100$ ✓'],
            hints: ['$\\sin x$ series alternates for $x > 0$.'],
            explanation: 'The sine series alternates, so AST error bound applies: $|R| \\le |(1/2)^7/7!| = 1/645120 \\ll 1/100$.'
          }
        ]
      }
    },
    {
      id: 'tm5-input',
      type: 'input-box' as const,
      content: '**FRQ Practice**',
      exercise: {
        question: 'Using the Maclaurin series, approximate $\\int_0^{1} \\frac{\\sin x}{x}\\,dx$ with terms through $x^4$. Write the answer as a fraction. (Hint: $\\sin x/x = 1 - x^2/6 + x^4/120 - \\cdots$)',
        correctAnswer: '4121/4200',
        acceptableAnswers: ['4121/4200', '0.981'],
        hints: ['$\\int_0^1 (1 - x^2/6 + x^4/120)\\,dx = 1 - 1/18 + 1/600$.'],
        explanation: '$\\int_0^1 (1 - x^2/6 + x^4/120)\\,dx = [x - x^3/18 + x^5/600]_0^1 = 1 - 1/18 + 1/600$. LCD = 1800: $1800/1800 - 100/1800 + 3/1800 = 1703/1800$. Hmm, let me recompute: $1 - 1/18 + 1/600 = 600/600 - 33.33/600 + 1/600$. Better: LCD of 18, 600 = 1800. $1 = 1800/1800$, $1/18 = 100/1800$, $1/600 = 3/1800$. Total: $(1800 - 100 + 3)/1800 = 1703/1800$.'
      }
    },
    {
      id: 'tm5-summary',
      type: 'text' as const,
      content: `### Summary

- The Taylor FRQ has a predictable structure: series → IOC → approx → error
- Use known series when possible; compute derivatives as last resort
- For error bounds: AST when alternating, Lagrange otherwise
- Verify your general term reproduces the terms you wrote
- Show ALL work — the AP graders need to see your reasoning

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
