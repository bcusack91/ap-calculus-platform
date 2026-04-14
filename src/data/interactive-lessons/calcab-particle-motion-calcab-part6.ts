export const calcabParticleMotionPart6Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm6-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 6 of 7 \u2014 AP-Style Free-Response Workshop**

### AP FRQ Patterns for Particle Motion

| Part | Typical Prompt | Key Setup |
|:---:|:---|:---|
| (a) | "When is the particle at rest?" | Solve $v(t) = 0$ |
| (b) | "Find total distance on $[a,b]$" | $\\int_a^b |v(t)|\\,dt$, split at zeros |
| (c) | "Is speed increasing or decreasing at $t = k$?" | Compare signs of $v(k)$ and $a(k)$ |
| (d) | "Find position at time $t = T$" | $s(T) = s(t_0) + \\int_{t_0}^T v\\,dt$ |

> **AP Tip:** In table-based problems, use the given values with Riemann sums or trapezoidal approximations.

---

### Complete Worked FRQ

> A particle moves along the $x$-axis with velocity $v(t) = t^2 - 5t + 4$ for $t \\ge 0$ and position $s(0) = 2$.

**(a) When is the particle at rest?**

$v(t) = t^2 - 5t + 4 = (t-1)(t-4) = 0$ at $t = 1$ and $t = 4$.

**(b) Total distance traveled on $[0,6]$**

Sign analysis: $v > 0$ on $[0,1)$, $v < 0$ on $(1,4)$, $v > 0$ on $(4,6]$.

$$\\int_0^1 (t^2-5t+4)\\,dt = \\left[\\frac{t^3}{3} - \\frac{5t^2}{2} + 4t\\right]_0^1 = \\frac{1}{3} - \\frac{5}{2} + 4 = \\frac{11}{6}$$

$$\\int_1^4 (t^2-5t+4)\\,dt = \\left[\\frac{t^3}{3} - \\frac{5t^2}{2} + 4t\\right]_1^4 = \\left(\\frac{64}{3} - 40 + 16\\right) - \\left(\\frac{1}{3} - \\frac{5}{2} + 4\\right)$$

$$= \\frac{64}{3} - 24 - \\frac{11}{6} = \\frac{128}{6} - \\frac{144}{6} - \\frac{11}{6} = -\\frac{27}{6} = -\\frac{9}{2}$$

$$\\int_4^6 (t^2-5t+4)\\,dt = \\left[\\frac{t^3}{3} - \\frac{5t^2}{2} + 4t\\right]_4^6 = \\left(72 - 90 + 24\\right) - \\left(\\frac{64}{3} - 40 + 16\\right)$$

$$= 6 - \\frac{64}{3} + 24 = 30 - \\frac{64}{3} = \\frac{26}{3}$$

$$\\text{Total distance} = \\frac{11}{6} + \\frac{9}{2} + \\frac{26}{3} = \\frac{11}{6} + \\frac{27}{6} + \\frac{52}{6} = \\frac{90}{6} = 15$$

**(c) Is speed increasing or decreasing at $t = 3$?**

$v(3) = 9 - 15 + 4 = -2 < 0$ and $a(3) = 2(3) - 5 = 1 > 0$

Opposite signs $\\Rightarrow$ **speed is decreasing** at $t = 3$.

**(d) Find $s(6)$.**

