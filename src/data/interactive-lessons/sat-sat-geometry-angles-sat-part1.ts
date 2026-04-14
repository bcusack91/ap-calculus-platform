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
    },
    {
      id: 'geo1-text2',
      type: 'text' as const,
      content: `## Deep Dive: Multi-Step Angle Problems

### Worked Example 1: Parallel Lines with Algebra

| Step | Work |
|---|---|
| **Problem** | Lines $l \\parallel m$ are cut by a transversal. One angle is $(3x + 10)°$ and its alternate interior angle is $(5x - 30)°$. Find $x$ and the angle measure. |
| **Set up** | Alternate interior angles are equal: $3x + 10 = 5x - 30$ |
| **Solve** | $40 = 2x$ → $x = 20$ |
| **Answer** | Each angle $= 3(20) + 10 = 70°$ ✓ |

### Worked Example 2: Exterior Angle with Algebra

| Step | Work |
|---|---|
| **Problem** | In △ABC, $\\angle A = (2x + 5)°$, $\\angle B = (x + 10)°$, exterior angle at $C = (4x - 5)°$. Find all angles. |
| **Apply theorem** | Exterior $=$ sum of remotes: $4x - 5 = (2x + 5) + (x + 10)$ |
| **Solve** | $4x - 5 = 3x + 15$ → $x = 20$ |
| **Angles** | $A = 45°$, $B = 30°$, $C = 180° - 45° - 30° = 105°$ |
| **Check** | Exterior at $C$: $4(20) - 5 = 75°$ = $45° + 30°$ ✓ |

### Angle Relationship Quick Reference

| Relationship | Rule | How to Spot |
|---|---|---|
| Vertical angles | Equal | X shape at intersection |
| Supplementary | Sum to $180°$ | Adjacent on straight line |
| Corresponding | Equal | Same position at each parallel crossing |
| Alternate interior | Equal | Z or S pattern between parallels |
| Co-interior | Sum to $180°$ | U or C pattern between parallels |
| Exterior angle | Sum of two remotes | Outside vertex of triangle |`
    },
    {
      id: 'geo1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Angle Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Lines $p \\parallel q$ are cut by a transversal. One angle is $(2x + 40)°$ and the co-interior angle is $(3x + 15)°$. What is $x$?',
            options: ['$25$', '$30$', '$20$', '$35$'],
            correctAnswer: 0,
            explanation: 'Co-interior angles sum to $180°$: $(2x + 40) + (3x + 15) = 180$ → $5x + 55 = 180$ → $x = 25$.'
          },
          {
            question: 'In △PQR, $\\angle P = 4x°$, $\\angle Q = (x + 10)°$, $\\angle R = (x - 10)°$. The triangle is:',
            options: ['Obtuse (largest angle $> 90°$)', 'Right (one angle $= 90°$)', 'Acute (all angles $< 90°$)', 'Equilateral'],
            correctAnswer: 0,
            explanation: '$4x + (x + 10) + (x - 10) = 180$ → $6x = 180$ → $x = 30$. Angles: $120°$, $40°$, $20°$. Since $120° > 90°$, the triangle is obtuse.'
          },
          {
            question: 'Five angles meet at a point. Four of them are $60°$, $85°$, $95°$, and $50°$. What is the fifth?',
            options: ['$70°$', '$80°$', '$90°$', '$30°$'],
            correctAnswer: 0,
            explanation: 'Angles around a point sum to $360°$: $360 - 60 - 85 - 95 - 50 = 70°$.'
          }
        ]
      }
    },
    {
      id: 'geo1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Angle Relationship** — Name each angle pair.',
      exercise: {
        dropdowns: [
          'Same position at each parallel intersection → [Corresponding|Alternate interior|Vertical|Supplementary]',
          'Opposite sides, between the parallel lines → [Alternate interior|Corresponding|Co-interior|Complementary]',
          'Same side, between parallels, sum to 180° → [Co-interior|Alternate interior|Corresponding|Vertical]',
          'Formed by two intersecting lines, across from each other → [Vertical|Supplementary|Corresponding|Alternate exterior]'
        ],
        correctAnswers: ['Corresponding', 'Alternate interior', 'Co-interior', 'Vertical'],
        hint1: 'Think about where each angle sits relative to the parallel lines and transversal.',
        hint2: 'Corresponding = same position; alternate = opposite sides; co-interior = same side.',
        hint3: 'Vertical angles are at the same intersection, across from each other.',
        explanation: 'Corresponding angles match positions. Alternate interior angles are between parallels on opposite sides. Co-interior (same-side interior) angles are between parallels on the same side and are supplementary. Vertical angles are formed at any intersection.'
      }
    },
    {
      id: 'geo1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary: Angle Relationships

| Rule | Formula/Fact | When to Use |
|---|---|---|
| Supplementary | $a + b = 180°$ | Angles on a straight line |
| Complementary | $a + b = 90°$ | Corner/right angle split |
| Vertical angles | $a = b$ | Intersecting lines |
| Triangle sum | $A + B + C = 180°$ | Any triangle |
| Exterior angle | $= \\text{remote}_1 + \\text{remote}_2$ | Angle outside triangle vertex |
| Parallel + transversal | Corresponding & alternate = equal; co-interior sum to $180°$ | Arrows on lines or stated parallel |

### SAT Strategy
- If angles involve variables, **set up an equation** using the appropriate rule.
- Always check: do the angles sum correctly?
- **Angles at a point** sum to $360°$ — don't confuse with straight line ($180°$).

*Next: Triangle properties, special right triangles, and similarity →*`
    }
  ]
};