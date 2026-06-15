import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Introduction to Functions (Algebra 1).
 * Registry key: 'functions-basics-algebra1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'functions-basics-algebra1',
    sections: [
      {
        id: 'fn1-intro',
        type: 'text' as const,
        content: `# ⚙️ Introduction to Functions

**Part 1 of 5 — What Is a Function?**

---

### Topics in This Part

| Section |
|---------|
| Relations vs. Functions |
| The Vending-Machine Idea |
| The "One Output" Rule |

> 🔑 **Key Concept:** A **function** is a rule that takes each input and gives back **exactly one** output. That single restriction — one output per input — is the whole idea behind everything in this lesson.`,
      },
      {
        id: 'fn1-relation',
        type: 'text' as const,
        content: `## Relations vs. Functions

A **relation** is any set of ordered pairs $(x, y)$ — it just pairs inputs with outputs.

A **function** is a *special* relation: every input is paired with **exactly one** output.

Think of a **vending machine**. You press a button (the **input**) and you get one specific snack (the **output**). Press B4 and you always get the same chips. If pressing B4 sometimes gave chips and sometimes gave a candy bar, the machine would be broken — and *that* broken machine is **not a function**.

| Input $x$ | → | Output $y$ |
|-----------|---|------------|
| $1$ | → | $3$ |
| $2$ | → | $5$ |
| $3$ | → | $7$ |

Every input above leads to one output, so this relation **is** a function.

> 🔑 **The Rule:** No input is allowed to have *two* outputs. (An output can be repeated — that's fine — but an input can never split.)`,
      },
      {
        id: 'fn1-check-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement correctly describes a function?',
              options: [
                'Each input has exactly one output',
                'Each output has exactly one input',
                'Every input gives two outputs',
                'Inputs and outputs must all be different',
              ],
              correctAnswer: 0,
              explanation: 'A function pairs each input with exactly one output. Outputs may repeat, and the same input can never lead to two different outputs.',
            },
            {
              question: 'Which set of ordered pairs is a function?',
              options: [
                '$\\{(1, 4), (1, 5), (2, 6)\\}$',
                '$\\{(2, 3), (4, 3), (6, 3)\\}$',
                '$\\{(0, 1), (0, 2), (3, 4)\\}$',
                '$\\{(5, 9), (5, 8), (5, 7)\\}$',
              ],
              correctAnswer: 1,
              explanation: 'In $\\{(2,3),(4,3),(6,3)\\}$ every input ($2,4,6$) has exactly one output. The output $3$ repeats, which is allowed. The others reuse an input ($1$, $0$, or $5$) with two different outputs.',
            },
          ],
        },
      },
      {
        id: 'fn1-mapping',
        type: 'text' as const,
        content: `## Spotting a Non-Function

A relation **fails** to be a function the moment one input points to two different outputs.

**This IS a function** — each input has one arrow out:

$$1 \\to 3, \\quad 2 \\to 6, \\quad 3 \\to 9$$

**This is NOT a function** — the input $2$ points to *two* outputs:

$$1 \\to 3, \\quad 2 \\to 6, \\quad 2 \\to 8$$

> ⚠️ **Watch the inputs, not the outputs.** Two inputs sharing the *same* output is perfectly fine. It is only a problem when one *input* has two outputs.`,
      },
      {
        id: 'fn1-drill-yesno',
        type: 'dropdown-select' as const,
        content: `**Function or Not?** 🔽

For each relation, decide whether it is a function.`,
        exercise: {
          dropdowns: [
            { label: '$\\{(1, 2), (2, 4), (3, 6)\\}$', options: ['Function', 'Not a function'] },
            { label: '$\\{(0, 5), (1, 5), (0, 7)\\}$', options: ['Function', 'Not a function'] },
            { label: '$\\{(-2, 1), (-1, 1), (0, 1)\\}$', options: ['Function', 'Not a function'] },
          ],
          correctAnswers: ['Function', 'Not a function', 'Function'],
          hint1: 'Look for an input that appears twice with two different outputs.',
          hint2: 'In the second set, the input $0$ appears with both $5$ and $7$.',
          hint3: 'Repeated outputs are fine; repeated inputs with different outputs are not.',
          explanation: '1) All inputs are distinct → function. 2) Input $0$ maps to both $5$ and $7$ → not a function. 3) Inputs $-2, -1, 0$ are distinct (output $1$ repeating is allowed) → function.',
        },
      },
      {
        id: 'fn1-recap-test',
        type: 'text' as const,
        content: `## A Quick Way to Test

To decide if a relation is a function, **scan the inputs**:

1. List every input (first coordinate).
2. If the *same* input ever shows up with two *different* outputs, it is **not** a function.
3. Otherwise, it **is** a function.

That is the only check you ever need for a set of ordered pairs.`,
      },
      {
        id: 'fn1-count-outputs',
        type: 'input-boxes' as const,
        content: `**Count the Outputs** 🧮

A relation is a function when **no input** has more than one output.

**1)** In $\\{(1, 2), (2, 4), (3, 2)\\}$, how many *different inputs* are there? (Answer with a number.)
**2)** In that same set, does any single input appear with two different outputs? (Answer 0 for no, 1 for yes.)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '0'],
          hint1: 'The inputs are the first coordinates: $1, 2, 3$.',
          hint2: 'Check whether any input is listed twice with two different outputs.',
          hint3: 'Output $2$ repeats (for inputs $1$ and $3$), but no *input* repeats — that is allowed.',
          explanation: 'There are $3$ distinct inputs ($1, 2, 3$). No input has two outputs (the repeated output $2$ is fine), so this relation IS a function: answer $0$ for #2.',
        },
      },
      {
        id: 'fn1-wrap',
        type: 'text' as const,
        content: `## What You Have So Far

You can now tell a **function** from a plain **relation**: a function never lets one input split into two outputs.

In **Part 2**, we give the inputs and outputs their proper names — **domain** and **range** — and learn to read functions from tables, mappings, and graphs.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'functions-basics-algebra1',
    sections: [
      {
        id: 'fn2-intro',
        type: 'text' as const,
        content: `# ⚙️ Introduction to Functions

**Part 2 of 5 — Domain, Range & the Vertical Line Test**

---

> 🔑 **The Idea:** The set of all inputs is the **domain**; the set of all outputs is the **range**. And a graph is a function exactly when it passes the **vertical line test**.`,
      },
      {
        id: 'fn2-domain-range',
        type: 'text' as const,
        content: `## Domain and Range

- **Domain** = the set of all **inputs** ($x$-values).
- **Range** = the set of all **outputs** ($y$-values).

### Example

For the function $\\{(1, 4), (2, 5), (3, 6)\\}$:

$$\\text{Domain} = \\{1,\\, 2,\\, 3\\}, \\qquad \\text{Range} = \\{4,\\, 5,\\, 6\\}$$

> 💡 **List each value only once.** If an output repeats, you still write it a single time in the range. For $\\{(1, 7), (2, 7)\\}$ the range is just $\\{7\\}$.`,
      },
      {
        id: 'fn2-drill-dr',
        type: 'input-boxes' as const,
        content: `**Find the Range** 🧮

Give the **range** (set of outputs) of each function. Enter the outputs in increasing order, separated by commas, each value once.

**1)** $\\{(0, 2), (1, 5), (2, 8)\\}$ → range $= \\,?$
**2)** $\\{(-1, 4), (0, 4), (1, 9)\\}$ → range $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2,5,8', '4,9'],
          hint1: 'The range is the list of $y$-values (second coordinates).',
          hint2: 'For #2 the output $4$ appears twice — list it only once.',
          hint3: 'Write values smallest to largest, separated by commas, no spaces: like 2,5,8.',
          explanation: '1) Outputs are $2, 5, 8$ → range $\\{2,5,8\\}$. 2) Outputs are $4, 4, 9$; listing each once gives $\\{4, 9\\}$.',
        },
      },
      {
        id: 'fn2-vlt',
        type: 'text' as const,
        content: `## The Vertical Line Test

On a **graph**, an input is an $x$-value and its output is the height $y$. If a single $x$ had two outputs, the graph would have two points stacked vertically — and a vertical line would cross the graph **twice**.

> 🔑 **Vertical Line Test (VLT):** A graph is a function if **every** vertical line crosses it **at most once**.

| Graph | Vertical line hits it... | Function? |
|-------|--------------------------|-----------|
| A straight line $y = 2x + 1$ | once | ✅ yes |
| A parabola $y = x^2$ | once | ✅ yes |
| A circle $x^2 + y^2 = 9$ | twice | ❌ no |
| A sideways parabola $x = y^2$ | twice | ❌ no |

> ⚠️ A **circle** fails: the line $x = 0$ hits it at both $(0, 3)$ and $(0, -3)$ — one input, two outputs.`,
      },
      {
        id: 'fn2-check-vlt',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A graph passes the vertical line test when every vertical line crosses it:',
              options: [
                'at most once',
                'exactly twice',
                'at least twice',
                'never',
              ],
              correctAnswer: 0,
              explanation: 'If any vertical line crosses more than once, that $x$-value has two outputs, so the graph is not a function. "At most once" is the rule.',
            },
            {
              question: 'Which graph is NOT a function?',
              options: [
                'The line $y = -x + 4$',
                'The parabola $y = x^2 - 1$',
                'The circle $x^2 + y^2 = 25$',
                'The curve $y = x^3$',
              ],
              correctAnswer: 2,
              explanation: 'A circle fails the vertical line test — a vertical line through its interior hits the top and bottom, giving two outputs for one input. Lines, $y=x^2$, and $y=x^3$ all pass.',
            },
          ],
        },
      },
      {
        id: 'fn2-bridge',
        type: 'text' as const,
        content: `## Bringing It Together

A single function gives you **three** things at once:

- its **domain** (the inputs you read off the pairs),
- its **range** (the outputs), and
- a **graph** that passes the vertical line test.

The next check asks you to pull all three from one small function.`,
      },
      {
        id: 'fn2-dropdown-dr',
        type: 'dropdown-select' as const,
        content: `**Domain, Range & VLT** 🔽

Use the function $\\{(-2, 4), (0, 0), (3, 9)\\}$.`,
        exercise: {
          dropdowns: [
            { label: 'The domain is:', options: ['$\\{-2, 0, 3\\}$', '$\\{0, 4, 9\\}$', '$\\{-2, 4, 9\\}$', '$\\{4, 9\\}$'] },
            { label: 'The range is:', options: ['$\\{0, 4, 9\\}$', '$\\{-2, 0, 3\\}$', '$\\{4, 9\\}$', '$\\{-2, 3\\}$'] },
            { label: 'A graph where $x = 2$ crosses twice is:', options: ['not a function', 'a function', 'always a line', 'missing its range'] },
          ],
          correctAnswers: ['$\\{-2, 0, 3\\}$', '$\\{0, 4, 9\\}$', 'not a function'],
          hint1: 'Domain = first coordinates (the inputs).',
          hint2: 'Range = second coordinates (the outputs): $4, 0, 9$.',
          hint3: 'If any vertical line crosses twice, the graph fails the vertical line test.',
          explanation: 'Inputs $\\{-2, 0, 3\\}$ form the domain; outputs $\\{4, 0, 9\\}$ form the range. A vertical line crossing twice means one input has two outputs, so it is not a function.',
        },
      },
      {
        id: 'fn2-wrap',
        type: 'text' as const,
        content: `## Recap

- **Domain** = inputs, **Range** = outputs (each value listed once).
- **Vertical line test:** a graph is a function if no vertical line hits it more than once.

Next, in **Part 3**, we introduce **function notation** — the famous $f(x)$ — and learn what it really means to "evaluate" a function.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'functions-basics-algebra1',
    sections: [
      {
        id: 'fn3-intro',
        type: 'text' as const,
        content: `# ⚙️ Introduction to Functions

**Part 3 of 5 — Function Notation $f(x)$**

---

> 🔑 **Why $f(x)$?** The notation $f(x)$ is just a name for the **output** when the input is $x$. It is read "**f of x**" — it does **not** mean $f$ times $x$.`,
      },
      {
        id: 'fn3-notation',
        type: 'text' as const,
        content: `## Reading $f(x)$

In $f(x) = 2x + 1$:

- $f$ is the **name** of the function (the machine).
- $x$ is the **input** (the button you press).
- $f(x)$ is the **output** (what comes out).

To **evaluate**, substitute the number in for $x$ everywhere it appears.

### Example: evaluate $f(3)$ for $f(x) = 2x + 1$

$$f(3) = 2(3) + 1 = 6 + 1 = 7$$

So $f(3) = 7$. The point $(3, 7)$ is on the graph of $f$.

> 💡 $f(3)$ answers the question: *"When the input is $3$, what is the output?"* Here, the answer is $7$.`,
      },
      {
        id: 'fn3-drill-eval',
        type: 'input-boxes' as const,
        content: `**Evaluate the Function** 🧮

Let $f(x) = 3x - 4$. Find each output.

**1)** $f(2) = \\,?$
**2)** $f(0) = \\,?$
**3)** $f(-1) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '-4', '-7'],
          hint1: 'Replace $x$ with the number, then simplify: $f(2) = 3(2) - 4$.',
          hint2: '$f(0) = 3(0) - 4 = 0 - 4$.',
          hint3: 'Watch the sign: $f(-1) = 3(-1) - 4 = -3 - 4$.',
          explanation: '1) $3(2)-4 = 6-4 = 2$. 2) $3(0)-4 = -4$. 3) $3(-1)-4 = -3-4 = -7$.',
        },
      },
      {
        id: 'fn3-misconception',
        type: 'text' as const,
        content: `## A Common Trap

$f(x)$ is **not** multiplication. If $f(x) = x^2 + 1$, then:

$$f(4) = (4)^2 + 1 = 16 + 1 = 17 \\quad\\text{(correct)}$$

It is **not** $f \\cdot 4$ and it is **not** $4^2 \\cdot 1$. You substitute $4$ in for $x$ and follow the order of operations.

> ⚠️ Also be careful with negatives and squaring: $f(-3) = (-3)^2 + 1 = 9 + 1 = 10$. The square makes the negative positive.`,
      },
      {
        id: 'fn3-check-eval',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $g(x) = x^2 - 5$, what is $g(-2)$?',
              options: ['$-1$', '$-9$', '$-1$ becomes $9$', '$1$'],
              correctAnswer: 0,
              explanation: '$g(-2) = (-2)^2 - 5 = 4 - 5 = -1$. The square of $-2$ is $+4$.',
            },
            {
              question: 'The notation $f(5) = 12$ tells you that:',
              options: [
                'when the input is $5$, the output is $12$',
                '$f$ multiplied by $5$ equals $12$',
                'the input $12$ gives output $5$',
                '$f$ equals $5$ and $12$ at once',
              ],
              correctAnswer: 0,
              explanation: '$f(5) = 12$ means the point $(5, 12)$ is on the graph: input $5$ produces output $12$. It is not multiplication.',
            },
          ],
        },
      },
      {
        id: 'fn3-point-link',
        type: 'text' as const,
        content: `## Outputs Become Points

Every evaluation gives you a **point** on the graph:

$$f(a) = b \\quad\\Longleftrightarrow\\quad \\text{the point } (a,\\, b) \\text{ is on the graph of } f.$$

So computing $f(0)$, $f(1)$, and $f(-2)$ is the same as finding three points to plot. The next check connects each evaluation to its point.`,
      },
      {
        id: 'fn3-dropdown-eval',
        type: 'dropdown-select' as const,
        content: `**Match the Notation** 🔽

Let $f(x) = 2x + 3$.`,
        exercise: {
          dropdowns: [
            { label: '$f(1)$ equals:', options: ['$5$', '$3$', '$2$', '$6$'] },
            { label: '$f(-2)$ equals:', options: ['$-1$', '$1$', '$7$', '$-7$'] },
            { label: 'The point on the graph for $f(0)$ is:', options: ['$(0, 3)$', '$(3, 0)$', '$(0, 0)$', '$(3, 3)$'] },
          ],
          correctAnswers: ['$5$', '$-1$', '$(0, 3)$'],
          hint1: '$f(1) = 2(1) + 3$.',
          hint2: '$f(-2) = 2(-2) + 3 = -4 + 3$.',
          hint3: 'The point is $(\\text{input}, \\text{output}) = (0, f(0))$, and $f(0) = 3$.',
          explanation: '$f(1) = 2 + 3 = 5$. $f(-2) = -4 + 3 = -1$. $f(0) = 0 + 3 = 3$, so the point is $(0, 3)$.',
        },
      },
      {
        id: 'fn3-wrap',
        type: 'text' as const,
        content: `## Recap

- $f(x)$ = the **output** for input $x$; read "$f$ of $x$," never "$f$ times $x$."
- **Evaluate** by substituting the input for $x$ and simplifying with order of operations.
- $f(a) = b$ means the point $(a, b)$ is on the graph.

In **Part 4**, we read functions straight from **tables and graphs** — finding outputs, and even working backward to find inputs.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'functions-basics-algebra1',
    sections: [
      {
        id: 'fn4-intro',
        type: 'text' as const,
        content: `# ⚙️ Introduction to Functions

**Part 4 of 5 — Reading Tables & Graphs**

---

> 🔑 **Big Idea:** A table or graph *is* a function. You can read an output from an input (go right/up) or read an input from an output (work backward).`,
      },
      {
        id: 'fn4-table',
        type: 'text' as const,
        content: `## Reading a Table

A table lists inputs and their outputs. Here is $f$:

| $x$ | $-1$ | $0$ | $1$ | $2$ |
|-----|------|-----|-----|-----|
| $f(x)$ | $5$ | $3$ | $1$ | $-1$ |

To find $f(1)$, look under $x = 1$: the output is $\\mathbf{1}$, so $f(1) = 1$.

To work **backward** — "for which input is $f(x) = 5$?" — scan the bottom row for $5$ and read up: it happens at $x = -1$.

> 💡 **Reading direction matters.** $f(x) = ?$ means *"go in with $x$, read out the output."* "$f(x) = 5$, find $x$" means *"start from the output and find the input."*`,
      },
      {
        id: 'fn4-drill-table',
        type: 'input-boxes' as const,
        content: `**Use the Table** 🧮

The same function $f$:

| $x$ | $-1$ | $0$ | $1$ | $2$ |
|-----|------|-----|-----|-----|
| $f(x)$ | $5$ | $3$ | $1$ | $-1$ |

**1)** $f(0) = \\,?$
**2)** $f(2) = \\,?$
**3)** For which input is $f(x) = 1$?  $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '-1', '1'],
          hint1: 'For $f(0)$, find $x = 0$ in the top row and read the value below it.',
          hint2: 'For $f(2)$, look under $x = 2$.',
          hint3: 'For #3, find $1$ in the bottom row, then read the input above it.',
          explanation: '1) Under $x=0$ the output is $3$. 2) Under $x=2$ the output is $-1$. 3) The output $1$ sits under $x = 1$, so $x = 1$.',
        },
      },
      {
        id: 'fn4-graph',
        type: 'text' as const,
        content: `## Reading a Graph

On a graph, the point $(a, b)$ means $f(a) = b$.

Suppose the line $y = f(x)$ passes through $(0, 2)$, $(1, 4)$, and $(2, 6)$.

- To find $f(1)$: go to $x = 1$, go up to the line, read the height → $f(1) = 4$.
- To **solve** $f(x) = 6$: find the height $6$ on the line, drop down to the axis → $x = 2$.

These points fit the rule $f(x) = 2x + 2$. Check: $f(1) = 2(1) + 2 = 4$ ✓ and $f(2) = 2(2)+2 = 6$ ✓.

> 💡 **Inputs run horizontally, outputs run vertically.** Find an output by moving up to the curve; find an input by moving across to the curve.`,
      },
      {
        id: 'fn4-dropdown-graph',
        type: 'dropdown-select' as const,
        content: `**Read the Graph** 🔽

The line $f(x) = 2x + 2$ passes through $(0, 2)$, $(1, 4)$, $(2, 6)$, and $(3, 8)$.`,
        exercise: {
          dropdowns: [
            { label: 'The value of $f(3)$ is:', options: ['$8$', '$6$', '$5$', '$3$'] },
            { label: 'Solve $f(x) = 4$:', options: ['$x = 1$', '$x = 4$', '$x = 2$', '$x = 0$'] },
            { label: 'The point $(0, 2)$ tells you:', options: ['$f(0) = 2$', '$f(2) = 0$', '$f(0) = 0$', '$f(2) = 2$'] },
          ],
          correctAnswers: ['$8$', '$x = 1$', '$f(0) = 2$'],
          hint1: 'For $f(3)$, use the point with $x = 3$: it is $(3, 8)$.',
          hint2: 'To solve $f(x) = 4$, find the point whose output (height) is $4$.',
          hint3: 'The point $(a, b)$ always means $f(a) = b$ — input first, output second.',
          explanation: '$f(3) = 8$ from the point $(3,8)$. The output $4$ occurs at the point $(1, 4)$, so $x = 1$. And $(0,2)$ means input $0$ gives output $2$, i.e. $f(0) = 2$.',
        },
      },
      {
        id: 'fn4-bothways',
        type: 'text' as const,
        content: `## Reading Both Directions

Tables and graphs work **both ways**:

| Question | What you do |
|----------|-------------|
| Find $f(a)$ | start at the input $a$, read off the output |
| Solve $f(x) = b$ | start at the output $b$, read off the input |

Keep straight which value you are *given* and which you are *finding*. The next check mixes both directions.`,
      },
      {
        id: 'fn4-check-readback',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A graph passes through the point $(5, 0)$. What does this tell you?',
              options: [
                '$f(5) = 0$',
                '$f(0) = 5$',
                'the function has no output at $5$',
                '$f(5) = 5$',
              ],
              correctAnswer: 0,
              explanation: 'A point is $(\\text{input}, \\text{output})$, so $(5, 0)$ means the input $5$ produces the output $0$: $f(5) = 0$.',
            },
            {
              question: 'Using the table below, solve $f(x) = 3$. \n\n| $x$ | $0$ | $1$ | $2$ |\n|---|---|---|---|\n| $f(x)$ | $1$ | $3$ | $5$ |',
              options: ['$x = 1$', '$x = 3$', '$x = 2$', '$x = 0$'],
              correctAnswer: 0,
              explanation: 'We want the input whose output is $3$. Scanning the bottom row, $3$ sits under $x = 1$, so $x = 1$.',
            },
          ],
        },
      },
      {
        id: 'fn4-wrap',
        type: 'text' as const,
        content: `## Recap

- A point $(a, b)$ on a graph means $f(a) = b$.
- **Find an output:** go to the input, move up to the curve, read the height.
- **Find an input:** start from the output's height, move across to the curve, drop to the axis.

In **Part 5**, we pull everything together with mixed practice and a final **Exit Quiz**.`,
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'functions-basics-algebra1',
    sections: [
      {
        id: 'fn5-intro',
        type: 'text' as const,
        content: `# ⚙️ Introduction to Functions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) tell a function from a relation, (2) find domain and range, (3) use the vertical line test, (4) evaluate $f(x)$, and (5) read tables and graphs. Let's put it together.`,
      },
      {
        id: 'fn5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Idea | What to remember |
|------|------------------|
| Function | each input → **exactly one** output |
| Domain | the set of **inputs** ($x$-values), each listed once |
| Range | the set of **outputs** ($y$-values), each listed once |
| Vertical line test | a graph is a function if no vertical line hits it more than once |
| $f(a)$ | the **output** when the input is $a$; the point $(a, f(a))$ is on the graph |

> ⚠️ Repeated **outputs** are allowed; a repeated **input** with two different outputs is what breaks a function.`,
      },
      {
        id: 'fn5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = 4 - 2x$, what is $f(-3)$?',
              options: ['$10$', '$-2$', '$2$', '$-10$'],
              correctAnswer: 0,
              explanation: '$f(-3) = 4 - 2(-3) = 4 + 6 = 10$. Subtracting a negative adds.',
            },
            {
              question: 'What is the domain of $\\{(2, 7), (4, 7), (6, 1)\\}$?',
              options: ['$\\{2, 4, 6\\}$', '$\\{7, 1\\}$', '$\\{1, 7\\}$', '$\\{2, 4, 6, 7, 1\\}$'],
              correctAnswer: 0,
              explanation: 'The domain is the set of inputs (first coordinates): $\\{2, 4, 6\\}$. The outputs $\\{7, 1\\}$ form the range.',
            },
          ],
        },
      },
      {
        id: 'fn5-bridge',
        type: 'text' as const,
        content: `## One More Mix

The next check blends all five skills in a single problem: spotting a non-function, evaluating a rule, and applying the vertical line test. Take your time and reason through each piece separately.`,
      },
      {
        id: 'fn5-dropdown-mixed',
        type: 'dropdown-select' as const,
        content: `**Put It Together** 🔽

Use $h(x) = x^2 + 1$ and the relation $R = \\{(1, 3), (1, 5), (2, 8)\\}$.`,
        exercise: {
          dropdowns: [
            { label: 'Is $R$ a function?', options: ['No', 'Yes'] },
            { label: 'Value of $h(2)$:', options: ['$5$', '$4$', '$3$', '$6$'] },
            { label: 'A circle on a graph is...', options: ['not a function', 'always a function', 'a function if it is large', 'a function only at the top'] },
          ],
          correctAnswers: ['No', '$5$', 'not a function'],
          hint1: 'In $R$, the input $1$ appears with two outputs ($3$ and $5$).',
          hint2: '$h(2) = (2)^2 + 1 = 4 + 1$.',
          hint3: 'A circle fails the vertical line test — one input, two outputs.',
          explanation: '$R$ is not a function because input $1$ maps to both $3$ and $5$. $h(2) = 4 + 1 = 5$. A circle is never a function (it fails the vertical line test).',
        },
      },
      {
        id: 'fn5-exit-lead',
        type: 'text' as const,
        content: `## You're Ready

You have covered the full arc: relations vs. functions, domain and range, the vertical line test, function notation, and reading tables and graphs. One short quiz stands between you and mastery.`,
      },
      {
        id: 'fn5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which relation is a function?',
              options: [
                '$\\{(3, 1), (4, 2), (5, 3)\\}$',
                '$\\{(1, 2), (1, 3), (1, 4)\\}$',
                '$\\{(0, 0), (0, 1), (2, 5)\\}$',
                '$\\{(7, 8), (7, 9), (8, 8)\\}$',
              ],
              correctAnswer: 0,
              explanation: 'In $\\{(3,1),(4,2),(5,3)\\}$ each input is distinct, so it is a function. The others all reuse an input ($1$, $0$, or $7$) with two different outputs.',
            },
            {
              question: 'If $f(x) = 5x - 2$, then $f(4) = $',
              options: ['$18$', '$20$', '$22$', '$3$'],
              correctAnswer: 0,
              explanation: '$f(4) = 5(4) - 2 = 20 - 2 = 18$.',
            },
            {
              question: 'A graph passes the vertical line test. This means the graph:',
              options: [
                'is a function',
                'is a circle',
                'has no domain',
                'must be a straight line',
              ],
              correctAnswer: 0,
              explanation: 'Passing the vertical line test means every input has exactly one output, which is precisely the definition of a function. It need not be a line.',
            },
          ],
        },
      },
    ],
  },
]
