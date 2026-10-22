export const calcabParticleMotionPart4Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm4-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 4 of 5 — AP-Style Free-Response Workshop**

### Derivative Questions in a Particle-Motion FRQ

| Typical prompt | Key setup |
|:---|:---|
| "When is the particle at rest?" | Solve $v(t) = 0$ |
| "Is the particle moving left or right at $t = k$?" | Sign of $v(k)$ |
| "When does the particle change direction?" | Where $v$ **changes sign** |
| "Is the speed increasing or decreasing at $t = k$?" | Compare signs of $v(k)$ and $a(k)$ |
| "Find and interpret $a(k)$" | Value of $v'(k)$, with units |

---

### Complete Worked Example

> A particle moves along the $x$-axis with position $x(t) = t^3 - 9t^2 + 24t - 4$ meters at time $t \\ge 0$ seconds.

$v(t) = 3t^2 - 18t + 24 = 3(t - 2)(t - 4)$ and $a(t) = 6t - 18 = 6(t - 3)$.

**(a) When is the particle at rest?** $v(t) = 0$ at $t = 2$ and $t = 4$.

**(b) On what interval is the particle moving left?** $v(t) < 0$ on $(2, 4)$, so it moves left there.

**(c) Does the particle change direction at $t = 2$?** Yes: $v$ changes from positive to negative at $t = 2$.

**(d) Is the speed increasing or decreasing at $t = 2.5$?** $v(2.5) = 3(0.5)(-1.5) = -2.25 < 0$ and $a(2.5) = 6(-0.5) = -3 < 0$. Same signs, so the **speed is increasing**.

**(e) Find and interpret $a(1)$.** $a(1) = -12$: at $t = 1$ second the velocity is decreasing at $12$ meters per second per second.

> **AP Tip:** A complete answer gives the reason, tied to $v$ or $a$: "because $v(2.5) < 0$ and $a(2.5) < 0$," not just "it speeds up."`
    },
    {
      id: 'pm4-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-style questions.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle has $v(t) = 3t^2 - 12$. On $[0,3]$, the particle changes direction at:',
            options: ['$t = 2$ only', '$t = 2$ and $t = 3$', '$t = 0$ and $t = 2$', 'The particle does not change direction'],
            correctAnswer: 0,
            explanation: '$v(t) = 3(t-2)(t+2) = 0$ at $t = 2$ (the zero $t = -2$ is outside the interval). $v$ changes from negative to positive at $t = 2$. The endpoints are not direction changes.'
          },
          {
            question: 'A particle has position $x(t) = t^3 - 3t^2$. At $t = 0.5$, the particle is:',
            options: ['Speeding up, since $v$ and $a$ are both negative', 'Slowing down, since $v$ is negative', 'Speeding up, since $a$ is negative', 'Slowing down, since $v$ and $a$ differ in sign'],
            correctAnswer: 0,
            explanation: '$v(t) = 3t^2 - 6t$ gives $v(0.5) = -2.25$, and $a(t) = 6t - 6$ gives $a(0.5) = -3$. Same signs, so it is speeding up. The sign of $v$ or of $a$ alone does not decide speeding up.'
          },
          {
            question: 'A free-response question asks: "Is the speed of the particle increasing at $t = 2$?" What must you check?',
            options: ['Whether $v(2)$ and $a(2)$ share a sign', 'Whether $a(2)$ is positive', 'Whether $v(2) > 0$, so it moves right', 'Whether $|v(2)|$ exceeds $|v(1)|$'],
            correctAnswer: 0,
            explanation: 'Speed increases when velocity and acceleration have the same sign (both positive or both negative). A positive $a(2)$ alone only says velocity is rising, which slows a particle moving left, and comparing with $t = 1$ describes an interval, not the instant $t = 2$.'
          }
        ]
      }
    },
    {
      id: 'pm4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Analyze motion.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$v(t) = 2t - 6$. The particle is at rest at $t =$',
            options: ['$3$', '$12$', '$-3$', '$1/3$'],
            correctAnswers: ['$3$'],
            hints: ['$2t - 6 = 0$.'],
            explanation: '$2t - 6 = 0 \\Rightarrow t = 3$.'
          },
          {
            label: '$v(t) = 2t - 6$. On $(0, 3)$ the particle moves',
            options: ['left, since $v < 0$', 'right, since $a > 0$', 'left, since $a > 0$', 'right, since $v < 0$'],
            correctAnswers: ['left, since $v < 0$'],
            hints: ['Direction comes from the sign of $v$, not $a$.'],
            explanation: 'For $0 < t < 3$, $v(t) = 2t - 6 < 0$, so the particle moves left. The acceleration $a = 2 > 0$ tells you the velocity is increasing, not the direction.'
          },
          {
            label: 'At $t = 1$: $v(1) = -4 < 0$, $a(1) = 2 > 0$. Speed is:',
            options: ['Decreasing', 'Increasing', 'Constant', 'Zero'],
            correctAnswers: ['Decreasing'],
            hints: ['Opposite signs of $v$ and $a$.'],
            explanation: '$v < 0$ and $a > 0 \\Rightarrow$ opposite signs $\\Rightarrow$ speed is decreasing.'
          }
        ]
      }
    },
    {
      id: 'pm4-input',
      type: 'input-box' as const,
      content: '**AP FRQ practice.** ✍️',
      exercise: {
        question: 'A particle has position $x(t) = t^3 - 6t^2 + 5$ for $t > 0$. Find its acceleration at the moment it is at rest.\n\n(Enter an integer.)',
        correctAnswer: '12',
        acceptableAnswers: ['12'],
        hints: [
          '$v(t) = 3t^2 - 12t = 3t(t - 4)$, so for $t > 0$ the particle is at rest at $t = 4$.',
          '$a(t) = 6t - 12$.'
        ],
        explanation: '$v(t) = 3t(t - 4) = 0$ at $t = 4$ (the zero $t = 0$ is excluded). $a(t) = 6t - 12$, so $a(4) = 12$.'
      }
    },
    {
      id: 'pm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- At rest: $v(t) = 0$; direction change: $v$ changes sign
- Direction comes from the sign of $v$; speeding up needs the signs of $v$ and $a$
- Interpret $a(k)$ as the rate of change of velocity, with units
- Support every conclusion with the values of $v$ and $a$ you used

> **Up Next:** Part 5 — Comprehensive Assessment.`
    }
  ]
};
