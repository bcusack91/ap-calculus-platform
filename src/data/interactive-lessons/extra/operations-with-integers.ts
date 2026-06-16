import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Operations with Integers (Pre-Algebra).
 * Registry key / DB slug: 'operations-with-integers'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'operations-with-integers',
    sections: [
      {
        id: 'owi1-intro',
        type: 'text' as const,
        content: `# ➖➕ Operations with Integers

**Part 1 of 5 — Integers & the Number Line**

---

### Topics in This Part

| Section |
|---------|
| What Is an Integer? |
| The Number Line & Opposites |
| Absolute Value |
| Comparing Integers |

> 🔑 **Key Concept:** Integers are the whole numbers *and their negatives*: $\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots$ Master the number line first, and every operation that follows becomes a short walk in one direction.`,
      },
      {
        id: 'owi1-what',
        type: 'text' as const,
        content: `## What Is an Integer?

An **integer** is a number with no fractional or decimal part — the counting numbers, their negatives, and zero.

$$\\dots,\\; -3,\\; -2,\\; -1,\\; 0,\\; 1,\\; 2,\\; 3,\\; \\dots$$

- **Positive integers:** $1, 2, 3, \\dots$ (often written without a sign)
- **Negative integers:** $-1, -2, -3, \\dots$ (always written with a $-$ sign)
- **Zero:** $0$ is an integer, but it is *neither* positive nor negative.

### These are NOT integers

| Not an integer | Why |
|----------------|-----|
| $\\frac{1}{2}$ | a fraction between $0$ and $1$ |
| $2.7$ | has a decimal part |
| $-3.5$ | has a decimal part |
| $\\sqrt{2}$ | is irrational ($\\approx 1.414\\dots$) |

> 💡 **Where they show up:** temperatures below zero ($-8^\\circ$), elevation below sea level ($-200$ ft), money you owe (a $-\\$50$ balance), and yardage lost in football.`,
      },
      {
        id: 'owi1-numberline',
        type: 'text' as const,
        content: `## The Number Line & Opposites

Picture every integer as a position on a horizontal line. **Negatives sit to the left of $0$; positives sit to the right.**

$$\\underset{\\textstyle -3}{\\bullet}\\;\\;\\underset{\\textstyle -2}{\\bullet}\\;\\;\\underset{\\textstyle -1}{\\bullet}\\;\\;\\underset{\\textstyle 0}{\\bullet}\\;\\;\\underset{\\textstyle 1}{\\bullet}\\;\\;\\underset{\\textstyle 2}{\\bullet}\\;\\;\\underset{\\textstyle 3}{\\bullet}$$

The further **right** you go, the **bigger** the number; the further **left**, the **smaller**.

### Opposites

Two integers are **opposites** if they are the same distance from $0$ but on opposite sides. The opposite of a number is found by flipping its sign.

| Number | Opposite |
|--------|----------|
| $5$ | $-5$ |
| $-9$ | $9$ |
| $0$ | $0$ |

> 🔑 **Key Idea:** The opposite of the opposite brings you back: $-(-7) = 7$. Two negative signs cancel.`,
      },
      {
        id: 'owi1-compare-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is the smallest?',
              options: ['$-8$', '$-3$', '$0$', '$2$'],
              correctAnswer: 0,
              explanation: 'On the number line, $-8$ is the furthest to the left, so it is the smallest. Going left = smaller, even though $8$ looks "big."',
            },
            {
              question: 'What is the opposite of $-12$?',
              options: ['$12$', '$-12$', '$0$', '$-24$'],
              correctAnswer: 0,
              explanation: 'The opposite flips the sign. The opposite of $-12$ is $+12$. They are the same distance ($12$) from $0$.',
            },
            {
              question: 'Which statement is TRUE?',
              options: ['$-2 > -5$', '$-5 > -2$', '$-5 > 0$', '$-2 = 2$'],
              correctAnswer: 0,
              explanation: '$-2$ is to the right of $-5$ on the number line, so $-2 > -5$. With negatives, the one closer to $0$ is larger.',
            },
          ],
        },
      },
      {
        id: 'owi1-absval-text',
        type: 'text' as const,
        content: `## Absolute Value

The **absolute value** of a number is its **distance from $0$** on the number line — and distance is never negative. We write it with two vertical bars:

$$\\lvert -7 \\rvert = 7 \\qquad \\lvert 4 \\rvert = 4 \\qquad \\lvert 0 \\rvert = 0$$

Both $-7$ and $7$ are a distance of $7$ from zero, so both have absolute value $7$.

> ⚠️ **Watch out:** Absolute value asks "*how far*," not "*which side*." The answer is always positive or zero — **never** negative. $\\lvert -15 \\rvert = 15$, not $-15$.

We will use absolute value as a tool in Part 2 to add and subtract integers cleanly.`,
      },
      {
        id: 'owi1-absval-drill',
        type: 'input-boxes' as const,
        content: `**Absolute Value Drill** 🧮

Evaluate each. (Distance from $0$ is never negative.)

**1)** $\\lvert -6 \\rvert = \\,?$
**2)** $\\lvert 10 \\rvert = \\,?$
**3)** $-\\lvert -4 \\rvert = \\,?$  *(careful — the minus sign is OUTSIDE the bars)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '10', '-4'],
          hint1: '$\\lvert -6 \\rvert$ is the distance of $-6$ from $0$, which is $6$.',
          hint2: '$\\lvert 10 \\rvert$ is the distance of $10$ from $0$, which is $10$.',
          hint3: 'First $\\lvert -4 \\rvert = 4$, then the minus sign outside makes it $-4$.',
          explanation: '1) $\\lvert -6 \\rvert = 6$.  2) $\\lvert 10 \\rvert = 10$.  3) $\\lvert -4 \\rvert = 4$, and the leading $-$ gives $-4$. The bars come first; the outside sign applies after.',
        },
      },
      {
        id: 'owi1-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order on the Number Line** 🔽

Fill in each comparison with the correct symbol or value.`,
        exercise: {
          dropdowns: [
            { label: 'Compare: $-7 \\;\\square\\; -1$', options: ['$<$', '$>$', '$=$'] },
            { label: 'Compare: $\\lvert -9 \\rvert \\;\\square\\; 8$', options: ['$<$', '$>$', '$=$'] },
            { label: 'The opposite of $0$ is:', options: ['$0$', '$1$', 'undefined'] },
          ],
          correctAnswers: ['$<$', '$>$', '$0$'],
          hint1: '$-7$ is further left than $-1$, so $-7 < -1$.',
          hint2: '$\\lvert -9 \\rvert = 9$, and $9 > 8$.',
          hint3: 'Zero is its own opposite — it sits exactly on $0$.',
          explanation: '$-7 < -1$ (further left is smaller); $\\lvert -9 \\rvert = 9 > 8$; and the opposite of $0$ is $0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'operations-with-integers',
    sections: [
      {
        id: 'owi2-intro',
        type: 'text' as const,
        content: `# ➖➕ Operations with Integers

**Part 2 of 5 — Adding Integers**

---

> 🔑 **The Big Idea:** Adding an integer means *moving along the number line*. Add a positive → move **right**. Add a negative → move **left**.`,
      },
      {
        id: 'owi2-samesign',
        type: 'text' as const,
        content: `## Rule 1 — Same Signs: Add, Keep the Sign

When two numbers have the **same sign**, add their absolute values and keep that shared sign.

| Problem | Add the values | Keep sign | Answer |
|---------|----------------|-----------|--------|
| $5 + 3$ | $5 + 3 = 8$ | $+$ | $8$ |
| $-5 + (-3)$ | $5 + 3 = 8$ | $-$ | $-8$ |
| $-12 + (-4)$ | $12 + 4 = 16$ | $-$ | $-16$ |

**Why it works:** Two negatives both push you left. Start at $-5$, move $3$ more to the left, and you land on $-8$.

> 💡 **Money analogy:** Owing \\$5 and then owing \\$3 more means you owe \\$8 total: $-5 + (-3) = -8$.`,
      },
      {
        id: 'owi2-diffsign',
        type: 'text' as const,
        content: `## Rule 2 — Different Signs: Subtract, Keep the Bigger Sign

When the signs are **different**, subtract the smaller absolute value from the larger, and keep the sign of the number with the **larger absolute value**.

### Worked Example: $-8 + 3$

$$\\lvert -8 \\rvert = 8, \\quad \\lvert 3 \\rvert = 3 \\;\\Rightarrow\\; 8 - 3 = 5$$

Since $-8$ has the larger absolute value, the answer takes the **negative** sign: $-8 + 3 = -5$.

### Worked Example: $9 + (-4)$

$$\\lvert 9 \\rvert = 9, \\quad \\lvert -4 \\rvert = 4 \\;\\Rightarrow\\; 9 - 4 = 5$$

Since $9$ has the larger absolute value, the answer is **positive**: $9 + (-4) = 5$.

> 🔑 **The two-step recipe:** (1) subtract the absolute values, (2) take the sign of whichever number was "bigger" (further from $0$).`,
      },
      {
        id: 'owi2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$-6 + (-7) = $',
              options: ['$-13$', '$13$', '$-1$', '$1$'],
              correctAnswer: 0,
              explanation: 'Same signs (both negative): add $6 + 7 = 13$ and keep the negative sign → $-13$.',
            },
            {
              question: '$-10 + 4 = $',
              options: ['$-6$', '$6$', '$-14$', '$14$'],
              correctAnswer: 0,
              explanation: 'Different signs: subtract $10 - 4 = 6$. The larger absolute value ($10$) is negative, so the answer is $-6$.',
            },
            {
              question: '$7 + (-7) = $',
              options: ['$0$', '$14$', '$-14$', '$1$'],
              correctAnswer: 0,
              explanation: 'A number plus its opposite is always $0$. They cancel exactly: $7 + (-7) = 0$.',
            },
          ],
        },
      },
      {
        id: 'owi2-add-drill',
        type: 'input-boxes' as const,
        content: `**Adding Drill** 🧮

Find each sum. Watch the signs!

**1)** $-9 + (-6) = \\,?$
**2)** $12 + (-5) = \\,?$
**3)** $-15 + 8 = \\,?$
**4)** $-4 + 4 = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-15', '7', '-7', '0'],
          hint1: 'Same signs: add the values, keep the sign. $9 + 6 = 15$, both negative → $-15$.',
          hint2: 'Different signs: $12 - 5 = 7$; the larger value ($12$) is positive → $+7$.',
          hint3: 'Different signs: $15 - 8 = 7$; the larger value ($15$) is negative → $-7$.',
          explanation: '1) $-9+(-6)=-15$ (same sign, add).  2) $12+(-5)=7$ (subtract, positive wins).  3) $-15+8=-7$ (subtract, negative wins).  4) $-4+4=0$ (opposites cancel).',
        },
      },
      {
        id: 'owi2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Rule, Then the Sign** 🔽

For each sum, choose whether you ADD or SUBTRACT the absolute values, and the sign of the result.`,
        exercise: {
          dropdowns: [
            { label: 'For $-8 + (-5)$, you:', options: ['add the values', 'subtract the values'] },
            { label: 'The sign of $-8 + (-5)$ is:', options: ['positive', 'negative'] },
            { label: 'For $6 + (-11)$, you:', options: ['add the values', 'subtract the values'] },
            { label: 'The sign of $6 + (-11)$ is:', options: ['positive', 'negative'] },
          ],
          correctAnswers: ['add the values', 'negative', 'subtract the values', 'negative'],
          hint1: 'Same signs → add. Different signs → subtract.',
          hint2: '$-8 + (-5)$: both negative, so add ($8+5=13$) and the result is negative ($-13$).',
          hint3: '$6 + (-11)$: different signs, so subtract ($11-6=5$); the larger value ($11$) is negative, so the result is $-5$.',
          explanation: '$-8+(-5)=-13$: same signs → add, negative result. $6+(-11)=-5$: different signs → subtract, and the negative $11$ wins the sign.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'operations-with-integers',
    sections: [
      {
        id: 'owi3-intro',
        type: 'text' as const,
        content: `# ➖➕ Operations with Integers

**Part 3 of 5 — Subtracting Integers**

---

> 🔑 **The One Trick You Need:** Subtraction is just "adding the opposite." Change the subtraction to addition, flip the sign of the second number, then use your Part 2 addition rules.`,
      },
      {
        id: 'owi3-kcc',
        type: 'text' as const,
        content: `## Keep–Change–Change

Every subtraction problem can be rewritten as an addition problem:

$$a - b \\;=\\; a + (-b)$$

The memory hook is **Keep–Change–Change**:

1. **Keep** the first number the same.
2. **Change** the subtraction sign to addition.
3. **Change** the sign of the second number to its opposite.

### Worked Example: $7 - 10$

$$7 - 10 \\;=\\; 7 + (-10)$$

Now it's an addition problem: different signs, $10 - 7 = 3$, and the larger value ($10$) is negative → $\\boxed{-3}$.

### Worked Example: $4 - (-6)$

$$4 - (-6) \\;=\\; 4 + (+6) \\;=\\; 4 + 6 = \\boxed{10}$$

> ⚠️ **The classic trap:** Subtracting a negative *adds*. The two minus signs in $4 - (-6)$ become a plus: $4 + 6 = 10$. "Minus a minus is a plus."`,
      },
      {
        id: 'owi3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Rewrite $-5 - 8$ using Keep–Change–Change.',
              options: ['$-5 + (-8)$', '$-5 + 8$', '$5 + (-8)$', '$5 - 8$'],
              correctAnswer: 0,
              explanation: 'Keep $-5$, change $-$ to $+$, change $8$ to $-8$: $-5 + (-8) = -13$.',
            },
            {
              question: '$-3 - (-9) = $',
              options: ['$6$', '$-12$', '$-6$', '$12$'],
              correctAnswer: 0,
              explanation: 'Keep–Change–Change: $-3 + 9$. Different signs, $9 - 3 = 6$, larger value ($9$) is positive → $6$.',
            },
            {
              question: '$2 - 11 = $',
              options: ['$-9$', '$9$', '$-13$', '$13$'],
              correctAnswer: 0,
              explanation: '$2 + (-11)$: different signs, $11 - 2 = 9$, and the larger value ($11$) is negative → $-9$.',
            },
          ],
        },
      },
      {
        id: 'owi3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Walk Through Keep–Change–Change** 🔽

You're simplifying $-7 - (-4)$. Choose what happens at each step.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — rewrite as addition:', options: ['$-7 + 4$', '$-7 + (-4)$', '$7 + 4$', '$7 - 4$'] },
            { label: 'Step 2 — same or different signs?', options: ['different signs', 'same signs'] },
            { label: 'Step 3 — the final answer:', options: ['$-3$', '$3$', '$-11$', '$11$'] },
          ],
          correctAnswers: ['$-7 + 4$', 'different signs', '$-3$'],
          hint1: 'Keep $-7$, change $-$ to $+$, change $-4$ to $+4$: $-7 + 4$.',
          hint2: '$-7$ is negative and $+4$ is positive — different signs, so subtract.',
          hint3: '$-7 + 4$: subtract $7 - 4 = 3$; the larger value ($7$) is negative → $-3$.',
          explanation: '$-7 - (-4) = -7 + 4 = -3$. Subtracting $-4$ becomes adding $4$; then different-sign addition gives $-3$.',
        },
      },
      {
        id: 'owi3-sub-drill',
        type: 'input-boxes' as const,
        content: `**Subtracting Drill** 🧮

Use Keep–Change–Change on each.

**1)** $3 - 9 = \\,?$
**2)** $-6 - 5 = \\,?$
**3)** $8 - (-2) = \\,?$
**4)** $-4 - (-10) = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-6', '-11', '10', '6'],
          hint1: '$3 - 9 = 3 + (-9)$: different signs, $9-3=6$, negative wins → $-6$.',
          hint2: '$-6 - 5 = -6 + (-5)$: same signs, add → $-11$.',
          hint3: '$8 - (-2) = 8 + 2 = 10$. $-4 - (-10) = -4 + 10 = 6$.',
          explanation: '1) $3-9=-6$.  2) $-6-5=-11$.  3) $8-(-2)=8+2=10$.  4) $-4-(-10)=-4+10=6$. Minus-a-minus turns into plus.',
        },
      },
      {
        id: 'owi3-realworld',
        type: 'text' as const,
        content: `## Why Subtraction = Distance

Subtraction also answers "**how far apart?**" The temperature drops from $5^\\circ$ to $-3^\\circ$. How big was the change?

$$-3 - 5 = -3 + (-5) = -8$$

The temperature changed by $8$ degrees (downward). The **size** of the gap is $\\lvert -8 \\rvert = 8$.

> 💡 To find the distance between two integers on the number line, subtract them and take the absolute value: $\\text{distance} = \\lvert a - b \\rvert$. For $5$ and $-3$: $\\lvert 5 - (-3) \\rvert = \\lvert 8 \\rvert = 8$.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'operations-with-integers',
    sections: [
      {
        id: 'owi4-intro',
        type: 'text' as const,
        content: `# ➖➕ Operations with Integers

**Part 4 of 5 — Multiplying & Dividing Integers**

---

> 🔑 **The Sign Rule (the same for × and ÷):** Same signs → **positive**. Different signs → **negative**. The numbers multiply or divide exactly as usual; only the sign needs the rule.`,
      },
      {
        id: 'owi4-rules',
        type: 'text' as const,
        content: `## The Sign Rules

For both multiplication and division, look only at the two signs:

| Signs | Result | Example |
|-------|--------|---------|
| $(+)(+)$ | **positive** | $4 \\cdot 3 = 12$ |
| $(-)(-)$ | **positive** | $(-4)(-3) = 12$ |
| $(+)(-)$ | **negative** | $4 \\cdot (-3) = -12$ |
| $(-)(+)$ | **negative** | $(-4)(3) = -12$ |

The same table works for division:

$$\\frac{-12}{-3} = 4 \\qquad \\frac{-12}{3} = -4 \\qquad \\frac{12}{-3} = -4$$

> 🔑 **Quick saying:** "Same signs, positive. Different signs, negative." It holds for **×** and **÷** alike.

> ⚠️ **Don't confuse this with adding!** For *addition*, $(-)+(-)$ stays negative. But for *multiplying*, $(-)\\times(-)$ becomes **positive**. Two different rule sets — keep them straight.`,
      },
      {
        id: 'owi4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$(-6)(-5) = $',
              options: ['$30$', '$-30$', '$-11$', '$11$'],
              correctAnswer: 0,
              explanation: 'Same signs (both negative) → positive. $6 \\cdot 5 = 30$, so $(-6)(-5) = 30$.',
            },
            {
              question: '$\\dfrac{-24}{6} = $',
              options: ['$-4$', '$4$', '$-18$', '$18$'],
              correctAnswer: 0,
              explanation: 'Different signs → negative. $24 \\div 6 = 4$, so the answer is $-4$.',
            },
            {
              question: '$7 \\cdot (-8) = $',
              options: ['$-56$', '$56$', '$-15$', '$15$'],
              correctAnswer: 0,
              explanation: 'Different signs → negative. $7 \\cdot 8 = 56$, so $7 \\cdot (-8) = -56$.',
            },
          ],
        },
      },
      {
        id: 'owi4-md-drill',
        type: 'input-boxes' as const,
        content: `**Multiply & Divide Drill** 🧮

Apply the sign rule, then compute.

**1)** $(-9)(4) = \\,?$
**2)** $(-7)(-6) = \\,?$
**3)** $\\dfrac{-40}{-8} = \\,?$
**4)** $\\dfrac{36}{-9} = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-36', '42', '5', '-4'],
          hint1: 'Different signs → negative. $9 \\cdot 4 = 36$ → $-36$.',
          hint2: 'Same signs → positive. $7 \\cdot 6 = 42$ → $42$.',
          hint3: '$-40 \\div -8$: same signs → positive, $40 \\div 8 = 5$. $36 \\div -9$: different signs → negative, $-4$.',
          explanation: '1) $(-9)(4)=-36$.  2) $(-7)(-6)=42$.  3) $\\frac{-40}{-8}=5$.  4) $\\frac{36}{-9}=-4$. Same → +, different → −.',
        },
      },
      {
        id: 'owi4-multiple-factors',
        type: 'text' as const,
        content: `## Counting Negative Signs

When you multiply **three or more** numbers, count how many are negative:

- An **even** number of negative factors → the product is **positive**.
- An **odd** number of negative factors → the product is **negative**.

### Worked Example: $(-2)(-3)(-1)$

There are **three** negative factors (odd), so the product is **negative**. The size is $2 \\cdot 3 \\cdot 1 = 6$:

$$(-2)(-3)(-1) = -6$$

### Worked Example: $(-2)(-5)(4)$

There are **two** negative factors (even), so the product is **positive**. The size is $2 \\cdot 5 \\cdot 4 = 40$:

$$(-2)(-5)(4) = 40$$

> 💡 Pair the negatives off: each pair of negatives makes a positive. One left over (odd) keeps the whole thing negative.`,
      },
      {
        id: 'owi4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Predict the Sign** 🔽

For each expression, choose the sign of the final answer (don't compute the digits — just the sign).`,
        exercise: {
          dropdowns: [
            { label: 'Sign of $(-5)(-2)$:', options: ['positive', 'negative'] },
            { label: 'Sign of $(-3)(-4)(-1)$:', options: ['positive', 'negative'] },
            { label: 'Sign of $\\dfrac{-50}{-10}$:', options: ['positive', 'negative'] },
            { label: 'Sign of $(-1)(2)(-3)(-4)$:', options: ['positive', 'negative'] },
          ],
          correctAnswers: ['positive', 'negative', 'positive', 'negative'],
          hint1: 'Same signs (or an even count of negatives) → positive.',
          hint2: 'Count the negatives. Even count → positive, odd count → negative.',
          hint3: '$(-1)(2)(-3)(-4)$ has THREE negative factors (odd) → negative.',
          explanation: '$(-5)(-2)$: 2 negatives (even) → +. $(-3)(-4)(-1)$: 3 negatives (odd) → −. $\\frac{-50}{-10}$: same signs → +. $(-1)(2)(-3)(-4)$: 3 negatives (odd) → −.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'operations-with-integers',
    sections: [
      {
        id: 'owi5-intro',
        type: 'text' as const,
        content: `# ➖➕ Operations with Integers

**Part 5 of 5 — Order of Operations & Mastery Check**

---

You can now add, subtract, multiply, and divide integers. The last skill is combining them in one expression — and getting the order right.`,
      },
      {
        id: 'owi5-pemdas',
        type: 'text' as const,
        content: `## Order of Operations (PEMDAS)

When an expression mixes operations, follow this order:

| Step | Operation |
|------|-----------|
| **P** | Parentheses (and other grouping) |
| **E** | Exponents |
| **MD** | Multiply & Divide — left to right |
| **AS** | Add & Subtract — left to right |

### Worked Example: $-4 + 3 \\cdot (-2)$

Multiply first, then add:

$$-4 + 3 \\cdot (-2) = -4 + (-6) = -10$$

### Worked Example: $(-2)^2 - 5$

Exponent first. Note $(-2)^2 = (-2)(-2) = 4$ (same signs → positive):

$$(-2)^2 - 5 = 4 - 5 = -1$$

> ⚠️ **A famous trap:** $(-2)^2 = 4$, but $-2^2 = -4$. With **no parentheses**, the exponent attaches only to the $2$, and the minus sign is applied last: $-2^2 = -(2^2) = -4$.`,
      },
      {
        id: 'owi5-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order It Correctly** 🔽

Simplify $10 - 2 \\cdot (-3)$ one step at a time.`,
        exercise: {
          dropdowns: [
            { label: 'Which operation happens first?', options: ['the multiplication $2 \\cdot (-3)$', 'the subtraction $10 - 2$'] },
            { label: 'Value of that first step:', options: ['$-6$', '$6$', '$8$', '$-8$'] },
            { label: 'Final answer:', options: ['$16$', '$4$', '$-16$', '$24$'] },
          ],
          correctAnswers: ['the multiplication $2 \\cdot (-3)$', '$-6$', '$16$'],
          hint1: 'MD comes before AS, so multiply before you subtract.',
          hint2: '$2 \\cdot (-3) = -6$ (different signs → negative).',
          hint3: '$10 - (-6) = 10 + 6 = 16$. Subtracting a negative adds.',
          explanation: '$10 - 2 \\cdot (-3) = 10 - (-6) = 10 + 6 = 16$. Multiply first, then the subtraction becomes addition.',
        },
      },
      {
        id: 'owi5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Operations Drill** 🧮

Use PEMDAS. Take it one step at a time.

**1)** $-3 + 4 \\cdot (-2) = \\,?$
**2)** $(-5)^2 - 30 = \\,?$
**3)** $\\dfrac{-18}{3} + (-2) = \\,?$
**4)** $8 - 2(3 - 7) = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-11', '-5', '-8', '16'],
          hint1: '$4 \\cdot (-2) = -8$ first, then $-3 + (-8) = -11$.',
          hint2: '$(-5)^2 = 25$ (same signs → positive), then $25 - 30 = -5$.',
          hint3: '$\\frac{-18}{3} = -6$, then $-6 + (-2) = -8$. For #4: parentheses first, $3-7=-4$, then $8 - 2(-4) = 8 + 8 = 16$.',
          explanation: '1) $-3+4(-2)=-3-8=-11$.  2) $(-5)^2-30=25-30=-5$.  3) $\\frac{-18}{3}+(-2)=-6-2=-8$.  4) $8-2(3-7)=8-2(-4)=8+8=16$.',
        },
      },
      {
        id: 'owi5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Operation | Rule |
|-----------|------|
| Add, same signs | Add values, keep the sign |
| Add, different signs | Subtract values, keep the bigger sign |
| Subtract anything | Keep–Change–Change → add the opposite |
| Multiply / Divide | Same signs → $+$, different signs → $-$ |
| Multiply many factors | Even # of negatives → $+$; odd → $-$ |
| Order of operations | P, E, MD (left→right), AS (left→right) |

> 🔑 **The two ideas to never mix up:** adding two negatives stays negative ($-3 + (-3) = -6$), but *multiplying* two negatives turns positive ($(-3)(-3) = 9$).`,
      },
      {
        id: 'owi5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: '$-15 + 7 - (-3) = $',
              options: ['$-5$', '$-25$', '$5$', '$-11$'],
              correctAnswer: 0,
              explanation: 'Left to right: $-15 + 7 = -8$, then $-8 - (-3) = -8 + 3 = -5$.',
            },
            {
              question: '$(-4)(-3) + (-5) = $',
              options: ['$7$', '$17$', '$-17$', '$-7$'],
              correctAnswer: 0,
              explanation: 'Multiply first: $(-4)(-3) = 12$ (same signs → +). Then $12 + (-5) = 7$.',
            },
            {
              question: 'Which is the value of $-2^2$?',
              options: ['$-4$', '$4$', '$-2$', '$2$'],
              correctAnswer: 0,
              explanation: 'With no parentheses, $-2^2 = -(2^2) = -(4) = -4$. The exponent applies before the negative.',
            },
          ],
        },
      },
      {
        id: 'owi5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: '$-9 - (-13) = $',
              options: ['$4$', '$-22$', '$-4$', '$22$'],
              correctAnswer: 0,
              explanation: 'Keep–Change–Change: $-9 + 13$. Different signs, $13 - 9 = 4$, larger value ($13$) is positive → $4$.',
            },
            {
              question: '$(-6)(2)(-1) = $',
              options: ['$12$', '$-12$', '$-9$', '$9$'],
              correctAnswer: 0,
              explanation: 'Two negative factors (even) → positive. Size: $6 \\cdot 2 \\cdot 1 = 12$, so the answer is $12$.',
            },
            {
              question: 'Simplify $20 + (-4)(5)$.',
              options: ['$0$', '$80$', '$-80$', '$40$'],
              correctAnswer: 0,
              explanation: 'Multiply first: $(-4)(5) = -20$ (different signs → negative). Then $20 + (-20) = 0$.',
            },
          ],
        },
      },
    ],
  },
]
