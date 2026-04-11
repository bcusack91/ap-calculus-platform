export const physCOscillationsPart6Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Oscillations Workshop

**Part 6 of 7 — AP Physics C Strategies**

---

### Oscillation Problem Types

| Type | Key Formula |
|------|------------|
| Mass-spring period | $T = 2\\pi\\sqrt{m/k}$ |
| Simple pendulum | $T = 2\\pi\\sqrt{L/g}$ |
| Physical pendulum | $T = 2\\pi\\sqrt{I/(mgd)}$ |
| Energy in SHM | $E = \\frac{1}{2}kA^2$ |
| Max speed | $v_{max} = A\\omega$ |
| Max acceleration | $a_{max} = A\\omega^2$ |

---

### Worked Example

A 0.5 kg mass on a spring ($k = 200$ N/m) is pulled 0.1 m and released.

$\\omega = \\sqrt{200/0.5} = 20$ rad/s

$T = 2\\pi/20 = 0.314$ s

$v_{max} = 0.1 \\times 20 = 2$ m/s

$E = \\frac{1}{2}(200)(0.1)^2 = 1$ J`
    },
    {
      id: 'physicsc-oscillations-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A spring ($k = 50$ N/m) with 0.2 kg mass has $\\omega =$',
            options: ['$5$ rad/s', '$\\sqrt{250}$ rad/s', '$10$ rad/s', '$250$ rad/s'],
            correctAnswer: 1,
            explanation: '$\\omega = \\sqrt{k/m} = \\sqrt{50/0.2} = \\sqrt{250} \\approx 15.8$ rad/s.'
          }
        ]
      }
    }
  ]
};
