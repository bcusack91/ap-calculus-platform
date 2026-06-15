import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Compound and Absolute Value Inequalities (Algebra 1).
 * Registry key: 'compound-absolute-value-inequalities-alg1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'compound-absolute-value-inequalities-alg1',
    sections: [
      {
        id: 'cavi1-intro',
        type: 'text' as const,
        content: `# ⛓️ Compound & Absolute Value Inequalities

**Part 1 of 5 — Compound Inequalities: AND vs. OR**

---

### Topics in This Part

| Section |
|---------|
| What Is a Compound Inequality? |
| "AND" (Intersection) |
| "OR" (Union) |
| Reading the Number Line |

> 🔑 **Key Concept:** A **compound inequality** joins two simple inequalities with the word **and** or the word **or**. The joining word changes *everything* — which numbers count as solutions, and what the graph looks like.`,
      },
      {
        id: 'cavi1-what',
        type: 'text' as const,
        content: `## What Is a Compound Inequality?

A single inequality like $x > 3$ describes *one* condition. A **compound inequality** describes *two* conditions at once:

- **AND** — a number must satisfy **both** parts. (Think: the *overlap*.)
- **OR** — a number must satisfy **at least one** part. (Think: *either side counts*.)

### The Two Flavors

| Type | Example | A number is a solution when… |
|------|---------|------------------------------|
| AND | $x > -1 \\;\\text{and}\\; x < 4$ | it's $> -1$ **and** $< 4$ |
| OR | $x < -2 \\;\\text{or}\\; x \\ge 5$ | it's $< -2$ **or** $\\ge 5$ (or both) |

> 💡 **The "between" shortcut:** An AND inequality where $x$ is squeezed between two numbers can be written in one line. "$x > -1$ and $x < 4$" becomes $-1 < x < 4$.`,
      },
      {
        id: 'cavi1-andor-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which value is a solution of "$x > 2 \\;\\text{and}\\; x < 7$"?',
              options: ['$5$', '$1$', '$7$', '$9$'],
              correctAnswer: 0,
              explanation: 'An AND statement needs BOTH parts true. $5 > 2$ ✓ and $5 < 7$ ✓. Note $7$ fails because $7 < 7$ is false, and $1, 9$ each break one part.',
            },
            {
              question: 'Which value is a solution of "$x \\le -3 \\;\\text{or}\\; x \\ge 1$"?',
              options: ['$-5$', '$0$', '$-1$', '$\\tfrac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'An OR statement needs at least ONE part true. $-5 \\le -3$ ✓. The values $0$, $-1$, and $\\tfrac{1}{2}$ all land strictly between $-3$ and $1$, so they satisfy neither part.',
            },
          ],
        },
      },
      {
        id: 'cavi1-graph',
        type: 'text' as const,
        content: `## Reading the Number Line

The graph instantly tells you AND from OR:

- **AND** graphs as a **single connected segment** — the *overlap* of the two pieces. (Often a finite chunk in the middle.)
- **OR** graphs as **two rays pointing away** from each other — the *union* of the pieces.

### Open vs. Closed Dots

| Symbol | Dot | Meaning |
|--------|-----|---------|
| $<$ or $>$ | open ○ | endpoint **not** included |
| $\\le$ or $\\ge$ | closed ● | endpoint **is** included |

**Example — AND:** $-1 < x \\le 4$ graphs as an open dot at $-1$, a closed dot at $4$, and the segment between them shaded.

**Example — OR:** $x < -2 \\;\\text{or}\\; x \\ge 5$ graphs as a ray going left from an open dot at $-2$, plus a ray going right from a closed dot at $5$.`,
      },
      {
        id: 'cavi1-dropdown',
        type: 'dropdown-select' as const,
        content: `**AND or OR?** 🔽

Decide what kind of solution set each compound inequality produces.`,
        exercise: {
          dropdowns: [
            { label: '$x \\ge 0 \\;\\text{and}\\; x \\le 6$ graphs as:', options: ['a single segment from $0$ to $6$', 'two rays pointing apart', 'the whole number line', 'nothing (no solution)'] },
            { label: '$x < 1 \\;\\text{or}\\; x > 8$ graphs as:', options: ['two rays pointing apart', 'a single segment from $1$ to $8$', 'just the point $1$', 'the whole number line'] },
            { label: 'The dot at the endpoint of $x \\le 4$ is:', options: ['closed ●', 'open ○', 'an arrow', 'a square'] },
          ],
          correctAnswers: ['a single segment from $0$ to $6$', 'two rays pointing apart', 'closed ●'],
          hint1: 'AND keeps only the overlap, which is the segment where both conditions hold.',
          hint2: 'OR keeps every point in either piece; since the pieces do not touch, you get two separate rays.',
          hint3: 'The symbol $\\le$ includes the endpoint, so the dot is filled in (closed).',
          explanation: 'AND → overlap → one connected segment. OR (with a gap) → union → two rays. $\\le$ and $\\ge$ use closed dots; $<$ and $>$ use open dots.',
        },
      },
      {
        id: 'cavi1-writeit',
        type: 'text' as const,
        content: `## Writing a Compound Inequality

Going the other way — from a number line to symbols — comes up constantly.

- An AND segment from $-2$ (closed) to $5$ (open) is written $-2 \\le x < 5$. Read it left-to-right: the **left** number ties to the *left* end.
- An OR pair (ray left from $1$, ray right from $4$) is written $x < 1 \\;\\text{or}\\; x > 4$. Each ray gets its own piece.

> 💡 In a three-part AND inequality, the smaller number is always on the **left**. If yours reads "$5 < x < -2$", you've reversed it.`,
      },
      {
        id: 'cavi1-write-drill',
        type: 'input-boxes' as const,
        content: `**Name the Bounds** 🧮

A graph shows a shaded segment with a **closed** dot at $-4$ and an **open** dot at $3$ (everything between shaded). It represents $a \\le x < b$.

**1)** Enter $a$ (left bound).
**2)** Enter $b$ (right bound).`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-4', '3'],
          hint1: 'The left (smaller) endpoint is the closed dot.',
          hint2: 'The right (larger) endpoint is the open dot at $3$.',
          hint3: 'Closed at $-4$ uses $\\le$; open at $3$ uses $<$: so $-4 \\le x < 3$.',
          explanation: 'Closed dot at $-4$ → $a = -4$ (included, $\\le$). Open dot at $3$ → $b = 3$ (excluded, $<$). The inequality is $-4 \\le x < 3$.',
        },
      },
      {
        id: 'cavi1-wrap',
        type: 'text' as const,
        content: `## Putting It Together

You now know the single most important fork in this whole topic:

> 🔑 **AND = overlap (intersection), OR = combine (union).** Keep this front and center — every problem in Parts 2–5 comes back to it.

In Part 2 we'll actually **solve** compound inequalities — moving terms around while keeping the AND/OR logic intact.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'compound-absolute-value-inequalities-alg1',
    sections: [
      {
        id: 'cavi2-intro',
        type: 'text' as const,
        content: `# ⛓️ Compound & Absolute Value Inequalities

**Part 2 of 5 — Solving Compound Inequalities**

---

> 🔑 **The Golden Rule:** Solve an inequality exactly like an equation — *except* when you **multiply or divide by a negative number, flip the inequality sign.**`,
      },
      {
        id: 'cavi2-three-part',
        type: 'text' as const,
        content: `## Solving a "Between" (AND) Inequality

When $x$ is sandwiched in the middle, do the **same operation to all three parts** at once.

### Worked Example: $-7 < 2x + 1 \\le 9$

1. **Subtract $1$** from all three parts:
$$-8 < 2x \\le 8$$
2. **Divide all three parts by $2$** (positive, so no flip):
$$-4 < x \\le 4$$

So the solution is $-4 < x \\le 4$: an open dot at $-4$, closed dot at $4$, shaded between.

> ✅ **Check** $x = 0$: $2(0)+1 = 1$, and $-7 < 1 \\le 9$ ✓.`,
      },
      {
        id: 'cavi2-flip',
        type: 'text' as const,
        content: `## The Sign-Flip Trap ⚠️

### Worked Example: $-4 \\le -2x < 6$

Divide all three parts by $-2$. **Dividing by a negative flips *both* inequality signs:**

$$\\frac{-4}{-2} \\;\\ge\\; x \\;>\\; \\frac{6}{-2} \\quad\\Longrightarrow\\quad 2 \\ge x > -3$$

Rewritten smallest-to-largest: $-3 < x \\le 2$.

> ⚠️ **Most common mistake:** forgetting to flip — *and* forgetting that when you flip, the whole chain reverses direction. Always re-read your final answer left-to-right to make sure it still makes sense.`,
      },
      {
        id: 'cavi2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $5 \\le x + 3 < 11$.',
              options: ['$2 \\le x < 8$', '$2 < x \\le 8$', '$8 \\le x < 14$', '$-2 \\le x < 4$'],
              correctAnswer: 0,
              explanation: 'Subtract $3$ from all three parts: $5-3 \\le x < 11-3$, i.e. $2 \\le x < 8$.',
            },
            {
              question: 'When you divide every part of $-6 < -3x \\le 9$ by $-3$, the result is:',
              options: ['$2 > x \\ge -3$', '$2 < x \\le -3$', '$2 > x \\le -3$', '$-2 < x \\ge 3$'],
              correctAnswer: 0,
              explanation: 'Dividing by $-3$ flips both signs: $\\frac{-6}{-3} > x \\ge \\frac{9}{-3}$, i.e. $2 > x \\ge -3$ (same as $-3 \\le x < 2$).',
            },
          ],
        },
      },
      {
        id: 'cavi2-or',
        type: 'text' as const,
        content: `## Solving an "OR" Inequality

An OR inequality is really **two separate inequalities**. Solve each one on its own, then combine.

### Worked Example: $3x - 1 < -7 \\;\\text{or}\\; 2x + 5 > 11$

Solve each piece:
$$3x - 1 < -7 \\;\\Rightarrow\\; 3x < -6 \\;\\Rightarrow\\; x < -2$$
$$2x + 5 > 11 \\;\\Rightarrow\\; 2x > 6 \\;\\Rightarrow\\; x > 3$$

Final answer: $x < -2 \\;\\text{or}\\; x > 3$ — two rays pointing apart.

> 💡 You **cannot** write an OR result as a single three-part inequality. Three-part notation is reserved for AND ("between") solutions only.`,
      },
      {
        id: 'cavi2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Track the Steps** 🔽

You're solving $-7 < 2x + 1 \\le 9$. Choose the result of each move.`,
        exercise: {
          dropdowns: [
            { label: 'Subtract $1$ from all three parts:', options: ['$-8 < 2x \\le 8$', '$-6 < 2x \\le 10$', '$-8 < 2x \\le 10$', '$-7 < 2x \\le 9$'] },
            { label: 'Then divide all parts by $2$:', options: ['$-4 < x \\le 4$', '$-4 \\le x < 4$', '$-16 < x \\le 16$', '$-3 < x \\le 5$'] },
          ],
          correctAnswers: ['$-8 < 2x \\le 8$', '$-4 < x \\le 4$'],
          hint1: 'Whatever you do to the middle, do to BOTH outer parts as well.',
          hint2: '$-7 - 1 = -8$ and $9 - 1 = 8$, leaving $-8 < 2x \\le 8$.',
          hint3: 'Dividing by $+2$ keeps the signs: $-4 < x \\le 4$.',
          explanation: 'Subtract $1$ everywhere: $-8 < 2x \\le 8$. Divide by $2$ (positive, no flip): $-4 < x \\le 4$.',
        },
      },
      {
        id: 'cavi2-checktip',
        type: 'text' as const,
        content: `## Always Check One Point

After solving, plug a number from inside your answer back into the **original** inequality. If it works, your solution set is on the right track.

For $-4 < x \\le 4$, try $x = 0$ in $-7 < 2x + 1 \\le 9$: $\\;2(0)+1 = 1$, and $-7 < 1 \\le 9$ ✓.

> 💡 This one habit catches almost every sign-flip and arithmetic slip. Now try the drills yourself.`,
      },
      {
        id: 'cavi2-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

**1)** Solve $-3 < x - 2 < 5$. Enter the **lower** bound, then the **upper** bound of $x$.
**2)** Solve $4x \\ge 12$ (the right piece of an OR). Enter the bound: $x \\ge \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1', '7', '3'],
          hint1: 'For (1), add $2$ to all three parts: $-3+2 < x < 5+2$.',
          hint2: '$-3+2 = -1$ and $5+2 = 7$, so $-1 < x < 7$.',
          hint3: 'For (2), divide both sides by $4$: $x \\ge 12/4 = 3$.',
          explanation: '1) $-1 < x < 7$, so lower $= -1$, upper $= 7$.  2) $x \\ge 3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'compound-absolute-value-inequalities-alg1',
    sections: [
      {
        id: 'cavi3-intro',
        type: 'text' as const,
        content: `# ⛓️ Compound & Absolute Value Inequalities

**Part 3 of 5 — Absolute Value as Distance**

---

> 🔑 **The Big Idea:** $|x|$ means the **distance** from $x$ to $0$ on the number line. Distance is never negative — and that single fact powers every absolute value inequality.`,
      },
      {
        id: 'cavi3-distance',
        type: 'text' as const,
        content: `## Absolute Value = Distance

$|x| = 5$ asks: *which numbers are exactly $5$ units from $0$?* Answer: $5$ **and** $-5$.

Inequalities ask about distance being **small** or **large**:

| Statement | In words | Becomes |
|-----------|----------|---------|
| $|x| < 5$ | within $5$ of $0$ | $-5 < x < 5$ (**AND**) |
| $|x| > 5$ | farther than $5$ from $0$ | $x < -5 \\;\\text{or}\\; x > 5$ (**OR**) |

> 🔑 **"LESS than" → AND** (a squeezed-in segment). **"GREATER than" → OR** (two rays). A handy memory hook: **"Less thAND, greatOR."**`,
      },
      {
        id: 'cavi3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$|x| < 8$ is equivalent to:',
              options: ['$-8 < x < 8$', '$x < -8 \\;\\text{or}\\; x > 8$', '$x < 8$', '$0 < x < 8$'],
              correctAnswer: 0,
              explanation: '"Less than" → AND. Distance to $0$ under $8$ means $x$ is between $-8$ and $8$: $-8 < x < 8$.',
            },
            {
              question: '$|x| \\ge 3$ is equivalent to:',
              options: ['$x \\le -3 \\;\\text{or}\\; x \\ge 3$', '$-3 \\le x \\le 3$', '$x \\ge 3$', '$x \\le 3$'],
              correctAnswer: 0,
              explanation: '"Greater than (or equal)" → OR. Distance to $0$ at least $3$ means $x \\le -3$ or $x \\ge 3$.',
            },
          ],
        },
      },
      {
        id: 'cavi3-nosolution',
        type: 'text' as const,
        content: `## Two Special Cases ⚠️

Because absolute value is **never negative**, watch for these:

| Inequality | Why | Solution |
|------------|-----|----------|
| $|x| < -2$ | distance can't be negative | **No solution** (empty) |
| $|x| > -2$ | distance is always $\\ge 0 > -2$ | **All real numbers** |
| $|x| \\le 0$ | distance is $0$ only at $x=0$ | $x = 0$ (a single point) |

> ⚠️ **Don't auto-pilot the split!** If the right side is negative, stop and think about distance first. $|x| < (\\text{negative})$ is impossible; $|x| > (\\text{negative})$ is always true.`,
      },
      {
        id: 'cavi3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Translate the Statement** 🔽

Rewrite each absolute value inequality. Watch for the special cases.`,
        exercise: {
          dropdowns: [
            { label: '$|x| \\le 6$ becomes:', options: ['$-6 \\le x \\le 6$', '$x \\le -6 \\;\\text{or}\\; x \\ge 6$', 'no solution', 'all reals'] },
            { label: '$|x| > 10$ becomes:', options: ['$x < -10 \\;\\text{or}\\; x > 10$', '$-10 < x < 10$', 'no solution', 'all reals'] },
            { label: '$|x| < -4$ becomes:', options: ['no solution', 'all reals', '$-4 < x < 4$', '$x = -4$'] },
          ],
          correctAnswers: ['$-6 \\le x \\le 6$', '$x < -10 \\;\\text{or}\\; x > 10$', 'no solution'],
          hint1: '"Less than" → AND (a between-segment); "greater than" → OR (two rays).',
          hint2: 'Match each symbol: $\\le$ stays $\\le$ in the rewrite, $>$ stays $>$.',
          hint3: 'A distance ($|x|$) can never be less than a negative number, so $|x| < -4$ has no solution.',
          explanation: '$|x|\\le 6 \\Rightarrow -6 \\le x \\le 6$. $|x| > 10 \\Rightarrow x < -10$ or $x > 10$. $|x| < -4$: impossible → no solution.',
        },
      },
      {
        id: 'cavi3-symbols',
        type: 'text' as const,
        content: `## Keeping the Endpoint Symbol

When you rewrite an absolute value inequality, the **relation symbol carries over** to both new pieces:

| Original | Rewrite |
|----------|---------|
| $|x| \\le c$ | $-c \\le x \\le c$ (both $\\le$) |
| $|x| < c$ | $-c < x < c$ (both $<$) |
| $|x| \\ge c$ | $x \\le -c \\;\\text{or}\\; x \\ge c$ |
| $|x| > c$ | $x < -c \\;\\text{or}\\; x > c$ |

> 💡 A closed symbol ($\\le, \\ge$) stays closed; an open symbol ($<, >$) stays open. The endpoints just become $-c$ and $c$.`,
      },
      {
        id: 'cavi3-drill',
        type: 'input-boxes' as const,
        content: `**Find the Boundaries** 🧮

Rewrite $|x| \\le 9$ as a compound inequality $a \\le x \\le b$.

**1)** Enter $a$ (the lower bound).
**2)** Enter $b$ (the upper bound).`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-9', '9'],
          hint1: '"Less than or equal" means within $9$ of zero, so it is an AND statement.',
          hint2: 'The bounds are the opposite numbers $-9$ and $9$.',
          hint3: '$|x| \\le 9 \\Leftrightarrow -9 \\le x \\le 9$.',
          explanation: '$|x| \\le 9$ means $x$ is within $9$ units of $0$: $-9 \\le x \\le 9$. So $a = -9$, $b = 9$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'compound-absolute-value-inequalities-alg1',
    sections: [
      {
        id: 'cavi4-intro',
        type: 'text' as const,
        content: `# ⛓️ Compound & Absolute Value Inequalities

