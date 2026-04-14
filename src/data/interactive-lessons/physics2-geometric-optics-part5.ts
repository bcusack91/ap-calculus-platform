export const physics2GeomOpticsPart5Data = {
  topicSlug: 'geometric-optics-mirrors',
  sections: [
    {
      id: 'geometricopticsmirrors-p5-intro',
      type: 'text' as const,
      content: `# 📐 Ray Diagrams for Mirrors

**Part 5 of 7 — Constructing Images Graphically**

---

### Why Ray Diagrams?

Ray diagrams let you **predict image location, size, and orientation** without any math. On the AP exam, you may be asked to draw or interpret ray diagrams. Even when calculating, a quick sketch serves as a valuable sanity check.

### The Three Principal Rays — Concave Mirror

From the tip of the object, draw any **two** of these three rays. The image forms where they intersect (or appear to intersect):

| Ray | Path to Mirror | Path After Reflection |
|-----|---------------|----------------------|
| **Parallel ray (P)** | Travels parallel to the principal axis | Reflects through the focal point $F$ |
| **Focal ray (F)** | Travels through the focal point $F$ | Reflects parallel to the principal axis |
| **Center ray (C)** | Travels through the center of curvature $C$ | Reflects back on itself (hits mirror at normal) |

> 🔑 Two rays are sufficient. The third ray is a check — it should pass through the same intersection point.

### The Three Principal Rays — Convex Mirror

| Ray | Path to Mirror | Path After Reflection |
|-----|---------------|----------------------|
| **Parallel ray (P)** | Travels parallel to the principal axis | Reflects as if coming FROM $F$ (behind mirror) |
| **Focal ray (F)** | Aims toward $F$ (behind mirror) | Reflects parallel to the principal axis |
| **Center ray (C)** | Aims toward $C$ (behind mirror) | Reflects back on itself |

For convex mirrors, the reflected rays **diverge** — extend them back (dashed lines) behind the mirror to find the virtual image.
      `
    },
    {
      id: 'geometricopticsmirrors-p5-drawing',
      type: 'text' as const,
      content: `
## Step-by-Step Drawing Guide

### Drawing a Concave Mirror Ray Diagram

1. **Draw the mirror** as a concave curve with the principal axis through its center
2. **Mark $F$ and $C$** on the principal axis ($C = 2F$)
3. **Place the object** (upright arrow) at the specified distance
4. **Draw Ray P**: From arrow tip → horizontal → reflects through $F$
5. **Draw Ray F**: From arrow tip → through $F$ → reflects horizontal
6. **Find intersection** of reflected rays → that's the image tip
7. **Draw the image** as an arrow from the principal axis to the intersection point

### Real vs. Virtual Image in Ray Diagrams

| Image Type | How Rays Behave | How to Draw |
|-----------|----------------|-------------|
| **Real** | Reflected rays actually converge | Solid lines; image is where rays cross |
| **Virtual** | Reflected rays diverge | Extend rays backward (dashed lines); image where extensions meet |

### What Happens as You Move the Object (Concave Mirror)

| Object Position | Rays Do... | Image Result |
|----------------|-----------|--------------|
| Far beyond $C$ | Converge quickly | Small real image near $F$ |
| At $C$ | Converge at $C$ | Same-size real image at $C$ |
| Between $C$ and $F$ | Converge far away | Large real image beyond $C$ |
| At $F$ | Reflect parallel — never cross! | No image ($d_i \\to \\infty$) |
| Inside $F$ | Diverge → extend behind mirror | Large virtual image behind mirror |

### Common Ray Diagram Mistakes on AP Exams

| Mistake | Fix |
|---------|-----|
| Drawing rays from the base of the object | Always draw from the **tip** of the object |
| Forgetting to extend diverging rays behind mirror | Use **dashed lines** for virtual extensions |
| Bending rays at the principal axis instead of the mirror surface | Rays change direction at the **mirror**, not at $F$ or $C$ |
| Drawing more than needed | Two rays are enough — don't overcomplicate |
      `
    },
    {
      id: 'geometricopticsmirrors-p5-check1',
      type: 'multiple-choice' as const,
      content: `
**Ray Diagram Interpretation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a concave mirror ray diagram, a parallel ray reflects through:',
            options: [
              'The center of curvature $C$',
              'The focal point $F$',
              'The center of the mirror',
              'Back along its incoming path'
            ],
            correctAnswer: 1,
            explanation: 'A parallel ray reflects through $F$. This is the DEFINITION of the focal point — it\'s where parallel rays converge after reflection. The ray that goes through $C$ reflects back on itself.'
          },
          {
            question: 'You draw two principal rays for a concave mirror and they diverge after reflection. What does this tell you?',
            options: [
              'The object is beyond $C$ — the image is real',
              'You made an error — concave mirror rays always converge',
              'The object is inside $F$ — extend the rays backward to find a virtual image',
              'The mirror is actually convex'
            ],
            correctAnswer: 2,
            explanation: 'When the object is inside $F$ of a concave mirror, reflected rays diverge. Extending them backward (behind the mirror) with dashed lines reveals a virtual, upright, magnified image. This is NOT an error — it\'s the correct physical behavior.'
          },
          {
            question: 'For a convex mirror, where do you find the image in a ray diagram?',
            options: [
              'Where reflected rays converge in front of the mirror',
              'Where backward extensions of reflected rays meet behind the mirror',
              'At the focal point',
              'Between $F$ and $C$ behind the mirror'
            ],
            correctAnswer: 1,
            explanation: 'Convex mirror reflected rays always diverge. The image is found by extending the diverging reflected rays backward (dashed lines) behind the mirror. They appear to converge at the virtual image location (between the mirror and $F$).'
          },
          {
            question: 'A ray aimed at the center of curvature $C$ of a concave mirror will:',
            options: [
              'Reflect through $F$',
              'Reflect parallel to the principal axis',
              'Reflect back along its incoming path',
              'Pass through the mirror'
            ],
            correctAnswer: 2,
            explanation: 'A ray through $C$ hits the mirror at normal incidence (the radius is perpendicular to the surface at the point of contact). By the law of reflection ($\\theta_i = \\theta_r = 0°$), it reflects straight back on itself. This is the C-ray.'
          }
        ]
      }
    },
    {
      id: 'geometricopticsmirrors-p5-input',
      type: 'input-boxes' as const,
      content: `
**Ray Diagram to Math** 🧮

You draw a ray diagram for a concave mirror and find the image is:
- Located at $d_i = 2f$ (at the center of curvature)
- Same height as the object but inverted

**1)** What is $d_o$ in terms of $f$? (enter a number — e.g., if $d_o = 3f$, enter 3)

**2)** What is $m$? (include sign)

**3)** This special case is when the object is at the ___? (enter "C" or "F")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '-1', 'C'],
        hint1: 'If $d_i = 2f$, use the mirror equation: $1/f = 1/d_o + 1/(2f)$',
        hint2: '$m = -d_i/d_o$. If the image is the same size...',
        hint3: '$d_o = 2f = R$. What point on the mirror is at distance $R$?',
        explanation: '1) $1/d_o = 1/f - 1/(2f) = 2/(2f) - 1/(2f) = 1/(2f)$, so $d_o = 2f$. 2) $m = -(2f)/(2f) = -1$ (same size, inverted). 3) $d_o = 2f = C$. Object at $C$ → image at $C$, same size, inverted.'
      }
    }
  ]
};
