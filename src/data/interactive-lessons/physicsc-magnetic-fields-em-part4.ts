export const physCEMMagFieldsPart4Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p4-intro',
      type: 'text' as const,
      content: `# 🔁 Ampere’s Law

**Part 4 of 7 — Symmetry and Magnetic Fields**

---

### Ampere’s Law

$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}$$

---

### When to Use Ampere’s Law

Use when there is sufficient symmetry to simplify $\\oint \\vec{B} \\cdot d\\vec{l}$:

| Configuration | Amperian Loop | Result |
|--------------|---------------|--------|
| Long straight wire | Circular loop (radius $r$) | $B = \\mu_0 I/(2\\pi r)$ |
| Solenoid | Rectangle (length $L$) | $B = \\mu_0 n I$ |
| Toroid | Circular loop inside | $B = \\mu_0 NI/(2\\pi r)$ |

> 🔑 Ampere's law is the magnetic analog of Gauss's law — use symmetry!`
    },
    {
      id: 'physicsc-magnetic-fields-em-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Inside an ideal solenoid, the magnetic field is:',
            options: ['Zero', 'Uniform ($B = \\mu_0 nI$)', 'Depends on position', 'Infinite'],
            correctAnswer: 1,
            explanation: 'Inside an ideal solenoid, $B = \\mu_0 nI$ — uniform and parallel to the axis.'
          },
          {
            question: 'Ampere’s law is most useful when:',
            options: ['No current flows', 'Current distribution has high symmetry', 'The field is zero', 'Charges are stationary'],
            correctAnswer: 1,
            explanation: 'Like Gauss’s law, Ampere’s law is most useful with high symmetry (infinite wire, solenoid, toroid).'
          }
        ]
      }
    }
  ]
};
