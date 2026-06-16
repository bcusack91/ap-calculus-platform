import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Function Transformations (AP Precalculus).
 * Registry key: 'function-transformations' (matches the DB Topic.slug).
 * 7 parts, gold-standard structure: parent functions → vertical transformations →
 * horizontal transformations → combining/order → mapping points & graphs →
 * symmetry & modeling → mixed mastery + exit quiz. Each part alternates
 * teach/check with >=3 interactive checks across >=2 exercise types.
 * LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'function-transformations',
    sections: [
      {
        id: 'ft1-intro',
        type: 'text' as const,
        content: `# 🪞 Function Transformations

**Part 1 of 7 — Parent Functions & the Big Idea**

---

### Topics in This Part

| Section |
|---------|
| What Is a Transformation? |
| The Parent Functions |
| The Two Families: Inside vs. Outside |

> 🔑 **Key Concept:** A transformation takes a known graph — a **parent function** — and *moves, stretches, or flips* it without changing its basic shape. Master a handful of parent shapes, and you can graph thousands of functions instantly.`,
      },
      {
        id: 'ft1-what',
        type: 'text' as const,
        content: `## What Is a Transformation?

Every transformation we study is built from a **parent function** $f(x)$. We change $f$ in one of two places:

$$g(x) = a \\cdot f\\big(b(x - h)\\big) + k$$

- The numbers **outside** $f$ — the $a$ and the $+k$ — change the **output** ($y$). These behave *intuitively*.
- The numbers **inside** $f$ — the $b$ and the $-h$ — change the **input** ($x$). These behave *backwards* (we'll see why in Part 3).

### A First Look

| Change | What it does |
|--------|--------------|
| $f(x) + k$ | shifts the graph **up** $k$ |
| $f(x) - k$ | shifts the graph **down** $k$ |
| $f(x - h)$ | shifts the graph **right** $h$ |
| $a\\,f(x)$ | stretches **vertically** by factor $a$ |
| $-f(x)$ | **reflects** across the $x$-axis |

> 💡 The shape stays the same — a parabola is still a parabola, a line is still a line. Only its **position and size** change.`,
      },
      {
        id: 'ft1-parents',
        type: 'text' as const,
        content: `## The Parent Functions

These are the "starting graphs." Memorizing their basic shape is the foundation of everything that follows.

| Name | Rule | Key feature |
|------|------|-------------|
| Linear | $f(x) = x$ | line through origin, slope $1$ |
| Quadratic | $f(x) = x^2$ | U-shaped parabola, vertex $(0,0)$ |
| Cubic | $f(x) = x^3$ | S-curve through origin |
| Square root | $f(x) = \\sqrt{x}$ | starts at $(0,0)$, opens right |
| Absolute value | $f(x) = \\lvert x \\rvert$ | V-shape, vertex $(0,0)$ |
| Reciprocal | $f(x) = \\dfrac{1}{x}$ | hyperbola, asymptotes at axes |

Each passes through (or starts at) a memorable **anchor point**. For $x^2$, $\\lvert x\\rvert$, $x^3$, and $\\sqrt{x}$, that anchor is the **origin** $(0,0)$.

> 🔑 **Key Idea:** When you transform a parent function, you are really just relocating its anchor point and adjusting its steepness.`,
      },
      {
        id: 'ft1-parent-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which parent function has a V-shape with its vertex at the origin?',
              options: ['$f(x) = x^2$', '$f(x) = \\lvert x \\rvert$', '$f(x) = \\sqrt{x}$', '$f(x) = x^3$'],
              correctAnswer: 1,
              explanation: 'The absolute value parent $f(x)=\\lvert x\\rvert$ makes a V with vertex $(0,0)$. The quadratic $x^2$ is a smooth U, not a V.',
            },
            {
              question: 'In $g(x) = a\\,f(b(x-h)) + k$, which numbers change the OUTPUT (the $y$-values)?',
              options: ['$b$ and $h$', '$a$ and $k$', '$h$ and $k$', '$a$ and $b$'],
              correctAnswer: 1,
              explanation: '$a$ multiplies the output and $+k$ adds to the output, so they sit OUTSIDE $f$ and change $y$. The $b$ and $h$ live INSIDE $f$ and change the input $x$.',
            },
          ],
        },
      },
      {
        id: 'ft1-match-parents',
        type: 'dropdown-select' as const,
        content: `**Match the Parent to Its Shape** 🔽

Connect each parent function to its defining feature.`,
        exercise: {
          dropdowns: [
            { label: '$f(x) = x^3$ is a:', options: ['U-shaped parabola', 'S-curve through the origin', 'V-shape', 'horizontal line'] },
            { label: '$f(x) = \\sqrt{x}$:', options: ['starts at $(0,0)$ and opens right', 'is a full parabola', 'passes through all $x$', 'has a vertex below the axis'] },
            { label: '$f(x) = \\dfrac{1}{x}$ is a:', options: ['line', 'hyperbola with asymptotes at the axes', 'V-shape', 'cubic'] },
          ],
          correctAnswers: ['S-curve through the origin', 'starts at $(0,0)$ and opens right', 'hyperbola with asymptotes at the axes'],
          hint1: 'The cubic $x^3$ rises, flattens through the origin, then rises again — an S-shape.',
          hint2: 'Square root is only defined for $x \\ge 0$, so it begins at the origin and extends to the right.',
          hint3: 'The reciprocal $1/x$ never touches either axis; both axes are asymptotes.',
          explanation: '$x^3$ is the S-curve; $\\sqrt{x}$ starts at $(0,0)$ opening right; $\\tfrac{1}{x}$ is a hyperbola with the $x$- and $y$-axes as asymptotes.',
        },
      },
      {
        id: 'ft1-anchor-drill',
        type: 'input-boxes' as const,
        content: `**Find the Anchor** 🧮

The parent function $f(x) = x^2$ has its vertex (anchor point) at the origin. For each transformed graph, the anchor moves. Just read off where it lands.

**1)** $g(x) = x^2 + 5$ — the vertex moves to $(0, \\,?)$  *(enter the $y$-coordinate)*
**2)** $g(x) = (x - 3)^2$ — the vertex moves to $(\\,?, 0)$  *(enter the $x$-coordinate)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '3'],
          hint1: 'Adding $+5$ outside raises every point — including the vertex — up by $5$.',
          hint2: '$(x-3)^2$ shifts the graph RIGHT by $3$, so the vertex moves to $x = 3$.',
          hint3: 'Outside changes ($+5$) move $y$; inside changes ($-3$) move $x$ in the opposite direction of the sign.',
          explanation: '1) $+5$ raises the vertex to $(0, 5)$.  2) $(x-3)^2$ shifts right $3$, so the vertex is at $(3, 0)$.',
        },
      },
      {
        id: 'ft1-wrap',
        type: 'text' as const,
        content: `## The Plan

You now know the two families:

- **Outside** changes ($a$, $k$) act on the **output** $y$ — and behave *intuitively*.
- **Inside** changes ($b$, $h$) act on the **input** $x$ — and behave *backwards*.

Next up, **Part 2** tackles the easy family first: vertical transformations, where everything does exactly what you'd expect.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'function-transformations',
    sections: [
      {
        id: 'ft2-intro',
        type: 'text' as const,
        content: `# 🪞 Function Transformations

**Part 2 of 7 — Vertical Transformations (the intuitive family)**

---

> 🔑 **The Idea:** Everything that happens **outside** $f(x)$ changes the output $y$ — and it does exactly what your intuition expects. Add to go up, multiply to stretch taller, negate to flip over the $x$-axis.`,
      },
      {
        id: 'ft2-shifts',
        type: 'text' as const,
        content: `## Vertical Shifts

Adding a constant **outside** $f$ moves the whole graph up or down:

$$g(x) = f(x) + k$$

- $k > 0$ → shift **up** by $k$
- $k < 0$ → shift **down** by $\\lvert k \\rvert$

### Example: $g(x) = \\lvert x \\rvert - 4$

Start with the V-shape of $\\lvert x \\rvert$ (vertex at origin), then slide it **down** $4$. New vertex: $(0, -4)$.

| Point on $\\lvert x\\rvert$ | After $-4$ |
|----------------------------|------------|
| $(0, 0)$ | $(0, -4)$ |
| $(2, 2)$ | $(2, -2)$ |
| $(-3, 3)$ | $(-3, -1)$ |

> 💡 Only the $y$-coordinate changes; the $x$-coordinate is untouched.`,
      },
      {
        id: 'ft2-stretch',
        type: 'text' as const,
        content: `## Vertical Stretches, Compressions & Reflections

Multiplying $f(x)$ by a constant $a$ scales the output:

$$g(x) = a \\cdot f(x)$$

| Value of $a$ | Effect |
|--------------|--------|
| $a > 1$ | vertical **stretch** (taller / steeper) |
| $0 < a < 1$ | vertical **compression** (shorter / flatter) |
| $a < 0$ | **reflection** across the $x$-axis (plus stretch/compress by $\\lvert a\\rvert$) |

### Example: $g(x) = -2x^2$

The $-$ flips the parabola to open **downward**; the $2$ makes it twice as steep.

$$\\text{Point } (1, 1) \\text{ on } x^2 \\;\\longrightarrow\\; (1, -2) \\text{ on } -2x^2$$

> ⚠️ A negative $a$ does **two** things: it reflects AND scales by $\\lvert a\\rvert$. Don't forget the reflection.`,
      },
      {
        id: 'ft2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How does the graph of $g(x) = f(x) + 7$ compare to $f(x)$?',
              options: ['Shifted right 7', 'Shifted up 7', 'Shifted down 7', 'Stretched vertically by 7'],
              correctAnswer: 1,
              explanation: 'Adding $7$ outside $f$ adds $7$ to every output, sliding the whole graph UP by $7$.',
            },
            {
              question: 'Which transformation reflects the graph of $f(x)$ across the $x$-axis?',
              options: ['$f(-x)$', '$-f(x)$', '$f(x) + 1$', '$f(x - 1)$'],
              correctAnswer: 1,
              explanation: 'Negating the OUTPUT, $-f(x)$, flips every point over the $x$-axis. (Negating the input $f(-x)$ flips over the $y$-axis — that comes in Part 3.)',
            },
            {
              question: 'The graph of $g(x) = 3f(x)$ is the graph of $f(x)$:',
              options: ['Compressed vertically by a factor of 3', 'Stretched vertically by a factor of 3', 'Shifted up 3', 'Reflected and stretched'],
              correctAnswer: 1,
              explanation: 'Since $3 > 1$, multiplying the output by $3$ stretches the graph vertically by a factor of $3$ — every $y$-value triples.',
            },
          ],
        },
      },
      {
        id: 'ft2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name the Vertical Transformation** 🔽

Each $g$ comes from the parent $f$. Identify what happened.`,
        exercise: {
          dropdowns: [
            { label: '$g(x) = f(x) - 6$', options: ['shift up 6', 'shift down 6', 'shift right 6', 'reflect over $x$-axis'] },
            { label: '$g(x) = \\tfrac{1}{2}f(x)$', options: ['vertical stretch by 2', 'vertical compression by $\\tfrac{1}{2}$', 'shift up $\\tfrac{1}{2}$', 'reflect over $x$-axis'] },
            { label: '$g(x) = -f(x)$', options: ['reflect over $x$-axis', 'reflect over $y$-axis', 'shift down 1', 'vertical stretch by 1'] },
          ],
          correctAnswers: ['shift down 6', 'vertical compression by $\\tfrac{1}{2}$', 'reflect over $x$-axis'],
          hint1: 'Subtracting outside lowers the graph.',
          hint2: 'Multiplying the output by a number between $0$ and $1$ flattens (compresses) the graph.',
          hint3: 'A negative sign on the whole output flips the graph top-to-bottom, i.e. over the $x$-axis.',
          explanation: '$f(x)-6$ shifts down $6$; $\\tfrac{1}{2}f(x)$ compresses vertically by $\\tfrac{1}{2}$; $-f(x)$ reflects across the $x$-axis.',
        },
      },
      {
        id: 'ft2-drill',
        type: 'input-boxes' as const,
        content: `**Track the Point** 🧮

The point $(4, 2)$ lies on the parent $f(x) = \\sqrt{x}$. Find its image (new coordinates) under each vertical transformation.

**1)** $g(x) = \\sqrt{x} + 3$ → image is $(4, \\,?)$
**2)** $g(x) = 5\\sqrt{x}$ → image is $(4, \\,?)$
**3)** $g(x) = -\\sqrt{x}$ → image is $(4, \\,?)$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '10', '-2'],
          hint1: 'Vertical shifts add to the $y$-value: $2 + 3 = 5$. The $x$-value never changes for vertical transformations.',
          hint2: 'Vertical stretch multiplies the $y$-value: $5 \\times 2 = 10$.',
          hint3: 'Reflection over the $x$-axis negates the $y$-value: $-(2) = -2$.',
          explanation: '1) $y$ becomes $2+3 = 5$ → $(4,5)$.  2) $y$ becomes $5\\cdot 2 = 10$ → $(4,10)$.  3) $y$ becomes $-2$ → $(4,-2)$. The $x$-coordinate stays $4$ throughout.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'function-transformations',
    sections: [
      {
        id: 'ft3-intro',
        type: 'text' as const,
        content: `# 🪞 Function Transformations

**Part 3 of 7 — Horizontal Transformations (the backwards family)**

---

> 🔑 **The Twist:** Everything **inside** $f$ acts on the input $x$ — and it does the **opposite** of what you'd expect. $f(x - 3)$ shifts **right**, not left. We'll prove why.`,
      },
      {
        id: 'ft3-why',
        type: 'text' as const,
        content: `## Why "Inside" Is Backwards

Consider $g(x) = f(x - 3)$. To get the **same output** the parent had at $x = 0$, the new function needs its input to satisfy $x - 3 = 0$, i.e. $x = 3$.

$$\\text{Parent value at } 0 \\;\\Longrightarrow\\; \\text{new graph reaches it at } x = 3 \\;\\Rightarrow\\; \\text{shift RIGHT } 3$$

So a **minus** inside shifts **right**, and a **plus** inside shifts **left** — the opposite of the sign.

| Transformation | Direction |
|----------------|-----------|
| $f(x - h)$ | shift **right** $h$ |
| $f(x + h)$ | shift **left** $h$ |

### Example: $g(x) = \\sqrt{x + 2}$

This is $f(x + 2)$ with $f = \\sqrt{x}$, so it shifts the square-root graph **left** $2$. Its starting point moves from $(0,0)$ to $(-2, 0)$.`,
      },
      {
        id: 'ft3-horiz-scale',
        type: 'text' as const,
        content: `## Horizontal Stretches, Compressions & Reflections

Multiplying the **input** by $b$ scales horizontally — also backwards:

$$g(x) = f(bx)$$

| Value of $b$ | Effect |
|--------------|--------|
| $b > 1$ | horizontal **compression** by $\\dfrac{1}{b}$ (squeezes toward $y$-axis) |
| $0 < b < 1$ | horizontal **stretch** by $\\dfrac{1}{b}$ (pulls away from $y$-axis) |
| $b < 0$ | **reflection** across the $y$-axis |

### Example: $g(x) = f(2x)$

Multiplying the input by $2$ **compresses** the graph horizontally by a factor of $\\tfrac{1}{2}$ — the graph reaches each output at *half* the $x$-distance.

> ⚠️ **Inside is backwards twice over:** $b = 2$ does NOT stretch by $2$; it *compresses* by $\\tfrac{1}{2}$. And $f(-x)$ reflects over the $y$-axis (compare $-f(x)$, which reflected over the $x$-axis in Part 2).`,
      },
      {
        id: 'ft3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How does $g(x) = f(x + 5)$ compare to $f(x)$?',
              options: ['Shifted right 5', 'Shifted left 5', 'Shifted up 5', 'Shifted down 5'],
              correctAnswer: 1,
              explanation: 'Inside changes are backwards: a PLUS inside, $f(x+5)$, shifts the graph LEFT by $5$.',
            },
            {
              question: 'Which transformation reflects $f(x)$ across the $y$-axis?',
              options: ['$-f(x)$', '$f(-x)$', '$f(x) + 1$', '$2f(x)$'],
              correctAnswer: 1,
              explanation: 'Negating the INPUT, $f(-x)$, flips the graph left-to-right across the $y$-axis. Negating the output, $-f(x)$, would flip over the $x$-axis instead.',
            },
            {
              question: 'The graph of $g(x) = f(4x)$ is the graph of $f(x)$:',
              options: ['Stretched horizontally by 4', 'Compressed horizontally by a factor of $\\tfrac{1}{4}$', 'Stretched vertically by 4', 'Shifted right 4'],
              correctAnswer: 1,
              explanation: 'Since $b = 4 > 1$, multiplying the input by $4$ COMPRESSES horizontally by a factor of $\\tfrac{1}{4}$ (the reciprocal of $b$).',
            },
          ],
        },
      },
      {
        id: 'ft3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Inside or Outside? Which Way?** 🔽

Classify each transformation of the parent $f$.`,
        exercise: {
          dropdowns: [
            { label: '$g(x) = f(x - 8)$', options: ['shift left 8', 'shift right 8', 'shift up 8', 'shift down 8'] },
            { label: '$g(x) = f\\left(\\tfrac{1}{3}x\\right)$', options: ['horizontal stretch by 3', 'horizontal compression by $\\tfrac{1}{3}$', 'vertical stretch by 3', 'shift right 3'] },
            { label: '$g(x) = f(-x)$', options: ['reflect over $x$-axis', 'reflect over $y$-axis', 'shift left 1', 'vertical compression'] },
          ],
          correctAnswers: ['shift right 8', 'horizontal stretch by 3', 'reflect over $y$-axis'],
          hint1: 'A minus inside shifts in the positive ($+x$) direction — to the right.',
          hint2: 'When $b = \\tfrac{1}{3}$ (between $0$ and $1$), the graph stretches horizontally by $\\tfrac{1}{b} = 3$.',
          hint3: 'Negating the input ($x \\to -x$) flips left-to-right, across the $y$-axis.',
          explanation: '$f(x-8)$ shifts right $8$; $f(\\tfrac{1}{3}x)$ stretches horizontally by $3$ (factor $1/b = 3$); $f(-x)$ reflects across the $y$-axis.',
        },
      },
      {
        id: 'ft3-drill',
        type: 'input-boxes' as const,
        content: `**Track the Point (Horizontally)** 🧮

The point $(6, 9)$ lies on a parent function $f$. Find the $x$-coordinate of its image under each horizontal transformation. *(The $y$-coordinate stays $9$ for all of these.)*

**1)** $g(x) = f(x - 2)$ → image $x$-coordinate $= \\,?$
**2)** $g(x) = f(2x)$ → image $x$-coordinate $= \\,?$
**3)** $g(x) = f(-x)$ → image $x$-coordinate $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '3', '-6'],
          hint1: 'A shift right $2$ adds $2$ to the $x$-coordinate: $6 + 2 = 8$.',
          hint2: 'Compression by $\\tfrac{1}{2}$ multiplies the $x$-coordinate by $\\tfrac{1}{2}$: $6 \\cdot \\tfrac{1}{2} = 3$. (Solve $2x = 6$.)',
          hint3: 'Reflection over the $y$-axis negates the $x$-coordinate: $-(6) = -6$.',
          explanation: '1) Right $2$: $x = 6+2 = 8$.  2) $f(2x)$ compresses by $\\tfrac{1}{2}$; need $2x = 6 \\Rightarrow x = 3$.  3) Reflect over $y$-axis: $x = -6$. Each new $x$ solves "inside $=$ old input."',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'function-transformations',
    sections: [
      {
        id: 'ft4-intro',
        type: 'text' as const,
        content: `# 🪞 Function Transformations

**Part 4 of 7 — Combining Transformations & Order**

---

> 🔑 **The Goal:** Read a function like $g(x) = -2(x-3)^2 + 1$ and list **every** transformation, in the **correct order**, that turns the parent into it.`,
      },
      {
        id: 'ft4-form',
        type: 'text' as const,
        content: `## The General Form

$$g(x) = a \\cdot f\\big(b(x - h)\\big) + k$$

Read off the four numbers:

| Parameter | Controls | Watch out for |
|-----------|----------|---------------|
| $a$ | vertical stretch / reflect over $x$-axis | sign $=$ reflection |
| $b$ | horizontal compress / reflect over $y$-axis | factor is $1/b$, sign $=$ reflection |
| $h$ | horizontal shift | **opposite** sign: $(x-h)$ shifts right $h$ |
| $k$ | vertical shift | same sign: $+k$ shifts up |

### Example: $g(x) = -2(x - 3)^2 + 1$

Here $a = -2$, $h = 3$, $k = 1$ (and $b = 1$). So, starting from $f(x) = x^2$:

- **Reflect** over the $x$-axis and **stretch** vertically by $2$ (from $a = -2$)
- **Shift right** $3$ (from $h = 3$)
- **Shift up** $1$ (from $k = 1$)

Vertex moves from $(0,0)$ to $(3, 1)$, and the parabola opens **down**.`,
      },
      {
        id: 'ft4-order',
        type: 'text' as const,
        content: `## Why Order Matters

When transformations affect the same direction, **order changes the result.** A safe, reliable order:

1. **Horizontal** inside work: factor out $b$, handle reflections/stretches, then the shift $h$.
2. **Vertical** outside work: apply $a$ (stretch/reflect), **then** add $k$.

> ⚠️ **Classic trap:** stretch-then-shift $\\ne$ shift-then-stretch. For $g(x) = 2f(x) + 3$, you must **multiply first**, then add $3$. Doing it backwards, $2(f(x)+3) = 2f(x) + 6$, gives the wrong graph.

### Example: applying $g(x) = 2\\sqrt{x} - 3$ to the point $(4, 2)$

$$y: \\quad 2 \\cdot \\underbrace{2}_{\\text{stretch}} = 4, \\qquad 4 - 3 = 1$$

So $(4, 2)$ maps to $(4, 1)$ — multiply by $2$ **first**, subtract $3$ **second**.`,
      },
      {
        id: 'ft4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $g(x) = (x + 4)^2 - 7$, where is the vertex of the parabola?',
              options: ['$(4, -7)$', '$(-4, -7)$', '$(-4, 7)$', '$(4, 7)$'],
              correctAnswer: 1,
              explanation: '$(x+4)^2$ shifts left $4$ (inside is backwards) and $-7$ shifts down $7$. Vertex: $(-4, -7)$.',
            },
            {
              question: 'List the transformations in $g(x) = -\\lvert x - 2 \\rvert + 5$ applied to $f(x) = \\lvert x \\rvert$.',
              options: [
                'Reflect over $x$-axis, shift right 2, shift up 5',
                'Reflect over $y$-axis, shift left 2, shift down 5',
                'Shift right 2, shift up 5 (no reflection)',
                'Reflect over $x$-axis, shift left 2, shift up 5',
              ],
              correctAnswer: 0,
              explanation: '$a = -1$ reflects over the $x$-axis; $(x-2)$ shifts right $2$; $+5$ shifts up $5$. The V opens downward with vertex $(2, 5)$.',
            },
            {
              question: 'To graph $g(x) = 3f(x) + 1$ correctly, you should:',
              options: ['Add 1, then multiply by 3', 'Multiply by 3, then add 1', 'Add 1 and multiply by 3 in either order', 'Multiply by 4'],
              correctAnswer: 1,
              explanation: 'The output is computed as $3f(x)$ first, then $+1$. Order matters: $3(f(x)+1) = 3f(x)+3$ would be wrong.',
            },
          ],
        },
      },
      {
        id: 'ft4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Decode Each Parameter** 🔽

For $g(x) = -\\dfrac{1}{2}(x + 6)^2 - 4$ built from $f(x) = x^2$, identify what each piece does.`,
        exercise: {
          dropdowns: [
            { label: 'The $-\\tfrac{1}{2}$ does:', options: ['reflect over $x$-axis & compress vertically', 'reflect over $y$-axis & stretch', 'shift down $\\tfrac{1}{2}$', 'compress horizontally'] },
            { label: 'The $(x + 6)$ does:', options: ['shift right 6', 'shift left 6', 'shift up 6', 'reflect over $y$-axis'] },
            { label: 'The $-4$ does:', options: ['shift up 4', 'shift down 4', 'shift right 4', 'reflect over $x$-axis'] },
            { label: 'The vertex is at:', options: ['$(-6, -4)$', '$(6, -4)$', '$(-6, 4)$', '$(6, 4)$'] },
          ],
          correctAnswers: ['reflect over $x$-axis & compress vertically', 'shift left 6', 'shift down 4', '$(-6, -4)$'],
          hint1: 'A negative $a$ with $\\lvert a\\rvert < 1$ flips over the $x$-axis AND compresses vertically.',
          hint2: '$(x+6)$ is a PLUS inside, so it shifts left $6$; the $-4$ outside lowers the graph $4$.',
          hint3: 'The vertex sits at $(h, k) = (-6, -4)$ — left $6$ from $h$, down $4$ from $k$.',
          explanation: '$a = -\\tfrac12$: reflect over $x$-axis + vertical compression. $(x+6)$: left $6$. $-4$: down $4$. Vertex $(-6, -4)$.',
        },
      },
      {
        id: 'ft4-drill',
        type: 'input-boxes' as const,
        content: `**Apply Two Steps in Order** 🧮

The point $(9, 3)$ lies on $f(x) = \\sqrt{x}$. Apply $g(x) = -2\\sqrt{x} + 1$ to find the image.

**1)** First, the stretch & reflection $-2 \\cdot 3 = \\,?$  *(the intermediate $y$-value)*
**2)** Then add $1$: final $y$-coordinate $= \\,?$
**3)** The $x$-coordinate of the image is $= \\,?$  *(no horizontal change)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-6', '-5', '9'],
          hint1: 'Multiply the output by $-2$: $-2 \\cdot 3 = -6$.',
          hint2: 'Now add $1$ to that intermediate value: $-6 + 1 = -5$.',
          hint3: 'There is no $b$ or $h$, so the $x$-coordinate is unchanged at $9$.',
          explanation: 'Multiply first: $-2 \\cdot 3 = -6$. Then add $1$: $-6 + 1 = -5$. No horizontal change, so $x = 9$. Image: $(9, -5)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'function-transformations',
    sections: [
      {
        id: 'ft5-intro',
        type: 'text' as const,
        content: `# 🪞 Function Transformations

**Part 5 of 7 — Mapping Points & Reading Graphs**

---

> 🔑 **Skill:** Given any point on the parent, instantly produce its image — and run it in reverse to recover the parent's points from a transformed graph. This is exactly what AP free-response asks.`,
      },
      {
        id: 'ft5-rule',
        type: 'text' as const,
        content: `## The Coordinate Mapping Rule

For $g(x) = a\\,f\\big(b(x - h)\\big) + k$, a point $(x_0, y_0)$ on $f$ maps to:

$$\\left(\\dfrac{x_0}{b} + h,\\;\\; a\\,y_0 + k\\right)$$

In words:
- **New $x$:** divide the old $x$ by $b$, then add $h$.
- **New $y$:** multiply the old $y$ by $a$, then add $k$.

### Example: $g(x) = 3f(2x - 4) + 1$

First rewrite the inside in $b(x-h)$ form: $2x - 4 = 2(x - 2)$, so $b = 2$, $h = 2$, $a = 3$, $k = 1$.

A point $(6, 5)$ on $f$ maps to:

$$\\left(\\dfrac{6}{2} + 2,\\;\\; 3 \\cdot 5 + 1\\right) = (3 + 2,\\; 16) = (5, 16)$$

> 💡 **Always factor out $b$ first.** $f(2x - 4)$ is NOT a shift of $4$; it is $f\\big(2(x-2)\\big)$ — a compression by $\\tfrac12$ and a shift right $2$.`,
      },
      {
        id: 'ft5-reverse',
        type: 'text' as const,
        content: `## Reading a Transformed Graph (Reverse Direction)

If you're handed the graph of $g$ and asked about $f$, undo each step:

$$x_0 = b\\,(x_g - h), \\qquad y_0 = \\dfrac{y_g - k}{a}$$

### Example

$g(x) = 2f(x - 1) - 3$ passes through $(4, 7)$. Which point is on $f$?

- Undo the vertical: $y_0 = \\dfrac{7 - (-3)}{2} = \\dfrac{10}{2} = 5$
- Undo the horizontal: $x_0 = 1 \\cdot (4 - 1) = 3$

So $(3, 5)$ is on $f$.

> ✅ **Check forward:** $f(3) = 5 \\Rightarrow g(4) = 2(5) - 3 = 7$ ✓`,
      },
      {
        id: 'ft5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The point $(2, 8)$ is on $f$. Under $g(x) = f(x) + 5$, where does it map?',
              options: ['$(2, 13)$', '$(7, 8)$', '$(2, 3)$', '$(7, 13)$'],
              correctAnswer: 0,
              explanation: 'Only $k = +5$ acts, so $y$: $8 + 5 = 13$, and $x$ stays $2$. Image: $(2, 13)$.',
            },
            {
              question: 'Rewrite the inside of $g(x) = f(3x + 12)$ in $b(x-h)$ form.',
              options: ['$f\\big(3(x + 4)\\big)$', '$f\\big(3(x - 4)\\big)$', '$f\\big(3(x + 12)\\big)$', '$f\\big(12(x + 3)\\big)$'],
              correctAnswer: 0,
              explanation: 'Factor out $3$: $3x + 12 = 3(x + 4)$. So $b = 3$ (compress by $\\tfrac13$) and $h = -4$ (shift left $4$).',
            },
          ],
        },
      },
      {
        id: 'ft5-drill',
        type: 'input-boxes' as const,
        content: `**Map the Point** 🧮

The point $(8, 4)$ lies on $f$. Apply $g(x) = 2f\\!\\left(\\tfrac{1}{2}x\\right) - 3$. Use new $x = \\dfrac{x_0}{b} + h$ and new $y = a\\,y_0 + k$ with $a = 2,\\ b = \\tfrac12,\\ h = 0,\\ k = -3$.

**1)** New $x$-coordinate $= \\,?$
**2)** New $y$-coordinate $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['16', '5'],
          hint1: 'New $x = \\dfrac{x_0}{b} = \\dfrac{8}{1/2} = 8 \\cdot 2 = 16$ (there is no $h$).',
          hint2: 'New $y = a\\,y_0 + k = 2(4) - 3 = 8 - 3 = 5$.',
          hint3: 'Dividing by $b = \\tfrac12$ is the same as multiplying by $2$, so the horizontal stretch doubles the $x$-value.',
          explanation: 'New $x = 8 \\div \\tfrac12 = 16$. New $y = 2(4) - 3 = 5$. Image: $(16, 5)$.',
        },
      },
      {
        id: 'ft5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Reverse-Engineer the Parent** 🔽

$g(x) = -f(x + 2) + 4$ passes through the point $(1, 6)$. Recover the matching point on $f$.`,
        exercise: {
          dropdowns: [
            { label: 'Undo the vertical: $y_0 = \\dfrac{6 - 4}{-1} = $', options: ['$-2$', '$2$', '$10$', '$-10$'] },
            { label: 'Undo the horizontal: $x_0 = 1\\cdot(1 - (-2)) = $', options: ['$3$', '$-1$', '$-3$', '$1$'] },
            { label: 'So the point on $f$ is:', options: ['$(3, -2)$', '$(-1, 2)$', '$(3, 2)$', '$(-3, -2)$'] },
          ],
          correctAnswers: ['$-2$', '$3$', '$(3, -2)$'],
          hint1: 'With $a = -1, k = 4$: $y_0 = \\dfrac{y_g - k}{a} = \\dfrac{6 - 4}{-1} = -2$.',
          hint2: 'With $b = 1, h = -2$: $x_0 = b(x_g - h) = 1\\cdot(1 - (-2)) = 3$.',
          hint3: 'Combine the recovered coordinates into the point $(x_0, y_0) = (3, -2)$.',
          explanation: '$y_0 = (6-4)/(-1) = -2$; $x_0 = 1\\cdot(1+2) = 3$. So $(3, -2)$ is on $f$. Check: $g(1) = -f(3) + 4 = -(-2) + 4 = 6$ ✓.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'function-transformations',
    sections: [
      {
        id: 'ft6-intro',
        type: 'text' as const,
        content: `# 🪞 Function Transformations

**Part 6 of 7 — Symmetry & Modeling**

---

> 🔑 **Connection:** Reflections lead straight into **even/odd symmetry**, and shifts/stretches let you build a model to fit real data. This is where transformations earn their keep on the AP exam.`,
      },
      {
        id: 'ft6-evenodd',
        type: 'text' as const,
        content: `## Even & Odd Symmetry

Symmetry is a transformation that leaves the graph **unchanged**:

| Type | Algebra | Geometry |
|------|---------|----------|
| **Even** | $f(-x) = f(x)$ | symmetric across the $y$-axis |
| **Odd** | $f(-x) = -f(x)$ | symmetric about the origin (180° rotation) |

### Examples

- $f(x) = x^2$ is **even**: $f(-x) = (-x)^2 = x^2 = f(x)$. Reflecting over the $y$-axis gives the same parabola.
- $f(x) = x^3$ is **odd**: $f(-x) = (-x)^3 = -x^3 = -f(x)$. A $y$-axis reflection then an $x$-axis reflection returns the original.
- $f(x) = \\lvert x \\rvert$ is **even**; $f(x) = \\dfrac{1}{x}$ is **odd**.

> 💡 If a point $(a, b)$ is on an **even** function, so is $(-a, b)$. If $(a, b)$ is on an **odd** function, so is $(-a, -b)$.`,
      },
      {
        id: 'ft6-evenodd-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A function is even when:',
              options: ['$f(-x) = -f(x)$', '$f(-x) = f(x)$', '$f(x) = 0$', '$f(x+1) = f(x)$'],
              correctAnswer: 1,
              explanation: 'Even means symmetric across the $y$-axis: replacing $x$ with $-x$ leaves the output unchanged, $f(-x) = f(x)$.',
            },
            {
              question: 'The point $(3, -5)$ is on an ODD function $f$. Which other point must also be on $f$?',
              options: ['$(-3, -5)$', '$(-3, 5)$', '$(3, 5)$', '$(5, -3)$'],
              correctAnswer: 1,
              explanation: 'Odd symmetry: $f(-x) = -f(x)$, so $(a,b) \\Rightarrow (-a, -b)$. Here $(3, -5) \\Rightarrow (-3, 5)$.',
            },
          ],
        },
      },
      {
        id: 'ft6-modeling',
        type: 'text' as const,
        content: `## Modeling with Transformations

To fit a parent function to data, choose $a, h, k$ so the anchor and scale match.

### Example: a quadratic model

A ball's height (ft) over time $t$ (s) peaks at **$20$ ft** at time **$t = 2$**, starting from the parent $f(t) = t^2$.

Because the peak is a **maximum**, the parabola opens **down** ($a < 0$). The vertex is $(2, 20)$, so $h = 2$, $k = 20$:

$$H(t) = a(t - 2)^2 + 20$$

If at $t = 0$ the height is $0$: $\\;0 = a(0-2)^2 + 20 = 4a + 20 \\Rightarrow a = -5$.

$$\\boxed{H(t) = -5(t - 2)^2 + 20}$$

> ✅ **Check:** $H(2) = 20$ (the peak) and $H(0) = -5(4) + 20 = 0$ ✓.`,
      },
      {
        id: 'ft6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Model** 🔽

A V-shaped cost curve from $f(x) = \\lvert x \\rvert$ has its minimum at the point $(4, 3)$ and opens **upward**. Choose the correct parameters for $g(x) = a\\lvert x - h\\rvert + k$.`,
        exercise: {
          dropdowns: [
            { label: 'Sign of $a$ (opens up):', options: ['positive', 'negative', 'zero', 'cannot tell'] },
            { label: 'Value of $h$ (vertex $x$):', options: ['$4$', '$-4$', '$3$', '$0$'] },
            { label: 'Value of $k$ (vertex $y$):', options: ['$3$', '$-3$', '$4$', '$7$'] },
          ],
          correctAnswers: ['positive', '$4$', '$3$'],
          hint1: 'A V that opens upward has a positive leading coefficient $a$.',
          hint2: 'The vertex is at $(h, k) = (4, 3)$, so $h = 4$.',
          hint3: 'The vertex $y$-coordinate is $k = 3$.',
          explanation: 'Opens up $\\Rightarrow a > 0$; vertex $(4,3) \\Rightarrow h = 4, k = 3$. So $g(x) = a\\lvert x - 4\\rvert + 3$ with $a > 0$.',
        },
      },
      {
        id: 'ft6-drill',
        type: 'input-boxes' as const,
        content: `**Solve for the Stretch** 🧮

A parabola opening downward has vertex $(1, 8)$ and passes through $(3, 0)$. It has the form $g(x) = a(x - 1)^2 + 8$.

**1)** Substitute the point: $0 = a(3 - 1)^2 + 8$. What is $(3-1)^2$? $= \\,?$
**2)** Solve $0 = 4a + 8$ for $a$: $a = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '-2'],
          hint1: '$(3 - 1)^2 = 2^2 = 4$.',
          hint2: '$0 = 4a + 8 \\Rightarrow 4a = -8 \\Rightarrow a = -2$.',
          hint3: 'A downward-opening parabola has a negative $a$, which matches $a = -2$.',
          explanation: '$(3-1)^2 = 4$, so $0 = 4a + 8 \\Rightarrow a = -2$. The model is $g(x) = -2(x-1)^2 + 8$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'function-transformations',
    sections: [
      {
        id: 'ft7-intro',
        type: 'text' as const,
        content: `# 🪞 Function Transformations

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) identify parent functions, (2) apply vertical transformations, (3) apply backwards horizontal transformations, (4) combine them in order, (5) map points both ways, and (6) use symmetry and modeling. Time to put it all together.`,
      },
      {
        id: 'ft7-reference',
        type: 'text' as const,
        content: `## Quick Reference

For $g(x) = a\\,f\\big(b(x - h)\\big) + k$:

| Piece | Location | Effect | Direction sense |
|-------|----------|--------|-----------------|
| $k$ | outside | vertical shift | **same** sign |
| $a$ | outside | vertical stretch / $x$-axis reflection | $\\lvert a\\rvert$, sign flips |
| $h$ | inside | horizontal shift | **opposite** sign |
| $b$ | inside | horizontal compress / $y$-axis reflection | factor $1/b$, sign flips |

Point mapping: $(x_0, y_0) \\to \\left(\\dfrac{x_0}{b} + h,\\; a\\,y_0 + k\\right)$.

> ⚠️ **Top two traps:** (1) inside changes are backwards; (2) always **factor out $b$** before reading the shift $h$.`,
      },
      {
        id: 'ft7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Describe $g(x) = \\sqrt{-(x - 5)}$ relative to $f(x) = \\sqrt{x}$.',
              options: [
                'Reflect over $y$-axis, then shift right 5',
                'Reflect over $x$-axis, then shift left 5',
                'Shift right 5 only',
                'Reflect over $y$-axis, then shift left 5',
              ],
              correctAnswer: 0,
              explanation: 'Write $-(x-5)$ as the input. The $-$ on the input reflects over the $y$-axis; the $(x-5)$ shifts right $5$. The starting point moves from $(0,0)$ to $(5, 0)$, opening left.',
            },
            {
              question: 'The point $(2, 6)$ is on $f$. Where is its image under $g(x) = -\\tfrac{1}{2}f(x) + 4$?',
              options: ['$(2, 1)$', '$(2, 7)$', '$(2, -1)$', '$(2, 5)$'],
              correctAnswer: 0,
              explanation: 'New $y = a\\,y_0 + k = -\\tfrac12(6) + 4 = -3 + 4 = 1$; $x$ unchanged. Image: $(2, 1)$.',
            },
          ],
        },
      },
      {
        id: 'ft7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

The function $g(x) = 4(x + 1)^2 - 9$ is built from $f(x) = x^2$.

**1)** Vertex $x$-coordinate $= \\,?$
**2)** Vertex $y$-coordinate $= \\,?$
**3)** Vertical stretch factor (the value of $a$) $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1', '-9', '4'],
          hint1: '$(x+1)^2$ shifts left $1$ (inside is backwards), so the vertex $x$-coordinate is $-1$.',
          hint2: 'The $-9$ shifts down $9$, so the vertex $y$-coordinate is $-9$.',
          hint3: 'The coefficient $a = 4$ stretches the parabola vertically by a factor of $4$.',
          explanation: 'Vertex at $(-1, -9)$ (left $1$, down $9$); vertical stretch factor $a = 4$.',
        },
      },
      {
        id: 'ft7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which transformation of $f(x)$ shifts its graph LEFT 3 units?',
              options: ['$f(x - 3)$', '$f(x + 3)$', '$f(x) - 3$', '$f(x) + 3$'],
              correctAnswer: 1,
              explanation: 'Inside changes are backwards: a PLUS inside, $f(x + 3)$, shifts the graph LEFT by $3$.',
            },
            {
              question: 'The point $(4, 5)$ lies on $f$. Under $g(x) = f(2x)$, which point lies on $g$?',
              options: ['$(8, 5)$', '$(2, 5)$', '$(4, 10)$', '$(2, 10)$'],
              correctAnswer: 1,
              explanation: 'For $f(2x)$, set $2x = 4 \\Rightarrow x = 2$; the output stays $5$. So $(2, 5)$ is on $g$ — a horizontal compression by $\\tfrac12$.',
            },
            {
              question: 'For $g(x) = -3\\lvert x - 2 \\rvert + 1$, which statement is TRUE?',
              options: [
                'The V opens upward with vertex $(2, 1)$',
                'The V opens downward with vertex $(2, 1)$',
                'The V opens downward with vertex $(-2, 1)$',
                'The V opens upward with vertex $(-2, -1)$',
              ],
              correctAnswer: 1,
              explanation: '$a = -3 < 0$ reflects over the $x$-axis, so the V opens DOWN; $(x-2)$ shifts right $2$ and $+1$ shifts up $1$, putting the vertex at $(2, 1)$.',
            },
          ],
        },
      },
    ],
  },
]