**Part 4 of 5 — Solving |ax + b| Inequalities**

---

> 🔑 **The Method:** Split the absolute value into a compound inequality, then solve like Part 2. "Less thAND, greatOR" tells you which kind you get.`,
      },
      {
        id: 'cavi4-lessthan',
        type: 'text' as const,
        content: `## The "Less Than" Case → AND

To solve $|ax + b| < c$ (with $c > 0$), rewrite it as the single AND chain:

$$-c < ax + b < c$$

then solve all three parts at once.

### Worked Example: $|2x - 3| \\le 7$

Split: $-7 \\le 2x - 3 \\le 7$.

1. **Add $3$** to all parts: $\\;-4 \\le 2x \\le 10$
2. **Divide by $2$:** $\\;-2 \\le x \\le 5$

Solution: $-2 \\le x \\le 5$ (a closed segment).

> ✅ **Check** $x = 5$: $|2(5)-3| = |7| = 7 \\le 7$ ✓.`,
      },
      {
        id: 'cavi4-greaterthan',
        type: 'text' as const,
        content: `## The "Greater Than" Case → OR

To solve $|ax + b| > c$ (with $c > 0$), rewrite it as **two** inequalities joined by OR:

$$ax + b < -c \\quad\\text{or}\\quad ax + b > c$$

