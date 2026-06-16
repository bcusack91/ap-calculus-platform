import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Reading Bar Graphs and Line Plots (Grade 4 Math).
 * Registry key: 'reading-bar-graphs-line-plots' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Grade-4 friendly: favors
 * concept checks (multiple-choice + dropdown) with light reading/counting via
 * input-boxes. Aligned to 4.MD.B.4 (line plots with fractions) and bar-graph reading.
 * Any math uses doubled backslashes (template-literal strings); fractions written as
 * \\frac in math mode.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'reading-bar-graphs-line-plots',
    sections: [
      {
        id: 'rbg1-intro',
        type: 'text' as const,
        content: `# 📊 Reading Bar Graphs & Line Plots

**Part 1 of 5 — The Parts of a Bar Graph**

---

### Topics in This Part

| Section |
|---------|
| Why We Use Bar Graphs |
| Title, Labels & Scale |
| Reading the Height of a Bar |

> 🔑 **Key Idea:** A **bar graph** uses bars of different heights (or lengths) to show *how many* of each thing there are. The **taller** the bar, the **bigger** the number.`,
      },
      {
        id: 'rbg1-parts',
        type: 'text' as const,
        content: `## The Parts of a Bar Graph

Every bar graph has the same important parts. Knowing their names helps you read the graph correctly.

| Part | What it tells you |
|------|-------------------|
| **Title** | What the whole graph is about |
| **Axis labels** | What the bottom (categories) and side (numbers) mean |
| **Scale** | How much each line on the number side is worth |
| **Bars** | One bar for each category; its height is the amount |

Here is the data for a graph titled **"Books Read This Month"**:

| Student | Books Read |
|---------|-----------|
| Mia | 6 |
| Jay | 4 |
| Ana | 8 |
| Leo | 3 |

To read a bar, you find the **top of the bar** and slide across to the number scale on the side.

> 💡 The **categories** (Mia, Jay, Ana, Leo) usually go along the **bottom**. The **numbers** go up the **side**.`,
      },
      {
        id: 'rbg1-parts-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a bar graph, what does the **height of a bar** tell you?',
              options: [
                'How many of that thing there are',
                'The color of the bar',
                'How wide the bar is',
                'The title of the graph',
              ],
              correctAnswer: 0,
              explanation: 'A taller bar means a bigger number. The height of each bar shows the amount for that category.',
            },
            {
              question: 'Which part of a bar graph tells you what the whole graph is about?',
              options: ['The title', 'The bars', 'The scale', 'A single tick mark'],
              correctAnswer: 0,
              explanation: 'The title (here, "Books Read This Month") names the topic of the entire graph.',
            },
          ],
        },
      },
      {
        id: 'rbg1-read-values',
        type: 'text' as const,
        content: `## Reading a Bar's Value

Using the **"Books Read This Month"** table from before:

| Student | Books Read |
|---------|-----------|
| Mia | 6 |
| Jay | 4 |
| Ana | 8 |
| Leo | 3 |

To answer a question, match the **name** to its **bar height**:

- *"How many books did Ana read?"* → Find Ana's bar. It reaches **8**. Answer: **8 books**.
- *"Who read the fewest books?"* → The **shortest** bar is Leo's at **3**. Answer: **Leo**.
- *"Who read the most books?"* → The **tallest** bar is Ana's at **8**. Answer: **Ana**.

> 🔑 **Tallest bar = greatest number. Shortest bar = least number.**`,
      },
      {
        id: 'rbg1-read-drill',
        type: 'input-boxes' as const,
        content: `**Read the Graph** 🧮

Use the **"Books Read This Month"** data:

| Student | Books Read |
|---------|-----------|
| Mia | 6 |
| Jay | 4 |
| Ana | 8 |
| Leo | 3 |

**1)** How many books did Mia read?
**2)** How many books did Jay read?
**3)** How many books did Leo read?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '4', '3'],
          hint1: 'Find each name, then read straight across to the number scale.',
          hint2: 'Mia’s bar reaches 6.',
          hint3: 'Jay’s bar reaches 4, and Leo’s bar reaches 3 — the shortest bar.',
          explanation: 'Mia = 6, Jay = 4, Leo = 3. Each answer is simply the height of that student’s bar.',
        },
      },
      {
        id: 'rbg1-most-least-teach',
        type: 'text' as const,
        content: `## Finding "Most" and "Least"

Two of the most common questions are *"Who has the most?"* and *"Who has the least?"*

- **Most / greatest / highest** → look for the **tallest** bar.
- **Least / fewest / lowest** → look for the **shortest** bar.

> 💡 You do **not** have to read the exact number to answer these — just find the tallest or shortest bar with your eyes.`,
      },
      {
        id: 'rbg1-most-least',
        type: 'dropdown-select' as const,
        content: `**Most & Least** 🔽

Still using the same data (Mia 6, Jay 4, Ana 8, Leo 3), choose the best answer.`,
        exercise: {
          dropdowns: [
            { label: 'Who read the **most** books?', options: ['Ana', 'Mia', 'Jay', 'Leo'] },
            { label: 'Who read the **fewest** books?', options: ['Leo', 'Jay', 'Mia', 'Ana'] },
            { label: 'The **tallest** bar belongs to:', options: ['Ana', 'Leo', 'Jay', 'Mia'] },
          ],
          correctAnswers: ['Ana', 'Leo', 'Ana'],
          hint1: 'Most = the greatest number = the tallest bar.',
          hint2: 'Fewest = the smallest number = the shortest bar.',
          hint3: 'Ana has 8 (the most), and Leo has 3 (the fewest).',
          explanation: 'Ana read the most (8 books), Leo read the fewest (3 books), and the tallest bar is Ana’s.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'reading-bar-graphs-line-plots',
    sections: [
      {
        id: 'rbg2-intro',
        type: 'text' as const,
        content: `# 📊 Reading Bar Graphs & Line Plots

**Part 2 of 5 — Comparing & Combining Bars**

---

> 🔑 **The Idea:** Once you can read each bar, you can *compare* them ("how many more?") and *combine* them ("how many in all?"). These are the questions test problems ask most.`,
      },
      {
        id: 'rbg2-howmany',
        type: 'text' as const,
        content: `## "How Many More?" and "How Many Fewer?"

These questions are really **subtraction**. You take the two bar values and subtract the smaller from the larger.

Here is the data for **"Cans Collected for Recycling"**:

| Class | Cans |
|-------|------|
| Room 1 | 30 |
| Room 2 | 45 |
| Room 3 | 25 |
| Room 4 | 50 |

**Example:** *How many more cans did Room 4 collect than Room 1?*

$$50 - 30 = 20 \\text{ cans}$$

**Example:** *How many fewer cans did Room 3 collect than Room 2?*

$$45 - 25 = 20 \\text{ cans}$$

> 💡 "How many **more**" and "how many **fewer**" both mean **subtract**. The answer is the size of the *gap* between the two bars.`,
      },
      {
        id: 'rbg2-howmany-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the **"Cans Collected"** data: Room 1 = 30, Room 2 = 45, Room 3 = 25, Room 4 = 50.`,
        exercise: {
          questions: [
            {
              question: 'How many more cans did Room 2 collect than Room 3?',
              options: ['20', '70', '10', '25'],
              correctAnswer: 0,
              explanation: '"How many more" means subtract: $45 - 25 = 20$ cans.',
            },
            {
              question: 'How many fewer cans did Room 1 collect than Room 4?',
              options: ['20', '80', '30', '15'],
              correctAnswer: 0,
              explanation: '"How many fewer" also means subtract: $50 - 30 = 20$ cans.',
            },
          ],
        },
      },
      {
        id: 'rbg2-total',
        type: 'text' as const,
        content: `## "How Many in All?" — Combining Bars

To find a **total**, you **add** the bars together.

Using the **"Cans Collected"** data again (30, 45, 25, 50):

**Example:** *How many cans did Room 1 and Room 2 collect together?*

$$30 + 45 = 75 \\text{ cans}$$

**Example:** *How many cans were collected in all four rooms?*

$$30 + 45 + 25 + 50 = 150 \\text{ cans}$$

> 🔑 **Key words:** *in all, total, together, altogether, combined* → **add** the bars.`,
      },
      {
        id: 'rbg2-total-drill',
        type: 'input-boxes' as const,
        content: `**Add & Subtract the Bars** 🧮

Use the **"Cans Collected"** data: Room 1 = 30, Room 2 = 45, Room 3 = 25, Room 4 = 50.

**1)** How many cans did Room 3 and Room 4 collect together?
**2)** How many more cans did Room 4 collect than Room 3?
**3)** How many cans were collected in all four rooms?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['75', '25', '150'],
          hint1: 'Together means add; "how many more" means subtract.',
          hint2: 'Room 3 + Room 4 = $25 + 50$. Room 4 − Room 3 = $50 - 25$.',
          hint3: 'All four: $30 + 45 + 25 + 50$.',
          explanation: '1) $25 + 50 = 75$.  2) $50 - 25 = 25$.  3) $30 + 45 + 25 + 50 = 150$.',
        },
      },
      {
        id: 'rbg2-scale',
        type: 'text' as const,
        content: `## When the Scale Counts by 2s, 5s, or 10s

Bar graphs do not always count by **1**. The **scale** might count by **2, 5, or 10** so big numbers fit on the page.

If the scale counts by **5** and a bar stops halfway between **10** and **15**, that bar shows... wait — bars usually land *on* a line. But if a bar lands on a line you must read it by the scale, **not** by counting lines.

> ⚠️ **Common mistake:** counting the *gridlines* instead of reading the *numbers*. If the scale counts by 5, the third line up is **15**, not **3**!

**Example:** A graph of **"Pages Read"** has a scale counting by **10** (0, 10, 20, 30, 40). A bar that reaches the **third number** is at **30 pages**, not 3.`,
      },
      {
        id: 'rbg2-scale-check',
        type: 'dropdown-select' as const,
        content: `**Reading the Scale** 🔽

A "Pages Read" graph has a scale that counts by **10**: the lines are labeled 0, 10, 20, 30, 40, 50.`,
        exercise: {
          dropdowns: [
            { label: 'A bar that reaches the **2nd** labeled line (after 0) shows:', options: ['20', '2', '10', '40'] },
            { label: 'A bar that reaches **40** is at which labeled line above 0?', options: ['4th', '40th', '2nd', '5th'] },
            { label: 'A bar halfway between **20** and **30** shows:', options: ['25', '2.5', '50', '23'] },
          ],
          correctAnswers: ['20', '4th', '25'],
          hint1: 'Each line is worth 10 because the scale counts by 10.',
          hint2: 'Count the labeled lines: 10 (1st), 20 (2nd), 30 (3rd), 40 (4th).',
          hint3: 'Halfway between 20 and 30 is 25.',
          explanation: 'With a scale of 10, the 2nd line is 20, the 4th line is 40, and halfway from 20 to 30 is 25.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'reading-bar-graphs-line-plots',
    sections: [
      {
        id: 'rbg3-intro',
        type: 'text' as const,
        content: `# 📊 Reading Bar Graphs & Line Plots

**Part 3 of 5 — Meet the Line Plot**

---

> 🔑 **The Idea:** A **line plot** shows data as marks (**X**s or dots) stacked above a number line. Each mark stands for **one** piece of data. The **tallest stack** is the most common value.`,
      },
      {
        id: 'rbg3-what',
        type: 'text' as const,
        content: `## What Is a Line Plot?

A **line plot** (sometimes called a *dot plot*) is built on a **number line**. Above each number, you stack one **X** for each time that value appears.

Suppose 10 students each grew a bean plant and measured its height in **whole inches**:

\`\`\`
Heights:  3, 5, 4, 5, 6, 5, 4, 5, 3, 6
\`\`\`

Here is the line plot of that data:

\`\`\`
            X
            X
   X   X    X    X
   X   X    X    X
   3   4    5    6   (inches)
\`\`\`

Reading it:
- Above **3** there are **2** X’s → 2 plants were 3 inches.
- Above **4** there are **2** X’s → 2 plants were 4 inches.
- Above **5** there are **4** X’s → 5 inches is the **most common** height (tallest stack).
- Above **6** there are **2** X’s → 2 plants were 6 inches.

> 💡 The number of X’s above a value is called its **frequency** — how *often* it happened.`,
      },
      {
        id: 'rbg3-read-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the bean-plant line plot: **3 inches** has 2 X’s, **4 inches** has 2 X’s, **5 inches** has 4 X’s, **6 inches** has 2 X’s.`,
        exercise: {
          questions: [
            {
              question: 'What does **one X** on a line plot stand for?',
              options: [
                'One piece of data (one measurement)',
                'Ten pieces of data',
                'The total of all the data',
                'The number line itself',
              ],
              correctAnswer: 0,
              explanation: 'Each X (or dot) represents exactly one data value. Stacking them shows how many times each value occurs.',
            },
            {
              question: 'Which height is the **most common** (the tallest stack)?',
              options: ['5 inches', '3 inches', '6 inches', '4 inches'],
              correctAnswer: 0,
              explanation: 'The stack above 5 has 4 X’s — more than any other value — so 5 inches is the most common height.',
            },
          ],
        },
      },
      {
        id: 'rbg3-frequency-teach',
        type: 'text' as const,
        content: `## Counting the X’s = Frequency

To find *how many* had a certain value, you simply **count the X’s** stacked above that number.

\`\`\`
            X
            X
   X   X    X    X
   X   X    X    X
   3   4    5    6   (inches)
\`\`\`

- Above **4** there are **2** X’s.
- Above **5** there are **4** X’s.
- To find the **total**, count **every** X on the whole plot.

> 🔑 Remember: each X is worth **1**, so counting the X’s always gives you the count — no scale needed.`,
      },
      {
        id: 'rbg3-count-drill',
        type: 'input-boxes' as const,
        content: `**Count the X’s** 🧮

Bean-plant line plot: above **3** there are 2 X’s, above **4** there are 2 X’s, above **5** there are 4 X’s, above **6** there are 2 X’s.

**1)** How many plants were exactly **5 inches** tall?
**2)** How many plants were exactly **3 inches** tall?
**3)** How many plants were measured **in all**? (Add up all the X’s.)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '10'],
          hint1: 'For each height, just count the X’s stacked above it.',
          hint2: 'Above 5 there are 4 X’s; above 3 there are 2 X’s.',
          hint3: 'Total = all the stacks added: $2 + 2 + 4 + 2$.',
          explanation: '1) 5 inches has 4 X’s.  2) 3 inches has 2 X’s.  3) Total $= 2 + 2 + 4 + 2 = 10$ plants.',
        },
      },
      {
        id: 'rbg3-bar-vs-line',
        type: 'text' as const,
        content: `## Bar Graph vs. Line Plot

They look different but both show *how many*. Here is how they compare:

| | Bar Graph | Line Plot |
|---|-----------|-----------|
| Built on | Categories + a number scale | A **number line** |
| Shows amount with | **Bar height** | **Stacked X’s (dots)** |
| Each mark/unit = | depends on the scale | exactly **1** data value |
| Best for | Comparing groups (Mia vs. Jay) | Showing how data is spread out |

> 🔑 On a **line plot**, every X is **one**, so you can always find the total by **counting all the X’s**. On a **bar graph**, you must read the **scale**.`,
      },
      {
        id: 'rbg3-compare-check',
        type: 'dropdown-select' as const,
        content: `**Bar Graph or Line Plot?** 🔽

Choose the correct word to finish each sentence.`,
        exercise: {
          dropdowns: [
            { label: 'A graph that stacks X’s above a number line is a:', options: ['line plot', 'bar graph'] },
            { label: 'On a line plot, each X stands for:', options: ['one data value', 'ten data values'] },
            { label: 'To show the amount, a bar graph uses the bar’s:', options: ['height', 'color'] },
          ],
          correctAnswers: ['line plot', 'one data value', 'height'],
          hint1: 'Stacked X’s over a number line = line plot.',
          hint2: 'Each single X always equals one.',
          hint3: 'A taller bar means a bigger number — it is the height that matters.',
          explanation: 'A line plot stacks X’s (each = 1 value) on a number line; a bar graph shows the amount with the bar’s height.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'reading-bar-graphs-line-plots',
    sections: [
      {
        id: 'rbg4-intro',
        type: 'text' as const,
        content: `# 📊 Reading Bar Graphs & Line Plots

**Part 4 of 5 — Line Plots with Fractions**

---

> 🔑 **The Idea (Grade 4 standard):** A number line can be split into **fractions** like $\\frac{1}{4}$ or $\\frac{1}{2}$. Line plots can then show measurements such as $2\\frac{1}{2}$ inches. You read them the same way — count the X’s.`,
      },
      {
        id: 'rbg4-fractions',
        type: 'text' as const,
        content: `## A Number Line of Fourths

When we measure with a ruler, lengths often land between whole inches. A line plot can mark **fourths** ($\\frac{1}{4}$) along the number line:

$$2,\\ 2\\tfrac{1}{4},\\ 2\\tfrac{2}{4}\\ \\left(=2\\tfrac{1}{2}\\right),\\ 2\\tfrac{3}{4},\\ 3$$

Imagine measuring **8 pencils** to the nearest $\\frac{1}{4}$ inch. The line plot:

\`\`\`
               X
   X           X
   X     X     X     X     X
  ---+-----+-----+-----+-----+---
   2    2¼    2½    2¾    3   (inches)
\`\`\`

Reading it:
- Above **2** there are **2** X’s → 2 pencils were 2 inches.
- Above **$2\\frac{1}{2}$** there are **3** X’s → 3 pencils were $2\\frac{1}{2}$ inches.
- Above **$2\\frac{1}{4}$**, **$2\\frac{3}{4}$**, and **$3$** there is **1** X each.

> 💡 $\\frac{2}{4}$ is the **same** as $\\frac{1}{2}$, so the $2\\frac{2}{4}$ mark and the $2\\frac{1}{2}$ mark are the same spot.`,
      },
      {
        id: 'rbg4-fraction-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Pencil line plot: **2 in** has 2 X’s, **$2\\frac{1}{4}$ in** has 1 X, **$2\\frac{1}{2}$ in** has 3 X’s, **$2\\frac{3}{4}$ in** has 1 X, **3 in** has 1 X.`,
        exercise: {
          questions: [
            {
              question: 'How many pencils were exactly $2\\frac{1}{2}$ inches long?',
              options: ['3', '2', '1', '5'],
              correctAnswer: 0,
              explanation: 'The stack above $2\\frac{1}{2}$ has 3 X’s, so 3 pencils were that length.',
            },
            {
              question: 'The mark $2\\frac{2}{4}$ is the same as which measurement?',
              options: ['$2\\frac{1}{2}$', '$2\\frac{1}{4}$', '$2\\frac{3}{4}$', '$3$'],
              correctAnswer: 0,
              explanation: '$\\frac{2}{4} = \\frac{1}{2}$, so $2\\frac{2}{4} = 2\\frac{1}{2}$ — they are the same point on the number line.',
            },
          ],
        },
      },
      {
        id: 'rbg4-fraction-teach',
        type: 'text' as const,
        content: `## Reading a Fraction Line Plot

A fraction line plot is read exactly like a whole-number one: **count the X’s** above each mark.

\`\`\`
               X
   X           X
   X     X     X     X     X
  ---+-----+-----+-----+-----+---
   2    2¼    2½    2¾    3   (inches)
\`\`\`

- Above **2 in** there are **2** X’s.
- Above **$2\\frac{1}{2}$ in** there are **3** X’s — the tallest stack.
- The **total** is found by counting **all** the X’s ($2 + 1 + 3 + 1 + 1 = 8$).

> 💡 The fraction marks ($\\frac{1}{4}, \\frac{1}{2}, \\frac{3}{4}$) just tell you the *length*; each X still counts as **one** measurement.`,
      },
      {
        id: 'rbg4-fraction-drill',
        type: 'input-boxes' as const,
        content: `**Read the Fraction Line Plot** 🧮

Pencil line plot (X’s above each length): **2 in** = 2, **$2\\frac{1}{4}$ in** = 1, **$2\\frac{1}{2}$ in** = 3, **$2\\frac{3}{4}$ in** = 1, **3 in** = 1.

**1)** How many pencils were exactly **2 inches** long?
**2)** How many pencils were **$2\\frac{3}{4}$ inches** long?
**3)** How many pencils were measured **in all**?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1', '8'],
          hint1: 'Count the X’s above each length.',
          hint2: 'Above 2 in there are 2 X’s; above $2\\frac{3}{4}$ in there is 1 X.',
          hint3: 'Total = $2 + 1 + 3 + 1 + 1$.',
          explanation: '1) 2 in has 2 X’s.  2) $2\\frac{3}{4}$ in has 1 X.  3) Total $= 2 + 1 + 3 + 1 + 1 = 8$ pencils.',
        },
      },
      {
        id: 'rbg4-difference',
        type: 'text' as const,
        content: `## Comparing Lengths on a Fraction Line Plot

A common Grade-4 question is *"What is the difference between the longest and shortest measurement?"*

For the pencils, the **longest** is **3 in** and the **shortest** is **2 in**:

$$3 - 2 = 1 \\text{ inch}$$

You can also compare fourths. The difference between $2\\frac{3}{4}$ and $2\\frac{1}{4}$ is:

$$2\\tfrac{3}{4} - 2\\tfrac{1}{4} = \\tfrac{3}{4} - \\tfrac{1}{4} = \\tfrac{2}{4} = \\tfrac{1}{2} \\text{ inch}$$

> ⚠️ When subtracting these mixed numbers, the whole-number parts are the same (both 2), so you only subtract the **fractions**: $\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}$.`,
      },
      {
        id: 'rbg4-difference-check',
        type: 'dropdown-select' as const,
        content: `**Longest, Shortest & Difference** 🔽

