export const satQuadraticsPart5Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe5-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 5 of 7 — Quadratic Word Problems**

### Projectile Motion

The SAT's classic quadratic word problem:

$$h(t) = -16t^2 + v_0 t + h_0$$

- $h_0$ = initial height (y-intercept)
- $v_0$ = initial velocity
- $-16$ accounts for gravity (in feet; use $-4.9$ for meters)

**"When does it hit the ground?"** → Set $h(t) = 0$
**"What is the maximum height?"** → Find the vertex

---

### Worked Example 1

**A ball is thrown upward from a 4-foot platform at 48 ft/s. Its height is $h(t) = -16t^2 + 48t + 4$.**

| Question | Method | Answer |
|----------|--------|--------|
| Initial height? | $h(0) = 4$ | $4$ feet |
| Max height? | Vertex: $t = -48/(2(-16)) = 1.5$ | $h(1.5) = -16(2.25) + 72 + 4 = 40$ ft |
| When hits ground? | $-16t^2 + 48t + 4 = 0$ → quadratic formula | $t \\approx 3.08$ seconds |

### Area Problems

"The length of a rectangle is 3 more than its width. The area is 40. Find the dimensions."

Let width $= w$. Then $w(w + 3) = 40$ → $w^2 + 3w - 40 = 0$ → $(w + 8)(w - 5) = 0$

Width $= 5$ (reject $-8$), length $= 8$.`
    },
    {
      id: 'qe5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Projectile & Area Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A ball is launched upward with $h(t) = -16t^2 + 64t + 5$. What is the maximum height?',
            options: ['$69$ feet', '$64$ feet', '$5$ feet', '$80$ feet'],
            correctAnswer: 0,
            explanation: 'Vertex at $t = -64/(2 \\cdot (-16)) = 2$. $h(2) = -16(4) + 64(2) + 5 = -64 + 128 + 5 = 69$ feet.'
          },
          {
            question: 'A square garden has side length $x$. Adding 3 feet to the length and 2 feet to the width gives area 56 sq ft. What is $x$?',
            options: ['$5$', '$6$', '$4$', '$7$'],
            correctAnswer: 0,
            explanation: '$(x + 3)(x + 2) = 56$ → $x^2 + 5x + 6 = 56$ → $x^2 + 5x - 50 = 0$ → $(x + 10)(x - 5) = 0$ → $x = 5$.'
          },
          {
            question: 'When does the ball from $h(t) = -16t^2 + 48t$ hit the ground (after launch)?',
            options: ['$t = 3$ seconds', '$t = 4$ seconds', '$t = 1.5$ seconds', '$t = 6$ seconds'],
            correctAnswer: 0,
            explanation: '$-16t^2 + 48t = 0$ → $t(-16t + 48) = 0$ → $t = 0$ (launch) or $t = 3$ (landing). The answer is $3$ seconds.'
          }
        ]
      }
    },
    {
      id: 'qe5-text2',
      type: 'text' as const,
      content: `### Revenue/Profit Optimization

This is a common SAT word problem pattern that combines quadratics with real-world thinking.

### Worked Example 2

**A theater sells tickets at \\$20 each and sells 200 tickets. For each \\$2 price increase, 10 fewer tickets sell. What price maximizes revenue?**

| Step | Work |
|------|------|
| Let $x$ = number of \\$2 increases | Price: $20 + 2x$, Tickets: $200 - 10x$ |
| Revenue | $R = (20 + 2x)(200 - 10x)$ |
| Expand | $R = 4000 - 200x + 400x - 20x^2 = -20x^2 + 200x + 4000$ |
| Vertex | $x = -200/(2(-20)) = 5$ |
| Optimal price | $20 + 2(5) = 30$, i.e. \\$30 |
| Max revenue | $R = -20(25) + 200(5) + 4000 = 4500$, i.e. \\$4500 |

### Worked Example 3

