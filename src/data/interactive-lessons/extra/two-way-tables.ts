import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Two-Way Tables (Grade 8 Math, CCSS 8.SP.A.4).
 * Registry key / DB Topic.slug: 'two-way-tables'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Grade 8:
 * reading a two-way table, marginal/joint totals, completing a table from margins,
 * relative frequencies (decimals & percents), conditional relative frequencies
 * (row % / column %), and judging association. LaTeX uses doubled backslashes
 * (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'two-way-tables',
    sections: [
      {
        id: 'twt1-intro',
        type: 'text' as const,
        content: `# 📊 Two-Way Tables

**Part 1 of 5 — Reading the Table**

---

### Topics in This Part

| Section |
|---------|
| What Is a Two-Way Table? |
| Cells, Rows, and Columns |
| Marginal Totals (the Margins) |

> 🔑 **Key Concept:** A **two-way table** sorts the same group of people (or things) by **two** categorical variables at once — like "grade level" *and* "favorite sport." It lets you see how the two categories overlap.`,
      },
      {
        id: 'twt1-what',
        type: 'text' as const,
        content: `## What Is a Two-Way Table?

Suppose we survey **80 students** and ask two yes/no questions:

- Do you own a **dog**?
- Do you own a **cat**?

Each student lands in exactly **one** box of this table:

|              | Owns a Cat | No Cat | **Total** |
|--------------|:----------:|:------:|:---------:|
| **Owns a Dog** | 18 | 27 | **45** |
| **No Dog**     | 14 | 21 | **35** |
| **Total**      | **32** | **48** | **80** |

- The **inside** numbers ($18, 27, 14, 21$) are the **joint frequencies** — they count people in *both* categories at once.
- The **right column** and **bottom row** are the **marginal totals** — they live in the *margins* of the table.

> 🔑 **Key Idea:** Every inside number answers "how many are in **this row AND this column**?" For example, $18$ students own **a dog AND a cat**.`,
      },
      {
        id: 'twt1-read-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the dog/cat table above.`,
        exercise: {
          questions: [
            {
              question: 'How many students own a dog but NO cat?',
              options: ['$27$', '$18$', '$45$', '$14$'],
              correctAnswer: 0,
              explanation: 'Find the "Owns a Dog" row and the "No Cat" column. They cross at $27$.',
            },
            {
              question: 'How many students own a cat AND a dog?',
              options: ['$32$', '$18$', '$45$', '$14$'],
              correctAnswer: 1,
              explanation: '"Owns a Dog" row meets "Owns a Cat" column at $18$ — these students have both pets.',
            },
            {
              question: 'What does the $35$ in the bottom-right area represent?',
              options: [
                'Students with no dog (a marginal total)',
                'Students with a cat',
                'Students with both pets',
                'Students with neither pet',
              ],
              correctAnswer: 0,
              explanation: '$35$ sits at the end of the "No Dog" row, so it is the total of everyone with no dog: $14 + 21 = 35$. It is a marginal total.',
            },
          ],
        },
      },
      {
        id: 'twt1-margins',
        type: 'text' as const,
        content: `## The Margins Are Just Sums

Every marginal total is found by **adding across a row** or **down a column**:

$$\\underbrace{18 + 27}_{\\text{Dog row}} = 45 \\qquad \\underbrace{18 + 14}_{\\text{Cat column}} = 32$$

And the **grand total** in the bottom-right corner can be reached three different ways — they must all agree:

| Add this way | Calculation | Result |
|--------------|-------------|:------:|
| The two row totals | $45 + 35$ | $80$ |
| The two column totals | $32 + 48$ | $80$ |
| All four inside cells | $18+27+14+21$ | $80$ |

> 💡 **Built-in check:** If your row totals and column totals don't add up to the **same** grand total, a number is wrong somewhere. Two-way tables check themselves.`,
      },
      {
        id: 'twt1-margin-drill',
        type: 'input-boxes' as const,
        content: `**Find the Marginal Totals** 🧮

A different survey of students about **breakfast** is shown. Fill in the missing totals.

|              | Eats Breakfast | Skips Breakfast |
|--------------|:--------------:|:---------------:|
| **6th Grade** | 22 | 8 |
| **7th Grade** | 19 | 11 |

**1)** Total number of **6th graders** $= \\,?$
**2)** Total number of students who **eat breakfast** $= \\,?$
**3)** **Grand total** of all students surveyed $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '41', '60'],
          hint1: 'A row total adds across: $22 + 8$.',
          hint2: 'A column total adds down: $22 + 19$.',
          hint3: 'The grand total adds every inside cell: $22+8+19+11$, which also equals $30 + 30$.',
          explanation: '1) 6th grade: $22+8 = 30$.  2) Eats breakfast: $22+19 = 41$.  3) Grand total: $30 + 30 = 60$ (or $41 + 19 = 60$). ✓',
        },
      },
      {
        id: 'twt1-vocab-text',
        type: 'text' as const,
        content: `## Naming the Numbers

Before moving on, let's lock in the vocabulary:

- An **inside cell** is a **joint frequency** — it counts members of one row category **and** one column category.
- A number in the right column or bottom row is a **marginal total**.
- The corner number is the **grand total**.

> 💡 The word *joint* literally means "joined together" — two categories joined in one cell.`,
      },
      {
        id: 'twt1-vocab-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Number** 🔽

Use the same breakfast table (6th grade: 22 eat, 8 skip; 7th grade: 19 eat, 11 skip). Classify each value.`,
        exercise: {
          dropdowns: [
            { label: 'The $19$ (7th graders who eat breakfast):', options: ['Joint frequency (an inside cell)', 'Marginal total (a margin)'] },
            { label: 'The $30$ (all 6th graders):', options: ['Joint frequency (an inside cell)', 'Marginal total (a margin)'] },
            { label: 'The $60$ in the very corner:', options: ['Grand total', 'A single inside cell'] },
          ],
          correctAnswers: ['Joint frequency (an inside cell)', 'Marginal total (a margin)', 'Grand total'],
          hint1: 'An inside cell counts people in BOTH a row category and a column category at once.',
          hint2: 'A margin total counts everyone in just ONE category (a whole row or whole column).',
          hint3: '$19$ is inside the table (7th AND eats) → joint. $30$ ends a row → marginal. $60$ is the grand total of everyone.',
          explanation: '$19$ is an inside cell → joint frequency. $30$ is a row total → marginal total. $60$ is the grand total in the corner where all rows and columns meet.',
        },
      },
      {
        id: 'twt1-wrap',
        type: 'text' as const,
        content: `## What You Can Do Now

You can locate any **joint frequency** (an inside cell) and build the **marginal totals** by summing.

In **Part 2** you'll work in reverse: when some cells are blank, you'll use the margins to figure out the missing numbers — like a number puzzle that always has one answer.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'two-way-tables',
    sections: [
      {
        id: 'twt2-intro',
        type: 'text' as const,
        content: `# 📊 Two-Way Tables

**Part 2 of 5 — Completing a Table**

---

> 🔑 **The Idea:** Because every row and column **must** add to its total, a two-way table with a few blanks behaves like a puzzle: each empty cell can be recovered by subtraction.`,
      },
      {
        id: 'twt2-method',
        type: 'text' as const,
        content: `## Filling In Blanks with Subtraction

If a row total is known and one cell is missing, then:

$$\\text{missing cell} = \\text{row total} - \\text{known cell}$$

The same works going **down** a column.

### Worked Example

A class of **50 students** chose pizza or tacos. Some cells are missing (shown as ?):

|              | Pizza | Tacos | **Total** |
|--------------|:-----:|:-----:|:---------:|
| **Boys**     | 12 | ? | **20** |
| **Girls**    | ? | 17 | **?** |
| **Total**    | **25** | **?** | **50** |

**Step 1 — Boys/Tacos** (fill the row): $20 - 12 = 8$.

**Step 2 — Girls/Pizza** (fill the Pizza column): $25 - 12 = 13$.

**Step 3 — Girls total** (fill the Girls row): $13 + 17 = 30$. *(Check: $20 + 30 = 50$ ✓)*

**Step 4 — Tacos total** (fill the column): $8 + 17 = 25$. *(Check: $25 + 25 = 50$ ✓)*

> 💡 **Order tip:** Always start with a row or column that has **only one** blank — then it's a single subtraction.`,
      },
      {
        id: 'twt2-method-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the completed pizza/tacos table from the worked example.`,
        exercise: {
          questions: [
            {
              question: 'How many girls chose pizza?',
              options: ['$13$', '$8$', '$17$', '$25$'],
              correctAnswer: 0,
              explanation: 'The Pizza column total is $25$ and boys took $12$ of them, so girls had $25 - 12 = 13$.',
            },
            {
              question: 'To find a missing cell when its ROW total is known, you should:',
              options: [
                'Subtract the known cell from the row total',
                'Add the row total to the known cell',
                'Multiply the two known cells',
                'Subtract the grand total from the row total',
              ],
              correctAnswer: 0,
              explanation: 'A row adds to its total, so missing cell $=$ row total $-$ known cell. Here that is the reverse of addition.',
            },
          ],
        },
      },
      {
        id: 'twt2-your-turn',
        type: 'text' as const,
        content: `## Your Turn — Pick the Easy Cell First

When you face a blank table, scan for a row or column that has **only one** missing cell. That blank is a single subtraction away. Fill it, and often a *new* row or column now has just one blank — keep going until the table is full.

> 🔑 **Strategy:** Solve the easy blanks first; each one you fill makes the next one easier.`,
      },
      {
        id: 'twt2-fill-drill',
        type: 'input-boxes' as const,
        content: `**Complete the Table** 🧮

A survey of **100 people** asked whether they prefer **tea** or **coffee**:

|              | Tea | Coffee | **Total** |
|--------------|:---:|:------:|:---------:|
| **Adults**   | ?   | 56     | **?**     |
| **Teens**    | 21  | ?      | **30**    |
| **Total**    | **35** | **?** | **100**   |

**1)** Adults who prefer **tea** $= \\,?$
**2)** Teens who prefer **coffee** $= \\,?$
**3)** Total number of **adults** $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['14', '9', '70'],
          hint1: 'Tea column total is $35$; teens took $21$, so adults have $35 - 21$.',
          hint2: 'The Teens row total is $30$ and tea took $21$, so coffee is $30 - 21$.',
          hint3: 'Adults total $=$ grand total $-$ teens $= 100 - 30 = 70$.',
          explanation: '1) Adults/Tea $= 35 - 21 = 14$.  2) Teens/Coffee $= 30 - 21 = 9$.  3) Adults total $= 100 - 30 = 70$ (check the Adults row: $14 + 56 = 70$ ✓, and the Coffee column: $56 + 9 = 65 = 100 - 35$ ✓).',
        },
      },
      {
        id: 'twt2-consistency',
        type: 'text' as const,
        content: `## A Note on Consistency

When you finish a table, **every** row and column should land on its printed total, and the row totals and column totals should both sum to the **same** grand total. If they don't, recheck your subtractions — a single arithmetic slip ripples through the whole table.

> ⚠️ **Common mistake:** Filling a blank by *guessing* instead of subtracting. There is only **one** number that makes the row (or column) add up correctly — find it, don't estimate it.`,
      },
      {
        id: 'twt2-fill-drill2',
        type: 'input-boxes' as const,
        content: `**Finish the Puzzle** 🧮

**60 students** were asked if they walk or ride the bus to school:

|              | Walks | Bus | **Total** |
|--------------|:-----:|:---:|:---------:|
| **Lives Near**  | 16 | ?  | **22**    |
| **Lives Far**   | ?  | 31 | **?**     |
| **Total**       | **23** | **?** | **60** |

**1)** Students who **live near** AND take the **bus** $= \\,?$
**2)** Students who **live far** AND **walk** $= \\,?$
**3)** Total number of students who take the **bus** $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '7', '37'],
          hint1: 'Lives-Near row total is $22$, walks is $16$, so bus $= 22 - 16$.',
          hint2: 'Walks column total is $23$; near-walkers took $16$, so far-walkers $= 23 - 16$.',
          hint3: 'Bus total $=$ grand total $-$ walks total $= 60 - 23 = 37$ (check: $6 + 31 = 37$ ✓).',
          explanation: '1) Near/Bus $= 22 - 16 = 6$.  2) Far/Walks $= 23 - 16 = 7$.  3) Bus total $= 6 + 31 = 37$ (also $60 - 23 = 37$). ✓ All totals agree.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'two-way-tables',
    sections: [
      {
        id: 'twt3-intro',
        type: 'text' as const,
        content: `# 📊 Two-Way Tables

**Part 3 of 5 — Relative Frequencies**

---

> 🔑 **The Idea:** A **relative frequency** turns a count into a *fraction of the whole* — a decimal or percent. It lets you compare groups of different sizes fairly.`,
      },
      {
        id: 'twt3-relfreq',
        type: 'text' as const,
        content: `## Relative Frequency = Part ÷ Whole

To convert any count to a relative frequency, divide by the **grand total**:

$$\\text{relative frequency} = \\frac{\\text{cell count}}{\\text{grand total}}$$

Then multiply by $100$ to get a **percent**.

### Reference Table — 80 Students

|              | Owns a Cat | No Cat | **Total** |
|--------------|:----------:|:------:|:---------:|
| **Owns a Dog** | 18 | 27 | **45** |
| **No Dog**     | 14 | 21 | **35** |
| **Total**      | **32** | **48** | **80** |

- **Joint relative frequency** (an inside cell ÷ grand total): dog-and-cat owners $= \\dfrac{18}{80} = 0.225 = 22.5\\%$.
- **Marginal relative frequency** (a margin ÷ grand total): dog owners $= \\dfrac{45}{80} = 0.5625 = 56.25\\%$.

> 💡 All of the joint relative frequencies in a table add up to $100\\%$, because together the inside cells account for **everyone**.`,
      },
      {
        id: 'twt3-relfreq-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the 80-student dog/cat table above.`,
        exercise: {
          questions: [
            {
              question: 'What fraction of all students own a cat? (marginal relative frequency)',
              options: [
                '$\\frac{32}{80} = 40\\%$',
                '$\\frac{32}{48} = 66.7\\%$',
                '$\\frac{18}{80} = 22.5\\%$',
                '$\\frac{48}{80} = 60\\%$',
              ],
              correctAnswer: 0,
              explanation: 'Cat owners (the column margin) $= 32$. Divide by the grand total $80$: $\\frac{32}{80} = 0.40 = 40\\%$.',
            },
            {
              question: 'The joint relative frequency for "No Dog AND No Cat" is:',
              options: [
                '$\\frac{21}{80} = 26.25\\%$',
                '$\\frac{21}{35} = 60\\%$',
                '$\\frac{35}{80} = 43.75\\%$',
                '$\\frac{21}{48} = 43.75\\%$',
              ],
              correctAnswer: 0,
              explanation: 'The "No Dog / No Cat" cell is $21$. A joint relative frequency divides by the grand total: $\\frac{21}{80} = 0.2625 = 26.25\\%$.',
            },
          ],
        },
      },
      {
        id: 'twt3-percent-text',
        type: 'text' as const,
        content: `## Turning Counts into Percents

The recipe is always the same two steps:

1. **Divide** the count by the grand total → a decimal.
2. **Multiply by $100$** → a percent.

For example, $\\dfrac{14}{80} = 0.175$, and $0.175 \\times 100 = 17.5\\%$.

> ⚠️ Don't forget step 2! A relative frequency of $0.175$ is the **same value** as $17.5\\%$ — but write whichever the question asks for.`,
      },
      {
        id: 'twt3-percent-drill',
        type: 'input-boxes' as const,
        content: `**Compute Relative Frequencies** 🧮

Use the 80-student dog/cat table. Give each answer as a **percent** (a number; the $\\%$ is understood). Decimals are fine.

**1)** What percent of all students own a dog but no cat? $\\left(\\dfrac{27}{80}\\right)$
**2)** What percent of all students own **no dog** (marginal)? $\\left(\\dfrac{35}{80}\\right)$
**3)** What percent of all students own a dog AND a cat? $\\left(\\dfrac{18}{80}\\right)$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['33.75', '43.75', '22.5'],
          hint1: '$27 \\div 80 = 0.3375$, then $\\times 100 = 33.75\\%$.',
          hint2: '$35 \\div 80 = 0.4375 = 43.75\\%$.',
          hint3: '$18 \\div 80 = 0.225 = 22.5\\%$.',
          explanation: '1) $\\frac{27}{80} = 33.75\\%$.  2) $\\frac{35}{80} = 43.75\\%$.  3) $\\frac{18}{80} = 22.5\\%$. Each divides the count by the grand total $80$.',
        },
      },
      {
        id: 'twt3-joint-vs-marginal',
        type: 'text' as const,
        content: `## Joint vs. Marginal — Don't Mix Them Up

| Type | What it divides | Example |
|------|-----------------|---------|
| **Joint** relative frequency | inside cell ÷ grand total | $\\frac{18}{80} = 22.5\\%$ have a dog **and** a cat |
| **Marginal** relative frequency | a margin ÷ grand total | $\\frac{32}{80} = 40\\%$ have a cat (whether or not they have a dog) |

> ⚠️ Both joint and marginal relative frequencies divide by the **grand total**. In Part 4 we'll divide by a *row or column* total instead — that's a different, very useful idea called a **conditional** relative frequency.`,
      },
      {
        id: 'twt3-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Joint or Marginal?** 🔽

Each value comes from the 80-student dog/cat table. Classify each one.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{14}{80}$ (No Dog and Owns a Cat):', options: ['Joint', 'Marginal'] },
            { label: '$\\dfrac{45}{80}$ (Owns a Dog):', options: ['Joint', 'Marginal'] },
            { label: '$\\dfrac{48}{80}$ (No Cat):', options: ['Joint', 'Marginal'] },
          ],
          correctAnswers: ['Joint', 'Marginal', 'Marginal'],
          hint1: 'A value built from a single inside cell (two conditions at once) is JOINT.',
          hint2: 'A value built from a margin total (only one condition) is MARGINAL.',
          hint3: '$14$ is an inside cell (Joint). $45$ and $48$ are margin totals (Marginal).',
          explanation: '$\\frac{14}{80}$ uses an inside cell → Joint. $\\frac{45}{80}$ and $\\frac{48}{80}$ use margin totals → Marginal.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'two-way-tables',
    sections: [
      {
        id: 'twt4-intro',
        type: 'text' as const,
        content: `# 📊 Two-Way Tables

**Part 4 of 5 — Conditional Relative Frequencies & Association**

---

> 🔑 **The Idea:** A **conditional relative frequency** divides by a **row or column total** instead of the grand total. It answers questions like "*Of the cat owners*, what fraction also own a dog?" — and reveals whether the two variables are **associated**.`,
      },
      {
        id: 'twt4-conditional',
        type: 'text' as const,
        content: `## Conditional = Divide by a Row or Column

$$\\text{conditional relative frequency} = \\frac{\\text{cell count}}{\\text{row OR column total}}$$

The phrase after "**of the**" tells you which total to divide by.

### Reference Table — 80 Students

|              | Owns a Cat | No Cat | **Total** |
|--------------|:----------:|:------:|:---------:|
| **Owns a Dog** | 18 | 27 | **45** |
| **No Dog**     | 14 | 21 | **35** |
| **Total**      | **32** | **48** | **80** |

**"Of the dog owners, what percent also own a cat?"**
Stay inside the **Dog row** (total $45$): $\\dfrac{18}{45} = 0.40 = 40\\%$.

**"Of the cat owners, what percent also own a dog?"**
Stay inside the **Cat column** (total $32$): $\\dfrac{18}{32} = 0.5625 = 56.25\\%$.

> 💡 **Same cell, different answers!** $\\frac{18}{45}$ and $\\frac{18}{32}$ both use the cell $18$, but divide by different totals. The wording — *of the dogs* vs *of the cats* — decides the denominator.`,
      },
      {
        id: 'twt4-conditional-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the 80-student dog/cat table above.`,
        exercise: {
          questions: [
            {
              question: 'Of the students with NO dog, what fraction own a cat?',
              options: [
                '$\\frac{14}{35} = 40\\%$',
                '$\\frac{14}{32} = 43.75\\%$',
                '$\\frac{14}{80} = 17.5\\%$',
                '$\\frac{21}{35} = 60\\%$',
              ],
              correctAnswer: 0,
              explanation: '"Of the students with no dog" means stay in the No-Dog row (total $35$). Cat owners there $= 14$, so $\\frac{14}{35} = 40\\%$.',
            },
            {
              question: 'For a CONDITIONAL relative frequency, you divide the cell by:',
              options: [
                'The row total or column total named after "of the"',
                'The grand total, always',
                'The other inside cell',
                'The sum of all margins',
              ],
              correctAnswer: 0,
              explanation: 'Conditional means "given a group," so you divide by that group\'s row or column total — not the grand total.',
            },
          ],
        },
      },
      {
        id: 'twt4-of-the-text',
        type: 'text' as const,
        content: `## Let "Of the…" Choose Your Denominator

The single most useful trick: read the phrase right after "**of the**."

| The question says… | Divide by… |
|--------------------|------------|
| "*Of the boys*, …" | the **Boys** row total |
| "*Of the cat owners*, …" | the **Cat** column total |
| "*Of the under-30s*, …" | the **Under-30** row total |

> 🔑 The "of the" group is your **whole** for that question — its total goes on the bottom of the fraction.`,
      },
      {
        id: 'twt4-conditional-drill',
        type: 'input-boxes' as const,
        content: `**Conditional Relative Frequencies** 🧮

A survey asked **120 people** whether they exercise regularly:

|                | Exercises | Doesn't | **Total** |
|----------------|:---------:|:-------:|:---------:|
| **Under 30**   | 36 | 24 | **60** |
| **30 or Older** | 27 | 33 | **60** |
| **Total**      | **63** | **57** | **120** |

Give each answer as a **percent** (number only). Decimals are fine.

**1)** Of the people **under 30**, what percent exercise? $\\left(\\dfrac{36}{60}\\right)$
**2)** Of the people **30 or older**, what percent exercise? $\\left(\\dfrac{27}{60}\\right)$
**3)** Of all the people who **exercise**, what percent are **under 30**? $\\left(\\dfrac{36}{63}\\right)$ *(round to the nearest whole percent)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '45', '57'],
          hint1: 'Stay in the Under-30 row (total $60$): $36 \\div 60 = 0.60$.',
          hint2: 'Stay in the 30-or-Older row (total $60$): $27 \\div 60 = 0.45$.',
          hint3: '"Of all who exercise" means the Exercises column (total $63$): $36 \\div 63 = 0.5714... \\approx 57\\%$.',
          explanation: '1) $\\frac{36}{60} = 60\\%$.  2) $\\frac{27}{60} = 45\\%$.  3) $\\frac{36}{63} \\approx 57\\%$. Notice each uses the total of the group named after "of the."',
        },
      },
      {
        id: 'twt4-association',
        type: 'text' as const,
        content: `## Spotting an Association

Two variables show an **association** when the conditional relative frequencies are **clearly different** across groups. If they're about the **same**, there's little or no association.

From the exercise table:

- Of those **under 30**, $60\\%$ exercise.
- Of those **30 or older**, $45\\%$ exercise.

These percentages differ noticeably ($60\\%$ vs $45\\%$), so there **is** an association: younger people in this survey were **more likely** to exercise.

> 🔑 **The right comparison:** To judge association, compare conditional percentages computed **the same way** (e.g., row percents to row percents). Comparing raw counts can mislead when the groups are different sizes.`,
      },
      {
        id: 'twt4-association-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Association** 🔽

A study tracked whether students passed a quiz, split by whether they studied:

|              | Passed | Failed | **Total** |
|--------------|:------:|:------:|:---------:|
| **Studied**  | 45 | 5  | **50** |
| **Didn't**   | 12 | 18 | **30** |
| **Total**    | **57** | **23** | **80** |

Complete the analysis.`,
        exercise: {
          dropdowns: [
            { label: 'Of the students who STUDIED, the percent who passed is:', options: ['$\\frac{45}{50} = 90\\%$', '$\\frac{45}{57} = 79\\%$', '$\\frac{45}{80} = 56\\%$', '$\\frac{45}{30} = 150\\%$'] },
            { label: "Of the students who DIDN'T study, the percent who passed is:", options: ['$\\frac{12}{30} = 40\\%$', '$\\frac{12}{57} = 21\\%$', '$\\frac{12}{50} = 24\\%$', '$\\frac{12}{80} = 15\\%$'] },
            { label: 'Comparing $90\\%$ to $40\\%$, the data suggests:', options: ['Studying is associated with passing', 'There is no association', 'Studying causes failing', 'The groups are the same size'] },
          ],
          correctAnswers: ['$\\frac{45}{50} = 90\\%$', '$\\frac{12}{30} = 40\\%$', 'Studying is associated with passing'],
          hint1: '"Of the students who studied" → divide by the Studied row total ($50$).',
          hint2: '"Of the students who didn\'t study" → divide by the Didn\'t row total ($30$).',
          hint3: 'Studiers passed $90\\%$ of the time vs only $40\\%$ for non-studiers — a big gap means association.',
          explanation: 'Row percents: studiers $\\frac{45}{50} = 90\\%$ passed; non-studiers $\\frac{12}{30} = 40\\%$ passed. The large gap signals an association between studying and passing.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'two-way-tables',
    sections: [
      {
        id: 'twt5-intro',
        type: 'text' as const,
        content: `# 📊 Two-Way Tables

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read joint and marginal frequencies, (2) complete a table with subtraction, (3) compute joint & marginal **relative** frequencies, and (4) use **conditional** relative frequencies to judge association. Let's put it all together.`,
      },
      {
        id: 'twt5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Quantity | Divide the cell by… | Answers the question |
|----------|---------------------|----------------------|
| **Joint** relative frequency | grand total | "What fraction of *everyone*?" |
| **Marginal** relative frequency | grand total (using a margin) | "What fraction of everyone is in *one* category?" |
| **Conditional** relative frequency | a row **or** column total | "*Of this group*, what fraction…?" |

> ⚠️ **The denominator decides everything.** Joint & marginal use the **grand total**; conditional uses the **row or column total** named after "of the." Pick the wrong denominator and every percent is wrong.

> 💡 To check for **association**, compare conditional percentages across groups: a clear difference means the variables are associated.`,
      },
      {
        id: 'twt5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯

A survey of **200 commuters** asked their main transport and whether they were ever late this week:

|              | Late | On Time | **Total** |
|--------------|:----:|:-------:|:---------:|
| **Car**      | 24 | 56 | **80** |
| **Train**    | 36 | 84 | **120** |
| **Total**    | **60** | **140** | **200** |`,
        exercise: {
          questions: [
            {
              question: 'What is the marginal relative frequency of commuters who take the train?',
              options: [
                '$\\frac{120}{200} = 60\\%$',
                '$\\frac{120}{60} = 200\\%$',
                '$\\frac{84}{120} = 70\\%$',
                '$\\frac{36}{120} = 30\\%$',
              ],
              correctAnswer: 0,
              explanation: 'Train is a row margin ($120$). A marginal relative frequency divides by the grand total: $\\frac{120}{200} = 60\\%$.',
            },
            {
              question: 'Of the commuters who take the car, what percent were late?',
              options: [
                '$\\frac{24}{80} = 30\\%$',
                '$\\frac{24}{60} = 40\\%$',
                '$\\frac{24}{200} = 12\\%$',
                '$\\frac{56}{80} = 70\\%$',
              ],
              correctAnswer: 0,
              explanation: '"Of the car commuters" → stay in the Car row (total $80$). Late ones $= 24$, so $\\frac{24}{80} = 30\\%$.',
            },
            {
              question: 'Car commuters were late $30\\%$ of the time; train commuters $\\frac{36}{120} = 30\\%$ of the time. This suggests:',
              options: [
                'Little or no association between transport type and lateness',
                'A strong association: cars cause lateness',
                'Trains are always on time',
                'The grand total is wrong',
              ],
              correctAnswer: 0,
              explanation: 'Both groups were late at the same rate ($30\\%$), so lateness does not depend on transport type — little to no association.',
            },
          ],
        },
      },
      {
        id: 'twt5-recap-text',
        type: 'text' as const,
        content: `## Putting It All Together

Notice how the commuter table used **every** skill at once: marginal relative frequency ($\\frac{120}{200}$), conditional relative frequency ($\\frac{24}{80}$), and a comparison of conditionals to judge association. That's the full toolkit — and the next table asks you to build one from scratch *and* read a conditional from it.`,
      },
      {
        id: 'twt5-finalfill',
        type: 'input-boxes' as const,
        content: `**One More Table** 🧮

A club of **40 members** was surveyed on whether they prefer **summer** or **winter**:

|              | Summer | Winter | **Total** |
|--------------|:------:|:------:|:---------:|
| **Students** | 18 | ? | **24** |
| **Adults**   | ?  | 10 | **?**  |
| **Total**    | **24** | **?** | **40** |

**1)** Students who prefer **winter** $= \\,?$
**2)** Adults who prefer **summer** $= \\,?$
**3)** Of the members who prefer **summer**, what percent are **students**? $\\left(\\dfrac{18}{24}\\right)$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '6', '75'],
          hint1: 'Students row total is $24$; summer is $18$, so winter $= 24 - 18$.',
          hint2: 'Summer column total is $24$; students took $18$, so adults $= 24 - 18$.',
          hint3: '"Of the members who prefer summer" → divide by the Summer column total ($24$): $18 \\div 24 = 0.75$.',
          explanation: '1) Students/Winter $= 24 - 18 = 6$.  2) Adults/Summer $= 24 - 18 = 6$.  3) $\\frac{18}{24} = 0.75 = 75\\%$ of summer-lovers are students. (Adults total $= 6 + 10 = 16$; Winter column $= 6 + 10 = 16$; grand $= 18+6+6+10 = 40$ ✓.)',
        },
      },
      {
        id: 'twt5-before-exit',
        type: 'text' as const,
        content: `## You're Ready

You can now read a two-way table, complete it, and compute joint, marginal, and conditional relative frequencies — and use them to judge association. One last table to prove it.

> 🔑 **Remember the denominator rule:** grand total for joint & marginal; the "of the" group's total for conditional.`,
      },
      {
        id: 'twt5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson. Use this table of **50 pet-store customers**:

|              | Bought Food | No Food | **Total** |
|--------------|:-----------:|:-------:|:---------:|
| **Member**   | 20 | 5  | **25** |
| **Non-Member** | 10 | 15 | **25** |
| **Total**    | **30** | **20** | **50** |`,
        exercise: {
          questions: [
            {
              question: 'How many members bought food? (a joint frequency)',
              options: ['$20$', '$25$', '$30$', '$5$'],
              correctAnswer: 0,
              explanation: 'The Member row meets the Bought-Food column at $20$ — that inside cell is the joint frequency.',
            },
            {
              question: 'What is the JOINT relative frequency of "Non-Member AND No Food"?',
              options: [
                '$\\frac{15}{50} = 30\\%$',
                '$\\frac{15}{25} = 60\\%$',
                '$\\frac{15}{20} = 75\\%$',
                '$\\frac{20}{50} = 40\\%$',
              ],
              correctAnswer: 0,
              explanation: 'The Non-Member / No-Food cell is $15$. Joint relative frequency divides by the grand total: $\\frac{15}{50} = 30\\%$.',
            },
            {
              question: 'Of the members, $\\frac{20}{25}=80\\%$ bought food; of non-members, $\\frac{10}{25}=40\\%$ did. This shows:',
              options: [
                'An association: members were more likely to buy food',
                'No association at all',
                'Non-members bought more food overall',
                'The two row totals are unequal',
              ],
              correctAnswer: 0,
              explanation: 'Members bought food $80\\%$ of the time vs $40\\%$ for non-members. The large difference between these conditional percents signals an association.',
            },
          ],
        },
      },
    ],
  },
]
