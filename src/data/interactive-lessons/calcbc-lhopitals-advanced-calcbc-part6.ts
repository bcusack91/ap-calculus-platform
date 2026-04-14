export const calcbcLHopPart6Data = {
  topicSlug: 'lhopitals-advanced-calcbc',
  sections: [
    {
      id: 'lh6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop

**Part 6 of 7 — Mixed L'Hôpital Practice**

Work through these limits choosing the best approach for each.`
    },
    {
      id: 'lh6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Set A — Evaluate**',
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 0} \\frac{x - \\arctan x}{x^3}$',
            options: ['$1/3$ (Taylor: $\\arctan x = x - x^3/3 + \\cdots$, so numerator $= x^3/3$)', '$0$', '$1$', '$1/6$'],
            correctAnswer: 0,
            explanation: '$\\arctan x = x - x^3/3 + x^5/5 - \\cdots$. Numerator $= x^3/3 + \\cdots$. Limit $= 1/3$.'
          },
          {
            question: '$\\lim_{x \\to \\infty} x \\sin(1/x)$',
            options: ['$1$ (let $u = 1/x$: $\\lim_{u \\to 0} \\sin u / u = 1$)', '$0$', '$\\infty$', 'DNE'],
            correctAnswer: 0,
            explanation: '$x\\sin(1/x) = \\frac{\\sin(1/x)}{1/x}$. Let $u = 1/x \\to 0$: $\\sin u/u \\to 1$.'
          },
          {
            question: '$\\lim_{x \\to 0^+} (1/x)^{\\sin x}$',
            options: ['$1$ ($\\ln y = \\sin x \\cdot \\ln(1/x) = -\\sin x \\cdot \\ln x \\to 0$)', '$\\infty$', '$0$', 'DNE'],
            correctAnswer: 0,
            explanation: '$\\ln y = \\sin x \\cdot (-\\ln x)$. As $x \\to 0^+$: $\\sin x \\to 0$, $-\\ln x \\to \\infty$. $0 \\cdot \\infty$: rewrite $\\frac{-\\ln x}{\\csc x}$. L\'H gives 0. So $y \\to e^0 = 1$.'
          }
        ]
      }
    },
    {
      id: 'lh6-mc2',
      type: 'multiple-choice' as const,
      content: '**Workshop Set B — Identify & Solve**',
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^x$',
            options: ['$e^3$ ($1^\\infty$ form; $\\ln y = x \\ln(1+3/x) \\to 3$)', '$1$', '$\\infty$', '$3$'],
            correctAnswer: 0,
            explanation: '$1^\\infty$ form. $\\ln y = x\\ln(1+3/x)$. Let $u = 3/x$: $\\frac{\\ln(1+u)}{u/3} \\to 3$. So $y \\to e^3$.'
          },
          {
            question: '$\\lim_{x \\to 0} \\frac{\\ln(1+x) - x}{x^2}$',
            options: ['$-1/2$', '$0$', '$1/2$', '$-1$'],
            correctAnswer: 0,
            explanation: 'Taylor: $\\ln(1+x) = x - x^2/2 + \\cdots$. Numerator $= -x^2/2 + \\cdots$. Limit $= -1/2$.'
          }
        ]
      }
    },
    {
      id: 'lh6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Method Selection**',
      exercise: {
        dropdowns: [
          {
            label: '$\\lim_{x \\to 0} \\frac{e^x - e^{-x}}{\\sin x}$. Best method:',
            options: ['L\'Hôpital once ($0/0$ → $\\frac{e^x + e^{-x}}{\\cos x} = 2$)', 'Taylor series', 'Algebra only', 'Cannot evaluate'],
            correctAnswers: ['L\'Hôpital once ($0/0$ → $\\frac{e^x + e^{-x}}{\\cos x} = 2$)'],
            hints: ['$0/0$ form. One L\'H application suffices.'],
            explanation: 'L\'H: $(e^0 + e^0)/\\cos 0 = 2/1 = 2$.'
          },
          {
            label: '$\\lim_{x \\to 0} \\frac{\\cos x - 1 + x^2/2}{x^4}$. Best method:',
            options: ['Taylor series ($\\cos x = 1 - x^2/2 + x^4/24 - \\cdots$ → limit $= 1/24$)', 'L\'Hôpital (needs 4 applications)', 'Algebra', 'Substitution'],
            correctAnswers: ['Taylor series ($\\cos x = 1 - x^2/2 + x^4/24 - \\cdots$ → limit $= 1/24$)'],
            hints: ['$\\cos x \\approx 1 - x^2/2 + x^4/24$. Cancel and divide.'],
            explanation: 'Numerator $= x^4/24 + \\cdots$. Limit $= 1/24$. Taylor is much faster than 4 L\'H applications.'
          }
        ]
      }
    },
    {
      id: 'lh6-input',
      type: 'input-box' as const,
      content: '**Evaluate**',
      exercise: {
        question: '$\\lim_{x \\to 1} \\frac{x^{10} - 1}{x - 1}$. Use L\'Hôpital or factoring. Enter a number.',
        correctAnswer: '10',
        acceptableAnswers: ['10', '10.0'],
        hints: ['$0/0$. L\'H: $\\lim 10x^9 / 1 = 10$. Or: this is $f\'(1)$ where $f(x) = x^{10}$.'],
        explanation: 'L\'H: $10(1)^9/1 = 10$. This is the definition of $\\frac{d}{dx}[x^{10}]$ at $x = 1$.'
      }
    },
    {
      id: 'lh6-summary',
      type: 'text' as const,
      content: `### Workshop Complete

- Substitution ($u = 1/x$) can simplify before L'Hôpital
- Taylor series beats L'Hôpital for 3+ applications
- Exponential forms: always take $\\ln$ first
- Recognize derivative definitions disguised as limits

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
