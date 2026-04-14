export const calcbcParamDerivPart5Data = {
  topicSlug: 'parametric-derivatives-calcbc',
  sections: [
    {
      id: 'pd5-intro',
      type: 'text' as const,
      content: `# Parametric Derivatives

**Part 5 of 7 \u2014 Eliminating the Parameter & Mixed Methods**

Sometimes you can convert a parametric curve to Cartesian form and differentiate directly. Knowing when each approach is better is an important AP skill.

### Elimination Methods

| Parametric Form | Elimination Technique | Cartesian Result |
|----------------|----------------------|-----------------|
| $x = t$, $y = f(t)$ | Direct substitution | $y = f(x)$ |
| $x = a\\cos t$, $y = b\\sin t$ | $\\cos^2 t + \\sin^2 t = 1$ | $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$ |
| $x = e^t$, $y = e^{2t}$ | $t = \\ln x$ | $y = x^2$ ($x>0$) |
| $x = \\cosh t$, $y = \\sinh t$ | $\\cosh^2 t - \\sinh^2 t = 1$ | $x^2 - y^2 = 1$ |

> **Warning:** Elimination may lose domain restrictions! Always note the range of $x$ and $y$.`
    },
    {
      id: 'pd5-comparison',
      type: 'text' as const,
      content: `### Parametric vs. Cartesian Differentiation

**Example:** $x = t^2$, $y = t^4$. Cartesian: $y = x^2$ (for $x \\ge 0$).

**Cartesian approach:** $dy/dx = 2x = 2t^2$

**Parametric approach:** $dy/dx = \\frac{4t^3}{2t} = 2t^2$ \\checkmark Same result!

**When to stay parametric:**
- Multiple loops or self-intersections
- Time-dependent problems (motion, velocity)
- When elimination is algebraically messy
- When you need second derivatives (Cartesian may be simpler)

**When to eliminate the parameter:**
- Simple substitutions ($x = t$, $x = e^t$)
- When checking your parametric answer
- When the problem asks for a Cartesian equation`
    },
    {
      id: 'pd5-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The curve $x = \\sec t$, $y = \\tan t$ in Cartesian form is:',
            options: ['$x^2 - y^2 = 1$', '$x^2 + y^2 = 1$', '$y = x^2 - 1$', '$y^2 = x^2 + 1$'],
            correctAnswer: 0,
            explanation: '$\\sec^2 t - \\tan^2 t = 1$, so $x^2 - y^2 = 1$. This is a hyperbola.'
          },
          {
            question: '$x = 2 + 3\\cos t$, $y = -1 + 3\\sin t$ describes:',
            options: ['Circle centered at $(2,-1)$, radius $3$', 'Ellipse', 'Parabola', 'Line'],
            correctAnswer: 0,
            explanation: '$(x-2)^2 + (y+1)^2 = 9\\cos^2 t + 9\\sin^2 t = 9$. Circle of radius $3$ centered at $(2,-1)$.'
          },
          {
            question: 'After eliminating $t$ from $x = t+1$, $y = \\sqrt{t}$, the domain restriction is:',
            options: ['$x \\ge 1$ (since $t \\ge 0$)', '$x > 0$', 'All real $x$', '$x \\ge 0$'],
            correctAnswer: 0,
            explanation: '$t = x - 1 \\ge 0$ requires $x \\ge 1$. Cartesian: $y = \\sqrt{x-1}$ for $x \\ge 1$.'
          }
        ]
      }
    },
    {
      id: 'pd5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Method Selection**',
      exercise: {
        dropdowns: [
          {
            label: 'For $x = \\sin t$, $y = \\sin 2t$, eliminating $t$ gives:',
            options: ['$y = 2x\\sqrt{1-x^2}$ (complicated; stay parametric)', '$y = 2x$', '$y = x^2$', 'Cannot eliminate'],
            correctAnswers: ['$y = 2x\\sqrt{1-x^2}$ (complicated; stay parametric)'],
            hints: ['$\\sin 2t = 2\\sin t\\cos t = 2x\\cos t$, and $\\cos t = \\sqrt{1-x^2}$.'],
            explanation: '$y = 2\\sin t\\cos t = 2x\\sqrt{1-x^2}$ for $0 \\le t \\le \\pi/2$. The parametric form is much easier to differentiate.'
          },
          {
            label: 'The parametric curve $x = t^3 - t$, $y = t^2$ has a self-intersection. Eliminating the parameter:',
            options: ['Loses information about the crossing point', 'Gives a clean Cartesian equation', 'Is not possible', 'Preserves all information'],
            correctAnswers: ['Loses information about the crossing point'],
            hints: ['The curve crosses itself when two different $t$-values give the same $(x,y)$.'],
            explanation: 'At $t = 1$ and $t = -1$: $x(1) = 0$, $x(-1) = 0$, $y(1) = 1$, $y(-1) = 1$. Same point, two $t$-values. Cartesian form cannot show two tangent directions at one point.'
          }
        ]
      }
    },
    {
      id: 'pd5-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'For $x = e^{2t}$, $y = e^{3t}$, eliminate the parameter. In Cartesian form $y = x^n$, what is $n$? Enter as a fraction.',
        correctAnswer: '3/2',
        acceptableAnswers: ['3/2', '1.5'],
        hints: ['$x = e^{2t}$ means $t = \\frac{1}{2}\\ln x$.', '$y = e^{3t} = e^{3 \\cdot \\frac{1}{2}\\ln x} = x^{3/2}$.'],
        explanation: '$t = \\frac{\\ln x}{2}$. $y = e^{3t} = e^{(3/2)\\ln x} = x^{3/2}$. So $n = 3/2$.'
      }
    },
    {
      id: 'pd5-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Eliminating the parameter converts to Cartesian form but may lose domain/direction info
- **Trig parametrizations:** use Pythagorean identities
- **Exponential parametrizations:** use logarithms
- Self-intersecting curves are best handled parametrically
- Always check domain restrictions after elimination

> **Next:** Part 6 is a **Problem-Solving Workshop** with mixed derivative problems.`
    }
  ]
};
