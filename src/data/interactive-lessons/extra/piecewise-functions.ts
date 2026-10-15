import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Piecewise Functions (AP Precalculus).
 * Registry key: 'piecewise-functions' (matches the DB Topic.slug).
 * 7 parts, gold-standard structure: anatomy/notation → evaluation → graphing →
 * building piecewise models → domain/range → absolute-value & step functions → modeling + exit
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
                'So no $x$ gets two outputs',
                'To make the graph look smooth',
                'So the function is always increasing',
                'It is only a style preference, and overlap is fine',
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

**Left piece** $y = x+3$, drawn for $x<1$. Plugging the boundary into this rule gives $1+3 = 4$. Since $x<1$ **excludes** $1$, put an **open** dot ○ at $(1, 4)$.

**Right piece** $y=-2x+6$, drawn for $x \\ge 1$. At $x=1$, $y = -2(1)+6 = 4$. Since $x\\ge 1$ **includes** $1$, put a **closed** dot ● at $(1, 4)$.

Here both dots land at $(1,4)$ — the open one is "filled in" by the closed one, so the two pieces meet and the graph has no gap.

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
              explanation: 'The condition $x\\ge 1$ includes $1$, so $h(1)=-2(1)+6=4$ — the closed dot. The open dot from the left piece only marks where that piece stops; it is not the value.',
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

