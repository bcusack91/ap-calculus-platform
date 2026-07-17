export const physics1MotionGraphsPart4Data = {
  topicSlug: 'motion-graphs',
  sections: [
    {
      id: 'mg4-intro',
      type: 'text' as const,
      content: `
# 🔄 Converting Between Graph Types

**Part 4 of 7 — Motion Graphs**

One of the most important skills in AP Physics is translating between $x$-$t$, $v$-$t$, and $a$-$t$ graphs. Each graph type contains enough information to construct the others (given initial conditions).
      `
    },
    {
      id: 'mg4-chain',
      type: 'text' as const,
      content: `
## The Graph Conversion Chain

$$x\\text{-}t \\xrightarrow{\\text{slope}} v\\text{-}t \\xrightarrow{\\text{slope}} a\\text{-}t$$

$$a\\text{-}t \\xrightarrow{\\text{area}} v\\text{-}t \\xrightarrow{\\text{area}} x\\text{-}t$$

### Going "Down" (Differentiation)

| From | To | Method |
|------|-----|--------|
| $x$-$t$ | $v$-$t$ | Take the **slope** of the $x$-$t$ graph |
| $v$-$t$ | $a$-$t$ | Take the **slope** of the $v$-$t$ graph |

### Going "Up" (Integration)

| From | To | Method | Need |
|------|-----|--------|------|
| $a$-$t$ | $v$-$t$ | Find the **area** under $a$-$t$ | Initial velocity $v_0$ |
| $v$-$t$ | $x$-$t$ | Find the **area** under $v$-$t$ | Initial position $x_0$ |

> **Important:** Going "up" requires initial conditions. Going "down" does not.
      `
    },
    {
      id: 'mg4-examples',
      type: 'text' as const,
      content: `
## Example Conversions

### From $x$-$t$ to $v$-$t$

If $x$-$t$ is a **straight line** with slope 5 m/s:
→ $v$-$t$ is a **horizontal line** at $v = 5$ m/s

If $x$-$t$ is a **parabola** (concave up):
→ $v$-$t$ is a **straight line** with positive slope (velocity increasing linearly)

### From $v$-$t$ to $a$-$t$

If $v$-$t$ is a **horizontal line** at 8 m/s:
→ $a$-$t$ is a **horizontal line** at $a = 0$

If $v$-$t$ is a **straight line** with slope $-3$ $m/s^{2}$:
→ $a$-$t$ is a **horizontal line** at $a = -3$ $m/s^{2}$

### Constant Acceleration Summary

| $x$-$t$ | $v$-$t$ | $a$-$t$ |
|---------|---------|---------|
| Parabola | Straight line | Horizontal line |
      `
    },
    {
      id: 'mg4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Graph Conversions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If the $x$-$t$ graph is a straight line with positive slope, the $v$-$t$ graph is:',
            options: [
              'A straight line with positive slope',
              'A horizontal line at a positive value',
              'A parabola',
              'A horizontal line at zero'
            ],
            correctAnswer: 1,
            explanation: 'A straight line on the $x$-$t$ graph has constant slope, so the velocity is constant. The $v$-$t$ graph is a horizontal line at the value of that slope.'
          },
          {
            question: 'If the $v$-$t$ graph is a straight line with slope $-4$ $m/s^{2}$, the $a$-$t$ graph is:',
            options: [
              'A straight line with negative slope',
              'A horizontal line at $a = -4$ $m/s^{2}$',
              'A parabola',
              'A straight line with positive slope'
            ],
            correctAnswer: 1,
            explanation: 'The slope of the $v$-$t$ graph is the acceleration. A constant slope of $-4$ $m/s^{2}$ means constant acceleration, so the $a$-$t$ graph is a horizontal line at $-4$ $m/s^{2}$.'
          },
          {
            question: 'If the $a$-$t$ graph is a horizontal line at $a = 2$ $m/s^{2}$ and $v_0 = 0$, the $v$-$t$ graph is:',
            options: [
              'A horizontal line at 2 m/s',
              'A straight line starting at 0 with slope 2',
              'A parabola',
              'A horizontal line at 0'
            ],
            correctAnswer: 1,
            explanation: 'Constant acceleration means velocity changes linearly. Starting from $v_0 = 0$ with $a = 2$ $m/s^{2}$, the $v$-$t$ graph is $v = 2t$, a straight line through the origin with slope 2.'
          }
        ]
      }
    },
    {
      id: 'mg4-matching',
      type: 'dropdown-select' as const,
      content: `
**Match the Graph Relationships** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x$-$t$ graph is a parabola → $v$-$t$ graph is a:',
            options: ['horizontal line', 'straight line', 'parabola', 'vertical line'],
            correctIndex: 1,
            explanation: 'The derivative of a quadratic (parabola) is linear (straight line).'
          },
          {
            label: '$v$-$t$ graph is a horizontal line → $x$-$t$ graph is a:',
            options: ['horizontal line', 'straight line', 'parabola', 'curve'],
            correctIndex: 1,
            explanation: 'Constant velocity (horizontal $v$-$t$) means position changes linearly (straight line $x$-$t$).'
          },
          {
            label: '$a$-$t$ graph is a horizontal line at $a > 0$ → $v$-$t$ graph is:',
            options: ['a horizontal line', 'a straight line with positive slope', 'a parabola', 'a straight line with negative slope'],
            correctIndex: 1,
            explanation: 'Constant positive acceleration means velocity increases linearly over time.'
          },
          {
            label: 'To go from $v$-$t$ to $x$-$t$, you calculate the:',
            options: ['slope of $v$-$t$', 'area under $v$-$t$', 'slope of $x$-$t$', 'area under $a$-$t$'],
            correctIndex: 1,
            explanation: 'Area under the $v$-$t$ curve gives displacement, which (combined with $x_0$) gives the $x$-$t$ graph.'
          }
        ]
      }
    },
    {
      id: 'mg4-calculations',
      type: 'input-boxes' as const,
      content: `
**Graph Conversion Practice** 🧮

A $v$-$t$ graph shows a straight line from $v = 0$ at $t = 0$ to $v = 20$ m/s at $t = 5$ s, then constant at $v = 20$ m/s from $t = 5$ to $t = 10$ s.

1) What is the acceleration from $t = 0$ to $t = 5$ s? $(in m/s^{2})$

