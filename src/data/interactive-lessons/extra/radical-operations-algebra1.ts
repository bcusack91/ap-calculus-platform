import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Adding and Subtracting Radicals (Algebra 1).
 * Registry key / DB Topic.slug: 'radical-operations-algebra1'.
 * 5 parts, gold-standard structure: radical vocabulary & like radicals →
 * combining like radicals → simplify-first to reveal like radicals →
 * multi-step problems & applications → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every simplification and root was re-checked by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'radical-operations-algebra1',
    sections: [
      {
        id: 'rad1-intro',
        type: 'text' as const,
        content: `# √ Adding and Subtracting Radicals

**Part 1 of 5 — Radicals and "Like" Terms**

---

### Topics in This Part

| Section |
|---------|
| Anatomy of a Radical |
| What Makes Radicals "Like" |
| Spotting Like vs. Unlike Radicals |

> 🔑 **Key Concept:** You can only add or subtract radicals that are **alike** — same *index* and same *radicand*. It works exactly like combining $3x + 5x = 8x$: you add the numbers in front and keep the radical the same.`,
      },
      {
        id: 'rad1-anatomy',
        type: 'text' as const,
        content: `## Anatomy of a Radical

Every radical expression has three parts:

$$\\underset{\\text{coefficient}}{3}\\,\\overset{\\text{index}}{\\sqrt[2]{\\underset{\\text{radicand}}{7}}}$$

| Part | What it is | Example in $5\\sqrt{2}$ |
|------|-----------|------------------------|
| **Coefficient** | the number multiplying the radical | $5$ |
| **Index** | which root (2 = square root) | $2$ (hidden — square root) |
| **Radicand** | the number *inside* the radical | $2$ |

When no number is written in front, the coefficient is $1$: $\\sqrt{2} = 1\\sqrt{2}$.

When no small index is written, it's a **square root** (index $2$): $\\sqrt{2} = \\sqrt[2]{2}$.

> 💡 Think of $\\sqrt{2}$ as a single "unit," like the variable $x$. Then $5\\sqrt{2}$ is just "5 of those units."`,
      },
      {
        id: 'rad1-anatomy-check',
        type: 'dropdown-select' as const,
        content: `**Name the Parts** 🔽

Look at the radical $7\\sqrt{3}$ and identify each piece.`,
        exercise: {
          dropdowns: [
            { label: 'The coefficient is:', options: ['$7$', '$3$', '$2$', '$21$'] },
            { label: 'The radicand is:', options: ['$3$', '$7$', '$2$', '$\\sqrt{3}$'] },
            { label: 'The index is:', options: ['$2$', '$3$', '$7$', '$1$'] },
          ],
          correctAnswers: ['$7$', '$3$', '$2$'],
          hint1: 'The coefficient is the number written *in front of* the radical sign.',
          hint2: 'The radicand is the number *inside* (under) the radical sign.',
          hint3: 'No small number on the radical means a square root, which is index $2$.',
          explanation: 'In $7\\sqrt{3}$: coefficient $= 7$ (out front), radicand $= 3$ (inside), index $= 2$ (square root, since none is written).',
        },
      },
      {
        id: 'rad1-like',
        type: 'text' as const,
        content: `## What Makes Radicals "Like"

Two radicals are **like radicals** when they have the **same index** *and* the **same radicand**. The coefficient out front does **not** have to match.

| Pair | Like? | Why |
|------|-------|-----|
| $3\\sqrt{5}$ and $8\\sqrt{5}$ | ✅ Yes | same radicand $5$, same index $2$ |
| $2\\sqrt{7}$ and $-\\sqrt{7}$ | ✅ Yes | both $\\sqrt{7}$ (coefficients differ, that's fine) |
| $4\\sqrt{3}$ and $4\\sqrt{2}$ | ❌ No | radicands differ ($3 \\ne 2$) |
| $\\sqrt{5}$ and $\\sqrt[3]{5}$ | ❌ No | indices differ ($2 \\ne 3$) |

> 🔑 **The Rule:** Same index **and** same radicand $\\Rightarrow$ like radicals $\\Rightarrow$ you can combine them. Otherwise, leave them separate.`,
      },
      {
        id: 'rad1-like-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which pair are LIKE radicals?',
              options: ['$6\\sqrt{2}$ and $9\\sqrt{2}$', '$6\\sqrt{2}$ and $6\\sqrt{3}$', '$\\sqrt{2}$ and $\\sqrt[3]{2}$', '$5\\sqrt{10}$ and $5\\sqrt{5}$'],
              correctAnswer: 0,
              explanation: '$6\\sqrt{2}$ and $9\\sqrt{2}$ share the same radicand ($2$) and index ($2$). Different coefficients are allowed. The others differ in radicand or index.',
            },
            {
              question: 'Why are $4\\sqrt{6}$ and $4\\sqrt{3}$ NOT like radicals?',
              options: ['Their radicands are different', 'Their coefficients are different', 'Their indices are different', 'They are actually like radicals'],
              correctAnswer: 0,
              explanation: 'Both have coefficient $4$ and index $2$, but the radicands are $6$ and $3$. Different radicands means they are unlike — you cannot combine them.',
            },
          ],
        },
      },
      {
        id: 'rad1-sort-drill',
        type: 'dropdown-select' as const,
        content: `**Sort Them** 🔽

For each pair, decide whether they are *like* or *unlike* radicals.`,
        exercise: {
          dropdowns: [
            { label: '$2\\sqrt{11}$ and $7\\sqrt{11}$', options: ['Like', 'Unlike'] },
            { label: '$5\\sqrt{2}$ and $5\\sqrt{8}$', options: ['Like', 'Unlike'] },
            { label: '$\\sqrt[3]{4}$ and $9\\sqrt[3]{4}$', options: ['Like', 'Unlike'] },
            { label: '$\\sqrt{3}$ and $\\sqrt[3]{3}$', options: ['Like', 'Unlike'] },
          ],
          correctAnswers: ['Like', 'Unlike', 'Like', 'Unlike'],
          hint1: 'Compare the radicand (inside number) and the index (which root) — ignore the coefficients.',
          hint2: '$\\sqrt{8}$ looks unlike $\\sqrt{2}$ *as written*. (In Part 3 you will see $\\sqrt{8}$ can be simplified — but here, judge them as written.)',
          hint3: 'Same index AND same radicand = Like. Any difference = Unlike.',
          explanation: '1) Like — both $\\sqrt{11}$. 2) Unlike — radicands $2$ vs $8$ (as written). 3) Like — both cube roots of $4$. 4) Unlike — index $2$ vs index $3$.',
        },
      },
      {
        id: 'rad1-wrap',
        type: 'text' as const,
        content: `## Why This Matters

You can **only** add or subtract **like** radicals. Trying to combine unlike radicals is the #1 error in this whole topic.

> ⚠️ **Watch out:** $\\sqrt{2} + \\sqrt{3} \\ne \\sqrt{5}$. You cannot add the radicands! ($\\sqrt{2}+\\sqrt{3} \\approx 1.41 + 1.73 = 3.15$, but $\\sqrt{5} \\approx 2.24$.) They are unlike, so $\\sqrt{2}+\\sqrt{3}$ stays exactly as it is.

Now that you can spot like radicals, Part 2 shows you how to actually combine them.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'radical-operations-algebra1',
    sections: [
      {
        id: 'rad2-intro',
        type: 'text' as const,
        content: `# √ Adding and Subtracting Radicals

**Part 2 of 5 — Combining Like Radicals**

---

> 🔑 **The Idea:** To combine like radicals, **add (or subtract) the coefficients** and **keep the radical the same**. The radicand never changes.`,
      },
      {
        id: 'rad2-method',
        type: 'text' as const,
        content: `## The Method

Treat the radical like a variable. Compare:

$$3x + 5x = 8x \\qquad\\Longleftrightarrow\\qquad 3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$$

You add the numbers in front; the "$\\sqrt{2}$" rides along unchanged, just like the "$x$."

### Worked Example: $3\\sqrt{2} + 5\\sqrt{2}$

Both terms are $\\sqrt{2}$, so add the coefficients $3 + 5 = 8$:

$$3\\sqrt{2} + 5\\sqrt{2} = (3+5)\\sqrt{2} = 8\\sqrt{2}$$

### Worked Example: $9\\sqrt{7} - 4\\sqrt{7}$

Subtract the coefficients $9 - 4 = 5$:

$$9\\sqrt{7} - 4\\sqrt{7} = (9-4)\\sqrt{7} = 5\\sqrt{7}$$

> ⚠️ **Never** add the radicands. $3\\sqrt{2} + 5\\sqrt{2}$ is $8\\sqrt{2}$, **not** $8\\sqrt{4}$ and definitely not $\\sqrt{10}$.`,
      },
      {
        id: 'rad2-method-check',
        type: 'dropdown-select' as const,
        content: `**Fill in the Blanks** 🔽

Combine $6\\sqrt{3} + 2\\sqrt{3}$, paralleling $6x + 2x$.`,
        exercise: {
          dropdowns: [
            { label: 'Add the coefficients:', options: ['$6 + 2 = 8$', '$6 \\cdot 2 = 12$', '$6 + 2 = 8$, plus add radicands', '$3 + 3 = 6$'] },
            { label: 'The radical stays:', options: ['$\\sqrt{3}$', '$\\sqrt{6}$', '$\\sqrt{9}$', '$\\sqrt{8}$'] },
            { label: 'So the answer is:', options: ['$8\\sqrt{3}$', '$8\\sqrt{6}$', '$12\\sqrt{3}$', '$8\\sqrt{9}$'] },
          ],
          correctAnswers: ['$6 + 2 = 8$', '$\\sqrt{3}$', '$8\\sqrt{3}$'],
          hint1: 'Just like $6x + 2x = 8x$, add the numbers in front: $6 + 2 = 8$.',
          hint2: 'The radicand never changes when you add — it stays $\\sqrt{3}$.',
          hint3: 'Coefficient $8$ in front of the unchanged $\\sqrt{3}$ gives $8\\sqrt{3}$.',
          explanation: '$6\\sqrt{3} + 2\\sqrt{3} = (6+2)\\sqrt{3} = 8\\sqrt{3}$. Add coefficients, keep the radical.',
        },
      },
      {
        id: 'rad2-coeff-one',
        type: 'text' as const,
        content: `## The Invisible Coefficient of 1

When a radical has no number in front, its coefficient is $1$:

$$\\sqrt{6} + \\sqrt{6} = 1\\sqrt{6} + 1\\sqrt{6} = 2\\sqrt{6}$$

$$5\\sqrt{3} - \\sqrt{3} = 5\\sqrt{3} - 1\\sqrt{3} = 4\\sqrt{3}$$

> 💡 Forgetting the hidden $1$ is a classic slip. $5\\sqrt{3} - \\sqrt{3}$ is $4\\sqrt{3}$, **not** $5\\sqrt{3}$.`,
      },
      {
        id: 'rad2-combine-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$4\\sqrt{5} + 6\\sqrt{5} = $',
              options: ['$10\\sqrt{5}$', '$10\\sqrt{10}$', '$24\\sqrt{5}$', '$\\sqrt{10}$'],
              correctAnswer: 0,
              explanation: 'Like radicals: add the coefficients $4 + 6 = 10$ and keep $\\sqrt{5}$. Answer: $10\\sqrt{5}$. The radicand stays $5$.',
            },
            {
              question: '$8\\sqrt{3} - \\sqrt{3} = $',
              options: ['$7\\sqrt{3}$', '$8$', '$7$', '$8\\sqrt{3}$'],
              correctAnswer: 0,
              explanation: 'The lone $\\sqrt{3}$ has coefficient $1$, so $8 - 1 = 7$, giving $7\\sqrt{3}$.',
            },
          ],
        },
      },
      {
        id: 'rad2-unlike',
        type: 'text' as const,
        content: `## When You Can't Combine

If the radicals are **unlike**, you simply leave the expression as it is — it's already simplified.

$$2\\sqrt{3} + 5\\sqrt{7} \\quad\\text{stays}\\quad 2\\sqrt{3} + 5\\sqrt{7}$$

There is nothing to add: $\\sqrt{3}$ and $\\sqrt{7}$ are different "units."

### Mixed Example: $4\\sqrt{2} + 3\\sqrt{5} - \\sqrt{2}$

Group only the **like** terms ($\\sqrt{2}$ with $\\sqrt{2}$):

$$\\underbrace{4\\sqrt{2} - \\sqrt{2}}_{=\\,3\\sqrt{2}} + 3\\sqrt{5} = 3\\sqrt{2} + 3\\sqrt{5}$$

The $3\\sqrt{5}$ has no partner, so it stays. Final answer: $3\\sqrt{2} + 3\\sqrt{5}$.

> 💡 Strategy: it helps to *color-code* or underline like radicals before combining, just like collecting like terms in a polynomial.`,
      },
      {
        id: 'rad2-drill',
        type: 'input-boxes' as const,
        content: `**Combine the Coefficients** 🧮

Each answer has the form (coefficient)$\\sqrt{\\text{radicand}}$. Enter just the **coefficient** (the number in front).

**1)** $7\\sqrt{2} + 2\\sqrt{2} = \\;?\\,\\sqrt{2}$
**2)** $10\\sqrt{6} - 3\\sqrt{6} = \\;?\\,\\sqrt{6}$
**3)** $\\sqrt{11} + \\sqrt{11} + \\sqrt{11} = \\;?\\,\\sqrt{11}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '7', '3'],
          hint1: '$7 + 2 = 9$, so the answer is $9\\sqrt{2}$. Enter $9$.',
          hint2: '$10 - 3 = 7$, giving $7\\sqrt{6}$.',
          hint3: 'Each $\\sqrt{11}$ has coefficient $1$: $1 + 1 + 1 = 3$, so $3\\sqrt{11}$.',
          explanation: '1) $7+2 = 9 \\Rightarrow 9\\sqrt{2}$. 2) $10-3 = 7 \\Rightarrow 7\\sqrt{6}$. 3) $1+1+1 = 3 \\Rightarrow 3\\sqrt{11}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'radical-operations-algebra1',
    sections: [
      {
        id: 'rad3-intro',
        type: 'text' as const,
        content: `# √ Adding and Subtracting Radicals

**Part 3 of 5 — Simplify First, Then Combine**

---

> 🔑 **The Big Insight:** Radicals that *look* unlike are often secretly **like** — once you simplify them. Always simplify each radical *before* deciding whether terms combine.`,
      },
      {
        id: 'rad3-simplify-review',
        type: 'text' as const,
        content: `## Simplifying a Radical (Quick Review)

To simplify $\\sqrt{n}$, pull out the largest **perfect-square factor**:

$$\\sqrt{a \\cdot b} = \\sqrt{a}\\cdot\\sqrt{b}$$

| Radical | Perfect-square factor | Simplified |
|---------|----------------------|-----------|
| $\\sqrt{8}$ | $4\\cdot 2$ | $\\sqrt{4}\\cdot\\sqrt{2} = 2\\sqrt{2}$ |
| $\\sqrt{12}$ | $4\\cdot 3$ | $\\sqrt{4}\\cdot\\sqrt{3} = 2\\sqrt{3}$ |
| $\\sqrt{18}$ | $9\\cdot 2$ | $\\sqrt{9}\\cdot\\sqrt{2} = 3\\sqrt{2}$ |
| $\\sqrt{50}$ | $25\\cdot 2$ | $\\sqrt{25}\\cdot\\sqrt{2} = 5\\sqrt{2}$ |

> 💡 **Perfect squares to memorize:** $4, 9, 16, 25, 36, 49, 64, 81, 100$. Look for the **largest** one that divides your radicand.`,
      },
      {
        id: 'rad3-simplify-check',
        type: 'input-boxes' as const,
        content: `**Simplify Each Radical** 🧮

Each simplifies to (coefficient)$\\sqrt{2}$. Enter just the **coefficient** out front.

**1)** $\\sqrt{8} = \\;?\\,\\sqrt{2}$
**2)** $\\sqrt{32} = \\;?\\,\\sqrt{2}$
**3)** $\\sqrt{72} = \\;?\\,\\sqrt{2}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '4', '6'],
          hint1: '$\\sqrt{8} = \\sqrt{4\\cdot 2} = 2\\sqrt{2}$.',
          hint2: '$\\sqrt{32} = \\sqrt{16\\cdot 2} = 4\\sqrt{2}$.',
          hint3: '$\\sqrt{72} = \\sqrt{36\\cdot 2} = 6\\sqrt{2}$. Use the largest perfect square ($36$), not just $4$.',
          explanation: '1) $\\sqrt{8}=2\\sqrt{2}$. 2) $\\sqrt{32}=4\\sqrt{2}$. 3) $\\sqrt{72}=6\\sqrt{2}$. All become multiples of $\\sqrt{2}$ — so they are secretly like radicals!',
        },
      },
      {
        id: 'rad3-reveal',
        type: 'text' as const,
        content: `## The Hidden-Like-Radicals Trick

### Worked Example: $\\sqrt{8} + \\sqrt{18}$

At first glance these look unlike. Simplify each:

$$\\sqrt{8} = 2\\sqrt{2} \\qquad \\sqrt{18} = 3\\sqrt{2}$$

Now they're **both** $\\sqrt{2}$ — like radicals! Combine:

$$2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$$

### Worked Example: $\\sqrt{50} - \\sqrt{8}$

$$\\sqrt{50} = 5\\sqrt{2}, \\qquad \\sqrt{8} = 2\\sqrt{2}$$

$$5\\sqrt{2} - 2\\sqrt{2} = 3\\sqrt{2}$$

> 🔑 **Golden Rule:** Simplify **every** radical *first*. Only then check for like radicals and combine.`,
      },
      {
        id: 'rad3-reveal-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\sqrt{12} + \\sqrt{27}$.',
              options: ['$5\\sqrt{3}$', '$\\sqrt{39}$', '$6\\sqrt{3}$', '$5\\sqrt{6}$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{12} = 2\\sqrt{3}$ and $\\sqrt{27} = 3\\sqrt{3}$. Then $2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$.',
            },
            {
              question: 'Simplify $\\sqrt{45} - \\sqrt{20}$.',
              options: ['$\\sqrt{5}$', '$\\sqrt{25}$', '$5$', '$\\sqrt{65}$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{45} = 3\\sqrt{5}$ and $\\sqrt{20} = 2\\sqrt{5}$. Then $3\\sqrt{5} - 2\\sqrt{5} = 1\\sqrt{5} = \\sqrt{5}$.',
            },
          ],
        },
      },
      {
        id: 'rad3-stays-unlike',
        type: 'text' as const,
        content: `## Sometimes They Stay Unlike

Simplifying doesn't *always* make radicals match. If the simplified radicands differ, leave the terms separate.

### Worked Example: $\\sqrt{12} + \\sqrt{50}$

$$\\sqrt{12} = 2\\sqrt{3}, \\qquad \\sqrt{50} = 5\\sqrt{2}$$

Now we have $2\\sqrt{3} + 5\\sqrt{2}$ — radicands $3$ and $2$ are **different**, so this is the final simplified answer. You can't combine them.

> ⚠️ Don't force a combination. $2\\sqrt{3} + 5\\sqrt{2}$ is fully simplified, even though it has two terms.`,
      },
      {
        id: 'rad3-drill',
        type: 'input-boxes' as const,
        content: `**Simplify, Then Combine** 🧮

Each result is (coefficient)$\\sqrt{r}$. Enter the **coefficient** out front of the final answer.

**1)** $\\sqrt{18} + \\sqrt{2} = \\;?\\,\\sqrt{2}$
**2)** $\\sqrt{75} - \\sqrt{12} = \\;?\\,\\sqrt{3}$
**3)** $\\sqrt{32} + \\sqrt{8} = \\;?\\,\\sqrt{2}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '3', '6'],
          hint1: '$\\sqrt{18} = 3\\sqrt{2}$ and $\\sqrt{2} = 1\\sqrt{2}$, so $3 + 1 = 4$.',
          hint2: '$\\sqrt{75} = 5\\sqrt{3}$ and $\\sqrt{12} = 2\\sqrt{3}$, so $5 - 2 = 3$.',
          hint3: '$\\sqrt{32} = 4\\sqrt{2}$ and $\\sqrt{8} = 2\\sqrt{2}$, so $4 + 2 = 6$.',
          explanation: '1) $3\\sqrt{2}+1\\sqrt{2}=4\\sqrt{2}$. 2) $5\\sqrt{3}-2\\sqrt{3}=3\\sqrt{3}$. 3) $4\\sqrt{2}+2\\sqrt{2}=6\\sqrt{2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'radical-operations-algebra1',
    sections: [
      {
        id: 'rad4-intro',
        type: 'text' as const,
        content: `# √ Adding and Subtracting Radicals

**Part 4 of 5 — Multi-Term Problems & Applications**

---

> 🔑 **Now we level up:** three or more terms, two different radicands at once, coefficients out front of an already-simplifiable radical, and a real geometry application.`,
      },
      {
        id: 'rad4-multiterm',
        type: 'text' as const,
        content: `## Multiple Radicands at Once

When an expression mixes two (or more) radicands, simplify everything, then **group like with like**.

### Worked Example: $\\sqrt{8} + \\sqrt{27} + \\sqrt{2} + \\sqrt{12}$

Simplify each term:

$$\\sqrt{8}=2\\sqrt{2},\\quad \\sqrt{27}=3\\sqrt{3},\\quad \\sqrt{2}=1\\sqrt{2},\\quad \\sqrt{12}=2\\sqrt{3}$$

Group the $\\sqrt{2}$'s and the $\\sqrt{3}$'s separately:

$$\\underbrace{(2\\sqrt{2}+\\sqrt{2})}_{=\\,3\\sqrt{2}} + \\underbrace{(3\\sqrt{3}+2\\sqrt{3})}_{=\\,5\\sqrt{3}} = 3\\sqrt{2} + 5\\sqrt{3}$$

The two groups have different radicands, so the answer keeps both terms: $3\\sqrt{2} + 5\\sqrt{3}$.`,
      },
      {
        id: 'rad4-multiterm-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\sqrt{12} + \\sqrt{8} + \\sqrt{3}$.',
              options: ['$3\\sqrt{3} + 2\\sqrt{2}$', '$\\sqrt{23}$', '$5\\sqrt{3} + 2\\sqrt{2}$', '$2\\sqrt{3} + 2\\sqrt{2}$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{12}=2\\sqrt{3}$, $\\sqrt{8}=2\\sqrt{2}$, $\\sqrt{3}=1\\sqrt{3}$. Group: $(2\\sqrt3+1\\sqrt3) + 2\\sqrt2 = 3\\sqrt{3} + 2\\sqrt{2}$. The two radicands differ, so both terms remain.',
            },
            {
              question: 'In $4\\sqrt{2} + 3\\sqrt{5}$, how many terms are in the simplified answer?',
              options: ['Two — the radicands differ', 'One — they combine to $7\\sqrt{7}$', 'One — they combine to $7\\sqrt{10}$', 'Zero — they cancel'],
              correctAnswer: 0,
              explanation: '$\\sqrt{2}$ and $\\sqrt{5}$ are unlike (radicands $2 \\ne 5$, already simplified), so the expression stays as two separate terms.',
            },
          ],
        },
      },
      {
        id: 'rad4-coeff-out-front',
        type: 'text' as const,
        content: `## Coefficients Times Radicals

If a term already has a coefficient out front, **multiply it into** the simplified radical.

### Worked Example: $2\\sqrt{18} - 5\\sqrt{2}$

First simplify $\\sqrt{18} = 3\\sqrt{2}$, then multiply by the outside $2$:

$$2\\sqrt{18} = 2 \\cdot 3\\sqrt{2} = 6\\sqrt{2}$$

Now combine: $6\\sqrt{2} - 5\\sqrt{2} = 1\\sqrt{2} = \\sqrt{2}$.

### Worked Example: $3\\sqrt{20} + \\sqrt{45}$

$$3\\sqrt{20} = 3\\cdot 2\\sqrt{5} = 6\\sqrt{5}, \\qquad \\sqrt{45} = 3\\sqrt{5}$$

$$6\\sqrt{5} + 3\\sqrt{5} = 9\\sqrt{5}$$

> ⚠️ Multiply the outside coefficient by the number that comes *out* of the radical — not by the radicand. $2\\sqrt{18} = 2(3\\sqrt2) = 6\\sqrt2$, not $6\\sqrt{18}$.`,
      },
      {
        id: 'rad4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Walk Through It** 🔽

Simplify $3\\sqrt{20} + \\sqrt{45}$ one step at a time.`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{20}$ simplifies to:', options: ['$2\\sqrt{5}$', '$4\\sqrt{5}$', '$2\\sqrt{10}$', '$5\\sqrt{2}$'] },
            { label: 'So $3\\sqrt{20}$ becomes:', options: ['$6\\sqrt{5}$', '$3\\sqrt{5}$', '$6\\sqrt{20}$', '$5\\sqrt{6}$'] },
            { label: '$\\sqrt{45}$ simplifies to:', options: ['$3\\sqrt{5}$', '$9\\sqrt{5}$', '$5\\sqrt{3}$', '$3\\sqrt{15}$'] },
            { label: 'Final answer:', options: ['$9\\sqrt{5}$', '$9\\sqrt{10}$', '$3\\sqrt{5}$', '$9\\sqrt{65}$'] },
          ],
          correctAnswers: ['$2\\sqrt{5}$', '$6\\sqrt{5}$', '$3\\sqrt{5}$', '$9\\sqrt{5}$'],
          hint1: '$\\sqrt{20} = \\sqrt{4\\cdot 5} = 2\\sqrt{5}$.',
          hint2: 'Multiply the outside $3$ by the $2$ that came out: $3\\cdot 2\\sqrt{5} = 6\\sqrt{5}$.',
          hint3: '$\\sqrt{45} = \\sqrt{9\\cdot 5} = 3\\sqrt{5}$, then $6\\sqrt{5} + 3\\sqrt{5} = 9\\sqrt{5}$.',
          explanation: '$3\\sqrt{20}=6\\sqrt{5}$ and $\\sqrt{45}=3\\sqrt{5}$, so $6\\sqrt{5}+3\\sqrt{5}=9\\sqrt{5}$.',
        },
      },
      {
        id: 'rad4-application',
        type: 'text' as const,
        content: `## Geometry Application: Perimeter

Radicals show up whenever you add up lengths involving square roots — like a perimeter.

### Worked Example

A rectangle has length $\\sqrt{50}$ cm and width $\\sqrt{8}$ cm. Find its perimeter, simplified.

Perimeter $= 2(\\text{length}) + 2(\\text{width})$:

$$P = 2\\sqrt{50} + 2\\sqrt{8}$$

Simplify each radical: $\\sqrt{50} = 5\\sqrt{2}$ and $\\sqrt{8} = 2\\sqrt{2}$.

$$P = 2(5\\sqrt{2}) + 2(2\\sqrt{2}) = 10\\sqrt{2} + 4\\sqrt{2} = 14\\sqrt{2}\\text{ cm}$$

> 💡 Leaving the answer as $14\\sqrt{2}$ is **exact**. A decimal ($\\approx 19.8$ cm) is only an approximation.`,
      },
      {
        id: 'rad4-drill',
        type: 'input-boxes' as const,
        content: `**Multi-Step Practice** 🧮

Each answer is (coefficient)$\\sqrt{r}$. Enter just the **coefficient** out front of the simplified answer.

**1)** $2\\sqrt{12} + 3\\sqrt{3} = \\;?\\,\\sqrt{3}$
**2)** $\\sqrt{8} + \\sqrt{18} + \\sqrt{2} = \\;?\\,\\sqrt{2}$
**3)** Perimeter of a square with side $\\sqrt{27}$:  $4\\sqrt{27} = \\;?\\,\\sqrt{3}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '6', '12'],
          hint1: '$2\\sqrt{12} = 2\\cdot 2\\sqrt{3} = 4\\sqrt{3}$; then $4\\sqrt{3} + 3\\sqrt{3} = 7\\sqrt{3}$.',
          hint2: '$\\sqrt{8}=2\\sqrt{2}$, $\\sqrt{18}=3\\sqrt{2}$, $\\sqrt{2}=1\\sqrt{2}$; $2+3+1 = 6$.',
          hint3: '$\\sqrt{27} = 3\\sqrt{3}$, so $4\\sqrt{27} = 4\\cdot 3\\sqrt{3} = 12\\sqrt{3}$.',
          explanation: '1) $4\\sqrt{3}+3\\sqrt{3}=7\\sqrt{3}$. 2) $2\\sqrt2+3\\sqrt2+\\sqrt2=6\\sqrt{2}$. 3) $4\\cdot 3\\sqrt3 = 12\\sqrt{3}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'radical-operations-algebra1',
    sections: [
      {
        id: 'rad5-intro',
        type: 'text' as const,
        content: `# √ Adding and Subtracting Radicals

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) recognize like radicals, (2) combine them by adding coefficients, (3) simplify radicals to reveal hidden like terms, and (4) handle multi-term problems and applications. Let's put it all together.`,
      },
      {
        id: 'rad5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | What to do |
|-----------|-----------|
| Like radicals | add/subtract coefficients, keep the radical |
| Unlike radicals | leave them separate |
| Looks unlike | **simplify first**, then re-check |
| Coefficient out front | multiply it by what comes out of the radical |
| No number in front | the coefficient is $1$ |

> ⚠️ **Top mistakes to avoid:**
> - Adding the radicands: $\\sqrt{2}+\\sqrt{3} \\ne \\sqrt{5}$.
> - Forgetting to simplify first: $\\sqrt{8}+\\sqrt{2}$ really is $3\\sqrt{2}$.
> - Dropping the hidden $1$: $5\\sqrt{3}-\\sqrt{3} = 4\\sqrt{3}$.`,
      },
      {
        id: 'rad5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\sqrt{72} - \\sqrt{18}$.',
              options: ['$3\\sqrt{2}$', '$\\sqrt{54}$', '$5\\sqrt{2}$', '$6\\sqrt{2}$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{72} = 6\\sqrt{2}$ and $\\sqrt{18} = 3\\sqrt{2}$, so $6\\sqrt{2} - 3\\sqrt{2} = 3\\sqrt{2}$.',
            },
            {
              question: 'Simplify $2\\sqrt{3} + \\sqrt{48}$.',
              options: ['$6\\sqrt{3}$', '$2\\sqrt{51}$', '$3\\sqrt{3}$', '$6\\sqrt{6}$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{48} = \\sqrt{16\\cdot 3} = 4\\sqrt{3}$, so $2\\sqrt{3} + 4\\sqrt{3} = 6\\sqrt{3}$.',
            },
          ],
        },
      },
      {
        id: 'rad5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Combine or Not?** 🔽

For each expression, choose the fully simplified result.`,
        exercise: {
          dropdowns: [
            { label: '$5\\sqrt{7} - 2\\sqrt{7}$', options: ['$3\\sqrt{7}$', '$3\\sqrt{0}$', '$7\\sqrt{7}$', '$3$'] },
            { label: '$\\sqrt{5} + \\sqrt{3}$', options: ['$\\sqrt{5} + \\sqrt{3}$', '$\\sqrt{8}$', '$2\\sqrt{8}$', '$\\sqrt{15}$'] },
            { label: '$\\sqrt{50} + \\sqrt{2}$', options: ['$6\\sqrt{2}$', '$\\sqrt{52}$', '$5\\sqrt{2}$', '$2\\sqrt{2}$'] },
          ],
          correctAnswers: ['$3\\sqrt{7}$', '$\\sqrt{5} + \\sqrt{3}$', '$6\\sqrt{2}$'],
          hint1: 'Like radicals: subtract coefficients $5 - 2 = 3$.',
          hint2: '$\\sqrt{5}$ and $\\sqrt{3}$ are unlike — they cannot be combined, so the expression stays as is.',
          hint3: '$\\sqrt{50} = 5\\sqrt{2}$, so $5\\sqrt{2} + 1\\sqrt{2} = 6\\sqrt{2}$.',
          explanation: '1) $5\\sqrt7-2\\sqrt7 = 3\\sqrt{7}$. 2) Unlike radicals stay $\\sqrt{5}+\\sqrt{3}$. 3) $\\sqrt{50}=5\\sqrt2$, so total $6\\sqrt{2}$.',
        },
      },
      {
        id: 'rad5-drill',
        type: 'input-boxes' as const,
        content: `**Final Drill** 🧮

Enter the **coefficient** out front of each fully simplified answer.

**1)** $\\sqrt{20} + \\sqrt{45} = \\;?\\,\\sqrt{5}$
**2)** $4\\sqrt{2} + \\sqrt{8} - \\sqrt{2} = \\;?\\,\\sqrt{2}$
**3)** $\\sqrt{98} - \\sqrt{32} = \\;?\\,\\sqrt{2}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '5', '3'],
          hint1: '$\\sqrt{20}=2\\sqrt5$, $\\sqrt{45}=3\\sqrt5$, so $2+3 = 5$.',
          hint2: '$\\sqrt{8}=2\\sqrt2$, so $4\\sqrt2 + 2\\sqrt2 - 1\\sqrt2 = 5\\sqrt2$.',
          hint3: '$\\sqrt{98}=7\\sqrt2$ and $\\sqrt{32}=4\\sqrt2$, so $7 - 4 = 3$.',
          explanation: '1) $2\\sqrt5+3\\sqrt5=5\\sqrt5$. 2) $4\\sqrt2+2\\sqrt2-1\\sqrt2=5\\sqrt2$. 3) $7\\sqrt2-4\\sqrt2=3\\sqrt2$.',
        },
      },
      {
        id: 'rad5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which expression is fully simplified and CANNOT be combined further?',
              options: ['$4\\sqrt{6} + 3\\sqrt{5}$', '$2\\sqrt{3} + 5\\sqrt{3}$', '$\\sqrt{8} + \\sqrt{2}$', '$\\sqrt{12} - \\sqrt{3}$'],
              correctAnswer: 0,
              explanation: '$4\\sqrt{6}+3\\sqrt{5}$ has different radicands ($6$ and $5$, already simplified), so it stays. The others all reduce to like radicals and combine.',
            },
            {
              question: 'Simplify $\\sqrt{27} + \\sqrt{12}$.',
              options: ['$5\\sqrt{3}$', '$\\sqrt{39}$', '$6\\sqrt{3}$', '$5\\sqrt{6}$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{27} = 3\\sqrt{3}$ and $\\sqrt{12} = 2\\sqrt{3}$, so $3\\sqrt{3} + 2\\sqrt{3} = 5\\sqrt{3}$.',
            },
            {
              question: 'What is $6\\sqrt{5} - \\sqrt{5}$?',
              options: ['$5\\sqrt{5}$', '$6$', '$5$', '$6\\sqrt{5}$'],
              correctAnswer: 0,
              explanation: 'The lone $\\sqrt{5}$ has coefficient $1$, so $6 - 1 = 5$, giving $5\\sqrt{5}$.',
            },
          ],
        },
      },
    ],
  },
]
