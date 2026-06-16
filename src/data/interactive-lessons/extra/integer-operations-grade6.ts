import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Operations with Integers (Grade 6 Math).
 * Registry key / DB slug: 'integer-operations-grade6'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'integer-operations-grade6',
    sections: [
      {
        id: 'int1-intro',
        type: 'text' as const,
        content: `# 🌡️ Operations with Integers

**Part 1 of 5 — Meet the Integers**

---

### Topics in This Part

| Section |
|---------|
| What Integers Are |
| The Number Line |
| Absolute Value |
| Comparing & Ordering |

> 🔑 **Key Concept:** Integers are the whole numbers **and** their negatives: $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ — no fractions, no decimals. Before we add, subtract, multiply, or divide them, we need to picture them on a **number line**.`,
      },
      {
        id: 'int1-what',
        type: 'text' as const,
        content: `## What Is an Integer?

An **integer** is any number from this list:

$$\\ldots,\\; -3,\\; -2,\\; -1,\\; 0,\\; 1,\\; 2,\\; 3,\\; \\ldots$$

That includes:
- the **positive** whole numbers: $1, 2, 3, \\ldots$
- **zero**: $0$ (it is neither positive nor negative)
- the **negative** whole numbers: $-1, -2, -3, \\ldots$

Integers show up everywhere in real life:

| Situation | Integer |
|-----------|---------|
| 8 degrees below zero | $-8$ |
| A gain of 12 yards | $+12$ |
| 3 floors below ground | $-3$ |
| \\$50 owed (debt) | $-50$ |
| Sea level | $0$ |

> ⚠️ **Not integers:** $\\frac{1}{2}$, $0.75$, and $-2.5$ are **not** integers because they aren't whole numbers. Integers never have a fraction or decimal part.`,
      },
      {
        id: 'int1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is an integer?',
              options: ['$-7$', '$\\frac{2}{3}$', '$4.5$', '$-1.2$'],
              correctAnswer: 0,
              explanation: '$-7$ is a negative whole number, so it is an integer. The others have fraction or decimal parts, so they are not integers.',
            },
            {
              question: 'Which integer represents "the temperature dropped to 5 degrees below zero"?',
              options: ['$-5$', '$+5$', '$0$', '$5.0$'],
              correctAnswer: 0,
              explanation: '"Below zero" means negative, so 5 below zero is $-5$.',
            },
          ],
        },
      },
      {
        id: 'int1-numberline',
        type: 'text' as const,
        content: `## The Number Line

A **number line** puts the integers in order. Negative numbers sit to the **left** of zero; positive numbers sit to the **right**.

\`\`\`
   ←  -5  -4  -3  -2  -1   0   1   2   3   4   5  →
\`\`\`

Two big ideas live on the number line:

1. **Farther right = bigger.** So $3 > 1$, and $-1 > -4$ (because $-1$ is to the right of $-4$).
2. **Opposites** are the same distance from zero, on opposite sides. The opposite of $4$ is $-4$; the opposite of $-6$ is $6$.

> 💡 **Surprising but true:** $-1$ is **greater** than $-10$. On the number line, $-1$ is closer to the positive side. With negatives, the number that *looks* smaller (like $10$ vs $1$) is actually the *least*.`,
      },
      {
        id: 'int1-compare-mc',
        type: 'multiple-choice' as const,
        content: `**Compare on the Number Line** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which symbol makes this true:  $-8 \\;?\\; -3$',
              options: ['$<$', '$>$', '$=$'],
              correctAnswer: 0,
              explanation: '$-8$ is farther LEFT on the number line than $-3$, so $-8$ is less than $-3$:  $-8 < -3$.',
            },
            {
              question: 'What is the opposite of $-9$?',
              options: ['$9$', '$-9$', '$0$', '$\\frac{1}{9}$'],
              correctAnswer: 0,
              explanation: 'The opposite of a number is the same distance from zero on the other side. The opposite of $-9$ is $9$.',
            },
          ],
        },
      },
      {
        id: 'int1-absval',
        type: 'text' as const,
        content: `## Absolute Value

The **absolute value** of a number is its **distance from zero** on the number line. Distance is never negative, so absolute value is **always** $0$ or positive.

We write it with two bars: $|{-7}| = 7$ and $|7| = 7$.

| Expression | Read as | Value |
|------------|---------|-------|
| $|{-4}|$ | "absolute value of $-4$" | $4$ |
| $|10|$ | "absolute value of $10$" | $10$ |
| $|0|$ | "absolute value of $0$" | $0$ |
| $|{-15}|$ | "absolute value of $-15$" | $15$ |

> 🔑 **Shortcut:** To take an absolute value, just drop the sign — the answer is how *far* the number is from zero, never which *direction*. Absolute value will be the engine behind every addition rule in Part 2.`,
      },
      {
        id: 'int1-absval-drill',
        type: 'input-boxes' as const,
        content: `**Absolute Value & Ordering** 🧮

Find each value. (Type whole numbers only.)

**1)** $|{-12}| = \\,?$
**2)** $|6| = \\,?$
**3)** Of the three numbers $-2,\\; -20,\\; -9$, which is the **least**?  $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '6', '-20'],
          hint1: 'Absolute value is distance from zero — always positive. $|{-12}|$ is how far $-12$ is from $0$.',
          hint2: '$|6|$ is already positive, so its absolute value is just $6$.',
          hint3: 'The LEAST negative number is the one farthest LEFT on the number line: $-20$ is farther from zero on the negative side than $-2$ or $-9$.',
          explanation: '1) $|{-12}| = 12$.  2) $|6| = 6$.  3) Among $-2, -20, -9$, the least is $-20$ because it is farthest left on the number line.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'integer-operations-grade6',
    sections: [
      {
        id: 'int2-intro',
        type: 'text' as const,
        content: `# 🌡️ Operations with Integers

**Part 2 of 5 — Adding Integers**

---

> 🔑 **The Two Rules:** Adding integers comes down to checking the **signs**. **Same signs?** Add and keep the sign. **Different signs?** Subtract and keep the sign of the bigger-distance number.`,
      },
      {
        id: 'int2-same',
        type: 'text' as const,
        content: `## Rule 1 — Same Signs: Add and Keep the Sign

When both numbers have the **same sign**, add their absolute values and keep that common sign.

### Worked Example: $(-4) + (-3)$

Both are negative. Add the distances $4 + 3 = 7$, then keep the negative sign:

$$(-4) + (-3) = -7$$

Think of it as owing \\$4 and then owing \\$3 more — you owe \\$7.

### Worked Example: $5 + 9$

Both positive. Add $5 + 9 = 14$, keep positive:

$$5 + 9 = 14$$

> 💡 **Picture it:** On the number line, adding a positive moves you **right**; adding a negative moves you **left**. Two negatives means two moves left, so you land further left (more negative).`,
      },
      {
        id: 'int2-same-drill',
        type: 'input-boxes' as const,
        content: `**Same-Sign Sums** 🧮

Add. Include the negative sign when needed (for example, type \`-11\`).

**1)** $(-6) + (-5) = \\,?$
**2)** $8 + 7 = \\,?$
**3)** $(-10) + (-10) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-11', '15', '-20'],
          hint1: 'Both negative: add the distances $6 + 5 = 11$, then keep the negative sign.',
          hint2: 'Both positive: $8 + 7 = 15$, stays positive.',
          hint3: 'Both negative: $10 + 10 = 20$, keep negative → $-20$.',
          explanation: '1) $(-6)+(-5) = -11$.  2) $8+7 = 15$.  3) $(-10)+(-10) = -20$. Same signs: add and keep the sign.',
        },
      },
      {
        id: 'int2-diff',
        type: 'text' as const,
        content: `## Rule 2 — Different Signs: Subtract and Keep the Winner's Sign

When the signs are **different**, subtract the smaller absolute value from the larger one. The answer takes the sign of the number with the **larger absolute value**.

### Worked Example: $(-9) + 4$

Distances are $9$ and $4$. Subtract: $9 - 4 = 5$. The $-9$ has the larger distance, so the answer is **negative**:

$$(-9) + 4 = -5$$

### Worked Example: $12 + (-7)$

Distances $12$ and $7$. Subtract: $12 - 7 = 5$. The $12$ (positive) has the larger distance, so the answer is **positive**:

$$12 + (-7) = +5$$

> ⚠️ **Common mistake:** Don't just keep the sign of the *first* number. Keep the sign of whichever number is **farther from zero**.`,
      },
      {
        id: 'int2-diff-mc',
        type: 'multiple-choice' as const,
        content: `**Different-Sign Sums** 🎯`,
        exercise: {
          questions: [
            {
              question: '$(-15) + 6 = ?$',
              options: ['$-9$', '$9$', '$-21$', '$21$'],
              correctAnswer: 0,
              explanation: 'Different signs: subtract $15 - 6 = 9$. The $-15$ has the larger distance, so the answer is negative: $-9$.',
            },
            {
              question: '$7 + (-7) = ?$',
              options: ['$0$', '$14$', '$-14$', '$7$'],
              correctAnswer: 0,
              explanation: 'A number plus its opposite always equals $0$. The distances are equal ($7$ and $7$), so they cancel: $7 - 7 = 0$.',
            },
          ],
        },
      },
      {
        id: 'int2-which-rule',
        type: 'dropdown-select' as const,
        content: `**Which Rule, Then What Sign?** 🔽

For each sum, pick the rule and the sign of the answer.`,
        exercise: {
          dropdowns: [
            { label: '$(-8) + (-2)$ uses…', options: ['same signs → add', 'different signs → subtract'] },
            { label: '…and the answer is…', options: ['negative', 'positive', 'zero'] },
            { label: '$3 + (-11)$ uses…', options: ['different signs → subtract', 'same signs → add'] },
            { label: '…and the answer is…', options: ['negative', 'positive', 'zero'] },
          ],
          correctAnswers: ['same signs → add', 'negative', 'different signs → subtract', 'negative'],
          hint1: 'Look at the two signs first. Matching signs → add. Different signs → subtract.',
          hint2: '$(-8)+(-2)$: both negative, so add the distances and keep negative.',
          hint3: '$3 + (-11)$: different signs, subtract $11 - 3 = 8$; the $-11$ is farther from zero, so the answer is negative ($-8$).',
          explanation: '$(-8)+(-2) = -10$ (same signs, add, negative). $3+(-11) = -8$ (different signs, subtract, and the larger-distance number $-11$ is negative).',
        },
      },
      {
        id: 'int2-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Addition** 🧮

Add. Use a negative sign when needed.

**1)** $(-13) + 5 = \\,?$
**2)** $20 + (-8) = \\,?$
**3)** $(-6) + (-14) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-8', '12', '-20'],
          hint1: 'Different signs: $13 - 5 = 8$; the $-13$ is farther from zero → negative.',
          hint2: 'Different signs: $20 - 8 = 12$; the $20$ is farther from zero → positive.',
          hint3: 'Same signs: $6 + 14 = 20$, keep negative.',
          explanation: '1) $(-13)+5 = -8$.  2) $20+(-8) = 12$.  3) $(-6)+(-14) = -20$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'integer-operations-grade6',
    sections: [
      {
        id: 'int3-intro',
        type: 'text' as const,
        content: `# 🌡️ Operations with Integers

**Part 3 of 5 — Subtracting Integers**

---

> 🔑 **The Big Trick:** You never really *subtract* integers — you turn every subtraction into an **addition** problem, then use the Part 2 rules. The motto is **"Keep, Change, Change."**`,
      },
      {
        id: 'int3-kcc',
        type: 'text' as const,
        content: `## Subtracting = Adding the Opposite

To subtract an integer, **add its opposite**:

$$a - b = a + (-b)$$

The fastest way to remember this is **Keep · Change · Change**:

1. **Keep** the first number.
2. **Change** the subtraction sign to addition.
3. **Change** the sign of the second number to its opposite.

### Worked Example: $5 - 8$

Keep $5$, change $-$ to $+$, change $8$ to $-8$:

$$5 - 8 = 5 + (-8) = -3$$

(Now it's a different-signs addition: $8 - 5 = 3$, and $-8$ is farther from zero, so $-3$.)

> 💡 **Why it works:** Subtracting $8$ means moving $8$ steps **left** on the number line — exactly the same as *adding* $-8$.`,
      },
      {
        id: 'int3-double-neg',
        type: 'text' as const,
        content: `## The Double-Negative Case

The trick really shines when you subtract a **negative** number. The opposite of a negative is a **positive**.

### Worked Example: $4 - (-6)$

Keep $4$, change $-$ to $+$, change $-6$ to $+6$:

$$4 - (-6) = 4 + 6 = 10$$

### Worked Example: $(-3) - (-9)$

Keep $-3$, change $-$ to $+$, change $-9$ to $+9$:

$$(-3) - (-9) = (-3) + 9 = 6$$

> ⚠️ **Watch the two negatives:** $4 - (-6)$ is **not** $4 - 6$. The "minus a negative" becomes a **plus**, so it grows to $10$. Subtracting a negative makes a number **bigger**.`,
      },
      {
        id: 'int3-kcc-dropdown',
        type: 'dropdown-select' as const,
        content: `**Keep · Change · Change** 🔽

Rewrite $2 - (-5)$ step by step.`,
        exercise: {
          dropdowns: [
            { label: 'Keep the first number:', options: ['$2$', '$-2$', '$5$', '$-5$'] },
            { label: 'Change the operation to:', options: ['$+$ (addition)', '$-$ (subtraction)', '$\\times$ (multiply)'] },
            { label: 'Change the second number to:', options: ['$+5$', '$-5$', '$2$', '$-2$'] },
            { label: 'So the rewritten problem is:', options: ['$2 + 5$', '$2 - 5$', '$-2 + 5$', '$2 + (-5)$'] },
          ],
          correctAnswers: ['$2$', '$+$ (addition)', '$+5$', '$2 + 5$'],
          hint1: 'Keep the first number exactly as it is: $2$.',
          hint2: 'Subtraction always becomes addition with Keep-Change-Change.',
          hint3: 'The second number $-5$ flips to its opposite, $+5$, giving $2 + 5 = 7$.',
          explanation: '$2 - (-5)$ becomes $2 + 5 = 7$. Keep $2$, change the sign to $+$, change $-5$ to $+5$.',
        },
      },
      {
        id: 'int3-mc',
        type: 'multiple-choice' as const,
        content: `**Subtraction Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$(-7) - 4 = ?$',
              options: ['$-11$', '$-3$', '$3$', '$11$'],
              correctAnswer: 0,
              explanation: 'Rewrite as $(-7) + (-4)$. Same signs (both negative): add $7 + 4 = 11$, keep negative → $-11$.',
            },
            {
              question: '$6 - (-2) = ?$',
              options: ['$8$', '$4$', '$-8$', '$-4$'],
              correctAnswer: 0,
              explanation: 'Subtracting a negative becomes adding: $6 + 2 = 8$. Minus a negative grows the number.',
            },
          ],
        },
      },
      {
        id: 'int3-drill',
        type: 'input-boxes' as const,
        content: `**Subtraction Drill** 🧮

Rewrite with Keep-Change-Change, then solve. Use a negative sign when needed.

**1)** $3 - 10 = \\,?$
**2)** $(-5) - (-12) = \\,?$
**3)** $(-8) - 8 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-7', '7', '-16'],
          hint1: '$3 - 10 = 3 + (-10)$. Different signs: $10 - 3 = 7$, larger-distance number is negative → $-7$.',
          hint2: '$(-5) - (-12) = (-5) + 12$. Different signs: $12 - 5 = 7$, the $+12$ is farther from zero → $+7$.',
          hint3: '$(-8) - 8 = (-8) + (-8)$. Same signs: $8 + 8 = 16$, keep negative → $-16$.',
          explanation: '1) $3 - 10 = -7$.  2) $(-5) - (-12) = 7$.  3) $(-8) - 8 = -16$. Always convert to addition first.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'integer-operations-grade6',
    sections: [
      {
        id: 'int4-intro',
        type: 'text' as const,
        content: `# 🌡️ Operations with Integers

**Part 4 of 5 — Multiplying & Dividing Integers**

---

> 🔑 **One Sign Rule for Both:** Multiplication and division share the exact same sign rule. **Same signs → positive. Different signs → negative.** Multiply or divide the numbers as usual, then attach the sign.`,
      },
      {
        id: 'int4-signrule',
        type: 'text' as const,
        content: `## The Sign Rule

First find the answer as if both numbers were positive. Then set the sign:

| Signs of the two numbers | Sign of the answer |
|--------------------------|--------------------|
| positive $\\times$ positive | **positive** $(+)$ |
| negative $\\times$ negative | **positive** $(+)$ |
| positive $\\times$ negative | **negative** $(-)$ |
| negative $\\times$ positive | **negative** $(-)$ |

In one sentence: **like signs give a positive; unlike signs give a negative.**

### Worked Examples

$$(-4) \\times 3 = -12 \\quad(\\text{different signs} \\to \\text{negative})$$
$$(-5) \\times (-6) = 30 \\quad(\\text{same signs} \\to \\text{positive})$$
$$(-20) \\div 4 = -5 \\quad(\\text{different signs} \\to \\text{negative})$$
$$(-18) \\div (-3) = 6 \\quad(\\text{same signs} \\to \\text{positive})$$

> 💡 **Memory hook:** "Two negatives make a positive" — a negative times a negative *flips back* to positive.`,
      },
      {
        id: 'int4-mc',
        type: 'multiple-choice' as const,
        content: `**Sign Rule Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$(-7) \\times (-8) = ?$',
              options: ['$56$', '$-56$', '$15$', '$-15$'],
              correctAnswer: 0,
              explanation: 'Same signs (both negative): the answer is positive. $7 \\times 8 = 56$, so $(-7)\\times(-8) = 56$.',
            },
            {
              question: '$36 \\div (-9) = ?$',
              options: ['$-4$', '$4$', '$-27$', '$27$'],
              correctAnswer: 0,
              explanation: 'Different signs: the answer is negative. $36 \\div 9 = 4$, so $36 \\div (-9) = -4$.',
            },
          ],
        },
      },
      {
        id: 'int4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Sign** 🔽

For each product or quotient, choose the sign of the answer (you don't need to compute the number yet).`,
        exercise: {
          dropdowns: [
            { label: '$(-6) \\times (-2)$ is…', options: ['positive', 'negative', 'zero'] },
            { label: '$9 \\times (-4)$ is…', options: ['negative', 'positive', 'zero'] },
            { label: '$(-30) \\div 5$ is…', options: ['negative', 'positive', 'zero'] },
            { label: '$(-21) \\div (-7)$ is…', options: ['positive', 'negative', 'zero'] },
          ],
          correctAnswers: ['positive', 'negative', 'negative', 'positive'],
          hint1: 'Same signs → positive; different signs → negative. The rule is identical for $\\times$ and $\\div$.',
          hint2: '$(-6)\\times(-2)$: both negative = same signs → positive. $9\\times(-4)$: different signs → negative.',
          hint3: '$(-30)\\div 5$: different signs → negative. $(-21)\\div(-7)$: both negative → positive.',
          explanation: '$(-6)\\times(-2)=12$ (+), $9\\times(-4)=-36$ (−), $(-30)\\div5=-6$ (−), $(-21)\\div(-7)=3$ (+).',
        },
      },
      {
        id: 'int4-multineg',
        type: 'text' as const,
        content: `## Multiplying Several Numbers — Count the Negatives

When you multiply a string of numbers, you can just **count the negative signs**:

- An **even** number of negatives → the answer is **positive**.
- An **odd** number of negatives → the answer is **negative**.

### Worked Example: $(-2) \\times (-3) \\times (-1)$

Multiply the values: $2 \\times 3 \\times 1 = 6$. There are **three** negatives (odd), so the answer is **negative**:

$$(-2) \\times (-3) \\times (-1) = -6$$

### Worked Example: $(-2) \\times (-5)$

$2 \\times 5 = 10$, and there are **two** negatives (even), so the answer is **positive**: $10$.

> ⚠️ **Zero wins:** If *any* factor is $0$, the whole product is $0$ — sign rules don't matter.`,
      },
      {
        id: 'int4-drill',
        type: 'input-boxes' as const,
        content: `**Multiply & Divide** 🧮

Compute each. Include a negative sign when needed.

**1)** $(-9) \\times 4 = \\,?$
**2)** $(-48) \\div (-6) = \\,?$
**3)** $(-2) \\times (-3) \\times (-2) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-36', '8', '-12'],
          hint1: 'Different signs → negative. $9 \\times 4 = 36$, so the answer is $-36$.',
          hint2: 'Same signs → positive. $48 \\div 6 = 8$.',
          hint3: 'Values: $2 \\times 3 \\times 2 = 12$. Count negatives: three of them (odd) → negative, so $-12$.',
          explanation: '1) $(-9)\\times4 = -36$.  2) $(-48)\\div(-6) = 8$.  3) three negatives (odd) → $-12$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'integer-operations-grade6',
    sections: [
      {
        id: 'int5-intro',
        type: 'text' as const,
        content: `# 🌡️ Operations with Integers

**Part 5 of 5 — Order of Operations, Word Problems & Mastery**

---

You can now add, subtract, multiply, and divide integers. The last skill is doing them **in the right order** and using them in real situations.`,
      },
      {
        id: 'int5-pemdas',
        type: 'text' as const,
        content: `## Order of Operations (PEMDAS) with Integers

The order is the same as always, but now watch the signs:

| Step | Operation |
|------|-----------|
| **P** | Parentheses (and other grouping) |
| **E** | Exponents |
| **MD** | Multiply & Divide — left to right |
| **AS** | Add & Subtract — left to right |

### Worked Example: $-3 + 4 \\times (-2)$

Multiply **before** you add:

$$-3 + 4 \\times (-2) = -3 + (-8) = -11$$

### Worked Example: $(-6 + 2) \\times 5$

Do the **parentheses** first:

$$(-6 + 2) \\times 5 = (-4) \\times 5 = -20$$

> ⚠️ **Don't add first!** In $-3 + 4 \\times (-2)$, you must multiply $4 \\times (-2)$ before adding. Doing $-3 + 4$ first gives the wrong answer.`,
      },
      {
        id: 'int5-pemdas-drill',
        type: 'input-boxes' as const,
        content: `**Order of Operations** 🧮

Follow PEMDAS. Use a negative sign when needed.

**1)** $5 + (-3) \\times 2 = \\,?$
**2)** $(-8 + 3) \\times (-2) = \\,?$
**3)** $-10 \\div 2 + (-4) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1', '10', '-9'],
          hint1: 'Multiply first: $(-3) \\times 2 = -6$, then $5 + (-6) = -1$.',
          hint2: 'Parentheses first: $-8 + 3 = -5$, then $(-5) \\times (-2) = 10$ (same signs → positive).',
          hint3: 'Divide first: $-10 \\div 2 = -5$, then $-5 + (-4) = -9$.',
          explanation: '1) $5 + (-6) = -1$.  2) $(-5)\\times(-2) = 10$.  3) $-5 + (-4) = -9$. Multiply/divide before add/subtract.',
        },
      },
      {
        id: 'int5-wordproblem',
        type: 'text' as const,
        content: `## Integers in the Real World

Integers model gains and losses, ups and downs. Translate the words into a signed number, then compute.

### Worked Example — Temperature

At 6 a.m. the temperature was $-4^\\circ$F. By noon it rose $11^\\circ$. What is the new temperature?

$$-4 + 11 = 7 \\quad\\Rightarrow\\quad 7^\\circ\\text{F}$$

### Worked Example — Money

A bank account has \\$30. You spend \\$12 three times (three withdrawals). What is the new balance?

$$30 + 3 \\times (-12) = 30 + (-36) = -6 \\quad\\Rightarrow\\quad \\text{a balance of } -\\$6 \\text{ (overdrawn)}$$

> 💡 **Translate first:** "rose / gained / above" → positive; "fell / lost / below / spent / owe" → negative.`,
      },
      {
        id: 'int5-word-mc',
        type: 'multiple-choice' as const,
        content: `**Word-Problem Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A diver is $15$ feet below the surface (at $-15$). She rises $9$ feet. What is her new depth?',
              options: ['$-6$ feet', '$-24$ feet', '$6$ feet', '$24$ feet'],
              correctAnswer: 0,
              explanation: 'Rising means adding a positive: $-15 + 9 = -6$. She is now $6$ feet below the surface.',
            },
            {
              question: 'A football team loses $5$ yards on each of $3$ plays. What is the total change in yards?',
              options: ['$-15$', '$15$', '$-8$', '$-2$'],
              correctAnswer: 0,
              explanation: 'Each loss is $-5$, and there are $3$ of them: $3 \\times (-5) = -15$ yards.',
            },
          ],
        },
      },
      {
        id: 'int5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Operation | Rule |
|-----------|------|
| Add, **same** signs | Add distances, keep the sign |
| Add, **different** signs | Subtract distances, keep sign of the farther-from-zero number |
| Subtract | Keep · Change · Change → add the opposite |
| Multiply / Divide | Same signs → positive; different signs → negative |
| Several factors | Count negatives: even → $+$, odd → $-$ |
| Order of operations | P, E, MD (left→right), AS (left→right) |

> 🔑 You're ready for the Exit Quiz. Take your time and check each sign.`,
      },
      {
        id: 'int5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: '$(-12) + 5 = ?$',
              options: ['$-7$', '$7$', '$-17$', '$17$'],
              correctAnswer: 0,
              explanation: 'Different signs: $12 - 5 = 7$, and $-12$ is farther from zero, so the answer is negative: $-7$.',
            },
            {
              question: '$7 - (-3) = ?$',
              options: ['$10$', '$4$', '$-10$', '$-4$'],
              correctAnswer: 0,
              explanation: 'Subtracting a negative becomes adding: $7 + 3 = 10$.',
            },
            {
              question: '$(-6) \\times (-5) = ?$',
              options: ['$30$', '$-30$', '$11$', '$-11$'],
              correctAnswer: 0,
              explanation: 'Same signs (both negative) → positive. $6 \\times 5 = 30$, so the product is $30$.',
            },
          ],
        },
      },
    ],
  },
]
