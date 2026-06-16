import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving Systems of Equations (Algebra 1).
 * Registry key / DB Topic.slug: 'solving-systems-algebra1'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'solving-systems-algebra1',
    sections: [
      {
        id: 'sys1-intro',
        type: 'text' as const,
        content: `# 🔗 Solving Systems of Equations

**Part 1 of 5 — What Is a System & Solving by Graphing**

---

### Topics in This Part

| Section |
|---------|
| What Is a System of Equations? |
| What "Solution" Means |
| Solving by Graphing |

> 🔑 **Key Concept:** A **system of equations** is two (or more) equations considered *together*. The **solution** is the point $(x, y)$ that makes **every** equation true at the same time — where the lines cross.`,
      },
      {
        id: 'sys1-what',
        type: 'text' as const,
        content: `## What Is a System of Equations?

A **system** is a set of equations that share the same variables. In Algebra 1 we usually have two linear equations in $x$ and $y$:

$$\\begin{cases} y = 2x + 1 \\\\ y = -x + 4 \\end{cases}$$

The brace $\\{$ means "all of these at once." We want the **single pair** $(x, y)$ that satisfies *both* lines.

### A Solution Is a Point

A point $(x, y)$ is a solution only if it works in **both** equations. Test $(1, 3)$ in the system above:

| Equation | Substitute $(1, 3)$ | True? |
|----------|---------------------|-------|
| $y = 2x + 1$ | $3 = 2(1) + 1 = 3$ | ✓ |
| $y = -x + 4$ | $3 = -(1) + 4 = 3$ | ✓ |

Both check out, so $(1, 3)$ is **the** solution.

> ⚠️ A point that satisfies only **one** equation is **not** a solution to the system. It must satisfy *all* of them.`,
      },
      {
        id: 'sys1-check-solution',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which point is the solution to the system $\\begin{cases} y = x + 2 \\\\ y = 3x - 4 \\end{cases}$?',
              options: ['$(3, 5)$', '$(2, 4)$', '$(0, 2)$', '$(1, 3)$'],
              correctAnswer: 0,
              explanation: 'Test $(3, 5)$: $y = x+2 \\to 5 = 3+2$ ✓ and $y = 3x-4 \\to 5 = 9-4$ ✓. Both true, so $(3, 5)$ is the solution.',
            },
            {
              question: 'A point makes the FIRST equation of a system true but the SECOND one false. Is it a solution to the system?',
              options: ['No — it must satisfy every equation', 'Yes — one equation is enough', 'Only if the first equation is $y = $ something', 'It depends on the slope'],
              correctAnswer: 0,
              explanation: 'A solution to a system must make ALL equations true simultaneously. Satisfying just one is not enough.',
            },
          ],
        },
      },
      {
        id: 'sys1-graphing',
        type: 'text' as const,
        content: `## Solving by Graphing

Since the solution makes both equations true, it lies on **both** lines — so it is the **point where the graphs intersect**.

### Steps

1. **Graph** each line (use slope-intercept form $y = mx + b$, or a table of points).
2. **Find** the intersection point.
3. **Check** the point in both equations.

### Worked Example

$$\\begin{cases} y = 2x + 1 \\\\ y = -x + 4 \\end{cases}$$

- Line 1 has $y$-intercept $1$, slope $2$.
- Line 2 has $y$-intercept $4$, slope $-1$.

Graphing both, they cross at $(1, 3)$.

> ✅ **Check:** $3 = 2(1)+1$ ✓ and $3 = -(1)+4$ ✓. Solution: $(1, 3)$.`,
      },
      {
        id: 'sys1-graph-drill',
        type: 'input-boxes' as const,
        content: `**Read the Intersection** 🧮

Each system below is graphed and the lines cross at a single point. Use the equations to find that point. Enter the $x$-value, then the $y$-value.

**1)** $\\begin{cases} y = x \\\\ y = -x + 6 \\end{cases}$  →  $x = \\,?$, $\\;y = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '3'],
          hint1: 'At the intersection both right sides are equal: $x = -x + 6$.',
          hint2: 'Solve $x = -x + 6 \\Rightarrow 2x = 6 \\Rightarrow x = 3$.',
          hint3: 'Put $x = 3$ into $y = x$ to get $y = 3$. The point is $(3, 3)$.',
          explanation: 'Set the lines equal: $x = -x + 6 \\Rightarrow 2x = 6 \\Rightarrow x = 3$, and $y = x = 3$. Intersection $(3, 3)$.',
        },
      },
      {
        id: 'sys1-graph-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the Crossing Point** 🔽

The lines $\\begin{cases} y = 3x \\\\ y = x + 4 \\end{cases}$ cross at one point. Since both equal $y$, set the right sides equal and work through it.`,
        exercise: {
          dropdowns: [
            { label: 'Set the right sides equal:', options: ['$3x = x + 4$', '$3x = 4$', '$x = 3x + 4$', '$3x + x = 4$'] },
            { label: 'Solve for $x$:', options: ['$x = 2$', '$x = 4$', '$x = 1$', '$x = 6$'] },
            { label: 'Find $y$ using $y = 3x$:', options: ['$y = 6$', '$y = 2$', '$y = 4$', '$y = 12$'] },
            { label: 'The intersection point is:', options: ['$(2, 6)$', '$(6, 2)$', '$(2, 2)$', '$(4, 12)$'] },
          ],
          correctAnswers: ['$3x = x + 4$', '$x = 2$', '$y = 6$', '$(2, 6)$'],
          hint1: 'Both equations equal $y$, so $3x$ and $x + 4$ must be equal.',
          hint2: '$3x = x + 4 \\Rightarrow 2x = 4 \\Rightarrow x = 2$.',
          hint3: 'Put $x = 2$ into $y = 3x$: $y = 3(2) = 6$. The lines cross at $(2, 6)$.',
          explanation: 'Setting the lines equal gives $3x = x + 4 \\Rightarrow 2x = 4 \\Rightarrow x = 2$, and $y = 3(2) = 6$. Intersection $(2, 6)$.',
        },
      },
      {
        id: 'sys1-graphing-limits',
        type: 'text' as const,
        content: `## When Graphing Is (and Isn't) Enough

Graphing is great for *seeing* a solution, but it has limits:

- It's **slow** to draw accurately.
- It struggles with **fractions or decimals** — is the crossing at $2$ or $2.1$? Hard to tell by eye.

> 💡 That's why algebra gives us two exact methods: **substitution** (Part 2) and **elimination** (Part 3). Graphing builds the picture; algebra nails the numbers.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'solving-systems-algebra1',
    sections: [
      {
        id: 'sys2-intro',
        type: 'text' as const,
        content: `# 🔗 Solving Systems of Equations

**Part 2 of 5 — The Substitution Method**

---

> 🔑 **The Idea:** If one equation already tells you what a variable *equals*, **substitute** that expression into the other equation. That collapses two equations into **one equation in one variable** — which you already know how to solve.`,
      },
      {
        id: 'sys2-steps',
        type: 'text' as const,
        content: `## The Substitution Steps

1. **Isolate** one variable in one equation (if it isn't already).
2. **Substitute** that expression into the *other* equation.
3. **Solve** the resulting one-variable equation.
4. **Back-substitute** to find the second variable.
5. **Check** in both original equations.

### Worked Example

$$\\begin{cases} y = 2x - 3 \\\\ 3x + y = 12 \\end{cases}$$

The first equation already gives $y = 2x - 3$. Substitute into the second:

$$3x + (2x - 3) = 12$$
$$5x - 3 = 12 \\;\\Rightarrow\\; 5x = 15 \\;\\Rightarrow\\; x = 3$$

Back-substitute $x = 3$ into $y = 2x - 3$:

$$y = 2(3) - 3 = 3$$

> ✅ **Check:** $3(3) + 3 = 12$ ✓. Solution: $(3, 3)$.`,
      },
      {
        id: 'sys2-sub-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the system $\\begin{cases} x = y + 4 \\\\ 2x + 3y = 18 \\end{cases}$, what should you substitute into the second equation?',
              options: ['Replace $x$ with $y + 4$', 'Replace $y$ with $x + 4$', 'Replace $x$ with $18$', 'Replace $y$ with $2x$'],
              correctAnswer: 0,
              explanation: 'The first equation says $x = y + 4$, so replace $x$ in the second equation: $2(y+4) + 3y = 18$.',
            },
            {
              question: 'Substitution turns a system of two equations in two variables into:',
              options: ['One equation in one variable', 'Two equations in one variable', 'A graph', 'Three equations'],
              correctAnswer: 0,
              explanation: 'By replacing one variable with an equivalent expression, you get a single equation in a single variable that you can solve directly.',
            },
          ],
        },
      },
      {
        id: 'sys2-isolate',
        type: 'text' as const,
        content: `## When You Must Isolate First

If no variable is alone yet, isolate the **easiest** one — usually a variable with a coefficient of $1$.

### Worked Example

$$\\begin{cases} x + 2y = 11 \\\\ 3x - y = 5 \\end{cases}$$

Isolate $y$ in the **second** equation (its $-y$ is easy): $\\;y = 3x - 5$.

Substitute into the first:

$$x + 2(3x - 5) = 11$$
$$x + 6x - 10 = 11 \\;\\Rightarrow\\; 7x = 21 \\;\\Rightarrow\\; x = 3$$

Then $y = 3(3) - 5 = 4$.

> ✅ **Check:** $3 + 2(4) = 11$ ✓ and $3(3) - 4 = 5$ ✓. Solution: $(3, 4)$.
>
> 💡 **Tip:** Watch the distribution — $2(3x - 5) = 6x - 10$, **not** $6x - 5$. Forgetting to distribute to *both* terms is the #1 substitution error.`,
      },
      {
        id: 'sys2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Walk the Steps** 🔽

You're solving $\\begin{cases} y = x + 1 \\\\ 2x + y = 7 \\end{cases}$ by substitution. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Substitute $y = x+1$ into $2x + y = 7$:', options: ['$2x + (x + 1) = 7$', '$2x + x = 7$', '$2(x+1) + y = 7$', '$x + 1 = 7$'] },
            { label: 'Combine like terms:', options: ['$3x + 1 = 7$', '$2x + 1 = 7$', '$3x = 7$', '$x + 1 = 7$'] },
            { label: 'Solve for $x$:', options: ['$x = 2$', '$x = 3$', '$x = 6$', '$x = \\frac{7}{3}$'] },
            { label: 'Back-substitute to find $y$:', options: ['$y = 3$', '$y = 2$', '$y = 5$', '$y = 1$'] },
          ],
          correctAnswers: ['$2x + (x + 1) = 7$', '$3x + 1 = 7$', '$x = 2$', '$y = 3$'],
          hint1: 'Replace $y$ everywhere it appears in the second equation with $x + 1$.',
          hint2: '$2x + x = 3x$, so the equation becomes $3x + 1 = 7$.',
          hint3: '$3x + 1 = 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$, then $y = x + 1 = 3$.',
          explanation: 'Substituting gives $3x + 1 = 7 \\Rightarrow x = 2$, and $y = 2 + 1 = 3$. Solution $(2, 3)$.',
        },
      },
      {
        id: 'sys2-drill',
        type: 'input-boxes' as const,
        content: `**Solve by Substitution** 🧮

Solve each system. Enter the $x$-value, then the $y$-value.

**1)** $\\begin{cases} y = 3x \\\\ x + y = 8 \\end{cases}$  →  $x = \\,?$, $\\;y = \\,?$
**2)** $\\begin{cases} y = x - 2 \\\\ 2x + y = 10 \\end{cases}$  →  $x = \\,?$, $\\;y = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['2', '6', '4', '2'],
          hint1: 'System 1: substitute $y = 3x$ into $x + y = 8$ to get $x + 3x = 8$.',
          hint2: 'System 1: $4x = 8 \\Rightarrow x = 2$, so $y = 3(2) = 6$.',
          hint3: 'System 2: $2x + (x-2) = 10 \\Rightarrow 3x = 12 \\Rightarrow x = 4$, so $y = 4 - 2 = 2$.',
          explanation: '1) $x + 3x = 8 \\Rightarrow x = 2,\\ y = 6$.  2) $2x + x - 2 = 10 \\Rightarrow 3x = 12 \\Rightarrow x = 4,\\ y = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'solving-systems-algebra1',
    sections: [
      {
        id: 'sys3-intro',
        type: 'text' as const,
        content: `# 🔗 Solving Systems of Equations

**Part 3 of 5 — The Elimination Method**

---

> 🔑 **The Idea:** Add or subtract the two equations so that one variable **cancels** (its coefficients are opposites). One variable disappears, leaving a single equation to solve. This is also called the **addition method**.`,
      },
      {
        id: 'sys3-steps',
        type: 'text' as const,
        content: `## The Elimination Steps

1. **Line up** the equations so $x$, $y$, and the constant are in columns.
2. **Match** a variable's coefficients to be **opposites** (multiply an equation if needed).
3. **Add** the equations — one variable cancels.
4. **Solve** for the remaining variable.
5. **Back-substitute** and **check**.

### Worked Example — Variables Already Opposite

$$\\begin{cases} 3x + y = 9 \\\\ 2x - y = 1 \\end{cases}$$

The $y$-terms are $+y$ and $-y$ — already opposites. **Add** the equations:

$$(3x + 2x) + (y - y) = 9 + 1$$
$$5x = 10 \\;\\Rightarrow\\; x = 2$$

Back-substitute into $3x + y = 9$: $\\;3(2) + y = 9 \\Rightarrow y = 3$.

> ✅ **Check:** $2(2) - 3 = 1$ ✓. Solution: $(2, 3)$.`,
      },
      {
        id: 'sys3-elim-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To eliminate a variable by adding, the two coefficients of that variable must be:',
              options: ['Opposites (like $+4$ and $-4$)', 'Equal (like $4$ and $4$)', 'Both positive', 'Both equal to $1$'],
              correctAnswer: 0,
              explanation: 'Opposite coefficients add to zero, which cancels the variable: $4x + (-4x) = 0$.',
            },
            {
              question: 'Adding the equations $\\begin{cases} x + y = 7 \\\\ x - y = 1 \\end{cases}$ gives:',
              options: ['$2x = 8$', '$2y = 8$', '$2x = 6$', '$x = 7$'],
              correctAnswer: 0,
              explanation: 'The $+y$ and $-y$ cancel; $x + x = 2x$ and $7 + 1 = 8$, so $2x = 8 \\Rightarrow x = 4$.',
            },
          ],
        },
      },
      {
        id: 'sys3-multiply',
        type: 'text' as const,
        content: `## When You Must Multiply First

If no variable's coefficients are opposites, **multiply** one (or both) equations by a constant so they become opposites.

### Worked Example

$$\\begin{cases} 2x + 3y = 13 \\\\ x - y = -1 \\end{cases}$$

The $x$-coefficients are $2$ and $1$. Multiply the **second** equation by $-2$ so its $x$-term becomes $-2x$ (opposite of $2x$):

$$-2(x - y) = -2(-1) \\;\\Rightarrow\\; -2x + 2y = 2$$

Now add to the first equation:

$$\\begin{aligned} 2x + 3y &= 13 \\\\ -2x + 2y &= 2 \\\\ \\hline 5y &= 15 \\end{aligned}$$

So $y = 3$. Back-substitute into $x - y = -1$: $\\;x - 3 = -1 \\Rightarrow x = 2$.

> ✅ **Check:** $2(2) + 3(3) = 4 + 9 = 13$ ✓. Solution: $(2, 3)$.
>
> ⚠️ When you multiply an equation, multiply **every** term — including the constant on the right side.`,
      },
      {
        id: 'sys3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Plan the Elimination** 🔽

You're solving $\\begin{cases} 4x + 2y = 14 \\\\ 3x - y = 8 \\end{cases}$. Plan and execute the elimination of $y$.`,
        exercise: {
          dropdowns: [
            { label: 'To cancel $y$, multiply the second equation by:', options: ['$2$', '$-1$', '$4$', '$3$'] },
            { label: 'The second equation becomes:', options: ['$6x - 2y = 16$', '$6x - 2y = 8$', '$3x - 2y = 16$', '$6x + 2y = 16$'] },
            { label: 'After adding the equations:', options: ['$10x = 30$', '$7x = 22$', '$10x = 22$', '$x = 30$'] },
            { label: 'Solve for $x$:', options: ['$x = 3$', '$x = 2$', '$x = 5$', '$x = 10$'] },
          ],
          correctAnswers: ['$2$', '$6x - 2y = 16$', '$10x = 30$', '$x = 3$'],
          hint1: 'The first equation has $+2y$; you want the second to have $-2y$, so multiply $3x - y = 8$ by $2$.',
          hint2: '$2(3x - y) = 2(8) \\Rightarrow 6x - 2y = 16$.',
          hint3: 'Add $4x + 2y = 14$ and $6x - 2y = 16$: the $y$ cancels, giving $10x = 30 \\Rightarrow x = 3$.',
          explanation: 'Multiply eqn 2 by $2$ to get $6x - 2y = 16$. Adding cancels $y$: $10x = 30 \\Rightarrow x = 3$ (and $y = 1$).',
        },
      },
      {
        id: 'sys3-drill',
        type: 'input-boxes' as const,
        content: `**Solve by Elimination** 🧮

Solve each system. Enter the $x$-value, then the $y$-value.

**1)** $\\begin{cases} x + y = 10 \\\\ x - y = 4 \\end{cases}$  →  $x = \\,?$, $\\;y = \\,?$
**2)** $\\begin{cases} 2x + 3y = 16 \\\\ 2x - y = 4 \\end{cases}$  →  $x = \\,?$, $\\;y = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['7', '3', '3.5', '3'],
          hint1: 'System 1: add the equations — the $y$ cancels — to get $2x = 14$.',
          hint2: 'System 1: $2x = 14 \\Rightarrow x = 7$, then $7 + y = 10 \\Rightarrow y = 3$.',
          hint3: 'System 2: subtract eqn 2 from eqn 1 to cancel $x$: $4y = 12 \\Rightarrow y = 3$, then $2x - 3 = 4 \\Rightarrow x = 3.5$.',
          explanation: '1) Adding gives $2x = 14 \\Rightarrow x = 7,\\ y = 3$.  2) Subtracting gives $4y = 12 \\Rightarrow y = 3$, and $2x = 7 \\Rightarrow x = 3.5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'solving-systems-algebra1',
    sections: [
      {
        id: 'sys4-intro',
        type: 'text' as const,
        content: `# 🔗 Solving Systems of Equations

**Part 4 of 5 — Special Cases & Choosing a Method**

---

> 🔑 **Heads up:** Not every system has exactly one solution. Some have **none** (parallel lines), and some have **infinitely many** (the same line twice). Recognizing these is a key Algebra 1 skill.`,
      },
      {
        id: 'sys4-cases',
        type: 'text' as const,
        content: `## Three Possibilities

| Type | Graph | Algebra result | Solutions |
|------|-------|----------------|-----------|
| **One solution** | Lines cross once | $x = $ a number | exactly one |
| **No solution** | Parallel lines | a **false** statement (e.g. $0 = 5$) | none |
| **Infinitely many** | Same line | a **true** statement (e.g. $0 = 0$) | all points on the line |

A system with at least one solution is **consistent**; with no solution it's **inconsistent**. Lines that are the same are **dependent**; distinct lines are **independent**.

> 💡 **The tell:** When solving, if both variables vanish and you're left with a number sentence — a **false** one means *no solution*, a **true** one means *infinitely many*.`,
      },
      {
        id: 'sys4-noinf-worked',
        type: 'text' as const,
        content: `## Worked Examples of Special Cases

### No Solution (parallel lines)

$$\\begin{cases} y = 2x + 1 \\\\ y = 2x - 3 \\end{cases}$$

Substitute: $2x + 1 = 2x - 3 \\Rightarrow 1 = -3$. **False!** The $x$ canceled and left a false statement, so there is **no solution**. (Same slope $2$, different intercepts — parallel lines.)

### Infinitely Many (same line)

$$\\begin{cases} y = 3x - 2 \\\\ 2y = 6x - 4 \\end{cases}$$

The second equation is just the first times $2$. Substitute: $2(3x - 2) = 6x - 4 \\Rightarrow 6x - 4 = 6x - 4 \\Rightarrow 0 = 0$. **Always true**, so there are **infinitely many solutions** — every point on $y = 3x - 2$.`,
      },
      {
        id: 'sys4-cases-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'While solving a system, both variables cancel and you get $7 = 7$. How many solutions does the system have?',
              options: ['Infinitely many', 'Exactly one', 'None', 'Exactly two'],
              correctAnswer: 0,
              explanation: 'A true statement like $7 = 7$ means the two equations describe the same line — infinitely many solutions.',
            },
            {
              question: 'The system $\\begin{cases} y = 4x + 5 \\\\ y = 4x - 2 \\end{cases}$ has how many solutions?',
              options: ['None', 'One', 'Two', 'Infinitely many'],
              correctAnswer: 0,
              explanation: 'Same slope ($4$) but different $y$-intercepts ($5$ vs $-2$) means parallel lines that never cross — no solution.',
            },
            {
              question: 'Setting the equations equal gives $0 = -8$. This means the system is:',
              options: ['Inconsistent (no solution)', 'Consistent with one solution', 'Dependent (infinitely many)', 'Solved at $x = -8$'],
              correctAnswer: 0,
              explanation: 'A false statement like $0 = -8$ signals parallel lines and no solution — the system is inconsistent.',
            },
          ],
        },
      },
      {
        id: 'sys4-method-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Best Method** 🔽

For each system, choose the most efficient first move. (All can be solved any way — pick the *easiest*.)`,
        exercise: {
          dropdowns: [
            { label: '$\\begin{cases} y = 2x - 1 \\\\ 3x + y = 9 \\end{cases}$', options: ['Substitution ($y$ is already isolated)', 'Multiply both equations then eliminate', 'Graphing by hand', 'Guess and check'] },
            { label: '$\\begin{cases} 3x + 2y = 12 \\\\ 3x - 2y = 0 \\end{cases}$', options: ['Elimination (add to cancel $y$)', 'Isolate $x$ then substitute fractions', 'Graphing by hand', 'Guess and check'] },
            { label: '$\\begin{cases} x = 5 \\\\ 2x + y = 13 \\end{cases}$', options: ['Substitution ($x$ is known)', 'Multiply to eliminate', 'Graphing by hand', 'Guess and check'] },
          ],
          correctAnswers: ['Substitution ($y$ is already isolated)', 'Elimination (add to cancel $y$)', 'Substitution ($x$ is known)'],
          hint1: 'If a variable is already alone (like $y = \\ldots$ or $x = 5$), substitution is fastest.',
          hint2: 'If coefficients are already opposites (like $+2y$ and $-2y$), elimination by adding is fastest.',
          hint3: 'System 1: $y$ is isolated → substitute. System 2: $+2y$ and $-2y$ are opposites → add to eliminate. System 3: $x = 5$ is known → substitute.',
          explanation: 'Match the method to the structure: isolated variable → substitution; opposite coefficients → elimination.',
        },
      },
      {
        id: 'sys4-classify-drill',
        type: 'input-boxes' as const,
        content: `**How Many Solutions?** 🧮

For each system, enter the number of solutions: type **0** for none, **1** for exactly one, or **2** for infinitely many.

**1)** $\\begin{cases} y = x + 4 \\\\ y = x - 4 \\end{cases}$  →  ?
**2)** $\\begin{cases} y = -2x + 1 \\\\ y = 5x + 1 \\end{cases}$  →  ?
**3)** $\\begin{cases} y = \\frac{1}{2}x + 3 \\\\ 2y = x + 6 \\end{cases}$  →  ?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '1', '2'],
          hint1: 'System 1: same slope ($1$), different intercepts → parallel → enter $0$.',
          hint2: 'System 2: different slopes ($-2$ vs $5$) → lines cross once → enter $1$.',
          hint3: 'System 3: $2y = x + 6$ divides to $y = \\frac{1}{2}x + 3$, the same line → enter $2$ (infinitely many).',
          explanation: '1) Parallel, no solution → $0$.  2) Different slopes, one crossing → $1$.  3) Identical lines → $2$ (infinitely many).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'solving-systems-algebra1',
    sections: [
      {
        id: 'sys5-intro',
        type: 'text' as const,
        content: `# 🔗 Solving Systems of Equations

**Part 5 of 5 — Word Problems & Mastery Check**

---

You can now solve systems by **graphing**, **substitution**, and **elimination**, and recognize the **special cases**. The biggest payoff is solving real problems with two unknowns.`,
      },
      {
        id: 'sys5-setup',
        type: 'text' as const,
        content: `## Setting Up a Word Problem

1. **Define** two variables (e.g. let $x = $ adult tickets, $y = $ child tickets).
2. **Write two equations** — usually one for a *count/total* and one for a *value/amount*.
3. **Solve** with whichever method fits.
4. **Answer in words** and check it makes sense.

### Worked Example — Tickets

A theater sells **adult tickets for \\$8** and **child tickets for \\$5**. One night they sold **200 tickets** for a total of **\\$1,300**. How many of each?

Let $a = $ adult tickets, $c = $ child tickets:

$$\\begin{cases} a + c = 200 \\\\ 8a + 5c = 1300 \\end{cases}$$

From the first equation, $c = 200 - a$. Substitute:

$$8a + 5(200 - a) = 1300$$
$$8a + 1000 - 5a = 1300 \\;\\Rightarrow\\; 3a = 300 \\;\\Rightarrow\\; a = 100$$

Then $c = 200 - 100 = 100$.

> ✅ **Check:** $100 + 100 = 200$ ✓ and $8(100) + 5(100) = 1300$ ✓. **100 adult and 100 child tickets.**`,
      },
      {
        id: 'sys5-word-drill',
        type: 'input-boxes' as const,
        content: `**Set Up & Solve** 🧮

Two numbers have a **sum of 30** and a **difference of 8** (first minus second). Find them.

Let $x = $ the larger number, $y = $ the smaller. The system is $\\begin{cases} x + y = 30 \\\\ x - y = 8 \\end{cases}$.

Enter the larger number $x$, then the smaller number $y$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['19', '11'],
          hint1: 'Add the two equations to eliminate $y$: $2x = 38$.',
          hint2: '$2x = 38 \\Rightarrow x = 19$.',
          hint3: 'Substitute $x = 19$ into $x + y = 30$: $19 + y = 30 \\Rightarrow y = 11$.',
          explanation: 'Adding gives $2x = 38 \\Rightarrow x = 19$, then $y = 30 - 19 = 11$. The numbers are $19$ and $11$ (sum $30$, difference $8$).',
        },
      },
      {
        id: 'sys5-word-mc',
        type: 'multiple-choice' as const,
        content: `**Translate the Problem** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Pencils cost \\$2 and erasers cost \\$3. You buy 10 items for \\$26. If $p = $ pencils and $e = $ erasers, which system models this?',
              options: ['$\\begin{cases} p + e = 10 \\\\ 2p + 3e = 26 \\end{cases}$', '$\\begin{cases} p + e = 26 \\\\ 2p + 3e = 10 \\end{cases}$', '$\\begin{cases} 2p + 3e = 10 \\\\ p + e = 26 \\end{cases}$', '$\\begin{cases} p \\cdot e = 10 \\\\ 5pe = 26 \\end{cases}$'],
              correctAnswer: 0,
              explanation: 'The COUNT equation is $p + e = 10$ (10 items). The COST equation is $2p + 3e = 26$ (\\$2 each pencil, \\$3 each eraser, \\$26 total).',
            },
            {
              question: 'Solving $\\begin{cases} p + e = 10 \\\\ 2p + 3e = 26 \\end{cases}$ from the pencil problem, how many erasers $e$ did you buy?',
              options: ['$6$', '$4$', '$3$', '$8$'],
              correctAnswer: 0,
              explanation: 'From $p = 10 - e$: $2(10 - e) + 3e = 26 \\Rightarrow 20 + e = 26 \\Rightarrow e = 6$ (and $p = 4$).',
            },
          ],
        },
      },
      {
        id: 'sys5-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Method | Best when… |
|--------|-----------|
| **Graphing** | You want a visual or estimate |
| **Substitution** | A variable is already isolated (or easy to isolate) |
| **Elimination** | Coefficients are opposites or easy to match |

| Algebra result | Solutions |
|----------------|-----------|
| $x = $ a number | exactly one |
| **false** statement ($0 = 5$) | none (parallel) |
| **true** statement ($0 = 0$) | infinitely many (same line) |

> ⚠️ Always **check** your point in **both** original equations, and for word problems, **answer in words** with units.`,
      },
      {
        id: 'sys5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\begin{cases} y = 2x \\\\ x + y = 9 \\end{cases}$.',
              options: ['$(3, 6)$', '$(6, 3)$', '$(4.5, 4.5)$', '$(9, 0)$'],
              correctAnswer: 0,
              explanation: 'Substitute $y = 2x$: $x + 2x = 9 \\Rightarrow 3x = 9 \\Rightarrow x = 3$, so $y = 6$. Solution $(3, 6)$.',
            },
            {
              question: 'Adding the equations $\\begin{cases} 5x + 2y = 16 \\\\ 3x - 2y = 8 \\end{cases}$ gives which result, and what is $x$?',
              options: ['$8x = 24$, so $x = 3$', '$8x = 8$, so $x = 1$', '$2x = 24$, so $x = 12$', '$8x = 16$, so $x = 2$'],
              correctAnswer: 0,
              explanation: 'The $+2y$ and $-2y$ cancel; $5x + 3x = 8x$ and $16 + 8 = 24$, so $8x = 24 \\Rightarrow x = 3$.',
            },
            {
              question: 'A system solves down to $0 = 12$. How many solutions does it have?',
              options: ['None — the lines are parallel', 'Exactly one', 'Infinitely many', 'Two'],
              correctAnswer: 0,
              explanation: '$0 = 12$ is a false statement, which means the lines are parallel and never intersect — no solution.',
            },
          ],
        },
      },
    ],
  },
]