Pencil data again: lengths range from **2 in** up to **3 in**, with marks at every fourth.`,
        exercise: {
          dropdowns: [
            { label: 'The **longest** pencil measured:', options: ['$3$ in', '$2$ in', '$2\\frac{1}{2}$ in', '$2\\frac{1}{4}$ in'] },
            { label: 'The **shortest** pencil measured:', options: ['$2$ in', '$3$ in', '$2\\frac{3}{4}$ in', '$2\\frac{1}{2}$ in'] },
            { label: 'Difference between longest and shortest:', options: ['$1$ in', '$\\frac{1}{2}$ in', '$5$ in', '$\\frac{1}{4}$ in'] },
          ],
          correctAnswers: ['$3$ in', '$2$ in', '$1$ in'],
          hint1: 'Longest = the mark farthest to the right that has an X; shortest = farthest left.',
          hint2: 'The plot runs from 2 in to 3 in.',
          hint3: 'Difference = longest − shortest = $3 - 2$.',
          explanation: 'Longest = 3 in, shortest = 2 in, and the difference is $3 - 2 = 1$ inch.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'reading-bar-graphs-line-plots',
    sections: [
      {
        id: 'rbg5-intro',
        type: 'text' as const,
        content: `# 📊 Reading Bar Graphs & Line Plots

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read bar graphs, (2) compare and combine bars, (3) read line plots, and (4) read line plots with fractions. Let’s put it all together.`,
      },
      {
        id: 'rbg5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Question asks... | What to do |
|------------------|-----------|
| "How many?" | Read the bar’s **height** (use the scale) or count the **X’s** |
| "How many **more / fewer**?" | **Subtract** the two values |
| "How many **in all / total**?" | **Add** the values |
| "Which is **most / greatest**?" | Tallest bar / tallest stack |
| "Which is **least / fewest**?" | Shortest bar / shortest stack |
| "What is the **difference** in length?" | Longest **−** shortest |

> ⚠️ **Watch the scale!** On a bar graph, one gridline may be worth 2, 5, or 10. On a line plot, every X is always worth **1**.`,
      },
      {
        id: 'rbg5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯

A **"Favorite Fruit"** bar graph (scale counts by 1): Apple = 7, Banana = 5, Grape = 9, Orange = 4.`,
        exercise: {
          questions: [
            {
              question: 'How many more students chose Grape than Orange?',
              options: ['5', '13', '4', '9'],
              correctAnswer: 0,
              explanation: '"How many more" means subtract: $9 - 4 = 5$ students.',
            },
            {
              question: 'How many students chose Apple and Banana together?',
              options: ['12', '2', '35', '9'],
              correctAnswer: 0,
              explanation: '"Together" means add: $7 + 5 = 12$ students.',
            },
          ],
        },
      },
      {
        id: 'rbg5-bridge',
        type: 'text' as const,
        content: `## Now Switch to a Line Plot

Bar graphs and line plots ask the **same kinds of questions** — "how many," "how many more," and "how many in all." The only difference is *how you read the amount*:

- **Bar graph:** read the bar’s **height** using the scale.
- **Line plot:** **count the X’s** (each one is worth 1).

Let’s try a line plot using everything you’ve learned.`,
      },
      {
        id: 'rbg5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More Mixed Set** 🧮

Use a line plot of **shells found**: above **4** there are 3 X’s, above **5** there are 1 X, above **6** there are 4 X’s, above **7** there are 2 X’s.

**1)** How many people found exactly **6 shells**?
**2)** How many more people found 6 shells than 5 shells?
**3)** How many people are on the line plot **in all**?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '3', '10'],
          hint1: 'Count the X’s above 6, then above 5.',
          hint2: 'Above 6 there are 4 X’s; above 5 there is 1 X, so "how many more" = $4 - 1$.',
          hint3: 'Total = $3 + 1 + 4 + 2$.',
          explanation: '1) 6 shells has 4 X’s.  2) $4 - 1 = 3$ more.  3) Total $= 3 + 1 + 4 + 2 = 10$ people.',
        },
      },
      {
        id: 'rbg5-ready',
        type: 'text' as const,
        content: `## You’re Ready! ⭐

Before the Exit Quiz, here’s the one rule to remember for each graph type:

| Graph | How to read an amount |
|-------|-----------------------|
| **Bar graph** | Top of the bar → slide to the number scale |
| **Line plot** | Count the X’s (each = 1) |

Then use **add** for totals and **subtract** for "how many more/fewer." Take your time on each question.`,
      },
      {
        id: 'rbg5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson. Use this **"Goals Scored"** bar graph (scale counts by 1): Team A = 6, Team B = 8, Team C = 3, Team D = 8.`,
        exercise: {
          questions: [
            {
              question: 'Which team(s) scored the **most** goals?',
              options: ['Team B and Team D (tied at 8)', 'Team A only', 'Team C only', 'Team A and Team C'],
              correctAnswer: 0,
              explanation: 'Team B and Team D both reach 8, the tallest bars, so they are tied for the most goals.',
            },
            {
              question: 'How many more goals did Team A score than Team C?',
              options: ['3', '9', '6', '2'],
              correctAnswer: 0,
              explanation: '"How many more" means subtract: $6 - 3 = 3$ goals.',
            },
            {
              question: 'On a **line plot**, how many data values does **one X** stand for?',
              options: ['1', '5', '10', 'It depends on the scale'],
              correctAnswer: 0,
              explanation: 'On a line plot, every X (or dot) always stands for exactly one data value — you never need a scale to read it.',
            },
          ],
        },
      },
    ],
  },
]
