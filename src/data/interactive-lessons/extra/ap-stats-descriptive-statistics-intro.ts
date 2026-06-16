import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Descriptive Statistics Basics (AP Statistics).
 * Registry key / DB Topic.slug: 'ap-stats-descriptive-statistics-intro'.
 * 7 parts forming a pedagogical arc: variables & data types → graphing distributions →
 * describing distributions (SOCS) → measures of center → measures of spread →
 * five-number summary / boxplots / outliers → mastery + exit quiz.
 * Teach (text) alternates with interactive checks (multiple-choice + input-boxes +
 * dropdown-select). LaTeX uses DOUBLED backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'ap-stats-descriptive-statistics-intro',
    sections: [
      {
        id: 'dsi1-intro',
        type: 'text' as const,
        content: `# 📊 Descriptive Statistics Basics

**Part 1 of 7 — Individuals, Variables & Types of Data**

---

### Topics in This Part

| Section |
|---------|
| Individuals & Variables |
| Categorical vs. Quantitative |
| Discrete vs. Continuous |

> 🔑 **Key Concept:** Statistics begins by asking two questions about a data set: *who* are we measuring (the **individuals**) and *what* are we recording about them (the **variables**)? The **type** of variable decides which graphs and summaries are even allowed.`,
      },
      {
        id: 'dsi1-indiv-var',
        type: 'text' as const,
        content: `## Individuals and Variables

- **Individuals** are the objects described by a data set — people, animals, schools, countries, even individual coffee orders.
- A **variable** is any characteristic we record about each individual.

When data are organized in a table, each **row** is usually one individual and each **column** is one variable.

| Student | Height (in) | Eye color | AP score |
|---------|-------------|-----------|----------|
| Maya | 64 | brown | 4 |
| Leo | 71 | blue | 5 |
| Priya | 67 | brown | 3 |

Here the **individuals** are students, and the **variables** are height, eye color, and AP score.

> 💡 A single data set almost always mixes variable types. *Height* and *AP score* are numbers; *eye color* is a label. We treat them very differently.`,
      },
      {
        id: 'dsi1-cat-quant',
        type: 'text' as const,
        content: `## The Big Split: Categorical vs. Quantitative

Every variable is one of two types:

| Type | What it records | Examples | Valid summaries |
|------|-----------------|----------|-----------------|
| **Categorical** | a *label* or group | eye color, zip code, AP grade (1–5), yes/no | counts, percentages, mode |
| **Quantitative** | a *measured amount* you can do arithmetic on | height, weight, test score, age | mean, median, standard deviation |

> ⚠️ **The number trap:** Just because a variable uses numbers does **not** make it quantitative. A zip code or a jersey number is a **label** — averaging zip codes is meaningless. Ask: *"Does it make sense to take the average?"* If no, it's categorical.`,
      },
      {
        id: 'dsi1-classify-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A survey records each respondent\'s **area code** (e.g., 312, 415, 617). What type of variable is this?',
              options: ['Categorical', 'Quantitative', 'Both', 'Neither'],
              correctAnswer: 0,
              explanation: 'Area codes are numbers used as labels. Averaging them is meaningless, so it is a categorical variable — the number trap.',
            },
            {
              question: 'Which of these is a **quantitative** variable?',
              options: ['Favorite color', 'Number of siblings', 'Type of pet', 'Zip code'],
              correctAnswer: 1,
              explanation: 'Number of siblings is a counted amount you can average, so it is quantitative. The others are labels (categorical).',
            },
          ],
        },
      },
      {
        id: 'dsi1-discrete-cont',
        type: 'text' as const,
        content: `## Inside Quantitative: Discrete vs. Continuous

Quantitative variables split one level deeper:

- **Discrete** — you can list the possible values, usually whole numbers from *counting*. Example: number of pets, number of text messages today.
- **Continuous** — any value in an interval is possible, usually from *measuring*. Example: height, time, weight.

> 💡 Quick test: if the natural answer is "you **count** it," it's discrete; if you "**measure** it" with a ruler, scale, or clock, it's continuous. A *backpack's weight* (measured) is continuous; the *number of books* in it (counted) is discrete.`,
      },
      {
        id: 'dsi1-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify Each Variable** 🔽

For each variable below, choose the best classification.`,
        exercise: {
          dropdowns: [
            { label: 'Eye color', options: ['Categorical', 'Quantitative — discrete', 'Quantitative — continuous'] },
            { label: 'Number of pets a person owns', options: ['Categorical', 'Quantitative — discrete', 'Quantitative — continuous'] },
            { label: 'Time to run a 5K (minutes)', options: ['Categorical', 'Quantitative — discrete', 'Quantitative — continuous'] },
            { label: 'Jersey number on a team', options: ['Categorical', 'Quantitative — discrete', 'Quantitative — continuous'] },
          ],
          correctAnswers: ['Categorical', 'Quantitative — discrete', 'Quantitative — continuous', 'Categorical'],
          hint1: 'Eye color is a label, and a jersey number is a label that happens to use digits.',
          hint2: 'Number of pets is counted (whole numbers) → discrete.',
          hint3: 'Time is measured on a continuous scale → continuous.',
          explanation: 'Eye color and jersey number are categorical (labels). Pets is quantitative-discrete (counted). 5K time is quantitative-continuous (measured).',
        },
      },
      {
        id: 'dsi1-wrap',
        type: 'text' as const,
        content: `## Why This Matters

The variable type is the gate to everything that follows:

- **Categorical** data → bar charts, pie charts, and **counts/percentages**.
- **Quantitative** data → dotplots, histograms, boxplots, and **mean / median / standard deviation**.

Choose the wrong type and you'll reach for a tool that doesn't fit — like trying to draw a histogram of eye color.

In Part 2 we'll start *displaying* quantitative data and learn to read the shape of a distribution.`,
      },
      {
        id: 'dsi1-tool-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which summary makes sense for the **categorical** variable "favorite social-media app"?',
              options: ['The percentage who chose each app', 'The mean app', 'The standard deviation of the apps', 'The median app'],
              correctAnswer: 0,
              explanation: 'Categorical data are summarized with counts and percentages. Means, medians, and standard deviations require numeric (quantitative) values, so they do not apply to app names.',
            },
            {
              question: 'In a data table where rows are people and columns are characteristics, each **column** corresponds to:',
              options: ['A variable', 'An individual', 'An outlier', 'A frequency'],
              correctAnswer: 0,
              explanation: 'Rows are the individuals being measured; each column records one variable (characteristic) across all of them.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'ap-stats-descriptive-statistics-intro',
    sections: [
      {
        id: 'dsi2-intro',
        type: 'text' as const,
        content: `# 📊 Descriptive Statistics Basics

**Part 2 of 7 — Displaying Distributions**

---

> 🔑 **The Goal:** A **distribution** tells us what values a variable takes and how often it takes them. Before we crunch any numbers, we *draw* the data so the pattern jumps out.`,
      },
      {
        id: 'dsi2-cat-graphs',
        type: 'text' as const,
        content: `## Graphs for Categorical Data

For categorical variables we count how many individuals fall in each category, then show those counts:

- **Bar chart** — one bar per category; bar **height** = count (or percent). Bars have gaps between them.
- **Pie chart** — slices of a circle; each slice's share = that category's **relative frequency**.

A **frequency** is a count. A **relative frequency** is that count divided by the total — a proportion or percent.

### Example: favorite fruit (20 students)

| Fruit | Frequency | Relative frequency |
|-------|-----------|--------------------|
| Apple | 8 | $8/20 = 0.40 = 40\\%$ |
| Banana | 5 | $5/20 = 0.25 = 25\\%$ |
| Cherry | 4 | $4/20 = 0.20 = 20\\%$ |
| Grape | 3 | $3/20 = 0.15 = 15\\%$ |

> 💡 Relative frequencies in a complete table always add to $1$ (or $100\\%$). Here $0.40 + 0.25 + 0.20 + 0.15 = 1.00$. ✓`,
      },
      {
        id: 'dsi2-relfreq-input',
        type: 'input-boxes' as const,
        content: `**Relative Frequency** 🧮

In a class of $40$ students, $14$ walk to school.

**1)** What is the relative frequency of walkers, as a decimal?
**2)** What is that relative frequency as a percent? *(enter the number only, e.g. 35 for 35%)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0.35', '35'],
          hint1: 'Relative frequency $=$ count $\\div$ total $= 14 \\div 40$.',
          hint2: '$14 \\div 40 = 0.35$.',
          hint3: 'Multiply the decimal by $100$ to get a percent: $0.35 \\times 100 = 35\\%$.',
          explanation: '$14/40 = 0.35 = 35\\%$. A relative frequency is a count divided by the total, scaled to a percent by multiplying by $100$.',
        },
      },
      {
        id: 'dsi2-quant-graphs',
        type: 'text' as const,
        content: `## Graphs for Quantitative Data

For quantitative variables we show the *values themselves*:

- **Dotplot** — one dot per data value stacked above a number line. Great for small data sets.
- **Stemplot (stem-and-leaf)** — splits each value into a stem (leading digits) and a leaf (last digit); keeps the actual numbers visible.
- **Histogram** — groups values into equal-width **bins** and draws a bar for each bin's count. Bars **touch** (no gaps), because the scale is continuous.

> ⚠️ A **bar chart** is for categories (gaps between bars). A **histogram** is for quantitative bins (bars touch). They look similar but answer different questions — don't confuse them.`,
      },
      {
        id: 'dsi2-graph-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You want to display the distribution of **resting heart rates** (a quantitative variable) for 60 athletes. Which graph is appropriate?',
              options: ['Histogram', 'Pie chart', 'Bar chart', 'A table of category labels'],
              correctAnswer: 0,
              explanation: 'Heart rate is quantitative, so a histogram (which groups numeric values into touching bins) is appropriate. Pie and bar charts are for categorical data.',
            },
            {
              question: 'A key visual difference between a histogram and a bar chart is:',
              options: ['Histogram bars touch; bar-chart bars have gaps', 'Histograms can only be vertical', 'Bar charts always use percentages', 'Histograms cannot show counts'],
              correctAnswer: 0,
              explanation: 'Because a histogram\'s horizontal axis is a continuous numeric scale, its bars touch. Bar charts display separate categories, so their bars are drawn with gaps.',
            },
          ],
        },
      },
      {
        id: 'dsi2-stemplot',
        type: 'text' as const,
        content: `## Reading a Stemplot

A stemplot keeps the original numbers. With the **stems** as tens and **leaves** as ones, this plot

\`\`\`
2 | 3 5 8
3 | 1 4 4 7
4 | 0 2
\`\`\`

represents the values $23, 25, 28, 31, 34, 34, 37, 40, 42$ — that's $9$ data values, read straight off the leaves.

> 💡 A stemplot is really a histogram turned on its side, but it keeps every exact value. That makes it easy to find the **median** and spot **repeats** by eye.`,
      },
      {
        id: 'dsi2-stem-input',
        type: 'input-boxes' as const,
        content: `**Read the Stemplot** 🧮

Use this stemplot (stems = tens, leaves = ones):

\`\`\`
1 | 2 6
2 | 0 0 5 9
3 | 4
\`\`\`

**1)** How many data values are shown in total?
**2)** What is the largest value in the data set?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['7', '34'],
          hint1: 'Count every leaf: $2$ leaves on stem $1$, $4$ leaves on stem $2$, $1$ leaf on stem $3$.',
          hint2: '$2 + 4 + 1 = 7$ values total.',
          hint3: 'The largest value uses the largest stem ($3$) and its leaf ($4$): $34$.',
          explanation: 'The leaves spell out $12, 16, 20, 20, 25, 29, 34$ — that is $7$ values, and the largest is $34$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'ap-stats-descriptive-statistics-intro',
    sections: [
      {
        id: 'dsi3-intro',
        type: 'text' as const,
        content: `# 📊 Descriptive Statistics Basics

**Part 3 of 7 — Describing a Distribution (Shape, Center, Spread)**

---

> 🔑 **The Habit:** Whenever you see a distribution of quantitative data, describe it with **SOCS**: **S**hape, **O**utliers, **C**enter, **S**pread — always in **context**.`,
      },
      {
        id: 'dsi3-shape',
        type: 'text' as const,
        content: `## Shape

**Shape** describes the overall form of the distribution.

| Shape | Looks like | Key feature |
|-------|-----------|-------------|
| **Symmetric** | mirror image on both sides | left half ≈ right half |
| **Skewed right** | long tail toward **high** values | tail points right (→) |
| **Skewed left** | long tail toward **low** values | tail points left (←) |

We also count **peaks**: one peak = **unimodal**, two peaks = **bimodal**.

> ⚠️ **Name the skew by its tail, not its hump.** A *right*-skewed distribution has its long thin tail on the **right** (large values), with most data bunched on the left. Income is the classic example: most people earn modest amounts, a few earn enormous amounts → skewed right.`,
      },
      {
        id: 'dsi3-shape-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Household incomes have many modest values and a few very large values stretching far to the right. This distribution is:',
              options: ['Skewed right', 'Skewed left', 'Symmetric', 'Uniform'],
              correctAnswer: 0,
              explanation: 'The long tail of large values points to the right, so it is skewed right. Skew is named for the direction of the tail.',
            },
            {
              question: 'On a very easy exam most students score near 100, with a thin tail of low scores trailing toward 0. The shape is:',
              options: ['Skewed left', 'Skewed right', 'Symmetric', 'Bimodal'],
              correctAnswer: 0,
              explanation: 'The long tail points toward the low (left) values, so the distribution is skewed left, even though the peak is on the high end.',
            },
          ],
        },
      },
      {
        id: 'dsi3-center-spread',
        type: 'text' as const,
        content: `## Outliers, Center, and Spread

- **Outliers** — individual values that fall far from the rest of the data. Always mention if any appear (Part 6 gives a formal rule).
- **Center** — a single value that's "typical." We'll use the **mean** and the **median** (Part 4).
- **Spread** — how *variable* the data are. We'll use the **range**, **IQR**, and **standard deviation** (Parts 5–6).

> 💡 A complete description names all four and ties them to context. For example: *"The exam scores are roughly symmetric and unimodal, centered near 78 points, spread from about 55 to 95, with no obvious outliers."*`,
      },
      {
        id: 'dsi3-socs-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the SOCS Feature** 🔽

Match each phrase to the part of a distribution it describes.`,
        exercise: {
          dropdowns: [
            { label: '"centered around 50 points"', options: ['Shape', 'Center', 'Spread', 'Outlier'] },
            { label: '"a single value at 200, far above the rest"', options: ['Shape', 'Center', 'Spread', 'Outlier'] },
            { label: '"roughly symmetric and unimodal"', options: ['Shape', 'Center', 'Spread', 'Outlier'] },
            { label: '"ranges from 10 to 90"', options: ['Shape', 'Center', 'Spread', 'Outlier'] },
          ],
          correctAnswers: ['Center', 'Outlier', 'Shape', 'Spread'],
          hint1: '"Centered around" names a typical value → Center.',
          hint2: 'A lone value "far above the rest" is an Outlier; "symmetric and unimodal" describes Shape.',
          hint3: '"Ranges from … to …" tells how stretched out the data are → Spread.',
          explanation: 'Center = typical value, Outlier = lone extreme value, Shape = form/symmetry, Spread = how variable the data are. Together they are SOCS.',
        },
      },
      {
        id: 'dsi3-skew-text',
        type: 'text' as const,
        content: `## A Shortcut: Comparing Mean and Median

You can often guess the **shape** without a picture by comparing the mean and the median (we'll prove why in Part 4):

| Relationship | Likely shape |
|--------------|--------------|
| mean $\\approx$ median | roughly symmetric |
| mean $>$ median | skewed **right** |
| mean $<$ median | skewed **left** |

The non-resistant mean gets dragged toward the long tail, so whichever side the mean lands on points to the skew. Try it on the check below.`,
      },
      {
        id: 'dsi3-skew-input',
        type: 'input-boxes' as const,
        content: `**Skew & Center** 🧮

For a distribution, the **mean** is $62$ and the **median** is $50$.

**1)** Is the mean larger or smaller than the median here? *(type "larger" or "smaller")*
**2)** What direction is the skew? *(type "right" or "left")*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['larger', 'right'],
          hint1: 'Compare the two numbers: $62$ versus $50$.',
          hint2: 'The mean ($62$) is larger than the median ($50$).',
          hint3: 'A larger mean means the mean is pulled toward a high tail → skewed right.',
          explanation: 'The mean ($62$) is larger than the median ($50$). Since the mean is pulled toward the high tail, the distribution is skewed right.',
        },
      },
      {
        id: 'dsi3-wrap',
        type: 'text' as const,
        content: `## Putting It Together

A good written description hits every letter of **SOCS** *and* stays in context:

> "The 5K finishing times are **skewed right** (S) with one possible **outlier** near 45 minutes (O), **centered** around 28 minutes (C), and **spread** from about 22 to 45 minutes (S)."

Next we make "center" precise with the two workhorses of statistics: the **mean** and the **median**.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'ap-stats-descriptive-statistics-intro',
    sections: [
      {
        id: 'dsi4-intro',
        type: 'text' as const,
        content: `# 📊 Descriptive Statistics Basics

**Part 4 of 7 — Measures of Center: Mean & Median**

---

> 🔑 **Two Ideas of "Typical":** The **mean** balances the data like a seesaw; the **median** splits the data into two equal halves. They agree when data are symmetric and disagree when data are skewed.`,
      },
      {
        id: 'dsi4-mean',
        type: 'text' as const,
        content: `## The Mean

The **mean** (average) adds all the values and divides by how many there are:

$$\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n} = \\frac{\\sum x_i}{n}$$

We write $\\bar{x}$ ("x-bar") for the mean of a **sample** and $\\mu$ ("mu") for the mean of a **population**.

### Example: quiz scores $7, 8, 8, 9, 10$

$$\\bar{x} = \\frac{7 + 8 + 8 + 9 + 10}{5} = \\frac{42}{5} = 8.4$$

> 💡 The mean is the **balance point** of the dotplot — the spot where the data would balance on a fulcrum. That's why every value, even an extreme one, tugs on it.`,
      },
      {
        id: 'dsi4-mean-input',
        type: 'input-boxes' as const,
        content: `**Compute the Mean** 🧮

Find the mean of each data set.

**1)** $4, 4, 6, 8, 8$
**2)** $80, 85, 90, 90, 95, 100$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '90'],
          hint1: 'Add all the values, then divide by the count $n$.',
          hint2: '$4+4+6+8+8 = 30$, and $n = 5$, so $30/5 = 6$.',
          hint3: '$80+85+90+90+95+100 = 540$, and $n = 6$, so $540/6 = 90$.',
          explanation: '1) $30/5 = 6$.  2) $540/6 = 90$. The mean is the sum divided by the number of values.',
        },
      },
      {
        id: 'dsi4-median',
        type: 'text' as const,
        content: `## The Median

The **median** is the *middle* value when the data are placed in **order**.

1. Sort the data from least to greatest.
2. If $n$ is **odd**, the median is the single middle value.
3. If $n$ is **even**, the median is the **average of the two middle values**.

### Odd $n$: $3, 5, 7, 9, 11, 13, 15$

There are $7$ values; the $4$th is the middle → median $= 9$.

### Even $n$: $4, 8, 11, 12, 14, 15, 18, 20, 22, 25$

There are $10$ values; the two middle ones are the $5$th and $6$th, $14$ and $15$:

$$\\text{median} = \\frac{14 + 15}{2} = 14.5$$

> ⚠️ **Always sort first.** Finding the "middle" of an unsorted list gives the wrong answer.`,
      },
      {
        id: 'dsi4-median-input',
        type: 'input-boxes' as const,
        content: `**Find the Median** 🧮

Sort first, then find the median.

**1)** $12, 3, 7, 9, 5$
**2)** $20, 14, 6, 10$  *(even count — average the two middle values)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['7', '12'],
          hint1: 'Sort each list from least to greatest before locating the middle.',
          hint2: 'Set 1 sorts to $3, 5, 7, 9, 12$. With $5$ values, the $3$rd is the median.',
          hint3: 'Set 2 sorts to $6, 10, 14, 20$. Average the two middle values: $(10+14)/2$.',
          explanation: '1) Sorted $3,5,7,9,12$ → median $7$.  2) Sorted $6,10,14,20$ → $(10+14)/2 = 12$.',
        },
      },
      {
        id: 'dsi4-resistance',
        type: 'text' as const,
        content: `## Mean vs. Median: Resistance

A statistic is **resistant** if extreme values barely move it. The **median is resistant**; the **mean is not**.

### Example: a typo turns $4$ into $88$

Compare $2, 3, 3, 4, 4$ with $2, 3, 3, 4, 88$:

| Data | Median | Mean |
|------|--------|------|
| $2, 3, 3, 4, 4$ | $3$ | $3.2$ |
| $2, 3, 3, 4, 88$ | $3$ | $20$ |

The single outlier left the **median unchanged at $3$** but blew the **mean up to $20$**.

> 🔑 **Rule of thumb for skewed data:** the mean is pulled **toward the tail**. In a *right*-skewed distribution, $\\text{mean} > \\text{median}$; in a *left*-skewed one, $\\text{mean} < \\text{median}$; when symmetric, they're about equal.`,
      },
      {
        id: 'dsi4-resist-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A data set is strongly **skewed right**. How do its mean and median compare?',
              options: ['Mean > median', 'Mean < median', 'Mean = median', 'Cannot be determined'],
              correctAnswer: 0,
              explanation: 'The long right tail pulls the (non-resistant) mean toward the high values, so mean > median in a right-skewed distribution.',
            },
            {
              question: 'Which measure of center is **resistant** to outliers and is preferred for skewed data?',
              options: ['Median', 'Mean', 'Range', 'Standard deviation'],
              correctAnswer: 0,
              explanation: 'The median depends only on the middle position, so a single extreme value barely affects it. That resistance makes it the better center for skewed data.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'ap-stats-descriptive-statistics-intro',
    sections: [
      {
        id: 'dsi5-intro',
        type: 'text' as const,
        content: `# 📊 Descriptive Statistics Basics

**Part 5 of 7 — Measures of Spread: Range & Standard Deviation**

---

> 🔑 **Center isn't enough.** Two classes can both average $80$, yet one has every score near $80$ while the other swings from $50$ to $100$. **Spread** captures that difference.`,
      },
      {
        id: 'dsi5-range',
        type: 'text' as const,
        content: `## The Range

The **range** is the simplest measure of spread:

$$\\text{range} = \\text{maximum} - \\text{minimum}$$

For $3, 5, 7, 9, 15$ the range is $15 - 3 = 12$.

> ⚠️ The range is a *single number*, not an interval — say "the range is $12$," not "the range is $3$ to $15$." And because it uses only the two extremes, **one outlier can dominate it**, so it's a crude measure on its own.`,
      },
      {
        id: 'dsi5-range-input',
        type: 'input-boxes' as const,
        content: `**Compute the Range** 🧮

**1)** $14, 9, 22, 7, 18$ — what is the range?
**2)** A data set has minimum $12$ and maximum $47$. What is its range?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['15', '35'],
          hint1: 'Range $=$ maximum $-$ minimum.',
          hint2: 'In set 1 the max is $22$ and the min is $7$.',
          hint3: '$22 - 7 = 15$; and $47 - 12 = 35$.',
          explanation: '1) $22 - 7 = 15$.  2) $47 - 12 = 35$. The range is always max minus min, a single number.',
        },
      },
      {
        id: 'dsi5-sd-concept',
        type: 'text' as const,
        content: `## Standard Deviation: Typical Distance from the Mean

The **standard deviation** measures how far, *on average*, the values sit from the mean. The **sample** standard deviation is

$$s_x = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$$

Read it inside-out:

1. Find each **deviation** $x_i - \\bar{x}$ (how far each value is from the mean).
2. **Square** each deviation (so negatives don't cancel positives).
3. **Average** the squared deviations — dividing by $n-1$ for a sample. This average is the **variance** $s_x^2$.
4. **Square root** to return to the original units.

> 💡 Larger $s_x$ ⇒ more spread out. And $s_x = 0$ only when **every** value is identical (no spread at all). Standard deviation is never negative.`,
      },
      {
        id: 'dsi5-sd-worked',
        type: 'text' as const,
        content: `## Worked Example: the Sample SD of $5, 7, 9$

**Step 1 — mean:** $\\bar{x} = \\dfrac{5+7+9}{3} = 7$.

**Step 2 — deviations and their squares:**

| $x_i$ | $x_i - \\bar{x}$ | $(x_i - \\bar{x})^2$ |
|-------|------------------|----------------------|
| $5$ | $-2$ | $4$ |
| $7$ | $0$ | $0$ |
| $9$ | $2$ | $4$ |

**Step 3 — sum of squares:** $4 + 0 + 4 = 8$.

**Step 4 — variance** (divide by $n - 1 = 2$): $\\;s_x^2 = \\dfrac{8}{2} = 4$.

**Step 5 — standard deviation:** $\\;s_x = \\sqrt{4} = 2$.

> 🔑 The deviations **always sum to zero** ($-2 + 0 + 2 = 0$). That's exactly why we square them — otherwise the spread would always look like nothing.`,
      },
      {
        id: 'dsi5-sd-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Standard Deviation** 🔽

You're computing the **sample** standard deviation of $2, 4, 4, 4, 5, 5, 7, 9$ (its mean is $5$). Fill in each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Sum of the squared deviations:', options: ['$32$', '$40$', '$16$', '$8$'] },
            { label: 'Divide by $n-1 = 7$ to get the variance:', options: ['$\\approx 4.57$', '$4$', '$32$', '$2$'] },
            { label: 'Take the square root for $s_x$:', options: ['$\\approx 2.14$', '$2$', '$4.57$', '$32$'] },
          ],
          correctAnswers: ['$32$', '$\\approx 4.57$', '$\\approx 2.14$'],
          hint1: 'Deviations from $5$ are $-3,-1,-1,-1,0,0,2,4$; square and add them: $9+1+1+1+0+0+4+16$.',
          hint2: 'That sum is $32$. The sample variance divides by $n - 1 = 7$: $32/7 \\approx 4.57$.',
          hint3: 'Standard deviation is the square root of the variance: $\\sqrt{4.57} \\approx 2.14$.',
          explanation: 'Sum of squared deviations $= 32$; sample variance $= 32/7 \\approx 4.57$; $s_x = \\sqrt{4.57} \\approx 2.14$. (Dividing by $n=8$ instead would give the population SD of exactly $2$.)',
        },
      },
      {
        id: 'dsi5-compare-text',
        type: 'text' as const,
        content: `## Comparing Standard Deviations

You rarely need to compute $s_x$ by hand on the AP exam — a calculator does it. What matters is **reasoning** about it:

- More spread (values far from the mean) ⇒ **larger** $s_x$.
- All values equal ⇒ $s_x = 0$ (no spread).
- Like the mean, $s_x$ is **not resistant** — one outlier can inflate it a lot, which is why we pair it with the mean only for roughly symmetric data.

> 💡 **Population vs. sample:** divide by $n$ for the population SD ($\\sigma$) and by $n - 1$ for the sample SD ($s_x$). The $n-1$ keeps the sample estimate from systematically running too small.`,
      },
      {
        id: 'dsi5-sd-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Class A scores are $78, 80, 82$; Class B scores are $60, 80, 100$. Both have mean $80$. Which has the larger standard deviation?',
              options: ['Class B', 'Class A', 'They are equal', 'Cannot be determined'],
              correctAnswer: 0,
              explanation: 'Class B\'s values sit much farther from the mean of 80, so its typical deviation — and thus its standard deviation — is larger, even though both means are 80.',
            },
            {
              question: 'A data set has standard deviation $s_x = 0$. What must be true?',
              options: ['Every value is identical', 'The mean is 0', 'The data are skewed', 'There is exactly one outlier'],
              correctAnswer: 0,
              explanation: 'Standard deviation is 0 only when there is no spread at all, which happens precisely when every value equals the mean — i.e., all values are identical.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'ap-stats-descriptive-statistics-intro',
    sections: [
      {
        id: 'dsi6-intro',
        type: 'text' as const,
        content: `# 📊 Descriptive Statistics Basics

**Part 6 of 7 — Five-Number Summary, Boxplots & Outliers**

---

> 🔑 **The Resistant Toolkit:** The **five-number summary** and the **IQR** describe center and spread using *positions*, so outliers can't distort them — perfect partners for skewed data.`,
      },
      {
        id: 'dsi6-five-num',
        type: 'text' as const,
        content: `## The Five-Number Summary

Five values summarize any quantitative distribution:

$$\\text{Min} \\;\\le\\; Q_1 \\;\\le\\; \\text{Median} \\;\\le\\; Q_3 \\;\\le\\; \\text{Max}$$

- **$Q_1$ (first quartile)** = median of the **lower half** of the data (the 25th percentile).
- **Median ($Q_2$)** = the middle value (the 50th percentile).
- **$Q_3$ (third quartile)** = median of the **upper half** (the 75th percentile).

When $n$ is **odd**, the overall median is *not* included in either half.

### Example: $3, 5, 7, 9, 11, 13, 15$

- Median = $9$ (the middle value).
- Lower half $3, 5, 7$ → $Q_1 = 5$.
- Upper half $11, 13, 15$ → $Q_3 = 13$.

So the five-number summary is $3,\\ 5,\\ 9,\\ 13,\\ 15$.`,
      },
      {
        id: 'dsi6-iqr',
        type: 'text' as const,
        content: `## The IQR

The **interquartile range** measures the spread of the **middle 50%** of the data:

$$\\text{IQR} = Q_3 - Q_1$$

For the set above, $\\text{IQR} = 13 - 5 = 8$.

> 💡 The IQR is **resistant** to outliers because it ignores the extreme 25% on each end. Use the **median + IQR** to summarize skewed data, and the **mean + standard deviation** for roughly symmetric data with no outliers.`,
      },
      {
        id: 'dsi6-iqr-input',
        type: 'input-boxes' as const,
        content: `**Quartiles & IQR** 🧮

Use the ordered data set $4, 6, 8, 10, 12, 14, 16, 18$ (that's $8$ values).

**1)** Find $Q_1$ (median of the lower four values $4, 6, 8, 10$).
**2)** Find $Q_3$ (median of the upper four values $12, 14, 16, 18$).
**3)** Find the IQR.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '15', '8'],
          hint1: 'With $8$ values, the lower half is the first four and the upper half is the last four.',
          hint2: 'Lower half $4,6,8,10$: average the two middle values, $(6+8)/2 = 7$. Upper half similarly gives $(14+16)/2 = 15$.',
          hint3: 'IQR $= Q_3 - Q_1 = 15 - 7$.',
          explanation: '$Q_1 = (6+8)/2 = 7$, $Q_3 = (14+16)/2 = 15$, so IQR $= 15 - 7 = 8$.',
        },
      },
      {
        id: 'dsi6-boxplot',
        type: 'text' as const,
        content: `## Boxplots

A **boxplot** draws the five-number summary:

- A **box** spans from $Q_1$ to $Q_3$ (its width = the IQR), with a line at the **median**.
- **Whiskers** extend to the smallest and largest values that are *not* outliers.
- Outliers are plotted as separate **points** beyond the whiskers.

Boxplots are ideal for **comparing** two or more groups side by side — you can line up their medians, boxes, and spreads at a glance.

> ⚠️ A boxplot hides **shape detail** like multiple peaks. A symmetric and a bimodal data set can produce nearly identical boxplots, so use a histogram or dotplot when shape matters.`,
      },
      {
        id: 'dsi6-boxplot-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a boxplot, the **length of the box** itself represents:',
              options: ['The IQR', 'The range', 'The standard deviation', 'The mean'],
              correctAnswer: 0,
              explanation: 'The box runs from $Q_1$ to $Q_3$, so its length is $Q_3 - Q_1 =$ the IQR — the spread of the middle 50% of the data.',
            },
            {
              question: 'Which task is a boxplot **best** suited for?',
              options: ['Comparing the centers and spreads of several groups side by side', 'Showing the exact value of every data point', 'Revealing whether a distribution is bimodal', 'Displaying a categorical variable'],
              correctAnswer: 0,
              explanation: 'Side-by-side boxplots make it easy to compare medians, boxes, and spreads across groups. They cannot reveal exact values or multiple peaks, and they are for quantitative data only.',
            },
          ],
        },
      },
      {
        id: 'dsi6-outlier-rule',
        type: 'text' as const,
        content: `## The $1.5 \\times \\text{IQR}$ Outlier Rule

A value is a (mild) **outlier** if it falls outside these **fences**:

$$\\text{Lower fence} = Q_1 - 1.5 \\times \\text{IQR}, \\qquad \\text{Upper fence} = Q_3 + 1.5 \\times \\text{IQR}$$

### Example: $10, 12, 14, 15, 16, 18, 40$

The quartiles are $Q_1 = 12$ and $Q_3 = 18$, so $\\text{IQR} = 6$ and $1.5 \\times 6 = 9$.

$$\\text{Upper fence} = 18 + 9 = 27, \\qquad \\text{Lower fence} = 12 - 9 = 3$$

Since $40 > 27$, the value $\\mathbf{40}$ is an **outlier**. ✓

> 🔑 "$1.5 \\times \\text{IQR}$" is the standard AP rule for flagging outliers — memorize the fences.`,
      },
      {
        id: 'dsi6-outlier-dropdown',
        type: 'dropdown-select' as const,
        content: `**Apply the Outlier Rule** 🔽

A data set has $Q_1 = 20$ and $Q_3 = 32$. Work through the $1.5 \\times \\text{IQR}$ rule.`,
        exercise: {
          dropdowns: [
            { label: 'IQR $= Q_3 - Q_1 =$', options: ['$12$', '$52$', '$6$', '$18$'] },
            { label: 'Upper fence $= Q_3 + 1.5\\,\\text{IQR} =$', options: ['$50$', '$44$', '$38$', '$32$'] },
            { label: 'Is a value of $46$ an outlier?', options: ['No — it is below the upper fence', 'Yes — it is above the upper fence', 'Yes — it is below the lower fence', 'Cannot tell'] },
          ],
          correctAnswers: ['$12$', '$50$', 'No — it is below the upper fence'],
          hint1: 'IQR $= 32 - 20 = 12$.',
          hint2: '$1.5 \\times 12 = 18$, so the upper fence is $32 + 18 = 50$.',
          hint3: 'Compare $46$ to the upper fence $50$: since $46 < 50$, it is **not** an outlier.',
          explanation: 'IQR $= 12$; upper fence $= 32 + 1.5(12) = 32 + 18 = 50$. Because $46 < 50$ (and well above the lower fence $20 - 18 = 2$), $46$ is not an outlier.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'ap-stats-descriptive-statistics-intro',
    sections: [
      {
        id: 'dsi7-intro',
        type: 'text' as const,
        content: `# 📊 Descriptive Statistics Basics

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) classify variables, (2) display distributions, (3) describe them with SOCS, (4) measure center with mean and median, (5) measure spread with range and standard deviation, and (6) build a five-number summary, boxplot, and flag outliers. Let's pull it together.`,
      },
      {
        id: 'dsi7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Tool | Formula / rule |
|------|------|----------------|
| Classify a variable | type | label → categorical; measured amount → quantitative |
| Center (symmetric) | mean | $\\bar{x} = \\dfrac{\\sum x_i}{n}$ |
| Center (skewed / outliers) | median | middle value (resistant) |
| Spread (symmetric) | standard deviation | $s_x = \\sqrt{\\dfrac{\\sum (x_i-\\bar{x})^2}{n-1}}$ |
| Spread (skewed / outliers) | IQR | $Q_3 - Q_1$ (resistant) |
| Flag an outlier | $1.5 \\times \\text{IQR}$ | outside $Q_1 - 1.5\\,\\text{IQR}$ or $Q_3 + 1.5\\,\\text{IQR}$ |

> 🔑 **The pairing principle:** report **mean + SD** for roughly symmetric data, and **median + IQR** for skewed data or data with outliers. Match the resistance of your statistics to the shape of your data.`,
      },
      {
        id: 'dsi7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Use the ordered data set $2, 4, 4, 6, 9$ for all three parts.

**1)** Find the mean.
**2)** Find the median.
**3)** Find the range.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '4', '7'],
          hint1: 'Mean $=$ sum $\\div n$; the sum is $2+4+4+6+9 = 25$ with $n = 5$.',
          hint2: 'Median is the $3$rd value of the $5$ ordered numbers.',
          hint3: 'Range $=$ max $-$ min $= 9 - 2$.',
          explanation: 'Mean $= 25/5 = 5$; median $= 4$ (the middle value); range $= 9 - 2 = 7$. Notice the mean ($5$) exceeds the median ($4$), hinting at slight right skew from the value $9$.',
        },
      },
      {
        id: 'dsi7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A real-estate report should summarize home prices, which are strongly skewed right with a few mansions. Which pair of statistics is most appropriate?',
              options: ['Median and IQR', 'Mean and standard deviation', 'Mean and range', 'Mode and range'],
              correctAnswer: 0,
              explanation: 'Skewed data with extreme high values call for resistant statistics: the median for center and the IQR for spread, since the mean and SD would be inflated by the mansions.',
            },
            {
              question: 'For the data $5, 8, 11, 14, 17$, the standard deviation is closest to:',
              options: ['$4.7$', '$0$', '$12$', '$60$'],
              correctAnswer: 0,
              explanation: 'The mean is $11$; squared deviations are $36, 9, 0, 9, 36$ summing to $90$, so the sample variance is $90/4 = 22.5$ and $s_x = \\sqrt{22.5} \\approx 4.7$.',
            },
          ],
        },
      },
      {
        id: 'dsi7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which variable is **quantitative**?',
              options: ['Daily high temperature (°F)', 'Phone area code', 'Favorite sport', 'Letter grade (A, B, C)'],
              correctAnswer: 0,
              explanation: 'Temperature is a measured numeric amount you can average, so it is quantitative. Area code is a label, and favorite sport and letter grade are categorical.',
            },
            {
              question: 'For the data $6, 7, 8, 9, 30$, why is the **median** a better measure of center than the mean?',
              options: ['The 30 is an outlier that inflates the mean but barely moves the median', 'The mean cannot be computed for this data', 'The median is always larger than the mean', 'There are exactly five values'],
              correctAnswer: 0,
              explanation: 'The value 30 is an outlier. It pulls the (non-resistant) mean up to 12, while the resistant median stays at 8 — a far more typical value.',
            },
            {
              question: 'A data set has $Q_1 = 30$, $Q_3 = 50$. By the $1.5 \\times \\text{IQR}$ rule, the upper fence for outliers is:',
              options: ['$80$', '$70$', '$50$', '$100$'],
              correctAnswer: 0,
              explanation: 'IQR $= 50 - 30 = 20$, so the upper fence is $Q_3 + 1.5(20) = 50 + 30 = 80$. Any value above 80 would be flagged as an outlier.',
            },
          ],
        },
      },
    ],
  },
]
