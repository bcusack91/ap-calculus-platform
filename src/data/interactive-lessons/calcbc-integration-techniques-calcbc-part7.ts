export const calcbcIntTechPart7Data = {
  topicSlug: 'integration-techniques-calcbc',
  sections: [
    {
      id: 'it7-intro',
      type: 'text' as const,
      content: `# Advanced Integration Techniques

**Part 7 of 7 \u2014 Comprehensive Review**

This review covers every technique from the unit. You should be able to identify the method and execute it for each problem.`
    },
    {
      id: 'it7-reference',
      type: 'text' as const,
      content: `### Complete Technique Reference

| Technique | When to Use | Key Formula |
|:---:|:---:|:---:|
| $u$-substitution | $\\int f(g(x))g'(x)\\,dx$ | $u = g(x)$ |
| IBP | Product of different types | $\\int u\\,dv = uv - \\int v\\,du$ |
| Partial fractions | $P(x)/Q(x)$, $\\deg P < \\deg Q$ | Decompose into simpler fractions |
| Trig integrals | $\\sin^m x \\cos^n x$ | Odd power peels off; even uses half-angle |
| Trig substitution | $\\sqrt{a^2 \\pm x^2}$, $\\sqrt{x^2-a^2}$ | Match to $\\sin$, $\\tan$, $\\sec$ |
| Complete square | Irreducible quadratic | $(x-h)^2 + k^2$ |
| Long division | $\\deg(\\text{num}) \\ge \\deg(\\text{den})$ | Divide first |

$$\\boxed{\\text{Simplify} \\to u\\text{-sub} \\to \\text{IBP} \\to \\text{Special techniques}}$$`
    },
    {
      id: 'it7-mc1',
      type: 'multiple-choice' as const,
      content: '**Final Problem Set**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{\\cos x}{\\sin^2 x + \\sin x}\\,dx =$',
            options: [
              '$\\ln\\left|\\frac{\\sin x}{\\sin x + 1}\\right| + C$',
              '$\\arctan(\\sin x) + C$',
              '$-\\frac{1}{\\sin x} + C$',
              '$\\ln|\\sin x| + C$'
            ],
            correctAnswer: 0,
            explanation: '$u = \\sin x$: $\\int \\frac{du}{u^2+u} = \\int \\frac{du}{u(u+1)}$. Partial fractions: $\\frac{1}{u} - \\frac{1}{u+1}$. Integrate: $\\ln|u| - \\ln|u+1| + C$.'
          },
          {
            question: '$\\int_0^{\\pi/4} \\sec^4 x\\,dx =$',
            options: [
              '$\\frac{4}{3}$',
              '$\\frac{\\pi}{4}$',
              '$2$',
              '$\\frac{2}{3}$'
            ],
            correctAnswer: 0,
            explanation: '$\\sec^4 x = \\sec^2 x(1+\\tan^2 x) = \\sec^2 x + \\sec^2 x \\tan^2 x$. Integrate: $[\\tan x + \\frac{\\tan^3 x}{3}]_0^{\\pi/4} = 1 + \\frac{1}{3} = \\frac{4}{3}$.'
          },
          {
            question: '$\\int \\frac{x+1}{x^2+1}\\,dx =$',
            options: [
              '$\\frac{1}{2}\\ln(x^2+1) + \\arctan x + C$',
              '$\\ln(x^2+1) + C$',
              '$\\arctan x + C$',
              '$\\frac{x+1}{2x} + C$'
            ],
            correctAnswer: 0,
            explanation: 'Split: $\\frac{x}{x^2+1} + \\frac{1}{x^2+1}$. First: $\\frac{1}{2}\\ln(x^2+1)$. Second: $\\arctan x$.'
          }
        ]
      }
    },
    {
      id: 'it7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final Classification**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{dx}{x^2 - 6x + 13}$: First step?',
            options: ['Complete the square: $(x-3)^2 + 4$', 'Factor: $(x-?)(x-?)$', 'Trig sub directly', '$u = x^2-6x+13$'],
            correctAnswers: ['Complete the square: $(x-3)^2 + 4$'],
            hints: ['$x^2 - 6x + 13 = (x^2-6x+9)+4 = (x-3)^2+4$.'],
            explanation: '$(x-3)^2+4$: $\\frac{1}{2}\\arctan\\frac{x-3}{2} + C$.'
          },
          {
            label: '$\\int x^2 \\sin x\\,dx$: Technique?',
            options: ['Tabular IBP (3 rows)', 'Single IBP', '$u = x^2$, $u$-sub', 'Trig identity'],
            correctAnswers: ['Tabular IBP (3 rows)'],
            hints: ['$x^2$ needs 2 derivatives to reach $0$. That\u2019s 3 rows in a tabular chart.'],
            explanation: 'Tabular: $x^2 \\to 2x \\to 2 \\to 0$ vs $\\sin x \\to -\\cos x \\to -\\sin x \\to \\cos x$. Result: $-x^2\\cos x + 2x\\sin x + 2\\cos x + C$.'
          },
          {
            label: '$\\int \\frac{x^4}{x^2+1}\\,dx$: First step?',
            options: ['Long division', 'Partial fractions', 'Trig sub', 'Direct integration'],
            correctAnswers: ['Long division'],
            hints: ['$\\deg(x^4) = 4 > \\deg(x^2+1) = 2$.'],
            explanation: '$\\frac{x^4}{x^2+1} = x^2 - 1 + \\frac{1}{x^2+1}$. Integrate: $\\frac{x^3}{3} - x + \\arctan x + C$.'
          }
        ]
      }
    },
    {
      id: 'it7-input',
      type: 'input-box' as const,
      content: '**Final Computation**',
      exercise: {
        question: 'Evaluate $\\int_0^1 \\frac{2x+1}{x^2+x+1}\\,dx$. Note that $2x+1$ is the derivative of $x^2+x$ (close to the denominator). The answer is $\\ln(a)$ for some integer $a$. What is $a$?',
        correctAnswer: '3',
        acceptableAnswers: ['3'],
        hints: ["$\\frac{d}{dx}(x^2+x+1) = 2x+1$. So this is $\\int \\frac{f'(x)}{f(x)}\\,dx$.", '$[\\ln(x^2+x+1)]_0^1 = \\ln(3) - \\ln(1) = \\ln 3$.'],
        explanation: 'Since $2x+1 = \\frac{d}{dx}(x^2+x+1)$: $\\int_0^1 \\frac{(x^2+x+1)\'}{x^2+x+1}\\,dx = [\\ln(x^2+x+1)]_0^1 = \\ln 3 - \\ln 1 = \\ln 3$. So $a = 3$.'
      }
    },
    {
      id: 'it7-summary',
      type: 'text' as const,
      content: `### Unit Summary \u2014 Integration Techniques

**AP Exam Checklist:**
- Can you execute $u$-substitution fluently?
- Can you apply IBP and the tabular method?
- Can you decompose rational functions via partial fractions?
- Do you know all three trig substitutions?
- Can you handle $\\sin^m x \\cos^n x$ integrals?
- Can you complete the square for $\\arctan$ / $\\arcsin$ forms?
- Can you identify the correct technique before computing?

> **Congratulations!** You\u2019ve mastered the advanced integration techniques tested on AP Calculus BC.`
    }
  ]
};
