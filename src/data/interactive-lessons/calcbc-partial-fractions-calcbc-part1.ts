export const calcbcPartialFracPart1Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf1-intro',
      type: 'text' as const,
      content: `# Partial Fraction Decomposition

**Part 1 of 7 \u2014 The Concept & Distinct Linear Factors**

Partial fractions is a technique for integrating rational functions (polynomial \u00f7 polynomial). The idea: break a complex fraction into simpler pieces that are easy to integrate.

| Part | Topic |
|------|-------|
| **1** | **Distinct Linear Factors** |
| 2 | Repeated Linear Factors |
| 3 | Irreducible Quadratic Factors |
| 4 | Integration with Partial Fractions |
| 5 | Long Division First |
| 6 | Problem-Solving Workshop |
| 7 | Comprehensive Review |`
    },
    {
      id: 'pf1-setup',
      type: 'text' as const,
      content: `### When to Use Partial Fractions

Use partial fractions when:
- The integrand is a proper rational function (degree of numerator < degree of denominator)
- The denominator can be factored
- u-substitution doesn\u2019t work directly

### Prerequisite: Factor the Denominator

Every polynomial with real coefficients factors into:
- **Linear factors**: $(x - a)$
- **Irreducible quadratic factors**: $(x^2 + bx + c)$ where $b^2 - 4c < 0$

> **Key Fact:** AP Calculus BC only tests partial fractions with linear factors and non-repeating irreducible quadratics. The decomposition setup is the hardest part \u2014 once you have the pieces, integration is straightforward.`
    },
    {
      id: 'pf1-distinct',
      type: 'text' as const,
      content: `### Case 1: Distinct Linear Factors

$$\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}$$

### Worked Example: $\\int \\frac{1}{x^2 - 1}\\,dx$

| Step | Work |
|------|------|
| Factor denominator | $x^2-1 = (x-1)(x+1)$ |
| Set up decomposition | $\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$ |
| Multiply through | $1 = A(x+1) + B(x-1)$ |
| Plug in $x = 1$ | $1 = 2A \\Rightarrow A = \\frac{1}{2}$ |
| Plug in $x = -1$ | $1 = -2B \\Rightarrow B = -\\frac{1}{2}$ |
| Integrate | $\\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C$ |

$$\\boxed{\\int \\frac{1}{x^2-1}\\,dx = \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C}$$`
    },
    {
      id: 'pf1-three',
      type: 'text' as const,
      content: `### Three Distinct Linear Factors

**Example:** $\\frac{x+7}{(x+1)(x-1)(x+3)}$

Decompose: $\\frac{A}{x+1} + \\frac{B}{x-1} + \\frac{C}{x+3}$

Multiply through: $x + 7 = A(x-1)(x+3) + B(x+1)(x+3) + C(x+1)(x-1)$

| Substitution | Equation | Result |
|-------------|----------|--------|
| $x = 1$ | $8 = B(2)(4) = 8B$ | $B = 1$ |
| $x = -1$ | $6 = A(-2)(2) = -4A$ | $A = -\\frac{3}{2}$ |
| $x = -3$ | $4 = C(-2)(-4) = 8C$ | $C = \\frac{1}{2}$ |

> **AP Tip:** The \u201ccover-up\u201d method (Heaviside) is fastest: to find $A$, cover $(x+1)$ in the original fraction and evaluate at $x = -1$.`
    },
    {
      id: 'pf1-mc1',
      type: 'multiple-choice' as const,
      content: '**Decomposition Practice**',
      exercise: {
        questions: [
          {
            question: 'Decompose $\\frac{5x+1}{(x+2)(x-3)}$ into partial fractions. What is $A$ (the numerator over $x+2$)?',
            options: [
              '$A = \\frac{9}{5}$',
              '$A = -\\frac{9}{5}$',
              '$A = -9$',
              '$A = 9$'
            ],
            correctAnswer: 0,
            explanation: 'Cover up $(x+2)$ and plug in $x = -2$: $A = \\frac{5(-2)+1}{(-2)-3} = \\frac{-9}{-5} = \\frac{9}{5}$.'
          },
          {
            question: 'How many constants are needed to decompose $\\frac{3x^2+1}{x(x-1)(x+4)}$?',
            options: ['3', '2', '4', '1'],
            correctAnswer: 0,
            explanation: 'Three distinct linear factors $\\Rightarrow$ three constants: $\\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{x+4}$.'
          }
        ]
      }
    },
    {
      id: 'pf1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Setting Up Decompositions**',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{2x}{(x-1)(x+3)}$ decomposes as $\\frac{A}{x-1} + \\frac{B}{x+3}$. Using cover-up at $x=1$: $A = $',
            options: ['$\\frac{1}{2}$', '$1$', '$2$', '$-\\frac{1}{2}$'],
            correctAnswers: ['$\\frac{1}{2}$'],
            hints: ['Cover $(x-1)$: evaluate $\\frac{2(1)}{(1)+3} = \\frac{2}{4}$.'],
            explanation: '$A = \\frac{2(1)}{1+3} = \\frac{2}{4} = \\frac{1}{2}$.'
          },
          {
            label: 'Same fraction: using cover-up at $x = -3$: $B = $',
            options: ['$\\frac{3}{2}$', '$-\\frac{3}{2}$', '$3$', '$-3$'],
            correctAnswers: ['$\\frac{3}{2}$'],
            hints: ['Cover $(x+3)$: evaluate $\\frac{2(-3)}{(-3)-1} = \\frac{-6}{-4}$.'],
            explanation: '$B = \\frac{2(-3)}{-3-1} = \\frac{-6}{-4} = \\frac{3}{2}$.'
          }
        ]
      }
    },
    {
      id: 'pf1-input',
      type: 'input-box' as const,
      content: '**Cover-Up Computation**',
      exercise: {
        question: 'For $\\frac{x+5}{(x+1)(x-2)}$, use the cover-up method to find $A$ (numerator over $x+1$). Cover $(x+1)$ and plug in $x = -1$: $A = \\frac{-1+5}{-1-2}$. What is $A$ as a fraction (use - for negative)?',
        correctAnswer: '-4/3',
        acceptableAnswers: ['-4/3', '-1.33', '-1.333'],
        hints: ['$\\frac{-1+5}{-1-2} = \\frac{4}{-3}$.'],
        explanation: '$A = \\frac{4}{-3} = -\\frac{4}{3}$.'
      }
    },
    {
      id: 'pf1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

| Concept | Details |
|---------|---------|
| When to use | Proper rational function with factorable denominator |
| Distinct linear factors | One constant per factor: $\\frac{A}{x-a} + \\frac{B}{x-b}$ |
| Finding constants | Plug in roots (cover-up/Heaviside method) |
| Integration | Each $\\frac{A}{x-a}$ integrates to $A\\ln|x-a| + C$ |

> **Coming Up:** Part 2 handles **repeated linear factors** like $(x-a)^2$ or $(x-a)^3$.`
    }
  ]
};
