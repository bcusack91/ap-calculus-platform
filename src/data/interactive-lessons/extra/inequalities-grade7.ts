import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Inequalities (Grade 7 Math).
 * Registry key / DB slug: 'inequalities-grade7'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'inequalities-grade7',
    sections: [
      {
        id: 'ineq1-intro',
        type: 'text' as const,
        content: `# ⚖️ Inequalities

**Part 1 of 5 — Symbols & Meaning**

---

### Topics in This Part

| Section |
|---------|
| What an Inequality Is |
| The Four Inequality Symbols |
| Checking a Solution |
| "At Least / At Most" in Words |

> 🔑 **Key Concept:** An **equation** says two things are *equal* ($x = 5$). An **inequality** says one thing is *bigger or smaller* than another ($x > 5$). That small change means an inequality usually has **many** solutions, not just one.`,
      },
      {
        id: 'ineq1-symbols',
        type: 'text' as const,
        content: `## The Four Inequality Symbols

Each symbol compares a left side to a right side. The "open" end of the symbol always points to the **bigger** value.

| Symbol | Read it as | Example | True / False |
|--------|-----------|---------|--------------|
| $>$ | is greater than | $7 > 3$ | True ✓ |
| $<$ | is less than | $2 < 9$ | True ✓ |
| $\\ge$ | is greater than **or equal to** | $5 \\ge 5$ | True ✓ |
| $\\le$ | is less than **or equal to** | $4 \\le 1$ | False ✗ |

> 💡 **Memory trick:** The symbol is like an alligator's mouth — it always opens toward the **larger** number, because the alligator wants the bigger meal. In $7 > 3$, the mouth opens to the $7$.

The line *under* $\\ge$ and $\\le$ means **"or equal to"** is allowed. So $5 \\ge 5$ is true, but $5 > 5$ is false.`,
      },
      {
        id: 'ineq1-read',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement is **true**?',
              options: ['$8 < 6$', '$-2 > 1$', '$-5 \\le -5$', '$0 > 3$'],
              correctAnswer: 2,
              explanation: '$-5 \\le -5$ is true because $\\le$ allows "or equal to," and $-5$ equals $-5$. The others are all false: $8$ is not less than $6$, $-2$ is not greater than $1$, and $0$ is not greater than $3$.',
            },
            {
              question: 'How do you read $x \\ge 10$?',
              options: ['$x$ is greater than $10$', '$x$ is greater than or equal to $10$', '$x$ is less than $10$', '$x$ equals $10$'],
              correctAnswer: 1,
              explanation: 'The symbol $\\ge$ means "greater than or equal to." The line underneath adds the "or equal to" part, so $x = 10$ is allowed too.',
            },
          ],
        },
      },
      {
        id: 'ineq1-solution',
        type: 'text' as const,
        content: `## Checking a Solution

A number is a **solution** of an inequality if it makes the inequality **true** when you substitute it in.

### Example: Is $x = 4$ a solution of $x > 3$?

Replace $x$ with $4$:

$$4 > 3 \\quad\\checkmark \\text{ True}$$

So $4$ **is** a solution. But so are $5$, $10$, $3.5$, and $100$ — an inequality has lots of solutions!

### Example: Is $x = 3$ a solution of $x > 3$?

$$3 > 3 \\quad\\text{✗ False (3 is not greater than itself)}$$

So $3$ is **not** a solution of $x > 3$. (It *would* be a solution of $x \\ge 3$.)

> ⚠️ **Watch the difference:** $x > 3$ does **not** include $3$ itself. $x \\ge 3$ **does** include $3$. That single line under the symbol changes the answer.`,
      },
      {
        id: 'ineq1-checksol',
        type: 'dropdown-select' as const,
        content: `**Is It a Solution?** 🔽

Substitute each value and decide whether it makes the inequality true.`,
        exercise: {
          dropdowns: [
            { label: 'Is $x = 6$ a solution of $x < 6$?', options: ['Yes', 'No'] },
            { label: 'Is $x = 6$ a solution of $x \\le 6$?', options: ['Yes', 'No'] },
            { label: 'Is $x = 10$ a solution of $x \\ge 8$?', options: ['Yes', 'No'] },
            { label: 'Is $x = 2$ a solution of $x > 5$?', options: ['Yes', 'No'] },
          ],
          correctAnswers: ['No', 'Yes', 'Yes', 'No'],
          hint1: '$6 < 6$ is false ($6$ is not less than itself), but $6 \\le 6$ is true because of "or equal to."',
          hint2: 'For $x \\ge 8$, check $10 \\ge 8$: yes, $10$ is bigger than $8$.',
          hint3: 'For $x > 5$, check $2 > 5$: no, $2$ is smaller than $5$.',
          explanation: '$6 < 6$ → No (not strictly less). $6 \\le 6$ → Yes (equal is allowed). $10 \\ge 8$ → Yes. $2 > 5$ → No.',
        },
      },
      {
        id: 'ineq1-words',
        type: 'text' as const,
        content: `## "At Least," "At Most," and Friends

Real problems rarely use the word *inequality*. Instead they use everyday phrases. Learn to translate them:

| Phrase | Symbol | Meaning |
|--------|--------|---------|
| more than, greater than | $>$ | strictly bigger |
| less than, fewer than | $<$ | strictly smaller |
| at least, no less than, minimum | $\\ge$ | this value or higher |
| at most, no more than, maximum | $\\le$ | this value or lower |

> 💡 **The tricky pair:** *"at least 18"* means $\\ge 18$ ($18$ counts!), while *"more than 18"* means $> 18$ ($18$ does **not** count). The phrase *"at least"* always includes the number.

**Example:** "You must be **at least** $13$ years old" → $\\text{age} \\ge 13$. A $13$-year-old qualifies.

**Example:** "Carry **no more than** $50$ pounds" → $\\text{weight} \\le 50$. Exactly $50$ pounds is allowed.`,
      },
      {
        id: 'ineq1-wordquiz',
        type: 'multiple-choice' as const,
        content: `**Translate the Words** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A sign reads "You must be **at least** $48$ inches tall to ride." Which inequality fits, using $h$ for height?',
              options: ['$h > 48$', '$h \\ge 48$', '$h < 48$', '$h \\le 48$'],
              correctAnswer: 1,
              explanation: '"At least $48$" means $48$ or more, so $h \\ge 48$. Someone exactly $48$ inches tall *can* ride, which is why we use $\\ge$ and not $>$.',
            },
            {
              question: 'A backpack can hold **no more than** $20$ books. Using $b$ for books, this is:',
              options: ['$b \\le 20$', '$b \\ge 20$', '$b < 20$', '$b > 20$'],
              correctAnswer: 0,
              explanation: '"No more than $20$" means $20$ or fewer, so $b \\le 20$. Exactly $20$ books is still okay, so we include it with $\\le$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'inequalities-grade7',
    sections: [
      {
        id: 'ineq2-intro',
        type: 'text' as const,
        content: `# ⚖️ Inequalities

**Part 2 of 5 — Graphing on a Number Line**

---

> 🔑 **The Idea:** Because an inequality has *many* solutions, we don't write them all out — we draw them. A **number-line graph** shows every solution at once using a **dot** and an **arrow**.`,
      },
      {
        id: 'ineq2-rules',
        type: 'text' as const,
        content: `## Open Dot or Closed Dot?

To graph an inequality, put a dot on the boundary number and shade an arrow toward all the solutions.

| Symbol | Dot | Why |
|--------|-----|-----|
| $>$ or $<$ | **open** ○ | the boundary is **not** a solution |
| $\\ge$ or $\\le$ | **closed** ● | the boundary **is** a solution |

And which way does the arrow point?

- **Greater** ($>$, $\\ge$): shade to the **right** (toward bigger numbers).
- **Less** ($<$, $\\le$): shade to the **left** (toward smaller numbers).

### Example: Graph $x \\ge 2$

Put a **closed** dot on $2$ (because $\\ge$ includes $2$) and shade **right**:

$$\\xleftarrow{\\;\\;} \\cdots\\; 0 \\quad 1 \\quad \\overset{\\bullet}{2} \\!\\!\\rightarrow\\!\\! 3 \\quad 4 \\;\\cdots \\xrightarrow{\\;\\;}$$

### Example: Graph $x < 2$

Put an **open** dot on $2$ (because $<$ excludes $2$) and shade **left**.

> 💡 **Two questions, every time:** (1) Open or closed dot? Look for the line under the symbol. (2) Left or right arrow? Greater = right, less = left.`,
      },
      {
        id: 'ineq2-dotquiz',
        type: 'dropdown-select' as const,
        content: `**Dot & Direction** 🔽

For each inequality, choose the correct dot and arrow direction.`,
        exercise: {
          dropdowns: [
            { label: 'For $x > 5$, the dot is:', options: ['open ○', 'closed ●'] },
            { label: 'For $x > 5$, the arrow points:', options: ['left', 'right'] },
            { label: 'For $x \\le -1$, the dot is:', options: ['open ○', 'closed ●'] },
            { label: 'For $x \\le -1$, the arrow points:', options: ['left', 'right'] },
          ],
          correctAnswers: ['open ○', 'right', 'closed ●', 'left'],
          hint1: '$>$ has no line underneath, so the boundary is excluded → open dot.',
          hint2: '"Greater than" shades toward bigger numbers → right.',
          hint3: '$\\le$ has a line underneath (or equal to) → closed dot; "less than" shades toward smaller numbers → left.',
          explanation: '$x > 5$: open dot at $5$, arrow right. $x \\le -1$: closed dot at $-1$, arrow left.',
        },
      },
      {
        id: 'ineq2-readgraph',
        type: 'text' as const,
        content: `## Reading a Graph Back Into an Inequality

You can also go the other way: look at a graph and write its inequality.

1. Find the **boundary number** (where the dot sits).
2. **Open** dot → use $>$ or $<$. **Closed** dot → use $\\ge$ or $\\le$.
3. Arrow **right** → "greater" ($>$ or $\\ge$). Arrow **left** → "less" ($<$ or $\\le$).

### Example

A graph has a **closed** dot on $-3$ with the arrow shading **right**.

- Closed dot → "or equal to" → $\\ge$
- Arrow right → "greater"

$$x \\ge -3$$

### Example

A graph has an **open** dot on $4$ with the arrow shading **left**.

- Open dot → strict → $<$
- Arrow left → "less"

$$x < 4$$`,
      },
      {
        id: 'ineq2-readquiz',
        type: 'multiple-choice' as const,
        content: `**Read the Graph** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A number line shows an **open** dot on $7$ with shading going **right**. What inequality is graphed?',
              options: ['$x > 7$', '$x \\ge 7$', '$x < 7$', '$x \\le 7$'],
              correctAnswer: 0,
              explanation: 'Open dot → strict symbol (no "or equal to"). Arrow right → "greater than." Together: $x > 7$.',
            },
            {
              question: 'A number line shows a **closed** dot on $0$ with shading going **left**. What inequality is graphed?',
              options: ['$x \\ge 0$', '$x \\le 0$', '$x < 0$', '$x > 0$'],
              correctAnswer: 1,
              explanation: 'Closed dot → "or equal to" ($\\le$ or $\\ge$). Arrow left → "less." Together: $x \\le 0$.',
            },
          ],
        },
      },
      {
        id: 'ineq2-buildquiz',
        type: 'dropdown-select' as const,
        content: `**Build the Graph** 🔽

You are graphing $x \\ge -2$. Choose the correct features.`,
        exercise: {
          dropdowns: [
            { label: 'Dot goes on the number:', options: ['$-2$', '$2$', '$0$', '$x$'] },
            { label: 'Type of dot:', options: ['open ○', 'closed ●'] },
            { label: 'Arrow direction:', options: ['left', 'right'] },
          ],
          correctAnswers: ['$-2$', 'closed ●', 'right'],
          hint1: 'The boundary number is the number in the inequality: $-2$.',
          hint2: '$\\ge$ includes "or equal to," so the dot is filled in (closed).',
          hint3: '"Greater than or equal to" shades toward bigger numbers → right.',
          explanation: '$x \\ge -2$: closed dot on $-2$, arrow shading right toward all numbers larger than $-2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'inequalities-grade7',
    sections: [
      {
        id: 'ineq3-intro',
        type: 'text' as const,
        content: `# ⚖️ Inequalities

**Part 3 of 5 — Solving One-Step Inequalities**

---

> 🔑 **Good news:** Solving an inequality works almost exactly like solving an equation — you undo operations to get $x$ alone. There is just **one** new rule, and it's the most important thing in this whole lesson.`,
      },
      {
        id: 'ineq3-addsub',
        type: 'text' as const,
        content: `## Adding & Subtracting

To get $x$ by itself, do the **opposite** operation to **both sides** — just like an equation. Adding or subtracting **never** changes the inequality symbol.

### Example: $x + 5 > 12$

Subtract $5$ from both sides:

$$x + 5 - 5 > 12 - 5 \\;\\Rightarrow\\; x > 7$$

### Example: $x - 4 \\le 3$

Add $4$ to both sides:

$$x - 4 + 4 \\le 3 + 4 \\;\\Rightarrow\\; x \\le 7$$

> ✅ **Check:** Pick a number that should work, like $x = 6$ for $x \\le 7$. Then $6 - 4 = 2$, and $2 \\le 3$ ✓. The solution holds.`,
      },
      {
        id: 'ineq3-adddrill',
        type: 'input-boxes' as const,
        content: `**Solve by Adding/Subtracting** 🧮

Solve each inequality. Enter just the **number** that $x$ is compared to (the symbol stays the same as the problem).

**1)** $x + 8 < 15 \\;\\Rightarrow\\; x < \\,?$
**2)** $x - 6 \\ge 1 \\;\\Rightarrow\\; x \\ge \\,?$
**3)** $x + 3 > -2 \\;\\Rightarrow\\; x > \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '7', '-5'],
          hint1: 'For #1, subtract $8$ from both sides: $15 - 8 = 7$.',
          hint2: 'For #2, add $6$ to both sides: $1 + 6 = 7$.',
          hint3: 'For #3, subtract $3$ from both sides: $-2 - 3 = -5$.',
          explanation: '1) $x < 7$.  2) $x \\ge 7$.  3) $x > -5$. Adding/subtracting keeps the symbol the same.',
        },
      },
      {
        id: 'ineq3-flip',
        type: 'text' as const,
        content: `## The One New Rule: Multiplying or Dividing by a Negative

When you **multiply or divide both sides by a negative number, you must FLIP the inequality symbol.**

$$> \\;\\leftrightarrow\\; < \\qquad\\qquad \\ge \\;\\leftrightarrow\\; \\le$$

**Why?** Watch a true statement get multiplied by $-1$:

$$3 < 5 \\quad\\text{(true)}$$
$$-3 \\;?\\; -5 \\quad\\Rightarrow\\quad -3 > -5 \\quad\\text{(true)}$$

Multiplying by $-1$ swapped which number was bigger, so the symbol had to flip to stay true.

> ⚠️ **The #1 mistake in this whole topic:** forgetting to flip. If you multiply or divide by a **positive** number, the symbol stays the same. Only a **negative** multiplier or divisor flips it.

### Example: $-2x < 8$

Divide both sides by $-2$ and **flip** $<$ to $>$:

$$\\frac{-2x}{-2} \\;\\textbf{>}\\; \\frac{8}{-2} \\;\\Rightarrow\\; x > -4$$

### Example: $\\dfrac{x}{3} \\le 5$

Multiply both sides by $3$ (a **positive**, so **no flip**):

$$x \\le 15$$`,
      },
      {
        id: 'ineq3-flipquiz',
        type: 'multiple-choice' as const,
        content: `**Do You Flip?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You divide both sides of $-5x \\ge 20$ by $-5$. What happens to the symbol?',
              options: ['It flips to $\\le$', 'It stays $\\ge$', 'It becomes $=$', 'It flips to $>$'],
              correctAnswer: 0,
              explanation: 'Dividing by a negative ($-5$) flips the symbol, so $\\ge$ becomes $\\le$. The full solution is $x \\le -4$.',
            },
            {
              question: 'Solve $4x > 24$.',
              options: ['$x > 6$', '$x < 6$', '$x > 20$', '$x < 20$'],
              correctAnswer: 0,
              explanation: 'Divide both sides by $4$, a **positive** number, so the symbol stays the same: $x > 6$. No flip needed.',
            },
          ],
        },
      },
      {
        id: 'ineq3-muldiv',
        type: 'text' as const,
        content: `## Putting It Together

Always ask: **"Am I multiplying or dividing by a negative?"** If yes, flip. If no, keep the symbol.

### Example: $-3x \\ge -18$

Divide both sides by $-3$ and **flip** $\\ge$ to $\\le$:

$$x \\le 6$$

> ✅ **Check:** Try $x = 0$ (which satisfies $x \\le 6$): $-3(0) = 0$, and $0 \\ge -18$ ✓. The solution is correct.

### Example: $\\dfrac{x}{-2} > 4$

Multiply both sides by $-2$ and **flip** $>$ to $<$:

$$x < -8$$`,
      },
      {
        id: 'ineq3-muldrill',
        type: 'input-boxes' as const,
        content: `**Solve & Watch the Flip** 🧮

Solve each. First enter the boundary **number**, then choose whether the symbol flips.

**1)** $6x \\le 30 \\;\\Rightarrow\\; x \\le \\,?$
**2)** $-4x < 12 \\;\\Rightarrow\\; x \\,?\\, -3$  *(enter the number $-3$ in box 2)*
**3)** $\\dfrac{x}{-5} \\ge 2 \\;\\Rightarrow\\; x \\le \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '-3', '-10'],
          hint1: 'For #1, divide by $6$ (positive, no flip): $30 \\div 6 = 5$, so $x \\le 5$.',
          hint2: 'For #2, divide by $-4$ and flip $<$ to $>$: $12 \\div (-4) = -3$, so $x > -3$.',
          hint3: 'For #3, multiply by $-5$ and flip $\\ge$ to $\\le$: $2 \\cdot (-5) = -10$, so $x \\le -10$.',
          explanation: '1) $x \\le 5$ (no flip).  2) $x > -3$ (flipped).  3) $x \\le -10$ (flipped). Dividing/multiplying by a negative flips the symbol.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'inequalities-grade7',
    sections: [
      {
        id: 'ineq4-intro',
        type: 'text' as const,
        content: `# ⚖️ Inequalities

**Part 4 of 5 — Two-Step Inequalities & Word Problems**

---

> 🔑 **Big Picture:** Most real inequalities take **two** steps to solve. The order is the reverse of building the expression: undo **adding/subtracting first**, then undo **multiplying/dividing** — and remember the flip rule on that last step if you divide by a negative.`,
      },
      {
        id: 'ineq4-twostep',
        type: 'text' as const,
        content: `## Solving in Two Steps

To solve something like $2x + 3 > 11$:

1. **Undo the addition/subtraction** (the constant) first.
2. **Undo the multiplication/division** (the coefficient) second.
3. **Flip** only if step 2 divides by a negative.

### Example: $2x + 3 > 11$

$$2x + 3 - 3 > 11 - 3 \\;\\Rightarrow\\; 2x > 8$$
$$\\frac{2x}{2} > \\frac{8}{2} \\;\\Rightarrow\\; x > 4$$

(We divided by $+2$, so **no flip**.)

### Example: $-3x + 1 \\le 10$

$$-3x + 1 - 1 \\le 10 - 1 \\;\\Rightarrow\\; -3x \\le 9$$

Now divide by $-3$ and **flip** $\\le$ to $\\ge$:

$$x \\ge -3$$

> ✅ **Check** $x = 0$ (which satisfies $x \\ge -3$): $-3(0) + 1 = 1$, and $1 \\le 10$ ✓.`,
      },
      {
        id: 'ineq4-order',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're solving $5x - 7 \\ge 13$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First, undo the $-7$ by:', options: ['adding $7$ to both sides', 'dividing both sides by $5$', 'subtracting $13$', 'flipping the symbol'] },
            { label: 'After step 1 the inequality is:', options: ['$5x \\ge 20$', '$5x \\ge 6$', '$5x \\ge 13$', '$x \\ge 20$'] },
            { label: 'Next, divide both sides by $5$. Does the symbol flip?', options: ['No (dividing by a positive)', 'Yes (dividing by a negative)'] },
            { label: 'The solution is:', options: ['$x \\ge 4$', '$x \\le 4$', '$x \\ge 20$', '$x \\ge 100$'] },
          ],
          correctAnswers: ['adding $7$ to both sides', '$5x \\ge 20$', 'No (dividing by a positive)', '$x \\ge 4$'],
          hint1: 'Undo subtraction with addition: add $7$ to both sides.',
          hint2: '$13 + 7 = 20$, so you get $5x \\ge 20$.',
          hint3: 'Dividing by $+5$ keeps the symbol: $20 \\div 5 = 4$, so $x \\ge 4$.',
          explanation: '$5x - 7 \\ge 13 \\Rightarrow 5x \\ge 20 \\Rightarrow x \\ge 4$. Divided by a positive, so no flip.',
        },
      },
      {
        id: 'ineq4-twodrill',
        type: 'input-boxes' as const,
        content: `**Two-Step Practice** 🧮

Solve each. Enter the boundary **number** ($x$ is compared to it).

**1)** $3x + 4 < 19 \\;\\Rightarrow\\; x < \\,?$
**2)** $\\dfrac{x}{2} - 5 \\ge 1 \\;\\Rightarrow\\; x \\ge \\,?$
**3)** $-2x + 6 > 14 \\;\\Rightarrow\\; x < \\,?$  *(remember the flip)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '12', '-4'],
          hint1: 'For #1: $3x < 15$, then $\\div 3$ gives $x < 5$.',
          hint2: 'For #2: add $5$ to get $\\frac{x}{2} \\ge 6$, then $\\times 2$ gives $x \\ge 12$.',
          hint3: 'For #3: subtract $6$ to get $-2x > 8$, then $\\div(-2)$ and FLIP: $x < -4$.',
          explanation: '1) $x < 5$.  2) $x \\ge 12$.  3) $-2x > 8 \\Rightarrow x < -4$ (flipped because we divided by $-2$).',
        },
      },
      {
        id: 'ineq4-wordmethod',
        type: 'text' as const,
        content: `## Word Problems With Inequalities

Word problems become inequalities when they include a **limit** — a budget, a maximum weight, a minimum score. The steps:

1. Decide what the variable stands for.
2. Translate the limit phrase into a symbol ($\\le$ "at most", $\\ge$ "at least", etc.).
3. Write the inequality and solve.

### Example: The Carnival Budget

You have \\$20. Ride tickets cost \\$3 each, and you already spent \\$5 on entry. How many tickets $t$ can you buy?

Total spent must be **at most** \\$20:

$$3t + 5 \\le 20$$
$$3t \\le 15 \\;\\Rightarrow\\; t \\le 5$$

You can buy **at most $5$ tickets**.

> 💡 **Reality check:** Since $t$ is a count of tickets, it must also be a whole number $\\ge 0$. The answer "$t \\le 5$" combined with common sense means $0, 1, 2, 3, 4,$ or $5$ tickets.`,
      },
      {
        id: 'ineq4-wordquiz',
        type: 'multiple-choice' as const,
        content: `**Word Problem Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A taxi charges a \\$4 base fee plus \\$2 per mile. You have \\$20. Which inequality finds the miles $m$ you can afford?',
              options: ['$2m + 4 \\le 20$', '$2m + 4 \\ge 20$', '$4m + 2 \\le 20$', '$2m - 4 \\le 20$'],
              correctAnswer: 0,
              explanation: 'Cost is $\\$2$ per mile plus a $\\$4$ base: $2m + 4$. You can spend at most $\\$20$, so $2m + 4 \\le 20$. Solving gives $m \\le 8$ miles.',
            },
            {
              question: 'Maria needs an average of **at least** $90$ on two tests. She scored $86$ on the first. If $s$ is her second score, which inequality works?',
              options: ['$\\dfrac{86 + s}{2} \\ge 90$', '$\\dfrac{86 + s}{2} \\le 90$', '$86 + s \\ge 90$', '$86 + s \\le 90$'],
              correctAnswer: 0,
              explanation: 'The average of the two tests is $\\frac{86 + s}{2}$, and "at least $90$" means $\\ge 90$. Solving: $86 + s \\ge 180 \\Rightarrow s \\ge 94$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'inequalities-grade7',
    sections: [
      {
        id: 'ineq5-intro',
        type: 'text' as const,
        content: `# ⚖️ Inequalities

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read and write the four symbols, (2) graph solutions on a number line, (3) solve one- and two-step inequalities, and (4) turn word problems into inequalities. Let's put it all together.`,
      },
      {
        id: 'ineq5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Read a symbol | open end points to the **bigger** value |
| $\\ge$ / $\\le$ vs $>$ / $<$ | the line means "**or equal to**" (closed dot) |
| Graph it | open/closed dot on boundary; greater → right, less → left |
| Add or subtract | symbol **never** changes |
| Multiply/divide by **positive** | symbol **stays** the same |
| Multiply/divide by **negative** | **FLIP** the symbol |
| Two-step | undo $+/-$ first, then undo $\\times/\\div$ |

> ⚠️ The single most-tested idea: **flip the symbol whenever you multiply or divide both sides by a negative number.** Nothing else flips it.`,
      },
      {
        id: 'ineq5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $-7x \\le 21$.',
              options: ['$x \\ge -3$', '$x \\le -3$', '$x \\ge 3$', '$x \\le 3$'],
              correctAnswer: 0,
              explanation: 'Divide both sides by $-7$ and flip $\\le$ to $\\ge$: $21 \\div (-7) = -3$, so $x \\ge -3$.',
            },
            {
              question: 'Solve $4x - 9 < 7$.',
              options: ['$x < 4$', '$x > 4$', '$x < 16$', '$x < -\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'Add $9$: $4x < 16$. Divide by $+4$ (no flip): $x < 4$.',
            },
          ],
        },
      },
      {
        id: 'ineq5-graphcheck',
        type: 'dropdown-select' as const,
        content: `**Solve, Then Graph** 🔽

Solve $-2x + 1 \\ge 9$, then describe its graph.`,
        exercise: {
          dropdowns: [
            { label: 'After subtracting $1$:', options: ['$-2x \\ge 8$', '$-2x \\ge 10$', '$-2x \\ge 9$', '$2x \\ge 8$'] },
            { label: 'Dividing by $-2$, the symbol:', options: ['flips to $\\le$', 'stays $\\ge$'] },
            { label: 'The solution is:', options: ['$x \\le -4$', '$x \\ge -4$', '$x \\le 4$', '$x \\ge 4$'] },
            { label: 'The graph has a closed dot on $-4$ and shades:', options: ['left', 'right'] },
          ],
          correctAnswers: ['$-2x \\ge 8$', 'flips to $\\le$', '$x \\le -4$', 'left'],
          hint1: '$9 - 1 = 8$, so $-2x \\ge 8$.',
          hint2: 'Dividing by a negative ($-2$) flips $\\ge$ to $\\le$.',
          hint3: '$8 \\div (-2) = -4$, giving $x \\le -4$; "less than or equal" shades left with a closed dot.',
          explanation: '$-2x + 1 \\ge 9 \\Rightarrow -2x \\ge 8 \\Rightarrow x \\le -4$ (flipped). Closed dot on $-4$, arrow left.',
        },
      },
      {
        id: 'ineq5-finaldrill',
        type: 'input-boxes' as const,
        content: `**Final Drill** 🧮

Solve each and enter the boundary **number**.

**1)** $x + 11 > 4 \\;\\Rightarrow\\; x > \\,?$
**2)** $5x - 2 \\le 23 \\;\\Rightarrow\\; x \\le \\,?$
**3)** $\\dfrac{x}{-3} > 2 \\;\\Rightarrow\\; x < \\,?$  *(remember the flip)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-7', '5', '-6'],
          hint1: 'For #1, subtract $11$: $4 - 11 = -7$, so $x > -7$.',
          hint2: 'For #2, add $2$ to get $5x \\le 25$, then $\\div 5$: $x \\le 5$.',
          hint3: 'For #3, multiply by $-3$ and FLIP $>$ to $<$: $2 \\cdot (-3) = -6$, so $x < -6$.',
          explanation: '1) $x > -7$.  2) $x \\le 5$.  3) $x < -6$ (flipped, since we multiplied by $-3$).',
        },
      },
      {
        id: 'ineq5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: '"You must be **at least** $16$ to get a permit." Using $a$ for age, this is:',
              options: ['$a \\ge 16$', '$a > 16$', '$a \\le 16$', '$a < 16$'],
              correctAnswer: 0,
              explanation: '"At least $16$" means $16$ or older, including exactly $16$, so $a \\ge 16$.',
            },
            {
              question: 'Solve $-6x > 18$.',
              options: ['$x < -3$', '$x > -3$', '$x < 3$', '$x > 3$'],
              correctAnswer: 0,
              explanation: 'Divide both sides by $-6$ and FLIP $>$ to $<$: $18 \\div (-6) = -3$, so $x < -3$.',
            },
            {
              question: 'The graph with an **open** dot on $2$ shading **right** represents:',
              options: ['$x > 2$', '$x \\ge 2$', '$x < 2$', '$x \\le 2$'],
              correctAnswer: 0,
              explanation: 'Open dot → strict ($>$ or $<$, no "or equal to"). Shading right → "greater." Together: $x > 2$.',
            },
          ],
        },
      },
    ],
  },
]
