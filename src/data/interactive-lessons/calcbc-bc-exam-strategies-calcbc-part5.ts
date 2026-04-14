export const calcbcExamStrategyPart5Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'es5-intro',
      type: 'text' as const,
      content: `# BC-Specific Topic Strategies

**Part 5 of 7 — Targeted Strategies for BC-Only Content**

### Series Questions (Highest Priority)

Series questions appear on **both MC and FRQ** every year. Master this checklist:

| Task | Method |
|------|--------|
| Write Taylor polynomial | Derivatives at $a$, or substitute into known series |
| Find interval of convergence | Ratio test → solve for $|x - a| < R$ → test endpoints |
| Approximate integral | Integrate series term by term |
| Bound error | AST: first omitted term. Lagrange: $\\frac{M|x-a|^{n+1}}{(n+1)!}$ |
| Find general term | Identify pattern and write $a_n = f(n)$ |

> **AP Tip:** Memorize these six Maclaurin series cold:
> $e^x$, $\\sin x$, $\\cos x$, $\\frac{1}{1-x}$, $\\ln(1+x)$, $\\arctan x$`
    },
    {
      id: 'es5-para',
      type: 'text' as const,
      content: `### Parametric, Polar, and Vector Questions

**Parametric:**
- $dy/dx = (dy/dt)/(dx/dt)$ — know this cold
- Speed $= \\sqrt{(x')^2 + (y')^2}$; distance $= \\int$ speed $\\,dt$
- $d^2y/dx^2$: differentiate $dy/dx$ w.r.t. $t$, then divide by $dx/dt$

**Polar:**
- Area: $A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2\\,d\\theta$ — **don't forget the 1/2**
- Convert to parametric: $x = r\\cos\\theta$, $y = r\\sin\\theta$
- $dy/dx = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$

**Vector-valued functions:**
- Position, velocity, acceleration: $\\vec{r}(t)$, $\\vec{v}(t) = \\vec{r}'(t)$, $\\vec{a}(t) = \\vec{v}'(t)$
- Speed = $|\\vec{v}(t)|$; displacement ≠ distance`
    },
    {
      id: 'es5-mc',
      type: 'multiple-choice' as const,
      content: '**Quick Topic Identification**',
      exercise: {
        questions: [
          {
            question: '"Find the area enclosed by $r = 2\\cos\\theta$." The correct setup is:',
            options: ['$\\frac{1}{2}\\int_0^{\\pi} (2\\cos\\theta)^2\\,d\\theta$', '$\\int_0^{2\\pi} 2\\cos\\theta\\,d\\theta$', '$\\pi(2)^2 = 4\\pi$ (circle formula)', '$\\frac{1}{2}\\int_0^{2\\pi} (2\\cos\\theta)^2\\,d\\theta$'],
            correctAnswer: 0,
            explanation: '$r = 2\\cos\\theta$ is a circle traced from $0$ to $\\pi$. Area $= \\frac{1}{2}\\int_0^{\\pi} 4\\cos^2\\theta\\,d\\theta = \\pi$.'
          },
          {
            question: '"Determine whether $\\sum_{n=1}^\\infty \\frac{n!}{3^n}$ converges." Best first test:',
            options: ['Ratio test — factorial in numerator', 'Integral test', 'Comparison with geometric series', 'Alternating series test'],
            correctAnswer: 0,
            explanation: 'Factorials → ratio test. $L = \\lim n!/3^n \\cdot 3^{n+1}/(n+1)! = \\lim n+1/3 = \\infty > 1$. Wait — $L = \\lim \\frac{(n+1)!}{3^{n+1}} \\cdot \\frac{3^n}{n!} = \\lim \\frac{n+1}{3} = \\infty$. Diverges.'
          },
          {
            question: '"Find $\\int \\frac{dx}{x^2 + 4}$." This requires:',
            options: ['Inverse tangent: $\\frac{1}{2}\\arctan(x/2) + C$', 'Partial fractions', 'Integration by parts', 'u-substitution with $u = x^2 + 4$'],
            correctAnswer: 0,
            explanation: '$\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan(x/a) + C$. With $a = 2$: $\\frac{1}{2}\\arctan(x/2) + C$.'
          }
        ]
      }
    },
    {
      id: 'es5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Convergence Test Selection**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{\\sqrt{n}}$ — best test:',
            options: ['Alternating Series Test', 'Ratio Test', 'Root Test', 'Integral Test'],
            correctAnswers: ['Alternating Series Test'],
            hints: ['Alternating sign + decreasing terms + limit zero.'],
            explanation: 'Alternating, $1/\\sqrt{n} \\to 0$, decreasing. AST gives conditional convergence.'
          },
          {
            label: '$\\sum_{n=1}^\\infty \\frac{3^n}{n^2}$ — best test:',
            options: ['Ratio Test (exponential dominates polynomial)', 'Comparison Test', 'Alternating Series Test', 'p-series test'],
            correctAnswers: ['Ratio Test (exponential dominates polynomial)'],
            hints: ['$3^n$ grows much faster than $n^2$.'],
            explanation: '$L = \\lim \\frac{3^{n+1}/(n+1)^2}{3^n/n^2} = 3\\lim(n/(n+1))^2 = 3 > 1$. Diverges.'
          },
          {
            label: '$\\sum_{n=1}^\\infty \\frac{1}{n^2 + n}$ — best test:',
            options: ['Partial fractions → telescoping', 'Ratio Test', 'Root Test', 'Integral Test'],
            correctAnswers: ['Partial fractions → telescoping'],
            hints: ['$1/(n^2+n) = 1/(n(n+1))$.'],
            explanation: '$1/(n(n+1)) = 1/n - 1/(n+1)$. Telescoping series: sum $= 1$.'
          }
        ]
      }
    },
    {
      id: 'es5-input',
      type: 'input-box' as const,
      content: '**Quick Recall**',
      exercise: {
        question: 'What is the Maclaurin series coefficient of $x^5$ in $\\sin x$? (Express as a fraction.)',
        correctAnswer: '1/120',
        acceptableAnswers: ['1/120'],
        hints: ['$\\sin x = x - x^3/3! + x^5/5! - \\cdots$.'],
        explanation: 'The $x^5$ term in $\\sin x$ is $x^5/5! = x^5/120$. Coefficient: $1/120$.'
      }
    },
    {
      id: 'es5-summary',
      type: 'text' as const,
      content: `### BC Topic Priority

1. **Series** — appears every year, MC + FRQ
2. **Parametric/Polar** — 1 FRQ nearly every year
3. **Integration techniques** — interspersed throughout
4. **Differential equations** — Euler's method, logistic models
5. **Convergence tests** — 3–5 MC questions typical

**Next: Part 6 — Practice Exam Simulation**`
    }
  ]
};
