export const calcabParticleMotionPart2Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm2-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 2 of 7 \u2014 Speed & Direction of Motion**

### Speed vs. Velocity

$$\\boxed{\\text{Speed} = |v(t)|}$$

| Concept | Formula | Always positive? |
|:---:|:---:|:---:|
| Velocity | $v(t) = s'(t)$ | No (has sign) |
| Speed | $|v(t)|$ | Yes |

### Direction of Motion

| $v(t)$ | Direction | Meaning |
|:---:|:---:|:---:|
| $v(t) > 0$ | Moving right (or up) | Position increasing |
| $v(t) < 0$ | Moving left (or down) | Position decreasing |
| $v(t) = 0$ | At rest | Possibly changing direction |

### Speeding Up vs. Slowing Down

$$\\boxed{\\text{Speeding up: } v \\text{ and } a \\text{ have the SAME sign}}$$
$$\\boxed{\\text{Slowing down: } v \\text{ and } a \\text{ have OPPOSITE signs}}$$

| $v(t)$ | $a(t)$ | Speed is... |
|:---:|:---:|:---:|
| $+$ | $+$ | Increasing |
| $-$ | $-$ | Increasing |
| $+$ | $-$ | Decreasing |
| $-$ | $+$ | Decreasing |

### Worked Example

> $s(t) = t^3 - 6t^2 + 9t$. When is the particle speeding up on $[0, 4]$?

$v(t) = 3(t-1)(t-3)$, $a(t) = 6(t-2)$

- $v > 0$ on $(0,1)$ and $(3,4)$; $v < 0$ on $(1,3)$
- $a > 0$ on $(2,4)$; $a < 0$ on $(0,2)$

Same sign: $(1,2)$ (both negative) and $(3,4)$ (both positive).

**Speeding up on $(1, 2) \\cup (3, 4)$.**`
    },
    {
      id: 'pm2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Speed & Direction** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $v(3) = -5$ and $a(3) = -2$, at $t = 3$ the particle is:',
            options: ['Speeding up', 'Slowing down', 'At rest', 'Not moving'],
            correctAnswer: 0,
            explanation: '$v$ and $a$ both negative \u2014 same sign \u2014 speeding up.'
          },
          {
            question: 'If $v(t) = 4$ and $a(t) = -1$, the particle is:',
            options: ['Moving right and slowing down', 'Moving right and speeding up', 'Moving left and slowing down', 'At rest'],
            correctAnswer: 0,
            explanation: '$v > 0$: moving right. $v$ and $a$ have opposite signs: slowing down.'
          },
          {
            question: 'The speed of a particle is $|v(t)|$. If $v(t) = -7$, the speed is:',
            options: ['$7$', '$-7$', '$0$', '$49$'],
            correctAnswer: 0,
            explanation: 'Speed $= |v(t)| = |-7| = 7$.'
          }
        ]
      }
    },
    {
      id: 'pm2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify the motion.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$v(t) = -3$, $a(t) = 2$. The particle is:',
            options: ['Moving left and slowing down', 'Moving left and speeding up', 'Moving right and slowing down', 'At rest'],
            correctAnswers: ['Moving left and slowing down'],
            hints: ['$v < 0$: left. Opposite signs: slowing.'],
            explanation: '$v < 0$: moving left. $v$ and $a$ opposite signs: slowing down.'
          },
          {
            label: 'A particle changes direction when:',
            options: ['$v(t)$ changes sign', '$a(t) = 0$', '$s(t) = 0$', '$a(t)$ changes sign'],
            correctAnswers: ['$v(t)$ changes sign'],
            hints: ['Direction reversal means velocity goes from $+$ to $-$ or vice versa.'],
            explanation: 'The particle changes direction when $v(t)$ changes from positive to negative or vice versa.'
          },
          {
            label: 'Speed is increasing when:',
            options: ['$v$ and $a$ have the same sign', '$v$ and $a$ have opposite signs', '$a > 0$', '$v > 0$'],
            correctAnswers: ['$v$ and $a$ have the same sign'],
            hints: ['Speeding up = same sign.'],
            explanation: 'Speed increases when velocity and acceleration point in the same direction (same sign).'
          }
        ]
      }
    },
    {
      id: 'pm2-input',
      type: 'input-box' as const,
      content: '**Find the speed.** \u270d\ufe0f',
      exercise: {
        question: '$s(t) = t^3 - 6t^2 + 9t$. Find the speed at $t = 2$.\n\n(Enter an integer.)',
        correctAnswer: '3',
        acceptableAnswers: ['3'],
        hints: [
          '$v(t) = 3t^2 - 12t + 9$.',
          '$v(2) = 12 - 24 + 9 = -3$.',
          'Speed $= |v(2)| = |-3| = 3$.'
        ],
        explanation: '$v(2) = -3$. Speed $= |{-3}| = 3$.'
      }
    },
    {
      id: 'pm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

- Speed $= |v(t)|$, always non-negative
- $v > 0$: right/up; $v < 0$: left/down
- Speeding up: $v$ and $a$ same sign
- Slowing down: $v$ and $a$ opposite signs
- Direction change: $v(t)$ changes sign`
    }
  ]
};
