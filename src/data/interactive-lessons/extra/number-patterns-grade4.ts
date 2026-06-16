import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Patterns and Rules (Grade 4 Math).
 * Registry key: 'number-patterns-grade4' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Grade-4 friendly: short
 * sentences, concrete examples, lots of concept checks with light arithmetic.
 * Any math uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'number-patterns-grade4',
    sections: [
      {
        id: 'np1-intro',
        type: 'text' as const,
        content: `# 🔢 Patterns and Rules

**Part 1 of 5 — What Is a Pattern?**

---

### Topics in This Part

| Section |
|---------|
| What Is a Pattern? |
| Finding the Rule |
| Extending a Pattern |

> 🔑 **Key Idea:** A **pattern** is a list of numbers (or shapes) that follow the same **rule** over and over. Once you find the rule, you can keep the pattern going forever!`,
      },
      {
        id: 'np1-what',
        type: 'text' as const,
        content: `## What Is a Pattern?

A **pattern** is a group of numbers that change in the **same way** each time. The numbers in a pattern are called **terms**.

Look at this pattern:

$$2,\\; 4,\\; 6,\\; 8,\\; 10$$

Each term goes up by **2**. The "step" between terms is always the same. That steady step is what makes it a pattern.

| Pattern | What changes each step | Rule |
|---------|------------------------|------|
| $5, 10, 15, 20$ | goes up by 5 | **add 5** |
| $20, 18, 16, 14$ | goes down by 2 | **subtract 2** |
| $3, 6, 12, 24$ | doubles each time | **multiply by 2** |

> 💡 To check a pattern, look at the jump from **one term to the next**. If the same thing happens every time, you found a pattern!`,
      },
      {
        id: 'np1-spot-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the pattern $4, 8, 12, 16$, what happens from one term to the next?',
              options: ['It goes up by 4', 'It goes up by 2', 'It doubles', 'It goes down by 4'],
              correctAnswer: 0,
              explanation: 'From 4 to 8 is +4, from 8 to 12 is +4, and from 12 to 16 is +4. The rule is "add 4."',
            },
            {
              question: 'Which list is NOT a pattern?',
              options: ['$2, 4, 6, 8$', '$10, 20, 30, 40$', '$3, 7, 2, 9$', '$5, 10, 15, 20$'],
              correctAnswer: 2,
              explanation: 'In $3, 7, 2, 9$ the jumps are +4, then −5, then +7. They are all different, so there is no steady rule. The others all change by the same amount each step.',
            },
          ],
        },
      },
      {
        id: 'np1-rule',
        type: 'text' as const,
        content: `## Finding the Rule

The **rule** tells you what to do to get from one term to the next. To find the rule, ask:

> ❓ *"What do I do to this number to get the next one?"*

**Example:** $7, 10, 13, 16$

- From $7$ to $10$ is $+3$
- From $10$ to $13$ is $+3$
- From $13$ to $16$ is $+3$

The rule is **add 3**. ✅

**Example:** $30, 25, 20, 15$

- From $30$ to $25$ is $-5$
- The rule is **subtract 5**. ✅

> ⚠️ **Watch out:** Always check **more than one** jump before you decide on the rule. One jump alone might trick you!`,
      },
      {
        id: 'np1-find-rule',
        type: 'dropdown-select' as const,
        content: `**Name the Rule** 🔽

Choose the rule that makes each pattern.`,
        exercise: {
          dropdowns: [
            { label: '$6, 12, 18, 24$', options: ['add 6', 'add 2', 'subtract 6', 'multiply by 6'] },
            { label: '$50, 45, 40, 35$', options: ['subtract 5', 'add 5', 'subtract 10', 'subtract 45'] },
            { label: '$1, 2, 4, 8$', options: ['multiply by 2', 'add 2', 'add 1', 'subtract 2'] },
          ],
          correctAnswers: ['add 6', 'subtract 5', 'multiply by 2'],
          hint1: 'For the first one, $6 + 6 = 12$ and $12 + 6 = 18$.',
          hint2: 'For the second one, the numbers get smaller by the same amount each step.',
          hint3: 'For the third one, $1 \\times 2 = 2$, $2 \\times 2 = 4$, $4 \\times 2 = 8$.',
          explanation: '$6,12,18,24$ goes up by 6 (add 6). $50,45,40,35$ goes down by 5 (subtract 5). $1,2,4,8$ doubles (multiply by 2).',
        },
      },
      {
        id: 'np1-extend',
        type: 'text' as const,
        content: `## Extending a Pattern

To **extend** a pattern means to keep it going. Once you know the rule, just keep using it!

**Example:** $9, 14, 19, 24, \\;?$

The rule is **add 5**. So the next term is $24 + 5 = 29$.

**Example:** $40, 36, 32, 28, \\;?$

The rule is **subtract 4**. So the next term is $28 - 4 = 24$.

> 🔑 **Steps to extend any pattern:**
> 1. Find the rule (what changes each step).
> 2. Apply the rule to the **last** term.
> 3. Repeat to get as many new terms as you need.`,
      },
      {
        id: 'np1-extend-drill',
        type: 'input-boxes' as const,
        content: `**Keep It Going** 🧮

Find the rule, then write the **next** term in each pattern.

**1)** $8, 11, 14, 17, \\;?$
**2)** $60, 50, 40, 30, \\;?$
**3)** $2, 4, 8, 16, \\;?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['20', '20', '32'],
          hint1: 'For #1 the rule is add 3, so $17 + 3 = ?$',
          hint2: 'For #2 the rule is subtract 10, so $30 - 10 = ?$',
          hint3: 'For #3 the rule is multiply by 2, so $16 \\times 2 = ?$',
          explanation: '1) add 3: $17+3=20$. 2) subtract 10: $30-10=20$. 3) multiply by 2: $16\\times 2=32$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'number-patterns-grade4',
    sections: [
      {
        id: 'np2-intro',
        type: 'text' as const,
        content: `# 🔢 Patterns and Rules

**Part 2 of 5 — Add & Subtract Patterns**

---

> 🔑 **The Idea:** The most common patterns use **addition** or **subtraction**. We call these **arithmetic patterns**, and the steady step is called the **common difference**.`,
      },
      {
        id: 'np2-common-diff',
        type: 'text' as const,
        content: `## The Common Difference

In an add-or-subtract pattern, the **same number** is added (or subtracted) every step. That number is the **common difference**.

**Example:** $5, 9, 13, 17, 21$

$$5 \\xrightarrow{+4} 9 \\xrightarrow{+4} 13 \\xrightarrow{+4} 17 \\xrightarrow{+4} 21$$

The common difference is **+4**.

| Pattern | Common difference | Rule |
|---------|-------------------|------|
| $3, 8, 13, 18$ | $+5$ | add 5 |
| $100, 90, 80, 70$ | $-10$ | subtract 10 |
| $12, 19, 26, 33$ | $+7$ | add 7 |

> 💡 To **find** the common difference, subtract any term from the one **after** it: $9 - 5 = 4$. ✅`,
      },
      {
        id: 'np2-diff-drill',
        type: 'input-boxes' as const,
        content: `**Find the Common Difference** 🧮

Write the number that is added or subtracted each step. *(If the pattern goes down, write a negative number, like $-3$.)*

**1)** $4, 10, 16, 22$
**2)** $45, 40, 35, 30$
**3)** $7, 15, 23, 31$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '-5', '8'],
          hint1: 'For #1, do $10 - 4$ to find the jump.',
          hint2: 'For #2 the numbers get smaller, so the difference is negative: $40 - 45 = -5$.',
          hint3: 'For #3, do $15 - 7 = 8$.',
          explanation: '1) $10-4=6$. 2) $40-45=-5$ (going down). 3) $15-7=8$.',
        },
      },
      {
        id: 'np2-missing',
        type: 'text' as const,
        content: `## Filling In Missing Terms

Sometimes a pattern has a **blank** in the middle. You can still fill it in using the rule!

**Example:** $6, 11, \\underline{\\;?\\;}, 21, 26$

The rule is **add 5**. To find the blank, add 5 to the term **before** it:

$$11 + 5 = 16$$

✅ **Check:** $16 + 5 = 21$, which matches the next term. So the blank is $16$.

**Example:** $30, \\underline{\\;?\\;}, 20, 15$

The rule is **subtract 5**, so the blank is $30 - 5 = 25$.

> 🔑 **Trick:** To fill a blank, you can add the rule to the term **before** it, OR work backward from the term **after** it. Both should agree!`,
      },
      {
        id: 'np2-missing-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What number is missing? $8, 15, \\underline{\\;?\\;}, 29$',
              options: ['$22$', '$21$', '$23$', '$20$'],
              correctAnswer: 0,
              explanation: 'The rule is add 7 (since $15-8=7$). So the blank is $15+7=22$, and $22+7=29$. ✓',
            },
            {
              question: 'What number is missing? $50, 42, 34, \\underline{\\;?\\;}, 18$',
              options: ['$26$', '$28$', '$24$', '$27$'],
              correctAnswer: 0,
              explanation: 'The rule is subtract 8 (since $50-42=8$). So the blank is $34-8=26$, and $26-8=18$. ✓',
            },
          ],
        },
      },
      {
        id: 'np2-word',
        type: 'text' as const,
        content: `## Patterns in Real Life

Patterns show up everywhere! Word problems often hide an add-or-subtract pattern.

**Example:** Maya saves money. She starts with **\\$10**, and each week she adds **\\$5**.

| Week | Money saved |
|------|-------------|
| 1 | \\$10 |
| 2 | \\$15 |
| 3 | \\$20 |
| 4 | \\$25 |

The rule is **add 5** each week. So in Week 5 she will have $25 + 5 = \\$30$.

> 💡 Reading a word problem? Look for the **starting number** and the **amount it changes each time**. Those two facts give you the whole pattern.`,
      },
      {
        id: 'np2-word-drill',
        type: 'input-boxes' as const,
        content: `**Pattern Word Problems** 🧮

**1)** A plant is $12$ cm tall and grows $3$ cm each week. How tall will it be after **1 more week**? *(in cm)*

**2)** A theater has $20$ seats in row 1, $24$ in row 2, $28$ in row 3. How many seats are in **row 4**?

**3)** Sam has $48$ stickers and gives away $6$ each day. How many will he have after **1 day**?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '32', '42'],
          hint1: 'For #1, add 3 to 12.',
          hint2: 'For #2 the rule is add 4 each row, so $28 + 4 = ?$',
          hint3: 'For #3 he loses 6, so $48 - 6 = ?$',
          explanation: '1) $12+3=15$ cm. 2) add 4 each row: $28+4=32$ seats. 3) $48-6=42$ stickers.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'number-patterns-grade4',
    sections: [
      {
        id: 'np3-intro',
        type: 'text' as const,
        content: `# 🔢 Patterns and Rules

**Part 3 of 5 — Multiply & Divide Patterns**

---

> 🔑 **The Idea:** Some patterns **grow fast** by multiplying, or **shrink fast** by dividing. Instead of taking the same-size step, each term is a few **times bigger** (or smaller) than the one before.`,
      },
      {
        id: 'np3-multiply',
        type: 'text' as const,
        content: `## Multiplying Patterns

In a multiplying pattern, you **multiply by the same number** each step. These patterns grow quickly!

**Example:** $1, 3, 9, 27, 81$

$$1 \\xrightarrow{\\times 3} 3 \\xrightarrow{\\times 3} 9 \\xrightarrow{\\times 3} 27 \\xrightarrow{\\times 3} 81$$

The rule is **multiply by 3**.

| Pattern | Rule |
|---------|------|
| $2, 4, 8, 16$ | multiply by 2 (doubling) |
| $1, 5, 25, 125$ | multiply by 5 |
| $3, 30, 300, 3000$ | multiply by 10 |

> ⚠️ **Add vs. Multiply:** $2, 4, 6, 8$ **adds** 2 each time. But $2, 4, 8, 16$ **multiplies** by 2 each time. Check carefully — the first two terms can look the same!`,
      },
      {
        id: 'np3-add-vs-mult',
        type: 'multiple-choice' as const,
        content: `**Add or Multiply?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the rule for $3, 9, 27, 81$?',
              options: ['Multiply by 3', 'Add 3', 'Add 6', 'Multiply by 9'],
              correctAnswer: 0,
              explanation: '$3 \\times 3 = 9$, $9 \\times 3 = 27$, $27 \\times 3 = 81$. The rule is multiply by 3. (Adding 3 would give $3, 6, 9$.)',
            },
            {
              question: 'Which pattern uses "multiply by 2"?',
              options: ['$5, 10, 20, 40$', '$5, 7, 9, 11$', '$5, 10, 15, 20$', '$5, 3, 1, -1$'],
              correctAnswer: 0,
              explanation: '$5, 10, 20, 40$ doubles each time ($\\times 2$). $5, 10, 15, 20$ only *adds* 5, so be careful!',
            },
          ],
        },
      },
      {
        id: 'np3-divide',
        type: 'text' as const,
        content: `## Dividing Patterns

In a dividing pattern, you **divide by the same number** each step. These patterns shrink quickly.

**Example:** $80, 40, 20, 10$

$$80 \\xrightarrow{\\div 2} 40 \\xrightarrow{\\div 2} 20 \\xrightarrow{\\div 2} 10$$

The rule is **divide by 2** (this is the same as cutting it in half).

**Example:** $1000, 100, 10, 1$ — the rule is **divide by 10**.

> 💡 **Helpful link:** Dividing by 2 is the *opposite* of multiplying by 2. If a pattern grows by $\\times 2$, the same pattern read backwards shrinks by $\\div 2$.`,
      },
      {
        id: 'np3-rule-dropdown',
        type: 'dropdown-select' as const,
        content: `**Multiply or Divide?** 🔽

Pick the rule for each fast-changing pattern.`,
        exercise: {
          dropdowns: [
            { label: '$2, 6, 18, 54$', options: ['multiply by 3', 'multiply by 2', 'add 4', 'divide by 3'] },
            { label: '$64, 32, 16, 8$', options: ['divide by 2', 'subtract 32', 'divide by 4', 'multiply by 2'] },
            { label: '$1, 4, 16, 64$', options: ['multiply by 4', 'add 3', 'multiply by 2', 'divide by 4'] },
          ],
          correctAnswers: ['multiply by 3', 'divide by 2', 'multiply by 4'],
          hint1: 'For the first one, $2 \\times 3 = 6$ and $6 \\times 3 = 18$.',
          hint2: 'For the second one, $64 \\div 2 = 32$ and $32 \\div 2 = 16$.',
          hint3: 'For the third one, $1 \\times 4 = 4$, $4 \\times 4 = 16$, $16 \\times 4 = 64$.',
          explanation: '$2,6,18,54$ is $\\times 3$. $64,32,16,8$ is $\\div 2$. $1,4,16,64$ is $\\times 4$.',
        },
      },
      {
        id: 'np3-next-drill',
        type: 'input-boxes' as const,
        content: `**Next Term** 🧮

Find the rule, then write the **next** term.

**1)** $1, 2, 4, 8, \\;?$ *(multiplying)*
**2)** $5, 15, 45, \\;?$ *(multiplying)*
**3)** $81, 27, 9, \\;?$ *(dividing)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '135', '3'],
          hint1: 'For #1 the rule is $\\times 2$, so $8 \\times 2 = ?$',
          hint2: 'For #2 the rule is $\\times 3$, so $45 \\times 3 = ?$',
          hint3: 'For #3 the rule is $\\div 3$. $81 \\div 3 = 27$, $27 \\div 3 = 9$, and $9 \\div 3 = 3$.',
          explanation: '1) $\\times 2$: $8\\times 2=16$. 2) $\\times 3$: $45\\times 3=135$. 3) $\\div 3$: $9 \\div 3 = 3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'number-patterns-grade4',
    sections: [
      {
        id: 'np4-intro',
        type: 'text' as const,
        content: `# 🔢 Patterns and Rules

**Part 4 of 5 — Input-Output Tables**

---

> 🔑 **The Idea:** A **function table** (or **input-output table**) is a machine. You put a number **in**, the rule changes it, and a new number comes **out**. The same rule works on *every* input.`,
      },
      {
        id: 'np4-machine',
        type: 'text' as const,
        content: `## The Rule Machine

Think of a rule like a machine. The **input** goes in, the rule does its job, and the **output** comes out.

Here the rule is **add 3**:

| Input | Rule: add 3 | Output |
|-------|-------------|--------|
| 1 | $1 + 3$ | 4 |
| 2 | $2 + 3$ | 5 |
| 5 | $5 + 3$ | 8 |
| 10 | $10 + 3$ | 13 |

Notice: the **same rule** ("add 3") is used on every input.

> 💡 To find an output, take the input and **do the rule**. To find the rule, look at how each input changes into its output.`,
      },
      {
        id: 'np4-output-drill',
        type: 'input-boxes' as const,
        content: `**Run the Machine** 🧮

The rule is **multiply by 4**. Find each output.

**1)** Input $2 \\;\\rightarrow\\;$ output $?$
**2)** Input $5 \\;\\rightarrow\\;$ output $?$
**3)** Input $10 \\;\\rightarrow\\;$ output $?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '20', '40'],
          hint1: 'The rule is multiply by 4, so do $2 \\times 4$.',
          hint2: '$5 \\times 4 = ?$',
          hint3: '$10 \\times 4 = ?$',
          explanation: '1) $2\\times 4=8$. 2) $5\\times 4=20$. 3) $10\\times 4=40$. Same rule, every time.',
        },
      },
      {
        id: 'np4-find-rule',
        type: 'text' as const,
        content: `## Finding the Rule from a Table

Sometimes you get the table and must **discover the rule**. Compare each input to its output.

| Input | Output |
|-------|--------|
| 3 | 9 |
| 4 | 12 |
| 6 | 18 |

Ask: *"What turns 3 into 9?"* You could **add 6** ($3+6=9$)... but check the next row: $4 + 6 = 10$, **not** 12. ❌

Try **multiply by 3**: $3 \\times 3 = 9$ ✅, $4 \\times 3 = 12$ ✅, $6 \\times 3 = 18$ ✅.

The rule is **multiply by 3**.

> ⚠️ **Always test your rule on EVERY row.** A rule that works on one row but fails another is the **wrong** rule.`,
      },
      {
        id: 'np4-find-rule-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A table shows: input 2 → output 7, input 5 → output 10, input 8 → output 13. What is the rule?',
              options: ['Add 5', 'Multiply by 3', 'Add 3', 'Multiply by 2'],
              correctAnswer: 0,
              explanation: '$2+5=7$, $5+5=10$, $8+5=13$. "Add 5" works on every row. (Multiply by 3 would turn 2 into 6, not 7.)',
            },
            {
              question: 'A table shows: input 1 → output 6, input 2 → output 12, input 3 → output 18. What is the rule?',
              options: ['Multiply by 6', 'Add 6', 'Add 5', 'Multiply by 2'],
              correctAnswer: 0,
              explanation: '$1\\times 6=6$, $2\\times 6=12$, $3\\times 6=18$. "Multiply by 6" works on every row. ("Add 6" would turn 2 into 8, not 12.)',
            },
          ],
        },
      },
      {
        id: 'np4-table-dropdown',
        type: 'dropdown-select' as const,
        content: `**Complete the Table** 🔽

The rule is **add 8**. Choose the correct output for each input.`,
        exercise: {
          dropdowns: [
            { label: 'Input 4 → output', options: ['12', '32', '4', '20'] },
            { label: 'Input 10 → output', options: ['18', '80', '2', '108'] },
            { label: 'Input 0 → output', options: ['8', '0', '80', '18'] },
          ],
          correctAnswers: ['12', '18', '8'],
          hint1: 'For input 4, do $4 + 8$.',
          hint2: 'For input 10, do $10 + 8$.',
          hint3: 'For input 0, do $0 + 8 = 8$. Adding to zero gives the rule number itself.',
          explanation: '$4+8=12$, $10+8=18$, $0+8=8$. The rule "add 8" works on every input.',
        },
      },
      {
        id: 'np4-twostep',
        type: 'text' as const,
        content: `## Two-Step Rules (Challenge!)

Some rule machines do **two jobs**. For example, "**multiply by 2, then add 1**."

| Input | $\\times 2$ | then $+1$ | Output |
|-------|-----------|-----------|--------|
| 1 | 2 | $2+1$ | 3 |
| 2 | 4 | $4+1$ | 5 |
| 5 | 10 | $10+1$ | 11 |

So input $4$ gives $4 \\times 2 = 8$, then $8 + 1 = 9$.

> 🔑 **Do the steps in order, left to right.** For "multiply by 2, then add 1," always multiply **first**, then add.`,
      },
      {
        id: 'np4-twostep-drill',
        type: 'input-boxes' as const,
        content: `**Two-Step Machine** 🧮

The rule is **multiply by 3, then add 2**. Find each output.

**1)** Input $1 \\;\\rightarrow\\; ?$
**2)** Input $4 \\;\\rightarrow\\; ?$
**3)** Input $10 \\;\\rightarrow\\; ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '14', '32'],
          hint1: 'First do $1 \\times 3 = 3$, then add 2.',
          hint2: 'First do $4 \\times 3 = 12$, then $12 + 2 = ?$',
          hint3: 'First do $10 \\times 3 = 30$, then $30 + 2 = ?$',
          explanation: '1) $1\\times 3=3$, $3+2=5$. 2) $4\\times 3=12$, $12+2=14$. 3) $10\\times 3=30$, $30+2=32$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'number-patterns-grade4',
    sections: [
      {
        id: 'np5-intro',
        type: 'text' as const,
        content: `# 🔢 Patterns and Rules

**Part 5 of 5 — Shape Patterns & Mastery Check**

---

You can now (1) find a rule, (2) add and subtract patterns, (3) multiply and divide patterns, and (4) use input-output tables. Let's finish with **shape patterns** and put it all together!`,
      },
      {
        id: 'np5-shapes',
        type: 'text' as const,
        content: `## Patterns Made of Shapes

Patterns aren't only numbers — they can be **shapes** too! A repeating shape pattern uses a **unit** that repeats over and over.

Look at this pattern:

$$\\triangle\\; \\square\\; \\square\\; \\triangle\\; \\square\\; \\square\\; \\triangle\\; \\square\\; \\square$$

The repeating unit is **triangle, square, square**. It repeats again and again.

> 🔑 **Find the unit:** Look for the smallest group that **repeats**. Here it is 3 shapes long: $\\triangle\\,\\square\\,\\square$. The 10th shape would start a new unit, so it is a **triangle**.

Growing shape patterns can also hide a **number** pattern — like dots that grow $1, 3, 5, 7$ each step.`,
      },
      {
        id: 'np5-shape-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A pattern repeats: 🔴 🔵 🟡 🔴 🔵 🟡 ... What is the 7th shape?',
              options: ['🔴 red', '🔵 blue', '🟡 yellow', 'Cannot tell'],
              correctAnswer: 0,
              explanation: 'The unit "red, blue, yellow" is 3 long. Shapes 1, 4, and 7 all start a new unit, so the 7th is red.',
            },
            {
              question: 'A dot pattern grows: 1 dot, then 3 dots, then 5 dots, then 7 dots. How many dots are in the next picture?',
              options: ['$9$', '$8$', '$10$', '$11$'],
              correctAnswer: 0,
              explanation: 'The rule is "add 2" each step: $1, 3, 5, 7, 9$. So the next picture has 9 dots.',
            },
          ],
        },
      },
      {
        id: 'np5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Pattern type | How to spot it | Example |
|--------------|----------------|---------|
| **Add** | same amount added | $4, 7, 10, 13$ (add 3) |
| **Subtract** | same amount taken away | $20, 16, 12, 8$ (subtract 4) |
| **Multiply** | grows fast | $2, 6, 18, 54$ (×3) |
| **Divide** | shrinks fast | $80, 40, 20, 10$ (÷2) |
| **Table rule** | works on every row | input ×4 → output |
| **Shape unit** | smallest part that repeats | 🔺🟦🟦 |

> ⚠️ **Two big rules to remember:** (1) Check the rule on **more than one** step. (2) "Add 2" and "multiply by 2" are different — look past the first two terms!`,
      },
      {
        id: 'np5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the next term in $7, 14, 28, 56, \\;?$',
              options: ['$112$', '$70$', '$84$', '$63$'],
              correctAnswer: 0,
              explanation: 'The rule is multiply by 2 ($7\\times 2=14$, $14\\times 2=28$). So $56 \\times 2 = 112$.',
            },
            {
              question: 'A table shows input 3 → 11 and input 7 → 15. What is the rule?',
              options: ['Add 8', 'Multiply by 3', 'Add 4', 'Multiply by 2'],
              correctAnswer: 0,
              explanation: '$3+8=11$ and $7+8=15$. "Add 8" works on both rows.',
            },
          ],
        },
      },
      {
        id: 'np5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the rule for the pattern $48, 24, 12, 6$?',
              options: ['Divide by 2', 'Subtract 24', 'Divide by 4', 'Subtract 12'],
              correctAnswer: 0,
              explanation: '$48 \\div 2 = 24$, $24 \\div 2 = 12$, $12 \\div 2 = 6$. The rule is divide by 2.',
            },
            {
              question: 'What number is missing? $5, 11, \\underline{\\;?\\;}, 23, 29$',
              options: ['$17$', '$16$', '$18$', '$15$'],
              correctAnswer: 0,
              explanation: 'The rule is add 6 ($11-5=6$). So the blank is $11+6=17$, and $17+6=23$. ✓',
            },
            {
              question: 'A rule machine does "multiply by 2, then add 3." What output comes from input 5?',
              options: ['$13$', '$16$', '$10$', '$25$'],
              correctAnswer: 0,
              explanation: 'First $5 \\times 2 = 10$, then $10 + 3 = 13$. Do the multiply step first, then add.',
            },
          ],
        },
      },
    ],
  },
]
