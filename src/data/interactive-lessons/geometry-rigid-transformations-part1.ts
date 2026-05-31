export const geoRigidTransformationsPart1Data = {
  topicSlug: 'rigid-transformations-geo',
  sections: [
    {
      id: 'rt1-intro',
      type: 'text' as const,
      content: `# Part 1: What Makes a Transformation "Rigid"?

**Part 1 of 7 — Distance, Angle, and Orientation**

---

### Topics in This Part

| Section |
|---------|
| The Three Invariants |
| Rigid vs. Non-Rigid |
| Reading a Coordinate Rule |
| Detecting Rigidity from a Mapping |
| Orientation: Direct vs. Opposite |

> 🔑 **Big Idea:** A rigid transformation is not defined by *what it looks like*; it is defined by *what it preserves*. If two figures can be aligned by a rigid transformation, they are **congruent** — by definition.

---

### What You'll Master in Part 1
- Decide whether a given coordinate rule is rigid **without** graphing it
- Predict which side lengths and angle measures change (and which don't)
- Distinguish translations, reflections, and rotations from dilations/stretches by their fingerprint on distance and orientation`
    },

    {
      id: 'rt1-invariants',
      type: 'text' as const,
      content: `## 🧭 The Three Invariants

A transformation $T$ is **rigid** (an *isometry*) if and only if it preserves **every** pairwise distance between points:

$$
|T(P) - T(Q)| \\;=\\; |P - Q| \\quad \\text{for all points } P, Q.
$$

That single condition forces three observable consequences:

| What is preserved | Why it follows from distance preservation |
|-------------------|---------------------------------------------|
| **Segment lengths** | A segment is determined by its two endpoints; distance is preserved. |
| **Angle measures** | An angle is fixed by the three distances between its three defining points (Law of Cosines). |
| **Shape & area** | Lengths and angles together determine the figure up to position. |

> 💡 **What is *not* automatically preserved:** *orientation* (clockwise vs. counter-clockwise ordering of vertices). Reflections reverse it; translations and rotations don't. We'll exploit this in the next part.

---

### Why "preserves distance" is the *right* definition

You might be tempted to define rigidity as "preserves shape." But "shape" is vague — does a 90° rotation change the shape? It changes the picture you draw, but every measurement is identical. **Distance preservation** is the unambiguous mathematical condition, and everything else — angles, perimeter, area, congruence — falls out of it as a theorem, not a separate rule to memorize.`
    },

    {
      id: 'rt1-invariants-quiz',
      type: 'multiple-choice' as const,
      content: `### Check: Which Properties Survive a Rigid Transformation?`,
      exercise: {
        questions: [
          {
            question: 'A triangle with side lengths 5, 12, 13 is moved by a rigid transformation. Its image has side lengths:',
            options: [
              '5, 12, 13 — in the same vertex order',
              '5, 12, 13 — but possibly in a reversed vertex order',
              'Proportional to 5, 12, 13 with the same scale factor',
              'Cannot be determined without knowing which transformation was used'
            ],
            correctAnswer: 1,
            explanation: 'All side lengths are preserved (5, 12, 13), but a reflection reverses the orientation in which the vertices are listed. So the multiset {5, 12, 13} is fixed, but the cyclic order may flip. The vertex ordering being possibly reversed is what distinguishes reflections from translations and rotations.'
          },
          {
            question: 'A transformation maps $(0,0) \\to (0,0)$ and $(1,0) \\to (2,0)$. Is it rigid?',
            options: [
              'Yes — the origin is fixed.',
              'Yes — both points landed on the x-axis.',
              'No — the distance from $(0,0)$ to $(1,0)$ is 1, but the distance between the images is 2.',
              'Not enough information; we need to see where a third point goes.'
            ],
            correctAnswer: 2,
            explanation: 'Rigidity requires every pairwise distance to be preserved. Here, one pair of points went from distance 1 to distance 2 — that single failure rules out rigidity. No further information is needed.'
          },
          {
            question: 'Under a rigid transformation, which of the following is NOT necessarily preserved?',
            options: [
              'Whether three points are collinear',
              'The measure of an interior angle',
              'Whether the vertices are listed clockwise or counter-clockwise',
              'The perimeter of a polygon'
            ],
            correctAnswer: 2,
            explanation: 'Collinearity, angle measure, and perimeter all follow from distance preservation and are always preserved. Orientation (clockwise vs. counter-clockwise) is preserved by translations and rotations but reversed by reflections — so it is not a property all rigid transformations preserve.'
          }
        ]
      }
    },

    {
      id: 'rt1-rigid-vs-not',
      type: 'text' as const,
      content: `## 🔍 Rigid vs. Non-Rigid — A Coordinate-Rule Test

You can often decide whether a rule is rigid just by inspecting it.

| Rule | Rigid? | Quick reason |
|------|--------|--------------|
| $(x,y) \\to (x+3,\\, y-2)$ | ✅ Yes | Translation — adds the same vector to every point. |
| $(x,y) \\to (-x,\\, y)$ | ✅ Yes | Reflection over the y-axis. |
| $(x,y) \\to (-y,\\, x)$ | ✅ Yes | 90° rotation about the origin. |
| $(x,y) \\to (2x,\\, 2y)$ | ❌ No | Dilation — doubles every distance from the origin. |
| $(x,y) \\to (2x,\\, y)$ | ❌ No | Horizontal stretch — stretches some distances but not others. |
| $(x,y) \\to (x+y,\\, y)$ | ❌ No | Shear — preserves area but not distance. |

---

### The Linear-Algebra Fingerprint (Optional Insight)

Every transformation of the plane that fixes the origin can be written as

$$
\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} \\;=\\; M \\begin{pmatrix} x \\\\ y \\end{pmatrix}
$$

for some $2 \\times 2$ matrix $M$. The transformation is rigid (fixing the origin) **iff** $M$ is *orthogonal*: $M^\\top M = I$. Translations are then layered on top by adding a vector. You don't need this for the AP-style work in this unit, but it explains *why* there are exactly three families of rigid transformations (translation, reflection, rotation) — and no others.`
    },

    {
      id: 'rt1-rule-test',
      type: 'multiple-choice' as const,
      content: `### Check: Reading Coordinate Rules`,
      exercise: {
        questions: [
          {
            question: 'Which of the following coordinate rules is **NOT** a rigid transformation?',
            options: [
              '$(x,y) \\to (x-4,\\, y+7)$',
              '$(x,y) \\to (y,\\, -x)$',
              '$(x,y) \\to (-x,\\, -y)$',
              '$(x,y) \\to (x,\\, 3y)$'
            ],
            correctAnswer: 3,
            explanation: 'The rule $(x,y)\\to(x,3y)$ triples vertical distances while leaving horizontal distances alone — that\'s a vertical stretch, not an isometry. The other three are a translation, a 90° clockwise rotation, and a 180° rotation, all of which preserve distance.'
          },
          {
            question: 'Two students apply the rule $(x,y) \\to (x+a,\\, y+b)$ to the segment from $(1,2)$ to $(5,5)$. Without computing, you can be sure the image segment has length:',
            options: [
              '$\\sqrt{a^2 + b^2}$',
              '$5$',
              'It depends on the values of $a$ and $b$',
              '$\\sqrt{(5+a)^2 + (5+b)^2}$'
            ],
            correctAnswer: 1,
            explanation: 'The original segment has length $\\sqrt{(5-1)^2 + (5-2)^2} = \\sqrt{16+9} = 5$. Translation is rigid, so the image segment has the **same** length, 5, for *any* values of $a$ and $b$. The translation vector $(a,b)$ tells you where the segment goes, not how long it is.'
          },
          {
            question: 'A transformation doubles the area of every triangle it acts on. Could it still be rigid?',
            options: [
              'Yes, if it also reflects the triangle',
              'Yes, if the doubling is only a relabeling of vertices',
              'No — area is a function of distances, and rigidity preserves all distances',
              'Only for right triangles'
            ],
            correctAnswer: 2,
            explanation: 'Triangle area is determined by side lengths (Heron\'s formula). If every distance is preserved, every area is preserved exactly. Doubling the area would require doubling some distances — incompatible with rigidity.'
          }
        ]
      }
    },

    {
      id: 'rt1-mapping-detection',
      type: 'text' as const,
      content: `## 📐 Detecting Rigidity from a Mapping

Sometimes you are not given a formula — only a table that says "this point goes to that point." How do you tell whether such a mapping *could* extend to a rigid transformation?

### The Test
Pick any two points $P, Q$ in the pre-image. Compute both
$$
d_{\\text{before}} = |P - Q| \\quad \\text{and} \\quad d_{\\text{after}} = |P' - Q'|.
$$
If $d_{\\text{before}} \\neq d_{\\text{after}}$ for **any** pair, the mapping is not rigid. (One bad pair is enough to disqualify it.)

If all pairwise distances match, the mapping extends to *exactly one* rigid transformation of the plane.

---

### Worked Example

| Point | Image |
|-------|-------|
| $A = (0,0)$ | $A' = (3,1)$ |
| $B = (4,0)$ | $B' = (3,5)$ |
| $C = (4,3)$ | $C' = (0,5)$ |

**Check the three pairwise distances:**

| Pair | Before | After |
|------|--------|-------|
| $AB$ | $4$ | $\\sqrt{0^2 + 4^2} = 4$ ✅ |
| $BC$ | $3$ | $\\sqrt{3^2 + 0^2} = 3$ ✅ |
| $AC$ | $5$ | $\\sqrt{3^2 + 4^2} = 5$ ✅ |

All three match → the mapping is consistent with a rigid transformation. (In fact it's a 90° rotation about $(2, -1)$ — but we don't need to identify *which* rigid transformation to conclude that one exists.)`
    },

    {
      id: 'rt1-mapping-quiz',
      type: 'multiple-choice' as const,
      content: `### Check: Detecting Rigidity from a Table`,
      exercise: {
        questions: [
          {
            question: 'A mapping sends $A=(0,0) \\to A\'=(6,0)$, $B=(3,0) \\to B\'=(6,3)$, and $C=(0,4) \\to C\'=(2,0)$. Is it rigid?',
            options: [
              'Yes — $AB$ goes from 3 to 3 and $AC$ goes from 4 to 4.',
              'Yes — three points are enough to determine a rigid transformation.',
              'No — $BC$ goes from 5 to $\\sqrt{4^2 + 3^2} = 5$, wait that\'s fine, so yes.',
              'No — $BC$ goes from $5$ to $\\sqrt{4^2 + 3^2} = 5$ ✓, but $AC$ goes from $4$ to $\\sqrt{2^2+0^2} = 2$.'
            ],
            correctAnswer: 3,
            explanation: 'You have to check every pair. $AC$ went from distance 4 to distance 2 — that single mismatch rules out rigidity, even though the other two pairs check out. This is the key trap: a partial check can give false confidence.'
          },
          {
            question: 'How many pairwise-distance checks do you need to confirm that a mapping of a 5-vertex polygon to 5 image points is rigid?',
            options: [
              '5 — one per vertex',
              '4 — one per side',
              '10 — every pair of vertices',
              '2 — just the diagonals'
            ],
            correctAnswer: 2,
            explanation: 'You need every pairwise distance, which for 5 points is $\\binom{5}{2} = 10$ pairs. Checking only the 5 sides is not enough — a "bent" image could have all 5 sides correct but a wrong diagonal, breaking rigidity.'
          }
        ]
      }
    },

    {
      id: 'rt1-orientation',
      type: 'text' as const,
      content: `## 🔄 Orientation: The Fingerprint That Tells Reflections Apart

The three rigid transformations of the plane split cleanly into two camps:

| Family | Orientation | Example |
|--------|-------------|---------|
| **Direct** (orientation-preserving) | Vertex order unchanged | Translation, rotation |
| **Opposite** (orientation-reversing) | Vertex order flipped | Reflection |

To **measure** orientation, list the vertices in order ($A, B, C$) and walk around the triangle. If you walk counter-clockwise, the orientation is **positive**; clockwise is **negative**.

### Computing Orientation Algebraically
For triangle with vertices $A=(x_1,y_1)$, $B=(x_2,y_2)$, $C=(x_3,y_3)$, the signed quantity
$$
2 \\cdot \\text{Area}_{\\text{signed}} \\;=\\; (x_2 - x_1)(y_3 - y_1) - (x_3 - x_1)(y_2 - y_1)
$$
is **positive** for counter-clockwise vertices and **negative** for clockwise vertices.

- A translation or rotation preserves the **sign**.
- A reflection **flips** the sign.
- A dilation by positive scale factor preserves the sign; by negative scale factor flips it.

> 🔑 **Use this to identify mystery transformations.** If a transformation preserves all distances *and* preserves orientation, it's a translation or rotation. If it preserves all distances but reverses orientation, it must contain at least one reflection.`
    },

    {
      id: 'rt1-orientation-dropdown',
      type: 'dropdown-select' as const,
      content: `### Check: Diagnosing Transformations by Invariants`,
      exercise: {
        dropdowns: [
          {
            label: 'A transformation preserves all distances and preserves orientation. It must be a:',
            options: ['reflection only', 'translation or rotation', 'dilation', 'shear'],
            correctIndex: 1,
            explanation: 'Distance preservation rules out dilations and shears. Orientation preservation rules out reflections. The remaining direct isometries are translations and rotations.'
          },
          {
            label: 'A transformation preserves all distances but reverses orientation. It must include:',
            options: ['no reflections', 'an odd number of reflections', 'an even number of reflections', 'a dilation'],
            correctIndex: 1,
            explanation: 'Each reflection flips orientation once. An odd number of reflections gives an opposite isometry; an even number gives a direct isometry (equivalent to a translation or rotation).'
          },
          {
            label: 'A transformation preserves angles and orientation but doubles every length. It must be:',
            options: ['a rigid transformation', 'a reflection', 'a dilation with scale factor 2', 'impossible'],
            correctIndex: 2,
            explanation: 'Angle preservation + length scaling = similarity transformation. The specific case of uniform scaling without rotation or reflection is a dilation; doubling lengths means scale factor 2.'
          },
          {
            label: 'A transformation preserves areas of all triangles but does NOT preserve all distances. It is:',
            options: ['necessarily rigid', 'a possible non-rigid transformation (e.g., a shear)', 'impossible', 'a dilation'],
            correctIndex: 1,
            explanation: 'Shears preserve area (they slide parallel layers without stretching the perpendicular direction) but change distances. So area preservation alone is weaker than rigidity.'
          }
        ]
      }
    },

    {
      id: 'rt1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `### Part 1 Exit Quiz`,
      exercise: {
        questions: [
          {
            question: 'Triangle $ABC$ has $\\angle A = 40°$ and side $AB = 7$. After a rigid transformation, the image $\\triangle A\'B\'C\'$ has $\\angle A\' = 40°$ and side $A\'B\' = 7$. You can conclude:',
            options: [
              'The two triangles are congruent.',
              'The two triangles are similar but not necessarily congruent.',
              'The transformation might not actually be rigid.',
              'The two triangles must be identical (same coordinates).'
            ],
            correctAnswer: 0,
            explanation: 'A rigid transformation preserves every length and angle, so every other side and angle in $\\triangle A\'B\'C\'$ also matches the original. By definition, this means the two triangles are congruent. They need not have the same coordinates — they are congruent regardless of where in the plane the image lands.'
          },
          {
            question: 'You apply the rule $(x,y) \\to (x+2,\\, y) \\to (-x,\\, y)$ (translation then reflection over y-axis) to the point $(3, 4)$. The final image is:',
            options: [
              '$(-5, 4)$',
              '$(-3, 4)$',
              '$(5, 4)$',
              '$(-1, 4)$'
            ],
            correctAnswer: 0,
            explanation: 'Apply the translation first: $(3, 4) \\to (5, 4)$. Then reflect over the y-axis: $(5, 4) \\to (-5, 4)$. Order matters — reflecting first and then translating would give $(-1, 4)$ instead.'
          },
          {
            question: 'Which combination of properties uniquely identifies the family of *reflections* among all plane transformations?',
            options: [
              'Preserves distances and has at least one fixed point',
              'Preserves distances, reverses orientation, and has a whole line of fixed points',
              'Preserves angles and reverses orientation',
              'Preserves distances and maps the origin to itself'
            ],
            correctAnswer: 1,
            explanation: 'Rotations preserve distances and have a fixed point too (the center), so option A fits rotations as well. Option C describes glide reflections and reflections both. Only reflections have an entire **line** of fixed points (the mirror line) AND reverse orientation AND preserve distance.'
          },
          {
            question: 'A transformation maps $(0,0) \\to (1,1)$, $(1,0) \\to (1,2)$, and $(0,1) \\to (0,1)$. Identify it:',
            options: [
              'A translation by $(1, 1)$',
              'A reflection over the line $y = x$',
              'A 90° rotation, but not about the origin',
              'Not a rigid transformation at all'
            ],
            correctAnswer: 2,
            explanation: 'Check distances: $(0,0)$–$(1,0)$ before = 1, after $(1,1)$–$(1,2)$ = 1 ✓. $(0,0)$–$(0,1)$ before = 1, after $(1,1)$–$(0,1)$ = 1 ✓. $(1,0)$–$(0,1)$ before = $\\sqrt2$, after $(1,2)$–$(0,1)$ = $\\sqrt2$ ✓. So it is rigid. Orientation: the three pre-image vertices traversed CCW; the image vertices also CCW — so it is direct (rotation or translation). It is not a translation because no single vector $(a,b)$ sends all three points correctly. Therefore it is a rotation; the fixed point of this rotation turns out to be $(0,1)$, and the angle is 90°.'
          }
        ]
      }
    }
  ]
}
