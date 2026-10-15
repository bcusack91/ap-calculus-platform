export const calcbcPartialFracPart4Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf4-intro',
      type: 'text' as const,
      content: `# Partial Fraction Decomposition

**Part 4 of 7 \u2014 Integration with Partial Fractions**

Now let\u2019s put the decomposition and integration together in complete worked problems from start to finish.`
    },
    {
      id: 'pf4-workflow',
      type: 'text' as const,
      content: `### Complete Workflow

| Step | Action |
|------|--------|
| 1 | Check: is it proper? (deg numerator < deg denominator) |
| 2 | If improper, do long division first |
| 3 | Factor the denominator completely |
| 4 | Write the decomposition template |
| 5 | Find the constants ($A$, $B$, $C$, ...) |
| 6 | Integrate each term separately |

> **Key Fact:** With distinct linear factors, each piece $\\frac{A}{x-a}$ integrates to $A\\ln|x-a|$, so every answer is a sum of logarithms (plus any polynomial from long division).`
    },
    {
      id: 'pf4-example1',
      type: 'text' as const,
      content: `### Complete Example 1: $\\int \\frac{5x-3}{x^2-x-6}\\,dx$

**Step 1:** Factor: $x^2 - x - 6 = (x-3)(x+2)$

**Step 2:** Decompose: $\\frac{5x-3}{(x-3)(x+2)} = \\frac{A}{x-3} + \\frac{B}{x+2}$

**Step 3:** Find constants:
- Cover-up at $x = 3$: $A = \\frac{5(3)-3}{3+2} = \\frac{12}{5}$
- Cover-up at $x = -2$: $B = \\frac{5(-2)-3}{-2-3} = \\frac{-13}{-5} = \\frac{13}{5}$

**Step 4:** Integrate:

$$\\boxed{\\int \\frac{5x-3}{x^2-x-6}\\,dx = \\frac{12}{5}\\ln|x-3| + \\frac{13}{5}\\ln|x+2| + C}$$`
    },
    {
      id: 'pf4-example2',
      type: 'text' as const,
      content: `### Complete Example 2: $\\int \\frac{1}{x^2-4}\\,dx$

Factor: $x^2 - 4 = (x-2)(x+2)$

Decompose: $\\frac{1}{(x-2)(x+2)} = \\frac{A}{x-2} + \\frac{B}{x+2}$

- $A = \\frac{1}{2-(-2)} = \\frac{1}{4}$
- $B = \\frac{1}{-2-2} = -\\frac{1}{4}$

$$\\boxed{\\int \\frac{1}{x^2-4}\\,dx = \\frac{1}{4}\\ln\\left|\\frac{x-2}{x+2}\\right| + C}$$

> **AP Tip:** This result can also be written as $\\frac{1}{4}\\ln|x-2| - \\frac{1}{4}\\ln|x+2| + C$. Both forms are accepted on the exam.`
    },
    {
      id: 'pf4-mc1',
      type: 'multiple-choice' as const,
      content: '**Integration Practice**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{1}{x^2+x-2}\\,dx = $',
            options: [
              '$\\frac{1}{3}\\ln\\left|\\frac{x-1}{x+2}\\right| + C$',
              '$\\frac{1}{2}\\ln|x^2+x-2| + C$',
              '$\\frac{1}{3}\\ln|(x-1)(x+2)| + C$',
              '$\\ln\\left|\\frac{x-1}{x+2}\\right| + C$'
            ],
            correctAnswer: 0,
            explanation: 'Factor: $(x-1)(x+2)$. $A = \\frac{1}{1+2} = \\frac{1}{3}$, $B = \\frac{1}{-2-1} = -\\frac{1}{3}$. Result: $\\frac{1}{3}\\ln|x-1| - \\frac{1}{3}\\ln|x+2| + C = \\frac{1}{3}\\ln\\left|\\frac{x-1}{x+2}\\right| + C$. Dropping the $\\frac{1}{3}$, using $+\\frac{1}{3}$ for $B$ (which gives the log of the product), or treating the integrand as $\\frac{u\'}{u}$ gives the other answers.'
          },
          {
            question: '$\\int_2^4 \\frac{1}{x^2-1}\\,dx$ in terms of $\\ln$:',
            options: [
              '$\\frac{1}{2}\\ln\\frac{9}{5}$',
              '$\\ln\\frac{9}{5}$',
              '$\\frac{1}{2}\\ln\\frac{3}{5}$',
              '$\\frac{1}{2}\\ln\\frac{5}{9}$'
            ],
            correctAnswer: 0,
            explanation: '$\\frac{1}{x^2-1} = \\frac{1/2}{x-1} - \\frac{1/2}{x+1}$, so the antiderivative is $\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right|$. Then $\\frac{1}{2}\\left[\\ln\\frac{3}{5} - \\ln\\frac{1}{3}\\right] = \\frac{1}{2}\\ln\\frac{9}{5}$. Forgetting the $\\frac{1}{2}$ gives $\\ln\\frac{9}{5}$, evaluating only the upper limit gives $\\frac{1}{2}\\ln\\frac{3}{5}$, and swapping the signs of $A$ and $B$ gives $\\frac{1}{2}\\ln\\frac{5}{9}$.'
          }
        ]
      }
    },
    {
      id: 'pf4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Strategy Selection**',
      exercise: {
        dropdowns: [
          {
            label: 'To integrate $\\frac{2x+3}{x^2+3x+2}$, the first step is:',
            options: ['Factor the denominator', 'Complete the square', 'Use long division', 'IBP with $u = 2x+3$'],
            correctAnswers: ['Factor the denominator'],
            hints: ['$x^2 + 3x + 2 = (x+1)(x+2)$. Distinct linear factors!'],
            explanation: 'Factor first: $(x+1)(x+2)$. Then decompose: $\\frac{A}{x+1} + \\frac{B}{x+2}$. Long division is not needed because the numerator has lower degree than the denominator.'
          },
          {
            label: 'For the same integral, notice that $2x + 3 = \\frac{d}{dx}(x^2+3x+2)$. An alternative approach is:',
            options: ['u-substitution directly', 'Partial fractions only', 'Complete the square', 'IBP with $u = 2x+3$'],
            correctAnswers: ['u-substitution directly'],
            hints: ['If the numerator is the derivative of the denominator, $\\int \\frac{f\'(x)}{f(x)}\\,dx = \\ln|f(x)| + C$.'],
            explanation: 'Since $2x+3$ is exactly the derivative of $x^2+3x+2$, the integral is simply $\\ln|x^2+3x+2| + C$. Partial fractions is unnecessary here! Completing the square does not lead to an arctan form, because $x^2+3x+2$ has real roots.'
          }
        ]
      }
    },
    {
      id: 'pf4-input',
      type: 'input-box' as const,
      content: '**Definite Integral Computation**',
      exercise: {
        question: 'Evaluate $\\int_3^5 \\frac{1}{x^2-4}\\,dx$. The antiderivative is $\\frac{1}{4}\\ln|x-2| - \\frac{1}{4}\\ln|x+2|$. Compute: $\\frac{1}{4}[\\ln\\frac{3}{7} - \\ln\\frac{1}{5}]$. This simplifies to $\\frac{1}{4}\\ln\\frac{a}{b}$. What is $a + b$ (where $\\frac{a}{b}$ is fully reduced)?',
        correctAnswer: '22',
        acceptableAnswers: ['22'],
        hints: ['$\\frac{1}{4}[\\ln\\frac{3}{7} - \\ln\\frac{1}{5}] = \\frac{1}{4}\\ln\\frac{3/7}{1/5} = \\frac{1}{4}\\ln\\frac{15}{7}$.', '$a = 15$, $b = 7$, $a + b = 22$.'],
        explanation: '$\\frac{1}{4}\\ln\\frac{15}{7}$. So $a = 15$, $b = 7$, $a + b = 22$.'
      }
    },
    {
      id: 'pf4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

| Integration Result | From |
|-------------------|------|
| $A\\ln\\lvert x-a\\rvert$ | $\\frac{A}{x-a}$ |
| $A\\ln\\lvert x-a\\rvert + B\\ln\\lvert x-b\\rvert$ | $\\frac{A}{x-a} + \\frac{B}{x-b}$ |
| $\\ln\\left\\lvert\\frac{x-a}{x-b}\\right\\rvert$ | $\\frac{1}{x-a} - \\frac{1}{x-b}$ (combined) |
| Quotient $+$ logs | Improper fraction after long division |

> **Coming Up:** Part 5 covers what to do when the fraction is **improper** \u2014 long division before decomposition.`
    }
  ]
};
