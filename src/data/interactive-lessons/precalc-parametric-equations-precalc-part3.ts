export const precalcParametricPart3Data = {
  topicSlug: 'parametric-equations-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 📏 Arc Length of Parametric Curves

**Part 3 of 7**

### The Arc Length Formula

For a smooth curve $x = f(t), \\; y = g(t)$ from $t = a$ to $t = b$:

$$L = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2} \\, dt$$

### Intuition

At each instant, the point moves by:
- $\\Delta x \\approx \\frac{dx}{dt}\\Delta t$ (horizontal)
- $\\Delta y \\approx \\frac{dy}{dt}\\Delta t$ (vertical)

By the Pythagorean theorem: $\\Delta s \\approx \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$

Summing up → the integral.
      `
    },
    {
      id: 'p3-examples',
      type: 'text' as const,
      content: `
## 📝 Example 1: Circle Circumference

$x = R\\cos t, \\; y = R\\sin t, \\; 0 \\leq t \\leq 2\\pi$

$\\frac{dx}{dt} = -R\\sin t, \\quad \\frac{dy}{dt} = R\\cos t$

$$L = \\int_0^{2\\pi}\\sqrt{R^2\\sin^2 t + R^2\\cos^2 t}\\,dt = \\int_0^{2\\pi}R\\,dt = 2\\pi R \\; ✓$$

## Example 2: Line Segment

$x = 1 + 3t, \\; y = 2 + 4t, \\; 0 \\leq t \\leq 1$

$\\frac{dx}{dt} = 3, \\quad \\frac{dy}{dt} = 4$

$$L = \\int_0^1 \\sqrt{9 + 16}\\,dt = \\int_0^1 5\\,dt = 5$$

This matches the distance formula: $\\sqrt{3^2 + 4^2} = 5$. ✓

## Example 3: $x = t^2, \\; y = t^3, \\; 0 \\leq t \\leq 1$

$$L = \\int_0^1\\sqrt{4t^2 + 9t^4}\\,dt = \\int_0^1 t\\sqrt{4+9t^2}\\,dt$$

Let $u = 4+9t^2$: $du = 18t\\,dt$

$$= \\frac{1}{18}\\int_4^{13}\\sqrt{u}\\,du = \\frac{1}{27}\\left[u^{3/2}\\right]_4^{13} = \\frac{13\\sqrt{13}-8}{27}$$
      `
    },
    {
      id: 'p3-speed',
      type: 'text' as const,
      content: `
## 🚀 Speed Along a Parametric Curve

The **speed** at time $t$ is the rate of change of arc length:

$$\\text{speed} = \\frac{ds}{dt} = \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}$$

### Example: Projectile Motion

$x = v_0 t, \\; y = h_0 + v_0 t - \\frac{1}{2}gt^2$

Speed: $\\sqrt{v_0^2 + (v_0 - gt)^2}$

At $t = 0$: speed $= \\sqrt{v_0^2 + v_0^2} = v_0\\sqrt{2}$

> 💡 **Key**: Speed is ALWAYS non-negative. It equals the magnitude of the velocity vector $(\\frac{dx}{dt}, \\frac{dy}{dt})$.
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Arc Length Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The arc length integral for $x = 3t, \\; y = 4t$ from $t = 0$ to $t = 2$ equals:',
            options: ['$7$', '$10$', '$14$', '$5$'],
            correctAnswer: 1,
            explanation: '$L = \\int_0^2\\sqrt{9+16}\\,dt = 5 \\cdot 2 = 10$.'
          },
          {
            question: 'For $x = \\cos(2t), \\; y = \\sin(2t)$, the speed is:',
            options: ['$1$', '$2$', '$4$', '$\\frac{1}{2}$'],
            correctAnswer: 1,
            explanation: 'Speed $= \\sqrt{4\\sin^2(2t)+4\\cos^2(2t)} = 2$. The point moves twice as fast as $x = \\cos t, y = \\sin t$.'
          },
          {
            question: 'The semicircle $x = 2\\cos t, \\; y = 2\\sin t$ for $0 \\leq t \\leq \\pi$ has arc length:',
            options: ['$2$', '$2\\pi$', '$4\\pi$', '$\\pi$'],
            correctAnswer: 1,
            explanation: 'Half of circumference $2\\pi(2) = 4\\pi$. Half = $2\\pi$.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Arc Length Calculations** 🧮

**1)** $x = 5t, \\; y = 12t$ from $t = 0$ to $t = 3$. Arc length = ?

