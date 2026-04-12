export const calcbcPolarAreaPart1Data = {
  topicSlug: 'polar-area-derivatives-calcbc',
  sections: [
    {
      id: 'polarareaderivatives-p1-intro',
      type: 'text' as const,
      content: `# 📐 Polar Area & Derivatives

**Part 1 of 7 — Polar Area Formula**

---

### Area in Polar Coordinates

$$A = \\\\frac{1}{2}\\\\int_{\\\\alpha}^{\\\\beta} [r(\\\\theta)]^2 \\\\, d\\\\theta$$

This comes from summing infinitesimal triangular sectors.

---

### Key Curves to Know

| Curve | Equation |
|-------|----------|
| Circle | $r = a$ |
| Cardioid | $r = a(1 + \\\\cos\\\\theta)$ |
| Rose (n petals) | $r = a\\\\cos(n\\\\theta)$ |
| Limaçon | $r = a + b\\\\cos\\\\theta$ |
| Lemniscate | $r^2 = a^2\\\\cos(2\\\\theta)$ |

### Worked Example

Area enclosed by $r = 2\\\\cos\\\\theta$ (circle of radius 1):

$$A = \\\\frac{1}{2}\\\\int_0^{\\\\pi} (2\\\\cos\\\\theta)^2 d\\\\theta = \\\\frac{1}{2}\\\\int_0^{\\\\pi} 4\\\\cos^2\\\\theta \\\\, d\\\\theta = \\\\pi$$`
    },
    {
      id: 'polarareaderivatives-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes polar area formula?',
            options: ['A core AP Calculus BC concept', 'Not on the AP exam', 'Only relevant for multivariable calculus', 'A statistics topic'],
            correctAnswer: 0,
            explanation: 'Polar Area Formula is a key topic tested on the AP Calculus BC exam.'
          }
        ]
      }
    }
  ]
};
