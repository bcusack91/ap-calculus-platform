export const calcabParticleMotionPart3Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm3-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 3 of 7 \u2014 Displacement vs. Total Distance**

### Two Different Quantities

$$\\boxed{\\text{Displacement} = \\int_a^b v(t)\\,dt = s(b) - s(a)}$$

$$\\boxed{\\text{Total Distance} = \\int_a^b |v(t)|\\,dt}$$

| Quantity | Formula | Sign | Meaning |
|:---:|:---:|:---:|:---:|
| Displacement | $\\int_a^b v(t)\\,dt$ | Can be negative | Net change in position |
| Total distance | $\\int_a^b |v(t)|\\,dt$ | Always $\\geq 0$ | Odometer reading |

### Worked Example

> $v(t) = t^2 - 4$ on $[0, 3]$. Find displacement and total distance.

**Displacement:** $\\int_0^3 (t^2-4)\\,dt = \\left[\\frac{t^3}{3}-4t\\right]_0^3 = (9-12) - 0 = -3$

**Total distance:** $v(t) = 0$ at $t = 2$. Split at $t = 2$:
$$\\int_0^2 |t^2-4|\\,dt + \\int_2^3 |t^2-4|\\,dt = \\int_0^2 (4-t^2)\\,dt + \\int_2^3 (t^2-4)\\,dt$$
$$= \\left[4t - \\frac{t^3}{3}\\right]_0^2 + \\left[\\frac{t^3}{3} - 4t\\right]_2^3 = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$$

> **AP Tip:** Displacement can be negative (particle ends left of start). Total distance is always positive. AP loves asking for both in the same problem.`
    },
    {
      id: 'pm3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Displacement & Distance** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$v(t) = 3t - 6$ on $[0, 4]$. The displacement is:',
            options: ['$0$', '$4$', '$-4$', '$8$'],
            correctAnswer: 0,
            explanation: '$\\int_0^4 (3t-6)dt = [3t^2/2 - 6t]_0^4 = (24-24) - 0 = 0$.'
          },
          {
            question: 'Same $v(t) = 3t - 6$ on $[0, 4]$. The total distance is:',
            options: ['$8$', '$0$', '$4$', '$12$'],
            correctAnswer: 0,
            explanation: '$v = 0$ at $t = 2$. $\\int_0^2 (6-3t)dt + \\int_2^4 (3t-6)dt = [6t-3t^2/2]_0^2 + [3t^2/2-6t]_2^4 = 6-6+0 + (24-24)-(6-12) = 4+4 = 8$.'
          },
          {
            question: 'If displacement $= 0$, the particle:',
            options: ['Returned to its starting position', 'Did not move', 'Moved in a circle', 'Has zero velocity'],
            correctAnswer: 0,
            explanation: 'Zero displacement means $s(b) = s(a)$ \u2014 the particle ended where it started (but may have moved in between).'
          }
        ]
      }
    },
    {
      id: 'pm3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Distinguish displacement and distance.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_0^5 v(t)\\,dt = -3$ means the particle moved:',
            options: ['3 units to the left of where it started', '3 units total', '3 units to the right', 'Did not move'],
            correctAnswers: ['3 units to the left of where it started'],
            hints: ['Negative displacement = net leftward motion.'],
            explanation: 'Displacement $= -3$: the particle is 3 units left of its starting position.'
          },
          {
            label: 'To find total distance, you must:',
            options: ['Split the integral where $v(t) = 0$', 'Just compute $\\int_a^b v(t)\\,dt$', 'Use $s(b) - s(a)$', 'Ignore negative values'],
            correctAnswers: ['Split the integral where $v(t) = 0$'],
            hints: ['Total distance uses $|v(t)|$.'],
            explanation: 'Split at zeros of $v(t)$ and take the absolute value of each piece, or integrate $|v(t)|$.'
          },
          {
            label: 'Displacement gives the _____, while total distance gives the _____:',
            options: ['Net change in position; odometer reading', 'Speed; velocity', 'Distance; displacement', 'Total; partial'],
            correctAnswers: ['Net change in position; odometer reading'],
            hints: ['Think of a car trip.'],
            explanation: 'Displacement is the straight-line distance from start to end. Total distance is how far the odometer reads.'
          }
        ]
      }
    },
    {
      id: 'pm3-input',
      type: 'input-box' as const,
      content: '**Calculate total distance.** \u270d\ufe0f',
      exercise: {
        question: '$v(t) = t - 3$ on $[0, 5]$. Find the total distance traveled.\n\nIf the answer is $\\frac{a}{b}$ in lowest terms, find $a + b$.\n\n(Enter an integer.)',
        correctAnswer: '15',
        acceptableAnswers: ['15'],
        hints: [
          '$v = 0$ at $t = 3$. Split: $[0,3]$ and $[3,5]$.',
          '$\\int_0^3 (3-t)\\,dt = [3t - t^2/2]_0^3 = 9 - 9/2 = 9/2$.',
          '$\\int_3^5 (t-3)\\,dt = [t^2/2 - 3t]_3^5 = (25/2-15)-(9/2-9) = -5/2+9/2 = 2$. Total $= 9/2 + 2 = 13/2$. $a+b = 15$.'
        ],
        explanation: 'Total distance $= 9/2 + 2 = 13/2$. $a + b = 13 + 2 = 15$.'
      }
    },
    {
      id: 'pm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

- Displacement $= \\int_a^b v(t)\\,dt$ (net change, can be negative)
- Total distance $= \\int_a^b |v(t)|\\,dt$ (always positive)
- Split the integral at points where $v(t) = 0$
- Displacement $= 0$ means the particle returned to start`
    }
  ]
};
