import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — The Second Derivative Test (AP Calculus AB).
 * Registry key / DB Topic.slug: 'second-derivative-test'.
 * 7 parts, gold-standard structure: concavity & f'' -> inflection points ->
 * the Second Derivative Test (statement + intuition) -> worked examples vs. the
 * First Derivative Test -> the inconclusive f''=0 case & recovery -> applications
 * (graphing, optimization, acceleration) -> mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Interactive string fields use double quotes so math primes (f', f'') need no escaping.
 * Every derivative, critical-point value, and sign was verified symbolically before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'second-derivative-test',
    sections: [
      {
        id: 'sdt1-intro',
        type: 'text' as const,
        content: `# 🥣 The Second Derivative Test

**Part 1 of 7 — Concavity and the Second Derivative**

---

### Topics in This Part

| Section |
|---------|
| What the second derivative measures |
| Concave up vs. concave down |
| Reading concavity from the sign of $f''$ |

> 🔑 **Key Concept:** The first derivative $f'$ tells you whether a function is rising or falling. The **second derivative** $f''$ tells you how that *slope itself* is changing — and that is exactly the information the Second Derivative Test will use to classify maxima and minima.`,
      },
      {
        id: 'sdt1-meaning',
        type: 'text' as const,
        content: `## What Does $f''$ Measure?

The second derivative is just the derivative of the derivative:

$$f''(x) = \\frac{d}{dx}\\bigl[\\,f'(x)\\,\\bigr]$$

So $f''$ is the **rate of change of the slope**.

- If $f'' > 0$, the slope $f'$ is **increasing** — the curve bends upward.
- If $f'' < 0$, the slope $f'$ is **decreasing** — the curve bends downward.

| Sign of $f''$ | Slope $f'$ is… | Shape | Name |
|:---:|:---:|:---:|:---:|
| $f'' > 0$ | increasing | $\\smile$ | concave **up** |
| $f'' < 0$ | decreasing | $\\frown$ | concave **down** |

> 💡 **Memory hook:** Concave **up** holds water like a cup ($\\smile$); concave **down** spills it ($\\frown$). Up ↔ positive $f''$.`,
      },
      {
        id: 'sdt1-concept-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: "On an interval where $f''(x) > 0$, the graph of $f$ is:",
              options: ["Concave up (the slope is increasing)", "Concave down (the slope is decreasing)", "A straight line", "Always increasing"],
              correctAnswer: 0,
              explanation: "$f'' > 0$ means $f'$ is increasing, so the curve bends upward — concave up. It says nothing on its own about whether $f$ itself is rising or falling.",
            },
            {
              question: "A curve is concave **down** on an interval. What must be true there?",
              options: ["$f''(x) < 0$", "$f''(x) > 0$", "$f'(x) < 0$", "$f(x) < 0$"],
              correctAnswer: 0,
              explanation: "Concave down ($\\frown$) means the slope is decreasing, which requires $f''(x) < 0$. The signs of $f$ and $f'$ are irrelevant to concavity.",
            },
          ],
        },
      },
      {
        id: 'sdt1-compute',
        type: 'text' as const,
        content: `## Reading Concavity from a Formula

To find concavity, compute $f''$ and check its **sign**.

### Example: $f(x) = x^3$

$$f'(x) = 3x^2, \\qquad f''(x) = 6x$$

- For $x < 0$: $f''(x) = 6x < 0$ → **concave down**.
- For $x > 0$: $f''(x) = 6x > 0$ → **concave up**.

So $y = x^3$ curls downward on the left and upward on the right, switching exactly at the origin.

> 💡 A point where concavity switches has a special name — the **inflection point** — and it's the focus of Part 2.`,
      },
      {
        id: 'sdt1-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Second Derivative** 🧮

Find $f''(x)$ for each function, then evaluate it at the given point. Enter the **numerical value of $f''$** at that point.

**1)** $f(x) = x^3 - 12x$, find $f''(2)$.
**2)** $f(x) = x^2 - 4x + 7$, find $f''(0)$.
**3)** $f(x) = x^4 - 2x^2$, find $f''(1)$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '2', '8'],
          hint1: "$f(x)=x^3-12x \\Rightarrow f'(x)=3x^2-12 \\Rightarrow f''(x)=6x$. Then $f''(2)=12$.",
          hint2: "$f(x)=x^2-4x+7 \\Rightarrow f'(x)=2x-4 \\Rightarrow f''(x)=2$ (a constant), so $f''(0)=2$.",
          hint3: "$f(x)=x^4-2x^2 \\Rightarrow f'(x)=4x^3-4x \\Rightarrow f''(x)=12x^2-4$. Then $f''(1)=12-4=8$.",
          explanation: "1) $f''(x)=6x$, so $f''(2)=12$.  2) $f''(x)=2$ everywhere, so $f''(0)=2$.  3) $f''(x)=12x^2-4$, so $f''(1)=8$.",
        },
      },
      {
        id: 'sdt1-sign-dropdown',
        type: 'dropdown-select' as const,
        content: `**Sign to Shape** 🔽

Match each second-derivative value to the concavity it produces.`,
        exercise: {
          dropdowns: [
            { label: "At a point where $f''(x) = 5$:", options: ["concave up", "concave down", "straight line"] },
            { label: "At a point where $f''(x) = -3$:", options: ["concave down", "concave up", "straight line"] },
            { label: "For $f(x)=x^3$, on the interval $x<0$ the graph is:", options: ["concave down", "concave up", "straight line"] },
          ],
          correctAnswers: ["concave up", "concave down", "concave down"],
          hint1: "Positive $f''$ ($\\smile$) is concave up; negative $f''$ ($\\frown$) is concave down.",
          hint2: "For $x^3$, $f''(x)=6x$. When $x<0$, $6x<0$.",
          hint3: "A negative second derivative always means concave down, no matter the function.",
          explanation: "$f''=5>0$ → concave up. $f''=-3<0$ → concave down. For $x^3$ with $x<0$, $f''=6x<0$ → concave down.",
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'second-derivative-test',
    sections: [
      {
        id: 'sdt2-intro',
        type: 'text' as const,
        content: `# 🥣 The Second Derivative Test

**Part 2 of 7 — Inflection Points**

---

> 🔑 **The Idea:** An **inflection point** is where a curve switches concavity — from $\\smile$ to $\\frown$ or vice versa. These are the points where $f''$ changes sign, and they're a required topic on the AP exam in their own right.`,
      },
      {
        id: 'sdt2-define',
        type: 'text' as const,
        content: `## What Is an Inflection Point?

An **inflection point** is a point on the graph of $f$ where the concavity **changes**.

To find candidates, look for $x$-values where:
- $f''(x) = 0$, **or**
- $f''(x)$ is **undefined**.

> ⚠️ **Critical caution:** $f''(x) = 0$ is **not enough**. You must confirm that $f''$ actually *changes sign* across that point. If the sign is the same on both sides, it is **not** an inflection point.

### The classic trap: $f(x) = x^4$

Here $f''(x) = 12x^2$, which is $0$ at $x=0$. But $12x^2 \\ge 0$ for **all** $x$, so the curve is concave up on both sides. **No sign change → no inflection point**, even though $f''(0)=0$.`,
      },
      {
        id: 'sdt2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: "Which condition guarantees that $x=c$ is an inflection point of $f$?",
              options: ["$f''$ changes sign at $x=c$", "$f''(c) = 0$", "$f'(c) = 0$", "$f(c) = 0$"],
              correctAnswer: 0,
              explanation: "An inflection point requires the *concavity to change*, i.e. $f''$ changes sign at $c$. The condition $f''(c)=0$ alone is not sufficient (see $f(x)=x^4$).",
            },
            {
              question: "For $f(x) = x^4$, why is $x=0$ NOT an inflection point even though $f''(0)=0$?",
              options: ["$f''(x)=12x^2 \\ge 0$ on both sides, so concavity never changes", "Because $f(0)=0$", "Because $f'(0)=0$", "Because $x^4$ has no second derivative"],
              correctAnswer: 0,
              explanation: "$f''(x)=12x^2$ is positive on both sides of $0$ (and zero only at $0$). The curve stays concave up throughout, so there is no change in concavity and no inflection point.",
            },
          ],
        },
      },
      {
        id: 'sdt2-worked',
        type: 'text' as const,
        content: `## Worked Example: $f(x) = x^3 - 6x^2 + 9x + 1$

**Step 1 — Compute $f''$.**
$$f'(x) = 3x^2 - 12x + 9, \\qquad f''(x) = 6x - 12$$

**Step 2 — Solve $f''(x) = 0$.**
$$6x - 12 = 0 \\;\\Rightarrow\\; x = 2$$

**Step 3 — Test the sign of $f''$ on each side of $x=2$.**

| Interval | Test point | $f''=6x-12$ | Concavity |
|:---:|:---:|:---:|:---:|
| $x < 2$ | $x=0$ | $-12 < 0$ | down $\\frown$ |
| $x > 2$ | $x=3$ | $+6 > 0$ | up $\\smile$ |

The sign **changes**, so there is an inflection point. Its $y$-value is $f(2) = 8 - 24 + 18 + 1 = 3$.

> ✅ **Inflection point: $(2, 3)$.**`,
      },
      {
        id: 'sdt2-drill',
        type: 'input-boxes' as const,
        content: `**Locate the Inflection $x$-value** 🧮

Each function has an inflection point. Find the $x$-coordinate where the concavity changes.

**1)** $f(x) = x^3 - 3x^2$.  Inflection at $x = \\,?$
**2)** $f(x) = x^3 - 6x^2 + 9x + 1$.  Inflection at $x = \\,?$
**3)** $f(x) = x^4 - 6x^2$ has two inflection points. Enter the **positive** one: $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '2', '1'],
          hint1: "$f''(x)=6x-6=0 \\Rightarrow x=1$, and $f''$ changes from $-$ to $+$ there.",
          hint2: "$f''(x)=6x-12=0 \\Rightarrow x=2$.",
          hint3: "$f''(x)=12x^2-12=0 \\Rightarrow x^2=1 \\Rightarrow x=\\pm 1$. The positive one is $x=1$.",
          explanation: "1) $f''=6x-6 \\Rightarrow x=1$.  2) $f''=6x-12 \\Rightarrow x=2$.  3) $f''=12x^2-12 \\Rightarrow x=\\pm 1$; positive value is $1$. Each shows a genuine sign change.",
        },
      },
      {
        id: 'sdt2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Inflection or Not?** 🔽

For each scenario, decide whether $x=c$ is an inflection point.`,
        exercise: {
          dropdowns: [
            { label: "$f''$ goes from $+$ to $-$ at $c$:", options: ["inflection point", "not an inflection point"] },
            { label: "$f''(c)=0$ but $f''$ stays positive on both sides:", options: ["not an inflection point", "inflection point"] },
            { label: "$f''$ is undefined at $c$ and switches sign there:", options: ["inflection point", "not an inflection point"] },
          ],
          correctAnswers: ["inflection point", "not an inflection point", "inflection point"],
          hint1: "The only thing that matters is whether concavity (the sign of $f''$) changes.",
          hint2: "Same sign on both sides = no change = no inflection, even if $f''(c)=0$.",
          hint3: "An inflection point can occur where $f''$ is undefined, as long as the sign flips across it.",
          explanation: "Sign change $+\\to-$ ⇒ inflection. Same sign both sides ⇒ not an inflection. A sign change across an undefined-$f''$ point ⇒ still an inflection.",
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'second-derivative-test',
    sections: [
      {
        id: 'sdt3-intro',
        type: 'text' as const,
        content: `# 🥣 The Second Derivative Test

**Part 3 of 7 — The Test Itself**

---

> 🔑 **The Big Idea:** At a critical point where $f'(c)=0$, the concavity decides the shape. If the curve is concave **up** there ($\\smile$), the critical point sits at the **bottom** of a cup → a local **minimum**. Concave **down** ($\\frown$) → a local **maximum**.`,
      },
      {
        id: 'sdt3-statement',
        type: 'text' as const,
        content: `## Statement of the Second Derivative Test

Suppose $f'(c) = 0$ (so $c$ is a critical number) **and** $f''(c)$ exists. Then:

| If… | Concavity | Conclusion at $x=c$ |
|:---:|:---:|:---:|
| $f''(c) > 0$ | concave up $\\smile$ | local **minimum** |
| $f''(c) < 0$ | concave down $\\frown$ | local **maximum** |
| $f''(c) = 0$ | unknown | **inconclusive** |

> ⚠️ **Two requirements that students forget:**
> 1. You must **first** have $f'(c)=0$. The test only classifies *critical points where the slope is zero* — never apply it at a random point.
> 2. If $f''(c)=0$, the test tells you **nothing**. You must switch to another method (Part 5).

> 💡 **Why it works:** $f'(c)=0$ means the tangent is horizontal. If the curve is also concave up there, the only way to be flat at the bottom of a cup is to be at a low point — a minimum.`,
      },
      {
        id: 'sdt3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: "A critical point has $f'(c)=0$ and $f''(c)=-4$. By the Second Derivative Test, $x=c$ is a:",
              options: ["local maximum", "local minimum", "inflection point", "point where the test fails"],
              correctAnswer: 0,
              explanation: "$f''(c)=-4<0$ means concave down at a horizontal tangent — the top of a hill — so it is a local maximum.",
            },
            {
              question: "Before applying the Second Derivative Test at $x=c$, you must first confirm that:",
              options: ["$f'(c)=0$", "$f''(c)=0$", "$f(c)=0$", "$f$ is concave up everywhere"],
              correctAnswer: 0,
              explanation: "The test classifies critical points, so you first need $f'(c)=0$ (a horizontal tangent). Only then does the sign of $f''(c)$ tell you max vs. min.",
            },
          ],
        },
      },
      {
        id: 'sdt3-worked',
        type: 'text' as const,
        content: `## Worked Example: $f(x) = x^3 - 3x^2 + 1$

**Step 1 — Find critical numbers ($f'=0$).**
$$f'(x) = 3x^2 - 6x = 3x(x-2) = 0 \\;\\Rightarrow\\; x = 0 \\text{ or } x = 2$$

**Step 2 — Compute $f''$.**
$$f''(x) = 6x - 6$$

**Step 3 — Evaluate $f''$ at each critical number.**

| $c$ | $f''(c) = 6c-6$ | Sign | Conclusion |
|:---:|:---:|:---:|:---:|
| $0$ | $-6$ | $<0$ | local **max** |
| $2$ | $+6$ | $>0$ | local **min** |

**Step 4 — Report the points.** $f(0) = 1$ and $f(2) = 8 - 12 + 1 = -3$.

> ✅ **Local maximum $(0, 1)$; local minimum $(2, -3)$.** Notice how fast this is — one substitution per critical point.`,
      },
      {
        id: 'sdt3-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Test** 🧮

For $f(x) = x^3 - 12x$:

**1)** This function has two critical numbers. Enter the **smaller** one: $x = \\,?$
**2)** Evaluate $f''$ at that smaller critical number: $f'' = \\,?$
**3)** Evaluate $f''$ at the **larger** critical number ($x=2$): $f'' = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-2', '-12', '12'],
          hint1: "$f'(x)=3x^2-12=0 \\Rightarrow x^2=4 \\Rightarrow x=\\pm 2$. The smaller is $-2$.",
          hint2: "$f''(x)=6x$, so $f''(-2)=-12$ (negative ⇒ local max).",
          hint3: "$f''(2)=12$ (positive ⇒ local min).",
          explanation: "Critical numbers $\\pm 2$. $f''(-2)=-12<0$ ⇒ local max at $x=-2$; $f''(2)=12>0$ ⇒ local min at $x=2$.",
        },
      },
      {
        id: 'sdt3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify Each Critical Point** 🔽

At each critical number ($f'=0$ already), use the given $f''$ value.`,
        exercise: {
          dropdowns: [
            { label: "$f''(c) = 8$:", options: ["local minimum", "local maximum", "inconclusive"] },
            { label: "$f''(c) = -2$:", options: ["local maximum", "local minimum", "inconclusive"] },
            { label: "$f''(c) = 0$:", options: ["inconclusive", "local minimum", "local maximum"] },
          ],
          correctAnswers: ["local minimum", "local maximum", "inconclusive"],
          hint1: "Positive $f''$ = concave up = bottom of a cup = minimum.",
          hint2: "Negative $f''$ = concave down = top of a hill = maximum.",
          hint3: "When $f''(c)=0$, the Second Derivative Test gives no information — it is inconclusive.",
          explanation: "$f''=8>0$ ⇒ min. $f''=-2<0$ ⇒ max. $f''=0$ ⇒ inconclusive (use another test).",
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'second-derivative-test',
    sections: [
      {
        id: 'sdt4-intro',
        type: 'text' as const,
        content: `# 🥣 The Second Derivative Test

**Part 4 of 7 — vs. the First Derivative Test**

---

> 🔑 **When to use which:** The Second Derivative Test is *fast* — one substitution per critical point. The **First Derivative Test** (checking the sign of $f'$ on each side) is *slower but always works*. Knowing both, and when each shines, is exactly what the AP exam rewards.`,
      },
      {
        id: 'sdt4-compare',
        type: 'text' as const,
        content: `## Two Tests, Same Goal

| | **Second Derivative Test** | **First Derivative Test** |
|:---|:---:|:---:|
| What you check | sign of $f''(c)$ | sign of $f'$ on each side of $c$ |
| Speed | fast (one value) | slower (sign chart) |
| Handles $f''$ undefined? | ❌ no | ✅ yes |
| Handles $f''(c)=0$? | ❌ inconclusive | ✅ yes |
| Works at cusps/corners? | ❌ | ✅ |

> 💡 **Strategy:** Reach for the **Second** Derivative Test first when $f''$ is easy to compute and nonzero. Fall back to the **First** Derivative Test whenever $f''(c)=0$, $f''$ is undefined, or $f''$ is painful to compute.`,
      },
      {
        id: 'sdt4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: "You need to classify a critical point where $f'$ has a cusp ($f''$ does not exist). Which test should you use?",
              options: ["First Derivative Test", "Second Derivative Test", "Neither test can ever work", "Both give the same speed"],
              correctAnswer: 0,
              explanation: "The Second Derivative Test requires $f''(c)$ to exist. At a cusp it does not, so you must use the First Derivative Test (sign of $f'$ on each side).",
            },
            {
              question: "For $f(x)=x^4-4x^3$, the Second Derivative Test classifies $x=3$ as a minimum but is inconclusive at $x=0$ because:",
              options: ["$f''(0)=0$", "$f'(0)$ does not exist", "$x=0$ is an endpoint", "$f(0)=0$"],
              correctAnswer: 0,
              explanation: "$f''(x)=12x^2-24x$ gives $f''(0)=0$, so the Second Derivative Test is inconclusive there and we switch to the First Derivative Test.",
            },
          ],
        },
      },
      {
        id: 'sdt4-worked',
        type: 'text' as const,
        content: `## Worked Example: $f(x) = x^4 - 4x^3$

**Step 1 — Critical numbers.**
$$f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3) = 0 \\;\\Rightarrow\\; x = 0 \\text{ or } x = 3$$

**Step 2 — Second Derivative Test.**
$$f''(x) = 12x^2 - 24x$$
$$f''(3) = 108 - 72 = 36 > 0 \\;\\Rightarrow\\; \\text{local min at } x=3$$
$$f''(0) = 0 \\;\\Rightarrow\\; \\textbf{inconclusive!}$$

**Step 3 — Recover the $x=0$ case with the First Derivative Test.** Check the sign of $f'(x)=4x^2(x-3)$:

| Interval | Test point | $f'$ | $f$ is… |
|:---:|:---:|:---:|:---:|
| $x<0$ | $-1$ | $4(1)(-4)<0$ | decreasing |
| $0<x<3$ | $1$ | $4(1)(-2)<0$ | decreasing |

The sign of $f'$ does **not** change at $x=0$ (negative on both sides), so $x=0$ is **neither** a max nor a min — it's a horizontal tangent that the curve passes straight through.

> ✅ Local **min** at $x=3$ (value $f(3)=81-108=-27$); $x=0$ is **not** an extremum.`,
      },
      {
        id: 'sdt4-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Classification** 🧮

For $f(x) = x^3 + 3x^2 - 9x$:

**1)** Smaller critical number: $x = \\,?$  *(Solve $f'(x)=3x^2+6x-9=0$.)*
**2)** $f''$ at that smaller critical number $= \\,?$
**3)** $f''$ at the larger critical number ($x=1$) $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-3', '-12', '12'],
          hint1: "$3x^2+6x-9=3(x^2+2x-3)=3(x+3)(x-1)=0 \\Rightarrow x=-3$ or $x=1$. Smaller is $-3$.",
          hint2: "$f''(x)=6x+6$, so $f''(-3)=-12$ (negative ⇒ local max).",
          hint3: "$f''(1)=12$ (positive ⇒ local min).",
          explanation: "Critical numbers $-3$ and $1$. $f''(-3)=-12<0$ ⇒ local max; $f''(1)=12>0$ ⇒ local min.",
        },
      },
      {
        id: 'sdt4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Tool** 🔽

For each situation, choose the better test.`,
        exercise: {
          dropdowns: [
            { label: "$f''(c)$ is easy to compute and equals $5$:", options: ["Second Derivative Test", "First Derivative Test"] },
            { label: "$f$ has a corner (no $f''$) at $c$:", options: ["First Derivative Test", "Second Derivative Test"] },
            { label: "You computed $f''(c)=0$:", options: ["First Derivative Test", "Second Derivative Test"] },
          ],
          correctAnswers: ["Second Derivative Test", "First Derivative Test", "First Derivative Test"],
          hint1: "A clean nonzero $f''$ value is exactly when the Second Derivative Test is fastest.",
          hint2: "No second derivative ⇒ the Second Derivative Test cannot run; use the First.",
          hint3: "When $f''(c)=0$ the Second Derivative Test is inconclusive, so fall back to the First.",
          explanation: "Nonzero easy $f''$ ⇒ Second Derivative Test. Corner/no $f''$ ⇒ First. $f''(c)=0$ ⇒ First (the Second is inconclusive).",
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'second-derivative-test',
    sections: [
      {
        id: 'sdt5-intro',
        type: 'text' as const,
        content: `# 🥣 The Second Derivative Test

**Part 5 of 7 — The Inconclusive Case**

---

> 🔑 **When $f''(c)=0$:** The Second Derivative Test goes silent. A zero second derivative is *consistent* with a max, a min, **or** neither — so you must investigate further. This part shows you the three possibilities and how to settle them.`,
      },
      {
        id: 'sdt5-three',
        type: 'text' as const,
        content: `## Three Functions, Same $f''(0)=0$

All three of these have $f'(0)=0$ **and** $f''(0)=0$ — yet they behave completely differently at $x=0$:

| Function | $f''$ | At $x=0$ |
|:---:|:---:|:---:|
| $f(x)=x^4$ | $12x^2$ | local **minimum** |
| $f(x)=-x^4$ | $-12x^2$ | local **maximum** |
| $f(x)=x^3$ | $6x$ | **neither** (inflection) |

This is the whole reason the test is "inconclusive" when $f''(c)=0$: the second derivative being zero simply doesn't carry enough information.

> ⚠️ Never write "since $f''(c)=0$, it's an inflection point." That's a frequent AP error. $f''(c)=0$ alone means **inconclusive**, *not* inflection.`,
      },
      {
        id: 'sdt5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: "At a critical point, $f'(c)=0$ and $f''(c)=0$. What is the correct conclusion?",
              options: ["The test is inconclusive; use the First Derivative Test", "It is definitely an inflection point", "It is definitely a minimum", "It cannot be a critical point"],
              correctAnswer: 0,
              explanation: "$f''(c)=0$ makes the Second Derivative Test inconclusive. You cannot conclude max, min, or inflection without further work — use the First Derivative Test.",
            },
            {
              question: "For $f(x)=-x^4$, what happens at $x=0$ (where $f'(0)=0$ and $f''(0)=0$)?",
              options: ["Local maximum", "Local minimum", "Inflection point with no extremum", "Endpoint extremum"],
              correctAnswer: 0,
              explanation: "$f'(x)=-4x^3$ is positive for $x<0$ and negative for $x>0$ ($+$ then $-$), so $f$ rises then falls — a local maximum at $x=0$.",
            },
          ],
        },
      },
      {
        id: 'sdt5-recover',
        type: 'text' as const,
        content: `## How to Recover: the First Derivative Test

When $f''(c)=0$, examine the **sign of $f'$** just to the left and right of $c$.

### Example: $f(x) = x^4$ at $x=0$

$f'(x) = 4x^3$. Test points:

| Interval | $f'(x)=4x^3$ | $f$ is… |
|:---:|:---:|:---:|
| $x<0$ (use $-1$) | $-4 < 0$ | decreasing |
| $x>0$ (use $+1$) | $+4 > 0$ | increasing |

$f'$ changes from **negative to positive**: the function falls then rises, so $x=0$ is a local **minimum**. ✓

> 💡 **Sign-change rules (First Derivative Test):** $-$ then $+$ ⇒ local min; $+$ then $-$ ⇒ local max; **no change** ⇒ neither.`,
      },
      {
        id: 'sdt5-drill',
        type: 'input-boxes' as const,
        content: `**Resolve the Inconclusive Case** 🧮

The Second Derivative Test gives $f''(0)=0$ for each of these. Use the **sign of $f'$** to classify $x=0$. Enter **1** for local minimum, **2** for local maximum, or **3** for neither.

**1)** $f(x) = x^4$ at $x=0$.
**2)** $f(x) = -x^4$ at $x=0$.
**3)** $f(x) = x^3$ at $x=0$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '2', '3'],
          hint1: "$f'(x)=4x^3$ goes $-$ then $+$ across $0$ ⇒ minimum ⇒ enter 1.",
          hint2: "$f'(x)=-4x^3$ goes $+$ then $-$ ⇒ maximum ⇒ enter 2.",
          hint3: "$f'(x)=3x^2 \\ge 0$ on both sides (no sign change) ⇒ neither ⇒ enter 3.",
          explanation: "$x^4$: $f'$ is $-\\to+$ ⇒ min (1). $-x^4$: $f'$ is $+\\to-$ ⇒ max (2). $x^3$: $f'=3x^2\\ge0$, no change ⇒ neither (3).",
        },
      },
      {
        id: 'sdt5-dropdown',
        type: 'dropdown-select' as const,
        content: `**First Derivative Test Outcomes** 🔽

Given how $f'$ behaves across $x=c$, choose the result.`,
        exercise: {
          dropdowns: [
            { label: "$f'$ goes $-$ then $+$:", options: ["local minimum", "local maximum", "neither"] },
            { label: "$f'$ goes $+$ then $-$:", options: ["local maximum", "local minimum", "neither"] },
            { label: "$f'$ stays $+$ on both sides:", options: ["neither", "local maximum", "local minimum"] },
          ],
          correctAnswers: ["local minimum", "local maximum", "neither"],
          hint1: "Falling then rising ($-$ then $+$) carves out a valley — a minimum.",
          hint2: "Rising then falling ($+$ then $-$) makes a peak — a maximum.",
          hint3: "If $f'$ keeps the same sign, $f$ keeps moving the same direction — no extremum.",
          explanation: "$-\\to+$ ⇒ local min. $+\\to-$ ⇒ local max. No sign change ⇒ neither (just a flat spot the curve passes through).",
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'second-derivative-test',
    sections: [
      {
        id: 'sdt6-intro',
        type: 'text' as const,
        content: `# 🥣 The Second Derivative Test

**Part 6 of 7 — Applications**

---

> 🔑 **Where it pays off:** The Second Derivative Test is the quickest way to confirm a max or min in **optimization** problems, and the second derivative is exactly **acceleration** in motion problems. This part puts the test to work.`,
      },
      {
        id: 'sdt6-optimize',
        type: 'text' as const,
        content: `## Application 1 — Optimization

In an optimization problem you build a function, find where $f'=0$, then use the Second Derivative Test to **confirm** you found the max (or min) you wanted.

### Example: Maximize revenue $R(x) = x(100 - x)$

**Step 1 — Expand and differentiate.**
$$R(x) = 100x - x^2, \\qquad R'(x) = 100 - 2x$$

**Step 2 — Critical number.**
$$100 - 2x = 0 \\;\\Rightarrow\\; x = 50$$

**Step 3 — Confirm with the Second Derivative Test.**
$$R''(x) = -2 < 0 \\;\\Rightarrow\\; \\text{concave down} \\Rightarrow \\text{maximum}$$

> ✅ Revenue is **maximized at $x=50$**, giving $R(50) = 50 \\cdot 50 = 2500$. Because $R''<0$ *everywhere*, this is also the global maximum.`,
      },
      {
        id: 'sdt6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: "In an optimization problem you find $f'(c)=0$ and compute $f''(c) = -7$. This confirms $x=c$ gives a:",
              options: ["local (and here, concave-down) maximum", "local minimum", "an inflection point", "a value you cannot classify"],
              correctAnswer: 0,
              explanation: "$f''(c)=-7<0$ means concave down at the critical point — a maximum. This is the standard way to confirm an optimization answer.",
            },
            {
              question: "For position $s(t)$, the second derivative $s''(t)$ represents:",
              options: ["acceleration", "velocity", "position", "distance traveled"],
              correctAnswer: 0,
              explanation: "Velocity is $s'(t)$ and acceleration is $s''(t)$ — the rate of change of velocity.",
            },
          ],
        },
      },
      {
        id: 'sdt6-motion',
        type: 'text' as const,
        content: `## Application 2 — Motion (Acceleration)

For a position function $s(t)$:
- velocity is $v(t) = s'(t)$,
- **acceleration is $a(t) = s''(t)$** — the second derivative.

### Example: $s(t) = t^3 - 6t^2 + 9t$

$$v(t) = s'(t) = 3t^2 - 12t + 9, \\qquad a(t) = s''(t) = 6t - 12$$

The object is at rest when $v(t)=0$: $\\;3(t-1)(t-3)=0 \\Rightarrow t=1,\\,3$. These are the critical numbers of the **position** $s$, so we classify them with the sign of $a(t)=s''(t)$.

| $t$ | $a(t)=s''(t)=6t-12$ | Position $s$ is… |
|:---:|:---:|:---:|
| $1$ | $-6 < 0$ | concave down → local **max** of position |
| $3$ | $+6 > 0$ | concave up → local **min** of position |

> 💡 The same machinery — sign of the second derivative at a critical point — classifies a max/min of *position* **and** is exactly the *acceleration* of a moving object.`,
      },
      {
        id: 'sdt6-drill',
        type: 'input-boxes' as const,
        content: `**Optimization Check** 🧮

For $f(x) = 2x^3 - 3x^2 - 12x + 5$ (so $f'(x)=6x^2-6x-12$ and $f''(x)=12x-6$):

**1)** Smaller critical number: $x = \\,?$  *(Solve $6x^2-6x-12=0$.)*
**2)** $f''$ at that smaller critical number $= \\,?$
**3)** $f''$ at the larger critical number ($x=2$) $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1', '-18', '18'],
          hint1: "$6x^2-6x-12=6(x^2-x-2)=6(x-2)(x+1)=0 \\Rightarrow x=-1$ or $x=2$. Smaller is $-1$.",
          hint2: "$f''(x)=12x-6$, so $f''(-1)=-18$ (negative ⇒ local max).",
          hint3: "$f''(2)=18$ (positive ⇒ local min).",
          explanation: "Critical numbers $-1$ and $2$. $f''(-1)=-18<0$ ⇒ local max; $f''(2)=18>0$ ⇒ local min.",
        },
      },
      {
        id: 'sdt6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Concavity Reasoning in Context** 🔽`,
        exercise: {
          dropdowns: [
            { label: "A profit function has $P''(q) < 0$ at its critical quantity. That critical quantity is a:", options: ["profit maximum", "profit minimum", "break-even point"] },
            { label: "If $a(t) = s''(t) > 0$ while $v(t) = 0$, the object is at a:", options: ["local minimum of position", "local maximum of position", "constant position"] },
            { label: "For $R(x)=x(100-x)$, since $R''(x)=-2$, the curve is:", options: ["concave down everywhere", "concave up everywhere", "sometimes up, sometimes down"] },
          ],
          correctAnswers: ["profit maximum", "local minimum of position", "concave down everywhere"],
          hint1: "Concave down ($P''<0$) at a critical point means a maximum.",
          hint2: "Velocity zero with positive acceleration (concave up position) is the bottom of a dip — a position minimum.",
          hint3: "$R''=-2$ is negative for every $x$, so the parabola is concave down everywhere.",
          explanation: "$P''<0$ ⇒ max. $v=0,\\ a>0$ ⇒ position local min. $R''=-2<0$ for all $x$ ⇒ concave down everywhere (single global max).",
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'second-derivative-test',
    sections: [
      {
        id: 'sdt7-intro',
        type: 'text' as const,
        content: `# 🥣 The Second Derivative Test

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) read concavity from $f''$, (2) find inflection points, (3) apply the Second Derivative Test, (4) choose between it and the First Derivative Test, (5) handle the inconclusive case, and (6) use it in applications. Time to put it together.`,
      },
      {
        id: 'sdt7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Concavity at $x=c$ | sign of $f''(c)$: $+$ up $\\smile$, $-$ down $\\frown$ |
| Inflection point | $f''$ **changes sign** (not just $f''=0$) |
| Classify critical pt ($f'=0$) | $f''(c)>0$ ⇒ min; $f''(c)<0$ ⇒ max |
| $f''(c)=0$ | **inconclusive** → First Derivative Test |
| $f''$ undefined | use First Derivative Test |
| Acceleration | $a(t)=s''(t)$ |

> ⚠️ **Top two traps:** (1) Applying the test where $f'(c)\\ne 0$. (2) Calling a point an inflection or extremum just because $f''(c)=0$ — that value alone proves nothing.`,
      },
      {
        id: 'sdt7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: "For $f(x)=x^3-3x+1$, classify the critical point at $x=1$ using the Second Derivative Test.",
              options: ["Local minimum ($f''(1)=6>0$)", "Local maximum ($f''(1)=-6<0$)", "Inflection point", "Inconclusive"],
              correctAnswer: 0,
              explanation: "$f'(x)=3x^2-3=0 \\Rightarrow x=\\pm1$. $f''(x)=6x$, so $f''(1)=6>0$ ⇒ concave up ⇒ local minimum.",
            },
            {
              question: "A function satisfies $f'(2)=0$ and $f''(2)=0$. Which statement is correct?",
              options: ["The Second Derivative Test is inconclusive at $x=2$", "There must be a local minimum at $x=2$", "There must be an inflection point at $x=2$", "$x=2$ cannot be a critical point"],
              correctAnswer: 0,
              explanation: "With $f''(2)=0$, the test gives no information — it is inconclusive. You would need the First Derivative Test (or sign analysis of $f''$) to decide.",
            },
          ],
        },
      },
      {
        id: 'sdt7-mixed2',
        type: 'input-boxes' as const,
        content: `**Mixed Numeric Practice** 🧮

For $f(x) = x^4 - 2x^2$ (so $f'(x)=4x^3-4x$ and $f''(x)=12x^2-4$):

**1)** $f''$ at the critical number $x=0$ $= \\,?$
**2)** $f''$ at the critical number $x=1$ $= \\,?$
**3)** Using your answers, is $x=1$ a local min or max? Enter **1** for min, **2** for max.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-4', '8', '1'],
          hint1: "$f''(x)=12x^2-4$, so $f''(0)=-4$ (concave down at $x=0$ ⇒ local max there).",
          hint2: "$f''(1)=12-4=8$ (positive).",
          hint3: "$f''(1)=8>0$ means concave up ⇒ local minimum ⇒ enter 1.",
          explanation: "Critical numbers are $0,\\pm1$. $f''(0)=-4<0$ ⇒ local max; $f''(1)=8>0$ ⇒ local min, so enter 1.",
        },
      },
      {
        id: 'sdt7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: "At a critical point with $f'(c)=0$, you find $f''(c)=3$. The point is a:",
              options: ["local minimum", "local maximum", "inflection point", "the test fails"],
              correctAnswer: 0,
              explanation: "$f''(c)=3>0$ ⇒ concave up at a horizontal tangent ⇒ local minimum.",
            },
            {
              question: "Which is the correct definition of an inflection point?",
              options: ["A point where the concavity (sign of $f''$) changes", "Any point where $f''=0$", "A point where $f'=0$", "The highest point on the graph"],
              correctAnswer: 0,
              explanation: "An inflection point is where concavity changes — i.e. $f''$ switches sign. $f''=0$ is only a candidate, not a guarantee.",
            },
            {
              question: "For $f(x)=x^3-3x^2+1$, the Second Derivative Test gives which classification at $x=0$ and $x=2$?",
              options: ["Local max at $x=0$, local min at $x=2$", "Local min at $x=0$, local max at $x=2$", "Inflection points at both", "Inconclusive at both"],
              correctAnswer: 0,
              explanation: "$f'(x)=3x^2-6x=3x(x-2)$ gives critical numbers $0,2$. $f''(x)=6x-6$: $f''(0)=-6<0$ ⇒ local max; $f''(2)=6>0$ ⇒ local min.",
            },
          ],
        },
      },
    ],
  },
]
