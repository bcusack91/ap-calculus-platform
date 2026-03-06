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

### Area Problems

"The length of a rectangle is 3 more than its width. The area is 40. Find the dimensions."

Let width $= w$. Then $w(w + 3) = 40$ → $w^2 + 3w - 40 = 0$ → $(w + 8)(w - 5) = 0$

Width $= 5$ (reject $-8$), length $= 8$.

### Revenue/Profit Problems

"A store sells 100 items at \\$20 each. For every \\$1 increase in price, 5 fewer items sell."

Revenue $= (20 + x)(100 - 5x) = -5x^2 + 0x + 2000$

Maximum revenue at vertex: $x = 0/(2 \\cdot (-5)) = 0$... meaning \\$20 is already optimal!`
    },
    {
      id: 'qe5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quadratic Word Problems** 🎯',
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
      id: 'qe5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Projectile: $h(t) = -16t^2 + v_0 t + h_0$ — max height at vertex, hits ground at $h = 0$
- Area problems: set up the equation, expand, solve (reject negative answers for dimensions)
- Revenue: $R = (\\text{price})(\\text{quantity})$ — max revenue at vertex of the quadratic
- Always re-read the question: "When does it hit the ground?" ≠ "What is the max height?"`
    }
  ]
};
