export const calcabParticleMotionPart7Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm7-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 7 of 7 \u2014 Comprehensive Assessment**

### Formula Reference

| Relationship | Formula | Notes |
|:---|:---:|:---|
| Velocity from position | $v(t) = s'(t)$ | Derivative |
| Acceleration from velocity | $a(t) = v'(t) = s''(t)$ | Second derivative |
| Position from velocity | $s(t) = s(t_0) + \\int_{t_0}^t v\\,d\\tau$ | Requires initial condition |
| Velocity from acceleration | $v(t) = v(t_0) + \\int_{t_0}^t a\\,d\\tau$ | Requires initial condition |
| Displacement | $\\int_a^b v(t)\\,dt$ | Signed (can be negative) |
| Total distance | $\\int_a^b |v(t)|\\,dt$ | Always $\\ge 0$ |
| Speed | $|v(t)|$ | Magnitude of velocity |

### Common AP Mistakes

| Mistake | Correction |
|:---|:---|
| Confusing displacement with total distance | Displacement is signed; total distance splits at $v = 0$ |
| Forgetting to check sign of $v$ for direction | Always state direction (left/right or positive/negative) |
| Using $a > 0$ means "speeding up" | Speed increases only when $v$ and $a$ have the same sign |
| Missing initial conditions | Every antiderivative needs $+C$ or initial value |
| Not justifying sign changes | AP requires explicit sign analysis for direction change |`
    },
    {
      id: 'pm7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Assessment \u2014 Set 1** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$s(t) = t^3 - 6t^2 + 9t + 2$. The particle moves to the left on:',
            options: ['$(1, 3)$', '$(0, 1)$', '$(3, \\infty)$', '$(0, 3)$'],
            correctAnswer: 0,
            explanation: '$v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3)$. $v < 0$ on $(1,3)$, so the particle moves left (negative direction).'
          },
          {
            question: '$v(t) = t^2 - 1$, $s(0) = 3$. Find $s(2)$.',
            options: ['$11/3$', '$3$', '$5/3$', '$7/3$'],
            correctAnswer: 0,
            explanation: '$s(2) = 3 + \\int_0^2(t^2-1)\\,dt = 3 + [t^3/3 - t]_0^2 = 3 + 8/3 - 2 = 3 + 2/3 = 11/3$.'
          },
          {
            question: 'At time $t = 4$, $v(4) = -3$ and $a(4) = -2$. The speed is:',
            options: ['Increasing', 'Decreasing', 'Constant', 'Zero'],
            correctAnswer: 0,
            explanation: '$v(4) < 0$ and $a(4) < 0$ \u2014 same sign, so speed is increasing.'
          },
          {
            question: '$v(t) = \\sin t$ on $[0, 2\\pi]$. The total distance is:',
            options: ['$4$', '$0$', '$2$', '$2\\pi$'],
            correctAnswer: 0,
            explanation: '$\\int_0^\\pi \\sin t\\,dt + \\int_\\pi^{2\\pi}|\\sin t|\\,dt = 2 + 2 = 4$. Displacement is $0$, but total distance is $4$.'
          }
        ]
      }
    },
    {
      id: 'pm7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Assessment \u2014 Set 2** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A particle has $a(t) = -6t + 12$ and $v(0) = 0$. The particle first changes direction at $t =$',
            options: ['$4$', '$2$', '$0$', '$6$'],
            correctAnswer: 0,
            explanation: '$v(t) = -3t^2 + 12t = -3t(t - 4) = 0$ at $t = 0$ and $t = 4$. At $t = 0$ the particle starts from rest. At $t = 4$, $v$ changes from positive to negative. First direction change: $t = 4$.'
          },
          {
            question: '$v(t) = e^{-t}(1 - t)$. The particle is at rest at $t =$',
            options: ['$t = 1$', '$t = 0$', '$t = e$', 'Never at rest'],
            correctAnswer: 0,
            explanation: '$e^{-t} > 0$ always, so $v = 0$ when $1 - t = 0$, i.e., $t = 1$.'
          },
          {
            question: 'If displacement on $[0,5]$ is $-3$ and total distance is $11$, how far did the particle travel in the positive direction?',
            options: ['$4$', '$7$', '$3$', '$8$'],
            correctAnswer: 0,
            explanation: 'Let $p$ = positive travel, $n$ = negative travel. Then $p - n = -3$ (displacement) and $p + n = 11$ (total distance). Solving: $2p = 8$, so $p = 4$.'
          }
        ]
      }
    },
    {
      id: 'pm7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Complete the analysis.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$s(t) = \\sin t + t$. $v(\\pi) =$',
            options: ['$1 + \\cos\\pi = 0$', '$\\sin\\pi = 0$', '$1 - \\cos\\pi = 2$', '$\\cos\\pi + 1 = 0$'],
            correctAnswers: ['$1 + \\cos\\pi = 0$'],
            hints: ['$v = s\\prime(t) = \\cos t + 1$.'],
            explanation: '$v(\\pi) = \\cos\\pi + 1 = -1 + 1 = 0$. The particle is at rest.'
          },
          {
            label: '$a(\\pi) =$',
            options: ['$-\\sin\\pi = 0$', '$\\cos\\pi = -1$', '$\\sin\\pi = 0$', '$1$'],
            correctAnswers: ['$-\\sin\\pi = 0$'],
            hints: ['$a = v\\prime(t) = -\\sin t$.'],
            explanation: '$a(\\pi) = -\\sin\\pi = 0$. Both velocity and acceleration are zero at $t = \\pi$.'
          },
          {
            label: 'Does the particle change direction at $t = \\pi$?',
            options: ['No \u2014 $v \\ge 0$ for all $t$', 'Yes \u2014 $v = 0$ there', 'Cannot determine', 'Yes \u2014 $a = 0$ there'],
            correctAnswers: ['No \u2014 $v \\ge 0$ for all $t$'],
            hints: ['$v(t) = \\cos t + 1 \\ge 0$ for all $t$, so $v$ never changes sign.'],
            explanation: '$\\cos t + 1 \\ge 0$ always. The particle pauses at $t = \\pi$ but does not reverse.'
          }
        ]
      }
    },
    {
      id: 'pm7-input',
      type: 'input-box' as const,
      content: '**Final challenge.** \u270d\ufe0f',
      exercise: {
        question: '$a(t) = 2t - 4$, $v(0) = 6$, $s(0) = 0$. Find $s(3)$.\n\n(Enter an integer.)',
        correctAnswer: '9',
        acceptableAnswers: ['9'],
        hints: [
          '$v(t) = t^2 - 4t + 6$.',
          '$s(t) = t^3/3 - 2t^2 + 6t$.',
          '$s(3) = 27/3 - 18 + 18 = 9$.'
        ],
        explanation: '$v(t) = 6 + \\int_0^t(2\\tau-4)\\,d\\tau = t^2 - 4t + 6$. $s(t) = \\int_0^t(\\tau^2-4\\tau+6)\\,d\\tau = t^3/3 - 2t^2 + 6t$. $s(3) = 9 - 18 + 18 = 9$.'
      }
    },
    {
      id: 'pm7-completion',
      type: 'text' as const,
      content: `### Particle Motion \u2014 Complete! \ud83c\udf93

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | Position, Velocity & Acceleration | \u2705 |
| 2 | Speed & Direction of Motion | \u2705 |
| 3 | Displacement vs. Total Distance | \u2705 |
| 4 | Position from Velocity | \u2705 |
| 5 | Acceleration & Velocity from Integrals | \u2705 |
| 6 | AP-Style Free-Response Workshop | \u2705 |
| 7 | Comprehensive Assessment | \u2705 |

You have completed the full Particle Motion unit. You should now be confident with all AP Calculus AB particle motion problems!`
    }
  ]
};
