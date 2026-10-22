export const calcbcPowerSeriesPart7Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'ps7-intro',
      type: 'text' as const,
      content: `# Power Series — Comprehensive Review

**Part 7 of 7 — Complete Topic Review**

### Power Series Checklist

| Skill | Key Points |
|-------|-----------|
| Definition | $\\sum a_n(x-c)^n$; converges in interval around $c$ |
| Radius | Ratio Test: $R = 1/\\lim\\lvert a_{n+1}/a_n\\rvert$ |
| Endpoints | Test separately; four possible IOC shapes |
| Operations | Differentiate/integrate term-by-term; same $R$ |
| Known series | $1/(1-x)$, $e^x$, $\\sin x$, $\\cos x$, $\\ln(1+x)$, $\\arctan x$ |
| Coefficients | $a_n = f^{(n)}(c)/n!$ |
| DE solutions | Compute $y^{(n)}(0)$ from the DE, then $a_n = y^{(n)}(0)/n!$ |

$$\\boxed{\\text{Power series = the bridge between algebra and analysis on the AP exam.}}$$`
    },
    {
      id: 'ps7-mc1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive MC Review**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=0}^\\infty \\frac{(x-3)^n}{n+1}$. The interval of convergence is:',
            options: ['$[2, 4)$', '$(2, 4)$', '$[2, 4]$', '$(2, 4]$'],
            correctAnswer: 0,
            explanation: '$R = 1/\\lim|(n+1)/(n+2)| = 1$. Center $c = 3$. At $x = 4$: $\\sum 1/(n+1)$ diverges. At $x = 2$: $\\sum (-1)^n/(n+1)$ converges (AST). IOC: $[2, 4)$.'
          },
          {
            question: 'The series $1 + x + x^2/2! + x^3/3! + \\cdots$ represents:',
            options: ['$e^x$', '$1/(1-x)$', '$\\cos x$', '$\\ln(1+x)$'],
            correctAnswer: 0,
            explanation: '$\\sum x^n/n! = e^x$, the most important power series in mathematics.'
          },
          {
            question: 'If $f(x) = \\sum_{n=0}^\\infty c_n(x-2)^n$ and $c_3 = 5$, then $f\'\'\'(2) = $',
            options: ['$30$', '$5$', '$5/6$', '$120$'],
            correctAnswer: 0,
            explanation: '$c_3 = f\'\'\'(2)/3!$, so $f\'\'\'(2) = 3! \\cdot c_3 = 6 \\cdot 5 = 30$.'
          },
          {
            question: 'The power series for $\\frac{1}{3+x}$ centered at $0$ is:',
            options: ['$\\sum_{n=0}^\\infty \\frac{(-1)^n x^n}{3^{n+1}}$', '$\\sum_{n=0}^\\infty \\frac{(-1)^n x^n}{3^{n}}$', '$\\sum_{n=0}^\\infty \\frac{x^n}{3^{n+1}}$', '$\\sum_{n=0}^\\infty (-1)^n 3^n x^n$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{3+x} = \\frac{1}{3} \\cdot \\frac{1}{1+x/3} = \\frac{1}{3}\\sum(-x/3)^n = \\sum \\frac{(-1)^n x^n}{3^{n+1}}$. Dropping the leading $\\frac{1}{3}$ gives $\\frac{3}{3+x}$; losing the sign gives $\\frac{1}{3-x}$; and $\\sum (-1)^n 3^n x^n$ is the series for $\\frac{1}{1+3x}$, not $\\frac{1}{3+x}$.'
          }
        ]
      }
    },
    {
      id: 'ps7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final Review Drill**',
      exercise: {
        dropdowns: [
          {
            label: 'The Maclaurin series for $\\frac{1}{(1-x)^3}$ is found by:',
            options: ['Differentiating $1/(1-x)$ twice, then halving', 'Cubing the geometric series term by term', 'Integrating $1/(1-x)^2$ and dividing by $2$', 'Differentiating $1/(1-x)$ twice, with no division'],
            correctAnswers: ['Differentiating $1/(1-x)$ twice, then halving'],
            hints: ['$d/dx[1/(1-x)] = 1/(1-x)^2$, $d^2/dx^2[1/(1-x)] = 2/(1-x)^3$.'],
            explanation: '$\\sum x^n \\to \\sum nx^{n-1} = 1/(1-x)^2 \\to \\sum n(n-1)x^{n-2} = 2/(1-x)^3$. So $1/(1-x)^3 = \\frac{1}{2}\\sum_{n=2}^\\infty n(n-1)x^{n-2}$.'
          },
          {
            label: 'Term-by-term integration can change endpoint convergence because:',
            options: ['The new $1/(n+1)$ factor can make an endpoint converge', 'Integration changes the radius of convergence as well', 'Integration reverses the sign of every term', 'It cannot — integrated series keep the same endpoints'],
            correctAnswers: ['The new $1/(n+1)$ factor can make an endpoint converge'],
            hints: ['Compare $\\sum x^n$ (no convergence at $x=1$) with $\\sum x^{n+1}/(n+1)$ (check both endpoints).'],
            explanation: 'Example: $\\sum x^n$ has IOC $(-1,1)$. Its integral $\\sum x^{n+1}/(n+1)$ has IOC $[-1,1)$: the extra $1/(n+1)$ factor makes $x=-1$ converge (an alternating harmonic series), while $x = 1$ still gives the divergent $\\sum 1/(n+1)$.'
          }
        ]
      }
    },
    {
      id: 'ps7-input',
      type: 'input-box' as const,
      content: '**Final Challenge**',
      exercise: {
        question: 'Find the radius of convergence of $\\sum_{n=0}^\\infty \\frac{(2n)!}{(n!)^2} x^n$. (Hint: use Ratio Test; answer involves a fraction.)',
        correctAnswer: '1/4',
        acceptableAnswers: ['1/4', '0.25'],
        hints: ['$a_{n+1}/a_n = (2n+2)(2n+1)/((n+1)^2) = (2n+1)\\cdot 2/(n+1) \\to 4$.'],
        explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{(2n+2)!}{((n+1)!)^2} \\cdot \\frac{(n!)^2}{(2n)!} = \\frac{(2n+2)(2n+1)}{(n+1)^2} \\to 4$. So $R = 1/4$.'
      }
    },
    {
      id: 'ps7-summary',
      type: 'text' as const,
      content: `### Power Series — Complete Summary

You've mastered:
- **Definition & radius** — Ratio Test for $R$, three convergence scenarios
- **Endpoint testing** — individual analysis, four IOC shapes
- **Operations** — differentiate, integrate, substitute term-by-term
- **Known series** — six essential Maclaurin series
- **Function representation** — building new series from old
- **DE connections** — Taylor polynomials from a DE: compute $y(0), y'(0), y''(0), \\ldots$

> **Key Fact:** Power series are central to Unit 10, which carries 17–18% of the BC exam weighting (CED), and a series question is a regular free-response item. This is arguably the most important BC-specific topic.

> **Up Next:** Taylor & Maclaurin Series — the general construction formula.`
    }
  ]
};