> 💡 A jump is perfectly legal: it's still a function (one output per input — $j(2)=-1$, the closed dot). The two pieces simply don't meet at $x = 2$.`,
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

**Part 4 of 7 — Building Piecewise Models**

---

> 🔑 **Why piecewise?** A piecewise-defined function is a set of functions defined over **non-overlapping** intervals of the domain. It is the right model when a data set or a real situation **behaves differently on different intervals**: a flat fee and then a per-unit charge, a tank that fills and then drains, a speed that changes partway through a trip.`,
      },
      {
        id: 'pw4-words',
        type: 'text' as const,
        content: `## From Words to a Piecewise Rule

**Scenario:** A phone plan costs \\$30 per month and includes up to $5$ GB of data. Each GB over $5$ costs \\$10.

**Step 1 — Find the intervals.** The rule changes at $g = 5$ GB. "Up to $5$ GB" includes $5$, so the first interval is $0 \\le g \\le 5$ and the second is $g > 5$.

**Step 2 — Write a rule for each interval.**
- For $0 \\le g \\le 5$: the cost is the flat \\$30.
- For $g > 5$: \\$30 plus \\$10 for each GB **over** $5$, which is $30 + 10(g - 5)$.

$$
C(g) = \\begin{cases}
30 & 0 \\le g \\le 5 \\\\
30 + 10(g - 5) & g > 5
\\end{cases}
$$

**Step 3 — Check.** Using $8$ GB is $3$ GB over, so $C(8) = 30 + 10(3) = 60$, or \\$60.

### Boundary Words → Inequality Signs

| Wording | Sign | Boundary value is… |
|---------|------|--------------------|
| "at most", "up to and including", "no more than" | $\\le$ | included |
| "less than", "under", "below" | $<$ | excluded |
| "at least", "or more" | $\\ge$ | included |
| "more than", "over", "above" | $>$ | excluded |

> ⚠️ Writing $(g - 5)$ instead of $g$ matters: the \\$10 charge applies only to the GB **beyond** the threshold.`,
      },
      {
        id: 'pw4-model-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Shipping costs \\$8 for packages under $2$ lb, and \\$8 plus \\$3 per pound over $2$ lb for packages of $2$ lb or more. Which condition belongs with the flat \\$8 piece?',
              options: ['$0 < w < 2$', '$0 < w \\le 2$', '$w \\ge 2$', '$w > 2$'],
              correctAnswer: 0,
              explanation: '"Under $2$ lb" excludes $2$, so the flat piece uses $0 < w < 2$. A package of exactly $2$ lb falls under "$2$ lb or more," the second piece.',
            },
            {
              question: 'A taxi charges \\$3 for any trip up to and including $1$ mile, plus \\$2 for each mile beyond the first. Which rule models the cost $C(m)$?',
              options: [
                '$C(m) = \\begin{cases} 3 & 0 < m \\le 1 \\\\ 3 + 2(m - 1) & m > 1 \\end{cases}$',
                '$C(m) = \\begin{cases} 3 & 0 < m \\le 1 \\\\ 3 + 2m & m > 1 \\end{cases}$',
                '$C(m) = \\begin{cases} 3 & 0 < m \\le 1 \\\\ 2(m - 1) & m > 1 \\end{cases}$',
                '$C(m) = \\begin{cases} 3m & 0 < m \\le 1 \\\\ 2m & m > 1 \\end{cases}$',
              ],
              correctAnswer: 0,
              explanation: 'Beyond $1$ mile the rider pays the \\$3 base plus \\$2 for each mile past the first, $3 + 2(m - 1)$. Using $2m$ charges for the first mile twice, and $2(m - 1)$ drops the base fare.',
            },
          ],
        },
      },
      {
        id: 'pw4-data',
        type: 'text' as const,
        content: `## From Data to a Piecewise Model

A tank's volume $V(t)$, in liters, is recorded every $5$ minutes:

| $t$ (min) | $0$ | $5$ | $10$ | $15$ | $20$ |
|-----------|-----|-----|------|------|------|
| $V(t)$ | $50$ | $150$ | $250$ | $210$ | $170$ |

The data change behavior at $t = 10$: the volume **rises** $100$ liters every $5$ minutes, then **falls** $40$ liters every $5$ minutes. Model each interval separately.

**Piece 1, $0 \\le t \\le 10$:** rate $\\frac{100}{5} = 20$ L/min, starting at $50$: $V = 50 + 20t$.

**Piece 2, $10 < t \\le 20$:** rate $\\frac{-40}{5} = -8$ L/min, starting from $250$ at $t = 10$: $V = 250 - 8(t - 10)$.

$$
V(t) = \\begin{cases}
50 + 20t & 0 \\le t \\le 10 \\\\
250 - 8(t - 10) & 10 < t \\le 20
\\end{cases}
$$

### Assumptions and Restrictions

- **Domain from context:** the data cover $0 \\le t \\le 20$, so the model is restricted to that interval.
- **Agreement at the switch:** a tank's volume cannot change instantly, so both rules should give $250$ at $t = 10$. They do: $50 + 20(10) = 250$.
- **Other function types:** a piece does not have to be linear. Each piece can be built with whatever technique fits its interval: a line, a quadratic, a constant, or a regression.`,
      },
      {
        id: 'pw4-model-drill',
        type: 'input-boxes' as const,
        content: `**Use the Tank Model** 🧮

$V(t) = \\begin{cases} 50 + 20t & 0 \\le t \\le 10 \\\\ 250 - 8(t - 10) & 10 < t \\le 20 \\end{cases}$

**1)** $V(4) = \\,?$
**2)** $V(16) = \\,?$
**3)** The rate of change of $V$ on the second piece, in L/min:`,
        exercise: {
          boxes: 3,
          correctAnswers: ['130', '202', '-8'],
          hint1: '$4$ is in $0 \\le t \\le 10$, so use $50 + 20t$.',
          hint2: '$16$ is in $10 < t \\le 20$, so use $250 - 8(16 - 10)$.',
          hint3: 'The second piece loses $40$ liters every $5$ minutes.',
          explanation: '1) $50 + 80 = 130$ liters.  2) $250 - 48 = 202$ liters.  3) $\\frac{-40}{5} = -8$ L/min: the tank drains $8$ liters per minute.',
        },
      },
      {
        id: 'pw4-words-dropdown',
        type: 'dropdown-select' as const,
        content: `**Words to Conditions** 🔽

Turn each phrase into the condition for its piece.`,
        exercise: {
          dropdowns: [
            { label: '"At most $5$ GB" of data $g$:', options: ['$g \\le 5$', '$g < 5$', '$g \\ge 5$', '$g > 5$'] },
            { label: '"Under $2$ lb" for weight $w$:', options: ['$w < 2$', '$w \\le 2$', '$w > 2$', '$w \\ge 2$'] },
            { label: '"Age $18$ or older" for age $a$:', options: ['$a \\ge 18$', '$a > 18$', '$a < 18$', '$a \\le 18$'] },
          ],
          correctAnswers: ['$g \\le 5$', '$w < 2$', '$a \\ge 18$'],
          hint1: '"At most" means the value can equal $5$ but not exceed it.',
          hint2: '"Under" excludes the boundary itself.',
          hint3: '"Or older" includes $18$.',
          explanation: '"At most" → $\\le$. "Under" → $<$. "Or older" → $\\ge$. Included boundaries use $\\le$ or $\\ge$; excluded ones use $<$ or $>$.',
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

**Piece 1, $x^2$ on $[-2, 0)$:** As $x$ runs from $-2$ up to (but not including) $0$, $x^2$ runs from $(-2)^2=4$ down toward $0^2=0$. At $x=-2$ (included) we get $4$; for inputs just left of $0$ (which is excluded), $x^2$ gets close to $0$ but never reaches it. Outputs: $(0, 4]$.

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
              options: ['$[4, 6]$', '$[0, 6]$', '$(-\\infty, 6]$', '$\\{4, 6\\}$'],
              correctAnswer: 0,
              explanation: 'The top piece outputs only $4$. The bottom piece $x+4$ on $[0,2]$ outputs $[4,6]$. Union: $\\{4\\}\\cup[4,6]=[4,6]$.',
            },
            {
              question: 'To find the *domain* of a piecewise function, you should:',
              options: [
                'Combine the intervals named in the conditions',
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
          hint3: 'At $x=-2$: $(-2)^2=4$. For inputs near $0$, $x^2$ is near $0$, so $x^2$ ranges over $(0,4]$ — largest is $4$.',
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
              options: ['$3 - x$', '$x - 3$', '$x + 3$', '$-x - 3$'],
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

You can read brace notation, evaluate carefully at boundaries, graph with open/closed dots, build piecewise models from words and data, find domain and range, and decode absolute-value and step functions. Now let's use it on a real model — then prove your mastery.`,
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

> 💡 **The brackets agree at the boundary.** At $x=10000$: top gives $0.10(10000)=1000$; bottom gives $1000+0.20(0)=1000$. They match, so earning one more dollar never causes a sudden leap in tax — exactly how real brackets are designed.`,
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
              options: ['$10$', '$8$', '$4$', '$6$'],
              correctAnswer: 0,
              explanation: '$f(-2)$: $-2<0$ → $(-2)^2-1 = 4-1 = 3$. $f(3)$: $3\\ge 0$ → $2(3)+1 = 7$. Sum $= 3+7 = 10$. Using $2x+1$ at $x=-2$ instead gives $-3 + 7 = 4$.',
            },
            {
              question: 'A gym charges \\$40 per month for up to $8$ classes and \\$5 for each class beyond $8$. What is the monthly cost for $11$ classes?',
              options: ['\\$55', '\\$95', '\\$40', '\\$15'],
              correctAnswer: 0,
              explanation: '$11 > 8$, so use the second piece, $40 + 5(c - 8)$: $40 + 5(3) = 55$. Charging \\$5 for all $11$ classes gives \\$95, and \\$15 leaves out the base fee.',
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
| Build a model | One rule per interval; "at most" → $\\le$, "more than" → $>$; restrict the domain to the context |
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
              question: 'A garage charges \\$6 for parking up to $2$ hours, plus \\$4 for each hour after the first $2$. Which rule gives the cost for $t > 2$ hours?',
              options: ['$6 + 4(t - 2)$', '$6 + 4t$', '$4(t - 2)$', '$6t + 4$'],
              correctAnswer: 0,
              explanation: 'The \\$4 charge applies only to the hours beyond $2$, which is $t - 2$, on top of the \\$6 base. The rule $6 + 4t$ also charges for the first $2$ hours, and $4(t - 2)$ drops the base fee.',
            },
            {
              question: 'Data: $(0, 2)$, $(2, 8)$, $(4, 14)$, $(6, 14)$, $(8, 14)$. Which piecewise model fits all five points?',
              options: [
                '$\\begin{cases} 2 + 3x & 0 \\le x \\le 4 \\\\ 14 & 4 < x \\le 8 \\end{cases}$',
                '$\\begin{cases} 3x & 0 \\le x \\le 4 \\\\ 14 & 4 < x \\le 8 \\end{cases}$',
                '$\\begin{cases} 2 + 6x & 0 \\le x \\le 4 \\\\ 14 & 4 < x \\le 8 \\end{cases}$',
                '$\\begin{cases} 2 + 3x & 0 \\le x \\le 4 \\\\ 14x & 4 < x \\le 8 \\end{cases}$',
              ],
              correctAnswer: 0,
              explanation: 'From $x = 0$ to $4$ the outputs rise $6$ every $2$ units, a rate of $3$ starting at $2$: $2 + 3x$. After $x = 4$ they stay at $14$, a constant piece. Using $6$ as the slope ignores the input step of $2$, and $14x$ would keep growing.',
            },
          ],
        },
      },
    ],
  },
]
