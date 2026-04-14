export const calcabVolumesPart3Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol3-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 3 of 7 \u2014 Rotation About Other Lines**

### Adjusting Radii for Non-Standard Axes

$$\\boxed{R = |f(x) - k|, \\quad r = |g(x) - k|}$$

where $y = k$ is the axis of rotation.

### Quick Reference

| Axis | Outer Radius | Inner Radius |
|:---:|:---:|:---:|
| $x$-axis ($y=0$) | $f(x)$ | $g(x)$ |
| $y = k$ below region | $f(x)-k$ | $g(x)-k$ |
| $y = k$ above region | $k - g(x)$ | $k - f(x)$ |
| $y$-axis ($x=0$) | Use $dy$ | Use $dy$ |

> **Key Fact:** When the axis is **above** the region, the farther curve becomes the **outer** radius and the closer curve becomes the **inner** radius. Which is "outer" can flip!

### Worked Example 1 \u2014 Axis Below

> Rotate region between $y = x^2$ and $y = 1$ about $y = -1$ on $[-1,1]$.

$R = 1-(-1) = 2$ (outer: $y=1$ is farther). $r = x^2-(-1) = x^2+1$ (inner: $y=x^2$ is closer).

Wait \u2014 which is farther from $y = -1$? At $x = 0$: $y=1$ gives distance $2$, $y=0$ gives distance $1$. So $y=1$ is outer.

$$V = \\pi\\int_{-1}^1[4-(x^2+1)^2]\\,dx = 2\\pi\\int_0^1[4-x^4-2x^2-1]\\,dx = 2\\pi\\int_0^1(3-2x^2-x^4)\\,dx$$

$$= 2\\pi\\left[3x-\\frac{2x^3}{3}-\\frac{x^5}{5}\\right]_0^1 = 2\\pi\\left(3-\\frac{2}{3}-\\frac{1}{5}\\right) = 2\\pi \\cdot \\frac{32}{15} = \\boxed{\\frac{64\\pi}{15}}$$

### Worked Example 2 \u2014 Axis Above

> Rotate region between $y = x^2$ and $y = 1$ about $y = 3$ on $[-1,1]$.

$R = 3-x^2$ (outer: $y=x^2$ is farther from $y=3$). $r = 3-1 = 2$ (inner: $y=1$ is closer).

$$V = \\pi\\int_{-1}^1[(3-x^2)^2-4]\\,dx$$`
    },
    {
      id: 'vol3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Non-Standard Axes** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Rotate $y = x$ and $y = x^2$ on $[0,1]$ about $y = -1$. Outer radius:',
            options: ['$R = x+1$', '$R = x-1$', '$R = x^2+1$', '$R = 1-x$'],
            correctAnswer: 0,
            explanation: '$y=x$ is farther from $y=-1$. $R = x-(-1) = x+1$.'
          },
          {
            question: 'Same region about $y = 2$. Outer radius:',
            options: ['$R = 2-x^2$', '$R = 2-x$', '$R = x^2-2$', '$R = x-2$'],
            correctAnswer: 0,
            explanation: 'From above: $y=x^2$ is farther from $y=2$. $R = 2-x^2$.'
          },
          {
            question: 'Rotate $y = \\sqrt{x}$ and $y = 0$ about $y = 4$ on $[0,4]$. Inner radius:',
            options: ['$r = 4-\\sqrt{x}$', '$r = 4$', '$r = \\sqrt{x}$', '$r = 4-x$'],
            correctAnswer: 0,
            explanation: '$y = \\sqrt{x}$ is closer to $y=4$ than $y=0$. Inner: $r = 4-\\sqrt{x}$.'
          }
        ]
      }
    },
    {
      id: 'vol3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the radii.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Rotate $y=4-x^2$ and $y=0$ about $y=5$. Outer radius:',
            options: ['$R = 5$ (from $y=0$)', '$R = 5-(4-x^2) = 1+x^2$', '$R = 4-x^2$', '$R = 5-x^2$'],
            correctAnswers: ['$R = 5$ (from $y=0$)'],
            hints: ['Which curve is farther from $y=5$? $y=0$ is 5 units away.'],
            explanation: '$y=0$ is farther from $y=5$ (distance 5). Outer $R = 5$.'
          },
          {
            label: 'Rotate $y=x$ and $y=0$ about $y=-2$ on $[0,3]$. Washer or disk?',
            options: ['Washer (region does not touch $y=-2$)', 'Disk', 'Neither', 'Cannot determine'],
            correctAnswers: ['Washer (region does not touch $y=-2$)'],
            hints: ['Is there a gap between the region and the axis $y=-2$?'],
            explanation: 'The region is above the $x$-axis; $y=-2$ is below. There is a gap \u2192 washer.'
          },
          {
            label: 'When rotating about $y=k$ above the region, the outer curve is:',
            options: ['The bottom curve (farther from $k$)', 'The top curve', 'The axis itself', 'Always $f(x)$'],
            correctAnswers: ['The bottom curve (farther from $k$)'],
            hints: ['With the axis above, the bottom of the region is the farthest.'],
            explanation: 'The bottom curve is farther from an axis above \u2192 it creates the outer radius.'
          }
        ]
      }
    },
    {
      id: 'vol3-input',
      type: 'input-box' as const,
      content: '**Calculate.** \u270d\ufe0f',
      exercise: {
        question: 'Rotate $y = x^2$ about the $y$-axis from $y=0$ to $y=4$ (disk in $y$). Volume $= a\\pi$. Find $a$.\n\n(Enter an integer.)',
        correctAnswer: '8',
        acceptableAnswers: ['8'],
        hints: [
          '$x = \\sqrt{y}$, so $R(y) = \\sqrt{y}$.',
          '$V = \\pi\\int_0^4(\\sqrt{y})^2\\,dy = \\pi\\int_0^4 y\\,dy$.',
          '$= \\pi[\\frac{y^2}{2}]_0^4 = 8\\pi$.'
        ],
        explanation: '$V = 8\\pi$. So $a = 8$.'
      }
    },
    {
      id: 'vol3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

- Radius = **distance** from curve to axis: $|f(x) - k|$
- Axis below: outer = farther curve ($f(x)-k$)
- Axis above: outer = closer-to-ground curve ($k - g(x)$ is larger)
- Always test: which curve is farther from the axis?`
    }
  ]
};
