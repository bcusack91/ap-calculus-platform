export const geoRigidTransformationsPart4Data = {
  topicSlug: 'rotation-geo',
  sections: [
    {
      id: 'rotation-intro',
      type: 'text' as const,
      content: `# Rotation: Turning Figures About a Center

**Focus:** Spin a figure around a fixed center point by a specified angle and direction.

---

### Topics in This Lesson

| Section |
|---------|
| What a Rotation Needs |
| Coordinate Rules for Rotations About the Origin |
| Rotating a Whole Figure |
| Rotations About Points Other Than the Origin |
| Composing Two Rotations |

> 🔑 **Big Idea:** A rotation is a rigid transformation specified by **three pieces of information**: a center, an angle, and a direction. It preserves distances, angles, **and** orientation.

---

### What You'll Master
- Apply $90°,\\, 180°,\\, 270°$ rotation rules about the origin (both directions)
- Rotate a figure by rotating each vertex by the same angle
- Use translation + rotate + translate-back to rotate about any center
- Recognize that composing two rotations gives another rotation (or a translation)`
    },

    {
      id: 'rotation-entrance-quiz',
      type: 'multiple-choice' as const,
      content: `### Entrance Quiz: Rotation Readiness`,
      exercise: {
        questions: [
          {
            question: 'A $90°$ counterclockwise rotation of $(2,\\, 5)$ about the origin is:',
            options: ['$(5,\\, -2)$', '$(-5,\\, 2)$', '$(-2,\\, -5)$', '$(2,\\, -5)$'],
            correctAnswer: 1,
            explanation: 'Use $(x, y) \\to (-y,\\, x)$: $(2, 5) \\to (-5,\\, 2)$.'
          },
          {
            question: 'A $180°$ rotation of $(-3,\\, 4)$ about the origin is:',
            options: ['$(3,\\, -4)$', '$(4,\\, -3)$', '$(-4,\\, 3)$', '$(3,\\, 4)$'],
            correctAnswer: 0,
            explanation: 'Use $(x, y) \\to (-x,\\, -y)$: both coordinates flip sign.'
          },
          {
            question: 'Which is **always true** about the center of a rotation?',
            options: [
              'It must be the origin',
              'It maps to itself (it is a fixed point)',
              'It moves the same distance as every other point',
              'It must be on the figure being rotated'
            ],
            correctAnswer: 1,
            explanation: 'The defining property of a rotation is that the center stays put. Every other point moves along a circular arc around the center.'
          }
        ]
      }
    },

    {
      id: 'rotation-definition',
      type: 'text' as const,
      content: `## 🧭 What a Rotation Needs

To specify a rotation completely, you need:

1. A **center** $O$ (a single point — the pivot)
2. An **angle** $\\theta$ (how far to turn)
3. A **direction** — counterclockwise (positive) or clockwise (negative)

Under a rotation about $O$ by angle $\\theta$:

- $O \\to O$ (the center is fixed)
- For any other point $P$, the image $P'$ lies on the circle centered at $O$ with radius $|OP|$, and $\\angle POP' = \\theta$.

$$
|OP'| \\;=\\; |OP|, \\qquad \\angle POP' \\;=\\; \\theta.
$$

> 💡 **Convention:** in math, positive angles are **counterclockwise**. So $90°$ alone means counterclockwise; "$90°$ clockwise" or "$-90°$" means the other direction.`
    },

    {
      id: 'rotation-rules',
      type: 'text' as const,
      content: `## 📐 Coordinate Rules for Rotations About the Origin

| Rotation (about origin) | Coordinate rule |
|------------------------|-----------------|
| $90°$ counterclockwise | $(x, y) \\to (-y,\\, x)$ |
| $180°$ (either direction) | $(x, y) \\to (-x,\\, -y)$ |
| $270°$ counterclockwise (= $90°$ clockwise) | $(x, y) \\to (y,\\, -x)$ |
| $360°$ | $(x, y) \\to (x,\\, y)$ (identity) |

### How to remember these without memorizing

A counterclockwise $90°$ rotation sends the unit vectors as follows:

$$
\\hat{\\imath} = (1, 0) \\;\\to\\; (0, 1) = \\hat{\\jmath}, \\qquad \\hat{\\jmath} = (0, 1) \\;\\to\\; (-1, 0) = -\\hat{\\imath}.
$$

So $(x, y) = x\\hat{\\imath} + y\\hat{\\jmath} \\to x(0, 1) + y(-1, 0) = (-y,\\, x)$. Apply it again for $180°$, and so on.

> 🔑 **Quick sanity check:** rotate $(1, 0)$ counterclockwise by $90°$. The image should be $(0, 1)$, *not* $(0, -1)$. If your rule gives $(0, -1)$, you've used the clockwise rule.`
    },

    {
      id: 'rotation-figure-example',
      type: 'text' as const,
      content: `## ✏️ Rotating a Whole Figure

### Worked Example
Rotate triangle $A(1, 1),\\; B(4, 1),\\; C(2, 3)$ by $90°$ clockwise about the origin.

Rule: $(x, y) \\to (y,\\, -x)$.

| Vertex | Rule applied | Image |
|--------|--------------|-------|
| $A(1, 1)$ | $(1,\\, -1)$ | $A'(1, -1)$ |
| $B(4, 1)$ | $(1,\\, -4)$ | $B'(1, -4)$ |
| $C(2, 3)$ | $(3,\\, -2)$ | $C'(3, -2)$ |

Because rotations preserve orientation, $A' \\to B' \\to C'$ is traversed in the **same** direction as $A \\to B \\to C$. The triangle rotated rigidly into the fourth quadrant region.`
    },

    {
      id: 'rotation-arbitrary-center',
      type: 'text' as const,
      content: `## 🎯 Rotating About a Point Other Than the Origin

To rotate by angle $\\theta$ about a center $C = (h, k)$:

1. **Translate** so that $C$ moves to the origin: $(x, y) \\to (x - h,\\, y - k)$.
2. **Rotate** about the origin using the rule for $\\theta$.
3. **Translate back**: add $(h, k)$ to the result.

$$
\\text{Rotate about } (h, k) \\;=\\; T_{(h,k)} \\circ R_\\theta \\circ T_{(-h,\\,-k)}
$$

### Worked Example
Rotate $(5, 3)$ by $90°$ counterclockwise about $(2, 1)$.

1. Shift: $(5 - 2,\\, 3 - 1) = (3,\\, 2)$.
2. Rotate $90°$ counterclockwise: $(3, 2) \\to (-2,\\, 3)$.
3. Shift back: $(-2 + 2,\\, 3 + 1) = (0,\\, 4)$.

So the image is $(0, 4)$.`
    },

    {
      id: 'rotation-dropdown',
      type: 'dropdown-select' as const,
      content: `### Check: Rotations About the Origin`,
      exercise: {
        dropdowns: [
          {
            label: 'A $90°$ clockwise rotation about the origin uses the rule:',
            options: ['$(x, y) \\to (-y,\\, x)$', '$(x, y) \\to (y,\\, -x)$', '$(x, y) \\to (-x,\\, -y)$', '$(x, y) \\to (x,\\, -y)$'],
            correctIndex: 1,
            explanation: 'Clockwise $90°$ is the inverse of counterclockwise $90°$. Counterclockwise sends $(1, 0) \\to (0, 1)$; clockwise sends $(1, 0) \\to (0, -1)$, which matches $(x, y) \\to (y, -x)$.'
          },
          {
            label: 'A $270°$ counterclockwise rotation is the same as:',
            options: ['$90°$ counterclockwise', '$180°$', '$90°$ clockwise', '$270°$ clockwise'],
            correctIndex: 2,
            explanation: '$270°$ counterclockwise turns three-quarters of the way around, ending in the same place as turning a quarter turn clockwise.'
          },
          {
            label: 'Rotating $(4,\\, -1)$ by $180°$ about the origin gives:',
            options: ['$(-4,\\, 1)$', '$(1,\\, 4)$', '$(-1,\\, -4)$', '$(4,\\, 1)$'],
            correctIndex: 0,
            explanation: 'A $180°$ rotation negates both coordinates: $(4, -1) \\to (-4, 1)$.'
          },
          {
            label: 'After a rotation, which property of the original figure must be the same as the image?',
            options: [
              'Its location on the coordinate plane',
              'Its orientation (clockwise vs. counterclockwise vertex order)',
              'Its distance from the origin',
              'Its angle measures'
            ],
            correctIndex: 3,
            explanation: 'Rotations preserve lengths, angles, and orientation. They generally do **not** preserve location, and distance from the origin only stays the same when the origin is the center of rotation.'
          }
        ]
      }
    },

    {
      id: 'rotation-common-mistakes',
      type: 'text' as const,
      content: `## ⚠️ Common Mistakes

1. **Mixing up clockwise and counterclockwise rules.** Use the anchor: $(1, 0)$ rotated $90°$ counterclockwise becomes $(0, 1)$. If your rule sends $(1, 0) \\to (0, -1)$, you wrote the clockwise rule.

2. **Negating only one coordinate for a $180°$ rotation.** A $180°$ rotation negates **both** coordinates. Negating only one is a reflection over an axis.

3. **Skipping the translate / translate-back steps** when rotating about a non-origin point. The shortcut rules in the table only work about the origin.

4. **Forgetting that the center is fixed.** If a vertex lies at the center of rotation, its image is the vertex itself — don't move it.`
    },

    {
      id: 'rotation-exit-quiz',
      type: 'multiple-choice' as const,
      content: `### Exit Quiz: Rotation Mastery`,
      exercise: {
        questions: [
          {
            question: 'Which rule is a $90°$ clockwise rotation about the origin?',
            options: [
              '$(x, y) \\to (-y,\\, x)$',
              '$(x, y) \\to (y,\\, -x)$',
              '$(x, y) \\to (-x,\\, -y)$',
              '$(x, y) \\to (x,\\, -y)$'
            ],
            correctAnswer: 1,
            explanation: 'Clockwise $90°$ uses $(x, y) \\to (y,\\, -x)$. Counterclockwise $90°$ uses $(-y, x)$.'
          },
          {
            question: 'Point $(6,\\, -1)$ rotated $180°$ about the origin becomes:',
            options: ['$(-6,\\, 1)$', '$(1,\\, -6)$', '$(-6,\\, -1)$', '$(6,\\, 1)$'],
            correctAnswer: 0,
            explanation: 'A $180°$ rotation negates both coordinates: $(6, -1) \\to (-6, 1)$.'
          },
          {
            question: 'A rotation and a translation are alike because both:',
            options: [
              'reverse orientation',
              'preserve lengths and angle measures',
              'must keep the origin fixed',
              'swap the $x$ and $y$ coordinates'
            ],
            correctAnswer: 1,
            explanation: 'Both are rigid (isometries), so distances and angles are preserved. Neither reverses orientation, and only a rotation has a fixed point in general.'
          },
          {
            question: 'Rotate the point $(5,\\, 3)$ by $90°$ counterclockwise about the center $(2,\\, 1)$. The image is:',
            options: [
              '$(0,\\, 4)$',
              '$(-3,\\, 4)$',
              '$(4,\\, 0)$',
              '$(-1,\\, 3)$'
            ],
            correctAnswer: 0,
            explanation: 'Shift so center is origin: $(5 - 2,\\, 3 - 1) = (3, 2)$. Rotate $90°$ CCW: $(3, 2) \\to (-2, 3)$. Shift back: $(-2 + 2,\\, 3 + 1) = (0, 4)$.'
          }
        ]
      }
    }
  ]
}
