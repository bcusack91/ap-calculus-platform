import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Evaluating Limits Graphically (AP Calculus AB).
 * Registry key / DB Topic.slug: 'evaluating-limits-graphically'.
 * 7 parts, gold-standard structure: intuition → one-sided limits → existence →
 * limits at known/removable/jump/infinite points → infinite limits & vertical
 * asymptotes → limits at infinity → mixed practice + exit quiz.
 * Every section alternates teaching (text) with interactive checks (multiple-choice
 * + input-boxes + dropdown-select). LaTeX uses DOUBLED backslashes (these are
 * JS template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-graphically',
    sections: [
      {
        id: 'elg1-intro',
        type: 'text' as const,
        content: `# 📈 Evaluating Limits Graphically

**Part 1 of 7 — What a Limit Is Asking**

---

### Topics in This Part

| Section |
|---------|
| The Big Idea: "Approaching" vs. "Reaching" |
| Reading a Limit Off a Graph |
| Why the Value AT the Point Doesn't Matter |

> 🔑 **Key Concept:** A limit asks one question only — *as $x$ slides toward $a$, what height is $y$ heading for?* It does **not** ask what the function equals at $a$. Those can be two different numbers.`,
      },
      {
        id: 'elg1-bigidea',
        type: 'text' as const,
        content: `## The Big Idea: Approaching, Not Arriving

The notation

$$\\lim_{x \\to a} f(x) = L$$

reads "the limit of $f(x)$, as $x$ **approaches** $a$, equals $L$." It describes where the graph is *headed* as you walk along it toward $x = a$ — from both sides.

Think of driving toward a town:
- $a$ is the **town** you are driving toward.
- $L$ is the **scenery height** the road is climbing to.
- The limit cares about the road's behavior *near* the town, never about a single pothole sitting right at the town sign.

| What you read | The graph's job |
|---------------|-----------------|
| $\\lim_{x \\to a} f(x)$ | the $y$-value the curve **trends toward** near $x=a$ |
| $f(a)$ | the $y$-value the curve actually **hits at** $x=a$ |

> 💡 A limit is a statement about the *neighborhood* of $x=a$, with the single point $x=a$ itself deliberately ignored.`,
      },
      {
        id: 'elg1-read-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The statement $\\lim_{x \\to 3} f(x) = 5$ tells you that:',
              options: [
                'As $x$ gets close to $3$, $f(x)$ gets close to $5$',
                'The function equals $5$ exactly at $x = 3$',
                'The function equals $3$ at $x = 5$',
                'The graph crosses the point $(5, 3)$',
              ],
              correctAnswer: 0,
              explanation: 'A limit describes the height the curve approaches as $x \\to 3$. It says nothing guaranteed about $f(3)$ itself — only about nearby behavior.',
            },
            {
              question: 'Which phrase best captures what "$x \\to a$" means in a limit?',
              options: [
                '$x$ becomes exactly $a$',
                '$x$ slides toward $a$ from both sides without necessarily reaching it',
                '$x$ jumps to a random value near $a$',
                '$x$ moves away from $a$',
              ],
              correctAnswer: 1,
              explanation: '"$x \\to a$" means $x$ approaches $a$ from the left and the right. We study the trend near $a$, not the single value at $a$.',
            },
          ],
        },
      },
      {
        id: 'elg1-atpoint',
        type: 'text' as const,
        content: `## Why the Value AT the Point Doesn't Matter

Here is the surprise that trips up most students. Consider a graph that climbs smoothly toward height $4$ as $x$ nears $2$, but has a **hole** at $(2, 4)$ and a separate **filled dot** floating at $(2, 1)$.

- $\\lim_{x \\to 2} f(x) = 4$ — the curve is heading to height $4$ from both sides.
- $f(2) = 1$ — but the function is actually *defined* to equal $1$ at $x=2$ (the solid dot).

These disagree, and that's completely allowed. The limit follows the **approaching curve**; the function value follows the **solid dot**.

> ⚠️ **Most common beginner mistake:** plugging in $x = a$ and reading the dot. To find a limit graphically, trace the curve *toward* $a$ — ignore any solid dot sitting at $a$ until you are specifically asked for $f(a)$.`,
      },
      {
        id: 'elg1-trace-mc',
        type: 'multiple-choice' as const,
        content: `**Reading a Graph** 🎯

A curve approaches height $4$ from both sides of $x = 2$. There is an open hole at $(2, 4)$ and a solid dot at $(2, 1)$.`,
        exercise: {
          questions: [
            {
              question: 'What is $\\lim_{x \\to 2} f(x)$?',
              options: ['$4$', '$1$', 'It does not exist', '$2$'],
              correctAnswer: 0,
              explanation: 'Both sides of the curve climb toward height $4$, so the limit is $4$. The solid dot at $(2,1)$ is irrelevant to the limit.',
            },
            {
              question: 'What is $f(2)$?',
              options: ['$1$', '$4$', 'Undefined', '$2$'],
              correctAnswer: 0,
              explanation: 'The solid dot pins the actual function value at $(2, 1)$, so $f(2) = 1$. Here $\\lim_{x\\to 2} f(x) = 4 \\ne f(2)$.',
            },
          ],
        },
      },
      {
        id: 'elg1-values-input',
        type: 'input-boxes' as const,
        content: `**Numbers, Not Just Pictures** 🧮

A graph trends toward height $7$ from both sides of $x = 6$, but a solid dot pins the actual value at $(6, 2)$.

**1)** $\\lim_{x \\to 6} f(x) = \\,?$
**2)** $f(6) = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['7', '2'],
          hint1: 'Trace the curve toward $x=6$ from both sides — it heads to height $7$.',
          hint2: 'The solid dot is the actual value: it sits at $(6, 2)$.',
          hint3: 'The limit follows the approaching curve ($7$); $f(6)$ follows the solid dot ($2$).',
          explanation: '1) Both sides approach $7$, so $\\lim_{x\\to 6} f(x) = 7$.  2) The solid dot gives $f(6) = 2$. The limit and the value disagree, which is perfectly allowed.',
        },
      },
      {
        id: 'elg1-wrapup',
        type: 'text' as const,
        content: `## The One Skill That Makes This Easy

For the rest of this lesson, evaluating a limit graphically comes down to a single physical motion:

> 🔑 **Trace toward, don't land on.** Put a finger on the curve a little to the left of $x=a$ and slide it toward $a$. Note the height it aims for. Do the same from the right. If both fingers aim for the same height $L$, then $\\lim_{x\\to a} f(x) = L$.

In Part 2 we make that "left finger / right finger" idea precise with **one-sided limits**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-graphically',
    sections: [
      {
        id: 'elg2-intro',
        type: 'text' as const,
        content: `# 📈 Evaluating Limits Graphically

**Part 2 of 7 — One-Sided Limits**

---

> 🔑 **The Idea:** Every two-sided limit is built from two one-sided limits — the **left-hand limit** and the **right-hand limit**. Learn to read each separately and you can read any limit off a graph.`,
      },
      {
        id: 'elg2-notation',
        type: 'text' as const,
        content: `## Left and Right Notation

| Notation | Read as | Where $x$ comes from |
|----------|---------|----------------------|
| $\\lim_{x \\to a^-} f(x)$ | "limit as $x$ approaches $a$ from the **left**" | values **less** than $a$ (the negative side) |
| $\\lim_{x \\to a^+} f(x)$ | "limit as $x$ approaches $a$ from the **right**" | values **greater** than $a$ (the positive side) |

The little superscript is a **direction**, not a sign on a number:
- $a^-$ → approach from the side where $x < a$ (on the graph, coming *from the left*).
- $a^+$ → approach from the side where $x > a$ (coming *from the right*).

### Example

Suppose a graph jumps at $x = 1$: coming from the left it rises to height $3$, and coming from the right it sits at height $-2$.

$$\\lim_{x \\to 1^-} f(x) = 3 \\qquad \\lim_{x \\to 1^+} f(x) = -2$$

> 💡 To read a one-sided limit, only look at the curve on **that one side** of the vertical line $x=a$. Cover the other side with your hand.`,
      },
      {
        id: 'elg2-onesided-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Direction** 🔽

A graph approaches height $6$ from the left of $x = 4$ and height $6$ from the right. (No jump — the two sides agree.)`,
        exercise: {
          dropdowns: [
            { label: '$\\lim_{x \\to 4^-} f(x) =$', options: ['$6$', '$4$', '$-6$', 'does not exist'] },
            { label: '$\\lim_{x \\to 4^+} f(x) =$', options: ['$6$', '$4$', '$-6$', 'does not exist'] },
            { label: 'The $-$ superscript means approach from the:', options: ['left ($x < 4$)', 'right ($x > 4$)', 'top', 'bottom'] },
          ],
          correctAnswers: ['$6$', '$6$', 'left ($x < 4$)'],
          hint1: 'Look only at the curve to the left of $x=4$; it climbs to height $6$.',
          hint2: 'Now cover the left side and look only to the right of $x=4$; it also reaches height $6$.',
          hint3: 'The superscript $-$ stands for the negative side, where $x$ is less than $a$ — that is the left side.',
          explanation: 'Both one-sided limits equal $6$. The minus superscript always means the left side ($x < a$); the plus superscript means the right side ($x > a$).',
        },
      },
      {
        id: 'elg2-jump',
        type: 'text' as const,
        content: `## When the Two Sides Disagree

At a **jump**, the left and right pieces aim for different heights. You read each piece by following only its own side into the vertical line $x=a$, and you read the height where that piece **ends** (open or closed — the height is the same either way).

### Worked Example — a step graph

A graph is flat at height $-1$ for $x < 2$, then jumps and is flat at height $5$ for $x \\ge 2$.

$$\\lim_{x \\to 2^-} f(x) = -1 \\qquad \\lim_{x \\to 2^+} f(x) = 5$$

The left piece holds height $-1$ right up to $x=2$, so the left-hand limit is $-1$. The right piece holds height $5$, so the right-hand limit is $5$.

> ⚠️ **Open vs. closed dots do not change a one-sided limit.** A limit reports the *height the curve approaches*. Whether the endpoint is drawn as a hole or a solid dot, the approaching height is identical.`,
      },
      {
        id: 'elg2-jump-input',
        type: 'input-boxes' as const,
        content: `**Read Each Side** 🧮

A piecewise graph behaves like this near $x = 0$:
- For $x < 0$ the curve rises toward height $2$.
- For $x > 0$ the curve sits at height $-3$.

Enter each one-sided limit as a number.

**1)** $\\lim_{x \\to 0^-} f(x) = \\,?$
**2)** $\\lim_{x \\to 0^+} f(x) = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '-3'],
          hint1: 'The $0^-$ side is $x < 0$ — the left piece, which rises toward $2$.',
          hint2: 'The $0^+$ side is $x > 0$ — the right piece, which sits at $-3$.',
          hint3: 'Read only one side at a time; the height each side approaches is the one-sided limit.',
          explanation: '1) The left side approaches $2$, so $\\lim_{x\\to 0^-}f(x)=2$.  2) The right side approaches $-3$, so $\\lim_{x\\to 0^+}f(x)=-3$. Since they disagree, the two-sided limit will not exist — that is Part 3.',
        },
      },
      {
        id: 'elg2-onesided-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To evaluate $\\lim_{x \\to 5^+} f(x)$ from a graph, you should look at the curve:',
              options: [
                'just to the right of $x = 5$, where $x > 5$',
                'just to the left of $x = 5$, where $x < 5$',
                'exactly at $x = 5$',
                'far away from $x = 5$ on both sides',
              ],
              correctAnswer: 0,
              explanation: 'The $+$ superscript means the right side, where $x > 5$. Follow only that piece into $x = 5$.',
            },
            {
              question: 'A solid dot vs. an open hole at the end of a curve changes which quantity?',
              options: [
                'The actual function value $f(a)$, but not the one-sided limit',
                'The one-sided limit, but not $f(a)$',
                'Both the limit and $f(a)$',
                'Neither — dots never mean anything',
              ],
              correctAnswer: 0,
              explanation: 'A limit reports the approaching height regardless of how the endpoint is drawn. Whether the dot is filled determines $f(a)$, not the limit.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-graphically',
    sections: [
      {
        id: 'elg3-intro',
        type: 'text' as const,
        content: `# 📈 Evaluating Limits Graphically

**Part 3 of 7 — When Does the Limit Exist?**

---

> 🔑 **The Existence Rule:** A two-sided limit exists **only if** the left-hand and right-hand limits are equal *and finite*. If they disagree, the limit **does not exist** (DNE).`,
      },
      {
        id: 'elg3-rule',
        type: 'text' as const,
        content: `## The Existence Theorem

$$\\lim_{x \\to a} f(x) = L \\quad \\Longleftrightarrow \\quad \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$

In words: **the two-sided limit equals $L$ exactly when both one-sided limits equal that same $L$.**

So your graphical procedure is always the same three steps:

1. Find the **left**-hand limit.
2. Find the **right**-hand limit.
3. If they **match**, that common value is the limit. If they **differ**, the limit **does not exist**.

| Left limit | Right limit | Two-sided limit |
|-----------|------------|-----------------|
| $7$ | $7$ | $7$ ✓ |
| $-2$ | $-2$ | $-2$ ✓ |
| $3$ | $5$ | **DNE** (jump) |
| $0$ | $0$ | $0$ ✓ (even with a hole at $x=a$) |

> 💡 The function value $f(a)$ plays **no role** in whether the limit exists. A hole at $x=a$ does not stop a limit from existing — both sides can still agree on a height.`,
      },
      {
        id: 'elg3-exist-dropdown',
        type: 'dropdown-select' as const,
        content: `**Does It Exist?** 🔽

For each pair of one-sided limits, decide the two-sided limit.`,
        exercise: {
          dropdowns: [
            { label: 'Left $= 4$, Right $= 4$:', options: ['$4$', '$8$', 'does not exist', '$0$'] },
            { label: 'Left $= -1$, Right $= 6$:', options: ['does not exist', '$5$', '$-1$', '$6$'] },
            { label: 'Left $= 2$, Right $= 2$, but $f(a) = 9$:', options: ['$2$', '$9$', 'does not exist', '$11$'] },
          ],
          correctAnswers: ['$4$', 'does not exist', '$2$'],
          hint1: 'Equal one-sided limits ⇒ the two-sided limit equals that common value.',
          hint2: 'Different one-sided limits ($-1 \\ne 6$) ⇒ the two-sided limit does not exist.',
          hint3: 'The function value $f(a)=9$ is irrelevant to the limit; the sides agree on $2$, so the limit is $2$.',
          explanation: 'Row 1: sides agree on $4$ ⇒ limit $4$. Row 2: sides differ ⇒ DNE. Row 3: sides agree on $2$ ⇒ limit $2$, even though $f(a)=9$ (a removable disagreement).',
        },
      },
      {
        id: 'elg3-three-cases',
        type: 'text' as const,
        content: `## Three Ways a Limit Can Fail to Exist (Graphically)

When you trace toward $x=a$ and the limit **DNE**, it is always one of these pictures:

1. **Jump** — the two sides approach different finite heights (a step). Left $\\ne$ Right.
2. **Infinite blow-up** — the curve shoots up to $+\\infty$ or down to $-\\infty$ near $x=a$ (a vertical asymptote). No finite height to approach. *(Part 5)*
3. **Wild oscillation** — the curve wiggles infinitely fast near $x=a$ (like $\\sin\\!\\left(\\frac{1}{x}\\right)$ near $0$) and never settles on one height.

> ⚠️ A **removable hole** is *not* on this list. A hole where both sides still aim at the same height has a perfectly good limit — the limit exists; only $f(a)$ is missing or misplaced.`,
      },
      {
        id: 'elg3-cases-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A graph steps from height $1$ (left of $x=3$) up to height $4$ (right of $x=3$). What is $\\lim_{x \\to 3} f(x)$?',
              options: ['Does not exist (jump)', '$4$', '$1$', '$2.5$'],
              correctAnswer: 0,
              explanation: 'Left-hand limit $1 \\ne 4$ right-hand limit, so the two-sided limit does not exist. This is a jump discontinuity.',
            },
            {
              question: 'A graph has an open hole at $(3, 4)$ but both sides of the curve approach height $4$. What is $\\lim_{x \\to 3} f(x)$?',
              options: ['$4$ — the limit exists', 'Does not exist, because of the hole', '$3$', 'Undefined, same as $f(3)$'],
              correctAnswer: 0,
              explanation: 'Both one-sided limits equal $4$, so the limit exists and equals $4$. A hole removes $f(3)$ but does not destroy the limit.',
            },
            {
              question: 'Which situation does NOT, by itself, make a limit fail to exist?',
              options: [
                'A removable hole where both sides approach the same height',
                'A jump where the two sides differ',
                'A vertical asymptote where the curve blows up',
                'Infinite oscillation near the point',
              ],
              correctAnswer: 0,
              explanation: 'A removable hole still leaves both sides approaching one common height, so the limit exists. The other three each prevent a single finite approaching height.',
            },
          ],
        },
      },
      {
        id: 'elg3-exist-input',
        type: 'input-boxes' as const,
        content: `**Apply the Rule** 🧮

Use the existence rule. For each, enter the value of $\\lim_{x\\to a} f(x)$ as a number, or enter the word **DNE** if it does not exist.

**1)** Left $= 8$, Right $= 8$, $f(a) = 0$:  limit $= \\,?$
**2)** Left $= 3$, Right $= -3$:  limit $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['8', 'DNE'],
          hint1: 'Equal one-sided limits ($8$ and $8$) ⇒ the two-sided limit is that common value, regardless of $f(a)$.',
          hint2: 'Different one-sided limits ($3 \\ne -3$) ⇒ the two-sided limit does not exist.',
          hint3: 'The function value $f(a)=0$ in #1 is irrelevant — only the two sides matter for the limit.',
          explanation: '1) Sides agree on $8$, so the limit is $8$ (the value $f(a)=0$ does not matter).  2) Sides differ ($3$ vs. $-3$), so the limit is DNE.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-graphically',
    sections: [
      {
        id: 'elg4-intro',
        type: 'text' as const,
        content: `# 📈 Evaluating Limits Graphically

**Part 4 of 7 — Limit vs. Function Value at a Point**

---

> 🔑 **The Three Questions:** At any marked point $x=a$ on a graph, you can be asked three separate things: the **left limit**, the **right limit**, and the **function value** $f(a)$. Reading all three correctly is the heart of every limit-from-a-graph problem.`,
      },
      {
        id: 'elg4-toolkit',
        type: 'text' as const,
        content: `## The Reading Toolkit

For a point $x = a$, answer in this order:

| Question | How to read it on the graph |
|----------|------------------------------|
| $\\lim_{x\\to a^-} f(x)$ | trace the **left** piece into $x=a$; read the height it approaches |
| $\\lim_{x\\to a^+} f(x)$ | trace the **right** piece into $x=a$; read the height it approaches |
| $\\lim_{x\\to a} f(x)$ | equals the common value **iff** the two sides match; else DNE |
| $f(a)$ | find the **solid dot** at $x=a$; if there is only a hole and no dot, $f(a)$ is **undefined** |

> 💡 **Holes vs. dots, one more time.** An open circle (hole) marks a place the curve *approaches but doesn't occupy*. A filled dot marks the *actual* value. A vertical line $x=a$ can touch at most one solid dot — that dot is $f(a)$.`,
      },
      {
        id: 'elg4-removable',
        type: 'text' as const,
        content: `## Worked Example — Removable Discontinuity

A continuous-looking curve passes through the region near $x = 1$ heading for height $3$ from both sides. At $x=1$ there is an **open hole** at $(1, 3)$ and a **solid dot** at $(1, 0)$.

Read all four quantities:

$$\\lim_{x \\to 1^-} f(x) = 3 \\qquad \\lim_{x \\to 1^+} f(x) = 3$$
$$\\lim_{x \\to 1} f(x) = 3 \\qquad f(1) = 0$$

Both sides approach $3$, so the two-sided limit is $3$. But the function is *defined* to be $0$ there (the solid dot). Because $\\lim_{x\\to 1} f(x) = 3 \\ne 0 = f(1)$, this is a **removable discontinuity** — you could "fix" it by moving the dot up to the hole.

> ⚠️ The limit being $3$ has **nothing** to do with $f(1)=0$. Read the curve for the limit; read the dot for the value.`,
      },
      {
        id: 'elg4-removable-input',
        type: 'input-boxes' as const,
        content: `**Read All Three** 🧮

Near $x = -2$, a curve approaches height $5$ from both sides. There is an open hole at $(-2, 5)$ and a solid dot at $(-2, 1)$.

**1)** $\\lim_{x \\to -2} f(x) = \\,?$
**2)** $f(-2) = \\,?$
**3)** Enter $1$ if the limit and the function value disagree (removable discontinuity), or $0$ if they agree.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '1', '1'],
          hint1: 'Both sides aim at height $5$, so the two-sided limit is $5$.',
          hint2: 'The solid dot is at $(-2, 1)$, so $f(-2) = 1$.',
          hint3: 'Limit $5 \\ne$ value $1$, so they disagree — that is a removable discontinuity, enter $1$.',
          explanation: '1) limit $=5$.  2) $f(-2)=1$ (solid dot).  3) $5 \\ne 1$, so they disagree — a removable discontinuity, enter $1$.',
        },
      },
      {
        id: 'elg4-jump-example',
        type: 'text' as const,
        content: `## Worked Example — Jump Discontinuity

A graph holds height $-1$ for $x < 0$, with an **open hole** at $(0, -1)$. For $x \\ge 0$ it holds height $2$, with a **solid dot** at $(0, 2)$.

$$\\lim_{x \\to 0^-} f(x) = -1 \\qquad \\lim_{x \\to 0^+} f(x) = 2$$
$$\\lim_{x \\to 0} f(x) = \\text{DNE} \\qquad f(0) = 2$$

The left side aims at $-1$, the right side aims at $2$ — they disagree, so the two-sided limit **does not exist**. But $f(0)$ is perfectly well defined: it is $2$, the solid dot.

> 💡 **A limit can DNE while $f(a)$ still exists.** Existence of the limit and existence of the value are independent questions.`,
      },
      {
        id: 'elg4-jump-dropdown',
        type: 'dropdown-select' as const,
        content: `**Sort the Four Quantities** 🔽

A graph holds height $4$ for $x < 1$ (open hole at $(1,4)$) and holds height $-2$ for $x > 1$ (open hole at $(1,-2)$). A separate solid dot floats at $(1, 1)$, which is the actual function value. Read all four quantities: left side $\\to 4$, right side $\\to -2$, solid dot at $(1,1)$.`,
        exercise: {
          dropdowns: [
            { label: '$\\lim_{x\\to 1^-} f(x) =$', options: ['$4$', '$-2$', '$1$', 'DNE'] },
            { label: '$\\lim_{x\\to 1^+} f(x) =$', options: ['$-2$', '$4$', '$1$', 'DNE'] },
            { label: '$\\lim_{x\\to 1} f(x) =$', options: ['DNE', '$4$', '$-2$', '$1$'] },
            { label: '$f(1) =$', options: ['$1$', '$4$', '$-2$', 'DNE'] },
          ],
          correctAnswers: ['$4$', '$-2$', 'DNE', '$1$'],
          hint1: 'Left side ($x<1$) holds height $4$; right side ($x>1$) holds height $-2$.',
          hint2: 'The two sides give $4$ and $-2$ — different, so the two-sided limit does not exist.',
          hint3: 'The solid dot is the function value: it sits at $(1, 1)$, so $f(1) = 1$.',
          explanation: 'Left $=4$, right $=-2$ (a jump). Since $4 \\ne -2$, the two-sided limit is DNE. The solid dot at $(1,1)$ gives $f(1)=1$, independent of the limit.',
        },
      },
      {
        id: 'elg4-independence-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which combination is possible on a single graph at $x = a$?',
              options: [
                '$\\lim_{x\\to a} f(x)$ does not exist, yet $f(a) = 2$ is perfectly defined',
                'A two-sided limit can never exist if $f(a)$ is defined',
                'If $f(a)$ is defined, the limit must equal $f(a)$',
                'A jump forces $f(a)$ to be undefined',
              ],
              correctAnswer: 0,
              explanation: 'At a jump, the limit DNE, but a solid dot can still define $f(a)$ — existence of the limit and existence of the value are independent.',
            },
            {
              question: 'A "removable discontinuity" at $x=a$ means:',
              options: [
                'The limit exists, but it disagrees with (or replaces a missing) $f(a)$',
                'The limit does not exist',
                'The function blows up to infinity',
                'The left and right limits disagree',
              ],
              correctAnswer: 0,
              explanation: 'Removable means both sides agree on a height (limit exists), but $f(a)$ is missing or sits elsewhere — you could "remove" the gap by redefining $f(a)$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-graphically',
    sections: [
      {
        id: 'elg5-intro',
        type: 'text' as const,
        content: `# 📈 Evaluating Limits Graphically

**Part 5 of 7 — Infinite Limits & Vertical Asymptotes**

---

> 🔑 **The Idea:** When a graph rockets upward or plunges downward without bound near $x=a$, we write the limit as $+\\infty$ or $-\\infty$. This describes the *behavior*, and it signals a **vertical asymptote** at $x=a$.`,
      },
      {
        id: 'elg5-infinite',
        type: 'text' as const,
        content: `## Infinite Limits

If the curve grows without bound as $x \\to a$, we record the direction:

$$\\lim_{x \\to a} f(x) = +\\infty \\quad\\text{(shoots up)} \\qquad \\lim_{x \\to a} f(x) = -\\infty \\quad\\text{(plunges down)}$$

The classic picture is $f(x) = \\dfrac{1}{x^2}$ near $x = 0$: both sides shoot up.

$$\\lim_{x \\to 0} \\frac{1}{x^2} = +\\infty$$

A vertical dashed line at $x=a$ that the curve hugs is a **vertical asymptote**. The curve gets arbitrarily close to that line but never crosses it.

> ⚠️ **"$=\\infty$" still means the limit does not exist as a finite number.** Writing $+\\infty$ is more *informative* than "DNE" — it tells you the curve blows **up** rather than down — but $\\infty$ is a direction, not a real-number value the limit equals.`,
      },
      {
        id: 'elg5-onesided-infinite',
        type: 'text' as const,
        content: `## One Side Up, the Other Down

Many asymptotes blow up in **opposite** directions on the two sides. The standard example is $f(x) = \\dfrac{1}{x}$ near $x=0$:

$$\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty \\qquad \\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$$

To the left of $0$, $x$ is a small **negative** number, so $\\frac{1}{x}$ is a huge negative number — the curve dives to $-\\infty$. To the right, $x$ is a small **positive** number, so $\\frac{1}{x}$ is a huge positive number — it climbs to $+\\infty$.

| Approach | Sign of $x$ | $\\frac{1}{x}$ heads toward |
|----------|-------------|----------------------------|
| $x \\to 0^-$ | small negative | $-\\infty$ |
| $x \\to 0^+$ | small positive | $+\\infty$ |

Because the two sides disagree, the two-sided $\\lim_{x\\to 0}\\frac{1}{x}$ **does not exist** (not even as $\\pm\\infty$).

> 💡 **Reading the sign on a graph:** near a vertical asymptote, just look at whether each side of the curve is heading toward the **top** of the picture ($+\\infty$) or the **bottom** ($-\\infty$).`,
      },
      {
        id: 'elg5-infinite-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Asymptote** 🔽

A graph has a vertical asymptote at $x = 2$. To the left of $x=2$ the curve dives toward the bottom of the screen; to the right it climbs toward the top.`,
        exercise: {
          dropdowns: [
            { label: '$\\lim_{x \\to 2^-} f(x) =$', options: ['$-\\infty$', '$+\\infty$', '$2$', '$0$'] },
            { label: '$\\lim_{x \\to 2^+} f(x) =$', options: ['$+\\infty$', '$-\\infty$', '$2$', '$0$'] },
            { label: 'The line $x = 2$ is a:', options: ['vertical asymptote', 'horizontal asymptote', 'removable hole', 'jump'] },
          ],
          correctAnswers: ['$-\\infty$', '$+\\infty$', 'vertical asymptote'],
          hint1: 'The left side heads to the bottom of the screen — that is $-\\infty$.',
          hint2: 'The right side heads to the top of the screen — that is $+\\infty$.',
          hint3: 'A vertical line the curve hugs while blowing up is a vertical asymptote.',
          explanation: 'Left side dives to $-\\infty$, right side climbs to $+\\infty$, and the line $x=2$ that the curve blows up around is a vertical asymptote.',
        },
      },
      {
        id: 'elg5-both-up-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Both sides of a curve shoot up toward the top of the screen near $x = -3$. The two-sided limit $\\lim_{x \\to -3} f(x)$ is best written as:',
              options: ['$+\\infty$', '$-\\infty$', '$-3$', 'a finite number'],
              correctAnswer: 0,
              explanation: 'When both sides blow up in the same upward direction, we write the two-sided infinite limit as $+\\infty$ — it is unbounded above on both sides.',
            },
            {
              question: 'For $f(x) = \\frac{1}{x}$, why does $\\lim_{x \\to 0} f(x)$ fail to exist even as $\\pm\\infty$?',
              options: [
                'The left side goes to $-\\infty$ while the right side goes to $+\\infty$ — opposite directions',
                'Both sides go to $+\\infty$',
                'The function is $0$ at $x=0$',
                'There is a removable hole',
              ],
              correctAnswer: 0,
              explanation: 'The one-sided infinite limits disagree ($-\\infty$ vs. $+\\infty$), so there is no single two-sided behavior to report — not even $\\pm\\infty$.',
            },
            {
              question: 'Writing $\\lim_{x \\to a} f(x) = +\\infty$ means:',
              options: [
                'The limit does not exist as a finite number; the curve grows without bound',
                'The limit equals the real number "infinity"',
                'The function value $f(a)$ is large',
                'The curve has a horizontal asymptote',
              ],
              correctAnswer: 0,
              explanation: '$+\\infty$ is a description of unbounded upward growth, not a finite value. The limit still does not exist as a real number, but the notation tells us the direction.',
            },
          ],
        },
      },
      {
        id: 'elg5-blowup-input',
        type: 'input-boxes' as const,
        content: `**Count the Asymptotes** 🧮

A rational function's graph hugs two vertical dashed lines, at $x = -2$ and at $x = 4$, blowing up to infinity near each one. Everywhere else the curve is smooth.

**1)** How many vertical asymptotes does this graph have? Enter the number.
**2)** At a vertical asymptote, the curve gets arbitrarily close to the dashed line but never touches it. Enter $1$ if that statement is true, or $0$ if false.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '1'],
          hint1: 'Each dashed line the curve blows up around is one vertical asymptote.',
          hint2: 'There are dashed lines at $x=-2$ and $x=4$ — count them.',
          hint3: 'By definition, the curve approaches a vertical asymptote without ever crossing it, so the statement is true ($1$).',
          explanation: '1) Two dashed lines ($x=-2$ and $x=4$) give two vertical asymptotes.  2) True — the curve approaches but never reaches a vertical asymptote, so enter $1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-graphically',
    sections: [
      {
        id: 'elg6-intro',
        type: 'text' as const,
        content: `# 📈 Evaluating Limits Graphically

**Part 6 of 7 — Limits at Infinity & Horizontal Asymptotes**

---

> 🔑 **The Idea:** Now $x$ itself runs off to $\\pm\\infty$. We ask what height the curve **levels off to** at the far right and far left of the graph. A height it levels off to is a **horizontal asymptote**.`,
      },
      {
        id: 'elg6-end-behavior',
        type: 'text' as const,
        content: `## End Behavior

These limits read the **far ends** of the graph:

$$\\lim_{x \\to +\\infty} f(x) = L \\quad\\text{(far right levels off to height } L\\text{)}$$
$$\\lim_{x \\to -\\infty} f(x) = L \\quad\\text{(far left levels off to height } L\\text{)}$$

If the curve flattens toward a horizontal line $y = L$ as you travel outward, that line is a **horizontal asymptote**.

### Example

For $f(x) = \\dfrac{1}{x}$, the curve flattens toward the $x$-axis at both ends:

$$\\lim_{x \\to +\\infty} \\frac{1}{x} = 0 \\qquad \\lim_{x \\to -\\infty} \\frac{1}{x} = 0$$

So $y = 0$ is a horizontal asymptote.

> 💡 **Direction of approach is allowed to differ.** A curve might level off to $y=2$ from **above** on the right and from **below** on the left — both still give a limit of $2$. The limit reports the height, not the side.`,
      },
      {
        id: 'elg6-end-input',
        type: 'input-boxes' as const,
        content: `**Read the Ends** 🧮

A graph levels off toward the horizontal line $y = 3$ as $x \\to +\\infty$, and levels off toward the line $y = -4$ as $x \\to -\\infty$.

**1)** $\\lim_{x \\to +\\infty} f(x) = \\,?$
**2)** $\\lim_{x \\to -\\infty} f(x) = \\,?$
**3)** How many horizontal asymptotes does this graph have? Enter the number.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '-4', '2'],
          hint1: 'The far-right end flattens to height $3$.',
          hint2: 'The far-left end flattens to height $-4$.',
          hint3: 'Two different leveling-off heights ($3$ and $-4$) give two horizontal asymptotes.',
          explanation: '1) Far right ⇒ $3$.  2) Far left ⇒ $-4$.  3) The two distinct asymptote lines $y=3$ and $y=-4$ are two horizontal asymptotes.',
        },
      },
      {
        id: 'elg6-no-ha',
        type: 'text' as const,
        content: `## When There's No Horizontal Asymptote

Not every end behavior is a finite height:

- If the curve keeps climbing, $\\lim_{x\\to+\\infty} f(x) = +\\infty$ (no horizontal asymptote on the right). Think of $f(x)=x^2$.
- If the curve keeps falling, the limit is $-\\infty$.

So end behavior comes in three flavors: levels off to a finite $L$ (horizontal asymptote), or blows up to $+\\infty$ or $-\\infty$ (no horizontal asymptote that side).

> ⚠️ **Vertical vs. horizontal asymptotes are different beasts.**
> - **Vertical** asymptote: $x \\to a$ (finite) and $f \\to \\pm\\infty$. *(Part 5)*
> - **Horizontal** asymptote: $x \\to \\pm\\infty$ and $f \\to L$ (finite). *(this Part)*
> Mixing these up is one of the most common AP exam errors.`,
      },
      {
        id: 'elg6-asymptote-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify Each Asymptote** 🔽

Match each behavior to the correct asymptote type or limit.`,
        exercise: {
          dropdowns: [
            { label: 'Curve flattens to $y=2$ as $x\\to+\\infty$:', options: ['horizontal asymptote $y=2$', 'vertical asymptote $x=2$', 'removable hole', 'jump'] },
            { label: 'Curve blows up to $+\\infty$ as $x\\to 5$:', options: ['vertical asymptote $x=5$', 'horizontal asymptote $y=5$', 'limit $=5$', 'no asymptote'] },
            { label: 'As $x\\to-\\infty$ the curve keeps falling forever:', options: ['$-\\infty$', '$+\\infty$', '$0$', 'a finite height'] },
          ],
          correctAnswers: ['horizontal asymptote $y=2$', 'vertical asymptote $x=5$', '$-\\infty$'],
          hint1: 'Leveling off as $x\\to\\pm\\infty$ ⇒ horizontal asymptote at that height.',
          hint2: 'Blowing up at a finite $x$-value ⇒ vertical asymptote at that $x$.',
          hint3: 'A curve that falls without bound has limit $-\\infty$ and no horizontal asymptote on that side.',
          explanation: 'Row 1: leveling off as $x\\to+\\infty$ gives a horizontal asymptote $y=2$. Row 2: blowing up at $x=5$ gives a vertical asymptote $x=5$. Row 3: falling forever ⇒ limit $-\\infty$.',
        },
      },
      {
        id: 'elg6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A horizontal asymptote is read from which kind of limit?',
              options: [
                '$\\lim_{x \\to \\pm\\infty} f(x) = L$ (finite)',
                '$\\lim_{x \\to a} f(x) = \\pm\\infty$',
                '$f(a) = L$',
                'A one-sided limit at a hole',
              ],
              correctAnswer: 0,
              explanation: 'Horizontal asymptotes describe end behavior: $x$ runs to $\\pm\\infty$ and the height settles at a finite $L$.',
            },
            {
              question: 'If $\\lim_{x \\to +\\infty} f(x) = +\\infty$, the graph on the far right:',
              options: [
                'climbs without bound — no horizontal asymptote there',
                'flattens to a horizontal line',
                'has a vertical asymptote',
                'returns to the $x$-axis',
              ],
              correctAnswer: 0,
              explanation: 'An infinite limit at infinity means the curve keeps rising, so there is no finite height to level off to and no horizontal asymptote on that side.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-graphically',
    sections: [
      {
        id: 'elg7-intro',
        type: 'text' as const,
        content: `# 📈 Evaluating Limits Graphically

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now read every kind of limit off a graph: two-sided, one-sided, removable holes, jumps, infinite limits at vertical asymptotes, and limits at infinity. Let's put it all together.`,
      },
      {
        id: 'elg7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| You see... | You read... |
|------------|-------------|
| Curve approaches the same height $L$ from both sides | $\\lim_{x\\to a} f(x) = L$ |
| Open hole at $(a,L)$, both sides reach $L$ | limit $=L$; $f(a)$ undefined (removable) |
| Solid dot at $(a, c)$ but sides reach $L\\ne c$ | limit $=L$, $f(a)=c$ (removable disagreement) |
| Step / jump: left $\\ne$ right | two-sided limit **DNE** |
| Curve hugs vertical line $x=a$, blows up | $\\lim_{x\\to a} f(x) = \\pm\\infty$ (vertical asymptote) |
| Far end flattens to $y=L$ | $\\lim_{x\\to\\pm\\infty} f(x) = L$ (horizontal asymptote) |

> 🔑 **The master rule:** read the **left** limit, read the **right** limit, compare. Read the **solid dot** for $f(a)$. Never let a dot, a hole, or the value at $a$ change what the *curve* is approaching.`,
      },
      {
        id: 'elg7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A curve approaches height $-2$ from both sides of $x=4$, with an open hole at $(4,-2)$ and a solid dot at $(4, 5)$. What is $\\lim_{x \\to 4} f(x)$?',
              options: ['$-2$', '$5$', 'Does not exist', '$4$'],
              correctAnswer: 0,
              explanation: 'Both sides approach $-2$, so the limit is $-2$. The solid dot at $5$ is $f(4)$, not the limit — this is a removable discontinuity.',
            },
            {
              question: 'For that same graph, what is $f(4)$?',
              options: ['$5$', '$-2$', 'Undefined', '$4$'],
              correctAnswer: 0,
              explanation: 'The solid dot pins the function value at $(4, 5)$, so $f(4) = 5$, independent of the limit being $-2$.',
            },
            {
              question: 'Near $x = 1$, the left side of a curve climbs to $+\\infty$ and the right side also climbs to $+\\infty$. The line $x=1$ is a __ and the two-sided limit is __.',
              options: [
                'vertical asymptote; $+\\infty$',
                'horizontal asymptote; $0$',
                'removable hole; $1$',
                'jump; DNE (finite)',
              ],
              correctAnswer: 0,
              explanation: 'Both sides blow up to $+\\infty$, so $x=1$ is a vertical asymptote and $\\lim_{x\\to 1} f(x) = +\\infty$.',
            },
          ],
        },
      },
      {
        id: 'elg7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Read the Whole Graph** 🧮

A piecewise graph does the following:
- For $x < 0$, the curve rises toward height $1$ (open hole at $(0,1)$).
- For $x > 0$, the curve rises toward height $1$ as well (open hole at $(0,1)$), and a solid dot sits at $(0, -3)$.
- As $x \\to +\\infty$, the curve levels off toward $y = 2$.

**1)** $\\lim_{x \\to 0} f(x) = \\,?$
**2)** $f(0) = \\,?$
**3)** $\\lim_{x \\to +\\infty} f(x) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '-3', '2'],
          hint1: 'Both sides approach height $1$ at $x=0$, so the two-sided limit is $1$.',
          hint2: 'The solid dot at $(0,-3)$ gives the function value $f(0)=-3$.',
          hint3: 'The far-right end flattens toward $y=2$, so the limit at $+\\infty$ is $2$.',
          explanation: '1) Both sides reach $1$ ⇒ limit $=1$.  2) Solid dot ⇒ $f(0)=-3$ (removable discontinuity).  3) Far-right levels off ⇒ $\\lim_{x\\to+\\infty}f(x)=2$.',
        },
      },
      {
        id: 'elg7-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Diagnose Each Feature** 🔽

A graph has: a jump at $x=-1$ (left $=2$, right $=5$), a vertical asymptote at $x=3$ (both sides $\\to +\\infty$), and levels off to $y=0$ as $x\\to-\\infty$.`,
        exercise: {
          dropdowns: [
            { label: '$\\lim_{x \\to -1} f(x) =$', options: ['DNE (jump)', '$2$', '$5$', '$3.5$'] },
            { label: '$\\lim_{x \\to 3} f(x) =$', options: ['$+\\infty$', '$3$', '$0$', 'a finite number'] },
            { label: '$\\lim_{x \\to -\\infty} f(x) =$', options: ['$0$', '$-\\infty$', '$3$', 'DNE'] },
            { label: 'The line $x=3$ is a:', options: ['vertical asymptote', 'horizontal asymptote', 'removable hole', 'jump'] },
          ],
          correctAnswers: ['DNE (jump)', '$+\\infty$', '$0$', 'vertical asymptote'],
          hint1: 'At $x=-1$ the sides are $2$ and $5$ — different, so the two-sided limit does not exist.',
          hint2: 'At $x=3$ both sides blow up to $+\\infty$, so the two-sided limit is $+\\infty$.',
          hint3: 'Leveling off to $y=0$ at the far left gives $\\lim_{x\\to-\\infty}f(x)=0$; the blow-up line $x=3$ is a vertical asymptote.',
          explanation: 'Jump at $x=-1$ ⇒ left $2 \\ne$ right $5$ ⇒ DNE. At $x=3$ both sides $\\to+\\infty$ ⇒ limit $+\\infty$ and $x=3$ is a vertical asymptote. Far-left levels to $0$ ⇒ limit at $-\\infty$ is $0$.',
        },
      },
      {
        id: 'elg7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A two-sided limit $\\lim_{x \\to a} f(x)$ exists if and only if:',
              options: [
                'The left-hand and right-hand limits are equal and finite',
                'The function is defined at $x = a$',
                'There is a solid dot at $x = a$',
                'The graph has no holes anywhere',
              ],
              correctAnswer: 0,
              explanation: 'The existence theorem: the two-sided limit exists exactly when both one-sided limits agree on the same finite value. Whether $f(a)$ is defined is irrelevant.',
            },
            {
              question: 'A curve has an open hole at $(2, 6)$, both sides approach $6$, and a solid dot sits at $(2, 1)$. Which statement is correct?',
              options: [
                '$\\lim_{x \\to 2} f(x) = 6$ and $f(2) = 1$',
                '$\\lim_{x \\to 2} f(x) = 1$ and $f(2) = 6$',
                'The limit does not exist',
                '$\\lim_{x \\to 2} f(x) = f(2) = 6$',
              ],
              correctAnswer: 0,
              explanation: 'The curve approaches $6$ from both sides, so the limit is $6$. The solid dot gives $f(2)=1$. They disagree — a removable discontinuity.',
            },
            {
              question: 'A graph levels off toward $y = -1$ as $x \\to +\\infty$ and blows up to $+\\infty$ at $x = 0$. The line $y = -1$ is a __ and the line $x = 0$ is a __.',
              options: [
                'horizontal asymptote; vertical asymptote',
                'vertical asymptote; horizontal asymptote',
                'horizontal asymptote; removable hole',
                'jump; vertical asymptote',
              ],
              correctAnswer: 0,
              explanation: 'Leveling off as $x\\to+\\infty$ to a finite height gives the horizontal asymptote $y=-1$; blowing up at the finite $x$-value $0$ gives the vertical asymptote $x=0$.',
            },
          ],
        },
      },
    ],
  },
]
