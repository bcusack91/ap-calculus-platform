import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Linear Inequalities (Algebra 1).
 * Registry key: 'linear-inequalities-algebra1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'linear-inequalities-algebra1',
    sections: [
      {
        id: 'lin1-intro',
        type: 'text' as const,
        content: `# ⚖️ Linear Inequalities

**Part 1 of 5 — Reading and Understanding Inequalities**

---

### Topics in This Part

| Section |
|---------|
| The Four Inequality Symbols |
| Solutions Are *Ranges*, Not Single Numbers |
| Checking Whether a Number Is a Solution |

> 🔑 **Key Concept:** An equation like $x = 3$ has **one** answer. An inequality like $x > 3$ has **infinitely many** answers — every number bigger than $3$. Learning to read, solve, and picture those ranges is what this lesson is about.`,
      },
      {
        id: 'lin1-symbols',
        type: 'text' as const,
        content: `## The Four Inequality Symbols

Each symbol compares two quantities and points (the small end) at the **smaller** value.

| Symbol | Read it as | Example | Meaning |
|--------|-----------|---------|---------|
| $<$ | "is less than" | $x < 5$ | $x$ is below $5$ (not $5$ itself) |
| $>$ | "is greater than" | $x > 5$ | $x$ is above $5$ (not $5$ itself) |
| $\\le$ | "is less than or equal to" | $x \\le 5$ | $x$ is $5$ or below |
| $\\ge$ | "is greater than or equal to" | $x \\ge 5$ | $x$ is $5$ or above |

> 💡 **Strict vs. inclusive:** $<$ and $>$ are **strict** — they exclude the boundary number. $\\le$ and $\\ge$ are **inclusive** — they include it. That single difference decides whether a graph uses an open circle or a closed dot (Part 4).

You can also flip a statement around as long as you flip the symbol with it:

$$x > 5 \\quad\\text{means the same as}\\quad 5 < x$$`,
      },
      {
        id: 'lin1-read-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which inequality says "$x$ is at least $7$"?',
              options: ['$x \\ge 7$', '$x > 7$', '$x \\le 7$', '$x < 7$'],
              correctAnswer: 0,
              explanation: '"At least $7$" means $7$ is allowed and anything bigger is too, so $x \\ge 7$. "More than $7$" (excluding $7$) would be $x > 7$.',
            },
            {
              question: 'The statement $-2 < x$ is the same as:',
              options: ['$x > -2$', '$x < -2$', '$x \\ge -2$', '$x = -2$'],
              correctAnswer: 0,
              explanation: 'Flip the whole statement and the symbol flips too: $-2 < x$ becomes $x > -2$. The small end still points at $-2$.',
            },
          ],
        },
      },
      {
        id: 'lin1-ranges',
        type: 'text' as const,
        content: `## Solutions Are Ranges

The **solution** of an inequality is the *set of all numbers* that make it true.

Take $x > 3$. Is $4$ a solution? Yes ($4 > 3$). Is $3.001$? Yes. Is $100$? Yes. Is $3$ itself? **No** — the symbol is strict. So the solution is *every* number greater than $3$ — an infinite range.

> 🔑 **The big shift from equations:** When you "solve" an inequality, you're not hunting for one value — you're describing a whole interval of values. The answer is itself an inequality, like $x \\le 8$.

### Words That Become Symbols

| Phrase | Symbol |
|--------|--------|
| "more than", "greater than", "exceeds" | $>$ |
| "less than", "fewer than", "below" | $<$ |
| "at least", "no less than", "minimum" | $\\ge$ |
| "at most", "no more than", "maximum" | $\\le$ |`,
      },
      {
        id: 'lin1-translate-dd',
        type: 'dropdown-select' as const,
        content: `**Translate the Words** 🔽

Pick the inequality that matches each phrase (let $x$ be the number).`,
        exercise: {
          dropdowns: [
            { label: '"A number is at most $12$":', options: ['$x \\le 12$', '$x < 12$', '$x \\ge 12$', '$x > 12$'] },
            { label: '"A number exceeds $-4$":', options: ['$x > -4$', '$x \\ge -4$', '$x < -4$', '$x \\le -4$'] },
            { label: '"You must be no less than $18$":', options: ['$x \\ge 18$', '$x > 18$', '$x \\le 18$', '$x < 18$'] },
          ],
          correctAnswers: ['$x \\le 12$', '$x > -4$', '$x \\ge 18$'],
          hint1: '"At most" sets a maximum that *is* allowed, so use $\\le$.',
          hint2: '"Exceeds" means strictly more than, so use $>$ (the boundary is not included).',
          hint3: '"No less than $18$" means $18$ is the smallest value allowed, so $x \\ge 18$.',
          explanation: '"At most" → $\\le$. "Exceeds" → $>$. "No less than" → $\\ge$. Inclusive phrases ("at most", "no less than") keep the boundary; strict phrases ("exceeds") drop it.',
        },
      },
      {
        id: 'lin1-check',
        type: 'text' as const,
        content: `## Checking a Candidate

To test whether a number is a solution, **substitute** it and see if the statement is true.

### Example: Is $x = 2$ a solution of $3x - 1 \\le 5$?

$$3(2) - 1 = 6 - 1 = 5 \\le 5 \\;\\checkmark$$

Yes — $5 \\le 5$ is true (the $\\le$ allows equality), so $2$ **is** a solution.

### Example: Is $x = -1$ a solution of $2x + 4 > 3$?

$$2(-1) + 4 = -2 + 4 = 2 > 3 \\;?$$

$2 > 3$ is **false**, so $-1$ is **not** a solution.

> 💡 Checking is your safety net. After you solve an inequality in Part 2, plug a number from your answer range back in to confirm it works.`,
      },
      {
        id: 'lin1-check-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which value is a solution of $x - 4 \\ge 1$?',
              options: ['$x = 6$', '$x = 4$', '$x = 2$', '$x = 0$'],
              correctAnswer: 0,
              explanation: '$x - 4 \\ge 1$ means $x \\ge 5$. Of the choices only $6 \\ge 5$ is true. ($4-4=0$, $2-4=-2$, $0-4=-4$ all fail.)',
            },
            {
              question: 'Is $x = 5$ a solution of $2x + 1 < 11$?',
              options: ['No, because $11 < 11$ is false', 'Yes, because $11 < 11$ is true', 'Yes, because $5 < 11$', 'No, because $5$ is too small'],
              correctAnswer: 0,
              explanation: '$2(5)+1 = 11$, and $11 < 11$ is false (strict $<$ excludes equality), so $x=5$ is not a solution. It would work for $\\le$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'linear-inequalities-algebra1',
    sections: [
      {
        id: 'lin2-intro',
        type: 'text' as const,
        content: `# ⚖️ Linear Inequalities

**Part 2 of 5 — Solving One- and Two-Step Inequalities**

---

> 🔑 **The Big Idea:** You solve an inequality almost exactly like an equation — add, subtract, multiply, and divide to isolate the variable. There is **one** new rule, and it is the most important rule in the whole lesson.`,
      },
      {
        id: 'lin2-likeeq',
        type: 'text' as const,
        content: `## Most Steps Work Just Like Equations

Adding or subtracting the same number from both sides keeps an inequality true and keeps the **same** symbol.

### Example: $x + 5 < 9$

$$x + 5 - 5 < 9 - 5 \\;\\Rightarrow\\; x < 4$$

### Example: $x - 3 \\ge 2$

$$x - 3 + 3 \\ge 2 + 3 \\;\\Rightarrow\\; x \\ge 5$$

Multiplying or dividing by a **positive** number also keeps the symbol the same.

### Example: $4x \\le 20$

$$\\frac{4x}{4} \\le \\frac{20}{4} \\;\\Rightarrow\\; x \\le 5$$

> ✅ **Check** $x = 5$: $4(5) = 20 \\le 20$ ✓, and a smaller value like $x=0$ gives $0 \\le 20$ ✓.`,
      },
      {
        id: 'lin2-likeeq-dd',
        type: 'dropdown-select' as const,
        content: `**Same as an Equation?** 🔽

For each step, choose whether the inequality symbol stays the same or flips.`,
        exercise: {
          dropdowns: [
            { label: 'Subtract $8$ from both sides:', options: ['symbol stays the same', 'symbol flips'] },
            { label: 'Divide both sides by $5$:', options: ['symbol stays the same', 'symbol flips'] },
            { label: 'Multiply both sides by $-2$:', options: ['symbol flips', 'symbol stays the same'] },
          ],
          correctAnswers: ['symbol stays the same', 'symbol stays the same', 'symbol flips'],
          hint1: 'Adding or subtracting a number never changes the symbol.',
          hint2: 'Dividing by a *positive* number ($5$) keeps the symbol the same.',
          hint3: 'Multiplying (or dividing) by a *negative* number is the only step that flips the symbol.',
          explanation: 'Only multiplying or dividing by a negative flips the symbol. Adding/subtracting and operating with positives all leave it unchanged.',
        },
      },
      {
        id: 'lin2-flip',
        type: 'text' as const,
        content: `## ⚠️ The Flip Rule (the one new rule)

> ⚠️ **When you multiply or divide BOTH sides by a NEGATIVE number, you MUST reverse the inequality symbol.**

Why? Watch what negatives do to order. We know $2 < 6$. Multiply both sides by $-1$:

$$-2 \\quad\\text{vs.}\\quad -6$$

Now $-2$ is the **bigger** number, so the true statement is $-2 > -6$. The symbol had to flip.

### Example: $-3x < 12$

Divide both sides by $-3$ — **and flip $<$ to $>$**:

$$\\frac{-3x}{-3} > \\frac{12}{-3} \\;\\Rightarrow\\; x > -4$$

### Example: $-x \\ge 7$

Multiply both sides by $-1$ — **flip $\\ge$ to $\\le$**:

$$x \\le -7$$

> 💡 The flip happens **only** for multiplying/dividing by a negative. Adding or subtracting a negative number does **not** flip anything.`,
      },
      {
        id: 'lin2-flip-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solving $-2x > 10$ gives:',
              options: ['$x < -5$', '$x > -5$', '$x > 5$', '$x < 5$'],
              correctAnswer: 0,
              explanation: 'Divide by $-2$ and flip $>$ to $<$: $x < \\frac{10}{-2} = -5$, so $x < -5$.',
            },
            {
              question: 'In which step must you flip the inequality symbol?',
              options: ['Dividing both sides by $-4$', 'Subtracting $6$ from both sides', 'Adding $-3$ to both sides', 'Dividing both sides by $4$'],
              correctAnswer: 0,
              explanation: 'Only multiplying or dividing by a *negative* flips the symbol. Dividing by $-4$ does; the others (including adding a negative) do not.',
            },
          ],
        },
      },
      {
        id: 'lin2-twostep',
        type: 'text' as const,
        content: `## Two-Step Inequalities

Undo the operations in reverse order: deal with addition/subtraction first, then multiplication/division.

### Example: $2x + 3 \\le 11$

$$2x + 3 - 3 \\le 11 - 3 \\;\\Rightarrow\\; 2x \\le 8 \\;\\Rightarrow\\; x \\le 4$$

(Divided by a **positive** $2$ — no flip.)

### Example: $-5x + 1 > 16$

$$-5x > 15 \\;\\Rightarrow\\; x < \\frac{15}{-5} \\;\\Rightarrow\\; x < -3$$

(Divided by a **negative** $-5$ — flipped $>$ to $<$.)

> ✅ **Check** $x = -4$ in $-5x + 1 > 16$: $-5(-4)+1 = 21 > 16$ ✓.`,
      },
      {
        id: 'lin2-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each inequality. Enter the **boundary number** only (the number $x$ is compared to).

**1)** $x + 7 < 2 \\;\\Rightarrow\\; x < \\,?$
**2)** $3x \\ge -12 \\;\\Rightarrow\\; x \\ge \\,?$
**3)** $-4x \\le 20 \\;\\Rightarrow\\; x \\ge \\,?$  *(remember to flip)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-5', '-4', '-5'],
          hint1: '$x + 7 < 2 \\Rightarrow x < 2 - 7 = -5$.',
          hint2: '$3x \\ge -12 \\Rightarrow x \\ge -12 \\div 3 = -4$ (positive divisor, no flip).',
          hint3: '$-4x \\le 20$: divide by $-4$ and flip $\\le$ to $\\ge$, giving $x \\ge 20 \\div (-4) = -5$.',
          explanation: '1) $x < -5$.  2) $x \\ge -4$.  3) dividing by $-4$ flips the symbol, so $x \\ge -5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'linear-inequalities-algebra1',
    sections: [
      {
        id: 'lin3-intro',
        type: 'text' as const,
        content: `# ⚖️ Linear Inequalities

**Part 3 of 5 — Multi-Step Inequalities**

---

> 🔑 **Same playbook, more moves:** Distribute, combine like terms, and collect the variable on one side — exactly as you would for an equation. Keep watching for the one place a negative can sneak in and flip your symbol.`,
      },
      {
        id: 'lin3-distribute',
        type: 'text' as const,
        content: `## Distributing First

When a number multiplies a group, distribute before isolating.

### Example: $3(x - 2) \\le 9$

$$3x - 6 \\le 9 \\;\\Rightarrow\\; 3x \\le 15 \\;\\Rightarrow\\; x \\le 5$$

### Example: $-2(x + 1) > 8$

$$-2x - 2 > 8 \\;\\Rightarrow\\; -2x > 10 \\;\\Rightarrow\\; x < -5$$

> ⚠️ Notice the flip in the second example: the final divide was by $-2$, so $>$ became $<$. Distributing the $-2$ at the start did **not** flip anything — only the *divide-by-negative* step does.`,
      },
      {
        id: 'lin3-distribute-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'After distributing, $-4(x - 3) \\le 8$ becomes:',
              options: ['$-4x + 12 \\le 8$', '$-4x - 12 \\le 8$', '$-4x + 3 \\le 8$', '$-4x - 3 \\le 8$'],
              correctAnswer: 0,
              explanation: '$-4 \\cdot x = -4x$ and $-4 \\cdot (-3) = +12$, giving $-4x + 12 \\le 8$. Distributing itself does not flip the symbol.',
            },
            {
              question: 'Solve $2(x - 5) > 4$.',
              options: ['$x > 7$', '$x > 5$', '$x < 7$', '$x > 9$'],
              correctAnswer: 0,
              explanation: '$2(x-5) > 4 \\Rightarrow 2x - 10 > 4 \\Rightarrow 2x > 14 \\Rightarrow x > 7$ (divided by positive $2$, no flip).',
            },
          ],
        },
      },
      {
        id: 'lin3-bothsides',
        type: 'text' as const,
        content: `## Variables on Both Sides

Move all variable terms to one side and all constants to the other. A clean trick: move the variable to whichever side keeps its coefficient **positive**, and you'll often avoid the flip entirely.

### Example: $5x - 4 > 2x + 11$

Subtract $2x$ from both sides, then add $4$:

$$3x - 4 > 11 \\;\\Rightarrow\\; 3x > 15 \\;\\Rightarrow\\; x > 5$$

### Example: $x + 8 \\le 4x - 1$

Subtract $x$ from both sides, then add $1$:

$$8 \\le 3x - 1 \\;\\Rightarrow\\; 9 \\le 3x \\;\\Rightarrow\\; 3 \\le x \\;\\Rightarrow\\; x \\ge 3$$

> 💡 By moving the $x$-terms to the side that kept a **positive** coefficient ($3x$), neither example needed a flip. Same answer either way — this route is just safer.`,
      },
      {
        id: 'lin3-order-dd',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're solving $-3(x - 1) \\ge 12$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Distribute the $-3$:', options: ['$-3x + 3 \\ge 12$', '$-3x - 3 \\ge 12$', '$-3x + 1 \\ge 12$', '$x - 1 \\ge 12$'] },
            { label: 'Subtract $3$ from both sides:', options: ['$-3x \\ge 9$', '$-3x \\ge 15$', '$-3x \\ge 12$', '$-3x \\ge -9$'] },
            { label: 'Divide by $-3$ (watch the symbol):', options: ['$x \\le -3$', '$x \\ge -3$', '$x \\le 3$', '$x \\ge 3$'] },
          ],
          correctAnswers: ['$-3x + 3 \\ge 12$', '$-3x \\ge 9$', '$x \\le -3$'],
          hint1: '$-3 \\cdot x = -3x$ and $-3 \\cdot (-1) = +3$, so you get $-3x + 3 \\ge 12$.',
          hint2: 'Subtract $3$: $-3x \\ge 12 - 3 = 9$.',
          hint3: 'Divide by $-3$ and flip $\\ge$ to $\\le$: $x \\le \\frac{9}{-3} = -3$.',
          explanation: '$-3(x-1)\\ge 12 \\Rightarrow -3x+3\\ge 12 \\Rightarrow -3x \\ge 9 \\Rightarrow x \\le -3$ (flip on the divide-by-negative step).',
        },
      },
      {
        id: 'lin3-special',
        type: 'text' as const,
        content: `## Two Special Outcomes

Sometimes the variable disappears. What's left tells you the answer.

### All real numbers (always true)

$$2(x + 3) > 2x + 1 \\;\\Rightarrow\\; 2x + 6 > 2x + 1 \\;\\Rightarrow\\; 6 > 1$$

The $x$ cancels and $6 > 1$ is **always** true, so **every** number works — the solution is *all real numbers*.

### No solution (never true)

$$x + 5 < x + 2 \\;\\Rightarrow\\; 5 < 2$$

The $x$ cancels and $5 < 2$ is **never** true, so **no** number works — there is *no solution*.

> 💡 When the variable vanishes, look at the leftover number statement: if it's **true**, all reals are solutions; if it's **false**, there are no solutions.`,
      },
      {
        id: 'lin3-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve and enter the **boundary number** ($x$ is compared to it).

**1)** $4(x + 2) \\ge 4 \\;\\Rightarrow\\; x \\ge \\,?$
**2)** $6x - 5 < 2x + 7 \\;\\Rightarrow\\; x < \\,?$
**3)** $2 - x > 9 \\;\\Rightarrow\\; x < \\,?$  *(watch the flip)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1', '3', '-7'],
          hint1: '$4(x+2)\\ge 4 \\Rightarrow 4x + 8 \\ge 4 \\Rightarrow 4x \\ge -4 \\Rightarrow x \\ge -1$.',
          hint2: '$6x - 5 < 2x + 7 \\Rightarrow 4x < 12 \\Rightarrow x < 3$.',
          hint3: '$2 - x > 9 \\Rightarrow -x > 7 \\Rightarrow x < -7$ (multiply by $-1$, flip).',
          explanation: '1) $x \\ge -1$.  2) $x < 3$.  3) $-x > 7$ flips to $x < -7$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'linear-inequalities-algebra1',
    sections: [
      {
        id: 'lin4-intro',
        type: 'text' as const,
        content: `# ⚖️ Linear Inequalities

**Part 4 of 5 — Graphing, Interval Notation & Word Problems**

---

> 🔑 **See it and use it:** A solution like $x > 3$ is easy to picture on a number line and to write compactly in *interval notation*. Then we'll turn real-world sentences into inequalities and solve them.`,
      },
      {
        id: 'lin4-graph',
        type: 'text' as const,
        content: `## Graphing on a Number Line

Two decisions: the **type of dot** and the **direction of the arrow**.

| Symbol | Dot at the boundary | Arrow points |
|--------|---------------------|--------------|
| $<$ | open circle ○ (not included) | left |
| $\\le$ | closed dot ● (included) | left |
| $>$ | open circle ○ (not included) | right |
| $\\ge$ | closed dot ● (included) | right |

### Example: $x \\le 2$

Closed dot ● on $2$ (because of the $=$ part), arrow shading **left** toward smaller numbers.

### Example: $x > -1$

Open circle ○ on $-1$ (strict, so $-1$ is excluded), arrow shading **right** toward larger numbers.

> ⚠️ **Open vs. closed is decided by the symbol, not the sign of the number.** $x > -1$ uses an open circle because $>$ is strict — the negative has nothing to do with it.`,
      },
      {
        id: 'lin4-graph-dd',
        type: 'dropdown-select' as const,
        content: `**Match the Graph** 🔽

Describe the number-line graph of each solution.`,
        exercise: {
          dropdowns: [
            { label: 'For $x \\ge 4$, the boundary dot is:', options: ['closed (●)', 'open (○)'] },
            { label: 'For $x < -2$, the arrow shades to the:', options: ['left', 'right'] },
            { label: 'For $x > 0$, the boundary dot is:', options: ['open (○)', 'closed (●)'] },
          ],
          correctAnswers: ['closed (●)', 'left', 'open (○)'],
          hint1: '$\\ge$ includes the boundary, so the dot is filled in (closed).',
          hint2: '"Less than" points toward smaller numbers, so the arrow goes left.',
          hint3: '$>$ is strict, so the boundary $0$ is excluded — an open circle.',
          explanation: '$\\ge$ and $\\le$ → closed dot; $>$ and $<$ → open circle. "Less than" shades left; "greater than" shades right.',
        },
      },
      {
        id: 'lin4-interval',
        type: 'text' as const,
        content: `## Interval Notation

A compact way to write a solution range. Use a **square bracket** $[$ or $]$ when the endpoint is **included** ($\\le, \\ge$) and a **parenthesis** $($ or $)$ when it is **excluded** ($<, >$). Infinity $\\infty$ always gets a parenthesis (you can never "reach" it).

| Inequality | Interval | In words |
|-----------|----------|----------|
| $x > 3$ | $(3, \\infty)$ | everything above $3$ |
| $x \\ge 3$ | $[3, \\infty)$ | $3$ and everything above |
| $x < 3$ | $(-\\infty, 3)$ | everything below $3$ |
| $x \\le 3$ | $(-\\infty, 3]$ | $3$ and everything below |

> 💡 **Bracket = included, parenthesis = excluded.** The closed dot ● matches a bracket; the open circle ○ matches a parenthesis. Infinity is never reached, so it is *always* a parenthesis.`,
      },
      {
        id: 'lin4-interval-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Write $x \\le -2$ in interval notation.',
              options: ['$(-\\infty, -2]$', '$(-\\infty, -2)$', '$[-2, \\infty)$', '$(-2, \\infty)$'],
              correctAnswer: 0,
              explanation: '$x \\le -2$ is everything from $-\\infty$ up to and including $-2$. Include $-2$ with a bracket; $-\\infty$ always takes a parenthesis: $(-\\infty, -2]$.',
            },
            {
              question: 'The interval $(5, \\infty)$ represents:',
              options: ['$x > 5$', '$x \\ge 5$', '$x < 5$', '$x \\le 5$'],
              correctAnswer: 0,
              explanation: 'A parenthesis at $5$ means $5$ is excluded, and the interval runs up to $\\infty$, so it is $x > 5$.',
            },
          ],
        },
      },
      {
        id: 'lin4-word',
        type: 'text' as const,
        content: `## Word Problems

Translate, solve, then interpret the answer in context.

### Example: Budget

A taxi charges a \\$3 base fare plus \\$2 per mile. You have \\$15. How many miles $m$ can you ride?

$$3 + 2m \\le 15 \\;\\Rightarrow\\; 2m \\le 12 \\;\\Rightarrow\\; m \\le 6$$

You can ride **at most $6$ miles**.

### Example: Test Score

You scored $78$, $85$, and $90$ on three tests. To average **at least $85$** over four tests, what score $s$ do you need on the fourth?

$$\\frac{78 + 85 + 90 + s}{4} \\ge 85 \\;\\Rightarrow\\; \\frac{253 + s}{4} \\ge 85$$

$$253 + s \\ge 340 \\;\\Rightarrow\\; s \\ge 87$$

You need **at least $87$**.

> 💡 "At most" and "no more than" become $\\le$; "at least" and "minimum" become $\\ge$. Re-read the question to make sure your boundary answer makes sense.`,
      },
      {
        id: 'lin4-word-drill',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

**1)** A gym charges a \\$20 sign-up fee plus \\$10 per month. With a \\$90 budget, the most months $m$ you can afford satisfies $20 + 10m \\le 90$. Solve: $m \\le \\,?$

