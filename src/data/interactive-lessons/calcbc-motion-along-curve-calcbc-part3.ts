export const calcbcMotionPart3Data = {
  topicSlug: 'motion-along-curve-calcbc',
  sections: [
    {
      id: 'mc3-intro',
      type: 'text' as const,
      content: `# Particle at Rest, Direction Changes, and Speeding Up/Slowing Down

**Part 3 of 7 — Analyzing Motion Behavior**

### Particle at Rest

A particle is at rest when its **speed is zero**:

$$\\boxed{|\\vec{v}(t)| = 0 \\iff x'(t) = 0 \\;\\text{AND}\\; y'(t) = 0}$$

> **Caution:** On a line, the particle is at rest when $v(t) = 0$. On a curve, BOTH components must be zero simultaneously.

### Direction Changes

A direction change in $x$ occurs when $x'(t)$ changes sign (passes through zero).
A direction change in $y$ occurs when $y'(t)$ changes sign.

The particle can change its $x$-direction while continuing in the same $y$-direction and vice versa.`
    },
    {
      id: 'mc3-example',
      type: 'text' as const,
      content: `### Worked Example

$x(t) = t^3 - 6t^2 + 9t$, $y(t) = t^2 - 4t$ for $t \\ge 0$.

**Velocity:** $\\vec{v}(t) = \\langle 3t^2 - 12t + 9,\\; 2t - 4 \\rangle$

**At rest?** Need both zero:
- $3t^2 - 12t + 9 = 0 \\Rightarrow 3(t-1)(t-3) = 0 \\Rightarrow t = 1, 3$
- $2t - 4 = 0 \\Rightarrow t = 2$
- No time makes BOTH zero, so the particle is **never at rest**.

**$x$-direction changes** at $t = 1$ and $t = 3$ (where $x'$ changes sign).
**$y$-direction changes** at $t = 2$ (where $y'$ changes sign).

| Interval | $x'(t)$ sign | $y'(t)$ sign | Motion direction |
|----------|-------------|-------------|-----------------|
| $(0, 1)$ | $+$ | $-$ | Right and down |
| $(1, 2)$ | $-$ | $-$ | Left and down |
| $(2, 3)$ | $-$ | $+$ | Left and up |
| $(3, \\infty)$ | $+$ | $+$ | Right and up |`
    },
    {
      id: 'mc3-speedup',
      type: 'text' as const,
      content: `### Speeding Up vs. Slowing Down (2D)

In one dimension: speeding up when $v$ and $a$ have the same sign.

In two dimensions, the concept generalizes:

$$\\boxed{\\text{Speeding up when } \\vec{v} \\cdot \\vec{a} > 0, \\quad \\text{slowing down when } \\vec{v} \\cdot \\vec{a} < 0}$$

The dot product $\\vec{v} \\cdot \\vec{a} = x'x'' + y'y''$ measures whether acceleration has a component in the direction of motion.

> **AP Tip:** The speed function is $s(t) = |\\vec{v}(t)|$. By the chain rule, $\\frac{ds}{dt} = \\frac{\\vec{v} \\cdot \\vec{a}}{|\\vec{v}|}$. So $s'(t) > 0$ iff $\\vec{v} \\cdot \\vec{a} > 0$.`
    },
    {
      id: 'mc3-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: 'At $t = 2$, $\\vec{v}(2) = \\langle 3, 0 \\rangle$ and $\\vec{a}(2) = \\langle -1, 5 \\rangle$. Is the particle speeding up?',
            options: ['No — $\\vec{v} \\cdot \\vec{a} = -3 < 0$ (slowing down)', 'Yes — $\\vec{v} \\cdot \\vec{a} > 0$', 'Cannot determine without $y$-velocity', 'Neither — speed is constant'],
            correctAnswer: 0,
            explanation: '$\\vec{v} \\cdot \\vec{a} = (3)(-1) + (0)(5) = -3 < 0$. Slowing down.'
          },
          {
            question: 'A particle is at rest when:',
            options: ['Both $x\'(t) = 0$ and $y\'(t) = 0$ at the same $t$', 'Either $x\'(t) = 0$ or $y\'(t) = 0$', '$x\'(t) + y\'(t) = 0$', 'Speed equals 1'],
            correctAnswer: 0,
            explanation: 'At rest means speed = 0, which requires BOTH components to be zero.'
          },
          {
            question: 'If $x\'(t)$ changes from positive to negative at $t = 5$:',
            options: ['The particle reverses horizontal direction at $t = 5$', 'The particle is at rest at $t = 5$', 'The particle reverses vertical direction at $t = 5$', 'The speed is zero at $t = 5$'],
            correctAnswer: 0,
            explanation: '$x\'$ changing sign means horizontal direction reversal. The particle is NOT necessarily at rest since $y\'(5)$ may be nonzero.'
          }
        ]
      }
    },
    {
      id: 'mc3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Motion Analysis**',
      exercise: {
        dropdowns: [
          {
            label: 'Given $\\vec{v}(t) = \\langle t - 2, t - 5 \\rangle$, the particle reverses $x$-direction at:',
            options: ['$t = 2$', '$t = 5$', '$t = 2$ and $t = 5$', 'Never'],
            correctAnswers: ['$t = 2$'],
            hints: ['$x\'(t) = t - 2$ changes sign at $t = 2$.'],
            explanation: '$x\'(t) = t - 2$ changes from negative to positive at $t = 2$.'
          },
          {
            label: 'The particle is at rest at:',
            options: ['Never (components zero at different times)', '$t = 2$', '$t = 5$', '$t = 3.5$'],
            correctAnswers: ['Never (components zero at different times)'],
            hints: ['Both components must be zero at the SAME time.'],
            explanation: '$x\'(t) = 0$ at $t = 2$, $y\'(t) = 0$ at $t = 5$. Different times, so never at rest.'
          },
          {
            label: 'At $t = 3$, $\\vec{v}(3) = \\langle 1, -2 \\rangle$, $\\vec{a}(3) = \\langle 1, 1 \\rangle$. The particle is:',
            options: ['Slowing down ($\\vec{v} \\cdot \\vec{a} = 1 - 2 = -1 < 0$)', 'Speeding up', 'Moving at constant speed', 'At rest'],
            correctAnswers: ['Slowing down ($\\vec{v} \\cdot \\vec{a} = 1 - 2 = -1 < 0$)'],
            hints: ['Compute $\\vec{v} \\cdot \\vec{a} = (1)(1) + (-2)(1)$.'],
            explanation: '$\\vec{v} \\cdot \\vec{a} = 1 - 2 = -1 < 0$, so slowing down.'
          }
        ]
      }
    },
    {
      id: 'mc3-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'Given $\\vec{v}(t) = \\langle 2t - 6, 3 \\rangle$, at what time $t$ does the particle reverse its $x$-direction? (Enter a number.)',
        correctAnswer: '3',
        acceptableAnswers: ['3', '3.0'],
        hints: ['Set $x\'(t) = 2t - 6 = 0$.'],
        explanation: '$2t - 6 = 0 \\Rightarrow t = 3$. At $t = 3$, $x\'$ changes sign.'
      }
    },
    {
      id: 'mc3-summary',
      type: 'text' as const,
      content: `### Key Concepts

| Condition | What it means |
|-----------|--------------|
| $x'(t) = 0$ AND $y'(t) = 0$ | At rest |
| $x'(t)$ changes sign | Horizontal direction change |
| $y'(t)$ changes sign | Vertical direction change |
| $\\vec{v} \\cdot \\vec{a} > 0$ | Speeding up |
| $\\vec{v} \\cdot \\vec{a} < 0$ | Slowing down |

**Next: Part 4 — Tangent Lines and Second Derivatives**`
    }
  ]
};
