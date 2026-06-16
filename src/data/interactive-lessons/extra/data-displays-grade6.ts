import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Data Displays (Grade 6 Math).
 * Registry key / DB slug: 'data-displays-grade6'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'data-displays-grade6',
    sections: [
      {
        id: 'dd1-intro',
        type: 'text' as const,
        content: `# 📊 Data Displays

**Part 1 of 5 — Dot Plots & Frequency Tables**

---

### Topics in This Part

| Section |
|---------|
| What Counts as Data? |
| Frequency Tables |
| Dot Plots (Line Plots) |

> 🔑 **Key Concept:** A **data display** is a picture of numbers. The whole point is to take a messy list of values and arrange it so you can *see* the story — which values are common, which are rare, and how spread out everything is.`,
      },
      {
        id: 'dd1-what-is-data',
        type: 'text' as const,
        content: `## What Counts as Data?

**Data** is just a collection of facts you gather, usually numbers. When you ask a question like *"How many pets does each student have?"* and write down the answers, that list of answers is your data.

Suppose you asked 12 classmates how many pets they own and got:

$$2,\\; 0,\\; 1,\\; 3,\\; 2,\\; 1,\\; 0,\\; 2,\\; 4,\\; 1,\\; 2,\\; 0$$

That raw list is hard to read. Two questions are tricky to answer just by staring at it:

- How many students own **exactly 2 pets**?
- What is the **most common** number of pets?

To answer those quickly, we organize the data. The first tool is a **frequency table**.

> 💡 **Frequency** is a fancy word for *how many times* something happens. If three students own 2 pets, the frequency of "2 pets" is **3**.`,
      },
      {
        id: 'dd1-raw-drop',
        type: 'dropdown-select' as const,
        content: `**Count From the Raw List** 🔽

Look back at the raw pet list: $2,\\; 0,\\; 1,\\; 3,\\; 2,\\; 1,\\; 0,\\; 2,\\; 4,\\; 1,\\; 2,\\; 0$. Count carefully.`,
        exercise: {
          dropdowns: [
            { label: 'How many students own 0 pets?', options: ['3', '2', '4', '1'] },
            { label: 'How many students own 2 pets?', options: ['4', '3', '2', '5'] },
            { label: 'How many students own 4 pets?', options: ['1', '0', '2', '3'] },
          ],
          correctAnswers: ['3', '4', '1'],
          hint1: 'Scan the list for every 0. There are three of them.',
          hint2: 'Scan for every 2 in the list — you should find it four times.',
          hint3: 'The value 4 appears only once in the whole list.',
          explanation: 'Counting the raw list: 0 appears 3 times, 1 appears 3 times, 2 appears 4 times, 3 appears once, and 4 appears once. That is exactly what the frequency table will record.',
        },
      },
      {
        id: 'dd1-freq-table',
        type: 'text' as const,
        content: `## Frequency Tables

A **frequency table** lists each value once and counts how many times it appears. Here is the pet data organized:

| Number of pets | Frequency (how many students) |
|----------------|-------------------------------|
| 0 | 3 |
| 1 | 3 |
| 2 | 4 |
| 3 | 1 |
| 4 | 1 |

Now the data tells its story instantly:
- **4 students** own 2 pets — that's the most common value.
- The frequencies add up to $3 + 3 + 4 + 1 + 1 = 12$, which matches our 12 classmates. ✓

> 🔑 **Always check the total.** The frequencies must add up to the number of people (or things) you surveyed. If they don't, you miscounted somewhere.`,
      },
      {
        id: 'dd1-freq-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the pet frequency table above, how many students own *fewer than 2* pets?',
              options: ['6 students', '4 students', '3 students', '7 students'],
              correctAnswer: 0,
              explanation: '"Fewer than 2" means 0 pets or 1 pet. The frequencies are $3$ and $3$, so $3 + 3 = 6$ students.',
            },
            {
              question: 'What does the word *frequency* tell you in a data display?',
              options: [
                'How many times a value appears',
                'The largest value in the list',
                'The order the values were collected in',
                'The average of all the values',
              ],
              correctAnswer: 0,
              explanation: 'Frequency = a count of how many times a value shows up. It is not the average, the order, or the maximum.',
            },
          ],
        },
      },
      {
        id: 'dd1-dot-plot',
        type: 'text' as const,
        content: `## Dot Plots (Line Plots)

A **dot plot** (also called a **line plot**) shows the same information as a frequency table, but with a stack of dots above each value on a number line. One dot = one data point.

Here is the pet data as a dot plot:

\`\`\`
            ●
●     ●     ●
●     ●     ●
●     ●     ●     ●     ●
0     1     2     3     4
   Number of pets
\`\`\`

Reading it is easy:
- Count the dots in a column to get that value's **frequency**.
- The **tallest** stack is the most common value (here, **2 pets** with 4 dots).
- A **gap** (a value with no dots) means nobody had that amount.

> 💡 **Dot plots shine for small data sets** of whole numbers. You can see the shape — where data clumps up and where it thins out — at a single glance.`,
      },
      {
        id: 'dd1-dot-drill',
        type: 'input-boxes' as const,
        content: `**Read the Dot Plot** 🧮

A class recorded how many books each student read last month:

\`\`\`
            ●
●           ●     ●
●     ●     ●     ●
●     ●     ●     ●     ●
1     2     3     4     5
     Number of books
\`\`\`

**1)** How many students read exactly **3** books?
**2)** How many students read **5** books?
**3)** How many students are in the class *in total*?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '1', '13'],
          hint1: 'Count the dots stacked directly above the 3.',
          hint2: 'The column above 5 has just one dot.',
          hint3: 'Add up every dot: column 1 has 3, column 2 has 2, column 3 has 4, column 4 has 3, column 5 has 1.',
          explanation: '1) The "3" column has 4 dots → 4 students. 2) The "5" column has 1 dot → 1 student. 3) Total $= 3 + 2 + 4 + 3 + 1 = 13$ students.',
        },
      },
      {
        id: 'dd1-wrap',
        type: 'text' as const,
        content: `## Wrapping Up Part 1

You now have two ways to organize a list of numbers:

| Display | Best when… | You read it by… |
|---------|-----------|-----------------|
| Frequency table | you want exact counts in a tidy chart | reading the frequency column |
| Dot plot | the data is small whole numbers | counting stacked dots |

Both answer the same questions — *what's common, what's rare, how many total* — they just look different.

In **Part 2** we'll handle data with lots of different values using **bar graphs** and **histograms**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'data-displays-grade6',
    sections: [
      {
        id: 'dd2-intro',
        type: 'text' as const,
        content: `# 📊 Data Displays

**Part 2 of 5 — Bar Graphs & Histograms**

---

> 🔑 **The Big Difference:** A **bar graph** compares separate *categories* (like favorite colors). A **histogram** groups *numbers* into ranges called **bins** (like test scores 70–79, 80–89). They look similar, but one is for categories and the other is for number ranges.`,
      },
      {
        id: 'dd2-bar-graph',
        type: 'text' as const,
        content: `## Bar Graphs

A **bar graph** uses bars to compare **categories**. The height (or length) of each bar shows the frequency for that category. Because the categories are separate things, the bars have **gaps** between them.

Students voted for their favorite school lunch:

| Lunch | Votes |
|-------|-------|
| Pizza | 9 |
| Tacos | 6 |
| Salad | 2 |
| Pasta | 5 |

\`\`\`
Votes
 9 |  █
 6 |  █     █
 3 |  █     █           █
 0 |  █     █     █     █
      Pizza Tacos Salad Pasta
\`\`\`

To read a bar graph, line the top of each bar up with the scale on the left.

> 💡 **Categories can be put in any order** on a bar graph. Pizza first or pasta first — it doesn't change the data, because the categories aren't numbers on a line.`,
      },
      {
        id: 'dd2-bar-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Using the lunch bar graph, how many *more* students chose Pizza than Pasta?',
              options: ['4 more', '5 more', '9 more', '14 more'],
              correctAnswer: 0,
              explanation: 'Pizza got 9 votes and Pasta got 5. The difference is $9 - 5 = 4$ more votes for Pizza.',
            },
            {
              question: 'Which kind of data belongs on a bar graph?',
              options: [
                'Favorite movie genres (categories)',
                'Heights of students in centimeters',
                'Number ranges like 0–10, 11–20',
                'Times measured to the nearest second',
              ],
              correctAnswer: 0,
              explanation: 'Bar graphs compare separate categories. Genres are categories. The other choices are number data, which suit a histogram or dot plot.',
            },
          ],
        },
      },
      {
        id: 'dd2-histogram',
        type: 'text' as const,
        content: `## Histograms

A **histogram** looks like a bar graph, but it shows **numerical data grouped into equal-width ranges** called **bins** (or **intervals**). Because the bins are next-door ranges on a number line, the bars **touch** — no gaps.

A coach recorded how many push-ups each athlete did, then grouped the counts:

| Push-ups (bin) | Frequency |
|----------------|-----------|
| 0–9 | 2 |
| 10–19 | 5 |
| 20–29 | 8 |
| 30–39 | 3 |

\`\`\`
Freq
 8 |              █
 6 |        █     █
 4 |        █     █
 2 |  █     █     █     █
 0 |__█_____█_____█_____█__
     0-9  10-19 20-29 30-39
\`\`\`

> ⚠️ **A histogram tells you the bin, not the exact values.** The "20–29" bar has frequency 8, so 8 athletes did *somewhere between* 20 and 29 push-ups — but you can't tell from the histogram exactly how many each one did.`,
      },
      {
        id: 'dd2-hist-drill',
        type: 'input-boxes' as const,
        content: `**Read the Histogram** 🧮

Use the push-up histogram above (bins 0–9, 10–19, 20–29, 30–39).

**1)** How many athletes did **20–29** push-ups?
**2)** How many athletes did **fewer than 20** push-ups? *(combine the first two bins)*
**3)** How many athletes were measured *in total*?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '7', '18'],
          hint1: 'Read the height of the 20–29 bar.',
          hint2: '"Fewer than 20" means the 0–9 bin plus the 10–19 bin: $2 + 5$.',
          hint3: 'Add every bin: $2 + 5 + 8 + 3$.',
          explanation: '1) The 20–29 bin has frequency 8. 2) $2 + 5 = 7$ athletes did fewer than 20. 3) Total $= 2 + 5 + 8 + 3 = 18$ athletes.',
        },
      },
      {
        id: 'dd2-compare',
        type: 'text' as const,
        content: `## Telling Them Apart

Bar graphs and histograms are easy to mix up. This side-by-side comparison is worth memorizing:

| | Bar graph | Histogram |
|---|-----------|-----------|
| Shows | separate **categories** | grouped **number ranges** (bins) |
| Bars | have **gaps** between them | **touch** with no gaps |
| Order | can be rearranged freely | fixed (numbers stay in order) |
| Example | favorite colors | test scores by range |

> 🔑 **The fastest tell:** look at the bars. **Gaps → bar graph. Touching → histogram.**`,
      },
      {
        id: 'dd2-bar-vs-hist',
        type: 'dropdown-select' as const,
        content: `**Bar Graph or Histogram?** 🔽

For each data set, choose the better display.`,
        exercise: {
          dropdowns: [
            { label: 'Favorite pizza toppings of a class:', options: ['Bar graph', 'Histogram'] },
            { label: 'Ages of people grouped 0–9, 10–19, 20–29:', options: ['Bar graph', 'Histogram'] },
            { label: 'Should the bars touch (no gaps)?', options: ['Yes — histogram bars touch', 'No — they always have gaps'] },
          ],
          correctAnswers: ['Bar graph', 'Histogram', 'Yes — histogram bars touch'],
          hint1: 'Toppings are separate categories, not number ranges.',
          hint2: 'Ages grouped into ranges are numerical bins — that is a histogram.',
          hint3: 'Histogram bins are next-door number ranges, so their bars touch with no gaps.',
          explanation: 'Categories → bar graph (gaps). Number ranges (bins) → histogram (bars touch). That touching/gap difference is the fastest way to tell them apart.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'data-displays-grade6',
    sections: [
      {
        id: 'dd3-intro',
        type: 'text' as const,
        content: `# 📊 Data Displays

**Part 3 of 5 — Stem-and-Leaf Plots & Line Graphs**

---

> 🔑 **Why these two?** A **stem-and-leaf plot** keeps every exact value while still showing the shape of the data. A **line graph** shows how one thing **changes over time**. Each is the right tool for a different job.`,
      },
      {
        id: 'dd3-stem-leaf',
        type: 'text' as const,
        content: `## Stem-and-Leaf Plots

A **stem-and-leaf plot** splits each number into a **stem** (the left digits) and a **leaf** (the last digit). For two-digit numbers, the **tens digit is the stem** and the **ones digit is the leaf**.

Here are 11 quiz scores:

$$62,\\; 75,\\; 78,\\; 81,\\; 83,\\; 83,\\; 90,\\; 71,\\; 88,\\; 95,\\; 79$$

Sorted into stems (tens) and leaves (ones):

\`\`\`
Stem | Leaf
  6  | 2
  7  | 1 5 8 9
  8  | 1 3 3 8
  9  | 0 5
\`\`\`

**Key:** $8\\,|\\,3$ means **83**.

Read it like this:
- The stem **7** with leaves **1 5 8 9** means the scores 71, 75, 78, 79.
- Count the leaves in a row to get that group's frequency — the **70s** row has 4 leaves, so 4 scores were in the 70s.

> 💡 **The best of both worlds:** unlike a histogram, a stem-and-leaf plot keeps the *exact* values. You can see 83 appeared twice (two 3's in the 80s row).`,
      },
      {
        id: 'dd3-stem-drill',
        type: 'input-boxes' as const,
        content: `**Read the Stem-and-Leaf Plot** 🧮

Use the quiz-score plot above (key: $8\\,|\\,3 = 83$).

**1)** How many scores were in the **80s**?
**2)** What is the **lowest** score in the whole data set?
**3)** How many scores were **80 or higher**? *(combine the 80s and 90s rows)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '62', '6'],
          hint1: 'Count the leaves in the stem-8 row: 1, 3, 3, 8.',
          hint2: 'The smallest stem is 6, with a single leaf of 2.',
          hint3: 'The 80s row has 4 leaves and the 90s row has 2 leaves: $4 + 2$.',
          explanation: '1) The 80s row has leaves 1, 3, 3, 8 → 4 scores. 2) The lowest stem is 6 with leaf 2, giving 62. 3) $4 + 2 = 6$ scores were 80 or higher.',
        },
      },
      {
        id: 'dd3-line-graph',
        type: 'text' as const,
        content: `## Line Graphs

A **line graph** plots points and connects them with line segments to show how a value **changes over time**. Time goes along the bottom (the *x*-axis); the measured value goes up the side (the *y*-axis).

A plant's height was measured each week:

| Week | Height (cm) |
|------|-------------|
| 1 | 2 |
| 2 | 5 |
| 3 | 9 |
| 4 | 10 |

\`\`\`
Height
10 |             •___•
 8 |          •
 6 |       •
 4 |
 2 | •
 0 |__1___2___3___4__  Week
\`\`\`

The line tells a story about **change**:
- A line going **up** means the value is **increasing** (the plant grew).
- A **steeper** segment means a **faster** change. From week 2 to week 3 the plant grew $9 - 5 = 4$ cm — its fastest week.
- A **flat** segment would mean no change at all.

> ⚠️ **Use a line graph only for data that changes over time** (or another ordered scale). Don't use one for categories like favorite colors — connecting "red" to "blue" with a line is meaningless.`,
      },
      {
        id: 'dd3-line-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On the plant line graph, between which two weeks did the plant grow the *most*?',
              options: ['Week 2 to Week 3', 'Week 1 to Week 2', 'Week 3 to Week 4', 'It grew the same every week'],
              correctAnswer: 0,
              explanation: 'Growth per week: W1→W2 is $5-2=3$, W2→W3 is $9-5=4$, W3→W4 is $10-9=1$. The biggest jump (and steepest segment) is W2→W3 with 4 cm.',
            },
            {
              question: 'Which situation is best shown with a line graph?',
              options: [
                'A city\'s temperature recorded each hour all day',
                'The number of students who like each sport',
                'Test scores split into ranges 60–69, 70–79',
                'Favorite ice cream flavors of a class',
              ],
              correctAnswer: 0,
              explanation: 'Line graphs show change over time. Hourly temperature is ordered by time. The other choices are categories or grouped ranges, which suit bar graphs or histograms.',
            },
          ],
        },
      },
      {
        id: 'dd3-recap',
        type: 'text' as const,
        content: `## Two Tools, Two Jobs

This part added two more displays to your toolbox. Keep their *jobs* straight:

| Display | Its special job |
|---------|-----------------|
| **Stem-and-leaf plot** | keep the **exact values** while showing the shape and groups |
| **Line graph** | show how one value **changes over time** |

> 💡 A stem-and-leaf plot answers *"what were the actual numbers?"* A line graph answers *"is it going up or down, and how fast?"* Choosing well starts with knowing which question you're asking.`,
      },
      {
        id: 'dd3-display-match',
        type: 'dropdown-select' as const,
        content: `**Match the Display** 🔽

Pick the best display for each goal.`,
        exercise: {
          dropdowns: [
            { label: 'Keep every exact value AND show the shape:', options: ['Stem-and-leaf plot', 'Line graph', 'Bar graph'] },
            { label: 'Show how a savings account grows month by month:', options: ['Line graph', 'Stem-and-leaf plot', 'Histogram'] },
            { label: 'In $7\\,|\\,4$, the digit 4 is the:', options: ['Leaf', 'Stem', 'Frequency'] },
          ],
          correctAnswers: ['Stem-and-leaf plot', 'Line graph', 'Leaf'],
          hint1: 'Only one display keeps the exact original numbers while showing groups.',
          hint2: '"Month by month" is change over time.',
          hint3: 'The stem is the tens digit (left); the leaf is the ones digit (right).',
          explanation: 'Stem-and-leaf keeps exact values and shape. Line graphs track change over time. In $7\\,|\\,4 = 74$, the 7 is the stem (tens) and the 4 is the leaf (ones).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'data-displays-grade6',
    sections: [
      {
        id: 'dd4-intro',
        type: 'text' as const,
        content: `# 📊 Data Displays

**Part 4 of 5 — Shape, Center & Spread**

---

> 🔑 **Reading the Story:** Every display has a **shape**. By looking at where the data clumps and how it stretches out, you can describe its **center** (a typical value), its **spread** (how far apart the values are), and any **outliers** (values far from the rest).`,
      },
      {
        id: 'dd4-shape',
        type: 'text' as const,
        content: `## The Shape of Data

Look at a dot plot or histogram from across the room and notice its **shape**.

| Shape | What it looks like | Example |
|-------|--------------------|---------|
| **Symmetric** | a balanced mound; left half mirrors the right | heights of students |
| **Skewed right** | a tail stretching toward the *high* values | prices, where a few items are very expensive |
| **Skewed left** | a tail stretching toward the *low* values | scores on an easy test |

A **cluster** is where data bunches together. A **gap** is a range with no data. An **outlier** is a single value sitting far away from everything else.

\`\`\`
●
●  ●
●  ●  ●              ●   ← outlier (far from the cluster)
1  2  3  4  5  6  7  8
\`\`\`

> 💡 **Outliers grab attention.** In the dot plot above, most values cluster at 1–3, then there's a big gap, then one lonely point at 8. That 8 is an **outlier** — always ask whether it's a real surprise or just a typo.`,
      },
      {
        id: 'dd4-shape-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A data set has a long tail stretching toward the high values on the right. Its shape is:',
              options: ['Skewed right', 'Skewed left', 'Symmetric', 'A gap'],
              correctAnswer: 0,
              explanation: 'A display is "skewed" in the direction its tail points. A tail toward the high (right) side means skewed right.',
            },
            {
              question: 'In the dot plot above, the value at 8 is best described as:',
              options: ['An outlier', 'The center', 'A cluster', 'The most common value'],
              correctAnswer: 0,
              explanation: 'The 8 sits far away from the cluster at 1–3, separated by a gap. A single far-off value like that is an outlier.',
            },
          ],
        },
      },
      {
        id: 'dd4-center',
        type: 'text' as const,
        content: `## Center: Mean, Median & Mode

The **center** is a single typical value that summarizes the whole set. Three common measures:

- **Mean** (average): add all the values, then divide by how many there are.
- **Median**: the **middle** value when the data is listed in order.
- **Mode**: the value that appears **most often**.

**Example.** Five quiz scores: $4,\\; 8,\\; 6,\\; 10,\\; 7$.

First **order them**: $4,\\; 6,\\; 7,\\; 8,\\; 10$.

$$\\text{Mean} = \\frac{4 + 6 + 7 + 8 + 10}{5} = \\frac{35}{5} = 7$$

$$\\text{Median} = 7 \\quad (\\text{the middle of } 4,\\, 6,\\, \\mathbf{7},\\, 8,\\, 10)$$

There is **no mode** here, because every value appears exactly once.

> ⚠️ **Median needs ordered data first.** A very common mistake is grabbing the middle number of the *unsorted* list. Always sort, then find the middle.`,
      },
      {
        id: 'dd4-center-drill',
        type: 'input-boxes' as const,
        content: `**Find the Center** 🧮

A basketball player scored these points in 5 games:

$$12,\\; 8,\\; 15,\\; 8,\\; 7$$

**1)** What is the **mean** (average) number of points?
**2)** What is the **median**? *(remember to sort first)*
**3)** What is the **mode**?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '8', '8'],
          hint1: 'Mean: add all five values, then divide by 5. The sum is $12 + 8 + 15 + 8 + 7 = 50$.',
          hint2: 'Sort the values: $7, 8, 8, 12, 15$. The median is the middle one.',
          hint3: 'The mode is the value that appears most often. Which number shows up twice?',
          explanation: '1) Mean $= 50 \\div 5 = 10$. 2) Sorted: $7, 8, \\mathbf{8}, 12, 15$ → median $= 8$. 3) The value 8 appears twice, so the mode $= 8$.',
        },
      },
      {
        id: 'dd4-spread',
        type: 'text' as const,
        content: `## Spread: The Range

**Spread** describes how far apart the values are. The simplest measure is the **range**:

$$\\text{Range} = \\text{maximum value} - \\text{minimum value}$$

For the basketball points $7,\\; 8,\\; 8,\\; 12,\\; 15$:

$$\\text{Range} = 15 - 7 = 8$$

A **small range** means the values are close together (consistent). A **large range** means they are spread out (more varied).

> 💡 **Center and spread together tell the whole story.** "Typical score about 10, ranging from 7 to 15" describes the data far better than either number alone.`,
      },
      {
        id: 'dd4-summary-drop',
        type: 'dropdown-select' as const,
        content: `**Center & Spread** 🔽

The data set is $3,\\; 5,\\; 5,\\; 9$. Fill in each summary value.`,
        exercise: {
          dropdowns: [
            { label: 'Mean:', options: ['5.5', '5', '6', '4'] },
            { label: 'Mode:', options: ['5', '3', '9', 'no mode'] },
            { label: 'Range:', options: ['6', '9', '5', '3'] },
          ],
          correctAnswers: ['5.5', '5', '6'],
          hint1: 'Mean $= (3 + 5 + 5 + 9) \\div 4 = 22 \\div 4$.',
          hint2: 'The mode is the value that repeats — 5 appears twice.',
          hint3: 'Range $= \\text{max} - \\text{min} = 9 - 3$.',
          explanation: 'Mean $= 22 \\div 4 = 5.5$. The value 5 appears twice, so the mode is 5. Range $= 9 - 3 = 6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'data-displays-grade6',
    sections: [
      {
        id: 'dd5-intro',
        type: 'text' as const,
        content: `# 📊 Data Displays

**Part 5 of 5 — Choosing Displays & Mastery Check**

---

You can now build and read dot plots, frequency tables, bar graphs, histograms, stem-and-leaf plots, and line graphs — and describe a data set's shape, center, and spread. The last skill is **choosing the right display** and **reading displays critically**.`,
      },
      {
        id: 'dd5-choosing',
        type: 'text' as const,
        content: `## Choosing the Right Display

| If you want to… | Use a… |
|-----------------|--------|
| Compare separate categories | **Bar graph** |
| Group numbers into ranges (bins) | **Histogram** |
| Show small whole-number data and its shape | **Dot plot** |
| Keep every exact value and show shape | **Stem-and-leaf plot** |
| Show change over time | **Line graph** |
| List exact counts in a chart | **Frequency table** |

> 🔑 **The key question is always:** *What kind of data is it, and what do I want to show?* Categories vs. numbers, and "over time" vs. "all at once," decide nearly every choice.`,
      },
      {
        id: 'dd5-choose-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You want to show how a city\'s rainfall changed each month over a year. The best display is a:',
              options: ['Line graph', 'Bar graph of categories', 'Stem-and-leaf plot', 'Frequency table'],
              correctAnswer: 0,
              explanation: 'Month-by-month change over time is exactly the job of a line graph.',
            },
            {
              question: 'You surveyed students\' favorite sports and want to compare the totals. The best display is a:',
              options: ['Bar graph', 'Line graph', 'Histogram', 'Box plot'],
              correctAnswer: 0,
              explanation: 'Favorite sports are separate categories, and a bar graph is built to compare category totals.',
            },
          ],
        },
      },
      {
        id: 'dd5-misleading',
        type: 'text' as const,
        content: `## Reading Displays Critically

Displays can **mislead** if you don't read carefully:

- ⚠️ **Check the scale.** If a bar graph's vertical axis starts at 50 instead of 0, small differences look gigantic.
- ⚠️ **Check the bin width.** Two histograms of the same data can look very different if their bins are wide or narrow.
- ⚠️ **Watch for missing labels.** A graph with no axis titles or no key can't be trusted — you don't know what it's measuring.

> 💡 **A smart reader always asks:** Where does the scale start? What is each bar or dot counting? Is anything left out? Good data sense is as much about *questioning* a display as building one.`,
      },
      {
        id: 'dd5-choose-drop',
        type: 'dropdown-select' as const,
        content: `**Choose the Display** 🔽

Pick the best display for each task.`,
        exercise: {
          dropdowns: [
            { label: 'Compare how many students play each sport:', options: ['Bar graph', 'Line graph', 'Stem-and-leaf plot'] },
            { label: 'Show a runner\'s time over 6 months of training:', options: ['Line graph', 'Histogram', 'Bar graph'] },
            { label: 'Group 40 test scores into ranges 60–69, 70–79, …:', options: ['Histogram', 'Dot plot', 'Line graph'] },
            { label: 'A bar graph\'s axis starts at 90, not 0. You should:', options: ['Be cautious — differences look bigger than they are', 'Trust it exactly as drawn', 'Assume the data is wrong'] },
          ],
          correctAnswers: ['Bar graph', 'Line graph', 'Histogram', 'Be cautious — differences look bigger than they are'],
          hint1: 'Sports are separate categories.',
          hint2: '"Over 6 months" is change over time.',
          hint3: 'Test scores grouped into number ranges are bins → histogram. A truncated axis exaggerates differences, so read it cautiously.',
          explanation: 'Categories → bar graph. Change over time → line graph. Grouped number ranges → histogram. A scale that does not start at 0 makes gaps look larger, so be cautious rather than trusting it blindly.',
        },
      },
      {
        id: 'dd5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A data set is $2,\\; 4,\\; 4,\\; 6,\\; 9$. Which statement is TRUE?',
              options: [
                'The mode is 4 and the range is 7',
                'The mean is 4 and the range is 9',
                'The median is 4 and the mode is 6',
                'The range is 11 and the mode is 2',
              ],
              correctAnswer: 0,
              explanation: 'The value 4 appears twice → mode $= 4$. Range $= 9 - 2 = 7$. (For reference, mean $= 25 \\div 5 = 5$ and median $= 4$.)',
            },
            {
              question: 'The bars of a graph TOUCH with no gaps between them. The graph is most likely a:',
              options: ['Histogram', 'Bar graph', 'Line graph', 'Frequency table'],
              correctAnswer: 0,
              explanation: 'Touching bars signal grouped number ranges (bins), which is a histogram. Bar graphs leave gaps between separate categories.',
            },
          ],
        },
      },
      {
        id: 'dd5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'In a stem-and-leaf plot, the entry $9\\,|\\,2$ (with key $9\\,|\\,2 = 92$) represents the value:',
              options: ['92', '29', '11', '9.2'],
              correctAnswer: 0,
              explanation: 'The stem (9) is the tens digit and the leaf (2) is the ones digit, so $9\\,|\\,2 = 92$.',
            },
            {
              question: 'Which display is the BEST choice to show how a town\'s population changed each year from 2018 to 2024?',
              options: ['Line graph', 'Bar graph of categories', 'Stem-and-leaf plot', 'Frequency table'],
              correctAnswer: 0,
              explanation: 'Year-by-year change over time is exactly what a line graph shows best.',
            },
            {
              question: 'For the data $5,\\; 7,\\; 7,\\; 10,\\; 11$, the median is:',
              options: ['7', '8', '10', '6'],
              correctAnswer: 0,
              explanation: 'The data is already in order: $5, 7, \\mathbf{7}, 10, 11$. The middle (3rd of 5) value is 7.',
            },
          ],
        },
      },
    ],
  },
]