2) What is the displacement from $t = 0$ to $t = 5$ s? (in meters)

3) What is the total displacement from $t = 0$ to $t = 10$ s? (in meters)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '50', '150'],
        hint1: 'Slope = $20/5$',
        hint2: 'Triangle: $\\frac{1}{2}(5)(20) = 50$ m',
        hint3: 'Triangle + rectangle: $50 + 20(5) = 50 + 100$',
        explanation: '1) $a = 20/5 = 4$ $m/s^{2}$. 2) $\\frac{1}{2}(5)(20) = 50$ m. 3) $50 + 20(5) = 50 + 100 = 150$ m.'
      }
    },
    {
      id: 'mg4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Graph Conversions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The $x$-$t$ graph for an object is a downward-opening parabola. The corresponding $a$-$t$ graph is:',
            options: [
              'A horizontal line at a negative value',
              'A horizontal line at a positive value',
              'A straight line with negative slope',
              'A parabola'
            ],
            correctAnswer: 0,
            explanation: 'A downward-opening parabola on $x$-$t$ means $x = x_0 + v_0t + \\frac{1}{2}at^2$ with $a < 0$. The $v$-$t$ graph is a straight line with negative slope, and the $a$-$t$ graph is a horizontal line at that negative acceleration value.'
          },
          {
            question: 'An object\'s $v$-$t$ graph crosses the time axis. At that moment, the $x$-$t$ graph has:',
            options: [
              'A discontinuity',
              'A maximum or minimum (turning point)',
              'An inflection point',
              'A vertical tangent'
            ],
            correctAnswer: 1,
            explanation: 'When $v = 0$, the slope of the $x$-$t$ graph is zero. This means the $x$-$t$ graph has a horizontal tangent — a maximum or minimum — corresponding to the object reversing direction.'
          }
        ]
      }
    }
  ]
}
