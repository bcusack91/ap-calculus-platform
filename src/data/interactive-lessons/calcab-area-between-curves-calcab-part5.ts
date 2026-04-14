export const calcabAreaCurvesPart5Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area5-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 5 of 7 \u2014 Signed vs Total Area**

### Two Types of "Area"

$$\\boxed{\\text{Signed area} = \\int_a^b f(x)\\,dx \\qquad \\text{Total area} = \\int_a^b |f(x)|\\,dx}$$

| | Signed Area | Total Area |
|:---:|:---:|:---:|
| **Can be negative?** | Yes | No |
| **Cancellation?** | Positive and negative cancel | No cancellation |
| **Physical meaning** | Net displacement | Total distance |
| **Formula** | $\\int_a^b f(x)\\,dx$ | $\\int_a^b |f(x)|\\,dx$ |

> **Key Fact:** The AP exam frequently asks you to distinguish between these. "Total area" and "area of the region" always mean the positive (absolute value) version.

### Worked Example

> $f(x) = x^2 - 4$ on $[-3, 3]$. Find signed and total area.

**Signed:** $\\int_{-3}^3(x^2-4)\\,dx = 2\\int_0^3(x^2-4)\\,dx = 2[\\frac{x^3}{3}-4x]_0^3 = 2(9-12) = -6$

**Total:** Split at $x = \\pm 2$ (where $x^2 - 4 = 0$):
- $[-3,-2]$: $f > 0$, area $= \\int_{-3}^{-2}(x^2-4)\\,dx = \\frac{7}{3}$
- $[-2,2]$: $f < 0$, area $= \\int_{-2}^2(4-x^2)\\,dx = \\frac{32}{3}$
- $[2,3]$: $f > 0$, area $= \\int_2^3(x^2-4)\\,dx = \\frac{7}{3}$

$$\\text{Total} = \\frac{7}{3} + \\frac{32}{3} + \\frac{7}{3} = \\boxed{\\frac{46}{3}}$$

> **AP Tip:** When the problem says "area enclosed by the curve and the $x$-axis," it means total area (always positive).`
    },
    {
      id: 'area5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Signed vs Total** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$\\int_0^{2\\pi}\\sin x\\,dx = 0$. The total area between $\\sin x$ and the $x$-axis on $[0, 2\\pi]$ is:',
            options: ['$4$', '$0$', '$2$', '$2\\pi$'],
            correctAnswer: 0,
            explanation: 'Split at $\\pi$: $\\int_0^{\\pi}\\sin x\\,dx = 2$ and $\\int_{\\pi}^{2\\pi}(-\\sin x)\\,dx = 2$. Total $= 4$.'
          },
          {
            question: 'If $\\int_a^b f(x)\\,dx = -3$, which is true?',
            options: ['$f$ is below the $x$-axis for at least some of $[a,b]$', '$f$ is always negative on $[a,b]$', 'The total area is $-3$', '$f(x) < 0$ for all $x$'],
            correctAnswer: 0,
            explanation: 'A negative integral means the function dips below the axis enough for the negative parts to outweigh positive parts.'
          },
          {
            question: 'Total area between $y=x$ and $y=0$ on $[-1, 1]$ is:',
            options: ['$1$', '$0$', '$\\frac{1}{2}$', '$2$'],
            correctAnswer: 0,
            explanation: 'Split at $x=0$: $\\int_{-1}^0(-x)\\,dx + \\int_0^1 x\\,dx = \\frac{1}{2}+\\frac{1}{2} = 1$.'
          }
        ]
      }
    },
    {
      id: 'area5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each statement.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_{-2}^2 x^3\\,dx$. Without computing, this equals:',
            options: ['$0$ (odd function on symmetric interval)', '$16$', '$-16$', 'Cannot determine'],
            correctAnswers: ['$0$ (odd function on symmetric interval)'],
            hints: ['$x^3$ is an odd function. $\\int_{-a}^a f(x)\\,dx = 0$ for odd $f$.'],
            explanation: 'Odd function on symmetric interval: signed area is always $0$.'
          },
          {
            label: '"Find the area of the region" on the AP exam means:',
            options: ['Total area (always positive)', 'Signed area (may be negative)', 'Either one', 'Net displacement'],
            correctAnswers: ['Total area (always positive)'],
            hints: ['Area of a region is a geometric quantity \u2014 always non-negative.'],
            explanation: 'AP convention: "area of the region" = total area = positive.'
          },
          {
            label: 'Displacement vs total distance: displacement uses:',
            options: ['$\\int v(t)\\,dt$ (signed)', '$\\int|v(t)|\\,dt$ (absolute value)', 'Both are the same', 'Neither'],
            correctAnswers: ['$\\int v(t)\\,dt$ (signed)'],
            hints: ['Displacement allows cancellation (back and forth). Total distance does not.'],
            explanation: 'Displacement $= \\int v\\,dt$. Total distance $= \\int|v|\\,dt$.'
          }
        ]
      }
    },
    {
      id: 'area5-input',
      type: 'input-box' as const,
      content: '**Calculate.** \u270d\ufe0f',
      exercise: {
        question: 'Find the total area between $y = \\cos x$ and the $x$-axis on $[0, 2\\pi]$.\n\n$A = ?$ (Enter an integer.)',
        correctAnswer: '4',
        acceptableAnswers: ['4'],
        hints: [
          '$\\cos x = 0$ at $x = \\pi/2$ and $x = 3\\pi/2$.',
          'Split: $[0,\\pi/2]$, $[\\pi/2, 3\\pi/2]$, $[3\\pi/2, 2\\pi]$.',
          '$\\int_0^{\\pi/2}\\cos x\\,dx = 1$, $\\int_{\\pi/2}^{3\\pi/2}(-\\cos x)\\,dx = 2$, $\\int_{3\\pi/2}^{2\\pi}\\cos x\\,dx = 1$.'
        ],
        explanation: 'Total area $= 1 + 2 + 1 = 4$.'
      }
    },
    {
      id: 'area5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

- **Signed area** allows cancellation (can be negative)
- **Total area** uses absolute value (always positive)
- AP exam: "area of the region" = total area
- Odd functions on symmetric intervals have signed area $= 0$`
    }
  ]
};