**The sum of two numbers is 20. What is the maximum product?**

| Step | Work |
|------|------|
| Let one number be $x$ | Other number: $20 - x$ |
| Product | $P = x(20 - x) = -x^2 + 20x$ |
| Vertex | $x = -20/(2(-1)) = 10$ |
| Maximum product | $P = 10(10) = 100$ |

> **SAT Tip:** Optimization problems always lead to finding the vertex. Set up the quadratic, then use $x = -b/(2a)$.`
    },
    {
      id: 'qe5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Optimization & Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'The sum of two positive numbers is 16. What is the maximum possible product?',
            options: ['$64$', '$60$', '$48$', '$128$'],
            correctAnswer: 0,
            explanation: '$P = x(16 - x) = -x^2 + 16x$. Max at $x = 8$: $P = 8(8) = 64$. Equal numbers give the maximum product.'
          },
          {
            question: 'A farmer has 100 feet of fencing to enclose a rectangular area against a barn (one side needs no fencing). What is the maximum area?',
            options: ['$1250$ sq ft', '$2500$ sq ft', '$625$ sq ft', '$1000$ sq ft'],
            correctAnswer: 0,
            explanation: 'Perimeter: $x + 2y = 100$ → $x = 100 - 2y$. Area $= xy = (100-2y)y = -2y^2 + 100y$. Max at $y = 25$: $A = 25(50) = 1250$.'
          },
          {
            question: 'A ball\'s height is $h(t) = -4.9t^2 + 19.6t + 2$. At what time does it reach max height?',
            options: ['$2$ seconds', '$4$ seconds', '$1$ second', '$3$ seconds'],
            correctAnswer: 0,
            explanation: '$t = -19.6/(2(-4.9)) = -19.6/(-9.8) = 2$ seconds.'
          }
        ]
      }
    },
    {
      id: 'qe5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Approach** 🔍\n\nFor each word problem, select the key equation setup.',
      exercise: {
        dropdowns: [
          { label: '"When does a ball hit the ground?"', options: ['Set $h(t) = 0$, solve for $t$', 'Find the vertex', 'Compute $h(0)$', 'Find the discriminant'] },
          { label: '"What is the maximum height?"', options: ['Set $h(t) = 0$', 'Find the vertex ($t = -b/2a$, then $h(t)$)', 'Compute $h(0)$', 'Factor'] },
          { label: '"What is the initial height?"', options: ['Set $t = 0$, read $h(0)$', 'Find the vertex', 'Set $h(t) = 0$', 'Use discriminant'] },
          { label: '"What price maximizes revenue?"', options: ['Find zeros', 'Find vertex of $R(x)$', 'Set $R = 0$', 'Find discriminant'] }
        ],
        correctAnswers: ['Set $h(t) = 0$, solve for $t$', 'Find the vertex ($t = -b/2a$, then $h(t)$)', 'Set $t = 0$, read $h(0)$', 'Find vertex of $R(x)$'],
        hint1: '"Hits the ground" = height is 0.',
        hint2: '"Maximum" always means vertex for a downward parabola.',
        hint3: '"Initial" means time = 0.',
        explanation: 'Ground: $h = 0$. Max height: vertex. Initial height: $h(0)$. Max revenue: vertex of the revenue quadratic.'
      }
    },
    {
      id: 'qe5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Problem Type | Setup | Key Step |
|-------------|-------|----------|
| Projectile | $h = -16t^2 + v_0t + h_0$ | Vertex for max, $h = 0$ for landing |
| Area | Length × Width = Area | Set up quadratic, reject negatives |
| Revenue | Price × Quantity | Both depend on same variable; vertex = max |
| Max product | $P = x(S - x)$ where $S$ = sum | Vertex gives equal values |

- Always re-read the question: "When?" ≠ "What height?"
- Reject negative solutions for time, length, width
- "Maximize" or "optimize" = find the vertex`
    }
  ]
};
