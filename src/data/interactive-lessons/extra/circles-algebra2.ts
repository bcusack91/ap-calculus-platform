import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Circles (Algebra 2).
 * Registry key: 'circles-algebra2' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'circles-algebra2',
    sections: [
      {
        id: 'circ1-intro',
        type: 'text' as const,
        content: `# ⭕ Circles

**Part 1 of 5 — The Standard Equation**

---

### Topics in This Part

| Section |
|---------|
| Where the Equation Comes From |
| Standard Form: Center & Radius |
| Writing a Circle's Equation |

> 🔑 **Key Concept:** Every circle is the set of all points a fixed distance $r$ (the **radius**) from a fixed point $(h, k)$ (the **center**). That single idea, fed through the distance formula, produces the equation of *every* circle.`,
      },
      {
        id: 'circ1-derive',
        type: 'text' as const,
        content: `## Where the Equation Comes From

A point $(x, y)$ lies on the circle exactly when its distance to the center $(h, k)$ equals $r$. The distance formula says:

$$\\sqrt{(x - h)^2 + (y - k)^2} = r$$

Square both sides to clear the root, and you get the **standard form** of a circle:

$$(x - h)^2 + (y - k)^2 = r^2$$

| Piece | Meaning |
|-------|---------|
| $(h, k)$ | the **center** |
| $r$ | the **radius** |
| $r^2$ | the number on the **right side** |

> ⚠️ **Watch the right side.** The equation stores $r^2$, *not* $r$. If you see $= 25$, the radius is $\\sqrt{25} = 5$, not $25$.`,
      },
      {
        id: 'circ1-read-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $(x - h)^2 + (y - k)^2 = r^2$, the right-hand number is:',
              options: ['the radius $r$', 'the radius squared, $r^2$', 'the diameter', 'the area'],
              correctAnswer: 1,
              explanation: 'Squaring the distance formula leaves $r^2$ on the right. To get the radius you take the square root.',
            },
            {
              question: 'The radius of $(x - 2)^2 + (y + 7)^2 = 36$ is:',
              options: ['$6$', '$36$', '$18$', '$\\sqrt{6}$'],
              correctAnswer: 0,
              explanation: '$r^2 = 36$, so $r = \\sqrt{36} = 6$. The center is $(2, -7)$.',
            },
          ],
        },
      },
      {
        id: 'circ1-write',
        type: 'text' as const,
        content: `## Writing a Circle's Equation

Given a center and radius, just plug into standard form — but mind the **signs** and **square the radius**.

### Example: center $(3, -2)$, radius $5$

The form subtracts the center coordinates:

$$(x - 3)^2 + (y - (-2))^2 = 5^2 \\;\\Longrightarrow\\; (x - 3)^2 + (y + 2)^2 = 25$$

### Example: center at the origin $(0, 0)$, radius $4$

$$(x - 0)^2 + (y - 0)^2 = 4^2 \\;\\Longrightarrow\\; x^2 + y^2 = 16$$

> 💡 **Sign flip:** a center coordinate of $-2$ shows up as $(y + 2)$ in the equation, because $y - (-2) = y + 2$.`,
      },
      {
        id: 'circ1-write-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The equation of the circle with center $(-1, 5)$ and radius $3$ is:',
              options: ['$(x + 1)^2 + (y - 5)^2 = 9$', '$(x - 1)^2 + (y + 5)^2 = 9$', '$(x + 1)^2 + (y - 5)^2 = 3$', '$(x - 1)^2 + (y - 5)^2 = 9$'],
              correctAnswer: 0,
              explanation: 'Center $(-1, 5)$ gives $(x - (-1)) = (x + 1)$ and $(y - 5)$; radius $3$ gives $r^2 = 9$.',
            },
          ],
        },
      },
      {
        id: 'circ1-r2-note',
        type: 'text' as const,
        content: `## The Right Side Is Always $r^2$

The single most common slip is writing the *radius* on the right instead of the *radius squared*. Build the habit now: whenever you write a circle, square the radius for the right-hand number.

| Radius $r$ | Right side $r^2$ |
|-----------|------------------|
| $5$ | $25$ |
| $\\sqrt{3}$ | $3$ |
| $\\dfrac{1}{2}$ | $\\dfrac{1}{4}$ |

> 💡 Squaring a square root cancels the root: $(\\sqrt{3})^2 = 3$. So a "messy" radius like $\\sqrt{3}$ gives a clean right side.`,
      },
      {
        id: 'circ1-r2-drill',
        type: 'input-boxes' as const,
        content: `**Square the Radius** 🧮

Enter the value of $r^2$ that belongs on the right side of the equation.

**1)** radius $r = 8 \\;\\Rightarrow\\; r^2 = \\,?$
**2)** radius $r = \\sqrt{10} \\;\\Rightarrow\\; r^2 = \\,?$
**3)** radius $r = \\dfrac{1}{2} \\;\\Rightarrow\\; r^2 = \\,?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['64', '10', '0.25'],
          hint1: '$8^2 = 64$.',
          hint2: 'Squaring undoes the root: $(\\sqrt{10})^2 = 10$.',
          hint3: '$\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4} = 0.25$.',
          explanation: '1) $r^2 = 64$.  2) $r^2 = 10$.  3) $r^2 = 0.25$. The right side of standard form is always $r^2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'circles-algebra2',
    sections: [
      {
        id: 'circ2-intro',
        type: 'text' as const,
        content: `# ⭕ Circles

**Part 2 of 5 — Reading & Graphing a Circle**

---

> 🔑 **The Idea:** A circle written in standard form hands you its center and radius for free — but only if you flip the signs correctly. Once you have $(h, k)$ and $r$, graphing is just "plot the center, then count $r$ in four directions."`,
      },
      {
        id: 'circ2-read',
        type: 'text' as const,
        content: `## Reading Center & Radius

Compare your equation to $(x - h)^2 + (y - k)^2 = r^2$ and **read off the opposite signs**.

| Equation | Center $(h, k)$ | $r^2$ | Radius |
|----------|-----------------|-------|--------|
| $(x - 4)^2 + (y - 1)^2 = 9$ | $(4,\\ 1)$ | $9$ | $3$ |
| $(x + 3)^2 + (y + 5)^2 = 49$ | $(-3,\\ -5)$ | $49$ | $7$ |
| $(x - 6)^2 + y^2 = 20$ | $(6,\\ 0)$ | $20$ | $2\\sqrt{5}$ |

> ⚠️ **Sign trap:** $(x + 3)^2$ means $h = -3$, **not** $+3$. The standard form subtracts, so a plus sign hides a negative coordinate. A missing term (like $y^2$) means that coordinate is $0$.`,
      },
      {
        id: 'circ2-read-dd',
        type: 'dropdown-select' as const,
        content: `**Read the Circle** 🔽

Pull the center and radius out of each equation.`,
        exercise: {
          dropdowns: [
            { label: 'Center of $(x - 4)^2 + (y - 1)^2 = 9$:', options: ['$(4, 1)$', '$(-4, -1)$', '$(4, -1)$', '$(1, 4)$'] },
            { label: 'Center of $(x + 3)^2 + (y + 5)^2 = 49$:', options: ['$(-3, -5)$', '$(3, 5)$', '$(-3, 5)$', '$(3, -5)$'] },
            { label: 'Radius of $(x + 3)^2 + (y + 5)^2 = 49$:', options: ['$7$', '$49$', '$\\sqrt{7}$', '$14$'] },
          ],
          correctAnswers: ['$(4, 1)$', '$(-3, -5)$', '$7$'],
          hint1: '$(x - 4)$ and $(y - 1)$ already subtract, so the center is $(4, 1)$.',
          hint2: '$(x + 3) = (x - (-3))$ and $(y + 5) = (y - (-5))$, so the center is $(-3, -5)$.',
          hint3: '$r^2 = 49$, so $r = \\sqrt{49} = 7$.',
          explanation: 'Flip the signs inside the parentheses to get the center; take the square root of the right side to get the radius.',
        },
      },
      {
        id: 'circ2-graph',
        type: 'text' as const,
        content: `## Graphing a Circle

To graph $(x - 4)^2 + (y - 1)^2 = 9$:

1. **Plot the center** $(4, 1)$.
2. **Use $r = 3$** to mark four "anchor" points by counting $3$ units up, down, left, and right:

| Direction | Point |
|-----------|-------|
| Right | $(7, 1)$ |
| Left | $(1, 1)$ |
| Up | $(4, 4)$ |
| Down | $(4, -2)$ |

3. **Sketch** a smooth curve through the four anchors.

> 💡 The four anchor points are the easiest to plot precisely — they sit exactly $r$ away from the center along the grid lines, so you don't need the distance formula.`,
      },
      {
        id: 'circ2-anchor-drill',
        type: 'input-boxes' as const,
        content: `**Anchor Points** 🧮

For the circle $(x - 4)^2 + (y - 1)^2 = 9$ — center $(4, 1)$, radius $3$ — find these anchor points.

**1)** The **rightmost** point has $x = \\,?$
**2)** The **rightmost** point has $y = \\,?$
**3)** The **topmost** point has $y = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '1', '4'],
          hint1: 'Rightmost = move $r = 3$ right from center $x$: $4 + 3 = 7$.',
          hint2: 'Moving left/right keeps $y$ at the center value: $y = 1$.',
          hint3: 'Topmost = move $r = 3$ up from center $y$: $1 + 3 = 4$.',
          explanation: 'Rightmost $(7, 1)$, topmost $(4, 4)$. Each anchor is exactly $r = 3$ from the center along a grid line.',
        },
      },
      {
        id: 'circ2-on-circle',
        type: 'text' as const,
        content: `## Is a Point *On* the Circle?

A point lies **on** the circle when it makes the equation true. Plug it in and check.

### Test $(7, 1)$ on $(x - 4)^2 + (y - 1)^2 = 9$

$$(7 - 4)^2 + (1 - 1)^2 = 3^2 + 0^2 = 9 \\;\\checkmark$$

It equals $9$, so $(7, 1)$ is **on** the circle.

### Test $(4, 5)$ on the same circle

$$(4 - 4)^2 + (5 - 1)^2 = 0 + 16 = 16$$

Since $16 > 9$, the point is *farther* than the radius — it lies **outside** the circle. A value **less than** $r^2$ would land **inside**.`,
      },
      {
        id: 'circ2-on-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which point lies ON the circle $x^2 + y^2 = 25$?',
              options: ['$(3, 4)$', '$(2, 4)$', '$(5, 5)$', '$(1, 1)$'],
              correctAnswer: 0,
              explanation: '$3^2 + 4^2 = 9 + 16 = 25 \\checkmark$. The others give $20$, $50$, and $2$ — none equal $25$.',
            },
            {
              question: 'For $(x - 1)^2 + (y - 2)^2 = 10$, the point $(5, 5)$ gives $(5-1)^2 + (5-2)^2 = 25$. So $(5, 5)$ is:',
              options: ['outside the circle', 'on the circle', 'inside the circle', 'the center'],
              correctAnswer: 0,
              explanation: '$25 > 10$, so the point is farther from the center than the radius — it lies outside.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'circles-algebra2',
    sections: [
      {
        id: 'circ3-intro',
        type: 'text' as const,
        content: `# ⭕ Circles

**Part 3 of 5 — General Form & Completing the Square**

---

> 🔑 **The Goal:** Circles often arrive *expanded* as $x^2 + y^2 + Dx + Ey + F = 0$ (**general form**), which hides the center and radius. **Completing the square** — once for $x$, once for $y$ — converts it back to standard form.`,
      },
      {
        id: 'circ3-general',
        type: 'text' as const,
        content: `## General Form

$$x^2 + y^2 + Dx + Ey + F = 0$$

You can recognize a circle in general form by two signs:
- The $x^2$ and $y^2$ terms are **both present** with the **same coefficient** ($1$ here).
- There is no $xy$ term.

### The Conversion Recipe

1. **Group** the $x$-terms and $y$-terms; move the constant $F$ to the right.
2. **Complete the square** for $x$ (add $\\left(\\tfrac{D}{2}\\right)^2$) and for $y$ (add $\\left(\\tfrac{E}{2}\\right)^2$).
3. **Add the same amounts to the right side** to keep the equation balanced.
4. **Factor** each group into a perfect square.

> ⚠️ Whatever you add on the left to complete a square, you **must add to the right** as well.`,
      },
      {
        id: 'circ3-worked',
        type: 'text' as const,
        content: `## Worked Example

Convert $x^2 + y^2 - 6x + 4y - 12 = 0$ to standard form.

**Step 1 — Group and move the constant:**
$$(x^2 - 6x) + (y^2 + 4y) = 12$$

**Step 2 — Complete each square.** Half of $-6$ is $-3$, so add $(-3)^2 = 9$. Half of $4$ is $2$, so add $2^2 = 4$. Add **both** to the right too:
$$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$$

**Step 3 — Factor and simplify:**
$$(x - 3)^2 + (y + 2)^2 = 25$$

> ✅ **Read it off:** center $(3, -2)$, radius $\\sqrt{25} = 5$.`,
      },
      {
        id: 'circ3-steps-dd',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're converting $x^2 + y^2 + 8x - 2y - 8 = 0$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Group and move the constant:', options: ['$(x^2 + 8x) + (y^2 - 2y) = 8$', '$(x^2 + 8x) + (y^2 - 2y) = -8$', '$(x^2 - 8x) + (y^2 + 2y) = 8$', '$x^2 + y^2 = 8x - 2y$'] },
            { label: 'Add to complete the $x$-square:', options: ['$16$', '$8$', '$4$', '$64$'] },
            { label: 'Add to complete the $y$-square:', options: ['$1$', '$2$', '$4$', '$-1$'] },
            { label: 'Factored result:', options: ['$(x + 4)^2 + (y - 1)^2 = 25$', '$(x - 4)^2 + (y + 1)^2 = 25$', '$(x + 4)^2 + (y - 1)^2 = 9$', '$(x + 8)^2 + (y - 2)^2 = 25$'] },
          ],
          correctAnswers: ['$(x^2 + 8x) + (y^2 - 2y) = 8$', '$16$', '$1$', '$(x + 4)^2 + (y - 1)^2 = 25$'],
          hint1: 'Move the $-8$ across; it becomes $+8$ on the right.',
          hint2: 'Half of $8$ is $4$, and $4^2 = 16$.',
          hint3: 'Half of $-2$ is $-1$, and $(-1)^2 = 1$. The right side becomes $8 + 16 + 1 = 25$, so $r = 5$.',
          explanation: '$(x^2+8x+16) + (y^2-2y+1) = 8+16+1 \\Rightarrow (x+4)^2 + (y-1)^2 = 25$. Center $(-4, 1)$, radius $5$.',
        },
      },
      {
        id: 'circ3-balance',
        type: 'text' as const,
        content: `## Don't Forget to Balance

The one step students drop is **adding the new constants to the right side**. The left side gains $\\left(\\tfrac{D}{2}\\right)^2$ and $\\left(\\tfrac{E}{2}\\right)^2$ to build the two perfect squares — so the right side must gain exactly the same amounts.

$$x^2 + y^2 - 10x + 6y + 18 = 0$$
$$(x^2 - 10x) + (y^2 + 6y) = -18 \\;\\xrightarrow{+25,\\,+9}\\; (x^2 - 10x + 25) + (y^2 + 6y + 9) = -18 + 25 + 9$$

If you only add on the left, the radius comes out wrong. Keep both sides equal.`,
      },
      {
        id: 'circ3-convert-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Convert $x^2 + y^2 - 10x + 6y + 18 = 0$ to standard form.',
              options: ['$(x - 5)^2 + (y + 3)^2 = 16$', '$(x + 5)^2 + (y - 3)^2 = 16$', '$(x - 5)^2 + (y + 3)^2 = 52$', '$(x - 5)^2 + (y - 3)^2 = 16$'],
              correctAnswer: 0,
              explanation: 'Group: $(x^2-10x)+(y^2+6y)=-18$. Add $25$ and $9$: right side $= -18+25+9 = 16$. So $(x-5)^2+(y+3)^2=16$ — center $(5,-3)$, radius $4$.',
            },
            {
              question: 'When completing the square for the $x$-terms $x^2 - 10x$, what do you add?',
              options: ['$25$', '$100$', '$5$', '$-5$'],
              correctAnswer: 0,
              explanation: 'Add $\\left(\\frac{-10}{2}\\right)^2 = (-5)^2 = 25$ — half the coefficient, squared.',
            },
          ],
        },
      },
      {
        id: 'circ3-extract-note',
        type: 'text' as const,
        content: `## From Standard Form to the Answer

Once you reach $(x - h)^2 + (y - k)^2 = r^2$, the rest is reading:

- **Center:** flip the signs inside the parentheses $\\to (h, k)$.
- **Radius:** take the square root of the right side $\\to r = \\sqrt{r^2}$.

In the next drill you'll do the full conversion, then pull out whatever value the question asks for. Square-root cleanly: a right side of $9$ gives $r = 3$, and $16$ gives $r = 4$.`,
      },
      {
        id: 'circ3-convert-drill',
        type: 'input-boxes' as const,
        content: `**Convert & Extract** 🧮

Complete the square to convert each circle, then enter the requested value.

**1)** $x^2 + y^2 - 4x - 8y + 11 = 0$.  What is the **radius**?
**2)** $x^2 + y^2 + 2x + 6y - 6 = 0$.  What is the **radius**?
**3)** For circle (1), what is the **$x$-coordinate of the center**?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '4', '2'],
          hint1: '(1) Add $4$ and $16$: $-11 + 4 + 16 = 9$, so $r = \\sqrt{9} = 3$.',
          hint2: '(2) Add $1$ and $9$: $6 + 1 + 9 = 16$, so $r = \\sqrt{16} = 4$.',
          hint3: '(1) factors to $(x - 2)^2 + (y - 4)^2 = 9$, so the center is $(2, 4)$.',
          explanation: '1) $(x-2)^2+(y-4)^2=9$, $r=3$.  2) $(x+1)^2+(y+3)^2=16$, $r=4$.  3) center $(2, 4)$, so $x = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'circles-algebra2',
    sections: [
      {
        id: 'circ4-intro',
        type: 'text' as const,
        content: `# ⭕ Circles

**Part 4 of 5 — Building Circles from Geometry**

---

> 🔑 **The Skill:** Real problems rarely hand you the radius. Instead you get a center and a point, or two endpoints of a diameter. The **distance formula** and the **midpoint formula** turn those clues into an equation.`,
      },
      {
        id: 'circ4-center-point',
        type: 'text' as const,
        content: `## Center + a Point on the Circle

The radius is the **distance from the center to any point on the circle**, so use the distance formula.

### Example: center $(2, 3)$, passing through $(5, 7)$

$$r = \\sqrt{(5 - 2)^2 + (7 - 3)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

So $r^2 = 25$, and the equation is:

$$(x - 2)^2 + (y - 3)^2 = 25$$

> 💡 You usually need $r^2$ for the equation, so you can stop at $r^2 = (5-2)^2 + (7-3)^2 = 25$ without ever taking the square root.`,
      },
      {
        id: 'circ4-center-point-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A circle has center $(-3, 4)$ and passes through the origin $(0, 0)$. Its equation is:',
              options: ['$(x + 3)^2 + (y - 4)^2 = 25$', '$(x - 3)^2 + (y + 4)^2 = 25$', '$(x + 3)^2 + (y - 4)^2 = 5$', '$(x + 3)^2 + (y - 4)^2 = 7$'],
              correctAnswer: 0,
              explanation: '$r^2 = (0-(-3))^2 + (0-4)^2 = 9 + 16 = 25$. Center $(-3, 4)$ gives $(x+3)^2 + (y-4)^2 = 25$.',
            },
          ],
        },
      },
      {
        id: 'circ4-diameter',
        type: 'text' as const,
        content: `## Endpoints of a Diameter

If you're given the two ends of a **diameter**, the center is their **midpoint**, and the radius is **half the distance** between them.

$$\\text{center} = \\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right)$$

### Example: diameter from $(-1, 2)$ to $(5, 10)$

**Center (midpoint):**
$$\\left(\\frac{-1 + 5}{2},\\ \\frac{2 + 10}{2}\\right) = (2,\\ 6)$$

**Radius (half the diameter):** the full diameter is
$$d = \\sqrt{(5 - (-1))^2 + (10 - 2)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10,$$
so $r = 5$ and $r^2 = 25$. The equation is:

$$(x - 2)^2 + (y - 6)^2 = 25$$

> ⚠️ The endpoints lie **on** the circle, not at its center — don't plug an endpoint in for $(h, k)$. The center is always the *midpoint*.`,
      },
      {
        id: 'circ4-diameter-dd',
        type: 'dropdown-select' as const,
        content: `**Diameter Endpoints** 🔽

A circle has a diameter from $(1, 2)$ to $(7, 2)$. Build its equation.`,
        exercise: {
          dropdowns: [
            { label: 'Center (midpoint):', options: ['$(4, 2)$', '$(3, 2)$', '$(4, 4)$', '$(8, 4)$'] },
            { label: 'Length of the diameter:', options: ['$6$', '$3$', '$8$', '$12$'] },
            { label: 'Radius:', options: ['$3$', '$6$', '$1.5$', '$9$'] },
          ],
          correctAnswers: ['$(4, 2)$', '$6$', '$3$'],
          hint1: 'Midpoint: $\\left(\\frac{1+7}{2}, \\frac{2+2}{2}\\right) = (4, 2)$.',
          hint2: 'Both endpoints share $y = 2$, so the diameter is the horizontal gap $7 - 1 = 6$.',
          hint3: 'Radius is half the diameter: $6 \\div 2 = 3$.',
          explanation: 'Center $(4, 2)$, diameter $6$, radius $3$, so $(x - 4)^2 + (y - 2)^2 = 9$.',
        },
      },
      {
        id: 'circ4-recap',
        type: 'text' as const,
        content: `## Two Tools, One Decision

When a problem describes a circle in words, decide which tool you need:

| You're given… | Center from… | Radius from… |
|---------------|--------------|--------------|
| center + a point | the center directly | distance center $\\to$ point |
| two ends of a diameter | midpoint of the endpoints | half the distance between them |

> 🔑 In both cases the engine is the distance formula $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. A handy shortcut: if two points share an $x$ (or a $y$), the distance is just the gap in the other coordinate — no square root needed.`,
      },
      {
        id: 'circ4-build-drill',
        type: 'input-boxes' as const,
        content: `**Build the Circle** 🧮

**1)** Center $(0, 0)$, passing through $(6, 8)$.  What is the **radius**?
**2)** For that circle, what is $r^2$ (the number on the right side)?
**3)** A diameter runs from $(1, 2)$ to $(7, 2)$.  What is the **$x$-coordinate of the center**?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '100', '4'],
          hint1: '(1) $r = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
          hint2: '(2) $r^2 = 10^2 = 100$ (or just $36 + 64$).',
          hint3: '(3) Center $x = \\frac{1 + 7}{2} = 4$.',
          explanation: '1) $r = 10$.  2) $r^2 = 100$, equation $x^2 + y^2 = 100$.  3) midpoint $x = 4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'circles-algebra2',
    sections: [
      {
        id: 'circ5-intro',
        type: 'text' as const,
        content: `# ⭕ Circles

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) write a circle from its center and radius, (2) read center and radius from standard form, (3) complete the square to convert general form, and (4) build circles from geometric clues. Let's tie it together.`,
      },
      {
        id: 'circ5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Standard form | $(x - h)^2 + (y - k)^2 = r^2$, center $(h, k)$ |
| Read the radius | $r = \\sqrt{r^2}$ — take the root of the right side |
| General $\\to$ standard | complete the square in $x$ **and** $y$ |
| Radius from a point | $r = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ |
| Center from a diameter | midpoint of the two endpoints |

> ⚠️ **Three classic traps:** (1) the right side is $r^2$, not $r$; (2) $(x + 3)^2$ means $h = -3$; (3) when completing the square, add the new constants to **both** sides.`,
      },
      {
        id: 'circ5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Write the equation of the circle with center $(-2, 5)$ and radius $\\sqrt{7}$.',
              options: ['$(x + 2)^2 + (y - 5)^2 = 7$', '$(x - 2)^2 + (y + 5)^2 = 7$', '$(x + 2)^2 + (y - 5)^2 = \\sqrt{7}$', '$(x + 2)^2 + (y - 5)^2 = 49$'],
              correctAnswer: 0,
              explanation: 'Center $(-2, 5)$ gives $(x+2)^2 + (y-5)^2$; radius $\\sqrt{7}$ gives $r^2 = (\\sqrt{7})^2 = 7$.',
            },
            {
              question: 'Convert $x^2 + y^2 + 6x - 10y + 18 = 0$ to standard form.',
              options: ['$(x + 3)^2 + (y - 5)^2 = 16$', '$(x - 3)^2 + (y + 5)^2 = 16$', '$(x + 3)^2 + (y - 5)^2 = 34$', '$(x + 3)^2 + (y - 5)^2 = 4$'],
              correctAnswer: 0,
              explanation: 'Group: $(x^2+6x)+(y^2-10y)=-18$. Add $9$ and $25$: $-18+9+25=16$. So $(x+3)^2+(y-5)^2=16$, center $(-3,5)$, $r=4$.',
            },
          ],
        },
      },
      {
        id: 'circ5-strategy',
        type: 'text' as const,
        content: `## A Quick Reading Strategy

Before computing, glance at the form you're handed:

- **Already standard** $(x-h)^2+(y-k)^2 = r^2$? Just read $(h, k)$ and $\\sqrt{r^2}$.
- **General** $x^2+y^2+Dx+Ey+F=0$? Complete the square first.
- **Words** (center + point, or a diameter)? Reach for the distance and midpoint formulas.

> 💡 Matching the *form* to the *method* is most of the battle — the arithmetic is the easy part once you've picked the right tool.`,
      },
      {
        id: 'circ5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** The circle $(x - 1)^2 + (y + 4)^2 = 49$ has radius $= \\,?$
**2)** A circle has center $(2, -1)$ and passes through $(2, 4)$.  Its radius $= \\,?$
**3)** A diameter runs from $(2, -3)$ to $(8, 5)$.  The center's **$y$-coordinate** $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '5', '1'],
          hint1: '(1) $r = \\sqrt{49} = 7$.',
          hint2: '(2) Same $x$, so $r = |4 - (-1)| = 5$ (a vertical distance).',
          hint3: '(3) Center $y = \\frac{-3 + 5}{2} = 1$.',
          explanation: '1) $r = 7$.  2) $r = 5$.  3) midpoint $y = \\frac{-3+5}{2} = 1$.',
        },
      },
      {
        id: 'circ5-exit-leadin',
        type: 'text' as const,
        content: `## You're Ready

You've practiced every skill in this lesson: writing equations, reading center and radius, completing the square, and building circles from points and diameters. One last check pulls all three forms together.

> 🔑 Remember the three traps: the right side is $r^2$ (not $r$), a $(x + a)$ hides a negative center coordinate, and completing the square means balancing **both** sides.`,
      },
      {
        id: 'circ5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The center and radius of $(x - 7)^2 + (y + 1)^2 = 50$ are:',
              options: ['center $(7, -1)$, radius $5\\sqrt{2}$', 'center $(-7, 1)$, radius $50$', 'center $(7, -1)$, radius $50$', 'center $(7, 1)$, radius $5\\sqrt{2}$'],
              correctAnswer: 0,
              explanation: 'Flip the signs inside: center $(7, -1)$. Radius $= \\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$.',
            },
            {
              question: 'A diameter runs from $(2, -3)$ to $(8, 5)$. The center of the circle is:',
              options: ['$(5, 1)$', '$(3, 4)$', '$(10, 2)$', '$(6, 8)$'],
              correctAnswer: 0,
              explanation: 'Center = midpoint $= \\left(\\frac{2+8}{2}, \\frac{-3+5}{2}\\right) = (5, 1)$.',
            },
            {
              question: 'Converting $x^2 + y^2 - 2x + 4y + 1 = 0$ to standard form gives:',
              options: ['$(x - 1)^2 + (y + 2)^2 = 4$', '$(x + 1)^2 + (y - 2)^2 = 4$', '$(x - 1)^2 + (y + 2)^2 = 6$', '$(x - 1)^2 + (y + 2)^2 = 2$'],
              correctAnswer: 0,
              explanation: 'Group: $(x^2-2x)+(y^2+4y)=-1$. Add $1$ and $4$: $-1+1+4=4$. So $(x-1)^2+(y+2)^2=4$ — center $(1, -2)$, radius $2$.',
            },
          ],
        },
      },
    ],
  },
]
