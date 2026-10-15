export const precalcParametricPart7Data = {
  topicSlug: 'parametric-equations-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🧩 Parametric Equations — Full Synthesis

**Part 7 of 7**

### Complete Skill Set

| Topic | Key Idea |
|:------|:---------|
| Parametrization | $x = f(t), y = g(t)$; direction from increasing $t$ |
| Eliminating $t$ | Solve for $t$, use identities ($\\sin^2+\\cos^2=1$, etc.) |
| Slope | $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ |
| Second derivative | $\\frac{d^2y}{dx^2} = \\frac{(d/dt)(dy/dx)}{dx/dt}$ |
| Arc length | $L = \\int\\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt$ |
| Speed | $\\frac{ds}{dt} = \\sqrt{(dx/dt)^2+(dy/dt)^2}$ |
| Projectile | $x = v_0\\cos\\alpha\\cdot t, \\; y = h_0 + v_0\\sin\\alpha\\cdot t - \\frac{g}{2}t^2$ |
| Special curves | Cycloid, astroid, Lissajous, involute |
      `
    },
    {
      id: 'p7-strategy',
      type: 'text' as const,
      content: `
## 🎓 Problem-Solving Flowchart

### Given parametric equations, find...

**Cartesian equation?** → Eliminate $t$ (algebraic or trig identity)
- Don't forget domain restrictions!

**Slope at a point?** → $\\frac{dy/dt}{dx/dt}$ at that $t$ value

**Horizontal tangent?** → $dy/dt = 0$ (and $dx/dt \\neq 0$)

**Vertical tangent?** → $dx/dt = 0$ (and $dy/dt \\neq 0$)

**Arc length?** → $\\int\\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$

**Concavity?** → Compute $\\frac{d^2y}{dx^2}$ using the parametric formula

### Common Mistakes
- Forgetting that eliminating $t$ may lose domain information
- Using $\\frac{d^2y}{dx^2} = \\frac{d^2y/dt^2}{d^2x/dt^2}$ (WRONG!)
- Not checking $dx/dt \\neq 0$ for horizontal tangents
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $x = 2\\sin t, \\; y = 3\\cos t$, the slope at $t = \\frac{\\pi}{6}$ is:',
            options: ['$-\\frac{3\\sqrt{3}}{2}$', '$-\\frac{\\sqrt{3}}{2}$', '$\\frac{3}{2\\sqrt{3}}$', '$-\\frac{3}{2\\sqrt{3}}$'],
            correctAnswer: 3,
            explanation: '$\\frac{dy}{dx} = \\frac{-3\\sin t}{2\\cos t} = -\\frac{3}{2}\\tan t$. At $t = \\frac{\\pi}{6}$: $-\\frac{3}{2} \\cdot \\frac{1}{\\sqrt{3}} = -\\frac{3}{2\\sqrt{3}}$.'
          },
          {
            question: 'The curve $x = 2+t, \\; y = 1+t^2$ is:',
            options: ['A straight line through $(2, 1)$', 'A parabola opening up', 'A parabola opening right', 'A circle centered at $(2, 1)$'],
            correctAnswer: 1,
            explanation: '$t = x-2$, so $y = 1+(x-2)^2$. Parabola opening upward with vertex at $(2, 1)$.'
          },
          {
            question: 'Arc length of $x = 3\\cos t, \\; y = 4\\sin t$ from $t=0$ to $t=2\\pi$ is computed as:',
            options: ['$2\\pi \\cdot 3 = 6\\pi$', '$2\\pi \\cdot 4 = 8\\pi$', '$2\\pi \\cdot 5 = 10\\pi$', 'An elliptic integral'],
            correctAnswer: 3,
            explanation: 'This is an ellipse ($a \\neq b$). Its perimeter requires an elliptic integral — there is no closed form.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

**1)** $x = t^2, y = t^3$. Find $\\frac{dy}{dx}$ at $t = 2$. (whole number)

