import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Inverse Functions (Algebra 2).
 * Registry key: 'inverse-functions-algebra2' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'inverse-functions-algebra2',
    sections: [
      {
        id: 'inv1-intro',
        type: 'text' as const,
        content: `# 🔄 Inverse Functions

**Part 1 of 5 — The Idea of "Undoing"**

---

### Topics in This Part

| Section |
|---------|
| What an Inverse Function Does |
| Swapping Inputs and Outputs |
| Notation: $f^{-1}(x)$ |

> 🔑 **Key Concept:** An **inverse function** reverses what the original function did. If $f$ turns $3$ into $11$, then $f^{-1}$ turns $11$ back into $3$. The inverse runs the machine backwards.`,
      },
      {
        id: 'inv1-undo',
        type: 'text' as const,
        content: `## A Function as a Machine

Think of a function as a **machine** that takes an input, does something to it, and spits out an output.

$$f(x) = x + 5 \\quad\\text{adds 5}$$

The inverse machine **undoes** that step — it subtracts 5:

$$f^{-1}(x) = x - 5$$

### Stacked Operations Undo in Reverse Order

If $f$ multiplies by $2$, **then** adds $3$, the inverse must first **subtract $3$**, **then** divide by $2$ — opposite operations in the opposite order.

| Original $f$ | Inverse $f^{-1}$ |
|--------------|------------------|
| add $5$ | subtract $5$ |
| multiply by $2$ | divide by $2$ |
| cube ($x^3$) | cube root ($\\sqrt[3]{x}$) |
| multiply by $2$, then add $3$ | subtract $3$, then divide by $2$ |

> 💡 **Like getting dressed:** socks-then-shoes undoes as shoes-off-then-socks-off. Last on, first off.`,
      },
      {
        id: 'inv1-undo-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $f$ takes $4$ and outputs $20$, what does $f^{-1}$ do with $20$?',
              options: ['Outputs $4$', 'Outputs $20$', 'Outputs $5$', 'Outputs $-20$'],
              correctAnswer: 0,
              explanation: 'The inverse reverses the function. Since $f$ sent $4 \\to 20$, the inverse sends $20 \\to 4$.',
            },
            {
              question: 'A function multiplies by $3$ and then subtracts $1$. Its inverse should:',
              options: [
                'Add $1$, then divide by $3$',
                'Divide by $3$, then add $1$',
                'Subtract $1$, then multiply by $3$',
                'Add $1$, then multiply by $3$',
              ],
              correctAnswer: 0,
              explanation: 'Undo in reverse order with opposite operations: the last step ($-1$) is undone first ($+1$), then the first step ($\\times 3$) is undone ($\\div 3$).',
            },
          ],
        },
      },
      {
        id: 'inv1-swap',
        type: 'text' as const,
        content: `## Swapping Inputs and Outputs

Every ordered pair tells you an input and an output. The inverse simply **swaps** them:

$$\\text{if } (a, b) \\text{ is on } f, \\quad\\text{then } (b, a) \\text{ is on } f^{-1}.$$

### Example

If $f = \\{(1, 4),\\ (2, 7),\\ (3, 10)\\}$, then

$$f^{-1} = \\{(4, 1),\\ (7, 2),\\ (10, 3)\\}.$$

| On $f$ | On $f^{-1}$ |
|--------|-------------|
| $(1, 4)$ | $(4, 1)$ |
| $(2, 7)$ | $(7, 2)$ |
| $(3, 10)$ | $(10, 3)$ |

> 🔑 **Domain ↔ Range Swap:** The **domain** of $f$ becomes the **range** of $f^{-1}$, and the **range** of $f$ becomes the **domain** of $f^{-1}$. The inputs and outputs trade places.`,
      },
      {
        id: 'inv1-swap-drill',
        type: 'input-boxes' as const,
        content: `**Swap the Coordinates** 🧮

A point on $f$ is given. Enter the matching point on $f^{-1}$ as the two coordinates.

**1)** $(6, 9)$ is on $f$. On $f^{-1}$: $(\\,?,\\ ?\\,)$ — enter the $x$-coordinate, then the $y$-coordinate.
**2)** $(-2, 5)$ is on $f$. On $f^{-1}$: $(\\,?,\\ ?\\,)$ — enter the $x$-coordinate, then the $y$-coordinate.`,
        exercise: {
          boxes: 4,
          correctAnswers: ['9', '6', '5', '-2'],
          hint1: 'To get a point on $f^{-1}$, swap the two numbers in the pair.',
          hint2: '$(6, 9)$ swaps to $(9, 6)$ — the $x$-coordinate becomes $9$.',
          hint3: '$(-2, 5)$ swaps to $(5, -2)$ — keep the sign with the number that moves.',
          explanation: '1) $(6,9) \\to (9,6)$.  2) $(-2,5) \\to (5,-2)$. The inverse always swaps each input with its output.',
        },
      },
      {
        id: 'inv1-notation',
        type: 'text' as const,
        content: `## A Warning About the Notation

The symbol $f^{-1}$ is read **"f inverse."** It is *not* an exponent.

$$f^{-1}(x) \\ne \\frac{1}{f(x)}$$

> ⚠️ **Common trap:** $f^{-1}(x)$ does **not** mean $\\dfrac{1}{f(x)}$. The $-1$ here is a label that means "inverse function," not a power. (The reciprocal $\\frac{1}{f(x)}$ is a completely different thing.)

In Part 2 we'll learn the algebra trick that finds $f^{-1}(x)$ from a formula — and it's just the coordinate swap written with $x$ and $y$.`,
      },
      {
        id: 'inv1-notation-check',
        type: 'dropdown-select' as const,
        content: `**Reading the Notation** 🔽

Pick the statement that is true in each row.`,
        exercise: {
          dropdowns: [
            { label: 'The symbol $f^{-1}(x)$ means:', options: ['the inverse function of $f$', '$\\dfrac{1}{f(x)}$', '$f(x)$ raised to the power $-1$', 'the derivative of $f$'] },
            { label: 'If $f$ adds $7$ then squares, the inverse first:', options: ['takes the square root', 'subtracts $7$', 'adds $7$', 'squares'] },
            { label: 'If $(2, 9)$ is on $f$, then on $f^{-1}$ we have:', options: ['$(9, 2)$', '$(2, 9)$', '$(-2, -9)$', '$\\left(2, \\dfrac{1}{9}\\right)$'] },
          ],
          correctAnswers: ['the inverse function of $f$', 'takes the square root', '$(9, 2)$'],
          hint1: 'The $-1$ in $f^{-1}$ is a label, not an exponent — it names the inverse function.',
          hint2: 'Undo the last operation first. The last thing $f$ did was square, so undo that first by taking the square root.',
          hint3: 'The inverse swaps each input/output pair: $(2, 9) \\to (9, 2)$.',
          explanation: '$f^{-1}$ names the inverse function (not a reciprocal or power); you undo the last operation first (square → square root); and the inverse swaps each pair, so $(2,9) \\to (9,2)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'inverse-functions-algebra2',
    sections: [
      {
        id: 'inv2-intro',
        type: 'text' as const,
        content: `# 🔄 Inverse Functions

**Part 2 of 5 — Finding the Inverse Algebraically**

---

> 🔑 **The Three-Step Recipe:** (1) Write $y = f(x)$. (2) **Swap** $x$ and $y$. (3) **Solve** the new equation for $y$. That solved-for-$y$ is $f^{-1}(x)$.`,
      },
      {
        id: 'inv2-steps',
        type: 'text' as const,
        content: `## The Swap-and-Solve Method

To find $f^{-1}(x)$:

1. **Replace** $f(x)$ with $y$.
2. **Swap** every $x$ and every $y$.
3. **Solve** for $y$.
4. **Rename** $y$ as $f^{-1}(x)$.

### Worked Example: $f(x) = 2x + 3$

$$y = 2x + 3 \\quad\\xrightarrow{\\text{swap}}\\quad x = 2y + 3$$

Now solve for $y$:

$$x - 3 = 2y \\quad\\Rightarrow\\quad y = \\frac{x - 3}{2}$$

$$\\boxed{f^{-1}(x) = \\frac{x - 3}{2}}$$

> ✅ **Quick check:** $f(2) = 2(2)+3 = 7$, and $f^{-1}(7) = \\dfrac{7-3}{2} = 2$. The inverse sent $7$ back to $2$. ✓`,
      },
      {
        id: 'inv2-worked2',
        type: 'text' as const,
        content: `### Worked Example: $f(x) = \\dfrac{x - 5}{3}$

$$y = \\frac{x - 5}{3} \\quad\\xrightarrow{\\text{swap}}\\quad x = \\frac{y - 5}{3}$$

Multiply both sides by $3$, then add $5$:

$$3x = y - 5 \\quad\\Rightarrow\\quad y = 3x + 5$$

$$\\boxed{f^{-1}(x) = 3x + 5}$$

### Worked Example: $f(x) = x^3 + 1$

$$y = x^3 + 1 \\quad\\xrightarrow{\\text{swap}}\\quad x = y^3 + 1$$

$$y^3 = x - 1 \\quad\\Rightarrow\\quad y = \\sqrt[3]{x - 1}$$

$$\\boxed{f^{-1}(x) = \\sqrt[3]{x - 1}}$$

> 💡 The cube root undoes the cube. Whatever the *last* operation was on $x$, you undo it *first* when solving.`,
      },
      {
        id: 'inv2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the inverse of $f(x) = 5x - 2$?',
              options: [
                '$f^{-1}(x) = \\dfrac{x + 2}{5}$',
                '$f^{-1}(x) = \\dfrac{x - 2}{5}$',
                '$f^{-1}(x) = 5x + 2$',
                '$f^{-1}(x) = \\dfrac{1}{5x - 2}$',
              ],
              correctAnswer: 0,
              explanation: 'Swap: $x = 5y - 2 \\Rightarrow x + 2 = 5y \\Rightarrow y = \\dfrac{x+2}{5}$.',
            },
            {
              question: 'In the swap-and-solve method, what is the very first algebra move?',
              options: [
                'Replace $f(x)$ with $y$',
                'Take the reciprocal of $f(x)$',
                'Set $f(x) = 0$',
                'Differentiate $f(x)$',
              ],
              correctAnswer: 0,
              explanation: 'You start by writing $y = f(x)$ so you can then swap $x$ and $y$ and solve.',
            },
          ],
        },
      },
      {
        id: 'inv2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Inverse** 🧮

Find $f^{-1}(x)$ and evaluate it at the given input. Enter the value of $f^{-1}$ at that input.

**1)** $f(x) = x + 8$. Find $f^{-1}(10) = \\,?$
**2)** $f(x) = 4x$. Find $f^{-1}(20) = \\,?$
**3)** $f(x) = 3x - 1$. Find $f^{-1}(11) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '5', '4'],
          hint1: '$f^{-1}(x) = x - 8$, so $f^{-1}(10) = 10 - 8 = 2$.',
          hint2: '$f^{-1}(x) = \\dfrac{x}{4}$, so $f^{-1}(20) = \\dfrac{20}{4} = 5$.',
          hint3: '$f^{-1}(x) = \\dfrac{x + 1}{3}$, so $f^{-1}(11) = \\dfrac{12}{3} = 4$.',
          explanation: '1) $f^{-1}(x)=x-8$, gives $2$.  2) $f^{-1}(x)=x/4$, gives $5$.  3) $f^{-1}(x)=(x+1)/3$, gives $4$.',
        },
      },
      {
        id: 'inv2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Inverse** 🔽

You're inverting $f(x) = 2x + 3$. Choose the result at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'After swapping $x$ and $y$:', options: ['$x = 2y + 3$', '$y = 2x + 3$', '$x = 2y - 3$', '$y = 2x - 3$'] },
            { label: 'After subtracting $3$ from both sides:', options: ['$x - 3 = 2y$', '$x + 3 = 2y$', '$x - 3 = y$', '$2x - 3 = y$'] },
            { label: 'The inverse $f^{-1}(x)$ is:', options: ['$\\dfrac{x - 3}{2}$', '$\\dfrac{x + 3}{2}$', '$2x - 3$', '$\\dfrac{1}{2x+3}$'] },
          ],
          correctAnswers: ['$x = 2y + 3$', '$x - 3 = 2y$', '$\\dfrac{x - 3}{2}$'],
          hint1: 'Swapping exchanges $x$ and $y$ everywhere: $y=2x+3$ becomes $x=2y+3$.',
          hint2: 'Subtract $3$ from both sides of $x = 2y + 3$ to isolate the $y$-term.',
          hint3: 'Divide $x - 3 = 2y$ by $2$: $y = \\dfrac{x-3}{2}$.',
          explanation: 'Swap → $x=2y+3$; subtract $3$ → $x-3=2y$; divide by $2$ → $f^{-1}(x)=\\dfrac{x-3}{2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'inverse-functions-algebra2',
    sections: [
      {
        id: 'inv3-intro',
        type: 'text' as const,
        content: `# 🔄 Inverse Functions

**Part 3 of 5 — Verifying Inverses with Composition**

---

> 🔑 **The Test:** Two functions are inverses **only if** composing them in *both* orders gives back $x$:
> $$f(f^{-1}(x)) = x \\quad\\text{and}\\quad f^{-1}(f(x)) = x.$$`,
      },
      {
        id: 'inv3-compose',
        type: 'text' as const,
        content: `## Composition Returns the Input

If $f$ and $g$ are inverses, then feeding the output of one straight into the other lands you exactly where you started.

$$f(g(x)) = x \\qquad\\text{and}\\qquad g(f(x)) = x$$

You **must** check both orders — passing only one is not enough to confirm a true inverse.

### Worked Example: Are $f(x) = 2x + 3$ and $g(x) = \\dfrac{x - 3}{2}$ inverses?

**Order 1 — $f(g(x))$:**

$$f\\!\\left(\\frac{x-3}{2}\\right) = 2\\cdot\\frac{x-3}{2} + 3 = (x - 3) + 3 = x \\ ✓$$

**Order 2 — $g(f(x))$:**

$$g(2x + 3) = \\frac{(2x + 3) - 3}{2} = \\frac{2x}{2} = x \\ ✓$$

> ✅ Both compositions return $x$, so $f$ and $g$ **are** inverses.`,
      },
      {
        id: 'inv3-compose-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which equation(s) must hold for $f$ and $g$ to be inverses?',
              options: [
                'Both $f(g(x)) = x$ and $g(f(x)) = x$',
                'Only $f(g(x)) = x$',
                '$f(x) \\cdot g(x) = 1$',
                '$f(x) + g(x) = x$',
              ],
              correctAnswer: 0,
              explanation: 'A genuine inverse must undo $f$ from both sides, so both compositions must simplify to $x$.',
            },
            {
              question: 'If $f(g(x)) = x + 1$ (not $x$), then $f$ and $g$ are:',
              options: [
                'Not inverses',
                'Definitely inverses',
                'Inverses only if $g(f(x)) = x$',
                'Reciprocals',
              ],
              correctAnswer: 0,
              explanation: 'The composition must equal exactly $x$. Since it equals $x + 1$, the functions are not inverses.',
            },
          ],
        },
      },
      {
        id: 'inv3-compose-drill',
        type: 'input-boxes' as const,
        content: `**Compose to Verify** 🧮

Let $f(x) = 3x - 6$ and $g(x) = \\dfrac{x + 6}{3}$ (its candidate inverse).

**1)** Compute $f(g(0))$. First $g(0) = \\,?$
**2)** Then $f$ of that result: $f(g(0)) = \\,?$
**3)** Compute $g(f(2))$. (You should get the same value as the input, $2$.) Enter $g(f(2)) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '0', '2'],
          hint1: '$g(0) = \\dfrac{0 + 6}{3} = \\dfrac{6}{3} = 2$.',
          hint2: '$f(2) = 3(2) - 6 = 0$, so $f(g(0)) = 0$ — back to the input.',
          hint3: 'For 3): $f(2) = 0$, then $g(0) = \\dfrac{0+6}{3} = 2$, the original input.',
          explanation: '$g(0)=2$; $f(2)=0$ so $f(g(0))=0=$ input. And $g(f(2))=g(0)=2=$ input. Both undo each other. ✓',
        },
      },
      {
        id: 'inv3-not-inverse',
        type: 'text' as const,
        content: `## When Composition Fails

### Example: Are $f(x) = x^2$ and $g(x) = \\sqrt{x}$ inverses?

$$f(g(x)) = (\\sqrt{x})^2 = x \\quad\\text{(for } x \\ge 0\\text{)}$$

$$g(f(x)) = \\sqrt{x^2} = |x|$$

The second composition gives $|x|$, **not** $x$. For a negative input like $x = -3$:

$$g(f(-3)) = \\sqrt{(-3)^2} = \\sqrt{9} = 3 \\ne -3$$

> ⚠️ So $f(x) = x^2$ is **not** invertible over all real numbers — two different inputs ($3$ and $-3$) share the same output ($9$), so the reverse direction is ambiguous. We fix this in Part 4 by restricting the domain.`,
      },
      {
        id: 'inv3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Verify by Composition** 🔽

Test whether $f(x) = x + 4$ and $g(x) = x - 4$ are inverses.`,
        exercise: {
          dropdowns: [
            { label: '$f(g(x)) = f(x - 4) = $', options: ['$x$', '$x - 8$', '$x + 8$', '$2x$'] },
            { label: '$g(f(x)) = g(x + 4) = $', options: ['$x$', '$x + 8$', '$x - 8$', '$2x$'] },
            { label: 'Conclusion:', options: ['They are inverses', 'They are not inverses', 'Need more information', 'They are reciprocals'] },
          ],
          correctAnswers: ['$x$', '$x$', 'They are inverses'],
          hint1: '$f(x-4) = (x - 4) + 4 = x$.',
          hint2: '$g(x+4) = (x + 4) - 4 = x$.',
          hint3: 'Both compositions equal $x$, so the functions are inverses.',
          explanation: 'Adding $4$ and subtracting $4$ undo each other in both orders, so $f$ and $g$ are inverses.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'inverse-functions-algebra2',
    sections: [
      {
        id: 'inv4-intro',
        type: 'text' as const,
        content: `# 🔄 Inverse Functions

**Part 4 of 5 — Graphs, One-to-One, and Domain Restrictions**

---

> 🔑 **The Mirror:** The graph of $f^{-1}$ is the **reflection of the graph of $f$ across the line $y = x$**. That single picture explains the whole coordinate swap.`,
      },
      {
        id: 'inv4-reflection',
        type: 'text' as const,
        content: `## Reflection Across $y = x$

Because the inverse swaps each $(a, b)$ for $(b, a)$, its graph is the original **flipped over the diagonal line $y = x$**.

$$(a, b) \\text{ on } f \\quad\\Longleftrightarrow\\quad (b, a) \\text{ on } f^{-1}$$

| On $f$ | Reflected point on $f^{-1}$ |
|--------|------------------------------|
| $(0, 1)$ | $(1, 0)$ |
| $(1, 3)$ | $(3, 1)$ |
| $(2, 5)$ | $(5, 2)$ |

> 💡 Any point already **on** the line $y = x$ (like $(4, 4)$) stays put when reflected — it is its own mirror image. So $f$ and $f^{-1}$ always cross each other right on that line when they meet.`,
      },
      {
        id: 'inv4-reflect-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The graph of $f^{-1}$ is the graph of $f$ reflected across which line?',
              options: ['$y = x$', '$y = 0$ (the $x$-axis)', '$x = 0$ (the $y$-axis)', '$y = -x$'],
              correctAnswer: 0,
              explanation: 'Swapping $x$ and $y$ reflects every point across the diagonal $y = x$.',
            },
            {
              question: 'The point $(7, 2)$ lies on $f$. After reflecting across $y = x$, where is the matching point on $f^{-1}$?',
              options: ['$(2, 7)$', '$(7, 2)$', '$(-7, -2)$', '$(-2, -7)$'],
              correctAnswer: 0,
              explanation: 'Reflecting across $y=x$ swaps the coordinates: $(7, 2) \\to (2, 7)$.',
            },
          ],
        },
      },
      {
        id: 'inv4-one-to-one',
        type: 'text' as const,
        content: `## One-to-One: The Horizontal Line Test

A function has an inverse that is *also a function* **only if it is one-to-one** — every output comes from exactly one input.

- **Vertical Line Test** → checks whether a graph is a *function* (no input has two outputs).
- **Horizontal Line Test** → checks whether a function is *one-to-one* (no output has two inputs).

> 🔑 **Horizontal Line Test:** If **every** horizontal line crosses the graph **at most once**, the function is one-to-one and has an inverse function.

### Why $f(x) = x^2$ fails

A horizontal line like $y = 9$ hits the parabola at **both** $x = 3$ and $x = -3$. Two inputs share one output, so it is **not** one-to-one — and so it has no inverse function over all reals.`,
      },
      {
        id: 'inv4-restrict',
        type: 'text' as const,
        content: `## Restricting the Domain

We can *rescue* a non-one-to-one function by **restricting its domain** to a piece that passes the horizontal line test.

### Example: $f(x) = x^2,\\ x \\ge 0$

Keeping only the right half (where $x \\ge 0$) makes it one-to-one. Now invert:

$$y = x^2 \\ (x \\ge 0) \\xrightarrow{\\text{swap}} x = y^2 \\Rightarrow y = \\sqrt{x}$$

$$\\boxed{f^{-1}(x) = \\sqrt{x}}$$

The range of $f$ (here $y \\ge 0$) becomes the **domain** of $f^{-1}$, so $f^{-1}(x) = \\sqrt{x}$ is defined for $x \\ge 0$.

### Example: $f(x) = \\sqrt{x - 4}$

$$y = \\sqrt{x - 4} \\xrightarrow{\\text{swap}} x = \\sqrt{y - 4} \\Rightarrow x^2 = y - 4 \\Rightarrow y = x^2 + 4$$

Because the original output $\\sqrt{x-4}$ is never negative, $f^{-1}(x) = x^2 + 4$ carries the restriction $x \\ge 0$.

> ⚠️ Always carry the domain restriction along — without "$x \\ge 0$," the formula $x^2 + 4$ would not be a true inverse.`,
      },
      {
        id: 'inv4-drill',
        type: 'input-boxes' as const,
        content: `**Domain-Restricted Inverses** 🧮

**1)** $f(x) = x^2 + 1$ with $x \\ge 0$. Its inverse is $f^{-1}(x) = \\sqrt{x - c}$. Enter $c = \\,?$
**2)** Using that inverse, compute $f^{-1}(10) = \\,?$
**3)** A one-to-one function $f$ has range $y \\ge 3$. What is the smallest $x$-value in the **domain** of $f^{-1}$? Enter it.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '3', '3'],
          hint1: 'Swap: $x = y^2 + 1 \\Rightarrow y^2 = x - 1 \\Rightarrow y = \\sqrt{x - 1}$, so $c = 1$.',
          hint2: '$f^{-1}(10) = \\sqrt{10 - 1} = \\sqrt{9} = 3$.',
          hint3: 'The range of $f$ becomes the domain of $f^{-1}$. Range $y \\ge 3$ means domain of $f^{-1}$ starts at $3$.',
          explanation: '1) $c = 1$, so $f^{-1}(x) = \\sqrt{x-1}$.  2) $\\sqrt{9} = 3$.  3) Range of $f$ ($\\ge 3$) becomes domain of $f^{-1}$, so smallest input is $3$.',
        },
      },
      {
        id: 'inv4-dropdown',
        type: 'dropdown-select' as const,
        content: `**One-to-One Reasoning** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Which test confirms a function is one-to-one?', options: ['Horizontal line test', 'Vertical line test', 'Slope test', 'Symmetry test'] },
            { label: 'Is $f(x) = x^3$ one-to-one over all reals?', options: ['Yes', 'No', 'Only for $x \\ge 0$', 'Only for $x \\le 0$'] },
            { label: 'Domain of $f$ is $[2, \\infty)$. The range of $f^{-1}$ is:', options: ['$[2, \\infty)$', '$(-\\infty, 2]$', '$[0, \\infty)$', 'all reals'] },
          ],
          correctAnswers: ['Horizontal line test', 'Yes', '$[2, \\infty)$'],
          hint1: 'The horizontal line test checks whether each output has only one input.',
          hint2: '$y = x^3$ is always increasing, so every horizontal line hits it exactly once — it is one-to-one.',
          hint3: 'Domain of $f$ becomes range of $f^{-1}$ (and vice versa). So range of $f^{-1}$ equals domain of $f$, $[2, \\infty)$.',
          explanation: 'One-to-one is confirmed by the horizontal line test; $x^3$ passes it; and the domain of $f$ becomes the range of $f^{-1}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'inverse-functions-algebra2',
    sections: [
      {
        id: 'inv5-intro',
        type: 'text' as const,
        content: `# 🔄 Inverse Functions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) describe an inverse as an "undo," (2) find $f^{-1}$ by swap-and-solve, (3) verify with composition, and (4) handle graphs, one-to-one, and domain restrictions. Let's bring it all together.`,
      },
      {
        id: 'inv5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find $f^{-1}(x)$ | swap $x \\leftrightarrow y$, then solve for $y$ |
| Verify inverses | check $f(g(x)) = x$ **and** $g(f(x)) = x$ |
| Inverse from a point | swap the pair: $(a,b) \\to (b,a)$ |
| Graph of $f^{-1}$ | reflect $f$ across $y = x$ |
| Has an inverse function? | passes the **horizontal line test** (one-to-one) |
| Domain / range | domain of $f$ ↔ range of $f^{-1}$ |

> ⚠️ Remember: $f^{-1}(x) \\ne \\dfrac{1}{f(x)}$, and always carry along any domain restriction.`,
      },
      {
        id: 'inv5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the inverse of $f(x) = \\dfrac{x}{4} + 2$.',
              options: [
                '$f^{-1}(x) = 4(x - 2)$',
                '$f^{-1}(x) = 4x - 2$',
                '$f^{-1}(x) = \\dfrac{x - 2}{4}$',
                '$f^{-1}(x) = \\dfrac{4}{x} + 2$',
              ],
              correctAnswer: 0,
              explanation: 'Swap: $x = \\dfrac{y}{4} + 2 \\Rightarrow x - 2 = \\dfrac{y}{4} \\Rightarrow y = 4(x - 2)$.',
            },
            {
              question: 'Which function is NOT one-to-one over all real numbers (so it has no inverse function)?',
              options: ['$f(x) = x^2 - 4$', '$f(x) = 2x + 1$', '$f(x) = x^3$', '$f(x) = x - 7$'],
              correctAnswer: 0,
              explanation: '$x^2 - 4$ is a parabola; a horizontal line crosses it twice (e.g. $x = 2$ and $x = -2$ both give $0$), so it is not one-to-one. The others are all lines or a cubic, which pass the horizontal line test.',
            },
          ],
        },
      },
      {
        id: 'inv5-app-drill',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

A temperature converter uses $f(C) = \\dfrac{9}{5}C + 32$ to turn Celsius into Fahrenheit. The inverse $f^{-1}(F) = \\dfrac{5}{9}(F - 32)$ converts back.

**1)** Convert $20$°C to Fahrenheit: $f(20) = \\,?$ (°F)
**2)** Convert that result back: $f^{-1}(68) = \\,?$ (°C)
**3)** Convert $212$°F to Celsius: $f^{-1}(212) = \\,?$ (°C)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['68', '20', '100'],
          hint1: '$f(20) = \\dfrac{9}{5}(20) + 32 = 36 + 32 = 68$.',
          hint2: '$f^{-1}(68) = \\dfrac{5}{9}(68 - 32) = \\dfrac{5}{9}(36) = 20$ — back to the start.',
          hint3: '$f^{-1}(212) = \\dfrac{5}{9}(212 - 32) = \\dfrac{5}{9}(180) = 100$.',
          explanation: '1) $68$°F.  2) $20$°C (the inverse undid the conversion).  3) $100$°C (boiling point). The inverse truly reverses $f$.',
        },
      },
      {
        id: 'inv5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'If $(−3, 8)$ is on the graph of $f$, which point must be on $f^{-1}$?',
              options: ['$(8, -3)$', '$(-3, 8)$', '$(-8, 3)$', '$(3, -8)$'],
              correctAnswer: 0,
              explanation: 'The inverse swaps each input/output pair: $(-3, 8) \\to (8, -3)$.',
            },
            {
              question: 'What is the inverse of $f(x) = x^3 - 2$?',
              options: [
                '$f^{-1}(x) = \\sqrt[3]{x + 2}$',
                '$f^{-1}(x) = \\sqrt[3]{x} - 2$',
                '$f^{-1}(x) = \\sqrt[3]{x - 2}$',
                '$f^{-1}(x) = \\dfrac{1}{x^3 - 2}$',
              ],
              correctAnswer: 0,
              explanation: 'Swap: $x = y^3 - 2 \\Rightarrow y^3 = x + 2 \\Rightarrow y = \\sqrt[3]{x + 2}$.',
            },
            {
              question: 'To confirm $f$ and $g$ are inverses, it is enough to show:',
              options: [
                '$f(g(x)) = x$ and $g(f(x)) = x$',
                'they have the same domain',
                '$f(x) \\cdot g(x) = 1$',
                'they have the same graph',
              ],
              correctAnswer: 0,
              explanation: 'Both compositions must return the input $x$; that is the definition of being inverse functions.',
            },
          ],
        },
      },
    ],
  },
]
