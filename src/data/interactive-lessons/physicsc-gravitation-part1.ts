export const physCGravitationPart1Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p1-intro',
      type: 'text' as const,
      content: `# 🌍 Newton's Law of Universal Gravitation

**Part 1 of 7 — The Gravitational Force**

---

### The Law

$F = G\\frac{m_1 m_2}{r^2}$

| Constant | Value |
|----------|-------|
| $G$ | $6.674 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$ |

---

### Gravitational Field

$\\vec{g} = -\\frac{GM}{r^2}\\hat{r}$

At Earth's surface: $g \\approx 9.8 \\text{ m/s}^2$

> 🔑 Gravity is always attractive. The force is along the line connecting the two masses.`
    },
    {
      id: 'physicsc-gravitation-p1-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Deriving Surface Gravity

Earth has mass $M = 5.97 \\times 10^{24} \\text{ kg}$ and radius $R = 6.37 \\times 10^6 \\text{ m}$. Show how $g$ at the surface follows from Newton's law, then evaluate it.

**Step 1 — Force on a test mass $m$.** At the surface, $r = R$, so

$F = \\frac{GMm}{R^2}$

**Step 2 — Identify the field.** The gravitational field is the force per unit mass, $g = F/m$, so the test mass cancels:

$g = \\frac{GM}{R^2}$

**Step 3 — Evaluate.**

$g = \\frac{(6.674 \\times 10^{-11})(5.97 \\times 10^{24})}{(6.37 \\times 10^6)^2} \\approx 9.8 \\text{ m/s}^2$

> 🔑 Surface gravity depends on a planet's mass and radius — not on the falling object's mass, which is why all objects fall at the same rate.`
    },
    {
      id: 'physicsc-gravitation-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If the distance between two masses is tripled, the gravitational force:',
            options: ['Triples', 'Is reduced to 1/3', 'Is reduced to 1/9', 'Is unchanged'],
            correctAnswer: 2,
            explanation: '$F \\propto \\frac{1}{r^2}$. Tripling $r$ makes $F$ decrease by a factor $3^2 = 9$.'
          },
          {
            question: 'The gravitational field has units of:',
            options: ['N', 'N/kg', '$kg\\cdot m/s^{2}$', 'J/kg'],
            correctAnswer: 1,
            explanation: 'Gravitational field is force per unit mass = N/kg, which is dimensionally equivalent to $m/s^{2}$.'
          },
          {
            question: 'A planet has twice Earth\'s mass and twice Earth\'s radius. Its surface gravity is:',
            options: ['$4g_E$', '$2g_E$', '$\\frac{1}{2}g_E$', '$g_E$'],
            correctAnswer: 2,
            explanation: '$g = \\frac{GM}{R^2}$. Doubling $M$ doubles the top; doubling $R$ multiplies the bottom by 4. Net factor $= 2/4 = \\frac{1}{2}$.'
          },
          {
            question: 'The gravitational force that the Earth exerts on the Moon compared to the force the Moon exerts on the Earth is:',
            options: ['Much larger', 'Much smaller', 'Equal in magnitude (Newton\'s third law)', 'Zero'],
            correctAnswer: 2,
            explanation: 'By Newton\'s third law (and the symmetry of $F = Gm_1m_2/r^2$), the two gravitational forces are equal in magnitude and opposite in direction.'
          },
          {
            question: 'Doubling both masses while keeping $r$ fixed changes the gravitational force by a factor of:',
            options: ['2', '4', '8', '1'],
            correctAnswer: 1,
            explanation: '$F \\propto m_1 m_2$. Doubling each mass gives $2 \\times 2 = 4$ times the force.'
          },
          {
            question: 'Two equal masses are separated by distance $r$. At the midpoint between them, the net gravitational field is:',
            options: ['Maximum', 'Zero', 'Equal to $GM/r^2$', 'Pointing toward the heavier mass'],
            correctAnswer: 1,
            explanation: 'The two equal fields point in opposite directions at the midpoint and cancel, giving a net field of zero.'
          }
        ]
      }
    }
  ]
};
