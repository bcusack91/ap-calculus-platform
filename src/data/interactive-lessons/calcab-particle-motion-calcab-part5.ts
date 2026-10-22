export const calcabParticleMotionPart5Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm5-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 5 of 5 — Comprehensive Assessment**

### Formula Reference

| Relationship | Formula | Notes |
|:---|:---:|:---|
| Velocity from position | $v(t) = s'(t)$ | Derivative |
| Acceleration from velocity | $a(t) = v'(t) = s''(t)$ | Second derivative |
| Speed | $\\lvert v(t) \\rvert$ | Magnitude of velocity |
| At rest | $v(t) = 0$ | Momentarily stopped |
| Direction change | $v$ changes sign | Not just $v = 0$ |
| Speeding up | $v$ and $a$ have the same sign | Opposite signs: slowing down |

### Common AP Mistakes

| Mistake | Correction |
|:---|:---|
| Saying "$a > 0$ means speeding up" | Speed increases only when $v$ and $a$ have the same sign |
| Calling every zero of $v$ a direction change | $v$ must change sign there |
| Reading direction from the sign of $a$ | Direction comes from the sign of $v$ |
| Reporting a negative speed | Speed is $\\lvert v \\rvert \\ge 0$ |
| Leaving out units in an interpretation | Velocity: distance per time; acceleration: distance per time per time |`
    },
    {
      id: 'pm5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Assessment — Set 1** 🎯',
      exercise: {
        questions: [
          {
            question: '$s(t) = t^3 - 6t^2 + 9t + 2$. The particle moves to the left on:',
            options: ['$(1, 3)$', '$(0, 1)$', '$(3, \\infty)$', '$(0, 3)$'],
            correctAnswer: 0,
            explanation: '$v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3)$. $v < 0$ on $(1,3)$, so the particle moves left (negative direction).'
          },
          {
            question: '$x(t) = 2t^3 - 15t^2 + 36t$. When is the particle at rest?',
            options: ['$t = 2$ and $t = 3$', '$t = 0$ only', '$t = 2.5$ only', '$t = -2$ and $t = -3$'],
            correctAnswer: 0,
            explanation: '$v(t) = 6t^2 - 30t + 36 = 6(t - 2)(t - 3) = 0$ at $t = 2$ and $t = 3$. The time $2.5$ is where $a(t) = 12t - 30 = 0$, and $x(0) = 0$ is a position, not a rest time.'
          },
          {
            question: 'At time $t = 4$, $v(4) = -3$ and $a(4) = -2$. The speed is:',
            options: ['Increasing', 'Decreasing', 'Constant', 'Zero'],
            correctAnswer: 0,
            explanation: '$v(4) < 0$ and $a(4) < 0$ — same sign, so speed is increasing.'
          },
          {
            question: 'A particle has position $x(t) = 5\\sin t$. What is its speed at $t = \\pi$?',
            options: ['$5$', '$-5$', '$0$', '$5\\pi$'],
            correctAnswer: 0,
            explanation: '$v(t) = 5\\cos t$, so $v(\\pi) = -5$ and the speed is $|-5| = 5$. The value $-5$ is the velocity, and $0$ is the position $x(\\pi)$.'
          }
        ]
      }
    },
    {
      id: 'pm5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Assessment — Set 2** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle has position $x(t) = t^4 - 4t^3$ for $t > 0$. At what time does it first change direction?',
            options: ['$t = 3$', '$t = 2$', '$t = 4$', '$t = 1$'],
            correctAnswer: 0,
            explanation: '$v(t) = 4t^3 - 12t^2 = 4t^2(t - 3)$. For $t > 0$, $v < 0$ before $t = 3$ and $v > 0$ after, so the first direction change is at $t = 3$. At $t = 2$ the acceleration $a(t) = 12t^2 - 24t$ is zero, and $t = 4$ is where $x(t) = 0$.'
          },
          {
            question: '$v(t) = e^{-t}(1 - t)$. The particle is at rest at $t =$',
            options: ['$t = 1$', '$t = 0$', '$t = e$', 'Never at rest'],
            correctAnswer: 0,
            explanation: '$e^{-t} > 0$ always, so $v = 0$ when $1 - t = 0$, i.e., $t = 1$.'
          },
          {
            question: 'Position is measured in meters and time in seconds. What are the units of $a(t)$?',
            options: ['Meters per second per second', 'Meters per second', 'Meters', 'Seconds per meter'],
            correctAnswer: 0,
            explanation: '$a(t) = v\'(t)$ is the rate of change of velocity (meters per second) with respect to time (seconds), so its units are meters per second per second. Meters per second are the units of velocity.'
          }
        ]
      }
    },
    {
      id: 'pm5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Complete the analysis.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$s(t) = \\sin t + t$. $v(\\pi) =$',
            options: ['$1 + \\cos\\pi = 0$', '$\\pi + \\sin\\pi = \\pi$', '$1 - \\cos\\pi = 2$', '$\\cos\\pi = -1$'],
            correctAnswers: ['$1 + \\cos\\pi = 0$'],
            hints: ['$v = s\\prime(t) = \\cos t + 1$.'],
            explanation: '$v(t) = \\cos t + 1$, so $v(\\pi) = \\cos\\pi + 1 = -1 + 1 = 0$. The particle is at rest.'
          },
          {
            label: '$a(\\pi) =$',
            options: ['$-\\sin\\pi = 0$', '$\\cos\\pi = -1$', '$-\\cos\\pi = 1$', '$1 - \\sin\\pi = 1$'],
            correctAnswers: ['$-\\sin\\pi = 0$'],
            hints: ['$a = v\\prime(t) = -\\sin t$.'],
            explanation: '$a(t) = v\'(t) = -\\sin t$ (the derivative of the constant $1$ in $v$ is $0$), so $a(\\pi) = -\\sin\\pi = 0$. Both velocity and acceleration are zero at $t = \\pi$.'
          },
          {
            label: 'Does the particle change direction at $t = \\pi$?',
            options: ['No — $v \\ge 0$ on both sides', 'Yes — $v(\\pi) = 0$ there', 'Yes — $v$ and $a$ are $0$', 'Yes — $a(\\pi) = 0$ there'],
            correctAnswers: ['No — $v \\ge 0$ on both sides'],
            hints: ['$v(t) = \\cos t + 1 \\ge 0$ for all $t$, so $v$ never changes sign.'],
            explanation: '$v(t) = \\cos t + 1 \\ge 0$ for all $t$. The particle pauses at $t = \\pi$ but does not reverse, because $v$ never changes sign.'
          }
        ]
      }
    },
    {
      id: 'pm5-input',
      type: 'input-box' as const,
      content: '**Final challenge.** ✍️',
      exercise: {
        question: 'A particle has position $x(t) = t^3 - 6t^2 + 9t$. Find its speed at $t = 2$.\n\n(Enter an integer.)',
        correctAnswer: '3',
        acceptableAnswers: ['3'],
        hints: [
          '$v(t) = 3t^2 - 12t + 9$.',
          '$v(2) = 12 - 24 + 9$.'
        ],
        explanation: '$v(2) = 3(4) - 12(2) + 9 = -3$, so the speed is $|-3| = 3$. The particle is moving left at $t = 2$.'
      }
    },
    {
      id: 'pm5-completion',
      type: 'text' as const,
      content: `### Particle Motion — Complete! 🎓

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | Position, Velocity & Acceleration | ✅ |
| 2 | Speed & Direction of Motion | ✅ |
| 3 | Motion from Graphs and Tables | ✅ |
| 4 | AP-Style Free-Response Workshop | ✅ |
| 5 | Comprehensive Assessment | ✅ |

> **Later:** In Units 6 and 8 you will use integrals with these same functions to find displacement, total distance, and position from velocity.`
    }
  ]
};
