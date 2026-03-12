export const actCoordGeomPart6Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg6-intro',
      type: 'text' as const,
      content: `
# 🔄 Transformations on the Coordinate Plane

**Part 6 of 7 — Translations, Reflections, Rotations & Dilations**

A **transformation** changes a figure's position, size, or orientation. The four main types:

| Transformation | What Changes | Preserves Shape & Size? |
|---------------|-------------|------------------------|
| Translation | Position | Yes (rigid) |
| Reflection | Orientation | Yes (rigid) |
| Rotation | Orientation & position | Yes (rigid) |
| Dilation | Size | No (similar, not congruent) |

**Rigid motions** (translation, reflection, rotation) preserve distances and angles.
      `
    },
    {
      id: 'act-cg6-translations',
      type: 'text' as const,
      content: `
## Translations (Slides)

A translation shifts every point by the same amount.

$$(x, y) \\to (x + a,\\; y + b)$$

- $a > 0$: shift right. $a < 0$: shift left.
- $b > 0$: shift up. $b < 0$: shift down.

**Example 1:** Translate $(3, -2)$ by $\\langle -4, 5 \\rangle$.

$$(3 + (-4),\\; -2 + 5) = (-1, 3)$$

## Reflections (Flips)

| Reflect over | Rule |
|-------------|------|
| x-axis | $(x, y) \\to (x, -y)$ |
| y-axis | $(x, y) \\to (-x, y)$ |
| Line $y = x$ | $(x, y) \\to (y, x)$ |
| Origin | $(x, y) \\to (-x, -y)$ |

**Example 2:** Reflect $(4, -7)$ over the x-axis → $(4, 7)$.

**Example 3:** Reflect $(-3, 5)$ over the y-axis → $(3, 5)$.

**ACT Tip:** Reflection over the x-axis flips the $y$-sign. Reflection over the y-axis flips the $x$-sign. Just remember which coordinate changes.
      `
    },
    {
      id: 'act-cg6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Translations & Reflections** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Point $(5, -3)$ is translated by $\\langle -2, 4 \\rangle$. What are the new coordinates?',
            options: ['$(7, -7)$', '$(3, 1)$', '$(3, -7)$', '$(7, 1)$'],
            correctAnswer: 1,
            explanation: '$(5-2, -3+4) = (3, 1)$.'
          },
          {
            question: 'What is the reflection of $(-2, 6)$ over the x-axis?',
            options: ['$(2, 6)$', '$(-2, -6)$', '$(2, -6)$', '$(6, -2)$'],
            correctAnswer: 1,
            explanation: 'Reflecting over the x-axis: $(x, y) \\to (x, -y)$. So $(-2, 6) \\to (-2, -6)$.'
          }
        ]
      }
    },
    {
      id: 'act-cg6-rotations',
      type: 'text' as const,
      content: `
## Rotations about the Origin

| Rotation | Rule |
|----------|------|
| $90°$ counterclockwise | $(x, y) \\to (-y, x)$ |
| $180°$ | $(x, y) \\to (-x, -y)$ |
| $270°$ counterclockwise (= $90°$ clockwise) | $(x, y) \\to (y, -x)$ |

**Example 4:** Rotate $(3, 5)$ by $90°$ counterclockwise → $(-5, 3)$.

**Example 5:** Rotate $(-2, 4)$ by $180°$ → $(2, -4)$.

## Dilations (Resizing)

A dilation with center at the origin and scale factor $k$:

$$(x, y) \\to (kx, ky)$$

- $k > 1$: enlargement.
- $0 < k < 1$: reduction.
- $k = 1$: no change.

**Example 6:** Dilate $(4, -6)$ by scale factor $\\frac{1}{2}$ → $(2, -3)$.

**ACT Tip:** After a dilation by factor $k$, distances are multiplied by $|k|$ and areas are multiplied by $k^2$.
      `
    },
    {
      id: 'act-cg6-input1',
      type: 'input-boxes' as const,
      content: `
**Transformation Calculations** 🧮

1) Rotate $(4, 2)$ by $90°$ counterclockwise. What is the new x-coordinate?
2) Reflect $(7, -3)$ over the line $y = x$. What is the new x-coordinate?
3) Dilate $(6, 9)$ by scale factor $\\frac{1}{3}$. What is the new y-coordinate?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-2', '-3', '3'],
        hint1: '$(x,y) \\to (-y, x)$: the new x is $-y = -2$.',
        hint2: '$(x,y) \\to (y, x)$: the new x is $y = -3$.',
        hint3: 'Multiply: $9 \\cdot \\frac{1}{3} = 3$.',
        explanation: '1) $(-2, 4)$, new x = $-2$. 2) $(-3, 7)$, new x = $-3$. 3) $(2, 3)$, new y = $3$.'
      }
    },
    {
      id: 'act-cg6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Transformation Types** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Which transformation changes the size of a figure?',
            options: ['Translation', 'Reflection', 'Rotation', 'Dilation']
          },
          {
            label: 'Reflecting over the y-axis changes the sign of …',
            options: ['The x-coordinate', 'The y-coordinate', 'Both coordinates', 'Neither coordinate']
          },
          {
            label: 'A 180° rotation about the origin is equivalent to reflecting over …',
            options: ['The x-axis', 'The y-axis', 'The origin (both axes)', 'The line y = x']
          }
        ],
        correctAnswers: ['Dilation', 'The x-coordinate', 'The origin (both axes)'],
        hint1: 'Only one of these changes the size.',
        hint2: 'Over the y-axis: $(x,y) \\to (-x, y)$.',
        hint3: '$180°$: $(x,y) \\to (-x, -y)$ — both signs flip.',
        explanation: 'Dilation changes size. y-axis reflection flips the x-sign. $180°$ rotation flips both signs, equivalent to reflecting through the origin.'
      }
    },
    {
      id: 'act-cg6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Triangle $ABC$ has vertices $A(1,2)$, $B(4,6)$, $C(7,2)$. After a translation of $\\langle -3, 1 \\rangle$, what are the coordinates of $B\'$?',
            options: ['$(1, 7)$', '$(7, 5)$', '$(1, 5)$', '$(7, 7)$'],
            correctAnswer: 0,
            explanation: '$B\' = (4-3, 6+1) = (1, 7)$.'
          },
          {
            question: 'A figure is dilated by a factor of $3$ from the origin. If the original area was $5$ square units, what is the new area?',
            options: ['$15$', '$25$', '$45$', '$9$'],
            correctAnswer: 2,
            explanation: 'Area scales by $k^2 = 3^2 = 9$. New area $= 5 \\times 9 = 45$.'
          }
        ]
      }
    }
  ]
};
