import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Patterns and Relationships (Grade 5 Math).
 * Registry key / DB slug: 'patterns-relationships'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 * Scope aligned to CCSS 5.OA.B.3: generate two numerical patterns from rules,
 * form ordered pairs, identify the relationship between corresponding terms,
 * and graph the ordered pairs on a coordinate plane.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'patterns-relationships',
    sections: [
      {
        id: 'pr1-intro',
        type: 'text' as const,
        content: `# 🔢 Patterns and Relationships

**Part 1 of 5 — Reading a Pattern and Finding Its Rule**

---

### Topics in This Part

| Section |
|---------|
| What Is a Number Pattern? |
| Finding the Rule |
| Extending a Pattern |

> 🔑 **Key Concept:** A **pattern** is a list of numbers that follows a **rule**. Once you find the rule, you can keep the pattern going forever — and that one skill is the foundation for everything else in this lesson.`,
      },
      {
        id: 'pr1-what',
        type: 'text' as const,
        content: `## What Is a Number Pattern?

A **number pattern** (also called a *sequence*) is a list of numbers in order, where each number is found using the same rule.

Look at this pattern:

$$3,\\; 6,\\; 9,\\; 12,\\; 15,\\; \\ldots$$

To get from one number to the next, you **add 3** every time. The number you add (or subtract, or multiply) the same way each step is the **rule**.

| Step | Number | How we got it |
|------|--------|---------------|
| 1st | $3$ | start |
| 2nd | $6$ | $3 + 3$ |
| 3rd | $9$ | $6 + 3$ |
| 4th | $12$ | $9 + 3$ |

The dots ($\\ldots$) mean "keep going." Because the rule is **add 3**, the next number is $15 + 3 = 18$.

> 💡 **Tip:** To find a rule, ask *"What did I do to the number to get the next one?"* Check it against **every** pair, not just the first two.`,
      },
      {
        id: 'pr1-find-rule-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the rule for the pattern $5,\\ 10,\\ 15,\\ 20,\\ \\ldots$?',
              options: ['Add 5', 'Add 10', 'Multiply by 2', 'Subtract 5'],
              correctAnswer: 0,
              explanation: 'Each number is 5 more than the one before: $5\\to10\\to15\\to20$. The rule is "add 5." (Multiply by 2 would only work for $5\\to10$, not $10\\to15$.)',
            },
            {
              question: 'What is the rule for the pattern $2,\\ 4,\\ 8,\\ 16,\\ \\ldots$?',
              options: ['Add 2', 'Multiply by 2', 'Add 4', 'Multiply by 4'],
              correctAnswer: 1,
              explanation: 'Each number is double the one before: $2\\to4\\to8\\to16$. "Add 2" only works for the first step, so it fails the rest of the test.',
            },
          ],
        },
      },
      {
        id: 'pr1-extend',
        type: 'text' as const,
        content: `## Extending a Pattern

Once you know the rule, you **extend** the pattern by applying the rule again and again.

**Example:** Continue $4,\\ 7,\\ 10,\\ 13,\\ \\ldots$

The rule is **add 3** (since $4+3=7$, $7+3=10$, $10+3=13$). So:

$$13 + 3 = 16, \\qquad 16 + 3 = 19, \\qquad 19 + 3 = 22$$

The pattern continues $16,\\ 19,\\ 22,\\ \\ldots$

**Example (subtraction):** Continue $30,\\ 25,\\ 20,\\ 15,\\ \\ldots$

The rule is **subtract 5**, so the next terms are $15 - 5 = 10$ and $10 - 5 = 5$.

> ⚠️ **Watch out:** A rule must work for the **whole** pattern. If "add 4" works at the start but breaks later, it is not the rule — keep looking.`,
      },
      {
        id: 'pr1-extend-drill',
        type: 'input-boxes' as const,
        content: `**Extend the Pattern** 🧮

Find the rule, then enter the **next number** in each pattern.

**1)** $6,\\ 12,\\ 18,\\ 24,\\ ?$
**2)** $50,\\ 45,\\ 40,\\ 35,\\ ?$
**3)** $1,\\ 3,\\ 9,\\ 27,\\ ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '30', '81'],
          hint1: 'In #1 the rule is "add 6," so the next number is $24 + 6$.',
          hint2: 'In #2 the rule is "subtract 5," so the next number is $35 - 5$.',
          hint3: 'In #3 the rule is "multiply by 3," so the next number is $27 \\times 3$.',
          explanation: '1) Add 6: $24+6 = 30$.  2) Subtract 5: $35-5 = 30$.  3) Multiply by 3: $27\\times3 = 81$. (It is fine that #1 and #2 both end at 30 — different rules can land on the same number.)',
        },
      },
      {
        id: 'pr1-rule-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the Rule, Then Extend** 🔽

Look at the pattern $$2,\\ 8,\\ 32,\\ 128,\\ \\ldots$$`,
        exercise: {
          dropdowns: [
            { label: 'To get from one term to the next, you:', options: ['multiply by 4', 'add 6', 'multiply by 2', 'add 24'] },
            { label: 'Does that rule work for every step shown?', options: ['yes, every step', 'only the first step', 'only the last step', 'never'] },
            { label: 'The next number in the pattern is:', options: ['$512$', '$256$', '$132$', '$384$'] },
          ],
          correctAnswers: ['multiply by 4', 'yes, every step', '$512$'],
          hint1: 'Compare a pair: $2 \\to 8$. What did you do to $2$ to get $8$? $2 \\times 4 = 8$.',
          hint2: 'Test it on the others: $8 \\times 4 = 32$ ✓ and $32 \\times 4 = 128$ ✓ — it works every step.',
          hint3: 'Apply the rule once more: $128 \\times 4 = 512$.',
          explanation: 'Each term is $4$ times the one before ($2\\times4=8$, $8\\times4=32$, $32\\times4=128$), so the rule is "multiply by 4" and it works for every step. The next number is $128 \\times 4 = 512$. ("Add 6" only fits $2\\to8$, then breaks.)',
        },
      },
      {
        id: 'pr1-bridge',
        type: 'text' as const,
        content: `## Where This Is Going

You can now read a pattern, find its rule, and extend it. That is the engine for the rest of the lesson.

In **Part 2**, you will run **two patterns at the same time** and discover that the two lists are *connected* — that connection is what we mean by a **relationship**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'patterns-relationships',
    sections: [
      {
        id: 'pr2-intro',
        type: 'text' as const,
        content: `# 🔢 Patterns and Relationships

**Part 2 of 5 — Two Patterns at Once**

---

> 🔑 **The Idea:** When you generate **two** patterns from two rules and start them at the same place, the terms line up in pairs. Comparing those pairs reveals a **relationship** between the two patterns.`,
      },
      {
        id: 'pr2-two-rules',
        type: 'text' as const,
        content: `## Generating Two Patterns

Let's build two patterns side by side. Both start at $0$.

- **Pattern A rule:** add 2
- **Pattern B rule:** add 4

We apply each rule step by step and write the results in a table.

| Step | Pattern A (add 2) | Pattern B (add 4) |
|------|-------------------|-------------------|
| 1 | $0$ | $0$ |
| 2 | $2$ | $4$ |
| 3 | $4$ | $8$ |
| 4 | $6$ | $12$ |
| 5 | $8$ | $16$ |

The numbers that sit in the **same row** are called **corresponding terms**. For example, $4$ in Pattern A corresponds to $8$ in Pattern B.

> 💡 **Corresponding terms** are partners — they were made at the *same step*. Always compare a number to its partner in the **same row**.`,
      },
      {
        id: 'pr2-corresponding-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the table above (Pattern A = add 2, Pattern B = add 4).`,
        exercise: {
          questions: [
            {
              question: 'In Pattern A the term is $6$. What is its corresponding term in Pattern B?',
              options: ['$8$', '$12$', '$16$', '$10$'],
              correctAnswer: 1,
              explanation: 'In the table, $6$ (Pattern A) is in Step 4. The same row of Pattern B holds $12$. So $6$ corresponds to $12$.',
            },
            {
              question: 'Which numbers are corresponding terms (made at the same step)?',
              options: ['$2$ and $4$', '$2$ and $8$', '$8$ and $4$', '$0$ and $4$'],
              correctAnswer: 0,
              explanation: 'At Step 2, Pattern A = $2$ and Pattern B = $4$. They share a row, so they correspond. The others come from different rows.',
            },
          ],
        },
      },
      {
        id: 'pr2-relationship',
        type: 'text' as const,
        content: `## Spotting the Relationship

Now compare each corresponding pair from the table:

| Pattern A | Pattern B | How are they related? |
|-----------|-----------|------------------------|
| $0$ | $0$ | $0 \\times 2 = 0$ |
| $2$ | $4$ | $2 \\times 2 = 4$ |
| $4$ | $8$ | $4 \\times 2 = 8$ |
| $6$ | $12$ | $6 \\times 2 = 12$ |
| $8$ | $16$ | $8 \\times 2 = 16$ |

Every term in Pattern B is **twice** the matching term in Pattern A. We say:

$$\\text{Pattern B} = 2 \\times \\text{Pattern A}$$

This is the **relationship between the patterns.** It makes sense: Pattern B added $4$ each step while Pattern A added only $2$ — exactly **double** the step, so the terms stay double too.

> 🔑 **Key Idea:** To find the relationship, line up corresponding terms and ask *"What do I do to the A-number to get the B-number?"* — the same answer must work for **every** row.`,
      },
      {
        id: 'pr2-fill-drill',
        type: 'input-boxes' as const,
        content: `**Build the Table** 🧮

Pattern C starts at $1$ with the rule **add 3**. Pattern D starts at $1$ with the rule **add 6**.

| Step | Pattern C (add 3) | Pattern D (add 6) |
|------|-------------------|-------------------|
| 1 | $1$ | $1$ |
| 2 | $4$ | $7$ |
| 3 | $7$ | ? |
| 4 | ? | ? |

**1)** Step 3, Pattern D $= ?$
**2)** Step 4, Pattern C $= ?$
**3)** Step 4, Pattern D $= ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['13', '10', '19'],
          hint1: 'Pattern D adds 6 each step. Step 2 was $7$, so Step 3 is $7 + 6$.',
          hint2: 'Pattern C adds 3 each step. Step 3 was $7$, so Step 4 is $7 + 3$.',
          hint3: 'Pattern D Step 3 is $13$, so Step 4 is $13 + 6$.',
          explanation: '1) Pattern D: $7+6 = 13$.  2) Pattern C: $7+3 = 10$.  3) Pattern D: $13+6 = 19$.',
        },
      },
      {
        id: 'pr2-relate-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name the Relationship** 🔽

Two patterns both start at $0$. Pattern X uses **add 3**; Pattern Y uses **add 9**. Here are their corresponding terms:

| Pattern X | $0$ | $3$ | $6$ | $9$ | $12$ |
|-----------|-----|-----|-----|-----|------|
| Pattern Y | $0$ | $9$ | $18$ | $27$ | $36$ |`,
        exercise: {
          dropdowns: [
            { label: 'To get a Y-term from its X-term, you:', options: ['multiply by 3', 'add 6', 'multiply by 2', 'add 9'] },
            { label: 'So Pattern Y equals:', options: ['$3 \\times$ Pattern X', '$2 \\times$ Pattern X', 'Pattern X $+ 6$', 'Pattern X $+ 9$'] },
            { label: 'When Pattern X is $15$, Pattern Y will be:', options: ['$45$', '$24$', '$30$', '$135$'] },
          ],
          correctAnswers: ['multiply by 3', '$3 \\times$ Pattern X', '$45$'],
          hint1: 'Check a pair: $3 \\to 9$. What did you do to $3$ to get $9$? $3 \\times 3 = 9$.',
          hint2: 'Test the same operation on another row: $6 \\times 3 = 18$ ✓ and $9 \\times 3 = 27$ ✓.',
          hint3: 'Pattern Y is always 3 times Pattern X, so for $15$: $15 \\times 3 = 45$.',
          explanation: 'Pattern Y added 9 each step while Pattern X added 3 — three times as much — so every Y-term is $3\\times$ its X-term. Thus $15 \\times 3 = 45$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'patterns-relationships',
    sections: [
      {
        id: 'pr3-intro',
        type: 'text' as const,
        content: `# 🔢 Patterns and Relationships

**Part 3 of 5 — Ordered Pairs**

---

> 🔑 **Why it matters:** When two patterns line up in a table, each pair of corresponding terms can be written as an **ordered pair** $(x, y)$. Ordered pairs are the bridge from a *table* to a *graph*.`,
      },
      {
        id: 'pr3-what-pair',
        type: 'text' as const,
        content: `## What Is an Ordered Pair?

An **ordered pair** is two numbers written inside parentheses, separated by a comma:

$$(x,\\; y) \\quad=\\quad (\\text{first number},\\; \\text{second number})$$

It is called **ordered** because the order matters — $(3, 5)$ is *not* the same as $(5, 3)$.

When we make ordered pairs from two patterns, we use:
- the **first pattern** for the first number (we call it $x$)
- the **second pattern** for the second number (we call it $y$)

**Example:** Pattern A and Pattern B from Part 2 had corresponding terms $4$ and $8$. As an ordered pair, that is $(4,\\ 8)$.

| Pattern A ($x$) | Pattern B ($y$) | Ordered pair $(x, y)$ |
|-----------------|-----------------|------------------------|
| $0$ | $0$ | $(0, 0)$ |
| $2$ | $4$ | $(2, 4)$ |
| $4$ | $8$ | $(4, 8)$ |
| $6$ | $12$ | $(6, 12)$ |

> ⚠️ **Order matters!** The $x$-value (from the first pattern) always comes first, and the $y$-value (from the second pattern) comes second.`,
      },
      {
        id: 'pr3-make-pair-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A table shows $x = 6$ and $y = 12$ in the same row. The ordered pair is:',
              options: ['$(6, 12)$', '$(12, 6)$', '$(6, 6)$', '$(18, 6)$'],
              correctAnswer: 0,
              explanation: 'The $x$-value comes first, then the $y$-value: $(6, 12)$. Writing $(12, 6)$ would reverse them, which is a different point.',
            },
            {
              question: 'Why is $(3, 7)$ different from $(7, 3)$?',
              options: [
                'They are the same; order does not matter.',
                'Because the pair is "ordered" — the first and second numbers play different roles.',
                'Because $3 + 7$ is not $7 + 3$.',
                'Because one is bigger than the other.',
              ],
              correctAnswer: 1,
              explanation: 'In an ordered pair the first number is the $x$-value and the second is the $y$-value. Swapping them describes a completely different point, so order matters.',
            },
          ],
        },
      },
      {
        id: 'pr3-pairs-from-rules',
        type: 'text' as const,
        content: `## Making Ordered Pairs from Two Rules

You can build ordered pairs straight from two rules. Both patterns below start at $0$.

- **First pattern ($x$) rule:** add 1
- **Second pattern ($y$) rule:** add 5

| Step | $x$ (add 1) | $y$ (add 5) | Ordered pair |
|------|-------------|-------------|--------------|
| 1 | $0$ | $0$ | $(0, 0)$ |
| 2 | $1$ | $5$ | $(1, 5)$ |
| 3 | $2$ | $10$ | $(2, 10)$ |
| 4 | $3$ | $15$ | $(3, 15)$ |

Notice the relationship: each $y$ is **5 times** its $x$. So the ordered pairs all follow $y = 5 \\times x$.

> 💡 **Shortcut:** If you know the relationship (here, $y = 5x$), you can write the ordered pair for *any* $x$ without finishing the whole table.`,
      },
      {
        id: 'pr3-pairs-drill',
        type: 'input-boxes' as const,
        content: `**Make the Pairs** 🧮

Pattern $x$ starts at $0$ and adds $2$. Pattern $y$ starts at $0$ and adds $10$.

Fill in the missing numbers.

| Step | $x$ | $y$ | Pair |
|------|-----|-----|------|
| 1 | $0$ | $0$ | $(0,0)$ |
| 2 | $2$ | $10$ | $(2,10)$ |
| 3 | $4$ | ? | $(4, \\,?)$ |
| 4 | ? | $30$ | $(?,\\,30)$ |

**1)** Step 3, the $y$-value $= ?$
**2)** Step 4, the $x$-value $= ?$
**3)** The relationship is $y = ? \\times x$. Enter the missing number.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['20', '6', '5'],
          hint1: 'Pattern $y$ adds 10 each step. Step 2 was $10$, so Step 3 is $10 + 10$.',
          hint2: 'Pattern $x$ adds 2 each step. Step 3 was $4$, so Step 4 is $4 + 2$.',
          hint3: 'Compare a pair: $x = 2$ gives $y = 10$. Since $2 \\times 5 = 10$, the relationship is $y = 5 \\times x$.',
          explanation: '1) $y$: $10+10 = 20$, pair $(4, 20)$.  2) $x$: $4+2 = 6$, pair $(6, 30)$.  3) Each $y$ is $5$ times its $x$ ($2\\to10$, $4\\to20$, $6\\to30$), so $y = 5 \\times x$.',
        },
      },
      {
        id: 'pr3-pairs-dropdown',
        type: 'dropdown-select' as const,
        content: `**From Table to Pairs** 🔽

A table has corresponding terms $x = 3$ and $y = 12$ in one row.`,
        exercise: {
          dropdowns: [
            { label: 'The ordered pair for that row is:', options: ['$(3, 12)$', '$(12, 3)$', '$(3, 3)$', '$(12, 12)$'] },
            { label: 'In this pair, the number $3$ is the:', options: ['$x$-value', '$y$-value', 'rule', 'step number'] },
            { label: 'If the relationship is $y = 4 \\times x$, then when $x = 5$, the pair is:', options: ['$(5, 20)$', '$(20, 5)$', '$(5, 9)$', '$(5, 25)$'] },
          ],
          correctAnswers: ['$(3, 12)$', '$x$-value', '$(5, 20)$'],
          hint1: 'The first pattern gives $x$ and comes first: $(3, 12)$.',
          hint2: 'The first number in an ordered pair is always the $x$-value.',
          hint3: 'Use the relationship: $y = 4 \\times 5 = 20$, so the pair is $(5, 20)$.',
          explanation: 'The $x$-value is written first, so $(3, 12)$ with $3$ as the $x$-value. With $y = 4x$, an $x$ of $5$ gives $y = 20$, the pair $(5, 20)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'patterns-relationships',
    sections: [
      {
        id: 'pr4-intro',
        type: 'text' as const,
        content: `# 🔢 Patterns and Relationships

**Part 4 of 5 — Graphing on the Coordinate Plane**

---

> 🔑 **The Big Payoff:** When you plot the ordered pairs from two patterns on a **coordinate plane**, the points form a **straight line**. Seeing the line makes the relationship *visible*.`,
      },
      {
        id: 'pr4-plane',
        type: 'text' as const,
        content: `## The Coordinate Plane

The **coordinate plane** is made of two number lines that cross at right angles:

- the **$x$-axis** runs left–right (horizontal)
- the **$y$-axis** runs up–down (vertical)
- they meet at the **origin**, the point $(0, 0)$

To **plot** an ordered pair $(x, y)$:

1. Start at the origin $(0, 0)$.
2. Move **right** along the $x$-axis by the $x$-value.
3. Move **up** along the $y$-axis by the $y$-value.
4. Make a dot.

**Example:** To plot $(3, 5)$, go **right 3**, then **up 5**, and mark the point.

| Ordered pair | Move right | Move up |
|--------------|-----------|---------|
| $(0, 0)$ | $0$ | $0$ (you stay at the origin) |
| $(2, 4)$ | $2$ | $4$ |
| $(3, 5)$ | $3$ | $5$ |

> ⚠️ **Right, then up.** Always do the $x$-value (right) first and the $y$-value (up) second — just like the order in the pair.`,
      },
      {
        id: 'pr4-plot-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To plot $(4, 2)$, you move:',
              options: ['right 4, then up 2', 'right 2, then up 4', 'up 4, then right 2', 'left 4, then down 2'],
              correctAnswer: 0,
              explanation: 'The $x$-value (4) is the right-move and the $y$-value (2) is the up-move: right 4, then up 2.',
            },
            {
              question: 'Which point is the origin?',
              options: ['$(0, 0)$', '$(1, 1)$', '$(0, 1)$', '$(1, 0)$'],
              correctAnswer: 0,
              explanation: 'The origin is where the two axes cross — no move right and no move up — so it is $(0, 0)$.',
            },
          ],
        },
      },
      {
        id: 'pr4-graph-relationship',
        type: 'text' as const,
        content: `## Patterns Make Straight Lines

Let's graph the pairs from a two-pattern table. Both patterns start at $0$; $x$ adds $1$ and $y$ adds $2$, so the relationship is $y = 2 \\times x$.

| $x$ | $y$ | Ordered pair |
|-----|-----|--------------|
| $0$ | $0$ | $(0, 0)$ |
| $1$ | $2$ | $(1, 2)$ |
| $2$ | $4$ | $(2, 4)$ |
| $3$ | $6$ | $(3, 6)$ |
| $4$ | $8$ | $(4, 8)$ |

When you plot $(0,0), (1,2), (2,4), (3,6), (4,8)$, the dots line up perfectly — they make a **straight line** climbing to the right.

This always happens when both patterns grow by a steady amount each step:

> 🔑 **Key Idea:** A constant "add this much each step" rule for both patterns gives ordered pairs that fall on a **straight line**. The faster $y$ grows compared to $x$, the **steeper** the line.`,
      },
      {
        id: 'pr4-graph-drill',
        type: 'input-boxes' as const,
        content: `**Read the Graph Pairs** 🧮

A pattern table gives the ordered pairs $(0,0),\\ (1,3),\\ (2,6),\\ (3,9)$.

**1)** To plot $(3, 9)$, how many units do you move **right**? $?$
**2)** To plot $(3, 9)$, how many units do you move **up**? $?$
**3)** These pairs follow $y = ? \\times x$. Enter the missing number.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '9', '3'],
          hint1: 'The right-move is always the $x$-value (the first number).',
          hint2: 'The up-move is always the $y$-value (the second number).',
          hint3: 'Check a pair: $x = 1$ gives $y = 3$, and $x = 2$ gives $y = 6$. Since $1 \\times 3 = 3$ and $2 \\times 3 = 6$, the relationship is $y = 3 \\times x$.',
          explanation: '1) Right = $x$-value = $3$.  2) Up = $y$-value = $9$.  3) Every $y$ is $3$ times its $x$ ($0,3,6,9$), so $y = 3 \\times x$.',
        },
      },
      {
        id: 'pr4-quadrant-dropdown',
        type: 'dropdown-select' as const,
        content: `**Plot It Correctly** 🔽

You are plotting the ordered pair $(5, 2)$ on the coordinate plane.`,
        exercise: {
          dropdowns: [
            { label: 'First move (along the $x$-axis):', options: ['right 5', 'up 5', 'right 2', 'up 2'] },
            { label: 'Second move (along the $y$-axis):', options: ['up 2', 'right 2', 'up 5', 'down 2'] },
            { label: 'If you instead plotted $(2, 5)$, the point would be:', options: ['a different point', 'the same point', 'the origin', 'off the grid'] },
          ],
          correctAnswers: ['right 5', 'up 2', 'a different point'],
          hint1: 'The first number, $5$, is the $x$-value — move right that many units.',
          hint2: 'The second number, $2$, is the $y$-value — move up that many units.',
          hint3: 'Swapping to $(2, 5)$ means right 2, up 5 — a completely different spot.',
          explanation: 'For $(5,2)$: right 5, then up 2. Because order matters, $(2,5)$ lands somewhere else entirely — a different point.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'patterns-relationships',
    sections: [
      {
        id: 'pr5-intro',
        type: 'text' as const,
        content: `# 🔢 Patterns and Relationships

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) find a rule and extend a pattern, (2) generate two patterns and compare corresponding terms, (3) write ordered pairs, and (4) plot them to reveal a straight line. Let's put it all together.`,
      },
      {
        id: 'pr5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find a rule | Ask "what do I do to get the next term?" — must work for **every** step |
| Compare two patterns | Line up **corresponding terms** (same row) and find what connects them |
| Write an ordered pair | First pattern $\\to x$, second pattern $\\to y$: $(x, y)$ |
| Plot a point | From the origin: **right** by $x$, then **up** by $y$ |
| Graph a relationship | Steady-add patterns plot as a **straight line** |

> 💡 **Big picture:** A rule builds a pattern → two patterns make ordered pairs → ordered pairs make a graph. Each idea is built from the one before it.

> ⚠️ **Two reminders:** order matters in $(x, y)$, and a relationship must hold for **every** corresponding pair, not just one.`,
      },
      {
        id: 'pr5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Pattern P (start $0$, add 4) and Pattern Q (start $0$, add 8) give corresponding terms. What is the relationship?',
              options: ['$Q = 2 \\times P$', '$Q = P + 4$', '$Q = 4 \\times P$', '$Q = P + 8$'],
              correctAnswer: 0,
              explanation: 'Corresponding terms: $(4,8), (8,16), (12,24)$. Each Q is double its P ($4\\times2=8$, $8\\times2=16$), so $Q = 2 \\times P$. Q adds twice as much each step, so the terms stay double.',
            },
            {
              question: 'A table row shows $x = 7$ and $y = 21$. The ordered pair and relationship are:',
              options: ['$(7, 21)$ with $y = 3x$', '$(21, 7)$ with $y = 3x$', '$(7, 21)$ with $y = x + 14$', '$(7, 21)$ with $y = 14x$'],
              correctAnswer: 0,
              explanation: 'The $x$-value comes first: $(7, 21)$. Since $7 \\times 3 = 21$, the multiplying relationship is $y = 3x$. ("$y = x + 14$" happens to give 21 here, but it would fail other rows like $x=2,\\ y=6$.)',
            },
          ],
        },
      },
      {
        id: 'pr5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Put It Together** 🧮

Pattern $x$ starts at $0$ and adds $3$. Pattern $y$ starts at $0$ and adds $9$.

**1)** When $x = 6$, what is the corresponding $y$? $?$
**2)** Written as an ordered pair, the row is $(6,\\ ?)$. Enter the missing $y$-coordinate.
**3)** The relationship is $y = ? \\times x$. Enter the missing number.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['18', '18', '3'],
          hint1: 'Each $y$ is $3$ times its $x$ (since $y$ adds 9 while $x$ adds 3). For $x=6$: $6 \\times 3$.',
          hint2: 'The $y$-coordinate of the pair $(6, y)$ is the same value you found: $18$.',
          hint3: 'Compare: $x=3$ gives $y=9$, $x=6$ gives $y=18$. Since $3\\times3=9$ and $6\\times3=18$, $y = 3 \\times x$.',
          explanation: '1) $y = 6 \\times 3 = 18$.  2) The pair is $(6, 18)$, so the $y$-coordinate is $18$.  3) Each $y$ is $3$ times its $x$, so $y = 3 \\times x$.',
        },
      },
      {
        id: 'pr5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the next number in the pattern $7,\\ 14,\\ 21,\\ 28,\\ \\ldots$?',
              options: ['$35$', '$42$', '$34$', '$56$'],
              correctAnswer: 0,
              explanation: 'The rule is "add 7" ($7\\to14\\to21\\to28$), so the next number is $28 + 7 = 35$.',
            },
            {
              question: 'Pattern A and Pattern B have corresponding terms in this table:\n\n| A | $1$ | $2$ | $3$ | $4$ |\n|---|---|---|---|---|\n| B | $4$ | $8$ | $12$ | $16$ |\n\nWhat is the relationship?',
              options: ['$B = 4 \\times A$', '$B = A + 3$', '$B = 2 \\times A$', '$B = A + 4$'],
              correctAnswer: 0,
              explanation: 'Each B is 4 times its A: $1\\times4=4$, $2\\times4=8$, $3\\times4=12$, $4\\times4=16$. So $B = 4 \\times A$. ("$A+3$" works only for the first column.)',
            },
            {
              question: 'To plot the ordered pair $(2, 6)$, you move:',
              options: ['right 2, then up 6', 'right 6, then up 2', 'up 2, then right 6', 'left 2, then down 6'],
              correctAnswer: 0,
              explanation: 'The $x$-value (2) is the right-move and the $y$-value (6) is the up-move: right 2, then up 6.',
            },
          ],
        },
      },
    ],
  },
]