**2)** The speed of a particle with $x = 3\\cos t, \\; y = 3\\sin t$ is constant at what value?

**3)** $x = t, \\; y = \\frac{2}{3}t^{3/2}$ from $t = 0$ to $t = 3$. The integrand $\\sqrt{1+t}$ gives $L = \\frac{2}{3}[u^{3/2}]_1^4$. Evaluate: $L$ = ? (Enter as a fraction like "14/3")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['39', '3', '14/3'],
        hint1: '$L = \\sqrt{25+144} \\cdot 3 = 13 \\cdot 3 = 39$.',
        hint2: 'Speed $= \\sqrt{9\\sin^2 t + 9\\cos^2 t} = 3$.',
        hint3: '$\\frac{2}{3}(4^{3/2}-1^{3/2}) = \\frac{2}{3}(8-1) = \\frac{14}{3}$.',
        explanation: '1) $L = 39$. 2) Speed = $3$. 3) $L = \\frac{14}{3}$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Arc Length Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arc length is always:',
            options: ['Positive', 'Non-negative', 'Depends on direction', 'Zero for closed curves'],
            correctAnswer: 1
          },
          {
            label: 'Doubling the speed parameter ($t \\to 2t$) does what to the curve?',
            options: ['Doubles the length', 'Same curve, traced faster', 'Different curve entirely'],
            correctAnswer: 1
          },
          {
            label: 'The arc length of $x = a\\cos t, y = b\\sin t$ ($a \\neq b$) requires:',
            options: ['Elementary integration', 'Elliptic integrals (no closed form)', 'Numerical methods only'],
            correctAnswer: 1
          },
          {
            label: 'If speed $= 0$ at some $t_0$, the curve has a potential:',
            options: ['Maximum', 'Cusp or stationary point', 'Inflection point'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Non-negative', 'Same curve, traced faster', 'Elliptic integrals (no closed form)', 'Cusp or stationary point'],
        hint1: 'Arc length $\\geq 0$ (it is $0$ if start = end with no movement).',
        hint2: 'Reparametrizing changes speed but not the geometric curve.',
        hint3: 'Ellipse arc length is a famous example requiring elliptic integrals.',
        explanation: 'Arc length ≥ 0. Speed change = reparametrization. Ellipse arclength needs elliptic integrals. Zero speed = cusp/stop.'
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
            question: 'The arc length of $x = t^2, \\; y = 2t$ from $t = 0$ to $t = 1$ involves the integral:',
            options: ['$\\int_0^1\\sqrt{4t^2+4}\\,dt$', '$\\int_0^1\\sqrt{t^2+4}\\,dt$', '$\\int_0^1(2t+2)\\,dt$', '$\\int_0^1\\sqrt{4t^4+4t^2}\\,dt$'],
            correctAnswer: 0,
            explanation: '$\\frac{dx}{dt} = 2t, \\; \\frac{dy}{dt} = 2$. Integrand: $\\sqrt{4t^2+4} = 2\\sqrt{t^2+1}$.'
          },
          {
            question: 'A particle with position $(\\cos 3t, \\sin 3t)$ travels at speed:',
            options: ['$1$', '$3$', '$9$', '$\\frac{1}{3}$'],
            correctAnswer: 1,
            explanation: 'Speed $= \\sqrt{9\\sin^2(3t)+9\\cos^2(3t)} = 3$.'
          }
        ]
      }
    }
  ]
};
