import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving and Graphing Inequalities (Pre-Algebra).
 * Registry key: 'solving-graphing-inequalities-prealg' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'solving-graphing-inequalities-prealg',
    sections: [
      {
        id: 'sgi1-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving and Graphing Inequalities

**Part 1 of 5 — What Inequalities Mean**

---

### Topics in This Part

| Section |
|---------|
| The Four Inequality Symbols |
| Reading an Inequality |
| Solutions Are Sets, Not Single Numbers |

> 🔑 **Key Concept:** An **equation** like $x = 3$ has *one* answer. An **inequality** like $x > 3$ has *infinitely many* answers — every number bigger than $3$. Learning to describe and draw that whole set of answers is what this lesson is about.`,
      },
      {
        id: 'sgi1-symbols',
        type: 'text' as const,
        content: `## The Four Inequality Symbols

An inequality compares two amounts that are **not** (necessarily) equal. There are four symbols you must know cold:

| Symbol | Reads as | Example | Meaning |
|--------|----------|---------|---------|
| $<$ | "is less than" | $x < 5$ | $x$ is smaller than $5$ |
| $>$ | "is greater than" | $x > 5$ | $x$ is bigger than $5$ |
| $\\le$ | "is less than **or equal to**" | $x \\le 5$ | $x$ is $5$ or smaller |
| $\\ge$ | "is greater than **or equal to**" | $x \\ge 5$ | $x$ is $5$ or bigger |

> 💡 **Memory trick:** The symbol is like a hungry mouth — it always opens toward the **bigger** number. In $7 > 2$, the wide opening faces the $7$.

The line under $\\le$ and $\\ge$ adds the words **"or equal to."** That single line decides whether the boundary number is *included* in the answer — a detail that matters a lot when we graph.`,
      },
      {
        id: 'sgi1-read',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which inequality says "$x$ is at most $10$"?',
              options: ['$x \\le 10$', '$x \\ge 10$', '$x < 10$', '$x > 10$'],
              correctAnswer: 0,
              explanation: '"At most $10$" means $10$ is the largest allowed value, so $x$ can be $10$ or anything smaller: $x \\le 10$.',
            },
            {
              question: 'A sign reads "You must be at least 13 years old." If $a$ is your age, which inequality fits?',
              options: ['$a \\ge 13$', '$a > 13$', '$a \\le 13$', '$a < 13$'],
              correctAnswer: 0,
              explanation: '"At least $13$" allows exactly $13$ and everything above it, so $a \\ge 13$. A $13$-year-old qualifies.',
            },
            {
              question: 'Which statement is TRUE?',
              options: ['$-2 > -7$', '$-7 > -2$', '$-2 = -7$', '$0 < -3$'],
              correctAnswer: 0,
              explanation: 'On the number line $-2$ sits to the right of $-7$, so $-2$ is greater: $-2 > -7$. With negatives, the number closer to zero is larger.',
            },
          ],
        },
      },
      {
        id: 'sgi1-sets',
        type: 'text' as const,
        content: `## Solutions Are Whole Sets of Numbers

The **solution** of an inequality is **every** number that makes it true.

Take $x > 3$. Is $4$ a solution? Yes — $4 > 3$. Is $3.5$? Yes. Is $1000$? Yes. Is $3$ itself? **No**, because $3 > 3$ is false ($3$ is not *greater* than $3$).

$$x > 3 \\quad\\Longrightarrow\\quad \\text{solutions: } 3.01,\\ 4,\\ 5,\\ 100,\\ \\dots \\ (\\text{everything past } 3)$$

> ⚠️ **Common confusion:** $x > 3$ does **not** include $3$. But $x \\ge 3$ **does** include $3$. The little line under the symbol is the only difference — and it changes the answer set.

### Quick test: plug a number in

To check whether a value is a solution, substitute it and see if the statement is true.

| Inequality | Test value | Check | Solution? |
|-----------|-----------|-------|-----------|
| $x < 0$ | $x = -2$ | $-2 < 0$ ✓ | Yes |
| $x \\ge 6$ | $x = 6$ | $6 \\ge 6$ ✓ | Yes |
| $x > 8$ | $x = 8$ | $8 > 8$ ✗ | No |`,
      },
      {
        id: 'sgi1-test',
        type: 'multiple-choice' as const,
        content: `**Is It a Solution?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Is $x = 5$ a solution of $x \\le 5$?',
              options: ['Yes, because $5 \\le 5$ is true', 'No, because $5$ is not less than $5$', 'Yes, because $5 < 5$', 'No, because $\\le$ never includes the number'],
              correctAnswer: 0,
              explanation: '$\\le$ means "less than OR equal to." Since $5$ equals $5$, the statement $5 \\le 5$ is true, so $x=5$ IS a solution.',
            },
            {
              question: 'Which number is NOT a solution of $x > -2$?',
              options: ['$-2$', '$0$', '$5$', '$-1$'],
              correctAnswer: 0,
              explanation: 'We need numbers strictly greater than $-2$. The value $-2$ fails because $-2 > -2$ is false. $0$, $5$, and $-1$ are all greater than $-2$.',
            },
          ],
        },
      },
      {
        id: 'sgi1-translate',
        type: 'dropdown-select' as const,
        content: `**Translate the Words** 🔽

Real problems hide inequalities inside everyday phrases. Pick the symbol that matches each phrase, using $x$ for the unknown amount.`,
        exercise: {
          dropdowns: [
            { label: '"$x$ is no more than $20$"', options: ['$x \\le 20$', '$x \\ge 20$', '$x < 20$', '$x > 20$'] },
            { label: '"$x$ is greater than $7$"', options: ['$x > 7$', '$x \\ge 7$', '$x < 7$', '$x \\le 7$'] },
            { label: '"you need at least $50$ points"', options: ['$x \\ge 50$', '$x \\le 50$', '$x > 50$', '$x < 50$'] },
          ],
          correctAnswers: ['$x \\le 20$', '$x > 7$', '$x \\ge 50$'],
          hint1: '"No more than" sets a ceiling the value may touch, so use $\\le$.',
          hint2: '"Greater than" (with no "or equal to") excludes the boundary, so use a plain $>$.',
          hint3: '"At least $50$" means $50$ is allowed and bigger is allowed, so $x \\ge 50$.',
          explanation: '"No more than" → $\\le$ (boundary included). "Greater than" → $>$ (boundary excluded). "At least" → $\\ge$ (boundary included).',
        },
      },
      {
        id: 'sgi1-recap',
        type: 'text' as const,
        content: `## Part 1 Recap

- Four symbols: $<,\\ >,\\ \\le,\\ \\ge$. The mouth opens toward the bigger value.
- $\\le$ and $\\ge$ **include** the boundary number; $<$ and $>$ **exclude** it.
- "At least / no more than" include the boundary; "more than / less than" exclude it.
- A solution is the *entire set* of numbers that make the inequality true — test a value by substituting it in.

> 🔑 Next up (Part 2): drawing these solution sets on a **number line**, where the include/exclude distinction becomes an open or closed dot.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'solving-graphing-inequalities-prealg',
    sections: [
      {
        id: 'sgi2-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving and Graphing Inequalities

**Part 2 of 5 — Graphing on a Number Line**

---

> 🔑 **The Idea:** A picture beats a list of infinitely many numbers. We draw the solution set as a **dot** (open or closed) on the boundary plus an **arrow** showing every number that works.`,
      },
      {
        id: 'sgi2-dots',
        type: 'text' as const,
        content: `## Open Dot vs. Closed Dot

Two rules cover every single-variable inequality graph:

**Rule 1 — the dot:**
- Use an **open circle** $\\circ$ for $<$ and $>$ → the boundary is **NOT** included.
- Use a **closed (filled) circle** $\\bullet$ for $\\le$ and $\\ge$ → the boundary **IS** included.

**Rule 2 — the arrow:**
- Shade/arrow to the **right** for $>$ and $\\ge$ (greater = bigger = right).
- Shade/arrow to the **left** for $<$ and $\\le$ (less = smaller = left).

| Inequality | Dot at boundary | Arrow points |
|-----------|-----------------|--------------|
| $x > 3$ | open $\\circ$ | right |
| $x \\ge 3$ | closed $\\bullet$ | right |
| $x < 3$ | open $\\circ$ | left |
| $x \\le 3$ | closed $\\bullet$ | left |

> 💡 **Tie the dot to the line:** the "or equal to" line under $\\le$ / $\\ge$ becomes the *filled-in* dot. No line → no fill → open dot.`,
      },
      {
        id: 'sgi2-picture',
        type: 'text' as const,
        content: `## Reading a Graph

Here is the graph of $x \\ge -1$:

\`\`\`
        ●━━━━━━━━━▶
 ──┼──┼──┼──┼──┼──┼──┼──
  -3 -2 -1  0  1  2  3
\`\`\`

The **filled** dot sits on $-1$ (so $-1$ is included), and the arrow runs **right** through all larger numbers. That matches $x \\ge -1$.

Now the graph of $x < 2$:

\`\`\`
 ◀━━━━━━━━━○
 ──┼──┼──┼──┼──┼──┼──┼──
  -1  0  1  2  3  4  5
\`\`\`

The **open** dot on $2$ (so $2$ is excluded), arrow running **left**. That is $x < 2$.

> ⚠️ Don't mix them up: an open dot with a left arrow is $x < (\\text{number})$, **not** $x \\le$. The fill is what tells you whether to use the "or equal to" line.`,
      },
      {
        id: 'sgi2-match',
        type: 'dropdown-select' as const,
        content: `**Match the Graph to the Inequality** 🔽

For each description of a number-line graph, pick the matching inequality.`,
        exercise: {
          dropdowns: [
            { label: 'Open dot on $4$, arrow points right:', options: ['$x > 4$', '$x \\ge 4$', '$x < 4$', '$x \\le 4$'] },
            { label: 'Closed dot on $0$, arrow points left:', options: ['$x \\le 0$', '$x < 0$', '$x \\ge 0$', '$x > 0$'] },
            { label: 'Closed dot on $-5$, arrow points right:', options: ['$x \\ge -5$', '$x > -5$', '$x \\le -5$', '$x < -5$'] },
          ],
          correctAnswers: ['$x > 4$', '$x \\le 0$', '$x \\ge -5$'],
          hint1: 'Open dot → no "equal to," so $<$ or $>$. Arrow right → greater than. Together: $x > 4$.',
          hint2: 'Closed dot → includes the value ($\\le$ or $\\ge$). Arrow left → less than. Together: $x \\le 0$.',
          hint3: 'Closed dot → $\\ge$ or $\\le$. Arrow right → greater than. Together: $x \\ge -5$.',
          explanation: 'Dot fill picks "or equal to," and arrow direction picks greater/less: open+right $= x>4$; closed+left $= x \\le 0$; closed+right $= x \\ge -5$.',
        },
      },
      {
        id: 'sgi2-draw',
        type: 'multiple-choice' as const,
        content: `**Choose the Correct Graph** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which graph represents $x \\le 2$?',
              options: ['Closed dot on $2$, arrow pointing left', 'Open dot on $2$, arrow pointing left', 'Closed dot on $2$, arrow pointing right', 'Open dot on $2$, arrow pointing right'],
              correctAnswer: 0,
              explanation: '$\\le$ includes $2$ (closed dot) and means "less than" (arrow left). So: closed dot on $2$, arrow left.',
            },
            {
              question: 'A number line shows an open dot on $-3$ with the arrow going right. What inequality is it?',
              options: ['$x > -3$', '$x \\ge -3$', '$x < -3$', '$x \\le -3$'],
              correctAnswer: 0,
              explanation: 'Open dot → strict (no equal sign). Arrow right → greater than. So $x > -3$.',
            },
          ],
        },
      },
      {
        id: 'sgi2-boundary',
        type: 'input-boxes' as const,
        content: `**Identify the Boundary** 🧮

For each inequality, enter the **boundary number** (where the dot sits on the number line).

**1)** $x < 7$ → boundary $= \\,?$
**2)** $x \\ge -4$ → boundary $= \\,?$
**3)** $x \\le 0$ → boundary $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '-4', '0'],
          hint1: 'The boundary is the number the variable is compared to — for $x < 7$ that is $7$.',
          hint2: 'For $x \\ge -4$ the dot sits on $-4$ (and it is a closed dot since $\\ge$ includes it).',
          hint3: 'For $x \\le 0$ the boundary is $0$.',
          explanation: '1) $7$.  2) $-4$.  3) $0$. The boundary is always the constant the variable is compared with; the symbol then decides open/closed and arrow direction.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'solving-graphing-inequalities-prealg',
    sections: [
      {
        id: 'sgi3-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving and Graphing Inequalities

**Part 3 of 5 — Solving with Add & Subtract**

---

> 🔑 **Great news:** Solving an inequality works almost exactly like solving an equation. You undo operations to get the variable alone. Adding or subtracting the same amount on both sides **never** changes the inequality symbol.`,
      },
      {
        id: 'sgi3-addsub',
        type: 'text' as const,
        content: `## The Addition / Subtraction Property

You may **add or subtract the same number on both sides** of an inequality, and the symbol stays the same.

$$\\text{If } a > b, \\text{ then } a + c > b + c \\quad\\text{and}\\quad a - c > b - c$$

### Worked Example: $x - 4 > 3$

Add $4$ to both sides to isolate $x$:

$$x - 4 > 3$$
$$x - 4 + 4 > 3 + 4$$
$$x > 7$$

> ✅ **Check:** try $x = 10$ (which is $> 7$): $10 - 4 = 6 > 3$ ✓. Try $x = 7$: $7 - 4 = 3$, and $3 > 3$ is false — correct, since $7$ is **not** in $x > 7$.`,
      },
      {
        id: 'sgi3-worked2',
        type: 'text' as const,
        content: `### Worked Example: $x + 5 \\le 2$

Subtract $5$ from both sides:

$$x + 5 \\le 2$$
$$x + 5 - 5 \\le 2 - 5$$
$$x \\le -3$$

The symbol $\\le$ is unchanged. Graph: **closed** dot on $-3$, arrow **left**.

### Worked Example: $-6 < x - 1$

Add $1$ to both sides:

$$-6 + 1 < x - 1 + 1 \\;\\Rightarrow\\; -5 < x$$

This reads "$-5$ is less than $x$," which is the same as $x > -5$.

> 💡 **Flip to read it easily:** $-5 < x$ and $x > -5$ say the exact same thing — just swap the sides and reverse the symbol so the variable is on the left.`,
      },
      {
        id: 'sgi3-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $x - 9 \\ge -2$.',
              options: ['$x \\ge 7$', '$x \\ge -11$', '$x \\le 7$', '$x \\ge 11$'],
              correctAnswer: 0,
              explanation: 'Add $9$ to both sides: $x \\ge -2 + 9 = 7$. The symbol stays $\\ge$.',
            },
            {
              question: 'When you add the same number to both sides of an inequality, the symbol...',
              options: ['stays the same', 'always flips', 'becomes an equals sign', 'disappears'],
              correctAnswer: 0,
              explanation: 'Adding or subtracting the same amount on both sides keeps the inequality symbol exactly the same. (Only multiplying/dividing by a negative flips it — that is Part 4.)',
            },
          ],
        },
      },
      {
        id: 'sgi3-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each inequality. Enter the boundary number for $x$ (just the number — the symbol does not change here).

**1)** $x + 6 < 10 \\;\\Rightarrow\\; x < \\,?$
**2)** $x - 3 \\ge -8 \\;\\Rightarrow\\; x \\ge \\,?$
**3)** $x + 12 \\le 5 \\;\\Rightarrow\\; x \\le \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '-5', '-7'],
          hint1: 'Subtract $6$: $x < 10 - 6 = 4$.',
          hint2: 'Add $3$: $x \\ge -8 + 3 = -5$.',
          hint3: 'Subtract $12$: $x \\le 5 - 12 = -7$.',
          explanation: '1) $x < 4$.  2) $x \\ge -5$.  3) $x \\le -7$. Adding/subtracting the same amount never flips the symbol.',
        },
      },
      {
        id: 'sgi3-graph-link',
        type: 'dropdown-select' as const,
        content: `**Solve, Then Graph** 🔽

Solve each inequality, then describe its graph.`,
        exercise: {
          dropdowns: [
            { label: 'Solve $x + 2 > 5$. The solution is:', options: ['$x > 3$', '$x > 7$', '$x < 3$', '$x > -3$'] },
            { label: 'Its graph uses a:', options: ['open dot, arrow right', 'closed dot, arrow right', 'open dot, arrow left', 'closed dot, arrow left'] },
          ],
          correctAnswers: ['$x > 3$', 'open dot, arrow right'],
          hint1: 'Subtract $2$ from both sides: $x > 5 - 2 = 3$.',
          hint2: '$>$ is strict (open dot) and means greater than (arrow right).',
          hint3: 'For $x > 3$: open dot on $3$, arrow pointing right.',
          explanation: '$x + 2 > 5 \\Rightarrow x > 3$. Since $>$ is strict and "greater," graph it with an open dot on $3$ and an arrow to the right.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'solving-graphing-inequalities-prealg',
    sections: [
      {
        id: 'sgi4-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving and Graphing Inequalities

**Part 4 of 5 — Multiply, Divide & The Flip Rule**

---

> ⚠️ **The one big difference from equations:** when you **multiply or divide both sides by a negative number, you MUST flip the inequality symbol.** This is the single most important rule in the whole lesson.`,
      },
      {
        id: 'sgi4-positive',
        type: 'text' as const,
        content: `## Multiplying or Dividing by a POSITIVE Number

No surprises here — the symbol stays the same, just like with addition.

### Worked Example: $3x \\le 12$

Divide both sides by $3$ (positive):

$$\\frac{3x}{3} \\le \\frac{12}{3} \\;\\Rightarrow\\; x \\le 4$$

### Worked Example: $\\dfrac{x}{2} > 5$

Multiply both sides by $2$ (positive):

$$2 \\cdot \\frac{x}{2} > 2 \\cdot 5 \\;\\Rightarrow\\; x > 10$$

> 💡 As long as the number you multiply or divide by is **positive**, the inequality behaves exactly like an equation.`,
      },
      {
        id: 'sgi4-negative',
        type: 'text' as const,
        content: `## Multiplying or Dividing by a NEGATIVE Number — FLIP!

Here is **why** the symbol must flip. Start with a true statement:

$$3 < 5 \\quad (\\text{true})$$

Multiply both sides by $-1$. If we *kept* the symbol we'd get $-3 < -5$, which is **false** ($-3$ is actually bigger than $-5$). To stay true, we must flip the symbol:

$$3 < 5 \\;\\xrightarrow{\\;\\times(-1)\\;}\\; -3 > -5 \\quad (\\text{true!})$$

### Worked Example: $-2x < 8$

Divide both sides by $-2$ **and flip** $<$ to $>$:

$$\\frac{-2x}{-2} \\;\\textbf{>}\\; \\frac{8}{-2} \\;\\Rightarrow\\; x > -4$$

### Worked Example: $-x \\ge 6$

Multiply (or divide) both sides by $-1$ and **flip** $\\ge$ to $\\le$:

$$x \\le -6$$

> ⚠️ **Flip only for a NEGATIVE multiplier/divisor.** Adding or subtracting a negative does **not** flip — only *multiplying or dividing* by a negative does.`,
      },
      {
        id: 'sgi4-flipcheck',
        type: 'dropdown-select' as const,
        content: `**Flip or Don't Flip?** 🔽

For each step, decide whether the inequality symbol flips.`,
        exercise: {
          dropdowns: [
            { label: 'Divide both sides by $5$:', options: ['symbol stays', 'symbol flips'] },
            { label: 'Divide both sides by $-3$:', options: ['symbol flips', 'symbol stays'] },
            { label: 'Subtract $7$ from both sides:', options: ['symbol stays', 'symbol flips'] },
            { label: 'Multiply both sides by $-\\tfrac{1}{2}$:', options: ['symbol flips', 'symbol stays'] },
          ],
          correctAnswers: ['symbol stays', 'symbol flips', 'symbol stays', 'symbol flips'],
          hint1: 'Dividing by a positive ($5$) keeps the symbol.',
          hint2: 'Dividing by a negative ($-3$) flips it.',
          hint3: 'Adding/subtracting never flips; multiplying by a negative ($-\\tfrac{1}{2}$) flips.',
          explanation: 'Only multiplying or dividing by a NEGATIVE flips the symbol. By $+5$: stays. By $-3$: flips. Subtracting $7$: stays. By $-\\tfrac{1}{2}$ (negative): flips.',
        },
      },
      {
        id: 'sgi4-solve',
        type: 'multiple-choice' as const,
        content: `**Solve with the Flip Rule** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $-4x > 20$.',
              options: ['$x < -5$', '$x > -5$', '$x < 5$', '$x > 5$'],
              correctAnswer: 0,
              explanation: 'Divide both sides by $-4$ and FLIP $>$ to $<$: $x < \\frac{20}{-4} = -5$. So $x < -5$.',
            },
            {
              question: 'Solve $\\dfrac{x}{-3} \\le 2$.',
              options: ['$x \\ge -6$', '$x \\le -6$', '$x \\ge 6$', '$x \\le 6$'],
              correctAnswer: 0,
              explanation: 'Multiply both sides by $-3$ and FLIP $\\le$ to $\\ge$: $x \\ge 2 \\cdot (-3) = -6$. So $x \\ge -6$.',
            },
          ],
        },
      },
      {
        id: 'sgi4-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each. Enter the boundary number for $x$. **Watch for the flip!**

**1)** $5x \\ge 35 \\;\\Rightarrow\\; x \\ge \\,?$
**2)** $-3x < 18 \\;\\Rightarrow\\; x > \\,?$  *(flipped to $>$)*
**3)** $\\dfrac{x}{-4} \\ge 2 \\;\\Rightarrow\\; x \\le \\,?$  *(flipped to $\\le$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '-6', '-8'],
          hint1: 'Divide by $+5$ (no flip): $x \\ge 35/5 = 7$.',
          hint2: 'Divide by $-3$ and flip $<$ to $>$: $x > 18/(-3) = -6$.',
          hint3: 'Multiply by $-4$ and flip $\\ge$ to $\\le$: $x \\le 2 \\cdot (-4) = -8$.',
          explanation: '1) $x \\ge 7$ (divided by $+5$, no flip).  2) $x > -6$ (divided by $-3$, flipped).  3) $x \\le -8$ (multiplied by $-4$, flipped).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'solving-graphing-inequalities-prealg',
    sections: [
      {
        id: 'sgi5-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving and Graphing Inequalities

**Part 5 of 5 — Two-Step Inequalities & Mastery Check**

---

You can now (1) read inequality symbols, (2) graph them on a number line, (3) solve with $+$ and $-$, and (4) solve with $\\times$ and $\\div$ (including the flip). Now we combine the steps and finish with an Exit Quiz.`,
      },
      {
        id: 'sgi5-twostep',
        type: 'text' as const,
        content: `## Two-Step Inequalities

Same order of operations as a two-step *equation*: **undo addition/subtraction first**, then **undo multiplication/division** — and flip the symbol only if that last division is by a negative.

### Worked Example: $2x + 3 < 11$

$$2x + 3 < 11$$
$$2x < 8 \\quad (\\text{subtract } 3)$$
$$x < 4 \\quad (\\text{divide by } +2,\\ \\text{no flip})$$

### Worked Example: $-3x + 1 \\ge 10$

$$-3x + 1 \\ge 10$$
$$-3x \\ge 9 \\quad (\\text{subtract } 1)$$
$$x \\le -3 \\quad (\\text{divide by } -3,\\ \\textbf{flip}\\ \\ge \\to \\le)$$

> ⚠️ The flip only happens at the divide-by-negative step. Subtracting the $1$ first did **not** flip anything.`,
      },
      {
        id: 'sgi5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Read $\\le$ / $\\ge$ | "or equal to" → boundary is included |
| Graph $<$ or $>$ | **open** dot, no fill |
| Graph $\\le$ or $\\ge$ | **closed** dot, filled in |
| Arrow direction | right for $>,\\ \\ge$; left for $<,\\ \\le$ |
| Add / subtract | symbol **never** flips |
| Multiply / divide by **positive** | symbol **stays** |
| Multiply / divide by **negative** | symbol **FLIPS** |

> 🔑 The flip rule is the one thing that makes inequalities different from equations. Master it and you have mastered the topic.`,
      },
      {
        id: 'sgi5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $4x - 5 \\le 7$.',
              options: ['$x \\le 3$', '$x \\ge 3$', '$x \\le 0.5$', '$x \\le 12$'],
              correctAnswer: 0,
              explanation: 'Add $5$: $4x \\le 12$. Divide by $+4$ (no flip): $x \\le 3$.',
            },
            {
              question: 'Solve $-2x + 6 > 14$.',
              options: ['$x < -4$', '$x > -4$', '$x < 4$', '$x > 10$'],
              correctAnswer: 0,
              explanation: 'Subtract $6$: $-2x > 8$. Divide by $-2$ and FLIP $>$ to $<$: $x < -4$.',
            },
          ],
        },
      },
      {
        id: 'sgi5-twostep-drill',
        type: 'input-boxes' as const,
        content: `**Two-Step Solve** 🧮

Solve each. Enter the boundary number for $x$.

**1)** $3x + 2 \\le 17 \\;\\Rightarrow\\; x \\le \\,?$
**2)** $\\dfrac{x}{2} - 4 > 1 \\;\\Rightarrow\\; x > \\,?$
**3)** $-5x - 3 \\ge 12 \\;\\Rightarrow\\; x \\le \\,?$  *(remember the flip)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '10', '-3'],
          hint1: 'Subtract $2$: $3x \\le 15$. Divide by $+3$: $x \\le 5$.',
          hint2: 'Add $4$: $\\frac{x}{2} > 5$. Multiply by $+2$: $x > 10$.',
          hint3: 'Add $3$: $-5x \\ge 15$. Divide by $-5$ and flip $\\ge$ to $\\le$: $x \\le -3$.',
          explanation: '1) $x \\le 5$.  2) $x > 10$.  3) $x \\le -3$ — the divide-by-$-5$ flips $\\ge$ to $\\le$.',
        },
      },
      {
        id: 'sgi5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The graph has a closed dot on $1$ with the arrow pointing left. Which inequality is it?',
              options: ['$x \\le 1$', '$x < 1$', '$x \\ge 1$', '$x > 1$'],
              correctAnswer: 0,
              explanation: 'Closed dot → includes $1$ ($\\le$ or $\\ge$). Arrow left → "less than." Together: $x \\le 1$.',
            },
            {
              question: 'Solve $-6x \\le 24$.',
              options: ['$x \\ge -4$', '$x \\le -4$', '$x \\ge 4$', '$x \\le 4$'],
              correctAnswer: 0,
              explanation: 'Divide both sides by $-6$ and FLIP $\\le$ to $\\ge$: $x \\ge \\frac{24}{-6} = -4$. So $x \\ge -4$.',
            },
            {
              question: 'Solve the two-step inequality $2x + 7 > 1$.',
              options: ['$x > -3$', '$x < -3$', '$x > 3$', '$x > 4$'],
              correctAnswer: 0,
              explanation: 'Subtract $7$: $2x > -6$. Divide by $+2$ (no flip, positive): $x > -3$.',
            },
          ],
        },
      },
    ],
  },
]
