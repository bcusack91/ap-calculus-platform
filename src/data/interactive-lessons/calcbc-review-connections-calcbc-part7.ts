export const calcbcReviewPart7Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rc7-intro',
      type: 'text' as const,
      content: `# Final Comprehensive Review

**Part 7 of 7 — The Complete BC Picture**

### AP Calculus BC — Topic Map (CED exam weighting)

| Unit | BC-only topics in the unit | BC exam weight |
|------|---------------|--------|
| 1. Limits and Continuity | None (AB content) | 4–7% |
| 2. Differentiation: Definition and Properties | None (AB content) | 4–7% |
| 3. Differentiation: Composite, Implicit, Inverse | None (AB content) | 4–7% |
| 4. Contextual Applications of Differentiation | None (AB content) | 6–9% |
| 5. Analytical Applications of Differentiation | None (AB content) | 8–11% |
| 6. Integration and Accumulation of Change | By parts, partial fractions, improper integrals | 17–20% |
| 7. Differential Equations | Euler's method, logistic models | 6–9% |
| 8. Applications of Integration | Arc length | 6–9% |
| 9. Parametric, Polar, Vector | Whole unit | 11–12% |
| 10. Infinite Sequences and Series | Whole unit | 17–18% |

> **The AB foundation is essential.** Units 1–8 make up about 70% of the exam and are mostly AB material: about 60% of the BC exam tests AB topics. Units 9 and 10 alone are 28–30%. Strong AB skills make BC manageable.`
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
            options: ['Polar area', 'Arc length', 'Integration by parts', 'Euler\'s method'],
            correctAnswer: 0,
            explanation: 'The polar area formula is $A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2\\,d\\theta$. Its $1/2$ comes from the area of a thin sector, $\\frac{1}{2}r^2\\,d\\theta$, and leaving it out doubles the answer.'
          },
          {
            question: 'The relationship $\\frac{d}{dx}[\\sin x] = \\cos x$ corresponds to the series relationship:',
            options: ['Differentiating the sine series term by term gives the cosine series', 'Integrating the sine series term by term gives the cosine series', 'Multiplying every term of the sine series by $x$ gives the cosine series', 'Shifting the sine series index by one gives the cosine series'],
            correctAnswer: 0,
            explanation: 'Term-by-term differentiation of $\\sum (-1)^n x^{2n+1}/(2n+1)!$ gives $\\sum (-1)^n x^{2n}/(2n)!$, the cosine series. Integrating the sine series gives $1 - \\cos x$, not $\\cos x$.'
          },
          {
            question: 'A problem says "approximate $f(0.5)$ with error less than $0.01$." You should:',
            options: ['Use enough Taylor terms and bound the remainder', 'Use Euler\'s method with a small step size', 'Use the tangent line at $x = 0$ only', 'Use the trapezoidal rule on $f$'],
            correctAnswer: 0,
            explanation: 'A Taylor polynomial with its error bounded by the alternating series error bound or the Lagrange remainder is the standard way to approximate a function value with guaranteed accuracy. A tangent line alone has no guaranteed error, and Euler\'s method and the trapezoidal rule do not come with an error bound you can compute here.'
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
