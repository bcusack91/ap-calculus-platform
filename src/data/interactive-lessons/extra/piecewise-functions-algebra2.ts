import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Piecewise Functions (Algebra 2).
 * Registry key: 'piecewise-functions-algebra2' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'piecewise-functions-algebra2',
    sections: [
      {
        id: 'pw1-intro',
        type: 'text' as const,
        content: `# 🧩 Piecewise Functions

**Part 1 of 5 — Reading the Notation**

---

### Topics in This Part

| Section |
|---------|
| What Is a Piecewise Function? |
| The Big Curly Brace |
| Choosing the Right Piece |

> 🔑 **Key Concept:** A piecewise function is *one* function built from *several* rules — each rule applies only on its own stretch of the number line. The whole game is figuring out **which rule to use for which input.**`,
      },
      {
        id: 'pw1-what',
        type: 'text' as const,
        content: `## What Is a Piecewise Function?

Most functions you've met use a single formula for *every* input — like $f(x) = 2x + 1$. A **piecewise function** uses **different formulas on different intervals**.

Think of a parking garage:
- The first hour costs a flat \\$5.
- After that it's \\$2 per additional hour.

That's two rules glued together. Mathematically we stack them under a single curly brace:

$$f(x) = \\begin{cases} 5 & 0 \\le x \\le 1 \\\\ 5 + 2(x - 1) & x > 1 \\end{cases}$$

Each line is a **piece**: a formula on the left and the **interval where it applies** on the right.

> 💡 The function still passes the vertical line test — for any single input $x$, **exactly one** piece gives the output. The intervals are designed so they never overlap.`,
      },
      {
        id: 'pw1-anatomy',
        type: 'text' as const,
        content: `## The Anatomy of the Notation

Read a piecewise function **right-to-left**: first check the *condition*, then use the matching *formula*.

$$f(x) = \\begin{cases} x^2 & x < 0 \\\\ x + 1 & x \\ge 0 \\end{cases}$$

| To find... | Ask: which interval is $x$ in? | Then use... |
|------------|-------------------------------|-------------|
| $f(-3)$ | $-3 < 0$ ✓ | $x^2 = (-3)^2 = 9$ |
| $f(0)$ | $0 \\ge 0$ ✓ | $x + 1 = 0 + 1 = 1$ |
| $f(4)$ | $4 \\ge 0$ ✓ | $x + 1 = 4 + 1 = 5$ |

> ⚠️ **Don't plug a number into every formula.** A piecewise function gives you a menu of formulas; you pick the **one** whose condition your input satisfies, and ignore the rest.`,
      },
      {
        id: 'pw1-which-piece',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = \\begin{cases} 3x & x < 2 \\\\ x^2 & x \\ge 2 \\end{cases}$, which piece do you use to find $f(5)$?',
              options: ['$x^2$, because $5 \\ge 2$', '$3x$, because $5$ is bigger', '$3x$, because $5 < 2$', 'Both — average them'],
              correctAnswer: 0,
              explanation: 'Check the condition first: $5 \\ge 2$ is true, so use the $x^2$ piece. The output is $5^2 = 25$.',
            },
            {
              question: 'A piecewise function is still a function as long as...',
              options: [
                'every formula is linear',
                'the intervals never overlap, so each input has exactly one output',
                'there are at most two pieces',
                'all the pieces meet at the same point',
              ],
              correctAnswer: 1,
              explanation: 'The defining property of a function is one output per input. Non-overlapping intervals guarantee exactly one piece applies to each $x$.',
            },
          ],
        },
      },
      {
        id: 'pw1-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Input to Piece** 🔽

Use $f(x) = \\begin{cases} x^2 & x < 0 \\\\ x + 1 & x \\ge 0 \\end{cases}$. For each input, choose the formula you'd use.`,
        exercise: {
          dropdowns: [
            { label: 'To find $f(-3)$, use', options: ['$x^2$ (since $-3 < 0$)', '$x + 1$ (since $-3 \\ge 0$)', 'either piece', 'neither piece'] },
            { label: 'To find $f(0)$, use', options: ['$x + 1$ (since $0 \\ge 0$)', '$x^2$ (since $0 < 0$)', 'either piece', 'neither piece'] },
            { label: 'To find $f(7)$, use', options: ['$x + 1$ (since $7 \\ge 0$)', '$x^2$ (since $7 < 0$)', 'either piece', 'neither piece'] },
          ],
          correctAnswers: ['$x^2$ (since $-3 < 0$)', '$x + 1$ (since $0 \\ge 0$)', '$x + 1$ (since $7 \\ge 0$)'],
          hint1: 'Test the condition first: is the input less than $0$, or greater-than-or-equal to $0$?',
          hint2: 'The boundary $0$ belongs to the $x \\ge 0$ piece because of the "or-equal-to" symbol.',
          hint3: 'Negatives go to $x^2$; zero and positives go to $x+1$.',
          explanation: '$f(-3)$ uses $x^2$ ($-3<0$), giving $9$. $f(0)$ uses $x+1$ ($0 \\ge 0$), giving $1$. $f(7)$ uses $x+1$, giving $8$.',
        },
      },
      {
        id: 'pw1-evaluate-text',
        type: 'text' as const,
        content: `## From "Which Piece" to "What Value"

Choosing the right piece is half the job. The other half is just **plugging in** — substitute your input into that one formula and simplify.

$$g(x) = \\begin{cases} x^2 & x < 0 \\\\ 2x + 3 & x \\ge 0 \\end{cases}$$

To find $g(-2)$: since $-2 < 0$, use $x^2 \\Rightarrow g(-2) = (-2)^2 = 4$.

> 💡 Slow down on the sign of the input. A negative input squared becomes **positive**, but a negative input in $2x+3$ stays negative until you add. Substitution mistakes — not piece-selection mistakes — are where most lost points actually come from.`,
      },
      {
        id: 'pw1-eval-drill',
        type: 'input-boxes' as const,
        content: `**Pick the Piece, Then Evaluate** 🧮

Use $g(x) = \\begin{cases} x^2 & x < 0 \\\\ 2x + 3 & x \\ge 0 \\end{cases}$

**1)** $g(-4) = \\,?$
**2)** $g(0) = \\,?$
**3)** $g(6) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '3', '15'],
          hint1: '$-4 < 0$, so use $x^2$: $(-4)^2 = 16$.',
          hint2: '$0 \\ge 0$ (note the $\\ge$ includes $0$), so use $2x+3$: $2(0)+3 = 3$.',
          hint3: '$6 \\ge 0$, so use $2x+3$: $2(6)+3 = 15$.',
          explanation: '1) $g(-4) = (-4)^2 = 16$.  2) $g(0) = 2(0)+3 = 3$.  3) $g(6) = 2(6)+3 = 15$. Always test the condition before substituting.',
        },
      },
      {
        id: 'pw1-recap',
        type: 'text' as const,
        content: `## Recap

To work with any piecewise function:

1. **Read the conditions** on the right of each piece.
2. **Locate your input** $x$ on the number line — find the interval it belongs to.
3. **Use only that piece's formula.**

You've got the reading skill down. In Part 2 we zoom in on the trickiest spot: the **boundary point** where two intervals meet, and what those $<$, $\\le$, $>$, $\\ge$ symbols really decide.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'piecewise-functions-algebra2',
    sections: [
      {
        id: 'pw2-intro',
        type: 'text' as const,
        content: `# 🧩 Piecewise Functions

**Part 2 of 5 — Boundary Points & Evaluating Carefully**

---

> 🔑 **The Idea:** Two pieces meet at a **boundary**. The inequality symbol ($<$ vs $\\le$) decides **which piece owns** that exact boundary value. Getting this right is the #1 skill for evaluating and graphing piecewise functions.`,
      },
      {
        id: 'pw2-boundary',
        type: 'text' as const,
        content: `## Who Owns the Boundary?

Look at where the intervals "touch":

$$f(x) = \\begin{cases} x + 1 & x \\le 3 \\\\ 2x - 2 & x > 3 \\end{cases}$$

The boundary is $x = 3$. Which piece claims it?

- The first piece says $x \\le 3$. The $\\le$ **includes** $3$. ✓
- The second piece says $x > 3$. The strict $>$ **excludes** $3$.

So $f(3)$ uses the **first** piece: $f(3) = 3 + 1 = 4$.

> 🔑 **Rule of thumb:** The piece with the "or-equal-to" symbol ($\\le$ or $\\ge$) is the one that **owns** the boundary. A well-defined piecewise function gives exactly one piece the equality at each boundary.`,
      },
      {
        id: 'pw2-symbols',
        type: 'dropdown-select' as const,
        content: `**Read the Inequalities** 🔽

Use $f(x) = \\begin{cases} x + 1 & x \\le 3 \\\\ 2x - 2 & x > 3 \\end{cases}$`,
        exercise: {
          dropdowns: [
            { label: 'Which piece owns $x = 3$?', options: ['the $x + 1$ piece', 'the $2x - 2$ piece', 'neither piece', 'both pieces'] },
            { label: 'So $f(3) =$', options: ['$4$', '$3$', '$7$', '$-2$'] },
            { label: 'And $f(5)$ uses', options: ['$2x - 2$, since $5 > 3$', '$x + 1$, since $5 \\le 3$', 'neither', 'both'] },
          ],
          correctAnswers: ['the $x + 1$ piece', '$4$', '$2x - 2$, since $5 > 3$'],
          hint1: 'The $\\le$ symbol includes the boundary, so $x+1$ owns $x=3$.',
          hint2: 'Using the $x+1$ piece at $x=3$: $3 + 1 = 4$.',
          hint3: '$5 > 3$ is true, so the second piece ($2x-2$) applies: $2(5)-2 = 8$.',
          explanation: 'The "or-equal-to" piece ($x \\le 3$) owns the boundary, giving $f(3)=4$. For $x=5$, only $x>3$ is satisfied, so $f(5) = 2(5)-2 = 8$.',
        },
      },
      {
        id: 'pw2-three-pieces',
        type: 'text' as const,
        content: `## Functions With Three (or More) Pieces

The same logic scales. Just walk the number line from left to right and find the one interval your input lives in.

$$h(x) = \\begin{cases} -x & x < -1 \\\\ 1 & -1 \\le x \\le 1 \\\\ x^2 & x > 1 \\end{cases}$$

| Input | Interval test | Output |
|-------|---------------|--------|
| $h(-4)$ | $-4 < -1$ ✓ | $-(-4) = 4$ |
| $h(-1)$ | $-1 \\le -1 \\le 1$ ✓ | $1$ (the middle piece) |
| $h(0)$ | $-1 \\le 0 \\le 1$ ✓ | $1$ |
| $h(3)$ | $3 > 1$ ✓ | $3^2 = 9$ |

> 💡 The middle piece here is a **constant**, $1$. Constant pieces are perfectly legal — the function just flat-lines across that interval.`,
      },
      {
        id: 'pw2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $h(x) = \\begin{cases} -x & x < -1 \\\\ 1 & -1 \\le x \\le 1 \\\\ x^2 & x > 1 \\end{cases}$, what is $h(1)$?',
              options: ['$1$', '$-1$', '$2$', 'undefined'],
              correctAnswer: 0,
              explanation: 'The middle piece covers $-1 \\le x \\le 1$, and $1$ satisfies $\\le 1$. So $h(1)$ uses the constant piece: $h(1) = 1$. (The $x^2$ piece needs $x > 1$, which excludes $1$.)',
            },
            {
              question: 'In $f(x) = \\begin{cases} x^2 & x < 2 \\\\ x + 5 & x \\ge 2 \\end{cases}$, the value $f(2)$ equals:',
              options: ['$7$', '$4$', 'both $4$ and $7$', 'undefined'],
              correctAnswer: 0,
              explanation: 'The $\\ge$ piece owns $x=2$, so use $x+5$: $f(2) = 2 + 5 = 7$. The $x^2$ piece needs strict $x<2$, so it does not apply at $2$.',
            },
          ],
        },
      },
      {
        id: 'pw2-drill',
        type: 'input-boxes' as const,
        content: `**Mind the Boundary** 🧮

Use $f(x) = \\begin{cases} 4 - x & x < 1 \\\\ 3x & 1 \\le x < 4 \\\\ x^2 - 10 & x \\ge 4 \\end{cases}$

**1)** $f(0) = \\,?$
**2)** $f(1) = \\,?$
**3)** $f(4) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '3', '6'],
          hint1: '$0 < 1$, so use $4 - x$: $4 - 0 = 4$.',
          hint2: 'The middle piece owns $x=1$ because of $1 \\le x$. Use $3x$: $3(1) = 3$.',
          hint3: 'The third piece owns $x=4$ because of $x \\ge 4$. Use $x^2 - 10$: $4^2 - 10 = 6$.',
          explanation: '1) $f(0) = 4 - 0 = 4$.  2) $f(1) = 3(1) = 3$ (the $1 \\le x$ piece owns the left boundary).  3) $f(4) = 4^2 - 10 = 6$ (the $x \\ge 4$ piece owns it).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'piecewise-functions-algebra2',
    sections: [
      {
        id: 'pw3-intro',
        type: 'text' as const,
        content: `# 🧩 Piecewise Functions

**Part 3 of 5 — Graphing Piecewise Functions**

---

> 🔑 **Big Payoff:** A piecewise graph is just each piece's graph, **trimmed** to its own interval. The only new skill is marking endpoints correctly: a **closed dot ●** for "included," an **open dot ○** for "excluded."`,
      },
      {
        id: 'pw3-dots',
        type: 'text' as const,
        content: `## Open vs. Closed Endpoints

At every boundary, the inequality tells you the dot:

| Symbol at the boundary | Endpoint dot | Meaning |
|------------------------|--------------|---------|
| $\\le$ or $\\ge$ | ● closed (filled) | the point **is** on the graph |
| $<$ or $>$ | ○ open (hollow) | the point is **not** on the graph |

### Example

$$f(x) = \\begin{cases} x + 1 & x \\le 2 \\\\ 5 & x > 2 \\end{cases}$$

- The first piece, $y = x+1$, runs up to $x = 2$. Since $x \\le 2$, put a **closed dot ●** at its right end: $(2,\\, 3)$ because $2 + 1 = 3$.
- The second piece, $y = 5$, starts just after $x = 2$. Since $x > 2$, put an **open dot ○** at $(2,\\, 5)$.

> 💡 At a boundary you often draw **two** dots stacked vertically — one closed, one open — because the two pieces disagree about the height there. That vertical gap is called a **jump.**`,
      },
      {
        id: 'pw3-endpoint-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A piece is defined for $x > -2$. At the boundary $x = -2$, you draw:',
              options: ['an open dot ○ (excluded)', 'a closed dot ● (included)', 'no dot at all', 'two closed dots'],
              correctAnswer: 0,
              explanation: 'The strict inequality $>$ excludes the boundary value, so the endpoint is an open (hollow) dot.',
            },
            {
              question: 'For $f(x) = \\begin{cases} x + 1 & x \\le 2 \\\\ 5 & x > 2 \\end{cases}$, the closed endpoint of the first piece is at the point:',
              options: ['$(2, 3)$', '$(2, 5)$', '$(2, 2)$', '$(3, 2)$'],
              correctAnswer: 0,
              explanation: 'Plug the boundary $x=2$ into the first formula: $2 + 1 = 3$. Since $x \\le 2$ includes $2$, that point $(2,3)$ is a closed dot.',
            },
          ],
        },
      },
      {
        id: 'pw3-domain-range',
        type: 'text' as const,
        content: `## Reading Domain & Range From the Graph

Once a piecewise function is graphed, the **domain** is the set of $x$-values it covers, and the **range** is the set of $y$-values it reaches.

### Example

$$f(x) = \\begin{cases} -2 & -4 \\le x < 0 \\\\ x & 0 \\le x \\le 3 \\end{cases}$$

- **Domain:** the pieces cover $-4 \\le x < 0$ joined with $0 \\le x \\le 3$, which together fill $-4 \\le x \\le 3$. In interval notation: $[-4,\\, 3]$.
- **Range:** the first piece is the single value $y = -2$. The second piece, $y = x$ for $0 \\le x \\le 3$, sweeps from $0$ up to $3$. So the outputs are $\\{-2\\}$ together with $[0, 3]$.

> ⚠️ Don't assume the domain is "all real numbers." Piecewise functions are often defined **only** on a limited set of intervals — read the conditions to find where the function actually lives.`,
      },
      {
        id: 'pw3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Endpoints & Domain** 🔽

Use $f(x) = \\begin{cases} -2 & -4 \\le x < 0 \\\\ x & 0 \\le x \\le 3 \\end{cases}$`,
        exercise: {
          dropdowns: [
            { label: 'At $x = 0$, the first piece ($x < 0$) ends with', options: ['an open dot ○', 'a closed dot ●', 'no dot', 'a vertical line'] },
            { label: 'At $x = 0$, the second piece ($x \\ge 0$) starts with', options: ['a closed dot ●', 'an open dot ○', 'no dot', 'a gap'] },
            { label: 'The domain of $f$ is', options: ['$[-4,\\, 3]$', '$(-4,\\, 3)$', '$[-2,\\, 3]$', 'all real numbers'] },
          ],
          correctAnswers: ['an open dot ○', 'a closed dot ●', '$[-4,\\, 3]$'],
          hint1: 'The first piece has $x < 0$ (strict), so its right endpoint at $x=0$ is open.',
          hint2: 'The second piece has $0 \\le x$ (or-equal), so it includes $x=0$ with a closed dot.',
          hint3: 'Together the intervals $[-4, 0)$ and $[0, 3]$ merge into $[-4, 3]$.',
          explanation: 'The strict-$<$ piece ends open at $x=0$; the $\\ge$ piece starts closed there, so the graph is continuous at $0$ only if the heights match — but the domain merges to $[-4, 3]$ regardless.',
        },
      },
      {
        id: 'pw3-drill',
        type: 'input-boxes' as const,
        content: `**Plot the Endpoints** 🧮

Use $f(x) = \\begin{cases} x + 4 & x < -1 \\\\ x^2 & x \\ge -1 \\end{cases}$. Find the $y$-coordinate of each endpoint at the boundary $x = -1$.

**1)** Left piece's endpoint height: $f$-value from $x + 4$ at $x = -1$ is $\\,?$  *(this dot is open ○)*
**2)** Right piece's endpoint height: $f$-value from $x^2$ at $x = -1$ is $\\,?$  *(this dot is closed ●)*
**3)** The size of the **jump** (closed height minus open height) is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '1', '-2'],
          hint1: '$x + 4$ at $x=-1$: $-1 + 4 = 3$. (Open dot because $x < -1$ excludes $-1$.)',
          hint2: '$x^2$ at $x=-1$: $(-1)^2 = 1$. (Closed dot because $x \\ge -1$ includes $-1$.)',
          hint3: 'Jump $=$ closed height $-$ open height $= 1 - 3 = -2$.',
          explanation: '1) Open endpoint at $(-1, 3)$.  2) Closed endpoint at $(-1, 1)$.  3) The graph jumps from $3$ down to $1$, a change of $1 - 3 = -2$, so there is a gap of size $2$ at $x=-1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'piecewise-functions-algebra2',
    sections: [
      {
        id: 'pw4-intro',
        type: 'text' as const,
        content: `# 🧩 Piecewise Functions

**Part 4 of 5 — Absolute Value, Step Functions & Continuity**

---

> 🔑 **The Reveal:** Some "famous" functions are secretly piecewise. Absolute value is the classic example, and **step functions** model real costs. We'll also learn to spot whether a piecewise graph is **continuous** (no gaps) or has a **jump.**`,
      },
      {
        id: 'pw4-absval',
        type: 'text' as const,
        content: `## Absolute Value Is Piecewise

The definition of absolute value **is** a piecewise rule:

$$|x| = \\begin{cases} -x & x < 0 \\\\ x & x \\ge 0 \\end{cases}$$

When $x$ is negative, $-x$ makes it positive; when $x$ is non-negative, you leave it alone. That's why the graph of $y = |x|$ is a **V**: a downward ray on the left, an upward ray on the right, meeting at the origin.

### Rewriting a Shifted Absolute Value

$$y = |x - 3|$$ becomes $$y = \\begin{cases} -(x - 3) & x < 3 \\\\ x - 3 & x \\ge 3 \\end{cases} = \\begin{cases} -x + 3 & x < 3 \\\\ x - 3 & x \\ge 3 \\end{cases}$$

The "corner" of the V sits where the inside equals zero: $x - 3 = 0 \\Rightarrow x = 3$.

> 💡 To convert $|expression|$ into pieces: find where the inside is $0$ (that's the boundary), keep the expression as-is where it's $\\ge 0$, and **negate** it where it's $< 0$.`,
      },
      {
        id: 'pw4-absval-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Written as a piecewise function, $y = |x + 2|$ is:',
              options: [
                '$\\begin{cases} -(x+2) & x < -2 \\\\ x+2 & x \\ge -2 \\end{cases}$',
                '$\\begin{cases} -(x+2) & x < 2 \\\\ x+2 & x \\ge 2 \\end{cases}$',
                '$\\begin{cases} x+2 & x < -2 \\\\ -(x+2) & x \\ge -2 \\end{cases}$',
                '$\\begin{cases} -x & x < 0 \\\\ x & x \\ge 0 \\end{cases}$',
              ],
              correctAnswer: 0,
              explanation: 'The inside $x+2 = 0$ at $x = -2$, so that is the boundary. Where $x \\ge -2$ the inside is non-negative (keep it); where $x < -2$ the inside is negative (negate it).',
            },
            {
              question: 'The corner (vertex) of $y = |x - 5|$ is located at:',
              options: ['$(5, 0)$', '$(-5, 0)$', '$(0, 5)$', '$(5, 5)$'],
              correctAnswer: 0,
              explanation: 'The corner is where the inside equals zero: $x - 5 = 0 \\Rightarrow x = 5$, and there $|x-5| = 0$. So the vertex is $(5, 0)$.',
            },
          ],
        },
      },
      {
        id: 'pw4-step',
        type: 'text' as const,
        content: `## Step Functions

A **step function** is piecewise-constant: it's flat on each interval and "jumps" to a new height at the boundaries, producing a staircase.

The most famous is the **greatest integer (floor) function**, $\\lfloor x \\rfloor$, which rounds *down* to the nearest integer:

$$\\lfloor 2.7 \\rfloor = 2, \\quad \\lfloor 2 \\rfloor = 2, \\quad \\lfloor -1.3 \\rfloor = -2$$

| $x$ | $\\lfloor x \\rfloor$ |
|-----|----------------------|
| $1.9$ | $1$ |
| $3.0$ | $3$ |
| $-0.5$ | $-1$ |

> ⚠️ For **negative** inputs the floor goes *more* negative: $\\lfloor -1.3 \\rfloor = -2$, not $-1$, because $-2$ is the greatest integer that is still $\\le -1.3$.

Real-world steps: a parking meter charging by the started hour, or postage that jumps at each ounce — the price is constant within a band, then leaps at the edge.`,
      },
      {
        id: 'pw4-step-drill',
        type: 'input-boxes' as const,
        content: `**Floor Function Practice** 🧮

Evaluate the greatest-integer (floor) function $\\lfloor x \\rfloor$ — round **down** to the nearest integer.

**1)** $\\lfloor 4.9 \\rfloor = \\,?$
**2)** $\\lfloor 7 \\rfloor = \\,?$
**3)** $\\lfloor -2.1 \\rfloor = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '7', '-3'],
          hint1: 'Round down: the greatest integer $\\le 4.9$ is $4$.',
          hint2: 'An integer floors to itself: $\\lfloor 7 \\rfloor = 7$.',
          hint3: 'For negatives, round *toward* $-\\infty$: the greatest integer $\\le -2.1$ is $-3$.',
          explanation: '1) $\\lfloor 4.9 \\rfloor = 4$.  2) $\\lfloor 7 \\rfloor = 7$.  3) $\\lfloor -2.1 \\rfloor = -3$ — flooring a negative rounds further from zero.',
        },
      },
      {
        id: 'pw4-continuity',
        type: 'text' as const,
        content: `## Continuous or a Jump?

A piecewise function is **continuous** at a boundary if the two pieces meet at the **same height** there — no gap, no jump. Test it by plugging the boundary into **both** neighboring formulas:

$$f(x) = \\begin{cases} x + 1 & x \\le 2 \\\\ 3x - 3 & x > 2 \\end{cases}$$

- Left piece at $x = 2$: $2 + 1 = 3$.
- Right piece approaching $x = 2$: $3(2) - 3 = 3$.

Both give $3$, so the graph **connects** — it's continuous at $x = 2$. ✓

Compare with $f(x) = \\begin{cases} x + 1 & x \\le 2 \\\\ 3x & x > 2 \\end{cases}$: now the left gives $3$ but the right approaches $3(2) = 6$. The heights differ, so there's a **jump** of $6 - 3 = 3$.

> 🔑 **Continuity test at a boundary $x=a$:** evaluate both pieces at $a$. **Equal heights ⇒ continuous.** **Different heights ⇒ jump (discontinuity).**`,
      },
      {
        id: 'pw4-continuity-dropdown',
        type: 'dropdown-select' as const,
        content: `**Continuous or Jump?** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'At $x=2$, $\\begin{cases} x+1 & x \\le 2 \\\\ 3x-3 & x>2 \\end{cases}$ is', options: ['continuous (heights both $3$)', 'a jump of $3$', 'a jump of $6$', 'undefined'] },
            { label: 'At $x=1$, $\\begin{cases} 2x & x < 1 \\\\ x+4 & x \\ge 1 \\end{cases}$ is', options: ['a jump of $3$', 'continuous', 'a jump of $5$', 'continuous (both $2$)'] },
            { label: 'To test continuity at a boundary, you', options: ['plug the boundary into both pieces and compare', 'graph it and guess', 'only use the left piece', 'check if both formulas are linear'] },
          ],
          correctAnswers: ['continuous (heights both $3$)', 'a jump of $3$', 'plug the boundary into both pieces and compare'],
          hint1: 'Left: $2+1=3$. Right: $3(2)-3 = 3$. Equal heights ⇒ continuous.',
          hint2: 'Left approaches $2(1)=2$; right gives $1+4=5$. The gap is $5 - 2 = 3$, a jump.',
          hint3: 'Continuity at a boundary depends only on whether the two neighboring pieces meet at the same height.',
          explanation: 'First: both pieces hit $3$ at $x=2$, so continuous. Second: $2$ vs $5$ is a jump of $3$. The universal test is to evaluate both pieces at the boundary and compare heights.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'piecewise-functions-algebra2',
    sections: [
      {
        id: 'pw5-intro',
        type: 'text' as const,
        content: `# 🧩 Piecewise Functions

**Part 5 of 5 — Applications & Mastery Check**

---

You can now read the notation, evaluate carefully across boundaries, graph the pieces with correct dots, recognize absolute-value and step functions, and test for continuity. Let's apply it to the real world — then finish with an Exit Quiz.`,
      },
      {
        id: 'pw5-application',
        type: 'text' as const,
        content: `## Real-World Models: Tiered Pricing

Piecewise functions are everywhere money is involved: tax brackets, shipping, phone plans, and utility bills all change rate at thresholds.

### Example: Cell-Phone Data

A plan charges a flat \\$30 for up to $2$ GB, then \\$10 per extra GB beyond $2$:

$$C(g) = \\begin{cases} 30 & 0 \\le g \\le 2 \\\\ 30 + 10(g - 2) & g > 2 \\end{cases}$$

| Data used $g$ | Which piece | Cost $C(g)$ |
|---------------|-------------|-------------|
| $1.5$ GB | $0 \\le g \\le 2$ | \\$30 |
| $2$ GB | $0 \\le g \\le 2$ | \\$30 |
| $5$ GB | $g > 2$ | $30 + 10(5-2) = \\$60$ |

> 💡 Notice the model is **continuous** at $g = 2$: the flat piece gives \\$30 and the second piece gives $30 + 10(0) = \\$30$. Good pricing models usually avoid surprise jumps right at the threshold.`,
      },
      {
        id: 'pw5-app-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Model** 🧮

A ride-share charges a \\$4 base for the first $3$ miles, then \\$2 per additional mile:

$$F(m) = \\begin{cases} 4 & 0 \\le m \\le 3 \\\\ 4 + 2(m - 3) & m > 3 \\end{cases}$$

**1)** Cost of a $2$-mile ride: $F(2) = \\,?$  *(dollars)*
**2)** Cost of a $3$-mile ride: $F(3) = \\,?$  *(dollars)*
**3)** Cost of an $8$-mile ride: $F(8) = \\,?$  *(dollars)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '4', '14'],
          hint1: '$2$ is in $0 \\le m \\le 3$, so the flat piece applies: $F(2) = 4$.',
          hint2: '$3$ satisfies $m \\le 3$, so still the flat \\$4: $F(3) = 4$.',
          hint3: '$8 > 3$, so $F(8) = 4 + 2(8 - 3) = 4 + 2(5) = 4 + 10 = 14$.',
          explanation: '1) $F(2) = 4$.  2) $F(3) = 4$ (boundary owned by the flat piece).  3) $F(8) = 4 + 2(8-3) = 14$.',
        },
      },
      {
        id: 'pw5-build',
        type: 'text' as const,
        content: `## Building a Piecewise Function From Words

Translating a scenario into notation is a top exam skill. Work in three steps:

1. **Identify the thresholds** — the inputs where the rule changes (these become your boundaries).
2. **Write a formula for each interval** — often a constant or a "base + rate × extra" expression.
3. **Attach the correct inequalities** so every input lands in exactly one piece.

### Example: Movie-Theater Tickets

"Kids ($12$ and under) pay \\$6; everyone else pays \\$11."

The threshold is age $12$. Translating:

$$P(a) = \\begin{cases} 6 & a \\le 12 \\\\ 11 & a > 12 \\end{cases}$$

The $\\le$ on the first piece makes sure a $12$-year-old gets the kids' price, and the strict $>$ keeps $13+$ at the adult price — no overlap, no gap.`,
      },
      {
        id: 'pw5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Using $C(g) = \\begin{cases} 30 & 0 \\le g \\le 2 \\\\ 30 + 10(g - 2) & g > 2 \\end{cases}$, what is the cost for $7$ GB?',
              options: ['\\$80', '\\$70', '\\$50', '\\$100'],
              correctAnswer: 0,
              explanation: '$7 > 2$, so $C(7) = 30 + 10(7 - 2) = 30 + 10(5) = 30 + 50 = \\$80$.',
            },
            {
              question: '"A gym charges \\$0 for members and \\$15 for non-members." Which piecewise function models the entry cost by membership status $m$ (with $m=1$ for members)?',
              options: [
                '$\\begin{cases} 0 & m = 1 \\\\ 15 & m \\ne 1 \\end{cases}$',
                '$\\begin{cases} 15 & m = 1 \\\\ 0 & m \\ne 1 \\end{cases}$',
                '$\\begin{cases} 0 & m > 1 \\\\ 15 & m \\le 1 \\end{cases}$',
                '$15m$ for all $m$',
              ],
              correctAnswer: 0,
              explanation: 'Members ($m=1$) pay \\$0; everyone else ($m \\ne 1$) pays \\$15. The conditions partition all cases with no overlap.',
            },
          ],
        },
      },
      {
        id: 'pw5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = \\begin{cases} 2x - 1 & x < 3 \\\\ x^2 & x \\ge 3 \\end{cases}$, what is $f(3)$?',
              options: ['$9$', '$5$', 'both $5$ and $9$', 'undefined'],
              correctAnswer: 0,
              explanation: 'The $x \\ge 3$ piece owns the boundary, so use $x^2$: $f(3) = 3^2 = 9$. The $2x-1$ piece needs strict $x<3$.',
            },
            {
              question: 'Written as a piecewise function, $|x - 1|$ equals:',
              options: [
                '$\\begin{cases} -(x-1) & x < 1 \\\\ x-1 & x \\ge 1 \\end{cases}$',
                '$\\begin{cases} x-1 & x < 1 \\\\ -(x-1) & x \\ge 1 \\end{cases}$',
                '$\\begin{cases} -(x-1) & x < -1 \\\\ x-1 & x \\ge -1 \\end{cases}$',
                '$\\begin{cases} -x & x<0 \\\\ x & x \\ge 0 \\end{cases}$',
              ],
              correctAnswer: 0,
              explanation: 'The inside $x-1=0$ at $x=1$, the boundary. Where $x \\ge 1$ keep $x-1$; where $x<1$ negate it to $-(x-1)$.',
            },
            {
              question: 'At $x = 4$, the function $\\begin{cases} x + 2 & x \\le 4 \\\\ 3x - 6 & x > 4 \\end{cases}$ is:',
              options: ['continuous (both pieces give $6$)', 'a jump of $6$', 'a jump of $12$', 'undefined'],
              correctAnswer: 0,
              explanation: 'Left at $x=4$: $4+2=6$. Right approaching $x=4$: $3(4)-6=6$. Both heights are $6$, so the graph connects — continuous at $x=4$.',
            },
          ],
        },
      },
    ],
  },
]
