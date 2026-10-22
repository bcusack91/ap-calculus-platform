export const calcabVolumesPart5Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol5-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 5 of 7 \u2014 Disk & Washer in $y$**

### Rotating About the $y$-axis

When rotating about the $y$-axis, express curves as functions of $y$ and integrate in $dy$:

$$\\boxed{V = \\pi\\int_c^d [R(y)]^2\\,dy \\quad \\text{(disk)}}$$

$$\\boxed{V = \\pi\\int_c^d\\left([R(y)]^2-[r(y)]^2\\right)dy \\quad \\text{(washer)}}$$

### When to Use $dy$

| Rotate about... | Integrate in... | Radii are functions of... |
|:---:|:---:|:---:|
| $x$-axis or $y = k$ | $dx$ | $x$ |
| $y$-axis or $x = k$ | $dy$ | $y$ |

### Worked Example

> The first-quadrant region between $y = x^2$ and the $y$-axis, from $y=0$ to $y=4$, rotated about the $y$-axis.

Solve for $x$: $x = \\sqrt{y}$. Radius $R(y) = \\sqrt{y}$.

$$V = \\pi\\int_0^4(\\sqrt{y})^2\\,dy = \\pi\\int_0^4 y\\,dy = \\pi\\left[\\frac{y^2}{2}\\right]_0^4 = \\boxed{8\\pi}$$

### Washer in $y$ Example

> Region between $x = y$ and $x = y^2$ on $[0,1]$, rotated about the $y$-axis.

Outer: $R = y$ (farther from $y$-axis). Inner: $r = y^2$.

$$V = \\pi\\int_0^1(y^2-y^4)\\,dy = \\pi\\left[\\frac{y^3}{3}-\\frac{y^5}{5}\\right]_0^1 = \\pi\\left(\\frac{1}{3}-\\frac{1}{5}\\right) = \\boxed{\\frac{2\\pi}{15}}$$`
    },
    {
      id: 'vol5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 $y$-Axis Rotation** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Rotate $x = y^2$ about the $y$-axis from $y=0$ to $y=2$. Volume:',
            options: ['$\\frac{32\\pi}{5}$', '$\\frac{16\\pi}{5}$', '$4\\pi$', '$8\\pi$'],
            correctAnswer: 0,
            explanation: '$R = y^2$. $V = \\pi\\int_0^2 y^4\\,dy = \\pi[\\frac{y^5}{5}]_0^2 = \\frac{32\\pi}{5}$.'
          },
          {
            question: 'Rotate $y = \\sqrt{x}$ about $x = 4$ from $y=0$ to $y=2$. Use $dy$. Radius:',
            options: ['$R = 4-y^2$', '$R = y^2-4$', '$R = 4-\\sqrt{y}$', '$R = y^2$'],
            correctAnswer: 0,
            explanation: '$x = y^2$. Distance from $x=y^2$ to $x=4$ is $4-y^2$.'
          },
          {
            question: 'Rotate $x = 3$ and $x = y^2+1$ about $y$-axis on $[0,\\sqrt{2}]$. Method:',
            options: ['Washer in $dy$', 'Disk in $dx$', 'Cross-section', 'Disk in $dy$'],
            correctAnswer: 0,
            explanation: 'Rotating about $y$-axis with two curves \u2192 washer in $dy$. $R=3$, $r=y^2+1$.'
          }
        ]
      }
    },
    {
      id: 'vol5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Verify your reasoning.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'To rotate about $x = -2$, before setting up in $dy$, you need:',
            options: ['Write $x$ in terms of $y$; radius $x(y)+2$', 'Write $y$ in terms of $x$; radius $y(x)+2$', 'Write $x$ in terms of $y$; radius $x(y)-2$', 'Write $x$ in terms of $y$; radius $x(y)$'],
            correctAnswers: ['Write $x$ in terms of $y$; radius $x(y)+2$'],
            hints: ['Axis $x = -2$ requires radii measured horizontally from $x=-2$.'],
            explanation: 'Radius = $x(y)-(-2) = x(y)+2$ when region is to the right of $x=-2$.'
          },
          {
            label: 'Choosing $dx$ vs $dy$: the variable matches:',
            options: ['The direction along the axis of rotation', 'The direction perpendicular to the axis', 'Always $x$, whatever the axis', 'It does not matter for disks'],
            correctAnswers: ['The direction along the axis of rotation'],
            hints: ['Rotate about $x$-axis (horizontal) \u2192 slice vertically \u2192 $dx$. Rotate about $y$-axis \u2192 slice horizontally \u2192 $dy$.'],
            explanation: 'Disks and washers are sliced perpendicular to the axis of rotation, so each slice\'s thickness ($dx$ or $dy$) runs along that axis: a horizontal axis means $dx$, a vertical axis means $dy$.'
          },
          {
            label: 'Compared to disk/washer in $x$, disk/washer in $y$ is:',
            options: ['The same formulas with $x$ and $y$ swapped', 'A different method with new formulas', 'The same formulas, but without the $\\pi$', 'The shell method under another name'],
            correctAnswers: ['The same formulas with $x$ and $y$ swapped'],
            hints: ['The logic is identical \u2014 just swap variables.'],
            explanation: 'Same idea: $\\pi\\int R^2$ or $\\pi\\int(R^2-r^2)$, but radii are functions of $y$ and limits are $y$-values.'
          }
        ]
      }
    },
    {
      id: 'vol5-input',
      type: 'input-box' as const,
      content: '**Compute.** \u270d\ufe0f',
      exercise: {
        question: 'Rotate $y = x^3$ ($x = y^{1/3}$) about the $y$-axis from $y=0$ to $y=8$. Volume $= a\\pi$. Find $a$.\n\n(Enter a fraction as a/b.)',
        correctAnswer: '96/5',
        acceptableAnswers: ['96/5', '19.2'],
        hints: [
          '$R(y) = y^{1/3}$.',
          '$V = \\pi\\int_0^8(y^{1/3})^2\\,dy = \\pi\\int_0^8 y^{2/3}\\,dy$.',
          '$= \\pi[\\frac{y^{5/3}}{5/3}]_0^8 = \\pi \\cdot \\frac{3}{5}(8^{5/3})$.',
          '$8^{5/3} = 32$. $V = \\frac{3}{5}(32)\\pi = \\frac{96\\pi}{5}$.'
        ],
        explanation: '$V = \\frac{96\\pi}{5}$. So $a = \\frac{96}{5}$.'
      }
    },
    {
      id: 'vol5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

- For $y$-axis rotation: use $dy$, express $x$ as function of $y$
- For $x = k$ rotation: radii measured horizontally from $x=k$
- Same disk/washer formulas \u2014 just swap the variable roles
- Limits are $y$-values when integrating in $dy$`
    }
  ]
};
