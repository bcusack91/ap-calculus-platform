export const precalcRatesOfChangePart1Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 📈 Average Rate of Change

**Part 1 of 7**

### What Is a Rate of Change?

A **rate of change** measures how fast one quantity changes relative to another.

$$\\text{Average Rate of Change} = \\frac{\\Delta y}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}$$

This is the **slope of the secant line** through $(a, f(a))$ and $(b, f(b))$.

### Familiar Examples

| Context | Rate of Change |
|:--------|:--------------|
| Distance/Time | Speed (mph) |
| Cost/Items | Price per item |
| Population/Year | Growth rate |
| Temperature/Hour | Cooling/heating rate |

### Connection to Slope

For a **linear function** $f(x) = mx + b$:
- The rate of change is **constant** = $m$
- Every secant line has the same slope

For **nonlinear functions**, the rate of change **varies** depending on the interval.
      `
    },
    {
      id: 'p1-examples',
      type: 'text' as const,
      content: `
## Worked Examples

### Example 1: Polynomial

$f(x) = x^2$. Average rate of change on $[1, 4]$:

$$\\frac{f(4) - f(1)}{4 - 1} = \\frac{16 - 1}{3} = \\frac{15}{3} = 5$$

The secant line through $(1,1)$ and $(4,16)$ has slope 5.

### Example 2: Square Root

$g(x) = \\sqrt{x}$. Average rate of change on $[4, 9]$:

$$\\frac{\\sqrt{9} - \\sqrt{4}}{9 - 4} = \\frac{3 - 2}{5} = \\frac{1}{5} = 0.2$$

### Example 3: Word Problem

A ball's height is $h(t) = -16t^2 + 64t$ feet at time $t$ seconds.

Average velocity from $t = 1$ to $t = 3$:
$$\\frac{h(3) - h(1)}{3-1} = \\frac{(-16(9)+192) - (-16+64)}{2} = \\frac{48 - 48}{2} = 0 \\text{ ft/s}$$

The ball returns to the same height — zero average velocity!
      `
    },
    {
      id: 'p1-secant',
      type: 'text' as const,
      content: `
## Secant Lines

### Drawing a Secant Line

The secant line through $(a, f(a))$ and $(b, f(b))$ has equation:

$$y - f(a) = \\frac{f(b)-f(a)}{b-a}(x - a)$$

### Decreasing Intervals

If $f(b) < f(a)$ when $b > a$, the AROC is **negative** — the secant slopes downward.

### Example: Finding a Secant Equation

$f(x) = x^3$, points $(1,1)$ and $(2,8)$:

- Slope: $\\frac{8-1}{2-1} = 7$
- Equation: $y - 1 = 7(x - 1) \\Rightarrow y = 7x - 6$

### Multiple Intervals Show Changing Rates

For $f(x) = x^2$:
- On $[0,1]$: AROC = $1$
- On $[1,2]$: AROC = $3$
- On $[2,3]$: AROC = $5$

The rate itself is increasing — the function curves upward faster and faster.
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Average Rate of Change Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'AROC of $f(x)=x^2$ on $[2,5]$:',
            options: ['$5$', '$7$', '$3$', '$21$'],
            correctAnswer: 1,
            explanation: '$\\frac{25- 4}{5-2} = \\frac{21}{3} = 7$.'
          },
          {
            question: 'The average rate of change is the slope of:',
            options: ['Tangent line', 'Secant line', 'Normal line', 'Horizontal line'],
            correctAnswer: 1,
            explanation: 'AROC = slope of secant line connecting two points on the curve.'
          },
          {
            question: 'For a linear function, the AROC on any interval is:',
            options: ['Zero', 'Varies', 'Constant (= slope)', 'Undefined'],
            correctAnswer: 2,
            explanation: 'Linear functions have constant rate of change equal to the slope $m$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Compute the AROC:**

**1)** $f(x) = 3x + 2$ on $[1, 5]$:

**2)** $f(x) = x^2 - 1$ on $[0, 3]$:

**3)** $f(x) = \\frac{1}{x}$ on $[1, 4]$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '8/3', '-1/4'],
        hint1: 'Linear: AROC = slope = 3.',
        hint2: '$f(3) = 8, f(0) = -1$. $\\frac{8-(-1)}{3} = 3$.',
        hint3: '$f(4) = 1/4, f(1) = 1$. $\\frac{1/4-1}{3} = \\frac{-3/4}{3}$.',
        explanation: '(1) AROC = 3. (2) $\\frac{8-(-1)}{3} = 3$. (3) $\\frac{0.25-1}{3} = -0.25 = -1/4$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rates Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Negative AROC means the function is:',
            options: ['Increasing', 'Decreasing on that interval', 'Constant', 'Undefined'],
            correctAnswer: 1
          },
          {
            label: 'AROC of $f(x)=x^3$ on $[-1,1]$:',
            options: ['$0$', '$1$', '$2$', '$-1$'],
            correctAnswer: 1
          },
          {
            label: 'Units of AROC when distance is in miles, time in hours:',
            options: ['Miles', 'Hours', 'Miles per hour', 'Miles × hours'],
            correctAnswer: 2
          },
          {
            label: 'Average velocity is AROC of:',
            options: ['Velocity vs time', 'Position vs time', 'Acceleration vs time', 'Speed vs distance'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Decreasing on that interval', '$1$', 'Miles per hour', 'Position vs time'],
        hint1: 'Negative slope = going down.',
        hint2: '$\\frac{1-(-1)}{1-(-1)} = 2/2$.',
        hint3: 'Rate = output units / input units.',
        explanation: 'Negative AROC: decreasing. $x^3$: $(1-(-1))/(1-(-1))=1$. Distance/time=speed. AROC of position=velocity.'
      }
    },
    {
      id: 'p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'AROC of $f(x)=2^x$ on $[0,3]$:',
            options: ['$7/3$', '$8/3$', '$3$', '$8$'],
            correctAnswer: 0,
            explanation: '$f(3)=8, f(0)=1$. $\\frac{8-1}{3-0} = 7/3$.'
          },
          {
            question: 'If AROC = 0, it means:',
            options: ['$f$ is constant everywhere', '$f(a) = f(b)$ (same start/end)', 'Function is always zero', 'No secant line exists'],
            correctAnswer: 1,
            explanation: 'AROC = 0 means $f(b) = f(a)$ — same height at endpoints. Function may vary between.'
          }
        ]
      }
    }
  ]
};
