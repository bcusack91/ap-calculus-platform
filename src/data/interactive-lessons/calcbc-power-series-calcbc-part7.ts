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
| Radius | Ratio Test: $R = 1/\\lim|a_{n+1}/a_n|$ |
| Endpoints | Test separately; four possible IOC shapes |
| Operations | Differentiate/integrate term-by-term; same $R$ |
| Known series | $1/(1-x)$, $e^x$, $\\sin x$, $\\cos x$, $\\ln(1+x)$, $\\arctan x$ |
| Coefficients | $a_n = f^{(n)}(c)/n!$ |
| DE solutions | Match coefficients after substituting series |

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
            options: ['$e^x$', '$1/(1-x)$', '$\\cosh x$', '$\\sinh x$'],
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
            options: ['$\\sum_{n=0}^\\infty \\frac{(-1)^n x^n}{3^{n+1}}$', '$\\sum x^n/3^n$', '$\\sum (-1)^n x^n$', '$\\sum 3^n x^n$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{3+x} = \\frac{1}{3} \\cdot \\frac{1}{1+x/3} = \\frac{1}{3}\\sum(-x/3)^n = \\sum \\frac{(-1)^n x^n}{3^{n+1}}$.'
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
            options: ['Differentiating $1/(1-x)$ twice and dividing by $2$', 'Cubing the geometric series', 'Integrating $1/(1-x)^2$ three times', 'Substitution into $e^x$'],
            correctAnswers: ['Differentiating $1/(1-x)$ twice and dividing by $2$'],
            hints: ['$d/dx[1/(1-x)] = 1/(1-x)^2$, $d^2/dx^2[1/(1-x)] = 2/(1-x)^3$.'],
            explanation: '$\\sum x^n \\to \\sum nx^{n-1} = 1/(1-x)^2 \\to \\sum n(n-1)x^{n-2} = 2/(1-x)^3$. So $1/(1-x)^3 = \\frac{1}{2}\\sum_{n=2}^\\infty n(n-1)x^{n-2}$.'
          },
          {
            label: 'Term-by-term integration can change endpoint convergence because:',
            options: ['Integration adds a factor of $1/(n+1)$, which may make a divergent endpoint converge', 'The radius changes', 'Integration reverses the sign', 'It cannot change endpoint behavior'],
            correctAnswers: ['Integration adds a factor of $1/(n+1)$, which may make a divergent endpoint converge'],
            hints: ['Compare $\\sum x^n$ (no convergence at $x=1$) with $\\sum x^{n+1}/(n+1)$ (converges at... wait, does it?).'],
            explanation: 'Example: $\\sum x^n$ has IOC $(-1,1)$. Its integral $\\sum x^{n+1}/(n+1)$ has IOC $(-1,1]$ — the extra $1/(n+1)$ factor makes $x=1$ work (alternating-like test at $x=-1$ already worked).'
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
- **DE connections** — coefficient matching for series solutions

> **Key Fact:** Power series questions appear in 5+ MC questions and at least 1 FRQ on every BC exam. This is arguably the most important BC-specific topic.

> **Up Next:** Taylor & Maclaurin Series — the general construction formula.`
    }
  ]
};
