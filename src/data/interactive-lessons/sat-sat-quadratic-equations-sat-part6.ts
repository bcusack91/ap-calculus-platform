export const satQuadraticsPart6Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q6-intro',
      type: 'text' as const,
      content: `
# 🚀 Quadratic Word Problems

**Part 6 of 7 — Projectiles, Optimization & Area**

Quadratic word problems appear on every SAT. The three most common types:

| Type | Typical Equation | What You Find |
|------|-----------------|---------------|
| **Projectile motion** | $h(t) = -16t^2 + v_0 t + h_0$ | Max height, time to ground |
| **Optimization** | $P(x) = ax^2 + bx + c$ | Maximum or minimum value |
| **Area** | $A = x(d - 2x)$ | Dimensions that maximize area |

**Key Physics Fact:** Near Earth's surface, gravity pulls objects down at $16$ ft/s² (or $4.9$ m/s²). The model $h = -16t^2 + v_0 t + h_0$ uses **feet and seconds**.

| Variable | Meaning |
|----------|---------|
| $h$ | Height at time $t$ |
| $-16$ | Gravity (in ft/s²) |
| $v_0$ | Initial upward velocity |
| $h_0$ | Initial height |
      `
    },
    {
      id: 'sat-q6-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is launched upward from ground level at 64 ft/s. Its height is $h(t) = -16t^2 + 64t$. What is the maximum height?',
            options: [
              '$32$ feet',
              '$64$ feet',
              '$128$ feet',
              '$48$ feet'
            ],
            correctAnswer: 1,
            explanation: 'Max height occurs at vertex: $t = -64/(2 \\cdot -16) = 2$ seconds. $h(2) = -16(4) + 64(2) = -64 + 128 = 64$ feet.'
          },
          {
            question: 'In $h(t) = -16t^2 + 48t + 5$, what does the $5$ represent?',
            options: [
              'Maximum height',
              'Time to reach max height',
              'Initial height above ground',
              'Initial velocity'
            ],
            correctAnswer: 2,
            explanation: 'In $h = -16t^2 + v_0 t + h_0$, the constant $h_0 = 5$ is the **initial height** — the height at $t = 0$. Check: $h(0) = 0 + 0 + 5 = 5$.'
          }
        ]
      }
    },
    {
      id: 'sat-q6-projectile',
      type: 'text' as const,
      content: `
**Projectile Problem — Complete Walkthrough**

A rocket is launched from the top of a 100-foot building with an initial velocity of 80 ft/s. Its height is: $$h(t) = -16t^2 + 80t + 100$$

**Q1: When does it reach maximum height?**

$t = -\\frac{80}{2(-16)} = \\frac{80}{32} = 2.5$ seconds

**Q2: What is the maximum height?**

$h(2.5) = -16(6.25) + 80(2.5) + 100 = -100 + 200 + 100 = 200$ feet

**Q3: When does it hit the ground?** (Set $h = 0$)

$-16t^2 + 80t + 100 = 0 \\Rightarrow 16t^2 - 80t - 100 = 0 \\Rightarrow 4t^2 - 20t - 25 = 0$

Quadratic formula: $t = \\frac{20 \\pm \\sqrt{400 + 400}}{8} = \\frac{20 \\pm 20\\sqrt{2}}{8} = \\frac{5 \\pm 5\\sqrt{2}}{2}$

Only the positive root: $t = \\frac{5 + 5\\sqrt{2}}{2} \\approx 6.04$ seconds.

**SAT Tip:** "Hits the ground" means $h = 0$. "Maximum height" means find the vertex.
      `
    },
    {
      id: 'sat-q6-practice',
      type: 'input-boxes' as const,
      content: `
**Solve each word problem.** 🧮

1) $h(t) = -16t^2 + 96t$. At what time (in seconds) does the object reach max height?

2) Using the same equation, what is the maximum height in feet?

3) A rectangle's length is $(20 - 2w)$ and width is $w$. The area $A = w(20-2w) = -2w^2 + 20w$. What width $w$ maximizes the area?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '144', '5'],
        hint1: '$t = -96/(2 \\times -16) = 96/32$.',
        hint2: '$h(3) = -16(9) + 96(3) = -144 + 288$.',
        hint3: 'Vertex of $A = -2w^2 + 20w$: $w = -20/(2 \\times -2) = 20/4$.',
        explanation: '1) $t = 3$ s. 2) $h(3) = 144$ ft. 3) $w = 5$. Area = $-2(25)+100 = 50$ sq units.'
      }
    },
    {
      id: 'sat-q6-optimization',
      type: 'text' as const,
      content: `
**Optimization — Maximizing Revenue, Minimizing Cost**

**Classic SAT Problem:** A store sells shirts at \\$20 each, selling 100/day. For every \\$1 price increase, sales drop by 5.

Let $x$ = number of \\$1 increases. Then:
- Price = $20 + x$
- Daily sales = $100 - 5x$
- Revenue = $(20 + x)(100 - 5x) = -5x^2 + 0x + 2000$

Wait — let's expand carefully:
$$R(x) = (20+x)(100-5x) = 2000 - 100x + 100x - 5x^2 = -5x^2 + 2000$$

Hmm, the $x$ terms canceled! So $R = -5x^2 + 2000$, which is maximized at $x = 0$. The current price ($\\$20$) already maximizes revenue.

---

**More typical version:** Price $= 20 + x$, sales $= 100 - 4x$:
$$R = (20+x)(100-4x) = 2000 - 80x + 100x - 4x^2 = -4x^2 + 20x + 2000$$

Vertex: $x = -20/(2 \\cdot -4) = 2.5$. Optimal price: $\\$22.50$, selling 90 shirts.

**SAT Tip:** Set up the revenue equation, expand, then find the vertex.
      `
    },
    {
      id: 'sat-q6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each question to the correct approach.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When does a ball hit the ground?',
            options: ['Set $h(t) = 0$ and solve', 'Find vertex $t$-coordinate', 'Find the discriminant', 'Take the derivative']
          },
          {
            label: 'What is the maximum height of a projectile?',
            options: ['Set $h(t) = 0$ and solve', 'Find vertex $y$-coordinate', 'Set $t = 0$', 'Find the discriminant']
          },
          {
            label: 'What dimensions maximize the area of a rectangle with fixed perimeter?',
            options: ['Set area = 0', 'Find vertex of area function', 'Use the quadratic formula', 'Find the discriminant']
          }
        ],
        correctAnswers: ['Set $h(t) = 0$ and solve', 'Find vertex $y$-coordinate', 'Find vertex of area function'],
        hint1: '"Hits the ground" means height = 0.',
        hint2: 'Maximum height is the highest point — that\'s the vertex.',
        hint3: 'Maximizing area means finding the vertex of the area quadratic.',
        explanation: 'Ground → set $h=0$. Max height → vertex y-value. Max area → vertex of $A(w)$.'
      }
    },
    {
      id: 'sat-q6-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A farmer has 120 feet of fencing to enclose a rectangular garden against a barn wall (3 sides fenced). If the width is $w$ feet, the area is $A = w(120 - 2w)$. What is the maximum area?',
            options: [
              '$1600$ sq ft',
              '$1800$ sq ft',
              '$3600$ sq ft',
              '$900$ sq ft'
            ],
            correctAnswer: 1,
            explanation: '$A = -2w^2 + 120w$. Vertex: $w = -120/(2 \\times -2) = 30$. Max area: $A(30) = 30(120-60) = 30 \\times 60 = 1800$ sq ft.'
          },
          {
            question: 'A ball thrown upward has height $h(t) = -16t^2 + 32t + 48$. How many seconds until it hits the ground?',
            options: [
              '$1$ second',
              '$2$ seconds',
              '$3$ seconds',
              '$4$ seconds'
            ],
            correctAnswer: 2,
            explanation: 'Set $h = 0$: $-16t^2 + 32t + 48 = 0$. Divide by $-16$: $t^2 - 2t - 3 = 0$. Factor: $(t-3)(t+1) = 0$. Since $t > 0$, $t = 3$ seconds.'
          }
        ]
      }
    }
  ]
}
