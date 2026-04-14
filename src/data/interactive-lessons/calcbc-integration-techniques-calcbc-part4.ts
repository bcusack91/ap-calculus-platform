export const calcbcIntTechPart4Data = {
  topicSlug: 'integration-techniques-calcbc',
  sections: [
    {
      id: 'it4-intro',
      type: 'text' as const,
      content: `# Advanced Integration Techniques

**Part 4 of 7 \u2014 Completing the Square for Integration**

Many integrals involving quadratics in the denominator can be solved by completing the square, then applying $\\arctan$ or trig substitution.`
    },
    {
      id: 'it4-method',
      type: 'text' as const,
      content: `### The Method

For $ax^2 + bx + c$, complete the square:
$$ax^2 + bx + c = a\\left(x + \\frac{b}{2a}\\right)^2 + \\left(c - \\frac{b^2}{4a}\\right)$$

This converts the quadratic into one of the standard forms.

### Key Formula:
$$\\boxed{\\int \\frac{dx}{(x-h)^2 + k^2} = \\frac{1}{k}\\arctan\\frac{x-h}{k} + C}$$

### Example: $\\int \\frac{dx}{x^2 + 6x + 13}$

Complete the square: $x^2 + 6x + 13 = (x+3)^2 + 4$

$$\\int \\frac{dx}{(x+3)^2 + 4} = \\frac{1}{2}\\arctan\\frac{x+3}{2} + C$$

> **AP Tip:** Most AP exam problems involve denominators like $x^2 + bx + c$ where (after completing the square) you get the $\\arctan$ form directly.`
    },
    {
      id: 'it4-example2',
      type: 'text' as const,
      content: `### Example with Numerator: $\\int \\frac{2x + 3}{x^2 + 4x + 8}\\,dx$

**Step 1:** Complete the square: $x^2 + 4x + 8 = (x+2)^2 + 4$

**Step 2:** Split the numerator to match the derivative of the denominator:
$$2x + 3 = 2(x + 2) - 1$$

**Step 3:** Split the integral:
$$\\int \\frac{2(x+2)}{(x+2)^2 + 4}\\,dx - \\int \\frac{1}{(x+2)^2 + 4}\\,dx$$

**First integral:** Let $u = (x+2)^2 + 4$: $= \\ln|(x+2)^2 + 4|$

**Second integral:** $\\arctan$ form: $= \\frac{1}{2}\\arctan\\frac{x+2}{2}$

$$\\boxed{\\int \\frac{2x+3}{x^2+4x+8}\\,dx = \\ln(x^2+4x+8) - \\frac{1}{2}\\arctan\\frac{x+2}{2} + C}$$`
    },
    {
      id: 'it4-mc1',
      type: 'multiple-choice' as const,
      content: '**Complete the Square**',
      exercise: {
        questions: [
          {
            question: '$x^2 - 2x + 5$ in completed-square form is:',
            options: ['$(x-1)^2 + 4$', '$(x-1)^2 + 5$', '$(x-2)^2 + 1$', '$(x+1)^2 + 4$'],
            correctAnswer: 0,
            explanation: '$x^2 - 2x + 5 = (x^2 - 2x + 1) + 4 = (x-1)^2 + 4$.'
          },
          {
            question: '$\\int \\frac{dx}{x^2 - 2x + 5} =$',
            options: [
              '$\\frac{1}{2}\\arctan\\frac{x-1}{2} + C$',
              '$\\arctan(x-1) + C$',
              '$\\frac{1}{4}\\arctan\\frac{x-1}{4} + C$',
              '$\\ln|x^2 - 2x + 5| + C$'
            ],
            correctAnswer: 0,
            explanation: 'Denominator $= (x-1)^2 + 4 = (x-1)^2 + 2^2$. Formula: $\\frac{1}{2}\\arctan\\frac{x-1}{2} + C$.'
          }
        ]
      }
    },
    {
      id: 'it4-sqrt',
      type: 'text' as const,
      content: `### With Square Roots

Completing the square also helps with $\\sqrt{\\text{quadratic}}$:

$$\\int \\frac{dx}{\\sqrt{3-2x-x^2}}$$

Complete: $3 - 2x - x^2 = -(x^2 + 2x - 3) = -((x+1)^2 - 4) = 4 - (x+1)^2$

$$\\int \\frac{dx}{\\sqrt{4-(x+1)^2}} = \\arcsin\\frac{x+1}{2} + C$$

This is $\\sqrt{a^2 - u^2}$ form with $a = 2$, $u = x + 1$.

$$\\boxed{\\int \\frac{dx}{\\sqrt{a^2 - (x-h)^2}} = \\arcsin\\frac{x-h}{a} + C}$$`
    },
    {
      id: 'it4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the Method**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{dx}{x^2 + 4x + 5}$: After completing the square?',
            options: ['$(x+2)^2 + 1$, use $\\arctan$', '$(x+2)^2 + 5$, use $\\arctan$', '$(x+4)^2 + 1$, use $\\arctan$', 'Cannot complete the square'],
            correctAnswers: ['$(x+2)^2 + 1$, use $\\arctan$'],
            hints: ['$x^2 + 4x + 5 = (x^2 + 4x + 4) + 1 = (x+2)^2 + 1$.'],
            explanation: '$(x+2)^2 + 1^2$. Result: $\\arctan(x+2) + C$.'
          },
          {
            label: '$\\int \\frac{dx}{\\sqrt{5 + 4x - x^2}}$: After completing the square?',
            options: ['$\\sqrt{9 - (x-2)^2}$, use $\\arcsin$', '$\\sqrt{5 - (x-2)^2}$, use $\\arcsin$', '$\\sqrt{(x-2)^2 + 5}$, use $\\arctan$', 'Cannot be simplified'],
            correctAnswers: ['$\\sqrt{9 - (x-2)^2}$, use $\\arcsin$'],
            hints: ['$5 + 4x - x^2 = -(x^2 - 4x) + 5 = -(x^2 - 4x + 4) + 9 = 9-(x-2)^2$.'],
            explanation: '$\\arcsin\\frac{x-2}{3} + C$.'
          }
        ]
      }
    },
    {
      id: 'it4-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Evaluate $\\int \\frac{dx}{x^2 + 2x + 10}$. Complete the square to get $(x+1)^2 + 9$. The answer has the form $\\frac{1}{a}\\arctan\\frac{x+1}{a} + C$. What is $a$?',
        correctAnswer: '3',
        acceptableAnswers: ['3', '3.0'],
        hints: ['$(x+1)^2 + 9 = (x+1)^2 + 3^2$.', 'Formula: $\\frac{1}{k}\\arctan\\frac{x-h}{k}$ where $k = 3$.'],
        explanation: '$(x+1)^2 + 3^2$. By the formula, $a = k = 3$.'
      }
    },
    {
      id: 'it4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

| Completed Form | Integral Type |
|:---:|:---:|
| $(x-h)^2 + k^2$ | $\\frac{1}{k}\\arctan\\frac{x-h}{k}$ |
| $k^2 - (x-h)^2$ under $\\sqrt{}$ | $\\arcsin\\frac{x-h}{k}$ |
| Linear over quadratic | Split: $\\ln$ part + $\\arctan$ part |

> **Coming Up:** Part 5 covers **strategy selection** \u2014 how to quickly choose the right technique for any integral.`
    }
  ]
};
