export const physCGravitationPart4Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p4-intro',
      type: 'text' as const,
      content: `# ⚡ Gravitational Potential

**Part 4 of 7 — Potential and Field**

---

### Gravitational Potential (per unit mass)

$$V = -\\frac{GM}{r}$$

Relationship to field:
$$\\vec{g} = -\\nabla V = -\\frac{dV}{dr}\\hat{r}$$

---

### Shell Theorem

| Location | Result |
|----------|--------|
| Outside a uniform sphere | Behaves as if all mass is at center |
| Inside a uniform shell | Zero gravitational field |

> 🔑 Only the mass at radii smaller than your position matters (for spherical symmetry).`
    },
    {
      id: 'physicsc-gravitation-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Inside a uniform spherical shell of mass $M$:',
            options: ['$g = GM/r^2$', '$g = 0$', '$g = GM/R^2$', '$g$ depends on position'],
            correctAnswer: 1,
            explanation: 'The Shell Theorem: the gravitational field inside a uniform spherical shell is zero.'
          }
        ]
      }
    }
  ]
};
