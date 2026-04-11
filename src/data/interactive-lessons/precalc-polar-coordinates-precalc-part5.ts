export const precalcPolarPart5Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 📐 Area in Polar Coordinates

**Part 5 of 7**

### The Polar Area Formula

To find the area enclosed by a polar curve $r = f(\\theta)$ from $\\theta = \\alpha$ to $\\theta = \\beta$:

$$A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2 \\, d\\theta = \\frac{1}{2}\\int_{\\alpha}^{\\beta} [f(\\theta)]^2 \\, d\\theta$$

### Why $\\frac{1}{2}r^2$?

Think of thin "pie slices" of angle $d\\theta$. Each slice is approximately a sector of a circle with area $\\frac{1}{2}r^2 d\\theta$.

### Key Setup Steps

1. **Identify the limits** $\\alpha$ and $\\beta$ carefully
2. **For a full curve**, determine the period (e.g., a rose may complete in $[0, \\pi]$ or $[0, 2\\pi]$)
3. **Use symmetry** to simplify: compute part and multiply
      `
    },
    {
      id: 'p5-example',
      type: 'text' as const,
      content: `
## 📝 Example: Area Inside a Cardioid $r = 1 + \\cos\\theta$

The full cardioid is traced from $\\theta = 0$ to $\\theta = 2\\pi$.

$$A = \\frac{1}{2}\\int_0^{2\\pi}(1+\\cos\\theta)^2\\,d\\theta$$

Expand: $(1+\\cos\\theta)^2 = 1 + 2\\cos\\theta + \\cos^2\\theta$

Use $\\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}$:

$$= 1 + 2\\cos\\theta + \\frac{1}{2} + \\frac{\\cos 2\\theta}{2} = \\frac{3}{2} + 2\\cos\\theta + \\frac{\\cos 2\\theta}{2}$$

$$A = \\frac{1}{2}\\int_0^{2\\pi}\\left(\\frac{3}{2} + 2\\cos\\theta + \\frac{\\cos 2\\theta}{2}\\right)d\\theta$$

$$= \\frac{1}{2}\\left[\\frac{3}{2}\\theta + 2\\sin\\theta + \\frac{\\sin 2\\theta}{4}\\right]_0^{2\\pi} = \\frac{1}{2}\\left(\\frac{3}{2}\\cdot 2\\pi\\right) = \\frac{3\\pi}{2}$$

> **Shortcut**: By symmetry about the polar axis, we could compute $2 \\cdot \\frac{1}{2}\\int_0^{\\pi}(1+\\cos\\theta)^2\\,d\\theta$, getting the same answer.
      `
    },
    {
      id: 'p5-between',
      type: 'text' as const,
      content: `
## 🔄 Area Between Polar Curves

For the area inside $r_1 = f(\\theta)$ and outside $r_2 = g(\\theta)$ (where $f(\\theta) \\geq g(\\theta)$):

$$A = \\frac{1}{2}\\int_{\\alpha}^{\\beta}\\left([f(\\theta)]^2 - [g(\\theta)]^2\\right)d\\theta$$

**Example**: Area inside $r = 2$ but outside $r = 2(1 - \\cos\\theta)$.

Find intersections: $2 = 2(1-\\cos\\theta) \\implies \\cos\\theta = 0 \\implies \\theta = \\pm\\frac{\\pi}{2}$

By symmetry (both curves are symmetric about polar axis):

$$A = 2 \\cdot \\frac{1}{2}\\int_0^{\\pi/2}\\left(4 - 4(1-\\cos\\theta)^2\\right)d\\theta$$

Carefully evaluate: $4 - 4(1-2\\cos\\theta+\\cos^2\\theta) = 8\\cos\\theta - 4\\cos^2\\theta$

This yields $A = 8 - \\pi$ after integration.

> ⚠️ **Common Mistake**: Always check which curve is "outer" vs "inner" on the integration interval!
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Area Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The area enclosed by the circle $r = 3$ is:',
            options: ['$\\frac{9\\pi}{2}$', '$9\\pi$', '$3\\pi$', '$6\\pi$'],
            correctAnswer: 1,
            explanation: '$A = \\frac{1}{2}\\int_0^{2\\pi}9\\,d\\theta = \\frac{9}{2}(2\\pi) = 9\\pi$.'
          },
          {
            question: 'The area of one petal of $r = \\sin(2\\theta)$ uses limits:',
            options: ['$[0, 2\\pi]$', '$[0, \\pi]$', '$[0, \\frac{\\pi}{2}]$', '$[0, \\frac{\\pi}{4}]$'],
            correctAnswer: 2,
            explanation: 'One petal of $r = \\sin(2\\theta)$ is traced from $\\theta = 0$ to $\\theta = \\frac{\\pi}{2}$ (when $\\sin(2\\theta)$ goes from $0$ back to $0$).'
          },
          {
            question: 'To find the area inside $r = 2\\cos\\theta$, the correct integral is:',
            options: ['$\\frac{1}{2}\\int_0^{2\\pi}4\\cos^2\\theta\\,d\\theta$', '$\\frac{1}{2}\\int_0^{\\pi}4\\cos^2\\theta\\,d\\theta$', '$\\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2}4\\cos^2\\theta\\,d\\theta$', '$\\int_0^{\\pi}2\\cos\\theta\\,d\\theta$'],
            correctAnswer: 2,
            explanation: 'The circle $r = 2\\cos\\theta$ is traced for $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ (where $r \\geq 0$).'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Set Up Area Integrals** 🧮

**1)** Area inside $r = 4\\sin\\theta$. This is a circle of diameter 4. Its area = ? (Enter as a multiple of $\\pi$, like "4pi")

