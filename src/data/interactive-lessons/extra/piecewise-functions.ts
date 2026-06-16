import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Piecewise Functions (AP Precalculus).
 * Registry key: 'piecewise-functions' (matches the DB Topic.slug).
 * 7 parts, gold-standard structure: anatomy/notation → evaluation → graphing →
 * continuity → domain/range → absolute-value & step functions → modeling + exit
 * quiz. Each part teaches with text and alternates interactive checks
 * (multiple-choice + input-boxes + dropdown). LaTeX uses doubled backslashes
 * (template-literal strings). File lives in extra/, so the registry import is
 * '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'piecewise-functions',
    sections: [
      {
        id: 'pw1-intro',
        type: 'text' as const,
        content: `# 🧩 Piecewise Functions

**Part 1 of 7 — Anatomy & Notation**

---

### Topics in This Part

| Section |
|---------|
| What Is a Piecewise Function? |
| Reading the Brace Notation |
| Which Rule Applies Where |

> 🔑 **Key Concept:** A **piecewise function** is one function defined by *different rules on different parts of its domain*. Think of it as a recipe with conditions: "if the input is over here, use *this* rule; if it's over there, use *that* rule."`,
      },
      {
        id: 'pw1-what',
        type: 'text' as const,
        content: `## What Is a Piecewise Function?

Most functions you've met use **one rule** for every input — like $f(x) = 2x + 1$. A **piecewise** function switches rules depending on where $x$ lands.

A classic real-world example is a parking garage:

| Input ($x$ = hours parked) | Rule (cost) |
|----------------------------|-------------|
| First 2 hours | flat \\$5 |
| After 2 hours | \\$5 plus \\$3 per extra hour |

The *cost* is still a function of *hours* — every input has exactly one output — but the formula you use **depends on the input**. That's the whole idea.

We collect the rules under a single **brace**:

$$
f(x) = \\begin{cases}
2x + 1 & x < 0 \\\\
x^2 & x \\ge 0
\\end{cases}
$$

> 💡 The function is still *one* function. The brace is just shorthand for "here are all my rules and the conditions that select them."`,
      },
      {
        id: 'pw1-notation',
        type: 'text' as const,
        content: `## Reading the Brace Notation

Every row of a piecewise definition has **two parts**:

$$\\underbrace{2x + 1}_{\\text{the rule}} \\qquad \\underbrace{x < 0}_{\\text{the condition (a piece of the domain)}}$$

To use the function, you ask one question: **which condition does my input satisfy?** That tells you which rule to apply.

For

$$
f(x) = \\begin{cases}
2x + 1 & x < 0 \\\\
x^2 & x \\ge 0
\\end{cases}
$$

- An input like $x = -3$ satisfies $x < 0$, so use the **top** rule: $2(-3)+1$.
- An input like $x = 4$ satisfies $x \\ge 0$, so use the **bottom** rule: $4^2$.

> ⚠️ The conditions must **not overlap** — every input belongs to exactly one piece. If two conditions claimed the same $x$, you'd get two outputs, and it wouldn't be a function. Notice $x<0$ and $x\\ge 0$ together cover *all* real numbers with no overlap.`,
      },
      {
        id: 'pw1-which-rule',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = \\begin{cases} 2x+1 & x<0 \\\\ x^2 & x\\ge 0 \\end{cases}$, which rule applies to $x = -3$?',
              options: ['The top rule, $2x+1$', 'The bottom rule, $x^2$', 'Both rules', 'Neither rule'],
              correctAnswer: 0,
              explanation: 'Since $-3 < 0$, the input satisfies the top condition $x<0$, so you use the top rule $2x+1$.',
            },
            {
              question: 'Why must the conditions of a piecewise function cover every input *without overlapping*?',
              options: [
                'So each input has exactly one output (the function rule)',
                'To make the graph look smooth',
                'So the function is always increasing',
                'It is just a style preference; overlap is allowed',
              ],
              correctAnswer: 0,
              explanation: 'A function assigns exactly one output to each input. Overlapping conditions could give two outputs for one input, which would violate the definition of a function.',
            },
          ],
        },
      },
      {
        id: 'pw1-boundary-mc',
        type: 'multiple-choice' as const,
        content: `**Mind the Boundary** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = \\begin{cases} 2x+1 & x<0 \\\\ x^2 & x\\ge 0 \\end{cases}$, which rule applies at exactly $x = 0$?',
              options: ['The bottom rule, $x^2$ (because $0 \\ge 0$)', 'The top rule, $2x+1$ (because $0 < 0$)', 'Both, you average them', 'The function is undefined at $0$'],
              correctAnswer: 0,
              explanation: 'The condition $x \\ge 0$ uses $\\ge$, so it includes $x=0$. The condition $x<0$ is strict and excludes $0$. So $x=0$ belongs to the bottom piece: $f(0)=0^2=0$.',
            },
          ],
        },
      },
      {
        id: 'pw1-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Input to Rule** 🔽

For $f(x) = \\begin{cases} 2x+1 & x<0 \\\\ x^2 & x\\ge 0 \\end{cases}$, pick the rule each input triggers.`,
        exercise: {
          dropdowns: [
            { label: 'Input $x = 4$ uses:', options: ['$2x+1$ (top)', '$x^2$ (bottom)'] },
            { label: 'Input $x = -3$ uses:', options: ['$2x+1$ (top)', '$x^2$ (bottom)'] },
            { label: 'Input $x = 0$ uses:', options: ['$2x+1$ (top)', '$x^2$ (bottom)'] },
          ],
          correctAnswers: ['$x^2$ (bottom)', '$2x+1$ (top)', '$x^2$ (bottom)'],
          hint1: 'Is $4 \\ge 0$? Yes → bottom rule $x^2$.',
          hint2: 'Is $-3 < 0$? Yes → top rule $2x+1$.',
          hint3: 'At $x=0$: the bottom condition $x\\ge 0$ includes $0$, so it wins over the strict $x<0$.',
          explanation: '$x=4$ → bottom ($4\\ge 0$). $x=-3$ → top ($-3<0$). $x=0$ → bottom ($0\\ge 0$, since $\\ge$ includes the boundary).',
        },
      },
      {
        id: 'pw1-recap',
        type: 'text' as const,
        content: `## Recap

You now know how to *read* a piecewise function:

1. Each row is a **rule** paired with a **condition**.
2. To evaluate, find the **one** condition your input satisfies, then apply that row's rule.
3. The conditions tile the domain — **no gaps, no overlaps** — and the boundary value belongs to whichever piece uses $\\le$ or $\\ge$ (the one with the "equals" line).

In Part 2 we put this into action: plugging numbers in carefully, especially right at the boundaries where mistakes love to hide.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'piecewise-functions',
    sections: [
      {
        id: 'pw2-intro',
        type: 'text' as const,
        content: `# 🧩 Piecewise Functions

**Part 2 of 7 — Evaluating Piecewise Functions**

---

> 🔑 **The One-Step Method:** To find $f(a)$, ignore the rules at first. Ask only: *which condition does $a$ satisfy?* Then plug $a$ into that — and only that — rule.`,
      },
      {
        id: 'pw2-method',
        type: 'text' as const,
        content: `## Evaluating, Step by Step

Use this function throughout:

$$
f(x) = \\begin{cases}
-x - 2 & x < -1 \\\\
x^2 & -1 \\le x < 2 \\\\
6 & x \\ge 2
\\end{cases}
$$

### Find $f(-4)$
**Step 1 — pick the piece.** Is $-4 < -1$? Yes. Use the top rule $-x-2$.
**Step 2 — substitute.** $f(-4) = -(-4) - 2 = 4 - 2 = 2$.

### Find $f(1)$
**Step 1 — pick the piece.** Is $-1 \\le 1 < 2$? Yes. Use the middle rule $x^2$.
**Step 2 — substitute.** $f(1) = 1^2 = 1$.

### Find $f(5)$
**Step 1 — pick the piece.** Is $5 \\ge 2$? Yes. Use the bottom rule, the constant $6$.
**Step 2 — substitute.** $f(5) = 6$.

> 💡 The bottom piece is a **constant**: $f(x)=6$ for *every* $x \\ge 2$. The input doesn't appear in the rule, so the output never changes there.`,
      },
      {
        id: 'pw2-boundary',
        type: 'text' as const,
        content: `## The Boundary Is Where Points Are Lost

The danger zone is the **boundary** between pieces. Check the inequality signs carefully.

For the same $f$, evaluate at the boundary $x = -1$:

$$
f(x) = \\begin{cases}
-x - 2 & x < -1 \\\\
x^2 & -1 \\le x < 2 \\\\
6 & x \\ge 2
\\end{cases}
$$

- Top condition $x < -1$: is $-1 < -1$? **No** (strict).
- Middle condition $-1 \\le x < 2$: is $-1 \\le -1$? **Yes** (the $\\le$ includes $-1$).

So $x=-1$ belongs to the **middle** piece, and $f(-1) = (-1)^2 = 1$.

> ⚠️ Don't grab the first rule whose number "looks close." Read the inequality: $<$ and $>$ **exclude** the endpoint; $\\le$ and $\\ge$ **include** it.`,
      },
      {
        id: 'pw2-eval-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate It** 🧮

Use $f(x) = \\begin{cases} -x - 2 & x < -1 \\\\ x^2 & -1 \\le x < 2 \\\\ 6 & x \\ge 2 \\end{cases}$

**1)** $f(-4) = \\,?$
**2)** $f(0) = \\,?$
**3)** $f(2) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '0', '6'],
          hint1: '$-4 < -1$ → top rule: $-(-4) - 2 = 4 - 2 = 2$.',
          hint2: '$-1 \\le 0 < 2$ → middle rule: $0^2 = 0$.',
          hint3: 'Is $2 \\ge 2$? Yes (the $\\ge$ includes $2$) → bottom rule: the constant $6$.',
          explanation: '1) $f(-4)=2$. 2) $f(0)=0^2=0$. 3) $f(2)=6$ — since $2 \\ge 2$ uses the bottom piece, not the middle ($x<2$ excludes $2$).',
        },
      },
      {
        id: 'pw2-pick-piece',
        type: 'dropdown-select' as const,
        content: `**Which Piece?** 🔽

For $f(x) = \\begin{cases} -x - 2 & x < -1 \\\\ x^2 & -1 \\le x < 2 \\\\ 6 & x \\ge 2 \\end{cases}$, choose the piece each input uses.`,
        exercise: {
          dropdowns: [
            { label: 'Input $x = -1$ uses:', options: ['$-x-2$ (top)', '$x^2$ (middle)', '$6$ (bottom)'] },
            { label: 'Input $x = -2$ uses:', options: ['$-x-2$ (top)', '$x^2$ (middle)', '$6$ (bottom)'] },
            { label: 'Input $x = 3$ uses:', options: ['$-x-2$ (top)', '$x^2$ (middle)', '$6$ (bottom)'] },
          ],
          correctAnswers: ['$x^2$ (middle)', '$-x-2$ (top)', '$6$ (bottom)'],
          hint1: 'At $x=-1$: the middle uses $\\le$, so $-1$ is included there, not in the top ($x<-1$ is strict).',
          hint2: 'At $x=-2$: is $-2 < -1$? Yes, so the top rule applies.',
          hint3: 'At $x=3$: is $3 \\ge 2$? Yes, so the bottom (constant) rule applies.',
          explanation: '$-1$ → middle ($-1\\le -1$). $-2$ → top ($-2<-1$). $3$ → bottom ($3\\ge 2$). Always read the inequality signs at the boundary.',
        },
      },
      {
        id: 'pw2-eval-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $g(x) = \\begin{cases} 3x & x \\le 1 \\\\ x+5 & x > 1 \\end{cases}$, what is $g(1)$?',
              options: ['$3$', '$6$', '$8$', 'undefined'],
              correctAnswer: 0,
              explanation: 'The top condition $x \\le 1$ includes $1$, so use $3x$: $g(1)=3(1)=3$. The bottom piece needs $x>1$ strictly, so it does not apply at $x=1$.',
            },
            {
              question: 'For that same $g$, what is $g(4)$?',
              options: ['$9$', '$12$', '$20$', '$4$'],
              correctAnswer: 0,
              explanation: 'Since $4 > 1$, use the bottom rule $x+5$: $g(4)=4+5=9$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'piecewise-functions',
    sections: [
      {
        id: 'pw3-intro',
        type: 'text' as const,
        content: `# 🧩 Piecewise Functions

**Part 3 of 7 — Graphing & Open/Closed Dots**

---

> 🔑 **The Plan:** Graph each piece as if it were a normal function, but only draw it **over its own interval**. The open and closed dots at the boundaries tell the whole story of what happens at the edges.`,
      },
      {
        id: 'pw3-howto',
        type: 'text' as const,
        content: `## How to Graph a Piecewise Function

For each piece:

1. **Graph the rule** as usual (line, parabola, constant, etc.).
2. **Keep only the part over that piece's interval** — erase everything outside it.
3. **Mark the endpoints:**
   - $\\le$ or $\\ge$ (endpoint **included**) → a **closed (filled) dot** ●
   - $<$ or $>$ (endpoint **excluded**) → an **open (hollow) dot** ○

### The Endpoint Test

At a boundary $x = c$, evaluate the rule on each side at $c$:
- The piece whose condition **includes** $c$ gets the **closed** dot (that's the actual function value).
- The piece whose condition **excludes** $c$ gets an **open** dot.

> 💡 A vertical line at any $x$ should cross your graph **exactly once** (the vertical line test) — that's the visual version of "one output per input."`,
      },
      {
        id: 'pw3-example',
        type: 'text' as const,
        content: `## Worked Example

$$
h(x) = \\begin{cases}
x + 3 & x < 1 \\\\
-2x + 6 & x \\ge 1
\\end{cases}
$$

**Left piece** $y = x+3$, drawn for $x<1$. As $x \\to 1$ from the left, $y \\to 1+3 = 4$. Since $x<1$ **excludes** $1$, put an **open** dot ○ at $(1, 4)$.

**Right piece** $y=-2x+6$, drawn for $x \\ge 1$. At $x=1$, $y = -2(1)+6 = 4$. Since $x\\ge 1$ **includes** $1$, put a **closed** dot ● at $(1, 4)$.

Here both dots land at $(1,4)$ — the open one is "filled in" by the closed one, so the graph has no hole. We'll call that **continuous** in Part 4.

| At $x = 1$ | Left rule $x+3$ | Right rule $-2x+6$ |
|------------|-----------------|--------------------|
| Value | $4$ (open ○) | $4$ (closed ●) |

> ⚠️ Always plug the boundary into **both** rules. If the two values differ, the graph **jumps** there, leaving a visible gap.`,
      },
      {
        id: 'pw3-dots-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A piece is defined by the rule $y = 2x$ on the interval $x > 3$. At the boundary $x = 3$, the endpoint should be drawn as:',
              options: ['An open (hollow) dot ○', 'A closed (filled) dot ●', 'No dot at all', 'A vertical line'],
              correctAnswer: 0,
              explanation: 'The condition is $x > 3$, which is strict and **excludes** $x=3$. An excluded endpoint is drawn as an open dot ○.',
            },
            {
              question: 'For $h(x) = \\begin{cases} x+3 & x<1 \\\\ -2x+6 & x\\ge 1 \\end{cases}$, which endpoint at $x=1$ is the *actual* function value $h(1)$?',
              options: ['The closed dot from $-2x+6$', 'The open dot from $x+3$', 'Neither; $h(1)$ is undefined', 'Both are equally valid'],
              correctAnswer: 0,
              explanation: 'The condition $x\\ge 1$ includes $1$, so $h(1)=-2(1)+6=4$ — the closed dot. The open dot from the left piece is only a limit, not the value.',
            },
          ],
        },
      },
      {
        id: 'pw3-endpoint-drill',
        type: 'input-boxes' as const,
        content: `**Find the Endpoints** 🧮

For $h(x) = \\begin{cases} x+3 & x<1 \\\\ -2x+6 & x\\ge 1 \\end{cases}$, the boundary is $x = 1$.

**1)** Plug $x=1$ into the **left** rule $x+3$: the open dot is at height $y = \\,?$
**2)** Plug $x=1$ into the **right** rule $-2x+6$: the closed dot is at height $y = \\,?$
**3)** The $y$-intercept of the graph is $h(0) = \\,?$  *(use the correct piece)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '4', '3'],
          hint1: 'Left rule at $x=1$: $1 + 3 = 4$ (open dot).',
          hint2: 'Right rule at $x=1$: $-2(1)+6 = 4$ (closed dot).',
          hint3: 'For $x=0$: is $0<1$? Yes, so use the left rule: $0+3=3$.',
          explanation: '1) Open dot at $y=4$. 2) Closed dot at $y=4$. 3) $h(0)=0+3=3$ since $0<1$ uses the top piece. Both boundary heights are $4$, so the closed dot covers the open one — no gap.',
        },
      },
      {
        id: 'pw3-jump-example',
        type: 'text' as const,
        content: `## When the Graph Jumps

Not every piecewise graph connects. Consider:

$$
j(x) = \\begin{cases}
x + 1 & x < 2 \\\\
x - 3 & x \\ge 2
\\end{cases}
$$

At the boundary $x = 2$:
- Left rule: $2 + 1 = 3$ → **open** dot ○ at $(2, 3)$.
- Right rule: $2 - 3 = -1$ → **closed** dot ● at $(2, -1)$.

The two endpoints are at **different heights** ($3$ vs. $-1$), so the graph **jumps** down by $4$ at $x=2$. There's a visible break — a hole at $(2,3)$ and a solid point at $(2,-1)$.

> 💡 A jump is perfectly legal: it's still a function (one output per input — $j(2)=-1$, the closed dot). It just isn't *continuous*, which is exactly the idea of Part 4.`,
      },
      {
        id: 'pw3-jump-dropdown',
        type: 'dropdown-select' as const,
        content: `**Dots at the Jump** 🔽

For $j(x) = \\begin{cases} x+1 & x<2 \\\\ x-3 & x\\ge 2 \\end{cases}$, describe the endpoints at $x=2$.`,
        exercise: {
          dropdowns: [
            { label: 'Left rule $x+1$ at $x=2$ gives height:', options: ['$3$', '$-1$', '$2$', '$1$'] },
            { label: 'That left endpoint is drawn as:', options: ['open ○ (excluded)', 'closed ● (included)'] },
            { label: 'The actual value $j(2)$ is:', options: ['$-1$', '$3$', 'undefined', 'both'] },
          ],
          correctAnswers: ['$3$', 'open ○ (excluded)', '$-1$'],
          hint1: 'Left rule at $x=2$: $2+1=3$.',
          hint2: 'The left condition $x<2$ is strict, so $x=2$ is excluded — an open dot.',
          hint3: 'The condition $x\\ge 2$ includes $2$, so $j(2)=2-3=-1$ (the closed dot).',
          explanation: 'Left rule gives $3$ (open ○, since $x<2$ excludes $2$). The defined value is $j(2)=2-3=-1$ from the $\\ge$ piece (closed ●). Different heights → a jump.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'piecewise-functions',
    sections: [
      {
        id: 'pw4-intro',
        type: 'text' as const,
        content: `# 🧩 Piecewise Functions

**Part 4 of 7 — Continuity at the Boundaries**

---

> 🔑 **The Big Question:** Does the graph connect at the seam between two pieces? A piecewise function is **continuous** at a boundary $x=c$ when the two pieces meet at the same point — no hole, no jump.`,
      },
      {
        id: 'pw4-test',
        type: 'text' as const,
        content: `## The Continuity Test at a Boundary

At a boundary $x = c$, compute three things:

1. The value the **left** piece approaches as $x \\to c$ (plug $c$ into the left rule).
2. The value the **right** piece approaches as $x \\to c$ (plug $c$ into the right rule).
3. The actual value $f(c)$ (use the piece whose condition includes $c$).

The function is **continuous at $c$** exactly when **all three are equal**:

$$\\text{(left value)} = \\text{(right value)} = f(c)$$

If the left and right values **differ**, you get a **jump discontinuity**. If they agree with each other but the defined value $f(c)$ sits somewhere else, you get a **removable discontinuity** (a hole).

> 💡 Shortcut for "two-rule" boundaries: just set the two rules **equal at $c$**. If the left rule and right rule give the *same number* at $x=c$, the pieces connect.`,
      },
      {
        id: 'pw4-worked',
        type: 'text' as const,
        content: `## Worked Example: Is It Continuous?

$$
f(x) = \\begin{cases}
x^2 & x \\le 2 \\\\
3x - 2 & x > 2
\\end{cases}
$$

**At the boundary $x = 2$:**
- Left rule $x^2$ at $2$: $2^2 = 4$.
- Right rule $3x-2$ at $2$: $3(2) - 2 = 4$.
- Defined value: $x \\le 2$ includes $2$, so $f(2) = 2^2 = 4$.

All three equal $4$, so $f$ is **continuous at $x=2$**. The parabola hands off smoothly to the line. ✓

### Now change one number

$$
g(x) = \\begin{cases}
x^2 & x \\le 2 \\\\
3x - 5 & x > 2
\\end{cases}
$$

- Left at $2$: $2^2 = 4$.
- Right at $2$: $3(2) - 5 = 1$.

Now $4 \\ne 1$, so $g$ has a **jump discontinuity** at $x=2$ — the graph leaps from $4$ down to $1$.

> ⚠️ "Continuous" is about the boundary values matching, **not** about whether the pieces have the same shape. A parabola and a line can absolutely meet continuously.`,
      },
      {
        id: 'pw4-cont-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A piecewise function is continuous at a boundary $x=c$ when:',
              options: [
                'The two pieces give the same value at $x=c$',
                'Both pieces are lines',
                'The left piece is always below the right piece',
                'The domain has no gaps',
              ],
              correctAnswer: 0,
              explanation: 'Continuity at the seam means the pieces meet: the left value, the right value, and $f(c)$ all agree. The shapes of the pieces do not matter.',
            },
            {
              question: 'For $f(x) = \\begin{cases} x^2 & x\\le 2 \\\\ 3x-5 & x>2 \\end{cases}$, what happens at $x=2$?',
              options: [
                'A jump discontinuity (values $4$ and $1$ differ)',
                'It is continuous (both give $4$)',
                'A removable hole at $(2,4)$',
                'The function is undefined at $2$',
              ],
              correctAnswer: 0,
              explanation: 'Left: $2^2=4$. Right: $3(2)-5=1$. Since $4\\ne 1$, the graph jumps — a jump discontinuity. (The defined value is $f(2)=4$ from the $\\le$ piece.)',
            },
          ],
        },
      },
      {
        id: 'pw4-solve-k',
        type: 'text' as const,
        content: `## Solving for a Value That Makes It Continuous

A favorite AP-style question: *find the constant that forces continuity.*

$$
f(x) = \\begin{cases}
2x + k & x < 3 \\\\
x^2 & x \\ge 3
\\end{cases}
$$

For continuity at $x=3$, set the two rules **equal at $3$**:

$$2(3) + k = 3^2$$
$$6 + k = 9$$
$$k = 3$$

So $k = 3$ makes the pieces meet at $(3, 9)$, and the graph connects with no jump.

> ✅ **Check:** With $k=3$, left value $=2(3)+3 = 9$ and right value $=3^2=9$. Equal. ✓`,
      },
      {
        id: 'pw4-k-drill',
        type: 'input-boxes' as const,
        content: `**Make It Continuous** 🧮

Find the constant that makes each function continuous at its boundary.

**1)** $f(x) = \\begin{cases} x + k & x < 4 \\\\ 3x & x \\ge 4 \\end{cases}$ continuous at $x=4$: $k = \\,?$
**2)** $g(x) = \\begin{cases} 5 & x \\le 1 \\\\ ax + 2 & x > 1 \\end{cases}$ continuous at $x=1$: $a = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['8', '3'],
          hint1: 'Set the rules equal at $x=4$: $4 + k = 3(4) = 12$, so $k = 8$.',
          hint2: 'Set the rules equal at $x=1$: $5 = a(1)+2 = a+2$, so $a = 3$.',
          hint3: 'The trick both times: at the boundary, force "left rule value = right rule value", then solve the one-variable equation.',
          explanation: '1) $4+k=12 \\Rightarrow k=8$. 2) $5 = a+2 \\Rightarrow a=3$. In each case we force the two boundary values to match.',
        },
      },
      {
        id: 'pw4-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Continuous or Not?** 🔽

For each pair of pieces, plug the boundary into both rules and decide.`,
        exercise: {
          dropdowns: [
            { label: '$\\begin{cases} x+4 & x<2 \\\\ 3x & x\\ge 2 \\end{cases}$ at $x=2$ is:', options: ['continuous', 'a jump'] },
            { label: '$\\begin{cases} x^2 & x\\le 1 \\\\ 2x & x>1 \\end{cases}$ at $x=1$ is:', options: ['a jump', 'continuous'] },
            { label: '$\\begin{cases} 4 & x<0 \\\\ x+1 & x\\ge 0 \\end{cases}$ at $x=0$ is:', options: ['a jump', 'continuous'] },
          ],
          correctAnswers: ['continuous', 'a jump', 'a jump'],
          hint1: 'First: left $2+4=6$, right $3(2)=6$. Equal → continuous.',
          hint2: 'Second: left $1^2=1$, right $2(1)=2$. $1\\ne 2$ → jump.',
          hint3: 'Third: left approaches $4$, right gives $0+1=1$. $4\\ne 1$ → jump.',
          explanation: 'A: $6=6$, continuous. B: $1\\ne 2$, jump. C: $4\\ne 1$, jump. Always compare the two boundary values.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'piecewise-functions',
    sections: [
      {
        id: 'pw5-intro',
        type: 'text' as const,
        content: `# 🧩 Piecewise Functions

**Part 5 of 7 — Domain & Range**

---

> 🔑 **Domain = all valid inputs; Range = all possible outputs.** For piecewise functions, you find each by examining the pieces together, paying special attention to the boundaries and which dots are open vs. closed.`,
      },
      {
        id: 'pw5-domain',
        type: 'text' as const,
        content: `## Finding the Domain

The **domain** is every $x$ for which *some* piece is defined. Just take the **union** of all the condition-intervals.

$$
f(x) = \\begin{cases}
\\sqrt{x} & 0 \\le x \\le 4 \\\\
x - 2 & x > 4
\\end{cases}
$$

- Piece 1 covers $[0, 4]$.
- Piece 2 covers $(4, \\infty)$.

Union: $[0, \\infty)$. There's no rule for $x<0$, so negatives are **not** in the domain.

> 💡 If the conditions leave a gap (say nothing is defined on $1<x<2$), that gap is **excluded** from the domain. Read the conditions as the menu of allowed inputs.`,
      },
      {
        id: 'pw5-range',
        type: 'text' as const,
        content: `## Finding the Range

The **range** is every $y$ the graph actually reaches. Find the output set of **each piece over its own interval**, then take the union.

$$
f(x) = \\begin{cases}
x^2 & -2 \\le x < 0 \\\\
x + 1 & 0 \\le x \\le 3
\\end{cases}
$$

**Piece 1, $x^2$ on $[-2, 0)$:** As $x$ runs from $-2$ up to (but not including) $0$, $x^2$ runs from $(-2)^2=4$ down toward $0^2=0$. At $x=-2$ (included) we get $4$; as $x\\to 0$ (excluded) we approach $0$ but don't reach it. Outputs: $(0, 4]$.

**Piece 2, $x+1$ on $[0, 3]$:** Linear and increasing, from $0+1=1$ to $3+1=4$. Outputs: $[1, 4]$.

**Union:** $(0,4] \\cup [1,4] = (0, 4]$. So the **range is $(0, 4]$**.

> ⚠️ The range comes from the **outputs**, not the inputs. Always plug each interval's endpoints into that piece's rule, and watch which $y$-values are actually attained.`,
      },
      {
        id: 'pw5-domain-dropdown',
        type: 'dropdown-select' as const,
        content: `**Domain & Range** 🔽

Use $f(x) = \\begin{cases} \\sqrt{x} & 0 \\le x \\le 4 \\\\ x - 2 & x > 4 \\end{cases}$`,
        exercise: {
          dropdowns: [
            { label: 'The domain of $f$ is:', options: ['$[0, \\infty)$', '$(-\\infty, \\infty)$', '$[0, 4]$', '$(4, \\infty)$'] },
            { label: 'Is $x = -1$ in the domain?', options: ['No', 'Yes'] },
            { label: 'Which piece gives $f(9)$?', options: ['$x-2$', '$\\sqrt{x}$', 'neither'] },
          ],
          correctAnswers: ['$[0, \\infty)$', 'No', '$x-2$'],
          hint1: 'Union the intervals: $[0,4]\\cup(4,\\infty) = [0,\\infty)$.',
          hint2: 'No piece is defined for $x<0$, so $-1$ is excluded.',
          hint3: '$9 > 4$, so use the bottom rule $x-2$: $f(9)=7$.',
          explanation: 'Domain $=[0,\\infty)$ (union of the two intervals). $-1$ is not in any interval, so it is excluded. $f(9)$ uses $x-2$ since $9>4$.',
        },
      },
      {
        id: 'pw5-range-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = \\begin{cases} 4 & x < 0 \\\\ x+4 & 0 \\le x \\le 2 \\end{cases}$, what is the range?',
              options: ['$\\{4\\} \\cup [4, 6] = [4, 6]$', '$[0, 6]$', '$(-\\infty, 6]$', '$\\{4, 6\\}$'],
              correctAnswer: 0,
              explanation: 'The top piece outputs only $4$. The bottom piece $x+4$ on $[0,2]$ outputs $[4,6]$. Union: $\\{4\\}\\cup[4,6]=[4,6]$.',
            },
            {
              question: 'To find the *domain* of a piecewise function, you should:',
              options: [
                'Take the union of all the condition-intervals (the inputs each piece allows)',
                'Take the union of all the output values',
                'Use only the first piece',
                'Always answer "all real numbers"',
              ],
              correctAnswer: 0,
              explanation: 'The domain is the set of allowed inputs — the union of the intervals named in the conditions. Output values give the range, not the domain.',
            },
          ],
        },
      },
      {
        id: 'pw5-range-drill',
        type: 'input-boxes' as const,
        content: `**Range Endpoints** 🧮

For the piece $x+1$ defined on $0 \\le x \\le 3$:

**1)** Smallest output (at $x=0$): $y = \\,?$
**2)** Largest output (at $x=3$): $y = \\,?$

