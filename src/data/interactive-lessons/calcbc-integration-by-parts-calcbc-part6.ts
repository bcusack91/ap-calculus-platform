export const calcbcIntByPartsPart6Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp6-intro',
      type: 'text' as const,
      content: `# \u222B Integration by Parts

**Part 6 of 7 \u2014 Problem-Solving Workshop**

This part is a mixed-practice workshop. Every problem requires identifying the correct IBP approach, then executing it. Think before you compute!

### Decision Flowchart

| Integrand Type | Method |
|---------------|--------|
| Polynomial \u00d7 $e^{ax}$ or trig | Tabular method |
| $e^{ax}$ \u00d7 trig | Cycling (boomerang) |
| $\\ln x$, $\\arctan x$, $\\arcsin x$ alone | $dv = dx$ strategy |
| Polynomial \u00d7 $\\ln x$ | Standard IBP ($u = \\ln x$) |
| Anything else with a product | Standard IBP with LIATE |`
    },
    {
      id: 'ibp6-mc1',
      type: 'multiple-choice' as const,
      content: '**Mixed IBP Practice \u2014 Round 1**',
      exercise: {
        questions: [
          {
            question: '$\\int x^2 \\sin x\\,dx = $',
            options: [
              '$-x^2\\cos x + 2x\\sin x + 2\\cos x + C$',
              '$x^2\\cos x + 2x\\sin x + C$',
              '$-x^2\\cos x + 2\\sin x + C$',
              '$x^2\\sin x - 2x\\cos x + C$'
            ],
            correctAnswer: 0,
            explanation: 'Tabular: $+x^2(-\\cos x) - 2x(-\\sin x) + 2(\\cos x) = -x^2\\cos x + 2x\\sin x + 2\\cos x + C$.'
          },
          {
            question: '$\\int x^2\\ln x\\,dx = $',
            options: [
              '$\\frac{x^3}{3}\\ln x - \\frac{x^3}{9} + C$',
              '$\\frac{x^3}{3}\\ln x + C$',
              '$x^2\\ln x - 2x + C$',
              '$\\frac{x^3}{3}\\ln x - \\frac{x^2}{4} + C$'
            ],
            correctAnswer: 0,
            explanation: '$u = \\ln x$ (L), $dv = x^2\\,dx$, $v = \\frac{x^3}{3}$. Result: $\\frac{x^3}{3}\\ln x - \\int \\frac{x^3}{3} \\cdot \\frac{1}{x}\\,dx = \\frac{x^3}{3}\\ln x - \\frac{x^3}{9} + C$.'
          },
          {
            question: '$\\int e^{-x}\\cos(2x)\\,dx = $',
            options: [
              '$\\frac{e^{-x}(-\\cos 2x + 2\\sin 2x)}{5} + C$',
              '$\\frac{e^{-x}(\\cos 2x + 2\\sin 2x)}{5} + C$',
              '$\\frac{e^{-x}\\cos 2x}{3} + C$',
              '$-e^{-x}\\sin 2x + C$'
            ],
            correctAnswer: 0,
            explanation: 'Cycling with $a = -1$, $b = 2$: $\\frac{e^{-x}((-1)\\cos 2x + 2\\sin 2x)}{1 + 4} = \\frac{e^{-x}(-\\cos 2x + 2\\sin 2x)}{5} + C$.'
          }
        ]
      }
    },
    {
      id: 'ibp6-mc2',
      type: 'multiple-choice' as const,
      content: '**Mixed IBP Practice \u2014 Round 2**',
      exercise: {
        questions: [
          {
            question: '$\\int_0^1 x^3 e^x\\,dx = $',
            options: [
              '$6 - 2e$',
              '$e - 2$',
              '$3e - 6$',
              '$6e - 16$'
            ],
            correctAnswer: 0,
            explanation: 'Tabular gives antiderivative $e^x(x^3 - 3x^2 + 6x - 6)$. At $x=1$: $e(1-3+6-6) = -2e$. At $x=0$: $1(0-0+0-6) = -6$. Result: $-2e - (-6) = 6 - 2e$.'
          },
          {
            question: 'Which integral requires the cycling/boomerang method?',
            options: [
              '$\\int e^{3x}\\sin(4x)\\,dx$',
              '$\\int x^3 e^{3x}\\,dx$',
              '$\\int x\\arctan x\\,dx$',
              '$\\int (\\ln x)^3\\,dx$'
            ],
            correctAnswer: 0,
            explanation: '$e^{3x}\\sin(4x)$ has two regenerating factors (neither goes to 0). The others use tabular, standard IBP, or the $dv=dx$ trick.'
          }
        ]
      }
    },
    {
      id: 'ibp6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Method Identification**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int x^4 e^{-2x}\\,dx$ is best solved by:',
            options: ['Tabular method', 'Cycling IBP', 'u-substitution', '$dv = dx$ strategy'],
            correctAnswers: ['Tabular method'],
            hints: ['$x^4$ is a polynomial that differentiates to 0 after 4 steps.'],
            explanation: 'Polynomial \u00d7 exponential = tabular. You\u2019ll need 5 rows.'
          },
          {
            label: '$\\int \\arctan(\\sqrt{x})\\,dx$ starts with:',
            options: ['$u = \\arctan(\\sqrt{x})$, $dv = dx$', '$u = \\sqrt{x}$, $dv = \\arctan\\,dx$', 'u-substitution first, then IBP'],
            correctAnswers: ['u-substitution first, then IBP'],
            hints: ['The $\\sqrt{x}$ inside $\\arctan$ suggests substituting $t = \\sqrt{x}$ first.'],
            explanation: 'Let $t = \\sqrt{x}$, $x = t^2$, $dx = 2t\\,dt$. Then $\\int 2t\\arctan t\\,dt$, which is standard IBP.'
          },
          {
            label: '$\\int x\\arcsin x\\,dx$ uses $u = $',
            options: ['$\\arcsin x$', '$x$', '$x\\arcsin x$'],
            correctAnswers: ['$\\arcsin x$'],
            hints: ['LIATE: Inverse trig (I) beats Algebraic (A).'],
            explanation: '$u = \\arcsin x$ (I), $dv = x\\,dx$, $v = \\frac{x^2}{2}$.'
          }
        ]
      }
    },
    {
      id: 'ibp6-input',
      type: 'input-box' as const,
      content: '**Definite Integral Challenge**',
      exercise: {
        question: 'Evaluate $\\int_0^1 x^3 e^x\\,dx$. Using the tabular antiderivative $e^x(x^3 - 3x^2 + 6x - 6)$, compute $[\\text{antiderivative}]_0^1$. Express as $ae + b$. What is $a + b$?',
        correctAnswer: '4',
        acceptableAnswers: ['4'],
        hints: ['At $x=1$: $e(1-3+6-6) = -2e$.', 'At $x=0$: $1(0-0+0-6) = -6$.', 'Result: $-2e-(-6) = 6 - 2e = -2e + 6$. So $a = -2$, $b = 6$.'],
        explanation: '$6 - 2e$. Here $a = -2$ and $b = 6$, so $a + b = -2 + 6 = 4$.'
      }
    },
    {
      id: 'ibp6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

| Problem Type | Method | Time on AP Exam |
|-------------|--------|-----------------|
| Poly \u00d7 exp/trig | Tabular | ~2 min |
| $e^{ax}$ \u00d7 trig | Cycling | ~3 min |
| Inverse trig or log alone | $dv = dx$ | ~2 min |
| Mixed product | LIATE + standard | ~3 min |

> **AP Tip:** If you get stuck, try a different $u$/$dv$ split. There\u2019s often more than one path to the answer.

> **Coming Up:** Part 7 is the **comprehensive review and assessment** covering all IBP techniques.`
    }
  ]
};
