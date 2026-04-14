export const calcabExamReviewPart5Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'examrev5-intro',
      type: 'text' as const,
      content: `# AP Exam Review \u2014 Applications of Integration

**Part 5 of 7**

---

### Applications of Integration Summary

| Application | Formula |
|:---|:---|
| Area under curve | $\\int_a^b f(x)\\,dx$ |
| Area between curves | $\\int_a^b [f(x) - g(x)]\\,dx$ ($f \\ge g$) |
| Volume \u2014 Disk | $\\pi\\int_a^b [R(x)]^2\\,dx$ |
| Volume \u2014 Washer | $\\pi\\int_a^b \\left([R(x)]^2 - [r(x)]^2\\right)dx$ |
| Accumulation | $F(x) = F(a) + \\int_a^x f(t)\\,dt$ |
| Average value | $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$ |

### Area Between Curves \u2014 Setup

$$\\boxed{A = \\int_a^b [\\text{top} - \\text{bottom}]\\,dx \\quad\\text{or}\\quad \\int_c^d [\\text{right} - \\text{left}]\\,dy}$$

> **Key Fact:** When curves cross, split the integral at intersection points.

### Worked Example \u2014 Area Between Curves

Find the area between $y = x^2$ and $y = x$ on $[0,1]$.

Intersection: $x^2 = x \\implies x=0, x=1$. On $[0,1]$: $x \\ge x^2$.

$$A = \\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$$`
    },
    {
      id: 'examrev5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Applications of Integration Quiz** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'The area between $y=4-x^2$ and $y=0$ from $x=-2$ to $x=2$ is:',
            options: ['$32/3$', '$16/3$', '$8$', '$16$'],
            correctAnswer: 0,
            explanation: '$\\int_{-2}^{2}(4-x^2)\\,dx = [4x - x^3/3]_{-2}^2 = (8-8/3)-(-8+8/3) = 32/3$.'
          },
          {
            question: 'Which integral gives the volume of the solid formed by rotating $y=\\sqrt{x}$ about the $x$-axis from $x=0$ to $x=4$?',
            options: ['$\\pi\\int_0^4 x\\,dx$', '$\\pi\\int_0^4 \\sqrt{x}\\,dx$', '$\\pi\\int_0^2 y^4\\,dy$', '$2\\pi\\int_0^4 x\\sqrt{x}\\,dx$'],
            correctAnswer: 0,
            explanation: 'Disk method: $\\pi\\int_0^4 (\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx$.'
          },
          {
            question: 'If $\\int_0^6 f(x)\\,dx = 18$, the average value of $f$ on $[0,6]$ is:',
            options: ['$3$', '$18$', '$6$', '$108$'],
            correctAnswer: 0,
            explanation: '$f_{\\text{avg}} = \\frac{1}{6-0}\\cdot 18 = 3$.'
          }
        ]
      }
    },
    {
      id: 'examrev5-volumes',
      type: 'text' as const,
      content: `### Volume Methods Comparison

| Method | Axis | Slice Shape | Formula |
|:---|:---|:---|:---|
| Disk | $x$ | Circle | $\\pi\\int [R(x)]^2\\,dx$ |
| Washer | $x$ | Ring | $\\pi\\int ([R]^2 - [r]^2)\\,dx$ |
| Disk ($y$-axis) | $y$ | Circle | $\\pi\\int [R(y)]^2\\,dy$ |

### Worked Example \u2014 Washer Method

Region between $y = x$ and $y = x^2$ rotated about the $x$-axis on $[0,1]$.

Outer radius: $R = x$. Inner radius: $r = x^2$.

$$V = \\pi\\int_0^1 (x^2 - x^4)\\,dx = \\pi\\left[\\frac{x^3}{3} - \\frac{x^5}{5}\\right]_0^1 = \\pi\\left(\\frac{1}{3} - \\frac{1}{5}\\right) = \\frac{2\\pi}{15}$$

### Accumulation Functions

$$\\boxed{F(x) = F(a) + \\int_a^x f(t)\\,dt}$$

This says: starting value + net accumulation = current value.`
    },
    {
      id: 'examrev5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the correct setup.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Area between $y=x$ and $y=x^3$ on $[0,1]$ \u2014 integrand is:',
            options: ['$x - x^3$', '$x^3 - x$', '$x \\cdot x^3$', '$x + x^3$'],
            correctAnswers: ['$x - x^3$'],
            hints: ['On $[0,1]$, $x \\ge x^3$. Area = top minus bottom.'],
            explanation: '$x \\ge x^3$ on $[0,1]$, so integrand = $x - x^3$.'
          },
          {
            label: 'Volume when $y=\\sqrt{x}$ is rotated about $x$-axis uses:',
            options: ['Disk method', 'Washer method', 'Shell method', 'Cross-section method'],
            correctAnswers: ['Disk method'],
            hints: ['Only one curve and the axis \u2014 no hole in the middle.'],
            explanation: 'Single curve rotated about the adjacent axis \u2192 disk. $R = \\sqrt{x}$.'
          },
          {
            label: 'If $v(t) \\ge 0$, then $\\int_a^b v(t)\\,dt$ represents:',
            options: ['Total distance traveled', 'Net displacement', 'Average velocity', 'Acceleration'],
            correctAnswers: ['Total distance traveled'],
            hints: ['When velocity is non-negative, displacement equals distance.'],
            explanation: 'When $v \\ge 0$, $\\int v\\,dt$ gives both displacement and distance.'
          }
        ]
      }
    },
    {
      id: 'examrev5-input',
      type: 'input-box' as const,
      content: '**Compute the volume.** \u270d\ufe0f',
      exercise: {
        question: 'Find the volume when $y = x^2$ is rotated about the $x$-axis from $x=0$ to $x=3$. Express as $\\frac{a\\pi}{b}$ in lowest terms. Enter $a + b$.',
        correctAnswer: '248',
        acceptableAnswers: ['248'],
        hints: [
          'Disk method: $V = \\pi\\int_0^3 (x^2)^2\\,dx = \\pi\\int_0^3 x^4\\,dx$.',
          '$= \\pi\\left[\\frac{x^5}{5}\\right]_0^3 = \\pi\\cdot\\frac{243}{5}$.',
          '$\\frac{243\\pi}{5}$. $a+b = 243+5 = 248$.'
        ],
        explanation: '$V = \\pi\\cdot\\frac{3^5}{5} = \\frac{243\\pi}{5}$. $a+b = 248$.'
      }
    },
    {
      id: 'examrev5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

- Area between curves: $\\int [\\text{top} - \\text{bottom}]\\,dx$
- Disk: one curve, no hole. Washer: two curves (outer - inner)
- Accumulation: initial value + integral of rate = total
- Average value = $\\frac{1}{b-a}\\int_a^b f$`
    }
  ]
};