$$s(6) = 2 + \\int_0^6 (t^2-5t+4)\\,dt = 2 + \\left[\\frac{t^3}{3} - \\frac{5t^2}{2} + 4t\\right]_0^6 = 2 + 72 - 90 + 24 = 8$$`
    },
    {
      id: 'pm6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-style questions.** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A particle has $v(t) = 3t^2 - 12$. On $[0,3]$, the particle changes direction at:',
            options: ['$t = 2$ only', '$t = 2$ and $t = 3$', '$t = 0$ and $t = 2$', 'The particle does not change direction'],
            correctAnswer: 0,
            explanation: '$v(t) = 3(t^2-4) = 3(t-2)(t+2) = 0$ at $t = 2$ (also $t=-2$ but outside domain). $v$ changes from negative to positive at $t=2$.'
          },
          {
            question: '$v(t) = e^t - 3$ and $s(0) = 5$. The displacement on $[0, \\ln 3]$ is:',
            options: ['$3 - 3\\ln 3 - 1 = 2 - 3\\ln 3$', '$e^{\\ln 3} - 3\\ln 3 - e^0 = 2 - 3\\ln 3$', '$5 + 2 - 3\\ln 3$', '$3\\ln 3 - 2$'],
            correctAnswer: 1,
            explanation: '$\\int_0^{\\ln 3}(e^t - 3)\\,dt = [e^t - 3t]_0^{\\ln 3} = (3 - 3\\ln 3) - (1 - 0) = 2 - 3\\ln 3$.'
          },
          {
            question: 'A free-response question asks: "Is the speed of the particle increasing at $t = 2$?" What must you check?',
            options: ['Whether $v(2)$ and $a(2)$ have the same sign', 'Whether $a(2) > 0$', 'Whether $v(2) > 0$', 'Whether $|v(2)| > |v(1)|$'],
            correctAnswer: 0,
            explanation: 'Speed increases when velocity and acceleration have the same sign (both positive or both negative).'
          }
        ]
      }
    },
    {
      id: 'pm6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Analyze motion.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$v(t) = 2t - 6$. The particle is at rest at $t =$',
            options: ['$3$', '$6$', '$0$', '$2$'],
            correctAnswers: ['$3$'],
            hints: ['$2t - 6 = 0$.'],
            explanation: '$2t - 6 = 0 \\Rightarrow t = 3$.'
          },
          {
            label: 'On $[0,5]$, total distance $= \\int_0^3 |2t-6|\\,dt + \\int_3^5 |2t-6|\\,dt =$',
            options: ['$9 + 4 = 13$', '$-9 + 4 = -5$', '$13$', '$5$'],
            correctAnswers: ['$9 + 4 = 13$'],
            hints: ['$v < 0$ on $[0,3)$, $v > 0$ on $(3,5]$. Integrate each piece.'],
            explanation: '$\\int_0^3 (6-2t)\\,dt = [6t-t^2]_0^3 = 9$. $\\int_3^5 (2t-6)\\,dt = [t^2-6t]_3^5 = -5-(-9) = 4$. Total $= 13$.'
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
      id: 'pm6-input',
      type: 'input-box' as const,
      content: '**AP FRQ practice.** \u270d\ufe0f',
      exercise: {
        question: 'A particle moves with $v(t) = t^2 - 4t + 3 = (t-1)(t-3)$ and $s(0) = 5$.\n\nFind the total distance traveled on $[0,4]$.\n\nIf the answer is $a/b$ in lowest terms, enter **$a + b$**.',
        correctAnswer: '5',
        acceptableAnswers: ['5'],
        hints: [
          '$v = 0$ at $t = 1$ and $t = 3$. Sign: $v > 0$ on $[0,1)$, $v < 0$ on $(1,3)$, $v > 0$ on $(3,4]$.',
          '$\\int_0^1 v\\,dt = [t^3/3 - 2t^2 + 3t]_0^1 = 1/3 - 2 + 3 = 4/3$.',
          '$\\int_1^3 v\\,dt = [t^3/3 - 2t^2 + 3t]_1^3 = (9-18+9)-(1/3-2+3) = 0 - 4/3 = -4/3$.',
          '$\\int_3^4 v\\,dt = [t^3/3 - 2t^2 + 3t]_3^4 = (64/3-32+12)-(9-18+9) = 4/3 - 0 = 4/3$.',
          'Total distance $= 4/3 + 4/3 + 4/3 = 12/3 = 4$. This is integer $4 = 4/1$, so $a + b = 5$.'
        ],
        explanation: 'Split at $v = 0$: $t = 1, 3$. Total $= |4/3| + |-4/3| + |4/3| = 4$. As $4/1$: $a + b = 5$.'
      }
    },
    {
      id: 'pm6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

- AP FRQs test all aspects: rest, direction, distance, position
- Always split integrals at $v(t) = 0$ for total distance
- Speed increasing $\\iff$ $v$ and $a$ same sign
- Show every step and justify sign changes for full credit`
    }
  ]
};