**2)** One petal of $r = 3\\cos(3\\theta)$: first petal from $\\theta = 0$ to $\\theta = $ ? (Enter as a fraction of pi, like "pi/3")

**3)** Area of one petal of $r = 2\\sin(2\\theta)$: $A = \\frac{1}{2}\\int_0^{\\pi/2} 4\\sin^2(2\\theta)\\,d\\theta = $ ? (Enter as a multiple of $\\pi$, like "pi/2")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4pi', 'pi/6', 'pi/2'],
        hint1: '$r = 4\\sin\\theta$ is a circle with diameter 4, so radius 2, area $\\pi(2)^2 = 4\\pi$.',
        hint2: 'Rose $r = a\\cos(n\\theta)$ with odd $n$: petals occur in intervals of $\\frac{\\pi}{n}$. First petal: $[-\\frac{\\pi}{6}, \\frac{\\pi}{6}]$, so half-width is $\\frac{\\pi}{6}$.',
        hint3: '$\\frac{1}{2}\\int_0^{\\pi/2}4\\sin^2(2\\theta)\\,d\\theta = 2\\int_0^{\\pi/2}\\frac{1-\\cos(4\\theta)}{2}\\,d\\theta = \\int_0^{\\pi/2}(1-\\cos 4\\theta)\\,d\\theta = \\frac{\\pi}{2}$.',
        explanation: '1) Circle area $= 4\\pi$. 2) First petal ends at $\\theta = \\frac{\\pi}{6}$. 3) $A = \\frac{\\pi}{2}$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Area Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The polar area element is:',
            options: ['$r\\,dr\\,d\\theta$', '$\\frac{1}{2}r^2\\,d\\theta$', '$r\\,d\\theta$', '$\\pi r^2\\,d\\theta$'],
            correctAnswer: 1
          },
          {
            label: 'For a rose $r = a\\sin(n\\theta)$ with even $n$, total area =',
            options: ['$n \\times$ (one petal area)', '$2n \\times$ (one petal area)', '$\\frac{\\pi a^2}{4}$'],
            correctAnswer: 1
          },
          {
            label: 'The circle $r = 6\\cos\\theta$ has center at:',
            options: ['$(3, 0)$', '$(0, 3)$', '$(6, 0)$', 'Origin'],
            correctAnswer: 0
          },
          {
            label: 'To find enclosed area, $r$ must be:',
            options: ['Always positive', 'Squared (so sign does not matter)', 'Always increasing'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['$\\frac{1}{2}r^2\\,d\\theta$', '$2n \\times$ (one petal area)', '$(3, 0)$', 'Squared (so sign does not matter)'],
        hint1: 'Sector of a circle: $\\frac{1}{2}r^2 \\Delta\\theta$.',
        hint2: 'Even $n$ gives $2n$ petals.',
        hint3: '$r = 6\\cos\\theta \\implies x^2+y^2 = 6x \\implies (x-3)^2+y^2 = 9$.',
        explanation: 'Area element: $\\frac{1}{2}r^2 d\\theta$. Even $n$ roses have $2n$ petals. Circle $r = 6\\cos\\theta$ centered at $(3,0)$. Squaring $r$ makes sign irrelevant.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The total area enclosed by $r = \\sin(2\\theta)$ (all 4 petals) is:',
            options: ['$\\frac{\\pi}{8}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$\\pi$'],
            correctAnswer: 2,
            explanation: 'One petal: $\\frac{1}{2}\\int_0^{\\pi/2}\\sin^2(2\\theta)\\,d\\theta = \\frac{\\pi}{8}$. Four petals: $4 \\cdot \\frac{\\pi}{8} = \\frac{\\pi}{2}$.'
          },
          {
            question: 'In the formula $A = \\frac{1}{2}\\int_{\\alpha}^{\\beta}(r_1^2 - r_2^2)\\,d\\theta$, $r_1$ represents:',
            options: ['The inner curve', 'The outer curve', 'The leftmost curve', 'Either curve'],
            correctAnswer: 1,
            explanation: '$r_1$ is the outer (farther from origin) curve, $r_2$ is the inner curve.'
          }
        ]
      }
    }
  ]
};
