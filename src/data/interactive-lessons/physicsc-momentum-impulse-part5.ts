export const physCMomentumPart5Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p5-intro',
      type: 'text' as const,
      content: `# ⚖️ Center of Mass

**Part 5 of 7 — Center of Mass Motion**

---

### Center of Mass Position

For discrete masses:
$$x_{\\text{cm}} = \\frac{\\sum m_i x_i}{\\sum m_i} = \\frac{m_1 x_1 + m_2 x_2 + \\cdots}{m_1 + m_2 + \\cdots}$$

For continuous mass distributions:
$$x_{\\text{cm}} = \\frac{1}{M} \\int x \, dm$$

---

### Center of Mass Velocity

$$v_{\\text{cm}} = \\frac{\\sum m_i v_i}{M} = \\frac{p_{\\text{total}}}{M}$$

> 🔑 The center of mass of an isolated system moves at constant velocity (even during collisions).`
    },
    {
      id: 'physicsc-momentum-impulse-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two masses: 2 kg at $x=0$ and 4 kg at $x=6$ m. $x_{\\text{cm}} =$',
            options: ['$2$ m', '$3$ m', '$4$ m', '$5$ m'],
            correctAnswer: 2,
            explanation: '$x_{cm} = (2(0) + 4(6))/(2+4) = 24/6 = 4$ m.'
          },
          {
            question: 'The center of mass of an isolated system:',
            options: ['Accelerates', 'Moves at constant velocity', 'Is always at rest', 'Changes direction'],
            correctAnswer: 1,
            explanation: 'No net external force → $v_{cm}$ is constant (even during internal interactions).'
          }
        ]
      }
    }
  ]
};
