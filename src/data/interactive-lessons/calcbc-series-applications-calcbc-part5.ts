export const calcbcSeriesAppsPart5Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sa5-intro',
      type: 'text' as const,
      content: `# AP Exam Strategies — Series Applications

**Part 5 of 7 — How Series Questions Appear on the BC Exam**

### Series FRQ Structure

The AP BC exam typically has one full FRQ dedicated to Taylor/Maclaurin series. Common parts:

| Part | Typical question |
|------|-----------------|
| (a) | Write the first 4 nonzero terms and general term |
| (b) | Find the interval of convergence |
| (c) | Use the series to approximate an integral |
| (d) | Bound the error of the approximation |

> **AP Tip:** This FRQ is one of the most predictable on the BC exam. Practice the pattern and you can earn nearly full credit.`
    },
    {
      id: 'sa5-template',
      type: 'text' as const,
      content: `### FRQ Answer Templates

**"Write the first four nonzero terms of the Taylor series for $f$ about $x = 0$."**

> $f(0) = \\ldots$, $f'(0) = \\ldots$, $f''(0) = \\ldots$, $f'''(0) = \\ldots$
>
> $P_3(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3$

OR (if built from known series):

> Since $\\sin x = x - x^3/6 + x^5/120 - \\cdots$,
> $x\\sin(x^2) = x^3 - x^7/6 + x^{11}/120 - \\cdots$

**"Use the series to approximate $\\int_0^{1/2} f(x)\\,dx$."**

> $\\int_0^{1/2} (\\text{first few terms})\\,dx = [\\text{antiderivatives}]_0^{1/2} = \\text{value}$

**"Show the error is less than $1/100$."**

> By the Alternating Series Estimation Theorem,
> the error is less than the absolute value of the first omitted term:
> $|a_{n+1}| = \\ldots < 1/100$. ✓`
    },
    {
      id: 'sa5-mc',
      type: 'multiple-choice' as const,
      content: '**AP-Style Questions**',
      exercise: {
        questions: [
          {
            question: 'The third-degree Taylor polynomial for $f(x) = \\sqrt{x}$ about $x = 4$ requires:',
            options: ['$f(4)$, $f\'(4)$, $f\'\'(4)$, $f\'\'\'(4)$', '$f(0)$, $f\'(0)$, $f\'\'(0)$, $f\'\'\'(0)$', 'Only the Maclaurin series', 'The general term formula'],
            correctAnswer: 0,
            explanation: 'Taylor series about $x = a$ uses derivatives evaluated at $x = a$.'
          },
          {
            question: 'When using the alternating series error bound on an integral, you bound:',
            options: ['The first omitted term of the INTEGRATED series evaluated at the endpoints', 'The first omitted term of the original series', 'The $(n+1)$th derivative of $f$', 'The Lagrange error bound'],
            correctAnswer: 0,
            explanation: 'After integrating term by term and evaluating, the error is bounded by the first omitted term of the resulting alternating sum.'
          },
          {
            question: 'On the AP FRQ, writing "by the AST error bound" instead of showing the computation:',
            options: ['Is acceptable — cite the theorem and state the bound', 'Loses points — you must prove the theorem', 'Is never accepted', 'Only works on MC'],
            correctAnswer: 0,
            explanation: 'AP readers accept citing the Alternating Series Estimation Theorem. State the bound value and verify it\'s less than the required tolerance.'
          }
        ]
      }
    },
    {
      id: 'sa5-dropdown',
      type: 'dropdown-select' as const,
      content: '**FRQ Practice**\n\nLet $f(x) = e^{-x}$.',
      exercise: {
        dropdowns: [
          {
            label: 'The first three nonzero terms of the Maclaurin series for $f(x) = e^{-x}$:',
            options: ['$1 - x + x^2/2$', '$1 + x + x^2/2$', '$-1 + x - x^2/2$', '$1 - x + x^2$'],
            correctAnswers: ['$1 - x + x^2/2$'],
            hints: ['Substitute $-x$ into $e^x = 1 + x + x^2/2 + \\cdots$.'],
            explanation: '$e^{-x} = 1 + (-x) + (-x)^2/2 + \\cdots = 1 - x + x^2/2 - \\cdots$.'
          },
          {
            label: '$\\int_0^1 e^{-x}\\,dx$ approximated by the first three terms: $\\int_0^1 (1-x+x^2/2)\\,dx =$',
            options: ['$1 - 1/2 + 1/6 = 2/3$', '$1 - 1 + 1/2 = 1/2$', '$1 + 1/2 + 1/6 = 5/3$', '$0$'],
            correctAnswers: ['$1 - 1/2 + 1/6 = 2/3$'],
            hints: ['$[x - x^2/2 + x^3/6]_0^1$.'],
            explanation: '$1 - 1/2 + 1/6 = 6/6 - 3/6 + 1/6 = 4/6 = 2/3$. (Exact: $1 - 1/e \\approx 0.632$.)'
          }
        ]
      }
    },
    {
      id: 'sa5-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'The Maclaurin polynomial $P_2(x) = 1 + x + x^2/2$ approximates $e^x$. What is $P_2(0.1)$?',
        correctAnswer: '1.105',
        acceptableAnswers: ['1.105', '1.1050'],
        hints: ['$1 + 0.1 + 0.01/2 = 1 + 0.1 + 0.005$.'],
        explanation: '$1 + 0.1 + 0.005 = 1.105$. (Actual: $e^{0.1} \\approx 1.10517$.)'
      }
    },
    {
      id: 'sa5-summary',
      type: 'text' as const,
      content: `### AP Series Checklist

1. ✓ Know the six standard Maclaurin series
2. ✓ Build new series via substitution, differentiation, integration
3. ✓ Write correct general term with proper index
4. ✓ Determine radius/interval of convergence
5. ✓ Integrate series to approximate definite integrals
6. ✓ Use AST error bound for alternating series
7. ✓ Use Lagrange error bound for non-alternating series

**Next: Part 6 — Problem-Solving Workshop**`
    }
  ]
};
