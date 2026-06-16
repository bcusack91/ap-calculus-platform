import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Integers and the Number Line (Grade 6 Math).
 * Registry key / DB slug: 'integers-number-line-grade6'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'integers-number-line-grade6',
    sections: [
      {
        id: 'inl1-intro',
        type: 'text' as const,
        content: `# 🌡️ Integers and the Number Line

**Part 1 of 5 — Meet the Integers**

---

### Topics in This Part

| Section |
|---------|
| What Is an Integer? |
| Positives, Negatives, and Zero |
| Integers in the Real World |

> 🔑 **Key Concept:** **Integers** are the whole numbers and their *opposites*: $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ — no fractions, no decimals. They let us describe amounts *below* zero, like a temperature of $-5^\\circ$ or a debt of \\$20.`,
      },
      {
        id: 'inl1-what',
        type: 'text' as const,
        content: `## What Is an Integer?

An **integer** is any number from this list, stretching forever in both directions:

$$\\ldots,\\; -4,\\; -3,\\; -2,\\; -1,\\; 0,\\; 1,\\; 2,\\; 3,\\; 4,\\; \\ldots$$

There are three kinds of integers:

| Type | Examples | Where they sit |
|------|----------|----------------|
| **Positive** integers | $1, 2, 3, 17$ | to the **right** of zero |
| **Negative** integers | $-1, -2, -3, -17$ | to the **left** of zero |
| **Zero** | $0$ | exactly in the middle — neither positive nor negative |

> ⚠️ **Not integers:** $\\frac{1}{2}$, $0.75$, and $-3.2$ are **not** integers because they fall *between* the whole numbers. Integers are always "whole" — they never have a fraction or decimal part.`,
      },
      {
        id: 'inl1-id-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is an integer?',
              options: ['$-7$', '$\\frac{3}{4}$', '$2.5$', '$-0.1$'],
              correctAnswer: 0,
              explanation: '$-7$ is a whole number with a negative sign, so it is an integer. The others have fraction or decimal parts, so they are not integers.',
            },
            {
              question: 'Which statement about $0$ is TRUE?',
              options: [
                '$0$ is neither positive nor negative',
                '$0$ is a positive integer',
                '$0$ is a negative integer',
                '$0$ is not an integer',
              ],
              correctAnswer: 0,
              explanation: 'Zero sits right in the middle of the number line. It separates the positives from the negatives, so it is neither positive nor negative — but it IS an integer.',
            },
          ],
        },
      },
      {
        id: 'inl1-realworld',
        type: 'text' as const,
        content: `## Integers in the Real World

Negative integers describe everyday situations that go *below* a starting point:

| Situation | Integer |
|-----------|---------|
| Temperature of $12$ degrees below zero | $-12$ |
| A gain of $8$ yards in football | $+8$ |
| A scuba diver $30$ feet below sea level | $-30$ |
| Owing a friend \\$15 | $-15$ |
| Depositing \\$50 in the bank | $+50$ |

> 💡 **Signal words:** *below, loss, owe, withdraw, fell, descend* usually mean **negative**. *Above, gain, earn, deposit, rose, climb* usually mean **positive**.`,
      },
      {
        id: 'inl1-translate',
        type: 'dropdown-select' as const,
        content: `**Match the Situation to Its Integer** 🔽

Choose the integer that best represents each situation.`,
        exercise: {
          dropdowns: [
            { label: 'The temperature dropped to $9$ degrees below zero:', options: ['$-9$', '$+9$', '$0$', '$-90$'] },
            { label: 'A football team gained $15$ yards:', options: ['$+15$', '$-15$', '$0$', '$+1.5$'] },
            { label: 'You deposit \\$40 into your account:', options: ['$+40$', '$-40$', '$0$', '$+4$'] },
            { label: 'A submarine sits $200$ feet below the surface:', options: ['$-200$', '$+200$', '$0$', '$-20$'] },
          ],
          correctAnswers: ['$-9$', '$+15$', '$+40$', '$-200$'],
          hint1: '"Below zero" and "below the surface" point **downward**, so the integer is negative.',
          hint2: '"Gained" and "deposit" mean something was added, so the integer is positive.',
          hint3: 'Match the size of the number too: $9$ degrees → $9$, $200$ feet → $200$.',
          explanation: 'Below zero $= -9$; a gain $= +15$; a deposit $= +40$; below the surface $= -200$. Direction (above/below) sets the sign; the amount sets the size.',
        },
      },
      {
        id: 'inl1-signs-drill',
        type: 'input-boxes' as const,
        content: `**Write the Integer** 🧮

Write the integer (with a $+$ or $-$ sign) that represents each situation. Type a leading minus for negatives; positives can be written as a plain number.

**1)** A withdrawal of \\$25 from a bank account → $\\,?$
**2)** A mountain climber rises $30$ feet → $\\,?$
**3)** A temperature of $7$ degrees below zero → $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-25', '30', '-7'],
          hint1: '*Withdraw* and *below* are signal words for **negative** amounts.',
          hint2: '*Rises* means going up, which is **positive**.',
          hint3: 'The amount sets the size: $25$, $30$, $7$; the direction sets the sign.',
          explanation: '1) A withdrawal removes money, so $-25$.  2) Rising is positive, so $+30$ (written $30$).  3) Below zero is negative, so $-7$.',
        },
      },
      {
        id: 'inl1-wrap',
        type: 'text' as const,
        content: `## What's Next

You can now spot an integer and decide whether a situation is positive or negative. But to really *understand* integers — to compare them and find distances — we need a picture.

That picture is the **number line**, and it's the star of Part 2.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'integers-number-line-grade6',
    sections: [
      {
        id: 'inl2-intro',
        type: 'text' as const,
        content: `# 🌡️ Integers and the Number Line

**Part 2 of 5 — Plotting on the Number Line**

---

> 🔑 **The Idea:** A **number line** is a straight line with evenly spaced marks. Zero sits in the center, positives go **right**, and negatives go **left**. Every integer has exactly one home on the line.`,
      },
      {
        id: 'inl2-line',
        type: 'text' as const,
        content: `## How the Number Line Works

$$\\overset{-5}{\\bullet}\\;-4\\;-3\\;-2\\;-1\\;\\overset{0}{\\bullet}\\;1\\;2\\;3\\;4\\;\\overset{5}{\\bullet}$$

Three rules tell you where any integer lives:

1. **Find zero** — it's the middle of the line.
2. **Pick a direction** — positive numbers go **right**, negative numbers go **left**.
3. **Count the steps** — move one mark for each unit.

### Example: Plot $-3$

Start at $0$, move **left** (because it's negative) by **3** marks. You land on $-3$.

### Example: Plot $+4$

Start at $0$, move **right** by **4** marks. You land on $4$.

> 💡 The marks are always **equally spaced**. The jump from $0$ to $1$ is the same size as the jump from $-7$ to $-6$ — exactly one unit.`,
      },
      {
        id: 'inl2-plot-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To plot $-6$, which way do you move from zero, and how far?',
              options: ['Left 6 units', 'Right 6 units', 'Left 0 units', 'Right 60 units'],
              correctAnswer: 0,
              explanation: 'A negative integer is to the LEFT of zero, and the number $6$ tells you to move $6$ marks. So: left $6$ units.',
            },
            {
              question: 'On a number line, which integer is farthest to the RIGHT?',
              options: ['$5$', '$0$', '$-2$', '$-8$'],
              correctAnswer: 0,
              explanation: 'Moving right means getting larger. Of these, $5$ is the greatest, so it sits farthest to the right. $-8$ is farthest to the left.',
            },
          ],
        },
      },
      {
        id: 'inl2-read-drill',
        type: 'input-boxes' as const,
        content: `**Read the Number Line** 🧮

A point sits at each described spot. Enter the integer it lands on.

**1)** Start at $0$ and move **right** $7$ units. The point is at $\\,?$
**2)** Start at $0$ and move **left** $5$ units. The point is at $\\,?$
**3)** Start at $2$ and move **left** $6$ units. The point is at $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '-5', '-4'],
          hint1: 'Moving **right** from $0$ gives a positive integer: $0 + 7 = 7$.',
          hint2: 'Moving **left** from $0$ gives a negative integer: $0 - 5 = -5$.',
          hint3: 'From $2$, move left $6$: $2, 1, 0, -1, -2, -3, -4$. You pass through zero and keep going.',
          explanation: '1) $7$.  2) $-5$.  3) Counting left from $2$ by $6$ lands you on $-4$.',
        },
      },
      {
        id: 'inl2-spacing',
        type: 'text' as const,
        content: `## Counting Across Zero

The trickiest moves **cross zero**. Take it slow and count one mark at a time.

### Example: Start at $-2$ and move right $5$ units

$$-2 \\;\\to\\; -1 \\;\\to\\; 0 \\;\\to\\; 1 \\;\\to\\; 2 \\;\\to\\; 3$$

That's $5$ marks, landing on $\\mathbf{3}$. Notice you pass *through* zero on the way.

> ⚠️ **Watch out:** Don't skip zero! Many students count $-2 \\to -1 \\to 1$ and forget that $0$ is its own mark. Always pause on zero.`,
      },
      {
        id: 'inl2-cross-drill',
        type: 'input-boxes' as const,
        content: `**Cross Zero Carefully** 🧮

Count one mark at a time. Enter the integer you land on.

**1)** Start at $-4$, move **right** $4$ units → $\\,?$
**2)** Start at $-1$, move **right** $3$ units → $\\,?$
**3)** Start at $3$, move **left** $7$ units → $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '2', '-4'],
          hint1: 'From $-4$, count right: $-3, -2, -1, 0$. Four marks lands you exactly on zero.',
          hint2: 'From $-1$, count right: $0, 1, 2$. Three marks lands you on $2$.',
          hint3: 'From $3$, count left: $2, 1, 0, -1, -2, -3, -4$. Seven marks lands you on $-4$.',
          explanation: '1) $-4 + 4 = 0$.  2) $-1 + 3 = 2$.  3) $3 - 7 = -4$. Counting one mark at a time keeps you from skipping zero.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'integers-number-line-grade6',
    sections: [
      {
        id: 'inl3-intro',
        type: 'text' as const,
        content: `# 🌡️ Integers and the Number Line

**Part 3 of 5 — Comparing and Ordering Integers**

---

> 🔑 **The Golden Rule:** On a number line, the number **farther to the right is greater**. This single idea lets you compare *any* two integers — even two negatives.`,
      },
      {
        id: 'inl3-compare',
        type: 'text' as const,
        content: `## Greater Than and Less Than

We use these symbols to compare:

| Symbol | Meaning |
|--------|---------|
| $>$ | "is greater than" (the bigger one) |
| $<$ | "is less than" (the smaller one) |
| $=$ | "is equal to" |

> 💡 **Trick:** The symbol is like a hungry mouth — it always opens toward the **bigger** number. $5 > 2$ and $2 < 5$ both say the same thing.

### The Surprising Part: Negatives

With negative numbers, the bigger-looking number can actually be **smaller**:

$$-2 > -7$$

Why? On the number line, $-2$ is to the **right** of $-7$, so $-2$ is greater. Think of temperature: $-2^\\circ$ is *warmer* than $-7^\\circ$.

| Comparison | True statement | Why |
|------------|----------------|-----|
| $3$ vs $-1$ | $3 > -1$ | positives beat negatives |
| $-4$ vs $-9$ | $-4 > -9$ | $-4$ is farther right |
| $0$ vs $-5$ | $0 > -5$ | zero beats every negative |`,
      },
      {
        id: 'inl3-compare-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which symbol makes this true:  $-6 \\;\\square\\; -2$ ?',
              options: ['$<$', '$>$', '$=$', 'none of these'],
              correctAnswer: 0,
              explanation: '$-6$ is farther LEFT than $-2$, so $-6$ is the smaller number: $-6 < -2$. The mouth opens toward $-2$, the bigger value.',
            },
            {
              question: 'A morning low of $-3^\\circ$ and a night low of $-8^\\circ$. Which night was COLDER?',
              options: [
                'The $-8^\\circ$ night, because $-8 < -3$',
                'The $-3^\\circ$ night, because $-3 < -8$',
                'They were equally cold',
                'You cannot compare negative temperatures',
              ],
              correctAnswer: 0,
              explanation: 'Colder means smaller (farther left). $-8$ is to the left of $-3$, so $-8 < -3$ and the $-8^\\circ$ night was colder.',
            },
          ],
        },
      },
      {
        id: 'inl3-symbol-drop',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Symbol** 🔽

Choose $<$, $>$, or $=$ to make each statement true.`,
        exercise: {
          dropdowns: [
            { label: '$\\;-5 \\;\\square\\; 3$', options: ['$<$', '$>$', '$=$'] },
            { label: '$\\;-1 \\;\\square\\; -10$', options: ['$>$', '$<$', '$=$'] },
            { label: '$\\;0 \\;\\square\\; -4$', options: ['$>$', '$<$', '$=$'] },
            { label: '$\\;-7 \\;\\square\\; -7$', options: ['$=$', '$<$', '$>$'] },
          ],
          correctAnswers: ['$<$', '$>$', '$>$', '$=$'],
          hint1: 'Any negative is less than any positive: $-5 < 3$.',
          hint2: '$-1$ is closer to zero than $-10$, so $-1$ is farther right and therefore greater.',
          hint3: 'Zero is greater than every negative, and a number always equals itself.',
          explanation: '$-5 < 3$ (negative < positive); $-1 > -10$ ($-1$ is farther right); $0 > -4$; $-7 = -7$ (same number).',
        },
      },
      {
        id: 'inl3-order',
        type: 'text' as const,
        content: `## Ordering a List of Integers

To order integers from **least to greatest**, imagine walking the number line from **left to right** and listing them as you pass.

### Example: Order $3,\\; -5,\\; 0,\\; -1,\\; 4$ from least to greatest

Walk left → right:

$$-5,\\;\\; -1,\\;\\; 0,\\;\\; 3,\\;\\; 4$$

The most negative number ($-5$) comes **first**, and the largest positive ($4$) comes **last**.

> ⚠️ **Common trap:** $-5$ is the *least* even though $5$ "looks big." For negatives, the larger the digit, the **smaller** the value.`,
      },
      {
        id: 'inl3-order-drill',
        type: 'input-boxes' as const,
        content: `**Order Them** 🧮

Order each list from **least to greatest**. Enter only the single integer that belongs in the requested spot.

**1)** List: $\\;2,\\; -3,\\; -8,\\; 5\\;$ — the **least** (first) value is $\\,?$
**2)** Same list — the **greatest** (last) value is $\\,?$
**3)** List: $\\;-1,\\; -6,\\; 0,\\; -4\\;$ — the **least** value is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-8', '5', '-6'],
          hint1: 'The least value is the one farthest **left** on the number line — the most negative.',
          hint2: 'The greatest value is farthest **right** — the biggest positive.',
          hint3: 'Among $-1, -6, 0, -4$, the most negative (farthest left) is $-6$.',
          explanation: '1) Least $= -8$.  2) Greatest $= 5$.  3) Least $= -6$. Most negative is always least; biggest positive is always greatest.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'integers-number-line-grade6',
    sections: [
      {
        id: 'inl4-intro',
        type: 'text' as const,
        content: `# 🌡️ Integers and the Number Line

**Part 4 of 5 — Opposites and Absolute Value**

---

> 🔑 **Big Payoff:** Every integer has an **opposite** (same distance from zero, other side) and an **absolute value** (its distance from zero, always positive). These two ideas show up everywhere in middle-school math.`,
      },
      {
        id: 'inl4-opposites',
        type: 'text' as const,
        content: `## Opposites

The **opposite** of a number is the same distance from zero, but on the *other side*.

| Number | Opposite |
|--------|----------|
| $5$ | $-5$ |
| $-3$ | $3$ |
| $12$ | $-12$ |
| $0$ | $0$ |

Both $5$ and $-5$ are exactly **5 units** from zero — they're mirror images across zero.

> 💡 **Zero is its own opposite.** It sits right on the mirror, so flipping it changes nothing.

> ⚠️ The opposite of a *negative* number is **positive**. The opposite of $-3$ is $+3$, not a "more negative" number.`,
      },
      {
        id: 'inl4-abs',
        type: 'text' as const,
        content: `## Absolute Value

The **absolute value** of a number is its **distance from zero** on the number line. Distance is never negative, so absolute value is **always positive or zero**.

We write it with two straight bars:

$$\\lvert -7\\rvert = 7 \\qquad \\lvert 4\\rvert = 4 \\qquad \\lvert 0\\rvert = 0$$

Both $-7$ and $7$ are **7 units** from zero, so $\\lvert -7\\rvert = \\lvert 7\\rvert = 7$.

| Expression | Distance from zero | Value |
|------------|--------------------|-------|
| $\\lvert -9\\rvert$ | $9$ units | $9$ |
| $\\lvert 6\\rvert$ | $6$ units | $6$ |
| $\\lvert -1\\rvert$ | $1$ unit | $1$ |
| $\\lvert 0\\rvert$ | $0$ units | $0$ |

> ⚠️ **Don't confuse them:** the *opposite* of $-7$ is $+7$ (also $7$ here), but the absolute value of $-7$ is $7$ because that's its distance from zero. Absolute value answers "how far?", not "which side?"`,
      },
      {
        id: 'inl4-abs-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\lvert -15\\rvert$ ?',
              options: ['$15$', '$-15$', '$0$', '$30$'],
              correctAnswer: 0,
              explanation: 'Absolute value is distance from zero, always positive. $-15$ is $15$ units from zero, so $\\lvert -15\\rvert = 15$.',
            },
            {
              question: 'The opposite of $-8$ is:',
              options: ['$8$', '$-8$', '$0$', '$-16$'],
              correctAnswer: 0,
              explanation: 'The opposite is the same distance from zero on the other side. The opposite of $-8$ is $+8$.',
            },
            {
              question: 'Which is TRUE?',
              options: [
                '$\\lvert -4\\rvert = \\lvert 4\\rvert$',
                '$\\lvert -4\\rvert = -4$',
                '$\\lvert 4\\rvert = -4$',
                '$\\lvert -4\\rvert > \\lvert -9\\rvert$',
              ],
              correctAnswer: 0,
              explanation: 'Both $-4$ and $4$ are $4$ units from zero, so $\\lvert -4\\rvert = \\lvert 4\\rvert = 4$. Absolute value can never be negative, and $4 < 9$ so $\\lvert -4\\rvert < \\lvert -9\\rvert$.',
            },
          ],
        },
      },
      {
        id: 'inl4-abs-drill',
        type: 'input-boxes' as const,
        content: `**Opposites and Absolute Value** 🧮

Enter each value.

**1)** The opposite of $11$ is $\\,?$
**2)** $\\lvert -20\\rvert = \\,?$
**3)** The opposite of $\\lvert -6\\rvert$ is $\\,?$  *(find $\\lvert -6\\rvert$ first, then take its opposite)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-11', '20', '-6'],
          hint1: 'The opposite flips the sign: the opposite of $11$ is $-11$.',
          hint2: 'Absolute value is distance from zero: $\\lvert -20\\rvert = 20$.',
          hint3: 'First $\\lvert -6\\rvert = 6$. Then the opposite of $6$ is $-6$.',
          explanation: '1) Opposite of $11$ is $-11$.  2) $\\lvert -20\\rvert = 20$.  3) $\\lvert -6\\rvert = 6$, and the opposite of $6$ is $-6$.',
        },
      },
      {
        id: 'inl4-distance',
        type: 'text' as const,
        content: `## Bonus: Distance Between Two Integers

Because absolute value measures distance, you can use it to find how far apart two integers are. Just **count the units between them** on the number line.

### Example: How far is $-3$ from $4$?

Count from $-3$ up to $4$:

$$-3 \\to -2 \\to -1 \\to 0 \\to 1 \\to 2 \\to 3 \\to 4 \\quad = \\quad 7 \\text{ units}$$

So $-3$ and $4$ are **7 units** apart.

> 💡 A shortcut you'll learn soon: the distance equals $\\lvert \\text{first} - \\text{second}\\rvert$. Here $\\lvert -3 - 4\\rvert = \\lvert -7\\rvert = 7$. For now, counting on the number line works perfectly.`,
      },
      {
        id: 'inl4-opp-abs-drop',
        type: 'dropdown-select' as const,
        content: `**Opposite or Absolute Value?** 🔽

Pick the correct value for each blank.`,
        exercise: {
          dropdowns: [
            { label: 'The opposite of $9$ is', options: ['$-9$', '$9$', '$0$', '$-18$'] },
            { label: '$\\;\\lvert -14\\rvert$ equals', options: ['$14$', '$-14$', '$0$', '$28$'] },
            { label: 'The opposite of $-7$ is', options: ['$7$', '$-7$', '$0$', '$-14$'] },
            { label: 'The distance between $-2$ and $5$ is', options: ['$7$', '$3$', '$-7$', '$10$'] },
          ],
          correctAnswers: ['$-9$', '$14$', '$7$', '$7$'],
          hint1: 'The opposite flips the sign; the opposite of a positive is negative and vice versa.',
          hint2: 'Absolute value is a distance from zero, so it is never negative: $\\lvert -14\\rvert = 14$.',
          hint3: 'Count the units from $-2$ to $5$: through zero is $2 + 5 = 7$ units.',
          explanation: 'Opposite of $9$ is $-9$; $\\lvert -14\\rvert = 14$; opposite of $-7$ is $+7$; and $-2$ to $5$ spans $2 + 5 = 7$ units.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'integers-number-line-grade6',
    sections: [
      {
        id: 'inl5-intro',
        type: 'text' as const,
        content: `# 🌡️ Integers and the Number Line

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) identify integers, (2) plot them on the number line, (3) compare and order them, and (4) find opposites and absolute values. Let's put it all together.`,
      },
      {
        id: 'inl5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Spot an integer | whole number or its opposite — **no** fractions/decimals |
| Plot a number | from $0$, positives go **right**, negatives go **left** |
| Compare two integers | farther **right** = **greater** |
| Order least → greatest | walk the line **left to right** |
| Opposite of a number | same distance, **other side** of zero |
| Absolute value $\\lvert n\\rvert$ | **distance** from zero — always $\\ge 0$ |

> ⚠️ Remember the two big traps: a *bigger digit* makes a negative **smaller** (so $-9 < -2$), and absolute value is **never** negative.`,
      },
      {
        id: 'inl5-mixed-drop',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

Fill in each blank to make a true statement.`,
        exercise: {
          dropdowns: [
            { label: 'The opposite of $-13$ is', options: ['$13$', '$-13$', '$0$', '$-26$'] },
            { label: '$\\;\\lvert -10\\rvert$ equals', options: ['$10$', '$-10$', '$0$', '$20$'] },
            { label: 'From least to greatest, the first value in $\\{-2,\\,4,\\,-9,\\,1\\}$ is', options: ['$-9$', '$-2$', '$1$', '$4$'] },
            { label: '$\\;-6 \\;\\square\\; -1$ uses the symbol', options: ['$<$', '$>$', '$=$', '$+$'] },
          ],
          correctAnswers: ['$13$', '$10$', '$-9$', '$<$'],
          hint1: 'The opposite flips the sign; absolute value is distance from zero.',
          hint2: '"Least" means farthest left — the most negative number, $-9$.',
          hint3: '$-6$ is farther left than $-1$, so $-6 < -1$.',
          explanation: 'Opposite of $-13$ is $13$; $\\lvert -10\\rvert = 10$; least of the set is $-9$; and $-6 < -1$ because $-6$ is farther left.',
        },
      },
      {
        id: 'inl5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Work each one carefully.

**1)** Start at $-2$ on the number line and move **right** $6$ units. You land on $\\,?$
**2)** How many units apart are $-5$ and $3$ ? $\\,?$
**3)** $\\lvert -12\\rvert = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '8', '12'],
          hint1: 'Count right from $-2$: $-1, 0, 1, 2, 3, 4$. Six marks lands on $4$.',
          hint2: 'Count from $-5$ up to $3$: that crosses zero. $5$ units to reach $0$, then $3$ more — that is $8$ units.',
          hint3: 'Absolute value is distance from zero, so $\\lvert -12\\rvert = 12$.',
          explanation: '1) $-2 + 6 = 4$.  2) From $-5$ to $0$ is $5$ units, $0$ to $3$ is $3$ units, total $8$.  3) $\\lvert -12\\rvert = 12$.',
        },
      },
      {
        id: 'inl5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which list is in order from LEAST to GREATEST?',
              options: [
                '$-7,\\; -2,\\; 0,\\; 5$',
                '$5,\\; 0,\\; -2,\\; -7$',
                '$0,\\; -2,\\; 5,\\; -7$',
                '$-2,\\; -7,\\; 0,\\; 5$',
              ],
              correctAnswer: 0,
              explanation: 'Least to greatest means farthest left to farthest right: $-7, -2, 0, 5$. The most negative comes first and the largest positive comes last.',
            },
            {
              question: 'A diver descends to $-18$ feet, and a fish swims at $-4$ feet. Which is DEEPER (lower)?',
              options: [
                'The diver, because $-18 < -4$',
                'The fish, because $-4 < -18$',
                'They are at the same depth',
                'You cannot tell',
              ],
              correctAnswer: 0,
              explanation: 'Deeper means lower, which is farther left (smaller). $-18 < -4$, so the diver at $-18$ feet is deeper than the fish at $-4$ feet.',
            },
            {
              question: 'Which statement is TRUE?',
              options: [
                '$\\lvert -6\\rvert = 6$ and the opposite of $6$ is $-6$',
                '$\\lvert -6\\rvert = -6$',
                'The opposite of $-6$ is $-6$',
                '$\\lvert 6\\rvert = -6$',
              ],
              correctAnswer: 0,
              explanation: 'Absolute value is always non-negative, so $\\lvert -6\\rvert = 6$, and the opposite of $6$ is $-6$. Absolute value can never be negative, and the opposite of $-6$ is $+6$.',
            },
          ],
        },
      },
    ],
  },
]
