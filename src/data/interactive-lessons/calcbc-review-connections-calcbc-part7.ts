export const calcbcReviewPart7Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rc7-intro',
      type: 'text' as const,
      content: `# Final Comprehensive Review

**Part 7 of 7 — The Complete BC Picture**

### AP Calculus BC — Topic Map

| Unit | BC-Only Topics | Weight |
|------|---------------|--------|
| Integration | By parts, partial fractions, improper | ~15% |
| Parametric/Polar/Vector | Derivatives, area, arc length, motion | ~10% |
| Differential Equations | Euler's method, logistic models | ~8% |
| Series | Taylor/Maclaurin, convergence tests, error bounds, applications | ~17% |
| AB Topics | Limits, derivatives, integrals, FTC, applications | ~50% |

> **The AB foundation is essential.** Half the BC exam tests AB material. Strong AB skills make BC manageable.`
    },
    {
      id: 'rc7-mc',
      type: 'multiple-choice' as const,
      content: '**Final Comprehensive Check**',
      exercise: {
        questions: [
          {
            question: 'The Taylor series for $f(x)$ about $x = a$ converges to $f(x)$ provided:',
            options: ['The remainder $R_n(x) \\to 0$ as $n \\to \\infty$', 'The series has infinitely many terms', 'The function is continuous', 'The radius of convergence is infinite'],
            correctAnswer: 0,
            explanation: 'A Taylor series converges to $f(x)$ if and only if the remainder (error) $R_n(x) \\to 0$ as $n \\to \\infty$.'
          },
          {
            question: 'On the BC exam, which formula has a $1/2$ factor that students most often forget?',
            options: ['Polar area: $A = \\frac{1}{2}\\int r^2\\,d\\theta$', 'Arc length', 'Integration by parts', 'Euler\'s method'],
            correctAnswer: 0,
            explanation: 'The $1/2$ in the polar area formula is the most commonly forgotten factor on the BC exam.'
          },
          {
            question: 'The relationship $\\frac{d}{dx}[\\sin x] = \\cos x$ corresponds to the series relationship:',
            options: ['Differentiating $\\sum (-1)^n x^{2n+1}/(2n+1)!$ gives $\\sum (-1)^n x^{2n}/(2n)!$', 'Adding $1$ to every term', 'Multiplying every term by $x$', 'Shifting the index by $1$'],
            correctAnswer: 0,
            explanation: 'Term-by-term differentiation of the sine series yields the cosine series. This is why series and differentiation are deeply connected.'
          },
          {
            question: 'A problem says "approximate $f(0.5)$ with error less than $0.01$." You should:',
            options: ['Use enough Taylor polynomial terms and bound the remainder', 'Use Euler\'s method with small step size', 'Use the trapezoidal rule', 'Evaluate $f$ directly'],
            correctAnswer: 0,
            explanation: 'Taylor polynomial approximation with error bounded by AST or Lagrange remainder is the standard approach for function approximation with guaranteed accuracy.'
          }
        ]
      }
    },
    {
      id: 'rc7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Topic Identification — Final Round**',
      exercise: {
        dropdowns: [
          {
            label: '"Find $dy/dx$ for $x = e^t$, $y = t^2$" — this is a:',
            options: ['Parametric derivatives problem', 'Implicit differentiation problem', 'Related rates problem', 'Series problem'],
            correctAnswers: ['Parametric derivatives problem'],
            hints: ['Given $x(t)$ and $y(t)$.'],
            explanation: '$dy/dx = (dy/dt)/(dx/dt) = 2t/e^t$.'
          },
          {
            label: '"Determine whether $\\sum n^2/3^n$ converges" — best approach:',
            options: ['Ratio test', 'Divergence test', 'Integral test', 'Comparison with p-series'],
            correctAnswers: ['Ratio test'],
            hints: ['$3^n$ in the denominator → ratio test handles exponentials.'],
            explanation: 'Ratio test: $L = \\lim \\frac{(n+1)^2}{3^{n+1}} \\cdot \\frac{3^n}{n^2} = \\frac{1}{3} < 1$. Converges.'
          },
          {
            label: '"Use the series for $\\cos x$ to find $\\lim_{x\\to 0} \\frac{1-\\cos x}{x^2}$" — this combines:',
            options: ['Series and limits', 'Integrals and series', 'Parametric and polar', 'DEs and FTC'],
            correctAnswers: ['Series and limits'],
            hints: ['Substitute the series for $\\cos x$, then simplify.'],
            explanation: '$1 - \\cos x = x^2/2 - x^4/24 + \\cdots$. Dividing by $x^2$: $1/2 - x^2/24 + \\cdots \\to 1/2$.'
          }
        ]
      }
    },
    {
      id: 'rc7-input',
      type: 'input-box' as const,
      content: '**Final Question**',
      exercise: {
        question: 'The third-degree Maclaurin polynomial for $e^x$ is $P_3(x) = 1 + x + x^2/2 + x^3/6$. The Lagrange error bound for $|e^{0.1} - P_3(0.1)|$ uses $M = e^{0.1} < 3$. Compute the bound (as a fraction).',
        correctAnswer: '1/80000',
        acceptableAnswers: ['1/80000', '0.0000125'],
        hints: ['$|R_3| \\leq M \\cdot |0.1|^4 / 4! = 3 \\cdot 10^{-4}/24$.'],
        explanation: '$|R_3| \\leq 3 \\cdot (0.1)^4/4! = 3 \\cdot 0.0001/24 = 0.0003/24 = 1/80000 = 0.0000125$.'
      }
    },
    {
      id: 'rc7-summary',
      type: 'text' as const,
      content: `### Congratulations — BC Review Complete! 🎓

You've reviewed all major BC connections:
1. ✓ **Derivatives ↔ Integrals ↔ Series** — the fundamental triad
2. ✓ **Parametric ↔ Polar ↔ Vector** — three coordinate systems, one calculus
3. ✓ **Differential Equations** — connect to slopes, series, and Euler's method
4. ✓ **Convergence Tests** — systematic decision flowchart
5. ✓ **Integration Techniques** — method selection is key
6. ✓ **Cross-Topic Problem Solving** — identify topics, then apply tools

> **You're ready for the AP Calculus BC exam. Go earn that 5!**

**Review & Connections topic complete!**`
    }
  ]
};