**2)** $x = 5t, y = 12t$ from $t = 0$ to $t = 4$. Arc length = ?

**3)** Cycloid $x = 4(t-\\sin t), y = 4(1-\\cos t)$. Arc length of one arch ($8a$) = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '52', '32'],
        hint1: '$\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}$. At $t=2$: $\\frac{3(2)}{2} = 3$.',
        hint2: '$L = \\sqrt{25+144} \\cdot 4 = 13 \\cdot 4 = 52$.',
        hint3: '$8 \\times 4 = 32$.',
        explanation: '1) Slope = $3$. 2) $L = 52$. 3) $L = 32$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Final Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x = t, y = t$ and $x = t^3, y = t^3$ describe:',
            options: ['Different curves', 'Same line, different speeds', 'Same line, same speed'],
            correctAnswer: 1
          },
          {
            label: 'The correct formula for $\\frac{d^2y}{dx^2}$ parametrically is:',
            options: ['$\\frac{y\'\'(t)}{x\'\'(t)}$', '$\\frac{(d/dt)(y\'/x\')}{x\'(t)}$', '$\\frac{x\'y\'\'-y\'x\'\'}{(x\')^2}$'],
            correctAnswer: 1
          },
          {
            label: 'A curve with $dx/dt = 0$ and $dy/dt = 0$ at $t_0$ has:',
            options: ['A horizontal tangent, since $dy/dt = 0$', 'A vertical tangent, since $dx/dt = 0$', 'An indeterminate slope that needs more analysis'],
            correctAnswer: 2
          },
          {
            label: 'To find where two parametric curves intersect:',
            options: ['Solve $x_1(s)=x_2(t)$ and $y_1(s)=y_2(t)$', 'Solve $x_1(t)=x_2(t)$ and $y_1(t)=y_2(t)$', 'Set the slopes $\\frac{dy}{dx}$ of both curves equal'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Same line, different speeds', '$\\frac{(d/dt)(y\'/x\')}{x\'(t)}$', 'An indeterminate slope that needs more analysis', 'Solve $x_1(s)=x_2(t)$ and $y_1(s)=y_2(t)$'],
        hint1: 'Both give $y = x$, but $(t^3)$ moves slower near $t = 0$.',
        hint2: 'Chain rule: $\\frac{d}{dx}(dy/dx) = \\frac{(d/dt)(dy/dx)}{dx/dt}$.',
        hint3: 'Both rates zero → the slope is the indeterminate form $\\frac{0}{0}$; the point could be a cusp or even a smooth point, so analyze further.',
        explanation: 'Same curve, different parametrization speed. Use chain rule formula. Both zero: indeterminate slope that needs more analysis. Intersection: solve $x_1(s)=x_2(t)$, $y_1(s)=y_2(t)$ (the parameter values may differ).'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Final** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $x = e^t, y = e^{-t}$, eliminating $t$ gives:',
            options: ['$y = \\frac{1}{x}$ for $x > 0$', '$y = -x$ for $x > 0$', '$xy = 0$ for $x > 0$', '$y = e^{-x}$ for $x > 0$'],
            correctAnswer: 0,
            explanation: '$xy = e^t \\cdot e^{-t} = e^0 = 1$, so $y = \\frac{1}{x}$. Since $x = e^t > 0$: right branch of hyperbola. Treating $e^{-t}$ as $-e^t$ gives $y = -x$, and taking $e^0$ as $0$ gives $xy = 0$.'
          },
          {
            question: 'The speed of a particle with $x = 4\\cos(3t), y = 4\\sin(3t)$ is:',
            options: ['$4$', '$12$', '$3$', '$16$'],
            correctAnswer: 1,
            explanation: 'Speed $= \\sqrt{(-12\\sin 3t)^2+(12\\cos 3t)^2} = 12$.'
          }
        ]
      }
    }
  ]
};
