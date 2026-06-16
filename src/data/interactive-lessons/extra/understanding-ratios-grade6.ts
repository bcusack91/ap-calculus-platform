import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Understanding Ratios (Grade 6 Math).
 * Registry key / DB slug: 'understanding-ratios-grade6'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'understanding-ratios-grade6',
    sections: [
      {
        id: 'ratio1-intro',
        type: 'text' as const,
        content: `# ⚖️ Understanding Ratios

**Part 1 of 5 — What Is a Ratio?**

---

### Topics in This Part

| Section |
|---------|
| What a Ratio Compares |
| The Three Ways to Write a Ratio |
| Why the Order Matters |

> 🔑 **Key Concept:** A **ratio** compares **two amounts**. If a fruit bowl has $3$ apples and $2$ oranges, the ratio of apples to oranges is $3$ to $2$ — it tells you how the amounts compare, not how many there are in total.`,
      },
      {
        id: 'ratio1-what',
        type: 'text' as const,
        content: `## What a Ratio Compares

A **ratio** is a comparison of two quantities by how much of one there is for each amount of the other.

Imagine a box of **5 blue marbles** and **3 red marbles**:

- The ratio of **blue to red** is $5$ to $3$.
- The ratio of **red to blue** is $3$ to $5$.
- The ratio of **blue to the total** is $5$ to $8$ (because $5 + 3 = 8$).

> 💡 **Notice:** A ratio doesn't have to compare a part to a part. It can also compare a **part to the whole**, like blue marbles to *all* the marbles.

### Real Examples of Ratios

| Situation | Ratio | Reads as |
|-----------|-------|----------|
| 2 teachers for 30 students | $2 : 30$ | "2 to 30" |
| 4 cups flour, 1 cup sugar | $4 : 1$ | "4 to 1" |
| 7 wins, 3 losses | $7 : 3$ | "7 to 3" |`,
      },
      {
        id: 'ratio1-three-ways',
        type: 'text' as const,
        content: `## The Three Ways to Write a Ratio

The **same** ratio can be written three different ways. All three mean exactly the same thing:

| Form | Looks like | Example (3 cats to 4 dogs) |
|------|-----------|----------------------------|
| Words | "$a$ to $b$" | $3$ to $4$ |
| Colon | $a : b$ | $3 : 4$ |
| Fraction | $\\dfrac{a}{b}$ | $\\dfrac{3}{4}$ |

So "$3$ to $4$", "$3 : 4$", and $\\dfrac{3}{4}$ are **three names for the same ratio**.

> ⚠️ **Watch out:** A ratio written as a fraction like $\\dfrac{3}{4}$ does **not** always mean "three-fourths of the whole." Here it means *3 cats for every 4 dogs* — a comparison, not a piece of one pizza.`,
      },
      {
        id: 'ratio1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A garden has 6 roses and 9 tulips. What is the ratio of roses to tulips?',
              options: ['$6 : 9$', '$9 : 6$', '$6 : 15$', '$9 : 15$'],
              correctAnswer: 0,
              explanation: 'The ratio of roses to tulips lists roses first: $6 : 9$. (Writing $9:6$ would be tulips to roses.)',
            },
            {
              question: 'Which of these is NOT another way to write the ratio "5 to 2"?',
              options: ['$5 : 2$', '$\\dfrac{5}{2}$', '$2 : 5$', '5 to 2'],
              correctAnswer: 2,
              explanation: '"5 to 2", $5:2$, and $\\dfrac{5}{2}$ all name the same ratio. But $2 : 5$ reverses the order, so it is a different ratio.',
            },
          ],
        },
      },
      {
        id: 'ratio1-order',
        type: 'text' as const,
        content: `## Why the Order Matters

In a ratio, **the order you write the numbers tells you what is being compared to what.**

If a recipe needs **2 cups of water for every 1 cup of rice**:

- Water to rice is $2 : 1$ ✅
- Rice to water is $1 : 2$ ✅

These are **not** the same! $2 : 1$ means *more water than rice*, but $1 : 2$ means *less water than rice*.

> 🔑 **Key Idea:** Always read a ratio left-to-right in the same order the words are given. "Cats to dogs" puts the **cat number first**.`,
      },
      {
        id: 'ratio1-order-drill',
        type: 'dropdown-select' as const,
        content: `**Match the Words to the Ratio** 🔽

A classroom has **8 boys** and **12 girls**.`,
        exercise: {
          dropdowns: [
            { label: 'Ratio of boys to girls:', options: ['$8 : 12$', '$12 : 8$', '$8 : 20$', '$12 : 20$'] },
            { label: 'Ratio of girls to boys:', options: ['$12 : 8$', '$8 : 12$', '$20 : 8$', '$20 : 12$'] },
            { label: 'Ratio of boys to all students:', options: ['$8 : 20$', '$8 : 12$', '$12 : 20$', '$20 : 8$'] },
          ],
          correctAnswers: ['$8 : 12$', '$12 : 8$', '$8 : 20$'],
          hint1: '"Boys to girls" puts boys ($8$) first.',
          hint2: '"Girls to boys" puts girls ($12$) first.',
          hint3: 'The total is $8 + 12 = 20$ students, so boys to all is $8 : 20$.',
          explanation: 'Boys:girls $= 8:12$. Girls:boys $= 12:8$. Boys:total $= 8:20$ since $8+12=20$.',
        },
      },
      {
        id: 'ratio1-count-drill',
        type: 'input-boxes' as const,
        content: `**Read the Picture** 🧮

A pet store window shows **5 puppies** and **4 kittens**.

**1)** What is the **first** number in the ratio of puppies to kittens?
**2)** What is the **second** number in that ratio?
**3)** How many animals are in the window **in total**?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '4', '9'],
          hint1: '"Puppies to kittens" lists puppies first — count the puppies.',
          hint2: 'The second number is the kittens.',
          hint3: 'Total $=$ puppies $+$ kittens $= 5 + 4$.',
          explanation: 'Puppies to kittens is $5 : 4$, so the first number is $5$ and the second is $4$. Total animals $= 5 + 4 = 9$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'understanding-ratios-grade6',
    sections: [
      {
        id: 'ratio2-intro',
        type: 'text' as const,
        content: `# ⚖️ Understanding Ratios

**Part 2 of 5 — Equivalent Ratios & Simplest Form**

---

> 🔑 **The Idea:** Just like $\\dfrac{1}{2} = \\dfrac{2}{4}$, two ratios can look different but mean the same comparison. We make them by **multiplying or dividing both numbers by the same amount.**`,
      },
      {
        id: 'ratio2-equiv',
        type: 'text' as const,
        content: `## Equivalent Ratios

Two ratios are **equivalent** if you can get from one to the other by multiplying (or dividing) **both** numbers by the **same** number.

Start with $2 : 3$. Multiply both parts by $2$, then by $3$, then by $4$:

| Multiply by | Ratio |
|-------------|-------|
| $\\times 1$ | $2 : 3$ |
| $\\times 2$ | $4 : 6$ |
| $\\times 3$ | $6 : 9$ |
| $\\times 4$ | $8 : 12$ |

So $2 : 3 = 4 : 6 = 6 : 9 = 8 : 12$. They are all **equivalent ratios**.

> ⚠️ **Both numbers, same multiplier!** Multiplying only one part breaks the comparison. $2 : 3$ is *not* equal to $4 : 3$.`,
      },
      {
        id: 'ratio2-equiv-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which ratio is equivalent to $3 : 5$?',
              options: ['$6 : 10$', '$6 : 5$', '$3 : 10$', '$8 : 10$'],
              correctAnswer: 0,
              explanation: 'Multiply both parts of $3:5$ by $2$: $3\\times 2 = 6$ and $5 \\times 2 = 10$, giving $6 : 10$. ✓',
            },
            {
              question: 'Is $4 : 6$ equivalent to $2 : 3$?',
              options: ['Yes — divide both by 2', 'No — they are different ratios', 'Yes — but only if you add 2', 'No — 4 and 2 are too far apart'],
              correctAnswer: 0,
              explanation: 'Divide both parts of $4:6$ by $2$: $4\\div 2 = 2$ and $6 \\div 2 = 3$, giving $2:3$. So yes, they are equivalent.',
            },
          ],
        },
      },
      {
        id: 'ratio2-fill',
        type: 'input-boxes' as const,
        content: `**Find the Missing Number** 🧮

Each pair of ratios is equivalent. Find the missing value.

**1)** $2 : 5 = 8 : \\,?$
**2)** $3 : 4 = \\,? : 12$
**3)** $10 : 6 = 5 : \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['20', '9', '3'],
          hint1: 'From $2:5$ to $8:?$, the first part was multiplied by $4$ (since $2\\times 4 = 8$). Do the same to $5$.',
          hint2: 'From $4$ to $12$ is $\\times 3$. So multiply $3$ by $3$.',
          hint3: 'From $10:6$ to $5:?$, the first part was divided by $2$ (since $10\\div 2 = 5$). Do the same to $6$.',
          explanation: '1) $5 \\times 4 = 20$.  2) $3 \\times 3 = 9$.  3) $6 \\div 2 = 3$.',
        },
      },
      {
        id: 'ratio2-simplify',
        type: 'text' as const,
        content: `## Simplest Form (Reducing a Ratio)

A ratio is in **simplest form** when the two numbers share **no common factor** except $1$ — exactly like reducing a fraction.

To simplify, divide both parts by their **greatest common factor (GCF)**.

### Example: Simplify $12 : 18$

The GCF of $12$ and $18$ is $6$:

$$12 : 18 \\;\\xrightarrow{\\;\\div 6\\;}\\; 2 : 3$$

So $12 : 18$ in simplest form is $2 : 3$.

### Example: Simplify $9 : 15$

The GCF of $9$ and $15$ is $3$:

$$9 : 15 \\;\\xrightarrow{\\;\\div 3\\;}\\; 3 : 5$$

> 💡 **Tip:** If you can't spot the GCF at once, just keep dividing by any common factor ($2$, $3$, $5$…) until nothing divides both numbers.`,
      },
      {
        id: 'ratio2-simplify-drill',
        type: 'input-boxes' as const,
        content: `**Simplify Each Ratio** 🧮

Write each ratio in simplest form. Enter the **first** number, then the **second** number.

**1)** $10 : 15 = \\,? : \\,?$
**2)** $8 : 12 = \\,? : \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['2', '3', '2', '3'],
          hint1: 'The GCF of $10$ and $15$ is $5$: $10\\div 5 = 2$, $15 \\div 5 = 3$.',
          hint2: 'The GCF of $8$ and $12$ is $4$: $8 \\div 4 = 2$, $12 \\div 4 = 3$.',
          hint3: 'Both simplify to $2 : 3$ — divide each pair by its greatest common factor.',
          explanation: '1) $10:15 \\div 5 = 2:3$.  2) $8:12 \\div 4 = 2:3$. Both reduce to $2 : 3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'understanding-ratios-grade6',
    sections: [
      {
        id: 'ratio3-intro',
        type: 'text' as const,
        content: `# ⚖️ Understanding Ratios

**Part 3 of 5 — Ratio Tables & Unit Rates**

---

> 🔑 **Why this matters:** A **ratio table** lets you scale a ratio up or down to answer real questions like "If 3 tickets cost \\$12, how much do 7 tickets cost?" The secret is the **unit rate** — the amount for *just one*.`,
      },
      {
        id: 'ratio3-table',
        type: 'text' as const,
        content: `## Ratio Tables

A **ratio table** is a row of equivalent ratios. Each column keeps the same comparison.

If $1$ bag holds $4$ apples, then:

| Bags | $1$ | $2$ | $3$ | $4$ | $5$ |
|------|-----|-----|-----|-----|-----|
| Apples | $4$ | $8$ | $12$ | $16$ | $20$ |

Every column is the ratio $1 : 4$ scaled up. To fill a table, **multiply both rows by the same number** to move right, or **divide** to move left.

> 💡 You can jump straight to any column: $7$ bags $\\rightarrow 7 \\times 4 = 28$ apples.`,
      },
      {
        id: 'ratio3-table-drill',
        type: 'input-boxes' as const,
        content: `**Fill In the Ratio Table** 🧮

A muffin recipe uses $3$ eggs for every $12$ muffins. Use the ratio $3 : 12$ to complete the table.

| Eggs | $3$ | $6$ | $\\,?\\,$ (box 1) | $12$ |
|------|-----|-----|------|------|
| Muffins | $12$ | $\\,?\\,$ (box 2) | $36$ | $\\,?\\,$ (box 3) |`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '24', '48'],
          hint1: 'Box 1: $36$ muffins means $36 \\div 12 = 3$ groups, so $3 \\times 3 = 9$ eggs.',
          hint2: 'Box 2: $6$ eggs is double $3$ eggs, so double $12$ muffins $= 24$.',
          hint3: 'Box 3: $12$ eggs is $4 \\times 3$, so muffins $= 4 \\times 12 = 48$.',
          explanation: 'Each egg makes $4$ muffins. Box 1: $9$ eggs ($\\to 36$). Box 2: $6$ eggs $\\to 24$ muffins. Box 3: $12$ eggs $\\to 48$ muffins.',
        },
      },
      {
        id: 'ratio3-unitrate',
        type: 'text' as const,
        content: `## Unit Rate: The Amount for "One"

A **unit rate** is a ratio that compares an amount to **exactly one** of the other thing. The second number becomes $1$.

To find a unit rate, **divide** so the second quantity equals $1$.

### Example: 12 dollars for 3 tickets

$$\\frac{\\$12}{3 \\text{ tickets}} = \\frac{\\$12 \\div 3}{3 \\div 3} = \\frac{\\$4}{1 \\text{ ticket}}$$

The unit rate is **\\$4 per ticket**.

### Example: 150 miles in 3 hours

$$\\frac{150 \\text{ mi}}{3 \\text{ hr}} = \\frac{150 \\div 3}{3 \\div 3} = \\frac{50 \\text{ mi}}{1 \\text{ hr}} = 50 \\text{ mph}$$

> 🔑 **Once you know the unit rate, you can find *any* amount** — just multiply. $7$ tickets $= 7 \\times \\$4 = \\$28$.`,
      },
      {
        id: 'ratio3-unitrate-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A store sells 6 oranges for \\$3. What is the unit rate (price per orange)?',
              options: ['\\$0.50 per orange', '\\$2 per orange', '\\$3 per orange', '\\$18 per orange'],
              correctAnswer: 0,
              explanation: 'Divide to get "per one orange": $\\$3 \\div 6 = \\$0.50$ per orange.',
            },
            {
              question: 'A car travels 120 miles in 2 hours. What is its unit rate?',
              options: ['$60$ miles per hour', '$120$ miles per hour', '$240$ miles per hour', '$2$ miles per hour'],
              correctAnswer: 0,
              explanation: '$120 \\text{ mi} \\div 2 \\text{ hr} = 60$ miles per hour.',
            },
          ],
        },
      },
      {
        id: 'ratio3-unitrate-drill',
        type: 'input-boxes' as const,
        content: `**Find the Unit Rate** 🧮

Find each unit rate by dividing.

**1)** $20$ dollars for $5$ shirts $= \\,?$ dollars per shirt
**2)** $45$ words typed in $9$ minutes $= \\,?$ words per minute
**3)** A $7$-ticket bundle costs \\$$4$ each. Total cost $= \\$\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '5', '28'],
          hint1: '$20 \\div 5 = 4$ dollars per shirt.',
          hint2: '$45 \\div 9 = 5$ words per minute.',
          hint3: 'With the unit rate \\$4 per ticket, $7$ tickets $= 7 \\times 4 = 28$.',
          explanation: '1) $20\\div 5 = 4$.  2) $45 \\div 9 = 5$.  3) $7 \\times 4 = 28$ dollars.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'understanding-ratios-grade6',
    sections: [
      {
        id: 'ratio4-intro',
        type: 'text' as const,
        content: `# ⚖️ Understanding Ratios

**Part 4 of 5 — Part-to-Part, Part-to-Whole & Word Problems**

---

> 🔑 **Big Idea:** A part-to-part ratio (like boys to girls) can be turned into a part-to-whole ratio (boys to *everyone*) by adding the parts to get the total. This unlocks real word problems.`,
      },
      {
        id: 'ratio4-part-whole',
        type: 'text' as const,
        content: `## Part-to-Part vs. Part-to-Whole

Suppose a bag of fruit snacks has **red to green in the ratio $3 : 2$**.

- **Part-to-part:** red to green is $3 : 2$.
- The **total** number of "parts" is $3 + 2 = 5$.
- **Part-to-whole:** red to all is $3 : 5$, and green to all is $2 : 5$.

| Comparison | Ratio |
|-----------|-------|
| Red to green (part to part) | $3 : 2$ |
| Red to total (part to whole) | $3 : 5$ |
| Green to total (part to whole) | $2 : 5$ |

> 💡 **The total is the sum of the parts.** Add the two numbers of a part-to-part ratio to find how many equal "shares" the whole is divided into.`,
      },
      {
        id: 'ratio4-part-whole-check',
        type: 'dropdown-select' as const,
        content: `**Part or Whole?** 🔽

A team's wins to losses are in the ratio $5 : 3$.`,
        exercise: {
          dropdowns: [
            { label: 'Total number of "parts":', options: ['$8$', '$5$', '$3$', '$15$'] },
            { label: 'Ratio of wins to total games:', options: ['$5 : 8$', '$5 : 3$', '$3 : 8$', '$8 : 5$'] },
            { label: 'Ratio of losses to total games:', options: ['$3 : 8$', '$3 : 5$', '$5 : 8$', '$8 : 3$'] },
          ],
          correctAnswers: ['$8$', '$5 : 8$', '$3 : 8$'],
          hint1: 'Add the parts: $5 + 3 = 8$.',
          hint2: 'Wins to total uses the total $8$: $5 : 8$.',
          hint3: 'Losses to total uses the total $8$: $3 : 8$.',
          explanation: 'Total parts $= 5 + 3 = 8$. Wins:total $= 5:8$; losses:total $= 3:8$.',
        },
      },
      {
        id: 'ratio4-worked',
        type: 'text' as const,
        content: `## Solving Ratio Word Problems

### Example: Sharing in a ratio

Maria and Jon share $20$ stickers in the ratio $3 : 2$. How many does each get?

**Step 1 — Find the total parts:** $3 + 2 = 5$ parts.

**Step 2 — Find one part:** $20 \\div 5 = 4$ stickers per part.

**Step 3 — Multiply each share:**
$$\\text{Maria} = 3 \\times 4 = 12, \\qquad \\text{Jon} = 2 \\times 4 = 8$$

> ✅ **Check:** $12 + 8 = 20$ ✓ and $12 : 8$ simplifies to $3 : 2$ ✓

### Example: Scaling a recipe

A recipe uses flour to sugar in the ratio $4 : 1$. If you use $12$ cups of flour, how much sugar?

From $4$ to $12$ is $\\times 3$, so sugar $= 1 \\times 3 = 3$ cups.`,
      },
      {
        id: 'ratio4-word-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two friends share \\$30 in the ratio $2 : 1$. How much does the friend with the larger share get?',
              options: ['\\$20', '\\$10', '\\$15', '\\$30'],
              correctAnswer: 0,
              explanation: 'Total parts $= 2 + 1 = 3$. One part $= \\$30 \\div 3 = \\$10$. Larger share $= 2 \\times \\$10 = \\$20$.',
            },
            {
              question: 'Paint is mixed blue to white in the ratio $5 : 2$. If you use $10$ cups of blue, how much white?',
              options: ['$4$ cups', '$2$ cups', '$5$ cups', '$7$ cups'],
              correctAnswer: 0,
              explanation: 'From $5$ to $10$ is $\\times 2$, so white $= 2 \\times 2 = 4$ cups.',
            },
          ],
        },
      },
      {
        id: 'ratio4-word-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Word Problems** 🧮

**1)** A class of $24$ students has a boys-to-girls ratio of $1 : 2$. How many **girls** are there?
**2)** A smoothie mixes juice to yogurt in the ratio $3 : 2$. With $9$ cups of juice, how many cups of **yogurt**?
**3)** \\$$28$ is shared in the ratio $4 : 3$. How many dollars is the **larger** share?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '6', '16'],
          hint1: 'Parts $= 1 + 2 = 3$, so one part $= 24 \\div 3 = 8$. Girls $= 2 \\times 8$.',
          hint2: 'From $3$ to $9$ is $\\times 3$, so yogurt $= 2 \\times 3$.',
          hint3: 'Parts $= 4 + 3 = 7$, one part $= 28 \\div 7 = 4$. Larger share $= 4 \\times 4$.',
          explanation: '1) one part $= 8$, girls $= 2\\times 8 = 16$.  2) yogurt $= 2 \\times 3 = 6$.  3) one part $= 4$, larger $= 4 \\times 4 = 16$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'understanding-ratios-grade6',
    sections: [
      {
        id: 'ratio5-intro',
        type: 'text' as const,
        content: `# ⚖️ Understanding Ratios

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) write ratios three ways, (2) build equivalent ratios and simplify them, (3) use ratio tables and unit rates, and (4) solve part-to-whole word problems. Let's put it all together.`,
      },
      {
        id: 'ratio5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Write a ratio | "$a$ to $b$", $a : b$, or $\\dfrac{a}{b}$ — same order as the words |
| Make an equivalent ratio | multiply **both** parts by the same number |
| Simplest form | divide both parts by their **GCF** |
| Unit rate | divide so the second amount is $1$ |
| Part to whole | total $=$ sum of the parts |
| Share in a ratio | total $\\div$ (sum of parts) $=$ one part, then multiply |

> ⚠️ **Two reminders:** keep the **order** consistent, and when scaling, change **both** numbers by the same amount.`,
      },
      {
        id: 'ratio5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify the ratio $18 : 24$.',
              options: ['$3 : 4$', '$2 : 3$', '$6 : 8$', '$9 : 12$'],
              correctAnswer: 0,
              explanation: 'The GCF of $18$ and $24$ is $6$: $18 \\div 6 = 3$ and $24 \\div 6 = 4$, giving $3 : 4$.',
            },
            {
              question: 'A printer prints $40$ pages in $5$ minutes. What is the unit rate?',
              options: ['$8$ pages per minute', '$5$ pages per minute', '$40$ pages per minute', '$200$ pages per minute'],
              correctAnswer: 0,
              explanation: '$40 \\div 5 = 8$ pages per minute.',
            },
          ],
        },
      },
      {
        id: 'ratio5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More Round** 🧮

**1)** $4 : 7 = 12 : \\,?$  (find the missing number)
**2)** Simplify $30 : 45$. Enter the first number, then the second.
**3)** \\$$36$ is shared in the ratio $5 : 1$. The larger share is \\$$\\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['21', '2', '3', '30'],
          hint1: 'From $4$ to $12$ is $\\times 3$, so $7 \\times 3 = 21$.',
          hint2: 'GCF of $30$ and $45$ is $15$: $30\\div 15 = 2$, $45 \\div 15 = 3$.',
          hint3: 'Parts $= 5 + 1 = 6$; one part $= 36 \\div 6 = 6$; larger $= 5 \\times 6 = 30$.',
          explanation: '1) $7 \\times 3 = 21$.  2) $30:45 = 2:3$.  3) one part $= 6$, larger share $= 5 \\times 6 = \\$30$.',
        },
      },
      {
        id: 'ratio5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A fruit bowl has 4 apples and 6 bananas. What is the ratio of apples to bananas in simplest form?',
              options: ['$2 : 3$', '$4 : 6$', '$3 : 2$', '$2 : 5$'],
              correctAnswer: 0,
              explanation: '$4 : 6$ divided by the GCF $2$ gives $2 : 3$.',
            },
            {
              question: 'Which ratio is equivalent to $6 : 9$?',
              options: ['$2 : 3$', '$3 : 2$', '$6 : 3$', '$9 : 6$'],
              correctAnswer: 0,
              explanation: 'Divide both parts of $6:9$ by the GCF $3$: $6\\div 3 = 2$ and $9 \\div 3 = 3$, giving $2 : 3$.',
            },
            {
              question: '24 cookies are shared in the ratio $1 : 3$. How many cookies does the larger share get?',
              options: ['$18$', '$6$', '$12$', '$8$'],
              correctAnswer: 0,
              explanation: 'Parts $= 1 + 3 = 4$; one part $= 24 \\div 4 = 6$; larger share $= 3 \\times 6 = 18$.',
            },
          ],
        },
      },
    ],
  },
]
