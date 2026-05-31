export const geoRigidTransformationsPart2Data = {
  topicSlug: 'translation-geo',
  sections: [
    {
      id: 'translation-intro',
      type: 'text' as const,
      content: `# Translation: Sliding Figures in the Plane

**Focus:** Move every point of a figure by the same vector — no turning, no flipping, no resizing.

---

### Topics in This Lesson

| Section |
|---------|
| What a Translation Really Does |
| Vector Notation and Coordinate Rules |
| Translating a Whole Figure |
| Composing Two Translations |
| Common Mistakes and How to Avoid Them |

> 🔑 **Big Idea:** A translation is the *only* rigid transformation that moves every point by **the same vector**. That single property is why translations preserve lengths, angle measures, **and** orientation — they are the gentlest isometry.

---

### What You'll Master
- Read and apply translation rules in the form $(x, y) \\to (x + a,\\, y + b)$
- Convert between vector notation $\\langle a,\\, b \\rangle$ and coordinate rules
- Translate any polygon by translating each vertex consistently
- Recognize when two consecutive translations can be combined into one`
    },

    {
      id: 'translation-entrance-quiz',
      type: 'multiple-choice' as const,
      content: `### Entrance Quiz: Translation Readiness`,
      exercise: {
        questions: [
          {
            question: 'The rule $(x,y) \\to (x+4,\\, y-2)$ moves every point:',
            options: [
              'Left 4 and up 2',
              'Right 4 and down 2',
              'Right 2 and down 4',
              'Left 2 and up 4'
            ],
            correctAnswer: 1,
            explanation: '$+4$ on the $x$-coordinate is a shift of 4 units to the right; $-2$ on the $y$-coordinate is a shift of 2 units down.'
          },
          {
            question: 'A translation by the vector $\\langle -5,\\, 6 \\rangle$ takes the point $(3,-1)$ to:',
            options: ['$(-2, 5)$', '$(8, -7)$', '$(-8, 7)$', '$(2, 5)$'],
            correctAnswer: 0,
            explanation: 'Add component-wise: $(3 + (-5),\\, -1 + 6) = (-2,\\, 5)$.'
          },
          {
            question: 'Which of the following is **not** preserved by a translation?',
            options: [
              'Side lengths of the figure',
              'Angle measures of the figure',
              'Position of the figure in the plane',
              'Orientation (clockwise vs. counterclockwise vertex order)'
            ],
            correctAnswer: 2,
            explanation: 'A translation deliberately changes position — that is the whole point. Lengths, angles, and orientation are all preserved.'
          }
        ]
      }
    },

    {
      id: 'translation-vector-notation',
      type: 'text' as const,
      content: `## 🧭 Vector Notation and Coordinate Rules

A translation is described completely by a single **translation vector** $\\vec{v} = \\langle a,\\, b \\rangle$:

$$
T_{\\vec{v}}(x, y) \\;=\\; (x + a,\\, y + b)
$$

| Notation | What it means |
|----------|---------------|
| $\\langle a,\\, b \\rangle$ | Move $a$ units in the $x$-direction and $b$ units in the $y$-direction |
| $(x, y) \\to (x + a,\\, y + b)$ | Coordinate rule for the same translation |
| $a > 0$ | Shift to the **right** |
| $a < 0$ | Shift to the **left** |
| $b > 0$ | Shift **up** |
| $b < 0$ | Shift **down** |

> 💡 **Reading a translation backwards:** if you know a starting point $P$ and its image $P'$, you can recover the vector by subtracting: $\\vec{v} = P' - P$. For $P(2, -3)$ and $P'(5, 1)$, the translation vector is $\\langle 3,\\, 4 \\rangle$.

---

### Why translations preserve everything

For any two points $P$ and $Q$, the translated points satisfy

$$
T_{\\vec{v}}(P) - T_{\\vec{v}}(Q) \\;=\\; (P + \\vec{v}) - (Q + \\vec{v}) \\;=\\; P - Q.
$$

The vector between any two points is **unchanged**, so distances, angles, and orientation all stay exactly the same.`
    },

    {
      id: 'translation-figure-example',
      type: 'text' as const,
      content: `## ✏️ Translating a Whole Figure

To translate a polygon, translate each vertex with the **same** rule and connect the images in the same order.

### Worked Example
Translate triangle $A(1, 2),\\; B(4, 2),\\; C(2, 5)$ by the rule $(x, y) \\to (x - 3,\\, y + 1)$.

| Vertex | Rule applied | Image |
|--------|--------------|-------|
| $A(1, 2)$ | $(1 - 3,\\, 2 + 1)$ | $A'(-2,\\, 3)$ |
| $B(4, 2)$ | $(4 - 3,\\, 2 + 1)$ | $B'(1,\\, 3)$ |
| $C(2, 5)$ | $(2 - 3,\\, 5 + 1)$ | $C'(-1,\\, 6)$ |

Connect $A' \\to B' \\to C' \\to A'$ in the same order as the original. Because every point shifted by $\\langle -3,\\, 1 \\rangle$:

- $\\overline{AB}$ and $\\overline{A'B'}$ are the same length ($3$ units)
- $\\angle A$ and $\\angle A'$ have the same measure
- The triangle still goes counterclockwise (orientation preserved)`
    },

    {
      id: 'translation-composition',
      type: 'text' as const,
      content: `## 🔁 Composing Two Translations

If you translate by $\\vec{v}_1 = \\langle a_1,\\, b_1 \\rangle$ and then by $\\vec{v}_2 = \\langle a_2,\\, b_2 \\rangle$, the **combined** effect is a single translation by

$$
\\vec{v}_1 + \\vec{v}_2 \\;=\\; \\langle a_1 + a_2,\\; b_1 + b_2 \\rangle.
$$

| First translation | Then translation | Net effect |
|-------------------|-----------------|-----------|
| $\\langle 3,\\, -2 \\rangle$ | $\\langle 5,\\, 7 \\rangle$ | $\\langle 8,\\, 5 \\rangle$ |
| $\\langle -4,\\, 1 \\rangle$ | $\\langle 4,\\, -1 \\rangle$ | $\\langle 0,\\, 0 \\rangle$ (identity!) |
| $\\langle 0,\\, 6 \\rangle$ | $\\langle -3,\\, 0 \\rangle$ | $\\langle -3,\\, 6 \\rangle$ |

> 🔑 **Order doesn't matter** for translations: $\\vec{v}_1 + \\vec{v}_2 = \\vec{v}_2 + \\vec{v}_1$. (This is unusual — for *most* combinations of rigid transformations, order **does** matter.)`
    },

    {
      id: 'translation-dropdown',
      type: 'dropdown-select' as const,
      content: `### Check: Reading and Composing Translations`,
      exercise: {
        dropdowns: [
          {
            label: "Point $P(-2,\\, 5)$ is translated to $P'(3,\\, -1)$. The translation vector is:",
            options: ['$\\langle 5,\\, -6 \\rangle$', '$\\langle -5,\\, 6 \\rangle$', '$\\langle 1,\\, 4 \\rangle$', '$\\langle 5,\\, 6 \\rangle$'],
            correctIndex: 0,
            explanation: "Subtract: $\\vec{v} = P' - P = (3 - (-2),\\, -1 - 5) = \\langle 5,\\, -6 \\rangle$."
          },
          {
            label: 'A translation by $\\langle 4,\\, -3 \\rangle$ followed by $\\langle -1,\\, 7 \\rangle$ is equivalent to a single translation by:',
            options: ['$\\langle 3,\\, 4 \\rangle$', '$\\langle 5,\\, -10 \\rangle$', '$\\langle 3,\\, -4 \\rangle$', '$\\langle 5,\\, 10 \\rangle$'],
            correctIndex: 0,
            explanation: 'Add the vectors component-wise: $\\langle 4 + (-1),\\, -3 + 7 \\rangle = \\langle 3,\\, 4 \\rangle$.'
          },
          {
            label: 'Which property is **unique** to translations (as opposed to reflections or rotations)?',
            options: [
              'Preserves all distances',
              'Maps every point by the same vector',
              'Has at least one fixed point',
              'Reverses orientation'
            ],
            correctIndex: 1,
            explanation: 'Reflections and rotations both preserve distances. But only a translation moves every point by the *same* vector — and only a non-identity translation has *no* fixed points at all.'
          },
          {
            label: 'Translating $(x,\\, y)$ by the zero vector $\\langle 0,\\, 0 \\rangle$ gives:',
            options: ['$(0,\\, 0)$', '$(x,\\, y)$ — the identity', 'Any point on the $x$-axis', 'Undefined'],
            correctIndex: 1,
            explanation: 'The zero vector leaves every point in place. This is the identity transformation.'
          }
        ]
      }
    },

    {
      id: 'translation-common-mistakes',
      type: 'text' as const,
      content: `## ⚠️ Common Mistakes

1. **Confusing direction signs.** Many students read "$x - 3$" as "move right 3" because they see the "3". Always trust the sign: a *subtraction* on the $x$-coordinate shifts **left**.

2. **Applying the rule to only one vertex.** Once you find one image point, it's tempting to "just count" to find the others on the graph. Counting from a graph introduces errors — use the coordinate rule for **every** vertex.

3. **Swapping the role of $a$ and $b$.** In $\\langle a,\\, b \\rangle$, the first entry is **always** horizontal and the second is **always** vertical. Writing $\\langle 3,\\, 4 \\rangle$ for "up 3, right 4" is wrong; the correct vector is $\\langle 4,\\, 3 \\rangle$.

4. **Forgetting that the translation vector is the same for every point.** A translation does **not** depend on where the point is — it depends only on the vector.`
    },

    {
      id: 'translation-exit-quiz',
      type: 'multiple-choice' as const,
      content: `### Exit Quiz: Translation Mastery`,
      exercise: {
        questions: [
          {
            question: "Point $P(-6,\\, 4)$ is translated to $P'(-1,\\, -3)$. Which vector was used?",
            options: [
              '$\\langle 5,\\, -7 \\rangle$',
              '$\\langle -5,\\, 7 \\rangle$',
              '$\\langle 7,\\, -5 \\rangle$',
              '$\\langle -7,\\, 5 \\rangle$'
            ],
            correctAnswer: 0,
            explanation: "Subtract to recover the vector: $P' - P = (-1 - (-6),\\, -3 - 4) = \\langle 5,\\, -7 \\rangle$."
          },
          {
            question: 'Which coordinate rule translates every point left $8$ and up $3$?',
            options: [
              '$(x, y) \\to (x + 8,\\, y - 3)$',
              '$(x, y) \\to (x - 8,\\, y + 3)$',
              '$(x, y) \\to (y - 8,\\, x + 3)$',
              '$(x, y) \\to (-x - 8,\\, y + 3)$'
            ],
            correctAnswer: 1,
            explanation: 'Left is a negative shift on $x$; up is a positive shift on $y$. So the rule is $(x - 8,\\, y + 3)$.'
          },
          {
            question: 'Translating by $\\langle 2,\\, -5 \\rangle$ and then by $\\langle -7,\\, 5 \\rangle$ is the same as translating by:',
            options: [
              '$\\langle -5,\\, 0 \\rangle$',
              '$\\langle 9,\\, -10 \\rangle$',
              '$\\langle -5,\\, 10 \\rangle$',
              '$\\langle 5,\\, 0 \\rangle$'
            ],
            correctAnswer: 0,
            explanation: 'Add the vectors: $\\langle 2 + (-7),\\, -5 + 5 \\rangle = \\langle -5,\\, 0 \\rangle$. The figure ends up only shifted left $5$ units.'
          },
          {
            question: "Triangle $\\triangle ABC$ is translated to $\\triangle A'B'C'$. Which statement must be true?",
            options: [
              "$\\triangle A'B'C'$ is a mirror image of $\\triangle ABC$",
              "$\\triangle ABC \\cong \\triangle A'B'C'$ with the same orientation",
              "$\\triangle A'B'C'$ is larger than $\\triangle ABC$",
              "$\\triangle A'B'C'$ has at least one vertex at the origin"
            ],
            correctAnswer: 1,
            explanation: 'Translations are rigid transformations that preserve orientation, so the image is congruent to the original and traverses its vertices in the same direction.'
          }
        ]
      }
    }
  ]
}
