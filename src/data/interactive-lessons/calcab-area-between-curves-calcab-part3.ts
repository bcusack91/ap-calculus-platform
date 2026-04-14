export const calcabAreaCurvesPart3Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area3-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 3 of 7 \u2014 Integrating with Respect to $y$**

### When to Use $dy$ Instead of $dx$

$$\\boxed{A = \\int_c^d [\\text{right}(y) - \\text{left}(y)]\\,dy}$$

| Use $dx$ when... | Use $dy$ when... |
|:---:|:---:|
| Curves are functions of $x$ | Curves are functions of $y$ (e.g., $x = y^2$) |
| "Top minus bottom" is clear | "Right minus left" is simpler |
| Region splits in $x$ | One integral in $y$ avoids splitting |

> **Key Fact:** Integrating wrt $y$ means the **limits are $y$-values** and you subtract **right minus left**.

### Worked Example

> Find the area between $x = y^2$ and $x = 4$.

**Intersections:** $y^2 = 4 \\Rightarrow y = \\pm 2$

Right: $x = 4$. Left: $x = y^2$.

$$A = \\int_{-2}^{2}(4-y^2)\\,dy = 2\\int_0^2(4-y^2)\\,dy = 2\\left[4y-\\frac{y^3}{3}\\right]_0^2 = 2\\left(8-\\frac{8}{3}\\right) = \\boxed{\\frac{32}{3}}$$

### Conversion Example

> $y = \\sqrt{x}$ and $y = \\frac{x}{4}$ \u2014 compare setups.

| In $x$ | In $y$ |
|:---:|:---:|
| Need to find crossings in $x$: $\\sqrt{x} = x/4 \\Rightarrow x=0,16$ | Rewrite: $x=y^2$ and $x=4y$ |
| $\\int_0^{16}(\\sqrt{x}-\\frac{x}{4})\\,dx$ | $\\int_0^4(4y-y^2)\\,dy$ |
| Both give $\\frac{32}{3}$ | Often simpler in $y$ |`
    },
    {
      id: 'area3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Integrating in $y$** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find the area enclosed by $x = y^2-1$ and $x = y+1$.',
            options: ['$\\frac{9}{2}$', '$\\frac{7}{2}$', '$3$', '$\\frac{11}{2}$'],
            correctAnswer: 0,
            explanation: 'Intersect: $y^2-1=y+1 \\Rightarrow y^2-y-2=0 \\Rightarrow y=-1,2$. Right: $y+1$. Left: $y^2-1$. $A = \\int_{-1}^2[(y+1)-(y^2-1)]\\,dy = \\int_{-1}^2(2+y-y^2)\\,dy = \\frac{9}{2}$.'
          },
          {
            question: 'The area between $x = y$ and $x = y^2$ for $0 \\leq y \\leq 1$ is:',
            options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$'],
            correctAnswer: 0,
            explanation: 'Right: $x=y$, Left: $x=y^2$. $A = \\int_0^1(y-y^2)\\,dy = [\\frac{y^2}{2}-\\frac{y^3}{3}]_0^1 = \\frac{1}{2}-\\frac{1}{3} = \\frac{1}{6}$.'
          },
          {
            question: 'When integrating wrt $y$, your limits of integration are:',
            options: ['$y$-values of intersections', '$x$-values of intersections', 'Always $0$ to $1$', 'The same as in $dx$'],
            correctAnswer: 0,
            explanation: 'Limits must match the variable of integration. In $dy$, use $y$-values.'
          }
        ]
      }
    },
    {
      id: 'area3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the best approach.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Region between $x=y^2$ and $x=2y$. Better variable:',
            options: ['$y$ (one integral)', '$x$ (one integral)', '$x$ (two integrals)', 'Either works equally well'],
            correctAnswers: ['$y$ (one integral)'],
            hints: ['Both curves are already functions of $y$. In $x$, you would need to solve for $y$ and might need to split.'],
            explanation: 'Both curves are naturally functions of $y$: $x=y^2$ and $x=2y$. One integral in $y$.'
          },
          {
            label: 'Area between $y=\\ln x$, $y=0$, $x=e$. In $dy$, right boundary is:',
            options: ['$x = e$', '$x = e^y$', '$x = \\ln y$', '$x = 1$'],
            correctAnswers: ['$x = e$'],
            hints: ['The vertical line $x=e$ is always $x=e$ regardless of variable.'],
            explanation: 'The right boundary is the vertical line $x=e$. The left boundary is $x=e^y$ (rewrite of $y=\\ln x$).'
          },
          {
            label: '$x = 4-y^2$ and $x = 0$. The region is bounded on the left by:',
            options: ['$x = 0$ (the $y$-axis)', '$x = 4-y^2$', '$x = 4$', '$y = 0$'],
            correctAnswers: ['$x = 0$ (the $y$-axis)'],
            hints: ['$x=0$ is the $y$-axis. $x=4-y^2$ opens leftward and is the right boundary.'],
            explanation: 'Left: $x=0$. Right: $x=4-y^2$. Limits: $y=-2$ to $y=2$.'
          }
        ]
      }
    },
    {
      id: 'area3-input',
      type: 'input-box' as const,
      content: '**Calculate.** \u270d\ufe0f',
      exercise: {
        question: 'Find the area between $x = y^2$ and $x = 2y + 3$.\n\n$A = ?$ (Enter a fraction as a/b.)',
        correctAnswer: '32/3',
        acceptableAnswers: ['32/3'],
        hints: [
          'Intersect: $y^2 = 2y+3 \\Rightarrow y^2-2y-3=0 \\Rightarrow (y-3)(y+1)=0$.',
          'Right: $2y+3$, Left: $y^2$. Integrate from $y=-1$ to $y=3$.',
          '$\\int_{-1}^3(2y+3-y^2)\\,dy = [y^2+3y-\\frac{y^3}{3}]_{-1}^3$.',
          '$= (9+9-9)-( 1-3+\\frac{1}{3}) = 9+\\frac{5}{3}$.'
        ],
        explanation: '$[y^2+3y-\\frac{y^3}{3}]_{-1}^3 = 9 - (-\\frac{5}{3}) = 9+\\frac{5}{3} = \\frac{32}{3}$.'
      }
    },
    {
      id: 'area3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

- Use $dy$ when curves are naturally functions of $y$
- Subtract **right minus left** (not top minus bottom)
- Limits are $y$-values of intersection points
- Integrating in $y$ can turn a two-integral problem into a single integral`
    }
  ]
};
