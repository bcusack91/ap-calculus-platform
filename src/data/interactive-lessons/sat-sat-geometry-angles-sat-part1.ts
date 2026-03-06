export const satGeometryPart1Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo1-intro',
      type: 'text' as const,
      content: `# Geometry: Lines, Angles, and Triangles

**Part 1 of 7 — Angle Relationships**

Geometry accounts for roughly 10-15% of SAT Math questions. Mastering angle relationships gives you quick points.

### Fundamental Angle Rules

- **Supplementary angles:** Sum to $180°$
- **Complementary angles:** Sum to $90°$
- **Vertical angles:** Equal (formed by intersecting lines)
- **Angles on a straight line:** Sum to $180°$

### Parallel Lines Cut by a Transversal

When a line crosses two parallel lines, it creates 8 angles with key relationships:

- **Corresponding angles** are equal (same position at each intersection)
- **Alternate interior angles** are equal (opposite sides, between parallels)
- **Alternate exterior angles** are equal (opposite sides, outside parallels)
- **Co-interior (same-side interior) angles** sum to $180°$

### Triangle Angle Sum

The angles in any triangle sum to $180°$.

If a triangle has angles $55°$ and $70°$:
$$\\text{Third angle} = 180° - 55° - 70° = 55°$$

This is an isosceles triangle (two equal angles → two equal sides).

### Exterior Angle Theorem

An exterior angle of a triangle equals the sum of the two non-adjacent interior angles.

$$\\text{Exterior angle} = \\text{Remote interior}_1 + \\text{Remote interior}_2$$

### SAT Trap ⚠️

When the SAT shows a figure with parallel lines, check if they actually SAY the lines are parallel. "Looks parallel" ≠ IS parallel. Look for arrows or explicit statements.`
    },
    {
      id: 'geo1-quiz',
      type: 'multiple-choice' as const,
      content: '**Angle Relationships Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two parallel lines are cut by a transversal. One of the angles formed is $65°$. What is the measure of the co-interior angle on the same side?',
            options: ['$115°$', '$65°$', '$25°$', '$130°$'],
            correctAnswer: 0,
            explanation: 'Co-interior angles (same-side interior) are supplementary: $180° - 65° = 115°$.'
          },
          {
            question: 'An exterior angle of a triangle measures $130°$. One of the non-adjacent interior angles is $55°$. What is the other non-adjacent interior angle?',
            options: ['$75°$', '$50°$', '$125°$', '$55°$'],
            correctAnswer: 0,
            explanation: 'Exterior angle = sum of remote interiors: $130° = 55° + x$, so $x = 75°$.'
          },
          {
            question: 'In a triangle, the three angles are in the ratio $2:3:4$. What is the largest angle?',
            options: ['$80°$', '$60°$', '$90°$', '$100°$'],
            correctAnswer: 0,
            explanation: '$2x + 3x + 4x = 180°$ → $9x = 180°$ → $x = 20°$. Largest angle: $4 \\times 20° = 80°$.'
          }
        ]
      }
    }
  ]
};