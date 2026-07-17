import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Optimization Problems (AP Calculus AB).
 * Registry key / DB Topic.slug: 'optimization-problems'.
 * 7 parts, gold-standard structure: what optimization is + the 5-step workflow →
 * setting up (primary equation, constraint, eliminate a variable, domain) →
 * area/perimeter geometry → volume & material (boxes, cans) →
 * distance, cost & revenue applications → confirming the extremum
 * (Candidates Test, first/second-derivative tests, endpoints) →
 * mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every critical-point and extreme-value computation was verified symbolically
 * (SymPy) before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'optimization-problems',
    sections: [
      {
        id: 'opt1-intro',
        type: 'text' as const,
        content: `# 🎯 Optimization Problems

**Part 1 of 7 — What Optimization Is & The 5-Step Workflow**

---

### Topics in This Part

| Section |
|---------|
| What "optimize" means |
| Why a derivative finds the best value |
| The 5-step optimization recipe |
| Reading a word problem for the goal |

> 🔑 **Key Concept:** An **optimization problem** asks for the *largest* or *smallest* value of some quantity — the most area, the least material, the maximum profit. Calculus solves these by writing that quantity as a function of **one** variable, then locating where its derivative is **zero**.`,
      },
      {
        id: 'opt1-what',
        type: 'text' as const,
        content: `## The Core Idea

At a smooth maximum or minimum **in the interior** of a function's domain, the tangent line is horizontal — the slope is $0$:

$$\\text{best value occurs where } f'(x) = 0 \\;\\text{(or where } f'(x) \\text{ is undefined)}.$$

These inputs are the **critical numbers**. Optimization is really just *applied* critical-point hunting: the hard part is turning a sentence ("a farmer has 200 ft of fence…") into a single function you can differentiate.

| Word in the problem | What you're optimizing |
|---------------------|------------------------|
| "largest area," "maximum volume," "most profit" | find a **maximum** |
| "least material," "minimum cost," "shortest distance" | find a **minimum** |

> 💡 The function you maximize or minimize is called the **objective** (or **primary**) function. Everything in Part 2 is about building it.`,
      },
      {
        id: 'opt1-goal-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A company wants to design a can that holds a fixed volume using the **least metal**. What quantity is being optimized, and in which direction?',
              options: [
                'Surface area — minimized',
                'Volume — maximized',
                'Surface area — maximized',
                'Volume — minimized',
              ],
              correctAnswer: 0,
              explanation: '"Least metal" means the smallest amount of material, i.e. the smallest **surface area**. The volume is fixed (a constraint), so it is not what gets optimized.',
            },
            {
              question: 'At an interior maximum or minimum of a differentiable function, the derivative equals:',
              options: ['$0$', '$1$', 'the input $x$', 'the maximum value itself'],
              correctAnswer: 0,
              explanation: 'A smooth interior extremum has a horizontal tangent line, so $f\'(x) = 0$ there. (Extrema can also occur where $f\'$ is undefined or at endpoints — covered in Part 6.)',
            },
          ],
        },
      },
      {
        id: 'opt1-recipe',
        type: 'text' as const,
        content: `## The 5-Step Optimization Recipe

Memorize this workflow — every problem in this lesson follows it:

1. **Identify** the quantity to optimize and name the variables (often with a quick sketch).
2. **Write the objective** — an equation for the quantity to be maximized/minimized.
3. **Use the constraint** to eliminate variables until the objective depends on **one** variable. Record the **domain**.
4. **Differentiate** and solve $f'(x) = 0$ to get the critical number(s).
5. **Confirm and answer** — verify it's the right kind of extremum (Part 6) and answer the *exact question asked*.

> ⚠️ The single most common AP error is stopping at step 4. The problem usually wants a *value* (area, cost, dimensions) — not the critical $x$. Always finish step 5.`,
      },
      {
        id: 'opt1-warmup-drill',
        type: 'input-boxes' as const,
        content: `**Warm-Up: The Calculus Step** 🧮

Suppose steps 1–3 have already produced the objective $A(x) = 20x - x^2$ on $0 < x < 20$. Carry out steps 4–5.

**1)** Solve $A'(x) = 0$. The critical number is $x = \\,?$
**2)** The maximum value $A(x)$ at that point is $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['10', '100'],
          hint1: '$A\'(x) = 20 - 2x$. Set it equal to $0$.',
          hint2: '$20 - 2x = 0 \\Rightarrow x = 10$.',
          hint3: '$A(10) = 20(10) - 10^2 = 200 - 100 = 100$.',
          explanation: '$A\'(x) = 20 - 2x = 0 \\Rightarrow x = 10$, and $A(10) = 200 - 100 = 100$. Step 4 found the critical number; step 5 reported the requested *value*.',
        },
      },
      {
        id: 'opt1-recipe-note',
        type: 'text' as const,
        content: `## The Hard Part Is Steps 1–3

Notice the warm-up handed you a ready-made function — the calculus took two lines. In a real problem, *you* must build $A(x)$ from a sketch, an objective, and a constraint. That translation is exactly what the next part trains, and what the workflow below organizes.`,
      },
      {
        id: 'opt1-steps-order',
        type: 'dropdown-select' as const,
        content: `**Order the Workflow** 🔽

Match each action to the right step of the recipe.`,
        exercise: {
          dropdowns: [
            { label: 'Set $f\'(x) = 0$ and solve:', options: ['Step 4 — Differentiate & solve', 'Step 1 — Identify', 'Step 2 — Objective', 'Step 5 — Confirm'] },
            { label: 'Substitute the constraint to get one variable:', options: ['Step 3 — Eliminate & domain', 'Step 4 — Differentiate', 'Step 1 — Identify', 'Step 5 — Confirm'] },
            { label: 'Plug the best $x$ back in to report the area:', options: ['Step 5 — Confirm & answer', 'Step 2 — Objective', 'Step 3 — Eliminate', 'Step 4 — Differentiate'] },
          ],
          correctAnswers: ['Step 4 — Differentiate & solve', 'Step 3 — Eliminate & domain', 'Step 5 — Confirm & answer'],
          hint1: 'Solving $f\'(x)=0$ is the calculus step — it comes after the function is built.',
          hint2: 'You can only differentiate once the objective is in **one** variable; the constraint does that.',
          hint3: 'Reporting the requested quantity (not just the critical $x$) is the final step.',
          explanation: 'Build the objective (2), reduce to one variable + domain (3), differentiate (4), then answer the real question (5).',
        },
      },
      {
        id: 'opt1-wrap',
        type: 'text' as const,
        content: `## Looking Ahead

You now have the *map*. The rest of the lesson drills the part students actually find hard:

- **Part 2** — translating words into an objective + constraint and finding the domain.
- **Parts 3–5** — the three families of applications: **area/perimeter**, **volume/material**, and **distance/cost/revenue**.
- **Part 6** — rigorously *confirming* you found a max (not a min) using the Candidates Test and the derivative tests.

> 🔑 Optimization is differentiation in disguise. If you can build the function, the calculus is the easy part.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'optimization-problems',
    sections: [
      {
        id: 'opt2-intro',
        type: 'text' as const,
        content: `# 🎯 Optimization Problems

**Part 2 of 7 — Building the Objective: Constraint & Domain**

---

> 🔑 **The Idea:** Most problems hand you *two* relationships: the **objective** (what to optimize) and a **constraint** (a fixed condition, like a perimeter or a volume). Solve the constraint for one variable and substitute, so the objective depends on a **single** variable.`,
      },
      {
        id: 'opt2-primary-constraint',
        type: 'text' as const,
        content: `## Objective vs. Constraint

| | Objective (primary) | Constraint (secondary) |
|---|---|---|
| **Role** | the thing to max/min | a fixed condition you must obey |
| **Signal words** | "maximize/minimize," "largest/least" | "given," "fixed," "available," "must equal" |
| **Used to** | differentiate | eliminate a variable |

### Worked Example: Two Numbers

*Two nonnegative numbers add to $20$. Maximize their product.*

- **Objective:** $P = xy$  (the product to maximize)
- **Constraint:** $x + y = 20 \\;\\Rightarrow\\; y = 20 - x$
- **Substitute:** $P(x) = x(20 - x) = 20x - x^2$, with **domain** $0 \\le x \\le 20$.

$$P'(x) = 20 - 2x = 0 \\;\\Rightarrow\\; x = 10,\\quad y = 10,\\quad P = 100.$$

> ✅ The maximum product is $100$, at $x = y = 10$. A symmetric answer is a good sanity check here.`,
      },
      {
        id: 'opt2-domain',
        type: 'text' as const,
        content: `## Don't Forget the Domain

The **domain** records which $x$-values make *physical sense*. Lengths, widths, and radii must be **positive**, and a fixed constraint caps how large they can get.

**Example:** If a rectangle has perimeter $40$, then $2x + 2y = 40 \\Rightarrow y = 20 - x$. For both sides positive we need $0 < x < 20$.

The domain matters because the maximum or minimum can sit at an **endpoint** instead of at a critical number (Part 6). Always write it down in step 3.

> 💡 A handy check: substitute your critical $x$ back into the constraint. If it produces a *negative* length, you set the problem up wrong.`,
      },
      {
        id: 'opt2-setup-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A rectangle has a fixed **perimeter** of $36$. You want the maximum **area**. Which is the constraint?',
              options: [
                '$2x + 2y = 36$',
                '$A = xy$',
                '$x = y$',
                '$A = 36$',
              ],
              correctAnswer: 0,
              explanation: 'The perimeter is the *fixed condition* ($2x+2y=36$), so it is the constraint. The area $A=xy$ is the objective you maximize.',
            },
            {
              question: 'For a rectangle with $x + y = 20$ ($x, y$ both positive lengths), the correct domain for $x$ is:',
              options: ['$0 < x < 20$', '$0 \\le x \\le 20$', '$x > 20$', 'all real numbers'],
              correctAnswer: 0,
              explanation: 'Both $x$ and $y = 20 - x$ must be **positive** lengths, so $0 < x < 20$ (strict, since a zero side is not a rectangle).',
            },
          ],
        },
      },
      {
        id: 'opt2-substitute-note',
        type: 'text' as const,
        content: `## Substitution Turns Two Variables Into One

The whole point of the constraint is to *delete* a variable. Solve it for the easier letter, then substitute into the objective so it depends on a single input you can differentiate.

$$\\underbrace{x + y = 16}_{\\text{constraint}} \\;\\Rightarrow\\; y = 16 - x \\;\\Rightarrow\\; \\underbrace{S = x^2 + y^2 = x^2 + (16 - x)^2}_{\\text{one variable}}.$$

Try the substitution yourself below.`,
      },
      {
        id: 'opt2-eliminate-drill',
        type: 'input-boxes' as const,
        content: `**Reduce to One Variable** 🧮

Two nonnegative numbers $x$ and $y$ satisfy $x + y = 16$.

**1)** Write the **sum of squares** $S = x^2 + y^2$ in terms of $x$ only and find the $x$ that **minimizes** it. $x = \\,?$
**2)** What is that minimum value of $S$? $S = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['8', '128'],
          hint1: 'Substitute $y = 16 - x$, so $S(x) = x^2 + (16 - x)^2$.',
          hint2: '$S\'(x) = 2x + 2(16 - x)(-1) = 4x - 32$. Set it to $0$.',
          hint3: '$4x - 32 = 0 \\Rightarrow x = 8$, so $y = 8$ and $S = 8^2 + 8^2 = 128$.',
          explanation: '$S(x) = x^2 + (16-x)^2$, $\\;S\'(x) = 4x - 32 = 0 \\Rightarrow x = 8$. Then $y = 8$ and $S = 64 + 64 = 128$. (Symmetric, as expected for a sum of squares.)',
        },
      },
      {
        id: 'opt2-product-note',
        type: 'text' as const,
        content: `## Same Workflow, Different Objective

That drill *minimized* a sum of squares. The exact same constraint can feed a different objective — a **product** to *maximize*. Nothing about the method changes: substitute, differentiate, solve.

> 💡 For a fixed sum, the product is maximized when the two numbers are **equal**. Use the drill below to confirm it with calculus.`,
      },
      {
        id: 'opt2-product-drill',
        type: 'input-boxes' as const,
        content: `**Maximize the Product** 🧮

Two nonnegative numbers add to $30$. Let one number be $x$.

**1)** The product is $P(x) = x(30 - x)$. The maximizing value is $x = \\,?$
**2)** The maximum product is $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['15', '225'],
          hint1: '$P(x) = 30x - x^2$, so $P\'(x) = 30 - 2x$.',
          hint2: '$30 - 2x = 0 \\Rightarrow x = 15$.',
          hint3: 'With $x = 15$, the other number is $15$, so $P = 15 \\cdot 15 = 225$.',
          explanation: '$P\'(x) = 30 - 2x = 0 \\Rightarrow x = 15$, giving $y = 15$ and $P = 225$. Equal numbers maximize a product for a fixed sum.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'optimization-problems',
    sections: [
      {
        id: 'opt3-intro',
        type: 'text' as const,
        content: `# 🎯 Optimization Problems

**Part 3 of 7 — Area & Perimeter (Fences & Gardens)**

---

> 🔑 **The Classic:** Given a fixed amount of fencing (a *perimeter* constraint), find the dimensions that enclose the **maximum area**. Watch carefully for sides that *don't* get fenced — they change the constraint.`,
      },
      {
        id: 'opt3-fourside',
        type: 'text' as const,
        content: `## All Four Sides Fenced

*A farmer has $200$ ft of fencing to enclose a rectangular field. What dimensions give the maximum area?*

**Step 1–2.** Let the sides be $x$ and $y$. Objective: $A = xy$.

**Step 3.** Constraint (all four sides): $2x + 2y = 200 \\Rightarrow y = 100 - x$. Substitute:
$$A(x) = x(100 - x) = 100x - x^2,\\qquad 0 < x < 100.$$

**Step 4.** $A'(x) = 100 - 2x = 0 \\Rightarrow x = 50$, so $y = 50$.

**Step 5.** $A = 50 \\cdot 50 = 2500\\ \\text{ft}^2$.

> 💡 With **all four sides** fenced and a fixed perimeter, the optimal rectangle is always a **square**. Memorize this as a sanity check — but always show the calculus.`,
      },
      {
        id: 'opt3-threeside',
        type: 'text' as const,
        content: `## Three Sides Fenced (One Side Is a River)

When one side borders a barn or river, you **don't** fence it — the constraint changes, and the answer is **not** a square.

*A farmer has $100$ ft of fencing and a straight river. The side along the river needs no fence. Maximize the rectangular area.*

Let $x$ = the side **parallel** to the river, $y$ = each of the two perpendicular sides.

- **Objective:** $A = xy$.
- **Constraint:** only three sides are fenced, so $x + 2y = 100 \\Rightarrow x = 100 - 2y$.

$$A(y) = (100 - 2y)\\,y = 100y - 2y^2,\\qquad 0 < y < 50.$$
$$A'(y) = 100 - 4y = 0 \\;\\Rightarrow\\; y = 25,\\quad x = 50.$$
$$A = 50 \\cdot 25 = 1250\\ \\text{ft}^2.$$

> ⚠️ Three-sided fencing gives $x = 2y$ — the side **parallel** to the river is **twice** each perpendicular side, *not* a square. Read the geometry before writing the constraint.`,
      },
      {
        id: 'opt3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A rectangular pen uses $80$ ft of fence on **all four sides** for maximum area. The optimal shape is:',
              options: [
                'a $20 \\times 20$ square',
                'a $40 \\times 0$ strip',
                'a $30 \\times 10$ rectangle',
                'a $10 \\times 30$ rectangle',
              ],
              correctAnswer: 0,
              explanation: 'Four sides, fixed perimeter $\\Rightarrow$ optimum is a square. $2x+2y=80 \\Rightarrow x=y=20$, area $400\\,\\text{ft}^2$.',
            },
            {
              question: 'For three-sided fencing (one side free) with fence length $L$, the side **parallel** to the free edge is:',
              options: [
                'twice each perpendicular side',
                'equal to each perpendicular side',
                'half of each perpendicular side',
                'always equal to $L$',
              ],
              correctAnswer: 0,
              explanation: 'With $x + 2y = L$, optimizing $A = xy$ gives $x = 2y$: the parallel side is twice each perpendicular side.',
            },
          ],
        },
      },
      {
        id: 'opt3-fourside-note',
        type: 'text' as const,
        content: `## Your Turn: Four-Sided Fencing

The concept check confirmed the *shape*; now run the full calculus on a fresh number. Build $A(x)$ from the perimeter constraint, differentiate, and report the area — all five steps.

> 💡 Expect a square again. If your $A'(x) = 0$ gives anything other than half the available length per side pair, recheck the constraint.`,
      },
      {
        id: 'opt3-area-drill',
        type: 'input-boxes' as const,
        content: `**Maximize the Area** 🧮

A rectangular garden is enclosed on **all four sides** with $60$ ft of fencing.

**1)** Using $A(x) = x(30 - x)$, the maximizing side length is $x = \\,?$ ft
**2)** The maximum area is $\\,?$ $ft^{2}$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['15', '225'],
          hint1: '$2x + 2y = 60 \\Rightarrow y = 30 - x$, so $A(x) = x(30 - x)$.',
          hint2: '$A\'(x) = 30 - 2x = 0 \\Rightarrow x = 15$.',
          hint3: '$x = 15$ gives a $15 \\times 15$ square; area $= 225$.',
          explanation: '$A\'(x) = 30 - 2x = 0 \\Rightarrow x = 15$. The optimal pen is a $15 \\times 15$ square with area $225\\,\\text{ft}^2$.',
        },
      },
      {
        id: 'opt3-river-note',
        type: 'text' as const,
        content: `## Now Drop a Side

Change the geometry and the answer changes. With one side along a river, only **three** sides cost fence, so the constraint is $x + 2y = L$ — and the optimum is no longer a square.

> ⚠️ Define your variables carefully: let $y$ be each *perpendicular* side and $x = L - 2y$ the side *parallel* to the river. Mixing these up flips the answer.`,
      },
      {
        id: 'opt3-river-drill',
        type: 'input-boxes' as const,
        content: `**River Fencing** 🧮

A farmer has $120$ ft of fence and a river along one side (no fence needed there). Let $y$ be each side perpendicular to the river, so $x = 120 - 2y$ is the side parallel to it.

**1)** The maximizing perpendicular side is $y = \\,?$ ft
**2)** The maximum enclosed area is $\\,?$ $ft^{2}$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['30', '1800'],
          hint1: '$A(y) = (120 - 2y)\\,y = 120y - 2y^2$.',
          hint2: '$A\'(y) = 120 - 4y = 0 \\Rightarrow y = 30$.',
          hint3: '$y = 30 \\Rightarrow x = 120 - 60 = 60$, so $A = 60 \\cdot 30 = 1800$.',
          explanation: '$A\'(y) = 120 - 4y = 0 \\Rightarrow y = 30$, then $x = 60$ and $A = 1800\\,\\text{ft}^2$. Note $x = 2y$, the three-sided signature.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'optimization-problems',
    sections: [
      {
        id: 'opt4-intro',
        type: 'text' as const,
        content: `# 🎯 Optimization Problems

**Part 4 of 7 — Volume & Material (Boxes & Cans)**

---

> 🔑 **Two Flavors:** Either **maximize volume** for a fixed sheet of material, or **minimize material (surface area)** for a fixed volume. The setup is identical; only which equation is the objective changes.`,
      },
      {
        id: 'opt4-box-volume',
        type: 'text' as const,
        content: `## Max Volume: The Open-Top Box

*From a $12 \\times 12$ in square of cardboard, cut a square of side $x$ from each corner and fold up the sides. Find $x$ that maximizes the box's volume.*

After cutting, the base is $(12 - 2x)$ by $(12 - 2x)$ and the height is $x$:

$$V(x) = x(12 - 2x)^2 = 4x^3 - 48x^2 + 144x,\\qquad 0 < x < 6.$$

Differentiate:
$$V'(x) = 12x^2 - 96x + 144 = 12(x^2 - 8x + 12) = 12(x - 2)(x - 6).$$

Critical numbers: $x = 2$ and $x = 6$. Only $x = 2$ is **inside** the domain $(0,6)$ — at $x = 6$ the base vanishes.

$$V(2) = 2(12 - 4)^2 = 2 \\cdot 64 = 128\\ \\text{in}^3.$$

> 💡 The boundary critical number $x = 6$ gives $V = 0$ (no box at all). Discarding out-of-domain or degenerate critical numbers is part of step 3–4.`,
      },
      {
        id: 'opt4-box-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Cutting squares of side $x$ from the corners of an $8 \\times 8$ sheet, the open-top box volume is $V(x) = x(8-2x)^2$. The valid **domain** for $x$ is:',
              options: ['$0 < x < 4$', '$0 < x < 8$', '$0 < x < 2$', '$2 < x < 8$'],
              correctAnswer: 0,
              explanation: 'The base side $8 - 2x$ must be positive, so $x < 4$; and $x > 0$ to fold up a side. Thus $0 < x < 4$.',
            },
            {
              question: 'When the goal is the **least material** for a box of fixed volume, the objective function is the box\'s:',
              options: ['surface area', 'volume', 'height', 'base perimeter'],
              correctAnswer: 0,
              explanation: '"Least material" means minimum **surface area**. The volume is the fixed constraint here, not the objective.',
            },
          ],
        },
      },
      {
        id: 'opt4-box-material',
        type: 'text' as const,
        content: `## Min Material: Box with Fixed Volume

*Design an **open-top** box with a square base holding $V = 32\\ \\text{m}^3$ using the least material.*

Let the base side be $x$ and the height be $h$.

- **Constraint (volume):** $x^2 h = 32 \\Rightarrow h = \\dfrac{32}{x^2}$.
- **Objective (surface area, open top = base $+$ 4 sides):** $S = x^2 + 4xh$.

Substitute $h$:
$$S(x) = x^2 + 4x \\cdot \\frac{32}{x^2} = x^2 + \\frac{128}{x},\\qquad x > 0.$$
$$S'(x) = 2x - \\frac{128}{x^2} = 0 \\;\\Rightarrow\\; 2x^3 = 128 \\;\\Rightarrow\\; x^3 = 64 \\Rightarrow x = 4.$$

Then $h = \\dfrac{32}{16} = 2$ and $S = 16 + 32 = 48\\ \\text{m}^2$.

> ✅ **Check it's a minimum:** $S''(x) = 2 + \\dfrac{256}{x^3}$, and $S''(4) = 2 + 4 = 6 > 0$ → concave up → **minimum**. (More on this test in Part 6.)

> 💡 A **closed** box (with a lid) uses $S = 2x^2 + 4xh$ instead — the only change is doubling the base term, since the top adds another $x^2$. The method is identical; only the objective's first term changes.`,
      },
      {
        id: 'opt4-volume-drill',
        type: 'input-boxes' as const,
        content: `**Open-Top Box** 🧮

You build an **open-top** box with a square base holding $V = 4000\\ \\text{cm}^3$ using the least material. With base side $x$ and height $h = \\dfrac{4000}{x^2}$, the surface area is $S(x) = x^2 + \\dfrac{16000}{x}$.

**1)** The minimizing base side is $x = \\,?$ cm
**2)** The corresponding height is $h = \\,?$ cm`,
        exercise: {
          boxes: 2,
          correctAnswers: ['20', '10'],
          hint1: '$S\'(x) = 2x - \\dfrac{16000}{x^2}$. Set it to $0$.',
          hint2: '$2x = \\dfrac{16000}{x^2} \\Rightarrow x^3 = 8000$.',
          hint3: '$x = \\sqrt[3]{8000} = 20$, then $h = \\dfrac{4000}{20^2} = \\dfrac{4000}{400} = 10$.',
          explanation: '$S\'(x) = 2x - 16000/x^2 = 0 \\Rightarrow x^3 = 8000 \\Rightarrow x = 20$. Then $h = 4000/400 = 10\\,\\text{cm}$ and $S = 400 + 800 = 1200\\,\\text{cm}^2$.',
        },
      },
      {
        id: 'opt4-can-note',
        type: 'text' as const,
        content: `## From Boxes to Cans

The same "fixed volume, minimum surface area" logic governs the classic **soup-can** problem — only the geometry formulas change. For a closed cylinder:

$$V = \\pi r^2 h \\quad\\text{(constraint)}, \\qquad S = 2\\pi r^2 + 2\\pi r h \\quad\\text{(objective)}.$$

Solve the constraint for $h$, substitute, and minimize. Walk through the setup in the dropdown below — it ends with a famously clean result.`,
      },
      {
        id: 'opt4-can-dropdown',
        type: 'dropdown-select' as const,
        content: `**The Cylindrical Can** 🔽

A closed cylindrical can has fixed volume $V$, radius $r$, and height $h$, so $V = \\pi r^2 h$. The surface area is $S = 2\\pi r^2 + 2\\pi r h$.`,
        exercise: {
          dropdowns: [
            { label: 'Solve the constraint for $h$:', options: ['$h = \\dfrac{V}{\\pi r^2}$', '$h = \\dfrac{V}{2\\pi r}$', '$h = \\pi r^2 V$', '$h = \\dfrac{\\pi r^2}{V}$'] },
            { label: 'After substituting, $S(r) =$', options: ['$2\\pi r^2 + \\dfrac{2V}{r}$', '$2\\pi r^2 + 2V r$', '$\\pi r^2 + \\dfrac{V}{r}$', '$2\\pi r^2 + \\dfrac{V}{r^2}$'] },
            { label: 'At the optimum, the height-to-radius ratio $h/r$ is:', options: ['$2$', '$1$', '$\\pi$', '$\\dfrac{1}{2}$'] },
          ],
          correctAnswers: ['$h = \\dfrac{V}{\\pi r^2}$', '$2\\pi r^2 + \\dfrac{2V}{r}$', '$2$'],
          hint1: 'Divide $V = \\pi r^2 h$ by $\\pi r^2$.',
          hint2: '$2\\pi r h = 2\\pi r \\cdot \\dfrac{V}{\\pi r^2} = \\dfrac{2V}{r}$, added to $2\\pi r^2$.',
          hint3: 'Setting $S\'(r) = 4\\pi r - \\dfrac{2V}{r^2} = 0$ gives $r^3 = \\dfrac{V}{2\\pi}$, and the optimal can has $h = 2r$.',
          explanation: 'The minimal-surface closed cylinder satisfies $h = 2r$ (height equals diameter) — a classic, exact result. Here $S(r) = 2\\pi r^2 + 2V/r$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'optimization-problems',
    sections: [
      {
        id: 'opt5-intro',
        type: 'text' as const,
        content: `# 🎯 Optimization Problems

**Part 5 of 7 — Distance, Cost & Revenue**

---

> 🔑 **Beyond Geometry:** Optimization runs the business world too — shortest path, cheapest design, and maximum revenue. Two pro tricks: minimize **distance$ {}^{2}$** instead of distance, and build **revenue** as $\\text{(price)} \\times \\text{(quantity)}$.`,
      },
      {
        id: 'opt5-distance',
        type: 'text' as const,
        content: `## Shortest Distance: Minimize the *Square*

*Find the point on the curve $y = \\sqrt{x}$ closest to the point $\\left(\\tfrac{3}{2},\\, 0\\right)$.*

A point on the curve is $\\left(x, \\sqrt{x}\\right)$. Its distance to $\\left(\\tfrac{3}{2}, 0\\right)$ is
$$D = \\sqrt{\\left(x - \\tfrac{3}{2}\\right)^2 + \\left(\\sqrt{x}\\right)^2}.$$

> 💡 **Trick:** $D$ is minimized exactly where $D^2$ is minimized, and $D^2$ has no square root to differentiate. So minimize
$$f(x) = \\left(x - \\tfrac{3}{2}\\right)^2 + x,\\qquad x \\ge 0.$$

$$f'(x) = 2\\left(x - \\tfrac{3}{2}\\right) + 1 = 2x - 3 + 1 = 2x - 2 = 0 \\Rightarrow x = 1.$$

The closest point is $\\left(1, 1\\right)$, with $D^2 = \\left(1 - \\tfrac{3}{2}\\right)^2 + 1 = \\tfrac14 + 1 = \\tfrac54$, so $D = \\dfrac{\\sqrt5}{2}$.

> ⚠️ Minimizing $D^2$ avoids the messy chain rule on a square root — but make sure your final answer reports the requested point or distance, not $D^2$.`,
      },
      {
        id: 'opt5-distance-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why is it valid to minimize $D^2$ instead of the distance $D$ itself?',
              options: [
                'Squaring is increasing for $D \\ge 0$, so both are minimized at the same point',
                'Because $D^2$ is always larger than $D$',
                'It changes the location of the minimum to a nicer value',
                'It is only an approximation that is usually close enough',
              ],
              correctAnswer: 0,
              explanation: 'For $D \\ge 0$, the function $g(D) = D^2$ is strictly increasing, so $D$ and $D^2$ attain their minimum at the *same* $x$. It is exact, not an approximation.',
            },
            {
              question: 'For the point $(x, \\sqrt{x})$ on $y = \\sqrt{x}$, the term $\\left(\\sqrt{x}\\right)^2$ in $D^2$ simplifies to:',
              options: ['$x$', '$x^2$', '$\\sqrt{x}$', '$2x$'],
              correctAnswer: 0,
              explanation: '$\\left(\\sqrt{x}\\right)^2 = x$ for $x \\ge 0$. This simplification is what makes $D^2$ a clean polynomial-style function to differentiate.',
            },
          ],
        },
      },
      {
        id: 'opt5-revenue',
        type: 'text' as const,
        content: `## Maximum Revenue: Price × Quantity

*A theater sells $600$ tickets at \\$12 each. A survey says every \\$1 **increase** in price loses $30$ ticket-buyers. What price maximizes revenue?*

Let $x$ = the number of \\$1 increases.

- **Price:** $p = 12 + x$ dollars.
- **Quantity:** $n = 600 - 30x$ tickets.
- **Revenue:** $R(x) = (12 + x)(600 - 30x) = -30x^2 + 240x + 7200$.

$$R'(x) = -60x + 240 = 0 \\;\\Rightarrow\\; x = 4.$$

So the price is $p = 12 + 4 = 16$, i.e. \\$16, attendance is $n = 600 - 120 = 480$, and
$$R = 16 \\cdot 480 = 7680,$$
i.e. \\$7,680.

> 💡 Since $R$ is a downward parabola ($R'' = -60 < 0$), the single critical number is automatically the **maximum**. Revenue models are often quadratics — recognize the shape.`,
      },
      {
        id: 'opt5-revenue-drill',
        type: 'input-boxes' as const,
        content: `**Maximize Revenue** 🧮

A streaming service has $1000$ subscribers at \\$30/month. Market research finds each \\$1 **decrease** in price gains $100$ new subscribers. Let $x$ = the number of \\$1 decreases, so price $= 30 - x$ and subscribers $= 1000 + 100x$.

**1)** The revenue-maximizing number of \\$1 decreases is $x = \\,?$
**2)** The optimal monthly price is \\$$\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['10', '20'],
          hint1: '$R(x) = (30 - x)(1000 + 100x)$. Expand: $R = -100x^2 + 2000x + 30000$.',
          hint2: '$R\'(x) = -200x + 2000 = 0$.',
          hint3: '$x = 10$, so the price is $30 - 10 = \\$20$ (with $2000$ subscribers and $R = \\$40{,}000$).',
          explanation: '$R\'(x) = -200x + 2000 = 0 \\Rightarrow x = 10$. Price $= \\$20$, subscribers $= 2000$, revenue $= \\$40{,}000$. The parabola opens down, so this is the max.',
        },
      },
      {
        id: 'opt5-closest-note',
        type: 'text' as const,
        content: `## Back to Distance — With a Twist

Revenue problems are quadratics, so their critical point is automatically the vertex. Distance problems are sneakier: the squared-distance function can have **several** critical numbers, and not all of them are minima.

> ⚠️ When $D^2(x)$ factors as (something) $\\times$ (something), set **each** factor to zero, then test which root actually minimizes the distance — a stray root can be a *maximum* or a saddle.`,
      },
      {
        id: 'opt5-closest-drill',
        type: 'input-boxes' as const,
        content: `**Closest Point** 🧮

Find the $x$-coordinate of the point on $y = x^2$ closest to $(0, 3)$. Minimize $D^2(x) = x^2 + (x^2 - 3)^2$ and report the **positive** critical $x$.

**1)** Enter $x$ as a decimal rounded to two places: $x \\approx \\,?$`,
        exercise: {
          boxes: 1,
          correctAnswers: ['1.58'],
          hint1: '$\\dfrac{d}{dx}\\!\\left[x^2 + (x^2 - 3)^2\\right] = 2x + 2(x^2 - 3)(2x) = 2x\\left(1 + 2(x^2 - 3)\\right)$.',
          hint2: 'Factor: $2x(2x^2 - 5) = 0$, so $x = 0$ or $x^2 = \\tfrac{5}{2}$.',
          hint3: 'The positive nonzero root is $x = \\sqrt{5/2} = \\sqrt{2.5} \\approx 1.58$.',
          explanation: 'Setting the derivative to $0$: $2x(2x^2 - 5) = 0 \\Rightarrow x = \\sqrt{2.5} \\approx 1.58$ (the $x = 0$ root is a local *max* of distance here). The minimum distance$ {}^{2}$ is $\\tfrac{11}{4}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'optimization-problems',
    sections: [
      {
        id: 'opt6-intro',
        type: 'text' as const,
        content: `# 🎯 Optimization Problems

