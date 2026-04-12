export const calcbcMotionPart1Data = {
  topicSlug: 'motion-along-curve-calcbc',
  sections: [
    {
      id: 'motionalongcurve-p1-intro',
      type: 'text' as const,
      content: `# 🚀 Motion Along a Curve

**Part 1 of 7 — Position, Velocity, Acceleration Vectors**

---

### Vector-Valued Position

$$\\\\vec{r}(t) = \\\\langle x(t), y(t) \\\\rangle$$

### Velocity Vector

$$\\\\vec{v}(t) = \\\\langle x'(t), y'(t) \\\\rangle$$

### Acceleration Vector

$$\\\\vec{a}(t) = \\\\langle x''(t), y''(t) \\\\rangle$$

### Speed (Scalar)

$$|\\\\vec{v}(t)| = \\\\sqrt{[x'(t)]^2 + [y'(t)]^2}$$

---

### Example

$\\\\vec{r}(t) = \\\\langle t^2, 3t \\\\rangle$

$\\\\vec{v}(t) = \\\\langle 2t, 3 \\\\rangle$

Speed at $t = 1$: $\\\\sqrt{4 + 9} = \\\\sqrt{13}$

### Total Distance Traveled

$$\\\\text{Distance} = \\\\int_a^b |\\\\vec{v}(t)|\\\\,dt = \\\\int_a^b \\\\sqrt{[x'(t)]^2 + [y'(t)]^2}\\\\,dt$$`
    },
    {
      id: 'motionalongcurve-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes position, velocity, acceleration vectors?',
            options: ['A core AP Calculus BC concept', 'Not on the AP exam', 'Only relevant for multivariable calculus', 'A statistics topic'],
            correctAnswer: 0,
            explanation: 'Position, Velocity, Acceleration Vectors is a key topic tested on the AP Calculus BC exam.'
          }
        ]
      }
    }
  ]
};
