import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Absolute Value Equations (Algebra 1).
 * Registry key: 'absolute-value-algebra1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'absolute-value-algebra1',
    sections: [
      {
        id: 'ave1-intro',
        type: 'text' as const,
        content: `# 📏 Absolute Value Equations

**Part 1 of 5 — What Absolute Value Really Means**

---

### Topics in This Part

| Section |
|---------|
| Absolute Value as Distance |
| Why Two Answers? |
| The Core Rule: $\\lvert x\\rvert = a$ |

> 🔑 **Key Concept:** $\\lvert x\\rvert$ is the **distance** from $x$ to $0$ on the number line. Distance is never negative — and two different numbers can sit the same distance from zero. That single idea drives every equation in this lesson.`,
      },
      {
        id: 'ave1-distance',
        type: 'text' as const,
        content: `## Absolute Value as Distance

The absolute value of a number is how far it is from $0$, ignoring direction:

$$\\lvert 5\\rvert = 5 \\qquad \\lvert -5\\rvert = 5 \\qquad \\lvert 0\\rvert = 0$$

Both $5$ and $-5$ sit **5 units** from zero, so they share the same absolute value.

\`\`\`
        |-- 5 units --|-- 5 units --|
  ◄─────┼─────────────┼─────────────┼─────►
       -5             0             +5
\`\`\`

> 💡 **Read it as a question:** "$\\lvert x\\rvert = 5$" asks *"what numbers are 5 units from zero?"* The answer is **both** $5$ and $-5$.

| Expression | Value |
|------------|-------|
| $\\lvert 7\\rvert$ | $7$ |
| $\\lvert -7\\rvert$ | $7$ |
| $\\lvert -\\tfrac{3}{4}\\rvert$ | $\\tfrac{3}{4}$ |
| $-\\lvert 6\\rvert$ | $-6$ *(the minus is **outside** the bars)* |`,
      },
      {
        id: 'ave1-eval',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\lvert -12\\rvert$?',
              options: ['$12$', '$-12$', '$0$', '$\\pm 12$'],
              correctAnswer: 0,
              explanation: 'Absolute value is a distance, so it is never negative. $-12$ is $12$ units from $0$, so $\\lvert -12\\rvert = 12$.',
            },
            {
              question: 'What is $-\\lvert -8\\rvert$?',
              options: ['$-8$', '$8$', '$0$', '$\\pm 8$'],
              correctAnswer: 0,
              explanation: 'First $\\lvert -8\\rvert = 8$, then the minus **outside** the bars negates it: $-\\lvert -8\\rvert = -8$.',
            },
          ],
        },
      },
      {
        id: 'ave1-corerule',
        type: 'text' as const,
        content: `## The Core Rule

Because two numbers share each positive distance, an absolute value equation splits into **two cases**:

$$\\boxed{\\;\\lvert x\\rvert = a \\;\\Longrightarrow\\; x = a \\;\\text{ or }\\; x = -a\\;}\\quad (a > 0)$$

**Example:** $\\lvert x\\rvert = 9 \\Rightarrow x = 9$ or $x = -9$.

The inside doesn't have to be a single letter — it can be a whole expression:

$$\\lvert x - 3\\rvert = 5 \\;\\Longrightarrow\\; x - 3 = 5 \\;\\text{ or }\\; x - 3 = -5$$

Solving each branch gives $x = 8$ or $x = -2$. (Both are exactly $5$ units from $3$.)

> ⚠️ **Don't average the bars away.** $\\lvert x - 3\\rvert$ is *not* $x - 3$ and *not* $|x| - 3$. Keep the whole expression inside the bars until you split into the two cases.`,
      },
      {
        id: 'ave1-cases-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Two Cases** 🔽

For each equation, choose the correct pair of cases.`,
        exercise: {
          dropdowns: [
            { label: '$\\lvert x\\rvert = 9$ splits into', options: ['$x = 9$ or $x = -9$', '$x = 9$ only', '$x = 0$ or $x = 9$', '$x = \\pm 81$'] },
            { label: '$\\lvert x - 3\\rvert = 5$ splits into', options: ['$x - 3 = 5$ or $x - 3 = -5$', '$x - 3 = 5$ or $x + 3 = 5$', '$x = 5$ or $x = -5$', '$x - 3 = 5$ only'] },
          ],
          correctAnswers: ['$x = 9$ or $x = -9$', '$x - 3 = 5$ or $x - 3 = -5$'],
          hint1: 'Set the inside equal to both the positive and the negative of the right-hand number.',
          hint2: 'Keep the **whole** inside expression; for $\\lvert x-3\\rvert=5$ that is $x-3$, not just $x$.',
          hint3: '$\\lvert x-3\\rvert=5 \\Rightarrow x-3=5$ or $x-3=-5$, giving $x=8$ or $x=-2$.',
          explanation: '$\\lvert x\\rvert=9 \\Rightarrow x=9$ or $x=-9$. $\\lvert x-3\\rvert=5 \\Rightarrow x-3=\\pm5$, so $x=8$ or $x=-2$.',
        },
      },
      {
        id: 'ave1-tobranches',
        type: 'text' as const,
        content: `## From Cases to Numbers

Once you've written the two cases, each one is just an ordinary equation to solve. For $\\lvert x\\rvert = 4$ the cases are already solved ($x = 4$ or $x = -4$). For $\\lvert x - 1\\rvert = 6$ you solve each branch:

$$x - 1 = 6 \\Rightarrow x = 7 \\qquad x - 1 = -6 \\Rightarrow x = -5$$

Try the next drill to lock in the full setup-and-solve flow.`,
      },
      {
        id: 'ave1-drill',
        type: 'input-boxes' as const,
        content: `**Set Up the Two Cases** 🧮

For each equation, enter the **larger** solution in the first box and the **smaller** in the second.

**1)** $\\lvert x\\rvert = 4$: larger $= \\,?$, smaller $= \\,?$
**2)** $\\lvert x - 1\\rvert = 6$: larger $= \\,?$, smaller $= \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['4', '-4', '7', '-5'],
          hint1: '$\\lvert x\\rvert = 4$ asks which numbers are $4$ from $0$: that is $4$ and $-4$ (larger first).',
          hint2: 'Split $\\lvert x-1\\rvert=6$ into $x-1=6$ and $x-1=-6$.',
          hint3: '$x - 1 = 6 \\Rightarrow x = 7$ (larger); $x - 1 = -6 \\Rightarrow x = -5$ (smaller).',
          explanation: '1) larger $4$, smaller $-4$.  2) $x-1=6$ gives $x=7$ (larger); $x-1=-6$ gives $x=-5$ (smaller).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'absolute-value-algebra1',
    sections: [
      {
        id: 'ave2-intro',
        type: 'text' as const,
        content: `# 📏 Absolute Value Equations

**Part 2 of 5 — Solving the Two Cases**

---

> 🔑 **The Plan:** Split $\\lvert \\text{expression}\\rvert = a$ into two ordinary linear equations — one positive, one negative — and solve each. Two branches, two answers.`,
      },
      {
        id: 'ave2-steps',
        type: 'text' as const,
        content: `## The Method

To solve $\\lvert mx + b\\rvert = a$ (with $a > 0$):

1. **Write both cases:**
$$mx + b = a \\qquad \\text{and} \\qquad mx + b = -a$$
2. **Solve each** linear equation separately.
3. **Check** by substituting back — both should make the inside come out to $\\pm a$.

### Worked Example: $\\lvert 2x - 3\\rvert = 7$

$$2x - 3 = 7 \\;\\Rightarrow\\; 2x = 10 \\;\\Rightarrow\\; x = 5$$
$$2x - 3 = -7 \\;\\Rightarrow\\; 2x = -4 \\;\\Rightarrow\\; x = -2$$

> ✅ **Check:** $\\lvert 2(5)-3\\rvert = \\lvert 7\\rvert = 7$ ✓ and $\\lvert 2(-2)-3\\rvert = \\lvert -7\\rvert = 7$ ✓`,
      },
      {
        id: 'ave2-worked2',
        type: 'text' as const,
        content: `### Worked Example: $\\lvert 3x + 6\\rvert = 12$

$$3x + 6 = 12 \\;\\Rightarrow\\; 3x = 6 \\;\\Rightarrow\\; x = 2$$
$$3x + 6 = -12 \\;\\Rightarrow\\; 3x = -18 \\;\\Rightarrow\\; x = -6$$

**Solutions:** $x = 2$ or $x = -6$.

> 💡 **Notice the symmetry.** Both solutions sit the same distance from the value that makes the inside zero. Here $3x+6=0$ at $x=-2$, and $2$ and $-6$ are each $4$ away from $-2$.`,
      },
      {
        id: 'ave2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which pair of equations correctly splits $\\lvert x + 4\\rvert = 10$?',
              options: [
                '$x + 4 = 10$ and $x + 4 = -10$',
                '$x + 4 = 10$ and $x - 4 = 10$',
                '$x = 10$ and $x = -10$',
                '$x + 4 = 10$ and $x + 4 = 10$',
              ],
              correctAnswer: 0,
              explanation: 'Keep the whole inside $x+4$ and set it equal to both $+10$ and $-10$: $x+4=10$ or $x+4=-10$, giving $x=6$ or $x=-14$.',
            },
            {
              question: 'The solutions of $\\lvert 2x - 3\\rvert = 7$ are:',
              options: ['$x = 5 \\text{ or } -2$', '$x = 5 \\text{ or } 2$', '$x = -5 \\text{ or } 2$', '$x = 7 \\text{ or } -7$'],
              correctAnswer: 0,
              explanation: '$2x-3=7 \\Rightarrow x=5$; $2x-3=-7 \\Rightarrow x=-2$.',
            },
          ],
        },
      },
      {
        id: 'ave2-walkthrough',
        type: 'text' as const,
        content: `## A Guided Walk-Through

Let's slow down on $\\lvert 3x + 6\\rvert = 12$ to see every blank get filled. The inside is $3x+6$, so the two cases set that whole expression equal to $+12$ and $-12$:

- **Positive case:** $3x + 6 = 12$
- **Negative case:** $3x + 6 = -12$

Solve each like a normal one-step-then-divide problem. The next check has you assemble exactly these pieces.`,
      },
      {
        id: 'ave2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Solution** 🔽

You're solving $\\lvert 3x + 6\\rvert = 12$. Choose what goes in each blank.`,
        exercise: {
          dropdowns: [
            { label: 'Positive case:', options: ['$3x + 6 = 12$', '$3x + 6 = -12$', '$3x = 12$', '$3x + 6 = 0$'] },
            { label: 'Negative case:', options: ['$3x + 6 = -12$', '$3x + 6 = 12$', '$3x - 6 = 12$', '$-3x + 6 = 12$'] },
            { label: 'Solution from the positive case:', options: ['$x = 2$', '$x = 6$', '$x = -2$', '$x = 18$'] },
            { label: 'Solution from the negative case:', options: ['$x = -6$', '$x = -18$', '$x = 6$', '$x = -2$'] },
          ],
          correctAnswers: ['$3x + 6 = 12$', '$3x + 6 = -12$', '$x = 2$', '$x = -6$'],
          hint1: 'Set the inside equal to $+12$ for the positive case and $-12$ for the negative case.',
          hint2: '$3x + 6 = 12 \\Rightarrow 3x = 6 \\Rightarrow x = 2$.',
          hint3: '$3x + 6 = -12 \\Rightarrow 3x = -18 \\Rightarrow x = -6$.',
          explanation: 'Splitting gives $3x+6=12$ ($x=2$) and $3x+6=-12$ ($x=-6$). Both check: $\\lvert 3(2)+6\\rvert=12$ and $\\lvert 3(-6)+6\\rvert=\\lvert -12\\rvert=12$.',
        },
      },
      {
        id: 'ave2-larger',
        type: 'text' as const,
        content: `## Reporting One Root

Some problems ask for just one of the two roots — often the larger. Solve **both** cases as usual, then compare:

$$\\lvert x + 4\\rvert = 10 \\;\\Rightarrow\\; x = 6 \\;\\text{ or }\\; x = -14 \\;\\Rightarrow\\; \\text{larger} = 6$$

The drill below asks for the larger root each time, so finish both branches before you answer.`,
      },
      {
        id: 'ave2-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each equation. Enter the **larger** solution.

**1)** $\\lvert x + 4\\rvert = 10 \\Rightarrow x = \\,?$  *(larger root)*
**2)** $\\lvert 2x - 8\\rvert = 4 \\Rightarrow x = \\,?$  *(larger root)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '6'],
          hint1: '$x+4=10 \\Rightarrow x=6$; $x+4=-10 \\Rightarrow x=-14$. Larger is $6$.',
          hint2: '$2x-8=4 \\Rightarrow x=6$; $2x-8=-4 \\Rightarrow x=2$. Larger is $6$.',
          hint3: 'Take the positive case for the larger root when the coefficient of $x$ is positive.',
          explanation: '1) roots $6$ and $-14$; larger $=6$.  2) roots $6$ and $2$; larger $=6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'absolute-value-algebra1',
    sections: [
      {
        id: 'ave3-intro',
        type: 'text' as const,
        content: `# 📏 Absolute Value Equations

**Part 3 of 5 — Isolate First, Then Watch for Special Cases**

---

> 🔑 **Golden Rule:** You may only split into two cases once the absolute value stands **completely alone** on one side. Anything multiplied, added, or subtracted outside the bars must be undone first.`,
      },
      {
        id: 'ave3-isolate',
        type: 'text' as const,
        content: `## Isolate the Absolute Value

If something is attached **outside** the bars, peel it away first — exactly like solving any linear equation.

### Worked Example: $3\\lvert x + 1\\rvert - 2 = 7$

1. Add $2$: $\\;3\\lvert x + 1\\rvert = 9$
2. Divide by $3$: $\\;\\lvert x + 1\\rvert = 3$
3. **Now** split into two cases:
$$x + 1 = 3 \\;\\Rightarrow\\; x = 2 \\qquad x + 1 = -3 \\;\\Rightarrow\\; x = -4$$

**Solutions:** $x = 2$ or $x = -4$.

> ⚠️ **Never split too early.** Splitting $3\\lvert x+1\\rvert-2=7$ before isolating gives wrong cases. Get to $\\lvert x+1\\rvert = 3$ *first*.`,
      },
      {
        id: 'ave3-isolate-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $-4\\lvert x - 1\\rvert = -20$, what is the **first** step?',
              options: [
                'Divide both sides by $-4$ to get $\\lvert x-1\\rvert = 5$',
                'Split into $x - 1 = -20$ and $x - 1 = 20$',
                'Drop the bars to get $-4(x-1) = -20$',
                'Add $4$ to both sides',
              ],
              correctAnswer: 0,
              explanation: 'Isolate first. Divide by $-4$: $\\lvert x-1\\rvert = 5$. Then split: $x-1=5$ ($x=6$) or $x-1=-5$ ($x=-4$).',
            },
            {
              question: 'After isolating, $2\\lvert x\\rvert + 1 = 11$ becomes:',
              options: ['$\\lvert x\\rvert = 5$', '$\\lvert x\\rvert = 11$', '$\\lvert x\\rvert = 6$', '$\\lvert x\\rvert = 10$'],
              correctAnswer: 0,
              explanation: 'Subtract $1$: $2\\lvert x\\rvert=10$. Divide by $2$: $\\lvert x\\rvert=5$, so $x=\\pm 5$.',
            },
          ],
        },
      },
      {
        id: 'ave3-special',
        type: 'text' as const,
        content: `## Two Special Cases

Once isolated, look at the number on the right:

| Equation form | Number of solutions | Why |
|---------------|---------------------|-----|
| $\\lvert x\\rvert = a,\\; a > 0$ | **Two** | two points at distance $a$ |
| $\\lvert x\\rvert = 0$ | **One** | only $0$ is $0$ units from $0$ |
| $\\lvert x\\rvert = a,\\; a < 0$ | **None** | distance can't be negative |

### Example: $\\lvert x - 4\\rvert = 0$

A distance of $0$ means the inside *is* $0$: $\\;x - 4 = 0 \\Rightarrow x = 4$. Just **one** solution.

### Example: $2\\lvert x - 5\\rvert + 8 = 2$

Isolate: $2\\lvert x-5\\rvert = -6 \\Rightarrow \\lvert x - 5\\rvert = -3$. An absolute value can never equal $-3$, so there is **no solution**.

> 💡 **Spot it fast:** after isolating, if the right side is **negative**, stop — no solution. If it's exactly **zero**, there's exactly one solution.`,
      },
      {
        id: 'ave3-special-dropdown',
        type: 'dropdown-select' as const,
        content: `**How Many Solutions?** 🔽

Isolate first (in your head), then pick the number of solutions.`,
        exercise: {
          dropdowns: [
            { label: '$\\lvert x + 2\\rvert = 5$', options: ['Two', 'One', 'None'] },
            { label: '$\\lvert x - 7\\rvert = 0$', options: ['One', 'Two', 'None'] },
            { label: '$\\lvert 3x\\rvert = -1$', options: ['None', 'One', 'Two'] },
            { label: '$\\lvert x\\rvert + 4 = 4$', options: ['One', 'Two', 'None'] },
          ],
          correctAnswers: ['Two', 'One', 'None', 'One'],
          hint1: 'A positive right side gives two solutions; zero gives one; negative gives none.',
          hint2: 'Isolate before judging: $\\lvert x\\rvert + 4 = 4$ becomes $\\lvert x\\rvert = 0$.',
          hint3: '$\\lvert 3x\\rvert = -1$ is impossible (no negative absolute values); $\\lvert x\\rvert=0$ has the single solution $x=0$.',
          explanation: '$\\lvert x+2\\rvert=5$: two. $\\lvert x-7\\rvert=0$: one ($x=7$). $\\lvert 3x\\rvert=-1$: none. $\\lvert x\\rvert+4=4 \\Rightarrow \\lvert x\\rvert=0$: one ($x=0$).',
        },
      },
      {
        id: 'ave3-recap',
        type: 'text' as const,
        content: `## Putting It Together

The full routine now has three moves:

1. **Isolate** the absolute value (undo anything outside the bars).
2. **Check the right side** — negative means no solution, zero means one solution.
3. **Split** into two cases and solve.

The drill below mixes a normal two-solution problem, a negative-coefficient isolate, and a zero special case.`,
      },
      {
        id: 'ave3-drill',
        type: 'input-boxes' as const,
        content: `**Isolate, Then Solve** 🧮

**1)** $3\\lvert x + 1\\rvert - 2 = 7$. Enter the **larger** solution.
**2)** $-4\\lvert x - 1\\rvert = -20$. Enter the **larger** solution.
**3)** $\\lvert x - 4\\rvert = 0$. Enter the only solution.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '6', '4'],
          hint1: '1) $\\lvert x+1\\rvert=3 \\Rightarrow x=2$ or $-4$; larger is $2$.',
          hint2: '2) Divide by $-4$: $\\lvert x-1\\rvert=5 \\Rightarrow x=6$ or $-4$; larger is $6$.',
          hint3: '3) A distance of $0$ forces $x-4=0$, so $x=4$ (one solution).',
          explanation: '1) larger root $=2$.  2) larger root $=6$.  3) the single solution is $4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'absolute-value-algebra1',
    sections: [
      {
        id: 'ave4-intro',
        type: 'text' as const,
        content: `# 📏 Absolute Value Equations

**Part 4 of 5 — Variables on Both Sides & Extraneous Solutions**

---

> 🔑 **New Wrinkle:** When a **variable** sits on the right (like $\\lvert x - 2\\rvert = 3x$), splitting still works — but one branch can produce a value that *doesn't actually check*. Those are **extraneous solutions**, and you must throw them out.`,
      },
      {
        id: 'ave4-extraneous',
        type: 'text' as const,
        content: `## Why Extraneous Solutions Appear

The split $\\lvert A\\rvert = B \\Rightarrow A = B$ or $A = -B$ secretly **assumes** $B \\ge 0$ (an absolute value can't equal a negative). When $B$ contains a variable, a branch might hand you an $x$ that makes $B$ negative — impossible. So:

> ⚠️ **Always substitute every candidate back into the *original* equation.** Keep only the ones that make a true statement. Discard the rest as extraneous.

### Worked Example: $\\lvert x + 5\\rvert = 2x - 1$

**Case 1 (positive):** $x + 5 = 2x - 1 \\Rightarrow 6 = x$, so $x = 6$.
Check: $\\lvert 6+5\\rvert = \\lvert 11\\rvert = 11$ and $2(6)-1 = 11$. ✓ **Keep.**

**Case 2 (negative):** $x + 5 = -(2x - 1) = -2x + 1 \\Rightarrow 3x = -4 \\Rightarrow x = -\\tfrac{4}{3}$.
Check: right side $= 2(-\\tfrac{4}{3}) - 1 = -\\tfrac{11}{3}$, which is **negative**. An absolute value can't be negative. ✗ **Reject.**

**Only solution:** $x = 6$.`,
      },
      {
        id: 'ave4-extr-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why must you check candidates in $\\lvert x - 2\\rvert = 3x$?',
              options: [
                'The right side $3x$ can be negative, which an absolute value can never equal',
                'Absolute value equations always have exactly one solution',
                'Checking changes the answers',
                'You never need to check — both cases always work',
              ],
              correctAnswer: 0,
              explanation: 'When a variable is on the right, a branch may give an $x$ that makes $3x$ negative. Since $\\lvert x-2\\rvert \\ge 0$, such a value cannot be a real solution and is extraneous.',
            },
            {
              question: 'A candidate $x$ makes the original equation read $\\lvert {\\cdots}\\rvert = -2$. This candidate is:',
              options: ['Extraneous — discard it', 'A valid second solution', 'Equal to $2$', 'The only solution'],
              correctAnswer: 0,
              explanation: 'No absolute value can equal $-2$, so the candidate fails the check and must be discarded as extraneous.',
            },
          ],
        },
      },
      {
        id: 'ave4-worked',
        type: 'text' as const,
        content: `## A Case Where BOTH Branches Survive

Not every problem has an extraneous root — you still must check to be sure.

### Worked Example: $\\lvert 2x + 1\\rvert = x + 4$

**Case 1:** $2x + 1 = x + 4 \\Rightarrow x = 3$.
Check: $\\lvert 2(3)+1\\rvert = \\lvert 7\\rvert = 7$ and $3 + 4 = 7$. ✓

**Case 2:** $2x + 1 = -(x + 4) = -x - 4 \\Rightarrow 3x = -5 \\Rightarrow x = -\\tfrac{5}{3}$.
Check: $\\lvert 2(-\\tfrac{5}{3})+1\\rvert = \\lvert -\\tfrac{7}{3}\\rvert = \\tfrac{7}{3}$ and $-\\tfrac{5}{3} + 4 = \\tfrac{7}{3}$. ✓

**Both work:** $x = 3$ or $x = -\\tfrac{5}{3}$.

> 💡 **Takeaway:** Solve both branches, then **let the check decide**. Sometimes you keep both, sometimes one, sometimes none.`,
      },
      {
        id: 'ave4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Keep or Reject?** 🔽

For $\\lvert x - 2\\rvert = 3x$, the two branches give $x = -1$ and $x = \\tfrac{1}{2}$. Decide each, then count.`,
        exercise: {
          dropdowns: [
            { label: 'Candidate $x = -1$ makes $3x =$', options: ['$-3$ (negative)', '$3$ (positive)', '$0$', '$-1$'] },
            { label: 'So $x = -1$ is', options: ['Extraneous — reject', 'Valid — keep'] },
            { label: 'Candidate $x = \\tfrac{1}{2}$: $\\lvert x-2\\rvert = \\tfrac{3}{2}$ and $3x =$', options: ['$\\tfrac{3}{2}$ — matches', '$\\tfrac{1}{2}$ — no match', '$-\\tfrac{3}{2}$'] },
            { label: 'Number of real solutions:', options: ['One', 'Two', 'None'] },
          ],
          correctAnswers: ['$-3$ (negative)', 'Extraneous — reject', '$\\tfrac{3}{2}$ — matches', 'One'],
          hint1: 'Plug each candidate into $3x$; a negative result can never equal an absolute value.',
          hint2: 'At $x=-1$, $3x=-3<0$, so the equation would read $\\lvert {-3}\\rvert = -3$ — impossible.',
          hint3: 'At $x=\\tfrac12$, $\\lvert x-2\\rvert=\\tfrac32$ and $3x=\\tfrac32$ — they match, so keep it. Only one survives.',
          explanation: '$x=-1$ makes $3x=-3<0$, so it is extraneous. $x=\\tfrac12$ checks ($\\tfrac32=\\tfrac32$). Exactly **one** solution.',
        },
      },
      {
        id: 'ave4-checklist',
        type: 'text' as const,
        content: `## Your Extraneous-Root Checklist

When the right side holds a variable, finish with these two questions for **every** candidate:

1. Does substituting it into the original make a **true** statement?
2. Is the resulting right side **non-negative**? (An absolute value can't equal a negative number.)

If either answer is no, the root is extraneous — cross it out. Now try a problem with one rejected root and one with both roots valid.`,
      },
      {
        id: 'ave4-drill',
        type: 'input-boxes' as const,
        content: `**Solve and Check** 🧮

Solve, discard any extraneous roots, and enter the valid solution(s).

**1)** $\\lvert x + 5\\rvert = 2x - 1$. Enter the only valid solution.
**2)** $\\lvert 2x + 1\\rvert = x + 4$. Enter the **larger** valid solution.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '3'],
          hint1: '1) Case $x+5=2x-1$ gives $x=6$ (checks). The other case gives a negative right side — reject.',
          hint2: '2) Case $2x+1=x+4$ gives $x=3$; the other gives $x=-\\tfrac{5}{3}$. Both check; larger is $3$.',
          hint3: 'Always substitute back into the original to confirm the right side is not negative.',
          explanation: '1) only $x=6$ survives.  2) both $3$ and $-\\tfrac{5}{3}$ are valid; the larger is $3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'absolute-value-algebra1',
    sections: [
      {
        id: 'ave5-intro',
        type: 'text' as const,
        content: `# 📏 Absolute Value Equations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read $\\lvert x\\rvert$ as distance, (2) split into two cases, (3) isolate first and handle the no-solution / one-solution specials, and (4) reject extraneous roots. Let's put it together.`,
      },
      {
        id: 'ave5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | What to do |
|-----------|-----------|
| $\\lvert x\\rvert = a,\\; a>0$ | $x = a$ or $x = -a$ (two solutions) |
| $\\lvert x\\rvert = 0$ | inside $=0$ (one solution) |
| $\\lvert x\\rvert = a,\\; a<0$ | **no solution** |
| Stuff outside the bars | **isolate first**, then split |
| Variable on the right | solve both cases, then **check** and drop extraneous roots |

> ⚠️ **Two habits that prevent most mistakes:** isolate the bars *before* splitting, and substitute every candidate back into the **original** equation.`,
      },
      {
        id: 'ave5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\lvert x - 3\\rvert = 5$.',
              options: ['$x = 8 \\text{ or } -2$', '$x = 8 \\text{ or } 2$', '$x = -8 \\text{ or } 2$', '$x = 5 \\text{ or } -5$'],
              correctAnswer: 0,
              explanation: '$x-3=5 \\Rightarrow x=8$; $x-3=-5 \\Rightarrow x=-2$. Both are $5$ units from $3$.',
            },
            {
              question: 'How many solutions does $\\lvert 2x + 7\\rvert = -3$ have?',
              options: ['None', 'One', 'Two', 'Infinitely many'],
              correctAnswer: 0,
              explanation: 'An absolute value is never negative, so $\\lvert 2x+7\\rvert = -3$ is impossible — no solution.',
            },
          ],
        },
      },
      {
        id: 'ave5-strategy',
        type: 'text' as const,
        content: `## One Reliable Order of Operations

Whenever you meet an absolute value equation, run the same checklist:

1. **Isolate** the bars on one side.
2. **Inspect the right side:** negative → no solution; zero → one solution; positive → continue.
3. **Split** into the positive and negative cases and solve each.
4. **Check** every candidate in the original (especially when a variable is on the right).

The next drill rehearses an isolate-first problem and an extraneous-root problem back to back.`,
      },
      {
        id: 'ave5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More Round** 🧮

**1)** $2\\lvert x\\rvert + 1 = 11$. Enter the **positive** solution.
**2)** $\\lvert x + 5\\rvert = 2x - 1$ (check for extraneous!). Enter the valid solution.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '6'],
          hint1: '1) Isolate: $2\\lvert x\\rvert=10 \\Rightarrow \\lvert x\\rvert=5 \\Rightarrow x=\\pm 5$. Positive one is $5$.',
          hint2: '2) $x+5=2x-1 \\Rightarrow x=6$ (checks). The negative case gives a negative right side — reject.',
          hint3: 'Isolate before splitting; check before keeping.',
          explanation: '1) $\\lvert x\\rvert=5$, positive solution $=5$.  2) only $x=6$ survives the check.',
        },
      },
      {
        id: 'ave5-readyforexit',
        type: 'text' as const,
        content: `## Ready for the Exit Quiz

You've practiced every move: reading $\\lvert x\\rvert$ as distance, splitting into two cases, isolating before splitting, the no-solution / one-solution specials, and rejecting extraneous roots. The three questions below pull from all of it — take your time and check each answer.`,
      },
      {
        id: 'ave5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The solutions of $\\lvert 3x + 6\\rvert = 12$ are:',
              options: ['$x = 2 \\text{ or } -6$', '$x = 2 \\text{ or } 6$', '$x = -2 \\text{ or } 6$', '$x = 6 \\text{ or } -6$'],
              correctAnswer: 0,
              explanation: '$3x+6=12 \\Rightarrow x=2$; $3x+6=-12 \\Rightarrow x=-6$.',
            },
            {
              question: 'After isolating, $2\\lvert x - 5\\rvert + 8 = 2$ becomes $\\lvert x - 5\\rvert = -3$. The equation has:',
              options: ['No solution', 'One solution', 'Two solutions', 'The solution $x = 5$'],
              correctAnswer: 0,
              explanation: 'Isolating gives $\\lvert x-5\\rvert = -3$. Absolute value can never be negative, so there is no solution.',
            },
            {
              question: 'For $\\lvert x - 2\\rvert = 3x$, one branch gives $x = -1$. This candidate is:',
              options: ['Extraneous (makes the right side negative)', 'A valid solution', 'Equal to the other solution', 'Undefined'],
              correctAnswer: 0,
              explanation: 'At $x=-1$, the right side $3x=-3<0$, but $\\lvert x-2\\rvert \\ge 0$. The equation cannot hold, so $x=-1$ is extraneous. (The valid solution is $x=\\tfrac12$.)',
            },
          ],
        },
      },
    ],
  },
]