For the piece $x^2$ defined on $-2 \\le x < 0$:

**3)** Largest output (at $x=-2$): $y = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '4', '4'],
          hint1: 'At $x=0$: $0+1=1$. The line is increasing, so this is the smallest.',
          hint2: 'At $x=3$: $3+1=4$. This is the largest output of that piece.',
          hint3: 'At $x=-2$: $(-2)^2=4$. As $x\\to 0$, $x^2\\to 0$, so $x^2$ ranges over $(0,4]$ — largest is $4$.',
          explanation: '1) $0+1=1$. 2) $3+1=4$. 3) $(-2)^2=4$. The line $x+1$ on $[0,3]$ outputs $[1,4]$; the parabola $x^2$ on $[-2,0)$ outputs $(0,4]$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'piecewise-functions',
    sections: [
      {
        id: 'pw6-intro',
        type: 'text' as const,
        content: `# 🧩 Piecewise Functions

**Part 6 of 7 — Absolute Value & Step Functions**

---

> 🔑 **Hidden Pieces:** Two famous functions are secretly piecewise — the **absolute value** function and the **greatest-integer (step)** function. Recognizing them as piecewise unlocks how to evaluate and graph them.`,
      },
      {
        id: 'pw6-absval',
        type: 'text' as const,
        content: `## Absolute Value Is Piecewise

The absolute value $|x|$ keeps positives the same and flips negatives positive. As a piecewise rule:

$$
|x| = \\begin{cases}
-x & x < 0 \\\\
x & x \\ge 0
\\end{cases}
$$

For a negative input like $-5$, the rule $-x$ gives $-(-5)=5$. That's why $|{-5}|=5$.

### A shifted absolute value

$$
f(x) = |x - 3| = \\begin{cases}
-(x-3) & x < 3 \\\\
x - 3 & x \\ge 3
\\end{cases}
=
\\begin{cases}
3 - x & x < 3 \\\\
x - 3 & x \\ge 3
\\end{cases}
$$

The "corner" (vertex) sits where the inside equals zero: $x - 3 = 0 \\Rightarrow x = 3$. The graph is a **V** with its point at $(3, 0)$.

> 💡 To split any $|{\\text{stuff}}|$ into pieces, find where *stuff* $=0$. Left of that, the inside is negative (so you negate it); right of that, it's positive (so you keep it).`,
      },
      {
        id: 'pw6-absval-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Written as a piecewise function, $|x-3|$ equals which rule when $x < 3$?',
              options: ['$3 - x$', '$x - 3$', '$x + 3$', '$3 + x$'],
              correctAnswer: 0,
              explanation: 'When $x<3$, the inside $x-3$ is negative, so $|x-3| = -(x-3) = 3-x$. (Check $x=0$: $|0-3|=3$ and $3-0=3$. ✓)',
            },
            {
              question: 'The vertex (corner) of $y = |x + 2|$ is at:',
              options: ['$(-2, 0)$', '$(2, 0)$', '$(0, 2)$', '$(0, -2)$'],
              correctAnswer: 0,
              explanation: 'The corner is where the inside equals zero: $x+2=0 \\Rightarrow x=-2$, giving $y=0$. So the vertex is $(-2,0)$.',
            },
          ],
        },
      },
      {
        id: 'pw6-step',
        type: 'text' as const,
        content: `## The Greatest-Integer (Step) Function

The **greatest-integer function** $\\lfloor x \\rfloor$ rounds *down* to the nearest integer — it returns the largest integer **less than or equal to** $x$.

| $x$ | $\\lfloor x \\rfloor$ | Why |
|-----|----------------------|-----|
| $2.7$ | $2$ | largest integer $\\le 2.7$ |
| $2$ | $2$ | $2$ itself |
| $-1.3$ | $-2$ | largest integer $\\le -1.3$ is $-2$, not $-1$! |
| $5$ | $5$ | $5$ itself |

Its graph is a series of flat **steps**, each one unit wide, with a **closed** dot on the left (included) and an **open** dot on the right (excluded) — a piecewise function with infinitely many constant pieces.

> ⚠️ The trap is **negatives**. $\\lfloor -1.3 \\rfloor = -2$, because $-2 \\le -1.3$ but $-1 > -1.3$. "Round down" always moves toward $-\\infty$, not toward zero.`,
      },
      {
        id: 'pw6-step-drill',
        type: 'input-boxes' as const,
        content: `**Step Function Values** 🧮

Evaluate the greatest-integer function $\\lfloor x \\rfloor$ (round down to the nearest integer).

**1)** $\\lfloor 4.9 \\rfloor = \\,?$
**2)** $\\lfloor 7 \\rfloor = \\,?$
**3)** $\\lfloor -2.5 \\rfloor = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '7', '-3'],
          hint1: 'Largest integer $\\le 4.9$ is $4$.',
          hint2: '$7$ is already an integer, so $\\lfloor 7 \\rfloor = 7$.',
          hint3: 'Round $-2.5$ *down* (toward $-\\infty$): the largest integer $\\le -2.5$ is $-3$.',
          explanation: '1) $\\lfloor 4.9\\rfloor=4$. 2) $\\lfloor 7\\rfloor=7$. 3) $\\lfloor -2.5\\rfloor=-3$ — rounding down for negatives moves away from zero.',
        },
      },
      {
        id: 'pw6-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Special Functions** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$|{-8}| = $', options: ['$8$', '$-8$', '$0$', '$16$'] },
            { label: 'When $x \\ge 5$, $|x-5|$ simplifies to:', options: ['$x-5$', '$5-x$', '$x+5$', '$5$'] },
            { label: '$\\lfloor -0.2 \\rfloor = $', options: ['$-1$', '$0$', '$1$', '$-0.2$'] },
          ],
          correctAnswers: ['$8$', '$x-5$', '$-1$'],
          hint1: 'Absolute value makes a negative positive: $|{-8}|=8$.',
          hint2: 'When $x\\ge 5$, the inside $x-5\\ge 0$, so $|x-5|=x-5$.',
          hint3: 'Round $-0.2$ down: the largest integer $\\le -0.2$ is $-1$ (since $0 > -0.2$).',
          explanation: '$|{-8}|=8$. For $x\\ge 5$ the inside is non-negative, so $|x-5|=x-5$. $\\lfloor -0.2\\rfloor=-1$ because rounding down crosses below zero.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'piecewise-functions',
    sections: [
      {
        id: 'pw7-intro',
        type: 'text' as const,
        content: `# 🧩 Piecewise Functions

**Part 7 of 7 — Modeling, Mixed Practice & Exit Quiz**

---

You can read brace notation, evaluate carefully at boundaries, graph with open/closed dots, test continuity, find domain and range, and decode absolute-value and step functions. Now let's use it on a real model — then prove your mastery.`,
      },
      {
        id: 'pw7-model',
        type: 'text' as const,
        content: `## Real-World Modeling: A Tax Bracket

Piecewise functions are how the world handles "the rate changes after a threshold." Suppose a simplified tax on income $x$ (in dollars) is:

$$
T(x) = \\begin{cases}
0.10\\,x & 0 \\le x \\le 10000 \\\\
1000 + 0.20(x - 10000) & x > 10000
\\end{cases}
$$

- The first \\$10,000 is taxed at $10\\%$: that's at most $0.10 \\times 10000 = 1000$, i.e. \\$1000.
- Every dollar **above** \\$10,000 is taxed at $20\\%$, and the constant $1000$ carries over the tax already owed on the first bracket.

### Tax on \\$25,000
Since $25000 > 10000$, use the bottom rule:

$$T(25000) = 1000 + 0.20(25000 - 10000) = 1000 + 0.20(15000) = 1000 + 3000 = 4000$$

So the tax is \\$4000.

> 💡 **Continuity matters here too.** At $x=10000$: top gives $0.10(10000)=1000$; bottom gives $1000+0.20(0)=1000$. They match, so the tax has no sudden jump at the bracket edge — exactly how real brackets are designed.`,
      },
      {
        id: 'pw7-model-drill',
        type: 'input-boxes' as const,
        content: `**Use the Model** 🧮

Use $T(x) = \\begin{cases} 0.10\\,x & 0 \\le x \\le 10000 \\\\ 1000 + 0.20(x - 10000) & x > 10000 \\end{cases}$

**1)** Tax on an income of \\$8000: $T(8000) = \\,?$
**2)** Tax on an income of \\$10000: $T(10000) = \\,?$
**3)** Tax on an income of \\$30000: $T(30000) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['800', '1000', '5000'],
          hint1: '$8000 \\le 10000$, so use $0.10x$: $0.10(8000)=800$.',
          hint2: '$10000$ is included in the top piece ($\\le 10000$): $0.10(10000)=1000$.',
          hint3: '$30000>10000$: $1000 + 0.20(30000-10000) = 1000 + 0.20(20000) = 1000+4000=5000$.',
          explanation: '1) $0.10(8000)=800$. 2) $0.10(10000)=1000$. 3) $1000+0.20(20000)=1000+4000=5000$.',
        },
      },
      {
        id: 'pw7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = \\begin{cases} x^2 - 1 & x < 0 \\\\ 2x + 1 & x \\ge 0 \\end{cases}$, find $f(-2) + f(3)$.',
              options: ['$10$', '$8$', '$11$', '$6$'],
              correctAnswer: 0,
              explanation: '$f(-2)$: $-2<0$ → $(-2)^2-1 = 4-1 = 3$. $f(3)$: $3\\ge 0$ → $2(3)+1 = 7$. Sum $= 3+7 = 10$.',
            },
            {
              question: 'For what value of $b$ is $f(x) = \\begin{cases} bx + 1 & x \\le 2 \\\\ x^2 & x > 2 \\end{cases}$ continuous at $x=2$?',
              options: ['$b = \\tfrac{3}{2}$', '$b = 2$', '$b = 4$', '$b = \\tfrac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'Set the rules equal at $x=2$: $b(2)+1 = 2^2 \\Rightarrow 2b+1=4 \\Rightarrow 2b=3 \\Rightarrow b=\\tfrac{3}{2}$.',
            },
          ],
        },
      },
      {
        id: 'pw7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Task | What to do |
|------|------------|
| Evaluate $f(a)$ | Find the **one** condition $a$ satisfies; plug into that rule |
| Boundary value | $\\le, \\ge$ **include** the endpoint; $<, >$ **exclude** it |
| Graph a piece | Draw the rule, keep it over its interval, ● if included / ○ if excluded |
| Continuous at $c$ | Left value $=$ right value $= f(c)$ (set the two rules equal at $c$) |
| Domain | Union of all condition-intervals (allowed inputs) |
| Range | Union of each piece's output set over its interval |
| $\\lfloor x \\rfloor$ | Round **down** toward $-\\infty$ (watch negatives!) |

> 🔑 The whole topic reduces to one habit: **always read the inequality at the boundary**, then plug into the right rule.`,
      },
      {
        id: 'pw7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = \\begin{cases} 3 - x & x < 1 \\\\ x^2 & x \\ge 1 \\end{cases}$, what is $f(1)$?',
              options: ['$1$', '$2$', '$3$', 'undefined'],
              correctAnswer: 0,
              explanation: 'The condition $x\\ge 1$ includes $1$, so use $x^2$: $f(1)=1^2=1$. (The top piece needs $x<1$ strictly, so it does not apply at $1$.)',
            },
            {
              question: 'A piecewise function has a *jump discontinuity* at $x=c$ when:',
              options: [
                'The left and right pieces give different values at $x=c$',
                'Both pieces are continuous everywhere',
                'The domain includes $c$',
                'The two pieces have the same slope',
              ],
              correctAnswer: 0,
              explanation: 'A jump happens precisely when the two pieces approach different heights at the boundary, leaving a visible vertical gap.',
            },
            {
              question: 'Find $k$ so that $f(x) = \\begin{cases} 2x + k & x < 1 \\\\ 5x & x \\ge 1 \\end{cases}$ is continuous at $x=1$.',
              options: ['$k = 3$', '$k = 5$', '$k = 7$', '$k = -3$'],
              correctAnswer: 0,
              explanation: 'Set the rules equal at $x=1$: $2(1)+k = 5(1) \\Rightarrow 2+k=5 \\Rightarrow k=3$.',
            },
          ],
        },
      },
    ],
  },
]
