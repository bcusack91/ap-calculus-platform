export const calcabTablesDataPart7Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td7-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 7 of 7 \u2014 Comprehensive Assessment**

### Formula Reference

| Technique | Formula | Key Detail |
|:---|:---:|:---|
| Symmetric diff. quotient | $\\frac{f(a+h)-f(a-h)}{2h}$ | Best for interior points |
| Left Riemann sum | $\\sum f(x_{i-1})\\Delta x_i$ | Use left endpoints |
| Right Riemann sum | $\\sum f(x_i)\\Delta x_i$ | Use right endpoints |
| Trapezoidal rule | $\\sum \\frac{\\Delta x_i}{2}[f(x_{i-1})+f(x_i)]$ | Average of L and R |
| MVT | $f'(c) = \\frac{f(b)-f(a)}{b-a}$ | Requires cont. + diff. |
| IVT | $f(c) = k$ for $k$ between $f(a), f(b)$ | Requires continuity |

### Common AP Mistakes

| Mistake | Correction |
|:---|:---|
| Assuming equal subintervals | Check $\\Delta x_i$ individually |
| Forgetting units | Always include units with derivatives and integrals |
| Not citing MVT/IVT by name | State the theorem and verify hypotheses |
| Confusing over/under estimates | Concavity determines trapezoid; monotonicity determines L/R |
| Using wrong neighbors for $f'$ | Use closest surrounding points for symmetric difference |`
    },
    {
      id: 'td7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Assessment \u2014 Set 1** \ud83c\udfaf\n\n$f$ is twice-differentiable.\n\n| $x$ | 0 | 2 | 4 | 6 | 10 |\n|:---:|:---:|:---:|:---:|:---:|:---:|\n| $f(x)$ | 1 | 5 | 4 | 10 | 22 |',
      exercise: {
        questions: [
          {
            question: 'Estimate $f\'(4)$ using symmetric differences.',
            options: ['$\\frac{5}{4}$', '$\\frac{5}{2}$', '$-\\frac{1}{2}$', '$3$'],
            correctAnswer: 0,
            explanation: '$f\'(4) \\approx \\frac{f(6)-f(2)}{6-2} = \\frac{10-5}{4} = \\frac{5}{4}$. Dividing by $2$ instead of $4$ gives $\\frac{5}{2}$; the backward slope $\\frac{4-5}{2}$ gives $-\\frac{1}{2}$; the forward slope $\\frac{10-4}{2}$ gives $3$.'
          },
          {
            question: 'Left Riemann sum for $\\int_0^{10} f(x)\\,dx$:',
            options: ['$60$', '$126$', '$93$', '$40$'],
            correctAnswer: 0,
            explanation: '$f(0)\\cdot2 + f(2)\\cdot2 + f(4)\\cdot2 + f(6)\\cdot4 = 1(2)+5(2)+4(2)+10(4) = 2+10+8+40 = 60$. Right endpoints give $126$; the trapezoid average is $93$; using width $2$ for the last subinterval too gives $40$.'
          },
          {
            question: 'By MVT on $[0, 6]$, $f\'(c) =$',
            options: ['$3/2$', '$5/3$', '$3$', '$11/6$'],
            correctAnswer: 0,
            explanation: '$f\'(c) = \\frac{f(6)-f(0)}{6-0} = \\frac{10-1}{6} = \\frac{9}{6} = \\frac{3}{2}$. Leaving out $f(0)$ gives $\\frac{10}{6} = \\frac{5}{3}$; adding $f(0)$ instead of subtracting gives $\\frac{11}{6}$; $3$ is the slope on $[4,6]$ only.'
          },
          {
            question: 'Can IVT guarantee $f(c) = 3$ for some $c \\in (0, 2)$?',
            options: ['Yes \u2014 $3$ is between $f(0)=1$ and $f(2)=5$', 'No — $f$ is not increasing on all of $[0,10]$', 'No — IVT requires $f$ to be differentiable', 'Need more data — $f(1)$ is not in the table'],
            correctAnswer: 0,
            explanation: '$f(0) = 1 < 3 < 5 = f(2)$. By IVT, $\\exists\\, c \\in (0,2)$ with $f(c) = 3$. IVT needs only continuity on $[0,2]$; it does not need $f$ to be increasing, differentiable, or tabulated at more points.'
          }
        ]
      }
    },
    {
      id: 'td7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Assessment \u2014 Set 2** \ud83c\udfaf\n\n| $t$ (hr) | 0 | 1 | 4 | 6 | 10 |\n|:---:|:---:|:---:|:---:|:---:|:---:|\n| $R(t)$ (gal/hr) | 10 | 8 | 5 | 3 | 1 |',
      exercise: {
        questions: [
          {
            question: 'Trapezoidal estimate of $\\int_0^{10} R(t)\\,dt$:',
            options: ['$44.5$ gal', '$56$ gal', '$33$ gal', '$89$ gal'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{2}(10+8) + \\frac{3}{2}(8+5) + \\frac{2}{2}(5+3) + \\frac{4}{2}(3+1) = 9 + 19.5 + 8 + 8 = 44.5$ gal. The left sum is $56$ and the right sum is $33$ (their average is $44.5$); leaving out the $\\frac{1}{2}$ doubles the answer to $89$.'
          },
          {
            question: 'Since $R(t)$ is continuously decreasing, the left Riemann sum is:',
            options: ['An overestimate', 'An underestimate', 'Exact, since $R$ is continuous', 'Cannot tell without a formula'],
            correctAnswer: 0,
            explanation: 'For a decreasing function, the left endpoint value is always larger than the function on each subinterval, so left sum overestimates. Continuity does not make a Riemann sum exact, and the direction of change is enough to decide without a formula.'
          },
          {
            question: 'The integral $\\int_0^{10} R(t)\\,dt$ represents:',
            options: ['Total gallons over the 10 hours', 'Average rate over the 10 hours', 'Gallons present at $t = 10$ hours', 'Change in the rate over 10 hours'],
            correctAnswer: 0,
            explanation: '$\\int_0^{10} R(t)\\,dt$ = total quantity (gallons) accumulated over the time interval. The average rate would divide by $10$; the amount present at $t = 10$ also needs a starting amount; the change in rate is $R(10) - R(0)$.'
          }
        ]
      }
    },
    {
      id: 'td7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Complete the analysis.** \ud83d\udd0d\n\n$g$ is continuous and differentiable. $g(1) = 3$, $g(5) = 11$, $g(9) = 7$.',
      exercise: {
        dropdowns: [
          {
            label: 'By MVT on $[1,5]$, $g\'(c) =$',
            options: ['$2$', '$8$', '$4$', '$11/5$'],
            correctAnswers: ['$2$'],
            hints: ['$\\frac{11-3}{5-1}$.'],
            explanation: '$g\'(c) = \\frac{11-3}{4} = 2$.'
          },
          {
            label: 'Can IVT guarantee $g(c) = 8$ for some $c \\in (5,9)$?',
            options: ['Yes \u2014 $8$ is between $11$ and $7$', 'No — IVT needs $g(5) < 8 < g(9)$', 'Only by MVT', 'Need more data'],
            correctAnswers: ['Yes \u2014 $8$ is between $11$ and $7$'],
            hints: ['$g(5) = 11 > 8 > 7 = g(9)$.'],
            explanation: '$7 < 8 < 11$. By IVT, $\\exists\\, c \\in (5,9)$ with $g(c)=8$.'
          },
          {
            label: 'By MVT on $[1,9]$, $g\'(c) =$',
            options: ['$1/2$', '$-1/2$', '$1$', '$7/9$'],
            correctAnswers: ['$1/2$'],
            hints: ['$\\frac{7-3}{9-1}$.'],
            explanation: '$g\'(c) = \\frac{7-3}{8} = \\frac{4}{8} = \\frac{1}{2}$. Subtracting in the wrong order gives $-\\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'td7-input',
      type: 'input-box' as const,
      content: '**Final challenge.** \u270d\ufe0f\n\n| $x$ | 0 | 3 | 5 | 9 |\n|:---:|:---:|:---:|:---:|:---:|\n| $f(x)$ | 2 | 8 | 12 | 4 |',
      exercise: {
        question: 'Use the trapezoidal rule to estimate $\\int_0^{9} f(x)\\,dx$.\n\n(Enter an integer.)',
        correctAnswer: '67',
        acceptableAnswers: ['67'],
        hints: [
          'Subintervals: $[0,3],[3,5],[5,9]$ with widths $3,2,4$.',
          '$\\frac{3}{2}(2+8) + \\frac{2}{2}(8+12) + \\frac{4}{2}(12+4)$.',
          '$= 15 + 20 + 32 = 67$.'
        ],
        explanation: '$T = 1.5(10) + 1(20) + 2(16) = 15 + 20 + 32 = 67$.'
      }
    },
    {
      id: 'td7-completion',
      type: 'text' as const,
      content: `### Tables & Data \u2014 Complete! \ud83c\udf93

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | Approximating Derivatives from Tables | \u2705 |
| 2 | Riemann Sums from Tables | \u2705 |
| 3 | Trapezoidal Rule | \u2705 |
| 4 | MVT & IVT with Tables | \u2705 |
| 5 | Interpreting $f'$ and $f''$ from Data | \u2705 |
| 6 | AP-Style Free-Response Workshop | \u2705 |
| 7 | Comprehensive Assessment | \u2705 |

You have completed the full Tables & Data unit!`
    }
  ]
};
