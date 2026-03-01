export const actCoordGeomPart4Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg4-intro',
      type: 'text' as const,
      content: `
# ⭕ Circles on the Coordinate Plane

**Part 4 of 7 — Standard Form, Center & Radius, Completing the Square**

The **standard form** equation of a circle is:

$$(x - h)^2 + (y - k)^2 = r^2$$

- **Center:** $(h, k)$
- **Radius:** $r$

| Equation | Center | Radius |
|----------|--------|--------|
| $(x - 3)^2 + (y + 1)^2 = 16$ | $(3, -1)$ | $4$ |
| $x^2 + y^2 = 25$ | $(0, 0)$ | $5$ |
| $(x + 2)^2 + (y - 5)^2 = 9$ | $(-2, 5)$ | $3$ |

**Key insight:** Watch the signs! $(y + 1)$ means $k = -1$, and $(x + 2)$ means $h = -2$.
      `
    },
    {
      id: 'act-cg4-completing',
      type: 'text' as const,
      content: `
## Completing the Square for Circles

The ACT may give a circle in **general form**:

$$x^2 + y^2 + Dx + Ey + F = 0$$

Convert it by completing the square for both variables.

**Example 1:** Rewrite $x^2 + y^2 - 8x + 6y - 11 = 0$.

**Step 1:** Group terms: $(x^2 - 8x) + (y^2 + 6y) = 11$

**Step 2:** Complete each square:
- $x$: $\\left(\\frac{-8}{2}\\right)^2 = 16$
- $y$: $\\left(\\frac{6}{2}\\right)^2 = 9$

**Step 3:** Add to both sides:

$$(x^2 - 8x + 16) + (y^2 + 6y + 9) = 11 + 16 + 9$$

$$(x - 4)^2 + (y + 3)^2 = 36$$

Center $= (4, -3)$, radius $= 6$. ✓

**ACT Tip:** On the ACT, you usually just need the center or radius — focus on completing the square correctly rather than graphing.
      `
    },
    {
      id: 'act-cg4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Circle Equations** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the center of $(x + 5)^2 + (y - 2)^2 = 49$?',
            options: ['$(5, -2)$', '$(-5, 2)$', '$(-5, -2)$', '$(5, 2)$'],
            correctAnswer: 1,
            explanation: '$(x + 5) = (x - (-5))$ so $h = -5$. $(y - 2)$ gives $k = 2$. Center $= (-5, 2)$.'
          },
          {
            question: 'What is the radius of $x^2 + y^2 = 81$?',
            options: ['$81$', '$\\sqrt{81}$', '$9$', 'Both B and C'],
            correctAnswer: 3,
            explanation: '$r^2 = 81 \\implies r = \\sqrt{81} = 9$. B and C are the same value.'
          }
        ]
      }
    },
    {
      id: 'act-cg4-input1',
      type: 'input-boxes' as const,
      content: `
**Circle Calculations** 🧮

Given $x^2 + y^2 - 4x + 10y + 20 = 0$, complete the square.

1) What is the x-coordinate of the center?
2) What is the y-coordinate of the center?
3) What is the radius?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '-5', '3'],
        hint1: '$x^2 - 4x$: half of $-4$ is $-2$, squared is $4$. The center x-value is $2$.',
        hint2: '$y^2 + 10y$: half of $10$ is $5$, squared is $25$. That gives $(y + 5)^2$, so $k = -5$.',
        hint3: '$(x-2)^2 + (y+5)^2 = -20 + 4 + 25 = 9$. So $r = 3$.',
        explanation: '$(x-2)^2 + (y+5)^2 = 9$. Center $(2, -5)$, radius $= \\sqrt{9} = 3$.'
      }
    },
    {
      id: 'act-cg4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Circle Properties** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $(x - h)^2 + (y - k)^2 = r^2$, the value $r^2$ represents the …',
            options: ['Radius', 'Diameter', 'Square of the radius', 'Circumference']
          },
          {
            label: 'When completing the square for $x^2 + 6x$, you add …',
            options: ['$3$', '$6$', '$9$', '$36$']
          },
          {
            label: 'A circle with center $(0, 0)$ and radius $7$ has equation …',
            options: ['$x^2 + y^2 = 7$', '$x^2 + y^2 = 14$', '$x^2 + y^2 = 49$', '$(x-7)^2 + (y-7)^2 = 0$']
          }
        ],
        correctAnswers: ['Square of the radius', '$9$', '$x^2 + y^2 = 49$'],
        hint1: 'The right side of the standard form is $r$ squared, not $r$ itself.',
        hint2: 'Half of $6$ is $3$, then square it.',
        hint3: '$r^2 = 49$.',
        explanation: 'The right side is $r^2$. Completing the square: $(6/2)^2 = 9$. At the origin with $r = 7$: $x^2 + y^2 = 49$.'
      }
    },
    {
      id: 'act-cg4-tangent',
      type: 'text' as const,
      content: `
## Tangent Lines & Point-on-Circle Problems

**Does a point lie on a circle?** Substitute it into the equation and check.

**Example 2:** Does $(3, 4)$ lie on $x^2 + y^2 = 25$?

$$3^2 + 4^2 = 9 + 16 = 25 \\; ✓$$

Yes, $(3, 4)$ is on the circle.

**Example 3:** Does $(1, 5)$ lie on $(x - 2)^2 + (y + 1)^2 = 36$?

$$(1 - 2)^2 + (5 + 1)^2 = 1 + 36 = 37 \\neq 36$$

No — $37 > 36$ means $(1,5)$ is **outside** the circle.

| Comparison | Location |
|-----------|----------|
| $= r^2$ | On the circle |
| $< r^2$ | Inside the circle |
| $> r^2$ | Outside the circle |

**ACT Tip:** This substitution test is fast and appears frequently on the ACT. No need for completing the square if the equation is already in standard form.
      `
    },
    {
      id: 'act-cg4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'After completing the square, $x^2 + y^2 + 2x - 14y + 25 = 0$ becomes $(x + 1)^2 + (y - 7)^2 = r^2$. What is $r$?',
            options: ['$3$', '$5$', '$25$', '$\\sqrt{25}$'],
            correctAnswer: 1,
            explanation: '$r^2 = -25 + 1 + 49 = 25$. So $r = 5$. Choices B and D are equivalent.'
          },
          {
            question: 'Which point lies INSIDE the circle $x^2 + y^2 = 100$?',
            options: ['$(6, 8)$', '$(10, 0)$', '$(7, 7)$', '$(5, 5)$'],
            correctAnswer: 3,
            explanation: 'Test $(5,5)$: $25 + 25 = 50 < 100$. Inside. $(6,8)$: $36+64=100$ (on). $(10,0)$: $100$ (on). $(7,7)$: $98 < 100$ also works, but $(5,5)$ is clearly inside.'
          }
        ]
      }
    }
  ]
};
