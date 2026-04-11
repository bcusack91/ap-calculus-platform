export const precalcRatesOfChangePart3Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 📐 Secant Lines to Tangent Lines

**Part 3 of 7**

### The Visual Story

As the two points on a curve get **closer together**, the secant line **rotates** toward the tangent line:

1. Secant through $(a, f(a))$ and $(b, f(b))$ — wide interval
2. Move $b$ closer to $a$ — secant rotates
3. In the **limit** as $b \\to a$ — secant BECOMES the tangent

$$\\text{Tangent slope} = \\lim_{h \\to 0}\\frac{f(a+h) - f(a)}{h}$$

### Why This Matters

The tangent line gives the **best linear approximation** to the curve at a point. It tells you:
- The **direction** the curve is heading
- The **instantaneous rate** of change
- Whether the function is **increasing or decreasing** at that point
      `
    },
    {
      id: 'p3-tangent',
      type: 'text' as const,
      content: `
## Finding Tangent Lines

### Process

1. Compute $f'(a) = \\lim_{h \\to 0}\\frac{f(a+h)-f(a)}{h}$ (the slope)
2. Use point-slope form: $y - f(a) = f'(a)(x - a)$

### Example: Tangent to $f(x)=x^2$ at $x=3$

**Slope**: From the difference quotient, $f'(x) = 2x$, so $f'(3) = 6$.

**Point**: $(3, 9)$.

**Tangent**: $y - 9 = 6(x - 3) \\Rightarrow y = 6x - 9$

### Example: Tangent to $f(x)=\\sqrt{x}$ at $x=4$

DQ: $\\frac{\\sqrt{x+h}-\\sqrt{x}}{h} \\cdot \\frac{\\sqrt{x+h}+\\sqrt{x}}{\\sqrt{x+h}+\\sqrt{x}} = \\frac{1}{\\sqrt{x+h}+\\sqrt{x}}$

As $h \\to 0$: slope $= \\frac{1}{2\\sqrt{x}}$. At $x=4$: slope $= \\frac{1}{4}$.

**Tangent**: $y - 2 = \\frac{1}{4}(x-4) \\Rightarrow y = \\frac{x}{4} + 1$
      `
    },
    {
      id: 'p3-approx',
      type: 'text' as const,
      content: `
## Linear Approximation Preview

### Using the Tangent Line to Estimate

Near $x = a$, the tangent line approximates $f$:

$$f(x) \\approx f(a) + f'(a)(x - a)$$

### Example

Estimate $\\sqrt{4.1}$ using tangent to $\\sqrt{x}$ at $x=4$:

$$\\sqrt{4.1} \\approx 2 + \\frac{1}{4}(4.1 - 4) = 2 + 0.025 = 2.025$$

Actual: $\\sqrt{4.1} = 2.02485...$  Error: $0.00015$!

### Secant Line Approximation (Less Accurate)

Using the secant through $(4,2)$ and $(9,3)$:

$$\\text{slope} = \\frac{3-2}{9-4} = 0.2$$

Estimate: $2 + 0.2(0.1) = 2.02$ — less accurate than the tangent estimate.

This is why **instantaneous** rates beat **average** rates for local estimation.
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Secant → Tangent Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The tangent line at $x=a$ is the limit of:',
            options: ['Horizontal lines', 'Vertical lines', 'Secant lines as second point → $a$', 'Normal lines'],
            correctAnswer: 2,
            explanation: 'As the second point approaches $a$, the secant becomes the tangent.'
          },
          {
            question: 'Tangent to $f(x)=x^2$ at $x=1$ has slope:',
            options: ['$1$', '$2$', '$3$', '$0$'],
            correctAnswer: 1,
            explanation: 'DQ limit gives $f\'(x) = 2x$. At $x=1$: slope = $2$.'
          },
          {
            question: 'The tangent at a maximum has slope:',
            options: ['Positive', 'Negative', '$0$', 'Undefined'],
            correctAnswer: 2,
            explanation: 'At a local max, the function momentarily stops increasing — tangent is horizontal (slope 0).'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Find tangent line components:**

**1)** $f(x) = x^2$, at $x = 5$. Tangent slope = ?

**2)** $f(x) = x^3$, at $x = 1$. Tangent slope (DQ limit: $3x^2$) = ?

**3)** Using tangent to $x^2$ at $x=3$: estimate $f(3.1)$ ≈ ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '3', '9.6'],
        hint1: 'Slope = $2x = 2(5) = 10$.',
        hint2: 'Slope = $3x^2 = 3(1) = 3$.',
        hint3: '$f(3)=9$, slope=$6$: $9 + 6(0.1) = 9.6$.',
        explanation: '(1) $2(5) = 10$. (2) $3(1)^2 = 3$. (3) $f(3) + f\'(3)(0.1) = 9 + 0.6 = 9.6$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Tangent Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tangent line touches the curve at:',
            options: ['Two points', 'Exactly one point (locally)', 'No points', 'All points'],
            correctAnswer: 1
          },
          {
            label: 'If tangent slope > 0, the function is locally:',
            options: ['Decreasing', 'Increasing', 'Constant', 'Undefined'],
            correctAnswer: 1
          },
          {
            label: 'Linear approximation is most accurate:',
            options: ['Far from the point', 'Close to the tangent point', 'At infinity', 'At discontinuities'],
            correctAnswer: 1
          },
          {
            label: 'The tangent to a linear function is:',
            options: ['A point', 'The function itself', 'Perpendicular', 'Undefined'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Exactly one point (locally)', 'Increasing', 'Close to the tangent point', 'The function itself'],
        hint1: 'Locally, the tangent just "touches."',
        hint2: 'Positive slope = going up.',
        hint3: 'Tangent approximation degrades with distance.',
        explanation: 'Tangent touches locally at one point. Positive slope → increasing. Near point → good approximation. Line\'s tangent = itself.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Tangent to $f(x) = x^2 + 1$ at $x=2$: equation?',
            options: ['$y = 4x - 3$', '$y = 4x + 1$', '$y = 2x + 1$', '$y = 4x - 5$'],
            correctAnswer: 0,
            explanation: '$f(2) = 5, f\'(2) = 4$. $y - 5 = 4(x-2) \\Rightarrow y = 4x - 3$.'
          },
          {
            question: 'What does a steeper tangent line indicate?',
            options: ['Slower change', 'Faster rate of change', 'No change', 'Discontinuity'],
            correctAnswer: 1,
            explanation: 'Steeper tangent = larger |slope| = faster instantaneous rate of change.'
          }
        ]
      }
    }
  ]
};
