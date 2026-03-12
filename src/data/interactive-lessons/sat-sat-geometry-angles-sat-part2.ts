export const satGeometryPart2Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo2-intro',
      type: 'text' as const,
      content: `# Triangle Properties & Theorems

**Part 2 of 7 — Special Triangles, Similarity, Congruence**

### Special Right Triangles

The SAT provides these in the reference sheet, but memorizing them saves time:

**45-45-90 Triangle:**
- Legs: $x$, $x$
- Hypotenuse: $x\\sqrt{2}$

**30-60-90 Triangle:**
- Short leg: $x$ (opposite 30°)
- Long leg: $x\\sqrt{3}$ (opposite 60°)
- Hypotenuse: $2x$ (opposite 90°)

### Example

A 30-60-90 triangle has a hypotenuse of 10. Find the legs.

- Hypotenuse $= 2x = 10$ → $x = 5$
- Short leg $= 5$
- Long leg $= 5\\sqrt{3} \\approx 8.66$

### Triangle Inequality Theorem

For any triangle with sides $a$, $b$, $c$:
$$a + b > c$$

The sum of any two sides must exceed the third.

**Example:** Can a triangle have sides 3, 5, and 9?  
$3 + 5 = 8 < 9$ → **No!**

### Similar Triangles (AA Similarity)

If two angles of one triangle equal two angles of another, the triangles are **similar** (same shape, proportional sides).

$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$$

### SAT Trap ⚠️

In 30-60-90 triangles, students often mix up which leg is which. Remember: the **shortest side** is opposite the **smallest angle** (30°).`
    },
    {
      id: 'geo2-quiz',
      type: 'multiple-choice' as const,
      content: '**Triangle Properties Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 45-45-90 triangle has a hypotenuse of $10\\sqrt{2}$. What is the length of each leg?',
            options: ['$10$', '$10\\sqrt{2}$', '$5\\sqrt{2}$', '$20$'],
            correctAnswer: 0,
            explanation: 'Hypotenuse $= x\\sqrt{2} = 10\\sqrt{2}$, so $x = 10$. Each leg is $10$.'
          },
          {
            question: 'Which set of three lengths CANNOT form a triangle?',
            options: ['$2, 3, 6$', '$3, 4, 5$', '$5, 5, 8$', '$7, 10, 12$'],
            correctAnswer: 0,
            explanation: 'Check: $2 + 3 = 5 < 6$. The sum of the two shorter sides must EXCEED the longest side. Since $5 < 6$, these cannot form a triangle.'
          },
          {
            question: 'Two similar triangles have a scale factor of $3:5$. If the perimeter of the smaller triangle is 24, what is the perimeter of the larger?',
            options: ['$40$', '$30$', '$36$', '$72$'],
            correctAnswer: 0,
            explanation: 'Perimeters of similar triangles are in the same ratio as their sides: $\\frac{24}{P} = \\frac{3}{5}$ → $P = \\frac{24 \\times 5}{3} = 40$.'
          }
        ]
      }
    }
  ]
};