**Part 6 of 7 — Confirming the Extremum**

---

> 🔑 **Don't Assume:** A critical number could be a max, a min, or neither. AP graders require **justification**. You have three tools: the **Closed-Interval (Candidates) Test**, the **First-Derivative Test**, and the **Second-Derivative Test**.`,
      },
      {
        id: 'opt6-candidates',
        type: 'text' as const,
        content: `## Closed-Interval (Candidates) Test

When the domain is a **closed interval** $[a, b]$, the absolute extremum *must* occur at a critical number **or** at an endpoint. So:

1. Find all critical numbers in $[a, b]$.
2. Evaluate the function at **each critical number and at both endpoints**.
3. The largest output is the absolute max; the smallest is the absolute min.

### Example: minimize $C(x) = x + \\dfrac{4}{x}$ on $[1, 4]$

$$C'(x) = 1 - \\frac{4}{x^2} = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = 2 \\;(\\text{in } [1,4]).$$

| $x$ | $1$ | $2$ | $4$ |
|-----|-----|-----|-----|
| $C(x)$ | $1 + 4 = 5$ | $2 + 2 = 4$ | $4 + 1 = 5$ |

The absolute **minimum** is $C(2) = 4$. Both endpoints give $5$ — the interior critical point wins.

> 💡 On a *closed* interval you never need a derivative test: just compare the candidate values. This is the most reliable AP method.`,
      },
      {
        id: 'opt6-deriv-tests',
        type: 'text' as const,
        content: `## First- and Second-Derivative Tests

When the domain is **open** (e.g. $x > 0$), there are no endpoints to check, so justify with a derivative test.

**First-Derivative Test** — check the sign of $f'$ around the critical number $c$:

| $f'$ left of $c$ | $f'$ right of $c$ | $c$ is a… |
|---|---|---|
| $+$ | $-$ | **maximum** |
| $-$ | $+$ | **minimum** |
| same sign | same sign | neither |

**Second-Derivative Test** — evaluate $f''(c)$:
- $f''(c) > 0$ → concave up → **minimum**
- $f''(c) < 0$ → concave down → **maximum**
- $f''(c) = 0$ → inconclusive (fall back to the first-derivative test)

> ✅ **Example (open-top box, Part 4):** $S(x) = x^2 + \\dfrac{128}{x}$, $\\;S''(x) = 2 + \\dfrac{256}{x^3}$. At $x = 4$, $S''(4) = 2 + 4 = 6 > 0$ → concave up → **minimum**. Justification complete.`,
      },
      {
        id: 'opt6-test-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On a **closed** interval $[a, b]$, the absolute maximum must occur at:',
              options: [
                'a critical number or an endpoint',
                'a critical number only',
                'an endpoint only',
                'the midpoint of the interval',
              ],
              correctAnswer: 0,
              explanation: 'The Extreme Value Theorem guarantees the absolute max/min on a closed interval occurs at a critical number **or** an endpoint — that is the full candidate list.',
            },
            {
              question: 'You find $f\'(c) = 0$ and $f\'\'(c) = -8$. The point $x = c$ is a:',
              options: ['local maximum', 'local minimum', 'inflection point', 'cannot be determined'],
              correctAnswer: 0,
              explanation: '$f\'\'(c) < 0$ means concave down at $c$, so $c$ is a local **maximum** by the Second-Derivative Test.',
            },
            {
              question: 'The Second-Derivative Test is **inconclusive** when:',
              options: ['$f\'\'(c) = 0$', '$f\'\'(c) > 0$', '$f\'\'(c) < 0$', '$f\'(c) \\ne 0$'],
              correctAnswer: 0,
              explanation: 'If $f\'\'(c) = 0$ the concavity is unknown at $c$, so the test fails — use the First-Derivative Test instead.',
            },
          ],
        },
      },
      {
        id: 'opt6-candidates-note',
        type: 'text' as const,
        content: `## Put the Candidates Test to Work

The cleanest justification on a *closed* interval needs no derivative sign analysis at all — just build the candidate list (critical numbers **plus** both endpoints) and compare the outputs. The largest is the max; the smallest is the min.

> 💡 Watch for ties: two different inputs can produce the *same* extreme value. That's fine — report the value, and note both locations if asked.`,
      },
      {
        id: 'opt6-candidates-drill',
        type: 'input-boxes' as const,
        content: `**Run the Candidates Test** 🧮

Find the absolute **maximum** value of $f(x) = x^3 - 6x^2 + 9x + 2$ on the closed interval $[0, 4]$.

$f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$, so the critical numbers are $x = 1$ and $x = 3$.

**1)** Evaluate $f$ at $0,\\,1,\\,3,\\,4$. The absolute maximum value on $[0,4]$ is $\\,?$`,
        exercise: {
          boxes: 1,
          correctAnswers: ['6'],
          hint1: 'Compute $f(0)$, $f(1)$, $f(3)$, and $f(4)$, then take the largest.',
          hint2: '$f(0) = 2$, $f(1) = 1 - 6 + 9 + 2 = 6$, $f(3) = 27 - 54 + 27 + 2 = 2$.',
          hint3: '$f(4) = 64 - 96 + 36 + 2 = 6$. The largest candidate value is $6$.',
          explanation: 'Candidates: $f(0)=2,\\ f(1)=6,\\ f(3)=2,\\ f(4)=6$. The absolute maximum value is $6$ (attained at both $x=1$ and $x=4$).',
        },
      },
      {
        id: 'opt6-choose-note',
        type: 'text' as const,
        content: `## Choosing the Right Tool

You now have three justifications. Which to use depends on the **domain** and how easy the second derivative is:

| Situation | Best tool |
|-----------|-----------|
| Closed interval $[a,b]$ | Candidates Test |
| Open domain, simple $f''$ | Second-Derivative Test |
| $f''(c) = 0$ (inconclusive) | First-Derivative Test |

Match each scenario below to its cleanest justification.`,
      },
      {
        id: 'opt6-justify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Justification** 🔽

Match each situation to the cleanest way to confirm the extremum.`,
        exercise: {
          dropdowns: [
            { label: 'Domain is closed $[2, 9]$:', options: ['Candidates Test', 'Second-Derivative Test', 'Guess from the graph', 'No justification needed'] },
            { label: 'Open domain $x>0$ and $f\'\'$ is easy:', options: ['Second-Derivative Test', 'Candidates Test', 'Check endpoints', 'Plug in a random point'] },
            { label: '$f\'(c)=0$ and $f\'\'(c)=0$:', options: ['First-Derivative Test', 'Second-Derivative Test', 'Conclude it is a min', 'Conclude it is a max'] },
          ],
          correctAnswers: ['Candidates Test', 'Second-Derivative Test', 'First-Derivative Test'],
          hint1: 'A closed interval invites the Candidates Test — just compare endpoint and critical values.',
          hint2: 'No endpoints and an easy second derivative make the Second-Derivative Test fastest.',
          hint3: 'When $f\'\'(c)=0$ the second-derivative test fails, so check the sign of $f\'$ on each side.',
          explanation: 'Closed interval → Candidates Test; open domain with simple $f\'\'$ → Second-Derivative Test; $f\'\'(c)=0$ → fall back to the First-Derivative Test.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'optimization-problems',
    sections: [
      {
        id: 'opt7-intro',
        type: 'text' as const,
        content: `# 🎯 Optimization Problems

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) translate a word problem into an objective + constraint, (2) reduce to one variable with a domain, (3) differentiate to find critical numbers, and (4) confirm and report the answer. Let's put it all together.`,
      },
      {
        id: 'opt7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Application | Objective | Typical constraint |
|-------------|-----------|--------------------|
| Fence / garden | area $A = xy$ | perimeter (count fenced sides!) |
| Open-top box (sheet) | volume $V = x(L-2x)^2$ | sheet size $\\Rightarrow$ domain |
| Box / can (fixed volume) | surface area | $V = x^2 h$ or $\\pi r^2 h$ |
| Closest point | $D^2$ (skip the root) | the curve's equation |
| Revenue | $R = (\\text{price})(\\text{quantity})$ | linear price–demand rule |

> ⚠️ Final checklist: (1) right objective vs. constraint, (2) one variable + domain, (3) solve $f'=0$, (4) **justify** the extremum, (5) answer the *exact* question — value or location.`,
      },
      {
        id: 'opt7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A rancher fences a rectangular pen against a barn (one side needs no fence) using $100$ ft of fencing. Maximizing area, the maximum area is:',
              options: ['$1250\\ \\text{ft}^2$', '$2500\\ \\text{ft}^2$', '$625\\ \\text{ft}^2$', '$1000\\ \\text{ft}^2$'],
              correctAnswer: 0,
              explanation: 'Three sides: $x + 2y = 100$, $A = xy = (100-2y)y$. $A\'=100-4y=0 \\Rightarrow y=25,\\ x=50,\\ A=1250\\,\\text{ft}^2$.',
            },
            {
              question: 'Two nonnegative numbers have a sum of $40$. Their product is largest when the numbers are:',
              options: ['$20$ and $20$', '$10$ and $30$', '$0$ and $40$', '$15$ and $25$'],
              correctAnswer: 0,
              explanation: 'For a fixed sum, the product $x(40-x)$ is maximized at $x=20$, giving $20$ and $20$ (product $400$).',
            },
            {
              question: 'For a closed cylindrical can of fixed volume with minimum surface area, the height equals:',
              options: ['the diameter ($h = 2r$)', 'the radius ($h = r$)', 'half the radius', '$\\pi$ times the radius'],
              correctAnswer: 0,
              explanation: 'Minimizing $S = 2\\pi r^2 + 2V/r$ gives $r^3 = V/(2\\pi)$ and $h = 2r$ — the height equals the diameter.',
            },
          ],
        },
      },
      {
        id: 'opt7-fullproblem-note',
        type: 'text' as const,
        content: `## A Complete, Multi-Step Problem

The concept check tested recognition; this one tests *execution*. Run all five steps on a box problem: expand $V(x)$, differentiate, factor to find critical numbers, discard the root outside the domain, and report the maximum volume.

> 💡 Cubic volume functions factor nicely here. Pull out the common factor first, then factor the remaining quadratic to read off both roots.`,
      },
      {
        id: 'opt7-box-drill',
        type: 'input-boxes' as const,
        content: `**Full Problem** 🧮

From a $10 \\times 10$ in cardboard sheet, squares of side $x$ are cut from each corner and the sides folded up to form an open-top box, so $V(x) = x(10 - 2x)^2$ on $0 < x < 5$.

**1)** The volume-maximizing cut size is $x = \\,?$ in *(enter as a fraction like 5/3 or a 2-place decimal)*
**2)** Round the maximum volume to the nearest whole in³: $V \\approx \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5/3', '74'],
          hint1: '$V(x) = 4x^3 - 40x^2 + 100x$, so $V\'(x) = 12x^2 - 80x + 100 = 4(3x^2 - 20x + 25)$.',
          hint2: 'Factor $3x^2 - 20x + 25 = (3x - 5)(x - 5)$, so $x = \\tfrac{5}{3}$ or $x = 5$. Only $\\tfrac{5}{3}$ is in $(0,5)$.',
          hint3: '$V\\!\\left(\\tfrac{5}{3}\\right) = \\tfrac{5}{3}\\left(10 - \\tfrac{10}{3}\\right)^2 = \\tfrac{5}{3}\\cdot\\left(\\tfrac{20}{3}\\right)^2 = \\tfrac{2000}{27} \\approx 74.07$.',
          explanation: '$V\'(x) = 4(3x-5)(x-5) = 0 \\Rightarrow x = \\tfrac{5}{3}$ (the only root in the domain). $V = \\tfrac{2000}{27} \\approx 74\\,\\text{in}^3$.',
        },
      },
      {
        id: 'opt7-final-note',
        type: 'text' as const,
        content: `## One Last Check Before You Finish

You've practiced every family of optimization problem — area, volume, distance, and revenue — plus the justification that earns full AP credit. The exit quiz pulls from all of them.

> 🔑 Remember the five steps and *always* answer the exact question asked: a value or a location, a max or a min. That discipline is what separates a complete answer from a half-finished one.`,
      },
      {
        id: 'opt7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A farmer encloses a rectangular field on all four sides with $200$ ft of fence for maximum area. The maximum area is:',
              options: ['$2500\\ \\text{ft}^2$', '$10000\\ \\text{ft}^2$', '$5000\\ \\text{ft}^2$', '$1250\\ \\text{ft}^2$'],
              correctAnswer: 0,
              explanation: '$2x+2y=200 \\Rightarrow y=100-x$, $A=x(100-x)$, $A\'=100-2x=0 \\Rightarrow x=50$. A $50\\times50$ square gives $2500\\,\\text{ft}^2$.',
            },
            {
              question: 'To find the absolute minimum of a continuous function on the closed interval $[1, 4]$, you should evaluate it at:',
              options: [
                'each critical number in $[1,4]$ and both endpoints',
                'only the critical numbers',
                'only the endpoints $1$ and $4$',
                'the midpoint $2.5$',
              ],
              correctAnswer: 0,
              explanation: 'The Candidates Test compares the function value at every critical number inside $[1,4]$ **and** at both endpoints; the smallest of those is the absolute minimum.',
            },
            {
              question: 'You set $f\'(x) = 0$ and solve for a critical number $c$, then find $f\'\'(c) > 0$. This tells you $x = c$ gives a:',
              options: ['local minimum', 'local maximum', 'inflection point', 'global maximum'],
              correctAnswer: 0,
              explanation: '$f\'\'(c) > 0$ means the graph is concave up at $c$, so by the Second-Derivative Test $c$ is a local **minimum**.',
            },
          ],
        },
      },
    ],
  },
]
