export const calcbcTaylorPart7Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tm7-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin — Comprehensive Review

**Part 7 of 7 — Complete Topic Review**

### Master Reference

| Concept | Key Formula |
|---------|-----------|
| Taylor series | $\\sum f^{(n)}(c)(x-c)^n/n!$ |
| Maclaurin | Taylor at $c = 0$ |
| $T_n(x)$ | Partial sum through degree $n$ |
| Lagrange error | $|R_n| \\le M|x-c|^{n+1}/(n+1)!$ |
| Coefficient ↔ derivative | $a_n = f^{(n)}(c)/n!$ ↔ $f^{(n)}(c) = n! \\cdot a_n$ |

### The Six Essential Series

$$\\boxed{\\frac{1}{1-x},\\quad e^x,\\quad \\sin x,\\quad \\cos x,\\quad \\ln(1+x),\\quad \\arctan x}$$

> **Key Fact:** Taylor/Maclaurin series is the single most heavily tested BC topic. Expect 4+ MC questions and a full FRQ.`
    },
    {
      id: 'tm7-mc1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Review MC**',
      exercise: {
        questions: [
          {
            question: 'The coefficient of $x^3$ in the Maclaurin series for $e^x \\sin x$ is:',
            options: ['$1/3$', '$1/6$', '$0$', '$-1/3$'],
            correctAnswer: 0,
            explanation: '$e^x = 1 + x + x^2/2 + x^3/6 + \\cdots$ and $\\sin x = x - x^3/6 + \\cdots$. The $x^3$ terms of the product come from $1 \\cdot (-x^3/6)$ and $(x^2/2) \\cdot x$ ($\\sin x$ has no $x^0$ or $x^2$ term). Total: $-1/6 + 1/2 = 1/3$.'
          },
          {
            question: 'If $f(x) = \\sum_{n=0}^\\infty c_n x^n$ and $f(0) = 2$, $f\'(0) = -3$, $f\'\'(0) = 10$, then the second-degree Maclaurin polynomial is:',
            options: ['$2 - 3x + 5x^2$', '$2 - 3x + 10x^2$', '$2 - 3x + 5x^2/2$', '$2 + 3x + 5x^2$'],
            correctAnswer: 0,
            explanation: '$T_2 = f(0) + f\'(0)x + f\'\'(0)x^2/2! = 2 - 3x + 10x^2/2 = 2 - 3x + 5x^2$.'
          },
          {
            question: 'The interval of convergence of $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}(x-1)^n}{n}$ is:',
            options: ['$(0, 2]$', '$[0, 2)$', '$(0, 2)$', '$[0, 2]$'],
            correctAnswer: 0,
            explanation: 'This is $\\ln(1+(x-1)) = \\ln x$ centered at $1$. $R = 1$. At $x=2$: $\\sum(-1)^{n+1}/n$ converges. At $x=0$: $\\sum(-1)^{n+1}(-1)^n/n = \\sum -1/n$ diverges. IOC: $(0, 2]$.'
          }
        ]
      }
    },
    {
      id: 'tm7-mc2',
      type: 'multiple-choice' as const,
      content: '**More Review**',
      exercise: {
        questions: [
          {
            question: 'The Maclaurin series $\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots$ converges for:',
            options: ['$[-1, 1]$', '$(-1, 1)$', '$[-1, 1)$', '$(-1, 1]$'],
            correctAnswer: 0,
            explanation: 'The series comes from integrating the geometric series for $\\frac{1}{1+x^2}$, so $R = 1$. At $x = 1$ it is $1 - \\frac{1}{3} + \\frac{1}{5} - \\cdots$, which converges by the alternating series test; at $x = -1$ it is the negative of that series, which also converges. Both endpoints are included: $[-1, 1]$.'
          },
          {
            question: '$f(x)$ has Maclaurin series with only odd powers of $x$. This means $f$ is:',
            options: ['An odd function', 'An even function', 'Neither odd nor even', 'A periodic function'],
            correctAnswer: 0,
            explanation: 'Only odd powers: $f(-x) = -f(x)$. Examples: $\\sin x$, $\\arctan x$, and $x^3$.'
          }
        ]
      }
    },
    {
      id: 'tm7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final Drill**',
      exercise: {
        dropdowns: [
          {
            label: 'The value of $\\sum_{n=0}^\\infty \\frac{1}{n!}$ is:',
            options: ['$e$', '$e - 1$', '$\\pi$', '$2$'],
            correctAnswers: ['$e$'],
            hints: ['Set $x = 1$ in $e^x = \\sum x^n/n!$.'],
            explanation: '$\\sum 1/n! = e^1 = e \\approx 2.71828$.'
          },
          {
            label: 'For the Taylor series of $\\ln x$ at $c = 2$, the coefficient of $(x-2)^3$ is:',
            options: ['$1/24$', '$-1/4$', '$1/12$', '$-1/24$'],
            correctAnswers: ['$1/24$'],
            hints: ['$f\'\'\'(x) = 2/x^3$, so $f\'\'\'(2) = 2/8 = 1/4$. Then $a_3 = (1/4)/3! = 1/24$.'],
            explanation: '$f(x) = \\ln x$: $f\'(x) = 1/x$, $f\'\'(x) = -1/x^2$, $f\'\'\'(x) = 2/x^3$. $f\'\'\'(2) = 2/8 = 1/4$. $a_3 = (1/4)/6 = 1/24$.'
          }
        ]
      }
    },
    {
      id: 'tm7-input',
      type: 'input-box' as const,
      content: '**Final Challenge**',
      exercise: {
        question: 'Find $\\sum_{n=0}^\\infty \\frac{(-1)^n}{(2n+1) \\cdot (\\sqrt{3})^{2n+1}}$. (Hint: use $\\arctan x = \\sum (-1)^n x^{2n+1}/(2n+1)$.) Express as a fraction involving $\\pi$.',
        correctAnswer: 'π/6',
        acceptableAnswers: ['π/6', 'pi/6', 'Pi/6'],
        hints: ['Set $x = 1/\\sqrt{3}$ in the arctan series: $\\arctan(1/\\sqrt{3}) = \\pi/6$.'],
        explanation: 'The sum is $\\sum (-1)^n x^{2n+1}/(2n+1)$ with $x = 1/\\sqrt{3}$, since $(1/\\sqrt{3})^{2n+1} = 1/(\\sqrt{3})^{2n+1}$. So it equals $\\arctan(1/\\sqrt{3}) = \\pi/6$.'
      }
    },
    {
      id: 'tm7-summary',
      type: 'text' as const,
      content: `### Taylor & Maclaurin — Complete Summary

You've mastered:
- **Taylor formula** — $\\sum f^{(n)}(c)(x-c)^n/n!$
- **Computing from scratch** — derivative tables
- **Known series manipulation** — substitution, products, differentiation, integration
- **Lagrange error bound** — $M|x-c|^{n+1}/(n+1)!$
- **AP FRQ strategies** — the 4-part structure
- **Coefficient-derivative connection** — $f^{(n)}(c) = n! \\cdot a_n$

> **Up Next:** Lagrange Error Bound — deeper exploration of remainder estimation.`
    }
  ]
};
