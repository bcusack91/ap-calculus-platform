import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Parabolas (Conic Form) (Algebra 2).
 * Registry key: 'parabolas-conic-algebra2' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'parabolas-conic-algebra2',
    sections: [
      {
        id: 'par1-intro',
        type: 'text' as const,
        content: `# 🛰️ Parabolas (Conic Form)

**Part 1 of 5 — Focus, Directrix & the Definition**

---

### Topics in This Part

| Section |
|---------|
| A Parabola as a Conic Section |
| The Focus–Directrix Definition |
| The Distance Equation |

> 🔑 **Key Concept:** In Algebra 1 a parabola was just the graph of $y = ax^2 + bx + c$. As a **conic section**, a parabola is defined by a single point (the **focus**) and a single line (the **directrix**). Every point on the curve is *equidistant* from them.`,
      },
      {
        id: 'par1-conic',
        type: 'text' as const,
        content: `## A Parabola as a Conic Section

Slice a cone with a flat plane and you get the four **conic sections**: a circle, an ellipse, a parabola, and a hyperbola. A **parabola** is the slice you get when the cutting plane is parallel to one side of the cone.

That geometric origin gives the parabola a special structure that the formula $y = ax^2$ hides. Two features run the whole show:

| Feature | What it is |
|---------|-----------|
| **Focus** | A fixed *point* inside the curve |
| **Directrix** | A fixed *line* outside the curve |
| **Vertex** | The point halfway between focus and directrix |
| **Axis of symmetry** | The line through the focus, perpendicular to the directrix |

> 💡 Satellite dishes, car headlights, and telescope mirrors are parabolic because rays parallel to the axis all bounce through the **focus** — that single point is where the signal concentrates.`,
      },
      {
        id: 'par1-def',
        type: 'text' as const,
        content: `## The Focus–Directrix Definition

> 🔑 **Definition:** A **parabola** is the set of all points that are the **same distance** from a fixed point (the focus) as from a fixed line (the directrix).

Pick any point $P$ on the parabola. Then:

$$\\text{distance}(P, \\text{focus}) = \\text{distance}(P, \\text{directrix})$$

The **vertex** sits exactly halfway between the focus and the directrix — so if the focus is $p$ units from the vertex, the directrix is also $p$ units from the vertex, on the *opposite* side.

| Distance from vertex | To the focus | To the directrix |
|----------------------|--------------|------------------|
| Always equal | $p$ | $p$ |

> ⚠️ The focus is always **inside** the curve (on the concave side); the directrix is always **outside**. The parabola bends *around* its focus and *away* from its directrix.`,
      },
      {
        id: 'par1-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A parabola is the set of all points equidistant from a fixed point and a fixed line. What are those called?',
              options: ['The focus and the directrix', 'The center and the radius', 'The vertex and the axis', 'Two foci'],
              correctAnswer: 0,
              explanation: 'The fixed point is the **focus** and the fixed line is the **directrix**. (Two foci define an *ellipse* or *hyperbola*, not a parabola.)',
            },
            {
              question: 'Where is the vertex of a parabola located relative to the focus and directrix?',
              options: ['Exactly halfway between them', 'On the directrix', 'At the focus', 'Twice as far from the focus as the directrix'],
              correctAnswer: 0,
              explanation: 'The vertex is the point on the parabola closest to both — it lies exactly midway between the focus and directrix.',
            },
          ],
        },
      },
      {
        id: 'par1-dist',
        type: 'text' as const,
        content: `## Turning the Definition Into an Equation

To find a parabola's equation we set the two distances equal. Suppose the focus is $(0, p)$ and the directrix is the line $y = -p$. Take a general point $(x, y)$ on the curve.

**Distance to the focus** (distance formula):
$$\\sqrt{(x - 0)^2 + (y - p)^2}$$

**Distance to the directrix** (vertical distance to $y = -p$):
$$|\\,y - (-p)\\,| = |\\,y + p\\,|$$

Set them equal and square both sides:
$$x^2 + (y - p)^2 = (y + p)^2$$

Expand and simplify — the $y^2$ and $p^2$ cancel:
$$x^2 + y^2 - 2py + p^2 = y^2 + 2py + p^2 \\;\\Rightarrow\\; x^2 = 4py$$

> 🔑 **The master equation** $x^2 = 4py$ falls straight out of "equidistant." Part 2 unpacks everything it tells us.`,
      },
      {
        id: 'par1-vertexdrill',
        type: 'input-boxes' as const,
        content: `**Find the Vertex** 🧮

The vertex is the midpoint of the focus and the directrix. Find the vertex's $y$-coordinate for each setup.

**1)** Focus $(0, 4)$, directrix $y = -4 \\;\\Rightarrow\\;$ vertex $y = \\,?$
**2)** Focus $(0, 6)$, directrix $y = 2 \\;\\Rightarrow\\;$ vertex $y = \\,?$
**3)** Focus $(0, -3)$, directrix $y = 1 \\;\\Rightarrow\\;$ vertex $y = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '4', '-1'],
          hint1: 'The vertex $y$ is the average of the focus $y$ and the directrix $y$: $\\frac{4 + (-4)}{2} = 0$.',
          hint2: 'Average the focus and directrix heights: $\\frac{6 + 2}{2} = 4$.',
          hint3: '$\\frac{-3 + 1}{2} = \\frac{-2}{2} = -1$.',
          explanation: '1) $\\frac{4+(-4)}{2}=0$.  2) $\\frac{6+2}{2}=4$.  3) $\\frac{-3+1}{2}=-1$. The vertex always sits midway between focus and directrix.',
        },
      },
      {
        id: 'par1-namedparts',
        type: 'dropdown-select' as const,
        content: `**Name the Parts** 🔽

Match each description to the correct piece of a parabola.`,
        exercise: {
          dropdowns: [
            { label: 'The fixed *point* every curve point is equidistant from:', options: ['focus', 'directrix', 'vertex', 'axis of symmetry'] },
            { label: 'The fixed *line* every curve point is equidistant from:', options: ['directrix', 'focus', 'vertex', 'axis of symmetry'] },
            { label: 'The point halfway between the focus and that line:', options: ['vertex', 'focus', 'directrix', 'center'] },
          ],
          correctAnswers: ['focus', 'directrix', 'vertex'],
          hint1: 'The fixed *point* is the focus; the fixed *line* is the directrix.',
          hint2: 'A line is the directrix; a single point is the focus.',
          hint3: 'The midpoint between focus and directrix is the vertex.',
          explanation: 'Focus = the fixed point, directrix = the fixed line, vertex = the midpoint between them (and the closest point on the curve to both).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'parabolas-conic-algebra2',
    sections: [
      {
        id: 'par2-intro',
        type: 'text' as const,
        content: `# 🛰️ Parabolas (Conic Form)

**Part 2 of 5 — Vertical Parabolas: $x^2 = 4py$**

---

> 🔑 **The Idea:** When the vertex is at the origin and the parabola opens **up or down**, its equation is $x^2 = 4py$. The single number $p$ controls the focus, the directrix, and which way it opens.`,
      },
      {
        id: 'par2-anatomy',
        type: 'text' as const,
        content: `## Reading $x^2 = 4py$

For a parabola with vertex at the origin that opens vertically:

$$x^2 = 4py$$

| Feature | Value |
|---------|-------|
| Vertex | $(0, 0)$ |
| Focus | $(0, p)$ |
| Directrix | $y = -p$ |
| Axis of symmetry | the $y$-axis ($x = 0$) |
| Opens | **up** if $p > 0$, **down** if $p < 0$ |

The value $p$ is the **focal distance** — how far the focus (and the directrix) sit from the vertex.

> 💡 **Don't confuse $p$ with $4p$.** The whole coefficient is $4p$. To get $p$, divide the coefficient by $4$.

### Example: $x^2 = 8y$

Here $4p = 8$, so $p = 2$.
- Opens **up** (since $p = 2 > 0$)
- Focus $(0, 2)$
- Directrix $y = -2$`,
      },
      {
        id: 'par2-findp',
        type: 'input-boxes' as const,
        content: `**Solve for $p$** 🧮

Each parabola is $x^2 = 4py$. Find $p$ by dividing the coefficient by $4$.

**1)** $x^2 = 12y \\;\\Rightarrow\\; p = \\,?$
**2)** $x^2 = 4y \\;\\Rightarrow\\; p = \\,?$
**3)** $x^2 = -20y \\;\\Rightarrow\\; p = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '1', '-5'],
          hint1: '$4p = 12 \\Rightarrow p = 12/4 = 3$.',
          hint2: '$4p = 4 \\Rightarrow p = 1$.',
          hint3: '$4p = -20 \\Rightarrow p = -5$. A negative $p$ means it opens down.',
          explanation: '1) $p = 12/4 = 3$.  2) $p = 4/4 = 1$.  3) $p = -20/4 = -5$ (opens down). Always divide the coefficient by $4$.',
        },
      },
      {
        id: 'par2-worked',
        type: 'text' as const,
        content: `## Worked Example: Full Description

**Describe $x^2 = -16y$.**

1. Match the form: $4p = -16$, so $p = -4$.
2. Sign of $p$: negative → **opens down**.
3. Focus $(0, p) = (0, -4)$.
4. Directrix $y = -p = -(-4) = 4$, i.e. $y = 4$.
5. Axis of symmetry: the $y$-axis, $x = 0$.

> ✅ **Sanity check:** It opens *down*, so the focus $(0,-4)$ is *below* the vertex and the directrix $y = 4$ is *above* it. The curve wraps around the focus. ✓

### Building an Equation From Features

If you know $p$, just plug into $x^2 = 4py$.

**Vertex $(0,0)$, focus $(0, 5)$:** the focus is at $(0, p)$, so $p = 5$ and the equation is $x^2 = 4(5)y = 20y$.`,
      },
      {
        id: 'par2-describe',
        type: 'dropdown-select' as const,
        content: `**Describe $x^2 = 20y$** 🔽

Fill in each feature.`,
        exercise: {
          dropdowns: [
            { label: 'Value of $p$:', options: ['$5$', '$20$', '$4$', '$10$'] },
            { label: 'Opens:', options: ['up', 'down', 'left', 'right'] },
            { label: 'Focus:', options: ['$(0, 5)$', '$(5, 0)$', '$(0, -5)$', '$(0, 20)$'] },
            { label: 'Directrix:', options: ['$y = -5$', '$y = 5$', '$x = -5$', '$y = -20$'] },
          ],
          correctAnswers: ['$5$', 'up', '$(0, 5)$', '$y = -5$'],
          hint1: '$4p = 20 \\Rightarrow p = 5$.',
          hint2: 'Because $p = 5 > 0$, the parabola opens up.',
          hint3: 'Focus $(0, p) = (0, 5)$ and directrix $y = -p = -5$.',
          explanation: '$x^2 = 20y$: $4p=20 \\Rightarrow p=5$, opens up, focus $(0,5)$, directrix $y=-5$.',
        },
      },
      {
        id: 'par2-buildeq',
        type: 'multiple-choice' as const,
        content: `**Build the Equation** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A parabola has vertex $(0,0)$ and focus $(0, -2)$. Its equation is:',
              options: ['$x^2 = -8y$', '$x^2 = 8y$', '$x^2 = -2y$', '$y^2 = -8x$'],
              correctAnswer: 0,
              explanation: 'Focus $(0,p)=(0,-2)$ gives $p=-2$. Then $x^2 = 4py = 4(-2)y = -8y$.',
            },
            {
              question: 'Which parabola opens downward?',
              options: ['$x^2 = -10y$', '$x^2 = 10y$', '$x^2 = 7y$', '$x^2 = \\frac{1}{2}y$'],
              correctAnswer: 0,
              explanation: 'A vertical parabola opens down when $p < 0$, i.e. when the coefficient $4p$ is negative. Only $x^2 = -10y$ has a negative coefficient.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'parabolas-conic-algebra2',
    sections: [
      {
        id: 'par3-intro',
        type: 'text' as const,
        content: `# 🛰️ Parabolas (Conic Form)

**Part 3 of 5 — Horizontal Parabolas: $y^2 = 4px$**

---

> 🔑 **The Idea:** Swap the roles of $x$ and $y$ and the parabola opens **sideways**. The equation $y^2 = 4px$ describes a parabola opening left or right — *not* a function, since it fails the vertical line test.`,
      },
      {
        id: 'par3-anatomy',
        type: 'text' as const,
        content: `## Reading $y^2 = 4px$

For a parabola with vertex at the origin that opens horizontally:

$$y^2 = 4px$$

| Feature | Value |
|---------|-------|
| Vertex | $(0, 0)$ |
| Focus | $(p, 0)$ |
| Directrix | $x = -p$ |
| Axis of symmetry | the $x$-axis ($y = 0$) |
| Opens | **right** if $p > 0$, **left** if $p < 0$ |

Notice the swap from Part 2: the **squared variable** tells you the axis.
- $x^2 = \\dots$ → $x$ is squared → opens **up/down** (vertical axis).
- $y^2 = \\dots$ → $y$ is squared → opens **left/right** (horizontal axis).

> 💡 **Rule of thumb:** The parabola opens toward the variable that is **not** squared.

### Example: $y^2 = 12x$

Here $4p = 12$, so $p = 3$.
- Opens **right** (since $p = 3 > 0$)
- Focus $(3, 0)$
- Directrix $x = -3$`,
      },
      {
        id: 'par3-axis',
        type: 'multiple-choice' as const,
        content: `**Which Way Does It Open?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The parabola $y^2 = -8x$ opens:',
              options: ['left', 'right', 'up', 'down'],
              correctAnswer: 0,
              explanation: '$y$ is squared, so the axis is horizontal. $4p = -8 \\Rightarrow p = -2 < 0$, so it opens **left** (toward negative $x$).',
            },
            {
              question: 'Which equation describes a parabola opening to the RIGHT?',
              options: ['$y^2 = 16x$', '$x^2 = 16y$', '$y^2 = -16x$', '$x^2 = -16y$'],
              correctAnswer: 0,
              explanation: 'Right/left requires $y$ squared. Opening right needs $p>0$ (positive coefficient): $y^2 = 16x$.',
            },
          ],
        },
      },
      {
        id: 'par3-worked',
        type: 'text' as const,
        content: `## Worked Example: $y^2 = -20x$

1. $y$ is squared → horizontal axis.
2. $4p = -20$, so $p = -5$.
3. $p < 0$ → **opens left**.
4. Focus $(p, 0) = (-5, 0)$.
5. Directrix $x = -p = -(-5) = 5$, i.e. $x = 5$.

> ✅ **Sanity check:** Opening *left*, the focus $(-5,0)$ sits to the *left* of the vertex and the directrix $x = 5$ is to the *right*. ✓

### Building an Equation From the Focus

**Vertex $(0,0)$, focus $(-4, 0)$:** the focus is $(p, 0)$, so $p = -4$. Then
$$y^2 = 4px = 4(-4)x = -16x.$$`,
      },
      {
        id: 'par3-describe',
        type: 'dropdown-select' as const,
        content: `**Describe $y^2 = 24x$** 🔽

Fill in each feature.`,
        exercise: {
          dropdowns: [
            { label: 'Value of $p$:', options: ['$6$', '$24$', '$12$', '$4$'] },
            { label: 'Opens:', options: ['right', 'left', 'up', 'down'] },
            { label: 'Focus:', options: ['$(6, 0)$', '$(0, 6)$', '$(-6, 0)$', '$(24, 0)$'] },
            { label: 'Directrix:', options: ['$x = -6$', '$x = 6$', '$y = -6$', '$x = -24$'] },
          ],
          correctAnswers: ['$6$', 'right', '$(6, 0)$', '$x = -6$'],
          hint1: '$4p = 24 \\Rightarrow p = 6$.',
          hint2: '$y$ is squared and $p>0$, so it opens right.',
          hint3: 'Focus $(p,0)=(6,0)$ and directrix $x = -p = -6$.',
          explanation: '$y^2 = 24x$: $4p=24 \\Rightarrow p=6$, opens right, focus $(6,0)$, directrix $x=-6$.',
        },
      },
      {
        id: 'par3-drill',
        type: 'input-boxes' as const,
        content: `**Find the Focus** 🧮

Each parabola is $y^2 = 4px$ with vertex at the origin. Enter the $x$-coordinate of the focus (which is just $p$).

**1)** $y^2 = 8x \\;\\Rightarrow\\;$ focus $x = \\,?$
**2)** $y^2 = -12x \\;\\Rightarrow\\;$ focus $x = \\,?$
**3)** $y^2 = 2x \\;\\Rightarrow\\;$ focus $x = \\,?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '-3', '0.5'],
          hint1: '$4p = 8 \\Rightarrow p = 2$, so the focus is $(2, 0)$.',
          hint2: '$4p = -12 \\Rightarrow p = -3$, so the focus is $(-3, 0)$.',
          hint3: '$4p = 2 \\Rightarrow p = 0.5$, so the focus is $(0.5, 0)$.',
          explanation: '1) $p=2$.  2) $p=-3$.  3) $p=0.5$. The focus of $y^2=4px$ is $(p,0)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'parabolas-conic-algebra2',
    sections: [
      {
        id: 'par4-intro',
        type: 'text' as const,
        content: `# 🛰️ Parabolas (Conic Form)

**Part 4 of 5 — Translated Parabolas (Vertex $(h, k)$)**

---

> 🔑 **The Idea:** Slide the whole parabola so its vertex sits at $(h, k)$. Replace $x$ with $(x - h)$ and $y$ with $(y - k)$ — every feature shifts by the same amount.`,
      },
      {
        id: 'par4-forms',
        type: 'text' as const,
        content: `## The Translated Standard Forms

| Opens | Equation | Vertex | Focus | Directrix |
|-------|----------|--------|-------|-----------|
| Up / Down | $(x - h)^2 = 4p(y - k)$ | $(h, k)$ | $(h,\\, k + p)$ | $y = k - p$ |
| Left / Right | $(y - k)^2 = 4p(x - h)$ | $(h, k)$ | $(h + p,\\, k)$ | $x = h - p$ |

Everything from Parts 2–3 still holds — the focus and directrix just start from $(h, k)$ instead of the origin.

> ⚠️ **Watch the signs.** $(x - h)$ means the vertex $x$-coordinate is $+h$. So $(x - 3)^2 = \\dots$ has $h = 3$, but $(x + 3)^2 = (x - (-3))^2$ has $h = -3$.

### Example: $(x - 2)^2 = 8(y + 1)$

- $x$ squared → opens vertically.
- Vertex: $(h, k) = (2, -1)$  *(since $y + 1 = y - (-1)$)*.
- $4p = 8 \\Rightarrow p = 2 > 0$ → **opens up**.
- Focus $(h, k + p) = (2,\\, -1 + 2) = (2, 1)$.
- Directrix $y = k - p = -1 - 2 = -3$.`,
      },
      {
        id: 'par4-vertex',
        type: 'multiple-choice' as const,
        content: `**Read the Vertex** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The vertex of $(y - 4)^2 = 12(x + 5)$ is:',
              options: ['$(-5, 4)$', '$(5, -4)$', '$(4, -5)$', '$(-5, -4)$'],
              correctAnswer: 0,
              explanation: 'Match $(y-k)^2 = 4p(x-h)$: $y - 4 \\Rightarrow k = 4$, and $x + 5 = x - (-5) \\Rightarrow h = -5$. Vertex $(h,k) = (-5, 4)$.',
            },
            {
              question: 'The parabola $(x + 1)^2 = -4(y - 3)$ opens:',
              options: ['down', 'up', 'left', 'right'],
              correctAnswer: 0,
              explanation: '$x$ is squared → vertical axis. $4p = -4 \\Rightarrow p = -1 < 0$, so it opens **down**.',
            },
          ],
        },
      },
      {
        id: 'par4-worked',
        type: 'text' as const,
        content: `## Worked Example: Full Description

**Describe $(y + 2)^2 = 4(x - 3)$.**

1. $y$ squared → opens horizontally; form is $(y-k)^2 = 4p(x-h)$.
2. Vertex: $y + 2 = y - (-2) \\Rightarrow k = -2$; $x - 3 \\Rightarrow h = 3$. So **vertex $(3, -2)$**.
3. $4p = 4 \\Rightarrow p = 1 > 0$ → **opens right**.
4. Focus $(h + p, k) = (3 + 1,\\, -2) = (4, -2)$.
5. Directrix $x = h - p = 3 - 1 = 2$.

> ✅ **Check:** Opens right, so the focus $(4, -2)$ is right of the vertex $(3,-2)$ and the directrix $x = 2$ is left of it. ✓

### Building a Translated Equation

**Vertex $(1, 5)$, focus $(1, 8)$:** focus is directly *above* the vertex → opens up, $h = 1$, $k = 5$. The focus distance is $p = 8 - 5 = 3$. Plug in:
$$(x - 1)^2 = 4(3)(y - 5) = 12(y - 5).$$`,
      },
      {
        id: 'par4-describe',
        type: 'dropdown-select' as const,
        content: `**Describe $(x - 4)^2 = 8(y - 1)$** 🔽

Fill in each feature.`,
        exercise: {
          dropdowns: [
            { label: 'Vertex:', options: ['$(4, 1)$', '$(-4, 1)$', '$(4, -1)$', '$(1, 4)$'] },
            { label: 'Value of $p$:', options: ['$2$', '$8$', '$4$', '$1$'] },
            { label: 'Focus:', options: ['$(4, 3)$', '$(6, 1)$', '$(4, -1)$', '$(4, 9)$'] },
            { label: 'Directrix:', options: ['$y = -1$', '$y = 1$', '$x = 2$', '$y = 3$'] },
          ],
          correctAnswers: ['$(4, 1)$', '$2$', '$(4, 3)$', '$y = -1$'],
          hint1: '$x - 4 \\Rightarrow h = 4$ and $y - 1 \\Rightarrow k = 1$, so vertex $(4, 1)$.',
          hint2: '$4p = 8 \\Rightarrow p = 2$; opens up since $p>0$.',
          hint3: 'Focus $(h, k+p) = (4, 1+2) = (4,3)$; directrix $y = k - p = 1 - 2 = -1$.',
          explanation: 'Vertex $(4,1)$, $p=2$ (opens up), focus $(4,3)$, directrix $y=-1$.',
        },
      },
      {
        id: 'par4-drill',
        type: 'input-boxes' as const,
        content: `**Find the Focus Coordinates** 🧮

For $(y - 1)^2 = -8(x - 2)$:

**1)** Vertex $x$-coordinate $= \\,?$
**2)** Vertex $y$-coordinate $= \\,?$
**3)** Focus $x$-coordinate $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1', '0'],
          hint1: '$x - 2 \\Rightarrow h = 2$.',
          hint2: '$y - 1 \\Rightarrow k = 1$, so the vertex is $(2, 1)$.',
          hint3: '$4p = -8 \\Rightarrow p = -2$. Focus $x = h + p = 2 + (-2) = 0$.',
          explanation: 'Vertex $(2,1)$; $p = -2$ (opens left). Focus $(h+p, k) = (0, 1)$, so focus $x = 0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'parabolas-conic-algebra2',
    sections: [
      {
        id: 'par5-intro',
        type: 'text' as const,
        content: `# 🛰️ Parabolas (Conic Form)

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) state the focus–directrix definition, (2) read $x^2 = 4py$, (3) read $y^2 = 4px$, and (4) handle a translated vertex $(h, k)$. Let's put it all together.`,
      },
      {
        id: 'par5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Opens | Standard form | Vertex | Focus | Directrix |
|-------|---------------|--------|-------|-----------|
| Up/Down | $(x-h)^2 = 4p(y-k)$ | $(h,k)$ | $(h, k+p)$ | $y = k - p$ |
| Left/Right | $(y-k)^2 = 4p(x-h)$ | $(h,k)$ | $(h+p, k)$ | $x = h - p$ |

**The three-question routine for any parabola:**
1. **Which variable is squared?** $x^2 \\Rightarrow$ up/down; $y^2 \\Rightarrow$ left/right.
2. **What is $p$?** Set the coefficient equal to $4p$ and divide by $4$.
3. **Which sign?** $p > 0$ opens up/right; $p < 0$ opens down/left.

> ⚠️ Two classic traps: forgetting to divide by $4$ to get $p$, and flipping the sign of $h$ or $k$ from $(x - h)$, $(y - k)$.`,
      },
      {
        id: 'par5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $x^2 = -12y$, the focus and directrix are:',
              options: ['Focus $(0, -3)$, directrix $y = 3$', 'Focus $(0, 3)$, directrix $y = -3$', 'Focus $(-3, 0)$, directrix $x = 3$', 'Focus $(0, -12)$, directrix $y = 12$'],
              correctAnswer: 0,
              explanation: '$4p = -12 \\Rightarrow p = -3$ (opens down). Focus $(0, p) = (0, -3)$; directrix $y = -p = 3$.',
            },
            {
              question: 'A parabola has vertex $(0,0)$ and directrix $x = 4$. Its equation is:',
              options: ['$y^2 = -16x$', '$y^2 = 16x$', '$x^2 = -16y$', '$x^2 = 16y$'],
              correctAnswer: 0,
              explanation: 'A vertical directrix $x = 4$ means a horizontal parabola, $y^2 = 4px$, with $-p = 4 \\Rightarrow p = -4$. So $y^2 = 4(-4)x = -16x$ (opens left, away from $x=4$).',
            },
          ],
        },
      },
      {
        id: 'par5-build',
        type: 'input-boxes' as const,
        content: `**Build & Decode** 🧮

**1)** Vertex $(0,0)$, focus $(0, 7)$. In $x^2 = 4py$, what is the value of $4p$ (the coefficient of $y$)?
**2)** For $(x - 2)^2 = 16(y + 3)$, what is $p$?
**3)** For that same parabola, what is the $y$-coordinate of the vertex?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['28', '4', '-3'],
          hint1: 'Focus $(0,p)=(0,7) \\Rightarrow p = 7$, so $4p = 28$.',
          hint2: '$4p = 16 \\Rightarrow p = 16/4 = 4$.',
          hint3: '$y + 3 = y - (-3)$, so $k = -3$.',
          explanation: '1) $p=7 \\Rightarrow 4p = 28$, giving $x^2 = 28y$.  2) $4p=16 \\Rightarrow p=4$.  3) $k = -3$.',
        },
      },
      {
        id: 'par5-pitfalls',
        type: 'text' as const,
        content: `## Before the Exit Quiz: Three Pitfalls

| Pitfall | Fix |
|---------|-----|
| Using the coefficient as $p$ | The coefficient is $4p$ — **divide by 4**. |
| Flipping the vertex sign | $(x - h)$, $(y - k)$: the vertex is $+h$, $+k$, so $(x+5)$ gives $h = -5$. |
| Mixing up which way it opens | Squared variable sets the axis; the **sign of $p$** sets the direction. |

> 💡 One last gut-check on any answer: the focus must sit *inside* the curve and the directrix *outside*, on opposite sides of the vertex. If yours don't, recheck the sign of $p$.`,
      },
      {
        id: 'par5-decode',
        type: 'dropdown-select' as const,
        content: `**Decode This Parabola** 🔽

Given $(y + 1)^2 = -12(x - 4)$, fill in each feature.`,
        exercise: {
          dropdowns: [
            { label: 'Squared variable / axis:', options: ['$y$ → horizontal', '$x$ → vertical', '$y$ → vertical', '$x$ → horizontal'] },
            { label: 'Vertex:', options: ['$(4, -1)$', '$(-4, 1)$', '$(4, 1)$', '$(-1, 4)$'] },
            { label: 'Opens:', options: ['left', 'right', 'up', 'down'] },
            { label: 'Focus:', options: ['$(1, -1)$', '$(7, -1)$', '$(4, -4)$', '$(4, 2)$'] },
          ],
          correctAnswers: ['$y$ → horizontal', '$(4, -1)$', 'left', '$(1, -1)$'],
          hint1: '$y$ is squared, so the axis is horizontal (opens left or right).',
          hint2: '$y + 1 = y - (-1) \\Rightarrow k = -1$; $x - 4 \\Rightarrow h = 4$. Vertex $(4, -1)$.',
          hint3: '$4p = -12 \\Rightarrow p = -3 < 0$ → opens left. Focus $(h+p, k) = (4 + (-3), -1) = (1, -1)$.',
          explanation: '$y$ squared → horizontal; vertex $(4,-1)$; $p=-3$ → opens left; focus $(1,-1)$, directrix $x = h - p = 4-(-3) = 7$.',
        },
      },
      {
        id: 'par5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which statement is the defining property of a parabola?',
              options: [
                'Every point is equidistant from the focus and the directrix.',
                'Every point is equidistant from two foci.',
                'Every point is a fixed distance from a center point.',
                'The sum of distances to two foci is constant.',
              ],
              correctAnswer: 0,
              explanation: 'A parabola is the set of points equidistant from one focus and one directrix. (Two foci → ellipse/hyperbola; fixed distance from a center → circle.)',
            },
            {
              question: 'For $y^2 = 20x$ (vertex at the origin), the focus is:',
              options: ['$(5, 0)$', '$(0, 5)$', '$(-5, 0)$', '$(20, 0)$'],
              correctAnswer: 0,
              explanation: '$y$ is squared → horizontal. $4p = 20 \\Rightarrow p = 5$, and the focus of $y^2 = 4px$ is $(p, 0) = (5, 0)$.',
            },
            {
              question: 'The parabola $(x - 3)^2 = -8(y - 2)$ has vertex and opening direction:',
              options: ['Vertex $(3, 2)$, opens down', 'Vertex $(3, 2)$, opens up', 'Vertex $(-3, -2)$, opens down', 'Vertex $(2, 3)$, opens left'],
              correctAnswer: 0,
              explanation: '$x - 3 \\Rightarrow h = 3$, $y - 2 \\Rightarrow k = 2$, so vertex $(3, 2)$. $4p = -8 \\Rightarrow p = -2 < 0$, and $x$ is squared, so it opens **down**.',
            },
          ],
        },
      },
    ],
  },
]
