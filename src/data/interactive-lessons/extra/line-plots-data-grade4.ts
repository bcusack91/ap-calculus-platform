import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Line Plots and Data (Grade 4 Math).
 * Registry key: 'line-plots-data-grade4' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Grade-4 friendly: favors
 * concept checks (multiple-choice + dropdown) with light counting and simple
 * fraction arithmetic via input-boxes. Math uses doubled backslashes
 * (template-literal strings); fractions are written with \\frac, \\tfrac.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'line-plots-data-grade4',
    sections: [
      {
        id: 'lp1-intro',
        type: 'text' as const,
        content: `# 📊 Line Plots and Data

**Part 1 of 5 — What Is a Line Plot?**

---

### Topics in This Part

| Section |
|---------|
| What Is Data? |
| The Parts of a Line Plot |
| Reading X's on a Line Plot |

> 🔑 **Key Idea:** A **line plot** is a picture that shows how often each number shows up in a set of **data**. Each piece of data gets one **X** stacked above a number line. The taller the stack of X's, the more often that number happened.`,
      },
      {
        id: 'lp1-what-is-data',
        type: 'text' as const,
        content: `## What Is Data?

**Data** is just *information we collect*. When you count, measure, or ask a question many times, you gather data.

Imagine you asked 10 classmates how many pets they have. Their answers are your data:

$$2,\\ 0,\\ 1,\\ 3,\\ 2,\\ 1,\\ 0,\\ 2,\\ 1,\\ 4$$

That long list is hard to understand by just looking at it. We need a **picture** to organize it. One great picture is the **line plot**.

> 💡 A line plot is sometimes called a **dot plot**, because some books use dots instead of X's. They mean the same thing — one mark for each piece of data.`,
      },
      {
        id: 'lp1-data-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is "data"?',
              options: ['A type of shape', 'Information we collect by counting, measuring, or asking', 'A kind of ruler', 'The name of a number line'],
              correctAnswer: 1,
              explanation: 'Data is the information we collect — like the answers to a question or the results of measuring something.',
            },
            {
              question: 'Why do we make a line plot instead of just keeping a long list of numbers?',
              options: ['Because lists are not allowed in math', 'Because a picture organizes the data so it is easy to understand', 'Because line plots use fewer numbers', 'Because a list is always wrong'],
              correctAnswer: 1,
              explanation: 'A line plot turns a messy list into an organized picture, so we can quickly see which values happen most and least.',
            },
          ],
        },
      },
      {
        id: 'lp1-parts',
        type: 'text' as const,
        content: `## The Parts of a Line Plot

Every line plot has three main parts:

- **A number line** — a straight line with numbers in order, evenly spaced.
- **X's (or dots)** — one mark for each piece of data, stacked above the right number.
- **A title and labels** — they tell you what the data is about.

Here is a line plot for the pet data ($2, 0, 1, 3, 2, 1, 0, 2, 1, 4$):

\`\`\`
Number of Pets My Classmates Have

      X     X
X     X     X
X     X     X     X     X
+-----+-----+-----+-----+-----
0     1     2     3     4
\`\`\`

> 🔑 **How to read it:** Above the number **2**, there are **3 X's**. That means **3 classmates** each have **2 pets**.`,
      },
      {
        id: 'lp1-read-drill',
        type: 'input-boxes' as const,
        content: `**Read the Line Plot** 🧮

Use the pet line plot above. Count the X's in each stack.

**1)** How many classmates have **0 pets**?
**2)** How many classmates have **1 pet**?
**3)** How many classmates have **4 pets**?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '3', '1'],
          hint1: 'Find the number on the line, then count straight up.',
          hint2: 'Above 0 there are 2 X\'s. Above 1 there are 3 X\'s.',
          hint3: 'Above 4 there is just 1 X, all by itself.',
          explanation: '1) Above 0 there are 2 X\'s → 2 classmates. 2) Above 1 there are 3 X\'s → 3 classmates. 3) Above 4 there is 1 X → 1 classmate.',
        },
      },
      {
        id: 'lp1-meaning',
        type: 'text' as const,
        content: `## What Each X Means

Each **single X** stands for **one** thing being counted — here, one classmate.

So if you want to know *how many classmates have 1 pet*, you do **not** read the number 1 on the line. You **count the X's** stacked above the 1.

| Number on the line | What it tells you |
|--------------------|-------------------|
| The number itself | The **value** (how many pets) |
| The X's above it | **How many times** that value happened |

> ⚠️ **Common Mix-Up:** The number on the line is *what was counted* (the value). The X's tell you *how often*. Don't confuse the two!

In Part 2, you'll learn to build your own line plot from scratch.`,
      },
      {
        id: 'lp1-value-dropdown',
        type: 'dropdown-select' as const,
        content: `**Value or Count?** 🔽

Still using the pet line plot ($0 \\to 2$ X's, $1 \\to 3$ X's, $2 \\to 3$ X's, $3 \\to 1$ X, $4 \\to 1$ X). Decide what each part tells you.`,
        exercise: {
          dropdowns: [
            { label: 'The number 3 on the line tells you:', options: ['A value (how many pets)', 'How many classmates', 'The total of everything', 'Nothing at all'] },
            { label: 'The X\'s stacked above a number tell you:', options: ['How many times that value happened', 'The biggest number', 'The title', 'The smallest number'] },
            { label: 'To find how many classmates have 2 pets, you:', options: ['Count the X\'s above 2', 'Read the number 2', 'Add 2 + 2', 'Look at the title'] },
          ],
          correctAnswers: ['A value (how many pets)', 'How many times that value happened', 'Count the X\'s above 2'],
          hint1: 'The number on the line is the value; the X\'s tell you how often.',
          hint2: 'To find "how many classmates," always count X\'s — never read the line number.',
          hint3: 'The number 3 = a value (3 pets). The X\'s = how many times. To count classmates with 2 pets, count the X\'s above the 2.',
          explanation: 'The number on the line is the value (how many pets). The X\'s tell you how many times that value happened. So to find how many classmates have 2 pets, you count the X\'s above the 2.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'line-plots-data-grade4',
    sections: [
      {
        id: 'lp2-intro',
        type: 'text' as const,
        content: `# 📊 Line Plots and Data

**Part 2 of 5 — Making a Line Plot**

---

> 🔑 **The Plan:** To build a line plot, we (1) draw a number line that covers all the data, (2) put one X above the matching number for each piece of data, and (3) add a title. Let's do it step by step.`,
      },
      {
        id: 'lp2-steps',
        type: 'text' as const,
        content: `## The Steps to Build a Line Plot

Suppose we measured how many books 8 students read last month:

$$3,\\ 5,\\ 4,\\ 3,\\ 6,\\ 4,\\ 3,\\ 5$$

**Step 1 — Find the smallest and largest values.**
The smallest is $3$ and the largest is $6$.

**Step 2 — Draw a number line from the smallest to the largest.**
Mark $3, 4, 5, 6$, evenly spaced.

**Step 3 — Put one X above the matching number for each value.**
For the first number $3$, put an X above $3$. Keep going through the whole list.

**Step 4 — Add a title.**

\`\`\`
Books Read Last Month

X
X     X     X
X     X     X     X
+-----+-----+-----+
3     4     5     6
\`\`\`

> 💡 **Tip:** Cross each number off the list as you plot it, so you don't skip one or count it twice.`,
      },
      {
        id: 'lp2-count-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the data $3, 5, 4, 3, 6, 4, 3, 5$ for the books line plot.`,
        exercise: {
          questions: [
            {
              question: 'How many X\'s should be stacked above the number 3?',
              options: ['1', '2', '3', '4'],
              correctAnswer: 2,
              explanation: 'The number 3 appears three times in the list ($3, 3, 3$), so 3 X\'s go above the 3.',
            },
            {
              question: 'What number should the number line START at for this data?',
              options: ['0', '1', '3', '6'],
              correctAnswer: 2,
              explanation: 'The smallest value in the data is 3, so the number line can start at 3. (Starting at 0 would leave lots of empty space.)',
            },
          ],
        },
      },
      {
        id: 'lp2-tally',
        type: 'text' as const,
        content: `## Counting with a Tally First

Before plotting, many people make a **tally chart** to count how many times each value appears. A tally chart and a line plot show the *same counts* — one uses tally marks, the other uses X's.

For the books data $3, 5, 4, 3, 6, 4, 3, 5$:

| Books | Tally | Count |
|-------|-------|-------|
| 3 | ||| | 3 |
| 4 | || | 2 |
| 5 | || | 2 |
| 6 | | | 1 |

> 🔑 **Check Your Work:** The counts must add up to the total number of pieces of data. Here $3 + 2 + 2 + 1 = 8$, and there were 8 students. ✓`,
      },
      {
        id: 'lp2-tally-drill',
        type: 'input-boxes' as const,
        content: `**Build the Counts** 🧮

A class recorded how many goals each player scored: $1, 2, 1, 0, 2, 1, 3, 2, 1$.

Count how many X's go above each number.

**1)** How many X's above **0**?
**2)** How many X's above **1**?
**3)** How many X's above **2**?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '4', '3'],
          hint1: 'Go through the list and count how many times each number appears.',
          hint2: 'The number 0 shows up once. The number 1 shows up... count them: 1, 1, 1, 1.',
          hint3: 'There are four 1\'s and three 2\'s. The single 3 has its own X.',
          explanation: '0 appears 1 time, 1 appears 4 times, 2 appears 3 times (and 3 appears 1 time). Check: $1+4+3+1 = 9$ players. ✓',
        },
      },
      {
        id: 'lp2-recap',
        type: 'text' as const,
        content: `## Putting the Steps in Order

You now know each piece: find the range, draw the line, plot the X's, add a title. The **order** matters — you can't draw the right number line until you know the smallest and largest values.

> 💡 Think of it like building with blocks: you measure first, *then* you build. Try ordering the steps yourself in the next check.`,
      },
      {
        id: 'lp2-build-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

Put the steps for making a line plot in the right order.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1:', options: ['Find the smallest and largest values', 'Add a title', 'Put X\'s above the numbers', 'Erase the data'] },
            { label: 'Step 2:', options: ['Draw a number line that covers the data', 'Color the X\'s', 'Add up all the data', 'Throw away the list'] },
            { label: 'Step 3:', options: ['Put one X above the matching number for each value', 'Start over', 'Divide by two', 'Draw a circle'] },
          ],
          correctAnswers: ['Find the smallest and largest values', 'Draw a number line that covers the data', 'Put one X above the matching number for each value'],
          hint1: 'You must know how far the number line needs to reach before you draw it.',
          hint2: 'First find the range of values, then draw the line, then plot the X\'s.',
          hint3: 'Order: (1) find smallest/largest, (2) draw the number line, (3) plot one X per value.',
          explanation: 'First find the smallest and largest values so you know how long the number line should be. Then draw the line. Then plot one X for each piece of data.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'line-plots-data-grade4',
    sections: [
      {
        id: 'lp3-intro',
        type: 'text' as const,
        content: `# 📊 Line Plots and Data

**Part 3 of 5 — Answering Questions from a Line Plot**

---

> 🔑 **Why line plots are useful:** Once the data is a picture, you can answer questions fast — *how many in all? which value is most common? how many more of one than another?* Let's learn the key questions.`,
      },
      {
        id: 'lp3-questions',
        type: 'text' as const,
        content: `## The Big Questions

Here is a line plot of how many minutes some students practiced piano:

\`\`\`
Minutes of Piano Practice

            X
      X     X
X     X     X
X     X     X     X
+-----+-----+-----+
10    15    20    25
\`\`\`

The counts are: **10 → 2 X's, 15 → 3 X's, 20 → 4 X's, 25 → 1 X**.

We can answer three common kinds of questions:

- **"How many in all?"** → Add up *all* the X's: $2 + 3 + 4 + 1 = 10$ students.
- **"Which value is most common?"** → Find the *tallest* stack: $20$ minutes (4 X's).
- **"How many more / fewer?"** → *Subtract* two stacks: $20$ min vs $25$ min is $4 - 1 = 3$ more.

> 💡 **Most common** means the value with the *tallest stack of X's*, not the biggest number on the line!`,
      },
      {
        id: 'lp3-question-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the piano line plot: $10 \\to 2$, $15 \\to 3$, $20 \\to 4$, $25 \\to 1$.`,
        exercise: {
          questions: [
            {
              question: 'Which amount of practice time was the MOST common?',
              options: ['10 minutes', '15 minutes', '20 minutes', '25 minutes'],
              correctAnswer: 2,
              explanation: '20 minutes has the tallest stack (4 X\'s), so it is the most common. Remember: most common = tallest stack, not the biggest number.',
            },
            {
              question: 'How many students practiced in all?',
              options: ['4 students', '10 students', '20 students', '25 students'],
              correctAnswer: 1,
              explanation: 'Add every X: $2 + 3 + 4 + 1 = 10$ students in all. (The numbers on the line are minutes, not the total.)',
            },
            {
              question: 'How many MORE students practiced 20 minutes than 25 minutes?',
              options: ['1 more', '3 more', '4 more', '5 more'],
              correctAnswer: 1,
              explanation: '20 minutes had 4 X\'s and 25 minutes had 1 X. $4 - 1 = 3$ more students.',
            },
          ],
        },
      },
      {
        id: 'lp3-worked',
        type: 'text' as const,
        content: `## A Worked Example

Let's answer all three questions for a new line plot of **goals scored**: $1 \\to 5$ X's, $2 \\to 2$ X's, $3 \\to 4$ X's.

- **How many games in all?** Add every X: $5 + 2 + 4 = 11$ games.
- **Most common number of goals?** The tallest stack is above $1$ (5 X's), so **1 goal** is most common.
- **How many more games had 1 goal than 2 goals?** Subtract: $5 - 2 = 3$ more games.

> 🔑 Notice we used the **same three moves** every time: *add* for a total, find the *tallest stack* for most common, and *subtract* for a difference. Try them on the test-score data next.`,
      },
      {
        id: 'lp3-total-drill',
        type: 'input-boxes' as const,
        content: `**Add and Compare** 🧮

A line plot of test scores has these counts: **80 → 3 X's, 85 → 5 X's, 90 → 2 X's, 95 → 4 X's**.

**1)** How many students took the test in all? *(add every X)*
**2)** How many more students scored 85 than scored 90?
**3)** What score was the most common? *(give the number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['14', '3', '85'],
          hint1: 'For the total, add all the stacks: $3 + 5 + 2 + 4$.',
          hint2: '"How many more" means subtract: the 85-stack minus the 90-stack.',
          hint3: 'Most common = the score with the tallest stack of X\'s.',
          explanation: '1) $3 + 5 + 2 + 4 = 14$ students. 2) $5 - 2 = 3$ more scored 85 than 90. 3) The 85 has the tallest stack (5 X\'s), so 85 is most common.',
        },
      },
      {
        id: 'lp3-keywords',
        type: 'text' as const,
        content: `## Key Words to Watch For

The words in a question tell you which move to make:

| Words in the question | What they mean | What to do |
|-----------------------|----------------|-----------|
| "in all", "altogether", "total" | a total | **add** every X |
| "most common", "most often" | the biggest stack | find the **tallest** stack |
| "how many more", "how many fewer", "difference" | a comparison | **subtract** two stacks |

> ⚠️ The word "more" almost always means **subtract**, not add — it asks for the *difference* between two stacks. Match the words to the action in the next check.`,
      },
      {
        id: 'lp3-vocab-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Question to the Action** 🔽

For each kind of question, pick what you should DO with the X's.`,
        exercise: {
          dropdowns: [
            { label: '"How many in all?"', options: ['Add up all the X\'s', 'Subtract two stacks', 'Find the tallest stack', 'Read the number line'] },
            { label: '"Which value is most common?"', options: ['Find the tallest stack', 'Add up all the X\'s', 'Find the biggest number', 'Count the number line marks'] },
            { label: '"How many more of A than B?"', options: ['Subtract the two stacks', 'Add the two stacks', 'Find the tallest stack', 'Multiply the stacks'] },
          ],
          correctAnswers: ['Add up all the X\'s', 'Find the tallest stack', 'Subtract the two stacks'],
          hint1: '"In all" is a total, "most common" is the biggest stack, "how many more" is a difference.',
          hint2: 'A total means add. A difference means subtract.',
          hint3: 'In all → add every X. Most common → tallest stack. How many more → subtract one stack from the other.',
          explanation: '"In all" = add every X. "Most common" = the tallest stack of X\'s. "How many more" = subtract the smaller stack from the larger stack.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'line-plots-data-grade4',
    sections: [
      {
        id: 'lp4-intro',
        type: 'text' as const,
        content: `# 📊 Line Plots and Data

**Part 4 of 5 — Line Plots with Fractions**

---

> 🔑 **New in Grade 4:** Line plots can use **fractions** on the number line, like $\\frac{1}{4}$, $\\frac{1}{2}$, and $\\frac{3}{4}$. This happens when we **measure** things, such as the length of pencils to the nearest fraction of an inch.`,
      },
      {
        id: 'lp4-fraction-plot',
        type: 'text' as const,
        content: `## A Line Plot with Fractions

Some students measured their pencils. The lengths (in inches) were:

$$\\frac{1}{4},\\ \\frac{1}{2},\\ \\frac{1}{2},\\ \\frac{3}{4},\\ \\frac{1}{2},\\ \\frac{3}{4}$$

The number line uses **fractions** instead of whole numbers:

\`\`\`
Pencil Lengths (inches)

      X
      X     X
X     X     X
+-----+-----+-----+
1/4   1/2   3/4    1
\`\`\`

The counts are: $\\frac{1}{4} \\to 1$, $\\frac{1}{2} \\to 3$, $\\frac{3}{4} \\to 2$.

> 💡 The fractions on the line are written in order, just like whole numbers: $\\frac{1}{4} < \\frac{1}{2} < \\frac{3}{4} < 1$. They are evenly spaced because each step is $\\frac{1}{4}$ of an inch.`,
      },
      {
        id: 'lp4-fraction-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the pencil line plot: $\\frac{1}{4} \\to 1$ X, $\\frac{1}{2} \\to 3$ X's, $\\frac{3}{4} \\to 2$ X's.`,
        exercise: {
          questions: [
            {
              question: 'What pencil length was the most common?',
              options: ['$\\frac{1}{4}$ inch', '$\\frac{1}{2}$ inch', '$\\frac{3}{4}$ inch', '$1$ inch'],
              correctAnswer: 1,
              explanation: '$\\frac{1}{2}$ inch has the tallest stack (3 X\'s), so it is the most common length.',
            },
            {
              question: 'How many pencils were measured in all?',
              options: ['3 pencils', '5 pencils', '6 pencils', '8 pencils'],
              correctAnswer: 2,
              explanation: 'Add every X: $1 + 3 + 2 = 6$ pencils in all.',
            },
          ],
        },
      },
      {
        id: 'lp4-fraction-add',
        type: 'text' as const,
        content: `## Adding the Fraction Data

Sometimes a question asks for the **total length** of all the pencils of one size. We add the matching fractions.

**Example:** The two longest pencils are each $\\frac{3}{4}$ inch. Together they are:

$$\\frac{3}{4} + \\frac{3}{4} = \\frac{6}{4} = 1\\frac{2}{4} = 1\\frac{1}{2}\\text{ inches}$$

**Example:** The three $\\frac{1}{2}$-inch pencils together are:

$$\\frac{1}{2} + \\frac{1}{2} + \\frac{1}{2} = \\frac{3}{2} = 1\\frac{1}{2}\\text{ inches}$$

> ⚠️ **Remember:** When the fractions have the **same bottom number** (denominator), you add only the **top numbers**. The bottom number stays the same: $\\frac{3}{4} + \\frac{3}{4} = \\frac{6}{4}$, *not* $\\frac{6}{8}$.`,
      },
      {
        id: 'lp4-fraction-drill',
        type: 'input-boxes' as const,
        content: `**Add the Fractions** 🧮

Use the pencil data. Write each answer as a fraction (you may leave it "top over bottom", like \`5/4\`).

**1)** Add the two $\\frac{3}{4}$-inch pencils: $\\frac{3}{4} + \\frac{3}{4} = \\,?$
**2)** Add the $\\frac{1}{4}$ pencil and one $\\frac{1}{2}$ pencil. *(Hint: $\\frac{1}{2} = \\frac{2}{4}$, so add fourths.)*  $\\frac{1}{4} + \\frac{2}{4} = \\,?$
**3)** How many X's are above $\\frac{1}{2}$?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6/4', '3/4', '3'],
          hint1: 'When denominators match, add the top numbers and keep the bottom number.',
          hint2: '$\\frac{3}{4} + \\frac{3}{4} = \\frac{3+3}{4}$. For #2, $\\frac{1}{2}$ is the same as $\\frac{2}{4}$.',
          hint3: '$\\frac{3}{4}+\\frac{3}{4}=\\frac{6}{4}$. $\\frac{1}{4}+\\frac{2}{4}=\\frac{3}{4}$. The $\\frac{1}{2}$ stack has 3 X\'s.',
          explanation: '1) $\\frac{3}{4}+\\frac{3}{4}=\\frac{6}{4}$ (which is $1\\frac{1}{2}$). 2) $\\frac{1}{4}+\\frac{2}{4}=\\frac{3}{4}$. 3) There are 3 X\'s above $\\frac{1}{2}$.',
        },
      },
      {
        id: 'lp4-ordering',
        type: 'text' as const,
        content: `## Why the Fractions Are in Order

On a fraction line plot, the numbers must go from **smallest to largest**, left to right — exactly like a whole-number line.

To compare fractions with the **same bottom number**, just compare the **top numbers**:

$$\\frac{1}{4} < \\frac{2}{4} < \\frac{3}{4}$$

And since $\\frac{1}{2} = \\frac{2}{4}$, the order $\\frac{1}{4}, \\frac{1}{2}, \\frac{3}{4}$ is really $\\frac{1}{4}, \\frac{2}{4}, \\frac{3}{4}$.

> 💡 Rewriting every fraction with the **same bottom number** makes them easy to put in order. Try it in the next check.`,
      },
      {
        id: 'lp4-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Put the Fractions in Order** 🔽

A fraction number line goes from smallest to largest. Choose the correct fraction for each spot.`,
        exercise: {
          dropdowns: [
            { label: 'Smallest spot on the line:', options: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$', '$1$'] },
            { label: 'Next spot:', options: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$1$', '$\\frac{3}{4}$'] },
            { label: 'Largest of these three:', options: ['$\\frac{3}{4}$', '$\\frac{1}{4}$', '$\\frac{1}{2}$', '$0$'] },
          ],
          correctAnswers: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$'],
          hint1: 'All these fractions have the bottom number 4 (remember $\\frac{1}{2}=\\frac{2}{4}$).',
          hint2: 'In fourths: $\\frac{1}{4}, \\frac{2}{4}, \\frac{3}{4}$. Compare the top numbers.',
          hint3: 'Order from smallest to largest: $\\frac{1}{4}$, then $\\frac{1}{2}$, then $\\frac{3}{4}$.',
          explanation: 'Written in fourths they are $\\frac{1}{4}, \\frac{2}{4}, \\frac{3}{4}$. So the order smallest to largest is $\\frac{1}{4} < \\frac{1}{2} < \\frac{3}{4}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'line-plots-data-grade4',
    sections: [
      {
        id: 'lp5-intro',
        type: 'text' as const,
        content: `# 📊 Line Plots and Data

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read a line plot, (2) build one from data, (3) answer "how many in all / most common / how many more" questions, and (4) work with fraction line plots. Let's put it all together.`,
      },
      {
        id: 'lp5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Question | What to do |
|----------|-----------|
| "How many of this value?" | Count the **X's** stacked above that number |
| "How many in all?" | **Add up** every X |
| "Most common value?" | Find the **tallest** stack |
| "How many more / fewer?" | **Subtract** the two stacks |
| "Total length / amount?" | **Add** the matching fractions |

> 🔑 **Golden Rule:** The number on the line is the **value** (what was counted). The **X's** tell you **how many times** it happened. Never mix up the two!

> ⚠️ When adding fractions with the **same denominator**, add only the top numbers and keep the bottom number the same.`,
      },
      {
        id: 'lp5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯

A line plot of how many siblings students have shows: **0 → 4 X's, 1 → 6 X's, 2 → 3 X's, 3 → 2 X's**.`,
        exercise: {
          questions: [
            {
              question: 'How many students are shown in all?',
              options: ['11 students', '13 students', '15 students', '6 students'],
              correctAnswer: 2,
              explanation: 'Add every X: $4 + 6 + 3 + 2 = 15$ students in all.',
            },
            {
              question: 'How many more students have 1 sibling than have 3 siblings?',
              options: ['2 more', '3 more', '4 more', '6 more'],
              correctAnswer: 2,
              explanation: '1 sibling has 6 X\'s and 3 siblings has 2 X\'s. $6 - 2 = 4$ more students.',
            },
          ],
        },
      },
      {
        id: 'lp5-build-recap',
        type: 'text' as const,
        content: `## From Reading to Building

You just *read* a line plot. Now let's *build* one from a raw list — the skill from Part 2.

Remember the steps: find the smallest and largest values, draw the number line, then put **one X above the matching number** for each piece of data. Counting carefully is the whole game.

> 💡 A quick check: the total number of X's must equal how many pieces of data you started with. Use that to catch mistakes.`,
      },
      {
        id: 'lp5-build-drill',
        type: 'input-boxes' as const,
        content: `**One More Build** 🧮

A coach recorded laps run: $2, 4, 2, 3, 4, 2, 5, 4$.

**1)** How many X's go above **2**?
**2)** How many X's go above **4**?
**3)** How many runners are there in all? *(add every X)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '3', '8'],
          hint1: 'Count how many times each number appears in the list.',
          hint2: 'The number 2 appears: 2, 2, 2. The number 4 appears: 4, 4, 4.',
          hint3: 'Counts are 2→3, 3→1, 4→3, 5→1. Add them for the total.',
          explanation: '2 appears 3 times, 4 appears 3 times. The full counts are 2→3, 3→1, 4→3, 5→1, and $3+1+3+1 = 8$ runners. ✓',
        },
      },
      {
        id: 'lp5-ready',
        type: 'text' as const,
        content: `## You're Ready!

Here is everything you learned in this lesson:

- A **line plot** shows data as **X's** stacked above a number line.
- The number on the line is the **value**; the **X's** tell you how many times it happened.
- **Add** every X for a total, find the **tallest stack** for the most common value, and **subtract** stacks to compare.
- Line plots can use **fractions**, and you add fractions with the same bottom number by adding the **top** numbers.

> 🔑 Take your time on the exit quiz below. Read each line plot carefully before you answer.`,
      },
      {
        id: 'lp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson. Use this jump-rope line plot: **5 → 2 X's, 10 → 4 X's, 15 → 5 X's, 20 → 1 X**.`,
        exercise: {
          questions: [
            {
              question: 'How many students jumped rope in all?',
              options: ['12 students', '15 students', '50 students', '4 students'],
              correctAnswer: 0,
              explanation: 'Add every X: $2 + 4 + 5 + 1 = 12$ students in all.',
            },
            {
              question: 'Which number of jumps was the MOST common?',
              options: ['5 jumps', '10 jumps', '15 jumps', '20 jumps'],
              correctAnswer: 2,
              explanation: '15 jumps has the tallest stack (5 X\'s), so it is the most common — even though 20 is the biggest number on the line.',
            },
            {
              question: 'On a fraction line plot, two pencils are each $\\frac{1}{4}$ inch long. What is their total length?',
              options: ['$\\frac{2}{8}$ inch', '$\\frac{2}{4}$ inch', '$\\frac{1}{4}$ inch', '$\\frac{4}{4}$ inch'],
              correctAnswer: 1,
              explanation: 'With the same denominator, add the top numbers and keep the bottom: $\\frac{1}{4} + \\frac{1}{4} = \\frac{2}{4}$ inch (which is $\\frac{1}{2}$ inch).',
            },
          ],
        },
      },
    ],
  },
]
