export const calcbcAdvIntegrationPart1Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'ai1-intro',
      type: 'text' as const,
      content: `# Advanced Integration Techniques — BC Level

**Part 1 of 7 — Choosing the Right Method**

### Integration Strategy Flowchart

When facing an integral on the BC exam, use this decision process:

| What you see | Method to use |
|-------------|---------------|
| $\\int f(g(x))\\,g'(x)\\,dx$ | **$u$-substitution** |
| Product of unlike functions | **Integration by parts** |
| $\\frac{P(x)}{Q(x)}$ with $\\deg P \\ge \\deg Q$ | **Long division first** |
| $\\frac{P(x)}{Q(x)}$ with factorable $Q$ | **Partial fractions** |
| $\\frac{1}{a^2 + u^2}$ or $\\frac{1}{\\sqrt{a^2 - u^2}}$ (complete the square if needed) | **Inverse trig form** |
| $\\sin^2 x$ or $\\cos^2 x$ alone | **One identity**: $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$, $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$ |
| Infinite limits or discontinuities | **Improper integral** |

$$\\boxed{\\text{Step 1: Simplify} \\to \\text{Step 2: Identify pattern} \\to \\text{Step 3: Apply method}}$$`
    },
    {
      id: 'ai1-usub',
      type: 'text' as const,
      content: `### Advanced $u$-Substitution

Beyond basic substitution, BC-level problems may require:

**Completing the square first:**
$$\\int \\frac{dx}{x^2 + 4x + 8} = \\int \\frac{dx}{(x+2)^2 + 4}$$

Let $u = x + 2$: $\\int \\frac{du}{u^2 + 4} = \\frac{1}{2}\\arctan\\frac{u}{2} + C = \\frac{1}{2}\\arctan\\frac{x+2}{2} + C$

**Back-substitution in definite integrals:**
$$\\int_0^1 x\\sqrt{1-x^2}\\,dx \\xrightarrow{u=1-x^2} \\int_1^0 \\sqrt{u}\\cdot\\frac{-du}{2} = \\frac{1}{2}\\int_0^1 u^{1/2}\\,du = \\frac{1}{3}$$

> **AP Tip:** When using $u$-sub in a definite integral, you can either change the limits OR back-substitute. Changing limits is usually faster.`
    },
    {
      id: 'ai1-inverse',
      type: 'text' as const,
      content: `### Integrals Producing Inverse Trig Functions

$$\\boxed{\\int \\frac{du}{\\sqrt{a^2 - u^2}} = \\arcsin\\frac{u}{a} + C}$$

$$\\boxed{\\int \\frac{du}{a^2 + u^2} = \\frac{1}{a}\\arctan\\frac{u}{a} + C}$$

| Integral | Result |
|----------|--------|
| $\\int \\frac{dx}{\\sqrt{9 - x^2}}$ | $\\arcsin(x/3) + C$ |
| $\\int \\frac{dx}{4 + x^2}$ | $\\frac{1}{2}\\arctan(x/2) + C$ |
| $\\int \\frac{dx}{\\sqrt{1 - 4x^2}}$ | $\\frac{1}{2}\\arcsin(2x) + C$ |

> **Key Fact:** Recognize the pattern: denominator has $a^2 \\pm u^2$ (with or without square root). This is a high-frequency BC topic.`
    },
    {
      id: 'ai1-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{dx}{1 + 9x^2}$ equals:',
            options: ['$\\frac{1}{3}\\arctan(3x) + C$', '$\\arctan(9x) + C$', '$\\frac{1}{9}\\arctan(3x) + C$', '$3\\arctan(3x) + C$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{1 + (3x)^2}$. With $u = 3x$, $du = 3\\,dx$: $\\frac{1}{3}\\int \\frac{du}{1+u^2} = \\frac{1}{3}\\arctan u + C$.'
          },
          {
            question: 'Which method is BEST for $\\int x^2 e^x\\,dx$?',
            options: ['Integration by parts, twice', '$u$-substitution with $u = x^2$', 'Trig substitution with $x = \\tan\\theta$', '$u$-substitution with $u = e^x$'],
            correctAnswer: 0,
            explanation: 'Product of polynomial and exponential → integration by parts. You need two applications (or the tabular method). Neither $u = x^2$ nor $u = e^x$ leaves a matching $du$ factor.'
          },
          {
            question: '$\\int \\frac{5x + 3}{x^2 + 3x + 2}\\,dx$. The first step is:',
            options: ['Factor, then use partial fractions', 'Complete the square and use an arctan formula', '$u$-substitution with $u = x^2 + 3x + 2$', 'Integration by parts with $u = 5x + 3$'],
            correctAnswer: 0,
            explanation: 'The denominator factors as $(x+1)(x+2)$, so the rational function goes to partial fractions. The numerator $5x+3$ is not a multiple of the denominator\'s derivative $2x+3$, so a direct $u$-substitution fails, and completing the square is only needed for an irreducible quadratic.'
          }
        ]
      }
    },
    {
      id: 'ai1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Method Selection**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{dx}{\\sqrt{16 - x^2}}$ is an inverse trig integral with $a =$',
            options: ['$4$', '$16$', '$8$', '$\\frac{1}{4}$'],
            correctAnswers: ['$4$'],
            hints: ['$\\sqrt{a^2 - x^2}$ with $a^2 = 16$.'],
            explanation: '$a^2 = 16$, so $a = 4$ (not $16$, and not $16/2$). $\\int du/\\sqrt{16-u^2} = \\arcsin(u/4) + C$; the $\\frac{1}{4}$ appears inside the arcsine, but $a$ itself is $4$.'
          },
          {
            label: 'For $\\int \\frac{x^3}{x-1}\\,dx$, since $\\deg(\\text{num}) > \\deg(\\text{den})$, you should first:',
            options: ['Perform polynomial long division', 'Use partial fractions directly', 'Integrate each factor alone', 'Use integration by parts'],
            correctAnswers: ['Perform polynomial long division'],
            hints: ['When the degree of the numerator ≥ degree of denominator, divide first.'],
            explanation: '$x^3/(x-1) = x^2 + x + 1 + 1/(x-1)$. Then integrate term by term. The integral of a product is not the product of integrals, so $x^3$ and $\\frac{1}{x-1}$ cannot be integrated separately.'
          }
        ]
      }
    },
    {
      id: 'ai1-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: '$\\int_0^2 \\frac{dx}{4 + x^2}$. Evaluate and give the exact answer. (Use pi for $\\pi$.)',
        correctAnswer: 'pi/8',
        acceptableAnswers: ['pi/8', 'π/8', '0.393', '0.3927'],
        hints: ['$\\frac{1}{2}\\arctan(x/2)\\Big|_0^2 = \\frac{1}{2}\\arctan(1) - 0 = \\frac{1}{2} \\cdot \\frac{\\pi}{4}$.'],
        explanation: '$\\frac{1}{2}\\arctan(x/2)\\Big|_0^2 = \\frac{1}{2} \\cdot \\frac{\\pi}{4} = \\frac{\\pi}{8}$.'
      }
    },
    {
      id: 'ai1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

$$\\boxed{\\text{Recognize the form} \\to \\text{Choose the method} \\to \\text{Execute carefully}}$$

| Pattern | Method |
|---------|--------|
| $1/(a^2 + u^2)$ | $\\frac{1}{a}\\arctan(u/a)$ |
| $1/\\sqrt{a^2 - u^2}$ | $\\arcsin(u/a)$ |
| Degree top ≥ bottom | Long division first |
| Factorable denominator | Partial fractions |

**Next: Part 2 — Integration by Parts in Depth**`
    }
  ]
};

