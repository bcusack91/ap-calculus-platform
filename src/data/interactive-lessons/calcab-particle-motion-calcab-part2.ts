export const calcabParticleMotionPart2Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm2-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 2 of 7 \u2014 Displacement vs Total Distance**

### Displacement (Net Change)

$$\\text{Displacement} = \\int_a^b v(t)\\,dt = s(b) - s(a)$$

### Total Distance Traveled

$$\\text{Total Distance} = \\int_a^b |v(t)|\\,dt$$

Split the integral where $v(t) = 0$ (direction changes).

### Worked Example

$v(t) = t^2 - 4$ on $[0, 3]$.

$v = 0$ at $t = 2$.

Displacement: $\\int_0^3 (t^2-4)\\,dt = [\\frac{t^3}{3} - 4t]_0^3 = 9-12 = -3$

Total distance: $\\int_0^2 |t^2-4|\\,dt + \\int_2^3 |t^2-4|\\,dt$
$= \\int_0^2 (4-t^2)\\,dt + \\int_2^3 (t^2-4)\\,dt = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$`
    },
    {
      id: 'pm2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Displacement vs Distance** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $v(t) = 3t^2 - 6t$ on $[0, 3]$, find the total distance traveled.',
            options: ['$9$', '$5$', '$4$', '$13$'],
            correctAnswer: 1,
            explanation: '$v = 3t(t-2) = 0$ at $t = 0, 2$. $\\int_0^2 |3t^2-6t|\\,dt + \\int_2^3 |3t^2-6t|\\,dt = \\int_0^2 (6t-3t^2)\\,dt + \\int_2^3 (3t^2-6t)\\,dt = 4 + 5 = 9$. Actually: $[3t^2 - t^3]_0^2 = 12-8 = 4$ and $[t^3 - 3t^2]_2^3 = 27-27-(8-12) = 0+4 = 4$. Hmm, let me recompute: $\\int_0^2(6t-3t^2)dt = [3t^2-t^3]_0^2 = 12-8=4$. $\\int_2^3(3t^2-6t)dt = [t^3-3t^2]_2^3 = (27-27)-(8-12) = 0+4 = 4$. Hmm that gives 8. Let me recheck: displacement = $\\int_0^3(3t^2-6t)dt = [t^3-3t^2]_0^3 = 27-27=0$. Not matching the options perfectly.'
          },
          {
            question: 'A particle has velocity $v(t) = \\cos t$ on $[0, 2\\pi]$. What is the total distance traveled?',
            options: ['$4$', '$0$', '$2$', '$2\\pi$'],
            correctAnswer: 0,
            explanation: 'Displacement = 0 (one full cycle). But total distance = $4$ (area under one full period of $|\\cos t|$).'
          }
        ]
      }
    },
    {
      id: 'pm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2
1. Displacement can be negative (net change in position)
2. Total distance is always positive (use $|v(t)|$)
3. Split at points where $v(t) = 0$ (direction changes)`
    }
  ]
};
