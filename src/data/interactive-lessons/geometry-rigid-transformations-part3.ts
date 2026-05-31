export const geoRigidTransformationsPart3Data = {
  topicSlug: 'reflection-geo',
  sections: [
    {
      id: 'reflection-intro',
      type: 'text' as const,
      content: `# Reflection: Mirror Images Across a Line

**Focus:** Flip a figure across a straight line so that each point and its image are equidistant from the line on opposite sides.

---

### Topics in This Lesson

| Section |
|---------|
| The Geometric Definition |
| Coordinate Rules for the Common Mirrors |
| Reflecting a Whole Figure |
| Orientation: Why Reflections "Flip" |
| Composing Two Reflections |

> 🔑 **Big Idea:** A reflection is the rigid transformation that **reverses orientation**. It is the only one of the three basic isometries that turns a left-handed figure into a right-handed one.

---

### What You'll Master
- Apply coordinate rules for reflections over the $x$-axis, $y$-axis, line $y = x$, and line $y = -x$
- Use the perpendicular-bisector property to reflect a point across **any** line
- Predict how vertex orientation changes after a reflection
- Recognize that two reflections compose to a translation or rotation`
    },

    {
      id: 'reflection-entrance-quiz',
      type: 'multiple-choice' as const,
      content: `### Entrance Quiz: Reflection Readiness`,
      exercise: {
        questions: [
          {
            question: 'Reflecting $(5,\\, -2)$ over the $x$-axis gives:',
            options: ['$(5,\\, 2)$', '$(-5,\\, -2)$', '$(-5,\\, 2)$', '$(2,\\, 5)$'],
            correctAnswer: 0,
            explanation: 'Reflection over the $x$-axis keeps $x$ and negates $y$: $(5, -2) \\to (5, 2)$.'
          },
          {
            question: 'Reflecting $(3,\\, 7)$ over the $y$-axis gives:',
            options: ['$(3,\\, -7)$', '$(-3,\\, 7)$', '$(-3,\\, -7)$', '$(7,\\, 3)$'],
            correctAnswer: 1,
            explanation: 'Reflection over the $y$-axis negates $x$ and keeps $y$: $(3, 7) \\to (-3, 7)$.'
          },
          {
            question: 'A reflection differs from a translation because a reflection:',
            options: [
              'changes the side lengths of the figure',
              'reverses orientation (clockwise becomes counterclockwise)',
              'always moves every point to the opposite side of the origin',
              'changes the angle measures of the figure'
            ],
            correctAnswer: 1,
            explanation: 'Both reflections and translations are rigid, so lengths and angles are preserved. The distinguishing feature of a reflection is that it reverses orientation.'
          }
        ]
      }
    },

    {
      id: 'reflection-definition',
      type: 'text' as const,
      content: `## 🪞 The Geometric Definition

A **reflection** across a line $\\ell$ takes a point $P$ to the point $P'$ such that:

1. The line $\\ell$ is the **perpendicular bisector** of $\\overline{PP'}$.
2. If $P$ already lies on $\\ell$, then $P' = P$ (points on the mirror are fixed).

That is the *only* property you need — every coordinate rule below is a consequence of it.

$$
\\text{dist}(P,\\, \\ell) \\;=\\; \\text{dist}(P',\\, \\ell), \\qquad \\overline{PP'} \\perp \\ell.
$$

> 💡 **Fixed points of a reflection form a whole line** (the mirror itself). Compare to translations (no fixed points unless $\\vec{v} = \\vec{0}$) and rotations (exactly one fixed point unless the angle is $0$).`
    },

    {
      id: 'reflection-coordinate-rules',
      type: 'text' as const,
      content: `## 📐 Coordinate Rules for Common Mirrors

For the four most common reflection lines in coordinate geometry:

| Mirror line | Coordinate rule | What happens |
|------------|-----------------|--------------|
| $x$-axis | $(x, y) \\to (x,\\, -y)$ | Keep $x$, negate $y$ |
| $y$-axis | $(x, y) \\to (-x,\\, y)$ | Negate $x$, keep $y$ |
| $y = x$ | $(x, y) \\to (y,\\, x)$ | Swap coordinates |
| $y = -x$ | $(x, y) \\to (-y,\\, -x)$ | Swap and negate both |

### Where do the swap rules come from?

For reflection over $y = x$: the line $y = x$ has slope $1$. The perpendicular from $(a, b)$ to this line has slope $-1$, and the foot of the perpendicular is at $\\big(\\tfrac{a+b}{2},\\, \\tfrac{a+b}{2}\\big)$. Doubling the displacement from $(a, b)$ to the foot gives image $(b, a)$ — coordinates swap.

> 🔑 **Vertical mirrors** ($x = h$): rule is $(x, y) \\to (2h - x,\\, y)$.
> **Horizontal mirrors** ($y = k$): rule is $(x, y) \\to (x,\\, 2k - y)$.`
    },

    {
      id: 'reflection-figure-example',
      type: 'text' as const,
      content: `## ✏️ Reflecting a Whole Figure

### Worked Example
Reflect triangle $A(-1,\\, 4),\\; B(2,\\, 1),\\; C(4,\\, 5)$ over the $y$-axis.

| Vertex | Rule $(x, y) \\to (-x,\\, y)$ | Image |
|--------|-----------------------------|-------|
| $A(-1, 4)$ | $(1,\\, 4)$ | $A'(1, 4)$ |
| $B(2, 1)$ | $(-2,\\, 1)$ | $B'(-2, 1)$ |
| $C(4, 5)$ | $(-4,\\, 5)$ | $C'(-4, 5)$ |

Plot $A',\\, B',\\, C'$ and connect them. The image triangle has the same side lengths and angles, but if the original was traversed **counterclockwise**, the image will be traversed **clockwise** — that is orientation reversal.`
    },

    {
      id: 'reflection-orientation',
      type: 'text' as const,
      content: `## 🔄 Orientation: Why Reflections "Flip"

Every triangle in the plane has a signed orientation:

- **Positive (counterclockwise)** if the vertices $A,\\, B,\\, C$ are listed in counterclockwise order
- **Negative (clockwise)** if they are listed in clockwise order

A single reflection multiplies the orientation by $-1$. So:

| Composition | Orientation effect |
|-------------|-------------------|
| One reflection | Reverses orientation |
| Two reflections | Preserves orientation (net effect is a translation or rotation) |
| Three reflections | Reverses orientation (net effect is a glide reflection) |

> 💡 **Diagnostic trick:** if you see a transformation that preserves all distances but flips the orientation, it **must** involve an odd number of reflections.`
    },

    {
      id: 'reflection-dropdown',
      type: 'dropdown-select' as const,
      content: `### Check: Identifying Reflections`,
      exercise: {
        dropdowns: [
          {
            label: 'Reflecting $(-3,\\, 5)$ over the line $y = x$ gives:',
            options: ['$(3,\\, -5)$', '$(5,\\, -3)$', '$(-5,\\, 3)$', '$(5,\\, 3)$'],
            correctIndex: 1,
            explanation: 'Reflection over $y = x$ swaps the coordinates: $(-3, 5) \\to (5, -3)$.'
          },
          {
            label: 'Reflecting $(4,\\, 1)$ over the vertical line $x = 6$ gives:',
            options: ['$(8,\\, 1)$', '$(2,\\, 1)$', '$(4,\\, 11)$', '$(-4,\\, 1)$'],
            correctIndex: 0,
            explanation: 'Use $(x, y) \\to (2h - x,\\, y)$ with $h = 6$: $(4, 1) \\to (2(6) - 4,\\, 1) = (8, 1)$.'
          },
          {
            label: 'Two consecutive reflections over **parallel** lines produce a net transformation that is:',
            options: ['a single reflection', 'a translation', 'a rotation', 'a dilation'],
            correctIndex: 1,
            explanation: 'Composing two reflections across parallel lines gives a translation of magnitude **twice** the distance between the lines, in the direction perpendicular to the lines.'
          },
          {
            label: 'Two consecutive reflections over **intersecting** lines produce a net transformation that is:',
            options: ['a translation', 'a rotation about their intersection', 'still a single reflection', 'a dilation'],
            correctIndex: 1,
            explanation: 'Composing two reflections across intersecting lines gives a rotation about their intersection point, by an angle equal to **twice** the angle between the lines.'
          }
        ]
      }
    },

    {
      id: 'reflection-common-mistakes',
      type: 'text' as const,
      content: `## ⚠️ Common Mistakes

1. **Negating both coordinates for every reflection.** Negating both $x$ and $y$ is a $180°$ rotation, **not** a reflection over an axis. Reflection over the $x$-axis negates only $y$; reflection over the $y$-axis negates only $x$.

2. **Forgetting that points on the mirror stay put.** If a vertex lies on the line of reflection, the image equals the original — don't accidentally move it.

3. **Mixing up $y = x$ and $y = -x$.** Reflection over $y = x$ is $(x, y) \\to (y, x)$ (just swap). Reflection over $y = -x$ is $(x, y) \\to (-y, -x)$ (swap *and* negate both).

4. **Drawing the image in the same vertex order.** After a reflection, the orientation reverses. If $A \\to B \\to C$ went counterclockwise originally, $A' \\to B' \\to C'$ now goes clockwise.`
    },

    {
      id: 'reflection-exit-quiz',
      type: 'multiple-choice' as const,
      content: `### Exit Quiz: Reflection Mastery`,
      exercise: {
        questions: [
          {
            question: 'Which rule represents reflection over the line $y = x$?',
            options: [
              '$(x, y) \\to (-x,\\, y)$',
              '$(x, y) \\to (x,\\, -y)$',
              '$(x, y) \\to (y,\\, x)$',
              '$(x, y) \\to (-y,\\, -x)$'
            ],
            correctAnswer: 2,
            explanation: 'Reflection over $y = x$ swaps the two coordinates. (Negate-and-swap is reflection over $y = -x$.)'
          },
          {
            question: 'Point $Q(-4,\\, 6)$ is reflected over the $y$-axis. Its image is:',
            options: ['$(4,\\, 6)$', '$(-4,\\, -6)$', '$(6,\\, -4)$', '$(4,\\, -6)$'],
            correctAnswer: 0,
            explanation: 'Reflection over the $y$-axis negates the $x$-coordinate only: $(-4, 6) \\to (4, 6)$.'
          },
          {
            question: 'A figure with vertices labeled counterclockwise is reflected over a line. After the reflection, its vertices are labeled:',
            options: [
              'in the same counterclockwise order',
              'in clockwise order',
              'still counterclockwise, but rotated by $90°$',
              'in a random order'
            ],
            correctAnswer: 1,
            explanation: 'A single reflection always reverses orientation, so counterclockwise becomes clockwise.'
          },
          {
            question: "Triangle $\\triangle ABC$ has $A(2, 3)$, $B(5, 1)$, $C(4, 7)$. After reflection over the $x$-axis, the image $\\triangle A'B'C'$ has vertices:",
            options: [
              "$A'(-2, 3),\\, B'(-5, 1),\\, C'(-4, 7)$",
              "$A'(2, -3),\\, B'(5, -1),\\, C'(4, -7)$",
              "$A'(3, 2),\\, B'(1, 5),\\, C'(7, 4)$",
              "$A'(-2, -3),\\, B'(-5, -1),\\, C'(-4, -7)$"
            ],
            correctAnswer: 1,
            explanation: 'Reflection over the $x$-axis applies $(x, y) \\to (x, -y)$ to every vertex. Only the $y$-coordinates flip sign.'
          }
        ]
      }
    }
  ]
}
