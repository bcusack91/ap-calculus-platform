export const physCOscillationsPart2Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p2-intro',
      type: 'text' as const,
      content: `# 📐 SHM Kinematics

**Part 2 of 7 — Position, Velocity, Acceleration**

---

### The Three Equations

$$x(t) = A\\cos(\\omega t + \\phi)$$

$$v(t) = \\frac{dx}{dt} = -A\\omega\\sin(\\omega t + \\phi)$$

$$a(t) = \\frac{dv}{dt} = -A\\omega^2\\cos(\\omega t + \\phi) = -\\omega^2 x$$

---

### Key Relationships

| Quantity | Maximum Value |
|----------|--------------|
| Position | $|x|_{\\text{max}} = A$ |
| Velocity | $|v|_{\\text{max}} = A\\omega$ |
| Acceleration | $|a|_{\\text{max}} = A\\omega^2$ |

> 🔑 Velocity leads position by $\\pi/2$. Acceleration leads velocity by $\\pi/2$. Acceleration is $\\pi$ out of phase with position.`
    },
    {
      id: 'physicsc-oscillations-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Maximum acceleration in SHM occurs when:',
            options: ['$x = 0$', '$x = A$ or $x = -A$', '$v$ is maximum', 'Energy is all kinetic'],
            correctAnswer: 1,
            explanation: '$a = -\\omega^2 x$, so $|a|$ is maximum when $|x|$ is maximum, i.e., at the turning points.'
          },
          {
            question: 'The maximum speed in SHM is:',
            options: ['$A/\\omega$', '$A\\omega$', '$A\\omega^2$', '$\\omega/A$'],
            correctAnswer: 1,
            explanation: '$v_{max} = A\\omega$, occurring at the equilibrium position.'
          }
        ]
      }
    }
  ]
};
