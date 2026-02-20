export const calcabParticleMotionPart3Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm3-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 3 of 7 \u2014 Speed and Speeding Up/Slowing Down**

### Speed vs Velocity

- **Velocity** has direction (can be negative)
- **Speed** $= |v(t)|$ (always non-negative)
- Maximum speed occurs at an endpoint or where $\\frac{d}{dt}|v(t)| = 0$

### Speeding Up vs Slowing Down

| $v(t)$ | $a(t)$ | Particle is... |
|--------|--------|----------------|
| $+$ | $+$ | Speeding up (moving right, accelerating right) |
| $-$ | $-$ | Speeding up (moving left, accelerating left) |
| $+$ | $-$ | Slowing down |
| $-$ | $+$ | Slowing down |

**Key:** Same sign = speeding up. Opposite signs = slowing down.`
    },
    {
      id: 'pm3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Speed Analysis** \ud83c\udfaf\n\n$v(t) = t^2 - 5t + 4 = (t-1)(t-4)$, $a(t) = 2t - 5$',
      exercise: {
        questions: [
          {
            question: 'On what interval(s) is the particle speeding up?',
            options: ['$(1, 2.5)$', '$(2.5, 4)$', '$(1, 2.5) \\cup (4, \\infty)$', '$(0, 1) \\cup (2.5, 4)$'],
            correctAnswer: 2,
            explanation: '$v < 0$ on $(1,4)$, $a < 0$ on $(0, 2.5)$. Same sign (both negative): $(1, 2.5)$. $v > 0$ on $(4,\\infty)$, $a > 0$ on $(2.5,\\infty)$. Same sign (both positive): $(4, \\infty)$. Speeding up on $(1, 2.5) \\cup (4, \\infty)$.'
          }
        ]
      }
    },
    {
      id: 'pm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3
1. Speed = $|v(t)|$
2. Same sign of $v$ and $a$ = speeding up
3. Opposite signs = slowing down`
    }
  ]
};
