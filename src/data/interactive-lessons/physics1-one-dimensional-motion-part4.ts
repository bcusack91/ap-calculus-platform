export const physics1OneDimensionalMotionPart4Data = {
  topicSlug: 'one-dimensional-motion',
  sections: [
    {
      id: 'om4-intro',
      type: 'text' as const,
      content: `
# 📐 The Kinematic Equations

**Part 4 of 7 — One-Dimensional Motion**

When acceleration is **constant**, we can derive a powerful set of equations that relate position, velocity, acceleration, and time. These are the **kinematic equations** — the core tools for solving 1D motion problems.
      `
    },
    {
      id: 'om4-equations',
      type: 'text' as const,
      content: `
## The Big Three Kinematic Equations

For **constant acceleration** along a straight line:

### Equation 1: Velocity-Time
$$v = v_0 + at$$

### Equation 2: Position-Time
$$x = x_0 + v_0 t + \\frac{1}{2}at^2$$

### Equation 3: Velocity-Position (no time)
$$v^2 = v_0^2 + 2a(x - x_0)$$

Or equivalently: $v^2 = v_0^2 + 2a\\Delta x$

### Variable Summary

| Symbol | Meaning |
|--------|---------|
| $x_0$ | Initial position |
| $x$ | Final position |
| $v_0$ | Initial velocity |
| $v$ | Final velocity |
| $a$ | Constant acceleration |
| $t$ | Elapsed time |

> **Important:** These equations work ONLY for constant acceleration. If $a$ changes, you need calculus or break the problem into intervals of constant $a$.
      `
    },
    {
      id: 'om4-choosing',
      type: 'text' as const,
      content: `
## Choosing the Right Equation

Each equation is missing one variable. Choose based on what you **know** and what you **need**:

| Equation | Missing Variable |
|----------|-----------------|
| $v = v_0 + at$ | $x$ (position) |
| $x = x_0 + v_0t + \\frac{1}{2}at^2$ | $v$ (final velocity) |
| $v^2 = v_0^2 + 2a\\Delta x$ | $t$ (time) |

### Problem-Solving Strategy

1. **List knowns** — identify which variables you have
2. **Identify the unknown** — what are you solving for?
3. **Choose the equation** — pick the one that contains your unknown and your knowns
4. **Solve algebraically** — rearrange and substitute
5. **Check units and sign** — does your answer make physical sense?
      `
    },
    {
      id: 'om4-example',
      type: 'text' as const,
      content: `
## Worked Example

**Problem:** A car starts from rest and accelerates at $3$ m/s² for $8$ s. Find (a) the final velocity and (b) the distance traveled.

**Solution:**

Known: $v_0 = 0$, $a = 3$ m/s², $t = 8$ s, $x_0 = 0$

**(a)** Use $v = v_0 + at$:
$$v = 0 + (3)(8) = 24 \\text{ m/s}$$

**(b)** Use $x = x_0 + v_0t + \\frac{1}{2}at^2$:
$$x = 0 + 0(8) + \\frac{1}{2}(3)(8)^2 = \\frac{1}{2}(3)(64) = 96 \\text{ m}$$

**Check:** We can verify with $v^2 = v_0^2 + 2a\\Delta x$:
$24^2 = 0 + 2(3)(96) = 576$ ✓
      `
    },
    {
      id: 'om4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Kinematic Equations** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which kinematic equation would you use to find displacement when you know initial velocity, final velocity, and acceleration but NOT time?',
            options: [
              '$v = v_0 + at$',
              '$x = x_0 + v_0t + \\frac{1}{2}at^2$',
              '$v^2 = v_0^2 + 2a\\Delta x$',
              'None of these'
            ],
            correctAnswer: 2,
            explanation: '$v^2 = v_0^2 + 2a\\Delta x$ is the equation that doesn\'t contain time. You can solve for $\\Delta x$ given $v$, $v_0$, and $a$.'
          },
          {
            question: 'A car decelerates from 20 m/s to rest over a distance of 50 m. What is the acceleration?',
            options: [
              '$-2$ m/s²',
              '$-4$ m/s²',
              '$+4$ m/s²',
              '$-8$ m/s²'
            ],
            correctAnswer: 1,
            explanation: 'Using $v^2 = v_0^2 + 2a\\Delta x$: $0 = 20^2 + 2a(50)$, so $0 = 400 + 100a$, giving $a = -4$ m/s².'
          },
          {
            question: 'The kinematic equations assume:',
            options: [
              'Velocity is constant',
              'Acceleration is constant',
              'The object starts from rest',
              'Motion is in the positive direction'
            ],
            correctAnswer: 1,
            explanation: 'The kinematic equations are derived assuming constant (uniform) acceleration. They do NOT require the object to start from rest or to move in the positive direction.'
          }
        ]
      }
    },
    {
      id: 'om4-calculations',
      type: 'input-boxes' as const,
      content: `
**Kinematic Equation Practice** 🧮

1) A motorcycle accelerates from $v_0 = 5$ m/s at $a = 2$ m/s² for $t = 6$ s. What is the final velocity? (in m/s)

2) A plane needs to reach 80 m/s to take off. If it starts from rest and accelerates at 4 m/s², what runway length does it need? (in meters)

3) A car traveling at 30 m/s brakes with $a = -6$ m/s². How long does it take to stop? (in seconds)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17', '800', '5'],
        hint1: '$v = v_0 + at = 5 + 2(6)$',
        hint2: 'Use $v^2 = v_0^2 + 2a\\Delta x$: $80^2 = 0 + 2(4)(\\Delta x)$',
        hint3: 'Use $v = v_0 + at$: $0 = 30 + (-6)t$',
        explanation: '1) $v = 5 + 2(6) = 5 + 12 = 17$ m/s. 2) $6400 = 8\\Delta x$, so $\\Delta x = 800$ m. 3) $0 = 30 - 6t$, so $t = 30/6 = 5$ s.'
      }
    },
    {
      id: 'om4-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Equation Selection Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find final velocity given $v_0$, $a$, and $t$, use:',
            options: ['$v = v_0 + at$', '$x = x_0 + v_0t + \\frac{1}{2}at^2$', '$v^2 = v_0^2 + 2a\\Delta x$', 'none of these'],
            correctIndex: 0,
            explanation: '$v = v_0 + at$ directly gives the final velocity from initial velocity, acceleration, and time.'
          },
          {
            label: 'To find displacement without knowing the final velocity, use:',
            options: ['$v = v_0 + at$', '$x = x_0 + v_0t + \\frac{1}{2}at^2$', '$v^2 = v_0^2 + 2a\\Delta x$', 'none of these'],
            correctIndex: 1,
            explanation: '$x = x_0 + v_0t + \\frac{1}{2}at^2$ relates displacement to initial velocity, acceleration, and time — no final velocity needed.'
          },
          {
            label: 'The equation $v^2 = v_0^2 + 2a\\Delta x$ is especially useful when _____ is unknown.',
            options: ['position', 'velocity', 'acceleration', 'time'],
            correctIndex: 3,
            explanation: 'This equation does not contain time $t$, so it\'s used when time is either unknown or not needed.'
          }
        ]
      }
    },
    {
      id: 'om4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Kinematic Equations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is thrown upward with $v_0 = 20$ m/s and decelerates at $10$ m/s² (due to gravity). How high does it go?',
            options: [
              '10 m',
              '20 m',
              '40 m',
              '200 m'
            ],
            correctAnswer: 1,
            explanation: 'At the top, $v = 0$. Using $v^2 = v_0^2 + 2a\\Delta x$: $0 = 20^2 + 2(-10)(\\Delta x)$, so $0 = 400 - 20\\Delta x$, giving $\\Delta x = 20$ m.'
          },
          {
            question: 'A particle starts from rest at the origin and has acceleration $a = 6$ m/s². What is its position at $t = 3$ s?',
            options: [
              '9 m',
              '18 m',
              '27 m',
              '54 m'
            ],
            correctAnswer: 2,
            explanation: '$x = x_0 + v_0t + \\frac{1}{2}at^2 = 0 + 0 + \\frac{1}{2}(6)(9) = 27$ m.'
          }
        ]
      }
    }
  ]
}
