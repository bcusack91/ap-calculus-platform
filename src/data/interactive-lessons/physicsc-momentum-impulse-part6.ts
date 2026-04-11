export const physCMomentumPart6Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Momentum Workshop

**Part 6 of 7 — AP Physics C Problem Strategies**

---

### Types of Momentum Problems on AP Physics C

| Problem Type | Key Approach |
|-------------|-------------|
| Impulse calculation | $J = \\int F \, dt$ or $J = \\Delta p$ |
| Collision (1D) | Conservation of $p$; check if elastic |
| Collision (2D) | Separate $x$ and $y$ components |
| Explosion | Reverse collision — one object splits |
| Variable mass | $F = dp/dt$ with changing $m$ |
| Center of mass | $x_{cm} = \\Sigma m_i x_i / M$ |

---

### Worked Example: Ballistic Pendulum

A bullet (mass $m = 0.01$ kg, speed $v_0 = 400$ m/s) embeds in a block (mass $M = 2$ kg) hanging from strings. How high does the block+bullet swing?

**Step 1 (Conservation of momentum during collision):**
$$mv_0 = (m + M)V$$
$$V = \\frac{0.01 \\times 400}{2.01} \\approx 1.99 \\text{ m/s}$$

**Step 2 (Conservation of energy during swing):**
$$\\frac{1}{2}(m+M)V^2 = (m+M)gh$$
$$h = \\frac{V^2}{2g} = \\frac{(1.99)^2}{2(9.8)} \\approx 0.20 \\text{ m}$$`
    },
    {
      id: 'physicsc-momentum-impulse-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a ballistic pendulum, which is conserved during the collision?',
            options: ['Kinetic energy', 'Momentum', 'Both KE and momentum', 'Neither'],
            correctAnswer: 1,
            explanation: 'The collision is perfectly inelastic (bullet embeds), so only momentum is conserved. KE is lost.'
          }
        ]
      }
    }
  ]
};
