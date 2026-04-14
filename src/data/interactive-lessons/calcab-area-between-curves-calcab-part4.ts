export const calcabAreaCurvesPart4Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area4-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 4 of 7 \u2014 Multiple Regions & Strategy**

### Multi-Region Problems

When three or more curves define a region \u2014 or when the boundary changes \u2014 break the problem into sub-regions:

$$\\boxed{A_{\\text{total}} = A_1 + A_2 + \\cdots}$$

### Decision Guide

| Situation | Strategy |
|:---:|:---:|
| Three curves form a triangle | Find all 3 vertices, integrate each edge |
| Boundary changes at a point | Split into sub-integrals |
| Mix of horizontal and vertical bounds | Choose $dx$ or $dy$ for each piece |
| Given a graph with shaded region | Identify each boundary segment |

### Worked Example 1

> Area bounded by $y = x$, $y = 2-x$, and $y = 0$.

**Vertices:** $(0,0)$, $(2,0)$, $(1,1)$ (where $x = 2-x \\Rightarrow x=1$).

**Split at $x=1$:**
- $[0,1]$: top is $y=x$, bottom is $y=0$
- $[1,2]$: top is $y=2-x$, bottom is $y=0$

$$A = \\int_0^1 x\\,dx + \\int_1^2(2-x)\\,dx = \\frac{1}{2} + \\frac{1}{2} = \\boxed{1}$$

### Worked Example 2

> Area enclosed by $y = x^2$, $y = 2x$, and $y = 4$.

**Intersections:** $x^2 = 2x$ at $(0,0)$ and $(2,4)$. $2x = 4$ at $x=2$. $x^2=4$ at $x=2$.

All three curves meet at $(2,4)$. Region: between $y=x^2$ and $y=2x$ from $x=0$ to $x=2$.

$$A = \\int_0^2(2x-x^2)\\,dx = \\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = 4 - \\frac{8}{3} = \\boxed{\\frac{4}{3}}$$

> **AP Tip:** On the AP exam, sketch the region before integrating. Even a rough sketch prevents choosing the wrong boundaries.`
    },
    {
      id: 'area4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Multi-Region** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Area of the triangle with vertices $(0,0)$, $(4,0)$, $(2,3)$ using integration:',
            options: ['$6$', '$12$', '$8$', '$3$'],
            correctAnswer: 0,
            explanation: 'Left edge: $y = \\frac{3}{2}x$. Right edge: $y = -\\frac{3}{2}(x-4) = 6-\\frac{3}{2}x$. $A = \\int_0^2\\frac{3x}{2}\\,dx + \\int_2^4(6-\\frac{3x}{2})\\,dx = 3+3 = 6$. (Or: $\\frac{1}{2}(4)(3) = 6$.)'
          },
          {
            question: 'Region bounded by $y=\\sqrt{x}$, $y=0$, and $y=x-2$. Which variable avoids splitting?',
            options: ['$y$', '$x$', 'Either works', 'Neither \u2014 must split'],
            correctAnswer: 0,
            explanation: 'In $y$: right is $y+2$, left is $y^2$. One integral from $y=0$ to $y=2$. In $x$, you need two integrals.'
          },
          {
            question: 'The area between $y=|x|$ and $y=2$ is:',
            options: ['$4$', '$2$', '$8$', '$6$'],
            correctAnswer: 0,
            explanation: 'Intersect: $|x|=2$ at $x=\\pm 2$. $A = \\int_{-2}^2(2-|x|)\\,dx = 2\\int_0^2(2-x)\\,dx = 2[2x-\\frac{x^2}{2}]_0^2 = 2(2) = 4$.'
          }
        ]
      }
    },
    {
      id: 'area4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the setup.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Region between $y=x^2$ and $y=4$ and $y=2x$. Number of integrals needed in $x$:',
            options: ['2', '1', '3', '4'],
            correctAnswers: ['2'],
            hints: ['The upper boundary changes from $y=2x$ to $y=4$ at their intersection.'],
            explanation: 'Split where the upper boundary changes. Need 2 integrals in $x$.'
          },
          {
            label: 'Triangle formed by $y=0$, $x=0$, and $y=3-x$. Its area by integration is:',
            options: ['$\\frac{9}{2}$', '$3$', '$6$', '$9$'],
            correctAnswers: ['$\\frac{9}{2}$'],
            hints: ['$A = \\int_0^3(3-x)\\,dx$.'],
            explanation: '$A = [3x-\\frac{x^2}{2}]_0^3 = 9-\\frac{9}{2} = \\frac{9}{2}$. (Or $\\frac{1}{2}(3)(3) = \\frac{9}{2}$.)'
          },
          {
            label: 'For the region between $y=\\sin x$ and $y=\\cos x$ on $[0, \\pi]$, split at:',
            options: ['$x = \\pi/4$', '$x = \\pi/2$', '$x = \\pi/3$', '$x = \\pi/6$'],
            correctAnswers: ['$x = \\pi/4$'],
            hints: ['$\\sin x = \\cos x$ when $\\tan x = 1$.'],
            explanation: '$\\sin x = \\cos x$ at $x = \\pi/4$. Split there.'
          }
        ]
      }
    },
    {
      id: 'area4-input',
      type: 'input-box' as const,
      content: '**Compute.** \u270d\ufe0f',
      exercise: {
        question: 'Find the area of the region bounded by $y = x^2$, $y = 0$, and $x = 3$.\n\n$A = ?$ (Enter an integer.)',
        correctAnswer: '9',
        acceptableAnswers: ['9'],
        hints: [
          'Sketch: parabola from $(0,0)$ to $(3,9)$, bounded below by $y=0$.',
          '$A = \\int_0^3 x^2\\,dx$.',
          '$= [\\frac{x^3}{3}]_0^3 = 9$.'
        ],
        explanation: '$A = \\frac{27}{3} = 9$.'
      }
    },
    {
      id: 'area4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

- Complex regions: break into simpler sub-regions
- Sketch first to identify which curves bound each piece
- Choosing $dx$ vs $dy$ can reduce the number of integrals needed
- Verify with geometry when possible (triangles, rectangles)`
    }
  ]
};
