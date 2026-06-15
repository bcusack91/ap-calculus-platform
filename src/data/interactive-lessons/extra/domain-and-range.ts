import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Domain and Range (Algebra 1).
 * Registry key: 'domain-and-range' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'domain-and-range',
    sections: [
      {
        id: 'dr1-intro',
        type: 'text' as const,
        content: `# 🎯 Domain and Range

**Part 1 of 5 — What Domain and Range Mean**

---

### Topics in This Part

| Section |
|---------|
| Inputs, Outputs, and Functions |
| Defining Domain and Range |
| Three Ways to Write a Set of Numbers |

> 🔑 **Key Concept:** Every function is a machine: you feed it an **input** ($x$) and it returns an **output** ($y$). The **domain** is the collection of all legal inputs; the **range** is the collection of all outputs the machine can produce.`,
      },
      {
        id: 'dr1-machine',
        type: 'text' as const,
        content: `## Inputs, Outputs, and Functions

Think of $f(x) = 2x + 1$ as a function machine. Drop a number in for $x$, and out comes a result:

| Input $x$ | Rule $2x+1$ | Output $f(x)$ |
|-----------|-------------|---------------|
| $-2$ | $2(-2)+1$ | $-3$ |
| $0$ | $2(0)+1$ | $1$ |
| $3$ | $2(3)+1$ | $7$ |

- The **domain** is the set of every $x$ you are *allowed* to put in.
- The **range** is the set of every $y$ that can *come out*.

> 💡 A handy phrase: **"Domain = $x$, Range = $y$."** Domain is read left-to-right along the horizontal axis; range is read bottom-to-top along the vertical axis.`,
      },
      {
        id: 'dr1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement is correct?',
              options: [
                'The domain is the set of outputs ($y$-values).',
                'The domain is the set of inputs ($x$-values).',
                'The range is the set of inputs ($x$-values).',
                'Domain and range are always the same set.',
              ],
              correctAnswer: 1,
              explanation: 'Domain = inputs = $x$-values. Range = outputs = $y$-values. They describe two different axes and are usually different sets.',
            },
            {
              question: 'For $f(x) = 2x + 1$, what output do you get from the input $x = 5$?',
              options: ['$11$', '$10$', '$7$', '$6$'],
              correctAnswer: 0,
              explanation: '$f(5) = 2(5) + 1 = 10 + 1 = 11$. The input $5$ belongs to the domain; the output $11$ belongs to the range.',
            },
          ],
        },
      },
      {
        id: 'dr1-discrete',
        type: 'text' as const,
        content: `## Domain & Range of a Set of Points

When a relation is just a list of points, the domain is the set of all the $x$-coordinates and the range is the set of all the $y$-coordinates. **List each value once, in increasing order.**

### Example

$$\\{(-3,\\,4),\\;(0,\\,1),\\;(2,\\,4),\\;(5,\\,-2)\\}$$

- **Domain:** $\\{-3,\\,0,\\,2,\\,5\\}$ — the $x$-coordinates.
- **Range:** $\\{-2,\\,1,\\,4\\}$ — the $y$-coordinates, with the repeated $4$ written only once.

> ⚠️ A value that appears more than once is still listed a **single** time. Here $4$ shows up twice as a $y$-coordinate, but the range contains just one $4$.`,
      },
      {
        id: 'dr1-points-drill',
        type: 'input-boxes' as const,
        content: `**Read the Coordinates** 🧮

Use the relation $\\{(-1,\\,7),\\;(3,\\,2),\\;(4,\\,7),\\;(6,\\,0)\\}$.

**1)** How many distinct values are in the domain? $\\,?$
**2)** How many distinct values are in the range? $\\,?$
**3)** What is the smallest number in the domain? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '3', '-1'],
          hint1: 'The domain is the set of $x$-coordinates: $\\{-1, 3, 4, 6\\}$.',
          hint2: 'The range is the set of $y$-coordinates: $\\{7, 2, 7, 0\\}$ — but $7$ repeats, so list it once.',
          hint3: 'Order the domain: $-1 < 3 < 4 < 6$. The smallest is $-1$.',
          explanation: 'Domain $= \\{-1, 3, 4, 6\\}$ → 4 values, smallest $-1$. Range $= \\{0, 2, 7\\}$ → 3 distinct values ($7$ counts once).',
        },
      },
      {
        id: 'dr1-notation',
        type: 'text' as const,
        content: `## Three Ways to Describe a Set

The same set of numbers can be written three ways. You will meet all three:

| Notation | "All real numbers from $-2$ up to (not including) $5$" |
|----------|--------------------------------------------------------|
| **Words** | $x$ is at least $-2$ and less than $5$ |
| **Inequality** | $-2 \\le x < 5$ |
| **Interval** | $[-2,\\, 5)$ |

The bracket rules for interval notation:
- **Square bracket** $[\\;]$ → endpoint **is included** (matches $\\le$ or $\\ge$).
- **Round bracket** $(\\;)$ → endpoint **is excluded** (matches $<$ or $>$).
- **$\\infty$ and $-\\infty$** always get a round bracket — you can never "reach" infinity.

> 🔑 **All real numbers** is written $(-\\infty,\\, \\infty)$. We use this constantly in Part 3.`,
      },
      {
        id: 'dr1-notation-drop',
        type: 'dropdown-select' as const,
        content: `**Translate the Notation** 🔽

Match each inequality to its correct interval.`,
        exercise: {
          dropdowns: [
            { label: '$x > 3$', options: ['$(3,\\, \\infty)$', '$[3,\\, \\infty)$', '$(-\\infty,\\, 3)$', '$(-\\infty,\\, 3]$'] },
            { label: '$-1 \\le x \\le 4$', options: ['$[-1,\\, 4]$', '$(-1,\\, 4)$', '$[-1,\\, 4)$', '$(-1,\\, 4]$'] },
            { label: '$x \\le 0$', options: ['$(-\\infty,\\, 0]$', '$(-\\infty,\\, 0)$', '$[0,\\, \\infty)$', '$(0,\\, \\infty)$'] },
          ],
          correctAnswers: ['$(3,\\, \\infty)$', '$[-1,\\, 4]$', '$(-\\infty,\\, 0]$'],
          hint1: '$>$ excludes the endpoint (round bracket), and $\\infty$ always gets a round bracket.',
          hint2: '$\\le$ on both ends includes both endpoints, so use square brackets on both sides.',
          hint3: '$x \\le 0$ stretches from $-\\infty$ (round) up to and including $0$ (square).',
          explanation: '$x>3 \\to (3,\\infty)$; $-1 \\le x \\le 4 \\to [-1,4]$; $x \\le 0 \\to (-\\infty, 0]$. Square = included, round = excluded.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'domain-and-range',
    sections: [
      {
        id: 'dr2-intro',
        type: 'text' as const,
        content: `# 🎯 Domain and Range

**Part 2 of 5 — Reading Domain & Range from Graphs**

---

> 🔑 **The Idea:** To find a domain from a graph, "flatten" the curve onto the $x$-axis and ask *how far left and right* it reaches. For the range, project onto the $y$-axis and ask *how far down and up* it reaches.`,
      },
      {
        id: 'dr2-project',
        type: 'text' as const,
        content: `## Project Onto the Axes

- **Domain:** scan **left → right**. What is the smallest $x$ the graph touches? The largest? That horizontal sweep is the domain.
- **Range:** scan **bottom → top**. What is the lowest $y$? The highest? That vertical sweep is the range.

### Example: a parabola opening up

The graph of $y = x^2$ stretches forever left and right, so its domain is **all real numbers**, $(-\\infty,\\, \\infty)$.

Its lowest point is the vertex at $y = 0$, and it climbs forever upward, so its range is $y \\ge 0$, written $[0,\\, \\infty)$.

| Feature | $y = x^2$ |
|---------|-----------|
| Domain | $(-\\infty,\\, \\infty)$ |
| Lowest output | $0$ (at the vertex) |
| Range | $[0,\\, \\infty)$ |

> 💡 A plain line like $y = 2x + 1$ also has domain **and** range equal to $(-\\infty,\\, \\infty)$ — it covers every $x$ and every $y$.`,
      },
      {
        id: 'dr2-graph-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A parabola has its lowest point (vertex) at $(1, -4)$ and opens upward. What is its range?',
              options: ['$[-4,\\, \\infty)$', '$(-\\infty,\\, -4]$', '$[1,\\, \\infty)$', '$(-\\infty,\\, \\infty)$'],
              correctAnswer: 0,
              explanation: 'Opening up, the vertex is the minimum, so the lowest output is $y = -4$ and it climbs forever. Range $= [-4, \\infty)$. (The $-4$ is included, so a square bracket.)',
            },
            {
              question: 'A parabola opens DOWNWARD with vertex at $(0, 5)$. What is its range?',
              options: ['$(-\\infty,\\, 5]$', '$[5,\\, \\infty)$', '$(-\\infty,\\, \\infty)$', '$[0,\\, 5]$'],
              correctAnswer: 0,
              explanation: 'Opening down, the vertex is the maximum, so the highest output is $y = 5$ and the graph falls forever below it. Range $= (-\\infty, 5]$.',
            },
          ],
        },
      },
      {
        id: 'dr2-endpoints',
        type: 'text' as const,
        content: `## Open vs. Closed Endpoints

Graphs often start or stop. The **dot** at an endpoint tells you whether that point is included:

- **Closed (filled) dot ●** → the point **is** part of the graph → use a square bracket.
- **Open (hollow) dot ○** → the point is **not** part of the graph → use a round bracket.

### Example

A line segment is drawn from a **closed** dot at $(-2,\\,1)$ to an **open** dot at $(3,\\,6)$.

- **Domain:** $x$ runs from $-2$ (included) to $3$ (excluded) → $[-2,\\, 3)$.
- **Range:** as $x$ goes from $-2$ to $3$, $y$ rises from $1$ (included) to $6$ (excluded) → $[1,\\, 6)$.

> ⚠️ Match each bracket to its **own** dot. A graph can be closed on one end and open on the other, like $[-2,\\, 3)$ above.`,
      },
      {
        id: 'dr2-endpoint-drop',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Bracket** 🔽

A curve runs from a **closed** dot at $(-5,\\,2)$ to an **open** dot at $(4,\\,2)$, dipping to a lowest point of $y = -1$ in between.`,
        exercise: {
          dropdowns: [
            { label: 'Left edge of the domain:', options: ['$[-5$', '$(-5$', '$[2$', '$(2$'] },
            { label: 'Right edge of the domain:', options: ['$4)$', '$4]$', '$2)$', '$2]$'] },
            { label: 'The full domain is:', options: ['$[-5,\\, 4)$', '$(-5,\\, 4]$', '$[-5,\\, 4]$', '$(-5,\\, 4)$'] },
          ],
          correctAnswers: ['$[-5$', '$4)$', '$[-5,\\, 4)$'],
          hint1: 'A closed dot at $x = -5$ means $-5$ is included → square bracket "$[$".',
          hint2: 'An open dot at $x = 4$ means $4$ is excluded → round bracket "$)$".',
          hint3: 'Combine the left square bracket and the right round bracket: $[-5,\\, 4)$.',
          explanation: 'Closed at $-5$ → "$[$"; open at $4$ → "$)$". Domain $= [-5,\\, 4)$. (The $y$-values at the ends are both $2$; only the dot style, not the height, sets the bracket.)',
        },
      },
      {
        id: 'dr2-graph-drill',
        type: 'input-boxes' as const,
        content: `**Read the Sweep** 🧮

A graph is a solid curve. Its leftmost point is a **closed** dot at $(-3,\\,0)$ and its rightmost point is a **closed** dot at $(6,\\,9)$. Along the way it never goes below $y = 0$.

**1)** Smallest $x$-value in the domain $= \\,?$
**2)** Largest $x$-value in the domain $= \\,?$
**3)** Smallest $y$-value in the range $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-3', '6', '0'],
          hint1: 'Scan left to right: the curve starts at $x = -3$ and ends at $x = 6$.',
          hint2: 'Both ends are closed dots, so both endpoints are included: domain $[-3,\\, 6]$.',
          hint3: 'For the range, scan bottom to top. The lowest the curve reaches is $y = 0$.',
          explanation: 'Domain $= [-3,\\, 6]$ (both ends closed). The lowest output is $y = 0$, so the range starts at $0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'domain-and-range',
    sections: [
      {
        id: 'dr3-intro',
        type: 'text' as const,
        content: `# 🎯 Domain and Range

**Part 3 of 5 — Domain from an Equation**

---

> 🔑 **The Idea:** When you only have a formula, start by **assuming every real number is allowed**, then *remove* the values that break a rule. Two things break the rules: **dividing by zero** and **taking the square root of a negative**.`,
      },
      {
        id: 'dr3-rules',
        type: 'text' as const,
        content: `## The Two Forbidden Moves

| Trouble | The rule | What to do |
|---------|----------|------------|
| **Division by zero** | The denominator can never equal $0$. | Set the denominator $= 0$, solve, and *exclude* that $x$. |
| **Even root of a negative** | Under a $\\sqrt{\\;\\;}$, the inside can't be negative. | Set the radicand $\\ge 0$ and solve for the allowed $x$. |

Functions with **none** of these — plain polynomials like $y = 3x^2 - x + 4$ — have domain $(-\\infty,\\, \\infty)$. Nothing can break them.

> 💡 **Quick test:** No fraction with $x$ on the bottom and no square root of $x$? Then the domain is *all real numbers*.`,
      },
      {
        id: 'dr3-poly-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the domain of $f(x) = 5x^3 - 2x + 7$?',
              options: ['$(-\\infty,\\, \\infty)$', '$[0,\\, \\infty)$', '$x \\ne 0$', '$[7,\\, \\infty)$'],
              correctAnswer: 0,
              explanation: 'This is a polynomial: no denominator with $x$ and no square root. Every real number is allowed, so the domain is $(-\\infty, \\infty)$.',
            },
            {
              question: 'Which feature of a function FORCES you to exclude values from the domain?',
              options: [
                'A variable in the denominator of a fraction.',
                'A negative coefficient.',
                'A large exponent like $x^4$.',
                'Adding a constant such as $+7$.',
              ],
              correctAnswer: 0,
              explanation: 'A variable in the denominator can make the denominator zero (illegal). A variable inside an even root can make the radicand negative (also illegal). Coefficients, exponents, and constants never restrict the domain.',
            },
          ],
        },
      },
      {
        id: 'dr3-frac',
        type: 'text' as const,
        content: `## Fractions: Exclude Where the Bottom Is Zero

### Example: $f(x) = \\dfrac{1}{x - 3}$

Set the denominator equal to zero and solve:

$$x - 3 = 0 \\;\\Rightarrow\\; x = 3$$

So $x = 3$ is forbidden; everything else is fine.

- **Inequality:** $x \\ne 3$
- **Interval:** $(-\\infty,\\, 3) \\cup (3,\\, \\infty)$  ← the symbol $\\cup$ means "union" (glue the two pieces together).

### Example: $g(x) = \\dfrac{x+1}{x^2 - 4}$

$$x^2 - 4 = 0 \\;\\Rightarrow\\; x^2 = 4 \\;\\Rightarrow\\; x = \\pm 2$$

Exclude **both**: domain is $x \\ne 2$ and $x \\ne -2$.

> ⚠️ You only solve the **denominator** $= 0$. The numerator never restricts the domain — it's perfectly fine for the top to be zero.`,
      },
      {
        id: 'dr3-frac-drill',
        type: 'input-boxes' as const,
        content: `**Find the Forbidden Inputs** 🧮

For each function, enter the $x$-value(s) that must be excluded from the domain.

**1)** $f(x) = \\dfrac{4}{x - 8}$.  Excluded value $= \\,?$
**2)** $g(x) = \\dfrac{x}{x + 5}$.  Excluded value $= \\,?$
**3)** $h(x) = \\dfrac{6}{2x - 10}$.  Excluded value $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '-5', '5'],
          hint1: 'Set $x - 8 = 0$, so $x = 8$ is excluded.',
          hint2: 'Set $x + 5 = 0$, so $x = -5$ is excluded.',
          hint3: 'Set $2x - 10 = 0 \\Rightarrow 2x = 10 \\Rightarrow x = 5$.',
          explanation: '1) $x = 8$.  2) $x = -5$.  3) $2x - 10 = 0 \\Rightarrow x = 5$. Each is where the denominator would be zero.',
        },
      },
      {
        id: 'dr3-root',
        type: 'text' as const,
        content: `## Square Roots: Keep the Inside $\\ge 0$

For an **even** root, force the radicand to be zero or positive.

### Example: $f(x) = \\sqrt{x - 2}$

$$x - 2 \\ge 0 \\;\\Rightarrow\\; x \\ge 2$$

Domain: $[2,\\, \\infty)$. (The endpoint $2$ **is** allowed, because $\\sqrt{0} = 0$ is perfectly legal — so a square bracket.)

### Example: $g(x) = \\sqrt{2x + 6}$

$$2x + 6 \\ge 0 \\;\\Rightarrow\\; 2x \\ge -6 \\;\\Rightarrow\\; x \\ge -3$$

Domain: $[-3,\\, \\infty)$.

> 💡 **Why $\\ge$ and not $>$?** Zero under the root is fine — $\\sqrt{0}=0$. Only **negative** insides are illegal, so the boundary point is always *included*.`,
      },
      {
        id: 'dr3-root-drop',
        type: 'dropdown-select' as const,
        content: `**Solve the Radicand** 🔽

Find the domain of each square-root function.`,
        exercise: {
          dropdowns: [
            { label: '$f(x) = \\sqrt{x - 5}$', options: ['$[5,\\, \\infty)$', '$(5,\\, \\infty)$', '$(-\\infty,\\, 5]$', '$x \\ne 5$'] },
            { label: '$g(x) = \\sqrt{x + 1}$', options: ['$[-1,\\, \\infty)$', '$[1,\\, \\infty)$', '$(-\\infty,\\, -1]$', '$[0,\\, \\infty)$'] },
            { label: '$h(x) = \\sqrt{3x - 9}$', options: ['$[3,\\, \\infty)$', '$[9,\\, \\infty)$', '$[-3,\\, \\infty)$', '$(3,\\, \\infty)$'] },
          ],
          correctAnswers: ['$[5,\\, \\infty)$', '$[-1,\\, \\infty)$', '$[3,\\, \\infty)$'],
          hint1: '$x - 5 \\ge 0 \\Rightarrow x \\ge 5$, and the endpoint is included.',
          hint2: '$x + 1 \\ge 0 \\Rightarrow x \\ge -1$.',
          hint3: '$3x - 9 \\ge 0 \\Rightarrow 3x \\ge 9 \\Rightarrow x \\ge 3$.',
          explanation: 'Set each radicand $\\ge 0$: $x \\ge 5 \\to [5,\\infty)$; $x \\ge -1 \\to [-1,\\infty)$; $3x \\ge 9 \\Rightarrow x \\ge 3 \\to [3,\\infty)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'domain-and-range',
    sections: [
      {
        id: 'dr4-intro',
        type: 'text' as const,
        content: `# 🎯 Domain and Range

**Part 4 of 5 — Range & Real-World Restrictions**

---

> 🔑 **The Idea:** Range answers "what outputs are possible?" For familiar shapes you can reason it out from the vertex or the floor of a square root. And in word problems, **context** can shrink a domain that the math alone would allow.`,
      },
      {
        id: 'dr4-range',
        type: 'text' as const,
        content: `## Range of Common Functions

| Function | Range | Why |
|----------|-------|-----|
| Line $y = mx + b$ (with $m \\ne 0$) | $(-\\infty,\\, \\infty)$ | rises/falls forever |
| $y = x^2$ | $[0,\\, \\infty)$ | never negative; min $0$ |
| $y = a(x-h)^2 + k$, opens **up** | $[k,\\, \\infty)$ | vertex is the minimum |
| $y = a(x-h)^2 + k$, opens **down** | $(-\\infty,\\, k]$ | vertex is the maximum |
| $y = \\sqrt{x}$ | $[0,\\, \\infty)$ | a root is never negative |
| $y = |x|$ | $[0,\\, \\infty)$ | absolute value is never negative |

> 💡 For a parabola in vertex form, the range starts (or ends) at the vertex's $y$-value $k$. **Up** → range goes up from $k$. **Down** → range goes down from $k$.`,
      },
      {
        id: 'dr4-range-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the range of $y = |x| + 3$?',
              options: ['$[3,\\, \\infty)$', '$(-\\infty,\\, \\infty)$', '$[0,\\, \\infty)$', '$(3,\\, \\infty)$'],
              correctAnswer: 0,
              explanation: '$|x|$ is at least $0$, so $|x| + 3$ is at least $0 + 3 = 3$. The smallest output is $3$ (when $x = 0$), and it climbs forever: range $= [3, \\infty)$.',
            },
            {
              question: 'A parabola in vertex form is $y = -2(x - 1)^2 + 6$. What is its range?',
              options: ['$(-\\infty,\\, 6]$', '$[6,\\, \\infty)$', '$(-\\infty,\\, 1]$', '$[1,\\, 6]$'],
              correctAnswer: 0,
              explanation: 'The coefficient $-2$ is negative, so it opens DOWN and the vertex $(1, 6)$ is the maximum. Outputs run from $-\\infty$ up to and including $6$: range $= (-\\infty, 6]$.',
            },
          ],
        },
      },
      {
        id: 'dr4-context',
        type: 'text' as const,
        content: `## Real-World Domains: Let Context Decide

In an application, a value that is mathematically legal can still be **physically impossible**. Ask: *can this quantity really be negative? a fraction? huge?*

### Example: filling a pool

A pool fills at $5$ gallons per minute, holding at most $300$ gallons. The volume is $V(t) = 5t$.

- **Math alone** would allow any $t$, even negative.
- **Context:** time can't be negative, and once the pool is full at $t = 60$ minutes ($5 \\cdot 60 = 300$), filling stops.
- **Realistic domain:** $0 \\le t \\le 60$, i.e. $[0,\\, 60]$.
- **Realistic range:** $0 \\le V \\le 300$, i.e. $[0,\\, 300]$.

> ⚠️ Counting quantities (people, cars, tickets) force a domain of **whole numbers** — that's a *discrete* domain, not a smooth interval.`,
      },
      {
        id: 'dr4-context-drop',
        type: 'dropdown-select' as const,
        content: `**Restrict for Reality** 🔽

A taxi charges a \\$3 flat fee plus \\$2 per mile: $C(m) = 3 + 2m$, where $m$ is miles driven (up to a $50$-mile limit).`,
        exercise: {
          dropdowns: [
            { label: 'Smallest sensible value of $m$:', options: ['$0$', '$-50$', '$3$', '$1$'] },
            { label: 'Realistic domain of $m$:', options: ['$[0,\\, 50]$', '$(-\\infty,\\, \\infty)$', '$[3,\\, 50]$', '$(0,\\, 50)$'] },
            { label: 'Cost when $m = 0$ (the minimum charge):', options: ['$\\$3$', '$\\$0$', '$\\$2$', '$\\$5$'] },
          ],
          correctAnswers: ['$0$', '$[0,\\, 50]$', '$\\$3$'],
          hint1: 'You can drive $0$ miles, but not a negative number of miles.',
          hint2: 'Miles run from $0$ up to the $50$-mile limit, both included: $[0,\\, 50]$.',
          hint3: 'At $m = 0$: $C(0) = 3 + 2(0) = 3$, just the flat fee.',
          explanation: 'Miles can\'t be negative and cap at $50$, so the domain is $[0, 50]$. The least cost is the $\\$3$ flat fee at $m = 0$.',
        },
      },
      {
        id: 'dr4-context-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Context** 🧮

Use the pool from above: $V(t) = 5t$, full at $300$ gallons, $0 \\le t \\le 60$.

**1)** How many gallons after $t = 10$ minutes? $\\,?$
**2)** At what time $t$ is the pool full? $\\,?$
**3)** The largest value in the range of $V$ (in gallons) $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['50', '60', '300'],
          hint1: '$V(10) = 5 \\cdot 10 = 50$ gallons.',
          hint2: 'Full means $V = 300$: solve $5t = 300 \\Rightarrow t = 60$.',
          hint3: 'The range tops out at the pool\'s capacity, $300$ gallons.',
          explanation: '$V(10) = 50$ gallons. Full when $5t = 300 \\Rightarrow t = 60$ min. Range $= [0, 300]$, so the max output is $300$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'domain-and-range',
    sections: [
      {
        id: 'dr5-intro',
        type: 'text' as const,
        content: `# 🎯 Domain and Range

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) define domain and range, (2) read them off a graph, (3) find a domain from an equation, and (4) account for range and real-world limits. Let's put it together.`,
      },
      {
        id: 'dr5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | What to do |
|-----------|------------|
| Set of points | Domain = distinct $x$'s; Range = distinct $y$'s |
| Graph | Domain = left↔right sweep; Range = down↔up sweep |
| Polynomial | Domain $= (-\\infty,\\, \\infty)$ |
| Fraction $\\dfrac{\\ }{\\,\\text{denom}\\,}$ | Exclude where **denominator $= 0$** |
| Square root $\\sqrt{\\ }$ | Require **radicand $\\ge 0$** |
| Word problem | Trim with **context** (no negatives, caps, whole numbers) |

> ⚠️ Bracket reminder: **square $[\\;]$ = included** (matches $\\le, \\ge$, closed dot), **round $(\\;)$ = excluded** (matches $<, >$, open dot, and always $\\pm\\infty$).`,
      },
      {
        id: 'dr5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the domain of $f(x) = \\dfrac{x + 2}{x - 7}$?',
              options: [
                'All real numbers except $x = 7$.',
                'All real numbers except $x = -2$.',
                '$x \\ge 7$',
                'All real numbers.',
              ],
              correctAnswer: 0,
              explanation: 'Set the denominator $x - 7 = 0 \\Rightarrow x = 7$, which must be excluded. The numerator never restricts the domain, so the answer is "all reals except $7$."',
            },
            {
              question: 'What is the domain of $g(x) = \\sqrt{x + 4}$?',
              options: ['$[-4,\\, \\infty)$', '$[4,\\, \\infty)$', '$(-\\infty,\\, -4]$', '$(-4,\\, \\infty)$'],
              correctAnswer: 0,
              explanation: 'Require $x + 4 \\ge 0 \\Rightarrow x \\ge -4$. The endpoint $-4$ is included (since $\\sqrt{0}=0$), so the domain is $[-4, \\infty)$.',
            },
            {
              question: 'The range of $y = x^2 - 5$ is:',
              options: ['$[-5,\\, \\infty)$', '$(-\\infty,\\, -5]$', '$[0,\\, \\infty)$', '$(-\\infty,\\, \\infty)$'],
              correctAnswer: 0,
              explanation: 'Since $x^2 \\ge 0$, we get $x^2 - 5 \\ge -5$. The minimum output is $-5$ (at $x = 0$) and it climbs forever: range $= [-5, \\infty)$.',
            },
          ],
        },
      },
      {
        id: 'dr5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More Set** 🧮

**1)** Relation $\\{(2,\\,9),\\;(5,\\,9),\\;(8,\\,1)\\}$: how many distinct values are in the range? $\\,?$
**2)** $f(x) = \\dfrac{1}{x + 6}$: which $x$-value is excluded from the domain? $\\,?$
**3)** $g(x) = \\sqrt{x - 7}$: what is the smallest $x$ in the domain? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '-6', '7'],
          hint1: 'Range = distinct $y$-values: $\\{9, 9, 1\\} \\to \\{1, 9\\}$, so $2$ of them.',
          hint2: 'Set $x + 6 = 0 \\Rightarrow x = -6$.',
          hint3: 'Require $x - 7 \\ge 0 \\Rightarrow x \\ge 7$; the smallest allowed $x$ is $7$.',
          explanation: '1) Range $\\{1, 9\\}$ → 2 values ($9$ counts once). 2) $x = -6$ makes the denominator zero. 3) $x - 7 \\ge 0 \\Rightarrow x \\ge 7$, smallest is $7$.',
        },
      },
      {
        id: 'dr5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which is the correct interval notation for $-3 < x \\le 5$?',
              options: ['$(-3,\\, 5]$', '$[-3,\\, 5)$', '$[-3,\\, 5]$', '$(-3,\\, 5)$'],
              correctAnswer: 0,
              explanation: '$<$ excludes $-3$ → round "$($"; $\\le$ includes $5$ → square "$]$". Result: $(-3,\\, 5]$.',
            },
            {
              question: 'What is the domain of $f(x) = \\dfrac{10}{x^2 - 9}$?',
              options: [
                'All reals except $x = 3$ and $x = -3$.',
                'All reals except $x = 9$.',
                'All reals except $x = 3$.',
                'All real numbers.',
              ],
              correctAnswer: 0,
              explanation: 'Set $x^2 - 9 = 0 \\Rightarrow x^2 = 9 \\Rightarrow x = \\pm 3$. Both $3$ and $-3$ make the denominator zero, so both are excluded.',
            },
            {
              question: 'A downward parabola has vertex $(2, 8)$. What is its range?',
              options: ['$(-\\infty,\\, 8]$', '$[8,\\, \\infty)$', '$(-\\infty,\\, 2]$', '$[2,\\, 8]$'],
              correctAnswer: 0,
              explanation: 'Opening down, the vertex is the maximum output, $y = 8$. The graph falls forever below it: range $= (-\\infty, 8]$.',
            },
          ],
        },
      },
    ],
  },
]
