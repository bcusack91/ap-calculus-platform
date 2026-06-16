import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Statistical Questions and Data Display (Grade 6 Math).
 * Registry key / DB slug: 'statistical-questions-data-display'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'statistical-questions-data-display',
    sections: [
      {
        id: 'sqd1-intro',
        type: 'text' as const,
        content: `# 📊 Statistical Questions and Data Display

**Part 1 of 5 — What Makes a Question Statistical?**

---

### Topics in This Part

| Section |
|---------|
| Statistical vs. Non-Statistical Questions |
| Why Variability Is the Key |
| Spotting the Difference |

> 🔑 **Key Concept:** A **statistical question** is one you expect to have a *variety* of answers. If everyone would give the exact same answer, it is **not** a statistical question.`,
      },
      {
        id: 'sqd1-define',
        type: 'text' as const,
        content: `## Statistical vs. Non-Statistical

A **statistical question** anticipates **variability** — the answers are expected to *differ*. To answer it, you collect **data** from many people, things, or moments.

A **non-statistical question** has a single, definite answer. There is nothing to collect — you just look it up or measure once.

| Question | Statistical? | Why |
|----------|--------------|-----|
| "How old am I?" | ❌ No | One exact answer |
| "How old are the students in my class?" | ✅ Yes | Ages vary student to student |
| "How tall is the Eiffel Tower?" | ❌ No | A single fixed value |
| "How tall are the trees in this park?" | ✅ Yes | Heights vary tree to tree |

> 🔑 **The Test:** Ask yourself, *"Would I expect different answers?"* If yes → statistical. If there is only one answer → not statistical.`,
      },
      {
        id: 'sqd1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a statistical question?',
              options: [
                'How many minutes do sixth graders at my school spend on homework each night?',
                'How many days are in the month of June?',
                'What is the boiling point of water at sea level?',
                'How many sides does a hexagon have?',
              ],
              correctAnswer: 0,
              explanation: 'Homework time varies from student to student, so you expect a variety of answers — that makes it statistical. The other three each have a single fixed answer.',
            },
            {
              question: 'Why is "How tall is my best friend?" NOT a statistical question?',
              options: [
                'It has one definite answer with no variability',
                'Height cannot be measured',
                'It is about a person',
                'You would need a ruler',
              ],
              correctAnswer: 0,
              explanation: 'There is exactly one answer — your friend\'s height. Because no variety of answers is expected, it is not statistical.',
            },
          ],
        },
      },
      {
        id: 'sqd1-variability',
        type: 'text' as const,
        content: `## Variability Is the Whole Point

The reason we have a whole subject called **statistics** is that real-world answers *vary*. Statistics is the science of collecting, displaying, and making sense of data that has **variability**.

**Example:** "How many pets do the families on my street have?"

Some families have $0$ pets, some have $1$, some have $3$. The answers spread out — they **vary** — so we collect them and study the pattern.

> 💡 A good way to phrase a statistical question is to ask about a **group**, not one individual: not "How tall am *I*?" but "How tall are the *students in my class*?"`,
      },
      {
        id: 'sqd1-count',
        type: 'input-boxes' as const,
        content: `**See the Variability** 🧮

Someone answered the statistical question *"How many pets does each family on my street have?"* and recorded these $6$ families:

$$0,\\ 1,\\ 3,\\ 1,\\ 2,\\ 0$$

**1)** How many **families** were surveyed?
**2)** How many **different** answers appear in the data?
**3)** How many families have **at least 1** pet?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '4', '4'],
          hint1: 'Count how many numbers are in the list.',
          hint2: 'List the distinct values that appear: $0, 1, 2, 3$.',
          hint3: '"At least 1" means 1 or more, so leave out the families that recorded $0$.',
          explanation: '1) There are $6$ numbers, so $6$ families. 2) The distinct values are $0, 1, 2, 3$ — that is $4$ different answers, which shows the variability. 3) Two families recorded $0$, so $6 - 2 = 4$ families have at least 1 pet.',
        },
      },
      {
        id: 'sqd1-sort',
        type: 'dropdown-select' as const,
        content: `**Sort the Questions** 🔽

Label each question as **Statistical** or **Not statistical**.`,
        exercise: {
          dropdowns: [
            { label: 'How many books did each student in my class read this summer?', options: ['Statistical', 'Not statistical'] },
            { label: 'How many wheels does my bicycle have?', options: ['Statistical', 'Not statistical'] },
            { label: 'What are the daily high temperatures in my city this week?', options: ['Statistical', 'Not statistical'] },
            { label: 'What year was I born?', options: ['Statistical', 'Not statistical'] },
          ],
          correctAnswers: ['Statistical', 'Not statistical', 'Statistical', 'Not statistical'],
          hint1: 'Ask: would I expect the answers to vary?',
          hint2: 'A bicycle always has 2 wheels — one fixed answer.',
          hint3: 'Daily temperatures change from day to day, so they vary; your birth year is a single fact.',
          explanation: 'Books read and daily temperatures both vary across the group, so they are statistical. "Wheels on my bike" and "the year I was born" each have a single answer, so they are not statistical.',
        },
      },
      {
        id: 'sqd1-wrap',
        type: 'text' as const,
        content: `## What You Can Do Now

You can tell a **statistical** question (expects a variety of answers → collect data) from a **non-statistical** one (single answer).

In Part 2, we start turning collected data into pictures called **dot plots**, so we can actually *see* the variability.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'statistical-questions-data-display',
    sections: [
      {
        id: 'sqd2-intro',
        type: 'text' as const,
        content: `# 📊 Statistical Questions and Data Display

**Part 2 of 5 — Dot Plots (Line Plots)**

---

> 🔑 **The Idea:** A **dot plot** shows every single data value as a dot above a number line. Stacking the dots lets you *see* which values are common and which are rare.`,
      },
      {
        id: 'sqd2-build',
        type: 'text' as const,
        content: `## Building a Dot Plot

Suppose we asked $10$ students, *"How many pets do you have?"* and got:

$$2,\\ 0,\\ 1,\\ 3,\\ 2,\\ 1,\\ 0,\\ 2,\\ 1,\\ 2$$

To make a **dot plot**, draw a number line and place **one dot for each value**, stacking repeats:

\`\`\`
              •
        •     •
  •     •     •
  •     •     •     •
 ─┼─────┼─────┼─────┼─
  0     1     2     3
\`\`\`

Now count the dots in each column:

| Pets | Number of students (dots) |
|------|---------------------------|
| 0 | 2 |
| 1 | 3 |
| 2 | 4 |
| 3 | 1 |

> ✅ **Check:** $2 + 3 + 4 + 1 = 10$ dots — one for each student. The total number of dots always equals the number of data values.`,
      },
      {
        id: 'sqd2-read',
        type: 'multiple-choice' as const,
        content: `**Read the Dot Plot** 🎯

Use the pets dot plot above (0→2 dots, 1→3 dots, 2→4 dots, 3→1 dot).`,
        exercise: {
          questions: [
            {
              question: 'How many students have exactly 2 pets?',
              options: ['4', '2', '3', '1'],
              correctAnswer: 0,
              explanation: 'There are 4 dots stacked above the value 2, so 4 students have exactly 2 pets.',
            },
            {
              question: 'How many students were surveyed in all?',
              options: ['10', '4', '6', '12'],
              correctAnswer: 0,
              explanation: 'Add the dots: $2 + 3 + 4 + 1 = 10$ students total.',
            },
          ],
        },
      },
      {
        id: 'sqd2-count-drill',
        type: 'input-boxes' as const,
        content: `**Count from the Plot** 🧮

A class recorded *"How many siblings do you have?"* The dot plot has:
- $0$ siblings → $3$ dots
- $1$ sibling → $5$ dots
- $2$ siblings → $4$ dots
- $3$ siblings → $2$ dots

**1)** How many students have **1** sibling?
**2)** How many students have **2 or more** siblings?
**3)** How many students are in the class altogether?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '6', '14'],
          hint1: 'The number of dots above a value tells you how many students chose it.',
          hint2: '"2 or more" means add the dots above 2 and above 3: $4 + 2$.',
          hint3: 'The class total is the sum of all dots: $3 + 5 + 4 + 2$.',
          explanation: '1) $5$ students have 1 sibling. 2) $4 + 2 = 6$ students have 2 or more. 3) $3 + 5 + 4 + 2 = 14$ students total.',
        },
      },
      {
        id: 'sqd2-shape',
        type: 'text' as const,
        content: `## What a Dot Plot Tells You

A dot plot reveals three things at a glance:

- **Most common value** — the tallest stack of dots (this is the **mode**).
- **Range of the data** — how far the dots spread from lowest to highest.
- **Gaps and clusters** — values where no one landed (a gap) or where dots bunch up (a cluster).

> 💡 In the pets example, the tallest stack is at $2$ pets, so **$2$ is the most common answer**. The data runs from $0$ to $3$.`,
      },
      {
        id: 'sqd2-interpret',
        type: 'dropdown-select' as const,
        content: `**Interpret the Plot** 🔽

Still using the siblings dot plot (0→3, 1→5, 2→4, 3→2).`,
        exercise: {
          dropdowns: [
            { label: 'The most common number of siblings is:', options: ['0', '1', '2', '3'] },
            { label: 'The greatest number of siblings recorded is:', options: ['1', '2', '3', '5'] },
            { label: 'A dot plot shows each data value as a:', options: ['dot above a number line', 'bar', 'slice of a circle', 'single number'] },
          ],
          correctAnswers: ['1', '3', 'dot above a number line'],
          hint1: 'The most common value is the one with the tallest stack of dots.',
          hint2: 'The greatest value recorded is the largest number that has any dots above it.',
          hint3: 'A dot plot uses dots stacked above a number line, one per value.',
          explanation: 'The tallest stack (5 dots) is above 1, so 1 is most common. The largest value with dots is 3. And a dot plot represents each value with a dot above a number line.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'statistical-questions-data-display',
    sections: [
      {
        id: 'sqd3-intro',
        type: 'text' as const,
        content: `# 📊 Statistical Questions and Data Display

**Part 3 of 5 — Center: Mean, Median, and Mode**

---

> 🔑 **The Idea:** A whole data set can be summarized by a single **measure of center** — a typical value. The three most common are the **mean**, the **median**, and the **mode**.`,
      },
      {
        id: 'sqd3-define',
        type: 'text' as const,
        content: `## The Three Measures of Center

| Measure | What it is | How to find it |
|---------|-----------|----------------|
| **Mean** | the "balance point" average | add all values, divide by how many |
| **Median** | the middle value | sort, then take the middle |
| **Mode** | the most frequent value | the value that appears most often |

### The Mean

$$\\text{mean} = \\frac{\\text{sum of all values}}{\\text{number of values}}$$

**Example:** Find the mean of $4,\\ 8,\\ 6,\\ 2$.

$$\\text{mean} = \\frac{4 + 8 + 6 + 2}{4} = \\frac{20}{4} = 5$$

> 💡 The mean is like sharing equally: if four people had \\$4, \\$8, \\$6, \\$2 and pooled it, each would get \\$5.`,
      },
      {
        id: 'sqd3-mean-drill',
        type: 'input-boxes' as const,
        content: `**Find the Mean** 🧮

Add the values, then divide by how many there are.

**1)** Mean of $5,\\ 7,\\ 9$
**2)** Mean of $10,\\ 2,\\ 6,\\ 6$
**3)** Mean of $3,\\ 3,\\ 4,\\ 8,\\ 2$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '6', '4'],
          hint1: '$\\frac{5+7+9}{3} = \\frac{21}{3}$.',
          hint2: '$\\frac{10+2+6+6}{4} = \\frac{24}{4}$.',
          hint3: '$\\frac{3+3+4+8+2}{5} = \\frac{20}{5}$.',
          explanation: '1) $\\frac{21}{3} = 7$. 2) $\\frac{24}{4} = 6$. 3) $\\frac{20}{5} = 4$.',
        },
      },
      {
        id: 'sqd3-median',
        type: 'text' as const,
        content: `## The Median (Middle Value)

To find the **median**, first put the values **in order**. Then:

- **Odd** number of values → the median is the single middle value.
- **Even** number of values → the median is the **mean of the two middle values**.

### Example (odd): $7,\\ 3,\\ 9,\\ 1,\\ 5$

Sort: $1,\\ 3,\\ \\mathbf{5},\\ 7,\\ 9$. The middle value is $\\mathbf{5}$, so the median is $5$.

### Example (even): $2,\\ 8,\\ 4,\\ 6$

Sort: $2,\\ \\mathbf{4},\\ \\mathbf{6},\\ 8$. The two middle values are $4$ and $6$:

$$\\text{median} = \\frac{4 + 6}{2} = 5$$

> ⚠️ **Always sort first.** Finding the "middle" of an unsorted list gives the wrong answer.`,
      },
      {
        id: 'sqd3-median-mc',
        type: 'multiple-choice' as const,
        content: `**Center Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the median of $6,\\ 2,\\ 9,\\ 4,\\ 7$?',
              options: ['$6$', '$4$', '$7$', '$9$'],
              correctAnswer: 0,
              explanation: 'Sort first: $2, 4, 6, 7, 9$. With 5 values, the middle one is $6$.',
            },
            {
              question: 'What is the mode of $3,\\ 5,\\ 3,\\ 8,\\ 3,\\ 5$?',
              options: ['$3$', '$5$', '$8$', 'There is no mode'],
              correctAnswer: 0,
              explanation: 'The mode is the most frequent value. The number $3$ appears three times (more than any other), so the mode is $3$.',
            },
          ],
        },
      },
      {
        id: 'sqd3-mode-drill',
        type: 'input-boxes' as const,
        content: `**Median and Mode** 🧮

**1)** Median of $12,\\ 4,\\ 8,\\ 10,\\ 6$  *(sort first!)*
**2)** Median of $1,\\ 9,\\ 3,\\ 7$  *(even count — average the two middle)*
**3)** Mode of $2,\\ 7,\\ 7,\\ 4,\\ 7,\\ 2$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '5', '7'],
          hint1: 'Sort: $4, 6, 8, 10, 12$ — pick the middle of 5 values.',
          hint2: 'Sort: $1, 3, 7, 9$ — average the two middle values $3$ and $7$: $\\frac{3+7}{2}$.',
          hint3: 'Count how many times each number appears; the most frequent is the mode.',
          explanation: '1) Sorted $4,6,8,10,12$ → median $8$. 2) Middle pair $3$ and $7$ → $\\frac{3+7}{2} = 5$. 3) $7$ appears three times → mode $7$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'statistical-questions-data-display',
    sections: [
      {
        id: 'sqd4-intro',
        type: 'text' as const,
        content: `# 📊 Statistical Questions and Data Display

**Part 4 of 5 — Spread, Histograms & Box Plots**

---

> 🔑 **The Idea:** Center tells you the *typical* value; **spread** tells you how *spread out* the data is. We also meet two new displays for larger data sets: the **histogram** and the **box plot**.`,
      },
      {
        id: 'sqd4-range',
        type: 'text' as const,
        content: `## Range: A Simple Measure of Spread

The **range** measures how far the data spreads from lowest to highest:

$$\\text{range} = \\text{maximum} - \\text{minimum}$$

**Example:** Test scores $72,\\ 95,\\ 88,\\ 60,\\ 91$.

$$\\text{range} = 95 - 60 = 35$$

A **large range** means the values are very spread out; a **small range** means they are tightly clustered.

> 💡 Two data sets can have the *same mean* but very *different ranges* — spread is its own kind of information.`,
      },
      {
        id: 'sqd4-histogram',
        type: 'text' as const,
        content: `## Histograms (Grouping into Intervals)

When there are many values, we group them into equal **intervals (bins)** and draw a bar for each. This is a **histogram**.

Suppose $20$ students' quiz scores are grouped:

| Score interval | Number of students |
|----------------|---------------------|
| $0$–$4$ | 2 |
| $5$–$9$ | 7 |
| $10$–$14$ | 8 |
| $15$–$19$ | 3 |

The **bar height** is the count (the **frequency**) in that interval.

> ⚠️ A histogram is **not** a bar graph. In a histogram the bars touch and the horizontal axis shows **number intervals** (ranges of values), not separate categories.

> ✅ **Check:** $2 + 7 + 8 + 3 = 20$ students — the frequencies add up to the total.`,
      },
      {
        id: 'sqd4-hist-mc',
        type: 'multiple-choice' as const,
        content: `**Read the Histogram** 🎯

Use the quiz-score histogram (0–4 → 2, 5–9 → 7, 10–14 → 8, 15–19 → 3).`,
        exercise: {
          questions: [
            {
              question: 'Which interval has the most students?',
              options: ['$10$–$14$', '$5$–$9$', '$0$–$4$', '$15$–$19$'],
              correctAnswer: 0,
              explanation: 'The tallest bar is the $10$–$14$ interval with $8$ students — more than any other interval.',
            },
            {
              question: 'How many students scored from 5 to 14 (the two middle intervals)?',
              options: ['$15$', '$8$', '$7$', '$20$'],
              correctAnswer: 0,
              explanation: 'Add the two middle bars: $7 + 8 = 15$ students scored between 5 and 14.',
            },
          ],
        },
      },
      {
        id: 'sqd4-range-drill',
        type: 'input-boxes' as const,
        content: `**Find the Range** 🧮

Range $= \\text{maximum} - \\text{minimum}$.

**1)** Range of $14,\\ 9,\\ 20,\\ 11,\\ 6$
**2)** Range of $30,\\ 30,\\ 45,\\ 22$
**3)** A data set has minimum $8$ and maximum $52$. What is the range?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['14', '23', '44'],
          hint1: 'Max is $20$, min is $6$: $20 - 6$.',
          hint2: 'Max is $45$, min is $22$: $45 - 22$.',
          hint3: 'Range is just $52 - 8$.',
          explanation: '1) $20 - 6 = 14$. 2) $45 - 22 = 23$. 3) $52 - 8 = 44$.',
        },
      },
      {
        id: 'sqd4-boxplot',
        type: 'text' as const,
        content: `## Box Plots (The Five-Number Summary)

A **box plot** (box-and-whisker plot) splits ordered data into four equal parts using **five numbers**:

| Marker | Meaning |
|--------|---------|
| **Minimum** | smallest value |
| **Q1** (lower quartile) | median of the lower half |
| **Median (Q2)** | middle value |
| **Q3** (upper quartile) | median of the upper half |
| **Maximum** | largest value |

The **box** stretches from $Q1$ to $Q3$, with a line at the median; the **whiskers** reach out to the min and max.

The width of the box is the **interquartile range (IQR)**:

$$\\text{IQR} = Q3 - Q1$$

> 💡 A box plot is great for *comparing* groups, because it shows center (median) and spread (IQR and range) in one compact picture.`,
      },
      {
        id: 'sqd4-box-dropdown',
        type: 'dropdown-select' as const,
        content: `**Box Plot Parts** 🔽

A box plot has: minimum $= 4$, $Q1 = 7$, median $= 12$, $Q3 = 18$, maximum $= 25$.`,
        exercise: {
          dropdowns: [
            { label: 'The median of the data is:', options: ['$7$', '$12$', '$18$', '$25$'] },
            { label: 'The range (max − min) is:', options: ['$21$', '$11$', '$25$', '$18$'] },
            { label: 'The interquartile range (Q3 − Q1) is:', options: ['$11$', '$21$', '$6$', '$18$'] },
          ],
          correctAnswers: ['$12$', '$21$', '$11$'],
          hint1: 'The median is the middle marker of the five-number summary.',
          hint2: 'Range $=$ maximum $-$ minimum $= 25 - 4$.',
          hint3: 'IQR $= Q3 - Q1 = 18 - 7$.',
          explanation: 'Median is the listed middle value $12$. Range $= 25 - 4 = 21$. IQR $= 18 - 7 = 11$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'statistical-questions-data-display',
    sections: [
      {
        id: 'sqd5-intro',
        type: 'text' as const,
        content: `# 📊 Statistical Questions and Data Display

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) spot a statistical question, (2) read a dot plot, (3) find the mean, median, and mode, and (4) measure spread with range and read histograms and box plots. Let's put it together.`,
      },
      {
        id: 'sqd5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Statistical question? | Expect a *variety* of answers → yes |
| Dot plot | one dot per value, stacked over a number line |
| Mean | $\\dfrac{\\text{sum of values}}{\\text{number of values}}$ |
| Median | sort, take the middle (average two middles if even) |
| Mode | the most frequent value |
| Range | maximum $-$ minimum |
| IQR | $Q3 - Q1$ |
| Histogram | bars over **intervals**; bar height $=$ frequency |
| Box plot | five-number summary: min, Q1, median, Q3, max |

> ⚠️ Remember: **sort before** finding the median, and a **histogram groups intervals** (bars touch) while a bar graph shows separate categories.`,
      },
      {
        id: 'sqd5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A data set is $4,\\ 4,\\ 6,\\ 10,\\ 6,\\ 12,\\ 6$. What is the mode?',
              options: ['$6$', '$4$', '$10$', '$12$'],
              correctAnswer: 0,
              explanation: 'Count each value: $4$ appears twice, $6$ appears three times, others once. The most frequent value is $6$.',
            },
            {
              question: 'Find the mean of $8,\\ 5,\\ 11,\\ 4$.',
              options: ['$7$', '$8$', '$6$', '$28$'],
              correctAnswer: 0,
              explanation: '$\\frac{8 + 5 + 11 + 4}{4} = \\frac{28}{4} = 7$.',
            },
          ],
        },
      },
      {
        id: 'sqd5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Put It Together** 🧮

Use the data set $3,\\ 7,\\ 5,\\ 9,\\ 1$.

**1)** Find the **mean**.
**2)** Find the **median** *(sort first!)*.
**3)** Find the **range**.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '5', '8'],
          hint1: 'Mean $= \\frac{3+7+5+9+1}{5} = \\frac{25}{5}$.',
          hint2: 'Sort: $1, 3, 5, 7, 9$. The middle of 5 values is the third one.',
          hint3: 'Range $=$ max $-$ min $= 9 - 1$.',
          explanation: '1) Mean $= \\frac{25}{5} = 5$. 2) Sorted $1,3,5,7,9$ → median $5$. 3) Range $= 9 - 1 = 8$.',
        },
      },
      {
        id: 'sqd5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which is a statistical question?',
              options: [
                'What are the heights of the players on the basketball team?',
                'How tall is the tallest player on the team?',
                'What is my own height?',
                'How many players are on a basketball team?',
              ],
              correctAnswer: 0,
              explanation: 'Heights vary from player to player, so you expect a variety of answers — that is statistical. The other three each have one definite answer.',
            },
            {
              question: 'What is the median of $10,\\ 2,\\ 8,\\ 4,\\ 6,\\ 12$?',
              options: ['$7$', '$6$', '$8$', '$5$'],
              correctAnswer: 0,
              explanation: 'Sort: $2, 4, 6, 8, 10, 12$. With 6 (even) values, average the two middle ones, $6$ and $8$: $\\frac{6+8}{2} = 7$.',
            },
            {
              question: 'In a box plot, the interquartile range (IQR) is found by:',
              options: [
                'subtracting Q1 from Q3',
                'subtracting the minimum from the maximum',
                'adding all five numbers',
                'taking the middle value',
              ],
              correctAnswer: 0,
              explanation: 'The IQR is the width of the box: $\\text{IQR} = Q3 - Q1$. (Max $-$ min is the full range, not the IQR.)',
            },
          ],
        },
      },
    ],
  },
]
