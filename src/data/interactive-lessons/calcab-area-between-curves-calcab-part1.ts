export const calcabAreaCurvesPart1Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area1-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 1 of 7 \u2014 Foundations & Setup**

### Topic Overview

| Part | Topic |
|:---:|:---:|
| **1** | **Foundations & setup** |
| 2 | When curves cross |
| 3 | Integrating with respect to $y$ |
| 4 | Multiple regions & strategy |
| 5 | Signed vs total area |
| 6 | AP-style workshop |
| 7 | Comprehensive assessment |

---

### The Area Formula

$$\\boxed{A = \\int_a^b [f(x) - g(x)]\\,dx, \\quad f(x) \\geq g(x)}$$

> **Key Fact:** Always subtract **top minus bottom**. If you get a negative answer, you set up the subtraction in the wrong order.

### Step-by-Step Strategy

| Step | Action | Why |
|:---:|:---:|:---:|
| 1 | Find intersection points | These are limits $a$ and $b$ |
| 2 | Determine which is on top | Test a point between intersections |
| 3 | Set up $\\int_a^b [\\text{top} - \\text{bottom}]\\,dx$ | Ensures positive area |
| 4 | Evaluate the integral | Antiderivative \u2192 FTC |

### Worked Example

> Find the area between $y = x^2$ and $y = x + 2$.

**Step 1:** Intersection: $x^2 = x+2 \\Rightarrow x^2-x-2=0 \\Rightarrow (x-2)(x+1)=0 \\Rightarrow x=-1,\\,2$

**Step 2:** Test $x=0$: $f(0)=2$, $g(0)=0$. So $y=x+2$ is on top.

**Step 3\u20134:**

$$A = \\int_{-1}^{2}[(x+2)-x^2]\\,dx = \\left[\\frac{x^2}{2}+2x-\\frac{x^3}{3}\\right]_{-1}^{2}$$

$$= \\left(2+4-\\frac{8}{3}\\right) - \\left(\\frac{1}{2}-2+\\frac{1}{3}\\right) = \\frac{10}{3}+\\frac{7}{6} = \\boxed{\\frac{9}{2}}$$

> **AP Tip:** On the AP exam, always show intersection work. Partial credit depends on seeing correct limits.`
    },
    {
      id: 'area1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Area Setup** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find the area between $y = x^2$ and $y = 4$.',
            options: ['$\\frac{32}{3}$', '$\\frac{16}{3}$', '$8$', '$\\frac{64}{3}$'],
            correctAnswer: 0,
            explanation: 'Intersect at $x = \\pm 2$. $A = \\int_{-2}^{2}(4-x^2)\\,dx = 2\\int_0^2(4-x^2)\\,dx = 2[4x-\\frac{x^3}{3}]_0^2 = 2 \\cdot \\frac{16}{3} = \\frac{32}{3}$.'
          },
          {
            question: 'Find the area between $y = \\sin x$ and $y = 0$ on $[0, \\pi]$.',
            options: ['$2$', '$1$', '$\\pi$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\sin x \\geq 0$ on $[0,\\pi]$. $A = \\int_0^{\\pi}\\sin x\\,dx = [-\\cos x]_0^{\\pi} = 1+1 = 2$.'
          },
          {
            question: 'The area between $y = x$ and $y = x^2$ on $[0,1]$ is:',
            options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$'],
            correctAnswer: 0,
            explanation: '$x \\geq x^2$ on $[0,1]$. $A = \\int_0^1(x-x^2)\\,dx = [\\frac{x^2}{2}-\\frac{x^3}{3}]_0^1 = \\frac{1}{2}-\\frac{1}{3} = \\frac{1}{6}$.'
          }
        ]
      }
    },
    {
      id: 'area1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each setup.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Area between $y=x^3$ and $y=x$ on $[0,1]$. Top function:',
            options: ['$y = x$', '$y = x^3$', 'They are equal', 'Cannot determine'],
            correctAnswers: ['$y = x$'],
            hints: ['Test $x = 0.5$: $x = 0.5$ vs $x^3 = 0.125$.'],
            explanation: '$x > x^3$ on $(0,1)$, so $y=x$ is on top.'
          },
          {
            label: 'Curves $y=e^x$ and $y=1$ intersect at:',
            options: ['$x = 0$', '$x = 1$', '$x = e$', '$x = -1$'],
            correctAnswers: ['$x = 0$'],
            hints: ['Solve $e^x = 1$.'],
            explanation: '$e^x = 1 \\Rightarrow x = 0$.'
          },
          {
            label: 'If you compute $\\int_a^b[g(x)-f(x)]\\,dx$ and get $-5$, the area is:',
            options: ['$5$', '$-5$', '$0$', 'Undefined'],
            correctAnswers: ['$5$'],
            hints: ['Area is always positive. The negative sign means you subtracted in the wrong order.'],
            explanation: 'Area = $|{-5}| = 5$. The negative means $f$ was actually above $g$.'
          }
        ]
      }
    },
    {
      id: 'area1-input',
      type: 'input-box' as const,
      content: '**Compute.** \u270d\ufe0f',
      exercise: {
        question: 'Find the area between $y = 6x - x^2$ and $y = 0$.\n\n$A = ?$ (Enter an integer.)',
        correctAnswer: '36',
        acceptableAnswers: ['36'],
        hints: [
          'Find intersections: $6x-x^2=0 \\Rightarrow x(6-x)=0$.',
          '$A = \\int_0^6(6x-x^2)\\,dx$.',
          '$= [3x^2 - \\frac{x^3}{3}]_0^6 = 108 - 72$.'
        ],
        explanation: '$A = 108 - 72 = 36$.'
      }
    },
    {
      id: 'area1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

- Area = $\\int_a^b(\\text{top} - \\text{bottom})\\,dx$
- Find intersections first \u2192 these are your limits
- Test a point in the interval to determine which curve is on top
- Area is always positive \u2014 if you get a negative value, reverse the subtraction`
    }
  ]
};
