export const physics1MotionGraphsPart6Data = {
  topicSlug: 'motion-graphs',
  sections: [
    {
      id: 'mg6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Motion Graphs**

Time to sharpen your graph skills with a variety of practice problems. These problems mirror the style and difficulty of AP exam questions involving motion graphs.
      `
    },
    {
      id: 'mg6-warmup',
      type: 'multiple-choice' as const,
      content: `
**Graph Reading Warm-Up** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A $v$-$t$ graph shows a straight line from $(0, 12)$ to $(6, 0)$. What is the displacement?',
            options: [
              '12 m',
              '24 m',
              '36 m',
              '72 m'
            ],
            correctAnswer: 2,
            explanation: 'The area is a triangle: $\\frac{1}{2}(6)(12) = 36$ m.'
          },
          {
            question: 'The same $v$-$t$ graph continues from $(6, 0)$ to $(10, -8)$. What is the net displacement from $t = 0$ to $t = 10$ s?',
            options: [
              '20 m',
              '36 m',
              '52 m',
              '4 m'
            ],
            correctAnswer: 0,
            explanation: 'Positive area (0-6 s): $\\frac{1}{2}(6)(12) = 36$ m. Negative area (6-10 s): $\\frac{1}{2}(4)(8) = 16$ m (negative). Net = $36 - 16 = 20$ m.'
          },
          {
            question: 'For the same motion, what is the total distance traveled from $t = 0$ to $t = 10$ s?',
            options: [
              '20 m',
              '36 m',
              '52 m',
              '16 m'
            ],
            correctAnswer: 2,
            explanation: 'Total distance = |positive area| + |negative area| = $36 + 16 = 52$ m.'
          }
        ]
      }
    },
    {
      id: 'mg6-conversion-practice',
      type: 'input-boxes' as const,
      content: `
**Graph Conversion Practice** 🧮

An $a$-$t$ graph shows:
- $a = +6$ $m/s^{2}$ from $t = 0$ to $t = 3$ s
- $a = 0$ from $t = 3$ to $t = 7$ s
- $a = -4$ $m/s^{2}$ from $t = 7$ to $t = 10$ s

The initial velocity is $v_0 = 2$ m/s.

1) What is the velocity at $t = 3$ s? (in m/s)

2) What is the velocity at $t = 7$ s? (in m/s)

3) What is the velocity at $t = 10$ s? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '20', '8'],
        hint1: '$v(3) = v_0 + a_1 \\cdot t_1 = 2 + 6(3)$',
        hint2: '$a = 0$ from $t = 3$ to $t = 7$, so velocity doesn\'t change.',
        hint3: '$v(10) = v(7) + a_3(t_{10} - t_7) = 20 + (-4)(3)$',
        explanation: '1) $v(3) = 2 + 6(3) = 20$ m/s. 2) $v(7) = 20 + 0(4) = 20$ m/s (no change during constant velocity phase). 3) $v(10) = 20 + (-4)(3) = 20 - 12 = 8$ m/s.'
      }
    },
    {
      id: 'mg6-ap-style',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Graph Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An object\'s $v$-$t$ graph is a straight line from $v = -4$ m/s at $t = 0$ to $v = +8$ m/s at $t = 6$ s. The object changes direction at:',
            options: [
              '$t = 1$ s',
              '$t = 2$ s',
              '$t = 3$ s',
              '$t = 4$ s'
            ],
            correctAnswer: 1,
            explanation: 'The acceleration is $a = (8-(-4))/6 = 2$ $m/s^{2}$. Direction changes when $v = 0$: $0 = -4 + 2t \\Rightarrow t = 2$ s.'
          },
          {
            question: 'For the same object, the displacement from $t = 0$ to $t = 6$ s is:',
            options: [
              '4 m',
              '8 m',
              '12 m',
              '24 m'
            ],
            correctAnswer: 2,
            explanation: 'Area = trapezoid: $\\frac{1}{2}(v_i + v_f) \\times t = \\frac{1}{2}(-4 + 8)(6) = \\frac{1}{2}(4)(6) = 12$ m.'
          }
        ]
      }
    },
    {
      id: 'mg6-challenge',
      type: 'input-boxes' as const,
      content: `
**Challenge: Complete Analysis** 🏆

A car starts from rest. Its $v$-$t$ graph is a straight line reaching 20 m/s at $t = 5$ s, then stays at 20 m/s until $t = 15$ s, then decelerates uniformly to rest at $t = 20$ s.

1) What is the total displacement? (in meters)

2) What is the average velocity for the entire trip? (in m/s)

3) What is the deceleration magnitude in the braking phase? $(in m/s^{2})$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['300', '15', '4'],
        hint1: 'Three areas: triangle + rectangle + triangle = $\\frac{1}{2}(5)(20) + 20(10) + \\frac{1}{2}(5)(20)$',
        hint2: '$v_{\\text{avg}} = \\Delta x / \\Delta t = 300/20$',
        hint3: '$|a| = \\Delta v / \\Delta t = 20/5$',
        explanation: '1) $50 + 200 + 50 = 300$ m. 2) $300/20 = 15$ m/s. 3) $|a| = 20/5 = 4$ $m/s^{2}$.'
      }
    },
    {
      id: 'mg6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Graph Problem Solving** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Two objects have the same $v$-$t$ graph from $t = 0$ to $t = 5$ s, but Object A starts at $x = 0$ and Object B starts at $x = 10$ m. Their $x$-$t$ graphs will be:',
            options: [
              'Identical',
              'Parallel (same shape, shifted vertically by 10 m)',
              'Mirror images',
              'Completely different shapes'
            ],
            correctAnswer: 1,
            explanation: 'Same $v$-$t$ graph means the same changes in position. But Object B starts 10 m ahead, so its $x$-$t$ graph is shifted up by 10 m — parallel to Object A\'s.'
          },
          {
            question: 'A $v$-$t$ graph shows $v = 10 - 2t$ (m/s). When is the object farthest from its starting position?',
            options: [
              '$t = 0$ s',
              '$t = 5$ s',
              '$t = 10$ s',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: 'The object is farthest when it reverses direction, which occurs when $v = 0$: $0 = 10 - 2t \\Rightarrow t = 5$ s. After this, the object moves back toward the start.'
          }
        ]
      }
    }
  ]
}