**2)** A rideshare charges \\$4 plus \\$1.50 per mile. With \\$25, solve $4 + 1.5m \\le 25$ for the most miles: $m \\le \\,?$

**3)** You have $40$ and $52$ on two quizzes. To average at least $50$, solve $\\dfrac{40 + 52 + s}{3} \\ge 50$ for the third quiz: $s \\ge \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '14', '58'],
          hint1: '$20 + 10m \\le 90 \\Rightarrow 10m \\le 70 \\Rightarrow m \\le 7$.',
          hint2: '$4 + 1.5m \\le 25 \\Rightarrow 1.5m \\le 21 \\Rightarrow m \\le 14$.',
          hint3: '$\\frac{40+52+s}{3} \\ge 50 \\Rightarrow 92 + s \\ge 150 \\Rightarrow s \\ge 58$.',
          explanation: '1) $m \\le 7$ months.  2) $m \\le 14$ miles.  3) $s \\ge 58$ points needed.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'linear-inequalities-algebra1',
    sections: [
      {
        id: 'lin5-intro',
        type: 'text' as const,
        content: `# ⚖️ Linear Inequalities

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read and translate inequalities, (2) solve them with the flip rule, (3) handle multi-step problems, and (4) graph, write intervals, and tackle word problems. Time to put it all together.`,
      },
      {
        id: 'lin5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Task | Key move |
|------|----------|
| Add / subtract both sides | symbol stays the same |
| Multiply / divide by a **positive** | symbol stays the same |
| Multiply / divide by a **negative** | **flip** the symbol |
| Variable cancels, true statement | all real numbers |
| Variable cancels, false statement | no solution |
| Graph $<$ or $>$ | open circle ○ |
| Graph $\\le$ or $\\ge$ | closed dot ● |
| Interval: included endpoint | square bracket $[\\;]$ |
| Interval: excluded endpoint / $\\infty$ | parenthesis $(\\;)$ |

> ⚠️ The one mistake that ruins an otherwise perfect solution is forgetting to **flip the symbol** when you multiply or divide by a negative. Circle every negative divisor as a reminder.`,
      },
      {
        id: 'lin5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $-\\dfrac{x}{3} \\le 4$.',
              options: ['$x \\ge -12$', '$x \\le -12$', '$x \\le 12$', '$x \\ge 12$'],
              correctAnswer: 0,
              explanation: 'Multiply both sides by $-3$ and flip $\\le$ to $\\ge$: $x \\ge 4 \\cdot (-3) = -12$, so $x \\ge -12$.',
            },
            {
              question: 'Solve $7 - 2x > 1$.',
              options: ['$x < 3$', '$x > 3$', '$x < -3$', '$x > -3$'],
              correctAnswer: 0,
              explanation: '$7 - 2x > 1 \\Rightarrow -2x > -6$; divide by $-2$ and flip $>$ to $<$: $x < 3$.',
            },
          ],
        },
      },
      {
        id: 'lin5-mixed2',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

Finish each statement.`,
        exercise: {
          dropdowns: [
            { label: 'Solving $5x + 2 \\ge 17$ gives:', options: ['$x \\ge 3$', '$x \\le 3$', '$x \\ge 5$', '$x \\le 5$'] },
            { label: '$x < -4$ in interval notation is:', options: ['$(-\\infty, -4)$', '$(-\\infty, -4]$', '$(-4, \\infty)$', '$[-4, \\infty)$'] },
            { label: '$3(x - 2) < 3x + 1$ has:', options: ['all real numbers as solutions', 'no solution', 'exactly one solution', 'the solution $x < 1$'] },
          ],
          correctAnswers: ['$x \\ge 3$', '$(-\\infty, -4)$', 'all real numbers as solutions'],
          hint1: '$5x + 2 \\ge 17 \\Rightarrow 5x \\ge 15 \\Rightarrow x \\ge 3$ (no flip; divided by positive $5$).',
          hint2: '$<$ excludes the endpoint, so use a parenthesis; $-\\infty$ is also a parenthesis: $(-\\infty, -4)$.',
          hint3: '$3(x-2) < 3x + 1 \\Rightarrow 3x - 6 < 3x + 1 \\Rightarrow -6 < 1$, always true → all reals.',
          explanation: '$5x+2\\ge 17 \\Rightarrow x \\ge 3$. $x < -4$ → $(-\\infty, -4)$. $3(x-2)<3x+1$ simplifies to $-6<1$ (always true) → all real numbers.',
        },
      },
      {
        id: 'lin5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Solve $-6x < 18$.',
              options: ['$x > -3$', '$x < -3$', '$x > 3$', '$x < 3$'],
              correctAnswer: 0,
              explanation: 'Divide both sides by $-6$ and flip $<$ to $>$: $x > \\frac{18}{-6} = -3$, so $x > -3$.',
            },
            {
              question: 'Which interval represents $x \\ge -1$?',
              options: ['$[-1, \\infty)$', '$(-1, \\infty)$', '$(-\\infty, -1]$', '$(-\\infty, -1)$'],
              correctAnswer: 0,
              explanation: '$\\ge$ includes $-1$ (square bracket) and runs up to $\\infty$ (parenthesis): $[-1, \\infty)$.',
            },
            {
              question: 'A parking garage charges \\$5 plus \\$2 per hour. With \\$19, the inequality $5 + 2h \\le 19$ gives the most hours $h$ as:',
              options: ['$h \\le 7$', '$h \\le 12$', '$h \\le 6$', '$h \\le 9$'],
              correctAnswer: 0,
              explanation: '$5 + 2h \\le 19 \\Rightarrow 2h \\le 14 \\Rightarrow h \\le 7$. You can park for at most $7$ hours.',
            },
          ],
        },
      },
    ],
  },
]