### Worked Example: $|3x + 1| > 8$

Split into two:
$$3x + 1 < -8 \\;\\Rightarrow\\; 3x < -9 \\;\\Rightarrow\\; x < -3$$
$$3x + 1 > 8 \\;\\Rightarrow\\; 3x > 7 \\;\\Rightarrow\\; x > \\tfrac{7}{3}$$

Solution: $x < -3 \\;\\text{or}\\; x > \\tfrac{7}{3}$ (two rays).

> ⚠️ For the OR case, notice the **left** piece keeps the *negative* of $c$ **and** flips to $<$. Don't just copy "$> 8$" twice.`,
      },
      {
        id: 'cavi4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Split** 🔽

Choose the correct first step (the compound form) for each.`,
        exercise: {
          dropdowns: [
            { label: '$|x - 4| < 6$ splits to:', options: ['$-6 < x - 4 < 6$', '$x - 4 < -6 \\;\\text{or}\\; x - 4 > 6$', '$x - 4 < 6$', '$-6 < x < 6$'] },
            { label: '$|5x + 2| \\ge 12$ splits to:', options: ['$5x + 2 \\le -12 \\;\\text{or}\\; 5x + 2 \\ge 12$', '$-12 \\le 5x + 2 \\le 12$', '$5x + 2 \\ge 12$', '$5x + 2 \\le 12$'] },
          ],
          correctAnswers: ['$-6 < x - 4 < 6$', '$5x + 2 \\le -12 \\;\\text{or}\\; 5x + 2 \\ge 12$'],
          hint1: '"Less than" → AND → a single three-part chain $-c < (\\text{inside}) < c$.',
          hint2: '"Greater than or equal" → OR → two pieces, one $\\le -c$ and one $\\ge c$.',
          hint3: 'The OR split always has the LEFT piece use $\\le -c$ (negative $c$, flipped relation).',
          explanation: 'Less-than ($<,\\le$) gives the AND chain $-c < \\text{inside} < c$. Greater-than ($>,\\ge$) gives the OR pair: inside $\\le -c$ OR inside $\\ge c$.',
        },
      },
      {
        id: 'cavi4-recap',
        type: 'text' as const,
        content: `## The Three-Step Routine

Every $|ax + b|$ inequality follows the same routine:

1. **Decide AND or OR** using "Less thAND, greatOR."
2. **Split** into the matching compound form.
3. **Solve** the resulting inequality (Part 2 skills — and flip on a negative divide).

> ⚠️ One more reflex: if the right-hand side is **negative**, skip the split and use the special cases from Part 3 ($<$ negative → no solution; $>$ negative → all reals).`,
      },
      {
        id: 'cavi4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $|x + 2| < 5$.',
              options: ['$-7 < x < 3$', '$-3 < x < 7$', '$x < -7 \\;\\text{or}\\; x > 3$', '$-5 < x < 5$'],
              correctAnswer: 0,
              explanation: 'Split: $-5 < x + 2 < 5$. Subtract $2$ from all parts: $-7 < x < 3$.',
            },
            {
              question: 'Solve $|2x| \\ge 10$.',
              options: ['$x \\le -5 \\;\\text{or}\\; x \\ge 5$', '$-5 \\le x \\le 5$', '$x \\ge 5$', '$x \\le -10 \\;\\text{or}\\; x \\ge 10$'],
              correctAnswer: 0,
              explanation: 'Split: $2x \\le -10$ or $2x \\ge 10$. Divide by $2$: $x \\le -5$ or $x \\ge 5$.',
            },
          ],
        },
      },
      {
        id: 'cavi4-graphnote',
        type: 'text' as const,
        content: `## Picture the Answer

A quick sketch catches sign errors:

- **AND** answers (from $<$) shade a **single segment** around the center. The center is the value that makes the inside zero — e.g. for $|x-1|$ that's $x = 1$.
- **OR** answers (from $>$) shade **two rays** pointing away from that center.

> 💡 If your "less than" problem gives two rays, or your "greater than" gives a segment, you've mixed up AND and OR — go back to "Less thAND, greatOR."`,
      },
      {
        id: 'cavi4-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

**1)** Solve $|x - 1| \\le 4$, written as $a \\le x \\le b$. Enter $a$, then $b$.
**2)** Solve $|x + 3| > 5$ → the right ray is $x > \\,?$. Enter that bound.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-3', '5', '2'],
          hint1: 'For (1): $-4 \\le x - 1 \\le 4$, then add $1$ to all parts.',
          hint2: '$-4 + 1 = -3$ and $4 + 1 = 5$, so $-3 \\le x \\le 5$.',
          hint3: 'For (2) the right piece is $x + 3 > 5 \\Rightarrow x > 2$.',
          explanation: '1) $-3 \\le x \\le 5$, so $a = -3$, $b = 5$.  2) $x + 3 > 5 \\Rightarrow x > 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'compound-absolute-value-inequalities-alg1',
    sections: [
      {
        id: 'cavi5-intro',
        type: 'text' as const,
        content: `# ⛓️ Compound & Absolute Value Inequalities

**Part 5 of 5 — Applications & Mastery Check**

---

You can now (1) tell AND from OR, (2) solve compound inequalities, (3) read absolute value as distance, and (4) solve $|ax+b|$ inequalities. Let's apply it and finish strong.`,
      },
      {
        id: 'cavi5-tolerance',
        type: 'text' as const,
        content: `## Real-World: Tolerance Problems

Manufacturing and science use absolute value to describe **how far a measurement may stray** from a target.

### Example: A bolt should be $50$ mm long, with a tolerance of $0.4$ mm.

"Within $0.4$ of the target" is a *distance*, so we write:

$$|L - 50| \\le 0.4$$

Split (less than → AND): $\\;-0.4 \\le L - 50 \\le 0.4$, then add $50$:

$$49.6 \\le L \\le 50.4$$

So an acceptable bolt is between $49.6$ mm and $50.4$ mm long.

> 💡 **Pattern to memorize:** $|{\\text{actual}} - {\\text{target}}| \\le {\\text{tolerance}}$. The target is what you subtract; the tolerance is the right-hand side.`,
      },
      {
        id: 'cavi5-tolerance-drill',
        type: 'input-boxes' as const,
        content: `**Tolerance Range** 🧮

A cereal box should hold $500$ g, with a tolerance of $6$ g. Acceptable weights $W$ satisfy $|W - 500| \\le 6$, which gives $a \\le W \\le b$.

**1)** Enter $a$ (the minimum acceptable weight, in grams).
**2)** Enter $b$ (the maximum acceptable weight, in grams).`,
        exercise: {
          boxes: 2,
          correctAnswers: ['494', '506'],
          hint1: 'Split the "less than or equal": $-6 \\le W - 500 \\le 6$.',
          hint2: 'Add $500$ to all three parts.',
          hint3: '$-6 + 500 = 494$ and $6 + 500 = 506$.',
          explanation: '$|W - 500| \\le 6 \\Rightarrow -6 \\le W - 500 \\le 6 \\Rightarrow 494 \\le W \\le 506$. So $a = 494$, $b = 506$.',
        },
      },
      {
        id: 'cavi5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Rewrite as | Graph |
|-----------|-----------|-------|
| AND / "between" | $a < x < b$ | one segment |
| OR | $x < a \\;\\text{or}\\; x > b$ | two rays |
| $|x| < c$ ($c>0$) | $-c < x < c$ (**AND**) | segment |
| $|x| > c$ ($c>0$) | $x < -c \\;\\text{or}\\; x > c$ (**OR**) | two rays |
| $|x| < $ negative | impossible | **no solution** |
| $|x| > $ negative | always true | **all reals** |

> ⚠️ **Two reflexes to keep:** flip the sign when you multiply/divide by a negative, and check the special cases before splitting when the right side is negative.`,
      },
      {
        id: 'cavi5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A thermostat keeps a room within $2^\\circ$ of $68^\\circ$F. Which inequality models the allowed temperature $T$?',
              options: ['$|T - 68| \\le 2$', '$|T - 2| \\le 68$', '$|T + 68| \\le 2$', '$|T - 68| \\ge 2$'],
              correctAnswer: 0,
              explanation: '"Within $2$ of $68$" is a distance: $|T - 68| \\le 2$, which gives $66 \\le T \\le 70$.',
            },
            {
              question: 'Solve $|x - 5| > 2$.',
              options: ['$x < 3 \\;\\text{or}\\; x > 7$', '$3 < x < 7$', '$x < -7 \\;\\text{or}\\; x > -3$', '$-3 < x < 7$'],
              correctAnswer: 0,
              explanation: 'Greater than → OR: $x - 5 < -2$ or $x - 5 > 2$, i.e. $x < 3$ or $x > 7$.',
            },
          ],
        },
      },
      {
        id: 'cavi5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Solve the compound inequality $-1 \\le 2x + 3 < 9$.',
              options: ['$-2 \\le x < 3$', '$-2 < x \\le 3$', '$2 \\le x < 6$', '$-1 \\le x < 3$'],
              correctAnswer: 0,
              explanation: 'Subtract $3$: $-4 \\le 2x < 6$. Divide by $2$: $-2 \\le x < 3$.',
            },
            {
              question: 'Which absolute value inequality has NO solution?',
              options: ['$|x + 1| < -3$', '$|x + 1| > -3$', '$|x + 1| \\le 3$', '$|x + 1| \\ge 3$'],
              correctAnswer: 0,
              explanation: 'An absolute value is never negative, so it can never be less than $-3$. $|x+1| < -3$ has no solution. ($|x+1| > -3$ is true for all reals.)',
            },
            {
              question: 'Solve $|3x| \\le 9$.',
              options: ['$-3 \\le x \\le 3$', '$x \\le -3 \\;\\text{or}\\; x \\ge 3$', '$-9 \\le x \\le 9$', '$0 \\le x \\le 3$'],
              correctAnswer: 0,
              explanation: 'Less than → AND: $-9 \\le 3x \\le 9$. Divide all parts by $3$: $-3 \\le x \\le 3$.',
            },
          ],
        },
      },
    ],
  },
]
