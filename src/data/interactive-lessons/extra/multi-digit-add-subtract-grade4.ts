import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Multi-Digit Addition and Subtraction (Grade 4 Math).
 * Registry key: 'multi-digit-add-subtract-grade4' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'multi-digit-add-subtract-grade4',
    sections: [
      {
        id: 'mdas1-intro',
        type: 'text' as const,
        content: `# ➕ Multi-Digit Addition & Subtraction

**Part 1 of 5 — Place Value & Lining Up the Digits**

---

### Topics in This Part

| Section |
|---------|
| What Place Value Means |
| Lining Up by Place |
| Reading Big Numbers |

> 🔑 **Key Concept:** Every digit in a number has a *place* — ones, tens, hundreds, thousands. Addition and subtraction only work when you line up digits in the **same place** and combine them. Get the line-up right and the rest is easy.`,
      },
      {
        id: 'mdas1-placevalue',
        type: 'text' as const,
        content: `## What Place Value Means

The **value** of a digit depends on *where* it sits in the number. Look at **4,736**:

| Place | Thousands | Hundreds | Tens | Ones |
|-------|-----------|----------|------|------|
| Digit | **4** | **7** | **3** | **6** |
| Value | $4{,}000$ | $700$ | $30$ | $6$ |

So $4{,}736 = 4{,}000 + 700 + 30 + 6$. Each place is **10 times** bigger than the place to its right.

> 💡 The same digit can mean very different amounts. In **5,208**, the **5** is worth $5{,}000$, but in **52** the **5** is only worth $50$. Position is everything.`,
      },
      {
        id: 'mdas1-place-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the number $4{,}736$, what is the value of the digit $7$?',
              options: ['$700$', '$70$', '$7$', '$7{,}000$'],
              correctAnswer: 0,
              explanation: 'The $7$ sits in the **hundreds** place, so its value is $7 \\times 100 = 700$.',
            },
            {
              question: 'Which number equals $3{,}000 + 500 + 20 + 9$?',
              options: ['$3{,}529$', '$3{,}259$', '$30{,}529$', '$3{,}592$'],
              correctAnswer: 0,
              explanation: '$3$ thousands, $5$ hundreds, $2$ tens, $9$ ones $= 3{,}529$.',
            },
          ],
        },
      },
      {
        id: 'mdas1-lineup',
        type: 'text' as const,
        content: `## Lining Up by Place

When you stack numbers to add or subtract, the **ones line up under the ones**, **tens under tens**, and so on. Always work from **right to left** (ones first).

$$\\begin{array}{r} 3\\,4\\,7 \\\\ +\\;2\\,8\\,5 \\\\ \\hline \\end{array}$$

The $7$ and the $5$ are both in the **ones** place, so they get added together. The $4$ and the $8$ are both **tens**.

> ⚠️ **Watch out!** When the numbers have *different* lengths, still line up the **right edge** (the ones place). To add $475 + 38$, the $8$ goes under the $5$, not under the $7$:

$$\\begin{array}{r} 4\\,7\\,5 \\\\ +\\;\\;\\;3\\,8 \\\\ \\hline \\end{array}$$`,
      },
      {
        id: 'mdas1-lineup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Line Them Up** 🔽

You are stacking numbers to add. Choose which digits share each place.`,
        exercise: {
          dropdowns: [
            { label: 'In $562 + 47$, the digit under the $2$ (ones place) is:', options: ['$7$', '$4$', '$5$', '$6$'] },
            { label: 'In $562 + 47$, the digit under the $6$ (tens place) is:', options: ['$4$', '$7$', '$5$', '$2$'] },
            { label: 'In $562 + 47$, the hundreds place above is:', options: ['$5$', '$6$', '$2$', '$4$'] },
          ],
          correctAnswers: ['$7$', '$4$', '$5$'],
          hint1: 'Always line up the **right edge** — the ones place. The $7$ in $47$ is its ones digit.',
          hint2: 'The $4$ in $47$ is its tens digit, so it lines up under the $6$ (the tens of $562$).',
          hint3: '$47$ has no hundreds digit, so the hundreds column has only the $5$ from $562$.',
          explanation: 'Stacked right-aligned: $562$ over $\\;47$. Ones: $2$ and $7$. Tens: $6$ and $4$. Hundreds: just $5$.',
        },
      },
      {
        id: 'mdas1-readbig',
        type: 'text' as const,
        content: `## Reading Big Numbers

A **comma** separates groups of three digits and makes big numbers easy to read. Read $4{,}736$ as **"four thousand, seven hundred thirty-six."**

| Number | In Words |
|--------|----------|
| $1{,}205$ | one thousand, two hundred five |
| $6{,}080$ | six thousand, eighty |
| $9{,}999$ | nine thousand, nine hundred ninety-nine |

> 🔑 A **zero** is a placeholder — it holds a place open so the other digits stay in their correct spots. In $6{,}080$, the zero in the hundreds place tells us there are **no hundreds**.`,
      },
      {
        id: 'mdas1-placevalue-drill',
        type: 'input-boxes' as const,
        content: `**Name the Value** 🧮

For each number, enter the **value** of the bold digit (not just the digit itself).

**1)** In $4{,}736$, the value of the **$3$** is $\\,?$  *(it is in the tens place)*
**2)** In $5{,}208$, the value of the **$5$** is $\\,?$  *(it is in the thousands place)*
**3)** In $4{,}736$, the value of the **$6$** is $\\,?$  *(it is in the ones place)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '5000', '6'],
          hint1: 'A digit in the **tens** place is worth that digit $\\times 10$.',
          hint2: 'A digit in the **thousands** place is worth that digit $\\times 1{,}000$.',
          hint3: 'A digit in the **ones** place is worth exactly itself.',
          explanation: '1) $3$ in the tens place $= 3 \\times 10 = 30$.  2) $5$ in the thousands place $= 5 \\times 1{,}000 = 5{,}000$.  3) $6$ in the ones place $= 6$. (Enter $5000$ without a comma.) You now read numbers and line them up by place — in Part 2 we start **adding**.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'multi-digit-add-subtract-grade4',
    sections: [
      {
        id: 'mdas2-intro',
        type: 'text' as const,
        content: `# ➕ Multi-Digit Addition & Subtraction

**Part 2 of 5 — Addition with Regrouping (Carrying)**

---

> 🔑 **The Idea:** When a column adds up to $10$ or more, you can't fit two digits in one place. You **regroup** (carry) the extra ten into the next column to the left. Same trick works for hundreds and thousands.`,
      },
      {
        id: 'mdas2-steps',
        type: 'text' as const,
        content: `## The Steps for Adding

To add two numbers:

1. **Line them up** by place (ones under ones).
2. **Start at the ones** column and add.
3. If a column total is **$10$ or more**, write the **ones digit** and **carry** the ten to the next column.
4. Move **left** and repeat until every column is done.

### Worked Example: $347 + 285$

$$\\begin{array}{r} \\overset{1}{3}\\,\\overset{1}{4}\\,7 \\\\ +\\;2\\,8\\,5 \\\\ \\hline 6\\,3\\,2 \\end{array}$$

- **Ones:** $7 + 5 = 12$. Write $2$, carry $1$.
- **Tens:** $4 + 8 + 1 = 13$. Write $3$, carry $1$.
- **Hundreds:** $3 + 2 + 1 = 6$. Write $6$.

So $347 + 285 = 632$. ✓`,
      },
      {
        id: 'mdas2-carry-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When the ones column adds to $14$, what do you write in the ones place and carry?',
              options: ['Write $4$, carry $1$', 'Write $1$, carry $4$', 'Write $14$', 'Write $4$, carry $10$'],
              correctAnswer: 0,
              explanation: '$14$ is $1$ ten and $4$ ones. Write the $4$ in the ones place and carry the $1$ ten to the tens column.',
            },
            {
              question: 'In $128 + 356$, the ones column is $8 + 6 = 14$. After carrying, what is the tens column total?',
              options: ['$2 + 5 + 1 = 8$', '$2 + 5 = 7$', '$2 + 5 + 4 = 11$', '$1 + 3 + 1 = 5$'],
              correctAnswer: 0,
              explanation: 'The tens digits are $2$ and $5$, plus the $1$ carried from the ones: $2 + 5 + 1 = 8$. (Final answer $128 + 356 = 484$.)',
            },
          ],
        },
      },
      {
        id: 'mdas2-worked2',
        type: 'text' as const,
        content: `## Carrying More Than Once

Sometimes you carry in **several** columns. Just take it one column at a time.

### Worked Example: $1{,}568 + 2{,}745$

$$\\begin{array}{r} 1\\,5\\,6\\,8 \\\\ +\\;2\\,7\\,4\\,5 \\\\ \\hline 4\\,3\\,1\\,3 \\end{array}$$

- **Ones:** $8 + 5 = 13$. Write $3$, carry $1$.
- **Tens:** $6 + 4 + 1 = 11$. Write $1$, carry $1$.
- **Hundreds:** $5 + 7 + 1 = 13$. Write $3$, carry $1$.
- **Thousands:** $1 + 2 + 1 = 4$. Write $4$.

So $1{,}568 + 2{,}745 = 4{,}313$. ✓

> 💡 Carrying a $1$ never changes — you always carry **just one ten** (or one hundred, etc.), because a single column can total at most $9 + 9 + 1 = 19$.`,
      },
      {
        id: 'mdas2-add-drill',
        type: 'input-boxes' as const,
        content: `**Add It Up** 🧮

Add each pair. Work right to left and carry when a column is $10$ or more.

**1)** $475 + 38 = \\,?$
**2)** $456 + 789 = \\,?$
**3)** $2{,}649 + 3{,}875 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['513', '1245', '6524'],
          hint1: '$475 + 38$: ones $5 + 8 = 13$ (write $3$, carry $1$); tens $7 + 3 + 1 = 11$ (write $1$, carry $1$); hundreds $4 + 1 = 5$.',
          hint2: '$456 + 789$: ones $6 + 9 = 15$; tens $5 + 8 + 1 = 14$; hundreds $4 + 7 + 1 = 12$. That last carry makes a thousands digit!',
          hint3: '$2{,}649 + 3{,}875$: ones $9 + 5 = 14$; tens $4 + 7 + 1 = 12$; hundreds $6 + 8 + 1 = 15$; thousands $2 + 3 + 1 = 6$.',
          explanation: '1) $475 + 38 = 513$.  2) $456 + 789 = 1{,}245$.  3) $2{,}649 + 3{,}875 = 6{,}524$. (Enter answers without commas.)',
        },
      },
      {
        id: 'mdas2-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Trace the Carry** 🔽

You are adding $3{,}826 + 4{,}597$. Choose what happens at each column.`,
        exercise: {
          dropdowns: [
            { label: 'Ones: $6 + 7 = $', options: ['$13$ — write $3$, carry $1$', '$13$ — write $1$, carry $3$', '$11$ — write $1$, carry $1$', '$13$ — write $13$'] },
            { label: 'Tens: $2 + 9 + 1 = $', options: ['$12$ — write $2$, carry $1$', '$11$ — write $1$, carry $1$', '$12$ — write $1$, carry $2$', '$3$ — write $3$'] },
            { label: 'Final answer:', options: ['$8{,}423$', '$7{,}423$', '$8{,}413$', '$8{,}323$'] },
          ],
          correctAnswers: ['$13$ — write $3$, carry $1$', '$12$ — write $2$, carry $1$', '$8{,}423$'],
          hint1: 'Ones: $6 + 7 = 13$, which is $1$ ten and $3$ ones — write $3$, carry $1$.',
          hint2: 'Tens: add the carried $1$: $2 + 9 + 1 = 12$ — write $2$, carry $1$.',
          hint3: 'Hundreds: $8 + 5 + 1 = 14$ (write $4$, carry $1$); thousands: $3 + 4 + 1 = 8$. Answer $8{,}423$.',
          explanation: '$3{,}826 + 4{,}597 = 8{,}423$. Carrying happened in the ones, tens, and hundreds columns.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'multi-digit-add-subtract-grade4',
    sections: [
      {
        id: 'mdas3-intro',
        type: 'text' as const,
        content: `# ➕ Multi-Digit Addition & Subtraction

**Part 3 of 5 — Subtraction with Regrouping (Borrowing)**

---

> 🔑 **The Idea:** When the top digit in a column is **smaller** than the bottom digit, you can't subtract yet. You **borrow** $1$ from the next place to the left — that turns it into $10$ extra in the current column. This is regrouping in reverse.`,
      },
      {
        id: 'mdas3-steps',
        type: 'text' as const,
        content: `## The Steps for Subtracting

To subtract:

1. **Line up** by place (ones under ones).
2. **Start at the ones** column.
3. If the **top digit is smaller** than the bottom, **borrow** $1$ from the next column left: cross it out, make it one smaller, and add $10$ to the current column.
4. Subtract each column, moving **left**.

### Worked Example: $652 - 318$

$$\\begin{array}{r} 6\\,\\overset{4}{5}\\,\\overset{12}{\\cancel{2}} \\\\ -\\;3\\,1\\,8 \\\\ \\hline 3\\,3\\,4 \\end{array}$$

- **Ones:** $2 - 8$ won't work. Borrow: the $5$ tens becomes $4$, and the ones become $12$. Now $12 - 8 = 4$.
- **Tens:** $4 - 1 = 3$.
- **Hundreds:** $6 - 3 = 3$.

So $652 - 318 = 334$. ✓`,
      },
      {
        id: 'mdas3-borrow-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a subtraction, the ones column is $3 - 7$. What should you do?',
              options: ['Borrow $1$ from the tens, making it $13 - 7$', 'Just write $4$', 'Do $7 - 3 = 4$ instead', 'Carry $1$ to the tens'],
              correctAnswer: 0,
              explanation: 'You cannot take $7$ from $3$, so borrow $1$ ten. The ones become $13$, and $13 - 7 = 6$. You never flip the order to $7 - 3$.',
            },
            {
              question: 'After you borrow $1$ from the tens digit (which was $5$), that tens digit becomes:',
              options: ['$4$', '$6$', '$15$', '$50$'],
              correctAnswer: 0,
              explanation: 'Borrowing takes $1$ away from the tens, so $5$ becomes $4$. That borrowed ten adds $10$ to the ones column.',
            },
          ],
        },
      },
      {
        id: 'mdas3-zeros',
        type: 'text' as const,
        content: `## Borrowing Across Zeros

The trickiest case is subtracting from a number with **zeros**, like $700 - 264$. There's nothing to borrow from next door, so you keep borrowing one place further left until you reach a nonzero digit.

### Worked Example: $700 - 264$

$$\\begin{array}{r} \\overset{6}{\\cancel{7}}\\,\\overset{9}{\\cancel{0}}\\,\\overset{10}{\\cancel{0}} \\\\ -\\;2\\,6\\,4 \\\\ \\hline 4\\,3\\,6 \\end{array}$$

- **Ones:** $0 - 4$ won't work, but the tens are $0$ too. Borrow from the **hundreds**: $7$ becomes $6$, the tens become $10$, then lend $1$ ten to the ones — tens become $9$, ones become $10$.
- **Ones:** $10 - 4 = 6$.
- **Tens:** $9 - 6 = 3$.
- **Hundreds:** $6 - 2 = 4$.

So $700 - 264 = 436$. ✓

> ⚠️ **Common mistake:** writing $0 - 4 = 4$. You can't skip the borrow! Always regroup before you subtract.`,
      },
      {
        id: 'mdas3-sub-drill',
        type: 'input-boxes' as const,
        content: `**Subtract It** 🧮

Subtract each pair. Borrow whenever the top digit is too small.

**1)** $800 - 356 = \\,?$
**2)** $623 - 457 = \\,?$
**3)** $5{,}003 - 2{,}748 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['444', '166', '2255'],
          hint1: '$800 - 356$: borrow across the zeros. Ones $10 - 6 = 4$; tens $9 - 5 = 4$; hundreds $7 - 3 = 4$.',
          hint2: '$623 - 457$: ones borrow $13 - 7 = 6$; tens borrow $11 - 5 = 6$; hundreds $5 - 4 = 1$.',
          hint3: '$5{,}003 - 2{,}748$: borrow across the two zeros. You get ones $13 - 8 = 5$, tens $9 - 4 = 5$, hundreds $9 - 7 = 2$, thousands $4 - 2 = 2$.',
          explanation: '1) $800 - 356 = 444$.  2) $623 - 457 = 166$.  3) $5{,}003 - 2{,}748 = 2{,}255$. (Enter answers without commas.)',
        },
      },
      {
        id: 'mdas3-check-by-adding',
        type: 'dropdown-select' as const,
        content: `**Check by Adding** 🔽

You can always check a subtraction by **adding** the answer back. If $a - b = c$, then $c + b$ should equal $a$.`,
        exercise: {
          dropdowns: [
            { label: 'You found $4{,}001 - 1{,}875 = 2{,}126$. To check, add:', options: ['$2{,}126 + 1{,}875$', '$2{,}126 + 4{,}001$', '$4{,}001 + 1{,}875$', '$2{,}126 - 1{,}875$'] },
            { label: 'The check should equal:', options: ['$4{,}001$', '$2{,}126$', '$1{,}875$', '$6{,}127$'] },
            { label: 'Since $2{,}126 + 1{,}875 = 4{,}001$, the answer is:', options: ['correct ✓', 'too big', 'too small', 'impossible to tell'] },
          ],
          correctAnswers: ['$2{,}126 + 1{,}875$', '$4{,}001$', 'correct ✓'],
          hint1: 'To check $a - b = c$, add the answer $c$ to what you subtracted, $b$: that is $2{,}126 + 1{,}875$.',
          hint2: 'A correct check brings you back to the number you started with, $4{,}001$.',
          hint3: '$2{,}126 + 1{,}875 = 4{,}001$, which matches the original top number, so the subtraction is correct.',
          explanation: 'Adding the difference and the smaller number recreates the original: $2{,}126 + 1{,}875 = 4{,}001$. ✓ This is the best way to catch borrowing mistakes.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'multi-digit-add-subtract-grade4',
    sections: [
      {
        id: 'mdas4-intro',
        type: 'text' as const,
        content: `# ➕ Multi-Digit Addition & Subtraction

**Part 4 of 5 — Estimation & Word Problems**

---

> 🔑 **Why estimate?** Rounding first gives you a quick "about how much" answer. If your exact answer is far from your estimate, you probably made a regrouping mistake. Estimation is your built-in error checker.`,
      },
      {
        id: 'mdas4-rounding',
        type: 'text' as const,
        content: `## Rounding to Estimate

To round to a place, look at the digit **just to the right**:
- If it's **$5$ or more**, round **up**.
- If it's **$4$ or less**, round **down** (keep the digit the same).

| Number | Nearest Ten | Nearest Hundred |
|--------|-------------|-----------------|
| $487$ | $490$ | $500$ |
| $312$ | $310$ | $300$ |
| $638$ | $640$ | $600$ |

### Estimating a Sum: $487 + 312$

Round each to the nearest hundred: $500 + 300 = 800$. The exact answer is $799$ — very close, so we trust it. ✓

> 💡 An estimate is **never** the exact answer, but it should be **near** it. Use estimation *before* you compute (to predict) and *after* (to check).`,
      },
      {
        id: 'mdas4-estimate-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Round $1{,}378$ to the nearest hundred.',
              options: ['$1{,}400$', '$1{,}300$', '$1{,}380$', '$1{,}000$'],
              correctAnswer: 0,
              explanation: 'The digit right of the hundreds place is $7$ (the tens digit). Since $7 \\ge 5$, round up: $1{,}378 \\to 1{,}400$.',
            },
            {
              question: 'Estimate $1{,}378 + 2{,}456$ by rounding each to the nearest hundred.',
              options: ['$1{,}400 + 2{,}500 = 3{,}900$', '$1{,}300 + 2{,}400 = 3{,}700$', '$1{,}400 + 2{,}400 = 3{,}800$', '$1{,}000 + 2{,}000 = 3{,}000$'],
              correctAnswer: 0,
              explanation: '$1{,}378 \\to 1{,}400$ and $2{,}456 \\to 2{,}500$, so the estimate is $3{,}900$. (The exact answer is $3{,}834$ — close, so it checks out.)',
            },
          ],
        },
      },
      {
        id: 'mdas4-keywords',
        type: 'text' as const,
        content: `## Word Problem Key Words

Word problems tell you whether to add or subtract. Watch for these clues:

| Operation | Key Words |
|-----------|-----------|
| **Add** ➕ | *in all, total, altogether, combined, sum, both* |
| **Subtract** ➖ | *how many more, how many left, difference, fewer, remaining, take away* |

### Worked Example

> *A library had $1{,}245$ books. They bought $876$ more. How many books in all?*

"In all" means **add**: $1{,}245 + 876 = 2{,}121$ books.

### Worked Example

> *A stadium holds $2{,}500$ people. If $1{,}750$ seats are filled, how many are empty?*

"How many empty" (left over) means **subtract**: $2{,}500 - 1{,}750 = 750$ empty seats.

> ⚠️ Key words are clues, not rules — always picture the situation. "How many more" usually means subtract (a difference), even though it contains the word "more."`,
      },
      {
        id: 'mdas4-word-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Problem** 🧮

Read each problem, decide add or subtract, then compute.

**1)** A school sold $1{,}378$ tickets on Friday and $2{,}456$ on Saturday. How many tickets in all? $\\,?$
**2)** A truck carried $5{,}280$ pounds of cargo. It dropped off $3{,}675$ pounds. How many pounds are left? $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3834', '1605'],
          hint1: '"In all" means add: $1{,}378 + 2{,}456$. Stack and carry: ones $8 + 6 = 14$, tens $7 + 5 + 1 = 13$, hundreds $3 + 4 + 1 = 8$, thousands $1 + 2 = 3$.',
          hint2: '"How many left" means subtract: $5{,}280 - 3{,}675$. Borrow where needed.',
          hint3: '$5{,}280 - 3{,}675$: ones $10 - 5 = 5$ (borrow from the $8$), tens $7 - 7 = 0$, hundreds $2 - 6$ borrow $\\to 12 - 6 = 6$, thousands $4 - 3 = 1$. Answer $1{,}605$.',
          explanation: '1) $1{,}378 + 2{,}456 = 3{,}834$ tickets.  2) $5{,}280 - 3{,}675 = 1{,}605$ pounds. (Enter answers without commas.)',
        },
      },
      {
        id: 'mdas4-decide-dropdown',
        type: 'dropdown-select' as const,
        content: `**Add or Subtract?** 🔽

Decide the operation for each problem, then pick the answer.`,
        exercise: {
          dropdowns: [
            { label: 'Maria has $642$ stickers and gets $289$ more. To find the total, you:', options: ['add', 'subtract', 'multiply', 'do nothing'] },
            { label: 'A jar had $900$ beads; $356$ were used. To find how many remain, you:', options: ['subtract', 'add', 'multiply', 'divide'] },
            { label: 'How many beads remain ($900 - 356$)?', options: ['$544$', '$456$', '$644$', '$554$'] },
          ],
          correctAnswers: ['add', 'subtract', '$544$'],
          hint1: '"Gets more" and "total" point to addition — you are combining two amounts.',
          hint2: '"Were used" and "how many remain" point to subtraction — you are taking away.',
          hint3: '$900 - 356$: borrow across the zeros — ones $10 - 6 = 4$, tens $9 - 5 = 4$, hundreds $8 - 3 = 5$, giving $544$.',
          explanation: 'Combining amounts → add ($642 + 289 = 931$). Taking away → subtract ($900 - 356 = 544$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'multi-digit-add-subtract-grade4',
    sections: [
      {
        id: 'mdas5-intro',
        type: 'text' as const,
        content: `# ➕ Multi-Digit Addition & Subtraction

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) line up digits by place, (2) add with carrying, (3) subtract with borrowing (even across zeros), and (4) estimate and solve word problems. Let's put it all together.`,
      },
      {
        id: 'mdas5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key Move |
|------|----------|
| Set up the problem | Line up the **ones** place; work **right to left** |
| Column adds to $10$+ | Write the ones digit, **carry** $1$ to the next column |
| Top digit too small | **Borrow** $1$ from the left (it becomes $+10$ here) |
| Subtract across zeros | Keep borrowing left until you hit a nonzero digit |
| Check a subtraction | Add the answer back: $c + b$ should equal $a$ |
| Check any answer | **Estimate** by rounding — your answer should be near it |

> ⚠️ The two most common mistakes: **forgetting to carry** the extra ten in addition, and **forgetting to borrow** (writing things like $0 - 4 = 4$) in subtraction. Slow down on every column.`,
      },
      {
        id: 'mdas5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Add or subtract as needed.

**1)** $3{,}456 + 2{,}789 = \\,?$
**2)** $7{,}000 - 4{,}286 = \\,?$
**3)** $5{,}604 - 2{,}837 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6245', '2714', '2767'],
          hint1: '$3{,}456 + 2{,}789$: ones $6 + 9 = 15$, tens $5 + 8 + 1 = 14$, hundreds $4 + 7 + 1 = 12$, thousands $3 + 2 + 1 = 6$.',
          hint2: '$7{,}000 - 4{,}286$: borrow across the three zeros — ones $10 - 6 = 4$, tens $9 - 8 = 1$, hundreds $9 - 2 = 7$, thousands $6 - 4 = 2$.',
          hint3: '$5{,}604 - 2{,}837$: ones $14 - 7 = 7$ (borrow), tens $9 - 3 = 6$ (after borrowing across the $0$), hundreds $5 - 8$ borrow $\\to 15 - 8 = 7$, thousands $4 - 2 = 2$.',
          explanation: '1) $3{,}456 + 2{,}789 = 6{,}245$.  2) $7{,}000 - 4{,}286 = 2{,}714$.  3) $5{,}604 - 2{,}837 = 2{,}767$. (Enter answers without commas.)',
        },
      },
      {
        id: 'mdas5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $482 + 639$?',
              options: ['$1{,}121$', '$1{,}021$', '$1{,}111$', '$1{,}221$'],
              correctAnswer: 0,
              explanation: 'Ones $2 + 9 = 11$ (write $1$, carry $1$); tens $8 + 3 + 1 = 12$ (write $2$, carry $1$); hundreds $4 + 6 + 1 = 11$. Answer $1{,}121$.',
            },
            {
              question: 'Estimate $6{,}000 - 2{,}347$ by rounding $2{,}347$ to the nearest thousand. About how big is the answer?',
              options: ['About $4{,}000$', 'About $8{,}000$', 'About $3{,}000$', 'About $2{,}000$'],
              correctAnswer: 0,
              explanation: '$2{,}347 \\to 2{,}000$, so $6{,}000 - 2{,}000 = 4{,}000$. (The exact answer is $3{,}653$, which is near $4{,}000$. ✓)',
            },
          ],
        },
      },
      {
        id: 'mdas5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'In the number $5{,}208$, what is the value of the digit $2$?',
              options: ['$200$', '$20$', '$2$', '$2{,}000$'],
              correctAnswer: 0,
              explanation: 'The $2$ is in the **hundreds** place, so its value is $2 \\times 100 = 200$.',
            },
            {
              question: 'What is $1{,}234 + 5{,}678$?',
              options: ['$6{,}912$', '$6{,}812$', '$7{,}912$', '$6{,}902$'],
              correctAnswer: 0,
              explanation: 'Ones $4 + 8 = 12$ (carry $1$); tens $3 + 7 + 1 = 11$ (carry $1$); hundreds $2 + 6 + 1 = 9$; thousands $1 + 5 = 6$. Answer $6{,}912$.',
            },
            {
              question: 'What is $700 - 264$?',
              options: ['$436$', '$546$', '$444$', '$464$'],
              correctAnswer: 0,
              explanation: 'Borrow across the zeros: ones $10 - 4 = 6$, tens $9 - 6 = 3$, hundreds $6 - 2 = 4$. Answer $436$.',
            },
          ],
        },
      },
    ],
  },
]
