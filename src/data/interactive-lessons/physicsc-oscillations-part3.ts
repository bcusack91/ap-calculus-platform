export const physCOscillationsPart3Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p3-intro',
      type: 'text' as const,
      content: `# 🕐 Pendulums

**Part 3 of 7 — Simple and Physical Pendulums**

---

### Simple Pendulum (small angle)

For small angles ($\\theta < 15°$):

$$T = 2\\pi\\sqrt{\\frac{L}{g}}$$

Note: Period is **independent of mass** and **independent of amplitude** (for small angles).

---

### Physical Pendulum

Any rigid body oscillating about a pivot:

$$T = 2\\pi\\sqrt{\\frac{I}{mgd}}$$

where $I$ = moment of inertia about pivot, $d$ = distance from pivot to center of mass.

---

### Torsional Oscillator

$$T = 2\\pi\\sqrt{\\frac{I}{\\kappa}}$$

where $\\kappa$ is the torsional constant (restoring torque = $-\\kappa\\theta$).`
    },
    {
      id: 'physicsc-oscillations-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Doubling the length of a simple pendulum changes the period by:',
            options: ['$2$', '$\\sqrt{2}$', '$4$', '$1/2$'],
            correctAnswer: 1,
            explanation: '$T = 2\\pi\\sqrt{L/g}$. Doubling $L$ multiplies $T$ by $\\sqrt{2}$.'
          },
          {
            question: 'A simple pendulum’s period does NOT depend on:',
            options: ['Length', 'Gravity', 'Mass', 'All of these'],
            correctAnswer: 2,
            explanation: '$T = 2\\pi\\sqrt{L/g}$ — mass does not appear. Period depends only on $L$ and $g$.'
          }
        ]
      }
    }
  ]
};
